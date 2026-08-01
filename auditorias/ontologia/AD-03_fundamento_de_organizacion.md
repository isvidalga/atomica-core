# AD-03 · Fundamento de Organización

Estado: CONGELADO

Ubicación:

auditorias/ontologia/AD-03_fundamento_de_organizacion.md

---

# Antecedentes

La auditoría RA-01 identificó el término «Organización» como uno de los componentes del hallazgo H-02 («Vocabulario primitivo sin fundamento documental»).

La existencia reiterada del término en documentos canónicos, unida a la ausencia de una declaración explícita de su naturaleza, impedía determinar si debía tratarse como una entidad de la Ontología, un concepto epistemológico, un metaobjeto del Modelo o un término primitivo del núcleo.

AD-01 estableció que el Modelo constituye un metaobjeto raíz.

AD-02 determinó que dicho fundamento debía implementarse mediante el mecanismo C.i, incorporando las declaraciones necesarias dentro de `10_nucleo/axiomas.md`.

La presente auditoría determina la naturaleza de «Organización».

---

# Alternativas consideradas

## O-A · Organización como entidad ontológica

La Organización constituye una entidad perteneciente a la Ontología y debe documentarse dentro de `30_ontologia`.

Descartada.

Los axiomas A1 y A2 establecen expresamente la independencia del referente respecto del Modelo.

---

## O-B · Organización como referente externo

La Organización constituye el referente observado por el Modelo.

No pertenece al Modelo.

No constituye una entidad ontológica.

No constituye un artefacto epistemológico.

No constituye un metaobjeto.

Aceptada.

---

## O-C · Organización como metaobjeto

La Organización constituye la estructura superior que contiene el Modelo.

Descartada.

AD-01 ya determinó que esa función corresponde exclusivamente al Modelo.

---

# Evidencia

La decisión se fundamenta en tres hechos convergentes.

## E-1 · Primacía del referente

El axioma A1 declara:

> Existe un referente organizacional independiente del Modelo.

El axioma A2 añade:

> ATÓMICA nunca opera directamente sobre organizaciones.

Ambos enunciados sitúan explícitamente la Organización fuera del Modelo.

---

## E-2 · Consistencia de uso

Las once apariciones verificadas en secciones admitidas utilizan «Organización» exclusivamente como objeto de observación.

No aparece nunca como sujeto agente.

Esta pauta resulta consistente en todos los documentos inspeccionados.

---

## E-3 · Existencia del correlato interno

`identidad.md` define la Identidad como:

> continuidad lógica de un mismo referente organizacional a través del tiempo.

La existencia de dicho correlato presupone un referente externo distinto del Modelo.

---

# Decisión

Se adopta la alternativa O-B.

Organización queda establecida como el referente externo observado por ATÓMICA.

No pertenece al Modelo.

No pertenece a la Ontología.

No pertenece a la Epistemología.

No constituye un metaobjeto.

Su declaración corresponde al núcleo documental mediante el mecanismo C.i aprobado por AD-02.

---

# Consecuencias

La decisión implica:

- no crear `30_ontologia/organizacion.md`;
- no modificar las secciones `# Dependencias`;
- no alterar RA-01;
- no modificar el camino crítico del plan de remediación;
- implementar una única declaración en `10_nucleo/axiomas.md`.

Las contradicciones detectadas durante la inspección del repositorio permanecen abiertas y quedan fuera del alcance de esta auditoría.

---

# Declaración

«Organización» designa el referente organizacional independiente observado por ATÓMICA.

No forma parte del Modelo.

El Modelo únicamente representa conocimiento admitido acerca de dicho referente.

Toda utilización normativa del término deberá respetar esta naturaleza.
