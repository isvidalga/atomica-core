# Modelo Vivo

Estado: CANÓNICO

Versión: 2.0.1

Tipo: Producto

Ubicación:

```text
50_producto/modelo_vivo.md
```

---

# Propósito

El Modelo Vivo constituye el instrumento central del producto ATÓMICA.

Su finalidad consiste en mantener una representación operacional única del conocimiento disponible sobre una organización para que pueda ser explorado, interpretado y utilizado por los distintos instrumentos del producto.

El Modelo Vivo no genera conocimiento.

No modifica el conocimiento.

No redefine conceptos del Canon.

Su responsabilidad consiste exclusivamente en mantener operativo el conocimiento producido conforme al Sistema Normativo de ATÓMICA.

---

# Alcance

Este documento regula únicamente el Modelo Vivo como instrumento perteneciente a la capa Producto.

No define:

- el Canon;
- el Núcleo;
- la Epistemología;
- la Ontología;
- la Metodología;
- la Arquitectura del Dominio;
- la implementación técnica.

Las definiciones correspondientes pertenecen a sus documentos canónicos.

---

# Naturaleza

El Modelo Vivo constituye un instrumento permanente del producto.

Su existencia es independiente de:

- la interfaz;
- la representación visual;
- la tecnología utilizada;
- la persistencia física;
- la implementación.

Las distintas superficies del producto representan el Modelo Vivo.

Nunca lo sustituyen.

Nunca modifican su significado.

---

# Objetivo

El Modelo Vivo proporciona una representación única y coherente del conocimiento organizacional disponible.

Todos los instrumentos del producto utilizan esa representación común.

Ningún instrumento mantiene un modelo propio.

Toda exploración realizada dentro del producto parte del Modelo Vivo vigente.

---

# Responsabilidad

Corresponde exclusivamente al Modelo Vivo:

- integrar el conocimiento generado mediante la metodología vigente;
- mantener una representación coherente de dicho conocimiento;
- conservar la continuidad entre sucesivas actualizaciones;
- proporcionar una referencia común para todos los instrumentos del producto;
- garantizar la coherencia entre todas las superficies de exploración;
- mantener la trazabilidad exigida por el Sistema Normativo;
- conservar la continuidad histórica del modelo;
- facilitar la exploración del conocimiento representado.

Ninguna responsabilidad ajena al producto pertenece al Modelo Vivo.

---

# Principios operativos

## MV-001 · Fuente única

Existe un único Modelo Vivo por organización.

Toda representación procede del mismo modelo.

No existen modelos alternativos.

---

## MV-002 · Coherencia

Todos los instrumentos consultan exactamente la misma representación.

No pueden existir interpretaciones incompatibles entre superficies.

---

## MV-003 · Independencia

La interfaz consume el Modelo Vivo.

Nunca altera su contenido.

Los cambios de diseño no modifican el significado del modelo.

---

## MV-004 · Continuidad

El Modelo Vivo mantiene continuidad entre versiones sucesivas.

Cada actualización preserva la coherencia del conocimiento representado.

---

## MV-005 · Trazabilidad

Toda representación mantenida por el Modelo Vivo conserva la trazabilidad establecida por el Sistema Normativo.

---

## MV-006 · Inmutabilidad

Los Estados Sistémicos pertenecientes al Modelo Vivo son inmutables.

La evolución del Modelo Vivo se produce exclusivamente mediante la incorporación de nuevos Estados.


---

# Dependencias normativas

El Modelo Vivo depende de las definiciones establecidas por:

- 00_canon
- 10_nucleo
- 20_epistemologia
- 30_ontologia
- 40_metodologia

Este documento no modifica ninguna definición perteneciente a dichas capas.

En caso de conflicto prevalece siempre la definición canónica.

---

# Dependencias funcionales

El Modelo Vivo utiliza exclusivamente conocimiento generado conforme a la metodología vigente.

La construcción del conocimiento pertenece a la Metodología.

La definición del conocimiento pertenece a la Ontología.

La validez del conocimiento pertenece a la Epistemología.

El Modelo Vivo únicamente mantiene dicho conocimiento disponible para el producto.

---

# Unidad de representación

Existe un único Modelo Vivo para cada organización.

Todas las consultas realizadas por el producto hacen referencia al mismo estado vigente.

No existen representaciones independientes por instrumento.

Toda superficie explora exactamente el mismo modelo.

---

# Entradas

El Modelo Vivo se alimenta de las observaciones procesadas conforme a la metodología vigente.

Las observaciones pueden generar nuevos Estados Sistémicos.

No todas las observaciones modifican el Modelo Vivo.

No incorpora información procedente de fuentes no reguladas por el Sistema Normativo.

Las entradas del Modelo Vivo son las representaciones generadas por la metodología a partir de las observaciones realizadas sobre una organización.

La definición, validación e interpretación de dichas entradas pertenecen a la capa Metodología.

---

# Actualización

El Modelo Vivo se actualiza únicamente cuando cambia el conocimiento disponible sobre la organización.

Una actualización puede producirse como consecuencia de:

- nuevas observaciones;
- nueva evidencia;
- cambios metodológicos autorizados;
- procesos de reevaluación previstos por la metodología.

Ninguna modificación de la interfaz, de la implementación técnica o de la experiencia de usuario constituye una actualización del Modelo Vivo.

---

# Estado vigente

En cada instante existe un único estado vigente del Modelo Vivo.

Ese estado representa la referencia utilizada por todos los instrumentos del producto.

Las versiones anteriores permanecen disponibles para garantizar la continuidad histórica y la trazabilidad del conocimiento.

---

# Persistencia

El Modelo Vivo mantiene continuidad entre actualizaciones.

Cada nueva versión deriva de la inmediatamente anterior conforme a las reglas establecidas por la metodología.

La actualización de una representación nunca implica la pérdida de la historia del modelo.

Los mecanismos concretos de almacenamiento pertenecen a la arquitectura técnica y quedan fuera del alcance de este documento.

Los Estados Sistémicos son inmutables.

Toda actualización genera un nuevo Estado.

Nunca modifica uno existente.

---

# Consistencia

Toda actualización debe preservar la consistencia global del Modelo Vivo.

No pueden coexistir representaciones incompatibles del mismo estado de conocimiento.

La consistencia del modelo prevalece sobre cualquier necesidad de representación particular de un instrumento.

---

# Capacidades

El Modelo Vivo proporciona al producto las siguientes capacidades:

- mantener una representación única del conocimiento organizacional;
- ofrecer un punto común de consulta para todos los instrumentos;
- permitir la exploración del conocimiento desde distintos niveles de detalle;
- conservar la continuidad entre estados sucesivos;
- facilitar la trazabilidad del conocimiento representado;
- proporcionar una referencia estable para la interpretación sistémica;
- mantener sincronizados todos los instrumentos que consumen el modelo.

Estas capacidades pertenecen al instrumento.

No constituyen funcionalidades de una interfaz concreta.

---

# Exploración

El Modelo Vivo puede ser recorrido desde cualquiera de los elementos que integran la representación del conocimiento.

Cada instrumento determina la forma en que dicha exploración se presenta al usuario.

La lógica de navegación pertenece a cada instrumento.

La coherencia del recorrido pertenece al Modelo Vivo.

---

# Sincronización

Todos los instrumentos consumen el mismo estado vigente del Modelo Vivo.

No mantienen copias independientes.

No generan representaciones paralelas.

Toda modificación autorizada del Modelo Vivo se refleja de forma coherente en el conjunto del producto.

---

# Neutralidad de representación

El Modelo Vivo es independiente de cualquier forma de representación gráfica.

Puede representarse mediante:

- vistas;
- paneles;
- grafos;
- cronologías;
- mapas;
- resúmenes;
- cualquier otra superficie compatible con el Sistema Normativo.

Ninguna representación visual forma parte del Modelo Vivo.

Todas constituyen únicamente mecanismos de acceso al mismo instrumento.

---

# Garantías

El Modelo Vivo garantiza:

- existencia de una única representación vigente;
- coherencia entre instrumentos;
- continuidad temporal;
- trazabilidad completa;
- independencia respecto a la interfaz;
- compatibilidad con el Sistema Normativo;
- estabilidad semántica del conocimiento representado.

Estas garantías constituyen requisitos permanentes del producto.

---

# Interfaces

El Modelo Vivo actúa como fuente común de conocimiento para los instrumentos definidos por la capa Producto.

Cada instrumento consume la representación mantenida por el Modelo Vivo conforme a su responsabilidad específica.

Ningún instrumento modifica directamente el contenido del Modelo Vivo salvo mediante los mecanismos autorizados por la metodología vigente.

La incorporación de nuevos instrumentos no altera la naturaleza del Modelo Vivo.

Únicamente amplía las formas en que el conocimiento puede explorarse o utilizarse.

---

# Integración con el producto

El Modelo Vivo constituye la representación compartida utilizada por los instrumentos definidos en la capa Producto.

Cada instrumento responde una necesidad distinta del usuario.

Ninguno mantiene conocimiento propio.

Todos consumen el conocimiento mantenido por el Modelo Vivo.

Las responsabilidades particulares de cada instrumento se definen en sus respectivos documentos.

---

# Relación con los instrumentos

Los instrumentos del producto utilizan el Modelo Vivo como fuente única de representación.

El Modelo Vivo no sustituye la responsabilidad de cada instrumento.

Cada instrumento determina:

- qué parte del Modelo presenta;
- cómo organiza su exploración;
- qué interacción ofrece al usuario;
- qué contexto proporciona durante la navegación.

El Modelo Vivo garantiza únicamente la coherencia del conocimiento compartido.

---

# Relación con la confianza

La confianza constituye un eje independiente del Modelo Vivo.

Las variaciones de confianza no modifican los Estados Sistémicos.

Los Estados y la confianza evolucionan de forma ortogonal conforme al Sistema Normativo.

---

# Extensibilidad

El Modelo Vivo admite la incorporación de nuevos instrumentos sin modificar su naturaleza.

La evolución del producto no requiere redefinir el Modelo Vivo.

Los nuevos instrumentos deberán consumir la representación vigente respetando las restricciones establecidas por este documento y por el Sistema Normativo.

---

# Contrato del Modelo Vivo

El Modelo Vivo constituye el contrato de representación compartido por todos los instrumentos del producto.

Todo instrumento que utilice el Modelo Vivo asume las siguientes garantías:

- existe una única representación vigente;
- la representación es coherente con el Sistema Normativo;
- toda actualización mantiene la continuidad del modelo;
- la representación conserva su trazabilidad;
- el significado del conocimiento no depende de la interfaz;
- los cambios metodológicos se reflejan mediante nuevas versiones del modelo.

Ningún instrumento puede exigir responsabilidades distintas al Modelo Vivo.

Toda necesidad adicional deberá resolverse mediante nuevos instrumentos o mediante la evolución del Sistema Normativo.

---

# Restricciones

El Modelo Vivo no:

- redefine conceptos canónicos;
- modifica la Ontología;
- interpreta la evidencia;
- ejecuta la metodología;
- establece criterios epistemológicos;
- realiza inferencias por sí mismo;
- sustituye al juicio humano;
- depende de una representación gráfica concreta;
- depende de una tecnología específica;
- depende de una implementación determinada.

Toda ampliación de responsabilidades deberá realizarse mediante la creación o modificación del documento normativo correspondiente, nunca ampliando el alcance del Modelo Vivo.

---

# Compatibilidad

Toda implementación del Modelo Vivo deberá ser compatible con:

- el Sistema Normativo;
- el Gobierno del Canon;
- las definiciones canónicas vigentes;
- la metodología vigente;
- la ontología vigente.

La compatibilidad normativa constituye un requisito obligatorio para cualquier evolución del producto.

---

# Evolución

La evolución del Modelo Vivo únicamente puede afectar a su capacidad como instrumento de producto.

No puede utilizarse para introducir nuevas definiciones del dominio.

No puede utilizarse para modificar conceptos canónicos.

Cuando una evolución requiera alterar el significado de un concepto, dicha modificación deberá realizarse previamente en la capa normativa correspondiente.

---

# Criterios de aceptación

Una implementación del Modelo Vivo se considera conforme únicamente cuando cumple todas las condiciones siguientes:

- existe un único Modelo Vivo por organización;
- todos los instrumentos utilizan la misma representación;
- ninguna interfaz modifica el significado del modelo;
- toda representación mantiene coherencia con el Sistema Normativo;
- la continuidad entre versiones queda preservada;
- la trazabilidad permanece íntegra;
- las actualizaciones afectan al conocimiento representado y no a la definición de los conceptos;
- el modelo permanece independiente de cualquier tecnología o interfaz.

El incumplimiento de cualquiera de estos criterios implica que la implementación no es conforme con el Canon.

---

# Referencias normativas

Este documento depende de los documentos canónicos definidos en:

- `00_canon/`
- `10_nucleo/`
- `20_epistemologia/`
- `30_ontologia/`
- `40_metodologia/`

Las definiciones contenidas en dichos documentos prevalecen siempre sobre este documento.

---

# Gobierno

La evolución de este documento se encuentra sujeta a las normas establecidas por:

- Sistema Normativo.
- Gobierno del Canon.

No podrán incorporarse definiciones pertenecientes a otras capas de la arquitectura documental.

Toda modificación deberá preservar la separación entre:

- Canon;
- Núcleo;
- Epistemología;
- Ontología;
- Metodología;
- Producto.

---

# Resultado esperado

El Modelo Vivo constituye la representación operacional única del conocimiento organizacional utilizada por ATÓMICA.

Su responsabilidad consiste exclusivamente en mantener dicho conocimiento disponible, coherente y operativo para los instrumentos del producto.

La generación del conocimiento, su definición, su validación y su interpretación pertenecen a las capas normativas del Canon.

El Modelo Vivo constituye el punto de unión entre el conocimiento definido por el Canon y su utilización dentro del producto.

---

# Trayectoria

La Trayectoria constituye la sucesión ordenada de Estados Sistémicos pertenecientes al mismo Modelo Vivo.

Cada nuevo Estado amplía la Trayectoria.

Los Estados anteriores nunca son modificados.

La Trayectoria garantiza la continuidad histórica del Modelo Vivo.

---


# Límites del documento

Este documento no constituye:

- una especificación funcional;
- una especificación técnica;
- una definición ontológica;
- una definición metodológica;
- una guía de implementación.

Su única finalidad consiste en establecer las responsabilidades del Modelo Vivo como instrumento perteneciente a la capa Producto.
