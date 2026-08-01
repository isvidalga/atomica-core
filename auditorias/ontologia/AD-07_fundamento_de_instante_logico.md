# AD-07 · FUNDAMENTO DE INSTANTE LÓGICO

Estado: CONGELADA

Repositorio: atomica-core

Ámbito: Núcleo · Ontología

HEAD auditado:

```
e6ad31d112746c23e42f8995e06fbf945dc51bc4
```

Contenido canónico coincidente con `origin/main` = `8eb1c6a`. HEAD añade únicamente `AD-01` … `AD-06`, los seis en `auditorias/ontologia/`.

Autoridades: `RA-01_consolidacion_hallazgos.md` · `plan_remediacion_v1.2.md` · `AD-01` · `AD-02` · `AD-03` · `AD-04` · `AD-05` · `AD-06` · inspección directa del repositorio en HEAD.

Ubicación:

```
auditorias/ontologia/AD-07_fundamento_de_instante_logico.md
```

---

# Antecedentes

`AD-01` congeló **C · `Modelo` es un metaobjeto raíz**, término primitivo declarado en `10_nucleo`, *«presupuesto por los axiomas y no derivado de ellos»*.

`AD-02` congeló la variante **C.i**: declaración en secciones admitidas de `10_nucleo/axiomas.md`, sin documentos nuevos y sin modificar ninguna sección `# Dependencias`.

`AD-03` congeló **O-B · `Organización` es el referente externo**. `AD-04` congeló **D-4 · `Dominio` es el ámbito conceptual interno al Modelo**. `AD-05` congeló **E-3 · `entidades del dominio` es una expresión referencial derivada**, sin declaración autónoma por ser reducible. `AD-06` congeló **K-2 · `conocimiento admitido` es un término primitivo autónomo**, con declaración, por **no** serlo.

`AD-06 · § Decisión` definió el término resuelto como *«el contenido determinado que el Modelo admite sobre una Identidad **en un instante lógico**»*. El índice de esa determinación queda ahora por resolver.

`RA-01 · RA-01.1 · H-02` enumera los seis conceptos fantasma distintos de `Modelo`. Uno de ellos es **`instante lógico`**, con la extensión consignada por `R-10 · Tarea 1.b`: *«`estado.md` `# Definición`, `# Constitución` — 1 documento, 2 secciones»*.

`plan_remediacion_v1.2.md · G-1`, prioridad 1, `Dependencias: ninguna`, objetivo: *«Dotar de fundamento documental a los siete conceptos fantasma y cerrar semánticamente el grafo.»*

`AD-01 · § C.2`, fila G-1: *«H-02 aplica el mismo mecanismo a los seis fantasmas restantes.»*

Este documento resuelve el estatus de **uno solo**: `instante lógico`. Tras él resta un único término de `H-02`: `plausibilidad`.

---

# Alternativas

Cinco alternativas, correspondientes a las cinco categorías del encargo. No se considera ninguna otra.

## A · Término primitivo del núcleo

**Definición.** `Instante lógico` es la unidad del régimen de temporalidad lógica que `10_nucleo/axiomas.md` `A8` establece: el índice, no cronológico, respecto del cual queda determinado el conocimiento admitido sobre una Identidad, y que cada Estado representa de forma única. Es término primitivo: se declara, no se deriva.

**Evidencia.** § E-4 y § E-5. En síntesis: ningún documento lo define; `A8 · Temporalidad lógica` establece el régimen sin emplear la palabra `instante`; y las tres delimitaciones negativas del régimen residen en `10_nucleo` y `30_ontologia`.

**Contradicciones.** Ninguna con la evidencia en secciones admitidas. Las incidencias de § E-6 afectan a la coherencia del corpus, no a esta lectura.

**Documentos afectados.** `10_nucleo/axiomas.md`, ya previsto por `AD-03`, `AD-04` y `AD-06`.

**Impacto sobre RA-01.** Ninguno. `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno. Cero documentos nuevos, cero modificaciones de `# Dependencias`.

## B · Concepto ontológico

**Definición.** `Instante lógico` es una entidad de la Ontología, con documento propio en `30_ontologia` y las ocho secciones admitidas.

