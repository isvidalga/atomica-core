# AD-05 · FUNDAMENTO DE ENTIDADES DEL DOMINIO

Estado: CONGELADA

Repositorio: atomica-core

Ámbito: Núcleo · Ontología

HEAD auditado:

```
74767cb8b1a55b63df37226866a3f57547790a8b
```

Contenido canónico coincidente con `origin/main` = `8eb1c6a`. HEAD añade únicamente `AD-01`, `AD-02`, `AD-03` y `AD-04`, los cuatro en `auditorias/ontologia/`.

Autoridades: `RA-01_consolidacion_hallazgos.md` · `plan_remediacion_v1.2.md` · `AD-01_fundamento_del_modelo.md` · `AD-02_implementacion_documental_del_modelo.md` · `AD-03_fundamento_de_organizacion.md` · `AD-04_fundamento_de_dominio.md` · inspección directa del repositorio en HEAD.

Ubicación:

```
auditorias/ontologia/AD-05_fundamento_de_entidades_del_dominio.md
```

---

# Antecedentes

`AD-01` congeló **C · `Modelo` es un metaobjeto raíz**, término primitivo declarado en `10_nucleo`, *«presupuesto por los axiomas y no derivado de ellos»*.

`AD-02` congeló la variante **C.i**: los términos primitivos se declaran en secciones admitidas de `10_nucleo/axiomas.md`, sin documentos nuevos y sin modificar ninguna sección `# Dependencias`.

`AD-03` congeló **O-B · `Organización` es el referente externo**, situado fuera del Modelo conforme al axioma `A1`.

`AD-04` congeló **D-4 · `Dominio` es el ámbito conceptual interno al Modelo**, estrictamente menor que él, *«poblado por las entidades que la Ontología declara y gobierna»*.

`RA-01 · RA-01.1 · H-02` enumera los seis conceptos fantasma distintos de `Modelo`. Uno de ellos es **`entidades del dominio`**, con la extensión verificada por `R-10 · Tarea 1.b`: *«`relacion.md` `# Definición`, `# Constitución`, `# Formación`, `RL-001`…`RL-005`»*.

`plan_remediacion_v1.2.md · G-1`, prioridad 1, `Dependencias: ninguna`, objetivo: *«Dotar de fundamento documental a los siete conceptos fantasma y cerrar semánticamente el grafo.»*

`AD-04 · § E-6 · CD-3` registró expresamente, y dejó sin resolver por exclusión de alcance:

> Nueve de las doce apariciones en secciones admitidas se enuncian mediante `entidad del dominio`, término que `RA-01 · H-02` clasifica fantasma. **El criterio de frontera del repositorio está formulado en términos no definidos.**

Este documento resuelve exclusivamente esa incidencia. No resuelve `Modelo`, `Organización`, `Dominio`, `Estado`, `Representación`, `Capacidad` ni `Fragilidad`.

---

# Alternativas

Cinco alternativas resultan construibles sobre la evidencia localizada. No se considera ninguna otra.

## E-1 · Entidad ontológica autónoma

**Definición.** `Entidades del dominio` designa una entidad de la Ontología, con documento propio en `30_ontologia` y las ocho secciones admitidas.

**Evidencia documental.** Ninguna directa. Se construye por analogía con las entidades congeladas de `30_ontologia`.

**Contradicciones.** Tres, verificadas:
- En las quince apariciones el término es siempre **sintagma en función de complemento**: nunca sujeto de un enunciado definitorio, nunca objeto de una restricción propia, nunca con constitución ni formación declaradas.
- `30_ontologia/catalogo_entidades.md`, *«única fuente de verdad sobre la existencia de entidades ontológicas»*, **no lo inscribe**.
- El mismo catálogo declara: *«**No define las entidades.** No especifica su estructura.»* La categoría `entidad` carece de documento definitorio en todo el repositorio; una entidad llamada «entidades» sería definida en términos de una categoría no definida.

**Documentos afectados.** Un documento nuevo en `30_ontologia`; declaración en `# Dependencias` de los 9 documentos que emplean el término en sección admitida.

**Impacto sobre RA-01.** `H-02` se escinde; recálculo de RA-01.7, RA-01.8 y RA-01.9.

