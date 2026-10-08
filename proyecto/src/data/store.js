const fs = require('fs');
const path = require('path');

const RUTA_DB = path.join(__dirname, 'db.json');

// Lee el archivo db.json. Si no existe, lo crea con las dos colecciones vacías.
function leerDB() {
  if (!fs.existsSync(RUTA_DB)) {
    fs.writeFileSync(RUTA_DB, JSON.stringify({ proyectos: [], entregas: [] }, null, 2));
  }
  const contenido = fs.readFileSync(RUTA_DB, 'utf-8');
  return JSON.parse(contenido);
}

// Escribe el objeto completo de vuelta al archivo.
function guardarDB(db) {
  fs.writeFileSync(RUTA_DB, JSON.stringify(db, null, 2));
}

module.exports = { leerDB, guardarDB, RUTA_DB };
