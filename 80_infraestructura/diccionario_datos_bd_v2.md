# Diccionario de datos BD v2

Estado: CANÓNICO

Versión: 1.0.0

Tipo: Infraestructura

Ubicación:

80_infraestructura/diccionario_datos_bd_v2.md

---

# Propósito

Este documento constituye la especificación lógica de todas las entidades persistentes de la Base de Datos v2.

Su finalidad consiste en definir la estructura de datos necesaria para implementar el dominio descrito por el Canon.

No define la arquitectura del dominio.

No define la metodología.

No constituye una implementación física.

---

# Alcance

Este documento especifica:

* entidades;
* atributos;
* claves;
* relaciones;
* restricciones;
* nulabilidad;
* índices lógicos;
* reglas de integridad.

No especifica:

* SQL;
* RLS;
* migraciones;
* rendimiento;
* implementación tecnológica.

---

# Dependencias

Este documento depende de:

* `30_ontologia/`
* `40_metodologia/`
* `50_producto/modelo_vivo.md`
* `80_infraestructura/esquema_canonico.md`
* `80_infraestructura/esquema_bd_v2.md`

En caso de conflicto prevalecerán siempre dichos documentos.

---

# Organización

Las entidades se documentan siguiendo exactamente los módulos definidos por `esquema_bd_v2.md`.

Cada entidad constituye una especificación completa e independiente.

No podrán existir entidades no documentadas en este diccionario.

# Especificación de entidades

Todas las entidades definidas en este documento deberán documentarse utilizando exactamente la siguiente estructura.

---

# Nombre de la entidad

## Propósito

Describe la responsabilidad exclusiva de la entidad.

---

## Módulo

Indica el módulo al que pertenece.

---

## Clave primaria

Especifica la clave primaria de la entidad.

---

## Claves naturales

Especifica, cuando existan, los identificadores naturales.

Si no existen, deberá indicarse expresamente.

---

## Atributos

| Atributo | Tipo lógico | Nulo | Descripción |
| -------- | ----------- | ---- | ----------- |

Todos los atributos deberán documentarse.

---

## Restricciones

Se especificarán todas las restricciones lógicas aplicables.

Incluyen, entre otras:

* unicidad;
* obligatoriedad;
* dominio permitido;
* cardinalidad.

---

## Relaciones

Para cada relación deberán indicarse:

* entidad relacionada;
* cardinalidad;
* obligatoriedad.

---

## Integridad

Se documentarán las reglas que garantizan la consistencia de la entidad.

---

## Versionado

Se indicará si la entidad:

* es versionable;
* genera historial;
* es inmutable;
* admite sustitución.

---

## Auditoría

Se indicará la información mínima necesaria para garantizar la trazabilidad.

---

## Observaciones

Únicamente podrán incluirse aclaraciones relevantes para la implementación del dominio.

No podrán incorporarse decisiones físicas ni instrucciones SQL.

---

# Restricción documental

Toda entidad persistente del sistema deberá aparecer exactamente una vez en este documento.

No podrán existir entidades implementadas que no hayan sido previamente especificadas aquí.

La implementación física deberá derivarse exclusivamente de este diccionario.

---

# marco_metodologico

## Propósito

Representa una versión completa del marco metodológico utilizado para construir el Modelo Vivo.

Toda observación y todo Estado Sistémico deberán referenciar explícitamente una versión del marco metodológico.

Nunca se modificará una versión existente.

Toda evolución generará una nueva versión.

---

## Módulo

Módulo 1 · Marco metodológico

---

## Clave primaria

```text
id
```

---

## Claves naturales

```text
codigo
version
```

La combinación deberá ser única.

---

## Atributos

| Atributo      | Tipo lógico | Nulo | Descripción                 |
| ------------- | ----------- | ---- | --------------------------- |
| id            | UUID        | No   | Identificador único         |
| codigo        | Texto corto | No   | Código del marco            |
| version       | Texto corto | No   | Versión metodológica        |
| nombre        | Texto       | No   | Nombre del marco            |
| descripcion   | Texto largo | Sí   | Descripción                 |
| estado        | Enumerado   | No   | Borrador, vigente, retirado |
| vigente_desde | FechaHora   | Sí   | Inicio de vigencia          |
| vigente_hasta | FechaHora   | Sí   | Fin de vigencia             |
| creado_en     | FechaHora   | No   | Creación                    |
| creado_por    | UUID        | Sí   | Autor responsable           |

