# Navegación

Estado: CANÓNICO

Versión: 2.0

---

# Propósito

La navegación de ATÓMICA no se organiza por objetos.

No se organiza por módulos.

No se organiza por funcionalidades.

Se organiza exclusivamente por preguntas.

Un menú basado en objetos obliga al usuario a saber dónde está la información.

Un menú basado en preguntas únicamente exige que el usuario sepa qué quiere comprender.

ATÓMICA adopta esta segunda aproximación porque su propósito no consiste en gestionar información.

Su propósito consiste en construir comprensión.

Existen exactamente cinco preguntas.

Toda la navegación del producto deriva de ellas.

---

# Naturaleza

La navegación pertenece al Producto.

No pertenece a la Ontología.

No pertenece a la Metodología.

No modifica el Modelo.

Su única función consiste en organizar el acceso al conocimiento construido por el Modelo.

---

# Principios

## N-001 · Una pregunta por pantalla

Cada pantalla responde exactamente una pregunta.

Una pantalla que responde simultáneamente a varias preguntas deja de responder correctamente a cualquiera de ellas.

No existirán pantallas resumen que mezclen preguntas distintas.

---

## N-002 · El orden sigue la construcción del conocimiento

La navegación sigue el proceso de construcción del conocimiento definido por el Canon.

Cada pregunta presupone la comprensión de la anterior.

El orden nunca se modifica por motivos comerciales, visuales o tecnológicos.

---

## N-003 · Toda funcionalidad responde a una pregunta

Toda funcionalidad del Producto deberá responder exactamente a una de las cinco preguntas.

Si una funcionalidad no puede asociarse claramente a una de ellas, no pertenece a ATÓMICA.

---

## N-004 · Nunca sustituir la ausencia de conocimiento

Si el Modelo no puede responder una pregunta, deberá declararlo explícitamente.

La ausencia de conocimiento nunca será sustituida por estimaciones presentadas como hechos.

---

## N-005 · La incertidumbre acompaña siempre a la respuesta

Toda respuesta deberá mostrar:

- nivel de confianza;
- origen del conocimiento;
- limitaciones;
- evidencia disponible.

La incertidumbre nunca aparece separada del conocimiento.

---

## N-006 · Los objetos no constituyen la navegación

Organización.

Estado.

Observación.

Hipótesis.

Evidencia.

Capacidad.

Fragilidad.

Intervención.

Relación.

Trayectoria.

Son objetos del Modelo.

Nunca son elementos del menú.

Las preguntas utilizan estos objetos para construir comprensión.

Nunca al contrario.

---

# Las cinco preguntas

---

# 1 · ¿Cómo estoy ahora?

## Propósito

Responder cuál es el Estado vigente del Modelo.

---

## Debe mostrar

- Estado vigente.
- Representación del Estado.
- Nivel de confianza.
- Incertidumbre.
- Factores que condicionan dicha incertidumbre.

---

## Nunca debe mostrar

- tendencias históricas;
- evolución temporal;
- recomendaciones;
- priorización de acciones.

---

## Objetos utilizados

- Estado.
- Representación.
- Hipótesis.
- Evidencia.

---

# 2 · ¿Qué ha pasado?

## Propósito

Responder cómo ha evolucionado el conocimiento del Modelo.

La respuesta se construye mediante la Línea Temporal del conocimiento.

---

## Debe mostrar

- sucesión de Estados;
- cambios relevantes;
- continuidad;
- discontinuidades;
- cambios metodológicos cuando existan.

---

## Nunca debe mostrar

- actividad irrelevante;
- resúmenes sin trazabilidad;
- ordenaciones por popularidad o relevancia.

---

## Objetos utilizados

- Trayectoria.
- Estado.
- Representación.
- Memoria.

---

# 3 · ¿Qué no estoy viendo?

## Propósito

Mostrar explícitamente los límites del conocimiento disponible.

Es la pregunta que hace visible la incertidumbre del Modelo.

---

## Debe mostrar

- ausencia de observaciones;
- evidencias obsoletas;
- hipótesis insuficientemente respaldadas;
- capacidades con baja cobertura;
- fragilidades con evidencia insuficiente;
- contradicciones abiertas.

---

## Nunca debe mostrar

- recomendaciones;
- interpretaciones;
- acciones sugeridas.

---

## Objetos utilizados

- Observación.
- Evidencia.
- Hipótesis.
- Capacidad.
- Fragilidad.

---

# 4 · ¿Qué debería hacer?

## Propósito

Presentar posibles intervenciones derivadas del conocimiento disponible.

Las intervenciones nunca constituyen decisiones.

Constituyen hipótesis de actuación.

---

## Debe mostrar

- intervención propuesta;
- fundamento;
- evidencia asociada;
- incertidumbre;
- condiciones de validación.

---

## Nunca debe mostrar

- acciones presentadas como obligatorias;
- recomendaciones sin justificación;
- priorizaciones basadas únicamente en indicadores.

---

## Objetos utilizados

- Intervención.
- Hipótesis.
- Evidencia.
- Fragilidad.
- Capacidad.

---

# 5 · ¿Estoy aprendiendo?

## Propósito

Determinar si la organización mejora su capacidad para generar conocimiento verificable.

El aprendizaje se evalúa mediante la evolución del Modelo.

No mediante la evolución del IFO.

---

## Debe mostrar

- evolución del conocimiento;
- hipótesis confirmadas;
- hipótesis refutadas;
- hipótesis pendientes;
- calidad de la evidencia;
- capacidad de anticipación.

---

## Nunca debe mostrar

- progreso basado únicamente en indicadores;
- evolución del IFO como sinónimo de aprendizaje.

---

## Objetos utilizados

- Hipótesis.
- Evidencia.
- Trayectoria.
- Memoria.

---

# Arquitectura de navegación

Las pantallas nunca organizan funcionalidades.

Organizan preguntas.

Cada pregunta utiliza uno o varios objetos del Modelo.

Los objetos nunca determinan la navegación.

La navegación determina qué objetos son necesarios para responder cada pregunta.

---

# Restricciones

## R-001

Toda pantalla responde exactamente una pregunta.

## R-002

Toda respuesta conserva la trazabilidad del conocimiento.

## R-003

Toda respuesta muestra su incertidumbre.

## R-004

Los objetos del Modelo nunca aparecen como elementos de navegación.

## R-005

Ninguna funcionalidad puede existir fuera de las cinco preguntas.

---

# Principio final

Las cinco preguntas constituyen la totalidad de la navegación de ATÓMICA.

Todo elemento del Producto deberá contribuir a responder una de ellas.

Si no puede hacerlo, deberá eliminarse.