**Evidencia.** Las **cinco** apariciones del sintagma residen en `30_ontologia`, y `estado.md` `# Constitución` lo enumera como **componente** del Estado.

**Contradicciones.** Tres, verificadas:
- El término es siempre complemento: nunca sujeto de un enunciado definitorio, nunca con constitución, formación ni restricción propias.
- `30_ontologia/catalogo_entidades.md`, *«única fuente de verdad sobre la existencia de entidades ontológicas»*, **no lo inscribe**. `AD-05 · § Decisión` fijó que las entidades del dominio son las que la Ontología declara.
- `estado.md` `# Constitución` enumera junto a él *«un identificador único»*, cuyo gobierno reside en `00_canon/politica_identificadores.md` y no en la Ontología. Figurar entre los componentes de una entidad no confiere estatus de entidad.

**Documentos afectados.** Un documento nuevo en `30_ontologia`; declaración en `# Dependencias` de `estado.md` y `memoria.md`.

**Impacto sobre RA-01.** `H-02` se escinde; recálculo de RA-01.7, RA-01.8 y RA-01.9.

**Impacto sobre `plan_remediacion_v1.2`.** Las dos modificaciones de `# Dependencias` son materia de **G-6** (prioridad 7, dependencias G-3 y G-4). Ejecutarlas en G-1 reproduce el ciclo `G-1 → G-4 → G-6 → G-1` verificado por `AD-02 · E-4`.

## C · Concepto epistemológico

**Definición.** `Instante lógico` pertenece a la Epistemología, como índice del proceso mediante el cual se construye el conocimiento.

**Evidencia.** Ninguna directa.

**Contradicciones.** Dos, verificadas:
- **Cero apariciones de `instante` en `20_epistemologia`.** Búsqueda exhaustiva en los cuatro documentos de la capa: 0 resultados.
- `30_ontologia/estado.md` `# Sucesión`, l. 88, declara expresamente de otros dos conceptos: *«Ambas pertenecen a la capa epistemológica»* —referido a Hipótesis y Confianza—. El documento que más emplea `instante lógico` sabe atribuir pertenencia epistemológica y **no se la atribuye**.

**Documentos afectados.** Un documento nuevo en `20_epistemologia`; dos aristas `30 → 20` que `R-10 · Tarea 10` no censa.

**Impacto sobre RA-01.** `H-02` se escinde; recálculo de RA-01.7 a RA-01.9.

**Impacto sobre `plan_remediacion_v1.2`.** Igual que B: anticipación de G-6 y ciclo en el camino crítico.

## D · Expresión derivada

**Definición.** Como `AD-05 · E-3`: `instante lógico` es reducible a una noción ya vigente —la posición en el *«orden lógico»* que `A8` establece— y no requiere declaración propia.

**Evidencia.** `10_nucleo/axiomas.md` `A8 · Temporalidad lógica`: *«El Modelo evoluciona mediante una secuencia ordenada de Estados. El orden lógico prevalece sobre el tiempo cronológico.»* `30_ontologia/trayectoria.md` `# Orden`: *«La Trayectoria preserva el orden lógico de los Estados.»* `estado.md` `# Constitución` incluye entre los componentes del Estado *«una referencia al Estado precedente»* y *«una referencia al Estado sucesor»*, que materializan ese orden.

**Contradicciones.** Dos, verificadas:
- **`A8` no emplea la palabra `instante`**, y ningún documento del repositorio declara la relación entre `orden lógico` e `instante lógico`. `AD-05` pudo reducir `entidades del dominio` porque `50_producto/modelo_objetos` `# Principio Fundamental` enuncia **el mismo criterio** en dos frases consecutivas con las dos formulaciones. Aquí no existe ningún par equivalente. La reducción exigiría inferir.
- Un orden es una relación entre elementos; un instante es un índice. `estado.md` `# Naturaleza` declara que el Estado *«representa un único instante lógico»*, predicado que no equivale a ocupar una posición en una secuencia. Ningún documento resuelve la diferencia.

**Documentos afectados.** Ninguno.

**Impacto sobre RA-01.** `H-02` perdería un término sin resolverlo.

