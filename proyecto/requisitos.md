# Requisitos — Caso 3: Seguimiento de proyectos de curso

**Equipo:** [michael montoya], [jairo nieto], [yaritza gutierrez], [diego enao]
**Asignatura:** Programación Aplicada III

## 1. Descripción general
Aplicación para registrar los proyectos de un curso y las entregas que cada proyecto hace a lo largo del semestre. Cada entrega recibe una calificación y el sistema calcula el promedio de calificaciones de cada proyecto.

## 2. Actores
| Actor | Qué hace |
|---|---|
| Docente | Crea y administra los proyectos, califica las entregas y consulta el promedio. |
| Estudiante / equipo | Registra las entregas de su proyecto y consulta su estado y promedio. |

## 3. Relación entre las entidades
Un **proyecto** puede tener **muchas entregas** a lo largo del semestre, pero cada **entrega pertenece a un único proyecto**. La entrega guarda el `proyectoId` del proyecto al que pertenece (relación uno a muchos). Una entrega no puede existir sin un proyecto, y si se elimina un proyecto se eliminan también sus entregas. El **promedio** de un proyecto no se guarda: se calcula a partir de las calificaciones de sus entregas.

## 4. Requisitos funcionales
**Proyectos**
- RF1. El sistema debe permitir crear un proyecto indicando nombre, equipo y fecha límite.
- RF2. El sistema debe permitir listar todos los proyectos y consultar uno por su id.
- RF3. El sistema debe permitir editar los datos de un proyecto.
- RF4. El sistema debe permitir eliminar un proyecto (y sus entregas asociadas).

**Entregas**
- RF5. El sistema debe permitir registrar una entrega asociada a un proyecto existente.
- RF6. El sistema debe rechazar el registro de una entrega si el proyecto indicado no existe.
- RF7. El sistema debe permitir listar las entregas de un proyecto específico.
- RF8. El sistema debe permitir calificar una entrega existente con una nota válida (entre 0.0 y 5.0).

**Regla de negocio relacional**
- RF9. El sistema debe calcular y mostrar el promedio de calificaciones de un proyecto, tomando solo las entregas ya calificadas.
- RF10. Si un proyecto no tiene entregas calificadas, el sistema debe indicarlo en lugar de mostrar un promedio.

**Interfaz web**
- RF11. La interfaz web debe mostrar la lista de proyectos con su promedio y permitir registrar entregas y calificarlas.

## 5. Requisitos no funcionales
- RNF1. Los datos deben conservarse aunque el servidor se reinicie (persistencia en `db.json`).
- RNF2. La API debe recibir y responder en formato JSON.
- RNF3. La API debe responder con códigos HTTP correctos (200, 201, 204, 400, 404) y mensajes de error claros.
- RNF4. La interfaz web debe reflejar los datos actualizados sin recargar la página completa.
- RNF5. El código debe estar organizado por capas (rutas, controladores, datos) y versionado en GitHub con commits frecuentes.