**Impacto sobre `plan_remediacion_v1.2`.** Las modificaciones de `# Dependencias` son materia de **G-6** (prioridad 7, dependencias G-3 y G-4). Ejecutarlas en G-1 reproduce el ciclo `G-1 → G-4 → G-6 → G-1` verificado por `AD-02 · E-4`.

## E-2 · Término primitivo autónomo

**Definición.** `Entidades del dominio` es un término primitivo con declaración propia en `10_nucleo/axiomas.md`, al mismo nivel que `Modelo`, `Organización` y `Dominio`.

**Evidencia documental.** `RA-01 · H-02` lo agrupa con los demás fantasmas; `plan_remediacion_v1.2 · G-1` se titula *«Cierre del vocabulario primitivo»* y le asigna fundamento documental.

**Contradicciones.** Una, verificada y decisiva:
- `AD-01 · § Decisión` fijó la condición de término primitivo: *«un término primitivo no se deriva, se declara»*. `50_producto/modelo_objetos`, sección `# Principio Fundamental`, líneas 21 y 23 **consecutivas**, enuncia el mismo criterio dos veces con dos formulaciones distintas: *«Toda representación del Producto corresponde exactamente a una **entidad definida en la Ontología**»* · *«Si una representación no puede asociarse a una **entidad del dominio**, no pertenece a ATÓMICA.»* La expresión **es reducible** a otra ya vigente. No cumple la condición de primitivo aplicada por `AD-01`.

**Documentos afectados.** `10_nucleo/axiomas.md`.

**Impacto sobre RA-01.** Ninguno.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno.

## E-3 · Expresión referencial derivada

**Definición.** `Entidades del dominio` no es un concepto nuevo: es la expresión que designa **la extensión del dominio**, es decir, el conjunto de las entidades que la Ontología declara y que, conforme a `AD-04`, pueblan el ámbito conceptual interno al Modelo. Su función normativa dominante es la de **criterio de pertenencia**. Sus dos componentes están ya fijados: `dominio` por `AD-04`; la exigencia sobre `entidad` por `PP-009`.

**Evidencia documental.** Toda la de § Evidencia · E-3, E-4 y E-5. En síntesis: co-referencia literal verificada en cuatro documentos, siete de nueve apariciones en secciones admitidas son exclusiones, y `PP-009` fija la condición de existencia de toda entidad.

**Contradicciones.** Ninguna con la evidencia en secciones admitidas. Las incidencias de § E-6 afectan a la coherencia del corpus, no a esta lectura.

**Documentos afectados.** Ninguno adicional. `10_nucleo/axiomas.md` ya está previsto por `AD-03` y `AD-04`.

**Impacto sobre RA-01.** Ninguno. `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno. Cero documentos nuevos, cero modificaciones de `# Dependencias`.

## E-4 · Sinónimo de «entidades del Modelo»

**Definición.** `Entidades del dominio` designa lo mismo que `entidades del Modelo`: todo cuanto el Modelo contiene.

**Evidencia documental.** `50_producto/laboratorio_conocimiento.md` emplea ambas expresiones: *«No constituye una entidad del dominio»* (`# Naturaleza`, l. 27) y *«las Relaciones existentes entre las entidades del Modelo»* (`# Relaciones`, l. 102). `50_producto/memoria_organizacional.md:30` emplea igualmente *«entidades del Modelo»*.

**Contradicciones.** Una, verificada y decisiva:
- `AD-04 · § E-4` estableció, sobre `20_epistemologia/observacion.md` `# Naturaleza` y `30_ontologia/representacion.md` `# Constitución`, que **dominio ⊊ Modelo**: la `Observación` es admitida por el Modelo y *«No constituye una propiedad del dominio»*. Si las dos expresiones fuesen sinónimas, la `Observación` pertenecería y no pertenecería al mismo conjunto.

**Documentos afectados.** Ninguno: la alternativa niega la necesidad de fundamento propio.

**Impacto sobre RA-01.** `H-02` perdería un término sin resolverlo.

**Impacto sobre `plan_remediacion_v1.2`.** El objetivo literal de G-1 quedaría incumplido para uno de los siete conceptos.

## E-5 · Extensión fijada por el catálogo

