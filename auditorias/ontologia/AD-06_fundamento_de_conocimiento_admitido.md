# AD-06 · FUNDAMENTO DE CONOCIMIENTO ADMITIDO

Estado: CONGELADA

Repositorio: atomica-core

Ámbito: Núcleo · Ontología

HEAD auditado:

```
90e3cc0b43a84c10a35da29e9cd98d43e5ee538b
```

Contenido canónico coincidente con `origin/main` = `8eb1c6a`. HEAD añade únicamente `AD-01` … `AD-05`, los cinco en `auditorias/ontologia/`.

Autoridades: `RA-01_consolidacion_hallazgos.md` · `plan_remediacion_v1.2.md` · `AD-01_fundamento_del_modelo.md` · `AD-02_implementacion_documental_del_modelo.md` · `AD-03_fundamento_de_organizacion.md` · `AD-04_fundamento_de_dominio.md` · `AD-05_fundamento_de_entidades_del_dominio.md` · inspección directa del repositorio en HEAD.

Ubicación:

```
auditorias/ontologia/AD-06_fundamento_de_conocimiento_admitido.md
```

---

# Antecedentes

`AD-01` congeló **C · `Modelo` es un metaobjeto raíz**, término primitivo declarado en `10_nucleo`, *«presupuesto por los axiomas y no derivado de ellos»*. Su § E-C verificó nueve citas literales en las que `Modelo` ocupa funciones de **sujeto que admite y define**, entre ellas:

> `estado.md` `# Definición`: *«la representación íntegra del conocimiento que **el Modelo admite** sobre una única Identidad en un instante lógico»*
>
> `representacion.md` `# Constitución`: *«las Observaciones **admitidas por el Modelo**; … las restricciones definidas por el Modelo»*

`AD-02` congeló la variante **C.i**: declaración en secciones admitidas de `10_nucleo/axiomas.md`, sin documentos nuevos y sin modificar ninguna sección `# Dependencias`.

`AD-03` congeló **O-B · `Organización` es el referente externo**. `AD-04` congeló **D-4 · `Dominio` es el ámbito conceptual interno al Modelo**. `AD-05` congeló **E-3 · `entidades del dominio` es una expresión referencial derivada**, sin declaración autónoma.

`RA-01 · RA-01.1 · H-02` enumera los seis conceptos fantasma distintos de `Modelo`. Uno de ellos es **`conocimiento admitido`**, con la extensión verificada por `R-10 · Tarea 1.b`: *«`estado.md`, `representacion.md`, `trayectoria.md`, `memoria.md` — 4 documentos»*.

`plan_remediacion_v1.2.md · G-1`, prioridad 1, `Dependencias: ninguna`, objetivo: *«Dotar de fundamento documental a los siete conceptos fantasma y cerrar semánticamente el grafo.»*

`AD-01 · § C.2`, fila G-1: *«H-02 aplica el mismo mecanismo a los seis fantasmas restantes.»*

Este documento resuelve el estatus de **uno solo**: `conocimiento admitido`. No resuelve `Modelo`, `Organización`, `Dominio`, `entidades del dominio`, `plausibilidad`, `instante lógico`, `Observación` ni `Hipótesis`.

---

# Alternativas

Cinco alternativas resultan construibles sobre la evidencia localizada. No se considera ninguna otra.

## K-1 · Entidad ontológica

**Definición.** `Conocimiento admitido` designa una entidad de la Ontología, con documento propio en `30_ontologia` y las ocho secciones admitidas.

**Evidencia.** Quince de sus veinte apariciones residen en `30_ontologia`, y doce en secciones admitidas de documentos congelados.

**Contradicciones.** Tres, verificadas:
- El término es siempre **complemento**: nunca sujeto de un enunciado definitorio, nunca con constitución, formación ni restricción propias.
- `30_ontologia/representacion.md` `# Naturaleza` declara: *«**estructura** el conocimiento admitido»*. Es aquello que una entidad estructura, no una entidad entre las estructuradas. `AD-05 · § Decisión` fijó que las entidades del dominio son las que la Ontología declara.
- `30_ontologia/catalogo_entidades.md`, *«única fuente de verdad sobre la existencia de entidades ontológicas»*, **no lo inscribe**.

**Documentos afectados.** Un documento nuevo en `30_ontologia`; declaración en `# Dependencias` de los 6 documentos que lo emplean.

**Impacto sobre RA-01.** `H-02` se escinde; recálculo de RA-01.7, RA-01.8 y RA-01.9.

**Impacto sobre `plan_remediacion_v1.2`.** Las modificaciones de `# Dependencias` son materia de **G-6** (prioridad 7, dependencias G-3 y G-4). Ejecutarlas en G-1 reproduce el ciclo `G-1 → G-4 → G-6 → G-1` verificado por `AD-02 · E-4`.

