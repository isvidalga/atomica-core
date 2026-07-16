# Navegación

Documento normativo. Define la totalidad de la navegación de Atómica.

---

## 1. Propósito

La navegación de Atómica **NO DEBE** organizarse por objetos (empresas, informes, capacidades, ajustes). **DEBE** organizarse por preguntas.

Un menú de objetos obliga al usuario a saber dónde está lo que busca. Un menú de preguntas solo le obliga a saber qué quiere saber. La segunda es la única forma de navegación admisible en un sistema cuyo propósito es la comprensión.

Existen cinco preguntas. **No hay una sexta.**

---

## 2. Principios de navegación

**N1 · Una pregunta por pantalla.** Una pantalla que responde a dos preguntas no responde a ninguna. **NO DEBEN** existir portadas, resúmenes ni vistas generales que las mezclen.

**N2 · El orden es epistémico, no de menú.** Cada pregunta presupone la anterior. No se puede saber qué hacer sin saber qué no se está viendo. No se puede saber si se aprende sin haber hecho algo. El orden **NO DEBE** alterarse por conveniencia comercial.

**N3 · Toda funcionalidad responde a una de las cinco o no entra.** Este es el criterio de admisión del producto. Si una propuesta no encaja limpiamente en una pregunta, la propuesta se rechaza. No se crea una pregunta nueva para acomodarla.

**N4 · Ninguna pregunta se responde con una promesa.** Si Atómica no puede responder, **DEBE** decir que no puede. Una pantalla vacía honesta es admisible; una pantalla llena de sustituto no lo es.

**N5 · La incertidumbre viaja con la respuesta.** En las cinco. Sin excepción. No hay pantalla en la que el número aparezca solo.

---

## 3. Las cinco preguntas

### 3.1 · ¿Cómo estoy ahora?

**Responde:** el estado estimado presente, con su duda.

**DEBE** mostrar la estimación como banda, nunca como línea ni como cifra aislada. **DEBE** mostrar, adyacente y sin interacción, el nivel de confianza y de qué depende. **DEBE** distinguir lo que no se sabe por falta de datos de lo que es variable por naturaleza: solo lo primero se reduce aportando evidencia, y el usuario tiene derecho a saber cuál domina antes de pagar por reducirlo.

**NO DEBE** ser una portada de métricas. **NO DEBE** mostrar variación respecto al periodo anterior: eso pertenece a la pregunta 2, y mezclarlas convierte el estado en tendencia y la tendencia en juicio.

**Anti-patrón:** el hero limpio con el número grande. Es cómodo, es vendible, y es la violación del principio fundacional del producto.

---

### 3.2 · ¿Qué ha pasado?

**Responde:** la historia. Es la Crónica.

**DEBE** tener el tiempo como eje primario y único. **DEBE** mostrar lo superado en su sitio, no eliminarlo. **DEBE** mostrar las costuras: todo cambio de marco o de regla aparece como discontinuidad, no como transición. **DEBE** descomponer todo cambio por causa, separando lo que cambió en el mundo, lo que decidió la organización y lo que cambió Atómica al revisar sus propias reglas.

Esa última línea **NO DEBE** omitirse nunca, aunque sea la más incómoda del producto. Es lo único que impide presentar el movimiento del suelo como progreso del cliente.

**NO DEBE** ser un feed. **NO DEBE** ordenarse por relevancia. **NO DEBE** resumir sin declarar qué omite.

**Anti-patrón:** el registro de actividad. Muestra que pasan cosas. No muestra qué pasó.

---

### 3.3 · ¿Qué no estoy viendo?

**Responde:** los límites del conocimiento del sistema sobre la organización.

Es la única pregunta que expone lo que Atómica **no** sabe, y por eso es la que sostiene la credibilidad de las otras cuatro.

**DEBE** mostrar los huecos: periodos sin registro, especialmente los que coinciden con acontecimientos externos. **DEBE** mostrar la evidencia caducada y qué afirmaciones se apoyan todavía en ella. **DEBE** mostrar las dimensiones sostenidas por un único informante o una única fuente. **DEBE** mostrar las disputas abiertas sin resolverlas.

**NO DEBE** convertirse en una sección de hallazgos, oportunidades o recomendaciones. En el instante en que responde "esto es lo que deberías mirar" en lugar de "esto es lo que no sé", ha cambiado de pregunta y ha dejado de ser útil.

**Anti-patrón:** rellenar el hueco. Cualquier inferencia que ocupe una ausencia destruye el propósito entero de la pregunta.

---

### 3.4 · ¿Qué debería hacer?

**Responde:** las acciones derivables del estado, con su fundamento y su duda.

**DEBE** declarar, en cada sugerencia, de qué observaciones y de qué regla se deriva. **DEBE** expresarse como hipótesis: toda acción propuesta lleva asociada una expectativa y una condición que la refutaría. **DEBE** decir, cuando corresponda, que la evidencia disponible no permite recomendar nada.

**NO DEBE** ordenar acciones por facilidad de ejecución ni por impacto sobre el índice. Optimizar el indicador es la conducta que el producto existe para detectar; construirla en la navegación sería instalar el patógeno en el sistema inmune.

**NO DEBE** hablar con seguridad que no tiene. Una recomendación sin incertidumbre declarada es una aserción, y Atómica no afirma.

**Anti-patrón:** la lista priorizada de quick wins. Es lo que todos los clientes pedirán y es exactamente la mercancía que Atómica no vende.

---

### 3.5 · ¿Estoy aprendiendo?

**Responde:** si la organización acierta más que antes.

**DEBE** medirse sobre el historial de hipótesis: cuántas se emitieron, cuántas se resolvieron, con qué veredicto, con cuánta antelación, y con qué calibración. **DEBE** contar las hipótesis vencidas sin veredicto como fallo parcial: el silencio no absuelve. **DEBE** mostrar los aciertos y los errores con el mismo peso visual.

**NO DEBE** medirse con la evolución del índice. La mejora del IFO no es aprendizaje: es, en proporción desconocida, efecto del cambio de reglas, del cambio de marco y del sesgo introducido por haber pagado. El único hecho comprobable que este producto genera es si la organización predijo bien lo que le iba a pasar.

**NO DEBE** existir sin datos. Hasta que haya hipótesis resueltas, esta pantalla **DEBE** decir que aún no puede responder. Esa espera es honesta y es el argumento más fuerte del producto.

**Anti-patrón:** la gráfica ascendente. Muestra progreso. No muestra aprendizaje. Y es indistinguible de un artefacto del pricing.

---

## 4. Cierre

Las cinco preguntas son la totalidad del producto. Un elemento de interfaz que no responda a ninguna **DEBE** eliminarse, no reubicarse.
