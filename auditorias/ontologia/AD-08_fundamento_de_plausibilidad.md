# AD-08 · FUNDAMENTO DE PLAUSIBILIDAD

Estado: CONGELADA

Repositorio: atomica-core

Ámbito: Núcleo · Epistemología

HEAD auditado:

```
afcace7
```

Contenido canónico coincidente con `origin/main` = `8eb1c6a`. HEAD añade únicamente `AD-01` … `AD-07`, los siete en `auditorias/ontologia/`.

Autoridades: `RA-01_consolidacion_hallazgos.md` · `plan_remediacion_v1.2.md` · `AD-01` · `AD-02` · `AD-03` · `AD-04` · `AD-05` · `AD-06` · `AD-07` · inspección directa del repositorio en HEAD.

Ubicación:

```
auditorias/ontologia/AD-08_fundamento_de_plausibilidad.md
```

---

# Antecedentes

`RA-01 · RA-01.1 · H-02` enumera los seis conceptos fantasma distintos de `Modelo`. **`plausibilidad` es el último sin resolver.** Los cinco anteriores quedaron congelados así:

| Término | Decisión | ¿Requiere declaración? |
|---|---|---|
| `Organización` | `AD-03` · O-B · referente externo | **Sí** — `10_nucleo/axiomas.md` |
| `Dominio` | `AD-04` · D-4 · ámbito conceptual interno al Modelo | **Sí** — `10_nucleo/axiomas.md` |
| `entidades del dominio` | `AD-05` · E-3 · expresión referencial derivada | **No** — reducible |
| `conocimiento admitido` | `AD-06` · K-2 · término primitivo autónomo | **Sí** — `10_nucleo/axiomas.md` |
| `instante lógico` | `AD-07` · A · término primitivo del núcleo | **Sí** — `10_nucleo/axiomas.md` |

`AD-01 · § C.2`, fila G-1: *«H-02 aplica el mismo mecanismo a los seis fantasmas restantes.»* `AD-02` fijó ese mecanismo como **C.i**: declaración en secciones admitidas de `10_nucleo/axiomas.md`, sin documentos nuevos y sin modificar ninguna sección `# Dependencias`.

`AD-05` estableció el criterio que discrimina entre declaración y no declaración: un término requiere declaración **si y sólo si no es reducible**, esto es, si ningún enunciado del repositorio fija su referencia. `AD-06` y `AD-07` aplicaron el mismo criterio con resultado contrario al de `AD-05`, porque la evidencia difería.

`plan_remediacion_v1.2.md · G-1`, prioridad 1, `Dependencias: ninguna`, objetivo: *«Dotar de fundamento documental a los siete conceptos fantasma y cerrar semánticamente el grafo.»*

Este documento resuelve el estatus de `plausibilidad` y **cierra `H-02`**.

---

# Alternativas

Cinco alternativas, correspondientes a las cinco categorías del encargo. No se considera ninguna otra.

## P-A · Término primitivo del núcleo

**Definición.** `Plausibilidad` es un término primitivo declarado en `10_nucleo/axiomas.md` conforme al mecanismo C.i, al modo de `conocimiento admitido` (`AD-06`) y `instante lógico` (`AD-07`).

**Evidencia.** `AD-01 · § C.2` establece que el mismo mecanismo rige para los seis términos de `H-02`.

**Contradicciones.** Dos, verificadas:
- **Cero apariciones de `plausib*` en `10_nucleo`.** Ningún axioma emplea el término. Contrasta con los cuatro primitivos ya resueltos: `Modelo` figura en cinco axiomas (`R-10 · Tarea 6`), `Organización` en `A1` y `A2`, el régimen de `instante lógico` en `A8`, y la familia de `conocimiento admitido` en `A5`, `A6` y `A13`. **`plausibilidad` carece de anclaje axiomático.**
- Su referencia sí queda fijada por otro documento (§ E-4), de modo que no cumple la condición de primitivo que `AD-01 · § Decisión` enunció: *«un término primitivo no se deriva, se declara»*.

**Documentos afectados.** `10_nucleo/axiomas.md`.

**Impacto sobre RA-01.** Ninguno.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno.

## P-B · Concepto epistemológico autónomo

