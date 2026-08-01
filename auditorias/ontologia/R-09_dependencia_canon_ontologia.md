# R-09 · Dependencia entre Canon y Ontología

Estado: CERRADA

Repositorio: atomica-core

Ámbito: Ontología

Referencia auditada:
tag v1.0 (`fe6dc5c`)

Ubicación:

```
90_auditorias/ontologia/R-09_dependencia_canon_ontologia.md
```

---

> Esta auditoría constituye evidencia documental del estado del repositorio en el commit auditado.
>
> No modifica la metodología.
>
> No redefine conceptos.
>
> No sustituye documentos canónicos.
>
> Únicamente verifica coherencia documental.

---

# AUDITORÍA R-09 · DEPENDENCIA ENTRE CANON Y ONTOLOGÍA

**Repositorio:** `atomica-core` · **Referencia:** tag `v1.0` = `fe6dc5c`
**Universo:** `00_canon/` (11 ficheros) y `30_ontologia/` (6 ficheros), más referencias explícitas desde `10_nucleo/`, `20_epistemologia/`, `40_metodologia/`, `50_producto/`.
**Secciones admitidas:** Definición · Naturaleza · Restricciones · Dependencias · Utilizado por · Declaración.
**Secciones excluidas por el método:** Propósito · Introducción · Ejemplos · Motivación · Narrativa · Filosofía · Explicaciones · Alcance · Comprensión · y todo encabezado no perteneciente a la lista admitida.

---

## R-09.1 · Referencias desde `00_canon` hacia `30_ontologia`

**Tres referencias, todas en un único documento y en una única sección.** · *Hecho verificado.*

| Origen | Línea | Sección | Destino | Contexto literal |
|---|---|---|---|---|
| `00_canon/filosofia_experiencia.md` | 237 | `# Dependencias` | `30_ontology/patron.md` | ``- `30_ontology/patron.md` `` |
| `00_canon/filosofia_experiencia.md` | 238 | `# Dependencias` | `30_ontologia/estado.md` | ``- `30_ontologia/estado.md` `` |
| `00_canon/filosofia_experiencia.md` | 239 | `# Dependencias` | `30_ontologia/memoria.md` | ``- `30_ontologia/memoria.md` `` |

**Hecho verificado.** Las tres residen en la sección `# Dependencias`, sección **admitida** por el método.

**Hecho verificado.** `30_ontology/patron.md` no existe en `v1.0`. No hay ningún fichero `patron.md` en `30_ontologia/`.

**Hecho verificado.** Los otros diez documentos de `00_canon` —`arquitectura_repositorio.md`, `filosofia.md`, `leyes_sistemicas.md`, las cuatro leyes, `primeros_principios.md`, `sistemas_organizacionales.md`, `vision.md`— **no contienen ninguna referencia a `30_ontologia`**.

---

## R-09.2 · Referencias desde `30_ontologia` hacia `00_canon`

**Ninguna.** · *Hecho verificado.*

Búsqueda de la cadena `00_canon` en los 6 documentos de `30_ontologia/`: **0 resultados**.

**Hecho verificado.** Las seis secciones `# Dependencias` de `30_ontologia/` declaran exclusivamente:

```
identidad.md      → 10_nucleo/axiomas.md
estado.md         → 10_nucleo/axiomas.md · identidad · representacion · trayectoria
representacion.md → 10_nucleo/axiomas.md · identidad · estado
trayectoria.md    → 10_nucleo/axiomas.md · identidad · estado
memoria.md        → 10_nucleo/axiomas.md · estado · trayectoria
relacion.md       → 10_nucleo/axiomas.md
```

**Hecho verificado.** Ninguna sección `# Utilizado por` de `30_ontologia/` menciona `00_canon`. Las seis listan únicamente documentos de `30_ontologia/`, `40_metodologia/` y `50_producto/`.

---

## R-09.3 · ¿Existe dependencia semántica?

**Sí. Cuatro usos de conceptos ontológicos en secciones admitidas de `00_canon`.** · *Hecho verificado.*

| Documento | Línea | Sección | Concepto | Cita literal |
|---|---|---|---|---|
| `primeros_principios.md` | 211 | `## PP-016` (Restricciones normativas) | **Estado** | *«Todo conocimiento pertenece a un **Estado** concreto.»* |
| `primeros_principios.md` | 217 | `## PP-017` | **Estado** | *«Cada nuevo **Estado** amplía, modifica o refuta el conocimiento anterior.»* |
| `filosofia_experiencia.md` | 52 | `## E-001` | **Estado** | *«Puede sustentar: … un **Estado**;»* |
| `filosofia_experiencia.md` | 54 | `## E-001` | **Relación** | *«Puede sustentar: … una **Relación**.»* |

**Hecho verificado.** `Estado` y `Relación` aparecen capitalizados, en singular con artículo indeterminado, en enunciados normativos numerados.

**Hecho verificado.** `Identidad`, `Representación` y `Trayectoria` **no aparecen en ninguna sección admitida de `00_canon`**.

