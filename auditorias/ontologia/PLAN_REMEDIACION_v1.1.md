# Plan de Remediación · v1.1

Estado: PLAN

Versión: 1.0

Ubicación:

```
90_auditorias/PLAN_REMEDIACION_v1.1.md
```

---

# Objeto

Este documento transforma las conclusiones de las auditorías R-06 a R-10 en un plan de trabajo.

No contiene implementaciones.

No modifica documentos canónicos.

No redefine conceptos.

Su única finalidad es planificar las correcciones necesarias antes de publicar la versión v1.1 del repositorio.

---

# Alcance

Auditorías incluidas:

- R-06 · Mecanismo de definición oficial
- R-07 · Ciclo Estado ⇄ Representación
- R-08 · Anclaje del grafo ontológico
- R-09 · Dependencia Canon ↔ Ontología
- R-10 · Cierre del grafo ontológico

Referencia auditada:

```
tag v1.0
commit fe6dc5c
```

---

# Estado

Pendiente de planificación.

No existen todavía remediaciones aprobadas.

---

# Objetivo

Generar un plan completo de remediación que:

- identifique todas las no conformidades;
- determine las acciones necesarias;
- establezca un orden de ejecución;
- permita verificar objetivamente la resolución de cada incidencia.

---

# Resultado esperado

Al finalizar este plan deberá ser posible:

- implementar las remediaciones;
- publicar una nueva versión del repositorio;
- ejecutar una nueva serie completa de auditorías sobre dicha versión.

---

# Restricciones

Este documento no autoriza modificaciones del repositorio.

Toda implementación deberá realizarse mediante commits independientes.

Las auditorías originales permanecerán inmutables.

Toda remediación deberá poder trazarse hasta una o varias auditorías de origen.

---

# Backlog de remediación

Estado del backlog: COMPLETO

Remediaciones identificadas: 16

Referencia auditada: `tag v1.0` · `commit fe6dc5c`

Toda remediación es trazable a una o varias auditorías de origen. Ninguna
introduce conceptos nuevos. Ninguna ha sido implementada.

---

## RM-01 · Definir el concepto `Modelo`

| Campo | Valor |
|---|---|
| Auditoría de origen | R-10 |
| Prioridad | 1 |
| Riesgo | Muy alto |

**Problema verificado.** El término `Modelo` se emplea 46 veces en secciones
admitidas de 9 de los 10 documentos ontológicos y epistemológicos, y no posee
documento propio ni enunciado definitorio en ninguno de los 184 ficheros de
texto del repositorio.

**Evidencia.** R-10 · Tarea 1.b y Tarea 9. Recuento por documento:
`estado.md` 8 · `representacion.md` 8 · `memoria.md` 7 · `trayectoria.md` 6 ·
`hipotesis.md` 5 · `confianza.md` 4 · `evidencia.md` 4 · `relacion.md` 3 ·
`identidad.md` 1 · `observacion.md` 0.

**Documentos afectados.** Los 6 de `30_ontologia/` · `20_epistemologia/confianza.md`,
`evidencia.md`, `hipotesis.md` · `10_nucleo/axiomas.md` (A1, A2, A8, A11, A14).

**Acción necesaria.** Dotar a `Modelo` de documento propio con las secciones
admitidas, o declarar formalmente su condición de término primitivo no
definible dentro de una sección admitida de `10_nucleo/axiomas.md`.

**Dependencias.** Ninguna. Es la única remediación sin prerrequisito.

**Criterios de aceptación.**
1. Existe exactamente un enunciado definitorio de `Modelo`, o una declaración
   formal de primitividad.
2. Los 9 documentos que lo emplean resuelven el término contra esa única fuente.
3. `grep -rE "^(Un|El) Modelo (es|constituye)"` devuelve exactamente 1 resultado,
   o existe la declaración de primitividad citable por documento y sección.

---

## RM-02 · Definir los seis conceptos fantasma restantes

| Campo | Valor |
|---|---|
| Auditoría de origen | R-10 |
| Prioridad | 1 |
| Riesgo | Alto |

**Problema verificado.** Seis conceptos se emplean con significado ontológico
en secciones admitidas sin poseer documento propio.

