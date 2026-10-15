# Planeación ágil (Scrum simplificado)

## Roles (rotan cada sprint)
| Sprint | Product Owner | Scrum Master | Developer |
|---|---|---|---|
| 1 (semana 2) | [Integrante 1] | [Integrante 2] | Los tres |
| 2 (semana 3) | [Integrante 2] | [Integrante 3] | Los tres |
| 3 (semana 4) | [Integrante 3] | [Integrante 1] | Los tres |

## Product Backlog (historias de usuario)
| ID | Historia | Sprint | Estado |
|---|---|---|---|
| HU1 | Como docente, quiero crear un proyecto para llevar su seguimiento. | 1 | Hecho |
| HU2 | Como docente, quiero listar y consultar proyectos para ver cuáles existen. | 1 | Hecho |
| HU3 | Como docente, quiero editar un proyecto para corregir sus datos. | 1 | Hecho |
| HU4 | Como docente, quiero eliminar un proyecto para quitar los que ya no aplican. | 1 | Hecho |
| HU5 | Como docente, quiero que los datos se guarden en un archivo para no perderlos al reiniciar. | 1 | Hecho |
| HU6 | Como estudiante, quiero registrar una entrega de mi proyecto para dejar evidencia de mi avance. | 2 | Por hacer |
| HU7 | Como docente, quiero ver las entregas de un proyecto para revisarlas. | 2 | Por hacer |
| HU8 | Como docente, quiero calificar una entrega para registrar su nota. | 2 | Por hacer |
| HU9 | Como docente, quiero ver el promedio de un proyecto para evaluar su desempeño. | 2 | Por hacer |
| HU10 | Como usuario, quiero una página web para usar la app sin herramientas técnicas. | 3 | Por hacer |
| HU11 | Como equipo, queremos pruebas documentadas y despliegue en Render para entregar el proyecto. | 3 | Por hacer |

## Sprints
- **Sprint 1 (semana 2):** entidad Proyecto con CRUD y persistencia en archivo. HU1–HU5.
- **Sprint 2 (semana 3):** entidad Entrega, calificación y promedio. HU6–HU9.
- **Sprint 3 (semana 4):** interfaz web, pruebas, despliegue y documentación. HU10–HU11.

## Tablero Kanban (estado al cierre del Sprint 1)
| Por hacer | En progreso | Hecho |
|---|---|---|
| HU6, HU7, HU8, HU9, HU10, HU11 | — | HU1, HU2, HU3, HU4, HU5 |

## Definición de "Hecho"
Una historia se marca terminada solo si el código funciona, está subido a GitHub y fue probado por otro integrante del equipo.

## Revisión del Sprint 1
- **Qué quedó funcionando:** CRUD completo de proyectos, validaciones (400/404) y persistencia en `db.json`.
- **Ajuste al backlog:** se decidió que al eliminar un proyecto se borran en cascada sus entregas.
- **Para el Sprint 2:** crear `entregas.js` (data, controller, routes) y activar las rutas comentadas en `index.js` y `routes/proyectos.js`.