---

## Restricciones

Solo podrá existir una versión vigente para un mismo código.

Una versión publicada nunca podrá modificarse.

---

## Relaciones

Un marco metodológico posee múltiples:

* dimensiones;
* capacidades;
* preguntas;
* umbrales;
* instrumentos.

---

## Integridad

Toda entidad metodológica deberá pertenecer exactamente a un marco metodológico.

---

## Versionado

Entidad versionable.

Registros inmutables tras su publicación.

---

## Auditoría

Toda publicación deberá conservar:

* autor;
* fecha;
* versión;
* motivo de publicación.

---

## Observaciones

Constituye la raíz de todo el conocimiento metodológico del sistema.

---

# dimension

## Propósito

Representa una dimensión metodológica utilizada para organizar las capacidades del modelo.

Las dimensiones constituyen el primer nivel de clasificación del marco metodológico.

---

## Módulo

Módulo 1 · Marco metodológico

---

## Clave primaria

```text
id
```

---

## Claves naturales

```text
marco_metodologico_id
codigo
```

La combinación deberá ser única.

---

## Atributos

| Atributo              | Tipo lógico | Nulo | Descripción            |
| --------------------- | ----------- | ---- | ---------------------- |
| id                    | UUID        | No   | Identificador único    |
| marco_metodologico_id | UUID        | No   | Marco al que pertenece |
| codigo                | Texto corto | No   | Código de la dimensión |
| nombre                | Texto       | No   | Nombre                 |
| descripcion           | Texto largo | Sí   | Descripción            |
| orden                 | Entero      | No   | Orden de presentación  |
| activa                | Booleano    | No   | Estado operativo       |

---

## Restricciones

Cada dimensión pertenece a un único marco metodológico.

No podrán existir códigos duplicados dentro del mismo marco.

---

## Relaciones

Pertenece a:

* marco_metodologico

Contiene múltiples:

* capacidades

---

## Integridad

La eliminación de un marco metodológico no podrá dejar dimensiones huérfanas.

---

## Versionado

Hereda el versionado del marco metodológico.

No podrá cambiar de marco.

---

## Auditoría

Se registrarán creación, publicación y retirada.

---

## Observaciones

Las dimensiones son elementos metodológicos.

Nunca almacenan resultados de una organización.

---

# capacidad

## Propósito

Representa la unidad metodológica básica sobre la que se realizan las observaciones del sistema.

Toda observación, hipótesis, intervención y evolución del Modelo Vivo se refiere, directa o indirectamente, a una capacidad.

---

## Módulo

Módulo 1 · Marco metodológico

---

## Clave primaria

```text
id
```

---

## Claves naturales

```text
marco_metodologico_id
codigo
```

La combinación deberá ser única.

---

## Atributos

| Atributo              | Tipo lógico | Nulo | Descripción                    |
| --------------------- | ----------- | ---- | ------------------------------ |
| id                    | UUID        | No   | Identificador único            |
| marco_metodologico_id | UUID        | No   | Marco metodológico             |
| dimension_id          | UUID        | No   | Dimensión a la que pertenece   |
| codigo                | Texto corto | No   | Código estable de la capacidad |
| nombre                | Texto       | No   | Nombre                         |
| descripcion           | Texto largo | Sí   | Definición metodológica        |
| orden                 | Entero      | No   | Orden dentro de la dimensión   |
| activa                | Booleano    | No   | Estado operativo               |

---

## Restricciones

Cada capacidad pertenece exactamente a una dimensión.

No podrán existir códigos repetidos dentro del mismo marco metodológico.

Una capacidad nunca podrá pertenecer simultáneamente a dos dimensiones.

---

## Relaciones

Pertenece a:

* marco_metodologico
* dimension

Es referenciada por:

* preguntas
* observaciones
* hipótesis
* intervenciones

---

## Integridad

No podrá eliminarse una capacidad utilizada por observaciones históricas.

La sustitución se realizará exclusivamente mediante una nueva versión del marco metodológico.

---

## Versionado

Hereda el versionado del marco metodológico.

Los registros publicados serán inmutables.

---

## Auditoría

Se conservarán:

* fecha de creación;
* autor;
* versión metodológica;
* motivo de sustitución, cuando exista.

---

## Observaciones

La capacidad constituye la unidad metodológica fundamental del dominio.

No almacena información específica de ninguna organización.

Todo dato organizacional pertenece a los módulos posteriores.

---

# pregunta

## Propósito

Representa un instrumento metodológico destinado a obtener observaciones sobre una capacidad.

Una pregunta nunca constituye conocimiento.

Únicamente permite capturar información que posteriormente será interpretada conforme a la metodología vigente.

---

## Módulo

Módulo 1 · Marco metodológico

---

## Clave primaria

```text
id
```

---

## Claves naturales

```text
marco_metodologico_id
codigo
```

La combinación deberá ser única.

---

## Atributos

| Atributo              | Tipo lógico | Nulo | Descripción                |
| --------------------- | ----------- | ---- | -------------------------- |
| id                    | UUID        | No   | Identificador único        |
| marco_metodologico_id | UUID        | No   | Marco metodológico         |
| capacidad_id          | UUID        | No   | Capacidad evaluada         |
| codigo                | Texto corto | No   | Código estable             |
| texto                 | Texto largo | No   | Enunciado                  |
| descripcion           | Texto largo | Sí   | Aclaraciones metodológicas |
| tipo_respuesta        | Enumerado   | No   | Tipo de respuesta esperado |
| obligatoria           | Booleano    | No   | Obligatoriedad             |
| orden                 | Entero      | No   | Orden de presentación      |
| activa                | Booleano    | No   | Estado operativo           |

---

## Restricciones

Toda pregunta pertenece exactamente a una capacidad.

No podrán existir códigos duplicados dentro del mismo marco metodológico.

El tipo de respuesta deberá corresponder con el instrumento metodológico definido.

---

## Relaciones

Pertenece a:

* marco_metodologico
* capacidad

Es utilizada por:

* observaciones

---

## Integridad

Una pregunta utilizada en observaciones históricas no podrá eliminarse.

Su modificación requerirá una nueva versión del marco metodológico.

---

## Versionado

Hereda el versionado del marco metodológico.

Es inmutable una vez publicada.

---

## Auditoría

Se conservarán:

* fecha de creación;
* autor;
* versión metodológica;
* motivo de sustitución.

---

## Observaciones

Las preguntas pertenecen exclusivamente al marco metodológico.

No almacenan respuestas.

Las respuestas pertenecen al Módulo 3 · Observaciones.

---

# instrumento

## Propósito

Representa el mecanismo metodológico mediante el cual se obtiene una observación.

Un instrumento define cómo se captura información.

Nunca almacena observaciones.

Nunca interpreta resultados.

---

## Módulo

Módulo 1 · Marco metodológico

---

## Clave primaria

```text
id
```

---

## Claves naturales

```text
marco_metodologico_id
codigo
```

La combinación deberá ser única.

---

## Atributos

| Atributo              | Tipo lógico | Nulo | Descripción             |
| --------------------- | ----------- | ---- | ----------------------- |
| id                    | UUID        | No   | Identificador único     |
| marco_metodologico_id | UUID        | No   | Marco metodológico      |
| codigo                | Texto corto | No   | Código estable          |
| nombre                | Texto       | No   | Nombre del instrumento  |
| descripcion           | Texto largo | Sí   | Definición metodológica |
| tipo                  | Enumerado   | No   | Tipo de instrumento     |
| activo                | Booleano    | No   | Estado operativo        |

---

## Restricciones

Cada instrumento pertenece exactamente a un marco metodológico.

No podrán existir códigos duplicados dentro del mismo marco.

---

## Relaciones

Pertenece a:

* marco_metodologico

Es utilizado por:

* observaciones

---

## Integridad

Los instrumentos utilizados por observaciones históricas no podrán eliminarse.

---

## Versionado

Hereda el versionado del marco metodológico.

Es inmutable tras su publicación.

---

## Auditoría

Se conservarán:

* autor;
* fecha de creación;
* versión metodológica.

---

## Observaciones

El instrumento describe el mecanismo de captura.

La observación constituye el dato obtenido mediante dicho instrumento.

---

# organizacion

## Propósito

Representa el referente organizacional sobre el que se construye un Modelo Vivo.

La organización no es el Modelo Vivo.

No representa conocimiento.

Constituye únicamente la identidad persistente sobre la que se realizan observaciones.

---

## Módulo

Módulo 2 · Organizaciones

---

## Clave primaria

```text
id
```

---

## Claves naturales

```text
identificador_legal
```

