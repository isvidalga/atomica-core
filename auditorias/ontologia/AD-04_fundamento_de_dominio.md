# AD-04 · Fundamento de Dominio

Estado: CONGELADO

Versión: 1.0

Fecha: 2026-08-01

---

# Antecedentes

RA-01 identificó `Dominio` como término del vocabulario primitivo pendiente de fundamentación (H-02).

AD-01 estableció que `Modelo` es un metaobjeto raíz.

AD-02 fijó el mecanismo de implementación (C.i): los términos primitivos se declaran en `10_nucleo/axiomas.md`.

AD-03 estableció que `Organización` es el referente externo al Modelo.

Corresponde determinar la naturaleza de `Dominio`.

---

# Alternativas

## D-1 · Entidad ontológica

`Dominio` es una entidad de `30_ontologia`.

---

## D-2 · Ámbito del referente externo

`Dominio` designa la propia organización observada.

---

## D-3 · Sinónimo de Modelo

`Dominio` y `Modelo` representan exactamente el mismo concepto.

---

## D-4 · Ámbito conceptual interno al Modelo

`Dominio` designa el ámbito conceptual contenido en el Modelo y gobernado por la Ontología.

---

## D-5 · Capa documental

`Dominio` identifica una capa documental específica.

---

# Evidencia

La decisión se fundamenta en dos enunciados literales de secciones admitidas.

## E-1

`30_ontologia/relacion.md` · `# Naturaleza`

> pertenece al Modelo

> pertenece al dominio

Una Relación pertenece simultáneamente al Modelo y al dominio.

El dominio no puede situarse fuera del Modelo.

---

## E-2

`20_epistemologia/observacion.md` · `# Naturaleza`

> La observación pertenece al conocimiento construido por ATÓMICA.

> No pertenece a la organización observada.

> No constituye una propiedad del dominio.

Existe al menos un elemento perteneciente al Modelo que no pertenece al dominio.

Por tanto:

Dominio ⊊ Modelo.

---

## E-3

Las expresiones "organización observada" y "dominio" aparecen como exclusiones distintas dentro del mismo enunciado.

No pueden designar el mismo concepto.

---

## E-4

Inventario verificado.

- 36 apariciones.
- 26 documentos.
- 12 apariciones en secciones admitidas.
- 9 exclusiones expresas.

El uso predominante del término es normativo como criterio de frontera.

---

## E-5

`PP-009`

> La ontología gobierna el dominio.

El dominio constituye el ámbito gobernado por la Ontología.

---

# Decisión

Se adopta la alternativa D-4.

`Dominio` es el ámbito conceptual interno al Modelo.

Contiene aquello que el Modelo representa acerca del referente.

Está poblado por las entidades gobernadas por la Ontología.

Constituye un subconjunto propio del Modelo.

No es una entidad ontológica.

No es el referente externo.

No es equivalente al Modelo.

No identifica una capa documental.

Su declaración corresponde a `10_nucleo/axiomas.md` mediante el mecanismo C.i definido por AD-02.

---

# Consecuencias

1. `Dominio` pasa a formar parte del vocabulario primitivo declarado en `10_nucleo/axiomas.md`.

2. No se crea `30_ontologia/dominio.md`.

3. No se modifican secciones `# Dependencias`.

4. No se alteran prioridades ni dependencias del plan de remediación.

5. AD-04 no contradice AD-01, AD-02 ni AD-03.

6. Modelo contiene al Dominio.

7. El Dominio no contiene al Modelo.

---

# Declaración

Queda establecido que `Dominio` designa el ámbito conceptual interno del Modelo.

Representa el conjunto de aquello que el Modelo puede representar acerca del referente organizacional.

Su naturaleza es primitiva.

Su implementación se realizará mediante declaración en `10_nucleo/axiomas.md`, conforme al mecanismo C.i establecido por AD-02.

Las contradicciones CD-1 a CD-9 quedan registradas y expresamente fuera del alcance de esta decisión.