**Impacto sobre `plan_remediacion_v1.2`.** El objetivo literal de G-1 quedaría incumplido para uno de los siete conceptos.

## E · Atributo estructural del Estado

**Definición.** `Instante lógico` no posee estatus conceptual propio: es uno de los seis componentes que `estado.md` `# Constitución` enumera, y su fundamento es el propio `estado.md`, sin declaración externa.

**Evidencia.** `30_ontologia/estado.md` `# Constitución`: *«Todo Estado está compuesto por: — un identificador único; — una Identidad; — **un instante lógico**; — una Representación vigente; — una referencia al Estado precedente, cuando exista; — una referencia al Estado sucesor, cuando exista.»*

**Contradicciones.** Dos, verificadas:
- `30_ontologia/memoria.md` `# Alcance` lo emplea **fuera de `estado.md`** y con función distinta: *«reconstruir el conocimiento admitido en cualquier instante lógico»*. Indexa la reconstrucción que la Memoria garantiza, no un atributo interno del Estado.
- `estado.md` `# Naturaleza` declara que el Estado *«**representa** un único instante lógico»*, mientras `# Constitución` declara que *«está **compuesto por** … un instante lógico»*. Representar y componerse son relaciones distintas; ambas secciones son admitidas y ningún documento las concilia. La alternativa E supone la segunda y desatiende la primera.

**Documentos afectados.** Ninguno, o bien `estado.md`, cuya modificación es materia de G-6.

**Impacto sobre RA-01.** `H-02` perdería un término sin resolverlo.

**Impacto sobre `plan_remediacion_v1.2`.** G-1 quedaría incumplido para el término que el plan le asigna.

---

# Evidencia

Inspección directa del repositorio en HEAD `e6ad31d`, sin filtro de extensión, sobre las ocho capas canónicas.

## E-1 · Inventario del sintagma

**Hecho verificado.** `instante lógico` aparece **5 veces en 2 documentos**, ambos de `30_ontologia`. Búsqueda de la variante capitalizada `Instante lógico`: **0 resultados**.

| Capa | Documentos | Apariciones |
|---|---|---|
| `00_canon` | 0 | 0 |
| `10_nucleo` | **0** | **0** |
| `20_epistemologia` | **0** | **0** |
| `30_ontologia` | 2 | 5 |
| `40_metodologia` | 0 | 0 |
| `50_producto` | **0** | **0** |
| `60_interfaces` | 0 | 0 |
| `70_patrones` | 0 | 0 |

**Hecho verificado.** No existe en el repositorio ningún enunciado de la forma *«Un instante lógico es…»*. Cero enunciados definitorios.

**Hecho verificado.** El término **no figura** en `30_ontologia/catalogo_entidades.md`, pese a ser componente declarado del `Estado` (ENT-002 del catálogo).

**Hecho verificado.** El término **no aparece en `10_nucleo`**, pese a que `A8` establece allí el régimen de temporalidad lógica (§ E-4).

**Diferencia respecto de `R-10`, registrada.** `R-10 · Tarea 1.b` consignó *«`estado.md` `# Definición`, `# Constitución` — 1 documento, 2 secciones»*. En HEAD se verifican **5 apariciones en 2 documentos**, de ellas 3 en secciones admitidas. `R-10` auditó `fe6dc5c`; no se determina aquí si la diferencia procede del método de conteo o del contenido. **Fuera del alcance de AD-07.**

## E-2 · Apariciones en secciones admitidas

**3 apariciones del sintagma, más 1 de su variante morfológica. Total: 4, en 2 documentos.**

| # | Documento | Línea | Sección | Contexto literal | Función semántica |
|---|---|---|---|---|---|
| 1 | `30_ontologia/estado.md` | 23 | `# Definición` | *«Un Estado es la representación íntegra del conocimiento que el Modelo admite sobre una única Identidad **en un instante lógico**.»* | **Índice de la determinación** |
| 2 | `30_ontologia/estado.md` | 42 | `# Naturaleza` | *«Todo Estado: … — **representa un único instante lógico**;»* | **Correspondencia unívoca Estado ↔ instante** |
| 3 | `30_ontologia/estado.md` | 55 | `# Constitución` | *«Todo Estado está compuesto por: … — **un instante lógico**;»* | **Componente del Estado** |
| 4 | `30_ontologia/memoria.md` | 84 | `# Restricciones · MM-003` | *«Toda reconstrucción histórica debe producir exactamente el mismo conocimiento admitido **en ese instante**.»* | **Índice de la reconstrucción** (variante sin calificativo) |