**Definición.** `Plausibilidad` es un concepto de `20_epistemologia`, con documento propio y las ocho secciones admitidas, junto a `Observación`, `Hipótesis`, `Evidencia` y `Confianza`.

**Evidencia.** Dos de sus cinco apariciones residen en `20_epistemologia`, y las tres que designan un portador lo predican de una Hipótesis.

**Contradicciones.** Tres, verificadas:
- `20_epistemologia/hipotesis.md` `# Naturaleza` —sección admitida— **enumera las propiedades de toda Hipótesis** y `plausibilidad` **no figura**: *«Toda Hipótesis: — pertenece al Modelo; — es inferencial; — es provisional; — es revisable; — **posee un nivel de Confianza**.»*
- `20_epistemologia/confianza.md` **no emplea el término ni una sola vez**, pese a ser el documento del concepto al que `H-006` atribuye la acción de modificarlo.
- `30_ontologia/catalogo_entidades.md`, *«única fuente de verdad sobre la existencia de entidades ontológicas»*, no lo inscribe.

**Documentos afectados.** Un documento nuevo en `20_epistemologia`; declaración en `# Dependencias` de `hipotesis.md` y `evidencia.md`.

**Impacto sobre RA-01.** `H-02` se escinde; recálculo de RA-01.7, RA-01.8 y RA-01.9.

**Impacto sobre `plan_remediacion_v1.2`.** Las modificaciones de `# Dependencias` son materia de **G-6** (prioridad 7, dependencias G-3 y G-4). Ejecutarlas en G-1 reproduce el ciclo `G-1 → G-4 → G-6 → G-1` verificado por `AD-02 · E-4`.

## P-C · Propiedad distinta de la Confianza

**Definición.** `Plausibilidad` es una propiedad de una Hipótesis, distinta de la `Confianza`, que la `Confianza` modifica y cuyo grado depende del conocimiento disponible.

**Evidencia.** `20_epistemologia/hipotesis.md` `# Restricciones · H-006` —**única aparición en sección admitida de todo el repositorio**—: *«La Confianza modifica la plausibilidad de una Hipótesis. Nunca su naturaleza.»* Leído literalmente, nada se modifica a sí mismo: la lectura exige distinción. `00_canon/primeros_principios.md` `PP-004` la predica igualmente de la Hipótesis.

**Contradicciones.** Dos, verificadas, ambas en secciones admitidas y ambas con marcador de exclusividad:
- `20_epistemologia/hipotesis.md` `# Relaciones`: *«Una Hipótesis: … — posee **exactamente un** nivel de Confianza.»* Y `# Naturaleza` enumera las propiedades sin incluir `plausibilidad`. Una segunda propiedad distinta contradiría ambas.
- `20_epistemologia/evidencia.md` `# Naturaleza`: *«Toda Evidencia: … — modifica **únicamente** la Confianza del Modelo;»*. La exclusividad excluye una segunda magnitud modificada.

**Documentos afectados.** Indeterminado: la propiedad carece de documento y `hipotesis.md` no la enumera.

**Impacto sobre RA-01.** Ninguno directo.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno directo.

## P-D · Expresión derivada

**Definición.** `Plausibilidad` no es concepto autónomo: es una designación no canónica de la magnitud que `20_epistemologia/confianza.md` define como **`Confianza`** —*«una propiedad de una Hipótesis»* que *«representa la solidez con la que el Modelo sostiene dicha Hipótesis»*—. Su referencia queda fijada por `confianza.md`, sin necesidad de declaración propia.

**Evidencia.** § E-3, § E-4 y § E-5. En síntesis: co-referencia verificada en dos documentos, dos cláusulas de exclusividad en secciones admitidas, y cero menciones en el documento de la `Confianza`.

**Contradicciones.** Una, verificada y registrada: `H-006` leído literalmente exige distinción (§ E-6 · CP-1). La decisión se apoya en las dos cláusulas de exclusividad de secciones admitidas y la tensión permanece **abierta**.

**Documentos afectados.** Ninguno.

**Impacto sobre RA-01.** Ninguno. `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno. Cero documentos nuevos, cero modificaciones de `# Dependencias`.

## P-E · Término concurrente irresoluble

**Definición.** `Plausibilidad` y `Confianza` son dos designaciones concurrentes sin regla de precedencia; el conflicto permanece abierto y no puede resolverse.

