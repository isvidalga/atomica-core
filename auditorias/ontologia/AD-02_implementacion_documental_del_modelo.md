# AD-02 · IMPLEMENTACIÓN DOCUMENTAL DEL MODELO

Estado: CONGELADA

Repositorio: atomica-core

Ámbito: Núcleo

Referencia auditada:
tag v1.0 (`fe6dc5c`)

Autoridad arquitectónica:
`AD-01_fundamento_del_modelo.md`

Ubicación:

```
auditorias/ontologia/AD-02_implementacion_documental_del_modelo.md
```

Ruta declarada en el encargo: `90_auditorias/ontologia/`. Ruta real de la serie: `auditorias/ontologia/`, coincidente con R-06, R-07, R-08, R-09, R-10, RA-01, `plan_remediacion_v1.2.md` y AD-01, cuyos campos `Ubicación` declaran igualmente `90_auditorias/`. Discrepancia registrada, no resuelta.

---

# Antecedentes

`AD-01_fundamento_del_modelo.md` quedó **CONGELADA** con la determinación:

> **C · `Modelo` es un metaobjeto raíz.**
>
> Su estatus arquitectónico es el de término primitivo declarado en `10_nucleo`, presupuesto por los axiomas y no derivado de ellos.

AD-01 dejó abierta, y solo abierta, la materialización documental de esa decisión. AD-01 · § C.3, texto literal:

> La decisión fija el estatus, no la ubicación del fichero. `plan_remediacion_v1.2.md` deja esa elección a G-1. Ambas variantes son compatibles con C y difieren en coste.
> […]
> Únicamente **C.i** produce incremento cero sobre G-6. La elección entre C.i y C.ii corresponde a G-1 y no se toma aquí.

AD-01 · § Declaración final lo reitera: *«No fija la ubicación del fichero.»*

`plan_remediacion_v1.2.md` asigna a **G-1 · Cierre del vocabulario primitivo** la prioridad **1**, con `Dependencias: ninguna`, y objetivo literal:

> Dotar de fundamento documental a los siete conceptos fantasma y cerrar semánticamente el grafo.

G-1 no puede iniciarse mientras la variante permanezca abierta, porque de ella dependen los documentos afectados y el número de secciones `# Dependencias` que la ejecución toca.

Este documento resuelve exclusivamente esa elección. No reabre AD-01. No modifica la decisión C. No introduce variantes distintas de las dos que AD-01 identificó.

---

# Alternativas

Las dos variantes admitidas, en los términos exactos de AD-01 · § C.3. No se considera ninguna otra.

## C.i · Declaración dentro de `10_nucleo/axiomas.md`

`Modelo` se declara como término primitivo en una sección admitida de `10_nucleo/axiomas.md`.

AD-01 · § C.3: **0 documentos nuevos · 1 modificado (`axiomas.md`) · 0 eliminados.**
AD-01 · § C.4: complejidad **Baja**.

## C.ii · Documento propio `10_nucleo/modelo.md`

`Modelo` se declara en un documento nuevo de la capa `10_nucleo`.

AD-01 · § C.3: **1 documento nuevo · 9 modificados (`# Dependencias` de los que emplean `Modelo`) · 0 eliminados.**
AD-01 · § C.4: complejidad **Media**.

---

# Evidencia

Fuentes admitidas, en el orden de autoridad fijado: AD-01 · RA-01 · `plan_remediacion_v1.2.md` · R-10. No se ha empleado ninguna otra. No se ha reabierto el repositorio.

## E-1 · El criterio de cierre semántico nombra `axiomas.md` expresamente

R-10 · Tarea 6 establece el criterio con el que se mide el cierre semántico de un documento:

> Criterio: ¿basta `axiomas.md` + el propio documento + sus `# Dependencias` declaradas?

**Hecho verificado.** El criterio incluye `axiomas.md` en su base, sin necesidad de declaración adicional. R-10 · Observación preliminar verifica por qué: `axiomas.md` es *«única dependencia externa declarada por los 6 documentos de `30_ontologia` y los 4 de `20_epistemologia`»*.

**Consecuencia sobre C.i, *Hecho verificado*.** Una declaración alojada en `axiomas.md` entra en la base del criterio para los diez documentos **sin modificar ninguna sección `# Dependencias`**.

**Consecuencia sobre C.ii, *Hecho verificado*.** Una declaración alojada en un documento distinto de `axiomas.md` **no** entra en esa base. Para los nueve documentos que emplean `Modelo` (R-10 · Tarea 1.b), el cierre semántico exige declarar `10_nucleo/modelo.md` en sus `# Dependencias`. Es la razón por la que AD-01 · § C.3 cifra C.ii en 9 documentos modificados.

## E-2 · `H-22` es hallazgo de G-1, y su resolución depende de la variante

RA-01 · RA-01.1:

> **H-22** · Cero de diez documentos alcanzan cierre semántico con `axiomas.md` + el propio documento + sus `# Dependencias`.

RA-01 · RA-01.7 asigna **H-22** a **G-1**, junto a H-01, H-02 y H-11. `plan_remediacion_v1.2.md` · G-1 lo confirma.

R-10 · Tarea 6: *«La causa común en 9 de 10 es `Modelo`.»*

**Hecho verificado.** Bajo **C.i**, G-1 resuelve H-22 para 9 de 10 documentos con una única modificación documental. Bajo **C.ii**, G-1 **no puede resolver H-22** sin practicar las nueve modificaciones de `# Dependencias` descritas en E-1.

## E-3 · Las nueve modificaciones de C.ii son materia de G-6

`plan_remediacion_v1.2.md` · **G-6 · Coherencia de Dependencias y Utilizado por**: prioridad **7**, hallazgos H-13, H-14, H-15, `Dependencias: G-3, G-4`.

RA-01 · RA-01.9 enumera los documentos afectados por G-6: `identidad.md` · `memoria.md` · `representacion.md` · `estado.md` · `trayectoria.md` · `relacion.md` · `evidencia.md` · `observacion.md` — **ocho de los nueve** que emplean `Modelo`.

**Hecho verificado.** Bajo C.ii, la ejecución de G-1 (prioridad 1) exige operar sobre las secciones `# Dependencias` que el plan reserva a G-6 (prioridad 7).

## E-4 · Bajo C.ii el camino crítico del plan se cierra sobre sí mismo

`plan_remediacion_v1.2.md` · Camino crítico:

```
G-1 ↓ G-4 ↓ G-6
```

`G-4 · Dependencias: G-1.` · `G-6 · Dependencias: G-3, G-4.`

**Hecho verificado.** E-2 establece que, bajo C.ii, la resolución de H-22 —hallazgo de G-1— requiere la operación propia de G-6. Combinado con el camino crítico declarado, resulta `G-1 → G-4 → G-6 → G-1`.

**Hecho verificado.** El plan no admite esa alteración: *«Ninguna remediación podrá alterar dicho orden salvo mediante una nueva auditoría de consolidación.»*

**Hecho verificado.** Bajo **C.i** el camino crítico permanece acíclico y sin cambios, porque G-1 no toca ninguna sección `# Dependencias`.

## E-5 · RA-01 ya sitúa `axiomas.md` dentro del alcance de G-1

RA-01 · RA-01.9, fila **G-1**, columna *Documentos afectados*:

> Los 6 de `30_ontologia` · los 4 de `20_epistemologia` · `axiomas.md`

**Hecho verificado.** La consolidación oficial **ya incluye `axiomas.md`** entre los documentos que G-1 afecta. C.i opera exactamente sobre el conjunto que RA-01.9 declara.

**Hecho verificado.** C.ii introduce un documento —`10_nucleo/modelo.md`— **que no figura** en esa lista. Su adopción obligaría a actualizar RA-01.9.

## E-6 · La variante elegida rige para los siete primitivos, no solo para `Modelo`

R-10 · Tarea 9 verifica **siete** conceptos fantasma. RA-01 · RA-01.1 · **H-02** enumera los seis restantes: `conocimiento admitido`, `organización`/`referente organizacional`, `entidades del dominio`, `instante lógico`, `plausibilidad`, `dominio`.

`plan_remediacion_v1.2.md` · G-1: *«Dotar de fundamento documental a los **siete** conceptos fantasma.»*

AD-01 · § C.2, fila G-1: *«H-02 aplica **el mismo mecanismo** a los seis fantasmas restantes.»*

**Hecho verificado.** La elección entre C.i y C.ii no afecta a un término, sino a siete.

**Extensión verificada, R-10 · Tarea 1.b y Tarea 9** — documentos que emplean cada primitivo:

| Primitivo | Documentos que lo emplean |
|---|---|
| `Modelo` | 9 |
| `conocimiento admitido` | 4 |
| `organización` / `referente organizacional` | 3 |
| `plausibilidad` | 2 |
| `entidades del dominio` | 1 |
| `instante lógico` | 1 |
| `dominio` | 1 |
| **Total de declaraciones `# Dependencias` que exigiría C.ii** | **21** |

**Hecho verificado.** Escalado a los siete primitivos: **C.i** produce 1 documento modificado y **0** entradas nuevas de `# Dependencias`. **C.ii** produce **7 documentos nuevos** y **21** entradas nuevas de `# Dependencias`, todas ellas sobre las secciones que el plan reserva a G-6.

## E-7 · Responsabilidad única — criterio evaluado por efectos

**Ausencia de autoridad.** Ninguna de las cuatro fuentes admitidas reproduce un enunciado normativo sobre responsabilidad única de documento. El criterio se evalúa, por tanto, por sus efectos documentales verificables, no por cita normativa.

**Evidencia en contra de C.i.** RA-01 · RA-01.1 · **H-03**: *«`10_nucleo/axiomas.md`, única dependencia externa declarada por los 10 documentos, no posee ninguna de las ocho secciones admitidas.»* RA-01 · RA-01.3 lo clasifica **Causa raíz**; RA-01.6 le asigna gravedad **Muy alta**. C.i añade contenido a un documento que la consolidación declara estructuralmente defectuoso.

**Evidencia que acota el alcance de esa objeción.** `plan_remediacion_v1.2.md` · **G-2 · Conformación de axiomas.md**, objetivo literal: *«Adecuar el documento fundacional a la estructura metodológica oficial.»* G-2 existe precisamente para dotar a `axiomas.md` de las secciones admitidas. Una declaración alojada en una sección admitida de `axiomas.md` es materia comprendida en el objetivo de G-2, no ajena a él.

**Hecho verificado.** Este es el único de los nueve criterios en que C.ii resulta superior a C.i. Se registra como coste de la decisión en § Consecuencias.

## E-8 · Ninguna de las dos variantes obliga a recalcular auditorías

AD-01 · § Comprobaciones obligatorias, columna **C**:

> **¿Obliga a rehacer RA-01?** **No.** H-01 conserva categoría (Causa raíz), grupo (G-1) y aristas causales (H-01→H-11, H-01→H-22).

**Hecho verificado.** La comprobación se emitió sobre la decisión C en su conjunto, sin distinguir variante. Ni C.i ni C.ii alteran la categoría, el grupo ni las aristas causales de H-01.

**Hecho verificado.** Ninguna de las dos altera la topología que R-10 · Tarea 10 verificó —17 nodos, 38 aristas, 15 ciclos, una componente conexa, `Representación` como único puente—: en ambas, `Modelo` deja de ser fantasma sin dejar de ser raíz, conforme a AD-01 · § C.1.

**Matiz verificado.** C.ii no obliga a recalcular auditorías, pero sí a actualizar RA-01.9 por la razón de E-5. C.i no obliga a nada.

## E-9 · El acoplamiento G-1 ↔ G-2 de C.i ya está registrado y acotado

AD-01 · § Impacto sobre el plan de remediación · *Única desviación registrada*, y AD-01 · § RA-5, registran que bajo C la declaración recae sobre `10_nucleo`, capa cuyo documento `axiomas.md` es objeto único de G-2, y que *«Si G-2 se ejecuta antes que G-1, `axiomas.md` deberá reestructurarse dos veces»*.

AD-01 acota el efecto en el mismo apartado:

> **No afecta al orden de prioridad** (G-1 = 1 precede a G-2 = 3 en el orden oficial) **ni al camino crítico.**

**Hecho verificado.** El acoplamiento es de secuenciación, no de dependencia circular. El orden oficial del plan —G-1 en prioridad 1, G-2 en prioridad 3— ya lo satisface por sí mismo.

**Hecho verificado.** Bajo C.ii el acoplamiento con G-2 desaparece, porque `axiomas.md` no es tocado por G-1. Es la segunda y última ventaja verificable de C.ii, y es de menor entidad que el ciclo `G-1 → G-4 → G-6 → G-1` que C.ii introduce (E-4).

## E-10 · Cuadro comparativo sobre los nueve criterios obligatorios

| Criterio | C.i | C.ii | Evidencia |
|---|---|---|---|
| **Coherencia con AD-01** | **Plena.** Es la variante que AD-01 · § C.2 y § C.3 identifican como la de incremento cero sobre G-6, y a la que § C.4 asigna complejidad **Baja** | **Plena en la decisión, superior en coste.** AD-01 · § C.4 le asigna complejidad **Media** | AD-01 § C.2 · § C.3 · § C.4 |
| **Coherencia con RA-01** | **Plena.** Opera exactamente sobre el conjunto que RA-01.9 declara para G-1, `axiomas.md` incluido | **Exige actualizar RA-01.9**, que no contempla `10_nucleo/modelo.md` | E-5 |
| **Coherencia con `plan_remediacion_v1.2`** | **Plena.** No toca `# Dependencias`; camino crítico intacto | **Cierra el camino crítico sobre sí mismo**: `G-1 → G-4 → G-6 → G-1` | E-3 · E-4 |
| **Responsabilidad única** | **Inferior.** Añade contenido a un documento que RA-01 clasifica Causa raíz (H-03), si bien dentro del objetivo declarado de G-2 | **Superior.** Documento propio, responsabilidad aislada | E-7 |
| **Mantenibilidad** | **Superior.** Un punto único de mantenimiento; 0 entradas `# Dependencias` que sincronizar | **Inferior.** 21 entradas `# Dependencias` a sostener y corroborar, sobre secciones que RA-01 · H-13 y H-14 verifican ya divergentes | E-6 · RA-01 H-13 · H-14 |
| **Escalabilidad del vocabulario primitivo** | **Superior.** Incorporar un primitivo adicional cuesta una sección; coste constante, sin propagación | **Inferior.** Cada primitivo adicional cuesta un documento más N entradas `# Dependencias`; coste creciente | E-6 |
| **Impacto documental** | **0 nuevos · 1 modificado · 0 eliminados** (los siete primitivos) | **7 nuevos · 21 entradas `# Dependencias` en 9 documentos congelados · 0 eliminados** | AD-01 § C.3 · E-6 |
| **Necesidad de recalcular auditorías** | **Ninguna** | **Ninguna**, pero exige actualizar RA-01.9 | E-8 |
| **Necesidad de modificar el plan** | **Ninguna.** El acoplamiento G-1 ↔ G-2 lo satisface el propio orden oficial | **Sí.** El ciclo de E-4 solo se resuelve alterando dependencias, lo que el plan condiciona a una nueva consolidación | E-4 · E-9 |

**Resultado verificado: C.i es superior o igual en ocho de los nueve criterios. C.ii es superior en uno, responsabilidad única.**

---

# Decisión

# C.i · `Modelo` se declara dentro de `10_nucleo/axiomas.md`

`Modelo` se materializa documentalmente como declaración de término primitivo alojada en una sección admitida de `10_nucleo/axiomas.md`. No se crea `10_nucleo/modelo.md`. No se crea `30_ontologia/modelo.md`.

El mismo mecanismo rige para los seis primitivos restantes de H-02, conforme a AD-01 · § C.2.

**Justificación, exclusivamente por evidencia:**

**No es C.ii, por tres hechos verificados.**

1. **Rompe el camino crítico del plan.** E-2 y E-4: bajo C.ii, la resolución de H-22 —hallazgo asignado a G-1, prioridad 1— exige la operación sobre `# Dependencias` que el plan reserva a G-6, prioridad 7 y dependiente de G-4, que a su vez depende de G-1. Resulta `G-1 → G-4 → G-6 → G-1`. El plan prohíbe la alteración salvo nueva consolidación.
2. **Excede el alcance documental que RA-01 declara para G-1.** E-5: RA-01.9 enumera los documentos afectados por G-1 e incluye `axiomas.md`; no contempla ningún documento nuevo en `10_nucleo`.
3. **Su coste crece con el vocabulario.** E-6: escalado a los siete primitivos que G-1 debe fundamentar, C.ii produce 7 documentos nuevos y 21 entradas `# Dependencias` sobre nueve documentos congelados cuyas secciones de relación RA-01 ya verifica divergentes (H-13, H-14).

**Es C.i, por tres hechos verificados.**

1. **Resuelve H-22 sin editar ningún documento congelado.** E-1 y E-2: el criterio de cierre semántico de R-10 · Tarea 6 incluye `axiomas.md` en su base. Una declaración alojada allí cierra semánticamente 9 de los 10 documentos con una única modificación documental y cero entradas `# Dependencias`.
2. **Opera exactamente sobre el alcance que RA-01 ya declaró.** E-5: `axiomas.md` figura en RA-01.9 entre los documentos afectados por G-1.
3. **Es la variante que AD-01 caracterizó como de incremento cero y complejidad Baja.** E-10, fila *Coherencia con AD-01*: AD-01 · § C.2, fila G-6, y § C.3 verifican que únicamente C.i produce incremento cero sobre G-6; § C.4 le asigna complejidad **Baja**.

**Coste asumido.** E-7: C.i es inferior a C.ii en responsabilidad única. Se asume por dos razones verificadas: la declaración se aloja en una sección admitida, que es exactamente lo que el objetivo de G-2 ordena incorporar a `axiomas.md`; y ninguna de las cuatro fuentes admitidas reproduce un enunciado normativo sobre responsabilidad única que pudiera invocarse frente a las ocho ventajas restantes.

## Obligación de modificar las autoridades

| Autoridad | ¿Obliga a modificarla? | Justificación por evidencia |
|---|---|---|
| **AD-01_fundamento_del_modelo.md** | **No** | AD-01 · § C.3 declara literalmente: *«La elección entre C.i y C.ii corresponde a G-1 y no se toma aquí»*, y § Declaración final: *«No fija la ubicación del fichero.»* AD-02 ejerce una elección **dentro del espacio que AD-01 dejó abierto**, sin tocar la decisión C, su justificación ni sus riesgos aceptados. La variante elegida es además la que AD-01 · § C.3 y § C.4 ya caracterizaron nominalmente |
| **RA-01_consolidacion_hallazgos.md** | **No** | AD-01 · § Comprobaciones obligatorias verifica que C no obliga a rehacer RA-01: H-01 conserva categoría **Causa raíz**, grupo **G-1** y aristas causales **H-01→H-11** y **H-01→H-22**. C.i no altera ninguna de las tres. RA-01.7 (agrupación), RA-01.8 (priorización) y RA-01.9 (documentos afectados) permanecen exactos: `axiomas.md` ya figura en la fila G-1 de RA-01.9. Ningún documento entra ni sale de ningún grupo |
| **plan_remediacion_v1.2.md** | **No** | Grupos G-1…G-9, prioridades 1…9, camino crítico `G-1 → G-4 → G-6`, dependencias paralelas `G-3 → G-7 → G-8`, grupos independientes, tabla *Auditorías cubiertas* y *Regla de ejecución* permanecen inalterados. C.i no toca ninguna sección `# Dependencias` (E-1), por lo que no interfiere con G-6. El único acoplamiento —G-1 ↔ G-2— es de secuenciación y queda satisfecho por el propio orden oficial del plan, que sitúa G-1 en prioridad 1 y G-2 en prioridad 3 (E-9) |

---

# Consecuencias

1. **G-1 queda desbloqueado.** Su composición (H-01 · H-02 · H-11 · H-22), su prioridad (1) y su ausencia de dependencias permanecen tal como el plan las declara. Su alcance documental es el que RA-01.9 enumera.

2. **La declaración de `Modelo` se aloja en `10_nucleo/axiomas.md`.** No se crea documento alguno para `Modelo` en ninguna capa. Queda expresamente descartada la creación de `30_ontologia/modelo.md`, incompatible con la decisión C de AD-01, y la de `10_nucleo/modelo.md`, descartada por esta decisión.

3. **Ninguna sección `# Dependencias` se modifica por causa de `Modelo`.** Los diez documentos de `30_ontologia` y `20_epistemologia` conservan intacta su única dependencia externa declarada, `10_nucleo/axiomas.md` (R-10 · Observación preliminar).

4. **H-22 queda resoluble para 9 de 10 documentos.** R-10 · Tarea 6 verifica que la causa común es `Modelo`; el criterio de cierre incluye `axiomas.md` en su base.

5. **Los seis primitivos restantes de H-02 siguen el mismo mecanismo**, conforme a AD-01 · § C.2. Esta decisión fija el mecanismo, no el contenido de sus declaraciones ni su estatus individual.

6. **`axiomas.md` asume una segunda responsabilidad documental.** Coste aceptado, registrado en E-7. RA-01 clasifica **H-03** como Causa raíz de gravedad Muy alta y lo asigna a **G-2**, cuyo objetivo declarado es adecuar el documento a la estructura metodológica oficial. La declaración de primitivos se aloja en secciones admitidas, dentro de ese objetivo.

7. **Se confirma el acoplamiento de secuenciación G-1 ↔ G-2** registrado en AD-01 · § RA-5. Si G-2 se ejecutase antes que G-1, `axiomas.md` se reestructuraría dos veces. El orden oficial del plan —G-1 en prioridad 1, G-2 en prioridad 3— evita esa situación sin necesidad de modificar el plan.

8. **La topología verificada por R-10 permanece descriptivamente válida.** `Modelo` deja de ser concepto fantasma sin dejar de ser raíz del grafo: no adquiere sección `# Dependencias` propia ni arista saliente.

## Cuestiones que esta decisión no resuelve

Se declaran expresamente para que no se den por resueltas:

- La **redacción** de la declaración de `Modelo`.
- La **denominación** de la sección admitida que la aloja.
- La **cardinalidad** `Modelo` ↔ `Identidad`, que AD-01 · § RA-4 declara *indeterminable con la evidencia disponible*.
- El **estatus individual** de los seis primitivos restantes de H-02.
- Los hallazgos H-03, H-04 y los demás del plan, que conservan íntegros su grupo y su prioridad.

---

# Declaración

**La decisión arquitectónica C de AD-01 se materializa mediante la variante C.i: `Modelo` se declara como término primitivo dentro de una sección admitida de `10_nucleo/axiomas.md`.**

La decisión es **única** y no deja variantes abiertas.

No modifica `AD-01_fundamento_del_modelo.md`. No modifica `RA-01_consolidacion_hallazgos.md`. No modifica `plan_remediacion_v1.2.md`. Las tres permanecen vigentes e inalteradas, por las razones acreditadas en § Decisión.

No autoriza modificación alguna del repositorio. La ejecución material corresponde íntegramente a **G-1 · Cierre del vocabulario primitivo**, prioridad 1 del plan vigente.

Esta decisión queda **CONGELADA**. Toda modificación requerirá una nueva decisión arquitectónica que la sustituya íntegramente.

---

```
Referencia auditada:  fe6dc5cc9fb566131f1afaf0e34b61fe5dd6092b  (= tag v1.0)
Autoridades:          AD-01 · RA-01 · plan_remediacion_v1.2 · R-10
Repositorio reabierto: no
Documentos canónicos modificados: ninguno
```