**Hecho verificado.** Las cuatro son **usos positivos**. **Cero usos negativos**: ningún documento del repositorio declara no poseer, no ser o no corresponder a un instante lógico. Contrasta con `entidades del dominio`, donde `AD-05 · E-2` verificó siete exclusiones sobre nueve apariciones admitidas.

**Hecho verificado.** Dos de las cuatro coocurren con `conocimiento admitido` en la misma frase: `estado.md` `# Definición` y `MM-003`.

## E-3 · Apariciones en secciones no admitidas

| Documento | Línea | Sección | Contexto literal | Clasificación |
|---|---|---|---|---|
| `30_ontologia/estado.md` | 15 | `# Propósito` | *«unidad fundamental mediante la cual el Modelo representa el conocimiento admitido sobre una Identidad **en un instante lógico**»* | Enunciado normativo |
| `30_ontologia/memoria.md` | 54 | `# Alcance` | *«— reconstruir el conocimiento admitido **en cualquier instante lógico**.»* | Enunciado normativo |

**Hecho verificado.** Ninguna aparición es ejemplo, comentario ni prosa ilustrativa. Las cinco son enunciados normativos o de propósito.

**Hecho verificado.** `memoria.md` `# Alcance` es la **única aparición fuera de `estado.md`** y le atribuye una función distinta de la de componente: indexar la reconstrucción del conocimiento admitido.

## E-4 · El régimen de temporalidad lógica reside en `10_nucleo`

`10_nucleo/axiomas.md`, `# A8 · Temporalidad lógica`, texto literal íntegro:

> El Modelo evoluciona mediante una secuencia ordenada de Estados.
>
> El orden lógico prevalece sobre el tiempo cronológico.

**Hecho verificado.** `A8` es el **único axioma del Canon dedicado a la temporalidad**, y su título nombra expresamente el carácter lógico de ésta.

**Hecho verificado.** `A8` **no emplea la palabra `instante`**. Emplea `secuencia ordenada` y `orden lógico`.

**Hecho verificado.** `R-10 · Tarea 6` verificó que `A8` es uno de los cinco axiomas que emplean `Modelo`, término que `AD-01` declaró primitivo de `10_nucleo`.

### Delimitaciones negativas del régimen, en tres capas

| Documento | Sección | Texto literal |
|---|---|---|
| `10_nucleo/axiomas.md` | `A8` | *«El orden lógico **prevalece sobre el tiempo cronológico**.»* |
| `30_ontologia/estado.md` | `# Formación` | *«**El tiempo físico no determina** la creación de un Estado.»* |
| `30_ontologia/trayectoria.md` | `# Orden` | *«**No representa necesariamente el tiempo cronológico.**»* |

**Hecho verificado.** Tres documentos de dos capas convergen en la misma doctrina: la temporalidad del Modelo no es cronológica. La fuente axiomática de esa doctrina reside en `10_nucleo`.

**Hecho verificado.** `estado.md` `# Formación` sitúa el criterio de creación en el conocimiento admitido —*«La creación de un Estado depende exclusivamente de un cambio en el conocimiento admitido»*— y no en el instante, que `# Constitución` enumera entre sus componentes.

## E-5 · Nadie define el instante lógico

**Hecho verificado.** Ningún documento del repositorio define `instante lógico`, ni declara su relación con `orden lógico`, ni establece si un instante lógico es una posición, un índice, una marca o un componente.

**Hecho verificado.** La familia `X lógico/a` en sentido temporal-estructural comprende **cuatro formulaciones distintas en cuatro capas**, ninguna definida y ninguna relacionada con las demás por norma:

