# PLAN DE REMEDIACIÓN v1.2

Estado: BORRADOR

Versión: 1.2

Ubicación:

auditorias/ontologia/PLAN_REMEDIACION_v1.2.md

---

# Objeto

Consolidar todas las remediaciones derivadas de las auditorías R-06 a R-10.

Este documento sustituye al plan v1.1.

No modifica ninguna auditoría.

Únicamente reorganiza, fusiona y elimina remediaciones para obtener el backlog mínimo necesario para alcanzar consistencia documental.

---

# Alcance

Entradas:

- auditorias/ontologia/R-06_*.md
- auditorias/ontologia/R-07_*.md
- auditorias/ontologia/R-08_*.md
- auditorias/ontologia/R-09_*.md
- auditorias/ontologia/R-10_*.md
- auditorias/ontologia/REVISION_PLAN_REMEDIACION_v1.1.md

No utilizar ninguna otra fuente.

---

# Estado

BORRADOR.

No constituye documentación canónica.

---

# Objetivo

Generar un backlog definitivo de remediaciones:

- completo
- mínimo
- sin duplicidades
- con dependencias verificables
- con cobertura íntegra de R-06 a R-10

---

# Resultado esperado

Un plan v1.2 que:

- elimine remediaciones innecesarias
- fusione remediaciones equivalentes
- incorpore cualquier remediación ausente detectada en la revisión
- mantenga trazabilidad completa hacia todas las auditorías
- preserve el camino crítico de ejecución

---

# Restricciones

No modificar las auditorías.

No reinterpretar sus conclusiones.

No introducir remediaciones nuevas salvo las exigidas explícitamente por la revisión v1.1.

No alterar hechos verificados.

No cambiar el alcance de ninguna auditoría.

No resolver las remediaciones.

Solo planificarlas.

---

# Backlog definitivo

Remediaciones: **13**

Procedencia: plan v1.1 (16 entradas) + `REVISION_PLAN_REMEDIACION_v1.1.md`
(determinación **C**).

Transformaciones aplicadas: 3 fusiones (CR-03) · 1 eliminación (CR-01, CR-04,
CR-07) · 1 incorporación (CR-06) · 4 dependencias corregidas (CR-04).

| Operación | v1.1 | v1.2 |
|---|---|---|
| Fusión | RM-03 + RM-04 | RM-03 |
| Fusión | RM-05 + RM-06 | RM-04 |
| Fusión | RM-11 + RM-12 | RM-10 |
| Eliminación | RM-16 | — |
| Incorporación | — | RM-08 |

---

## RM-01 · Definir el concepto `Modelo`

**Problema.** `Modelo` se emplea 46 veces en secciones admitidas de 9 de los 10
documentos ontológicos y epistemológicos, sin documento propio ni enunciado
definitorio en ninguno de los 184 ficheros de texto del repositorio.

**Origen.** R-10 · Tareas 1.b, 9 y 10 (nodo crítico).

**Justificación.** R-10 determinación **C**: el grafo no es cerrado. `Modelo`
es el término más usado del corpus ontológico y una de las dos únicas raíces
reales del grafo, ambas fuera del repositorio.

**Acción.** Dotar a `Modelo` de documento propio con las secciones admitidas, o
declarar formalmente su condición de término primitivo dentro de una sección
admitida de `10_nucleo/axiomas.md`.

**Documentos afectados.** `30_ontologia/estado.md` (8) · `representacion.md` (8)
· `memoria.md` (7) · `trayectoria.md` (6) · `relacion.md` (3) · `identidad.md`
(1) · `20_epistemologia/hipotesis.md` (5) · `confianza.md` (4) · `evidencia.md`
(4) · `10_nucleo/axiomas.md` (A1, A2, A8, A11, A14).

**Dependencias.** Ninguna.

**Criterios de aceptación.**
1. Existe exactamente un enunciado definitorio de `Modelo`, o una declaración
   formal de primitividad citable por documento y sección.
2. Los 9 documentos que lo emplean resuelven el término contra esa única fuente.

**Prioridad.** 1

---

## RM-02 · Definir los seis conceptos fantasma restantes