Cuando exista (NIF, CIF u otro identificador oficial), deberá ser único.

---

## Atributos

| Atributo            | Tipo lógico | Nulo | Descripción               |
| ------------------- | ----------- | ---- | ------------------------- |
| id                  | UUID        | No   | Identificador único       |
| identificador_legal | Texto corto | Sí   | Identificador oficial     |
| nombre              | Texto       | No   | Denominación              |
| tipo                | Enumerado   | No   | Tipo de organización      |
| pais                | Texto corto | No   | País                      |
| fecha_constitucion  | Fecha       | Sí   | Constitución              |
| estado              | Enumerado   | No   | Estado de la organización |
| creada_en           | FechaHora   | No   | Alta                      |
| actualizada_en      | FechaHora   | No   | Última actualización      |

---

## Restricciones

Una organización representa un único referente organizacional.

La identidad organizacional nunca podrá reutilizarse.

---

## Relaciones

Es referenciada por:

* miembros_organizacion
* observaciones
* modelo_vivo
* ruptura_identidad

---

## Integridad

Una organización con información histórica no podrá eliminarse físicamente.

La supresión deberá seguir las reglas establecidas por la política de conservación.

---

## Versionado

La identidad permanece estable durante toda la existencia de la organización.

Las modificaciones de identidad se representan mediante eventos de ruptura.

---

## Auditoría

Se conservarán:

* creación;
* modificaciones;
* cambios de identidad.

---

## Observaciones

Esta entidad representa únicamente la existencia de la organización.

El conocimiento sobre ella pertenece al Modelo Vivo.

---

# miembro_organizacion

## Propósito

Representa la pertenencia de un usuario a una organización.

La pertenencia determina los permisos de acceso sobre el Modelo Vivo.

Un usuario puede pertenecer a varias organizaciones.

Una organización puede tener múltiples usuarios.

---

## Módulo

Módulo 2 · Organizaciones

---

## Clave primaria

```text
id
```

---

## Claves naturales

```text
organizacion_id
usuario_id
```

La combinación deberá ser única.

---

## Atributos

| Atributo         | Tipo lógico | Nulo | Descripción                            |
| ---------------- | ----------- | ---- | -------------------------------------- |
| id               | UUID        | No   | Identificador único                    |
| organizacion_id  | UUID        | No   | Organización                           |
| usuario_id       | UUID        | No   | Usuario                                |
| rol              | Enumerado   | No   | Rol dentro de la organización          |
| estado           | Enumerado   | No   | Invitado, activo, suspendido, revocado |
| invitado_por     | UUID        | Sí   | Usuario que realizó la invitación      |
| fecha_invitacion | FechaHora   | Sí   | Fecha de invitación                    |
| fecha_aceptacion | FechaHora   | Sí   | Fecha de aceptación                    |
| creado_en        | FechaHora   | No   | Alta del registro                      |
| actualizado_en   | FechaHora   | No   | Última modificación                    |

---

## Restricciones

Un usuario no podrá tener dos pertenencias activas a la misma organización.

Solo podrán existir los roles definidos por el marco de autorización.

---

## Relaciones

Pertenece a:

* organizacion
* usuario

Es utilizada por:

* políticas RLS
* auditoría
* asignación de responsabilidades

---

## Integridad

La eliminación de un usuario no eliminará automáticamente la pertenencia histórica.

La revocación de acceso deberá conservar la trazabilidad.

---

## Versionado

No versionable.

La evolución del acceso se representa mediante cambios de estado.

---

## Auditoría

Se registrarán:

* altas;
* cambios de rol;
* revocaciones;
* reactivaciones.

---

## Observaciones

Esta entidad constituye la base del modelo de autorización.

Las políticas RLS deberán derivarse exclusivamente de esta relación.

Nunca deberán depender de relaciones indirectas o recursivas.

---

# organizacion_marco_metodologico

## Propósito

Representa la asignación de un marco metodológico a una organización durante un intervalo temporal determinado.

Toda observación deberá realizarse bajo una versión explícita del marco metodológico.

Nunca se modificará retrospectivamente la asignación utilizada por observaciones históricas.

---

## Módulo

Módulo 2 · Organizaciones

---

## Clave primaria

```text
id
```

---

## Claves naturales

```text
organizacion_id
marco_metodologico_id
vigente_desde
```

La combinación deberá ser única.

---

## Atributos