**Evidencia.** R-10 · Tarea 9.

| Concepto | Documentos que lo emplean |
|---|---|
| `conocimiento admitido` | `estado.md` · `representacion.md` · `trayectoria.md` · `memoria.md` |
| `organización` / `referente organizacional` | `identidad.md` `#Definición` · `observacion.md` `#Definición` y `O-001` · `representacion.md` `#Naturaleza` |
| `entidades del dominio` | `relacion.md` `#Definición`, `#Constitución`, `#Formación`, `RL-001`…`RL-005` |
| `instante lógico` | `estado.md` `#Definición` y `#Constitución` |
| `plausibilidad` | `hipotesis.md` `H-006` · `evidencia.md` |
| `dominio` | `relacion.md` `#Naturaleza` |

**Documentos afectados.** `30_ontologia/identidad.md`, `estado.md`,
`representacion.md`, `trayectoria.md`, `memoria.md`, `relacion.md` ·
`20_epistemologia/observacion.md`, `hipotesis.md`, `evidencia.md`.

**Acción necesaria.** Para cada concepto: documento propio con secciones
admitidas, o declaración formal de primitividad.

**Dependencias.** RM-01 — `Modelo` fija el criterio de tratamiento de los
términos primitivos.

**Criterios de aceptación.**
1. Cada uno de los seis posee definición única o declaración de primitividad.
2. `relacion.md` resuelve `entidades del dominio` contra una fuente citable.
3. Ningún concepto empleado en sección admitida carece de fuente.

---

## RM-03 · Reestructurar `axiomas.md` conforme a las secciones admitidas

| Campo | Valor |
|---|---|
| Auditoría de origen | R-10 |
| Prioridad | 1 |
| Riesgo | Muy alto |

**Problema verificado.** `10_nucleo/axiomas.md` es la única dependencia externa
declarada por los 10 documentos de `30_ontologia` y `20_epistemologia`, y **no
posee ninguna de las ocho secciones admitidas**. Sus encabezados son
`Propósito`, `A1`…`A15`, `Consecuencias`, `Documentos dependientes`.

**Evidencia.** R-10 · Observación preliminar de método. Bajo el método de
auditoría, el documento fundacional no aporta ninguna relación computable.

**Documentos afectados.** `10_nucleo/axiomas.md` · los 10 que lo declaran en
`# Dependencias`.

**Acción necesaria.** Dotar a `axiomas.md` de las secciones admitidas
aplicables, sin alterar el contenido normativo de A1–A15.

**Dependencias.** Ninguna. Puede ejecutarse en paralelo a RM-01.

**Criterios de aceptación.**
1. `axiomas.md` posee al menos `# Restricciones`, `# Dependencias` y
   `# Utilizado por`.
2. A1–A15 conservan su texto íntegro.
3. Una auditoría por secciones admitidas extrae relaciones del documento.

---

## RM-04 · Completar `# Consecuencias` de `axiomas.md`

| Campo | Valor |
|---|---|
| Auditoría de origen | R-10 |
| Prioridad | 2 |
| Riesgo | Medio |

**Problema verificado.** `10_nucleo/axiomas.md` `# Consecuencias` declara:
*«De estos axiomas derivan: Identidad, Estado, Trayectoria, Representación,
Hipótesis, Evidencia.»* Omite cuatro de los diez conceptos definidos:
**Memoria, Relación, Observación y Confianza**.

**Evidencia.** R-10 · Tarea 9.

**Documentos afectados.** `10_nucleo/axiomas.md` ·
`30_ontologia/memoria.md`, `relacion.md` · `20_epistemologia/observacion.md`,
`confianza.md`.

**Acción necesaria.** Completar la enumeración, o declarar por qué los cuatro
conceptos no derivan de los axiomas pese a declararlos como dependencia.

**Dependencias.** RM-03.

**Criterios de aceptación.**
1. Los 10 conceptos definidos aparecen en `# Consecuencias`, o consta la
   justificación documental de su exclusión.
2. Ningún documento declara `axiomas.md` en `# Dependencias` sin figurar en la
   relación correspondiente.