**Problema.** Seis conceptos se emplean con significado ontológico en secciones
admitidas sin poseer documento propio: `conocimiento admitido` (4 documentos),
`organización` / `referente organizacional` (3), `entidades del dominio`
(`relacion.md`, 7 secciones), `instante lógico` (2 secciones de `estado.md`),
`plausibilidad` (2 documentos), `dominio` (1).

**Origen.** R-10 · Tarea 9.

**Justificación.** R-10 determinación **C**. Junto a `Modelo`, son las raíces
reales del grafo. R-10 · Tarea 5 verifica que 9 de 10 conceptos requieren
documentos externos para ser interpretados.

**Acción.** Para cada concepto: documento propio con secciones admitidas, o
declaración formal de primitividad.

**Documentos afectados.** Los 6 de `30_ontologia/` · `20_epistemologia/
observacion.md`, `hipotesis.md`, `evidencia.md`.

**Dependencias.** RM-01 — fija el criterio de tratamiento de los términos
primitivos.

**Criterios de aceptación.**
1. Cada uno de los seis posee definición única o declaración de primitividad.
2. `relacion.md` resuelve `entidades del dominio` contra una fuente citable.
3. Ningún concepto empleado en sección admitida carece de fuente.

**Prioridad.** 1

---

## RM-03 · Conformar `axiomas.md` a las secciones admitidas y completar sus consecuencias

> **Fusión de v1.1 RM-03 + RM-04** · CR-03, Caso 2: ambas afectan
> exclusivamente a `10_nucleo/axiomas.md`, con dependencia lineal y sin
> resultado intermedio verificable de forma independiente.

**Problema.** Dos defectos en el mismo documento:

1. `10_nucleo/axiomas.md` es la única dependencia externa declarada por los 10
   documentos de `30_ontologia` y `20_epistemologia`, y **no posee ninguna de
   las ocho secciones admitidas**. Sus encabezados son `Propósito`, `A1`…`A15`,
   `Consecuencias`, `Documentos dependientes`.
2. Su sección `# Consecuencias` declara *«De estos axiomas derivan: Identidad,
   Estado, Trayectoria, Representación, Hipótesis, Evidencia»* y **omite cuatro
   de los diez conceptos definidos**: Memoria, Relación, Observación y
   Confianza.

**Origen.** R-10 · Observación preliminar de método · Tarea 9.

**Justificación.** Bajo el método de auditoría, el documento fundacional no
aporta ninguna relación computable. Los cuatro conceptos omitidos declaran
`axiomas.md` en sus `# Dependencias` sin figurar en la relación recíproca.

**Acción.** Dotar a `axiomas.md` de las secciones admitidas aplicables, sin
alterar el contenido normativo de A1–A15, y completar `# Consecuencias` o
declarar por qué los cuatro conceptos no derivan de los axiomas.

**Documentos afectados.** `10_nucleo/axiomas.md` · los 10 que lo declaran en
`# Dependencias`.

**Dependencias.** Ninguna.

**Criterios de aceptación.**
1. `axiomas.md` posee al menos `# Restricciones`, `# Dependencias` y
   `# Utilizado por`.
2. A1–A15 conservan su texto íntegro.
3. Los 10 conceptos definidos aparecen en `# Consecuencias`, o consta la
   justificación documental de su exclusión.
4. Una auditoría por secciones admitidas extrae relaciones del documento.

**Prioridad.** 1

---

## RM-04 · Establecer el mecanismo completo de definición oficial

> **Fusión de v1.1 RM-05 + RM-06** · CR-03, Caso 1: el criterio de aceptación
> de RM-05 —*«PP-007 pasa a ser verificable»*— es inalcanzable sin la regla de
> precedencia de RM-06. R-06 · pregunta 4 establece que la verificación exige
> tres elementos; ambas remediaciones producen conjuntamente un único
> resultado.

**Problema.** `PP-007` y la sección *Responsabilidad única* de
`arquitectura_repositorio.md` exigen *«Cada concepto posee una única definición
oficial»*. Faltan los tres elementos que harían verificable esa norma:

1. Ningún documento define qué constituye una definición oficial. La expresión
   aparece 2 veces en 184 ficheros, ambas como obligación.