| Formulación | Documento | Sección | Texto |
|---|---|---|---|
| **`orden lógico`** | `10_nucleo/axiomas.md` | `A8` | *«El orden lógico prevalece sobre el tiempo cronológico.»* |
| **`orden lógico`** | `30_ontologia/trayectoria.md` | `# Orden` | *«La Trayectoria preserva el orden lógico de los Estados.»* |
| **`orden lógico`** | `50_producto/lenguaje_producto` | `# Composición` | *«Toda vista organiza las representaciones siguiendo el mismo orden lógico.»* |
| **`orden lógico`** | `50_producto/navegacion.md` | `N-006` | *«seguirá siempre el orden lógico de construcción del conocimiento»* |
| **`continuidad lógica`** | `30_ontologia/identidad.md` | `# Definición` | *«Una Identidad es la continuidad lógica de un mismo referente organizacional a través del tiempo.»* |
| **`sucesión lógica`** | `50_producto/cronica.md` | `# Temporalidad` | *«Representa la sucesión lógica de Estados pertenecientes a una misma Trayectoria.»* |
| **`instante lógico`** | `30_ontologia/estado.md` · `memoria.md` | 5 apariciones | § E-2, § E-3 |

**Consecuencia verificada.** El sintagma **no es reducible por enunciación declarada**. A diferencia de `entidades del dominio`, cuya referencia `AD-05 · § Decisión` fijó mediante `dominio` y `PP-009`, no existe aquí ningún enunciado que fije la referencia de `instante lógico`. Toda reducción a `orden lógico` exigiría inferir una equivalencia que ningún documento declara.

## E-6 · Contradicciones registradas

Se registran conforme al encargo. **Ninguna se resuelve aquí.**

**CI-1 · `estado.md` atribuye al instante lógico dos relaciones distintas en dos secciones admitidas.**
`# Naturaleza`: *«**representa** un único instante lógico»*. `# Constitución`: *«está **compuesto por** … un instante lógico»*. Representar y componerse son relaciones distintas. Ningún documento las concilia.

**CI-2 · `A8` y los documentos que emplean el término no se citan mutuamente.**
`A8` establece el régimen sin emplear `instante`; `estado.md` y `memoria.md` emplean `instante lógico` sin citar `A8`. Sus `# Dependencias` declaran `10_nucleo/axiomas.md` de forma genérica, sin arista al axioma. **Ausencia de autoridad** sobre la relación entre `orden lógico` e `instante lógico`.

**CI-3 · `MM-003` emplea la variante sin calificativo.**
`memoria.md` `# Alcance` (l. 54) dice `instante lógico`; `MM-003` (l. 84), única restricción numerada que lo invoca, dice *«en ese instante»*. Ningún documento declara que designen lo mismo.

**CI-4 · `50_producto` emplea cinco formulaciones y ninguna es `instante lógico`.**
`instante determinado` (`modelo_vivo.md:277`, `gemelo_organizacional.md:19`, `informe.md:160`) · `instante histórico` (`modelo_vivo.md:683`) · `instante temporal` (`linea_temporal:52`) · `cada instante` (`modelo_vivo.md:171`) · *«el instante en que fue emitido»* (`informe.md:102`). Siete apariciones en cuatro documentos, ninguna relacionada por norma con el término ontológico.

**CI-5 · Cuatro formulaciones de la familia `X lógico/a` sin regla de equivalencia.**
`orden lógico` (4 apariciones, 3 capas) · `continuidad lógica` (`identidad.md` `# Definición`) · `sucesión lógica` (`cronica.md` `# Temporalidad`) · `instante lógico` (5 apariciones). Ninguna definida; ninguna relacionada con las demás.

**CI-6 · El término no figura en el catálogo de entidades pese a ser componente de una entidad inscrita.**
`estado.md` `# Constitución` lo enumera entre los componentes del `Estado`, inscrito como `ENT-002`. `catalogo_entidades.md` declara *«Toda entidad existe únicamente cuando figura inscrita en este catálogo»* y no lo inscribe.

**CI-7 · El gobierno de los componentes del Estado es heterogéneo.**
`estado.md` `# Constitución` enumera *«un identificador único»* —gobernado por `00_canon/politica_identificadores.md`— junto a *«un instante lógico»*, que no está gobernado por ningún documento. Ninguna norma establece dónde debe residir el fundamento de cada componente.

