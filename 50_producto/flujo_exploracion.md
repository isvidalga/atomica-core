# Flujo de Exploración

Estado: CANÓNICO

Versión: 2.0.0

Tipo: Producto

Ubicación:

```text
50_producto/flujo_exploracion.md
```

---

# Propósito

Este documento establece el Flujo de Exploración canónico de ATÓMICA.

El Flujo de Exploración organiza la progresión cognitiva mediante la cual una persona incrementa su comprensión del conocimiento representado por el Producto.

No constituye:

- un proceso de trabajo;
- un flujo operativo;
- una secuencia obligatoria;
- una implementación de la interfaz.

Su finalidad consiste en definir el orden lógico mediante el cual los instrumentos amplían la comprensión del mismo conocimiento.

---

# Alcance

Este documento regula la progresión de la exploración entre los instrumentos del Producto.

Es aplicable a:

- instrumentos;
- recorridos de exploración;
- cambios de profundidad;
- transiciones entre niveles de comprensión.

No define:

- la navegación;
- la Ontología;
- la Metodología;
- el Modelo Vivo;
- el diseño de la interfaz.

---

# Dependencias normativas

Este documento depende de:

- `00_canon/`
- `10_nucleo/`
- `20_epistemologia/`
- `30_ontologia/`
- `40_metodologia/`
- `50_producto/principios.md`
- `50_producto/lenguaje_producto.md`
- `50_producto/experiencia_cognitiva.md`
- `50_producto/navegacion.md`
- `50_producto/modelo_vivo.md`

En caso de conflicto prevalecen siempre las definiciones canónicas.

---

# Objetivo

El Flujo de Exploración establece una progresión de comprensión.

Cada instrumento amplía el conocimiento accesible desde el instrumento anterior.

El objetivo no consiste en recorrer pantallas.

Consiste en aumentar progresivamente el nivel de comprensión del conocimiento representado.

---

# Naturaleza

El Flujo de Exploración pertenece exclusivamente a la capa Producto.

No modifica el Modelo Vivo.

No genera conocimiento.

No interpreta el conocimiento.

No establece reglas metodológicas.

Únicamente organiza la progresión cognitiva entre instrumentos.

---

# Principios

## FEX-001 · Una pregunta por instrumento

Cada instrumento responde una única pregunta principal.

La exploración nunca mezcla preguntas pertenecientes a instrumentos distintos.

---

## FEX-002 · Comprensión progresiva

Cada nivel amplía el conocimiento comprendido anteriormente.

Nunca sustituye la comprensión ya alcanzada.

---

## FEX-003 · Contexto continuo

Toda exploración conserva el contexto desde el que fue iniciada.

El usuario nunca pierde la referencia del conocimiento que está explorando.

---

## FEX-004 · Exploración sin modificación

La exploración nunca modifica el Modelo Vivo.

Únicamente incrementa el nivel de comprensión del usuario.

---

## FEX-005 · Profundidad creciente

Cada transición conduce hacia un mayor nivel de detalle.

Nunca hacia una reinterpretación del conocimiento.

---

## FEX-006 · Independencia de la interfaz

El Flujo de Exploración es independiente de la implementación visual.

Puede materializarse mediante distintas interfaces sin alterar su significado.

---

# Niveles de exploración

## Nivel 1 · Observatorio

### Pregunta

> ¿Cómo está mi organización ahora?

### Objetivo

Permitir una comprensión inmediata del estado actual del conocimiento.

### Resultado esperado

El usuario identifica dónde concentrar su atención.

No explica.

No interpreta.

No profundiza.

---

## Nivel 2 · Observe

### Pregunta

> ¿Qué está ocurriendo?

### Objetivo

Ampliar el contexto del conocimiento observado.

### Resultado esperado

El usuario comprende el significado del elemento explorado.

---

## Nivel 3 · Pattern

### Pregunta

> ¿Por qué ocurre?

### Objetivo

Facilitar la comprensión de las estructuras que explican el comportamiento observado.

### Resultado esperado

El usuario comprende las relaciones relevantes del conocimiento representado.

---

## Nivel 4 · Crónica

### Pregunta

> ¿Cómo ha evolucionado?

### Objetivo

Comprender la evolución temporal del conocimiento.

### Resultado esperado

El usuario interpreta la continuidad del conocimiento representado.

---

## Nivel 5 · Evidencias

### Pregunta

> ¿En qué se fundamenta?

### Objetivo

Permitir la verificación del conocimiento disponible.

### Resultado esperado

El usuario comprende el fundamento, la trazabilidad y la incertidumbre del conocimiento representado.

---

# Progresión

Cada nivel presupone la comprensión alcanzada en el nivel anterior.

No constituye un requisito obligatorio recorrer todos los niveles.

El usuario puede iniciar la exploración desde cualquier instrumento compatible con su necesidad de comprensión.

Cuando exista una transición entre niveles, ésta deberá preservar:

- el contexto;
- el significado;
- la continuidad;
- la trazabilidad.

---

# Profundidad

El aumento de profundidad nunca modifica el conocimiento.

Únicamente incrementa:

- el contexto disponible;
- las relaciones visibles;
- la explicación accesible;
- la capacidad de interpretación.

Toda profundización mantiene la coherencia con el Modelo Vivo.

---

# Instrumentos transversales

Algunos instrumentos pueden asistir al usuario durante cualquier momento del recorrido.

Estos instrumentos no constituyen niveles del Flujo de Exploración.

Su finalidad consiste en facilitar la interpretación del conocimiento disponible.

Su utilización nunca modifica la progresión definida por este documento.

---

# Integración

El Flujo de Exploración coordina la progresión entre instrumentos.

La responsabilidad de cada instrumento continúa definida por su propio documento.

El Flujo de Exploración no sustituye dichas responsabilidades.

Únicamente establece el orden lógico mediante el cual pueden combinarse.

---

# Restricciones

El Flujo de Exploración no:

- redefine conceptos del Canon;
- modifica el Modelo Vivo;
- sustituye la navegación;
- impone recorridos obligatorios;
- interpreta el conocimiento;
- establece reglas metodológicas;
- depende de una implementación concreta.

---

# Criterios de aceptación

Una implementación del Flujo de Exploración se considera conforme únicamente cuando:

- cada instrumento responde una única pregunta principal;
- la profundidad aumenta progresivamente;
- el contexto permanece continuo;
- la exploración no modifica el conocimiento;
- las transiciones conservan el significado del conocimiento;
- la progresión mantiene la trazabilidad con el Modelo Vivo;
- el flujo permanece independiente de la interfaz.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con el Canon.

---

# Gobierno

La evolución de este documento se encuentra regulada por el Sistema Normativo y el Gobierno del Canon.

Toda modificación deberá limitarse a la organización del Flujo de Exploración como responsabilidad propia de la capa Producto.

Las modificaciones que afecten al significado del conocimiento deberán realizarse previamente en las capas normativas correspondientes.

---

# Declaración

El Flujo de Exploración no organiza pantallas.

No organiza funcionalidades.

Organiza comprensión.

Cada instrumento amplía la capacidad del usuario para interpretar el mismo conocimiento representado por el Modelo Vivo.

La exploración comienza con el reconocimiento.

Continúa con la comprensión.

Progresa hacia la explicación.

Finaliza con la verificación.

En todo momento, la decisión permanece en manos del usuario.
