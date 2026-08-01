# AD-01 · FUNDAMENTO DEL MODELO

Estado: CONGELADA

Repositorio: atomica-core

Ámbito: Ontología · Núcleo

Referencia auditada:
tag v1.0 (`fe6dc5c`)

Ubicación:

```
auditorias/ontologia/AD-01_fundamento_del_modelo.md
```

---

> Este documento constituye una decisión arquitectónica.
>
> No modifica la ontología.
>
> No ejecuta ninguna remediación.
>
> No sustituye ninguna auditoría.
>
> Únicamente fija el estatus arquitectónico de un término.

**Nota sobre el vocabulario de estado.** R-06 · H-07 verifica que coexisten cuatro vocabularios de estado —`CANÓNICO`, `Canónico`, `Frozen`, `Congelado`— en 78 documentos, sin enumeración ni regla de precedencia. Se emplea `CONGELADA` por ser el vocabulario que R-06 · E-7 verifica en los cinco documentos de decisión existentes (`D-001` a `D-005`, todos `CONGELADA v1.0`). La elección invoca el único precedente verificado para documentos de decisión; no resuelve H-07, que permanece asignado a G-3.

---

# Estado

**Decisión adoptada y congelada.**

Alternativa seleccionada: **C · `Modelo` es un metaobjeto raíz.**

Esta decisión es condición previa a la ejecución de **G-1 · Cierre del vocabulario primitivo**, primer grupo del plan oficial de remediación.

Esta decisión no autoriza modificación alguna del repositorio. La ejecución material corresponde íntegramente a G-1.

---

# Contexto

`auditorias/ontologia/plan_remediacion_v1.2.md` establece **G-1 · Cierre del vocabulario primitivo** como grupo de prioridad 1, sin dependencias, con el objetivo literal:

> Dotar de fundamento documental a los siete conceptos fantasma y cerrar semánticamente el grafo.

G-1 resuelve los hallazgos **H-01 · H-02 · H-11 · H-22**. De ellos, **H-01** es el de mayor extensión verificada:

> `Modelo` se emplea 46 veces en secciones admitidas de 9 de los 10 documentos ontológicos y epistemológicos sin poseer documento ni enunciado definitorio.
> — RA-01 · RA-01.1

RA-01 · RA-01.3 lo clasifica **Causa raíz**; RA-01 · RA-01.6 le asigna gravedad **Muy alta**.

G-1 no puede ejecutarse mientras no esté determinado **qué clase de cosa** es `Modelo` dentro de la arquitectura, porque de esa clase dependen: la capa en la que se declara, la dirección de las aristas que produce, los documentos cuyas secciones `# Dependencias` deben modificarse, y la validez de la topología que R-10 verificó.

Este documento resuelve exclusivamente esa cuestión.

---

# Problema

**¿Qué es «Modelo» dentro de la arquitectura de ATÓMICA?**

No se pregunta qué significa el término, ni cómo debe redactarse su fundamento documental, ni dónde debe residir el fichero. Se pregunta su **estatus arquitectónico**: si es una entidad del dominio, un artefacto del conocimiento, o el objeto raíz del que ambos son contenido.

---

# Evidencia considerada

Fuentes admitidas, y únicas empleadas:

- `auditorias/ontologia/R-06_mecanismo_definicion_oficial.md`
- `auditorias/ontologia/R-07_ciclo_estado_representacion.md`
- `auditorias/ontologia/R-08_anclaje_grafo_ontologico.md`
- `auditorias/ontologia/R-09_dependencia_canon_ontologia.md`
- `auditorias/ontologia/R-10_cierre_grafo_ontologico.md`
- `auditorias/ontologia/RA-01_consolidacion_hallazgos.md`
- `auditorias/ontologia/plan_remediacion_v1.2.md`

No se ha reabierto el repositorio. No se ha empleado bibliografía, marco externo ni conocimiento ajeno a estos siete documentos.

## E-A · Extensión y posición de `Modelo` en el grafo

| # | Hecho | Fuente |
|---|---|---|
| E-A.1 | `Modelo` se emplea **46 veces** en secciones admitidas, por los 6 documentos de `30_ontologia` y 3 de los 4 de `20_epistemologia`. **No existe documento propio.** | R-10 · Tarea 1.b |
| E-A.2 | `20_epistemologia/observacion.md` es el **único** de los diez que no emplea la palabra `Modelo`: 0 apariciones. | R-10 · Tarea 1.b |
| E-A.3 | `Modelo` es uno de los **siete conceptos fantasma**, y los siete fantasmas son **las únicas raíces del grafo**. | R-10 · Tarea 9 · Tarea 10 |
| E-A.4 | `Modelo` es **nodo crítico**: 46 usos, 9 de 10 documentos dependen de él, sin documento. | R-10 · Tarea 10 |
| E-A.5 | **Cero de diez** documentos alcanzan cierre semántico. *«La causa común en 9 de 10 es `Modelo`.»* | R-10 · Tarea 6 |
| E-A.6 | `Representación` es el **único nodo puente** entre `30_ontologia` y `20_epistemologia`; su eliminación desconectaría el grafo en tres componentes. | R-10 · Tarea 10 |

## E-B · Relación de `Modelo` con el documento fundacional

| # | Hecho | Fuente |
|---|---|---|
| E-B.1 | `10_nucleo/axiomas.md` **emplea** `Modelo` en `A1`, `A2`, `A8`, `A11` y `A14`. | R-10 · Tarea 6 |
| E-B.2 | `axiomas.md` `# Consecuencias` declara: *«De estos axiomas derivan: Identidad, Estado, Trayectoria, Representación, Hipótesis, Evidencia.»* **`Modelo` no figura.** | R-10 · Tarea 9 |
| E-B.3 | `axiomas.md` es la **única dependencia externa declarada** por los 6 documentos de `30_ontologia` y los 4 de `20_epistemologia`. | R-10 · Observación preliminar · R-09 · R-09.2 |
| E-B.4 | `axiomas.md` **no posee ninguna** de las ocho secciones admitidas. Sus encabezados son `Propósito`, `A1`…`A15`, `Consecuencias`, `Documentos dependientes`. | R-10 · Observación preliminar |

**Lectura conjunta, *Hecho verificado*.** `Modelo` es empleado **por** los axiomas (E-B.1) y **no es derivado de** ellos (E-B.2). Los seis conceptos que sí son derivados figuran en `# Consecuencias`; `Modelo` no. La asimetría está verificada, no inferida.

## E-C · Uso normativo literal de `Modelo` en los documentos congelados

Citas literales contenidas en R-07, que reproduce íntegros `30_ontologia/estado.md` y `30_ontologia/representacion.md`.