**CI-8 · Divergencia de inventario respecto de `R-10`.**
`R-10 · Tarea 1.b` consignó 1 documento y 2 secciones; en HEAD se verifican 2 documentos y 5 apariciones. No se determina si procede del método de conteo o del contenido. **Fuera del alcance de AD-07.**

**CI-9 · Las contradicciones de `AD-03`, `AD-04`, `AD-05` y `AD-06` permanecen abiertas.**
Verificado en HEAD: las nueve de cada una —**36 en total**— subsisten, entre ellas la existencia de `30_ontologia/modelo.md`, descartada expresamente por `AD-01` y `AD-02`.

---

# Decisión

# A · `Instante lógico` es un término primitivo del núcleo

**`Instante lógico` es la unidad del régimen de temporalidad lógica que `10_nucleo/axiomas.md` `A8` establece: el índice, no cronológico, respecto del cual queda determinado el conocimiento admitido sobre una Identidad, y que cada Estado representa de forma única. No es entidad de la Ontología, no es concepto epistemológico, no es expresión derivada y no es atributo interno del Estado. Es término primitivo: se declara, no se deriva.**

**Justificación, exclusivamente por evidencia documental:**

**No es B.** En las cinco apariciones el término es siempre complemento, nunca sujeto de un enunciado definitorio, y `catalogo_entidades.md` —*«única fuente de verdad sobre la existencia de entidades ontológicas»*— no lo inscribe. Además, `estado.md` `# Constitución` lo enumera junto a *«un identificador único»*, cuyo gobierno reside en `00_canon/politica_identificadores.md`: figurar entre los componentes de una entidad no confiere estatus de entidad.

**No es C.** **Cero apariciones de `instante` en `20_epistemologia`.** Y `estado.md` `# Sucesión` declara expresamente de Hipótesis y Confianza que *«Ambas pertenecen a la capa epistemológica»*: el documento que más emplea el término sabe atribuir pertenencia epistemológica y no se la atribuye.

**No es D.** `A8` **no emplea la palabra `instante`**, y ningún documento declara la relación entre `orden lógico` e `instante lógico`. `AD-05` pudo reducir `entidades del dominio` porque existía co-referencia literal en frases consecutivas; aquí no existe ningún par equivalente. Reducir exigiría inferir una equivalencia no declarada, y un orden es una relación mientras que un instante es un índice: `estado.md` `# Naturaleza` predica del Estado que *«representa un único instante lógico»*, no que ocupe una posición.

**No es E.** `memoria.md` `# Alcance` lo emplea **fuera de `estado.md`** y con función distinta —*«reconstruir el conocimiento admitido en cualquier instante lógico»*—: indexa la reconstrucción que la Memoria garantiza, no un atributo interno del Estado. Y `estado.md` atribuye al término dos relaciones distintas en dos secciones admitidas (CI-1), de las que E supone sólo una.

**Es A, por tres hechos verificados:**

1. **No es derivable.** Ningún documento define `instante lógico` ni declara su relación con ninguna de las otras tres formulaciones de la familia (`orden lógico`, `continuidad lógica`, `sucesión lógica`). `A8` establece el régimen —*«El Modelo evoluciona mediante una secuencia ordenada de Estados. El orden lógico prevalece sobre el tiempo cronológico»*— sin nombrar el instante. Es el mismo criterio que `AD-06` aplicó a `conocimiento admitido` y que `AD-05` no pudo aplicar a `entidades del dominio`, y arroja aquí el mismo resultado que en `AD-06`.

2. **El régimen que lo funda es axiomático y reside en `10_nucleo`.** `A8 · Temporalidad lógica` es el único axioma del Canon dedicado a la temporalidad. Las tres delimitaciones negativas del régimen —`A8` (*«prevalece sobre el tiempo cronológico»*), `estado.md` `# Formación` (*«El tiempo físico no determina la creación de un Estado»*) y `trayectoria.md` `# Orden` (*«No representa necesariamente el tiempo cronológico»*)— convergen en la misma doctrina, cuya fuente está en `10_nucleo`.

