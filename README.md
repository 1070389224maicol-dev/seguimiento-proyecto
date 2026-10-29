# Seguimiento de proyectos de curso (Caso 3)

Proyecto integrador de **Programación Aplicada III**.

**Integrantes:** [Michael Montoya], [Jairo Nieto], [Juan Henao], [yaritza gutierrez]

**URL pública (Render):** [pegar aquí el enlace de Render]

## Estado actual
- [x] Semana 1: análisis, planeación y diseño (`requisitos.md`, `planeacion.md`, `diseño.md`)
- [x] Semana 2 (Sprint 1): entidad **Proyecto** con CRUD y persistencia en archivo
- [x] Semana 3 (Sprint 2): entidad **Entrega**, calificación y promedio
- [x] Semana 4 (Sprint 3): interfaz web (`public/index.html`)
- [ ] Semana 4 (Sprint 3): pruebas documentadas en `pruebas.md` y despliegue en Render

## Entidades
- **Proyecto:** id, nombre, equipo, fechaLimite.
- **Entrega:** id, proyectoId, descripcion, fechaEntrega, calificacion. Un proyecto tiene muchas entregas; cada entrega pertenece a un proyecto.

## Cómo ejecutar
```bash
npm install
npm start
```
El servidor queda en `http://localhost:3000`.

## Rutas de la API
| Método | Ruta | Qué hace |
|---|---|---|
| GET | /proyectos | Lista los proyectos |
| GET | /proyectos/:id | Consulta un proyecto |
| POST | /proyectos | Crea un proyecto |
| PUT | /proyectos/:id | Edita un proyecto |
| DELETE | /proyectos/:id | Elimina un proyecto y sus entregas (204) |
| GET | /proyectos/:id/entregas | Lista las entregas de un proyecto |
| GET | /proyectos/:id/promedio | Promedio de las entregas calificadas |
| GET | /entregas | Lista todas las entregas |
| POST | /entregas | Registra una entrega (valida que el proyecto exista) |
| PUT | /entregas/:id/calificar | Califica una entrega (nota de 0 a 5) |

Ejemplos de cuerpo:
```json
POST /proyectos            { "nombre": "App móvil", "equipo": "Equipo A", "fechaLimite": "2026-11-30" }
POST /entregas             { "proyectoId": 1, "descripcion": "Prototipo inicial" }
PUT  /entregas/1/calificar { "calificacion": 4.5 }
```

La tabla completa, con los códigos de respuesta, está en `diseño.md`.

## Cómo probar la interfaz web
1. Abran la URL pública (o `http://localhost:3000` si lo ejecutan localmente).
2. Creen un proyecto con **Nuevo proyecto**.
3. Registren una entrega con **Registrar entrega** y califíquenla con **Calificar entrega**.
4. La lista muestra las entregas y el promedio de cada proyecto, y se actualiza sola después de cada acción. Los errores de la API (por ejemplo, una nota fuera de 0 a 5) aparecen en pantalla.

## Cómo probar la API directamente
Reemplacen `URL` por la dirección del servidor (por ejemplo `http://localhost:3000`).
```bash
curl -X POST URL/proyectos -H "Content-Type: application/json" \
  -d '{"nombre":"Tienda web","equipo":"Equipo A","fechaLimite":"2026-11-30"}'
curl -X POST URL/entregas -H "Content-Type: application/json" \
  -d '{"proyectoId":1,"descripcion":"Prototipo inicial"}'
curl -X PUT URL/entregas/1/calificar -H "Content-Type: application/json" \
  -d '{"calificacion":4.5}'
curl URL/proyectos/1/promedio
```
Los casos de prueba completos están en [`pruebas.md`](pruebas.md).

## Despliegue en Render
1. Subir el código a GitHub (incluida la carpeta `public`).
2. En Render, crear un **Web Service** conectado al repositorio.
3. **Build Command:** `npm install` · **Start Command:** `node index.js`.
4. El código ya lee el puerto desde `process.env.PORT`.

## Nota sobre persistencia
Los datos se guardan en `src/data/db.json`. En Render (plan gratuito) este archivo puede reiniciarse tras un periodo de inactividad; es una limitación conocida de este nivel del proyecto.
## Despliegue en Producción
https://seguimiento-proyecto.onrender.com