## K-2 · Término primitivo autónomo

**Definición.** `Conocimiento admitido` es el contenido determinado que el Modelo admite sobre una Identidad en un instante lógico: aquello que el Estado representa íntegramente, que la Representación estructura, cuya evolución la Trayectoria describe y cuya reconstrucción la Memoria garantiza. Es término primitivo: se declara, no se deriva.

**Evidencia.** § E-3, § E-4 y § E-5. En síntesis: doce apariciones en secciones admitidas de cuatro documentos congelados; doce de veinte nombran al Modelo como agente; y **ningún documento del repositorio define el acto de admisión**.

**Contradicciones.** Ninguna con la evidencia en secciones admitidas. Las incidencias de § E-6 afectan a la coherencia del corpus, no a esta lectura.

**Documentos afectados.** `10_nucleo/axiomas.md`, ya previsto por `AD-03` y `AD-04`.

**Impacto sobre RA-01.** Ninguno. `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno. Cero documentos nuevos, cero modificaciones de `# Dependencias`.

## K-3 · Criterio epistemológico

**Definición.** `Conocimiento admitido` es el criterio mediante el cual la Epistemología determina qué pasa a formar parte del conocimiento, y se declara en `20_epistemologia`.

**Evidencia.** `10_nucleo/axiomas.md` `A5 · Dependencia de la evidencia`: *«Toda modificación de una representación requiere evidencia admisible. Sin nueva evidencia no existe nuevo conocimiento.»* La admisión queda condicionada a la evidencia, concepto de `20_epistemologia`.

**Contradicciones.** Una, verificada y decisiva:
- **`20_epistemologia` no emplea ninguna forma de la familia léxica.** Búsqueda exhaustiva de `admit*` y `admisi*` en los cuatro documentos de la capa: **0 resultados**. La capa que responde *«¿Cómo se sabe?»* no participa del vocabulario de la admisión, y las veinte apariciones se concentran en `30_ontologia` (15) y `50_producto` (5).

**Documentos afectados.** Un documento nuevo en `20_epistemologia`; declaración en `# Dependencias` de los cuatro documentos de `30_ontologia` que lo emplean, creando cuatro aristas `30 → 20` que `R-10 · Tarea 10` no censa.

**Impacto sobre RA-01.** `H-02` se escinde; recálculo de RA-01.7, RA-01.8 y RA-01.9.

**Impacto sobre `plan_remediacion_v1.2`.** Igual que K-1: anticipación de G-6 y ciclo en el camino crítico.

## K-4 · Expresión referencial derivada

**Definición.** Como `AD-05 · E-3`: `conocimiento admitido` no es concepto autónomo sino expresión reducible a otra formulación ya vigente —señaladamente `conocimiento disponible`—, sin necesidad de declaración propia.

**Evidencia.** `30_ontologia/estado.md` `# Definición` emplea ambas a cuatro líneas de distancia: *«el conocimiento que el Modelo **admite**»* (l. 23) y *«Representa el conocimiento **disponible** sobre ella»* (l. 27). `conocimiento disponible` aparece en documentos de las ocho capas.

**Contradicciones.** Dos, verificadas:
- **Ningún documento declara la relación entre ambas formulaciones.** `AD-05` pudo reducir `entidades del dominio` porque `50_producto/modelo_objetos` `# Principio Fundamental` enuncia **el mismo criterio** en dos frases consecutivas con las dos formulaciones. Aquí no existe ningún par equivalente: las dos frases de `estado.md` `# Definición` son predicados distintos sobre el Estado, no dos enunciados del mismo criterio.
- Existe evidencia de que las extensiones podrían no coincidir, sin documento que la resuelva: `20_epistemologia/observacion.md` `O-005` declara *«La contradicción forma parte del conocimiento **disponible**»*, mientras `axiomas.md` `A6` declara *«Toda representación **admitida** permanece inalterable»*. **Ningún documento resuelve si una contradicción puede ser admitida.** La reducción exigiría decidirlo.

**Documentos afectados.** Ninguno.

**Impacto sobre RA-01.** `H-02` perdería un término sin resolverlo.

**Impacto sobre `plan_remediacion_v1.2`.** El objetivo literal de G-1 quedaría incumplido para uno de los siete conceptos.

## K-5 · Propiedad o estado del conocimiento

**Definición.** `Admitido` es una propiedad predicada del conocimiento, no un contenido. Lo que requeriría fundamento sería la propiedad o el acto que la confiere, no el sintagma.