**Evidencia.** `R-06 · Determinación B` —*«existe una intención, pero ningún mecanismo verificable»*— y `RA-01 · H-05`, `H-06`, `H-07`: el repositorio carece de definición de «definición oficial», de marcador de alcance general y de regla de precedencia. `00_canon/sistema_normativo.md` `# Conflictos`: *«Si dos artefactos del mismo tipo entran en conflicto: el conflicto permanece abierto.»*

**Contradicciones.** Una, verificada: **la evidencia sí discrimina.** Dos secciones admitidas con marcador de exclusividad (`hipotesis.md` `# Relaciones`, `evidencia.md` `# Naturaleza`), una co-referencia intrasección (`ciclo_vida_patron.md` `# Patrón debilitado`) y cero menciones en `confianza.md` determinan la relación sin necesidad de invocar precedencia entre documentos concurrentes. `sistema_normativo.md` regula el conflicto **entre artefactos**; aquí el conflicto es intradocumental.

**Documentos afectados.** Ninguno.

**Impacto sobre RA-01.** `H-02` quedaría sin cerrar.

**Impacto sobre `plan_remediacion_v1.2`.** El objetivo literal de G-1 quedaría incumplido para uno de los siete conceptos.

---

# Evidencia

Inspección directa del repositorio en HEAD `afcace7`, sin filtro de extensión, sobre la totalidad de las rutas del repositorio.

## E-1 · Inventario

**Hecho verificado.** La familia `plausib*` aparece **5 veces en 5 documentos** de las capas canónicas. Fuera de ellas aparece únicamente en documentos de `auditorias/`, no canónicos, que se excluyen del inventario.

| Forma | Apariciones canónicas |
|---|---|
| `plausibilidad` | 4 |
| `plausible` | 1 |
| `plausibles` | **0** (su única aparición está en `RA-01`, documento de auditoría) |
| `Plausibilidad` capitalizada | **0** |

| Capa | Documentos | Apariciones |
|---|---|---|
| `00_canon` | 1 | 1 |
| `10_nucleo` | **0** | **0** |
| `20_epistemologia` | 2 | 2 |
| `30_ontologia` | **0** | **0** |
| `40_metodologia` | **0** | **0** |
| `50_producto` | **0** | **0** |
| `60_interfaces` | **0** | **0** |
| `70_patrones` | 2 | 2 |

**Hecho verificado.** No existe en el repositorio ningún enunciado de la forma *«La plausibilidad es…»*. Cero enunciados definitorios.

**Hecho verificado.** El término **no figura** en `30_ontologia/catalogo_entidades.md`.

**Hecho verificado.** **Cero apariciones en `10_nucleo`**: ningún axioma lo emplea.

**Diferencia respecto de `R-10`, registrada.** `R-10 · Tarea 1.b` consignó *«`evidencia.md` `# Propósito`, `hipotesis.md` `H-006` — 2 documentos»*. En HEAD se verifican **5 apariciones en 5 documentos**. `R-10` no censó `PP-004` ni las dos de `70_patrones`. No se determina si procede del universo declarado por `R-10` o del contenido. **Fuera del alcance de AD-08.**

## E-2 · Inventario por sección, sujeto y objeto

**Hecho verificado.** **Una sola aparición reside en sección admitida** en todo el repositorio. Es el recuento más bajo de los siete conceptos fantasma: `Modelo` 46, `conocimiento admitido` 12, `dominio` 12, `Organización` 11, `entidades del dominio` 9, `instante lógico` 3.