**Definición.** `Entidades del dominio` designa exactamente las diez entradas inscritas en `30_ontologia/catalogo_entidades.md`.

**Evidencia documental.** `catalogo_entidades.md` `# Principios`: *«Toda entidad existe únicamente cuando figura inscrita en este catálogo.»* · `# Propósito`: *«Este documento constituye la única fuente de verdad sobre la existencia de entidades ontológicas.»*

**Contradicciones.** Dos, verificadas:
- El catálogo inscribe **`ENT-001 · Organización`**. `AD-03` determinó que `Organización` es el referente externo, situado **fuera** del Modelo conforme a `A1`; `AD-04` estableció que **dominio ⊊ Modelo**. Luego `Organización` no puede ser entidad del dominio. **Las dos extensiones difieren al menos en un elemento.**
- El catálogo **omite** `Identidad`, `Observación`, `Confianza` y `Modelo`, todos ellos con documento y `# Definición` en HEAD — registrado en `AD-03 · E-7 · C-6`. La extensión declarada es simultáneamente excesiva y deficiente.

**Documentos afectados.** Ninguno, o bien `catalogo_entidades.md`, cuya modificación no pertenece a G-1.

**Impacto sobre RA-01.** Ninguno directo; obligaría a auditar el catálogo, ajeno a la serie.

**Impacto sobre `plan_remediacion_v1.2`.** La corrección del catálogo no está asignada a ningún grupo del plan.

---

# Evidencia

Inspección directa del repositorio en HEAD `74767cb`, sin filtro de extensión, sobre las ocho capas canónicas.

## E-1 · Inventario

**Hecho verificado.** El sintagma aparece **15 veces en 10 documentos**. Búsqueda de las variantes capitalizadas `Entidad del dominio`, `Entidades del dominio`, `Entidad del Dominio` y `Entidades del Dominio`: **0 resultados**. El término aparece siempre en minúscula.

| Capa | Documentos | Apariciones |
|---|---|---|
| `00_canon` | 0 | 0 |
| `10_nucleo` | 0 | 0 |
| `20_epistemologia` | 0 | 0 |
| `30_ontologia` | 1 | 3 |
| `40_metodologia` | 2 | 2 |
| `50_producto` | 7 | 10 |
| `60_interfaces` | 0 | 0 |
| `70_patrones` | 0 | 0 |

**Hecho verificado.** No existe en el repositorio ningún enunciado de la forma *«Una entidad del dominio es…»*. Cero enunciados definitorios.

**Hecho verificado.** El término **no figura** en `30_ontologia/catalogo_entidades.md`, que declara ser *«la única fuente de verdad sobre la existencia de entidades ontológicas»*.

**Hecho verificado.** El término **no aparece en `00_canon` ni en `10_nucleo`**: ninguna capa normativa superior lo emplea. Su uso se concentra en `50_producto` (10 de 15).

## E-2 · Apariciones en secciones admitidas

Secciones admitidas: Definición · Naturaleza · Constitución · Formación · Restricciones · Dependencias · Utilizado por · Declaración. **9 apariciones en 8 documentos.**

| # | Documento | Línea | Sección | Contexto literal | Función semántica |
|---|---|---|---|---|---|
| 1 | `30_ontologia/relacion.md` | 25 | `# Definición` | *«Una Relación es una conexión estructural entre dos o más **entidades del dominio**.»* | **Uso positivo · argumento de la Relación** |
| 2 | `30_ontologia/relacion.md` | 70 | `# Restricciones · RL-001` | *«Toda Relación conecta dos o más **entidades del dominio**.»* | **Uso positivo · argumento de la Relación** |
| 3 | `40_metodologia/dimensiones.md` | 25 | `# Naturaleza` | *«No representan **entidades del dominio**.»* | **Exclusión** |
| 4 | `40_metodologia/ifo.md` | 192 | `# Restricciones · IFO-001` | *«El IFO nunca constituye una **entidad del dominio**.»* | **Exclusión** |
| 5 | `50_producto/grafo_conocimiento.md` | 25 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |
| 6 | `50_producto/explicabilidad.md` | 25 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |
| 7 | `50_producto/laboratorio_conocimiento.md` | 27 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |
| 8 | `50_producto/deteccion_patrones.md` | 27 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |
| 9 | `50_producto/linea_temporal` | 25 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |

**Hecho verificado.** De las nueve apariciones en secciones admitidas, **siete son exclusiones expresas** y **dos son usos positivos**, ambos en `30_ontologia/relacion.md`, y ambos con la misma función: designar los argumentos que una Relación conecta.

**Hecho verificado.** Las siete exclusiones son literalmente idénticas en cinco casos (*«No constituye una entidad del dominio»*) y equivalentes en los otros dos. Ninguna capa normativa las regula.

## E-3 · Apariciones en secciones no admitidas

| Documento | Línea | Sección | Contexto literal | Clasificación |
|---|---|---|---|---|
| `30_ontologia/relacion.md` | 15 | `# Propósito` | *«conexión estructural existente entre dos o más **entidades del dominio**»* | Repetición del enunciado de `# Definición` |
| `50_producto/grafo_conocimiento.md` | 13 | `# Propósito` | *«hacer visibles las relaciones existentes entre las **entidades del dominio**»* | Uso positivo |
| `50_producto/lenguaje_producto` | 11 | `# Propósito` | *«las reglas mediante las cuales las **entidades del dominio** se representan dentro de ATÓMICA»* | Uso positivo |
| `50_producto/modelo_objetos` | 15 | `# Propósito` | *«Toda representación visual constituye la manifestación de una **entidad del dominio**»* | Uso positivo |
| `50_producto/modelo_objetos` | 23 | `# Principio Fundamental` | *«Si una representación no puede asociarse a una **entidad del dominio**, no pertenece a ATÓMICA.»* | **Criterio de pertenencia al Producto** |
| `50_producto/modelo_objetos` | 45 | `# Representación` | *«Toda **entidad del dominio** podrá disponer de tres niveles de representación.»* | Uso positivo |

**Hecho verificado.** Ninguna aparición es ejemplo, comentario ni prosa ilustrativa. Las quince son enunciados normativos o de propósito. No existen usos coloquiales del sintagma.

## E-4 · Co-referencia verificada con «entidad de la Ontología»

**Prueba decisiva.** `50_producto/modelo_objetos`, sección `# Principio Fundamental`, líneas 21 y 23, **consecutivas**, texto literal:

> Toda representación del Producto corresponde exactamente a una **entidad definida en la Ontología**.
>
> Si una representación no puede asociarse a una **entidad del dominio**, no pertenece a ATÓMICA.

**Hecho verificado.** Un mismo criterio, enunciado dos veces en dos frases consecutivas de la misma sección, con dos formulaciones distintas. `entidad definida en la Ontología` y `entidad del dominio` designan el mismo conjunto.

**Confirmación en tres documentos más:**

| Documento | Formulación A | Formulación B | Relación verificada |
|---|---|---|---|
| `40_metodologia/ifo.md` | `# Naturaleza`, l. 27: *«No constituye una **entidad de la Ontología**.»* | `# Restricciones · IFO-001`, l. 192: *«El IFO nunca constituye una **entidad del dominio**.»* | Misma exclusión, mismo sujeto, dos formulaciones |
| `50_producto/grafo_conocimiento.md` | `# Componentes`, l. 35: *«El Grafo representa exclusivamente **entidades definidas por la Ontología**.»* | `# Componentes`, l. 49: *«No incorpora **entidades ajenas al dominio**.»* | Misma sección: inclusión y exclusión del mismo conjunto |
| `50_producto/laboratorio_conocimiento.md` | `# Contenido`, l. 45: *«integra exclusivamente **entidades definidas por la Ontología**»* | `# Naturaleza`, l. 27: *«No constituye una **entidad del dominio**.»* | Mismo documento, mismo conjunto |

**Ausencia de autoridad.** Ningún documento declara la equivalencia. La co-referencia se verifica por uso intradocumental, nunca por norma.

## E-5 · La condición de existencia está fijada por `PP-009`

`00_canon/primeros_principios.md`, `## PP-009 · La ontología gobierna el dominio`:

> Toda entidad utilizada por ATÓMICA deberá existir previamente en la Ontología.
>
> Ningún concepto podrá utilizarse antes de haber sido definido.