**Evidencia.** La forma participial del término. `axiomas.md` emplea `representación admitida` (`A6`) y `evidencias admitidas` (`A13`), aplicando el mismo participio a otros sustantivos.

**Contradicciones.** Dos, verificadas:
- `30_ontologia/estado.md` `# Restricciones · ST-009`: *«Todo **cambio en el conocimiento admitido** genera un nuevo Estado.»* Y `# Formación`: *«La creación de un Estado depende exclusivamente de un cambio en el conocimiento admitido.»* Es aquello que cambia, es decir, contenido variable, no propiedad de otra cosa.
- `30_ontologia/memoria.md` `# Restricciones · MM-003`: *«Toda reconstrucción histórica debe producir exactamente **el mismo conocimiento admitido** en ese instante.»* Es aquello que se reconstruye idénticamente: contenido determinado, no predicado.

**Documentos afectados.** Indeterminado: el término a declarar sería `admitir`, que **no figura** en `RA-01 · H-02` ni entre los diez verbos relacionales de `R-10 · Tarea 2`.

**Impacto sobre RA-01.** Sustituiría un término del inventario por otro no inventariado: alteración del alcance de `H-02`.

**Impacto sobre `plan_remediacion_v1.2`.** G-1 quedaría incumplido para el término que el plan le asigna.

---

# Evidencia

Inspección directa del repositorio en HEAD `90e3cc0`, sin filtro de extensión, sobre las ocho capas canónicas.

## E-1 · Inventario

**Hecho verificado.** El sintagma `conocimiento admitido` aparece **18 veces en 6 documentos**. Dos variantes morfológicas añaden 2 apariciones en 2 documentos más: `conocimiento ya admitido` (`grafo_conocimiento.md:29`) y `conocimiento distinto del admitido` (`gemelo_organizacional.md:163`). **Total: 20 apariciones en 7 documentos.**

**Hecho verificado.** Búsqueda de la variante capitalizada `Conocimiento admitido`: **0 resultados**. El término aparece siempre en minúscula.

| Capa | Documentos | Apariciones |
|---|---|---|
| `00_canon` | 0 | 0 |
| `10_nucleo` | **0** | **0** |
| `20_epistemologia` | **0** | **0** |
| `30_ontologia` | 4 | 15 |
| `40_metodologia` | 0 | 0 |
| `50_producto` | 3 | 5 |
| `60_interfaces` | 0 | 0 |
| `70_patrones` | 0 | 0 |

**Hecho verificado.** No existe en el repositorio ningún enunciado de la forma *«El conocimiento admitido es…»*. Cero enunciados definitorios.

**Hecho verificado.** El término **no figura** en `30_ontologia/catalogo_entidades.md`.

**Hecho verificado.** `10_nucleo` **no emplea el sintagma**, pese a emplear el participio aislado en dos axiomas (§ E-5).

## E-2 · Apariciones en secciones admitidas

Secciones admitidas: Definición · Naturaleza · Constitución · Formación · Restricciones · Dependencias · Utilizado por · Declaración. **12 apariciones en 6 documentos.**

| # | Documento | Línea | Sección | Contexto literal | Función semántica |
|---|---|---|---|---|---|
| 1 | `30_ontologia/representacion.md` | 23 | `# Definición` | *«organizar el conocimiento admitido **por el Modelo** sin alterar el referente observado»* | Objeto que se organiza |
| 2 | `30_ontologia/representacion.md` | 38 | `# Naturaleza` | *«— **estructura** el conocimiento admitido.»* | Objeto que se estructura |
| 3 | `30_ontologia/representacion.md` | 144 | `# Declaración` | *«expresión formal del conocimiento admitido **por el Modelo** sobre una Identidad en un Estado determinado»* | Objeto expresado |
| 4 | `30_ontologia/estado.md` | 66 | `# Formación` | *«La creación de un Estado depende exclusivamente de un **cambio en** el conocimiento admitido.»* | **Variable cuyo cambio genera Estado** |
| 5 | `30_ontologia/estado.md` | 164 | `# Restricciones · ST-009` | *«Todo **cambio en** el conocimiento admitido genera un nuevo Estado.»* | **Variable cuyo cambio genera Estado** |
| 6 | `30_ontologia/estado.md` | 206 | `# Declaración` | *«ATÓMICA preserva y organiza el conocimiento admitido sobre una Identidad»* | Objeto preservado |
| 7 | `30_ontologia/memoria.md` | 84 | `# Restricciones · MM-003` | *«debe producir exactamente **el mismo** conocimiento admitido en ese instante»* | **Contenido determinado por instante** |
| 8 | `30_ontologia/memoria.md` | 133 | `# Declaración` | *«el conocimiento admitido **por el Modelo** permanezca íntegro y reconstruible»* | Objeto conservado |
| 9 | `30_ontologia/trayectoria.md` | 37 | `# Naturaleza` | *«— representa la **evolución** del conocimiento admitido **por el Modelo**;»* | Objeto que evoluciona |
| 10 | `30_ontologia/trayectoria.md` | 180 | `# Declaración` | *«la **continuidad** del conocimiento admitido **por el Modelo** sobre una Identidad»* | Objeto continuado |
| 11 | `50_producto/gemelo_organizacional.md` | 163 | `# Restricciones · R-006` | *«El Gemelo nunca contiene conocimiento **distinto del admitido por el Modelo**.»* | **Criterio de contenido del Producto** |
| 12 | `50_producto/grafo_conocimiento.md` | 29 | `# Naturaleza` | *«Representa gráficamente el conocimiento **ya admitido**.»* | Objeto representado |