| # | Documento | Línea | Sección | ¿Admitida? | Texto literal | Sujeto que actúa | Portador |
|---|---|---|---|---|---|---|---|
| 1 | `20_epistemologia/hipotesis.md` | 98 | `# Restricciones · H-006` | **Sí** | *«La **Confianza** modifica la plausibilidad de una **Hipótesis**. Nunca su naturaleza.»* | Confianza | Hipótesis |
| 2 | `20_epistemologia/evidencia.md` | 15 | `# Propósito` | No | *«La **Evidencia** constituye el mecanismo mediante el cual una **Hipótesis** puede aumentar o disminuir su plausibilidad.»* | Evidencia | Hipótesis |
| 3 | `00_canon/primeros_principios.md` | 93 | `## PP-004 · Toda conclusión constituye una hipótesis` | No | *«El Modelo Vivo está compuesto por **hipótesis** cuya plausibilidad depende del **conocimiento disponible**.»* | conocimiento disponible | hipótesis |
| 4 | `70_patrones/ciclo_vida_patron.md` | 131 | `# Patrón debilitado` | No | *«La **información reciente** comienza a reducir la plausibilidad del **patrón**.»* | información reciente | patrón |
| 5 | `70_patrones/motor_patrones.md` | 41 | `# Principio fundamental` | No | *«Representa una **explicación estructural plausible** del comportamiento observado.»* | — (adjetival) | explicación estructural |

**Hecho verificado.** **Usos positivos: 5. Usos negativos: 0.** Ningún documento declara no poseer plausibilidad ni no ser plausible.

**Hecho verificado.** **Restricciones que la invocan: 1** (`H-006`). **Secciones `# Relaciones` que la mencionan: 0.** Ni `hipotesis.md` `# Relaciones`, ni `confianza.md` `# Relaciones`, ni `evidencia.md` la nombran en sus secciones de relación.

**Hecho verificado.** Los portadores son tres: `Hipótesis` (3 de 5), `patrón` (1) y `explicación estructural` (1). Los agentes son tres: `Confianza`, `Evidencia`, `información reciente`. El determinante declarado es uno: `conocimiento disponible`.

## E-3 · `hipotesis.md` enumera las propiedades de la Hipótesis y no la incluye

`20_epistemologia/hipotesis.md` `# Naturaleza`, **sección admitida**, texto literal íntegro:

> Toda Hipótesis:
>
> - pertenece al Modelo;
> - es inferencial;
> - es provisional;
> - es revisable;
> - **posee un nivel de Confianza**.

`20_epistemologia/hipotesis.md` `# Relaciones`, texto literal:

> Una Hipótesis:
>
> - se origina a partir de una o varias Observaciones;
> - puede estar asociada a múltiples Evidencias;
> - **posee exactamente un nivel de Confianza**.

**Hecho verificado.** El documento que define la `Hipótesis` enumera dos veces sus propiedades. En ambas listas la magnitud que posee es la **`Confianza`**, y en la segunda con el cuantificador **`exactamente un`**. `plausibilidad` no figura en ninguna de las dos.

`20_epistemologia/evidencia.md` `# Naturaleza`, **sección admitida**, texto literal íntegro:

> Toda Evidencia:
>
> - procede de una Observación;
> - evalúa una o varias Hipótesis;
> - **modifica únicamente la Confianza del Modelo**;
> - nunca modifica la realidad observada.

**Hecho verificado.** Dos secciones admitidas de dos documentos congelados emplean marcadores de exclusividad —`exactamente un`, `únicamente`— y ambos designan la misma magnitud: la `Confianza`.

## E-4 · La referencia queda fijada por `confianza.md`

`20_epistemologia/confianza.md` `# Definición`, texto literal íntegro:

> La Confianza es una **propiedad de una Hipótesis**.
>
> Representa la **solidez** con la que el Modelo sostiene dicha Hipótesis en un momento determinado.
>
> La Confianza nunca expresa certeza.

`20_epistemologia/confianza.md` `# Propósito`:

> La Confianza expresa el **grado de respaldo** que el Modelo atribuye a una Hipótesis **según el conocimiento disponible**.

`00_canon/primeros_principios.md` `PP-004`:

> El Modelo Vivo está compuesto por hipótesis cuya **plausibilidad depende del conocimiento disponible**.

**Hecho verificado.** Ambos enunciados hacen depender su magnitud de la misma cosa, con la misma fórmula literal: *«el conocimiento disponible»*.

**Hecho verificado.** `20_epistemologia/confianza.md` **no emplea `plausibilidad` ni una sola vez**, en ninguna de sus catorce secciones, pese a ser el documento del concepto al que `H-006` atribuye la acción de modificarla.

### Reciprocidad verificada entre `C-003` y `H-006`

| Documento | Restricción | Texto literal |
|---|---|---|
| `20_epistemologia/confianza.md` | `C-003` | *«La modificación de una Confianza **nunca altera la naturaleza de una Hipótesis**.»* |
| `20_epistemologia/hipotesis.md` | `H-006` | *«La Confianza modifica la plausibilidad de una Hipótesis. **Nunca su naturaleza**.»* |

