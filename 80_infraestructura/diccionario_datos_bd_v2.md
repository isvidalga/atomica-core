# Diccionario de Datos BD v2

Estado: BORRADOR

Versión: 2.0.0

Tipo: Infraestructura

Ubicación:

80_infraestructura/diccionario_datos_bd_v2.md

---

# Propósito

Este documento constituye la especificación lógica completa de las entidades persistentes de la Base de Datos v2.

Su finalidad consiste en definir cada entidad antes de su implementación física.

La base de datos implementa este documento.

Nunca lo modifica.

---

# Alcance

Este documento especifica:

- entidades;
- atributos;
- claves;
- relaciones;
- restricciones;
- índices;
- reglas de integridad;
- criterios de auditoría;
- criterios de autorización.

No define:

- SQL;
- migraciones;
- RLS concreta;
- implementación Supabase.

---

# Organización

Las entidades se agrupan por módulos.

Cada entidad mantiene la misma estructura documental.

---

# Módulo 1 · Marco metodológico

# Entidad: metodologia

## Propósito

Representa una versión completa del marco metodológico de ATÓMICA.

Toda observación, Estado Sistémico y Modelo Vivo referencia exactamente una metodología.

Las metodologías son inmutables.

Nunca se modifican.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo | PK | FK | UNIQUE |
|--------|-----------------|------|----|----|--------|
| id | uuid | NO | ✓ | | |
| codigo | text | NO | | | ✓ |
| version | text | NO | | | |
| nombre | text | NO | | | |
| descripcion | text | SI | | | |
| estado | text | NO | | | |
| publicada_en | timestamptz | SI | | | |
| creada_en | timestamptz | NO | | | |

---

## Restricciones

- `codigo` único.
- `estado ∈ {BORRADOR, PUBLICADA, OBSOLETA}`.
- No admite modificaciones tras su publicación.

---

## Relaciones

- 1 → N dimensiones
- 1 → N capacidades
- 1 → N preguntas
- 1 → N umbrales

---

## Índices

- codigo
- version
- estado

---

## ON DELETE

RESTRICT

---

## Auditoría

Entidad inmutable.

Cada nueva metodología crea un nuevo registro.

---

## RLS prevista

Solo lectura para organizaciones.

Administración exclusiva del sistema.

---

# Entidad: dimension

## Propósito

Agrupa capacidades dentro de una metodología.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo |
|--------|-----------------|------|
| id | uuid | NO |
| metodologia_id | uuid | NO |
| codigo | text | NO |
| nombre | text | NO |
| descripcion | text | SI |
| orden | integer | NO |
| activa | boolean | NO |

---

## FK

- metodologia_id → metodologia.id

---

## Restricciones

UNIQUE (metodologia_id,codigo)

---

## Índices

- metodologia_id
- codigo
- orden

---

## ON DELETE

RESTRICT

---

## Auditoría

Entidad inmutable.

---

## RLS prevista

Solo lectura.

---

# Entidad: capacidad

## Propósito

Representa una capacidad organizacional definida por una metodología.

Toda observación afecta una o varias capacidades.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo |
|--------|-----------------|------|
| id | uuid | NO |
| metodologia_id | uuid | NO |
| dimension_id | uuid | NO |
| codigo | text | NO |
| nombre | text | NO |
| descripcion | text | SI |
| orden | integer | NO |
| activa | boolean | NO |

---

## FK

- metodologia_id → metodologia.id
- dimension_id → dimension.id

---

## Restricciones

UNIQUE (metodologia_id,codigo)

---

## Índices

- metodologia_id
- dimension_id
- codigo

---

## ON DELETE

RESTRICT

---

## Auditoría

Entidad inmutable.

---

## RLS prevista

Solo lectura.

---

# Entidad: pregunta

## Propósito

Instrumento de observación perteneciente a una metodología.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo |
|--------|-----------------|------|
| id | uuid | NO |
| metodologia_id | uuid | NO |
| capacidad_id | uuid | NO |
| codigo | text | NO |
| texto | text | NO |
| tipo | text | NO |
| orden | integer | NO |
| obligatoria | boolean | NO |
| activa | boolean | NO |

