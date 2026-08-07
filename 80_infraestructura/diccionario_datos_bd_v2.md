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

---

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

Pendiente:

- Módulo 2 · Organizaciones
- Módulo 3 · Observaciones
- Módulo 4 · Modelo Vivo
- Módulo 5 · Evidencias
- Módulo 6 · Hipótesis
- Módulo 7 · Intervenciones
- Módulo 8 · Credenciales
- Módulo 9 · Conocimiento agregado
- Módulo 10 · Plataforma
