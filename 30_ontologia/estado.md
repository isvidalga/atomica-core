# Estado

**Estado:** Frozen

**Versión:** 1.0.0

**Breadcrumb:** `30_ontologia/estado.md`

---

# Propósito

Este documento define el concepto de Estado dentro de la ontología de ATÓMICA.

El Estado constituye la unidad fundamental mediante la cual el Modelo representa el conocimiento admitido sobre una Identidad en un instante lógico.

Toda evolución del Modelo se expresa como una sucesión de Estados.

---

# Definición

Un Estado es la representación íntegra del conocimiento que el Modelo admite sobre una única Identidad en un instante lógico.

Un Estado no representa la organización.

Representa el conocimiento disponible sobre ella.

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

Todo Estado está compuesto por:

- un identificador único;
- una Identidad;
- un instante lógico;
- una Representación vigente;
- una referencia al Estado precedente, cuando exista;
- una referencia al Estado sucesor, cuando exista.

---

# Formación

Un Estado nace cuando el Modelo admite una Representación distinta de la vigente.

La creación de un Estado depende exclusivamente de un cambio en el conocimiento admitido.

El tiempo físico no determina la creación de un Estado.

Todo Estado nuevo preserva íntegramente la trazabilidad con los Estados anteriores.

---

# Sucesión

Todo Estado puede tener, como máximo, un Estado sucesor dentro de la misma Identidad.

La sucesión:

- preserva la continuidad del Modelo;
- mantiene la trazabilidad histórica;
- nunca modifica Estados anteriores.

La sucesión no implica continuidad de Hipótesis.

La sucesión no implica aumento de Confianza.

Ambas pertenecen a la capa epistemológica.

---

# Persistencia

Todo Estado permanece como registro histórico.

Ningún Estado desaparece.

Sólo un Estado puede ser vigente para una misma Identidad.

La pérdida de vigencia nunca altera el contenido del Estado.

---

# Terminación

Un Estado deja de ser vigente únicamente cuando es sucedido por otro Estado perteneciente a la misma Identidad.

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

Ninguna operación puede modificar un Estado previamente constituido.

---

## ST-009

Todo cambio en el conocimiento admitido genera un nuevo Estado.

---

# Exclusiones

Un Estado nunca contiene:

- Observaciones;
- Evidencias;
- Hipótesis;
- Confianza;
- recomendaciones;
- intervenciones;
- clasificaciones metodológicas;
- puntuaciones;
- interfaces;
- algoritmos;
- componentes visuales.

---

# Dependencias

- `10_nucleo/axiomas.md`
- `30_ontologia/identidad.md`
- `30_ontologia/representacion.md`
- `30_ontologia/trayectoria.md`

---

# Utilizado por

- `30_ontologia/trayectoria.md`
- `30_ontologia/representacion.md`
- `40_metodologia/`
- `50_producto/`

---

# Declaración

El Estado constituye la unidad fundamental mediante la cual ATÓMICA preserva y organiza el conocimiento admitido sobre una Identidad.

Toda evolución del Modelo se produce mediante la creación de nuevos Estados.

Ningún Estado previamente constituido puede modificarse.