---

## FK

- metodologia_id → metodologia.id
- capacidad_id → capacidad.id

---

## Restricciones

UNIQUE (metodologia_id,codigo)

---

## Índices

- metodologia_id
- capacidad_id
- codigo

---

## ON DELETE

RESTRICT

---

## Auditoría

Entidad inmutable.

---

## RLS prevista

Solo lectura.

---

# Entidad: umbral

## Propósito

Define la clasificación oficial del IFO para una metodología.

Los umbrales nunca estarán codificados en la aplicación.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo |
|--------|-----------------|------|
| id | uuid | NO |
| metodologia_id | uuid | NO |
| codigo | text | NO |
| valor_min | numeric(5,2) | NO |
| valor_max | numeric(5,2) | NO |
| etiqueta | text | NO |
| color | text | SI |
| orden | integer | NO |

---

## FK

- metodologia_id → metodologia.id

---

## Restricciones

UNIQUE (metodologia_id,codigo)

CHECK (valor_min <= valor_max)

---

## Índices

- metodologia_id
- orden

---

## ON DELETE

RESTRICT

---

## Auditoría

Entidad inmutable.

---

## RLS prevista

Solo lectura.

---

# Estado del documento

Completado:

- Módulo 1 · Marco metodológico

---

# Módulo 3 · Observaciones

# Entidad: observaciones

## Propósito

Representa una observación realizada sobre una organización.

Toda información que entra en el Modelo Vivo procede de una observación.

El diagnóstico inicial constituye un tipo particular de observación.

---

## Campos

| Campo               | Tipo PostgreSQL | Nulo |
| ------------------- | --------------- | ---- |
| id                  | uuid            | NO   |
| organizacion_id     | uuid            | NO   |
| metodologia_id      | uuid            | NO   |
| tipo_observacion_id | uuid            | NO   |
| origen_id           | uuid            | NO   |
| realizada_en        | timestamptz     | NO   |
| finalizada_en       | timestamptz     | SI   |
| estado              | text            | NO   |
| observador_id       | uuid            | SI   |
| creada_en           | timestamptz     | NO   |

---

## FK

organizacion_id → organizaciones.id

metodologia_id → metodologias.id

tipo_observacion_id → tipos_observacion.id

origen_id → origenes_observacion.id

observador_id → auth.users.id

---

## Restricciones

estado ∈

* ABIERTA
* FINALIZADA
* CANCELADA

---

## Índices

* organizacion_id
* metodologia_id
* realizada_en
* estado

---

## ON DELETE

RESTRICT

---

## Auditoría

No se elimina.

Toda modificación queda registrada.

---

## RLS prevista

Miembros de la organización.

Consultores autorizados.

Administradores.

---

# Entidad: respuestas_observacion

## Propósito

Representa el resultado de una observación elemental.

No representa una conclusión.

No representa un Estado Sistémico.

---

## Campos

| Campo          | Tipo PostgreSQL | Nulo |
| -------------- | --------------- | ---- |
| id             | uuid            | NO   |
| observacion_id | uuid            | NO   |
| pregunta_id    | uuid            | NO   |
| valor          | jsonb           | NO   |
| confianza      | numeric(5,2)    | SI   |
| creada_en      | timestamptz     | NO   |

---

## FK

observacion_id → observaciones.id

pregunta_id → preguntas.id

---

## Restricciones

UNIQUE(observacion_id,pregunta_id)

---

## Índices

* observacion_id
* pregunta_id

---

## ON DELETE

CASCADE

---

# Entidad: tipos_observacion

## Propósito

Catálogo de tipos de observación.

---

## Campos

| Campo  | Tipo PostgreSQL | Nulo |
| ------ | --------------- | ---- |
| id     | uuid            | NO   |
| codigo | text            | NO   |
| nombre | text            | NO   |
| activa | boolean         | NO   |

---

## Restricciones

UNIQUE(codigo)

---

## Valores iniciales