3. **Su alcance excede el documento que más lo emplea.** `memoria.md` `# Alcance` lo emplea para indexar la reconstrucción del conocimiento admitido, y `MM-003` lo invoca en una restricción numerada. Dos documentos de `30_ontologia` lo presuponen, y su única dependencia externa declarada es `10_nucleo/axiomas.md` —verificado por `R-10 · Observación preliminar` y confirmado en HEAD—. Declararlo en esa capa mediante C.i les da acceso documental sin modificar ninguna sección `# Dependencias`.

**Alcance de la determinación.** Esta decisión fija el estatus del término. **No define la relación entre `instante lógico` y `orden lógico`** (CI-2, CI-5), **no resuelve la doble atribución de `estado.md`** (CI-1) ni la relación con las cinco formulaciones de `50_producto` (CI-4). Las tres carencias se registran y no se resuelven.

## Verificación de coherencia

| Autoridad | Resultado | Justificación por evidencia |
|---|---|---|
| **AD-01** | **Coherente** | `R-10 · Tarea 6` verificó que `A8` es uno de los cinco axiomas que emplean `Modelo`. El instante lógico indexa la evolución del Modelo, cuya condición de metaobjeto raíz no se altera: no adquiere arista saliente alguna |
| **AD-02** | **Coherente** | Emplea el mecanismo congelado: variante **C.i**, declaración en sección admitida de `10_nucleo/axiomas.md`, 0 documentos nuevos, 0 modificaciones de `# Dependencias` |
| **AD-03** | **Coherente** | `AD-03` situó `Organización` fuera del Modelo. El instante lógico indexa Estados del Modelo; `estado.md` `# Definición` declara además que *«Un Estado no representa la organización»* |
| **AD-04** | **Coherente. Relación indeterminada.** | `instante lógico` y `dominio` **no coocurren en ningún documento**. Ningún enunciado declara si pertenece al ámbito que `AD-04` delimitó. **Indeterminable con la evidencia disponible**; no se decide aquí |
| **AD-05** | **Coherente** | No es entidad del dominio: `catalogo_entidades.md` no lo inscribe. `AD-05` y `AD-07` aplican el mismo criterio —reducibilidad— y arrojan resultados distintos porque la evidencia difiere: allí existía co-referencia literal, aquí no |
| **AD-06** | **Coherente y complementaria** | `AD-06` fijó `conocimiento admitido` como contenido determinado *«sobre una Identidad en un instante lógico»*. Dos de las cuatro apariciones admitidas —`estado.md` `# Definición` y `MM-003`— contienen ambos términos en la misma frase. AD-07 fija el índice de esa determinación |
| **RA-01** | **Sin impacto** | `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`. RA-01.7, RA-01.8 y RA-01.9 permanecen exactos; RA-01.9 ya incluye `axiomas.md` en el alcance de G-1 |
| **plan_remediacion_v1.2** | **Sin impacto** | G-1 conserva prioridad 1 y `Dependencias: ninguna`. Camino crítico `G-1 → G-4 → G-6` inalterado. Ninguna sección `# Dependencias` se modifica |

---

# Consecuencias

## Dónde deberá declararse «Instante lógico»

**En `10_nucleo/axiomas.md`**, mediante sección admitida, conforme a la variante **C.i** congelada por `AD-02`.

Fundamento: `AD-01 · § C.2`, fila G-1, establece que *«H-02 aplica el mismo mecanismo a los seis fantasmas restantes»*; `AD-02` fijó ese mecanismo como C.i; `AD-03`, `AD-04` y `AD-06` lo aplicaron a `Organización`, `Dominio` y `conocimiento admitido`. `instante lógico` recibe idéntico tratamiento, y además el axioma que funda su régimen —`A8`— reside en ese mismo documento.

## Qué documentos deberán modificarse durante G-1

**Uno: `10_nucleo/axiomas.md`.**

Ninguno adicional. Es el mismo documento ya requerido por `AD-03`, `AD-04` y `AD-06`. Ninguna sección `# Dependencias` se modifica.

No se crea documento alguno. No se modifican `30_ontologia/estado.md`, `30_ontologia/memoria.md`, `30_ontologia/trayectoria.md` ni `30_ontologia/catalogo_entidades.md`.

