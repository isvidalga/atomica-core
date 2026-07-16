Estado:
DRAFT v0.1

Este documento define el modelo conceptual.
No implica implementación.

# Ontología núcleo — modelo de conocimiento auditable, bitemporal y refutable

**Supuesto declarado:** asumo que esto es para Atómica (IFO, dimensiones, capacidades, niveles de confianza). Si el destino es el DRT territorial, el núcleo es idéntico y solo cambia el `sujeto`. Eso ya es una señal de diseño: **el sujeto debe ser polimórfico desde el día 1**.

---

## 0. Corrección previa al diseño

Cuatro premisas del encargo son falsas o incompletas. Las corrijo antes de ejecutar.

**0.1 — "Ningún dato desaparece" es ilegal para datos personales.**
El RGPD (art. 17) y tu propia función `borrar_cuenta()` contradicen frontalmente ese principio. No es una tensión filosófica: es una tensión jurídica con multa. La resolución no es la excepción ad hoc, es arquitectónica: **los datos personales nunca entran en el log**. El log contiene pseudónimos. La identidad vive en una bóveda cifrada por sujeto, y el borrado es *crypto-shredding*: se destruye la clave, el log queda íntegro pero semánticamente huérfano. El histórico no se rompe; se vuelve anónimo. Es la única forma de sostener ambos principios a la vez.

**0.2 — Ningún modelo de datos sobrevive diez años. Un log sí.**
Los esquemas cambian siempre. Lo que puede sobrevivir es (a) un registro de eventos inmutable y (b) un modelo de conocimiento *como dato versionado*, no como código ni como tablas. Tu modelo actual está "congelado" a nivel de esquema — 11 tablas, 18 capacidades. Congelar es la forma más rápida de romperlo: cuando en 2029 haya 21 capacidades, o CSRD cambie umbrales otra vez (como ya pasó con la Omnibus 2026/470), el esquema congelado obliga a migrar destructivamente. **Objetivo correcto: un log que sobreviva diez años y un marco que pueda reemplazarse sin tocarlo.**

**0.3 — "Toda confianza derivada de reglas explícitas" es necesario pero no suficiente.**
Lo que rompe los históricos no es la falta de reglas: es que las reglas cambian y los resultados no guardan *qué versión de regla los produjo*. Sin `regla_version` sellada en cada resultado, un IFO de 2026 y uno de 2030 no son comparables y nadie puede demostrar por qué. La confianza debe ser **reproducible**, no solo explícita.

**0.4 — Coste.**
Esto es una ontología de grado forense. Es correcta y es cara. No tienes SMEs pagando. Si construyes esto entero antes de la primera conversación de validación, repites exactamente el patrón que ya has identificado tres veces. Al final hay un subconjunto mínimo (§9) que preserva la opción de llegar aquí sin pagarlo hoy.

---

## 1. Axiomas del núcleo

| # | Axioma | Consecuencia estructural |
|---|--------|--------------------------|
| A1 | No existe `UPDATE`. No existe `DELETE`. | Corrección = nuevo hecho que *supersede*. Retractación ≠ borrado. |
| A2 | Todo hecho es bitemporal. | `t_valido_*` (el mundo) ≠ `t_registrado_*` (lo que sabíamos). Distinguir "la empresa cambió" de "nos enteramos". |
| A3 | Observación ≠ Afirmación ≠ Creencia. | Tres capas, nunca en la misma tabla. Mezclarlas es el error irreversible. |
| A4 | Ninguna observación sin fuente y sin agente. | Sin procedencia, no entra. No hay `NULL` en `fuente_id`. |
| A5 | Toda afirmación es derivada, nunca escrita. | Existe exactamente una `derivacion` por afirmación. |
| A6 | Toda hipótesis declara su condición de refutación. | Hipótesis no falsable = inadmisible. Rechazo en escritura, no en revisión. |
| A7 | La confianza no se escribe: se calcula. | `confianza` es columna derivada de `regla_version` + entradas. |
| A8 | Todo resultado es recomputable bit a bit. | `(marco_version, regla_version, hash_entradas) → resultado`. Si no reproduce, es un bug crítico, no una discrepancia. |
| A9 | El marco es dato. | Dimensiones, capacidades, preguntas y umbrales viven en tablas versionadas, no en código ni en constantes. |
| A10 | El PII no entra al log. | Solo `sujeto_pseudonimo`. |