* DIAGNOSTICO_INICIAL
* REVISION_PERIODICA
* EVIDENCIA
* ENTREVISTA
* IMPORTACION

---

# Entidad: origenes_observacion

## Propósito

Indica el origen mediante el cual fue obtenida una observación.

---

## Campos

| Campo       | Tipo PostgreSQL | Nulo |
| ----------- | --------------- | ---- |
| id          | uuid            | NO   |
| codigo      | text            | NO   |
| descripcion | text            | NO   |

---

## Restricciones

UNIQUE(codigo)

---

## Valores iniciales

* USUARIO
* CONSULTOR
* IMPORTACION
* API
* SISTEMA

---

# Dependencias

Depende de:

* Marco metodológico
* Organizaciones

Es utilizado por:

* Modelo Vivo
* Evidencias
* Hipótesis

---

## Módulo 4 · Modelo Vivo

---

# Entidad: modelos_vivos

## Propósito

Representa el Modelo Vivo de una organización.

Existe un único Modelo Vivo por organización.

No almacena Estados Sistémicos.

Actúa como agregador de su trayectoria.

---

## Campos

| Campo           | Tipo PostgreSQL | Nulo |
| --------------- | --------------- | ---- |
| id              | uuid            | NO   |
| organizacion_id | uuid            | NO   |
| creado_en       | timestamptz     | NO   |
| archivado_en    | timestamptz     | SI   |

---

## FK

organizacion_id → organizaciones.id

---

## Restricciones

UNIQUE(organizacion_id)

---

## Índices

* organizacion_id

---

## ON DELETE

RESTRICT

---

## Auditoría

Nunca se elimina.

---

## RLS prevista

Miembros de la organización.

Consultores autorizados.

Administradores.

---

# Entidad: estados_sistemicos

## Propósito

Representa un Estado Sistémico inmutable.

Todo Estado pertenece a un único Modelo Vivo.

Nunca se modifica.

---

## Campos

| Campo                 | Tipo PostgreSQL | Nulo |
| --------------------- | --------------- | ---- |
| id                    | uuid            | NO   |
| modelo_vivo_id        | uuid            | NO   |
| metodologia_id        | uuid            | NO   |
| observacion_origen_id | uuid            | NO   |
| ifo                   | numeric(5,2)    | NO   |
| nivel                 | text            | NO   |
| generado_en           | timestamptz     | NO   |

---

## FK

modelo_vivo_id → modelos_vivos.id

metodologia_id → metodologias.id

observacion_origen_id → observaciones.id

---

## Restricciones

ifo BETWEEN 0 AND 100

nivel ∈

* FRAGIL
* ROBUSTO
* RESILIENTE
* ANTIFRAGIL

---

## Índices

* modelo_vivo_id
* generado_en
* metodologia_id

---

## ON DELETE

RESTRICT

---

## Auditoría

Entidad inmutable.

No admite UPDATE.

No admite DELETE.

---

# Entidad: trayectorias_modelo

## Propósito

Mantiene la secuencia temporal de Estados Sistémicos.

Constituye el historial del Modelo Vivo.

---

## Campos

| Campo               | Tipo PostgreSQL | Nulo |
| ------------------- | --------------- | ---- |
| id                  | uuid            | NO   |
| modelo_vivo_id      | uuid            | NO   |
| estado_sistemico_id | uuid            | NO   |
| orden               | integer         | NO   |
| creado_en           | timestamptz     | NO   |

---

## FK

modelo_vivo_id → modelos_vivos.id

estado_sistemico_id → estados_sistemicos.id

---

## Restricciones

UNIQUE(modelo_vivo_id, orden)

UNIQUE(estado_sistemico_id)

---

## Índices

* modelo_vivo_id
* orden

---

## ON DELETE

RESTRICT

---

## Auditoría

No admite modificaciones.

Solo inserción.

---

# Dependencias

Depende de:

* Marco metodológico
* Organizaciones
* Observaciones

Es utilizado por:

* Evidencias
* Hipótesis
* Intervenciones
* Credenciales
* Conocimiento agregado