2. Ningún documento se declara a sí mismo definición oficial. El marcador
   `# Definición` existe en 65 documentos con cobertura del 100 % en
   `20_epistemologia` y `30_ontologia` y del **0 %** en `00_canon`,
   `10_nucleo`, `40_metodologia`, `50_producto` y `60_interfaces`, sin norma
   que lo regule.
3. Coexisten cuatro vocabularios de estado —`CANÓNICO`, `Canónico`, `Frozen`,
   `Congelado`— en 78 documentos, sin enumeración ni regla de precedencia.

**Origen.** R-06 · E-1 a E-7, preguntas 1 a 5, determinación **B**.

**Justificación.** R-06 determinación **B**: existe intención normativa sin
mecanismo verificable. Sin este mecanismo, ningún conflicto de autoridad admite
resolución reproducible.

**Acción.** Declarar el criterio por el que un documento constituye la
definición oficial de un concepto, la enumeración de estados válidos y la regla
de precedencia aplicable cuando concurren documentos canónicos.

**Documentos afectados.** `00_canon/primeros_principios.md` (`PP-007`) ·
`00_canon/arquitectura_repositorio.md` (*Responsabilidad única*) · los 78
documentos con estado declarado.

**Dependencias.** Ninguna.

**Criterios de aceptación.**
1. Existe una norma citable por documento y sección que define el término
   «definición oficial», aplicable a las ocho capas.
2. Existe una enumeración citable de estados válidos y su precedencia.
3. Ningún documento emplea un valor de estado fuera de la enumeración.
4. `PP-007` es verificable mediante un procedimiento reproducible.

**Prioridad.** 1

---

## RM-05 · Declarar el documento responsable de los tipos de relación

**Problema.** Diez tipos de relación se emplean normativamente sin documento
responsable: *pertenece a* (14 instancias), *conserva* (7), *modifica* (7),
*está compuesto por* (4), *se forma* (4), *genera* (3), *procede de* (3),
*evalúa* (3), *sucede a* (3), *conecta* (3).

**Origen.** R-10 · Tarea 2.

**Justificación.** `relacion.md` define la entidad `Relación`, no la semántica
de los verbos relacionales. R-10 verifica que ningún documento declara qué
significa pertenecer, componerse, generar, conservar, proceder de, evaluar ni
suceder.

**Acción.** Declarar qué documento es responsable de cada tipo de relación, o
declarar que los verbos relacionales no requieren definición.

**Documentos afectados.** `30_ontologia/relacion.md` · los 41 enunciados
numerados `ST-`, `RP-`, `TR-`, `MM-`, `ID-`, `RL-`, `O-`, `H-`, `E-`, `C-`.

**Dependencias.** RM-02, **únicamente para el tipo *conectar***.

> **Corrección respecto a v1.1** · CR-04: la dependencia declarada en v1.1
> RM-07 era total. Verificado que solo *conectar* depende de `entidades del
> dominio`; los nueve tipos restantes son independientes de RM-02 y admiten
> ejecución anticipada.

**Criterios de aceptación.**
1. Cada tipo de relación empleado posee documento responsable citable, o consta
   la declaración de no exigibilidad.

**Prioridad.** 2

---

## RM-06 · Declarar el anclaje del grafo y la articulación de planos

**Problema.** Dos documentos declaran `# Dependencias` sin ningún concepto
Frozen —`identidad.md` y `relacion.md`— y ningún documento designa cuál es la
raíz. Tomando `Identidad` como raíz, `Relación` resulta inaccesible: la única
arista que la toca es `Representación → Relación`, que la sitúa como fundamento
de `Representación`. Los dos anclajes son disjuntos: `identidad.md` no cita
`Relación` y `relacion.md` no cita `Identidad`.

Adicionalmente, `relacion.md` `# Declaración` sitúa dos planos distintos —*«Las
entidades definen qué existe. Las Relaciones definen cómo esas entidades
permanecen conectadas»*— sin que ningún documento declare su articulación.

**Origen.** R-08 · R-08.1, R-08.3, R-08.7, determinación **C** · R-10 · Tarea 10.

**Justificación.** R-08 determinación **C**: varios anclajes incompatibles.
R-10 · Tarea 10 verifica que ninguno de los dos es raíz real, pues ambos
emplean conceptos fantasma.