---

## 2. Capas

```
CAPA 5  RESULTADOS      proyecciones · IFO · credencial · snapshot     (desechable, recomputable)
                              ↑ recomputable desde ↓
CAPA 4  CONFIANZA       reglas · grados · incertidumbre · decaimiento
CAPA 3  AFIRMACIONES    aserción · hipótesis · contraste · estado      (refutable)
CAPA 2  OBSERVACIONES   observación · fuente · evidencia · custodia    (inmutable)
CAPA 1  MARCO           dimensión · capacidad · pregunta · regla · mapeo (versionado)
CAPA 0  IDENTIDAD       agente · sujeto · bóveda PII · evento          (raíz)
```

Regla de flujo: **hacia arriba se computa, hacia abajo jamás se escribe.** La capa 5 nunca es fuente de verdad. Si mañana borras toda la capa 5 y la recomputas, debe salir idéntica.

---

## 3. Capa 0 — Identidad, tiempo, evento

### `agente`
Quién observa, afirma o refuta. Todo asiento tiene autor.

| propiedad | tipo | nota |
|---|---|---|
| `agente_id` | uuid | |
| `tipo` | enum | `persona` · `organizacion` · `sistema` · `modelo` · `instrumento` |
| `identificador` | text | pseudónimo; nunca nombre |
| `version_agente` | text | crítico para `modelo`: `claude-x.y`, prompt hash. Un LLM de 2026 y otro de 2030 **no son el mismo agente**. |
| `fiabilidad_declarada` | numeric | prior del agente, derivado de regla, no opinable |

> Sin `version_agente`, ninguna afirmación producida por Donella es auditable en 2030. Este campo es el que salva o hunde la auditabilidad de todo lo generado por IA.

### `sujeto`
Aquello de lo que se afirma. Polimórfico: `empresa` · `centro` · `cadena_valor` · `comarca` · `territorio`.
`sujeto_id`, `tipo_sujeto`, `pseudonimo`, `t_registrado_desde`.

### `boveda_identidad` (fuera del log, cifrada por sujeto)
`sujeto_id` → `{razon_social, CIF, contactos}`, cifrada con `clave_sujeto`. Borrado RGPD = destruir `clave_sujeto`. El log sobrevive anónimo.

### `evento`
El único append real. Todo lo demás es proyección.
`evento_id` (monotónico), `tipo`, `agente_id`, `payload` (jsonb), `t_registrado`, `hash_previo`, `hash` (encadenado).

> El encadenado hash-previo → hash convierte el log en verificable contra manipulación interna. Sin él, "auditable" significa "auditable por quien controla la base de datos", que es no auditable.

---

## 4. Capa 1 — El marco como dato versionado

Esta capa es la que compra los diez años.

### `marco` / `marco_version`
`marco_id`, `version` (semver), `hash_contenido`, `t_vigente_desde`, `t_vigente_hasta`, `estado` (`borrador`·`vigente`·`superado`), `justificacion_cambio`.

### `nodo_marco`
Una sola tabla recursiva, no cuatro tablas rígidas.
`nodo_id`, `marco_version`, `tipo` (`dimension`·`subdimension`·`capacidad`·`indicador`·`pregunta`), `padre_id`, `clave_estable`, `etiqueta`, `polaridad`, `peso`.

> **`clave_estable` es la pieza no negociable.** Es el identificador semántico que persiste entre versiones (`resiliencia_dinamica.redundancia`). Las etiquetas cambian ("LEIA"→"Donella", "resiliencia"→otro nombre); la clave, no. Todo histórico se ancla a la clave, nunca al `nodo_id` ni al texto.

### `mapeo_marco`
La tabla que casi nadie escribe y sin la cual el histórico *sí* se rompe.
`desde_version`, `hasta_version`, `nodo_origen`, `nodo_destino`, `relacion` (`identico`·`renombrado`·`dividido`·`fusionado`·`retirado`·`nuevo`), `factor`, `comparabilidad` (`exacta`·`aproximada`·`incomparable`).

> Cuando 18 capacidades pasen a 21, esta tabla es lo que permite decir con honestidad: "el IFO de 2026 y el de 2030 son comparables en cuatro dimensiones e incomparables en dos". Sin ella solo caben dos salidas, ambas malas: mentir sobre la continuidad, o tirar el histórico.

### `regla`
`regla_id`, `tipo` (`puntuacion`·`agregacion`·`umbral`·`confianza`·`decaimiento`·`elegibilidad`), `version`, `especificacion` (declarativa, no imperativa: DSL/jsonb), `hash`, `t_vigente_desde`.

> La regla debe ser **dato declarativo**, no una función de Postgres. Si la regla es código, cada despliegue reescribe silenciosamente la historia interpretativa y no queda rastro.

---

## 5. Capa 2 — Observaciones (inmutable)

### `fuente`
`fuente_id`, `tipo` (`autodeclaracion`·`documento`·`api`·`entrevista`·`medicion`·`inferencia_llm`·`registro_publico`), `agente_emisor`, `t_emision`, `uri`, `hash_contenido`.

### `evidencia`
`evidencia_id`, `fuente_id`, `sujeto_id`, `hash`, `custodia` (cadena de custodia: quién, cuándo, desde dónde), `t_valido_desde`, `t_valido_hasta`, `caducidad`, `verificado_por` (`agente_id` nullable), `metodo_verificacion`.

> **La evidencia caduca.** Un certificado de 2021 no sostiene una afirmación de 2026 con la misma fuerza. La caducidad no borra la evidencia: degrada la confianza vía §6. Modelar evidencia como atemporal es el fallo silencioso más común en plataformas de certificación.

### `observacion`
El átomo. Nunca se modifica.

`observacion_id`, `sujeto_id`, `clave_estable` (nodo del marco), `valor` (jsonb tipado), `unidad`, `metodo`, `instrumento`, `agente_observador`, `fuente_id`, `evidencia_id?`, `t_valido_desde`, `t_valido_hasta`, `t_registrado_desde`, `t_registrado_hasta` (∞ salvo supersesión), `superseded_by`, `motivo_supersesion`, `marco_version_captura`.

> `marco_version_captura` sella *bajo qué marco se preguntó*. Sin él, una respuesta de 2026 reinterpretada bajo el marco de 2030 es una falsificación involuntaria.

Corrección de un error del usuario = nueva observación + `superseded_by`. La errónea permanece visible en la auditoría con `motivo_supersesion = 'correccion_usuario'`. **La equivocación es un dato, no basura.**

---

## 6. Capa 3 — Afirmaciones, hipótesis, contrastes

### `afirmacion` (triple reificado)
`afirmacion_id`, `sujeto_id`, `predicado_id`, `objeto` (jsonb), `t_valido_desde/hasta`, `t_registrado_desde/hasta`, `derivacion_id` (NOT NULL), `confianza_id` (NOT NULL), `estado` (derivado), `supersede_a`.

### `predicado` (vocabulario controlado y versionado)
`presenta_capacidad_deteriorada`, `estima_indicador`, `cumple_requisito`, `es_elegible_para`, `presenta_riesgo_regulatorio`…
Con `polaridad`, `aridad`, `refutable` (bool), `marco_version`.

> Vocabulario cerrado. Un predicado libre en texto destruye la ontología en dieciocho meses.

### `derivacion` (procedencia, estilo PROV-O)
`derivacion_id`, `regla_version`, `agente_id`, `entradas` (array de `observacion_id`/`afirmacion_id`), `hash_entradas`, `t_ejecucion`, `determinista` (bool), `traza` (jsonb).

> Si `determinista = false` (p. ej. inferencia LLM), la traza debe incluir prompt hash, modelo, temperatura y salida cruda. **Una afirmación no determinista sin traza no es una afirmación: es un rumor con formato de dato.**

### `hipotesis`
Subtipo de afirmación con obligaciones extra:
`hipotesis_id`, `afirmacion_base_id`, `condicion_refutacion` (**NOT NULL**, expresión declarativa evaluable), `evidencia_esperada`, `plazo_evaluacion`, `prior`, `estado` (`abierta`·`corroborada`·`refutada`·`caducada`·`indeterminada`).

> Restricción dura: `CHECK (condicion_refutacion IS NOT NULL)`. Popper convertido en constraint. Esto es lo que separa a Atómica de un cuestionario con radar bonito: si tu producto "estima bajo incertidumbre y nunca certifica", entonces cada estimación es una hipótesis y **debe** declarar qué la mataría.

### `contraste`
El acto de confrontar.
`contraste_id`, `objetivo_id` (afirmación|hipótesis), `evidencia_id`, `agente_id`, `resultado` (`corrobora`·`refuta`·`recalibra`·`indeterminado`), `magnitud`, `regla_version`, `t_registrado`.

Nunca borra nada. El `estado` de la afirmación es una **proyección** del conjunto de contrastes bajo `regla_version`. Refutar en 2030 una afirmación de 2026 no la elimina: la marca `refutada`, y el sistema puede responder honestamente "esto lo creíamos, esto lo dejamos de creer, esto lo supimos el día X".

---

## 7. Capa 4 — Confianza

`confianza` **nunca es un número**. Es una estructura:

| campo | significado |
|---|---|
| `nivel` | 0 autodeclarado · 1 con evidencia · 2 verificado por consultor (tu modelo de 3 niveles, aquí formalizado) |
| `grado` | 0..1, calculado |
| `incertidumbre_epistemica` | por falta de datos — **se reduce con más evidencia** |
| `incertidumbre_aleatoria` | por variabilidad real — **no se reduce nunca** |
| `regla_version` | qué regla lo produjo |
| `entradas_hash` | reproducibilidad |
| `calculado_en` | |
| `decae_segun` | función de decaimiento ligada a `evidencia.caducidad` |

> Separar epistémica de aleatoria no es pedantería: es la diferencia entre "no sabemos" y "es intrínsecamente variable". Un cliente que ve un IFO de 60 tiene derecho a saber cuál de las dos lo domina, porque solo la primera se arregla pagando por Nivel 1. Colapsarlas en un número es exactamente el gesto que convierte una estimación en una aserción encubierta — justo lo que dices que Atómica no hace.

Restricción: no existe ruta de escritura a `confianza.grado` desde la aplicación. Solo desde `derivacion`.

---

## 8. Capa 5 — Resultados (desechables)

`resultado`: `resultado_id`, `sujeto_id`, `tipo` (`ifo`·`ifo_dimension`·`capacidad_principal`·`credencial`·`alerta`), `valor`, `marco_version`, `regla_version`, `hash_entradas`, `t_calculado`, `t_valido_desde/hasta`, `reproducible` (bool).

`credencial`: `credencial_id`, `resultado_id`, `t_emision`, `t_caducidad`, `estado` (`vigente`·`revocada`·`caducada`·`superada`), `motivo_revocacion`, `firma`.

> **Ninguna credencial se borra.** Se revoca. Una credencial revocada debe seguir siendo verificable públicamente como revocada — si no, quien la recibió en 2027 no puede saber en 2030 qué pasó, y toda la arquitectura de confianza se vuelve decorativa.

**Test de integridad (ejecutable en CI, semanal):** tomar N resultados históricos, recomputarlos desde el log con su `marco_version`/`regla_version` selladas, comparar hashes. Discrepancia = incidente de nivel 1. Este test es el guardián real de los diez años. Sin él, todos los axiomas anteriores son literatura.

---

## 9. Invariantes verificables (los que importan)

1. `observacion.fuente_id IS NOT NULL AND observacion.agente_observador IS NOT NULL`
2. `afirmacion.derivacion_id IS NOT NULL AND afirmacion.confianza_id IS NOT NULL`
3. `hipotesis.condicion_refutacion IS NOT NULL`
4. Ninguna tabla del núcleo tiene trigger de `UPDATE`/`DELETE`. Permisos revocados a nivel de rol, no de aplicación.
5. `resultado` recomputable ⇒ hash idéntico.
6. Todo `nodo_marco` referenciado por una observación existe en la `marco_version` sellada.
7. Todo salto entre `marco_version` tiene fila en `mapeo_marco` o el histórico se declara `incomparable` explícitamente.
8. Cero PII fuera de `boveda_identidad`.
9. `evento.hash_previo` encadenado sin huecos.

---

## 10. Subconjunto mínimo (lo que construiría ahora, no todo esto)

Ordenado por ratio coste/irreversibilidad. Los tres primeros son baratos hoy e imposibles de retrofitear después:

| Prioridad | Elemento | Por qué ahora |
|---|---|---|
| **1** | `clave_estable` en todo nodo del marco | Retrofit posterior = perder la trazabilidad de todo el histórico previo. Coste hoy: una columna. |
| **2** | `marco_version` + `regla_version` selladas en cada `respuesta` y cada `resultado` | Sin esto, ningún IFO anterior al primer cambio de regla es defendible. Coste hoy: dos columnas. |
| **3** | PII fuera del log, sujeto pseudonimizado | Retrofit = migración con datos personales ya dispersos. Coste hoy: una tabla. |
| **4** | `observacion` append-only con `superseded_by` (en vez de UPDATE en `respuestas`) | Coste medio. Habilita §6 entera. |
| **5** | `fuente` + `agente.version_agente` | Barato. Sin esto nada de Donella es auditable. |
| 6 | `derivacion` con traza | Cuando haya el primer cliente que discuta un resultado. |
| 7 | `contraste` / `hipotesis` | Cuando exista Nivel 2 real con consultores refutando. |
| 8 | Encadenado hash, bóveda cifrada, test de reproducibilidad en CI | Cuando la credencial tenga valor externo que alguien quiera impugnar. |

Los puntos 1–3 cuestan **días** y compran la ontología completa como opción futura. Los 6–8 cuestan meses y no compran nada hasta que exista un cliente que discuta un número. Construir hoy 6–8 es, otra vez, infraestructura antes que demanda.

---

## 11. Alternativas descartadas (y por qué podrías discrepar)

| Enfoque | A favor | En contra | Veredicto |
|---|---|---|---|
| **Event sourcing puro** (solo log, todo proyección) | Máxima pureza; auditoría total | Complejidad operativa alta; consultas y RLS mucho peores en Postgres; un solo desarrollador (tú + Claude) lo pagará caro | Descartado como *único* mecanismo; adoptado el log como capa 0 y tablas bitemporales encima |
| **Tablas bitemporales SQL** (la propuesta) | Encaja con Supabase/Postgres/RLS que ya tienes; auditable; incremental | Verbosa; disciplina manual de invariantes; sin `UPDATE` la app se complica | **Adoptado** |
| **RDF / triple store + PROV-O** | La ontología "de verdad"; interoperable; SHACL valida invariantes | Ecosistema pobre, hosting caro, sin encaje con tu stack, curva brutal | Descartado — pero el *vocabulario* PROV-O (entidad/actividad/agente) sí se adopta como esquema conceptual |
| **Data vault / anchor modeling** | Diseñado exactamente para esto | Explosión de tablas; overkill para 60 preguntas | Descartado por volumen |
| **Sin ontología: tablas planas + auditoría** | Rápido, valida el negocio ya | Irreversible; a los dos años el histórico es incomparable y no lo sabrás hasta que un cliente lo impugne | Descartado — pero es la posición honesta de quien crea que Atómica no llegará a diez años |

El desacuerdo legítimo más fuerte contra todo este documento: **si la probabilidad de que Atómica exista en 2030 es baja, el valor esperado de esta ontología es bajo**, y la §10 (puntos 1–3) captura el 80% del valor al 5% del coste. Ese argumento es bueno. No lo descarto.