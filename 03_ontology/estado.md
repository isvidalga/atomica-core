# ORG-STATE · Estado

| | |
|---|---|
| **Identificador** | ORG-STATE |
| **Capa** | 30 · Ontology |
| **Concepto canónico** | Estado |
| **Estado** | CANÓNICO |
| **Versión** | 1.0 |
| **Reemplaza** | — |

Las cláusulas de este documento se citan por su numeral (ORG-STATE §4.2).

---

# 1. Propósito

**1.1** El Modelo representa organizaciones mediante una sucesión de Estados.

**1.2** Toda inferencia, comparación, memoria, trayectoria o representación opera sobre Estados.

**1.3** Sin una definición formal de Estado no existe dominio sobre el que aplicar las operaciones del Modelo.

**1.4** Este documento define exclusivamente qué es un Estado.

---

# 2. Definición

**2.1** Un Estado es la representación íntegra del conocimiento que el Modelo admite sobre un único referente en un instante lógico.

**2.2** Todo Estado pertenece exactamente a un referente organizacional.

**2.3** Todo Estado representa únicamente el conocimiento admitido por el Modelo en el instante lógico en que fue constituido.

**2.4** Un Estado no representa la organización.

Representa el conocimiento disponible sobre ella.

**2.5** Todo Estado constituye un objeto del Modelo.

No constituye un hecho del mundo.

---

# 3. Naturaleza

**3.1** El Estado es una entidad ontológica del Modelo.

**3.2** Es inmutable.

Una vez constituido no puede modificarse.

**3.3** Todo cambio en el conocimiento produce un nuevo Estado.

Nunca modifica uno existente.

**3.4** El Estado no contiene interpretación.

Las interpretaciones pertenecen a las hipótesis.

**3.5** El Estado no contiene decisiones.

Las decisiones pertenecen a los usuarios.

**3.6** El Estado no constituye un juicio sobre la organización.

---

# 4. Constitución

Todo Estado está compuesto por:

**4.1** Identificador único.

**4.2** Referente organizacional.

**4.3** Instante lógico.

**4.4** Representación admitida.

**4.5** Relaciones con el Estado precedente.

**4.6** Relaciones con el Estado sucesor, cuando exista.

---

# 5. Exclusiones

Un Estado nunca contiene:

**5.1** Evidencias originales.

**5.2** Hipótesis.

**5.3** Explicaciones.

**5.4** Recomendaciones.

**5.5** Clasificaciones metodológicas.

**5.6** Puntuaciones.

**5.7** Interfaces.

**5.8** Algoritmos.

**5.9** Componentes visuales.

---

# 6. Formación

**6.1** Un Estado nace cuando el Modelo admite una representación distinta de la previamente vigente.

**6.2** El tiempo físico no determina la creación de un Estado.

**6.3** La creación depende exclusivamente de un cambio en el conocimiento admitido.

**6.4** El Estado anterior permanece inalterado.

---

# 7. Sucesión

**7.1** Todo Estado puede dar lugar, como máximo, a un Estado sucesor dentro de la misma identidad organizacional.

**7.2** La sucesión preserva la trazabilidad.

**7.3** La sucesión no implica continuidad de hipótesis.

**7.4** La sucesión no implica aumento de confianza.

---

# 8. Persistencia

**8.1** Todo Estado permanece como registro histórico.

**8.2** Ningún Estado desaparece.

**8.3** Sólo uno puede ser el Estado vigente de un referente.

**8.4** Los Estados históricos conservan toda su trazabilidad.

---

# 9. Terminación

**9.1** Un Estado deja de ser vigente únicamente cuando es sucedido por otro Estado.

**9.2** La pérdida de vigencia no altera su contenido.

**9.3** La terminación de la identidad organizacional no elimina los Estados históricos.

---

# 10. Invariantes

**I-1.** Todo Estado pertenece a un único referente.

**I-2.** Todo Estado posee un único identificador.

**I-3.** Todo Estado es inmutable.

**I-4.** Ningún Estado representa más de un referente.

**I-5.** Ningún Estado puede modificarse.

**I-6.** Todo Estado pertenece a exactamente una trayectoria.

**I-7.** Sólo puede existir un Estado vigente por referente.

**I-8.** Todo Estado conserva su trazabilidad.

**I-9.** Ninguna operación altera un Estado previamente constituido.

**I-10.** Todo cambio genera un nuevo Estado.

---

# 11. Dependencias

| Documento | Uso |
|-----------|-----|
| axioms | Fundamentos |
| knowledge-laws | Estatuto del conocimiento |
| identity | Referente |
| temporality | Instante lógico |
| traceability | Relaciones entre Estados |

---

# 12. Utilizado por

| Documento |
|-----------|
| trajectory |
| representation |
| hypothesis |
| evidence |
| aggregation |
| contradiction |
| decay |
| benchmark |
| ifo |
| observatorio |