## Consecuencias sobre el estado del repositorio

1. `instante lógico` deja de ser concepto fantasma sin dejar de ser raíz del grafo verificado por `R-10 · Tarea 10`: no adquiere sección `# Dependencias` ni arista saliente.
2. `H-02` avanza en su quinto término. **Resta uno: `plausibilidad`.**
3. Las cuatro apariciones en secciones admitidas adquieren referente determinado, sin editar ninguno de los dos documentos que las contienen.
4. `MM-003` —única restricción numerada formulada sobre el término— adquiere referente determinado.
5. `AD-06` queda completada en su índice: el contenido determinado que fijó lo está *«en un instante lógico»*, término ahora resuelto.
6. La relación entre `instante lógico` y `orden lógico` permanece sin declarar (CI-2, CI-5). Ningún grupo del plan tiene asignada esa carencia.
7. La doble atribución de `estado.md` —representar y componerse— permanece sin conciliar (CI-1). Su tratamiento correspondería a **G-6 · Coherencia de Dependencias y Utilizado por**, prioridad 7, o a ningún grupo: no se determina aquí.

## Cuestiones que esta decisión no resuelve

- La **relación entre `instante lógico` y `orden lógico`** (CI-2, CI-5), y con `continuidad lógica` y `sucesión lógica`.
- La **doble atribución** de `estado.md`: representar frente a componerse (CI-1).
- La **relación con las cinco formulaciones de `50_producto`**: `instante determinado`, `instante histórico`, `instante temporal`, `cada instante` (CI-4).
- Si el instante lógico **pertenece al dominio** (verificación de coherencia con `AD-04`). Indeterminable: los términos no coocurren.
- La **divergencia de inventario** respecto de `R-10 · Tarea 1.b` (CI-8).
- Las **contradicciones CI-1 a CI-9**, y las treinta y seis heredadas de `AD-03`, `AD-04`, `AD-05` y `AD-06`, verificadas como aún abiertas en HEAD.

---

# Declaración

**`Instante lógico` es la unidad del régimen de temporalidad lógica establecido por el axioma `A8`: el índice, no cronológico, respecto del cual queda determinado el conocimiento admitido sobre una Identidad, y que cada Estado representa de forma única.**

No es entidad de la Ontología. No es concepto epistemológico. No es expresión referencial derivada. No es atributo interno del Estado. Es **término primitivo del núcleo**, y su lugar de declaración es `10_nucleo/axiomas.md`, conforme al mecanismo C.i congelado por `AD-02`.

Esta decisión no modifica `AD-01`, `AD-02`, `AD-03`, `AD-04`, `AD-05` ni `AD-06`; no modifica `RA-01`; y no modifica `plan_remediacion_v1.2.md`.

No autoriza modificación alguna del repositorio. La ejecución material corresponde a **G-1 · Cierre del vocabulario primitivo**.

Se deja constancia de que **ningún documento del repositorio define `instante lógico`**; de que `A8 · Temporalidad lógica` establece el régimen sin emplear la palabra `instante`; de que `estado.md` le atribuye dos relaciones distintas en dos secciones admitidas —representar y componerse— sin que documento alguno las concilie; y de que coexisten cuatro formulaciones de la familia `X lógico/a` en cuatro capas sin regla de equivalencia declarada. Las cuatro incidencias quedan **registradas y abiertas**, y ninguna se incorpora a esta decisión.

Esta decisión queda **CONGELADA**. Toda modificación requerirá una nueva decisión arquitectónica que la sustituya íntegramente.

---

```
HEAD auditado:        e6ad31d112746c23e42f8995e06fbf945dc51bc4
Autoridades:          RA-01 · plan_remediacion_v1.2 · AD-01 … AD-06 · repositorio en HEAD
Apariciones auditadas: 5 del sintagma en 2 documentos · 3 en secciones admitidas · 1 variante admitida
Usos positivos: 4 · Usos negativos: 0
`instante` en 20_epistemologia: 0 apariciones
Documentos canónicos modificados: ninguno
Contradicciones registradas: 9 (CI-1 … CI-9)
```