---

## RM-05 · Establecer el mecanismo de definición oficial

| Campo | Valor |
|---|---|
| Auditoría de origen | R-06 |
| Prioridad | 1 |
| Riesgo | Alto |

**Problema verificado.** `PP-007` y la sección *Responsabilidad única* de
`arquitectura_repositorio.md` exigen *«Cada concepto posee una única definición
oficial»*. Ningún documento define qué constituye una definición oficial,
ningún documento se declara a sí mismo como tal, y ninguna norma regula el
marcador `# Definición`, presente en 65 documentos con cobertura del 100 % en
`20_epistemologia` y `30_ontologia` y del 0 % en `00_canon`, `10_nucleo`,
`40_metodologia`, `50_producto` y `60_interfaces`.

**Evidencia.** R-06 · E-1 a E-7. Determinación **B**: intención sin mecanismo
verificable.

**Documentos afectados.** `00_canon/primeros_principios.md` (`PP-007`) ·
`00_canon/arquitectura_repositorio.md` (*Responsabilidad única*).

**Acción necesaria.** Declarar el criterio por el que un documento constituye
la definición oficial de un concepto.

**Dependencias.** Ninguna.

**Criterios de aceptación.**
1. Existe una norma citable por documento y sección que define el término.
2. La norma es aplicable a las ocho capas.
3. `PP-007` pasa a ser verificable mediante un procedimiento reproducible.

---

## RM-06 · Declarar el vocabulario de estados y su precedencia

| Campo | Valor |
|---|---|
| Auditoría de origen | R-06 |
| Prioridad | 1 |
| Riesgo | Medio |

**Problema verificado.** Coexisten cuatro vocabularios de estado —`CANÓNICO`,
`Canónico`, `Frozen`, `Congelado`— en 78 documentos. Ningún documento los
enumera ni establece precedencia entre ellos.

**Evidencia.** R-06 · pregunta 4, tabla de elementos requeridos ausentes.

**Documentos afectados.** Los 78 documentos con estado declarado.

**Acción necesaria.** Declarar la enumeración de estados válidos y la regla de
precedencia aplicable cuando concurren documentos canónicos.

**Dependencias.** RM-05.

**Criterios de aceptación.**
1. Existe una enumeración citable de estados válidos.
2. Existe una regla de precedencia entre ellos.
3. Ningún documento emplea un valor fuera de la enumeración.

---

## RM-07 · Declarar el documento responsable de los tipos de relación

| Campo | Valor |
|---|---|
| Auditoría de origen | R-10 |
| Prioridad | 2 |
| Riesgo | Medio |

**Problema verificado.** Diez tipos de relación se emplean normativamente sin
documento responsable: *pertenece a* (14 instancias), *conserva* (7),
*modifica* (7), *está compuesto por* (4), *se forma* (4), *genera* (3),
*procede de* (3), *evalúa* (3), *sucede a* (3), *conecta* (3).

**Evidencia.** R-10 · Tarea 2. `relacion.md` define la entidad `Relación`, no la
semántica de los verbos relacionales.

**Documentos afectados.** `30_ontologia/relacion.md` · los 41 enunciados
numerados `ST-`, `RP-`, `TR-`, `MM-`, `ID-`, `RL-`, `O-`, `H-`, `E-`, `C-`.

**Acción necesaria.** Declarar qué documento es responsable de cada tipo de
relación, o declarar que los verbos relacionales no requieren definición.

**Dependencias.** RM-02 — `entidades del dominio` condiciona el alcance de
`relacion.md`.

**Criterios de aceptación.**
1. Cada tipo de relación empleado posee documento responsable citable, o consta
   la declaración de no exigibilidad.

---

## RM-08 · Declarar el anclaje del grafo y la articulación de planos

| Campo | Valor |
|---|---|
| Auditoría de origen | R-08 · R-10 |
| Prioridad | 1 |
| Riesgo | Muy alto |

**Problema verificado.** Dos documentos declaran `# Dependencias` sin ningún
concepto Frozen: `identidad.md` y `relacion.md`. Ningún documento designa cuál
es la raíz. Tomando `Identidad` como raíz, `Relación` resulta inaccesible: la
única arista que la toca es `Representación → Relación`. Los dos anclajes son
disjuntos: `identidad.md` no cita `Relación` y `relacion.md` no cita `Identidad`.

Adicionalmente, `relacion.md` `# Declaración` sitúa dos planos distintos:
*«Las entidades definen qué existe. Las Relaciones definen cómo esas entidades
permanecen conectadas.»* Ningún documento declara su articulación.

**Evidencia.** R-08 · R-08.1, R-08.3, R-08.7, determinación **C**.
R-10 · Tarea 10, apartado *Raíces*: ninguno de los dos es raíz, pues ambos
emplean conceptos fantasma.

**Documentos afectados.** `30_ontologia/identidad.md` · `relacion.md` ·
`00_canon/arquitectura_repositorio.md`.

**Acción necesaria.** Declarar el anclaje del grafo ontológico y la relación
entre el plano de entidades y el plano de estructura.

**Dependencias.** RM-01, RM-02 — mientras subsistan nodos fantasma, las raíces
reales del grafo permanecen fuera del repositorio.

**Criterios de aceptación.**
1. Existe declaración citable del anclaje.
2. Los seis conceptos de `30_ontologia` son alcanzables desde él.
3. La articulación entre ambos planos consta por escrito.

---

## RM-09 · Declarar la norma sobre ciclos intracapa

| Campo | Valor |
|---|---|
| Auditoría de origen | R-07 · R-08 · R-10 |
| Prioridad | 2 |
| Riesgo | Alto |

**Problema verificado.** Existen 15 ciclos documentados. Los cuatro documentos
de `20_epistemologia` forman un componente fuertemente conexo completo: cada
uno declara a los otros tres en sus `# Dependencias`.
`00_canon/arquitectura_repositorio.md` regula dependencias **entre capas**;
ningún documento regula las dependencias **dentro** de una capa.

**Evidencia.** R-10 · Tarea 4, ciclos C1–C15. R-07 · determinación **B**:
la reciprocidad no está prohibida por ninguna norma escrita. R-08 · R-08.4:
`Estado ⇄ Trayectoria` declarado recíprocamente en `# Dependencias`.

**Documentos afectados.** `00_canon/arquitectura_repositorio.md` · los 6 de
`30_ontologia` · los 4 de `20_epistemologia`.

**Acción necesaria.** Declarar si la referencia mutua intracapa está permitida,
prohibida o condicionada.

**Dependencias.** RM-08 — la licitud de un ciclo depende del anclaje declarado.

**Criterios de aceptación.**
1. Existe norma citable sobre ciclos intracapa.
2. Los 15 ciclos quedan clasificados como permitidos o prohibidos.

---

## RM-10 · Corregir las seis dependencias ocultas

| Campo | Valor |
|---|---|
| Auditoría de origen | R-08 · R-10 |
| Prioridad | 2 |
| Riesgo | Alto — modifica documentos `Frozen` |

**Problema verificado.** Seis conceptos se emplean en secciones admitidas sin
que su documento figure en `# Dependencias`.

**Evidencia.** R-10 · Tarea 7 · R-08 · R-08.5.

| Documento | Concepto usado | Sección | Ausente de `# Dependencias` |
|---|---|---|---|
| `identidad.md` | Estado | `#Definición`, `ID-002`, `ID-005` | `estado.md` |
| `identidad.md` | Trayectoria | `ID-003`, `ID-006` | `trayectoria.md` |
| `memoria.md` | Identidad | `#Definición` | `identidad.md` |
| `representacion.md` | Relación | `#Constitución` | `relacion.md` |
| `representacion.md` | Observación | `#Constitución` | `observacion.md` |
| `evidencia.md` | Estado | `E-005` | `estado.md` |

**Documentos afectados.** `30_ontologia/identidad.md`, `memoria.md`,
`representacion.md` · `20_epistemologia/evidencia.md`.

**Acción necesaria.** Declarar en `# Dependencias` los documentos empleados, o
retirar el uso del concepto.