**Hecho verificado.** `PP-009` fija la condición de existencia de toda entidad —existir previamente en la Ontología— y su título vincula esa condición con el dominio.

**Consecuencia verificada, por confrontación con AD-04.** `AD-04 · § Decisión` estableció que el dominio está *«poblado por las entidades que la Ontología declara y gobierna»*. `PP-009` establece que toda entidad debe existir previamente en la Ontología. `E-4` verifica que `entidad del dominio` y `entidad definida en la Ontología` se emplean como co-referentes. Los tres enunciados convergen: **la extensión de `entidades del dominio` es la de las entidades que la Ontología declara.**

**Consecuencia verificada.** La expresión es **reducible**: su referencia queda determinada por `dominio` —fijado por `AD-04`— y por la condición de `PP-009`. No requiere declaración independiente.

## E-6 · Contradicciones registradas

Se registran conforme al encargo. **Ninguna se resuelve aquí.**

**CE-1 · Cinco formulaciones co-referentes sin regla de equivalencia.**
`entidad del dominio` (15) · `entidad de la Ontología` (`ifo.md:27`, `timeline.md:29`, `grafo_relaciones.md:29`) · `entidades definidas por la Ontología` (`grafo_conocimiento.md:35`, `laboratorio_conocimiento.md:45`) · `entidad definida en la Ontología` (`modelo_objetos:21`) · `entidades ontológicas` (`catalogo_entidades.md:17`, `diagnostico.md:69`). La intercambiabilidad se verifica por uso; ningún documento la declara. **Ausencia de autoridad.**

**CE-2 · `entidades del Modelo` se emplea sin distinguirse de `entidades del dominio`.**
`laboratorio_conocimiento.md` emplea ambas (l. 27 y l. 102); `memoria_organizacional.md:30` emplea la primera. `AD-04 · § E-4` estableció que dominio ⊊ Modelo: los dos conjuntos no coinciden y los documentos no los distinguen.

**CE-3 · La extensión del catálogo y la del dominio difieren.**
`catalogo_entidades.md` inscribe `ENT-001 · Organización`. `AD-03` sitúa `Organización` fuera del Modelo; `AD-04` establece dominio ⊊ Modelo. `Organización` no puede ser entidad del dominio.

**CE-4 · `grafo_conocimiento.md` `# Componentes` contradice a `observacion.md` `# Naturaleza`.**
Enumera como *«entidades definidas por la Ontología»*, y por tanto no *«ajenas al dominio»*: `Organización`, `Estado`, `Observación`, `Evidencia`, `Hipótesis`, `Capacidad`, `Fragilidad`, `Relación`, `Trayectoria`. Dos entradas contradicen decisiones o documentos vigentes: `Organización` (CE-3) y `Observación`, que `20_epistemologia/observacion.md` `# Naturaleza` —sección admitida— declara *«No constituye una propiedad del dominio»*.

**CE-5 · La categoría `entidad` carece de definición en todo el repositorio.**
`catalogo_entidades.md` `# Propósito` declara expresamente: *«**No define las entidades.** No especifica su estructura. Únicamente declara cuáles existen oficialmente.»* `PP-009` la emplea sin definirla; `00_canon/politica_identificadores.md` la registra en doce enunciados sin definirla. **Este término no figura en el inventario de `R-10 · Tarea 9` ni en `RA-01 · H-02`.** Se registra como incidencia nueva y queda **expresamente fuera del alcance de AD-05**: no se incorpora a la decisión ni a ninguna conclusión.

**CE-6 · `relacion.md` emplea dos designaciones para sus argumentos.**
`# Definición` y `RL-001` emplean *«entidades del dominio»*; `# Definición`, `# Constitución`, `# Formación`, `RL-002` a `RL-005` y `# Declaración` emplean *«las entidades relacionadas»*, *«las entidades que conecta»* y *«las entidades»* — nueve apariciones. Ningún documento declara si designan el mismo conjunto.

**CE-7 · El criterio de pertenencia al Producto se formula sobre término no definido.**
`50_producto/modelo_objetos` `# Principio Fundamental`: *«Si una representación no puede asociarse a una entidad del dominio, no pertenece a ATÓMICA.»* La frontera del Producto entero descansa sobre el sintagma auditado.