**Hecho verificado.** Las doce son usos **positivos**. No existe ninguna exclusión: a diferencia de `entidades del dominio` —donde `AD-05 · E-2` verificó siete exclusiones sobre nueve—, ningún documento declara *no* ser conocimiento admitido.

**Hecho verificado.** En las doce, el término ocupa la posición de **objeto directo o de complemento de un nombre de acción**: se organiza, se estructura, se expresa, cambia, se preserva, se reconstruye, evoluciona, se continúa, se representa. Nunca es sujeto.

## E-3 · Apariciones en secciones no admitidas

| Documento | Línea | Sección | Contexto literal | Clasificación |
|---|---|---|---|---|
| `30_ontologia/representacion.md` | 15 | `# Propósito` | *«estructura formal mediante la cual el Modelo **expresa** el conocimiento admitido sobre una Identidad en un Estado determinado»* | Enunciado normativo |
| `30_ontologia/representacion.md` | 69 | `# Persistencia` | *«La sucesión de Representaciones constituye la **evolución** del conocimiento admitido por el Modelo.»* | Enunciado normativo |
| `30_ontologia/estado.md` | 15 | `# Propósito` | *«unidad fundamental mediante la cual el Modelo **representa** el conocimiento admitido sobre una Identidad en un instante lógico»* | Enunciado normativo |
| `30_ontologia/memoria.md` | 54 | `# Alcance` | *«— **reconstruir** el conocimiento admitido en cualquier **instante lógico**.»* | Enunciado normativo |
| `30_ontologia/trayectoria.md` | 72 | `# Orden` | *«secuencia mediante la cual **evoluciona** el conocimiento admitido por el Modelo»* | Enunciado normativo |
| `50_producto/gemelo_organizacional.md` | 19 | `# Propósito` | *«Representa el conocimiento admitido por el Modelo en un **instante determinado**.»* | Enunciado normativo |
| `50_producto/gemelo_organizacional.md` | 59 | `# Principios · G-003` | *«Toda **modificación** del conocimiento admitido produce automáticamente una actualización del Gemelo mediante un nuevo Estado.»* | Principio numerado |
| `50_producto/observatorio.md` | 94 | `# Alertas` | *«Siempre representan una **variación relevante** del conocimiento admitido.»* | Enunciado normativo |

**Hecho verificado.** Ninguna aparición es ejemplo, comentario ni prosa ilustrativa. Las veinte son enunciados normativos o de propósito.

## E-4 · El agente de la admisión es el Modelo

**Hecho verificado.** **Doce de las veinte apariciones nombran expresamente al Modelo**: nueve mediante *«admitido por el Modelo»* (`representacion.md` ×3, `trayectoria.md` ×3, `memoria.md` ×1, `gemelo_organizacional.md` ×2), y tres mediante el Modelo como sujeto (`estado.md` `# Propósito`, y las dos formas verbales de § E-5).

**Hecho verificado.** Una sola aparición atribuye la acción a otro agente: `estado.md` `# Declaración` — *«ATÓMICA preserva y organiza el conocimiento admitido»*.

**Concordancia con AD-01, *Hecho verificado*.** `AD-01 · § E-C` verificó nueve citas literales en las que `Modelo` ocupa funciones de sujeto agente, y de ellas cuatro son actos de admisión: `E-C.1` (*«el Modelo admite»*), `E-C.3` (*«el Modelo admite una Representación»*), `E-C.4` (*«admitido por el Modelo»*), `E-C.6` (*«las Observaciones admitidas por el Modelo»*). El sujeto de la admisión está ya fijado y declarado primitivo.

## E-5 · Nadie define el acto de admisión

