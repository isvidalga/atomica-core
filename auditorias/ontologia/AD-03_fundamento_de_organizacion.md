# AD-03 · FUNDAMENTO DE ORGANIZACIÓN

Estado: CONGELADA

Repositorio: atomica-core

Ámbito: Núcleo · Ontología

HEAD auditado:

```
db26bcc4223270973fdf41a9dced9fc85be8054d
```

Contenido canónico coincidente con `origin/main` = `8eb1c6a`. HEAD añade únicamente `AD-01` y `AD-02`, ambos en `auditorias/ontologia/`.

Referencia de las auditorías previas: tag `v1.0` = `fe6dc5c`. **El repositorio ha divergido de esa referencia**: 33 ficheros difieren, con 15 documentos nuevos en `00_canon`, 2 en `30_ontologia` y 1 en `40_metodologia`. Esta auditoría se practica sobre HEAD, no sobre `v1.0`.

Autoridades: `RA-01_consolidacion_hallazgos.md` · `plan_remediacion_v1.2.md` · `AD-01_fundamento_del_modelo.md` · `AD-02_implementacion_documental_del_modelo.md` · inspección directa del repositorio en HEAD.

Ubicación:

```
auditorias/ontologia/AD-03_fundamento_de_organizacion.md
```

---

# Antecedentes

`AD-01` congeló la determinación **C · `Modelo` es un metaobjeto raíz**, definido como *«el objeto raíz del sistema: aquello que admite, define, contiene y evoluciona; aquello de lo que las entidades ontológicas son contenido y de lo que las Relaciones son estructura»*.

`AD-02` congeló la variante **C.i**: los términos primitivos se declaran dentro de secciones admitidas de `10_nucleo/axiomas.md`, sin crear documentos nuevos y sin modificar ninguna sección `# Dependencias`.

`RA-01 · RA-01.1 · H-02` enumera los seis conceptos fantasma restantes tras `Modelo`. El primero de ellos es:

> `organización` / `referente organizacional`

`plan_remediacion_v1.2.md · G-1 · Cierre del vocabulario primitivo`, prioridad 1, `Dependencias: ninguna`, objetivo literal: *«Dotar de fundamento documental a los siete conceptos fantasma y cerrar semánticamente el grafo.»*

`AD-01 · § C.2`, fila G-1: *«H-02 aplica **el mismo mecanismo** a los seis fantasmas restantes.»*

`AD-01 · § Consecuencias` declara expresamente no resuelto: *«El **estatus individual** de los seis primitivos restantes de H-02.»* `AD-02 · § Consecuencias` lo reitera.

Este documento resuelve el estatus de **uno solo** de los seis: `Organización`. No resuelve `Modelo Vivo`, `Estado`, `Representación`, `Identidad`, `Dominio`, `Producto` ni casos de uso.

---

# Alternativas

Cuatro alternativas resultan compatibles con al menos una parte de la evidencia localizada. No se considera ninguna otra.

## O-A · Entidad ontológica

**Definición exacta.** `Organización` es una entidad del dominio, inscrita en la Ontología junto a `Estado`, `Identidad`, `Representación`, `Trayectoria`, `Memoria` y `Relación`, con documento propio `30_ontologia/organizacion.md` y las ocho secciones admitidas.

**Ventajas.** Es exactamente lo que declara `30_ontologia/catalogo_entidades.md`, documento **CANÓNICO v1.0.0**, en su entrada **ENT-001**, con documento de referencia `organizacion.md`. Es la única alternativa respaldada por una declaración canónica explícita y vigente.

**Contradicciones.** Cuatro, todas verificadas (véase § Evidencia · E-2, E-4, E-5):
- `10_nucleo/axiomas.md` `A1`: *«Existe un referente organizacional **independiente del Modelo**.»* `AD-01` establece que las entidades ontológicas son **contenido** del Modelo. Una entidad no puede ser simultáneamente contenido del Modelo e independiente de él.
- `10_nucleo/axiomas.md` `A2`: *«ATÓMICA **nunca opera directamente sobre organizaciones**.»*
- `30_ontologia/estado.md:25` `# Definición`: *«Un Estado **no representa la organización**.»*
- `30_ontologia/representacion.md:34` `# Naturaleza` y `20_epistemologia/observacion.md:39` `# Naturaleza`: *«no pertenece a la organización observada»*.

**Documentos afectados.** Creación de `30_ontologia/organizacion.md`; los documentos que emplean el término en sección admitida deberían declararlo en `# Dependencias`: `identidad.md`, `estado.md`, `representacion.md`, `observacion.md`, `hipotesis.md`, `diagnostico.md` — **6 documentos congelados**.

**Impacto sobre RA-01.** `H-02` dejaría de ser vocabulario primitivo para `Organización`, escindiendo el hallazgo. RA-01.7, RA-01.8 y RA-01.9 requerirían recálculo.

**Impacto sobre `plan_remediacion_v1.2`.** Las seis modificaciones de `# Dependencias` son materia de **G-6** (prioridad 7, dependencias G-3 y G-4). Ejecutarlas dentro de G-1 (prioridad 1) reproduce el ciclo `G-1 → G-4 → G-6 → G-1` que `AD-02 · E-4` verificó como causa de descarte de la variante C.ii.

## O-B · Referente externo

**Definición exacta.** `Organización` es el **referente organizacional externo**: aquello sobre lo que ATÓMICA construye conocimiento, situado fuera del Modelo, no contenido en él, no modificado por él y nunca operado directamente. No es entidad del Modelo, no es artefacto epistemológico y no es metaobjeto de la arquitectura. Es el término primitivo que nombra el objeto observado.

**Ventajas.** Es la única alternativa compatible con la totalidad de la evidencia en secciones admitidas (§ Evidencia · E-2, E-4). Es el enunciado literal de `A1`. Preserva la posición de raíz que `R-10 · Tarea 10` verificó para los conceptos fantasma. Emplea el mecanismo ya congelado por `AD-02`.

**Contradicciones.** Una, verificada: contradice la entrada **ENT-001** de `30_ontologia/catalogo_entidades.md`, que inscribe `Organización` como entidad de la Ontología. Véase § Evidencia · E-6 para la regla que resuelve el conflicto.

**Documentos afectados.** `10_nucleo/axiomas.md`, exclusivamente.

**Impacto sobre RA-01.** Ninguno. `H-02` conserva categoría **Causa raíz**, grupo **G-1** y su relación causal `H-02 → H-11` y `H-02 → H-22`.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno. Ninguna sección `# Dependencias` se modifica; G-6 no se anticipa; el camino crítico permanece acíclico.

## O-C · Metaobjeto correlato del Modelo

**Definición exacta.** `Organización` es un segundo metaobjeto raíz, correlato de `Modelo`: donde `Modelo` es la representación, `Organización` es lo representado. Ambos serían objetos raíz de la arquitectura, declarados al mismo nivel.

**Ventajas.** Compatible con `A1`, que afirma la existencia del referente. Preserva su condición de raíz.

**Contradicciones.** Dos, verificadas:
- `AD-01` define `Modelo` como **el** objeto raíz del sistema —*«aquello que admite, define, contiene y evoluciona»*— y verificó nueve citas literales en las que `Modelo` ocupa funciones de sujeto agente. **`Organización` no es sujeto agente en ninguna aparición del corpus** (§ Evidencia · E-3): aparece exclusivamente como objeto de las preposiciones *sobre*, *acerca de*, *de la … observada*. Declarar metaobjeto a un término que nunca actúa carece de respaldo documental.
- Dos raíces arquitectónicas reproducen la pluralidad de anclajes que `R-08` determinó como **C** y que `AD-01 · § C.1` resolvió mediante un único punto de articulación.

**Documentos afectados.** `10_nucleo/axiomas.md`.

**Impacto sobre RA-01.** Ninguno directo, pero exigiría revisar la determinación de `AD-01` sobre la unicidad del objeto raíz.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno directo.

## O-D · Término epistemológico

**Definición exacta.** `Organización` es el sujeto observado de la Epistemología, declarado en `20_epistemologia` como origen de la cadena `Organización → Observación → Hipótesis → Evidencia → Confianza`.

**Ventajas.** Respaldado por `20_epistemologia/observacion.md:72`, que sitúa `Organización` en la cabecera de esa cadena, y por `40_metodologia/metodologia.md:67`, que reproduce la misma cabecera en el ciclo metodológico.

**Contradicciones.** Tres, verificadas:
- Ambas apariciones residen en secciones **no admitidas** —`# Relaciones` y `# Ciclo metodológico`— y no constituyen enunciados relacionales computables bajo el método de las auditorías R-08, R-09 y R-10.
- `AD-01` establece que los documentos de `20_epistemologia` son contenido del Modelo. `A1` sitúa el referente organizacional fuera de él.
- `observacion.md:39` `# Naturaleza` declara expresamente: *«No pertenece a la organización observada.»* La Epistemología se declara ajena a la Organización, no continente de ella.

**Documentos afectados.** Creación de un documento en `20_epistemologia`; declaración en `# Dependencias` de los seis documentos que emplean el término.

**Impacto sobre RA-01.** Igual que O-A: escisión de `H-02` y recálculo de RA-01.7–RA-01.9.

**Impacto sobre `plan_remediacion_v1.2`.** Igual que O-A: anticipación de G-6.

---

# Evidencia

Inspección directa del repositorio en HEAD `db26bcc`. Búsqueda sin filtro de extensión sobre las ocho capas canónicas.

## E-1 · Inventario cuantitativo

**Hecho verificado.** El lexema `organizaci` aparece en **131 documentos** de las ocho capas canónicas. Distribución por capa:

| Capa | Documentos con apariciones | Documento de mayor concentración |
|---|---|---|
| `00_canon` | 13 | `vision.md` — 30 |
| `10_nucleo` | 2 | `principios.md` — 3 · `axiomas.md` — 2 |
| `20_epistemologia` | 2 | `observacion.md` — 6 · `hipotesis.md` — 1 |
| `30_ontologia` | 6 | `identidad.md` — 3 · `catalogo_entidades.md` — 2 · `modelo.md` — 3 |
| `40_metodologia` | 5 | `ifo.md` — 19 · `metodologia.md` — 17 |
| `50_producto` | 22 | `modelo_vivo.md` — 28 · `gemelo_organizacional.md` — 15 |
| `60_interfaces` | 4 | `001_inicio.md` — 3 |
| `70_patrones` | 77 | `P-001` — 16 · `motor_patrones.md` — 14 |

**Hecho verificado.** El sintagma `referente organizacional` aparece **exactamente cuatro veces** en todo el repositorio:

| Documento | Línea | Sección | Admitida | Contexto literal | Función semántica |
|---|---|---|---|---|---|
| `10_nucleo/axiomas.md` | 26 | `A1 · Primacía del referente` | — (axioma) | *«Existe un referente organizacional independiente del Modelo.»* | **Afirmación de existencia externa** |
| `30_ontologia/identidad.md` | 23 | `# Definición` | **Sí** | *«Una Identidad es la continuidad lógica de un mismo referente organizacional a través del tiempo.»* | **Referente de la Identidad** |
| `30_ontologia/identidad.md` | 64 | `# Persistencia` | No | *«La Identidad permanece mientras continúe existiendo el mismo referente organizacional.»* | Condición de permanencia |
| `40_metodologia/diagnostico.md` | 37 | `# Naturaleza` | **Sí** | *«Constituye el mecanismo mediante el cual el Modelo obtiene información del referente organizacional.»* | **Fuente externa de información** |

**Hecho verificado.** No existe en el repositorio ningún enunciado de la forma *«Una Organización es…»* con `Organización` capitalizada. La búsqueda de enunciados definitorios devolvió **0 resultados**.

## E-2 · Apariciones en secciones admitidas

Secciones admitidas: Definición · Naturaleza · Constitución · Formación · Restricciones · Dependencias · Utilizado por · Declaración. Inventario completo:

| Documento | Línea | Sección | Contexto literal | Función semántica |
|---|---|---|---|---|
| `30_ontologia/identidad.md` | 23 | `# Definición` | *«continuidad lógica de un mismo **referente organizacional** a través del tiempo»* | Referente externo del que la Identidad es correlato interno |
| `30_ontologia/identidad.md` | 31 | `# Definición` | *«distintos Estados pertenecen a la **misma organización**»* | Criterio de pertenencia |
| `30_ontologia/estado.md` | 25 | `# Definición` | *«Un Estado **no representa la organización**. Representa el conocimiento disponible sobre ella.»* | **Exclusión expresa** |
| `30_ontologia/representacion.md` | 34 | `# Naturaleza` | *«no pertenece a la **organización observada**»* | **Exclusión expresa** |
| `20_epistemologia/observacion.md` | 23 | `# Definición` | *«el registro de un fenómeno relativo a una **organización**»* | Objeto del registro |
| `20_epistemologia/observacion.md` | 39 | `# Naturaleza` | *«No pertenece a la **organización observada**.»* | **Exclusión expresa** |
| `20_epistemologia/observacion.md` | 95 | `# Restricciones · O-001` | *«Toda observación hace referencia a una **organización determinada**.»* | Referencia obligatoria |
| `20_epistemologia/observacion.md` | 172 | `# Declaración` | *«Ninguna observación constituye, por sí sola, conocimiento suficiente para describir una **organización**.»* | Objeto descrito |
| `20_epistemologia/hipotesis.md` | 136 | `# Declaración` | *«El Modelo nunca afirma hechos **acerca de una organización**.»* | **Exclusión expresa** |
| `40_metodologia/diagnostico.md` | 37 | `# Naturaleza` | *«el Modelo obtiene información **del referente organizacional**»* | Fuente externa |
| `50_producto/gemelo_organizacional.md` | 92 | `# Composición` | *«El Gemelo Organizacional representa conjuntamente: — **Organización**; — Estado vigente; …»* | Elemento representado |

**11 apariciones en secciones admitidas, en 7 documentos.**

**Hecho verificado.** De las once, **cuatro son exclusiones expresas**: `estado.md` `# Definición`, `representacion.md` `# Naturaleza`, `observacion.md` `# Naturaleza` e `hipotesis.md` `# Declaración`. Ninguna de las once atribuye a `Organización` pertenencia al Modelo, a la Ontología o a la Epistemología.

**Hecho verificado.** En las once apariciones, `Organización` ocupa siempre la posición de **objeto**: *sobre* ella, *acerca de* ella, *relativo a* ella, *de la* organización observada. En ninguna es sujeto de un verbo de acción.

## E-3 · Apariciones en secciones no admitidas y texto no normativo

**Hecho verificado.** Los tres enunciados más próximos a una definición residen todos en secciones **no admitidas** y son **mutuamente distintos**:

| Documento | Línea | Sección | Enunciado |
|---|---|---|---|
| `00_canon/vision.md` | 181 | `# Qué entendemos por organización` | *«Una organización es un sistema adaptativo complejo.»* |
| `10_nucleo/principios.md` | 29 | `# P-002 · La organización es un sistema vivo` | *«ATÓMICA representa organizaciones como sistemas vivos.»* |
| `00_canon/sistemas_organizacionales.md` | 5 | `## 4. Los siete sistemas` | *«Toda organización se representa mediante siete sistemas interdependientes.»* |

**Ausencia de autoridad.** Ninguno de los tres reside en sección admitida. Ninguno se declara definición oficial. Ningún documento establece precedencia entre ellos.

**Hecho verificado.** `00_canon/vision.md:239`, sección `# El papel del Modelo Organizacional`, no admitida: *«El Modelo Organizacional es la representación conceptual del conocimiento disponible sobre una organización.»* Define `Modelo Organizacional`, término distinto de `Organización`. **Fuera del alcance de AD-03.**

**Hecho verificado.** Los diagramas de `20_epistemologia/observacion.md:72` (`# Relaciones`) y `40_metodologia/metodologia.md:67` (`# Ciclo metodológico`) sitúan `Organización` en la cabecera de sus cadenas. Ambas secciones son **no admitidas**.

**Hecho verificado.** Las 77 apariciones de `70_patrones` y las 22 de `50_producto` son usos descriptivos en prosa, ejemplos y enunciados de patrón. Ninguna constituye enunciado definitorio de `Organización`.

## E-4 · Los axiomas sitúan el referente fuera del Modelo

`10_nucleo/axiomas.md`, **CANÓNICO v1.0**, `# Propósito`: *«Los axiomas constituyen las proposiciones fundamentales del Canon. No se demuestran. No dependen de otros documentos. **Todo documento posterior deberá ser compatible con ellos.**»*

| Axioma | Texto literal |
|---|---|
| **A1 · Primacía del referente** | *«Existe un referente organizacional **independiente del Modelo**. El Modelo **nunca modifica** el referente.»* |
| **A2 · Primacía de la representación** | *«ATÓMICA **nunca opera directamente sobre organizaciones**. Opera exclusivamente sobre representaciones.»* |

**Hecho verificado.** `A1` es el **primer axioma del Canon** y su título nombra expresamente al referente. Es el único axioma que afirma la existencia de algo situado fuera del Modelo.

**Consecuencia verificada, por confrontación con AD-01.** `AD-01 · § Decisión` establece que `Modelo` es *«aquello de lo que las entidades ontológicas son contenido»*. `A1` sitúa el referente organizacional **fuera** del Modelo. Por tanto `Organización` **no puede ser entidad ontológica** sin contradecir `A1`.

## E-5 · `Identidad` es el correlato interno del referente externo

**Hecho verificado.** `30_ontologia/identidad.md:23` `# Definición`: *«Una Identidad es la continuidad lógica de un mismo referente organizacional a través del tiempo.»*

**Hecho verificado.** `identidad.md` `# Dependencias` declara exclusivamente `10_nucleo/axiomas.md` — verificado por `R-09 · R-09.2` y confirmado en HEAD.

**Consecuencia verificada.** El Modelo dispone ya de un concepto que representa internamente al referente externo: `Identidad`. La arquitectura no carece de correlato interno de la Organización; carece de la declaración del referente externo mismo. **`Identidad` no se resuelve aquí.**

## E-6 · El catálogo declara existencia, no significado

`30_ontologia/catalogo_entidades.md`, **CANÓNICO v1.0.0**, `# Catálogo Oficial`:

> `| ENT-001 | Organización | Canónico | 1.0.0 | organizacion.md |`

Y en `# Principios`: *«Toda entidad existe únicamente cuando figura inscrita en este catálogo. […] Toda entidad pertenece exclusivamente a la Ontología.»*

`00_canon/sistema_normativo.md`, **CANÓNICO v1.0**, `# Tipos de artefacto`:

> ## Catálogo
> Declara oficialmente qué entidades existen.
> **Nunca define su significado.**

**Hecho verificado.** Por la norma del propio Canon, `catalogo_entidades.md` **inscribe la existencia** de `Organización` pero **carece de autoridad para determinar qué es**. La entrada ENT-001 no constituye, ni puede constituir, definición.

**Hecho verificado.** `sistema_normativo.md` `# Relación entre artefactos` establece: *«Una Norma puede gobernar: Especificaciones, Catálogos, Registros, Decisiones.»* `axiomas.md` declara que todo documento posterior debe serle compatible. `catalogo_entidades.md` es posterior a `v1.0` — no existía en `fe6dc5c`.

## E-7 · Contradicciones registradas

Se registran conforme al encargo. **Ninguna se resuelve en este documento salvo la que afecta directamente a `Organización`.**

**C-1 · `30_ontologia/modelo.md` existe en HEAD y contradice AD-01 y AD-02.**
El documento existe con `Estado: Frozen`, `Versión: 1.0.0`. `AD-01 · § Decisión` descartó la alternativa A —documento de `Modelo` en `30_ontologia`— con tres razones verificadas. `AD-02 · § Consecuencias · 2` declara literalmente: *«Queda expresamente descartada la creación de `30_ontologia/modelo.md`.»* La contradicción es directa. **Fuera del alcance de AD-03.**

**C-2 · `30_ontologia/modelo.md` define `Modelo` como representación.**
Su `# Definición`: *«Un Modelo es una representación formal de una realidad…»*. Contradice `AD-01`, que determinó que `Modelo` es metaobjeto raíz y **no** representación, y concurre con `30_ontologia/representacion.md` `# Definición`. **Fuera del alcance de AD-03.**

**C-3 · `30_ontologia/modelo.md` incumple la plantilla de la capa.**
Carece de `# Constitución`, `# Formación`, `# Dependencias`, `# Utilizado por` y `# Declaración`; añade `# Consecuencias`, `# No es` y `# Relaciones`, no admitidas. **Fuera del alcance de AD-03.**

**C-4 · El catálogo de entidades referencia tres documentos inexistentes.**
`organizacion.md` (ENT-001), `capacidad.md` (ENT-003) y `fragilidad.md` (ENT-004) **no existen en ninguna ruta del repositorio**. Verificado por búsqueda exhaustiva. `organizacion.md` es la única de las tres que concierne a AD-03.

**C-5 · El catálogo sitúa en la Ontología dos documentos de Epistemología.**
`ENT-005 · Evidencia → evidencia.md` y `ENT-006 · Hipótesis → hipotesis.md` residen en `20_epistemologia/`, mientras `# Principios` declara: *«Toda entidad pertenece exclusivamente a la Ontología.»* **Fuera del alcance de AD-03.**

**C-6 · El catálogo omite tres conceptos definidos y congelados.**
`Identidad`, `Observación` y `Confianza` poseen documento con `# Definición` y no figuran en el catálogo, pese a que `# Principios` declara: *«Toda entidad existe únicamente cuando figura inscrita en este catálogo.»* `Modelo` tampoco figura, pese a existir `30_ontologia/modelo.md`. **Fuera del alcance de AD-03.**

**C-7 · Tres caracterizaciones incompatibles de `organización`.**
`vision.md:181` (*sistema adaptativo complejo*), `principios.md:29` (*sistema vivo*), `sistemas_organizacionales.md:5` (*siete sistemas interdependientes*). Ninguna en sección admitida; ninguna se declara oficial; ninguna norma establece precedencia entre ellas. **Concierne a AD-03: ninguna de las tres puede invocarse como definición.**

**C-8 · La regla de conflicto de `sistema_normativo.md` es inaplicable en el caso general.**
Declara *«prevalece el tipo de mayor autoridad»* sin enumerar el orden entre `Norma`, `Especificación`, `Catálogo`, `Registro` y `Decisión`, y ningún documento declara su propio tipo de artefacto. La resolución de E-6 se apoya en la cláusula literal *«Nunca define su significado»*, no en la regla de precedencia. **Fuera del alcance de AD-03.**

**C-9 · El repositorio ha divergido de la referencia de las auditorías.**
Las auditorías R-06 a R-10 y RA-01 se practicaron sobre `fe6dc5c`. HEAD difiere en 33 ficheros. Las conclusiones de RA-01 verificadas en esta auditoría —H-02 sobre `organización`— siguen siendo ciertas en HEAD: no existe definición de `Organización`. **Fuera del alcance de AD-03.**

---

# Decisión

# O-B · `Organización` es el referente externo

**`Organización` es el referente organizacional externo: aquello sobre lo que ATÓMICA construye conocimiento, situado fuera del Modelo, no contenido en él, nunca modificado por él y nunca operado directamente. No es entidad de la Ontología, no es artefacto de la Epistemología y no es metaobjeto de la arquitectura. Es el término primitivo que nombra el objeto observado.**

**Justificación, exclusivamente por evidencia documental:**

**No es O-A.** `A1`, primer axioma del Canon, declara el referente organizacional *«independiente del Modelo»*, y `AD-01` establece que las entidades ontológicas son contenido del Modelo. Un mismo término no puede ser contenido del Modelo e independiente de él. La declaración `ENT-001` no contradice esta conclusión: `sistema_normativo.md` establece que un Catálogo *«nunca define su significado»* (E-6), de modo que ENT-001 inscribe existencia, no naturaleza. A ello se suman las cuatro exclusiones expresas de E-2: `estado.md` `# Definición` (*«Un Estado no representa la organización»*), `representacion.md` `# Naturaleza`, `observacion.md` `# Naturaleza` e `hipotesis.md` `# Declaración`.

**No es O-C.** `AD-01` verificó nueve citas literales en las que `Modelo` ocupa funciones de sujeto que admite, define y contiene. E-2 verifica que, en las once apariciones de `Organización` en secciones admitidas, **ninguna** la sitúa como sujeto de un verbo de acción: aparece invariablemente como objeto. No existe respaldo documental para atribuirle la condición de metaobjeto, y una segunda raíz reproduciría la pluralidad de anclajes que `R-08` determinó como **C**.

**No es O-D.** Las dos apariciones que sostienen O-D —`observacion.md:72` y `metodologia.md:67`— residen en secciones **no admitidas**, y el mismo `observacion.md`, en sección admitida (`# Naturaleza`, línea 39), declara: *«No pertenece a la organización observada.»* La Epistemología se declara ajena a la Organización, no continente de ella.

**Es O-B, por tres hechos verificados:**

1. **Enunciado literal del primer axioma.** `A1 · Primacía del referente`: *«Existe un referente organizacional independiente del Modelo. El Modelo nunca modifica el referente.»* `A2`: *«ATÓMICA nunca opera directamente sobre organizaciones.»* La externalidad no se infiere: está axiomatizada, y el axioma se titula por el referente.

2. **Convergencia de las once apariciones en secciones admitidas.** E-2: cuatro exclusiones expresas, siete usos en posición de objeto, cero atribuciones de pertenencia al Modelo, a la Ontología o a la Epistemología. Ningún documento congelado sitúa `Organización` dentro de estructura alguna del sistema.

3. **La arquitectura ya posee el correlato interno.** E-5: `identidad.md` `# Definición` establece que la `Identidad` es *«la continuidad lógica de un mismo referente organizacional a través del tiempo»*. El puente entre el exterior y el Modelo existe y está congelado. Lo que falta es la declaración del referente externo, no un segundo correlato interno.

## Evaluación obligatoria

| Pregunta | Respuesta | Justificación por evidencia |
|---|---|---|
| **¿Contradice AD-01?** | **No** | `AD-01` determinó `Modelo` como metaobjeto raíz que contiene entidades, relaciones, estructura y conocimiento admitido. O-B sitúa `Organización` **fuera** de ese contenido, conforme a `A1`. Ambas determinaciones son complementarias: `AD-01` fija qué contiene el Modelo; AD-03 fija qué queda fuera de él |
| **¿Contradice AD-02?** | **No** | O-B emplea exactamente el mecanismo congelado en `AD-02`: variante **C.i**, declaración en sección admitida de `10_nucleo/axiomas.md`, 0 documentos nuevos, 0 modificaciones de `# Dependencias` |
| **¿Obliga a recalcular RA-01?** | **No** | `H-02` conserva su categoría (**Causa raíz**), su grupo (**G-1**) y sus aristas causales `H-02 → H-11` y `H-02 → H-22`. RA-01.7, RA-01.8 y RA-01.9 permanecen exactos; RA-01.9 ya incluye `axiomas.md` entre los documentos afectados por G-1 |
| **¿Obliga a modificar prioridades?** | **No** | G-1 conserva prioridad 1 y `Dependencias: ninguna`. Camino crítico `G-1 → G-4 → G-6` inalterado |
| **¿Introduce nuevas causas raíz?** | **No** | Ninguna capa pasa a emplear un concepto de capa superior. No se añade dependencia intercapa alguna |
| **¿Genera ciclos?** | **No** | `Organización` no adquiere sección `# Dependencias` ni arista saliente. Conserva la condición de raíz que `R-10 · Tarea 10` verificó para los siete conceptos fantasma |
| **¿Genera conceptos fantasma?** | **No** | No introduce ningún término nuevo. `referente organizacional` y `organización observada` quedan comprendidos en la misma declaración. **No resuelve** los cinco fantasmas restantes de `H-02` |
| **¿Obliga a crear documentos nuevos?** | **No** | Y expresamente **no** obliga a crear `30_ontologia/organizacion.md`, pese a la referencia de `ENT-001` |

---

# Consecuencias

## Dónde deberá declararse `Organización`

**En `10_nucleo/axiomas.md`**, mediante sección admitida, conforme a la variante **C.i** congelada por `AD-02`.

Fundamento: `AD-01 · § C.2`, fila G-1, establece que *«H-02 aplica el mismo mecanismo a los seis fantasmas restantes»*; `AD-02` fijó ese mecanismo como C.i. `Organización` es el primero de esos seis. Además, `A1` —el enunciado que sostiene la decisión— reside ya en ese documento.

## Qué documentos deberán modificarse durante G-1

**Uno: `10_nucleo/axiomas.md`.**

Ninguna sección `# Dependencias` se modifica. Los diez documentos de `30_ontologia` y `20_epistemologia` declaran ya `10_nucleo/axiomas.md` como única dependencia externa, verificado por `R-10 · Observación preliminar` y confirmado en HEAD.

No se crea `30_ontologia/organizacion.md`. No se crea ningún documento en `20_epistemologia`. No se modifica `30_ontologia/catalogo_entidades.md`.

## Consecuencias sobre el estado del repositorio

1. `Organización` deja de ser concepto fantasma sin dejar de ser raíz del grafo verificado por `R-10 · Tarea 10`.
2. `H-02` avanza en uno de sus seis términos. Los cinco restantes —`conocimiento admitido`, `entidades del dominio`, `instante lógico`, `plausibilidad`, `dominio`— conservan íntegro su estatus de fantasma y no se resuelven aquí.
3. La entrada `ENT-001` de `30_ontologia/catalogo_entidades.md` queda **en conflicto verificado** con esta decisión. El conflicto se registra (E-7 · C-4) y **no se resuelve**: la modificación del catálogo no pertenece a G-1 ni a esta decisión.
4. La referencia colgante `organizacion.md` de `ENT-001` permanece. Su corrección es materia de **G-8 · Integridad referencial**, prioridad 8, dependiente de G-7.
5. `Identidad` conserva íntegro su significado congelado como correlato interno del referente. No se modifica.

## Cuestiones que esta decisión no resuelve

- La **cardinalidad** entre `Organización`, `Identidad` y `Modelo`. `AD-01 · § RA-4` declara la cardinalidad `Modelo ↔ Identidad` *indeterminable con la evidencia disponible*; AD-03 no la determina.
- La **redacción** de la declaración, y la denominación de la sección que la aloja.
- El **estatus** de `Modelo Organizacional`, `Modelo Vivo`, `Gemelo Organizacional`, `Memoria Organizacional`, `Identidad Organizacional` y `Estado Sistémico`. Todos ellos son términos distintos de `Organización`.
- Las **contradicciones C-1, C-2, C-3, C-5, C-6, C-8 y C-9**, registradas y expresamente no resueltas.
- La **relación entre `Organización` y `Dominio`**, término excluido del alcance por el encargo.

---

# Declaración

**`Organización` es el referente externo: aquello sobre lo que ATÓMICA construye conocimiento, existente con independencia del Modelo, nunca modificado por él y nunca operado directamente.**

No es entidad de la Ontología. No es artefacto de la Epistemología. No es metaobjeto de la arquitectura. Es el término primitivo que nombra el objeto observado, y su lugar de declaración es `10_nucleo/axiomas.md`, conforme al mecanismo C.i congelado por `AD-02`.

Esta decisión no modifica `AD-01`, no modifica `AD-02`, no modifica `RA-01` y no modifica `plan_remediacion_v1.2.md`.

No autoriza modificación alguna del repositorio. La ejecución material corresponde a **G-1 · Cierre del vocabulario primitivo**.

Se deja constancia de que `30_ontologia/catalogo_entidades.md · ENT-001` inscribe `Organización` como entidad de la Ontología, en conflicto verificado con esta decisión y con el axioma `A1`. El conflicto queda **registrado y abierto**.

Esta decisión queda **CONGELADA**. Toda modificación requerirá una nueva decisión arquitectónica que la sustituya íntegramente.

---

```
HEAD auditado:        db26bcc4223270973fdf41a9dced9fc85be8054d
Autoridades:          RA-01 · plan_remediacion_v1.2 · AD-01 · AD-02 · repositorio en HEAD
Documentos canónicos modificados: ninguno
Contradicciones registradas: 9 (C-1 … C-9)
```
