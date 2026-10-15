# Diseño — Caso 3: Seguimiento de proyectos

## 1. Modelo de datos

### Entidad: Proyecto
| Campo | Tipo | Notas |
|---|---|---|
| id | número | autogenerado |
| nombre | texto | obligatorio |
| equipo | texto | obligatorio |
| fechaLimite | fecha (AAAA-MM-DD) | obligatorio |

### Entidad: Entrega (depende de Proyecto)
| Campo | Tipo | Notas |
|---|---|---|
| id | número | autogenerado |
| **proyectoId** | número | **llave foránea**: referencia al `id` de un Proyecto; obligatorio |
| descripcion | texto | obligatorio |
| fechaEntrega | fecha | se genera automáticamente |
| calificacion | número o `null` | `null` hasta que se califique; valor entre 0.0 y 5.0 |

### Relación
Proyecto 1 ──── N Entrega, conectadas por `Entrega.proyectoId = Proyecto.id`.
El promedio no es un campo: se calcula al consultar la ruta `/proyectos/:id/promedio`.

## 2. Rutas de la API
| Método | Ruta | Qué hace | Sprint |
|---|---|---|---|
| GET | /proyectos | Lista todos los proyectos | 1 |
| GET | /proyectos/:id | Consulta un proyecto | 1 |
| POST | /proyectos | Crea un proyecto | 1 |
| PUT | /proyectos/:id | Edita un proyecto | 1 |
| DELETE | /proyectos/:id | Elimina un proyecto y sus entregas | 1 |
| GET | /proyectos/:id/entregas | Lista las entregas de ese proyecto | 2 |
| POST | /entregas | Registra una entrega (valida que el proyecto exista) | 2 |
| PUT | /entregas/:id/calificar | Califica una entrega (0.0 a 5.0) | 2 |
| GET | /proyectos/:id/promedio | Calcula el promedio de las entregas calificadas | 2 |

## 3. Reglas de validación y códigos de respuesta
| Situación | Código |
|---|---|
| Creación exitosa | 201 |
| Eliminación exitosa | 204 |
| Falta un campo obligatorio o la fecha/nota es inválida | 400 |
| El proyecto o la entrega no existe | 404 |
| Registrar una entrega con `proyectoId` inexistente | 404 |
| Proyecto sin entregas calificadas | 200 con `{ promedio: null, mensaje: ... }` |

## 4. Persistencia
Los datos se guardan en `src/data/db.json` con esta forma:
```json
{ "proyectos": [], "entregas": [] }
```
`store.js` lee y escribe el archivo; `proyectos.js` y `entregas.js` solo usan esas funciones.

## 5. Estructura de carpetas
```
/proyecto
  /src
    /data         store.js, proyectos.js, entregas.js (Sprint 2), db.json (se crea solo)
    /controllers  proyectosController.js, entregasController.js (Sprint 2)
    /routes       proyectos.js, entregas.js (Sprint 2)
  /public         index.html (Sprint 3)
  index.js
  package.json
  requisitos.md · planeacion.md · diseño.md · pruebas.md · README.md
```
