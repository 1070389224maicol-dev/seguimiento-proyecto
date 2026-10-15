const proyectos = require('../data/proyectos');
const entregasData = require('../data/entregas');

const NOTA_MINIMA = 0;
const NOTA_MAXIMA = 5;

function listar(req, res) {
  res.json(entregasData.obtenerTodos());
}

// GET /proyectos/:id/entregas
function listarPorProyecto(req, res) {
  const proyectoId = Number(req.params.id);
  if (!proyectos.obtenerPorId(proyectoId)) {
    return res.status(404).json({ error: 'El proyecto no existe' });
  }
  res.json(entregasData.obtenerTodos().filter(e => e.proyectoId === proyectoId));
}

// POST /entregas — registra una entrega de un proyecto que debe existir
function crear(req, res) {
  const { proyectoId, descripcion } = req.body;
  if (proyectoId === undefined || proyectoId === null || proyectoId === '' ||
      typeof descripcion !== 'string' || descripcion.trim() === '') {
    return res.status(400).json({ error: 'proyectoId y descripcion son obligatorios' });
  }

  const proyecto = proyectos.obtenerPorId(Number(proyectoId));
  if (!proyecto) return res.status(404).json({ error: 'El proyecto no existe' });

  const nueva = entregasData.crear({
    proyectoId: proyecto.id,
    descripcion: descripcion.trim(),
    fechaEntrega: new Date().toISOString(),
    calificacion: null
  });
  res.status(201).json(nueva);
}

// PUT /entregas/:id/calificar — nota entre 0.0 y 5.0 (se puede recalificar)
function calificar(req, res) {
  const id = Number(req.params.id);
  const entrega = entregasData.obtenerPorId(id);
  if (!entrega) return res.status(404).json({ error: 'La entrega no existe' });

  const bruta = req.body.calificacion;
  const nota = Number(bruta);
  if (bruta === undefined || bruta === null || bruta === '' || Number.isNaN(nota)) {
    return res.status(400).json({ error: 'calificacion es obligatoria y debe ser un número' });
  }
  if (nota < NOTA_MINIMA || nota > NOTA_MAXIMA) {
    return res.status(400).json({ error: 'La calificación debe estar entre ' + NOTA_MINIMA + ' y ' + NOTA_MAXIMA });
  }

  res.json(entregasData.actualizar(id, { calificacion: nota }));
}

// GET /proyectos/:id/promedio — regla de negocio relacional
function promedioPorProyecto(req, res) {
  const proyectoId = Number(req.params.id);
  if (!proyectos.obtenerPorId(proyectoId)) {
    return res.status(404).json({ error: 'El proyecto no existe' });
  }

  const entregas = entregasData.obtenerTodos()
    .filter(e => e.proyectoId === proyectoId && e.calificacion != null);

  if (entregas.length === 0) {
    return res.json({ promedio: null, mensaje: 'Aún no hay entregas calificadas' });
  }

  const suma = entregas.reduce((acc, e) => acc + e.calificacion, 0);
  res.json({
    promedio: Number((suma / entregas.length).toFixed(2)),
    entregasCalificadas: entregas.length
  });
}

module.exports = { listar, listarPorProyecto, crear, calificar, promedioPorProyecto };