| # | Cita literal | Sección | Función gramatical de `Modelo` |
|---|---|---|---|
| E-C.1 | *«Un Estado es la representación íntegra del conocimiento que **el Modelo admite** sobre una única Identidad en un instante lógico.»* | `estado.md` `# Definición` | Sujeto que admite |
| E-C.2 | *«Todo Estado constituye **un objeto del Modelo**.»* | `estado.md` `# Definición` | Contenedor |
| E-C.3 | *«Un Estado nace cuando **el Modelo admite** una Representación distinta de la vigente.»* | `estado.md` `# Formación` | Sujeto que admite |
| E-C.4 | *«Su función consiste en organizar el conocimiento **admitido por el Modelo** sin alterar el referente observado.»* | `representacion.md` `# Definición` | Sujeto que admite |
| E-C.5 | *«La Representación: **pertenece al Modelo**; no pertenece a la organización observada…»* | `representacion.md` `# Naturaleza` | Contenedor |
| E-C.6 | *«Toda Representación está compuesta por: las Observaciones **admitidas por el Modelo**; … las restricciones **definidas por el Modelo**; …»* | `representacion.md` `# Constitución` | Sujeto que admite y define |
| E-C.7 | *«La sucesión de Representaciones constituye la **evolución del conocimiento admitido por el Modelo**.»* | `representacion.md` `# Persistencia` | Poseedor del conocimiento |
| E-C.8 | *«Toda **evolución del Modelo** implica la creación de una nueva Representación asociada a un nuevo Estado.»* | `representacion.md` `# Declaración` | Sujeto que evoluciona |
| E-C.9 | *«Las Relaciones constituyen **la estructura del Modelo**. Las entidades definen qué existe. Las Relaciones definen cómo esas entidades permanecen conectadas.»* | `relacion.md` `# Declaración` | Poseedor de la estructura |

**Hecho verificado.** En las nueve citas, `Modelo` ocupa una de tres funciones: **sujeto que admite o define**, **contenedor al que las entidades pertenecen**, o **poseedor del conocimiento y de la estructura**. En ninguna de las nueve `Modelo` figura como término definido, como objeto de una relación entre pares, ni como componente de otra entidad.

**Hecho verificado.** Ninguno de los diez conceptos definidos (R-10 · Tarea 1.a) es empleado en ninguna de esas tres funciones por ningún otro documento.

## E-D · Los dos anclajes disjuntos y su plano común

| # | Hecho | Fuente |
|---|---|---|
| E-D.1 | Existen **dos** nodos sin dependencia ontológica declarada: `identidad.md` y `relacion.md`. Ningún documento designa la raíz. | R-08 · R-08.1 |
| E-D.2 | `identidad.md` `# Declaración` la sitúa como *«referente permanente sobre el que ATÓMICA preserva la continuidad del conocimiento a través del tiempo»* — plano de **continuidad temporal**. | R-08 · R-08.1 |
| E-D.3 | `relacion.md` `# Declaración` la sitúa en un plano **expresamente distinto**: *«Las Relaciones constituyen la estructura del Modelo.»* | R-08 · R-08.1 |
| E-D.4 | *«Existen dos planos declarados y disjuntos —entidades y estructura— sin documento que declare su articulación. Toda auditoría que asuma un único plano producirá resultados incompletos.»* | R-08 · Sobre futuras auditorías, punto 3 |
| E-D.5 | Ninguno de los dos anclajes es raíz real: ambos emplean conceptos fantasma en secciones admitidas. `identidad.md` emplea `Modelo` y `referente organizacional`; `relacion.md` emplea `entidades del dominio` y `dominio`. | R-10 · Tarea 10 |

**Hecho verificado.** El único término que aparece en la `# Declaración` de uno de los dos anclajes disjuntos, nombrando aquello de lo que ese anclaje es estructura, es `Modelo` (E-D.3).

## E-E · Estado del mecanismo de autoridad documental

| # | Hecho | Fuente |
|---|---|---|
| E-E.1 | Determinación **B**: existe intención normativa (`PP-007`) pero **ningún mecanismo verificable** para identificar la definición oficial de un concepto. | R-06 · pregunta 5 |
| E-E.2 | El marcador `# Definición` cubre el **100 %** de `20_epistemologia` y `30_ontologia`, y el **0 %** de `00_canon`, `10_nucleo`, `40_metodologia`, `50_producto` y `60_interfaces`. Ninguna norma general lo regula. | R-06 · E-4 · E-5 |
| E-E.3 | *«Cualquier elección entre definiciones concurrentes sería una decisión nueva, no la aplicación de una regla existente.»* | R-06 · Dictamen |
| E-E.4 | `00_canon` declara *«Puede depender de: Nada»*, y `filosofia_experiencia.md` declara tres dependencias hacia `30_ontologia`. Determinación **B**: el Canon depende documentalmente de la Ontología. | R-09 · R-09.7 · Determinación |
| E-E.5 | `PP-009`: *«Toda entidad utilizada por ATÓMICA deberá existir previamente en la Ontología. Ningún concepto podrá utilizarse antes de haber sido definido.»* | R-09 · R-09.7 |
| E-E.6 | `20_epistemologia/` **no contiene ninguna referencia** a `30_ontologia/`. La única arista `30 → 20` es `representacion.md` `# Constitución` → `Observación`. | R-08 · R-08.2 · R-07 · §7 |

## E-F · Registro de un término homónimo

**Hecho verificado.** R-07, apartado de impacto sobre R-09, consigna: *«R-09 se refiere a `00_canon/vision.md:239`, que define `Modelo Organizacional` citando `Representación`.»*

**Hecho verificado.** R-09 · R-09.3 establece el criterio aplicable a los homónimos: `Memoria Organizacional`, en `filosofia_experiencia.md:251`, es *«denominación que no coincide con el concepto `Memoria` de `30_ontologia/memoria.md`»*.

**Consecuencia, *Hecho verificado*.** Bajo el criterio que las propias auditorías aplican, `Modelo Organizacional` no constituye definición de `Modelo`. R-10 · Tarea 1.b y Tarea 9 mantienen que `Modelo` no posee documento propio en el estado auditado.

**Consecuencia arquitectónica, *Hecho verificado*.** Existe en `00_canon` un término definido que contiene la palabra `Modelo` y que cita `Representación`. Toda alternativa que cree un segundo documento definitorio cuyo título contenga `Modelo` produce una concurrencia de autoridad que, según E-E.1 y E-E.3, **el repositorio no dispone de regla para resolver**.

## Limitaciones registradas de la base de evidencia

Se registran, no se resuelven. Ninguna conclusión de este documento depende de ellas.

1. **Discrepancia de localización entre auditorías.** R-07 y R-08 atribuyen a R-09 una referencia situada en `00_canon/vision.md:239`; R-09 · R-09.1 localiza sus tres referencias en `00_canon/filosofia_experiencia.md:237-239`. No se resuelve: exigiría reabrir el repositorio, prohibido en el alcance de este documento.
2. **Duplicidad de ficheros de plan.** `auditorias/ontologia/` contiene dos ficheros variantes por capitalización: `plan_remediacion_v1.2.md` y `PLAN_REMEDIACION_v1.2.md`. Se emplea como autoridad el primero, por ser el nombrado en el encargo, por declararse a sí mismo `Estado: CANÓNICO` y por contener el plan oficial articulado en grupos `G-1`…`G-9`. El segundo declara `Estado: PLAN` y contiene, en su apartado `# Pendiente`, la declaración de estar sin completar. No se altera ninguno de los dos.
3. **Cardinalidad `Modelo` ↔ `Identidad`.** Ninguna de las siete fuentes admitidas verifica si existe un `Modelo` por `Identidad`, uno por organización, o uno único. Véase *Riesgos aceptados · RA-4*.

