# Navegación

Estado: CANÓNICO

Versión: 2.1

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

Toda respuesta deberá mostrar, de forma explícita:

- nivel de confianza;
- origen del conocimiento;
- limitaciones;
- evidencia disponible.

La incertidumbre nunca aparece separada del conocimiento.

---

## N-006 · Los objetos no constituyen la navegación

La navegación nunca se organiza mediante objetos del Modelo.

Los objetos existen para construir conocimiento.

Las preguntas existen para hacerlo comprensible.

La navegación organiza preguntas.

Nunca objetos.

---

## N-007 · La navegación progresa por comprensión

El usuario podrá profundizar libremente dentro de una misma pregunta.

El paso entre preguntas seguirá siempre el orden lógico de construcción del conocimiento.

La navegación nunca adelantará respuestas propias de preguntas posteriores.

---

# Las cinco preguntas

---

# 1 · ¿Cómo estoy ahora?

## Propósito

Responder cuál es el estado actual representado por el Modelo.

---

## Debe mostrar

- estado actual;
- nivel de confianza;
- incertidumbre asociada;
- factores que condicionan dicha incertidumbre.

---

## Nunca debe mostrar

- evolución histórica;
- recomendaciones;
- priorización de acciones;
- respuestas pertenecientes a preguntas posteriores.

---

## Resultado esperado

El usuario comprende el estado presente antes de intentar explicarlo.

---

# 2 · ¿Qué ha pasado?

## Propósito

Responder cómo ha evolucionado el conocimiento construido por el Modelo.

La respuesta se representa mediante la evolución temporal del conocimiento.

---

## Debe mostrar

- sucesión de estados;
- cambios relevantes;
- continuidad;
- discontinuidades;
- modificaciones metodológicas cuando existan.

---

## Nunca debe mostrar

- actividad irrelevante;
- resúmenes sin trazabilidad;
- ordenaciones por popularidad;
- interpretaciones no justificadas.

---

## Resultado esperado

El usuario comprende la evolución antes de buscar causas.

---

# 3 · ¿Qué no estoy viendo?

## Propósito

Mostrar explícitamente los límites del conocimiento disponible.

Es la pregunta que hace visible la incertidumbre del Modelo.

---

## Debe mostrar

- ausencia de observaciones;
- evidencia obsoleta;
- conocimiento insuficiente;
- contradicciones abiertas;
- incertidumbre estructural.

---

## Nunca debe mostrar

- recomendaciones;
- interpretaciones;
- acciones propuestas.

---

## Resultado esperado

El usuario comprende qué información falta antes de decidir.

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

- órdenes;
- recomendaciones sin fundamento;
- acciones justificadas únicamente por indicadores.

---

## Resultado esperado

El usuario dispone de alternativas suficientemente justificadas para decidir.

---

# 5 · ¿Estoy aprendiendo?

## Propósito

Determinar si la organización mejora su capacidad para generar conocimiento verificable.

El aprendizaje se evalúa mediante la evolución del conocimiento.

Nunca mediante la evolución aislada de un indicador.

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

## Resultado esperado

El usuario comprende si la organización aprende mejor que antes.

---

# Arquitectura de navegación

La navegación organiza preguntas.

Cada pregunta accede al conocimiento necesario para responderla.

La navegación nunca modifica el Modelo.

La navegación únicamente determina qué conocimiento se presenta y en qué secuencia.

---

# Restricciones

## R-001

Toda pantalla responde exactamente una pregunta.

---

## R-002

Toda respuesta conserva la trazabilidad del conocimiento.

---

## R-003

Toda respuesta muestra explícitamente su incertidumbre.

---

## R-004

Los objetos del Modelo nunca constituyen elementos de navegación.

---

## R-005

Ninguna funcionalidad puede existir fuera de las cinco preguntas.

---

# Consecuencia arquitectónica

El menú principal de ATÓMICA está formado exclusivamente por las cinco preguntas definidas en este documento.

Ningún objeto del Modelo constituye un elemento de navegación.

Toda funcionalidad futura deberá integrarse dentro de una de estas preguntas sin alterar la estructura canónica.

---

# Principio final

Las cinco preguntas constituyen la totalidad de la navegación de ATÓMICA.

Todo elemento del Producto deberá contribuir a responder una de ellas.

Si no puede hacerlo, deberá eliminarse.