**Acción.** Declarar el anclaje del grafo ontológico y la relación entre el
plano de entidades y el plano de estructura.

**Documentos afectados.** `30_ontologia/identidad.md` · `relacion.md` ·
`00_canon/arquitectura_repositorio.md`.

**Dependencias.** RM-01, RM-02 — mientras subsistan nodos fantasma, las raíces
reales del grafo permanecen fuera del repositorio.

**Criterios de aceptación.**
1. Existe declaración citable del anclaje.
2. Los seis conceptos de `30_ontologia` son alcanzables desde él.
3. La articulación entre ambos planos consta por escrito.

**Prioridad.** 1

---

## RM-07 · Declarar la norma sobre ciclos intracapa

**Problema.** Existen 15 ciclos documentados. Los cuatro documentos de
`20_epistemologia` forman un componente fuertemente conexo completo: cada uno
declara a los otros tres en sus `# Dependencias`. `Estado ⇄ Trayectoria` y
`Estado ⇄ Representación` están declarados recíprocamente en `# Dependencias`.
`00_canon/arquitectura_repositorio.md` regula dependencias **entre capas**;
ningún documento regula las dependencias **dentro** de una capa.

**Origen.** R-10 · Tarea 4 (C1–C15) · R-08 · R-08.4 · R-07 · §5.

**Justificación.** R-07 · §5 verifica: *«Ausencia de autoridad. Ningún documento
del repositorio prohíbe la referencia mutua entre entidades de la misma capa.»*
La licitud de los 15 ciclos no puede determinarse.

**Acción.** Declarar si la referencia mutua intracapa está permitida, prohibida
o condicionada.

**Documentos afectados.** `00_canon/arquitectura_repositorio.md` · los 6 de
`30_ontologia` · los 4 de `20_epistemologia`.

**Dependencias.** Ninguna.

> **Corrección respecto a v1.1** · CR-04: v1.1 RM-09 declaraba depender de
> RM-08 (anclaje). Verificado como dependencia implícita: R-07 · §5 formula la
> ausencia de norma sobre referencia mutua de forma independiente del anclaje.
> Ningún documento de R-07, R-08 ni R-10 establece esa condición.

**Criterios de aceptación.**
1. Existe norma citable sobre ciclos intracapa.
2. Los 15 ciclos quedan clasificados como permitidos o prohibidos.

**Prioridad.** 2

---

## RM-08 · Resolver el orden de constitución del primer `Estado`

> **Remediación incorporada** · CR-06: no conformidad verificada por R-08 sin
> cobertura en el plan v1.1. Búsqueda literal de `primer Estado` y `orden de
> constitución` en las 16 entradas de v1.1: **0 coincidencias**.

**Problema.** `estado.md` `# Formación` declara *«Un Estado nace cuando el
Modelo admite una Representación distinta de la vigente»*, situando a
`Representación` como disparador de `Estado`. `representacion.md` `# Formación`
declara *«Una Representación se constituye simultáneamente con un Estado»*.
`trayectoria.md` `TR-002` exige *«Toda Trayectoria posee exactamente un Estado
inicial»*. Ningún documento resuelve si el primer `Estado` de una `Trayectoria`
requiere una `Representación` previa.

**Origen.** R-08 · R-08.8, línea 281 — **Ausencia de autoridad**.

**Justificación.** R-08 · R-08.8 reconstruye el orden de constitución
`Identidad → Trayectoria → { Estado ≡ Representación } → Memoria`, y registra
expresamente este punto como no resuelto. El plan v1.1 cubre otras ausencias de
autoridad de la misma naturaleza —RM-05 tipos de relación, RM-07 ciclos, RM-06
articulación de planos— y omite ésta, lo que la revisión calificó de cobertura
inconsistente.

**Acción.** Declarar si el primer `Estado` de una `Trayectoria` requiere una
`Representación` previa, o si ambos se constituyen simultáneamente sin
disparador.

**Documentos afectados.** `30_ontologia/estado.md` `# Formación` ·
`representacion.md` `# Formación` · `trayectoria.md` `# Formación` y `TR-002`.

