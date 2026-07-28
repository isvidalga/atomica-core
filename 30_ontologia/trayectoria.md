# ORG-TRAJECTORY · Trayectoria

| | |
|---|---|
| **Identificador** | ORG-TRAJECTORY |
| **Capa** | 30 · Ontology |
| **Concepto canónico** | Trayectoria |
| **Estado** | CANÓNICO |
| **Versión** | 1.0 |
| **Reemplaza** | — |

Las cláusulas de este documento se citan por su numeral (ORG-TRAJECTORY §5.2).

---

# 1. Propósito

**1.1** El Modelo representa organizaciones mediante una sucesión ordenada de Estados.

**1.2** La Trayectoria constituye esa sucesión.

**1.3** Sin Trayectoria no existen evolución, memoria, persistencia ni comparación longitudinal.

**1.4** Este documento define exclusivamente la Trayectoria.

---

# 2. Definición

**2.1** Una Trayectoria es la secuencia ordenada de Estados pertenecientes a una misma Identidad Organizacional.

**2.2** Toda Trayectoria pertenece exactamente a una Identidad.

**2.3** Ningún Estado puede pertenecer simultáneamente a dos Trayectorias.

---

# 3. Naturaleza

**3.1** La Trayectoria es una entidad del Modelo.

**3.2** No constituye un objeto observado.

**3.3** No representa la historia real de la organización.

Representa la historia del conocimiento admitido por el Modelo.

**3.4** La Trayectoria no contiene información.

Contiene relaciones entre Estados.

---

# 4. Constitución

Toda Trayectoria está formada por:

**4.1** Una Identidad Organizacional.

**4.2** Un Estado inicial.

**4.3** Cero o más Estados intermedios.

**4.4** Un Estado vigente.

---

# 5. Formación

**5.1** Toda Trayectoria comienza con el primer Estado asociado a una Identidad.

**5.2** Cada nuevo Estado se incorpora al final de la Trayectoria.

**5.3** La incorporación nunca modifica los Estados anteriores.

**5.4** La Trayectoria únicamente puede crecer.

---

# 6. Continuidad

**6.1** La continuidad depende exclusivamente de la continuidad de la Identidad Organizacional.

**6.2** La ausencia de observaciones no interrumpe una Trayectoria.

**6.3** La interrupción de la Identidad finaliza la Trayectoria.

---

# 7. Terminación

**7.1** Una Trayectoria termina cuando termina la Identidad Organizacional.

**7.2** Una Trayectoria terminada nunca se reabre.

**7.3** Una nueva Identidad inicia necesariamente una nueva Trayectoria.

---

# 8. Exclusiones

Una Trayectoria nunca contiene:

**8.1** Hipótesis.

**8.2** Evidencias.

**8.3** Inferencias.

**8.4** Clasificaciones metodológicas.

**8.5** Resultados.

---

# 9. Invariantes

**I-1** Toda Trayectoria pertenece a una única Identidad.

**I-2** Toda Trayectoria posee exactamente un Estado inicial.

**I-3** Toda Trayectoria posee exactamente un Estado vigente.

**I-4** Ningún Estado pertenece a más de una Trayectoria.

**I-5** La secuencia es estrictamente ordenada.

**I-6** La Trayectoria sólo crece.

**I-7** Los Estados nunca cambian de posición.

**I-8** Una Trayectoria terminada nunca se reactiva.

---

# 10. Dependencias

| Documento | Uso |
|-----------|-----|
| ORG-STATE | Define los Estados |
| ORG-IDENTITY | Define el referente |
| TEMPORALITY | Orden lógico |

---

# 11. Utilizado por

| Documento |
|-----------|
| memoria |
| representacion |
| agregacion |
| decay |
| benchmark |
| cronica |
| observatorio |
