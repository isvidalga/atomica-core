# ESTADO

Estado: CANÓNICO

Tipo: CONCEPTO

Versión: 2.0.0

Ubicación:

30_ontologia/estado.md

---

# Propósito

Definir el concepto de Estado dentro de la ontología de ATÓMICA.

El Estado constituye la unidad fundamental mediante la cual el Modelo organiza el conocimiento vigente sobre una Identidad en un instante lógico.

Toda evolución del Modelo se expresa como una sucesión de Estados.

---

# Definición

Un Estado es la organización del conocimiento vigente que el Modelo mantiene sobre una única Identidad en un instante lógico.

Un Estado no representa el referente organizacional.

Representa el conocimiento que el Modelo admite sobre dicho referente.

Todo Estado constituye un objeto del Modelo.

Nunca constituye un hecho del mundo.

---

# Naturaleza

Todo Estado:

- pertenece al Modelo;
- pertenece exactamente a una Identidad;
- es inmutable;
- representa un único instante lógico;
- puede ser sucedido por otro Estado.

La creación de un nuevo Estado nunca modifica uno existente.

---

# Constitución

Todo Estado posee:

- un identificador único;
- una Identidad;
- un instante lógico;
- una referencia al Estado precedente, cuando exista;
- una referencia al Estado sucesor, cuando exista.

Su Representación constituye un mecanismo independiente definido por `representacion.md`.

---

# Formación

Un Estado se crea cuando el Modelo admite una modificación del conocimiento vigente sobre una Identidad.

La creación de un Estado depende exclusivamente de una modificación del conocimiento admitido.

El tiempo cronológico nunca determina por sí mismo la creación de un Estado.

Todo nuevo Estado preserva íntegramente la trazabilidad de los Estados anteriores.

---

# Sucesión

Todo Estado podrá tener, como máximo, un Estado sucesor dentro de la misma Identidad.

La sucesión:

- preserva la continuidad del Modelo;
- mantiene la trazabilidad histórica;
- nunca modifica Estados anteriores.

La sucesión nunca implica continuidad de Hipótesis.

La sucesión nunca implica aumento de Confianza.

Ambas pertenecen exclusivamente a la epistemología.

---

# Persistencia

Todo Estado permanece como parte permanente del conocimiento histórico.

Ningún Estado desaparece.

Sólo un Estado puede permanecer vigente para una misma Identidad.

La pérdida de vigencia nunca altera el contenido de un Estado.

---

# Finalización

Un Estado deja de ser vigente únicamente cuando otro Estado de la misma Identidad pasa a ser el vigente.

La desaparición de una Identidad nunca elimina sus Estados históricos.

---

# Restricciones

## ST-001

Todo Estado pertenece exactamente a una Identidad.

---

## ST-002

Todo Estado posee un identificador único.

---

## ST-003

Todo Estado es inmutable.

---

## ST-004

Un Estado nunca representa más de una Identidad.

---

## ST-005

Todo Estado pertenece exactamente a una Trayectoria.

---

## ST-006

Sólo puede existir un Estado vigente por Identidad.

---

## ST-007

Todo Estado conserva permanentemente su trazabilidad.

---

## ST-008

Ninguna operación podrá modificar un Estado previamente constituido.

---

## ST-009

Toda modificación del conocimiento vigente genera un nuevo Estado.

---

# Exclusiones

Un Estado nunca contiene:

- Observaciones;
- Evidencias;
- Hipótesis;
- Confianza;
- recomendaciones;
- intervenciones;
- algoritmos;
- interfaces;
- componentes visuales.

---

# Relaciones

Depende de:

- 10_nucleo/axiomas.md
- 10_nucleo/principios.md
- 30_ontologia/identidad.md

Gobierna:

- trayectoria.md
- representacion.md

Utilizado por:

- 40_metodologia/
- 50_producto/

---

# Responsabilidad

Este documento define exclusivamente el concepto de Estado.

No define Identidad.

No define Trayectoria.

No define Representación.

No establece procedimientos metodológicos.

---

# Declaración

El Estado constituye la unidad fundamental mediante la cual ATÓMICA organiza el conocimiento vigente sobre una Identidad.

Toda evolución del Modelo se produce mediante la creación de nuevos Estados.

Ningún Estado previamente constituido puede modificarse.
