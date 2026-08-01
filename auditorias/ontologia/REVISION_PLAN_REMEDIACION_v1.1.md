# Revisión del Plan de Remediación · v1.1

Estado: PLAN

Versión: 1.0

Ubicación:

```
auditorias/ontologia/REVISION_PLAN_REMEDIACION_v1.1.md
```

---

# Objeto

Este documento audita exclusivamente el contenido de:

```
auditorias/ontologia/PLAN_REMEDIACION_v1.1.md
```

No audita el repositorio.

No audita la ontología.

No modifica documentos canónicos.

Su finalidad es verificar que el plan de remediación constituye un backlog mínimo, completo, coherente y ejecutable.

---

# Alcance

Documento auditado:

```
auditorias/ontologia/PLAN_REMEDIACION_v1.1.md
```

Auditorías de referencia:

- R-06
- R-07
- R-08
- R-09
- R-10

---

# Objetivos

Verificar que:

- todas las remediaciones son necesarias;
- ninguna remediación está duplicada;
- ninguna remediación puede absorberse por otra;
- el orden de ejecución es correcto;
- las dependencias son suficientes;
- no existen remediaciones huérfanas;
- el backlog representa el trabajo mínimo necesario para publicar v1.1.

---

# Criterios de revisión

## CR-01 · Necesidad

Toda remediación deberá corresponder a una no conformidad verificada por una o varias auditorías.

---

## CR-02 · Unicidad

No podrán existir dos remediaciones cuyo resultado final sea equivalente.

---

## CR-03 · Absorción

Si una remediación elimina completamente la necesidad de otra, ambas deberán fusionarse.

---

## CR-04 · Dependencias

Toda dependencia deberá estar justificada documentalmente.

No se admitirán dependencias implícitas.

---

## CR-05 · Orden

El orden de ejecución deberá minimizar retrabajos.

---

## CR-06 · Cobertura

Toda no conformidad detectada por R-06–R-10 deberá quedar cubierta por al menos una remediación.

---

## CR-07 · Minimalidad

No deberá existir ninguna remediación cuya eliminación no altere el resultado final del plan.

---

## Resultado esperado

La revisión podrá concluir únicamente una de las siguientes determinaciones:

### A · El plan es mínimo y completo

No se requieren modificaciones.

---

### B · Existen remediaciones redundantes

El plan deberá simplificarse.

---

### C · Existen remediaciones ausentes

El plan deberá ampliarse.

---

### D · El orden de ejecución es incorrecto

Será necesario reconstruir la secuencia de implementación.

---

# Restricciones

La revisión no implementa remediaciones.

La revisión no modifica documentos del repositorio.

La revisión no modifica auditorías.

La revisión no redefine conceptos.

La revisión únicamente evalúa la calidad del plan de remediación.

---

# Resultado de la revisión

Documento revisado: `auditorias/ontologia/PLAN_REMEDIACION_v1.1.md`

Remediaciones examinadas: **16** (RM-01 … RM-16)

Nota de independencia: el plan revisado fue redactado en el commit `5ad7cc4`
por el mismo autor que ejecuta esta revisión. La revisión se apoya
exclusivamente en hechos verificables contra R-06–R-10 y contra el propio
texto del plan.

---

## CR-01 · Necesidad

**15 de 16 remediaciones corresponden a una no conformidad verificada.**

| RM | No conformidad de origen | Verificada en |
|---|---|---|
| RM-01 | `Modelo`: 46 usos, 0 definiciones | R-10 · Tareas 1.b y 9 |
| RM-02 | 6 conceptos fantasma restantes | R-10 · Tarea 9 |
| RM-03 | `axiomas.md` sin secciones admitidas | R-10 · Observación preliminar |
| RM-04 | `# Consecuencias` omite 4 conceptos | R-10 · Tarea 9 |
| RM-05 | «definición oficial» no definida | R-06 · E-1, E-2, E-3 |
| RM-06 | 4 vocabularios de estado sin precedencia | R-06 · pregunta 4 |
| RM-07 | 10 tipos de relación sin responsable | R-10 · Tarea 2 |
| RM-08 | 2 anclajes disjuntos; `Relación` inaccesible | R-08 · R-08.1, R-08.3 |
| RM-09 | 15 ciclos sin norma intracapa | R-10 · Tarea 4 · R-08 · R-08.4 |
| RM-10 | 6 dependencias ocultas | R-10 · Tarea 7 · R-08 · R-08.5 |
| RM-11 | 2 declaraciones no corroboradas + 3 omisiones | R-08 · R-08.6 |
| RM-12 | `observacion.md` sin `# Utilizado por` | R-10 · Tarea 7 |
| RM-13 | «Puede depender de: Nada» vs `# Dependencias` | R-09 · R-09.4, R-09.7 |
| RM-14 | 3 bloques de rutas inexistentes | R-09 · R-09.1 · R-06 · E-7 |
| RM-15 | `primeros_principios.md` sin `# Dependencias` | R-09 · R-09.4, R-09.5 |
| **RM-16** | **capitalización de `estado.md:23`** | **R-07 · §3.1, §6** |

### Incumplimiento CR-01 · RM-16

**Hecho verificado.** R-07 clasifica la capitalización como *«hecho residual
verificable»* y añade textualmente: *«**Ausencia de autoridad** sobre si la
capitalización distingue entidad de término común.»*

**Hecho verificado.** R-07 · §6 declara que la gravedad asignada a R-07
*«carece de sustento documental: no existe norma que prohíba la referencia
mutua intracapa»*, y resuelve el asunto mediante la determinación **B**.

**Consecuencia.** RM-16 no corresponde a una no conformidad verificada contra
ninguna norma escrita: no existe convención de capitalización que incumplir.
**RM-16 incumple CR-01.**

---

## CR-02 · Unicidad

**Ninguna pareja produce un resultado final equivalente.** Los 16 criterios de
aceptación son distintos entre sí y verificables por separado.

**Cumple.**

---

## CR-03 · Absorción

**Tres casos de absorción verificados.**

### Caso 1 · RM-06 queda absorbida por RM-05

**Hecho verificado.** El criterio de aceptación 3 de RM-05 declara:
*«`PP-007` pasa a ser verificable mediante un procedimiento reproducible.»*

**Hecho verificado.** R-06 · pregunta 4 establece que la verificación de
`PP-007` exige **tres elementos**: definición del término, marcador que
identifique el documento oficial, y **regla de precedencia cuando concurren
varios documentos canónicos**. El tercero es el objeto de RM-06.

**Consecuencia.** El criterio de aceptación 3 de RM-05 **es inalcanzable sin
RM-06**. RM-05 no puede declararse completa mientras RM-06 esté pendiente:
ambas producen conjuntamente un único resultado —el mecanismo de definición
oficial— y **deben fusionarse** conforme a CR-03.

### Caso 2 · RM-04 queda absorbida por RM-03

**Hecho verificado.** Ambas afectan exclusivamente a `10_nucleo/axiomas.md`.
RM-03 reestructura el documento conforme a las secciones admitidas; RM-04
completa una de sus secciones. RM-04 declara `Dependencias: RM-03`.

**Hecho verificado.** Ningún criterio de aceptación de RM-04 es verificable
antes de completar RM-03, y ninguno de RM-03 queda invalidado por RM-04.

**Consecuencia.** Dos remediaciones sobre el mismo documento, con dependencia
lineal y sin resultado intermedio verificable de forma independiente.
**Deben fusionarse** conforme a CR-03.

### Caso 3 · RM-12 queda absorbida por RM-11

**Hecho verificado.** Ambas corrigen la misma sección, `# Utilizado por`, con
la misma operación. RM-11 afecta a 4 documentos de `30_ontologia`; RM-12 a 1
de `20_epistemologia`. RM-12 declara `Dependencias: RM-11`.

**Hecho verificado.** El criterio de aceptación 1 de RM-12 —*«Los 10 documentos
poseen `# Utilizado por`»*— **incluye los 4 documentos de RM-11**, por lo que
no puede verificarse sin ella.

**Consecuencia.** El criterio de RM-12 engloba el ámbito de RM-11.
**Deben fusionarse** conforme a CR-03.

### Caso examinado y descartado · RM-10 y RM-11

**Hecho verificado.** RM-10 corrige `# Dependencias`; RM-11 corrige
`# Utilizado por`. Son secciones distintas y la corrección de una no produce
automáticamente la de la otra.

**No procede la fusión:** CR-03 exige que una elimine *completamente* la
necesidad de la otra, condición que no se cumple.

---

## CR-04 · Dependencias

**Cuatro dependencias no justificadas documentalmente.**

| RM | Dependencia declarada | Verificación |
|---|---|---|
| **RM-07** | `RM-02 — entidades del dominio condiciona el alcance de relacion.md` | **Parcialmente injustificada.** De los 10 tipos de relación inventariados en R-10 · Tarea 2, solo *conectar* depende de `entidades del dominio`. Los nueve restantes —*pertenece a* (14 instancias), *conserva* (7), *modifica* (7), *está compuesto por* (4), *se forma* (4), *genera* (3), *procede de* (3), *evalúa* (3), *sucede a* (3)— son independientes de RM-02 |
| **RM-09** | `RM-08 — la licitud de un ciclo depende del anclaje declarado` | **Implícita.** Ningún documento de R-07, R-08 ni R-10 establece que la norma sobre referencia mutua intracapa requiera conocer la raíz del grafo. R-07 · §5 declara: *«Ausencia de autoridad. Ningún documento del repositorio prohíbe la referencia mutua entre entidades de la misma capa»* — enunciado independiente del anclaje |
| **RM-12** | `RM-11` | **Débil.** La dependencia es de conveniencia, no de necesidad: añadir una sección ausente en `observacion.md` no requiere haber corregido antes los 4 documentos de `30_ontologia`. Queda resuelta por la fusión del Caso 3 |
| **RM-16** | `RM-05, RM-06` | **No justificada.** RM-05 y RM-06 establecen el mecanismo de definición oficial y el vocabulario de estados. Ninguno de los dos aborda convenciones de capitalización. R-07 · §6 declara la ausencia de autoridad sobre capitalización como cuestión abierta e independiente |

**Dependencias verificadas como correctas:** RM-02→RM-01, RM-04→RM-03,
RM-06→RM-05, RM-08→RM-01+RM-02, RM-10→RM-06+RM-09, RM-11→RM-10,
RM-13→RM-05+RM-06, RM-14→RM-13, RM-15→RM-13+RM-14.

**Incumple CR-04** en 4 de 15 dependencias declaradas.

---

## CR-05 · Orden

**Dos remediaciones situadas más tarde de lo que sus dependencias reales exigen.**

**Hecho verificado.** RM-07 figura en la fase F4. Nueve de los diez tipos de
relación que remedia no dependen de RM-02. Su ubicación real mínima es F2.

**Hecho verificado.** RM-16 figura en F6 declarando dependencias de F1 y F2.
Al ser injustificadas (CR-04), no existe prerrequisito que la sitúe en F6.

**Hecho verificado.** El resto de la secuencia respeta la regla declarada:
ningún documento se modifica mientras exista otro del que dependa. Las tres
remediaciones que rompen el congelado —RM-10, RM-11, RM-12— se agrupan en una
única fase, F5.

**Camino crítico declarado:** `RM-01 → RM-02 → RM-08 → RM-09 → RM-10 → RM-11 →
RM-12`. **Verificado como correcto** en su tramo `RM-01 → RM-02 → RM-08`.
El tramo `RM-08 → RM-09` descansa sobre la dependencia implícita señalada en
CR-04.

**Incumple CR-05** de forma menor: no genera retrabajo, solo retrasa
innecesariamente dos remediaciones.

---

## CR-06 · Cobertura

**Una no conformidad verificada por R-08 no está cubierta por ninguna remediación.**

### Ausencia verificada

**R-08 · R-08.8**, línea 281:

> **Ausencia de autoridad** sobre un punto: `estado.md` Formación declara
> *«Un Estado nace cuando el Modelo admite una Representación distinta de la
> vigente»*, lo que sitúa a `Representación` como disparador de `Estado`,
> mientras `representacion.md` Formación declara simultaneidad. **Ningún
> documento resuelve si el primer `Estado` de una `Trayectoria` requiere una
> `Representación` previa.**

**Hecho verificado.** Búsqueda de `primer Estado` y `orden de constitución` en
`PLAN_REMEDIACION_v1.1.md`: **0 resultados**. Ninguna de las 16 remediaciones
la aborda.

**Hecho verificado.** El plan sí cubre otras ausencias de autoridad de la misma
naturaleza: RM-07 (tipos de relación), RM-09 (ciclos intracapa), RM-08
(articulación de planos). La omisión es **inconsistente con el propio criterio
de cobertura del plan**.

### Resto de la cobertura

**Verificado como completo.** Las no conformidades de R-06, R-07, R-09 y R-10
quedan cubiertas. La tabla de trazabilidad del plan es correcta: las cinco
auditorías tienen al menos una remediación derivada.

**Límite de alcance registrado, no computado como ausencia.** La sección
*Impacto* de R-06 declara bloqueadas las remediaciones R-11 a R-15 —los cinco
conflictos de autoridad sobre Confianza, Modelo Vivo, Evidencia, Patrón e
IFO—. Proceden de la auditoría A-02, ajena a la serie R-06–R-10, y quedan
fuera del alcance declarado del plan.

**Incumple CR-06.**

---

## CR-07 · Minimalidad

**Una remediación cuya eliminación no altera el resultado final del plan.**

**Hecho verificado.** RM-16 remedia la capitalización de `estado.md:23`.
R-07 · §3.1 establece que la arista `Estado → Representación` **sí existe**,
documentada en `# Constitución` (`estado.md:56`) y `# Formación`
(`estado.md:64`), con los términos capitalizados e inequívocos.

**Consecuencia.** El grafo conceptual es idéntico con RM-16 y sin ella: la
arista está probada por otras dos secciones admitidas. Su eliminación no altera
ningún criterio de aceptación de las otras 15 remediaciones.

**Verificación en sentido inverso.** Las 15 restantes superan CR-07: la
eliminación de cualquiera deja sin cubrir al menos una no conformidad
verificada.

**Incumple CR-07** en 1 de 16.

---

# Síntesis de la revisión

| Criterio | Resultado | Alcance |
|---|---|---|
| CR-01 · Necesidad | **Incumple** | RM-16 |
| CR-02 · Unicidad | **Cumple** | — |
| CR-03 · Absorción | **Incumple** | RM-05+RM-06 · RM-03+RM-04 · RM-11+RM-12 |
| CR-04 · Dependencias | **Incumple** | RM-07 · RM-09 · RM-12 · RM-16 |
| CR-05 · Orden | **Incumple (menor)** | RM-07 · RM-16 |
| CR-06 · Cobertura | **Incumple** | R-08.8 sin remediación |
| CR-07 · Minimalidad | **Incumple** | RM-16 |

## Remediaciones redundantes

Ninguna. **CR-02 se cumple**: no existen dos remediaciones con resultado
equivalente.

## Remediaciones fusionables

- **RM-05 + RM-06** → mecanismo de definición oficial completo
- **RM-03 + RM-04** → `axiomas.md` conforme a las secciones admitidas
- **RM-11 + RM-12** → normalización de `# Utilizado por`

## Remediaciones innecesarias

- **RM-16** · incumple CR-01, CR-04 y CR-07 simultáneamente

## Remediaciones ausentes

- **Una** · orden de constitución del primer `Estado` de una `Trayectoria`
  (R-08 · R-08.8)

## Dependencias incorrectas

- **RM-07 → RM-02** · parcialmente injustificada (1 de 10 tipos de relación)
- **RM-09 → RM-08** · implícita, sin sustento en R-07, R-08 ni R-10
- **RM-12 → RM-11** · débil; se disuelve con la fusión propuesta
- **RM-16 → RM-05, RM-06** · no justificada

## Oportunidades de simplificación

Aplicando las tres fusiones, retirando RM-16 e incorporando la remediación
ausente, el backlog pasaría de **16 a 13** entradas, con **4 dependencias
menos** y **dos fases** susceptibles de ejecutarse antes.

---

# Determinación

## C · Existen remediaciones ausentes

**El plan deberá ampliarse.**

### Justificación

**Hecho verificado.** El plan omite una no conformidad expresamente verificada
por R-08 · R-08.8: la ausencia de autoridad sobre si el primer `Estado` de una
`Trayectoria` requiere una `Representación` previa. Búsqueda en las 16
remediaciones: **0 coincidencias**.

**Por qué C y no B.** Existen tres casos de absorción (CR-03) y una remediación
innecesaria (CR-07), lo que sustentaría **B**. Pero **B es reversible sin
consecuencias**: un backlog con tres fusiones pendientes y una entrada
sobrante permite publicar v1.1 con trabajo redundante. **C no lo permite**: una
no conformidad sin remediación deja v1.1 con un defecto verificado y sin
tratar. La minimalidad es una propiedad deseable del plan; la cobertura es
condición de validez de la versión.

**Por qué C y no D.** Se han verificado dos ubicaciones subóptimas (RM-07,
RM-16) y cuatro dependencias mal justificadas. Ninguna genera retrabajo: la
regla declarada —ningún documento se modifica mientras exista otro del que
dependa— se respeta en las quince remediaciones restantes, y el camino crítico
es correcto en su tramo determinante `RM-01 → RM-02 → RM-08`. La secuencia no
requiere reconstrucción, solo dos adelantos.

**Por qué no A.** Cinco de los siete criterios resultan incumplidos.

### Condición de cierre

La determinación pasará a **A** cuando concurran:

1. Se incorpore la remediación ausente (R-08 · R-08.8).
2. Se apliquen las tres fusiones de CR-03.
3. Se retire RM-16 o se documente la norma de capitalización que la convierta
   en no conformidad.
4. Se justifiquen o supriman las cuatro dependencias de CR-04.

Backlog resultante estimado: **13 remediaciones**.

---

# Trazabilidad de la revisión

| Criterio | Evidencia empleada |
|---|---|
| CR-01 | R-07 §3.1, §6 · R-06 E-1…E-7 · R-08 R-08.1…R-08.6 · R-09 R-09.1…R-09.7 · R-10 Tareas 1–10 |
| CR-03 | R-06 pregunta 4 · criterios de aceptación de RM-03, RM-04, RM-05, RM-06, RM-11, RM-12 |
| CR-04 | R-07 §5, §6 · R-10 Tarea 2 |
| CR-06 | R-08 R-08.8, línea 281 · búsqueda literal en el plan |
| CR-07 | R-07 §3.1 · `estado.md:56` y `estado.md:64` |

Ningún documento canónico modificado. Ninguna auditoría alterada. Ninguna
remediación implementada.