**Dependencias.** RM-01 — ambas secciones `# Formación` emplean `Modelo`.
RM-06 — el orden de constitución forma parte del anclaje declarado.

**Criterios de aceptación.**
1. El orden de constitución es reconstruible sin ambigüedad desde las secciones
   `# Formación` de los tres documentos.
2. No subsisten dos enunciados que atribuyan disparadores incompatibles al
   primer `Estado`.

**Prioridad.** 2

---

## RM-09 · Corregir las seis dependencias ocultas

**Problema.** Seis conceptos se emplean en secciones admitidas sin que su
documento figure en `# Dependencias`:

| Documento | Concepto | Sección | Ausente de `# Dependencias` |
|---|---|---|---|
| `identidad.md` | Estado | `#Definición`, `ID-002`, `ID-005` | `estado.md` |
| `identidad.md` | Trayectoria | `ID-003`, `ID-006` | `trayectoria.md` |
| `memoria.md` | Identidad | `#Definición` | `identidad.md` |
| `representacion.md` | Relación | `#Constitución` | `relacion.md` |
| `representacion.md` | Observación | `#Constitución` | `observacion.md` |
| `evidencia.md` | Estado | `E-005` | `estado.md` |

**Origen.** R-10 · Tarea 7 · R-08 · R-08.5.

**Justificación.** R-08 verifica que solo `estado.md` y `trayectoria.md`
declaran íntegramente lo que presuponen. R-10 · Tarea 6 verifica que **0 de 10
documentos alcanzan cierre semántico**.

**Acción.** Declarar en `# Dependencias` los documentos empleados, o retirar el
uso del concepto.

**Documentos afectados.** `30_ontologia/identidad.md`, `memoria.md`,
`representacion.md` · `20_epistemologia/evidencia.md`.

**Dependencias.** RM-04 — modifica documentos `Frozen`; requiere la regla de
precedencia. RM-06 — la arista `representacion.md → relacion.md` es
precisamente la que constituye a `Relación` en segundo anclaje. RM-07 — la
declaración puede generar ciclos nuevos.

**Criterios de aceptación.**
1. Cero conceptos empleados en sección admitida sin documento en
   `# Dependencias`.
2. El estado de los cuatro documentos consta actualizado según RM-04.

**Prioridad.** 2 · **Riesgo: rompe el congelado**

---

## RM-10 · Normalizar las secciones `# Utilizado por`

> **Fusión de v1.1 RM-11 + RM-12** · CR-03, Caso 3: misma sección, misma
> operación. El criterio de aceptación de RM-12 —*«los 10 documentos poseen
> `# Utilizado por`»*— engloba el ámbito de RM-11. La dependencia RM-12 → RM-11
> se disuelve con la fusión.

**Problema.** Seis defectos en la misma sección:

| Documento | Defecto |
|---|---|
| `trayectoria.md` | declara ser usado por `representacion.md`, que **no cita `Trayectoria` en ninguna sección** |
| `relacion.md` | declara ser usado por `estado.md`, que **no cita `Relación` en ninguna de sus 14 secciones** |
| `estado.md` | omite `memoria.md`, que lo declara en sus `# Dependencias` |
| `trayectoria.md` | omite `estado.md` (`ST-005` + `# Dependencias`) |
| `representacion.md` | omite `estado.md`, que la declara en `# Dependencias` |
| `observacion.md` | **carece de la sección**, única entre los diez, y declara `40_metodologia/` dentro de `# Dependencias`, invirtiendo la dirección respecto a los otros nueve |

**Origen.** R-08 · R-08.6 · R-10 · Tarea 7.

**Justificación.** R-08 verifica que 4 de 6 documentos de `30_ontologia` tienen
`# Utilizado por` divergente y que 2 declaraciones carecen de corroboración.

**Acción.** Hacer coincidir cada `# Utilizado por` con las `# Dependencias`
recíprocas verificables, dotar a `observacion.md` de la sección y reubicar su
referencia a `40_metodologia/`.

**Documentos afectados.** `30_ontologia/estado.md`, `trayectoria.md`,
`representacion.md`, `relacion.md` · `20_epistemologia/observacion.md`.

**Dependencias.** RM-09.

