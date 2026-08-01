# AD-06 · Fundamento de Conocimiento Admitido

Estado: CONGELADO

Versión: 1.0

Fecha: 2026-08-01

---

# Antecedentes

RA-01 identificó `conocimiento admitido` como término del vocabulario primitivo pendiente de fundamentación (H-02).

AD-01 estableció que `Modelo` es un término primitivo.

AD-02 fijó el mecanismo de implementación C.i mediante declaración en `10_nucleo/axiomas.md`.

AD-03 estableció el referente externo.

AD-04 delimitó el Dominio.

AD-05 resolvió que `entidades del dominio` constituye una expresión derivada.

Corresponde determinar la naturaleza de `conocimiento admitido`.

---

# Alternativas

## K-1 · Concepto epistemológico

`Conocimiento admitido` pertenece a la Epistemología.

---

## K-2 · Término primitivo autónomo

`Conocimiento admitido` constituye un término primitivo del núcleo.

---

## K-3 · Resultado del proceso de admisión

`Conocimiento admitido` es únicamente el resultado del proceso epistemológico de admisión.

---

## K-4 · Sinónimo de conocimiento disponible

`Conocimiento admitido` y `conocimiento disponible` designan exactamente el mismo concepto.

---

## K-5 · Propiedad

`Conocimiento admitido` constituye una propiedad del Modelo.

---

# Evidencia

## E-1

No existe definición del acto de admisión.

Las formas `admisible`, `admitida` y `admitidas` aparecen únicamente en los axiomas A5, A6 y A13.

Ningún documento declara qué significa admitir conocimiento.

---

## E-2

La capa `20_epistemologia` no contiene ninguna aparición de las formas `admit*` o `admisi*`.

La Epistemología no establece el criterio de admisión.

---

## E-3

`estado.md` emplea las expresiones:

- «el conocimiento que el Modelo admite»
- «el conocimiento disponible sobre ella»

No existe ninguna regla que las declare equivalentes.

No es posible reducir una expresión a la otra.

---

## E-4

Inventario verificado.

- 20 apariciones.
- 7 documentos.
- 12 apariciones en secciones admitidas.
- 18 apariciones exactas y 2 variantes.

Distribución:

- 30_ontologia: 15
- 50_producto: 5

Cero apariciones en:

- 00_canon
- 10_nucleo
- 20_epistemologia
- 40_metodologia
- 60_interfaces
- 70_patrones

---

## E-5

Las doce apariciones en secciones admitidas constituyen usos positivos.

El conocimiento admitido:

- se organiza,
- se estructura,
- cambia,
- evoluciona,
- se reconstruye.

Nunca aparece como propiedad.

---

## E-6

`ST-009`

> Todo cambio en el conocimiento admitido genera un nuevo Estado.

`MM-003`

> exactamente el mismo conocimiento admitido en ese instante.

El término designa el contenido cuya identidad se preserva o cambia.

No describe una propiedad.

---

# Decisión

Se adopta la alternativa K-2.

`Conocimiento admitido` constituye un término primitivo autónomo.

Designa el contenido determinado que el Modelo admite sobre una Identidad en un instante lógico.

Es el contenido representado por el Estado.

Es estructurado por la Representación.

Su evolución queda descrita por la Trayectoria.

Su reconstrucción corresponde a la Memoria.

No constituye un concepto epistemológico.

No es reducible al conocimiento disponible.

No constituye una propiedad.

Su declaración corresponde a `10_nucleo/axiomas.md` mediante el mecanismo C.i establecido por AD-02.

---

# Consecuencias

1. `Conocimiento admitido` pasa a formar parte del vocabulario primitivo declarado en `10_nucleo/axiomas.md`.

2. No se crea ningún documento adicional.

3. No se modifican secciones `# Dependencias`.

4. AD-06 no contradice AD-01, AD-02, AD-03, AD-04 ni AD-05.

5. Permanece abierta la ausencia de una definición normativa del criterio de admisión.

6. Las contradicciones CK-1 a CK-9 quedan registradas y fuera del alcance de esta decisión.

---

# Declaración

Queda establecido que `conocimiento admitido` es un término primitivo del núcleo.

Designa el contenido determinado que el Modelo admite respecto de una Identidad en un instante lógico.

Su naturaleza no es derivable de otros conceptos existentes.

Su implementación se realizará mediante declaración en `10_nucleo/axiomas.md`, conforme al mecanismo C.i establecido por AD-02.

Las contradicciones registradas permanecen abiertas y no son resueltas por esta decisión.
