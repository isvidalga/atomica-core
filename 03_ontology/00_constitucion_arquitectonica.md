# 00 · Constitución Arquitectónica

Estado: ESTABLE

Versión: 1.0

Última revisión: Julio 2026

---

# Breadcrumb

atomica-core/

└── 30_architecture/

└── 00_constitucion_arquitectonica.md

---

# Propósito

La presente Constitución define los principios arquitectónicos permanentes de ATÓMICA.

Toda implementación, componente, interfaz o evolución futura deberá respetar estos principios.

Si una decisión técnica contradice esta Constitución, deberá modificarse la implementación y nunca la Constitución, salvo revisión explícita.

---

# Artículo 1 — Primacía del Modelo

El Modelo Organizacional constituye el núcleo del sistema.

Las interfaces son únicamente representaciones parciales del modelo.

Nunca podrán crear una lógica independiente.

---

# Artículo 2 — Separación entre realidad y representación

ATÓMICA nunca afirma conocer una organización.

Representa únicamente el conocimiento disponible sobre ella.

El modelo nunca equivale a la realidad.

---

# Artículo 3 — Separación entre hechos e interpretación

Los hechos pertenecen al Modelo.

La interpretación pertenece al Motor de Comprensión.

Ambos nunca deberán mezclarse.

---

# Artículo 4 — Procedencia obligatoria

Toda afirmación deberá conservar su origen.

Todo origen deberá ser reconstruible.

Sin procedencia no existe conocimiento válido.

---

# Artículo 5 — Incertidumbre explícita

La incertidumbre forma parte del conocimiento.

Nunca podrá ocultarse.

Nunca podrá sustituirse por una falsa precisión.

---

# Artículo 6 — Temporalidad

Todo conocimiento evoluciona.

La evolución se representa mediante Eventos.

Nunca mediante sobrescritura.

---

# Artículo 7 — Inmutabilidad

Los Eventos nunca se modifican.

Los hechos históricos nunca se eliminan.

Las correcciones generan nuevos Eventos.

---

# Artículo 8 — Explicabilidad

Toda conclusión deberá responder:

¿Por qué?

¿Cómo?

¿Con qué evidencia?

¿Qué incertidumbre permanece?

---

# Artículo 9 — Neutralidad

ATÓMICA describe.

Argumenta.

Explica.

Nunca decide por el usuario.

---

# Artículo 10 — Unicidad del Modelo

Existe un único Modelo Organizacional.

Todas las Vistas representan perspectivas distintas del mismo modelo.

Nunca existirán modelos paralelos.

---

# Artículo 11 — Evolución

Todo objeto deberá poder evolucionar sin destruir su historia.

El aprendizaje nunca sustituye al pasado.

Lo amplía.

---

# Artículo 12 — Objetos antes que pantallas

Toda funcionalidad deberá modificar un objeto, una relación, un evento o un bucle del Modelo Organizacional.

Si una funcionalidad no puede asociarse al modelo, no pertenece al núcleo de ATÓMICA.

---

# Artículo 13 — La IA no constituye conocimiento

Los modelos de IA interpretan.

No generan hechos.

No sustituyen evidencias.

No modifican directamente el Modelo Organizacional.

---

# Artículo 14 — El conocimiento es revisable

Toda afirmación podrá:

- fortalecerse;
- debilitarse;
- refutarse;
- quedar obsoleta.

Nada será considerado verdad permanente.

---

# Artículo 15 — Primacía de la comprensión

El objetivo de ATÓMICA no consiste en calcular indicadores.

Consiste en reducir la incertidumbre sobre el funcionamiento de una organización.

Los indicadores constituyen únicamente representaciones derivadas.

---

# Artículo 16 — El tiempo como activo

El mayor activo de ATÓMICA no es el dato.

Es la memoria.

Toda evolución del conocimiento deberá conservarse.

---

# Artículo 17 — El conocimiento como patrimonio

Toda nueva capacidad desarrollada deberá aumentar el patrimonio cognitivo de ATÓMICA.

No se desarrollarán funcionalidades aisladas.

Se ampliará el Modelo Organizacional.

---

# Artículo 18 — Independencia tecnológica

Ningún principio de esta Constitución dependerá de una tecnología concreta.

La arquitectura deberá sobrevivir a cambios de:

- lenguaje;
- base de datos;
- proveedor de IA;
- interfaz;
- infraestructura.

---

# Artículo 19 — Honestidad epistemológica

Cuando el sistema no disponga de evidencia suficiente deberá indicar explícitamente:

"No lo sabemos."

La ausencia de conocimiento nunca podrá ocultarse mediante inferencias injustificadas.

---

# Artículo 20 — Finalidad

La misión permanente de ATÓMICA consiste en construir una representación organizacional cada vez más fiel, más trazable y más útil para comprender la realidad, sin confundir nunca el modelo con la organización que representa.

---

## Cláusula de modificación

Toda modificación de esta Constitución requerirá justificar:

- el principio afectado;
- la razón del cambio;
- las consecuencias sobre el resto de la arquitectura.

Las modificaciones deberán registrarse en:

09_decisiones_arquitectonicas.md