**Criterios de aceptación.**
1. Toda entrada de `# Utilizado por` está corroborada por la `# Dependencias`
   del documento citado.
2. Toda `# Dependencias` tiene su entrada recíproca en `# Utilizado por`.
3. Los 10 documentos poseen `# Utilizado por`.
4. Ninguna capa inferior figura en `# Dependencias` de un documento de capa
   superior.

**Prioridad.** 3 · **Riesgo: rompe el congelado**

---

## RM-11 · Resolver la contradicción Canon ↔ Ontología

**Problema.** `00_canon/arquitectura_repositorio.md`, sección `# 00 · Canon`,
declara *«Puede depender de: Nada»* y su matriz marca ❌ en las ocho columnas
de la fila 00. `00_canon/filosofia_experiencia.md` declara en `# Dependencias`
(líneas 237–239) tres dependencias hacia `30_ontologia`. Ambos pertenecen a
`00_canon` y ambos declaran estado canónico.

Adicionalmente, `PP-009` establece *«Toda entidad utilizada por ATÓMICA deberá
existir previamente en la Ontología»*, mientras `PP-016`, `PP-017` y `E-001`
—del propio `00_canon`— emplean `Estado` y `Relación`.

**Origen.** R-09 · R-09.1, R-09.4, R-09.7, determinación **B**.

**Justificación.** R-09 determinación **B**: el Canon depende documentalmente
de la Ontología. Alcance verificado: 2 de 11 documentos. Referencias en sentido
inverso: 0. Ninguno de los dos documentos dependidos reconoce la dependencia en
su `# Utilizado por`.

**Acción.** Resolver la contradicción entre la cláusula de independencia y la
dependencia declarada, y declarar si `PP-009` obliga a la capa que lo enuncia.

**Documentos afectados.** `00_canon/arquitectura_repositorio.md` ·
`filosofia_experiencia.md` · `primeros_principios.md`.

**Dependencias.** RM-04 — la resolución entre dos enunciados canónicos
contradictorios requiere la regla de precedencia.

**Criterios de aceptación.**
1. No subsisten dos enunciados canónicos contradictorios sobre la independencia
   de `00_canon`.
2. Consta el estatuto de `PP-009` respecto a `00_canon`.

**Prioridad.** 1

---

## RM-12 · Corregir las referencias a documentos inexistentes

**Problema.**

| Origen | Referencia | Estado |
|---|---|---|
| `00_canon/filosofia_experiencia.md:237` | `30_ontology/patron.md` | inexistente |
| `governance/decisions/D-001-estado.md` | `ontology/estado.md`, `methodology/ifo.md`, `interface/*`, `implementation/*` | rutas inexistentes |
| `governance/decisions/D-005-documento-estado.md` | `ontology/estado.md` | ruta inexistente |

**Origen.** R-09 · R-09.1 · R-06 · E-7.

**Justificación.** R-06 · E-7 verifica que `governance/decisions` es el único
precedente documental de designación de autoridad conceptual, ejercido con
estado `CONGELADA` sobre `Estado` y `Confianza`, y que sus rutas no existen en
`v1.0`.

**Acción.** Repuntar cada referencia a su documento existente, o declarar
formalmente su inexistencia.

**Documentos afectados.** `00_canon/filosofia_experiencia.md` ·
`governance/decisions/D-001-estado.md` · `D-005-documento-estado.md`.

**Dependencias.** RM-11 — la resolución de la contradicción puede suprimir las
líneas afectadas de `filosofia_experiencia.md`.

**Criterios de aceptación.**
1. Cero referencias a rutas inexistentes en `00_canon` y `governance/`.

**Prioridad.** 3

---

## RM-13 · Dotar a `primeros_principios.md` de `# Dependencias`

**Problema.** `00_canon/primeros_principios.md` emplea `Estado` en `PP-016`
(*«Todo conocimiento pertenece a un Estado concreto»*) y en `PP-017` (*«Cada
nuevo Estado amplía, modifica o refuta el conocimiento anterior»*), y carece de
sección `# Dependencias`, por lo que no puede declarar la dependencia. Diez de
los once documentos de `00_canon` carecen de esa sección.