**Hecho verificado.** Ambas restricciones enuncian la misma regla desde los dos documentos implicados y comparten la cláusula final sobre la `naturaleza`. `C-003` la enuncia **sin emplear `plausibilidad`**; `H-006` la enuncia nombrándola. El término aparece en una de las dos formulaciones de una misma norma.

## E-5 · Co-referencia verificada en `70_patrones`

`70_patrones/ciclo_vida_patron.md`, secciones consecutivas, texto literal:

> **# Patrón estable**
> […]
> La **confianza** permanece elevada.
>
> **# Patrón debilitado**
>
> La información reciente comienza a reducir la **plausibilidad** del patrón.
> […]
> El patrón continúa existiendo, aunque con **menor confianza**.

**Hecho verificado.** Dentro de la **misma sección** `# Patrón debilitado`, y con tres líneas de separación, el mismo fenómeno —el debilitamiento del patrón por información reciente— se describe primero como reducción de la **plausibilidad** y después como **menor confianza**. La sección precedente emplea `confianza` para el fenómeno inverso.

**Hecho verificado.** `70_patrones/naturaleza_patrones.md` declara que los patrones deben *«admitir distintos niveles de confianza»*, de modo que la magnitud aplicable a un patrón está declarada y es la `Confianza`.

**Consecuencia verificada.** El sintagma **es reducible**. Se cumple aquí el mismo criterio que `AD-05 · § Decisión` empleó para `entidades del dominio` —co-referencia verificada en el uso, dentro de una misma unidad de texto— y que `AD-06` y `AD-07` no pudieron aplicar por ausencia de par equivalente.

## E-6 · Contradicciones registradas

Se registran conforme al encargo. **Ninguna se resuelve aquí.**

**CP-1 · `H-006` leído literalmente exige distinción.**
*«La Confianza modifica la plausibilidad de una Hipótesis»*: nada se modifica a sí mismo. Es la **única aparición en sección admitida** de todo el repositorio y sostiene la alternativa P-C. La decisión se apoya en las dos cláusulas de exclusividad de `hipotesis.md` `# Relaciones` y `evidencia.md` `# Naturaleza`, ambas en secciones admitidas, y en la reciprocidad de `C-003`, que enuncia la misma norma sin el término. **La tensión permanece abierta y no se resuelve aquí.**

**CP-2 · `evidencia.md` se contradice entre dos de sus secciones.**
`# Propósito`: *«mecanismo mediante el cual una Hipótesis puede aumentar o disminuir su plausibilidad»*. `# Naturaleza`: *«modifica únicamente la Confianza del Modelo»*. Mismo documento, mismo sujeto, mismo acto, dos objetos nombrados, uno de ellos con marcador de exclusividad.

**CP-3 · `confianza.md` no nombra la magnitud que `H-006` le atribuye modificar.**
Cero apariciones de `plausibilidad` en las catorce secciones del documento.

**CP-4 · `C-003` y `H-006` son la misma norma con formulaciones desiguales.**
Sólo una de las dos emplea el término. Ningún documento declara cuál prevalece. `R-06 · Determinación B` verificó que el repositorio carece de regla de precedencia.

**CP-5 · `ciclo_vida_patron.md` alterna ambos términos en la misma sección.**
Tres líneas de separación para el mismo fenómeno.

**CP-6 · La dependencia se enuncia sobre `conocimiento disponible`.**
`PP-004` y `confianza.md` `# Propósito` hacen depender sus magnitudes del `conocimiento disponible`, término cuya relación con `conocimiento admitido` `AD-06 · CK-3` y `CK-4` dejaron expresamente sin declarar.

**CP-7 · El término se predica de tres portadores heterogéneos.**
`Hipótesis` (`20_epistemologia`), `patrón` (`70_patrones`) y `explicación estructural` (`70_patrones`, uso adjetival). `confianza.md` `C-001` declara: *«Toda Confianza pertenece exactamente a una Hipótesis.»* Ningún documento declara si la `Confianza` de un patrón es la misma magnitud que `C-001` regula.