**CE-8 · Tres de los diez documentos carecen de extensión `.md`.**
`50_producto/linea_temporal`, `50_producto/lenguaje_producto` y `50_producto/modelo_objetos` contienen cuatro de las quince apariciones, una de ellas en sección admitida. Registrado en `AD-04 · CD-8`.

**CE-9 · Las contradicciones de `AD-03` y `AD-04` permanecen abiertas.**
Verificado en HEAD: las nueve de `AD-03 · E-7` y las nueve de `AD-04 · E-6` subsisten, entre ellas la existencia de `30_ontologia/modelo.md`, descartada expresamente por `AD-01` y `AD-02`.

---

# Decisión

# E-3 · `Entidades del dominio` es una expresión referencial derivada

**`Entidades del dominio` no es un concepto autónomo ni un término primitivo. Es la expresión que designa la extensión del dominio: el conjunto de las entidades que la Ontología declara y que, conforme a `AD-04`, pueblan el ámbito conceptual interno al Modelo. Su función normativa dominante es la de criterio de pertenencia. Su referencia queda determinada por `dominio` —fijado por `AD-04`— y por la condición de existencia de `PP-009`, sin necesidad de declaración independiente.**

**Justificación, exclusivamente por evidencia documental:**

**No es E-1.** En las quince apariciones el término es siempre sintagma en función de complemento: nunca sujeto de un enunciado definitorio, nunca con constitución, formación ni restricción propias. `catalogo_entidades.md`, que se declara *«única fuente de verdad sobre la existencia de entidades ontológicas»*, no lo inscribe. Y el mismo catálogo declara *«No define las entidades»*: una entidad así llamada quedaría definida en términos de una categoría que ningún documento define.

**No es E-2.** `AD-01 · § Decisión` fijó la condición del término primitivo: *«un término primitivo no se deriva, se declara»*. `modelo_objetos` `# Principio Fundamental` enuncia el mismo criterio en dos frases **consecutivas**, una con *«entidad definida en la Ontología»* y otra con *«entidad del dominio»*. La expresión es reducible a otra ya vigente y por tanto no satisface la condición que `AD-01` aplicó a `Modelo`.

**No es E-4.** `AD-04 · § E-4` estableció, sobre `observacion.md` `# Naturaleza` y `representacion.md` `# Constitución`, que dominio ⊊ Modelo: la `Observación` es admitida por el Modelo y no constituye propiedad del dominio. Si `entidades del dominio` y `entidades del Modelo` fuesen sinónimas, la `Observación` pertenecería y no pertenecería al mismo conjunto.

**No es E-5.** `catalogo_entidades.md` inscribe `ENT-001 · Organización`, que `AD-03` situó fuera del Modelo y que `AD-04` excluye del dominio; y omite `Identidad`, `Observación`, `Confianza` y `Modelo`. La extensión del catálogo es a la vez excesiva y deficiente respecto de la del dominio, de modo que no puede fijarla.

**Es E-3, por tres hechos verificados:**

1. **Co-referencia literal en líneas consecutivas.** `modelo_objetos` `# Principio Fundamental`, líneas 21 y 23, enuncia el mismo criterio con *«entidad definida en la Ontología»* y con *«entidad del dominio»*. La equivalencia se confirma en `ifo.md` (`# Naturaleza` frente a `IFO-001`), en `grafo_conocimiento.md` (dos líneas de la misma sección `# Componentes`) y en `laboratorio_conocimiento.md` (dos secciones del mismo documento). Cuatro documentos, cuatro capas distintas de uso.

2. **Función normativa verificada.** De las nueve apariciones en secciones admitidas, **siete son exclusiones expresas** —metodología, producto— y **dos son usos positivos**, ambos en `relacion.md` y ambos designando los argumentos de una Relación. El término opera como criterio de pertenencia, no como concepto con contenido propio.

3. **Sus dos componentes ya están fijados.** `AD-04 · § Decisión` determinó que el dominio está *«poblado por las entidades que la Ontología declara y gobierna»*; `PP-009` establece que *«Toda entidad utilizada por ATÓMICA deberá existir previamente en la Ontología»*. La expresión no añade contenido: nombra la extensión de un ámbito ya delimitado.

