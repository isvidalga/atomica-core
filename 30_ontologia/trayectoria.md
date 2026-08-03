# TRAYECTORIA

Estado: CANÓNICO

Tipo: CONCEPTO

Versión: 2.0.0

Ubicación:

30_ontologia/trayectoria.md

---

# Propósito

Definir el concepto de Trayectoria dentro de la ontología de ATÓMICA.

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
- preserva el orden lógico de los Estados;
- no contiene conocimiento;
- contiene exclusivamente relaciones de sucesión entre Estados.

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

Representa la secuencia mediante la cual evoluciona el conocimiento del Modelo.

---

# Continuidad

La continuidad de una Trayectoria depende exclusivamente de la continuidad de la Identidad.

La ausencia de nuevas Observaciones nunca interrumpe una Trayectoria.

La finalización de la Identidad finaliza la Trayectoria.

---

# Finalización

Una Trayectoria finaliza cuando finaliza la Identidad.

Una Trayectoria finalizada conserva íntegramente su historial.

Nunca puede incorporar nuevos Estados.

---

# Restricciones

## TR-001

Toda Trayectoria pertenece exactamente a una Identidad.

---

## TR-002

Toda Trayectoria posee exactamente un Estado inicial.

---

## TR-003

Toda Trayectoria posee exactamente un Estado vigente mientras permanezca activa.

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

Toda Trayectoria conserva permanentemente su historial.

---

# Exclusiones

Una Trayectoria nunca contiene:

- Observaciones;
- Evidencias;
- Hipótesis;
- Confianza;
- decisiones;
- intervenciones;
- interfaces;
- componentes visuales.

---

# Relaciones

Depende de:

- 10_nucleo/axiomas.md
- 10_nucleo/principios.md
- 30_ontologia/identidad.md
- 30_ontologia/estado.md

Gobierna:

- memoria.md

Utilizado por:

- representacion.md
- 40_metodologia/
- 50_producto/

---

# Responsabilidad

Este documento define exclusivamente el concepto de Trayectoria.

No define Estados.

No define Memoria.

No define Representaciones.

No establece procedimientos metodológicos.

---

# Declaración

La Trayectoria constituye la estructura que preserva la sucesión ordenada de Estados pertenecientes a una misma Identidad.

Toda evolución del Modelo se expresa mediante la incorporación ordenada de nuevos Estados.

Ningún Estado previamente incorporado puede alterarse ni cambiar de posición.