**Hecho verificado.** Búsqueda exhaustiva de la familia léxica `admit*` · `admisi*` en las ocho capas. En las capas normativas superiores sólo aparece en `10_nucleo/axiomas.md`, en tres axiomas, y **nunca definida**:

| Axioma | Texto literal | Forma empleada |
|---|---|---|
| `A5 · Dependencia de la evidencia` | *«Toda modificación de una representación requiere **evidencia admisible**. Sin nueva evidencia no existe nuevo conocimiento.»* | `admisible` |
| `A6 · Inmutabilidad` | *«Toda **representación admitida** permanece inalterable.»* | `admitida` |
| `A13 · Trazabilidad` | *«Toda representación debe poder reconstruirse desde las **evidencias admitidas**.»* | `admitidas` |

**Hecho verificado.** `admisible` aparece **una sola vez en todo el repositorio** —`axiomas.md` `A5`— y ningún documento la define.

**Hecho verificado, decisivo.** **`20_epistemologia` no contiene ninguna forma de `admit*` ni de `admisi*`: 0 resultados en los cuatro documentos de la capa.** La capa que responde *«¿Cómo se sabe?»* —`observacion.md`, `hipotesis.md`, `evidencia.md`, `confianza.md`— no participa del vocabulario de la admisión.

**Consecuencia verificada.** `A5` fija una **condición necesaria** de la admisión —requiere evidencia admisible— pero no su criterio; y la capa que albergaría el criterio no emplea el término. **Ningún documento del repositorio determina qué hace que un conocimiento esté admitido.**

**Consecuencia verificada.** El sintagma **no es reducible**. A diferencia de `entidades del dominio`, cuya referencia `AD-05 · § Decisión` fijó mediante `dominio` y `PP-009`, no existe aquí ningún enunciado que fije la referencia de `admitido`.

## E-6 · Contradicciones registradas

Se registran conforme al encargo. **Ninguna se resuelve aquí.**

**CK-1 · La capa epistemológica no emplea el vocabulario de la admisión.**
Cero apariciones de `admit*` y `admisi*` en `20_epistemologia`. `A5` condiciona la admisión a la evidencia, concepto de esa capa, y ninguno de sus cuatro documentos lo recoge. **Ausencia de autoridad** sobre el criterio de admisión.

**CK-2 · `admisible` se emplea una vez y no se define.**
`axiomas.md` `A5`. Ningún documento establece qué hace admisible una evidencia. Igualmente indefinidos `admitida` (`A6`) y `admitidas` (`A13`).

**CK-3 · `estado.md` `# Definición` emplea dos formulaciones a cuatro líneas.**
L. 23: *«el conocimiento que el Modelo **admite**»* · l. 27: *«Representa el conocimiento **disponible** sobre ella»*. Ningún documento declara si designan lo mismo.

**CK-4 · `conocimiento disponible` se emplea en las ocho capas sin relación declarada.**
Aparece en más de veinte documentos, incluidos `20_epistemologia/confianza.md` (3) y `20_epistemologia/observacion.md` (2), `00_canon/vision.md`, `00_canon/primeros_principios.md` y `40_metodologia/`. Ningún documento declara su relación con `conocimiento admitido`.

**CK-5 · Cuatro formulaciones adicionales sin regla de equivalencia.**
`conocimiento construido por ATÓMICA` (`observacion.md:37`, `memoria_organizacional.md`, `navegacion.md`) · `conocimiento registrado` (`motor_analisis.md`, `timeline.md`, `linea_temporal`) · `conocimiento existente` (`observe.md`, `observatorio.md`) · `conocimiento acumulado` (`modelo_vivo.md`, `ciclo_vida_patron.md`). Ninguna se relaciona con las anteriores.

**CK-6 · Contradicción abierta sobre la admisibilidad de la contradicción.**
`20_epistemologia/observacion.md` `# Restricciones · O-005`: *«La contradicción forma parte del conocimiento disponible.»* `10_nucleo/axiomas.md` `A6`: *«Toda representación admitida permanece inalterable.»* Ningún documento resuelve si una contradicción puede ser admitida ni qué ocurre con el conocimiento admitido cuando surge.

**CK-7 · Relación con `dominio` indeterminada.**
`conocimiento admitido` y `dominio` **no coocurren en ningún documento**. Ningún enunciado declara si el conocimiento admitido pertenece al ámbito que `AD-04` delimitó. **Ausencia de autoridad.**

**CK-8 · La categoría `conocimiento` a secas carece de definición.**
Empleada por `A5`, `A11` y por documentos de las ocho capas. **No figura en el inventario de `R-10 · Tarea 9` ni en `RA-01 · H-02`.** Se registra como incidencia nueva y queda **expresamente fuera del alcance de AD-06**: no se incorpora a la decisión ni a ninguna conclusión.