| Atributo              | Tipo lógico | Nulo | Descripción                 |
| --------------------- | ----------- | ---- | --------------------------- |
| id                    | UUID        | No   | Identificador único         |
| organizacion_id       | UUID        | No   | Organización                |
| marco_metodologico_id | UUID        | No   | Marco metodológico asignado |
| vigente_desde         | FechaHora   | No   | Inicio de vigencia          |
| vigente_hasta         | FechaHora   | Sí   | Fin de vigencia             |
| motivo                | Texto largo | Sí   | Justificación del cambio    |
| creado_en             | FechaHora   | No   | Fecha de creación           |
| creado_por            | UUID        | Sí   | Responsable del cambio      |

---

## Restricciones

Solo podrá existir una asignación vigente por organización.

Los periodos de vigencia no podrán solaparse.

Toda observación deberá referenciar una asignación válida para su fecha de realización.

---

## Relaciones

Pertenece a:

* organizacion
* marco_metodologico

Es utilizada por:

* observaciones
* modelo_vivo
* estados_sistemicos

---

## Integridad

Una asignación utilizada por observaciones históricas no podrá eliminarse.

Los cambios metodológicos generarán una nueva asignación, nunca la modificación de una existente.

---

## Versionado

Entidad histórica.

Cada cambio crea un nuevo registro.

Los registros anteriores permanecen inmutables.

---

## Auditoría

Se conservarán:

* autor del cambio;
* fecha;
* motivo;
* versión metodológica asignada.

---

## Observaciones

Esta entidad materializa la Regla 10 del contrato de implementación.

Garantiza que cualquier observación y cualquier Estado Sistémico puedan reconstruirse exactamente utilizando la versión metodológica vigente en el momento en que fueron generados.

---

# observacion

## Propósito

Representa un proceso completo de observación realizado sobre una organización conforme a una versión concreta del marco metodológico.

Una observación constituye el origen de todo conocimiento generado por ATÓMICA.

No representa resultados.

No representa hipótesis.

No representa el Estado Sistémico.

---

## Módulo

Módulo 3 · Observaciones

---

## Clave primaria

```text
id
```

---

## Claves naturales

No existen.

---

## Atributos

| Atributo              | Tipo lógico | Nulo | Descripción                             |
| --------------------- | ----------- | ---- | --------------------------------------- |
| id                    | UUID        | No   | Identificador único                     |
| organizacion_id       | UUID        | No   | Organización observada                  |
| marco_metodologico_id | UUID        | No   | Marco metodológico utilizado            |
| instrumento_id        | UUID        | No   | Instrumento utilizado                   |
| observador_id         | UUID        | Sí   | Usuario responsable                     |
| estado                | Enumerado   | No   | Borrador, en curso, finalizada, anulada |
| iniciada_en           | FechaHora   | No   | Inicio                                  |
| finalizada_en         | FechaHora   | Sí   | Finalización                            |
| confianza             | Decimal     | Sí   | Nivel global de confianza               |
| observaciones         | Texto largo | Sí   | Notas generales                         |
| creada_en             | FechaHora   | No   | Creación                                |
| actualizada_en        | FechaHora   | No   | Última modificación                     |

---

## Restricciones

Solo podrán registrarse respuestas mientras la observación permanezca abierta.

Una observación finalizada será inmutable.

Toda observación deberá estar vinculada a una organización y a un marco metodológico.

---

## Relaciones

Pertenece a:

* organizacion
* marco_metodologico
* instrumento

Contiene múltiples:

* respuestas
* evidencias

Origina:

* modelo_vivo
* hipótesis

---

## Integridad

No podrá eliminarse una observación utilizada para construir un Estado Sistémico.

La anulación deberá conservar el registro histórico.

---

## Versionado

Entidad histórica.

No se modifica tras su finalización.

---

## Auditoría

Se registrarán:

* inicio;
* cierre;
* anulación;
* usuario responsable.

---

## Observaciones

La observación constituye la unidad de trabajo del sistema.

Todo conocimiento posterior deberá poder reconstruirse a partir de una o varias observaciones identificables.

---

# respuesta

## Propósito

Representa la respuesta proporcionada a una pregunta durante una observación.

La respuesta constituye un dato observado.

No constituye una interpretación.

No constituye una hipótesis.

---

## Módulo

Módulo 3 · Observaciones

---

## Clave primaria

```text id="4myo4z"
id
```

---

## Claves naturales