---

# Alternativas

Las tres alternativas son exhaustivas y mutuamente excluyentes por mandato del encargo. Ninguna otra se considera.

---

## Alternativa A · `Modelo` es una entidad ontológica primitiva

`Modelo` pasa a ser un concepto definido de `30_ontologia`, con las ocho secciones admitidas, al mismo nivel que `Identidad`, `Estado`, `Representación`, `Trayectoria`, `Memoria` y `Relación`.

### A.1 · Compatibilidad con las auditorías

**Incompatible con R-10 · Tarea 9, por evidencia directa.** E-B.2 verifica que `axiomas.md` `# Consecuencias` enumera los conceptos que derivan de los axiomas y **no incluye `Modelo`**, mientras E-B.1 verifica que los axiomas **emplean** `Modelo` en cinco enunciados numerados. Un concepto de `30_ontologia` declara `axiomas.md` en `# Dependencias` (E-B.3): situar `Modelo` en esa capa obliga a que `Modelo` dependa de un documento que lo emplea. La relación resultante —`axiomas.md` usa `Modelo`, `modelo.md` depende de `axiomas.md`— es un ciclo entre capas `10` y `30` que ninguna de las cinco auditorías registra y que R-10 · Tarea 4 no censa entre los quince existentes.

**Incompatible con R-10 · Tarea 10, por evidencia directa.** E-A.3 verifica que `Modelo` es una de las raíces del grafo. Dotarlo de `# Dependencias` le añade una arista saliente y lo convierte en nodo interno, conservando sus 46 aristas entrantes. La topología verificada por R-10 —raíces fantasma, `Representación` como único puente— deja de describir el grafo resultante.

**Agrava R-08 · Determinación C.** E-D.1 verifica dos anclajes incompatibles. A introduce un tercer candidato dentro de la misma capa: un concepto de `30_ontologia` del que los otros seis declararían depender. R-08 determinó **C · varios posibles anclajes incompatibles**; A aumenta su número de dos a tres antes de resolver ninguno.

**Colisiona con R-06 · Determinación B.** E-F verifica que `00_canon` ya contiene un término definido cuyo título contiene `Modelo`. E-E.3 verifica que el repositorio carece de regla para elegir entre definiciones concurrentes. A produce esa concurrencia.

**Colisiona con R-09 · R-09.7.** `PP-009` (E-E.5) gobierna las **entidades**. Si `Modelo` es entidad de `30_ontologia`, entonces `10_nucleo/axiomas.md` —que lo emplea (E-B.1)— utiliza una entidad de una capa que no declara. Es exactamente la estructura que R-09 determinó como **B** para `00_canon`, reproducida un nivel más abajo.

### A.2 · Impacto sobre G-1 … G-7

| Grupo | Impacto |
|---|---|
| **G-1** | **Se rompe.** El grupo se titula *Cierre del vocabulario primitivo* y agrupa H-01 con H-02, cuyos seis conceptos restantes (`instante lógico`, `dominio`, `plausibilidad`, `conocimiento admitido`, `organización`, `entidades del dominio`) no son entidades del dominio. Si `Modelo` es entidad, H-01 abandona el vocabulario primitivo y G-1 debe escindirse. RA-01 · RA-01.7, RA-01.8 y RA-01.9 deben recalcularse. |
| **G-2** | **Crece.** H-04 exige corregir la omisión de `# Consecuencias`; bajo A, `Modelo` debe añadirse a la lista de conceptos derivados, contradiciendo E-B.1. |
| **G-3** | **Crece.** Debe resolver además la concurrencia de autoridad con el término definido en `00_canon` (E-F), para la que E-E.3 verifica que no existe regla. |
| **G-4** | **Se agrava.** Un tercer anclaje candidato en la capa que G-4 debe anclar. No resuelve H-09 ni H-10: `Relación` sigue inaccesible desde `Identidad` (R-08 · R-08.3). |
| **G-5** | **Crece.** H-08 debe definir además el verbo de pertenencia entre entidades y `Modelo` (E-C.2, E-C.5), sumándose a las 14 instancias de *«pertenece a»* que R-10 · Tarea 2 verifica sin documento responsable. |
| **G-6** | **Crece en 9 documentos.** Los 9 que emplean `Modelo` (E-A.1) deben añadir `30_ontologia/modelo.md` a sus `# Dependencias`. Se añaden aristas intracapa `30 → 30`, con riesgo verificable de nuevos ciclos sobre los 15 que R-10 · Tarea 4 censa: nuevas instancias de H-12. |
| **G-7** | **Se agrava.** Nueva instancia del patrón H-16: `10_nucleo` empleando un concepto de `30_ontologia` sin declararlo. |

### A.3 · Impacto en el repositorio

- **Nuevos:** 1 — un documento en `30_ontologia`.
- **Modificados:** 10 — los 9 que emplean `Modelo` (`# Dependencias`) + `axiomas.md` (`# Consecuencias`).
- **Eliminados:** 0.

### A.4 · Complejidad

**Alta.** Diez documentos congelados modificados, recálculo de RA-01.7–RA-01.9, escisión de G-1 y reordenación de prioridades.

### A.5 · Riesgos reales

- **R-A1 · Concurrencia de autoridad no resoluble.** E-F + E-E.3. Verificado.
- **R-A2 · Ciclo `10_nucleo` ⇄ `30_ontologia`.** E-B.1 + E-B.3. Verificado.
- **R-A3 · Invalidación de la topología auditada.** E-A.3 + E-A.6. Verificado.
- **R-A4 · Recálculo obligado de RA-01.** A.2, fila G-1. Verificado.

### A.6 · Capacidad de evolución

| Vector | Efecto |
|---|---|
| Simulación | *Ausencia de autoridad.* Ninguna de las siete fuentes atribuye a una entidad de `30_ontologia` la capacidad de contener trayectorias alternativas. |
| Aprendizaje continuo | *Contradictorio con E-C.7 y E-C.8.* Ambas citas atribuyen la evolución del conocimiento **al Modelo**, no a una entidad contenida en la misma capa que sus contenidos. |
| Múltiples organizaciones | *Ausencia de autoridad.* Véase RA-4. |
| Nuevos conceptos ontológicos | **Coste creciente.** Cada nuevo concepto exige arista hacia `modelo.md` y entrada en `# Consecuencias`, ampliando G-6 en cada incorporación. |

---

## Alternativa B · `Modelo` es un artefacto epistemológico

`Modelo` pasa a ser un concepto definido de `20_epistemologia`, al mismo nivel que `Observación`, `Hipótesis`, `Evidencia` y `Confianza`.

### B.1 · Compatibilidad con las auditorías