**CK-9 · Las contradicciones de `AD-03`, `AD-04` y `AD-05` permanecen abiertas.**
Verificado en HEAD: las nueve de `AD-03 · E-7`, las nueve de `AD-04 · E-6` y las nueve de `AD-05 · E-6` subsisten, entre ellas la existencia de `30_ontologia/modelo.md`, descartada expresamente por `AD-01` y `AD-02`.

---

# Decisión

# K-2 · `Conocimiento admitido` es un término primitivo autónomo

**`Conocimiento admitido` es el contenido determinado que el Modelo admite sobre una Identidad en un instante lógico: aquello que el Estado representa íntegramente, que la Representación estructura y expresa, cuya evolución la Trayectoria describe y cuya reconstrucción íntegra la Memoria garantiza. No es entidad, no es criterio epistemológico, no es expresión derivada y no es propiedad. Es término primitivo: se declara, no se deriva.**

**Justificación, exclusivamente por evidencia documental:**

**No es K-1.** En las veinte apariciones el término es siempre complemento, nunca sujeto de un enunciado definitorio, y `representacion.md` `# Naturaleza` declara que la Representación *«estructura el conocimiento admitido»*: es aquello que una entidad estructura, no una entidad entre las estructuradas. `catalogo_entidades.md`, que se declara *«única fuente de verdad sobre la existencia de entidades ontológicas»*, no lo inscribe.

**No es K-3.** `20_epistemologia` **no contiene ninguna forma de `admit*` ni de `admisi*`**: cero resultados en sus cuatro documentos. Las veinte apariciones se concentran en `30_ontologia` (15) y `50_producto` (5). Situar el criterio en la capa que nunca lo menciona carece de respaldo documental, y crearía cuatro aristas `30 → 20` que `R-10 · Tarea 10` no censa.

**No es K-4.** `AD-05` pudo reducir `entidades del dominio` porque `modelo_objetos` `# Principio Fundamental` enuncia **el mismo criterio** en dos frases consecutivas con las dos formulaciones. Aquí no existe ningún par equivalente: las dos frases de `estado.md` `# Definición` son predicados distintos. Y existe evidencia de posible divergencia sin documento que la resuelva —`O-005` sitúa la contradicción en el `conocimiento disponible`, `A6` declara inalterable toda representación admitida—. La reducción exigiría decidir una relación que ninguna evidencia determina.

**No es K-5.** `ST-009` declara *«Todo **cambio en** el conocimiento admitido genera un nuevo Estado»* y `MM-003` *«debe producir exactamente **el mismo** conocimiento admitido en ese instante»*. Es aquello que cambia y aquello que se reconstruye idénticamente: contenido determinado, no propiedad predicada de otra cosa. Además, el término a declarar bajo K-5 sería `admitir`, que no figura en `RA-01 · H-02` ni entre los diez verbos de `R-10 · Tarea 2`.

**Es K-2, por tres hechos verificados:**

1. **No es reducible.** Ningún documento del repositorio define el acto de admisión. `admisible` aparece **una sola vez** —`axiomas.md` `A5`— sin definición; `admitida` y `admitidas` se emplean en `A6` y `A13` sin definición; y la capa epistemológica no emplea la familia léxica. `A5` fija una condición necesaria —*«Sin nueva evidencia no existe nuevo conocimiento»*— pero no un criterio. Ésta es la diferencia decisiva con `AD-05`: allí la referencia estaba fijada por otros enunciados; aquí no lo está por ninguno.

2. **Función de contenido determinado, verificada en cuatro documentos congelados.** `estado.md` `# Definición`: *«la representación **íntegra** del conocimiento que el Modelo admite»*. `MM-003`: *«exactamente **el mismo** conocimiento admitido en ese instante»*. `ST-009`: *«Todo **cambio en** el conocimiento admitido genera un nuevo Estado»*. `trayectoria.md` `# Naturaleza`: *«la **evolución** del conocimiento admitido»*. Es una totalidad determinada en cada instante, íntegramente representable, exactamente reconstruible y cuyo cambio es el motor de la sucesión de Estados.

3. **Su agente ya está declarado primitivo, en la misma capa.** Doce de las veinte apariciones nombran al Modelo; `AD-01 · § E-C` verificó que cuatro de las nueve citas que fundan la condición de `Modelo` como sujeto agente son actos de admisión. Un término cuyo agente `AD-01` declaró primitivo de `10_nucleo` se declara en esa misma capa, mediante el mecanismo C.i congelado por `AD-02`.

