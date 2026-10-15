const { leerDB, guardarDB } = require('./store');

function obtenerTodos() {
  return leerDB().entregas;
}

function obtenerPorId(id) {
  return leerDB().entregas.find(e => e.id === id);
}

function crear(datos) {
  const db = leerDB();
  const nuevoId = db.entregas.length ? Math.max(...db.entregas.map(e => e.id)) + 1 : 1;
  const nueva = {
    id: nuevoId,
    proyectoId: datos.proyectoId,
    descripcion: datos.descripcion,
    fechaEntrega: datos.fechaEntrega,
    calificacion: datos.calificacion
  };
  db.entregas.push(nueva);
  guardarDB(db);
  return nueva;
}

function actualizar(id, cambios) {
  const db = leerDB();
  const entrega = db.entregas.find(e => e.id === id);
  if (!entrega) return null;
  // Solo se puede cambiar la calificación (el id y el proyectoId nunca cambian)
  if (cambios.calificacion !== undefined) entrega.calificacion = cambios.calificacion;
  guardarDB(db);
  return entrega;
}

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar };
