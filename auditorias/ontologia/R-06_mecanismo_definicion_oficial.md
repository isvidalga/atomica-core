Actúa como auditor arquitectónico de atomica-core.

Objetivo:

Auditar exclusivamente R-06.

No analices ningún otro hallazgo.

Reglas:

- Usa únicamente los documentos proporcionados.
- No propongas soluciones.
- No introduzcas conceptos nuevos.
- Distingue entre:
  - Hecho verificado
  - Inferencia
  - Ausencia de autoridad

Determina:

1. Si el repositorio define qué constituye una "definición oficial".

2. Si existe algún marcador documental que identifique la definición canónica de un concepto.

3. Si un mismo concepto puede tener varias definiciones sin violar ninguna norma escrita.

4. Si la afirmación de arquitectura:

"Cada concepto posee una única definición oficial"

es verificable mediante reglas objetivas.

5. Determina cuál de estas situaciones describe mejor el repositorio:

A. Existe un mecanismo normativo para identificar la definición oficial.

B. Existe una intención, pero ningún mecanismo verificable.

C. No existe ninguna autoridad que permita distinguir una definición oficial de otra.

Entrega únicamente:

- Evidencias verificadas.
- Dictamen.
- Impacto sobre R-11, R-12, R-13, R-14 y R-15.

  ---

  # AUDITORÍA R-06 · MECANISMO DE IDENTIFICACIÓN DE LA DEFINICIÓN OFICIAL

**Repositorio:** `atomica-core` · **Referencia:** tag `v1.0` = `fe6dc5c`
**Alcance:** exclusivamente R-06. Ningún fichero modificado. Ninguna solución propuesta.
**Universo examinado:** 184 ficheros de texto, sin filtro de extensión.

---

## 1 · Evidencias verificadas

### E-1 · La norma existe y está enunciada dos veces · **Hecho verificado**

```
00_canon/primeros_principios.md:121   Cada concepto posee una única definición oficial.
00_canon/arquitectura_repositorio.md:523   Cada concepto posee una única definición oficial.
```

Son las **únicas dos apariciones** de la expresión «definición oficial» en los 184 ficheros.

**Contexto normativo completo** — `00_canon/primeros_principios.md:119-123`:

> ## PP-007 · Existe una única fuente de verdad
> Cada concepto posee una única definición oficial.
> No podrán existir definiciones incompatibles entre documentos.

**Contexto normativo completo** — `00_canon/arquitectura_repositorio.md`, sección *Responsabilidad única*:

> Cada documento posee una única responsabilidad.
> Cada concepto posee una única definición oficial.
> No podrán existir documentos con responsabilidades compartidas.
> En caso de detectar duplicidades:
> - se conservará una única fuente de verdad;
> - el resto deberá integrarse o eliminarse.

### E-2 · Ningún documento define qué constituye una «definición oficial» · **Hecho verificado**

Las dos ocurrencias de E-1 **enuncian la obligación** pero **no definen el término**. No existe en el repositorio ninguna frase de la forma «Una definición oficial es…» ni equivalente.

### E-3 · Ningún documento se declara a sí mismo definición oficial · **Hecho verificado**

Búsqueda de la expresión aplicada reflexivamente en los 184 ficheros: **0 resultados**. Ninguno de los 78 documentos con estado canónico declara ser la definición oficial de concepto alguno.

### E-4 · Existe un marcador estructural, pero no es normativo · **Hecho verificado**

65 documentos contienen una sección `# Definición`:

| Capa | Documentos con `# Definición` |
|---|---|
| `70_patrones` | 54 |
| `30_ontologia` | 6 |
| `20_epistemologia` | 4 |
| `archive` | 1 |

**Cobertura:** el marcador cubre las capas 20 y 30 al 100 %. **No aparece en `00_canon`, `10_nucleo`, `40_metodologia`, `50_producto` ni `60_interfaces`** — las cinco capas donde residen los conceptos en conflicto R-11 a R-15.

### E-5 · Ninguna norma regula la sección `# Definición` · **Hecho verificado**

Búsqueda de enunciados que exijan, describan o regulen una sección de definición con alcance general: **0 resultados**.

**Ausencia de autoridad:** la presencia de `# Definición` en 65 documentos es una **regularidad observada**, no una norma citable.

### E-6 · Existe una única plantilla obligatoria, de alcance limitado · **Hecho verificado**

`70_patrones/especificacion_patron.md` — *«Este documento define la estructura obligatoria de todos los patrones organizacionales de ATÓMICA»* — enumera secciones obligatorias, entre ellas:

> # Definición
> Define el patrón desde un punto de vista metodológico.
> Debe ser independiente de cualquier empresa concreta.

**Alcance declarado:** *«todos los documentos del catálogo»*. Es la **única norma del repositorio que obliga a incluir una sección de definición**, y rige exclusivamente sobre los 52 patrones `P-NNN`.

**Hecho verificado:** ninguno de los conceptos de R-11 a R-15 está sujeto a esta plantilla.

### E-7 · `governance/decisions` asigna autoridad por concepto, en 2 de 5 casos · **Hecho verificado**

| Decisión | Estado | Asignación de autoridad |
|---|---|---|
| `D-001-estado.md` | CONGELADA v1.0 | *«La palabra **Estado**, utilizada sin calificativos dentro del Canon, designa exclusivamente el **Estado del Modelo**»*. Prohíbe expresamente usar «Estado» para Estado Sistémico, de diagnóstico, de pantalla, de componente, SQL, HTTP y de proyecto |
| `D-003-confianza.md` | CONGELADA v1.0 | *«Toda evolución de la confianza se regulará **exclusivamente** mediante el documento de Confianza»* |
| `D-005-documento-estado.md` | CONGELADA v1.0 | *«Toda referencia futura al Estado del Modelo deberá depender de ORG-STATE»* |
| `D-002-clasificacion-ifo.md` | CONGELADA v1.0 | Declara que la escala del IFO no constituye un Estado |
| `D-004-credencial.md` | CONGELADA v1.0 | Revisión pendiente; no asigna autoridad |

**Hecho verificado:** existe un mecanismo de asignación de autoridad conceptual —el registro de decisiones— **ejercido sobre dos conceptos: `Estado` y `Confianza`**.

**Hecho verificado:** `D-001` y `D-005` referencian los documentos afectados mediante rutas que no existen en `v1.0` — `ontology/estado.md`, `methodology/ifo.md`, `interface/*`, `implementation/*`.

**Ausencia de autoridad:** ningún documento declara que `governance/decisions/` sea el mecanismo general de designación de definiciones oficiales, ni establece cómo se invoca, ni obliga a que todo concepto disponga de una decisión.

---

## 2 · Respuestas a las cinco preguntas

### 1 · ¿Define el repositorio qué constituye una «definición oficial»?

**No.** · *Hecho verificado, E-1 + E-2.*

La expresión aparece dos veces, ambas en `00_canon`, ambas como obligación. Ninguna la define.

### 2 · ¿Existe algún marcador documental que identifique la definición canónica de un concepto?

**Existe un marcador de facto; no existe un marcador normativo.** · *Hecho verificado, E-4 + E-5 + E-6.*

- La sección `# Definición` funciona como marcador en 65 documentos, con cobertura del 100 % en las capas 20 y 30 y del 0 % en las capas 00, 10, 40, 50 y 60.
- Ninguna norma general la regula.
- La única norma que la obliga (`especificacion_patron.md`) rige sobre 52 documentos de `70_patrones`, ninguno de los cuales interviene en R-11 a R-15.

### 3 · ¿Puede un concepto tener varias definiciones sin violar ninguna norma escrita?

**No: viola PP-007 y la sección *Responsabilidad única*. Pero la violación no es sancionable con las reglas escritas.** · *Hecho verificado, E-1 + E-2 + E-3.*

Las dos normas prohíben la multiplicidad. Ninguna establece **cuál de las definiciones concurrentes es la oficial**. La norma declara ilícito el estado resultante sin proporcionar el criterio para restaurarlo.

**Inferencia:** un documento que aporte una segunda definición de un concepto ya definido incumple PP-007, pero ninguna regla escrita permite determinar cuál de los dos documentos es el infractor.

### 4 · ¿Es verificable objetivamente la afirmación «Cada concepto posee una única definición oficial»?

**No.** · *Hecho verificado, E-2 + E-3 + E-5.*

La verificación exigiría tres elementos, y **ninguno existe**:

| Elemento requerido | Estado |
|---|---|
| Definición del término «definición oficial» | **Ausente** (E-2) |
| Marcador que identifique el documento oficial de cada concepto | **Ausente como norma** (E-5); parcial como práctica (E-4) |
| Regla de precedencia cuando concurren varios documentos canónicos | **Ausente** — ningún documento ordena `Frozen`, `CANÓNICO`, `Canónico` y `Congelado` |

**Hecho verificado:** la afirmación es enunciable pero no comprobable con las reglas escritas del repositorio.

### 5 · ¿Qué situación describe mejor el repositorio?

# B · Existe una intención, pero ningún mecanismo verificable

**Justificación, exclusivamente documental:**

**No es A.** Un mecanismo normativo requeriría una regla general citable que designe la definición oficial. No existe (E-2, E-3, E-5). Lo que existe son dos instrumentos parciales: una plantilla que obliga a `# Definición` sobre 52 patrones (E-6) y un registro de decisiones ejercido sobre 2 conceptos (E-7). Ninguno tiene alcance general ni se declara como el mecanismo.

**No es C.** La intención está enunciada **normativamente y por duplicado** en la capa de máxima autoridad (E-1), con un principio numerado y congelado —`PP-007 · Existe una única fuente de verdad`— y una sección dedicada en el documento de arquitectura que además prescribe la conducta ante duplicidades. Además, `governance/decisions` demuestra que el mecanismo de designación **se ha ejercido realmente** sobre `Estado` y `Confianza` (E-7), y la sección `# Definición` cubre el 100 % de las capas 20 y 30 (E-4). Hay más que intención vacía: hay instrumentos, incompletos y sin norma que los generalice.

**B es la descripción exacta:** norma enunciada, instrumentos parciales existentes, ninguna regla que los convierta en criterio verificable de alcance general.

---

## 3 · Dictamen

**R-06 se confirma.** · *Hecho verificado.*

El repositorio **enuncia** la unicidad de la definición oficial en dos documentos de `00_canon`, uno de ellos como principio congelado `PP-007`, y **no aporta** ni la definición del término, ni un marcador de alcance general, ni una regla de precedencia entre documentos canónicos concurrentes.

**Consecuencia normativa:** `PP-007` y la sección *Responsabilidad única* son **normas no verificables**. Declaran ilícito un estado sin definir el criterio que permitiría detectar cuál de los documentos concurrentes lo produce.

**Consecuencia práctica:** las duplicidades detectadas en A-02 **son incumplimientos ciertos de PP-007** —el hecho es verificable— pero **su resolución no está determinada por ninguna norma escrita**. Cualquier elección entre definiciones concurrentes sería una decisión nueva, no la aplicación de una regla existente.

**Observación registrada, no resuelta:** `governance/decisions/` constituye el **único precedente documental** de designación de autoridad conceptual, ejercido con estado `CONGELADA` sobre `Estado` (D-001, D-005) y `Confianza` (D-003). Ningún documento declara que ese sea el mecanismo. **Ausencia de autoridad** sobre su alcance.

---

## 4 · Impacto sobre R-11 a R-15

| | Concepto | Definiciones | ¿Cubierto por marcador `# Definición`? | ¿Cubierto por `governance/decisions`? | Efecto de R-06 |
|---|---|---|---|---|---|
| **R-11** | Confianza | 4 | **Parcial** — solo `20_epistemologia/confianza.md:21`. Las 3 concurrentes están en capas 50 y 70, sin marcador | **Sí** — `D-003`: *«se regulará exclusivamente mediante el documento de Confianza»* | **Resoluble por precedente.** Único de los cinco con decisión congelada que designa autoridad. **Inferencia:** «el documento de Confianza» designa `20_epistemologia/confianza.md`; el propio D-003 no cita la ruta |
| **R-12** | Modelo Vivo | 13 en 3 capas | **No** — ninguno de los 6 documentos implicados tiene sección `# Definición` | **No** | **Bloqueado.** Sin marcador y sin decisión, no hay criterio escrito que discrimine entre `40_metodologia/metodologia.md:136`, `50_producto/modelo_vivo.md:17` y las 11 restantes |
| **R-13** | Evidencia | 3 en 2 capas | **Parcial** — `20_epistemologia/evidencia.md` sí; los 2 de capa 50 no | **No** | **Discriminable por E-4.** El único con marcador es el de capa 20. **Inferencia**, no norma: la práctica observada no es regla citable |
| **R-14** | Patrón | 2, misma capa | **No** — ni `naturaleza_patrones.md` ni `motor_patrones.md` tienen sección `# Definición` | **No** | **Bloqueado y agravado.** `especificacion_patron.md` obliga a `# Definición` en los 52 `P-NNN`, pero **no cubre los metadocumentos que definen qué es un Patrón**. El concepto que da nombre a la capa queda fuera de la única plantilla obligatoria del repositorio |
| **R-15** | IFO | 6 en 2 capas | **No** — `40_metodologia/ifo.md` carece de sección `# Definición` | **Parcial** — `D-002` declara qué **no** es el IFO (*«no constituye un Estado»*), sin designar su definición oficial | **Bloqueado.** `D-002` acota el concepto por negación; no asigna autoridad |

### Síntesis del impacto

**Hecho verificado:** de los cinco conflictos, **uno** (R-11) dispone de un instrumento congelado que designa autoridad; **uno** (R-13) es discriminable por la práctica del marcador; **tres** (R-12, R-14, R-15) carecen de todo criterio escrito.

**Hecho verificado:** los cinco conceptos residen total o parcialmente en las capas `00_canon`, `40_metodologia`, `50_producto`, `60_interfaces` y `70_patrones` — **las cinco capas con cobertura 0 % del marcador `# Definición`**.

**Inferencia:** la correlación es completa. El marcador cubre exactamente las dos capas (`20_epistemologia`, `30_ontologia`) donde A-02 no detectó ningún conflicto de autoridad, y ninguna de las capas donde los detectó. La sección `# Definición` discrimina donde se aplica; el problema es que ninguna norma la extiende.

**Consecuencia sobre el plan de remediación:** R-06 es prerrequisito verificado de R-11 a R-15. Sin criterio de designación, cualquier resolución de esos cinco conflictos constituiría una **decisión conceptual nueva**, no la aplicación de una norma existente — con la única excepción de R-11, que puede invocar `D-003` como precedente congelado.

---

Ningún fichero modificado. HEAD en `fe6dc5c`, árbol limpio.