**Incompatible con R-10 · Tarea 10, por evidencia directa.** E-A.6 verifica que `Representación` es el **único nodo puente** entre `30_ontologia` y `20_epistemologia`, y que su eliminación desconectaría el grafo en tres componentes. E-A.1 verifica que los **seis** documentos de `30_ontologia` emplean `Modelo`. Situarlo en `20_epistemologia` obliga a seis aristas `30 → 20` adicionales, convirtiendo un puente único en siete. La propiedad topológica que R-10 verificó desaparece; RA-01, que la incorpora en su análisis de impacto, debe rehacerse.

**Incompatible con R-08 · R-08.2 y R-09 · R-09.2.** E-E.6 verifica que `20_epistemologia/` no contiene ninguna referencia a `30_ontologia/`, y que la única dependencia externa declarada por los seis documentos de `30_ontologia` es `10_nucleo/axiomas.md` (E-B.3). B obliga a los seis a declarar una segunda dependencia externa, hacia la capa `20`.

**Contradice E-A.2, por evidencia directa.** El único documento de los diez que **no** emplea `Modelo` es `20_epistemologia/observacion.md` — precisamente un miembro de la capa donde B lo situaría. Los cuatro documentos de `20_epistemologia` forman, según R-10 · Tarea 4, un componente fuertemente conexo completo en el que cada uno declara a los tres restantes. Incorporar `Modelo` a esa capa sin que `observacion.md` lo emplee rompe esa reciprocidad total verificada.

**Contradice E-C, por evidencia directa.** Las nueve citas de E-C sitúan a `Modelo` como sujeto que **admite** las Observaciones (E-C.6) y como poseedor de la estructura de Relaciones (E-C.9). Un artefacto de `20_epistemologia` sería, por su capa, del mismo orden que las Observaciones que `Modelo` admite. La cita `representacion.md` `# Constitución` —*«las Observaciones admitidas por el Modelo»*— coloca a `Modelo` **por encima** de `Observación`, no a su lado.

**Colisiona con R-09 · R-09.7.** `10_nucleo/axiomas.md` emplea `Modelo` (E-B.1). Bajo B, la capa `10` usa un concepto de la capa `20` sin declararlo: nueva instancia del patrón que R-09 determinó como **B**.

**Neutra respecto a R-06.** `20_epistemologia` posee cobertura del 100 % del marcador `# Definición` (E-E.2), de modo que B heredaría el marcador de facto. Es la única ventaja verificable de B, y R-06 · E-5 verifica que ese marcador **no es norma citable**.

### B.2 · Impacto sobre G-1 … G-7

| Grupo | Impacto |
|---|---|
| **G-1** | **Se rompe.** Igual que en A: `Modelo` deja de ser vocabulario primitivo. Escisión de G-1 y recálculo de RA-01.7–RA-01.9. |
| **G-2** | Sin cambio. `# Consecuencias` no enumera conceptos epistemológicos derivados salvo `Hipótesis` y `Evidencia`; H-04 permanece como está. |
| **G-3** | **Crece.** Misma concurrencia con el término definido en `00_canon` (E-F). |
| **G-4** | **Sin resolver.** El anclaje quedaría fuera de la capa que debe anclarse. H-09 y H-10 permanecen íntegros: R-08 · R-08.3 verifica que `Relación` es inaccesible desde `Identidad`, y B no toca esa arista. |
| **G-5** | **Crece.** Igual que en A respecto a H-08. |
| **G-6** | **Crece en 9 documentos, 6 de ellos cruzando capa.** Destruye la propiedad de puente único (E-A.6). |
| **G-7** | **Se agrava.** Nueva instancia del patrón H-16 entre `10_nucleo` y `20_epistemologia`. |

### B.3 · Impacto en el repositorio

- **Nuevos:** 1 — un documento en `20_epistemologia`.
- **Modificados:** 9 — los que emplean `Modelo`, seis de ellos añadiendo una dependencia intercapa que hoy no existe.
- **Eliminados:** 0.

### B.4 · Complejidad

**Alta.** Nueve documentos congelados modificados, seis aristas intercapa nuevas, invalidación de una propiedad topológica verificada, recálculo de RA-01.

### B.5 · Riesgos reales

- **R-B1 · Destrucción del puente único.** E-A.6. Verificado.
- **R-B2 · Inversión del orden de admisión.** E-C.6 sitúa a `Modelo` como quien admite las Observaciones; B lo sitúa en la capa de las Observaciones. Verificado.
- **R-B3 · Concurrencia de autoridad no resoluble.** E-F + E-E.3. Verificado.
- **R-B4 · Ruptura de la reciprocidad total de `20_epistemologia`.** E-A.2 + R-10 · Tarea 4. Verificado.
- **R-B5 · Recálculo obligado de RA-01.** B.2, fila G-1. Verificado.

### B.6 · Capacidad de evolución

| Vector | Efecto |
|---|---|
| Simulación | *Ausencia de autoridad.* Ninguna fuente atribuye a un artefacto de `20_epistemologia` la capacidad de sostener trayectorias alternativas. |
| Aprendizaje continuo | **Parcialmente compatible.** E-C.7 sitúa la evolución del conocimiento en el Modelo; la capa epistemológica es la del conocimiento. Pero E-C.9 sitúa además **la estructura** del Modelo en `Relación`, concepto de `30_ontologia`, que B dejaría dependiendo de una capa superior. |
| Múltiples organizaciones | *Ausencia de autoridad.* Véase RA-4. |
| Nuevos conceptos ontológicos | **Coste creciente y cruzado.** Cada nuevo concepto de `30_ontologia` que emplee `Modelo` añade una arista `30 → 20`. |

---

## Alternativa C · `Modelo` es un metaobjeto raíz

`Modelo` no es una entidad del dominio ni un artefacto del conocimiento. Es el **objeto raíz del sistema**: aquello que admite, define, contiene y evoluciona; aquello de lo que las entidades ontológicas son contenido y las relaciones son estructura. Se declara como **término primitivo** en `10_nucleo`, capa de la que los diez documentos ya declaran depender.

### C.1 · Compatibilidad con las auditorías

**Compatible con R-10 · Tarea 9 y Tarea 10, por evidencia directa.** E-A.3 verifica que `Modelo` es una de las raíces del grafo. C **conserva** esa posición: no le añade dependencias, no lo convierte en nodo interno, no altera ninguna de las 38 aristas censadas ni ninguno de los 15 ciclos. C aporta lo único que R-10 declara faltante —fundamento documental— sin tocar la topología que R-10 verificó.

**Compatible con R-10 · Observación preliminar y Tarea 9, por evidencia directa.** E-B.1 y E-B.2 verifican que `Modelo` es empleado por los axiomas y no derivado de ellos. Bajo A y B, esa asimetría queda como defecto sin explicar. Bajo C es la lectura correcta del hecho: un término primitivo no se deriva, se declara, y los axiomas operan sobre él. La ausencia de `Modelo` en `# Consecuencias` deja de ser anomalía y pasa a ser consistencia.

**Compatible con R-10 · Tarea 6, por evidencia directa.** E-B.3 verifica que `10_nucleo/axiomas.md` es la única dependencia externa ya declarada por los diez documentos. Si `Modelo` se declara en `10_nucleo`, los diez adquieren acceso documental a su fundamento **sin modificar ninguna sección `# Dependencias`**. E-A.5 verifica que `Modelo` es la causa común de la falta de cierre semántico en 9 de 10; C la elimina sin editar los nueve.

