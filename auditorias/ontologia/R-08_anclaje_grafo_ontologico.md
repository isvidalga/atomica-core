# R-08 · Anclaje y conexión del grafo ontológico

Estado: CERRADA

Repositorio: atomica-core

Ámbito: Ontología

Referencia auditada:
tag v1.0 (`fe6dc5c`)

Ubicación:

```
90_auditorias/ontologia/R-08_anclaje_grafo_ontologico.md
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

# AUDITORÍA R-08 · ANCLAJE Y CONEXIÓN DEL GRAFO ONTOLÓGICO

**Repositorio:** `atomica-core` · **Referencia:** tag `v1.0` = `fe6dc5c` · **Árbol:** limpio, ningún fichero modificado.
**Universo:** los 6 documentos `Frozen` de `30_ontologia/` + referencias explícitas desde `20_epistemologia/`, `40_metodologia/`, `00_canon/`.
**Convención de dirección:** `A → B` significa **«A presupone / depende de B»**.
**Secciones admitidas:** Definición · Naturaleza · Constitución · Formación · Restricciones · Dependencias · Utilizado por · Declaración.
**Secciones excluidas por el método:** Propósito · Propiedades · Relaciones · Persistencia · Finalización · Terminación · Alcance · Orden · Continuidad · Sucesión · Exclusiones.

---

## R-08.1 · ¿Existe un único nodo raíz?

**No. Existen dos nodos sin dependencia ontológica declarada.** · *Hecho verificado.*

| Documento | `# Dependencias` | Conceptos Frozen de los que depende |
|---|---|---|
| `identidad.md` | `10_nucleo/axiomas.md` | **ninguno** |
| `relacion.md` | `10_nucleo/axiomas.md` | **ninguno** |
| `estado.md` | axiomas · identidad · representacion · trayectoria | 3 |
| `representacion.md` | axiomas · identidad · estado | 2 |
| `trayectoria.md` | axiomas · identidad · estado | 2 |
| `memoria.md` | axiomas · estado · trayectoria | 2 |

**Hecho verificado.** Ningún documento de `30_ontologia/` declara cuál de los dos constituye la raíz de la ontología.

**Hecho verificado.** `identidad.md`, sección `# Declaración`: *«La Identidad constituye el referente permanente sobre el que ATÓMICA preserva la continuidad del conocimiento a través del tiempo.»* — declara permanencia y continuidad, **no** raíz del grafo.

**Hecho verificado.** `relacion.md`, sección `# Declaración`: *«Las Relaciones constituyen la estructura del Modelo. Las entidades definen qué existe. Las Relaciones definen cómo esas entidades permanecen conectadas.»* — declara un plano estructural **distinto** del de las entidades.

**Ausencia de autoridad.** Ningún documento del universo examinado designa un nodo raíz.

---

## R-08.2 · Grafo dirigido con relaciones documentadas

### Aristas desde `identidad.md`

| Destino | Sección | Cita literal |
|---|---|---|
| Estado | Definición | *«Representa aquello que permite afirmar que distintos **Estados** pertenecen a la misma organización.»* |
| Estado | Restricciones `ID-002` | *«Ningún **Estado** existe sin Identidad.»* |
| Estado | Restricciones `ID-005` | *«La desaparición de un **Estado** no implica la desaparición de la Identidad.»* |
| Trayectoria | Restricciones `ID-003` | *«Toda **Trayectoria** pertenece exactamente a una Identidad.»* |
| Trayectoria | Restricciones `ID-006` | *«Toda nueva Identidad inicia una nueva **Trayectoria**.»* |
| — | Dependencias | `10_nucleo/axiomas.md` — ningún concepto Frozen |
| ← Estado, Trayectoria, Representación, Memoria | Utilizado por | los 4 documentos listados |

### Aristas desde `estado.md`

| Destino | Sección | Cita literal |
|---|---|---|
| Identidad | Definición | *«…sobre una única **Identidad** en un instante lógico.»* |
| Identidad | Naturaleza | *«pertenece exactamente a una **Identidad**»* |
| Identidad | Constitución | *«Todo Estado está compuesto por: … una **Identidad**»* |
| Identidad | Restricciones `ST-001`, `ST-004` | *«Todo Estado pertenece exactamente a una **Identidad**.»* |
| Identidad | Declaración | *«…sobre una **Identidad**.»* |
| Representación | Constitución | *«…una **Representación** vigente»* |
| Representación | Formación | *«Un Estado nace cuando el Modelo admite una **Representación** distinta de la vigente.»* |
| **Trayectoria** | Restricciones `ST-005` | *«Todo Estado pertenece exactamente a una **Trayectoria**.»* |
| Identidad, Representación, Trayectoria | Dependencias | las tres declaradas |
| ← Trayectoria, Representación | Utilizado por | dos documentos |

### Aristas desde `representacion.md`

| Destino | Sección | Cita literal |
|---|---|---|
| Estado | Definición | *«…estructura formal asociada a un **Estado**»* · *«pertenece exactamente a un **Estado**»* |
| Estado | Constitución | *«la trazabilidad necesaria para reconstruir el **Estado**»* |
| Estado | Formación | *«se constituye simultáneamente con un **Estado**»* |
| Estado | Restricciones `RP-001`, `RP-003`, `RP-006` | *«Ninguna Representación existe sin **Estado**.»* |
| Estado | Declaración | *«…en un **Estado** determinado.»* |
| Identidad | Restricciones `RP-002` | *«Toda Representación pertenece exactamente a una **Identidad**.»* |
| **Relación** | Constitución | *«las **Relaciones** estructurales entre dichas Observaciones»* |
| Identidad, Estado | Dependencias | dos declaradas |

### Aristas desde `trayectoria.md`

| Destino | Sección | Cita literal |
|---|---|---|
| Estado | Definición | *«secuencia ordenada de **Estados** pertenecientes a una misma Identidad»* |
| Estado | Naturaleza | *«contiene únicamente relaciones de sucesión entre **Estados**»* |
| Estado | Constitución | *«un **Estado** inicial; cero o más **Estados** intermedios; un **Estado** vigente»* |
| Estado | Formación | *«comienza con el primer **Estado** asociado a una Identidad»* |
| Estado | Restricciones `TR-002`…`TR-007` | *«Toda Trayectoria posee exactamente un **Estado** inicial.»* |
| Identidad | Definición · Constitución · Formación · `TR-001` · Declaración | *«Toda Trayectoria pertenece exactamente a una **Identidad**.»* |
| Identidad, Estado | Dependencias | dos declaradas |
| ← Memoria, Representación | Utilizado por | dos documentos |

### Aristas desde `memoria.md`

| Destino | Sección | Cita literal |
|---|---|---|
| Estado | Definición | *«conserva íntegramente la sucesión histórica de **Estados**»* |
| Estado | Restricciones `MM-001` | *«Toda Memoria se construye exclusivamente mediante **Estados** históricos.»* |
| **Identidad** | Definición | *«…**Estados** pertenecientes a una **Identidad**.»* |
| Estado, Trayectoria | Dependencias | dos declaradas — **Identidad no figura** |
| ← ninguno | Utilizado por | solo `40_metodologia/`, `50_producto/` |

### Aristas desde `relacion.md`

| Destino | Sección | Cita |
|---|---|---|
| **ninguno de los 6** | Definición · Naturaleza · Constitución · Formación · Restricciones `RL-001`…`RL-008` · Declaración | emplea exclusivamente *«entidades del dominio»*, *«las entidades relacionadas»*, *«las entidades que conecta»* |
| — | Dependencias | `10_nucleo/axiomas.md` |
| ← Estado, Representación | Utilizado por | dos documentos declarados |

### Referencias externas al universo · *Hecho verificado*

```
00_canon/filosofia_experiencia.md:238  → 30_ontologia/estado.md
00_canon/filosofia_experiencia.md:239  → 30_ontologia/memoria.md
40_metodologia/dimensiones.md:101      → 30_ontologia/
40_metodologia/diagnostico.md:111      → 30_ontologia/observacion.md   [destino inexistente]
20_epistemologia/                      → ninguna
```

**Hecho verificado.** `20_epistemologia/` no contiene ninguna referencia a `30_ontologia/`.

---

## R-08.3 · ¿Existe algún nodo inaccesible desde la raíz?

**Sí. Tomando `Identidad` como raíz, `Relación` es inaccesible.** · *Hecho verificado.*

Recorrido desde `Identidad` siguiendo la relación inversa «es utilizado por»:

```
Identidad ← Estado ← Trayectoria
          ← Trayectoria
          ← Representación
          ← Memoria
```

Alcanzados: Identidad, Estado, Trayectoria, Representación, Memoria = **5 de 6**.

**Hecho verificado.** `Relación` no aparece: **ningún documento declara depender de `Identidad` y a la vez conducir a `Relación`**. La única arista que toca `Relación` es `Representación → Relación`, es decir, `Relación` es **fundamento de** `Representación`, no dependiente suyo.

**Hecho verificado.** `Relación` es un **segundo fundamento**, no un nodo alcanzable desde el primero.

---

## R-08.4 · Ciclos nuevos, excluido `Estado ⇄ Representación`

**Tres ciclos nuevos.** · *Hecho verificado.*

**Ciclo 1 · `Estado ⇄ Trayectoria`**
- `estado.md` `ST-005`: *«Todo Estado pertenece exactamente a una **Trayectoria**.»* · `# Dependencias` lista `trayectoria.md`
- `trayectoria.md` Definición: *«secuencia ordenada de **Estados**…»* · `# Dependencias` lista `estado.md`
- **Declarado recíprocamente en las secciones `# Dependencias` de ambos documentos.**

**Ciclo 2 · `Identidad ⇄ Estado`**
- `identidad.md` `ID-002`: *«Ningún **Estado** existe sin Identidad.»*
- `estado.md` `ST-001`: *«Todo Estado pertenece exactamente a una **Identidad**.»*
- **Asimetría:** `estado.md` declara `identidad.md` en `# Dependencias`; `identidad.md` **no** declara `estado.md`.

**Ciclo 3 · `Identidad ⇄ Trayectoria`**
- `identidad.md` `ID-006`: *«Toda nueva Identidad inicia una nueva **Trayectoria**.»*
- `trayectoria.md` `TR-001`: *«Toda Trayectoria pertenece exactamente a una **Identidad**.»*
- **Asimetría:** `trayectoria.md` declara `identidad.md` en `# Dependencias`; `identidad.md` **no** declara `trayectoria.md`.

**Hecho verificado.** El ciclo 1 es el único declarado formalmente por ambas partes en `# Dependencias`. Los ciclos 2 y 3 solo se manifiestan en `# Restricciones`.

---

## R-08.5 · Conceptos presupuestos sin declarar en `# Dependencias`

**Cuatro documentos, seis omisiones.** · *Hecho verificado.* No se valora si deberían declararlos.

| Documento | Concepto presupuesto | Sección donde se presupone |
|---|---|---|
| `identidad.md` | **Estado** | Definición · `ID-002` · `ID-005` |
| `identidad.md` | **Trayectoria** | `ID-003` · `ID-006` |
| `memoria.md` | **Identidad** | Definición |
| `representacion.md` | **Relación** | Constitución |
| `representacion.md` | **Observación** | Constitución — concepto de `20_epistemologia`, fuera de los 6 Frozen |
| `relacion.md` | *(ninguno)* | consistente |

**Hecho verificado.** `estado.md` y `trayectoria.md` son los **dos únicos documentos** cuyas `# Dependencias` cubren íntegramente los conceptos que presuponen.

---

## R-08.6 · ¿Reflejan las `# Dependencias` las relaciones conceptuales?

| Documento | Relaciones declaradas en secciones sustantivas | `# Dependencias` | Diferencia |
|---|---|---|---|
| `identidad.md` | Estado, Trayectoria | *(ninguno)* | **−2** · faltan Estado y Trayectoria |
| `estado.md` | Identidad, Representación, Trayectoria | Identidad, Representación, Trayectoria | **0** · coincide |
| `representacion.md` | Estado, Identidad, Relación, Observación | Identidad, Estado | **−2** · faltan Relación y Observación |
| `trayectoria.md` | Estado, Identidad | Identidad, Estado | **0** · coincide |
| `memoria.md` | Estado, Identidad | Estado, Trayectoria | **−1 +1** · falta Identidad; declara Trayectoria sin citarla en sección sustantiva |
| `relacion.md` | *(ninguno)* | *(ninguno)* | **0** · coincide |

### Divergencias adicionales en `# Utilizado por` · *Hecho verificado*

| Documento | Declara ser usado por | No corroborado / faltante |
|---|---|---|
| `identidad.md` | estado, trayectoria, representacion, memoria | **los 4 corroborados** |
| `estado.md` | trayectoria, representacion | **falta `memoria.md`**, que lo declara en sus `# Dependencias` |
| `trayectoria.md` | memoria, representacion | **`representacion.md` no cita `Trayectoria` en ninguna sección** · **falta `estado.md`** (`ST-005` + `# Dependencias`) |
| `representacion.md` | 40_, 50_ | **falta `estado.md`**, que la declara en `# Dependencias` |
| `memoria.md` | 40_, 50_ | correcto: ningún documento ontológico depende de Memoria |
| `relacion.md` | estado, representacion | **`estado.md` no cita `Relación` en ninguna sección** — no corroborado |

**Hecho verificado.** De 6 documentos, **3 tienen `# Dependencias` incompletas** y **4 tienen `# Utilizado por` divergentes**. Dos declaraciones de `# Utilizado por` no están corroboradas por el documento citante: `trayectoria.md → representacion.md` y `relacion.md → estado.md`.

---

## R-08.7 · ¿Existe un fundamento no declarado como tal?

**Sí: `Identidad`.** · *Hecho verificado.*

| Evidencia | Cita |
|---|---|
| `identidad.md` `# Utilizado por` | declara ser usado por **los otros cuatro documentos de composición**: estado, trayectoria, representacion, memoria |
| `estado.md` `ST-001`, `ST-004`, Constitución, Declaración | Estado presupone Identidad |
| `trayectoria.md` `TR-001`, Definición, Constitución, Formación, Declaración | Trayectoria presupone Identidad |
| `representacion.md` `RP-002` | Representación presupone Identidad |
| `memoria.md` Definición | Memoria presupone Identidad |
| `identidad.md` `# Dependencias` | **no depende de ningún concepto Frozen** |

**Hecho verificado.** `Identidad` es el único concepto presupuesto por los otros cuatro de la cadena de composición, y el único de ellos sin dependencia ontológica declarada.

**Ausencia de autoridad.** Ningún documento la declara fundamento, raíz ni origen del grafo. Su `# Declaración` la describe como *«referente permanente»*, término que ningún documento define ni equipara a raíz.

**Hecho verificado.** `Relación` presenta el mismo grado de independencia formal —`# Dependencias` sin conceptos Frozen— pero **ningún documento la presupone salvo `representacion.md`**, y su `# Declaración` la sitúa en un plano distinto: *«Las entidades definen qué existe. Las Relaciones definen cómo esas entidades permanecen conectadas.»*

---

## R-08.8 · ¿Puede reconstruirse el orden de constitución?

**Sí, parcialmente, mediante secciones `# Formación` y `# Restricciones`.** · *Hecho verificado.*

| Paso | Evidencia | Sección |
|---|---|---|
| 1 · `Identidad` precede a todo | `ID-002`: *«Ningún Estado existe sin Identidad.»* | Restricciones |
| 2 · `Identidad` origina `Trayectoria` | `ID-006`: *«Toda nueva Identidad inicia una nueva Trayectoria.»* | Restricciones |
| 3 · `Trayectoria` comienza con un `Estado` | `trayectoria.md` Formación: *«Toda Trayectoria comienza con el primer Estado asociado a una Identidad.»* · `TR-002` | Formación · Restricciones |
| 4 · `Estado` y `Representación` son **simultáneos** | `representacion.md` Formación: *«Una Representación se constituye simultáneamente con un Estado.»* | Formación |
| 5 · `Memoria` se construye **sobre** Estados ya constituidos | `MM-001`: *«Toda Memoria se construye exclusivamente mediante Estados históricos.»* | Restricciones |
| 6 · `Relación` existe **solo si** existen sus entidades | `relacion.md` Formación: *«Una Relación existe únicamente cuando existen las entidades que conecta.»* · `RL-002` | Formación · Restricciones |

**Orden derivado:**

```
Identidad  →  Trayectoria  →  { Estado ≡ Representación }  →  Memoria
                                        │
                                        └──►  Relación   (condicional, posterior a las entidades)
```

**Ausencia de autoridad** sobre un punto: `estado.md` Formación declara *«Un Estado nace cuando el Modelo admite una Representación distinta de la vigente»*, lo que sitúa a `Representación` como disparador de `Estado`, mientras `representacion.md` Formación declara simultaneidad. Ningún documento resuelve si el primer `Estado` de una `Trayectoria` requiere una `Representación` previa.

---

## Determinación

# C · El grafo posee varios posibles anclajes incompatibles

**Justificación, exclusivamente por hechos verificados:**

**No es A.** A exige raíz única documentada. **Dos documentos declaran `# Dependencias` sin ningún concepto Frozen**: `identidad.md` y `relacion.md`. Ninguno de los seis documentos designa cuál es la raíz.

**No es B.** B exige grafo conectado. Tomando `Identidad` como raíz, **`Relación` es inaccesible**: la única arista que la toca es `Representación → Relación`, que la sitúa como fundamento de `Representación`, no como dependiente de `Identidad`. Alcance desde `Identidad`: 5 de 6 nodos.

**No es D.** La evidencia es suficiente y abundante: 6 documentos `Frozen`, 41 restricciones numeradas, 6 secciones `# Dependencias` y 6 `# Utilizado por`. El problema no es escasez de evidencia sino **pluralidad de anclajes igualmente sustentados**.

**Es C.** Los dos anclajes son **incompatibles entre sí** por evidencia documental:

- `identidad.md` `# Declaración` la sitúa como *«referente permanente sobre el que ATÓMICA preserva la continuidad del conocimiento»* — plano de **continuidad temporal**.
- `relacion.md` `# Declaración` la sitúa en un plano expresamente distinto: *«Las **entidades** definen qué existe. Las **Relaciones** definen cómo esas entidades permanecen conectadas.»*

**Hecho verificado.** Ningún documento declara relación alguna entre `Identidad` y `Relación`. `identidad.md` no cita `Relación`; `relacion.md` no cita `Identidad`. Son dos fundamentos disjuntos.

**Hecho verificado adicional.** Al método le sobreviven **tres ciclos nuevos** (`Estado ⇄ Trayectoria`, `Identidad ⇄ Estado`, `Identidad ⇄ Trayectoria`), uno de ellos declarado formalmente en las `# Dependencias` de ambas partes, lo que impide un orden topológico estricto sobre el grafo de dependencias declaradas.

---

## Impacto

### Sobre R-07

**Ninguno. R-07 se confirma y se contextualiza.** · *Hecho verificado.*

La determinación **B** de R-07 —composición mutua, no ciclo ontológico— se mantiene. R-08 añade que `Estado ⇄ Representación` **no es el único ciclo**: existen tres más, y uno de ellos (`Estado ⇄ Trayectoria`) está declarado recíprocamente en `# Dependencias`, cosa que `Estado ⇄ Representación` **también** cumple. La reciprocidad en `# Dependencias` no es, por tanto, excepcional en esta capa.

### Sobre R-09

**Ninguno.** · *Hecho verificado.*

R-09 se refiere a `00_canon/vision.md:239`. R-08 aporta un dato que lo refuerza: `representacion.md` `# Utilizado por` lista únicamente `40_metodologia/` y `50_producto/` — **no lista `00_canon/`**. La dependencia que R-09 detecta sigue sin estar reconocida por el documento dependido.

### Sobre R-10

**R-10 queda definitivamente cerrado como error de método, y se reabre por otra vía.** · *Hecho verificado.*

`Relación` **no es huérfano**: posee una arista entrante corroborada bidireccionalmente —`representacion.md` `# Constitución` la cita, y `relacion.md` `# Utilizado por` lista `representacion.md`.

Pero R-08 revela un hecho distinto y verificado: `relacion.md` `# Utilizado por` declara además `30_ontologia/estado.md`, y **`estado.md` no cita `Relación` en ninguna de sus 14 secciones**. Esa declaración no está corroborada.

### Sobre futuras auditorías

**Tres hechos verificados condicionan cualquier auditoría posterior sobre `30_ontologia`:**

1. **Las secciones `# Dependencias` no son fuente fiable del grafo.** Tres de seis están incompletas respecto a lo que sus propios documentos presuponen; dos declaraciones de `# Utilizado por` carecen de corroboración.

2. **El método basado únicamente en enunciados definitorios produce falsos negativos.** A-03 clasificó `Relación` como huérfano y no detectó `Estado ⇄ Trayectoria`; ambos hechos aparecen al examinar `# Constitución` y `# Restricciones`.

3. **Existen dos planos declarados y disjuntos** —entidades y estructura, según `relacion.md` `# Declaración`— sin documento que declare su articulación. Toda auditoría que asuma un único plano producirá resultados incompletos.

---

Ningún fichero modificado. HEAD en `fe6dc5c`, árbol limpio.
