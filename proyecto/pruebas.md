# Pruebas

Pruebas del Sprint 1 (entidad Proyecto). Se ejecutan en StackBlitz con el servidor corriendo; las columnas "Obtenido" y "¿Pasó?" las completa quien NO programó esa función.

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

Se agregarán en el Sprint 2 y 3: entregas, relación inválida (proyectoId inexistente), calificación fuera de rango, promedio e interfaz web.
