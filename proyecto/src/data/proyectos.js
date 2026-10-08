const { leerDB, guardarDB } = require('./store');

function obtenerTodos() {
  return leerDB().proyectos;
}

function obtenerPorId(id) {
  return leerDB().proyectos.find(p => p.id === id);
}

function crear(datos) {
  const db = leerDB();
  const nuevoId = db.proyectos.length ? Math.max(...db.proyectos.map(p => p.id)) + 1 : 1;
  const nuevo = {
    id: nuevoId,
    nombre: datos.nombre,
    equipo: datos.equipo,
    fechaLimite: datos.fechaLimite
  };
  db.proyectos.push(nuevo);
  guardarDB(db);
  return nuevo;
}

function actualizar(id, cambios) {
  const db = leerDB();
  const proyecto = db.proyectos.find(p => p.id === id);
  if (!proyecto) return null;
  // Solo se pueden editar estos campos (el id nunca cambia)
  ['nombre', 'equipo', 'fechaLimite'].forEach(campo => {
    if (cambios[campo] !== undefined) proyecto[campo] = cambios[campo];
  });
  guardarDB(db);
  return proyecto;
}

// Al eliminar un proyecto se eliminan también sus entregas (borrado en cascada),
// para no dejar entregas "huérfanas" apuntando a un proyecto que ya no existe.
function eliminar(id) {
  const db = leerDB();
  const indice = db.proyectos.findIndex(p => p.id === id);
  if (indice === -1) return false;
  db.proyectos.splice(indice, 1);
  db.entregas = db.entregas.filter(e => e.proyectoId !== id);
  guardarDB(db);
  return true;
}

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };
