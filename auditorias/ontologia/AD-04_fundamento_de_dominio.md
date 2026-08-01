# AD-04 · FUNDAMENTO DE DOMINIO

Estado: CONGELADA

Repositorio: atomica-core

Ámbito: Núcleo · Ontología

HEAD auditado:

```
d1ecf4cedde5905280c7b5ee11b0badf76b214a5
```

Contenido canónico coincidente con `origin/main` = `8eb1c6a`. HEAD añade únicamente `AD-01`, `AD-02` y `AD-03`, los tres en `auditorias/ontologia/`.

Autoridades: `RA-01_consolidacion_hallazgos.md` · `plan_remediacion_v1.2.md` · `AD-01_fundamento_del_modelo.md` · `AD-02_implementacion_documental_del_modelo.md` · `AD-03_fundamento_de_organizacion.md` · inspección directa del repositorio en HEAD.

Ubicación:

```
auditorias/ontologia/AD-04_fundamento_de_dominio.md
```

---

# Antecedentes

`AD-01` congeló **C · `Modelo` es un metaobjeto raíz**: *«el objeto raíz del sistema […] aquello de lo que las entidades ontológicas son contenido y de lo que las Relaciones son estructura»*.

`AD-02` congeló la variante **C.i**: los términos primitivos se declaran en secciones admitidas de `10_nucleo/axiomas.md`, sin documentos nuevos y sin modificar ninguna sección `# Dependencias`.

`AD-03` congeló **O-B · `Organización` es el referente externo**, situado fuera del Modelo conforme al axioma `A1`.

`RA-01 · RA-01.1 · H-02` enumera los seis conceptos fantasma distintos de `Modelo`. El último de ellos es **`dominio`**, con la extensión verificada por `R-10 · Tarea 9`: *«`relacion.md` `# Naturaleza`»*.

`plan_remediacion_v1.2.md · G-1`, prioridad 1, `Dependencias: ninguna`, objetivo: *«Dotar de fundamento documental a los siete conceptos fantasma y cerrar semánticamente el grafo.»*

`AD-01 · § C.2`, fila G-1: *«H-02 aplica el mismo mecanismo a los seis fantasmas restantes.»*

Tanto `AD-01 · § Consecuencias` como `AD-02 · § Consecuencias` y `AD-03 · § Consecuencias` declaran expresamente no resuelto el estatus individual de los primitivos restantes.

Este documento resuelve el estatus de **uno solo**: `Dominio`. No resuelve `Modelo`, `Organización`, `entidades del dominio`, `Estado`, `Representación`, `Producto` ni `Metodología`.

---

# Alternativas

Cinco alternativas resultan construibles sobre la evidencia localizada. No se considera ninguna otra.

## D-1 · Entidad ontológica

**Definición.** `Dominio` es una entidad del dominio, inscrita en la Ontología con documento propio y las ocho secciones admitidas.

**Evidencia que la sostendría.** Ninguna directa. Se construye por analogía con las seis entidades congeladas de `30_ontologia`.

**Contradicciones.** Dos, verificadas:
- `00_canon/primeros_principios.md` `## PP-009 · La ontología gobierna el dominio`. La Ontología **gobierna** el dominio. Un objeto gobernado por la Ontología no es simultáneamente uno de los miembros que ella declara.
- Ninguna de las 36 apariciones predica de `dominio` definición, constitución, formación, estado, identidad ni restricción propia. `Dominio` nunca es sujeto de un enunciado ontológico.

**Documentos afectados.** Un documento nuevo en `30_ontologia`; declaración en `# Dependencias` de los 8 documentos que emplean el término en sección admitida.

**Impacto sobre RA-01.** `dominio` dejaría de ser vocabulario primitivo: escisión de `H-02` y recálculo de RA-01.7, RA-01.8 y RA-01.9.

**Impacto sobre `plan_remediacion_v1.2`.** Las modificaciones de `# Dependencias` son materia de **G-6** (prioridad 7, dependencias G-3 y G-4), y ejecutarlas en G-1 reproduce el ciclo `G-1 → G-4 → G-6 → G-1` que `AD-02 · E-4` verificó.

## D-2 · Ámbito del referente externo

**Definición.** `Dominio` es el ámbito de la realidad organizacional observada: coextensivo o subordinado a `Organización`, situado fuera del Modelo.

**Evidencia que la sostendría.** `10_nucleo/principios.md:39` `P-003`: *«El dominio determina la arquitectura»*, que sitúa al dominio como anterior a la arquitectura.

**Contradicciones.** Dos, verificadas:
- `30_ontologia/relacion.md:36-38` `# Naturaleza` declara de la misma entidad, en dos viñetas consecutivas: *«— pertenece al Modelo; — pertenece al dominio;»*. `AD-03` estableció, sobre `A1` y `A2`, que el referente externo es independiente del Modelo y nunca operado directamente. Una entidad no puede pertenecer al Modelo y a un ámbito que el Modelo nunca toca.
- `20_epistemologia/observacion.md:37-41` `# Naturaleza` distingue ambos en líneas consecutivas: *«No pertenece a la organización observada. No constituye una propiedad del dominio.»* Si `dominio` y `organización observada` designasen lo mismo, la segunda negación sería redundante. El documento las enuncia como dos exclusiones distintas.

**Documentos afectados.** `10_nucleo/axiomas.md`.

**Impacto sobre RA-01.** Ninguno.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno.

## D-3 · Sinónimo del Modelo

**Definición.** `Dominio` es coextensivo con `Modelo`: designa lo mismo con otra palabra y no constituye concepto autónomo.

**Evidencia que la sostendría.** `30_ontologia/relacion.md` `# Naturaleza` atribuye a la `Relación` ambas pertenencias sin distinguirlas.

**Contradicciones.** Una, verificada y decisiva:
- `20_epistemologia/observacion.md:37-41` `# Naturaleza` declara, en tres líneas consecutivas: *«La observación pertenece al conocimiento construido por ATÓMICA. No pertenece a la organización observada. No constituye una propiedad del dominio.»* `AD-01` y `30_ontologia/representacion.md` `# Constitución` —*«las Observaciones admitidas por el Modelo»*— establecen que la Observación es contenido del Modelo. Luego existe al menos un elemento que pertenece al Modelo y **no** al dominio. Los dos términos no son coextensivos.

**Documentos afectados.** Ninguno: la alternativa niega la necesidad de declaración.

**Impacto sobre RA-01.** `H-02` perdería uno de sus seis términos sin resolverlo, alterando su alcance.

**Impacto sobre `plan_remediacion_v1.2`.** El objetivo literal de G-1 —*«Dotar de fundamento documental a los siete conceptos fantasma»*— quedaría incumplido para uno de los siete.

## D-4 · Ámbito conceptual interno al Modelo

**Definición.** `Dominio` es el ámbito conceptual, contenido en el Modelo y estrictamente menor que él, de aquello que el Modelo representa acerca del referente. Está poblado por las entidades que la Ontología declara y gobierna, y excluye el aparato epistemológico, metodológico, de producto y de gobierno. Su función normativa dominante es la de **criterio de frontera**.

**Evidencia que la sostiene.** Toda la de § Evidencia · E-2, E-3, E-4 y E-5. En síntesis:
- Pertenencia positiva: `relacion.md` `# Naturaleza` (*«pertenece al Modelo; pertenece al dominio»*), `metodologia.md` `# Capacidades` (*«pertenece al dominio»*), `cockpit.md` `# Contenido` (*«objetos del dominio»*).
- Inclusión estricta en el Modelo: `observacion.md` `# Naturaleza` (§ E-4).
- Distinción respecto del referente externo: `observacion.md` `# Naturaleza`, dos exclusiones separadas.
- Gobierno por la Ontología: `PP-009`.
- Uso como frontera: **nueve** negaciones en secciones admitidas (§ E-3).

**Contradicciones.** Ninguna con la evidencia en secciones admitidas. Las incidencias registradas en § E-6 afectan a la coherencia del corpus, no a esta lectura.

**Documentos afectados.** `10_nucleo/axiomas.md`, exclusivamente.

**Impacto sobre RA-01.** Ninguno. `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`.

**Impacto sobre `plan_remediacion_v1.2`.** Ninguno. Ninguna sección `# Dependencias` se modifica.

## D-5 · Capa documental

**Definición.** `Dominio` es una capa del repositorio —`02_domain/`— y no un concepto: designa la ubicación de los documentos que definen entidades.

**Evidencia que la sostendría.** `50_producto/modelo_vivo.md:826` remite a `` `02_domain/evidencia.md` ``. `70_patrones/naturaleza_patrones.md:12` `# Breadcrumb` declara `ATÓMICA → Dominio → Patrones Organizacionales`.

**Contradicciones.** Tres, verificadas:
- **`02_domain/` no existe** en el repositorio. La ruta de `modelo_vivo.md:826` es referencia colgante, única aparición de esa cadena en las ocho capas.
- El breadcrumb de `naturaleza_patrones.md` sitúa `Dominio` como nivel intermedio entre `ATÓMICA` y `Patrones Organizacionales`, estructura incompatible con las ocho capas vigentes `00_canon` … `70_patrones`.
- Doce apariciones en secciones admitidas emplean `dominio` como ámbito conceptual de pertenencia o exclusión, no como ruta.

**Documentos afectados.** Ninguno: la alternativa niega que `dominio` sea concepto.

**Impacto sobre RA-01.** `H-02` perdería un término sin resolverlo.

**Impacto sobre `plan_remediacion_v1.2`.** G-1 quedaría incumplido para uno de los siete conceptos.

---

# Evidencia

Inspección directa del repositorio en HEAD `d1ecf4c`, sin filtro de extensión, sobre las ocho capas canónicas.

## E-1 · Inventario

**Hecho verificado.** El lexema `dominio` aparece **36 veces en 26 documentos**. `Dominio` capitalizado aparece **2 veces**, ambas en `70_patrones/naturaleza_patrones.md` (`# Breadcrumb` y encabezado `# Relación con el resto del dominio`).

| Capa | Documentos | Apariciones |
|---|---|---|
| `00_canon` | 5 | 5 |
| `10_nucleo` | 1 | 1 |
| `20_epistemologia` | 1 | 1 |
| `30_ontologia` | 1 | 4 |
| `40_metodologia` | 3 | 3 |
| `50_producto` | 9 | 13 |
| `60_interfaces` | 0 | 0 |
| `70_patrones` | 6 | 9 |

**Hecho verificado.** No existe en el repositorio ningún enunciado de la forma *«Un Dominio es…»* ni *«El dominio es…»*. Cero enunciados definitorios.

**Hecho verificado.** `dominio` no figura en `30_ontologia/catalogo_entidades.md`, cuyo `# Principios` declara: *«Toda entidad existe únicamente cuando figura inscrita en este catálogo.»*

## E-2 · Apariciones en secciones admitidas

Secciones admitidas: Definición · Naturaleza · Constitución · Formación · Restricciones · Dependencias · Utilizado por · Declaración. Inventario completo: **12 apariciones en 8 documentos.**

| # | Documento | Línea | Sección | Contexto literal | Función semántica |
|---|---|---|---|---|---|
| 1 | `30_ontologia/relacion.md` | 25 | `# Definición` | *«conexión estructural entre dos o más **entidades del dominio**»* | Calificador de entidades |
| 2 | `30_ontologia/relacion.md` | 38 | `# Naturaleza` | *«— pertenece al Modelo; — **pertenece al dominio**;»* | **Pertenencia positiva** |
| 3 | `30_ontologia/relacion.md` | 70 | `# Restricciones · RL-001` | *«Toda Relación conecta dos o más **entidades del dominio**»* | Calificador de entidades |
| 4 | `20_epistemologia/observacion.md` | 41 | `# Naturaleza` | *«No constituye una **propiedad del dominio**.»* | **Exclusión** |
| 5 | `00_canon/naturaleza_decision.md` | 25 | `# Definición` | *«No representa **conocimiento del dominio**.»* | **Exclusión** |
| 6 | `40_metodologia/dimensiones.md` | 25 | `# Naturaleza` | *«No representan **entidades del dominio**.»* | **Exclusión** |
| 7 | `40_metodologia/ifo.md` | 192 | `# Restricciones · IFO-001` | *«El IFO nunca constituye una **entidad del dominio**.»* | **Exclusión** |
| 8 | `50_producto/grafo_conocimiento.md` | 25 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |
| 9 | `50_producto/explicabilidad.md` | 25 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |
| 10 | `50_producto/laboratorio_conocimiento.md` | 27 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |
| 11 | `50_producto/deteccion_patrones.md` | 27 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |
| 12 | `50_producto/linea_temporal` | 25 | `# Naturaleza` | *«No constituye una **entidad del dominio**.»* | **Exclusión** |

**Hecho verificado.** De las doce apariciones en secciones admitidas: **una** es pertenencia positiva, **dos** son calificador de entidades, **nueve** son exclusiones expresas.

**Hecho verificado.** La única pertenencia positiva en sección admitida —`relacion.md:38`— declara **doble pertenencia**: al Modelo y al dominio, en viñetas consecutivas de la misma lista.

## E-3 · Apariciones en secciones no admitidas y texto no normativo

| Documento | Línea | Sección | Contexto | Clasificación |
|---|---|---|---|---|
| `00_canon/primeros_principios.md` | 141 | `## PP-009` | `## PP-009 · **La ontología gobierna el dominio**` — *«Toda entidad utilizada por ATÓMICA deberá existir previamente en la Ontología. Ningún concepto podrá utilizarse antes de haber sido definido.»* | **Norma numerada**, sección no admitida |
| `10_nucleo/principios.md` | 39 | `# P-003` | *«**El dominio determina la arquitectura.** La arquitectura determina el producto. El producto determina la interfaz.»* | **Principio numerado**, sección no admitida |
| `00_canon/sistema_normativo.md` | 19 | `# Propósito` | *«No define **conceptos del dominio**.»* | Exclusión, no admitida |
| `00_canon/gobierno_del_canon.md` | 17 | `# Propósito` | *«No define **conceptos del dominio**.»* | Exclusión, no admitida |
| `00_canon/politica_directorios.md` | 75 | `# Directorios de gobierno` | *«No introducen **conceptos del dominio**.»* | Exclusión, no admitida |
| `30_ontologia/relacion.md` | 15 | `# Propósito` | *«conexión estructural existente entre dos o más **entidades del dominio**»* | Calificador, no admitida |
| `40_metodologia/metodologia.md` | 184 | `# Capacidades` | *«Cada capacidad: — **pertenece al dominio**; — participa en el Modelo Vivo;»* | **Pertenencia positiva**, no admitida |
| `50_producto/cockpit.md` | 76 | `# Contenido` | *«puede representar exclusivamente **objetos del dominio** o resultados metodológicos derivados de ellos»* | **Pertenencia positiva**, no admitida |
| `50_producto/modelo_vivo.md` | 824 | `## Relación con Evidencias` | *«La definición de Evidencia, sus propiedades y su ciclo de vida **pertenecen al dominio** y se encuentran definidas en: `02_domain/evidencia.md`»* | Ámbito de autoría documental |
| `50_producto/grafo_conocimiento.md` | 13 · 49 | `# Propósito` · `# Componentes` | *«relaciones existentes entre las **entidades del dominio**»* · *«No incorpora **entidades ajenas al dominio**»* | Calificador y frontera |
| `50_producto/lenguaje_producto` | 11 | `# Propósito` | *«las **entidades del dominio** se representan dentro de ATÓMICA»* | Calificador |
| `50_producto/modelo_objetos` | 15 · 23 · 45 | `# Propósito` · `# Principio Fundamental` · `# Representación` | *«manifestación de una **entidad del dominio**»* · *«Si una representación no puede asociarse a una **entidad del dominio**, no pertenece a ATÓMICA»* | Calificador y frontera |
| `70_patrones/naturaleza_patrones.md` | 12 · 131 | `# Breadcrumb` · encabezado | `ATÓMICA → **Dominio** → Patrones Organizacionales` · `# Relación con el resto del **dominio**` | Nivel estructural |
| `70_patrones/criterio_incorporacion_patrones.md` | 126 | `# Restricciones` | *«deberán ser compatibles con la **ontología del dominio**»* | Compuesto |
| `70_patrones/confianza_patrones.md` | 133 | `# Relación con otros documentos` | *«pertenece al **dominio metodológico** de ATÓMICA»* | Compuesto distinto |
| `70_patrones/P-007` · `P-008` · `P-026` | varias | `## Definición` · `## Método de detección` · `## Datos necesarios` | *«Dominios estratégicos»*, *«cada dominio (estrategia, estructura, herramientas, prioridades)»*, *«costos por dominio»* | **Uso coloquial, no normativo** |

**Hecho verificado.** Cinco apariciones de `70_patrones` emplean `dominio` en sentido común —área de actividad— sin relación con el concepto arquitectónico.

## E-4 · El dominio está contenido en el Modelo y es estrictamente menor que él

`20_epistemologia/observacion.md` `# Naturaleza`, líneas 37-45, texto literal íntegro:

> La observación pertenece al conocimiento construido por ATÓMICA.
>
> No pertenece a la organización observada.
>
> No constituye una propiedad del dominio.
>
> No modifica la realidad observada.

`30_ontologia/representacion.md` `# Constitución`: *«Toda Representación está compuesta por: las Observaciones **admitidas por el Modelo**; …»*. `AD-01 · § E-C.6` lo verifica.

**Hecho verificado.** La `Observación` pertenece al conocimiento construido por ATÓMICA y es admitida por el Modelo; y **no** constituye propiedad del dominio.

**Consecuencia verificada.** Existe al menos un elemento del Modelo que no pertenece al dominio. El dominio es **estrictamente menor** que el Modelo. Queda refutada D-3.

`30_ontologia/relacion.md` `# Naturaleza`, líneas 36-42, texto literal íntegro:

> La Relación:
>
> - pertenece al Modelo;
> - pertenece al dominio;
> - es independiente de cualquier tecnología;
> - puede ser dirigida cuando la naturaleza de la conexión lo requiere;
> - nunca interpreta el significado de la conexión.

**Consecuencia verificada.** Existe al menos un elemento que pertenece simultáneamente al Modelo y al dominio. El dominio **no** está fuera del Modelo. Queda refutada D-2.

## E-5 · El dominio es lo que la Ontología gobierna

`00_canon/primeros_principios.md`, `## PP-009 · La ontología gobierna el dominio`:

> Toda entidad utilizada por ATÓMICA deberá existir previamente en la Ontología.
>
> Ningún concepto podrá utilizarse antes de haber sido definido.

**Hecho verificado.** El título del principio establece la relación: la Ontología **gobierna** el dominio. Su cuerpo la instrumenta: toda entidad debe existir previamente en la Ontología.

**Hecho verificado.** Las nueve exclusiones de E-2 son coherentes con esa lectura y describen exactamente lo excluido: epistemología (`observacion.md`), gobierno (`naturaleza_decision.md`), método (`dimensiones.md`, `ifo.md`) y producto (`grafo_conocimiento.md`, `explicabilidad.md`, `laboratorio_conocimiento.md`, `deteccion_patrones.md`, `linea_temporal`). Ninguna capa que se excluye del dominio es la Ontología.

**Hecho verificado.** Las dos pertenencias positivas fuera de secciones admitidas —`Capacidad` en `metodologia.md`, y `objetos del dominio` en `cockpit.md`— y la única en sección admitida —`Relación` en `relacion.md`— designan conceptos que el Modelo representa, no aparatos con los que los construye.

**Ausencia de autoridad.** Ningún documento define «gobernar» ni declara si el gobierno de la Ontología sobre el dominio es de pertenencia, de autoría o de precedencia.

## E-6 · Contradicciones registradas

Se registran conforme al encargo. **Ninguna se resuelve aquí.**

**CD-1 · Ningún documento declara la relación entre `Modelo` y `dominio`.**
`relacion.md` `# Naturaleza` atribuye ambas pertenencias en viñetas consecutivas sin declarar si son coextensivas, jerárquicas o disjuntas. La inclusión estricta se deduce por confrontación con `observacion.md` `# Naturaleza` (E-4), no por declaración de ningún documento. **Ausencia de autoridad.**

**CD-2 · Tres formulaciones relacionales distintas, ninguna definida.**
`pertenece al dominio` (`relacion.md`, `metodologia.md`) · `entidad del dominio` (siete documentos) · `propiedad del dominio` (`observacion.md`) · `conocimiento del dominio` (`naturaleza_decision.md`) · `objetos del dominio` (`cockpit.md`) · `conceptos del dominio` (`sistema_normativo.md`, `gobierno_del_canon.md`, `politica_directorios.md`). Seis formulaciones. `R-10 · Tarea 2` ya verificó que ninguno de los verbos relacionales posee documento responsable.

**CD-3 · `entidades del dominio` es a su vez concepto fantasma.**
Nueve de las doce apariciones en secciones admitidas se enuncian mediante `entidad del dominio`, término que `RA-01 · H-02` clasifica fantasma. El criterio de frontera del repositorio está formulado en términos no definidos. **Excluido del alcance de AD-04 por el encargo.**

**CD-4 · `naturaleza_patrones.md` contradice a `observacion.md`.**
`# Breadcrumb` declara `ATÓMICA → Dominio → Patrones Organizacionales`, y `# Relación con el resto del dominio` enumera dentro de él *«observaciones, hipótesis, capacidades, fragilidades, intervenciones»*. `observacion.md` `# Naturaleza`, sección admitida, declara: *«No constituye una propiedad del dominio.»* Ambos documentos son canónicos.

**CD-5 · Referencia colgante a una capa inexistente.**
`50_producto/modelo_vivo.md:826` remite a `` `02_domain/evidencia.md` ``. El directorio `02_domain/` no existe. Es la única aparición de esa cadena en el repositorio. Materia de **G-8 · Integridad referencial**.

**CD-6 · `Evidencia` declarada del dominio, `Observación` declarada fuera de él.**
`modelo_vivo.md:824` afirma que la definición de `Evidencia` *«pertenece al dominio»*; `observacion.md:41` niega que la `Observación` sea propiedad del dominio. Ambos conceptos residen en `20_epistemologia/`.

**CD-7 · `Capacidad` pertenece al dominio y carece de documento.**
`metodologia.md` `# Capacidades` declara *«pertenece al dominio»*. `AD-03 · E-7 · C-4` verificó que `capacidad.md` (ENT-003 del catálogo) **no existe en ninguna ruta del repositorio**. Un miembro declarado del dominio sin fundamento documental.

**CD-8 · Ficheros canónicos sin extensión.**
`50_producto/linea_temporal`, `50_producto/lenguaje_producto` y `50_producto/modelo_objetos` carecen de extensión `.md` y contienen secciones admitidas con apariciones normativas de `dominio`. Toda auditoría que filtre por `*.md` los omitiría.

**CD-9 · Contradicciones de AD-03 aún abiertas.**
`AD-03 · E-7` registró nueve contradicciones (C-1 … C-9), entre ellas la existencia de `30_ontologia/modelo.md` —descartada expresamente por `AD-01` y `AD-02`— y las referencias colgantes de `catalogo_entidades.md`. Verificado en HEAD: **las nueve permanecen sin resolver.**

---

# Decisión

# D-4 · `Dominio` es el ámbito conceptual interno al Modelo

**`Dominio` es el ámbito conceptual contenido en el Modelo y estrictamente menor que él: el ámbito de aquello que el Modelo representa acerca del referente, poblado por las entidades que la Ontología declara y gobierna, y del que quedan excluidos el aparato epistemológico, el metodológico, el de producto y el de gobierno. No es entidad, no es referente externo, no es sinónimo del Modelo y no es capa documental.**

**Justificación, exclusivamente por evidencia documental:**

**No es D-1.** `PP-009` se titula *«La ontología gobierna el dominio»*: el dominio es aquello sobre lo que la Ontología ejerce gobierno, no uno de los miembros que ella inscribe. Y ninguna de las 36 apariciones predica de `dominio` definición, constitución, formación ni restricción propia: nunca es sujeto de un enunciado ontológico. `dominio` tampoco figura en `catalogo_entidades.md`, que declara ser *«la única fuente de verdad sobre la existencia de entidades ontológicas»*.

**No es D-2.** `relacion.md` `# Naturaleza` declara de la misma entidad, en viñetas consecutivas, *«pertenece al Modelo»* y *«pertenece al dominio»*. `AD-03` estableció sobre `A1` y `A2` que el referente externo es independiente del Modelo y nunca operado directamente por ATÓMICA. Y `observacion.md` `# Naturaleza` enuncia *«No pertenece a la organización observada»* y *«No constituye una propiedad del dominio»* como **dos exclusiones distintas** en líneas consecutivas: si designasen lo mismo, la segunda sería redundante.

**No es D-3.** `observacion.md` `# Naturaleza` declara que la Observación *«pertenece al conocimiento construido por ATÓMICA»* y que *«No constituye una propiedad del dominio»*; `representacion.md` `# Constitución` la declara *«admitida por el Modelo»*. Existe por tanto un elemento del Modelo que no pertenece al dominio: los términos no son coextensivos y la inclusión es estricta.

**No es D-5.** `02_domain/` no existe en el repositorio; su única mención es una referencia colgante. El breadcrumb de `naturaleza_patrones.md` describe una estructura incompatible con las ocho capas vigentes. Y doce apariciones en secciones admitidas emplean `dominio` como ámbito de pertenencia o exclusión, nunca como ruta.

**Es D-4, por tres hechos verificados:**

1. **Contención estricta, acreditada por dos documentos congelados.** `relacion.md` `# Naturaleza` sitúa un mismo elemento dentro del Modelo y dentro del dominio; `observacion.md` `# Naturaleza` sitúa otro dentro del Modelo y fuera del dominio. La conjunción determina la relación: dominio ⊊ Modelo. Ninguno de los dos enunciados es interpretativo; ambos son literales y residen en secciones admitidas.

2. **Función normativa dominante verificada.** De las doce apariciones en secciones admitidas, **nueve son exclusiones expresas**, distribuidas en cuatro capas: epistemología, gobierno, metodología y producto. El uso real del término en el Canon es el de criterio de frontera, y lo que delimita coincide exactamente con lo que la Ontología no gobierna.

3. **Gobierno declarado por norma numerada.** `PP-009` establece la relación entre Ontología y dominio y la instrumenta mediante la exigencia de existencia previa. Es el único enunciado del repositorio que vincula el dominio con una capa determinada, y esa capa es la Ontología, cuyas entidades `AD-01` estableció como contenido del Modelo.

## Comprobaciones obligatorias

| Pregunta | Respuesta | Justificación por evidencia |
|---|---|---|
| **¿Contradice AD-01?** | **No** | `AD-01` determinó `Modelo` como metaobjeto raíz que contiene entidades, relaciones, estructura y conocimiento admitido. D-4 sitúa el dominio **dentro** de ese contenido, como ámbito propio de las entidades y las relaciones. `relacion.md` `# Declaración` —*«Las Relaciones constituyen la estructura del Modelo»*, citada por `AD-01 · E-C.9`— es coherente con que la misma `Relación` pertenezca al dominio |
| **¿Contradice AD-02?** | **No** | D-4 emplea el mecanismo congelado: variante **C.i**, declaración en sección admitida de `10_nucleo/axiomas.md`, 0 documentos nuevos, 0 modificaciones de `# Dependencias` |
| **¿Contradice AD-03?** | **No** | `AD-03` situó `Organización` **fuera** del Modelo sobre `A1`; D-4 sitúa `dominio` **dentro** de él. Las dos decisiones son complementarias y explican conjuntamente `observacion.md` `# Naturaleza`, que excluye la Observación de ambos por razones distintas |
| **¿Dominio depende de Modelo?** | **Sí** | E-4: dominio ⊊ Modelo. El dominio se delimita dentro del Modelo y no puede enunciarse sin él. `relacion.md` `# Naturaleza` enuncia la pertenencia al Modelo **antes** que la pertenencia al dominio |
| **¿Modelo depende de Dominio?** | **No** | `AD-01` verificó que `Modelo` es raíz del grafo, sin aristas salientes, y D-4 no le añade ninguna. **Ausencia de autoridad registrada:** `10_nucleo/principios.md` `P-003` declara *«El dominio determina la arquitectura»*; el enunciado reside en sección no admitida, se refiere a la arquitectura del repositorio y **ningún documento declara si rige también sobre el Modelo**. No se resuelve aquí |
| **¿Obliga a recalcular RA-01?** | **No** | `H-02` conserva categoría **Causa raíz**, grupo **G-1** y aristas causales `H-02 → H-11` y `H-02 → H-22`. RA-01.7, RA-01.8 y RA-01.9 permanecen exactos; RA-01.9 ya incluye `axiomas.md` entre los documentos afectados por G-1 |
| **¿Obliga a modificar prioridades?** | **No** | G-1 conserva prioridad 1 y `Dependencias: ninguna`. Camino crítico `G-1 → G-4 → G-6` inalterado |
| **¿Genera nuevas causas raíz?** | **No** | Ninguna capa pasa a emplear un concepto de capa superior. No se añade dependencia intercapa alguna |
| **¿Genera conceptos fantasma?** | **No** | No introduce ningún término nuevo. **No resuelve** `entidades del dominio`, excluido del alcance por el encargo y registrado en CD-3, ni los tres fantasmas restantes de `H-02` |
| **¿Obliga a crear nuevos documentos?** | **No** | Y expresamente **no** obliga a crear documento alguno en `30_ontologia` ni el directorio `02_domain/` referido por `modelo_vivo.md:826` |

---

# Consecuencias

## Dónde deberá declararse `Dominio`

**En `10_nucleo/axiomas.md`**, mediante sección admitida, conforme a la variante **C.i** congelada por `AD-02`.

Fundamento: `AD-01 · § C.2`, fila G-1, establece que *«H-02 aplica el mismo mecanismo a los seis fantasmas restantes»*; `AD-02` fijó ese mecanismo como C.i; `AD-03` lo aplicó al primero de los seis. `dominio` es otro de ellos y recibe idéntico tratamiento.

## Qué documentos deberán modificarse durante G-1

**Uno: `10_nucleo/axiomas.md`.**

Ninguna sección `# Dependencias` se modifica. Los diez documentos de `30_ontologia` y `20_epistemologia` declaran ya `10_nucleo/axiomas.md` como única dependencia externa, verificado por `R-10 · Observación preliminar` y confirmado en HEAD.

No se crea documento alguno en `30_ontologia`. No se crea `02_domain/`. No se modifica `30_ontologia/relacion.md`, `20_epistemologia/observacion.md` ni `00_canon/primeros_principios.md`.

## Consecuencias sobre el estado del repositorio

1. `dominio` deja de ser concepto fantasma sin dejar de ser raíz del grafo verificado por `R-10 · Tarea 10`.
2. `H-02` avanza en su segundo término. Los cuatro restantes —`conocimiento admitido`, `entidades del dominio`, `instante lógico`, `plausibilidad`— conservan íntegro su estatus de fantasma.
3. Las nueve exclusiones de E-2 adquieren referente determinado. Su formulación mediante `entidad del dominio` **permanece indeterminada** (CD-3), por estar ese término excluido del alcance.
4. `PP-009` conserva su enunciado sin modificación. La relación de gobierno que declara queda situada dentro del Modelo, no entre el Modelo y algo externo.
5. `50_producto/modelo_vivo.md:826` conserva su referencia colgante a `02_domain/evidencia.md`. Su corrección es materia de **G-8 · Integridad referencial**, prioridad 8, dependiente de G-7.

## Cuestiones que esta decisión no resuelve

- El **significado de `entidades del dominio`**, `propiedad del dominio`, `conocimiento del dominio`, `objetos del dominio` y `conceptos del dominio`: seis formulaciones relacionales sin documento responsable (CD-2, CD-3).
- La **cardinalidad** y la articulación precisa entre `Modelo`, `dominio` y `Organización`.
- El **alcance de `P-003`** sobre el Modelo (Ausencia de autoridad registrada).
- Las **contradicciones CD-1, CD-2, CD-3, CD-4, CD-5, CD-6, CD-7, CD-8 y CD-9**, registradas y expresamente no resueltas.
- Las **nueve contradicciones de `AD-03`**, verificadas como aún abiertas en HEAD.

---

# Declaración

**`Dominio` es el ámbito conceptual interno al Modelo: el ámbito, estrictamente menor que el Modelo, de aquello que éste representa acerca del referente, poblado por las entidades que la Ontología gobierna y empleado normativamente como criterio de frontera.**

No es entidad de la Ontología. No es el referente externo. No es sinónimo del Modelo. No es capa documental. Es el término primitivo que nombra ese ámbito, y su lugar de declaración es `10_nucleo/axiomas.md`, conforme al mecanismo C.i congelado por `AD-02`.

Esta decisión no modifica `AD-01`, no modifica `AD-02`, no modifica `AD-03`, no modifica `RA-01` y no modifica `plan_remediacion_v1.2.md`.

No autoriza modificación alguna del repositorio. La ejecución material corresponde a **G-1 · Cierre del vocabulario primitivo**.

Se deja constancia de que ningún documento del repositorio declara la relación entre `Modelo` y `dominio`, y de que el criterio de frontera del Canon se formula mediante `entidad del dominio`, término que `RA-01 · H-02` clasifica fantasma y que el encargo excluye del alcance de esta decisión. Ambas incidencias quedan **registradas y abiertas**.

Esta decisión queda **CONGELADA**. Toda modificación requerirá una nueva decisión arquitectónica que la sustituya íntegramente.

---

```
HEAD auditado:        d1ecf4cedde5905280c7b5ee11b0badf76b214a5
Autoridades:          RA-01 · plan_remediacion_v1.2 · AD-01 · AD-02 · AD-03 · repositorio en HEAD
Apariciones auditadas: 36 en 26 documentos · 12 en secciones admitidas
Documentos canónicos modificados: ninguno
Contradicciones registradas: 9 (CD-1 … CD-9)
```
