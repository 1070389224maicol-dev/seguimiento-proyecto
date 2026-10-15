# Pruebas

Pruebas de los Sprints 1, 2 y 3. Se ejecutan en StackBlitz con el servidor corriendo; las columnas "Obtenido" y "¿Pasó?" las completa quien NO programó esa función.

| # | Qué se probó | Esperado | Obtenido | ¿Pasó? |
|---|---|---|---|---|
| 1 | POST /proyectos con nombre, equipo y fechaLimite válidos | 201 y el proyecto con su id | | |
| 2 | GET /proyectos | 200 y lista con el proyecto creado | | |
| 3 | GET /proyectos/1 | 200 y el proyecto | | |
| 4 | PUT /proyectos/1 cambiando el equipo | 200 y el proyecto actualizado | | |
| 5 | POST /proyectos sin `equipo` | 400 con mensaje de error | | |
| 6 | POST /proyectos con fechaLimite "hola" | 400 con mensaje de error | | |
| 7 | GET /proyectos/999 | 404 | | |
| 8 | DELETE /proyectos/1 | 204 | | |
| 9 | Crear un proyecto, reiniciar el servidor, GET /proyectos | El proyecto sigue ahí (persistencia) | | |
| 10 | POST /entregas con `proyectoId` 1 y una descripción | 201 y la entrega con `calificacion` null | | |
| 11 | GET /proyectos/1/entregas | 200 y solo las entregas del proyecto 1 | | |
| 12 | POST /entregas sin `descripcion` | 400 con mensaje de error | | |
| 13 | POST /entregas con `proyectoId` 999 (relación inválida) | 404 | | |
| 14 | GET /proyectos/999/entregas | 404 | | |
| 15 | PUT /entregas/1/calificar con `{ "calificacion": 4 }` | 200 y la entrega con calificacion 4 | | |
| 16 | PUT /entregas/1/calificar con `{ "calificacion": 7 }` | 400 (fuera de 0 a 5) y la nota anterior no cambia | | |
| 17 | PUT /entregas/1/calificar con `{ "calificacion": "abc" }` | 400 | | |
| 18 | PUT /entregas/999/calificar | 404 | | |
| 19 | GET /proyectos/1/promedio antes de calificar nada | 200 con `promedio: null` y mensaje | | |
| 20 | Calificar dos entregas del proyecto 1 con 4 y 3.5, luego GET /proyectos/1/promedio | 200 con `promedio: 3.75` | | |
| 21 | Calificar una entrega del proyecto 2 y consultar el promedio del proyecto 1 | El promedio del proyecto 1 no cambia | | |
| 22 | DELETE de un proyecto con entregas y luego GET /entregas | 204 y las entregas de ese proyecto ya no existen | | |
| 23 | Crear y calificar entregas, reiniciar el servidor, GET /entregas | Las entregas y sus notas siguen ahí | | |
| 24 | Abrir la raíz `/` en el navegador | Carga la página "Seguimiento de proyectos" | | |
| 25 | En la página: crear un proyecto con el formulario | Mensaje "Proyecto creado" y aparece en la lista | | |
| 26 | En la página: registrar una entrega | Aparece en el proyecto como "sin calificar" | | |
| 27 | En la página: calificar la entrega | El promedio se actualiza sin recargar la página | | |
| 28 | En la página: calificar con una nota inválida (por ejemplo 9) | Se muestra el mensaje de error de la API | | |
| 29 | En la página: eliminar un proyecto | Desaparece de la lista | | |
| 30 | Render: abrir la URL pública | Carga la página y funciona igual que en StackBlitz | | |
| 31 | Render: repetir los casos 25, 26 y 27 | Funcionan igual que en StackBlitz | | |

Nota sobre Render: el archivo `db.json` puede reiniciarse cuando Render reinicia el servicio, así que los datos pueden perderse. Es una limitación conocida (ver README).

**Verificación previa automática:** antes de entregarles el código, Claude ejecutó los casos 1 a 29 con Node 22 y un sustituto mínimo de Express (sin internet no se pudo instalar Express real), y todos se comportaron como se espera. Eso **no reemplaza** la prueba de ustedes en StackBlitz y Render, que es la que cuenta para `pruebas.md`.
