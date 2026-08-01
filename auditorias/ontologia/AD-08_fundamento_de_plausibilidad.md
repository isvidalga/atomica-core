# AD-08 · Fundamento de Plausibilidad

Estado: CONGELADO

Versión: 1.0

Fecha: 2026-08-01

---

# Antecedentes

RA-01 identificó `plausibilidad` como último término pendiente de resolución dentro del hallazgo H-02.

AD-01 estableció el mecanismo de análisis para distinguir términos primitivos de expresiones derivadas.

AD-05 resolvió `entidades del dominio` como expresión derivada mediante co-referencia.

Corresponde determinar la naturaleza de `plausibilidad`.

---

# Alternativas

## P-A · Término primitivo

`Plausibilidad` constituye un término primitivo del núcleo.

---

## P-B · Concepto ontológico

`Plausibilidad` constituye una entidad o propiedad propia de la Ontología.

---

## P-C · Concepto epistemológico autónomo

`Plausibilidad` constituye un concepto independiente de `Confianza`.

---

## P-D · Expresión derivada

`Plausibilidad` constituye una expresión derivada que designa la magnitud denominada `Confianza`.

---

# Evidencia

## E-1

Inventario verificado.

- 5 apariciones.
- 5 documentos.
- 3 capas.
- Una única aparición en sección admitida.

No aparecen referencias en:

- 10_nucleo
- 30_ontologia
- 40_metodologia
- 50_producto
- 60_interfaces

Es el término con menor presencia documental de todos los analizados en G-1.

---

## E-2

`70_patrones/ciclo_vida_patron.md`

En una misma sección aparecen las expresiones:

- «reducir la plausibilidad del patrón»
- «con menor confianza»

Ambas describen el mismo fenómeno.

La co-referencia se produce dentro de la misma sección admitida.

---

## E-3

`hipotesis.md`

Toda Hipótesis posee exactamente un nivel de Confianza.

La enumeración normativa de propiedades de la Hipótesis no incluye `plausibilidad`.

---

## E-4

`evidencia.md`

La Evidencia modifica únicamente la Confianza del Modelo.

No declara ninguna modificación independiente de la plausibilidad.

---

## E-5

`confianza.md`

Define la Confianza como:

- propiedad de una Hipótesis;
- representación de la solidez con la que el Modelo sostiene dicha Hipótesis.

Ninguna sección utiliza el término `plausibilidad`.

---

## E-6

No existen apariciones de `plausibilidad` en los axiomas.

El término nunca participa en una declaración fundacional.

---

# Decisión

Se adopta la alternativa P-D.

`Plausibilidad` constituye una expresión derivada.

Designa la misma magnitud que la Epistemología denomina `Confianza`.

No constituye un término primitivo.

No constituye un concepto autónomo.

No requiere declaración en `10_nucleo/axiomas.md`.

---

# Consecuencias

1. `Plausibilidad` deja de formar parte del vocabulario primitivo pendiente.

2. No se crea ningún documento nuevo.

3. No se modifica `10_nucleo/axiomas.md`.

4. AD-08 no contradice AD-01, AD-02, AD-03, AD-04, AD-05, AD-06 ni AD-07.

5. Con AD-08 queda completamente resuelto el hallazgo H-02.

6. Las contradicciones CP-1 a CP-9 quedan registradas y fuera del alcance de esta decisión.

---

# Declaración

Queda establecido que `plausibilidad` constituye una expresión derivada.

Su referencia coincide con la magnitud denominada `Confianza` por la Epistemología.

No requiere fundamento autónomo ni incorporación al vocabulario primitivo.

Las contradicciones registradas permanecen abiertas y no son resueltas por esta decisión.
