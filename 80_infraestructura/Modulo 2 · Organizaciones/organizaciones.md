# Módulo 2 · Organizaciones

---

# Entidad: organizacion

## Propósito

Representa el referente organizacional observado por ATÓMICA.

No representa el Modelo Vivo.

No representa el Estado Sistémico.

Representa la organización sobre la que se realizan observaciones.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo |
|--------|-----------------|------|
| id | uuid | NO |
| codigo | text | NO |
| nombre_legal | text | NO |
| nombre_comercial | text | SI |
| nif | text | SI |
| pais | text | NO |
| estado | text | NO |
| creada_en | timestamptz | NO |
| archivada_en | timestamptz | SI |

---

## Restricciones

UNIQUE(codigo)

UNIQUE(nif)

estado ∈

- ACTIVA
- ARCHIVADA

---

## Índices

- codigo
- nif
- estado

---

## ON DELETE

RESTRICT

---

## Auditoría

Toda modificación genera registro de auditoría.

Nunca se elimina físicamente.

---

## RLS prevista

Miembros de la organización.

Administradores de plataforma.

---

# Entidad: usuario_organizacion

## Propósito

Relaciona usuarios con organizaciones.

Define pertenencia.

No define autenticación.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo |
|--------|-----------------|------|
| id | uuid | NO |
| organizacion_id | uuid | NO |
| auth_user_id | uuid | NO |
| rol | text | NO |
| activo | boolean | NO |
| creado_en | timestamptz | NO |

---

## FK

organizacion_id → organizacion.id

auth_user_id → auth.users.id

---

## Restricciones

UNIQUE(organizacion_id,auth_user_id)

---

## Índices

- organizacion_id
- auth_user_id

---

## ON DELETE

CASCADE

---

## Auditoría

Toda modificación queda registrada.

---

## RLS prevista

Cada usuario únicamente puede consultar su pertenencia.

Administradores con acceso global.

---

# Entidad: ruptura_identidad

## Propósito

Registra cambios estructurales que invalidan la continuidad del referente organizacional.

Permite conservar la trazabilidad histórica.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo |
|--------|-----------------|------|
| id | uuid | NO |
| organizacion_id | uuid | NO |
| tipo | text | NO |
| fecha | timestamptz | NO |
| descripcion | text | SI |
| creada_en | timestamptz | NO |

---

## FK

organizacion_id → organizacion.id

---

## Restricciones

tipo ∈

- INTERRUPCION
- BIFURCACION
- CONVERGENCIA
- SUSTITUCION_INTEGRAL

---

## Índices

- organizacion_id
- fecha

---

## ON DELETE

RESTRICT

---

## Auditoría

Nunca se modifica.

Nunca se elimina.

---

## RLS prevista

Solo lectura para miembros.

Creación reservada a procesos autorizados.

---

# Entidad: organizacion_relacion

## Propósito

Representa relaciones explícitas entre organizaciones.

No modifica su identidad.

---

## Campos

| Campo | Tipo PostgreSQL | Nulo |
|--------|-----------------|------|
| id | uuid | NO |
| origen_id | uuid | NO |
| destino_id | uuid | NO |
| tipo | text | NO |
| inicio | timestamptz | NO |
| fin | timestamptz | SI |

---

## FK

origen_id → organizacion.id

destino_id → organizacion.id

---

## Restricciones

CHECK(origen_id <> destino_id)

---

## Índices

- origen_id
- destino_id
- tipo

---

## ON DELETE

RESTRICT

---

## Auditoría

Histórico completo.

---

## RLS prevista

Solo lectura para organizaciones autorizadas.

---

# Dependencias del módulo

Depende de:

- Marco metodológico

Es utilizado por:

- Observaciones
- Modelo Vivo
- Evidencias
- Hipótesis
- Intervenciones
- Credenciales

---

# Estado del documento

Completado:

- Módulo 1 · Marco metodológico
- Módulo 2 · Organizaciones

Pendiente:

- Módulo 3 · Observaciones
- Módulo 4 · Modelo Vivo
- Módulo 5 · Evidencias
- Módulo 6 · Hipótesis
- Módulo 7 · Intervenciones
- Módulo 8 · Credenciales
- Módulo 9 · Conocimiento agregado
- Módulo 10 · Plataforma
