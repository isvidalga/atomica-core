# Observatorio

Estado: CANÓNICO

Versión: 2.0.0

Tipo: Producto

Ubicación:

```text
50_producto/observatorio.md
```

---

# Propósito

Este documento define el Observatorio como el instrumento principal de observación del conocimiento organizacional en ATÓMICA.

Su finalidad consiste en permitir comprender el estado actual del conocimiento mantenido por el Modelo Vivo mediante una representación sintética, continua y contextualizada.

El Observatorio constituye el punto de entrada al conocimiento organizacional.

No constituye un panel de control.

No constituye un sistema de monitorización operativa.

No constituye un sistema de gestión.

---

# Alcance

Este documento regula las responsabilidades del Observatorio como instrumento de la capa Producto.

No define:

- la Ontología;
- la Metodología;
- el Modelo Vivo;
- el Estado Sistémico;
- la Arquitectura del Dominio;
- la implementación técnica.

---

# Dependencias normativas

Este documento depende de:

- `00_canon/`
- `10_nucleo/`
- `20_epistemologia/`
- `30_ontologia/`
- `40_metodologia/`
- `50_producto/principios.md`
- `50_producto/modelo_vivo.md`
- `50_producto/lenguaje_producto.md`
- `50_producto/experiencia_cognitiva.md`
- `50_producto/navegacion.md`
- `50_producto/flujo_exploracion.md`

En caso de conflicto prevalecen siempre las definiciones canónicas.

---

# Objetivo

El Observatorio responde una única pregunta.

> **¿Cómo está mi organización ahora?**

Toda su responsabilidad consiste en facilitar la comprensión inmediata del conocimiento vigente.

No explica por qué.

No propone qué hacer.

No analiza la evolución.

No interpreta las causas.

Su función termina cuando el usuario identifica el estado actual del conocimiento y decide si necesita profundizar.

---

# Naturaleza

El Observatorio constituye un instrumento de observación.

No produce conocimiento.

No modifica conocimiento.

No ejecuta inferencias.

No realiza análisis.

Representa exclusivamente conocimiento mantenido por el Modelo Vivo.

---

# Responsabilidad

Corresponde al Observatorio:

- representar el estado vigente del conocimiento;
- mostrar el nivel global de comprensión disponible;
- hacer visible la incertidumbre asociada;
- señalar cambios relevantes respecto al estado anterior;
- facilitar el acceso a una exploración de mayor profundidad.

No le corresponde:

- explicar relaciones;
- justificar inferencias;
- verificar evidencias;
- recomendar intervenciones;
- interpretar resultados.

---

# Principios

## OBS-001 · Una única pregunta

El Observatorio responde exclusivamente:

> ¿Cómo está mi organización ahora?

Toda información presentada deberá contribuir directamente a responder dicha pregunta.

---

## OBS-002 · Comprensión inmediata

El propósito del Observatorio consiste en permitir una comprensión inicial del estado del conocimiento.

No pretende agotar su interpretación.

---

## OBS-003 · Representación sintética

El Observatorio presenta únicamente el conocimiento necesario para reconocer el estado vigente.

Todo detalle adicional pertenece a instrumentos posteriores del Flujo de Exploración.

---

## OBS-004 · El contexto permanece visible

Toda representación conserva el contexto necesario para interpretar correctamente el estado mostrado.

Nunca presenta conocimiento descontextualizado.

---

## OBS-005 · La incertidumbre forma parte del estado

Cuando el conocimiento incorpore incertidumbre conforme al Sistema Normativo, ésta permanecerá visible junto con la representación del estado.

Nunca aparecerá separada.

---

## OBS-006 · La observación no modifica el conocimiento

La utilización del Observatorio nunca altera el Modelo Vivo.

La interacción únicamente modifica el nivel de comprensión alcanzado por el usuario.

---

# Conocimiento representado

El Observatorio representa exclusivamente conocimiento vigente mantenido por el Modelo Vivo.

La selección concreta de elementos pertenece a la evolución del Producto.

Este documento no mantiene un catálogo cerrado de representaciones.

Toda representación deberá corresponder a conocimiento existente y trazable.

---

# Cambios

El Observatorio podrá hacer visibles variaciones relevantes del conocimiento respecto al estado previamente representado.

Estas variaciones constituyen información contextual.

No constituyen interpretación.

No constituyen explicación.

Su finalidad consiste únicamente en facilitar el reconocimiento de cambios significativos.

---

# Alertas

Las alertas representan cambios relevantes del conocimiento disponible.

No representan eventos.

No representan incidencias.

No representan tareas.

Toda alerta deriva exclusivamente de una modificación significativa del conocimiento mantenido por el Modelo Vivo.

---

# Temporalidad

El Observatorio representa el estado vigente.

Cuando resulte necesario podrá indicar que dicho estado ha cambiado respecto a representaciones anteriores.

La reconstrucción detallada de la evolución pertenece a otros instrumentos del Producto.

---

# Integración con el Flujo de Exploración

El Observatorio constituye el primer nivel del Flujo de Exploración.

Su responsabilidad finaliza cuando el usuario identifica el conocimiento cuya comprensión desea ampliar.

La profundización corresponde a los instrumentos siguientes.

---

# Integración con el Modelo Vivo

El Modelo Vivo mantiene operativo el conocimiento organizacional.

El Observatorio representa una vista sintética de dicho conocimiento.

No modifica su contenido.

No produce nuevas representaciones conceptuales.

---

# Integración con el Producto

El Observatorio constituye el punto de entrada principal al conocimiento organizacional.

El resto de instrumentos amplían progresivamente la comprensión iniciada en él.

Todos utilizan el mismo conocimiento mantenido por el Modelo Vivo.

---

# Restricciones

El Observatorio no:

- redefine conceptos del Canon;
- modifica la Ontología;
- ejecuta inferencias;
- realiza análisis;
- interpreta conocimiento;
- recomienda acciones;
- modifica el Modelo Vivo;
- representa conocimiento no trazable.

---

# Criterios de aceptación

Una implementación del Observatorio se considera conforme únicamente cuando:

- responde exclusivamente a la pregunta "¿Cómo está mi organización ahora?";
- representa únicamente conocimiento vigente;
- conserva el contexto necesario para interpretar el estado;
- mantiene visible la incertidumbre cuando corresponde;
- facilita la identificación inmediata del estado representado;
- permite continuar el Flujo de Exploración sin pérdida de contexto;
- no modifica el Modelo Vivo;
- toda representación permanece completamente trazable.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con el Canon.

---

# Gobierno

La evolución de este documento se encuentra regulada por el Sistema Normativo y el Gobierno del Canon.

Toda modificación deberá limitararse a las responsabilidades del Observatorio como instrumento de la capa Producto.

Las modificaciones que afecten al significado del conocimiento deberán realizarse previamente en las capas normativas correspondientes.

---

# Declaración

El Observatorio constituye la puerta de entrada al conocimiento organizacional representado por ATÓMICA.

No pretende mostrar toda la organización.

No pretende explicar toda la organización.

Su responsabilidad consiste exclusivamente en hacer visible, de forma inmediata, el estado vigente del conocimiento mantenido por el Modelo Vivo, preservando su significado, su contexto, su trazabilidad y su incertidumbre conforme al Sistema Normativo.