**CP-8 · Divergencia de inventario respecto de `R-10`.**
`R-10 · Tarea 1.b` consignó 2 documentos; en HEAD se verifican 5. **Fuera del alcance de AD-08.**

**CP-9 · Las contradicciones de `AD-03` a `AD-07` permanecen abiertas.**
Verificado en HEAD: las nueve de cada una —**45 en total**— subsisten, entre ellas la existencia de `30_ontologia/modelo.md`, descartada expresamente por `AD-01` y `AD-02`.

---

# Decisión

# P-D · `Plausibilidad` es una expresión derivada

**`Plausibilidad` no es un concepto autónomo. Designa la magnitud que `20_epistemologia/confianza.md` define como `Confianza`: la propiedad de una Hipótesis que representa la solidez con la que el Modelo la sostiene según el conocimiento disponible. Su referencia queda fijada por `confianza.md`, sin necesidad de declaración propia.**

**Justificación, exclusivamente por evidencia documental:**

**No es P-A.** **Cero apariciones de `plausib*` en `10_nucleo`.** Ningún axioma lo emplea, a diferencia de los cuatro primitivos ya resueltos: `Modelo` figura en cinco axiomas, `Organización` en `A1` y `A2`, el régimen de `instante lógico` en `A8`, la familia de `conocimiento admitido` en `A5`, `A6` y `A13`. Carece de anclaje axiomático, y además su referencia sí queda fijada por otro documento, de modo que no satisface la condición de primitivo que `AD-01` aplicó a `Modelo`.

**No es P-B.** `hipotesis.md` `# Naturaleza` —sección admitida— enumera las propiedades de toda Hipótesis y `plausibilidad` **no figura**; la magnitud enumerada es la `Confianza`. `confianza.md` no la nombra ni una sola vez. Y `catalogo_entidades.md` no la inscribe.

**No es P-C.** La distinción que `H-006` sugiere queda excluida por dos secciones admitidas con marcador de exclusividad: `hipotesis.md` `# Relaciones` —*«posee **exactamente un** nivel de Confianza»*— y `evidencia.md` `# Naturaleza` —*«modifica **únicamente** la Confianza del Modelo»*—. Una segunda propiedad distinta y una segunda magnitud modificada contradirían ambas.

**No es P-E.** La evidencia discrimina sin necesidad de invocar precedencia entre documentos concurrentes: el conflicto principal es **intradocumental** (`evidencia.md` `# Propósito` frente a `# Naturaleza`), y `sistema_normativo.md` `# Conflictos` regula el conflicto entre artefactos, no dentro de uno.

**Es P-D, por tres hechos verificados:**

1. **Co-referencia verificada en el uso.** `70_patrones/ciclo_vida_patron.md` `# Patrón debilitado` describe el mismo fenómeno primero como reducción de la **plausibilidad** y tres líneas después como **menor confianza**, y la sección precedente emplea `confianza` para el fenómeno inverso. Es el mismo criterio que `AD-05` aplicó a `entidades del dominio`: co-referencia dentro de una misma unidad de texto.

2. **Dos cláusulas de exclusividad en secciones admitidas.** `hipotesis.md` `# Relaciones` (*exactamente un* nivel de Confianza) y `evidencia.md` `# Naturaleza` (modifica *únicamente* la Confianza). Ambas de documentos congelados, ambas designando la `Confianza`, ambas incompatibles con una segunda magnitud.

3. **La misma norma se enuncia dos veces y sólo una emplea el término.** `C-003` y `H-006` son recíprocas y comparten la cláusula sobre la `naturaleza`; `confianza.md`, que la enuncia desde el lado del concepto modificador, no emplea `plausibilidad` en ninguna de sus catorce secciones. Y `PP-004` hace depender la plausibilidad del *«conocimiento disponible»*, la misma fórmula literal con que `confianza.md` `# Propósito` define el grado de respaldo.

**Alcance de la determinación.** Esta decisión fija la **referencia** del término. **No resuelve `H-006`**, cuya lectura literal exige distinción (CP-1); **no resuelve la contradicción intradocumental de `evidencia.md`** (CP-2); **no declara una regla de precedencia** entre las dos designaciones (CP-4); y **no determina si la `Confianza` de un patrón es la magnitud que `C-001` regula** (CP-7). Las cuatro carencias se registran y quedan abiertas.

