# R-10 · Cierre del grafo ontológico

Estado: CERRADA

Repositorio: atomica-core

Ámbito: Ontología

Referencia auditada:
tag v1.0 (`fe6dc5c`)

Ubicación:

```
auditorias/ontologia/R-10_cierre_grafo_ontologico.md
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

# AUDITORÍA R-10 · CIERRE DEL GRAFO ONTOLÓGICO

**Repositorio:** `atomica-core` · **Referencia:** tag `v1.0` = `fe6dc5c` · HEAD congelado.
**Universo:** `30_ontologia/` (6) · `20_epistemologia/` (4) · `10_nucleo/` (3) · `00_canon/` (11) + referencias explícitas desde `40_metodologia/` y `50_producto/`.
**Secciones admitidas:** Definición · Naturaleza · Constitución · Formación · Restricciones · Dependencias · Utilizado por · Declaración.

---

## Observación preliminar de método · **Hecho verificado**

`10_nucleo/axiomas.md` —única dependencia externa declarada por los 6 documentos de `30_ontologia` y los 4 de `20_epistemologia`— **no posee ninguna de las ocho secciones admitidas**. Sus encabezados son: `Propósito`, `A1`…`A15`, `Consecuencias`, `Documentos dependientes`.

**Consecuencia verificada:** bajo el método declarado, el documento fundacional del que dependen los diez documentos ontológicos y epistemológicos **no aporta ninguna relación computable**.

---

## Tarea 1 · Conceptos utilizados con significado ontológico

### 1.a · Definidos · *Hecho verificado*

| Concepto | Documento | Sección |
|---|---|---|
| Identidad | `30_ontologia/identidad.md` | `# Definición` |
| Estado | `30_ontologia/estado.md` | `# Definición` |
| Representación | `30_ontologia/representacion.md` | `# Definición` |
| Trayectoria | `30_ontologia/trayectoria.md` | `# Definición` |
| Memoria | `30_ontologia/memoria.md` | `# Definición` |
| Relación | `30_ontologia/relacion.md` | `# Definición` |
| Observación | `20_epistemologia/observacion.md` | `# Definición` |
| Hipótesis | `20_epistemologia/hipotesis.md` | `# Definición` |
| Evidencia | `20_epistemologia/evidencia.md` | `# Definición` |
| Confianza | `20_epistemologia/confianza.md` | `# Definición` |

**10 conceptos definidos.**

### 1.b · Utilizados sin definición · *Hecho verificado*

| Concepto | Apariciones en secciones admitidas | Documentos que lo usan | Documento propio |
|---|---|---|---|
| **Modelo** | 46 | los 6 de ontología + 3 de epistemología | **No existe** |
| **organización / referente organizacional** | `identidad.md` `# Definición`, `observacion.md` `# Definición`+`O-001`, `representacion.md` `# Naturaleza` | 3 | **No existe** |
| **entidades del dominio** | `relacion.md` `# Definición`, `# Constitución`, `# Formación`, `RL-001`…`RL-005` | 1 | **No existe** |
| **instante lógico** | `estado.md` `# Definición`, `# Constitución` | 1 | **No existe** |
| **conocimiento admitido** | `estado.md`, `representacion.md`, `trayectoria.md`, `memoria.md` | 4 | **No existe** |
| **plausibilidad** | `evidencia.md` `# Propósito`, `hipotesis.md` `H-006` | 2 | **No existe** |
| **dominio** | `relacion.md` `# Naturaleza` | 1 | **No existe** |

**7 conceptos utilizados sin documento propio.**

**Hecho verificado.** `20_epistemologia/observacion.md` es el **único** de los diez que no emplea la palabra `Modelo` en ninguna sección: 0 apariciones.

### 1.c · Definidos pero nunca utilizados · *Hecho verificado*

**Ninguno.** Los diez conceptos definidos son citados al menos una vez por otro documento en sección admitida.

**Hecho verificado.** `Memoria` es el único citado exclusivamente desde fuera de su capa: `00_canon/filosofia_experiencia.md:239` (`# Dependencias`) y `50_producto/timeline.md:275`. Ningún documento de `30_ontologia` ni de `20_epistemologia` la cita.

---

## Tarea 2 · Relaciones utilizadas sin documento responsable

| Relación | Instancias documentadas | Documento responsable |
|---|---|---|
| **pertenece a** | `ST-001`, `ST-005`, `RP-001`, `RP-002`, `TR-001`, `TR-004`, `C-001`, `H-001`, `ID-003`, `ID-004`, `estado.md` `# Naturaleza`, `hipotesis.md` `# Naturaleza`, `confianza.md` `# Naturaleza`, `relacion.md` `# Naturaleza` — **14** | **Ninguno** |
| **está compuesto por / formado por** | `estado.md` `# Constitución`, `representacion.md` `# Constitución`, `trayectoria.md` `# Constitución`, `relacion.md` `# Constitución` — **4** | **Ninguno** |
| **nace / se constituye / se forma** | `estado.md` `# Formación`, `representacion.md` `# Formación`, `trayectoria.md` `# Formación`, `relacion.md` `# Formación` — **4** | **Ninguno** |
| **genera** | `RP-006`, `ST-009`, `relacion.md` `# Formación` — **3** | **Ninguno** |
| **conserva / preserva** | `MM-001`…`MM-004`, `ST-007`, `RP-004`, `E-006` — **7** | **Ninguno** |
| **procede de** | `E-001`, `E-006`, `evidencia.md` `# Naturaleza` — **3** | **Ninguno** |
| **evalúa** | `E-002`, `evidencia.md` `# Definición`+`# Naturaleza` — **3** | **Ninguno** |
| **sucede a / secuencia ordenada** | `estado.md` `# Naturaleza`, `TR-005`, `trayectoria.md` `# Definición` — **3** | **Ninguno** |
| **conecta** | `RL-001`, `RL-002`, `relacion.md` `# Definición` — **3** | `30_ontologia/relacion.md` — **parcial**: define la Relación como entidad, no el verbo *conectar* |
| **modifica / nunca modifica** | `RP-005`, `RL-003`, `E-004`, `E-005`, `C-003`, `MM-004`, `ST-008` — **7** | **Ninguno** |

**Hecho verificado.** De diez tipos de relación empleados normativamente, **ninguno posee documento responsable**. `relacion.md` define la entidad `Relación`, no la semántica de los verbos relacionales.

**Ausencia de autoridad.** Ningún documento del universo declara qué significa *pertenecer*, *componerse*, *generar*, *conservar*, *proceder de*, *evaluar* ni *suceder*.

---

## Tarea 3 · Referencias implícitas

Documentos que requieren un concepto que **nunca nombran**:

| Documento | Concepto requerido y no nombrado | Evidencia |
|---|---|---|
| `20_epistemologia/observacion.md` | **Modelo** | `O-006`: *«la confianza **del modelo**»* en minúscula; `# Naturaleza`: *«el conocimiento construido por ATÓMICA»*. Sus 3 dependencias declaradas (`hipotesis`, `evidencia`, `confianza`) definen sus conceptos **sobre el Modelo**, término que `observacion.md` no emplea |
| `30_ontologia/relacion.md` | **las seis entidades ontológicas** | `RL-001`: *«conecta dos o más **entidades del dominio**»*. Nunca nombra Identidad, Estado, Representación, Trayectoria ni Memoria. Su `# Utilizado por` sí nombra `estado.md` y `representacion.md` |
| `30_ontologia/memoria.md` | **Identidad** | `# Definición` la cita, pero `# Dependencias` no la declara |
| `30_ontologia/identidad.md` | **Modelo** | 1 sola aparición, frente a 6-8 en los demás documentos de la capa. Su `# Definición` emplea *«referente organizacional»*, término no definido |
| `20_epistemologia/evidencia.md` | **Estado** | `E-005`: *«nunca modifica directamente el **Estado** del Modelo»*. `30_ontologia/estado.md` no figura en sus `# Dependencias` |

---

## Tarea 4 · Cadenas cíclicas completas

Construidas exclusivamente sobre secciones admitidas. **Sin simplificar.**

### Ciclos de longitud 2

```
C1   Estado → Representación → Estado
     estado.md #Constitución, #Formación, #Dependencias
     representacion.md #Definición, #Formación, RP-001, RP-003, RP-006, #Dependencias

C2   Estado → Trayectoria → Estado
     estado.md ST-005, #Dependencias
     trayectoria.md #Definición, #Constitución, #Formación, TR-002…TR-007, #Dependencias

C3   Identidad → Estado → Identidad
     identidad.md #Definición, ID-002, ID-005
     estado.md #Definición, #Naturaleza, #Constitución, ST-001, ST-004, #Declaración

C4   Identidad → Trayectoria → Identidad
     identidad.md ID-003, ID-006
     trayectoria.md #Definición, #Constitución, #Formación, TR-001, #Declaración

C5   Identidad → Estado → Representación → Identidad   (vía RP-002)
     cierra sobre identidad.md ID-002

C6   Observación → Hipótesis → Observación
     observacion.md #Dependencias, O-004
     hipotesis.md #Definición, H-002, #Dependencias

C7   Evidencia → Hipótesis → Evidencia
     evidencia.md #Definición, E-002, #Dependencias
     hipotesis.md H-003, H-005, #Dependencias

C8   Evidencia → Observación → Evidencia
     evidencia.md E-001, E-006, #Dependencias
     observacion.md O-003, #Dependencias

C9   Confianza → Hipótesis → Confianza
     confianza.md #Definición, C-001, C-003, #Dependencias
     hipotesis.md #Naturaleza, H-006, #Dependencias

C10  Confianza → Evidencia → Confianza
     confianza.md #Naturaleza, C-004, #Dependencias
     evidencia.md #Utilizado por
```

### Ciclos de longitud 3

```
C11  Estado → Representación → Identidad → Estado
C12  Estado → Trayectoria → Identidad → Estado
C13  Observación → Hipótesis → Evidencia → Observación
     observacion.md #Dependencias → hipotesis.md #Dependencias → evidencia.md E-001 → observacion.md
C14  Confianza → Hipótesis → Observación → ... → Confianza
     observacion.md #Dependencias declara confianza.md
```

### Ciclo de longitud 4

```
C15  Confianza → Evidencia → Observación → Hipótesis → Confianza
     confianza.md #Dependencias → evidencia.md #Dependencias → observacion.md #Dependencias
     → hipotesis.md #Dependencias → confianza.md
```

**Hecho verificado.** **15 ciclos.** Los cuatro documentos de `20_epistemologia` forman un **componente fuertemente conexo completo**: cada uno declara a los otros en sus `# Dependencias`, sin excepción.

**Hecho verificado.** `observacion.md` declara en `# Dependencias` a `hipotesis.md`, `evidencia.md` y `confianza.md` — los tres documentos que a su vez la declaran a ella. Reciprocidad total en 4 nodos.

---

## Tarea 5 · Conceptos incomprensibles con solo Definición + Naturaleza + Restricciones

| Concepto | ¿Autosuficiente? | Conceptos externos requeridos |
|---|---|---|
| Identidad | **No** | Estado · Trayectoria · Modelo · referente organizacional |
| Estado | **No** | Identidad · Representación · Trayectoria · Modelo · instante lógico |
| Representación | **No** | Estado · Identidad · Relación · Observación · Modelo |
| Trayectoria | **No** | Estado · Identidad · Modelo |
| Memoria | **No** | Estado · Identidad · Trayectoria · Modelo |
| **Relación** | **Sí** | ninguno de los diez — solo *«entidades del dominio»*, no definido |
| Observación | **No** | organización · hipótesis · evidencia · confianza |
| Hipótesis | **No** | Observación · Evidencia · Confianza · Modelo |
| Evidencia | **No** | Observación · Hipótesis · Confianza · Estado · Modelo |
| Confianza | **No** | Hipótesis · Evidencia · Modelo |

**Hecho verificado. 9 de 10 conceptos requieren documentos externos.** El único formalmente autosuficiente es `Relación`, y su autosuficiencia procede de emplear un término no definido —*«entidades del dominio»*— en lugar de nombrar entidades concretas.

---

## Tarea 6 · Cierre semántico por documento

Criterio: ¿basta `axiomas.md` + el propio documento + sus `# Dependencias` declaradas?

| Documento | Cierra | Falta |
|---|---|---|
| `identidad.md` | **No** | `# Dependencias` = solo `axiomas.md`. Usa Estado y Trayectoria |
| `estado.md` | **No** | Dependencias completas, pero `Modelo` (8 usos) e `instante lógico` no se definen en `axiomas.md` |
| `representacion.md` | **No** | Faltan `relacion.md` y `observacion.md` en `# Dependencias` |
| `trayectoria.md` | **No** | Dependencias completas; falta `Modelo` |
| `memoria.md` | **No** | Falta `identidad.md`; falta `Modelo` |
| `relacion.md` | **No** | *«entidades del dominio»* sin definición |
| `observacion.md` | **No** | `organización` sin definición |
| `hipotesis.md` | **No** | Falta `Modelo` |
| `evidencia.md` | **No** | Falta `estado.md` (`E-005`); falta `Modelo` |
| `confianza.md` | **No** | Falta `Modelo` |

**Hecho verificado. Cero de diez documentos alcanzan cierre semántico.**

**Hecho verificado.** La causa común en 9 de 10 es `Modelo`: aparece 46 veces en secciones admitidas, `axiomas.md` lo emplea en A1, A2, A8, A11, A14 y **ningún documento lo define**.

---

## Tarea 7 · Dependencias ocultas

Conceptos usados en sección admitida cuyo documento **no figura** en `# Dependencias`:

| Documento | Concepto usado | Sección de uso | Documento ausente de `# Dependencias` |
|---|---|---|---|
| `identidad.md` | Estado | `# Definición`, `ID-002`, `ID-005` | `30_ontologia/estado.md` |
| `identidad.md` | Trayectoria | `ID-003`, `ID-006` | `30_ontologia/trayectoria.md` |
| `memoria.md` | Identidad | `# Definición` | `30_ontologia/identidad.md` |
| `representacion.md` | Relación | `# Constitución` | `30_ontologia/relacion.md` |
| `representacion.md` | Observación | `# Constitución` | `20_epistemologia/observacion.md` |
| `evidencia.md` | Estado | `E-005` | `30_ontologia/estado.md` |

**6 dependencias ocultas verificadas** en 4 documentos.

**Hecho verificado adicional.** `20_epistemologia/observacion.md` **carece de sección `# Utilizado por`**, única entre los diez, y declara `40_metodologia/` dentro de `# Dependencias` — invirtiendo la dirección respecto a los otros nueve, que declaran `40_metodologia/` en `# Utilizado por`.

---

## Tarea 8 · Conceptos huérfanos

**Ninguno.** · *Hecho verificado.*

Los diez conceptos poseen al menos una arista entrante documentada. `Relación` —clasificado huérfano en A-03— posee arista entrante corroborada bidireccionalmente: `representacion.md` `# Constitución` la cita, y `relacion.md` `# Utilizado por` lista `representacion.md`.

**Hecho verificado.** `relacion.md` `# Utilizado por` declara además `30_ontologia/estado.md`, y `estado.md` **no cita `Relación` en ninguna de sus 14 secciones**. Declaración no corroborada.

---

## Tarea 9 · Conceptos fantasma

**Siete.** · *Hecho verificado.*

| Concepto fantasma | Usos en secciones admitidas | Documento propio |
|---|---|---|
| **Modelo** | **46** | No existe |
| conocimiento admitido | 4 documentos | No existe |
| organización / referente organizacional | 3 documentos | No existe |
| entidades del dominio | `relacion.md`, 7 secciones | No existe |
| instante lógico | `estado.md`, 2 secciones | No existe |
| plausibilidad | 2 documentos | No existe |
| dominio | `relacion.md` `# Naturaleza` | No existe |

**Hecho verificado.** `10_nucleo/axiomas.md`, sección `# Consecuencias`, declara: *«De estos axiomas derivan: Identidad, Estado, Trayectoria, Representación, Hipótesis, Evidencia.»*

**Hecho verificado.** De los diez conceptos definidos, **`Memoria`, `Relación`, `Observación` y `Confianza` no figuran** en esa lista. `Modelo` tampoco.

---

## Tarea 10 · Grafo final

### Nodos · 17

**Definidos (10):** Identidad · Estado · Representación · Trayectoria · Memoria · Relación · Observación · Hipótesis · Evidencia · Confianza
**Fantasma (7):** Modelo · organización · entidades del dominio · instante lógico · conocimiento admitido · plausibilidad · dominio

### Aristas · 38 documentadas

```
                    ⟦Modelo⟧ ◄─────────── 9 nodos definidos (46 usos)
                   NO DEFINIDO
                        ▲
   ┌────────────────────┼────────────────────────┐
   │                    │                        │
Identidad ⇄ Estado ⇄ Representación ──► ⟦entidades del dominio⟧
   ⇅          ⇅              │                   ▲
Trayectoria ──┘              ├──► Relación ──────┘
   ▲                         │
   └── Memoria ──────────────┘
                             └──► Observación
                                      ⇅
                    Hipótesis ⇄ Evidencia ⇄ Confianza
                        ⇅          ⇅          ⇅
                        └──────────┴──────────┘
                                   ▲
                          ⟦organización⟧
                          NO DEFINIDO
```

### Componentes conexas · **1**

Único componente débilmente conexo, unido por dos puentes: `representacion.md → Relación` y `representacion.md → Observación`, ambos en `# Constitución`.

### Ciclos · **15** (C1–C15, Tarea 4)

### Raíces · **ninguna entre los definidos**

`identidad.md` y `relacion.md` declaran `# Dependencias` sin conceptos definidos, pero ambos usan conceptos fantasma: `identidad.md` usa `Modelo` y `referente organizacional`; `relacion.md` usa `entidades del dominio` y `dominio`.

**Las únicas raíces del grafo son los 7 nodos fantasma.**

### Hojas · **ninguna**

Los diez definidos poseen aristas salientes.

### Nodos puente · **1**

**`Representación`** — única arista entre el bloque ontológico y `Relación`, y única entre `30_ontologia` y `20_epistemologia` (`→ Observación`, `# Constitución`). Su eliminación desconectaría el grafo en tres componentes.

### Nodos críticos · **2**

**`Modelo`** — 46 usos, 9 de 10 documentos dependen de él, sin documento.
**`Estado`** — 4 aristas entrantes desde `30_ontologia` (Identidad, Trayectoria, Representación, Memoria) + 1 desde `20_epistemologia` (`E-005`).

---

## Determinación

# C · El grafo posee conceptos sin fundamento documental

**Justificación, exclusivamente por evidencia:**

**No es A.** El cierre exige que todo concepto empleado posea definición. **Siete conceptos se emplean con significado ontológico sin documento propio.** `Modelo` acumula 46 usos en secciones admitidas de 9 de los 10 documentos.

**No es B.** B presupone un grafo correcto con dependencias ocultas como único defecto. Las 6 dependencias ocultas existen, pero no son el defecto principal: **cero de diez documentos alcanzan cierre semántico** y **las únicas raíces del grafo son nodos fantasma**.

**No es D.** La evidencia es exhaustiva: 17 nodos, 38 aristas, 15 ciclos, 41 restricciones numeradas, 10 secciones `# Dependencias`, todo localizable por documento y sección.

**Es C.** El grafo es conexo, sus aristas están documentadas y sus ciclos son trazables — pero **descansa sobre siete nodos sin fundamento documental**, uno de los cuales (`Modelo`) es el término más usado del corpus ontológico y no está definido en ninguna parte del repositorio.

**Hecho verificado agravante.** `10_nucleo/axiomas.md`, del que dependen los diez documentos, **carece de todas las secciones admitidas** y su sección `# Consecuencias` **omite cuatro de los diez conceptos definidos**: Memoria, Relación, Observación y Confianza.

---

## Impacto

### Sobre R-06 · Mecanismo de definición oficial — **CONFIRMA**

**Hecho verificado.** Los diez conceptos poseen sección `# Definición` y ninguno duplica. La determinación B de R-06 —intención sin mecanismo verificable— se confirma y se extiende: `A15` de `axiomas.md` establece *«Un concepto canónico conserva el mismo significado en todo el Canon. Ningún documento puede redefinir un concepto previamente congelado»*, sin definir qué es un concepto canónico ni cómo se comprueba.

### Sobre R-07 · Ciclo `Estado ⇄ Representación` — **MODIFICA**

**Hecho verificado.** R-07 concluyó que el ciclo era un caso singular de composición mutua. R-10 verifica que es **1 de 15 ciclos**, y que el patrón de reciprocidad total en `# Dependencias` es la **norma** en `20_epistemologia`: sus cuatro documentos forman un componente fuertemente conexo completo.

La determinación B de R-07 se mantiene para el par auditado. Su singularidad, no.

### Sobre R-08 · Anclaje del grafo — **MODIFICA sustancialmente**

**Hecho verificado.** R-08 determinó dos anclajes: `Identidad` y `Relación`. R-10 verifica que **ninguno de los dos es raíz**: ambos usan conceptos fantasma en secciones admitidas.

- `identidad.md` `# Definición` emplea *«referente organizacional»* y usa `Modelo`.
- `relacion.md` emplea *«entidades del dominio»* y *«dominio»* en 7 secciones.

**Las raíces reales del grafo son los siete nodos fantasma.** La determinación C de R-08 se mantiene en cuanto a pluralidad de anclajes; su localización cambia: los anclajes no están en `30_ontologia`, están fuera del repositorio.

### Sobre R-09 · Dependencia Canon ↔ Ontología — **CONFIRMA**

**Hecho verificado.** R-09 determinó dependencia documental unidireccional, sin reciprocidad. R-10 lo confirma: ninguno de los 6 documentos de `30_ontologia` ni de los 4 de `20_epistemologia` cita `00_canon` en `# Dependencias` ni en `# Utilizado por`. Su única dependencia externa declarada es `10_nucleo/axiomas.md`.

**Hecho verificado adicional.** `axiomas.md` `# Documentos dependientes` declara: *«Todos los documentos del Canon.»* Declaración global no corroborada documento a documento.

---

```
HEAD:                 fe6dc5cc9fb566131f1afaf0e34b61fe5dd6092b  (= tag v1.0)
Árbol:                limpio · 0 cambios pendientes
Ficheros modificados: ninguno
```