**Compatible con R-08 · R-08.1 y Sobre futuras auditorías, por evidencia directa.** E-D.4 registra como problema abierto que existen dos planos disjuntos —entidades y estructura— *«sin documento que declare su articulación»*. E-D.3 verifica que el propio `relacion.md` nombra ese punto de articulación: *«Las Relaciones constituyen la estructura **del Modelo**.»* C sitúa el punto de articulación donde el documento congelado ya lo sitúa. No elige entre `Identidad` y `Relación` —elección que E-E.3 verifica no resoluble por regla existente— sino que declara el objeto del que ambos planos son planos.

**Compatible con R-09, por evidencia directa.** C no crea ninguna arista hacia `00_canon` ni desde él. `PP-009` (E-E.5) gobierna las **entidades**; `Modelo` no se declara entidad, de modo que no se activa la exigencia de existencia previa en la Ontología. Ninguna nueva instancia del patrón H-16.

**Compatible con R-07.** Determinación B de R-07 —composición mutua `Estado ⇄ Representación`, no ciclo ontológico— no se toca. C aporta además el sujeto ausente en la única *Ausencia de autoridad* que R-08 · R-08.8 dejó abierta: `estado.md` `# Formación` declara *«Un Estado nace cuando **el Modelo admite** una Representación distinta de la vigente»* (E-C.3). El disparador es un acto del Modelo, no una precedencia entre `Estado` y `Representación`.

**Compatible con E-C en su totalidad.** Las nueve citas asignan a `Modelo` funciones de sujeto, contenedor y poseedor. Ninguna lo emplea como par de las entidades ni como artefacto entre artefactos. C es la única de las tres alternativas que no contradice ninguna de las nueve.

**Compatible con E-F.** C no crea documento definitorio que concurra con el término ya definido en `00_canon`: declara un término primitivo en `10_nucleo`, capa distinta y de rango inferior en numeración a `20` y `30`, sin sección `# Definición` en juego.

**Relación con R-06 · Determinación B — coste, no incompatibilidad.** E-E.2 verifica que `10_nucleo` tiene **0 %** de cobertura del marcador `# Definición`. Una declaración en esa capa no es verificable con los instrumentos actuales hasta que G-3 establezca el mecanismo de autoridad documental. C no contradice R-06; **depende** de que G-3 se ejecute para ser comprobable. Se registra como consecuencia, no como incompatibilidad, porque R-06 · E-E.3 verifica que **ninguna** de las tres alternativas dispone hoy de regla de designación.

**Respaldo documental en el propio plan, *Hecho verificado*.** `plan_remediacion_v1.2.md` titula el grupo de prioridad 1 **«G-1 · Cierre del vocabulario primitivo»** y le asigna los cuatro hallazgos H-01, H-02, H-11 y H-22, con el objetivo *«Dotar de fundamento documental a los siete conceptos fantasma»*. El plan oficial ya clasifica a `Modelo` como **vocabulario primitivo** y le asigna **fundamento documental**, no definición como entidad. C es la única de las tres alternativas consistente con el título, el agrupamiento y el objetivo literal del grupo que esta decisión precede.

### C.2 · Impacto sobre G-1 … G-7

| Grupo | Impacto |
|---|---|
| **G-1** | **Ejecutable tal como está escrito.** H-01 se resuelve declarando `Modelo` término primitivo en `10_nucleo`; H-02 aplica el mismo mecanismo a los seis fantasmas restantes; H-11 se resuelve porque el empleo de fantasmas por `identidad.md` y `relacion.md` pasa a ser empleo de primitivos declarados; H-22 se resuelve para 9 de 10 documentos por E-A.5, sin editarlos. Sin escisión, sin recálculo de RA-01. |
| **G-2** | **Acoplamiento nuevo.** `plan_remediacion_v1.2.md` declara `Dependencias: ninguna` para G-1 y para G-2. Bajo C, la declaración del primitivo recae sobre `10_nucleo`, documento que G-2 reestructura. G-2 debe ejecutarse con o después de G-1, o `axiomas.md` se reestructura dos veces. **No altera prioridades** (G-1 = 1, G-2 = 3) ni el camino crítico. |
| **G-3** | **Prerrequisito reforzado, alcance sin cambio.** E-E.2: `10_nucleo` carece de marcador. La declaración no será verificable hasta que G-3 fije el mecanismo. G-3 conserva sus tres hallazgos y su prioridad 2. |
| **G-4** | **Resoluble sin adjudicar entre anclajes.** E-D.3 + E-D.4: la articulación de los dos planos disjuntos queda nombrada por el propio `relacion.md`. G-4 conserva su dependencia declarada de G-1, que C respeta. |
| **G-5** | **Aporta el sujeto ausente en H-21.** E-C.3: el disparador del primer `Estado` es un acto del Modelo. G-5 conserva sus tres hallazgos; H-08 sigue debiendo definir el verbo de pertenencia (E-C.2, E-C.5), sin incremento respecto a A o B. |
| **G-6** | **Sin incremento por causa de `Modelo`.** E-B.3: los nueve documentos ya declaran `10_nucleo/axiomas.md`. Es la diferencia mensurable mayor entre las tres alternativas: A y B añaden 9 ediciones de `# Dependencias`; C añade 0 en la variante interna a `axiomas.md`. |
| **G-7** | **Sin cambio.** `Modelo` no entra en `30_ontologia` ni en `20_epistemologia`; `PP-009` no se activa; no aparece nueva arista Canon ↔ capa. |

### C.3 · Impacto en el repositorio

La decisión fija el estatus, no la ubicación del fichero. `plan_remediacion_v1.2.md` deja esa elección a G-1. Ambas variantes son compatibles con C y difieren en coste:

| Variante | Nuevos | Modificados | Eliminados |
|---|---|---|---|
| **C.i** · declaración en una sección admitida de `10_nucleo/axiomas.md` | 0 | 1 (`axiomas.md`) | 0 |
| **C.ii** · documento propio en `10_nucleo` | 1 | 9 (`# Dependencias` de los que emplean `Modelo`) | 0 |

Únicamente **C.i** produce incremento cero sobre G-6. La elección entre C.i y C.ii corresponde a G-1 y no se toma aquí.

### C.4 · Complejidad

**Baja** en la variante C.i · **Media** en la variante C.ii.

En ambas: ningún documento congelado de `30_ontologia` ni de `20_epistemologia` cambia de capa; ninguna arista cambia de dirección; ningún ciclo se añade; RA-01 no se recalcula.

### C.5 · Riesgos reales