**Alcance de la determinación.** Esta decisión fija la **referencia** del sintagma compuesto. **No define la categoría `entidad` a secas**, que ningún documento del repositorio define (CE-5) y que no figura en el inventario de `R-10 · Tarea 9` ni en `RA-01 · H-02`. Esa carencia se registra y no se resuelve.

## Comprobaciones obligatorias

| Pregunta | Respuesta | Justificación por evidencia |
|---|---|---|
| **¿Contradice AD-01?** | **No** | `AD-01` determinó `Modelo` como metaobjeto raíz que contiene entidades y relaciones. E-3 nombra un subconjunto de ese contenido y no altera la posición de `Modelo` en el grafo |
| **¿Contradice AD-02?** | **No** | E-3 no requiere declaración autónoma y por tanto no invoca ningún mecanismo distinto del congelado. Cero documentos nuevos, cero modificaciones de `# Dependencias` |
| **¿Contradice AD-03?** | **No** | `AD-03` situó `Organización` fuera del Modelo. E-3 excluye por consiguiente a `Organización` de la extensión del término, lo que produce el conflicto con `ENT-001` registrado en CE-3 — conflicto que E-3 **hereda de AD-03**, no crea |
| **¿Contradice AD-04?** | **No** | E-3 es la extensión del ámbito que `AD-04` delimitó. Es la única de las cinco alternativas que se apoya literalmente en su determinación |
| **¿Depende de Dominio?** | **Sí** | La expresión es un sintagma cuyo núcleo restrictivo es `dominio`. Sin `AD-04` su referencia queda indeterminada |
| **¿Depende de Modelo?** | **Sí, mediatamente** | A través de `dominio`, que `AD-04` estableció contenido en el Modelo y estrictamente menor que él |
| **¿Es un término primitivo?** | **No** | Es reducible: `modelo_objetos` `# Principio Fundamental` lo intercambia con `entidad definida en la Ontología` en frases consecutivas. `AD-01` exige del primitivo que no se derive |
| **¿Es un criterio clasificatorio?** | **Sí** | Siete de las nueve apariciones en secciones admitidas son exclusiones; `modelo_objetos` `# Principio Fundamental` lo emplea como criterio de pertenencia al Producto |
| **¿Obliga a recalcular RA-01?** | **No** | `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`. RA-01.7, RA-01.8 y RA-01.9 permanecen exactos |
| **¿Obliga a modificar prioridades?** | **No** | G-1 conserva prioridad 1 y `Dependencias: ninguna`. Camino crítico `G-1 → G-4 → G-6` inalterado |
| **¿Genera nuevas causas raíz?** | **No** | Ninguna capa pasa a emplear un concepto de capa superior. No se añade dependencia intercapa alguna |
| **¿Genera nuevos conceptos fantasma?** | **No** | No introduce ningún término. **Registra** que `entidad` a secas carece de definición (CE-5), incidencia que no incorpora a la decisión y que no figura en el inventario de `RA-01` |
| **¿Obliga a crear nuevos documentos?** | **No** | Ni en `30_ontologia`, ni en `10_nucleo`, ni en ninguna capa |

---

# Consecuencias

## Dónde deberá declararse «Entidades del dominio»

**En ningún lugar de forma autónoma.**

La expresión queda fundamentada de forma **derivada**: por la declaración de `dominio` prevista en `10_nucleo/axiomas.md` conforme a `AD-04` y al mecanismo C.i de `AD-02`, y por `PP-009`, ya vigente en `00_canon/primeros_principios.md` y no modificado por esta decisión.

**Ausencia de autoridad registrada.** Ningún documento ni ninguna de las seis autoridades determina si G-1 debe hacer explícita esa derivación dentro de la declaración de `dominio`. `AD-02 · § Consecuencias`, `AD-03 · § Consecuencias` y `AD-04 · § Consecuencias` reservan la redacción a G-1. **No se decide aquí.**

## Qué documentos deberán modificarse durante G-1

**Ninguno adicional.**

El único documento previsto sigue siendo `10_nucleo/axiomas.md`, ya requerido por `AD-03` y `AD-04`. `Entidades del dominio` **no incrementa el alcance documental de G-1 en ningún documento**.

