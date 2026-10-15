const proyectos = require('../data/proyectos');

function fechaValida(texto) {
  return typeof texto === 'string' && !isNaN(Date.parse(texto));
}

function listar(req, res) {
  res.json(proyectos.obtenerTodos());
}

function obtener(req, res) {
  const proyecto = proyectos.obtenerPorId(Number(req.params.id));
  if (!proyecto) return res.status(404).json({ error: 'El proyecto no existe' });
  res.json(proyecto);
}

function crear(req, res) {
  const { nombre, equipo, fechaLimite } = req.body;
  if (!nombre || !equipo || !fechaLimite) {
    return res.status(400).json({ error: 'nombre, equipo y fechaLimite son obligatorios' });
  }
  if (!fechaValida(fechaLimite)) {
    return res.status(400).json({ error: 'fechaLimite no es una fecha válida (use AAAA-MM-DD)' });
  }
  const nuevo = proyectos.crear({ nombre, equipo, fechaLimite });
  res.status(201).json(nuevo);
}

function actualizar(req, res) {
  const id = Number(req.params.id);
  const { nombre, equipo, fechaLimite } = req.body;
  if (fechaLimite !== undefined && !fechaValida(fechaLimite)) {
    return res.status(400).json({ error: 'fechaLimite no es una fecha válida (use AAAA-MM-DD)' });
  }
  if (nombre === '' || equipo === '') {
    return res.status(400).json({ error: 'nombre y equipo no pueden estar vacíos' });
  }
  const actualizado = proyectos.actualizar(id, { nombre, equipo, fechaLimite });
  if (!actualizado) return res.status(404).json({ error: 'El proyecto no existe' });
  res.json(actualizado);
}

function eliminar(req, res) {
  const ok = proyectos.eliminar(Number(req.params.id));
  if (!ok) return res.status(404).json({ error: 'El proyecto no existe' });
  res.status(204).send();
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
