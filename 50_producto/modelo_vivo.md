# Modelo Vivo

Estado: CANÓNICO

Versión: 2.0.1

Tipo: Producto

Ubicación:

50_producto/modelo_vivo.md

---

# Propósito

El Modelo Vivo constituye el instrumento central del producto ATÓMICA.

Su finalidad consiste en mantener disponible para los instrumentos del producto la representación vigente del conocimiento admitido por el Modelo sobre una organización.

El Modelo Vivo no genera conocimiento.

No modifica el conocimiento.

No redefine conceptos del Canon.

Su responsabilidad consiste exclusivamente en mantener operativo, para el Producto, el conocimiento producido conforme al Sistema Normativo de ATÓMICA.

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

El Modelo Vivo constituye un instrumento permanente del Producto.

Su existencia es independiente de:

- la interfaz;
- la representación visual;
- la tecnología utilizada;
- la persistencia física;
- la implementación.

Las distintas superficies del Producto representan el conocimiento disponible mediante el Modelo Vivo.

Nunca lo sustituyen.

Nunca modifican su significado.

---

# Objetivo

El Modelo Vivo proporciona al Producto acceso coherente a la representación vigente del conocimiento organizacional admitido por el Modelo.

Todos los instrumentos del Producto utilizan esa representación común.

Ningún instrumento mantiene un modelo propio.

Toda exploración realizada dentro del Producto parte del estado vigente del Modelo Vivo.

---

# Responsabilidad

Corresponde exclusivamente al Modelo Vivo:

- mantener disponible la representación vigente del conocimiento generado mediante la metodología vigente;
- proporcionar una referencia común para todos los instrumentos del Producto;
- garantizar la coherencia entre las superficies que consumen el modelo;
- mantener la trazabilidad exigida por el Sistema Normativo;
- conservar la continuidad histórica del conocimiento representado;
- facilitar la exploración del conocimiento representado.

Ninguna responsabilidad ajena al Producto pertenece al Modelo Vivo.

---

# Principios operativos

## MV-001 · Fuente única

Existe una única representación vigente del Modelo para una organización.

Toda representación del Producto procede de la misma fuente de conocimiento.

No existen modelos alternativos mantenidos por instrumentos del Producto.

---

## MV-002 · Coherencia

Todos los instrumentos consultan la representación vigente del mismo Modelo.

No pueden existir modelos incompatibles mantenidos por distintas superficies.

---

## MV-003 · Independencia

La interfaz consume el Modelo Vivo.

Nunca altera su contenido.

Los cambios de diseño no modifican el significado del conocimiento representado.

---

## MV-004 · Continuidad

El Modelo Vivo mantiene continuidad entre sucesivos Estados del Modelo.

Cada actualización preserva la trazabilidad del conocimiento representado.

---

## MV-005 · Trazabilidad

Toda representación mantenida por el Modelo Vivo conserva la trazabilidad establecida por el Sistema Normativo.

---

## MV-006 · Inmutabilidad

Los Estados y las Representaciones pertenecientes al Modelo son inmutables.

La evolución del Modelo se produce mediante la incorporación de nuevas Representaciones y nuevos Estados.

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

La definición ontológica del Modelo, Estado, Representación, Trayectoria y Memoria pertenece a la Ontología.

La validez del conocimiento pertenece a la Epistemología.

El Modelo Vivo únicamente mantiene dicho conocimiento disponible para el Producto.

---

# Unidad de representación

Existe un único Modelo para cada organización.

El Modelo Vivo proporciona acceso al Estado vigente de dicho Modelo.

No existen representaciones independientes por instrumento.

Toda superficie explora el mismo conocimiento representado.

---

# Entradas

El Modelo Vivo recibe las representaciones generadas por la metodología a partir del conocimiento admitido por el Modelo.

Las Observaciones constituyen entradas del proceso de construcción del conocimiento, no entradas directas del Modelo Vivo.

No incorpora información procedente de fuentes no reguladas por el Sistema Normativo.

La definición, validación e interpretación del conocimiento pertenecen a las capas correspondientes del Canon.

---

# Actualización

El Modelo Vivo se actualiza cuando cambia el conocimiento representado por el Modelo y dicho cambio produce una nueva Representación y un nuevo Estado.

Una actualización puede producirse como consecuencia de:

- nuevo conocimiento admitido;
- nueva Evidencia;
- cambios metodológicos autorizados;
- procesos de reevaluación previstos por la metodología vigente.

Ninguna modificación de la interfaz, de la implementación técnica o de la experiencia de usuario constituye una actualización del Modelo Vivo.

---

# Estado vigente

En cada instante existe un único Estado vigente para una misma Identidad.

Ese Estado constituye la referencia utilizada por los instrumentos del Producto.

Los Estados anteriores permanecen disponibles como parte de la Memoria y de la Trayectoria del Modelo.

---

# Persistencia

El Modelo Vivo mantiene continuidad entre actualizaciones.

Cada nuevo Estado referencia una nueva Representación del conocimiento admitido.

La actualización de una Representación nunca implica la pérdida de las Representaciones anteriores.

Los mecanismos concretos de almacenamiento pertenecen a la arquitectura técnica y quedan fuera del alcance de este documento.

Los Estados y las Representaciones son inmutables.

Toda modificación del conocimiento admitido que requiera una nueva representación genera una nueva Representación y un nuevo Estado.

Nunca modifica uno existente.

---

# Consistencia

Toda actualización debe preservar la consistencia global de la representación utilizada por el Producto.

No pueden coexistir representaciones incompatibles del mismo Estado vigente dentro de los instrumentos del Producto.

La consistencia del modelo prevalece sobre cualquier necesidad particular de representación de un instrumento.

---

# Capacidades

El Modelo Vivo proporciona al Producto las siguientes capacidades:

- mantener disponible una representación única del conocimiento organizacional;
- ofrecer un punto común de consulta para todos los instrumentos;
- permitir la exploración del conocimiento desde distintos niveles de detalle;
- conservar la continuidad entre Estados sucesivos;
- facilitar la trazabilidad del conocimiento representado;
- proporcionar una referencia estable para la interpretación del conocimiento;
- mantener coherentes los instrumentos que consumen el modelo.

Estas capacidades pertenecen al instrumento.

No constituyen funcionalidades de una interfaz concreta.

---

# Exploración

El Modelo Vivo puede ser recorrido desde cualquiera de los elementos que integran la representación del conocimiento.

Cada instrumento determina la forma en que dicha exploración se presenta al usuario.

La lógica de navegación pertenece a cada instrumento.

La coherencia del conocimiento recorrido pertenece al Modelo Vivo.

---

# Sincronización

Todos los instrumentos consumen el mismo Estado vigente del Modelo Vivo.

No mantienen modelos independientes.

No generan representaciones paralelas del conocimiento.

Toda actualización autorizada del Modelo se refleja de forma coherente en el conjunto del Producto.

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

Todas constituyen únicamente mecanismos de acceso al conocimiento representado.

---

# Garantías

El Modelo Vivo garantiza:

- acceso a una única representación vigente;
- coherencia entre instrumentos;
- continuidad temporal;
- trazabilidad;
- independencia respecto a la interfaz;
- compatibilidad con el Sistema Normativo;
- estabilidad semántica del conocimiento representado.

Estas garantías constituyen requisitos permanentes del Producto.

---

# Interfaces

El Modelo Vivo actúa como fuente común de conocimiento para los instrumentos definidos por la capa Producto.

Cada instrumento consume la representación mantenida por el Modelo Vivo conforme a su responsabilidad específica.

Ningún instrumento modifica directamente el contenido del Modelo Vivo.

Las modificaciones del conocimiento se producen mediante los mecanismos autorizados por la metodología vigente y se reflejan posteriormente en el Producto.

La incorporación de nuevos instrumentos no altera la naturaleza del Modelo Vivo.

Únicamente amplía las formas en que el conocimiento puede explorarse o utilizarse.

---

# Integración con el Producto

El Modelo Vivo constituye la representación compartida utilizada por los instrumentos definidos en la capa Producto.

Cada instrumento responde a una necesidad distinta del usuario.

Ninguno mantiene conocimiento propio.

Todos consumen el conocimiento representado por el Modelo Vivo.

Las responsabilidades particulares de cada instrumento se definen en sus respectivos documentos.