**Hecho verificado.** `Memoria` aparece una sola vez, en `filosofia_experiencia.md:251`, sección `# Utilizado por`, como ``- Memoria Organizacional`` — denominación que no coincide con el concepto `Memoria` de `30_ontologia/memoria.md`.

**Ausencia de autoridad.** Ningún documento del universo declara si `Estado` y `Relación`, empleados en `PP-016`, `PP-017` y `E-001`, designan las entidades `Frozen` de `30_ontologia/` o términos comunes. No existe convención de capitalización declarada.

---

## R-09.4 · ¿Existe dependencia declarada?

**Sí, unidireccional y limitada a un documento.** · *Hecho verificado.*

### Vía `# Dependencias`

| Documento de `00_canon` | Declara depender de `30_ontologia` |
|---|---|
| `filosofia_experiencia.md` | **Sí** — `estado.md`, `memoria.md` (y `30_ontology/patron.md`, inexistente) |
| `arquitectura_repositorio.md` | No posee sección `# Dependencias` |
| `filosofia.md` | No posee sección `# Dependencias` |
| `leyes_sistemicas.md` | No posee sección `# Dependencias` |
| `leyes_sistemicas/` (4) | No poseen sección `# Dependencias` |
| `primeros_principios.md` | No posee sección `# Dependencias` |
| `sistemas_organizacionales.md` | No posee sección `# Dependencias` |
| `vision.md` | No posee sección `# Dependencias` |

**Hecho verificado.** **1 de 11** documentos de `00_canon` posee sección `# Dependencias`. Ese único documento declara depender de `30_ontologia`.

### Vía `# Utilizado por`

**Hecho verificado.** Ninguno de los 6 documentos de `30_ontologia` incluye `00_canon` ni `filosofia_experiencia.md` en su sección `# Utilizado por`.

**Hecho verificado.** `estado.md` `# Utilizado por` lista: `trayectoria.md`, `representacion.md`, `40_metodologia/`, `50_producto/`.
`memoria.md` `# Utilizado por` lista: `40_metodologia/`, `50_producto/`.

**La dependencia declarada por `filosofia_experiencia.md` no está reconocida por ninguno de los dos documentos dependidos.**

---

## R-09.5 · Conceptos definidos exclusivamente en Ontología y usados en Canon

| Concepto | Se define en | Se usa en `00_canon` (sección admitida) | ¿Referencia declarada? |
|---|---|---|---|
| **Estado** | `30_ontologia/estado.md` `# Definición` | `primeros_principios.md:211` `PP-016` · `:217` `PP-017` · `filosofia_experiencia.md:52` `E-001` | **`filosofia_experiencia.md`: SÍ** (`:238`) · **`primeros_principios.md`: NO** — carece de sección `# Dependencias` |
| **Relación** | `30_ontologia/relacion.md` `# Definición` | `filosofia_experiencia.md:54` `E-001` | **NO** — `relacion.md` no figura en las `# Dependencias` de `filosofia_experiencia.md` |
| **Memoria** | `30_ontologia/memoria.md` `# Definición` | no usado como concepto en sección admitida | Declarada en `# Dependencias` (`:239`) **sin uso conceptual correspondiente** |
| **Identidad** | `30_ontologia/identidad.md` | **0 usos** en secciones admitidas | — |
| **Representación** | `30_ontologia/representacion.md` | **0 usos** en secciones admitidas | — |
| **Trayectoria** | `30_ontologia/trayectoria.md` | **0 usos** en secciones admitidas | — |

**Hecho verificado.** Dos asimetrías:
1. `primeros_principios.md` **usa** `Estado` dos veces en enunciados normativos y **no puede declararlo**: carece de sección `# Dependencias`.
2. `filosofia_experiencia.md` **usa** `Relación` sin declararla, y **declara** `memoria.md` sin usarla.

---

## R-09.6 · ¿Puede eliminarse Ontología manteniendo íntegro el significado de `00_canon`?

**No, para dos documentos. Sí, para los nueve restantes.** · *Hecho verificado.*

| Documento | Efecto documental de eliminar `30_ontologia/` |
|---|---|
| `filosofia_experiencia.md` | **Su sección `# Dependencias` pierde 2 de 6 entradas** (`estado.md`, `memoria.md`). `E-001` conserva dos términos —`Estado`, `Relación`— cuya definición desaparece del repositorio |
| `primeros_principios.md` | `PP-016` y `PP-017` conservan el término `Estado` cuya definición desaparece del repositorio |
| `arquitectura_repositorio.md` · `filosofia.md` · `leyes_sistemicas.md` · las 4 leyes · `sistemas_organizacionales.md` · `vision.md` | **Ningún efecto documental verificable.** Cero referencias, cero usos de los 6 conceptos `Frozen` en secciones admitidas |

**Hecho verificado.** **9 de 11** documentos de `00_canon` son documentalmente indiferentes a la existencia de `30_ontologia/`.

---

## R-09.7 · ¿Constituye `00_canon` una capa superior independiente?

**No en su totalidad.** · *Hecho verificado.*

**Norma citable** — `00_canon/arquitectura_repositorio.md`, sección `# 00 · Canon`:

> ## Puede depender de
> Nada.
>
> ## Puede ser utilizado por
> Todas las capas.