## Verificación de coherencia

| Autoridad | Resultado | Justificación por evidencia |
|---|---|---|
| **AD-01** | **Coherente** | `Modelo` conserva su condición de metaobjeto raíz sin aristas salientes. `confianza.md` `# Naturaleza` declara que la Confianza *«pertenece al Modelo»*: la magnitud designada es contenido del Modelo |
| **AD-02** | **Coherente** | P-D no requiere declaración y por tanto no invoca mecanismo distinto del congelado. Cero documentos nuevos, cero modificaciones de `# Dependencias` |
| **AD-03** | **Coherente** | `AD-03` situó `Organización` fuera del Modelo. La magnitud designada pertenece al Modelo (`confianza.md` `# Naturaleza`) |
| **AD-04** | **Coherente. Relación indeterminada.** | `plausibilidad` y `dominio` **no coocurren en ningún documento**. `confianza.md` tampoco emplea `dominio`. **Indeterminable con la evidencia disponible**; no se decide aquí |
| **AD-05** | **Coherente y homóloga** | Aplica el mismo criterio de reducibilidad y arroja el mismo resultado: expresión derivada, sin declaración autónoma. Es el segundo de los seis términos de `H-02` que no requiere declaración |
| **AD-06** | **Coherente** | `AD-06` registró en `CK-3` y `CK-4` que la relación entre `conocimiento admitido` y `conocimiento disponible` no está declarada. `PP-004` y `confianza.md` `# Propósito` emplean `conocimiento disponible`; AD-08 no altera esa incidencia ni la resuelve (CP-6) |
| **AD-07** | **Coherente** | Sin intersección: `plausibilidad` e `instante lógico` no coocurren en ningún documento |
| **RA-01** | **Sin impacto** | `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`. RA-01.7, RA-01.8 y RA-01.9 permanecen exactos |
| **plan_remediacion_v1.2** | **Sin impacto** | G-1 conserva prioridad 1 y `Dependencias: ninguna`. Camino crítico `G-1 → G-4 → G-6` inalterado. Ninguna sección `# Dependencias` se modifica |

---

# Consecuencias

## Dónde deberá declararse «Plausibilidad»

**En ningún lugar de forma autónoma.**

La referencia queda fijada por `20_epistemologia/confianza.md`, documento congelado y vigente que no se modifica.

**Ausencia de autoridad registrada.** Ninguna de las nueve autoridades determina si G-1 debe hacer explícita esa equivalencia. `AD-02`, `AD-03`, `AD-04`, `AD-05`, `AD-06` y `AD-07` reservan la redacción a G-1. **No se decide aquí.**

## Qué documentos deberán modificarse durante G-1

**Ninguno adicional.**

`plausibilidad` no incrementa el alcance documental de G-1 en ningún documento. No se crea documento alguno. No se modifican `20_epistemologia/confianza.md`, `hipotesis.md`, `evidencia.md`, `00_canon/primeros_principios.md` ni los dos documentos de `70_patrones`.

## Cierre de `H-02`

Con esta decisión, los seis términos de `H-02` quedan resueltos:

| Término | Decisión | Documento a modificar en G-1 |
|---|---|---|
| `Organización` | `AD-03` · referente externo | `10_nucleo/axiomas.md` |
| `Dominio` | `AD-04` · ámbito conceptual interno al Modelo | `10_nucleo/axiomas.md` |
| `entidades del dominio` | `AD-05` · expresión referencial derivada | — |
| `conocimiento admitido` | `AD-06` · término primitivo autónomo | `10_nucleo/axiomas.md` |
| `instante lógico` | `AD-07` · término primitivo del núcleo | `10_nucleo/axiomas.md` |
| `plausibilidad` | **`AD-08` · expresión derivada** | **—** |

**Alcance documental total de `H-02`: un único documento, `10_nucleo/axiomas.md`.** Cuatro términos requieren declaración; dos no. Ninguna sección `# Dependencias` se modifica. Ningún documento nuevo se crea.

`H-01` —`Modelo`— fue resuelto por `AD-01` y `AD-02`, con el mismo documento y el mismo mecanismo. **G-1 puede ejecutarse sobre un único documento.**

## Consecuencias sobre el estado del repositorio