- **R-C1 · Categoría no atestiguada.** Ninguna de las siete fuentes emplea la expresión «metaobjeto». `plan_remediacion_v1.2.md` sí emplea «vocabulario primitivo» en el título de G-1, lo que cubre la noción de término no derivado, pero no la de objeto raíz contenedor. Riesgo verificado; véase RA-1.
- **R-C2 · Declaración no verificable hasta G-3.** E-E.2: `10_nucleo` tiene 0 % de cobertura de marcador. Riesgo verificado.
- **R-C3 · Acoplamiento G-1 ↔ G-2 no declarado en el plan.** C.2, fila G-2. Riesgo verificado.
- **R-C4 · Homonimia persistente con el término de `00_canon`.** E-F. C la reduce respecto a A y B —no crea documento concurrente— pero no la elimina. Su resolución pertenece a G-3 y G-7. Riesgo verificado.

### C.6 · Capacidad de evolución

| Vector | Efecto |
|---|---|
| **Simulación** | *Inferencia.* R-08 · R-08.8 deriva el orden `Identidad → Trayectoria → { Estado ≡ Representación } → Memoria`. Un escenario simulado es una segunda `Trayectoria` sobre la misma `Identidad`, lo que exige un contenedor por encima de `Trayectoria`. C es la única de las tres que declara ese contenedor. **Ninguna de las siete fuentes audita la simulación**; se clasifica explícitamente como Inferencia y no sustenta la decisión. |
| **Aprendizaje continuo** | **Hecho verificado.** E-C.7: *«La sucesión de Representaciones constituye la evolución del conocimiento admitido por el Modelo.»* E-C.8: *«Toda evolución del Modelo implica la creación de una nueva Representación asociada a un nuevo Estado.»* El aprendizaje continuo ya está documentado como propiedad **del Modelo**, en secciones admitidas de un documento congelado. C es la única alternativa en la que el sujeto de esas dos frases es el objeto que las contiene. |
| **Múltiples organizaciones** | **Indeterminable con la evidencia disponible.** Véase RA-4. Ninguna de las siete fuentes verifica la cardinalidad `Modelo` ↔ `Identidad`. C no la prejuzga: al declarar `Modelo` sin fijar cardinalidad, deja la cuestión abierta a G-1 sin cerrarla en falso. A y B tampoco la determinan, y además obligan a fijarla al redactar `# Restricciones`. |
| **Nuevos conceptos ontológicos** | **Coste constante.** Bajo C, incorporar un concepto a `30_ontologia` no exige arista hacia `Modelo` ni entrada en `# Consecuencias`, porque `Modelo` no es par suyo ni derivado de los axiomas. Bajo A el coste crece con cada incorporación (A.6); bajo B crece y además cruza capa (B.6). |

---

# Evaluación comparativa

| Alternativa | Compatibilidad con R-06…R-10 | Impacto sobre G-1…G-7 | Documentos nuevos | Documentos modificados | Complejidad | Riesgos verificados | Capacidad de evolución |
|---|---|---|---|---|---|---|---|
| **A · Entidad ontológica primitiva** | **Incompatible.** Contradice R-10 Tarea 9 (E-B.2) y Tarea 10 (E-A.3); agrava R-08 Determinación C; colisiona con R-06 B (E-F) y R-09 R-09.7 | G-1 se rompe · G-2, G-3, G-5 crecen · G-4 se agrava · G-6 +9 documentos y riesgo de nuevos ciclos · G-7 se agrava | 1 (`30_ontologia`) | 10 | **Alta** | 4 · concurrencia no resoluble · ciclo 10⇄30 · invalidación topológica · recálculo de RA-01 | Contradictoria en aprendizaje continuo · coste creciente en nuevos conceptos · sin autoridad en simulación y cardinalidad |
| **B · Artefacto epistemológico** | **Incompatible.** Contradice R-10 Tarea 10 (E-A.6), R-08 R-08.2 y R-09 R-09.2 (E-E.6), E-A.2 y E-C.6; colisiona con R-09 R-09.7 | G-1 se rompe · G-3, G-5 crecen · G-4 sin resolver · G-6 +9 documentos, 6 intercapa · G-7 se agrava · G-2 sin cambio | 1 (`20_epistemologia`) | 9 | **Alta** | 5 · puente único destruido · inversión del orden de admisión · concurrencia no resoluble · reciprocidad rota · recálculo de RA-01 | Parcial en aprendizaje continuo · coste creciente y cruzado · sin autoridad en simulación y cardinalidad |
| **C · Metaobjeto raíz** | **Compatible con las cinco.** Conserva la topología de R-10 · explica E-B.2 en lugar de dejarla como defecto · aporta la articulación que R-08 declara ausente (E-D.4) · neutra ante R-09 · no toca R-07 · respaldada por el título y el objetivo de G-1 | G-1 ejecutable sin escisión · G-3, G-4, G-5, G-7 sin incremento de alcance · **G-6 sin incremento** · G-2 adquiere acoplamiento con G-1 | 0 (C.i) / 1 (C.ii) | 1 (C.i) / 9 (C.ii) | **Baja (C.i) / Media (C.ii)** | 4 · categoría no atestiguada · no verificable hasta G-3 · acoplamiento G-1↔G-2 · homonimia persistente | **Verificada** en aprendizaje continuo (E-C.7, E-C.8) · coste constante en nuevos conceptos · abierta en simulación y cardinalidad, sin cerrarlas en falso |

## Comprobaciones obligatorias previas a la decisión

| Comprobación | A | B | C |
|---|---|---|---|
| **¿Contradice alguna auditoría?** | **Sí.** R-10 Tarea 9 y Tarea 10 · R-08 Determinación C · R-06 Determinación B · R-09 R-09.7 | **Sí.** R-10 Tarea 10 · R-08 R-08.2 · R-09 R-09.2 y R-09.7 | **No.** Ninguna de las cinco. Conserva las determinaciones B (R-06), B (R-07), C (R-08), B (R-09) y C (R-10) sin alterar ningún hecho verificado |
| **¿Obliga a rehacer RA-01?** | **Sí.** H-01 abandona el vocabulario primitivo: RA-01.7, RA-01.8 y RA-01.9 se recalculan | **Sí.** Igual que A, más la pérdida de la propiedad de puente único que RA-01 incorpora | **No.** H-01 conserva categoría (Causa raíz), grupo (G-1) y aristas causales (H-01→H-11, H-01→H-22) |
| **¿Obliga a rehacer el plan?** | **Sí.** Escisión de G-1 y reordenación de prioridades | **Sí.** Escisión de G-1 y recálculo de las dependencias de G-6 | **No, con una salvedad.** G-1 y G-2 adquieren un acoplamiento que el plan declara inexistente. No cambia el orden de prioridad ni el camino crítico `G-1 → G-4 → G-6` |
| **¿Introduce nuevos conceptos?** | **Sí.** Una entidad ontológica adicional en `30_ontologia`, concurrente con el término de `00_canon` (E-F) | **Sí.** Un artefacto epistemológico adicional, concurrente con el término de `00_canon` (E-F) | **No introduce término nuevo.** `Modelo` está en uso 46 veces; «vocabulario primitivo» es el título literal de G-1 en el plan. **Sí introduce una clasificación** —objeto raíz contenedor— no atestiguada en las siete fuentes. Registrado como RA-1 |
| **¿Crea nuevas causas raíz?** | **Sí.** `10_nucleo` empleando una entidad de `30_ontologia` sin declararla: nueva instancia del patrón H-16 | **Sí.** `10_nucleo` empleando un concepto de `20_epistemologia` sin declararlo: nueva instancia del patrón H-16 | **No.** Ninguna capa pasa a emplear un concepto de capa superior. No se añade arista, ciclo ni dependencia intercapa |

