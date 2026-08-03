# Principios

Estado: CANÓNICO

Versión: 2.0.0

Tipo: Producto

Ubicación:

```text
50_producto/principios.md
```

---

# Propósito

Este documento establece los principios permanentes que gobiernan el diseño, la evolución y el comportamiento de todos los instrumentos pertenecientes a la capa Producto.

Estos principios son obligatorios para cualquier instrumento, experiencia o superficie de exploración desarrollada en ATÓMICA.

Ningún documento de Producto podrá contradecirlos.

---

# Alcance

Los principios definidos en este documento son aplicables a:

- instrumentos;
- experiencias;
- navegación;
- exploración;
- representación;
- interacción.

No sustituyen los principios definidos por el Canon.

Los concretan para la capa Producto.

---

# Dependencias normativas

Este documento depende de:

- `00_canon/`
- `10_nucleo/`
- `20_epistemologia/`
- `30_ontologia/`
- `40_metodologia/`

En caso de conflicto, prevalecen siempre las definiciones canónicas.

---

# Principios

## PRD-001 · Un propósito por instrumento

Cada instrumento responde a una única necesidad de comprensión.

No asume responsabilidades pertenecientes a otros instrumentos.

La especialización prevalece sobre la acumulación de funciones.

---

## PRD-002 · Una pregunta por instrumento

Cada instrumento responde una única pregunta principal.

Las preguntas secundarias pertenecen a otros instrumentos.

La navegación entre instrumentos permite ampliar la comprensión sin alterar sus responsabilidades.

---

## PRD-003 · Representación única

Todos los instrumentos utilizan el Modelo Vivo como única representación del conocimiento organizacional.

No existen modelos independientes.

No existen representaciones paralelas.

---

## PRD-004 · Exploración sin modificación

La exploración nunca modifica el conocimiento representado.

Toda interacción permite comprender el Modelo Vivo.

Nunca alterarlo.

---

## PRD-005 · Consistencia

Todos los instrumentos representan el mismo conocimiento.

Las diferencias pertenecen únicamente a la forma de exploración.

Nunca al contenido representado.

---

## PRD-006 · Progresividad

Cada interacción incrementa el nivel de comprensión disponible.

Nunca incrementa la complejidad sin aportar conocimiento adicional.

Cada nivel amplía el anterior.

Nunca lo sustituye.

---

## PRD-007 · Continuidad

Toda exploración conserva el contexto desde el que fue iniciada.

El usuario nunca pierde la referencia del conocimiento que está explorando.

La navegación mantiene siempre la continuidad del recorrido.

---

## PRD-008 · Estabilidad

Cuando el conocimiento no cambia, la representación permanece estable.

ATÓMICA nunca introduce cambios artificiales para atraer la atención del usuario.

La estabilidad constituye información.

---

## PRD-009 · Coherencia

Todo instrumento mantiene coherencia con:

- el Sistema Normativo;
- el Modelo Vivo;
- la metodología vigente;
- el resto de instrumentos del producto.

No pueden existir contradicciones entre superficies.

---

## PRD-010 · Explicabilidad

Toda representación utilizada por un instrumento debe ser compatible con las reglas de explicabilidad establecidas por el Sistema Normativo.

Ninguna representación puede convertirse en una caja negra.

---

## PRD-011 · Independencia de la interfaz

El significado del conocimiento nunca depende de su representación gráfica.

Las interfaces muestran el conocimiento.

Nunca lo modifican.

---

## PRD-012 · Independencia tecnológica

Los principios definidos en este documento son independientes de:

- tecnologías;
- lenguajes;
- plataformas;
- arquitecturas técnicas;
- implementaciones.

Su validez permanece constante aunque cambie la infraestructura del producto.

---

## PRD-013 · Simplicidad

Toda decisión de diseño prioriza la reducción de complejidad innecesaria.

Cuando dos soluciones proporcionan el mismo nivel de comprensión, prevalece la más simple.

---

## PRD-014 · Continuidad evolutiva

La evolución del producto amplía las capacidades existentes.

No rompe la coherencia de los instrumentos previamente definidos.

Toda evolución preserva la compatibilidad con el Sistema Normativo.

---

# Criterios de aceptación

Una implementación de la capa Producto se considera conforme únicamente cuando:

- cada instrumento mantiene una única responsabilidad;
- todos los instrumentos utilizan el Modelo Vivo;
- la exploración no modifica el conocimiento;
- el contexto permanece estable durante la navegación;
- la representación es consistente entre instrumentos;
- toda representación es explicable;
- la interfaz no altera el significado del conocimiento;
- la evolución del producto preserva la coherencia del conjunto.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con el Canon.

---

# Gobierno

La evolución de este documento se encuentra regulada por el Sistema Normativo y el Gobierno del Canon.

No podrán incorporarse principios pertenecientes al Núcleo, la Epistemología, la Ontología o la Metodología.

Toda modificación deberá limitarse a responsabilidades propias de la capa Producto.

---

# Referencias

- `00_canon/`
- `10_nucleo/`
- `20_epistemologia/`
- `30_ontologia/`
- `40_metodologia/`
- `50_producto/modelo_vivo.md`
