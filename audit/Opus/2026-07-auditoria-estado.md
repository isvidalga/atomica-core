He subido el fichero y lo he leído entero. No traía instrucción, así que asumo lo que el propio documento declara como su finalidad: material para decidir qué es el Estado. Analizo hacia esa decisión; si querías otra cosa, dime.

Primero, sobre el método: **el barrido está bien hecho**. Citas literales, fuentes con línea, conflictos conservados sin resolver, distinción entre Canon y no-Canon, registro de procedencia. Es el primer documento de esta serie con evidencia verificable en lugar de enunciados. Es exactamente el inventario que pedí hace tres turnos, restringido a un concepto.

Y precisamente por eso obliga a corregir lo que veníamos auditando.

---

# 1 · El Canon que hemos auditado durante cinco rondas no está en el repositorio

El registro del barrido enumera veinte fuentes. Las carpetas reales son `product/`, `design/`, `governance/`, `ontology/`, más `demo/`, `sql/`, `docs/` y `archive/`.

**No hay `core/`. No hay `epistemology/`. No hay `engine/`.** Y la `ontology/` real contiene `capability.md`, `fragility.md` y `evidence.md`: es una ontología de la metodología, no la ontología epistémica de los briefs.

Sobre la fuerza de esta inferencia, con precisión:

- Para **ONTOLOGÍA** y **ENGINE** la ausencia es concluyente. El último brief declara «estado» como miembro de ambas capas. Un barrido de la palabra «estado» que encuentra `ontology/capability.md` y `ontology/fragility.md` habría encontrado `ontology/state.md` si existiera. No existe.
- Para **CORE** y **EPISTEMOLOGÍA** la ausencia es indiciaria, no concluyente: podrían existir documentos que no mencionen la palabra.

La confirmación está en el propio fichero, apartado *Invariantes*: «No existe ningún invariante declarado sobre el Estado como entidad del dominio». La entidad central de la Ontología del último brief **tiene cero apariciones en el repositorio**.

Esto recalibra el hallazgo C5 de la auditoría anterior. Puntué el riesgo de deriva conceptual en 74/100 interpretándolo como cambio acelerado del Canon. La evidencia dice otra cosa y peor: no es que el Canon se mueva, es que **hay dos Cánones**. Uno teórico, que existe en los briefs y en las auditorías, con axiomas, epistemología y motor. Otro real, que existe en el repositorio y es una especificación de producto y diseño con una ontología de metodología. No se contradicen: no se tocan.

La palabra «estado» aparece en veinte ficheros. El concepto de Estado no aparece en ninguno.

---

# 2 · La decisión: partición de homónimos

El documento identifica el problema en su último TODO pero se queda corto: no son cinco sentidos, son **ocho**, y sólo uno es ontológico.

| Sentido | Dónde vive hoy | Dónde pertenece |
|---|---|---|
| **A · Estado del Modelo** — configuración inmutable, la trayectoria es su sucesión | En ningún sitio | `ontology/state.md` |
| **B · Estado sistémico** — nivel del IFO (Frágil…Antifrágil) | Glosa dentro de una tabla de color + `LEVELS` en producción | Metodología |
| **C · Estado de datos** — Loading / Empty / Error / Offline | Tres enumeraciones incompatibles | Interface |
| **D · Estado de componente** — hover / focus / disabled | Tres listas incompatibles | Interface |
| **E · Estado persistido** — `en_progreso\|completado`, `verificada\|pendiente\|rechazada` | Columnas SQL sin declaración | Modelo de datos |
| **F · Latencia y grado de posesión** | Atributos dentro de Fragilidad y Capacidad | Metodología, como atributos privados |
| **G · Estado efímero de UI** — `store.js` | Implementación | Homónimo. Sin estatuto |
| **H · Estado del proyecto** — `docs/README` | Gestión | Homónimo. Sin estatuto |

**La conclusión operativa es una sola frase:** de los ocho sentidos, siete ya existen en el repositorio y ninguno es el Estado del Canon; el único que es el Estado del Canon no existe.

De ahí se sigue el criterio de decisión, y es más simple de lo que el volumen de conflictos sugiere:

- **A** es lo único que va a `ontology/state.md`. Y ese documento se escribe desde cero: no hay material que consolidar, porque el barrido no ha encontrado ninguno.
- **B** no es un estado del Modelo: es una **proyección con pérdida** del Modelo sobre una escala ordinal de cuatro tramos. Llamarla «estado» es lo que produce la colisión con A. Necesita documento propio en Metodología, no en Ontología.
- **C**, **D**, **E** son homónimos técnicos legítimos. No requieren decisión conceptual, requieren una regla de nomenclatura que impida que vuelvan a colisionar con A.
- **F** es el único caso genuinamente dudoso, y la respuesta correcta es la restrictiva: latencia y grado son atributos privados de sus entidades. Convertirlos en instancias de A acoplaría la metodología a la ontología y haría que un cambio de instrumento tocara el núcleo.
- **G** y **H** no son nada. No se clasifican, se ignoran.

---

# 3 · Triaje de los seis conflictos

Cuatro de los seis no son conflictos conceptuales. Merece la pena separarlos, porque tratarlos todos con el mismo peso paraliza la decisión.

**Estado ⇄ Confianza.** *No es conflicto.* D-003 es Canon y gobierno; la fuente que discrepa está en `archive/experiments/`. Se resuelve por precedencia, no por deliberación. Y D-003 es correcto: la ortogonalidad es exactamente lo que exigen los hallazgos sobre la estructura bidimensional de la confianza. **Es la única decisión de gobierno registrada en todo el barrido, y es la acertada.**

**Jerarquía 1 vs. 4.** *No es conflicto: es error de categoría.* Una entidad no tiene jerarquía. La jerarquía es una propiedad de una región dentro de una pantalla. «Estado Sistémico» y «Estado presente» son dos regiones, no dos entidades. El conflicto existe únicamente porque los documentos de producto asignan jerarquía a un nombre en lugar de a una región.

**Colores del IFO.** *No es conflicto de Canon: es deriva de implementación.* El sistema de diseño está congelado y producción no lo respeta. Se resuelve alineando código con especificación. No hay nada que decidir conceptualmente.

**Tratamiento por bloque vs. pantalla completa.** *Conflicto real pero de Interface.* Se resuelve declarando que el bloque es la unidad por defecto y enumerando taxativamente las excepciones de pantalla completa.

**Enumeración de estados de pantalla (7 / 5 / 4).** *Conflicto real y grave, pero no por el contenido.* Lo grave es lo que revela: `screen_specification.md:10` establece que toda pantalla «deberá seguir exactamente» su plantilla, y `home.md` —también congelado— no la sigue. **Un documento normativo violado por otro documento congelado significa que la etiqueta «congelado» no tiene hoy fuerza ninguna.** Es el hallazgo más dañino del barrido para la credibilidad del repositorio, y es de gobierno, no de teoría.

**Peso del IFO: héroe vs. dato secundario.** *El único conflicto conceptualmente cargado.* Y es notable que la demo ya haya movido el IFO a «dato secundario» mientras el experimento archivado lo tenía como «el héroe». La dirección del producto ya converge con lo que INT-VISUAL §7.4 derivó del Canon: una cifra grande y aislada es la forma visual de un veredicto. Aquí la evidencia empírica y la derivación teórica coinciden, que es la primera vez que ocurre en toda esta serie.

---

# 4 · El vacío más grave no está entre los conflictos

Está en un TODO, y lo formula el propio documento:

> Ningún documento del Canon nombra los cuatro niveles como una enumeración propia: aparecen únicamente como glosa entre comillas dentro de una tabla de color. La escala del IFO como estado sistémico no tiene documento.

**El artefacto central del producto —la escala sobre la que se comunica todo resultado— existe en tres sitios y en ninguno con autoridad:** como texto entre comillas dentro de una tabla de color, como umbrales `25/50/75/100` codificados en `resultados.html`, y como descripciones dirigidas al cliente en la misma variable de JavaScript.

Los textos de esa variable son además el punto de mayor exposición del proyecto. «Estás entre las más sólidas de tu sector» es una afirmación comparativa contra un benchmark que, según el propio Canon, todavía no existe. Es exactamente el problema de calibración que la revisión científica marcó como M4, ahora localizado en una línea concreta de código en producción.

---

# 5 · La credencial ya no es hipotética

`sql/03_credenciales_publicas.sql` incluye `emitido_en`, `caduca_en`, `estado`.

Un artefacto emitido, fechado, con caducidad, con estado y con tabla pública **es un certificado**, con independencia de cómo lo llame el Canon. Las dos últimas respuestas señalaron esta contradicción como pendiente de resolver en Core; el barrido demuestra que está implementada. Deja de ser una decisión de teoría y pasa a ser una discrepancia entre lo que el sistema hace y lo que el Canon dice que hace.

---

# 6 · Qué haría falta para decidir

El documento pide que una persona decida qué es el Estado. Tras leerlo, la decisión requiere tres cosas y ninguna está en el fichero:

1. **Confirmar si existen `core/`, `epistemology/` y `engine/` en el repositorio.** Un `find . -type d` lo resuelve en un segundo. De ahí depende si `ontology/state.md` se escribe sobre un Canon existente o si el Canon teórico hay que fundarlo primero.
2. **Una regla de nomenclatura**, antes que una definición. Mientras «estado» siga siendo admisible para ocho cosas, cualquier definición que escribas quedará contaminada al mes siguiente. La regla vale más que el documento.
3. **Decidir B antes que A.** La escala del IFO es lo que el cliente ve y lo que hoy carece de documento. Si `ontology/state.md` se escribe primero, heredará la ambigüedad de la escala en su primera línea.

Si confirmas el punto 1, te digo si `ontology/state.md` es redactable ya o si antes hay que escribir aquello de lo que depende.