---

# Decisión

# C · `Modelo` es un metaobjeto raíz

**`Modelo` no es una entidad del dominio ni un artefacto del conocimiento. Es el objeto raíz del sistema: aquello que admite, define, contiene y evoluciona; aquello de lo que las entidades ontológicas son contenido y de lo que las Relaciones son estructura. Su estatus arquitectónico es el de término primitivo declarado en `10_nucleo`, no derivado de los axiomas sino presupuesto por ellos.**

**Justificación, exclusivamente por evidencia:**

**No es A.** Una entidad ontológica primitiva de `30_ontologia` declara `10_nucleo/axiomas.md` en sus `# Dependencias` (E-B.3), mientras `axiomas.md` emplea `Modelo` en cinco enunciados numerados (E-B.1). El ciclo resultante no está censado entre los quince que R-10 · Tarea 4 verifica. Además, `axiomas.md` `# Consecuencias` enumera los seis conceptos que derivan de los axiomas y **no incluye `Modelo`** (E-B.2): la evidencia verifica que `Modelo` no es derivado, y A exige tratarlo como si lo fuera. Y R-10 · Tarea 10 verifica que `Modelo` es raíz del grafo (E-A.3); dotarlo de dependencias lo convierte en nodo interno e invalida la topología auditada.

**No es B.** R-10 · Tarea 10 verifica que `Representación` es el único nodo puente entre `30_ontologia` y `20_epistemologia` y que su eliminación desconectaría el grafo en tres componentes (E-A.6). Los seis documentos de `30_ontologia` emplean `Modelo` (E-A.1): situarlo en `20_epistemologia` convierte un puente en siete y destruye la propiedad verificada. Además, el único de los diez documentos que **no** emplea `Modelo` es precisamente `20_epistemologia/observacion.md` (E-A.2), y `representacion.md` `# Constitución` declara *«las Observaciones **admitidas por el Modelo**»* (E-C.6), situando a `Modelo` por encima de `Observación`, no a su lado.

**Es C, por cuatro evidencias convergentes:**

1. **Función gramatical verificada.** En las nueve citas literales de E-C, procedentes de tres documentos congelados y de siete secciones admitidas distintas, `Modelo` ocupa exclusivamente funciones de sujeto que admite y define, de contenedor al que las entidades pertenecen, y de poseedor del conocimiento y de la estructura. Ninguno de los diez conceptos definidos es empleado en ninguna de esas funciones por ningún otro documento.

2. **Posición verificada en el grafo.** E-A.3 y E-A.4: `Modelo` es raíz y nodo crítico. C es la única alternativa que **conserva** esa posición en lugar de alterarla, y la única que resuelve E-A.5 —la causa común de la falta de cierre semántico en 9 de 10 documentos— sin modificar ninguna sección `# Dependencias`, porque los diez ya declaran `10_nucleo/axiomas.md` (E-B.3).

3. **Articulación declarada por un documento congelado.** R-08 registra como problema abierto que existen dos planos disjuntos sin documento que declare su articulación (E-D.4). `relacion.md` `# Declaración` la nombra: *«Las Relaciones constituyen la estructura **del Modelo**»* (E-D.3, E-C.9). C sitúa la articulación donde el Canon congelado ya la sitúa, sin adjudicar entre `Identidad` y `Relación` — adjudicación que R-06 · Dictamen verifica no resoluble por regla existente (E-E.3).

4. **Consistencia con el plan que esta decisión precede.** `plan_remediacion_v1.2.md` titula el grupo de prioridad 1 *«Cierre del **vocabulario primitivo**»*, agrupa `Modelo` (H-01) con seis términos que no son entidades del dominio (H-02), y fija como objetivo *«dotar de **fundamento documental**»*, no definir entidades. C es la única de las tres alternativas consistente con el título, el agrupamiento y el objetivo literal de G-1.

**Sobre la clase de decisión.** R-06 · Dictamen verifica: *«Cualquier elección entre definiciones concurrentes sería una decisión conceptual nueva, no la aplicación de una regla existente.»* Esta decisión se emite en esas condiciones y lo declara: no aplica una regla del repositorio, porque el repositorio no la tiene. Se sostiene exclusivamente sobre los hechos verificados en las siete fuentes admitidas.

---

# Consecuencias

## Consecuencias sobre la arquitectura

1. `Modelo` queda establecido como término primitivo de `10_nucleo`. No se deriva de los axiomas; los axiomas operan sobre él. La ausencia de `Modelo` en `axiomas.md` `# Consecuencias` (E-B.2) deja de constituir anomalía.
2. `30_ontologia` y `20_epistemologia` conservan íntegras sus capas, sus documentos y sus dependencias declaradas. Ningún concepto cambia de capa.
3. El grafo verificado por R-10 —17 nodos, 38 aristas, 15 ciclos, 1 componente conexa, `Representación` como único puente, raíces fantasma— permanece descriptivamente válido. `Modelo` deja de ser fantasma sin dejar de ser raíz.
4. Los dos planos disjuntos que R-08 identificó —entidades y estructura— quedan articulados como planos del mismo objeto, sin que ninguno de los dos anclajes candidatos sea declarado superior al otro.
5. `Modelo` no adquiere la condición de entidad, por lo que `PP-009` (E-E.5) no le resulta aplicable y no se genera ninguna nueva dependencia del Canon hacia la Ontología.

## Consecuencias sobre los hallazgos

| Hallazgo | Efecto de esta decisión |
|---|---|
| **H-01** | Queda determinado su estatus arquitectónico. La ejecución material —redacción del fundamento documental— corresponde a G-1. |
| **H-02** | Los seis fantasmas restantes quedan sujetos al mismo mecanismo declarativo. Esta decisión no fija su estatus individual: no se pronuncia sobre `conocimiento admitido`, `organización`, `entidades del dominio`, `instante lógico`, `plausibilidad` ni `dominio`. |
| **H-03** | Sin cambio. `axiomas.md` sigue careciendo de las ocho secciones admitidas. Corresponde a G-2. |
| **H-04** | Sin cambio, y reinterpretado: la omisión de `Modelo` en `# Consecuencias` no es defecto. La omisión de `Memoria`, `Relación`, `Observación` y `Confianza` sí lo sigue siendo. |
| **H-11** | Queda resoluble. El empleo de `Modelo` por `identidad.md` y de `entidades del dominio`/`dominio` por `relacion.md` pasará a ser empleo de primitivos declarados una vez ejecutado G-1. |
| **H-21** | Queda provisto el sujeto ausente: E-C.3 verifica que el disparador es un acto del Modelo. La resolución sigue correspondiendo a G-5. |
| **H-22** | Queda resoluble para 9 de 10 documentos, por E-A.5, sin editarlos. |
| Los demás | Sin efecto. |

## Consecuencias no resueltas por esta decisión

Se declaran expresamente para que no se den por resueltas:

