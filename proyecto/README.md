# Seguimiento de proyectos de curso (Caso 3)

Proyecto integrador de **Programación Aplicada III**.

**Integrantes:** [Integrante 1], [Integrante 2], [Integrante 3]

## Estado actual
- [x] Semana 1: análisis, planeación y diseño (`requisitos.md`, `planeacion.md`, `diseño.md`)
- [x] Semana 2 (Sprint 1): entidad **Proyecto** con CRUD y persistencia en archivo
- [ ] Semana 3 (Sprint 2): entidad **Entrega**, calificación y promedio
- [ ] Semana 4 (Sprint 3): interfaz web, pruebas, despliegue

## Entidades
- **Proyecto:** id, nombre, equipo, fechaLimite.
- **Entrega:** id, proyectoId, descripcion, fechaEntrega, calificacion. Un proyecto tiene muchas entregas; cada entrega pertenece a un proyecto.

## Cómo ejecutar
```bash
npm install
npm start
```
El servidor queda en `http://localhost:3000`.

## Rutas disponibles (Sprint 1)
| Método | Ruta | Qué hace |
|---|---|---|
| GET | /proyectos | Lista los proyectos |
| GET | /proyectos/:id | Consulta un proyecto |
| POST | /proyectos | Crea un proyecto |
| PUT | /proyectos/:id | Edita un proyecto |
| DELETE | /proyectos/:id | Elimina un proyecto |

Ejemplo de cuerpo para POST:
```json
{ "nombre": "App móvil", "equipo": "Equipo A", "fechaLimite": "2026-11-30" }
```

La tabla completa de rutas (incluidas las del Sprint 2) está en `diseño.md`.

## Nota sobre persistencia
Los datos se guardan en `src/data/db.json`. En Render (plan gratuito) este archivo puede reiniciarse tras un periodo de inactividad; es una limitación conocida de este nivel del proyecto.