1. `plausibilidad` deja de ser concepto fantasma sin adquirir documento, declaración ni arista. La topología verificada por `R-10 · Tarea 10` permanece descriptivamente válida.
2. `H-006` —única restricción numerada que invoca el término— adquiere referente determinado, **sin que su tensión literal quede resuelta** (CP-1).
3. La contradicción intradocumental de `evidencia.md` entre `# Propósito` y `# Naturaleza` queda **explícita y sin resolver** (CP-2). Su tratamiento no pertenece a G-1.
4. `PP-004` conserva su enunciado sin modificación.
5. Los dos usos de `70_patrones` conservan su enunciado sin modificación.

## Cuestiones que esta decisión no resuelve

- La **lectura literal de `H-006`**, que exige distinción entre `Confianza` y `plausibilidad` (CP-1).
- La **contradicción interna de `evidencia.md`** entre `# Propósito` y `# Naturaleza` (CP-2).
- La **regla de precedencia** entre las dos designaciones (CP-4). `R-06 · Determinación B` verificó que el repositorio carece de ella.
- Si la **`Confianza` de un patrón** es la magnitud que `C-001` regula (CP-7).
- La **relación entre `conocimiento disponible` y `conocimiento admitido`** (CP-6), ya registrada en `AD-06 · CK-3` y `CK-4`.
- Si `plausibilidad` **pertenece al dominio** (verificación de coherencia con `AD-04`). Indeterminable: los términos no coocurren.
- Las **contradicciones CP-1 a CP-9**, y las cuarenta y cinco heredadas de `AD-03` a `AD-07`, verificadas como aún abiertas en HEAD.

---

# Declaración

**`Plausibilidad` es una expresión derivada: designa la magnitud que `20_epistemologia/confianza.md` define como `Confianza`, esto es, la propiedad de una Hipótesis que representa la solidez con la que el Modelo la sostiene según el conocimiento disponible.**

No es término primitivo del núcleo. No es concepto epistemológico autónomo. No es una propiedad distinta de la `Confianza`. No es un término concurrente irresoluble. No requiere declaración autónoma, documento propio ni modificación de sección `# Dependencias` alguna: su referencia queda fijada por `confianza.md`, documento congelado que no se modifica.

**Con esta decisión queda cerrado `H-02`.** Los siete conceptos fantasma verificados por `R-10 · Tarea 9` quedan resueltos por `AD-01` a `AD-08`, y el alcance documental de **G-1 · Cierre del vocabulario primitivo** es un único documento: `10_nucleo/axiomas.md`.

Esta decisión no modifica `AD-01`, `AD-02`, `AD-03`, `AD-04`, `AD-05`, `AD-06` ni `AD-07`; no modifica `RA-01`; y no modifica `plan_remediacion_v1.2.md`.

No autoriza modificación alguna del repositorio. La ejecución material corresponde a **G-1**.

Se deja constancia de que `H-006` —única aparición del término en sección admitida de todo el repositorio— sostiene, leído literalmente, una distinción que dos secciones admitidas con marcador de exclusividad excluyen; de que `evidencia.md` se contradice entre `# Propósito` y `# Naturaleza`; de que `confianza.md` no emplea el término en ninguna de sus catorce secciones pese a que `H-006` le atribuye modificarlo; y de que el repositorio carece de regla de precedencia que permita resolver formalmente la concurrencia, conforme a `R-06 · Determinación B`. Las cuatro incidencias quedan **registradas y abiertas**, y ninguna se incorpora a esta decisión.

Esta decisión queda **CONGELADA**. Toda modificación requerirá una nueva decisión arquitectónica que la sustituya íntegramente.

---

```
HEAD auditado:        afcace7
Autoridades:          RA-01 · plan_remediacion_v1.2 · AD-01 … AD-07 · repositorio en HEAD
Apariciones auditadas: 5 en 5 documentos · 3 capas · 1 en sección admitida
Usos positivos: 5 · Usos negativos: 0 · Restricciones: 1 · Relaciones: 0
`plausib*` en 10_nucleo: 0 apariciones · en confianza.md: 0 apariciones
Documentos canónicos modificados: ninguno
Contradicciones registradas: 9 (CP-1 … CP-9)
H-02: CERRADO
```