---

# Relación con los instrumentos

Los instrumentos del Producto utilizan el Modelo Vivo como fuente común de representación.

El Modelo Vivo no sustituye la responsabilidad de cada instrumento.

Cada instrumento determina:

- qué parte del Modelo presenta;
- cómo organiza su exploración;
- qué interacción ofrece al usuario;
- qué contexto proporciona durante la navegación.

El Modelo Vivo garantiza únicamente la coherencia del conocimiento compartido.

---

# Relación con la Confianza

La Confianza constituye un elemento epistemológico del conocimiento representado por el Modelo.

El Modelo Vivo no calcula ni modifica la Confianza.

Las variaciones de Confianza deberán producirse conforme a las reglas de la Epistemología y la Metodología vigentes.

---

# Extensibilidad

El Modelo Vivo admite la incorporación de nuevos instrumentos sin modificar su naturaleza.

La evolución del Producto no requiere redefinir el Modelo Vivo.

Los nuevos instrumentos deberán consumir la representación vigente respetando las restricciones establecidas por este documento y por el Sistema Normativo.

---

# Contrato del Modelo Vivo

El Modelo Vivo constituye el contrato de representación compartido por todos los instrumentos del Producto.

Todo instrumento que utilice el Modelo Vivo asume las siguientes garantías:

- existe un único Estado vigente para cada Identidad;
- dicho Estado referencia exactamente una Representación;
- la representación es coherente con el Sistema Normativo;
- toda actualización mantiene la continuidad del Modelo;
- la representación conserva su trazabilidad;
- el significado del conocimiento no depende de la interfaz;
- los cambios metodológicos autorizados se reflejan mediante nuevas Representaciones y nuevos Estados.

Ningún instrumento puede exigir responsabilidades distintas al Modelo Vivo.

Toda necesidad adicional deberá resolverse mediante nuevos instrumentos o mediante la evolución normativa correspondiente.

---

# Restricciones

El Modelo Vivo no:

- redefine conceptos canónicos;
- modifica la Ontología;
- interpreta la Evidencia;
- ejecuta la Metodología;
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

La compatibilidad normativa constituye un requisito obligatorio para cualquier evolución del Producto.

---

# Evolución

La evolución del Modelo Vivo únicamente puede afectar a su capacidad como instrumento de Producto.

No puede utilizarse para introducir nuevas definiciones del dominio.

No puede utilizarse para modificar conceptos canónicos.

Cuando una evolución requiera alterar el significado de un concepto, dicha modificación deberá realizarse previamente en la capa normativa correspondiente.

---

# Criterios de aceptación

Una implementación del Modelo Vivo se considera conforme únicamente cuando cumple todas las condiciones siguientes:

- existe un único Modelo por organización;
- existe un único Estado vigente para cada Identidad;
- cada Estado referencia exactamente una Representación;
- todos los instrumentos utilizan el mismo Modelo;
- ninguna interfaz modifica el significado del modelo;
- toda representación mantiene coherencia con el Sistema Normativo;
- la continuidad entre Estados queda preservada;
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

- Sistema Normativo;
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

El Modelo Vivo constituye el instrumento de Producto que mantiene disponible la representación vigente del conocimiento organizacional admitido por el Modelo.

Su responsabilidad consiste exclusivamente en mantener dicho conocimiento disponible, coherente y operativo para los instrumentos del Producto.

La generación del conocimiento, su definición, su validación y su interpretación pertenecen a las capas correspondientes del Canon.

El Modelo Vivo constituye el punto de unión entre el conocimiento definido por el Canon y su utilización dentro del Producto.

---

# Trayectoria

La Trayectoria constituye la sucesión ordenada de Estados pertenecientes al mismo Modelo y a la misma Identidad.

Cada nuevo Estado amplía la Trayectoria.

Los Estados anteriores nunca son modificados.

La Trayectoria garantiza la continuidad histórica del Modelo.

---

# Límites del documento

Este documento no constituye:

- una especificación funcional;
- una especificación técnica;
- una definición ontológica;
- una definición metodológica;
- una guía de implementación.

Su única finalidad consiste en establecer las responsabilidades del Modelo Vivo como instrumento perteneciente a la capa Producto.