- La **cardinalidad** entre `Modelo` e `Identidad` (RA-4).
- La **ubicación material** de la declaración: variante C.i o C.ii (C.3).
- La **redacción** del fundamento documental.
- El **estatus individual** de los seis fantasmas restantes de H-02.
- La **homonimia** con el término definido en `00_canon` (E-F, RA-3).

Ninguna de las cinco se decide aquí.

---

# Impacto sobre el plan de remediación

`auditorias/ontologia/plan_remediacion_v1.2.md` permanece vigente. Esta decisión **no lo sustituye, no lo modifica y no reordena sus prioridades.**

| Elemento del plan | Estado tras AD-01 |
|---|---|
| Grupos G-1 … G-9 | **Sin cambio.** Nueve grupos, misma composición de hallazgos |
| Prioridades 1 … 9 | **Sin cambio.** G-1 = 1 · G-3 = 2 · G-2 = 3 · G-4 = 4 · G-7 = 5 · G-5 = 6 · G-6 = 7 · G-8 = 8 · G-9 = 9 |
| Camino crítico `G-1 → G-4 → G-6` | **Sin cambio** |
| Dependencias paralelas `G-3 → G-7 → G-8` | **Sin cambio** |
| Grupos independientes G-2, G-5 (salvo H-21), G-9 | **Una salvedad:** G-2 adquiere un acoplamiento con G-1 (véase abajo) |
| Tabla «Auditorías cubiertas» | **Sin cambio** |
| Regla de ejecución | **Sin cambio.** Esta decisión no altera orden, alcance ni dependencias |

## Única desviación registrada

`plan_remediacion_v1.2.md` declara, para **G-2 · Conformación de axiomas.md**: `Dependencias: ninguna`.

Bajo la decisión C, la declaración de `Modelo` como término primitivo recae sobre `10_nucleo`, capa cuyo documento `axiomas.md` es el objeto único de G-2. Si G-2 se ejecuta antes que G-1, `axiomas.md` deberá reestructurarse dos veces.

**Esto es una desviación de una declaración del plan.** No se corrige aquí: el plan establece que *«Ninguna remediación podrá alterar dicho orden salvo mediante una nueva auditoría de consolidación»*. Se registra como incidencia y se deja al plan.

**No afecta al orden de prioridad** (G-1 = 1 precede a G-2 = 3 en el orden oficial) **ni al camino crítico.**

## Precondición de G-1 satisfecha

El objeto de esta decisión era resolver oficialmente el estatus arquitectónico de `Modelo` antes de ejecutar G-1. **Queda resuelto.** G-1 conserva su composición (H-01 · H-02 · H-11 · H-22), su prioridad (1) y su ausencia de dependencias.

---

# Riesgos aceptados

Se aceptan expresamente. Cada uno indica quién lo asume y dónde se resuelve.

**RA-1 · Clasificación no atestiguada en las fuentes.**
Ninguna de las siete fuentes admitidas emplea la expresión «metaobjeto raíz». `plan_remediacion_v1.2.md` sí emplea «vocabulario primitivo» en el título de G-1, lo que cubre la noción de término no derivado, pero no la de objeto raíz contenedor. Las tres alternativas del encargo introducen clasificación —«entidad ontológica primitiva» y «artefacto epistemológico» tampoco están atestiguadas—, de modo que el riesgo es común a las tres y no discrimina entre ellas. **Se acepta.** La redacción del fundamento documental corresponde a G-1 y podrá emplear el vocabulario ya atestiguado del plan.

**RA-2 · La declaración no será verificable hasta que se ejecute G-3.**
R-06 · E-4 verifica que `10_nucleo` posee **0 %** de cobertura del marcador `# Definición`, y R-06 · Determinación B verifica que no existe mecanismo general de autoridad documental. Una declaración en `10_nucleo` no será comprobable con los instrumentos actuales. **Se acepta.** R-06 · Dictamen verifica que ninguna de las tres alternativas dispone hoy de regla de designación; el riesgo se resuelve en G-3, prioridad 2, sin dependencias.

**RA-3 · Homonimia persistente con el término definido en `00_canon`.**
E-F registra que existe en `00_canon` un término definido cuyo título contiene la palabra `Modelo` y que cita `Representación`. R-09 · R-09.3 establece que un homónimo con calificativo no constituye definición del concepto simple, y bajo esa regla `Modelo` sigue sin definición. C reduce el riesgo frente a A y B —no crea documento definitorio concurrente— pero no lo elimina. **Se acepta.** Su resolución pertenece a G-3 y G-7.

**RA-4 · Cardinalidad `Modelo` ↔ `Identidad` indeterminable.**
Ninguna de las siete fuentes admitidas verifica si existe un `Modelo` por `Identidad`, uno por organización, o uno único para todo el sistema. `estado.md` `# Definición` (E-C.1) declara que un Estado versa *«sobre una única Identidad»*, sin pronunciarse sobre cuántas Identidades comprende un Modelo. **Indeterminable con la evidencia disponible.** Se acepta que esta decisión **no la determina** y que su resolución corresponde a G-1. La decisión C no la prejuzga; A y B obligarían a fijarla al redactar `# Restricciones`, sin evidencia que lo sustente.

**RA-5 · Acoplamiento G-1 ↔ G-2 no declarado en el plan.**
Descrito en *Impacto sobre el plan de remediación · Única desviación registrada*. **Se acepta** y se deja al plan, conforme a su propia Regla de ejecución.

**RA-6 · La simulación no está auditada.**
Ninguna de las siete fuentes examina la capacidad de simulación. El análisis de C.6 sobre ese vector está clasificado como **Inferencia** y **no sustenta la decisión**. Si una auditoría futura verifica hechos sobre simulación, podrá modificar esa valoración sin afectar a las cuatro evidencias convergentes sobre las que la decisión se sostiene. **Se acepta.**

---

# Declaración final

**`Modelo` es un metaobjeto raíz.**

No es una entidad del dominio. No es un artefacto epistemológico. Es el objeto raíz del que las entidades ontológicas son contenido, del que las Relaciones son estructura, y cuya evolución las Trayectorias describen. Su estatus arquitectónico es el de término primitivo declarado en `10_nucleo`, presupuesto por los axiomas y no derivado de ellos.

Esta decisión queda **CONGELADA**.

Es condición previa satisfecha para la ejecución de **G-1 · Cierre del vocabulario primitivo**.

No autoriza modificación alguna del repositorio. No redacta el fundamento documental. No fija la ubicación del fichero. No determina la cardinalidad. No se pronuncia sobre los seis conceptos fantasma restantes.

Toda modificación de esta decisión requerirá una nueva decisión arquitectónica que la sustituya íntegramente, respaldada por una nueva consolidación de hallazgos.

---

```
Referencia auditada:  fe6dc5cc9fb566131f1afaf0e34b61fe5dd6092b  (= tag v1.0)
Fuentes admitidas:    R-06 · R-07 · R-08 · R-09 · R-10 · RA-01 · plan_remediacion_v1.2
Repositorio reabierto: no
Documentos canónicos modificados: ninguno
```
