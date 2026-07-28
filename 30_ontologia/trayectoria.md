# Trayectoria

**Estado:** Frozen

**Versión:** 1.0.0

**Breadcrumb:** `30_ontologia/trayectoria.md`

---

# Propósito

Este documento define el concepto de Trayectoria dentro de la ontología de ATÓMICA.

La Trayectoria constituye la secuencia ordenada de Estados pertenecientes a una misma Identidad.

Toda evolución del Modelo se expresa mediante una Trayectoria.

---

# Definición

Una Trayectoria es la secuencia ordenada de Estados pertenecientes a una misma Identidad.

Toda Trayectoria pertenece exactamente a una Identidad.

Ningún Estado puede pertenecer simultáneamente a dos Trayectorias.

---

# Naturaleza

La Trayectoria:

- pertenece al Modelo;
- no constituye un objeto observado;
- representa la evolución del conocimiento admitido por el Modelo;
- no contiene información;
- contiene únicamente relaciones de sucesión entre Estados.

---

# Constitución

Toda Trayectoria está formada por:

- una Identidad;
- un Estado inicial;
- cero o más Estados intermedios;
- un Estado vigente.

---

# Formación

Toda Trayectoria comienza con el primer Estado asociado a una Identidad.

Cada nuevo Estado se incorpora al final de la Trayectoria.

La incorporación nunca modifica Estados anteriores.

Una Trayectoria únicamente puede crecer.

---

# Orden

La Trayectoria preserva el orden lógico de los Estados.

No representa necesariamente el tiempo cronológico.

Representa la secuencia mediante la cual evoluciona el conocimiento admitido por el Modelo.

---

# Continuidad

La continuidad de una Trayectoria depende exclusivamente de la continuidad de la Identidad.

La ausencia de nuevas Observaciones no interrumpe una Trayectoria.

La finalización de la Identidad finaliza la Trayectoria.

---

# Terminación

Una Trayectoria termina cuando finaliza la Identidad.

Una Trayectoria terminada nunca puede reabrirse.

Toda nueva Identidad inicia una nueva Trayectoria.

---

# Restricciones

## TR-001

Toda Trayectoria pertenece exactamente a una Identidad.

---

## TR-002

Toda Trayectoria posee exactamente un Estado inicial.

---

## TR-003

Toda Trayectoria posee exactamente un Estado vigente.

---

## TR-004

Ningún Estado pertenece a más de una Trayectoria.

---

## TR-005

La secuencia de Estados es estrictamente ordenada.

---

## TR-006

Una Trayectoria únicamente puede crecer.

---

## TR-007

Los Estados nunca cambian de posición dentro de una Trayectoria.

---

## TR-008

Una Trayectoria terminada nunca puede reactivarse.

---

# Exclusiones

Una Trayectoria nunca contiene:

- Observaciones;
- Evidencias;
- Hipótesis;
- Confianza;
- clasificaciones metodológicas;
- resultados;
- decisiones;
- intervenciones.

---

# Dependencias

- `10_nucleo/axiomas.md`
- `30_ontologia/identidad.md`
- `30_ontologia/estado.md`

---

# Utilizado por

- `30_ontologia/memoria.md`
- `30_ontologia/representacion.md`
- `40_metodologia/`
- `50_producto/`

---

# Declaración

La Trayectoria constituye la continuidad del conocimiento admitido por el Modelo sobre una Identidad.

Toda evolución del Modelo se expresa mediante la incorporación ordenada de nuevos Estados.

Ningún Estado previamente incorporado puede alterarse ni cambiar de posición.