Adicionalmente, `filosofia_experiencia.md` declara `memoria.md` en
`# Dependencias` sin emplear el concepto en ninguna sección admitida, y emplea
`Relación` en `E-001` sin declarar `relacion.md`.

**Origen.** R-09 · R-09.4, R-09.5.

**Justificación.** R-09 · R-09.5 verifica dos asimetrías: uso sin posibilidad
de declaración, y declaración sin uso correspondiente.

**Acción.** Añadir la sección y declarar las dependencias reales; corregir la
declaración sin uso y el uso sin declaración.

**Documentos afectados.** `00_canon/primeros_principios.md` ·
`filosofia_experiencia.md`.

**Dependencias.** RM-11, RM-12.

**Criterios de aceptación.**
1. Todo documento de `00_canon` que emplee un concepto de otra capa lo declara.
2. Cero dependencias declaradas sin uso correspondiente.

**Prioridad.** 3

---

# 1 · Orden recomendado

| Fase | Remediaciones | Justificación |
|---|---|---|
| **F1 · Fundamento** | RM-01 · RM-03 · RM-04 · RM-07 | Las cuatro únicas sin prerrequisito. Cierran el grafo por su base, dotan de secciones computables al documento fundacional, establecen el criterio de autoridad y fijan la norma de ciclos. |
| **F2 · Derivadas** | RM-02 · RM-11 | RM-02 depende solo de RM-01. RM-11 depende solo de RM-04. Ambas habilitan las fases siguientes. |
| **F3 · Anclaje y propagación** | RM-05 · RM-06 · RM-12 | RM-06 fija la raíz del grafo. RM-05 y RM-12 se ejecutan en paralelo sin bloquearlo. |
| **F4 · Congelado** | RM-08 · RM-09 · RM-13 | RM-09 rompe el congelado de `30_ontologia` y `20_epistemologia`. RM-08 resuelve el orden de constitución sobre las mismas secciones. |
| **F5 · Cierre** | RM-10 | Última: requiere `# Dependencias` ya corregidas para verificar reciprocidad. |

**Regla observada.** Ningún documento se modifica mientras exista otro del que
dependa. Las dos remediaciones que rompen el congelado —RM-09 y RM-10— se
agrupan al final.

---

# 2 · Camino crítico

```
RM-01 ──► RM-02 ──► RM-06 ──► RM-09 ──► RM-10
Modelo   fantasmas  anclaje   dep.      Utilizado
                              ocultas   por
```

**Cinco remediaciones encadenadas.** Dos de ellas rompen el congelado.

**Ramas secundarias:**
- `RM-01 → RM-02 → RM-06 → RM-08` (4)
- `RM-04 → RM-11 → RM-12 → RM-13` (4)

**Corrección respecto a v1.1.** El camino crítico de v1.1 era
`RM-01 → RM-02 → RM-08 → RM-09 → RM-10 → RM-11 → RM-12` (7 nodos). La
supresión de la dependencia implícita RM-09 → RM-08 y la fusión RM-11 + RM-12
lo reducen a **5 nodos**.

---

# 3 · Matriz de dependencias

Fila = remediación. Columna = prerrequisito. ● = depende.

| | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **RM-01** | — | | | | | | | | | | | | |
| **RM-02** | ● | — | | | | | | | | | | | |
| **RM-03** | | | — | | | | | | | | | | |
| **RM-04** | | | | — | | | | | | | | | |
| **RM-05** | | ●¹ | | | — | | | | | | | | |
| **RM-06** | ● | ● | | | | — | | | | | | | |
| **RM-07** | | | | | | | — | | | | | | |
| **RM-08** | ● | | | | | ● | | — | | | | | |
| **RM-09** | | | | ● | | ● | ● | | — | | | | |
| **RM-10** | | | | | | | | | ● | — | | | |
| **RM-11** | | | | ● | | | | | | | — | | |
| **RM-12** | | | | | | | | | | | ● | — | |
| **RM-13** | | | | | | | | | | | ● | ● | — |

¹ RM-05 depende de RM-02 **únicamente para el tipo *conectar***; los otros
nueve tipos de relación son independientes.

**Sin prerrequisito:** RM-01, RM-03, RM-04, RM-07.
**Sin dependientes:** RM-03, RM-05, RM-08, RM-10, RM-13.

