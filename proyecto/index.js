const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Sprint 1 (semana 2): entidad principal
app.use('/proyectos', require('./src/routes/proyectos'));

// Sprint 2 (semana 3): entidad relacionada (se activa cuando esté lista)
// app.use('/entregas', require('./src/routes/entregas'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