```text id="h3slsw"
observacion_id
pregunta_id
```

La combinación deberá ser única.

---

## Atributos

| Atributo       | Tipo lógico | Nulo | Descripción                                       |
| -------------- | ----------- | ---- | ------------------------------------------------- |
| id             | UUID        | No   | Identificador único                               |
| observacion_id | UUID        | No   | Observación                                       |
| pregunta_id    | UUID        | No   | Pregunta respondida                               |
| capacidad_id   | UUID        | No   | Capacidad observada (desnormalización controlada) |
| valor          | JSONB       | No   | Valor de la respuesta                             |
| confianza      | Decimal     | Sí   | Confianza declarada                               |
| comentario     | Texto largo | Sí   | Observaciones adicionales                         |
| respondida_en  | FechaHora   | No   | Fecha de respuesta                                |
| respondida_por | UUID        | Sí   | Usuario responsable                               |

---

## Restricciones

Solo podrá existir una respuesta por pregunta dentro de una observación.

El tipo almacenado en `valor` deberá ser compatible con `pregunta.tipo_respuesta`.

No podrán añadirse respuestas a una observación finalizada.

---

## Relaciones

Pertenece a:

* observacion
* pregunta
* capacidad

Puede estar respaldada por:

* evidencias

Es utilizada por:

* modelo_vivo
* hipótesis

---

## Integridad

La eliminación de una respuesta invalidará la observación completa.

No podrá eliminarse individualmente una respuesta perteneciente a una observación cerrada.

---

## Versionado

No versionable.

Las correcciones se realizarán mientras la observación permanezca abierta.

Una vez cerrada será inmutable.

---

## Auditoría

Se registrarán:

* creación;
* modificación antes del cierre;
* usuario responsable.

---

## Observaciones

`valor` se almacena como **JSONB** para admitir distintos tipos de respuesta (escala, selección única, múltiple, texto, numérico, fecha, etc.) sin modificar el esquema físico.

La interpretación del contenido pertenece a la metodología, no a esta entidad.

# evidencia

## Propósito

Representa un elemento verificable que respalda una o varias respuestas obtenidas durante una observación.

La evidencia incrementa o reduce la confianza del conocimiento.

Nunca modifica directamente el Estado Sistémico.

---

## Módulo

Módulo 3 · Observaciones

---

## Clave primaria

```text
id
```

---

## Claves naturales

No existen.

---

## Atributos

| Atributo        | Tipo lógico | Nulo | Descripción                              |
| --------------- | ----------- | ---- | ---------------------------------------- |
| id              | UUID        | No   | Identificador único                      |
| observacion_id  | UUID        | No   | Observación a la que pertenece           |
| tipo            | Enumerado   | No   | Tipo de evidencia                        |
| titulo          | Texto       | No   | Nombre descriptivo                       |
| descripcion     | Texto largo | Sí   | Descripción                              |
| ubicacion       | Texto       | Sí   | Ruta, URL o referencia física            |
| hash            | Texto corto | Sí   | Huella de integridad                     |
| fecha_documento | Fecha       | Sí   | Fecha del documento                      |
| fecha_caducidad | Fecha       | Sí   | Fecha de expiración, si aplica           |
| estado          | Enumerado   | No   | Pendiente, validada, rechazada, caducada |
| creada_en       | FechaHora   | No   | Fecha de registro                        |
| creada_por      | UUID        | Sí   | Usuario responsable                      |

---

## Restricciones

Toda evidencia pertenece exactamente a una observación.

La evidencia podrá existir aunque todavía no haya sido validada.

La validación nunca modificará la evidencia original.

---

## Relaciones

Pertenece a:

* observacion

Puede respaldar múltiples:

* respuestas

Puede ser utilizada por múltiples:

* hipótesis

---

## Integridad

La eliminación física de evidencias estará prohibida salvo obligación legal.

Las invalidaciones se representarán mediante cambios de estado.

---

## Versionado

Entidad histórica.

Las evidencias no se sobrescriben.

Las modificaciones generan nuevos registros o nuevos estados de validación.

---

## Auditoría

Se conservarán:

* creación;
* validaciones;
* rechazos;
* caducidad;
* usuario responsable.

---

## Observaciones

La evidencia constituye un elemento independiente del conocimiento.

Su función es aumentar o disminuir la confianza del Modelo Vivo.

Nunca altera directamente el conocimiento representado.