---

# 4 · Cobertura por auditoría

| Auditoría | Remediaciones derivadas | Cobertura |
|---|---|---|
| **R-06** · Mecanismo de definición oficial | RM-04 · RM-12 | Completa |
| **R-07** · Ciclo Estado ⇄ Representación | RM-07 | Completa |
| **R-08** · Anclaje del grafo | RM-06 · RM-07 · RM-08 · RM-09 · RM-10 | Completa |
| **R-09** · Dependencia Canon ↔ Ontología | RM-11 · RM-12 · RM-13 | Completa |
| **R-10** · Cierre del grafo | RM-01 · RM-02 · RM-03 · RM-05 · RM-06 · RM-07 · RM-09 · RM-10 | Completa |
| **REVISIÓN v1.1** | 3 fusiones · 1 eliminación · 1 incorporación · 4 dependencias corregidas | Completa |

**Límite de alcance registrado.** La sección *Impacto* de R-06 declara
bloqueadas las remediaciones R-11 a R-15 —conflictos de autoridad sobre
Confianza, Modelo Vivo, Evidencia, Patrón e IFO—. Proceden de la auditoría
A-02, ajena a la serie R-06–R-10, y quedan fuera del alcance declarado.

**Elemento retirado.** La capitalización de `estado.md:23` (v1.1 RM-16) no
constituye no conformidad: R-07 · §6 registra **Ausencia de autoridad** sobre
convenciones de capitalización, y R-07 · §3.1 verifica que la arista
`Estado → Representación` está probada en `estado.md:56` y `:64`.

---

# 5 · Riesgos

| Nivel | Remediaciones | Naturaleza |
|---|---|---|
| **Muy alto** | RM-01 · RM-03 · RM-06 · RM-11 | `Modelo` con 46 usos sin definición · documento fundacional sin secciones computables · grafo sin raíz real · dos documentos canónicos de `00_canon` en contradicción |
| **Alto** | RM-02 · RM-04 · RM-09 | Seis raíces fantasma · mecanismo de autoridad inexistente · ruptura del congelado de dos capas |
| **Medio** | RM-05 · RM-07 · RM-08 · RM-10 | Ausencias de autoridad sin efecto sobre el grafo declarado |
| **Bajo** | RM-12 · RM-13 | Integridad referencial |

**Riesgo de congelado.** RM-09 y RM-10 son las únicas que modifican documentos
`Frozen` de `30_ontologia` y `20_epistemologia`. Se agrupan en F4 y F5 para no
repetir la ruptura.

**Riesgo residual.** RM-04 debe completarse antes que RM-09: modificar
documentos `Frozen` sin regla de precedencia declarada reproduce la no
conformidad que RM-04 remedia.

---

# 6 · Resumen ejecutivo

El plan v1.2 contiene **13 remediaciones**, frente a las 16 de v1.1.

La reducción procede íntegramente de `REVISION_PLAN_REMEDIACION_v1.1.md`,
determinación **C**: tres fusiones por absorción (CR-03), una eliminación por
falta de necesidad, dependencia injustificada y no minimalidad (CR-01, CR-04,
CR-07), y una incorporación por cobertura ausente (CR-06). Cuatro dependencias
quedan corregidas por no estar justificadas documentalmente (CR-04).

**Cuatro remediaciones carecen de prerrequisito** y pueden iniciarse
simultáneamente: RM-01, RM-03, RM-04 y RM-07. Es una más que en v1.1, por la
supresión de la dependencia implícita de la norma de ciclos respecto al
anclaje.

**El camino crítico se reduce de siete a cinco nodos.**

**Dos remediaciones rompen el congelado** de `30_ontologia` y
`20_epistemologia`: RM-09 y RM-10, agrupadas al final de la secuencia.

**El bloqueador determinante es RM-01.** Mientras `Modelo` carezca de
definición, el grafo ontológico permanece abierto y sus raíces reales fuera del
repositorio, según R-10 determinación **C**. Siete de las trece remediaciones
dependen de él directa o transitivamente.

**Cobertura íntegra.** Las cinco auditorías y la revisión quedan cubiertas.
Ninguna no conformidad verificada permanece sin remediación asociada.