**Alcance de la determinación.** Esta decisión fija el estatus del sintagma. **No define el criterio de admisión** —ningún documento lo aporta (CK-1, CK-2)— ni la categoría `conocimiento` a secas (CK-8), ni la relación con `conocimiento disponible` (CK-3, CK-4). Las tres carencias se registran y no se resuelven.

## Comprobaciones obligatorias

| Pregunta | Respuesta | Justificación por evidencia |
|---|---|---|
| **¿Contradice AD-01?** | **No** | `AD-01 · § E-C` verificó `Modelo` como sujeto que admite; K-2 nombra el objeto de esa acción. `Modelo` conserva su condición de raíz sin aristas salientes |
| **¿Contradice AD-02?** | **No** | K-2 emplea el mecanismo congelado: variante **C.i**, declaración en sección admitida de `10_nucleo/axiomas.md`, 0 documentos nuevos, 0 modificaciones de `# Dependencias` |
| **¿Contradice AD-03?** | **No** | `AD-03` situó `Organización` fuera del Modelo. El conocimiento admitido es contenido del Modelo: `representacion.md` `# Definición` declara que se organiza *«sin alterar el referente observado»*, distinguiéndolo expresamente del referente |
| **¿Contradice AD-04?** | **No** | K-2 no sitúa el término dentro ni fuera del dominio. **Ausencia de autoridad registrada en CK-7:** los dos términos no coocurren en ningún documento |
| **¿Contradice AD-05?** | **No** | `AD-05` redujo `entidades del dominio` por existir co-referencia literal; aquí se verifica que tal co-referencia **no existe** (§ E-5). Las dos decisiones aplican el mismo criterio —reducibilidad— y arrojan resultados distintos porque la evidencia difiere |
| **¿Depende de Modelo?** | **Sí** | Doce de las veinte apariciones nombran al Modelo como agente de la admisión; nueve mediante la fórmula literal *«admitido por el Modelo»* |
| **¿Depende de Dominio?** | **Indeterminable con la evidencia disponible** | `conocimiento admitido` y `dominio` no coocurren en ningún documento del repositorio. No se decide aquí (CK-7) |
| **¿Depende de la Epistemología?** | **No documentalmente** | Cero apariciones de `admit*` y `admisi*` en `20_epistemologia`. `A5` condiciona la admisión a la evidencia, pero ningún documento de esa capa recoge el vínculo (CK-1) |
| **¿Es un término primitivo?** | **Sí** | No existe enunciado que fije la referencia de `admitido`. Cumple la condición que `AD-01 · § Decisión` aplicó a `Modelo`: *«un término primitivo no se deriva, se declara»* |
| **¿Es derivable?** | **No** | § E-5. `A5` aporta condición necesaria, no criterio; no existe formulación co-referente declarada (§ E-6 · CK-3, CK-4) |
| **¿Obliga a recalcular RA-01?** | **No** | `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`. RA-01.7, RA-01.8 y RA-01.9 permanecen exactos; RA-01.9 ya incluye `axiomas.md` en el alcance de G-1 |
| **¿Obliga a modificar prioridades?** | **No** | G-1 conserva prioridad 1 y `Dependencias: ninguna`. Camino crítico `G-1 → G-4 → G-6` inalterado |
| **¿Genera nuevos conceptos fantasma?** | **No** | No introduce ningún término. **Registra** que `conocimiento` a secas (CK-8) y el acto `admitir` (CK-1, CK-2) carecen de definición; ninguno figura en el inventario de `RA-01` y ninguno se incorpora a la decisión |
| **¿Obliga a crear nuevos documentos?** | **No** | Ni en `30_ontologia`, ni en `20_epistemologia`, ni en ninguna capa |

---

# Consecuencias

## Dónde deberá declararse «Conocimiento admitido»

**En `10_nucleo/axiomas.md`**, mediante sección admitida, conforme a la variante **C.i** congelada por `AD-02`.

Fundamento: `AD-01 · § C.2`, fila G-1, establece que *«H-02 aplica el mismo mecanismo a los seis fantasmas restantes»*; `AD-02` fijó ese mecanismo como C.i; `AD-03` y `AD-04` lo aplicaron a `Organización` y a `Dominio`. `conocimiento admitido` recibe idéntico tratamiento, y además su agente —el `Modelo`— está declarado primitivo en ese mismo documento.

**Diferencia respecto de `AD-05`.** `entidades del dominio` no requería declaración por ser reducible. `conocimiento admitido` **sí la requiere**, por no serlo (§ E-5).

## Qué documentos deberán modificarse durante G-1

**Uno: `10_nucleo/axiomas.md`.**