**Dependencias.** RM-06, RM-09 — modifica documentos `Frozen`; requiere la
regla de precedencia y la norma de ciclos.

**Criterios de aceptación.**
1. Cero conceptos empleados en sección admitida sin documento en `# Dependencias`.
2. El estado `Frozen` de los cuatro documentos consta actualizado según RM-06.

---

## RM-11 · Corregir las secciones `# Utilizado por`

| Campo | Valor |
|---|---|
| Auditoría de origen | R-08 |
| Prioridad | 3 |
| Riesgo | Medio |

**Problema verificado.** Dos declaraciones no corroboradas y tres omisiones.

**Evidencia.** R-08 · R-08.6.

| Documento | Defecto |
|---|---|
| `trayectoria.md` | declara ser usado por `representacion.md`, que **no cita `Trayectoria` en ninguna sección** |
| `relacion.md` | declara ser usado por `estado.md`, que **no cita `Relación` en ninguna de sus 14 secciones** |
| `estado.md` | omite `memoria.md`, que lo declara en sus `# Dependencias` |
| `trayectoria.md` | omite `estado.md` (`ST-005` + `# Dependencias`) |
| `representacion.md` | omite `estado.md`, que la declara en `# Dependencias` |

**Documentos afectados.** `30_ontologia/estado.md`, `trayectoria.md`,
`representacion.md`, `relacion.md`.

**Acción necesaria.** Hacer coincidir cada `# Utilizado por` con las
`# Dependencias` recíprocas verificables.

**Dependencias.** RM-10.

**Criterios de aceptación.**
1. Toda entrada de `# Utilizado por` está corroborada por la `# Dependencias`
   del documento citado.
2. Toda `# Dependencias` tiene su entrada recíproca en `# Utilizado por`.

---

## RM-12 · Dotar a `observacion.md` de `# Utilizado por` y corregir la inversión

| Campo | Valor |
|---|---|
| Auditoría de origen | R-10 |
| Prioridad | 3 |
| Riesgo | Bajo |

**Problema verificado.** `20_epistemologia/observacion.md` carece de sección
`# Utilizado por`, única entre los diez documentos ontológicos y
epistemológicos, y declara `40_metodologia/` dentro de `# Dependencias`,
invirtiendo la dirección respecto a los otros nueve, que lo declaran en
`# Utilizado por`.

**Evidencia.** R-10 · Tarea 7, hecho verificado adicional.

**Documentos afectados.** `20_epistemologia/observacion.md`.

**Acción necesaria.** Añadir `# Utilizado por` y reubicar la referencia a
`40_metodologia/`.

**Dependencias.** RM-11.

**Criterios de aceptación.**
1. Los 10 documentos poseen `# Utilizado por`.
2. Ninguna capa inferior figura en `# Dependencias` de un documento de capa
   superior.

---

## RM-13 · Resolver la contradicción Canon ↔ Ontología

| Campo | Valor |
|---|---|
| Auditoría de origen | R-09 |
| Prioridad | 1 |
| Riesgo | Muy alto |

**Problema verificado.** `00_canon/arquitectura_repositorio.md`, sección
`# 00 · Canon`, declara *«Puede depender de: Nada»* y su matriz marca ❌ en las
ocho columnas de la fila 00. `00_canon/filosofia_experiencia.md` declara en
`# Dependencias` (líneas 237–239) tres dependencias hacia `30_ontologia`.
Ambos documentos pertenecen a `00_canon` y ambos declaran estado canónico.

Adicionalmente, `PP-009` establece *«Toda entidad utilizada por ATÓMICA deberá
existir previamente en la Ontología»*, mientras `PP-016`, `PP-017` y `E-001`
—del propio `00_canon`— emplean `Estado` y `Relación`.

**Evidencia.** R-09 · R-09.1, R-09.4, R-09.7, determinación **B**:
el Canon depende documentalmente de la Ontología. Alcance verificado: 2 de 11
documentos. Referencias en sentido inverso: 0.

**Documentos afectados.** `00_canon/arquitectura_repositorio.md` ·
`filosofia_experiencia.md` · `primeros_principios.md`.

**Acción necesaria.** Resolver la contradicción entre la cláusula de
independencia y la dependencia declarada, y declarar si `PP-009` obliga a la
capa que lo enuncia.

**Dependencias.** RM-05, RM-06.

**Criterios de aceptación.**
1. No subsisten dos enunciados canónicos contradictorios sobre la
   independencia de `00_canon`.
2. Consta el estatuto de `PP-009` respecto a `00_canon`.

---

## RM-14 · Corregir las referencias a documentos inexistentes

| Campo | Valor |
|---|---|
| Auditoría de origen | R-06 · R-09 |
| Prioridad | 3 |
| Riesgo | Bajo |

**Problema verificado.**

| Origen | Referencia | Estado |
|---|---|---|
| `00_canon/filosofia_experiencia.md:237` | `30_ontology/patron.md` | inexistente |
| `governance/decisions/D-001-estado.md` | `ontology/estado.md`, `methodology/ifo.md`, `interface/*`, `implementation/*` | rutas inexistentes |
| `governance/decisions/D-005-documento-estado.md` | `ontology/estado.md` | ruta inexistente |

**Evidencia.** R-09 · R-09.1 · R-06 · E-7.

**Documentos afectados.** `00_canon/filosofia_experiencia.md` ·
`governance/decisions/D-001-estado.md` · `D-005-documento-estado.md`.

**Acción necesaria.** Repuntar cada referencia a su documento existente, o
declarar formalmente su inexistencia.

**Dependencias.** RM-13.

**Criterios de aceptación.**
1. Cero referencias a rutas inexistentes en `00_canon` y `governance/`.

---

## RM-15 · Dotar a `primeros_principios.md` de `# Dependencias`

| Campo | Valor |
|---|---|
| Auditoría de origen | R-09 |
| Prioridad | 3 |
| Riesgo | Medio |

**Problema verificado.** `00_canon/primeros_principios.md` emplea `Estado` en
`PP-016` (*«Todo conocimiento pertenece a un Estado concreto»*) y en `PP-017`
(*«Cada nuevo Estado amplía, modifica o refuta el conocimiento anterior»*), y
carece de sección `# Dependencias`, por lo que no puede declarar la
dependencia. Diez de los once documentos de `00_canon` carecen de esa sección.

Adicionalmente, `filosofia_experiencia.md` declara `memoria.md` en
`# Dependencias` sin emplear el concepto en ninguna sección admitida, y emplea
`Relación` en `E-001` sin declarar `relacion.md`.

**Evidencia.** R-09 · R-09.4, R-09.5.

**Documentos afectados.** `00_canon/primeros_principios.md` ·
`filosofia_experiencia.md`.

**Acción necesaria.** Añadir la sección y declarar las dependencias reales;
corregir la declaración sin uso y el uso sin declaración.

**Dependencias.** RM-13, RM-14.

**Criterios de aceptación.**
1. Todo documento de `00_canon` que emplee un concepto de otra capa lo declara.
2. Cero dependencias declaradas sin uso correspondiente.

---

## RM-16 · Resolver la capitalización de `estado.md:23`

| Campo | Valor |
|---|---|
| Auditoría de origen | R-07 |
| Prioridad | 4 |
| Riesgo | Bajo |

**Problema verificado.** `30_ontologia/estado.md:23` emplea `representación` en
minúscula y sin artículo determinado, donde el resto del documento usa
`Representación` capitalizada. No existe convención declarada que distinga el
uso genérico del uso como entidad, por lo que la arista
`Estado → Representación` no es verificable en la sección `# Definición`.

**Evidencia.** R-07 · §3.1 y §6, hecho residual verificable.

**Documentos afectados.** `30_ontologia/estado.md`.

**Acción necesaria.** Declarar la convención de capitalización, o desambiguar
la línea.

**Dependencias.** RM-05, RM-06.

**Criterios de aceptación.**
1. Existe convención citable, o la línea no admite doble lectura.
2. La arista queda verificable o formalmente descartada en `# Definición`.

---

# Grafo de dependencias entre remediaciones

```
   RM-01 Modelo            RM-03 axiomas secciones      RM-05 definición oficial
     │                       │                            │
     ▼                       ▼                            ▼
   RM-02 fantasmas         RM-04 consecuencias          RM-06 vocabulario estados
     │  │                                                 │      │
     │  └────────► RM-07 tipos de relación                │      │
     ▼                                                    ▼      │
   RM-08 anclaje ◄────────────────────────────────── RM-13 Canon⇄Ontología
     │                                                    │
     ▼                                                    ▼
   RM-09 ciclos                                        RM-14 refs inexistentes
     │                                                    │
     ▼                                                    ▼
   RM-10 dependencias ocultas ◄── RM-06                RM-15 primeros_principios
     │
     ▼
   RM-11 Utilizado por
     │
     ▼
   RM-12 observacion.md

   RM-16 capitalización ◄── RM-05, RM-06
```

---

# Orden recomendado de ejecución

| Fase | Remediaciones | Justificación |
|---|---|---|
| **F1 · Fundamento** | RM-01 · RM-03 · RM-05 | Las tres únicas sin prerrequisito. Cierran el grafo por su base, dotan de secciones computables al documento fundacional y establecen el criterio de autoridad. Sin ellas ninguna otra remediación es verificable. |
| **F2 · Derivadas del fundamento** | RM-02 · RM-04 · RM-06 | Dependen exclusivamente de F1. RM-06 habilita todo conflicto de precedencia posterior. |
| **F3 · Anclaje** | RM-08 · RM-13 | Requieren el grafo cerrado (RM-01, RM-02) y el criterio de autoridad (RM-05, RM-06). Fijan la raíz y resuelven la contradicción entre capas. |
| **F4 · Normativa derivada** | RM-07 · RM-09 | La licitud de los ciclos y la responsabilidad de las relaciones dependen del anclaje declarado en F3. |
| **F5 · Documentos `Frozen`** | RM-10 · RM-11 · RM-12 | Únicas remediaciones que modifican documentos congelados. Se ejecutan al final del bloque normativo para no repetir la ruptura del congelado. |
| **F6 · Integridad referencial** | RM-14 · RM-15 · RM-16 | Sin efecto conceptual. Diferibles sin retrabajo. |

**Regla observada.** Ningún documento se modifica mientras exista otro del que
dependa: RM-01 precede a todo uso de `Modelo`; RM-05 y RM-06 preceden a toda
resolución de precedencia; RM-08 precede a toda norma sobre ciclos.

**Camino crítico.** `RM-01 → RM-02 → RM-08 → RM-09 → RM-10 → RM-11 → RM-12`.
Siete remediaciones encadenadas, tres de ellas sobre documentos `Frozen`.

---

# Bloqueadores

**Absolutos.** RM-01 · RM-02 · RM-03 · RM-08 — sin ellas el grafo permanece
abierto y sus raíces reales fuera del repositorio.

**De criterio.** RM-05 · RM-06 — sin ellas ningún conflicto de autoridad admite
resolución reproducible.

**De congelado.** RM-10 · RM-11 · RM-12 — únicas que rompen el estado `Frozen`
de `30_ontologia` y `20_epistemologia`.

**Diferibles.** RM-14 · RM-15 · RM-16 — integridad referencial y convención, sin
efecto sobre el grafo conceptual.

---

# Trazabilidad

| Auditoría | Remediaciones derivadas |
|---|---|
| R-06 | RM-05 · RM-06 · RM-14 |
| R-07 | RM-09 · RM-16 |
| R-08 | RM-08 · RM-09 · RM-10 · RM-11 |
| R-09 | RM-13 · RM-14 · RM-15 |
| R-10 | RM-01 · RM-02 · RM-03 · RM-04 · RM-07 · RM-08 · RM-09 · RM-10 · RM-12 |

Las 16 remediaciones son trazables a las cinco auditorías. Ninguna auditoría
queda sin remediación derivada.

---

# Incidencia de planificación

La sección `Ubicación` de este documento declara
`90_auditorias/PLAN_REMEDIACION_v1.1.md`. La ruta real es
`auditorias/ontologia/PLAN_REMEDIACION_v1.1.md`. No se ha modificado: corregirla
excede el objeto de esta planificación.