**Hecho verificado.** `00_canon/filosofia_experiencia.md`, sección `# Dependencias`, declara tres dependencias hacia `30_ontologia`. La declaración contradice literalmente la cláusula *«Puede depender de: Nada»* del mismo directorio.

**Hecho verificado.** La contradicción es **interna a `00_canon`**: ambos documentos pertenecen a la misma capa y ambos declaran `Estado: Canónico`.

**Hecho verificado adicional** — `00_canon/primeros_principios.md`, `## PP-009 · La ontología gobierna el dominio`:

> Toda entidad utilizada por ATÓMICA deberá existir previamente en la Ontología.
>
> Ningún concepto podrá utilizarse antes de haber sido definido.

**Hecho verificado.** `PP-009` establece la precedencia de la Ontología sobre todo uso de entidades. `PP-016`, `PP-017` y `E-001` —del propio `00_canon`— utilizan `Estado` y `Relación`, entidades definidas en `30_ontologia`.

**Ausencia de autoridad.** Ningún documento declara si `PP-009` obliga también a la capa que lo enuncia, ni si `00_canon` está exento de su propia norma.

---

## Determinación

# B · El Canon depende documentalmente de la Ontología

**Justificación, exclusivamente por hechos verificados:**

**No es A.** La independencia completa queda refutada por una declaración formal explícita: `00_canon/filosofia_experiencia.md`, sección `# Dependencias`, líneas 237-239, declara tres dependencias hacia `30_ontologia`. Es una declaración documental, no una interpretación.

**No es C.** La opción C —dependencia semántica **sin declararla**— describe solo una parte del hecho. La dependencia **está declarada**, en la sección formalmente prevista para ello, en el documento que la contrae. Lo no declarado es un subconjunto: el uso de `Relación` en `E-001` y los dos usos de `Estado` en `primeros_principios.md`, documento que carece de sección `# Dependencias`.

**No es D.** La evidencia es directa, literal y localizada por línea: 3 referencias declaradas, 4 usos conceptuales en secciones admitidas, 1 norma citable que las prohíbe, 0 referencias en sentido inverso.

**Es B.** La dependencia es **documental**: consta por escrito, en la sección `# Dependencias` del documento que la contrae, mediante rutas explícitas a ficheros de `30_ontologia/`. Coexiste con una dependencia semántica adicional no declarada, y con una norma de la misma capa que declara *«Puede depender de: Nada»*.

**Alcance verificado de la dependencia:** **2 de 11** documentos de `00_canon`. Los 9 restantes son documentalmente independientes de `30_ontologia`.

---

## Impacto

### Sobre R-06 · Mecanismo de definición oficial

**Impacto verificable: R-09 aporta un caso adicional de norma no verificable.** · *Hecho verificado.*

`PP-009` establece: *«Toda entidad utilizada por ATÓMICA deberá existir previamente en la Ontología. Ningún concepto podrá utilizarse antes de haber sido definido.»* Es una norma con la misma estructura que `PP-007` —enuncia una obligación sin definir el criterio de verificación—: no declara qué constituye «existir previamente en la Ontología» ni cómo se comprueba el orden de uso frente al de definición.

**Hecho verificado.** `PP-007` y `PP-009` residen en el mismo documento y en el mismo bloque `II. Principios de modelado`.

### Sobre R-07 · Ciclo `Estado ⇄ Representación`

**Ninguno.** · *Hecho verificado.*

R-07 se resuelve íntegramente dentro de `30_ontologia/`. Ninguno de los documentos de `00_canon` cita `Representación` en sección admitida. El único concepto de la pareja presente en `00_canon` es `Estado`, en tres enunciados que no describen su relación con `Representación`.

### Sobre R-08 · Anclaje del grafo ontológico

**Impacto verificable: refuerza la determinación C de R-08 y descarta a `00_canon` como origen del anclaje.** · *Hecho verificado.*

R-08 determinó dos anclajes disjuntos, `Identidad` y `Relación`. R-09 verifica que:

- **`Identidad` no aparece en ninguna sección admitida de `00_canon`.** Cero usos, cero referencias.
- **`Relación` sí aparece**, en `filosofia_experiencia.md:54`, `E-001`, como uno de los seis objetos que una Evidencia puede sustentar — junto a `Hipótesis`, `Capacidad`, `Fragilidad`, `Estado` y `Patrón`.

**Hecho verificado.** El único de los dos anclajes que el Canon utiliza en sección admitida es `Relación`, y lo hace situándola al mismo nivel que conceptos de `20_epistemologia` (`Hipótesis`), `40_metodologia` (`Capacidad`, `Fragilidad`) y `70_patrones` (`Patrón`).

**Ausencia de autoridad.** Ningún documento de `00_canon` declara cuál de los dos anclajes ontológicos es el fundamental, ni establece relación entre `Identidad` y `Organización`.

---

```
HEAD:                 fe6dc5cc9fb566131f1afaf0e34b61fe5dd6092b  (= tag v1.0)
Árbol:                limpio · 0 cambios pendientes
Ficheros modificados: ninguno
```
