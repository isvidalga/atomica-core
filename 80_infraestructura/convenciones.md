# Convenciones BD

Estado: CANÓNICO

Versión: 1.0.0

Tipo: Infraestructura

Ubicación:

```text
80_infraestructura/convenciones_bd.md
```

---

# Propósito

Este documento establece las convenciones obligatorias para el diseño e implementación de la Base de Datos de ATÓMICA.

Su finalidad consiste en garantizar uniformidad, coherencia y mantenibilidad.

Toda entidad deberá cumplir estas convenciones.

---

# Alcance

Estas convenciones son obligatorias para:

* tablas;
* vistas;
* funciones;
* índices;
* restricciones;
* políticas RLS.

---

# Convenciones de nombres

## Tablas

* minúsculas
* plural
* separadas mediante guion bajo

Ejemplos:

* organizaciones
* observaciones
* estados_sistemicos

---

## Columnas

* minúsculas
* snake_case
* nombres completos

Ejemplos:

* organizacion_id
* metodologia_id
* creado_en

No se permiten abreviaturas ambiguas.

---

## Claves primarias

Todas las tablas utilizarán:

```text
id UUID PRIMARY KEY
```

No se utilizarán claves compuestas como clave primaria.

---

## Claves foráneas

Todas finalizarán en:

```text
_id
```

Ejemplos:

* organizacion_id
* estado_id
* metodologia_id

---

# UUID

Todas las entidades persistentes utilizarán UUID.

Las claves naturales podrán existir únicamente como restricciones UNIQUE.

Nunca sustituirán la clave primaria.

---

# Auditoría

Toda entidad persistente incluirá, cuando proceda:

* creado_en
* actualizado_en
* archivado_en

Las entidades inmutables no utilizarán `actualizado_en`.

---

# Borrado

No se realizará borrado físico salvo obligación legal.

Se utilizará archivado lógico cuando sea posible.

---

# Integridad referencial

Toda relación utilizará claves foráneas explícitas.

No se permitirán referencias implícitas.

---

# Restricciones

Toda regla del dominio deberá implementarse mediante:

* CHECK
* UNIQUE
* FOREIGN KEY

Siempre que PostgreSQL lo permita.

No se trasladarán restricciones del dominio al código de aplicación sin justificación.

---

# Índices

Todo índice deberá responder a un caso de uso identificado.

No se crearán índices preventivos.

---

# Nulabilidad

Todo campo deberá justificar explícitamente su nulabilidad.

NULL nunca representará:

* desconocido;
* ausencia observada;
* incertidumbre;
* no aplicable.

Cada uno de esos estados deberá modelarse de forma explícita cuando pertenezca al dominio.

---

# Versionado

Las entidades metodológicas serán inmutables.

Una modificación generará una nueva versión.

Nunca se actualizarán registros históricos.

---

# Convenciones temporales

Todas las fechas utilizarán:

```text
timestamptz
```

Siempre en UTC.

---

# RLS

Toda tabla persistente dispondrá de políticas RLS explícitas.

La ausencia de política constituye un error de implementación.

---

# Trazabilidad

Toda operación relevante deberá poder reconstruirse mediante auditoría.

Ningún dato utilizado para construir un Estado Sistémico podrá perder su origen.

---

# Cumplimiento

Toda nueva entidad deberá cumplir este documento antes de incorporarse al esquema físico.

El incumplimiento de cualquiera de estas convenciones implica que la implementación no es conforme con la arquitectura de datos de ATÓMICA.