---

## Módulo 5 · Evidencias

---

# Entidad: evidencias

## Propósito

Representa una evidencia asociada a una observación.

Una evidencia puede aumentar la confianza de una afirmación.

Nunca modifica directamente un Estado Sistémico.

---

## Campos

| Campo             | Tipo PostgreSQL | Nulo |
| ----------------- | --------------- | ---- |
| id                | uuid            | NO   |
| organizacion_id   | uuid            | NO   |
| observacion_id    | uuid            | NO   |
| tipo_evidencia_id | uuid            | NO   |
| estado            | text            | NO   |
| titulo            | text            | NO   |
| descripcion       | text            | SI   |
| ubicacion         | text            | SI   |
| hash_documento    | text            | SI   |
| fecha_obtencion   | timestamptz     | SI   |
| creada_en         | timestamptz     | NO   |

---

## FK

organizacion_id → organizaciones.id

observacion_id → observaciones.id

tipo_evidencia_id → tipos_evidencia.id

---

## Restricciones

estado ∈

* PENDIENTE
* VALIDADA
* RECHAZADA
* CADUCADA

---

## Índices

* organizacion_id
* observacion_id
* tipo_evidencia_id
* estado

---

## ON DELETE

RESTRICT

---

## Auditoría

No se elimina físicamente.

Toda modificación queda registrada.

---

## RLS prevista

Miembros de la organización.

Consultores.

Administradores.

---

# Entidad: tipos_evidencia

## Propósito

Catálogo de tipos de evidencia.

---

## Campos

| Campo  | Tipo PostgreSQL | Nulo |
| ------ | --------------- | ---- |
| id     | uuid            | NO   |
| codigo | text            | NO   |
| nombre | text            | NO   |
| activa | boolean         | NO   |

---

## Restricciones

UNIQUE(codigo)

---

## Valores iniciales

* DOCUMENTO
* URL
* IMAGEN
* CERTIFICADO
* ACTA
* OTRO

---

# Entidad: relaciones_evidencia

## Propósito

Relaciona una evidencia con los elementos del Modelo Vivo que sustenta.

Permite mantener la trazabilidad completa.

---

## Campos

| Campo         | Tipo PostgreSQL | Nulo |
| ------------- | --------------- | ---- |
| id            | uuid            | NO   |
| evidencia_id  | uuid            | NO   |
| entidad       | text            | NO   |
| entidad_id    | uuid            | NO   |
| tipo_relacion | text            | NO   |
| creada_en     | timestamptz     | NO   |

---

## FK

evidencia_id → evidencias.id

---

## Restricciones

UNIQUE(evidencia_id, entidad, entidad_id)

---

## Índices

* evidencia_id
* entidad
* entidad_id

---

## ON DELETE

CASCADE

---

## Auditoría

Entidad inmutable.

---

# Entidad: evaluaciones_evidencia

## Propósito

Registra la valoración realizada sobre una evidencia.

No modifica la evidencia original.

---

## Campos

| Campo           | Tipo PostgreSQL | Nulo |
| --------------- | --------------- | ---- |
| id              | uuid            | NO   |
| evidencia_id    | uuid            | NO   |
| evaluador_id    | uuid            | NO   |
| nivel_confianza | numeric(5,2)    | NO   |
| observaciones   | text            | SI   |
| evaluada_en     | timestamptz     | NO   |

---

## FK

evidencia_id → evidencias.id

evaluador_id → auth.users.id

---

## Restricciones

nivel_confianza BETWEEN 0 AND 100

---

## Índices

* evidencia_id
* evaluador_id

---

## ON DELETE

RESTRICT

---

## Auditoría

No admite modificaciones.

Solo inserción.

---

# Dependencias

Depende de:

* Organizaciones
* Observaciones
* Modelo Vivo

Es utilizado por:

* Hipótesis
* Intervenciones

---

## Módulo 6 · Hipótesis

---

# Entidad: hipotesis

## Propósito

Representa una hipótesis formulada a partir del conocimiento disponible.

Una hipótesis puede fortalecerse, debilitarse o invalidarse.

Nunca modifica directamente un Estado Sistémico.

---

## Campos

| Campo               | Tipo PostgreSQL | Nulo |
| ------------------- | --------------- | ---- |
| id                  | uuid            | NO   |
| organizacion_id     | uuid            | NO   |
| estado_sistemico_id | uuid            | NO   |
| tipo_hipotesis_id   | uuid            | NO   |
| estado              | text            | NO   |
| descripcion         | text            | NO   |
| nivel_confianza     | numeric(5,2)    | NO   |
| creada_en           | timestamptz     | NO   |
| revisada_en         | timestamptz     | SI   |

---

## FK

organizacion_id → organizaciones.id

estado_sistemico_id → estados_sistemicos.id

tipo_hipotesis_id → tipos_hipotesis.id

---

## Restricciones

nivel_confianza BETWEEN 0 AND 100

estado ∈

* LATENTE
* EMERGENTE
* CONSISTENTE
* CONTRASTADA
* REVISADA
* INVALIDADA

---

## Índices

* organizacion_id
* estado_sistemico_id
* estado

---

## ON DELETE

RESTRICT

---

## Auditoría

No admite eliminación física.

Toda transición de estado queda registrada.

---

# Entidad: tipos_hipotesis

## Propósito

Catálogo de tipos de hipótesis.

---

## Campos

| Campo  | Tipo PostgreSQL | Nulo |
| ------ | --------------- | ---- |
| id     | uuid            | NO   |
| codigo | text            | NO   |
| nombre | text            | NO   |
| activa | boolean         | NO   |

---

## Restricciones

UNIQUE(codigo)

---

# Entidad: contradicciones

## Propósito

Registra contradicciones detectadas sobre una hipótesis.

Las contradicciones no eliminan la hipótesis.

Constituyen parte de su trazabilidad.

---

## Campos

| Campo        | Tipo PostgreSQL | Nulo |
| ------------ | --------------- | ---- |
| id           | uuid            | NO   |
| hipotesis_id | uuid            | NO   |
| evidencia_id | uuid            | SI   |
| descripcion  | text            | NO   |
| creada_en    | timestamptz     | NO   |

---

## FK

hipotesis_id → hipotesis.id

evidencia_id → evidencias.id

---

## Índices

* hipotesis_id
* evidencia_id

---

## ON DELETE

RESTRICT

---

## Auditoría

Entidad inmutable.

---

# Entidad: historial_hipotesis

## Propósito

Registra la evolución temporal de una hipótesis.

Cada cambio genera un nuevo registro.

---

## Campos

| Campo           | Tipo PostgreSQL | Nulo |
| --------------- | --------------- | ---- |
| id              | uuid            | NO   |
| hipotesis_id    | uuid            | NO   |
| estado          | text            | NO   |
| nivel_confianza | numeric(5,2)    | NO   |
| motivo          | text            | SI   |
| registrado_en   | timestamptz     | NO   |

---

## FK

hipotesis_id → hipotesis.id

---

## Índices

* hipotesis_id
* registrado_en

---

## ON DELETE

CASCADE

---

## Auditoría

Solo inserción.

No admite modificaciones.

---

# Dependencias

Depende de:

* Organizaciones
* Modelo Vivo
* Evidencias

Es utilizado por:

* Intervenciones

---

## Módulo 7 · Intervenciones

---

# Entidad: intervenciones

## Propósito

Representa una intervención destinada a fortalecer una organización.

Toda intervención nace a partir de una hipótesis.

Su ejecución no modifica directamente el Estado Sistémico.

---

## Campos

| Campo                | Tipo PostgreSQL | Nulo |
| -------------------- | --------------- | ---- |
| id                   | uuid            | NO   |
| organizacion_id      | uuid            | NO   |
| hipotesis_id         | uuid            | NO   |
| tipo_intervencion_id | uuid            | NO   |
| estado               | text            | NO   |
| titulo               | text            | NO   |
| descripcion          | text            | SI   |
| prioridad            | smallint        | NO   |
| fecha_inicio         | date            | SI   |
| fecha_fin_prevista   | date            | SI   |
| creada_en            | timestamptz     | NO   |

---

## FK

organizacion_id → organizaciones.id

hipotesis_id → hipotesis.id

tipo_intervencion_id → tipos_intervencion.id

---

## Restricciones

estado ∈

* PROPUESTA
* PLANIFICADA
* EN_CURSO
* COMPLETADA
* CANCELADA

prioridad BETWEEN 1 AND 5

---

## Índices

* organizacion_id
* hipotesis_id
* estado

---

## ON DELETE

RESTRICT

---

## Auditoría

No admite eliminación física.

Toda transición queda registrada.

---

# Entidad: tipos_intervencion

## Propósito

Catálogo de tipos de intervención.

---

## Campos

| Campo  | Tipo PostgreSQL | Nulo |
| ------ | --------------- | ---- |
| id     | uuid            | NO   |
| codigo | text            | NO   |
| nombre | text            | NO   |
| activa | boolean         | NO   |

---

## Restricciones

UNIQUE(codigo)

---

# Entidad: seguimiento_intervenciones

## Propósito

Registra la evolución temporal de una intervención.

Cada cambio genera un registro independiente.

---

## Campos

| Campo           | Tipo PostgreSQL | Nulo |
| --------------- | --------------- | ---- |
| id              | uuid            | NO   |
| intervencion_id | uuid            | NO   |
| estado          | text            | NO   |
| comentario      | text            | SI   |
| registrado_en   | timestamptz     | NO   |

---

## FK

intervencion_id → intervenciones.id

---

## Índices

* intervencion_id
* registrado_en

---

## ON DELETE

CASCADE

---

## Auditoría

Solo inserción.

No admite modificaciones.

---

# Entidad: resultados_intervencion

## Propósito

Registra el resultado observado tras una intervención.

No modifica retrospectivamente la intervención.

Constituye una observación independiente.

---

## Campos

| Campo           | Tipo PostgreSQL | Nulo |
| --------------- | --------------- | ---- |
| id              | uuid            | NO   |
| intervencion_id | uuid            | NO   |
| observacion_id  | uuid            | NO   |
| creado_en       | timestamptz     | NO   |

---

## FK

intervencion_id → intervenciones.id

observacion_id → observaciones.id

---

## Restricciones

UNIQUE(intervencion_id, observacion_id)

---

## Índices

* intervencion_id
* observacion_id

---

## ON DELETE

CASCADE

---

## Auditoría

Entidad inmutable.

---

# Dependencias

Depende de:

* Organizaciones
* Hipótesis
* Observaciones

Es utilizado por:

* Credenciales
* Conocimiento agregado

---

## Módulo 8 · Credenciales

---

# Entidad: credenciales

## Propósito

Representa una credencial emitida a una organización.

La credencial certifica un Estado Sistémico.

No modifica el Modelo Vivo.

---

## Campos

| Campo               | Tipo PostgreSQL | Nulo |
| ------------------- | --------------- | ---- |
| id                  | uuid            | NO   |
| organizacion_id     | uuid            | NO   |
| estado_sistemico_id | uuid            | NO   |
| sello_id            | uuid            | NO   |
| estado              | text            | NO   |
| codigo              | text            | NO   |
| emitida_en          | timestamptz     | NO   |
| caduca_en           | timestamptz     | SI   |
| revocada_en         | timestamptz     | SI   |

---

## FK

organizacion_id → organizaciones.id

estado_sistemico_id → estados_sistemicos.id

sello_id → sellos.id

---

## Restricciones

UNIQUE(codigo)

estado ∈

* EMITIDA
* VIGENTE
* CADUCADA
* REVOCADA

---

## Índices

* organizacion_id
* estado_sistemico_id
* sello_id
* estado

---

## ON DELETE

RESTRICT

---

## Auditoría

Nunca se elimina físicamente.

Toda revocación queda registrada.

---

# Entidad: sellos

## Propósito

Catálogo de sellos soportados por ATÓMICA.

---

## Campos

| Campo   | Tipo PostgreSQL | Nulo |
| ------- | --------------- | ---- |
| id      | uuid            | NO   |
| codigo  | text            | NO   |
| nombre  | text            | NO   |
| version | text            | NO   |
| activo  | boolean         | NO   |

---

## Restricciones

UNIQUE(codigo, version)

---

## Valores iniciales

* B_CORP

La arquitectura admite múltiples sellos.

---

# Entidad: verificaciones_credencial

## Propósito

Registra todas las verificaciones realizadas sobre una credencial.

---

## Campos

| Campo         | Tipo PostgreSQL | Nulo |
| ------------- | --------------- | ---- |
| id            | uuid            | NO   |
| credencial_id | uuid            | NO   |
| verificada_en | timestamptz     | NO   |
| origen        | text            | SI   |
| resultado     | text            | NO   |

---

## FK

credencial_id → credenciales.id

---

## Índices

* credencial_id
* verificada_en

---

## ON DELETE

CASCADE

---

## Auditoría

Entidad inmutable.

Solo inserción.

---

# Dependencias

Depende de:

* Organizaciones
* Modelo Vivo

Es utilizado por:

* Plataforma

---

## Módulo 9 · Conocimiento agregado

---

# Entidad: conjuntos_benchmark

## Propósito

Representa un conjunto anonimizado de organizaciones utilizado para comparación estadística.

Nunca almacena información identificable.

Nunca alimenta el Modelo Vivo de una organización.

---

## Campos

| Campo       | Tipo PostgreSQL | Nulo |
| ----------- | --------------- | ---- |
| id          | uuid            | NO   |
| codigo      | text            | NO   |
| nombre      | text            | NO   |
| descripcion | text            | SI   |
| creado_en   | timestamptz     | NO   |

---

## Restricciones

UNIQUE(codigo)

---

## Índices

* codigo

---

## Auditoría

Entidad de referencia.

---

# Entidad: observaciones_agregadas

## Propósito

Representa información anonimizada incorporada a un conjunto benchmark.

No mantiene relación con organizaciones individuales.

---

## Campos

| Campo                 | Tipo PostgreSQL | Nulo |
| --------------------- | --------------- | ---- |
| id                    | uuid            | NO   |
| conjunto_id           | uuid            | NO   |
| marco_metodologico_id | uuid            | NO   |
| dimension_id          | uuid            | NO   |
| periodo               | date            | NO   |
| total_observaciones   | integer         | NO   |
| creado_en             | timestamptz     | NO   |

---

## FK

conjunto_id → conjuntos_benchmark.id

marco_metodologico_id → marcos_metodologicos.id

dimension_id → dimensiones.id

---

## Restricciones

total_observaciones > 0

---

## Índices

* conjunto_id
* dimension_id
* periodo

---

## ON DELETE

RESTRICT

---

## Auditoría

Entidad inmutable.

---

# Entidad: indicadores_benchmark

## Propósito

Almacena indicadores estadísticos calculados a partir de observaciones agregadas.

No contiene información identificable.

---

## Campos

| Campo                   | Tipo PostgreSQL | Nulo |
| ----------------------- | --------------- | ---- |
| id                      | uuid            | NO   |
| observacion_agregada_id | uuid            | NO   |
| indicador               | text            | NO   |
| valor                   | numeric(12,4)   | NO   |
| calculado_en            | timestamptz     | NO   |

---

## FK

observacion_agregada_id → observaciones_agregadas.id

---

## Restricciones

UNIQUE(observacion_agregada_id, indicador)

---

## Índices

* observacion_agregada_id
* indicador

---

## ON DELETE

CASCADE

---

## Auditoría

Solo inserción.

Nunca se modifica un cálculo histórico.

---

# Principio de aislamiento

El conocimiento agregado constituye un sumidero.

Las organizaciones alimentan el benchmark.

El benchmark nunca modifica el Modelo Vivo de ninguna organización.

No existen dependencias en sentido inverso.

---

# Dependencias

Depende de:

* Marco metodológico

No es dependencia de ningún módulo funcional.

---

## Módulo 10 · Plataforma

---

# Entidad: organizaciones_usuarios

## Propósito

Relaciona usuarios autenticados con organizaciones.

Define pertenencia.

No almacena información propia de la organización.

---

## Campos

| Campo           | Tipo PostgreSQL | Nulo |
| --------------- | --------------- | ---- |
| id              | uuid            | NO   |
| organizacion_id | uuid            | NO   |
| usuario_auth_id | uuid            | NO   |
| rol             | text            | NO   |
| activo          | boolean         | NO   |
| creado_en       | timestamptz     | NO   |

---

## FK

organizacion_id → organizaciones.id

usuario_auth_id → auth.users.id

---

## Restricciones

UNIQUE(organizacion_id, usuario_auth_id)

rol ∈

* OWNER
* ADMIN
* EDITOR
* LECTOR

---

## Índices

* organizacion_id
* usuario_auth_id

---

## ON DELETE

CASCADE

---

## Auditoría

Toda modificación de rol queda registrada.

---

# Entidad: eventos_plataforma

## Propósito

Registra eventos técnicos y funcionales producidos por la plataforma.

No forma parte del Modelo Vivo.

---

## Campos

| Campo           | Tipo PostgreSQL | Nulo |
| --------------- | --------------- | ---- |
| id              | uuid            | NO   |
| usuario_auth_id | uuid            | SI   |
| organizacion_id | uuid            | SI   |
| evento          | text            | NO   |
| datos           | jsonb           | SI   |
| ocurrido_en     | timestamptz     | NO   |

---

## FK

usuario_auth_id → auth.users.id

organizacion_id → organizaciones.id

---

## Índices

* usuario_auth_id
* organizacion_id
* evento
* ocurrido_en

---

## ON DELETE

SET NULL

---

## Auditoría

Entidad exclusivamente aditiva.

Nunca se modifica.

Nunca se elimina.

---

# Entidad: trabajos_asincronos

## Propósito

Gestiona procesos ejecutados en segundo plano.

No contiene conocimiento del dominio.

---

## Campos

| Campo         | Tipo PostgreSQL | Nulo |
| ------------- | --------------- | ---- |
| id            | uuid            | NO   |
| tipo          | text            | NO   |
| estado        | text            | NO   |
| payload       | jsonb           | NO   |
| iniciado_en   | timestamptz     | NO   |
| finalizado_en | timestamptz     | SI   |

---

## Restricciones

estado ∈

* PENDIENTE
* EJECUTANDO
* FINALIZADO
* ERROR

---

## Índices

* tipo
* estado

---

## Auditoría

Conservación íntegra del historial.

---

# Entidad: configuracion_plataforma

## Propósito

Almacena parámetros globales de funcionamiento.

No contiene datos de organizaciones.

---

## Campos

| Campo          | Tipo PostgreSQL | Nulo |
| -------------- | --------------- | ---- |
| clave          | text            | NO   |
| valor          | jsonb           | NO   |
| actualizado_en | timestamptz     | NO   |

---

## Restricciones

PRIMARY KEY(clave)

---

## Dependencias

No depende del dominio.

Es infraestructura.

---

# Estado del documento

Completados los diez módulos del diccionario de datos:

1. Marco metodológico
2. Organizaciones
3. Observaciones
4. Modelo Vivo
5. Evidencias
6. Hipótesis
7. Intervenciones
8. Credenciales
9. Conocimiento agregado
10. Plataforma

---

# Próximo documento

Con el diccionario completo, el siguiente documento es:

`80_infraestructura/esquema_bd_v2.md`

Ahora ya puede dejar de ser conceptual y pasar a contener:

* tablas definitivas;
* claves primarias;
* claves foráneas;
* cardinalidades;
* orden de creación;
* DAG real de dependencias;
* módulos físicos de PostgreSQL/Supabase.

Ese documento será el que permita implementar `schema.sql` sin ambigüedades.