No se crea documento alguno. No se modifica `30_ontologia/relacion.md`, `30_ontologia/catalogo_entidades.md`, `00_canon/primeros_principios.md` ni ninguno de los siete documentos de `40_metodologia` y `50_producto` que emplean el término.

## Consecuencias sobre el estado del repositorio

1. `entidades del dominio` deja de ser concepto fantasma sin adquirir documento, declaración ni arista. La topología verificada por `R-10 · Tarea 10` permanece descriptivamente válida.
2. `H-02` avanza en su tercer término. Los tres restantes —`conocimiento admitido`, `instante lógico`, `plausibilidad`— conservan íntegro su estatus de fantasma.
3. Las siete exclusiones de E-2 adquieren referente determinado: lo que niegan es la pertenencia a la extensión del dominio.
4. El criterio de pertenencia al Producto enunciado por `modelo_objetos` `# Principio Fundamental` adquiere referente determinado (CE-7).
5. La contradicción entre la extensión del catálogo y la del dominio (CE-3) queda **explícita y sin resolver**. Su tratamiento no pertenece a G-1.
6. `grafo_conocimiento.md` `# Componentes` conserva una enumeración que incluye `Organización` y `Observación` en contradicción con `AD-03` y con `observacion.md` `# Naturaleza` (CE-4). No se modifica.

## Cuestiones que esta decisión no resuelve

- La **definición de `entidad`** a secas, que ningún documento aporta y que `catalogo_entidades.md` declara expresamente no aportar (CE-5). Incidencia nueva, fuera del inventario de `RA-01`, expresamente no incorporada.
- La **regla de equivalencia** entre las cinco formulaciones co-referentes (CE-1).
- La **distinción** entre `entidades del dominio` y `entidades del Modelo` en los documentos que las emplean indistintamente (CE-2).
- La **corrección de la extensión** de `catalogo_entidades.md` (CE-3, CE-4).
- Si `entidades relacionadas` y `entidades que conecta` de `relacion.md` designan el mismo conjunto (CE-6).
- Las **contradicciones CE-1 a CE-9**, y las dieciocho heredadas de `AD-03` y `AD-04`, verificadas como aún abiertas en HEAD.

---

# Declaración

**`Entidades del dominio` es una expresión referencial derivada: designa la extensión del dominio, esto es, el conjunto de las entidades que la Ontología declara y que pueblan el ámbito conceptual interno al Modelo. Su función normativa es la de criterio de pertenencia.**

No es entidad de la Ontología. No es término primitivo. No es sinónimo de `entidades del Modelo`. No es la extensión inscrita en `catalogo_entidades.md`. No requiere declaración autónoma, documento propio ni modificación de sección `# Dependencias` alguna: queda fundamentada por la declaración de `dominio` prevista en `10_nucleo/axiomas.md` y por `PP-009`.

Esta decisión no modifica `AD-01`, no modifica `AD-02`, no modifica `AD-03`, no modifica `AD-04`, no modifica `RA-01` y no modifica `plan_remediacion_v1.2.md`.

No autoriza modificación alguna del repositorio. La ejecución material corresponde a **G-1 · Cierre del vocabulario primitivo**.

Se deja constancia de que la categoría `entidad`, empleada por `PP-009`, por `politica_identificadores.md` y por `catalogo_entidades.md`, **carece de definición en todo el repositorio** por declaración expresa del propio catálogo; de que las extensiones del catálogo y del dominio difieren al menos en `Organización`; y de que cinco formulaciones co-referentes se emplean sin regla de equivalencia declarada. Las tres incidencias quedan **registradas y abiertas**, y ninguna se incorpora a esta decisión.

Esta decisión queda **CONGELADA**. Toda modificación requerirá una nueva decisión arquitectónica que la sustituya íntegramente.

---

```
HEAD auditado:        74767cb8b1a55b63df37226866a3f57547790a8b
Autoridades:          RA-01 · plan_remediacion_v1.2 · AD-01 · AD-02 · AD-03 · AD-04 · repositorio en HEAD
Apariciones auditadas: 15 en 10 documentos · 9 en secciones admitidas · 0 capitalizadas
Documentos canónicos modificados: ninguno
Contradicciones registradas: 9 (CE-1 … CE-9)
```