Ninguno adicional. Es el mismo documento ya requerido por `AD-03` y `AD-04`. Ninguna sección `# Dependencias` se modifica: los diez documentos de `30_ontologia` y `20_epistemologia` declaran ya `10_nucleo/axiomas.md` como única dependencia externa, verificado por `R-10 · Observación preliminar` y confirmado en HEAD.

No se crea documento alguno. No se modifican `30_ontologia/estado.md`, `representacion.md`, `trayectoria.md`, `memoria.md`, `50_producto/gemelo_organizacional.md`, `observatorio.md` ni `grafo_conocimiento.md`.

## Consecuencias sobre el estado del repositorio

1. `conocimiento admitido` deja de ser concepto fantasma sin dejar de ser raíz del grafo verificado por `R-10 · Tarea 10`: no adquiere sección `# Dependencias` ni arista saliente.
2. `H-02` avanza en su cuarto término. Los dos restantes —`instante lógico` y `plausibilidad`— conservan íntegro su estatus de fantasma.
3. Las doce apariciones en secciones admitidas adquieren referente determinado, sin edición de ninguno de los seis documentos que las contienen.
4. `ST-009`, `MM-003` y `R-006` —tres restricciones numeradas formuladas sobre el término— adquieren referente determinado.
5. **El criterio de admisión permanece sin declarar** (CK-1, CK-2). La declaración fija qué es el conocimiento admitido; no fija qué hace que un conocimiento lo esté. Ningún grupo del plan tiene asignada esa carencia.
6. La relación con `conocimiento disponible` permanece indeterminada (CK-3, CK-4), incluidas las dos apariciones contiguas de `estado.md` `# Definición`.

## Cuestiones que esta decisión no resuelve

- El **criterio de admisión**: qué hace que un conocimiento esté admitido (CK-1, CK-2). Ninguna de las siete autoridades lo aporta.
- La **relación con `conocimiento disponible`**, `conocimiento construido`, `conocimiento registrado`, `conocimiento existente` y `conocimiento acumulado` (CK-3, CK-4, CK-5).
- Si una **contradicción** puede formar parte del conocimiento admitido (CK-6).
- Si el conocimiento admitido **pertenece al dominio** (CK-7). Indeterminable: los términos no coocurren.
- La **definición de `conocimiento`** a secas (CK-8). Incidencia nueva, fuera del inventario de `RA-01`, expresamente no incorporada.
- Las **contradicciones CK-1 a CK-9**, y las veintisiete heredadas de `AD-03`, `AD-04` y `AD-05`, verificadas como aún abiertas en HEAD.

---

# Declaración

**`Conocimiento admitido` es el contenido determinado que el Modelo admite sobre una Identidad en un instante lógico: aquello que el Estado representa íntegramente, que la Representación estructura y expresa, cuya evolución describe la Trayectoria y cuya reconstrucción íntegra garantiza la Memoria.**

No es entidad de la Ontología. No es criterio epistemológico. No es expresión referencial derivada. No es propiedad ni estado del conocimiento. Es **término primitivo**, y su lugar de declaración es `10_nucleo/axiomas.md`, conforme al mecanismo C.i congelado por `AD-02`.

Esta decisión no modifica `AD-01`, no modifica `AD-02`, no modifica `AD-03`, no modifica `AD-04`, no modifica `AD-05`, no modifica `RA-01` y no modifica `plan_remediacion_v1.2.md`.

No autoriza modificación alguna del repositorio. La ejecución material corresponde a **G-1 · Cierre del vocabulario primitivo**.

Se deja constancia de que **ningún documento del repositorio define el acto de admisión**; de que `20_epistemologia` —la capa que responde *«¿Cómo se sabe?»*— no emplea ninguna forma de `admit*` ni de `admisi*`; de que `admisible` aparece una sola vez, en `A5`, sin definición; y de que la relación entre `conocimiento admitido` y `conocimiento disponible` no está declarada por ningún documento, pese a emplearse ambas en la misma sección `# Definición` de `30_ontologia/estado.md`. Las cuatro incidencias quedan **registradas y abiertas**, y ninguna se incorpora a esta decisión.

Esta decisión queda **CONGELADA**. Toda modificación requerirá una nueva decisión arquitectónica que la sustituya íntegramente.

---

```
HEAD auditado:        90e3cc0b43a84c10a35da29e9cd98d43e5ee538b
Autoridades:          RA-01 · plan_remediacion_v1.2 · AD-01 · AD-02 · AD-03 · AD-04 · AD-05 · repositorio en HEAD
Apariciones auditadas: 20 en 7 documentos · 12 en secciones admitidas · 0 capitalizadas
Familia léxica en 20_epistemologia: 0 apariciones
Documentos canónicos modificados: ninguno
Contradicciones registradas: 9 (CK-1 … CK-9)
```
