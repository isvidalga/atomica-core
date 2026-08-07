# Diccionario de datos BD v2

Estado: DESARROLLO

Versión: 1.0.0

Tipo: Infraestructura

Ubicación:

80_infraestructura/diccionario_datos_bd_v2.md

---

# Propósito

Definir el contrato de datos de la Base de Datos v2.

Este documento especifica cada entidad desde la perspectiva de los datos.

No define la implementación SQL.

No sustituye al esquema de la base de datos.

---

# Información obligatoria de cada entidad

Toda entidad deberá documentar como mínimo:

- finalidad;
- clave primaria;
- claves naturales;
- claves foráneas;
- atributos;
- tipo de dato;
- nulabilidad;
- restricciones;
- valores por defecto;
- reglas de actualización;
- reglas de eliminación;
- índices;
- observaciones.

---

# Plantilla

## Entidad

### Propósito

...

### Clave primaria

...

### Claves naturales

...

### Claves foráneas

...

### Atributos

| Campo | Tipo | NULL | Default | Descripción |
|--------|------|------|----------|-------------|

### Restricciones

...

### Índices

...

### Actualización

...

### Eliminación

...

### Observaciones

...

---

# Tipos de datos

Se utilizarán únicamente tipos compatibles con PostgreSQL.

Cuando existan tipos específicos (ENUM, JSONB, UUID, ARRAY, etc.) deberán declararse explícitamente.

---

# Claves primarias

Todas las entidades tendrán una única clave primaria.

Como norma general será UUID.

---

# Claves naturales

Cuando existan deberán documentarse.

Las claves naturales nunca sustituyen a la clave primaria.

---

# Claves foráneas

Toda relación deberá indicar:

- entidad origen;
- entidad destino;
- cardinalidad;
- comportamiento ON DELETE;
- comportamiento ON UPDATE.

---

# Nulabilidad

Todo campo deberá justificar:

- NULL permitido;
- NULL prohibido.

No se utilizarán NULL por comodidad.

---

# Valores derivados

Los valores calculados deberán identificarse explícitamente.

Se indicará si:

- se persisten;
- se recalculan;
- se obtienen mediante vistas;
- se obtienen mediante funciones.

---

# Restricciones

Toda regla de negocio implementada mediante:

- CHECK
- UNIQUE
- FK
- EXCLUDE

deberá documentarse.

---

# Índices

Cada índice deberá justificar:

- consulta que optimiza;
- motivo de existencia.

No se crearán índices sin justificación.

---

# Auditoría

Para cada entidad deberá indicarse:

- creación;
- modificación;
- trazabilidad;
- versionado;
- responsable.

---

# Compatibilidad

Este documento deberá permanecer sincronizado con:

- esquema_bd_v2.md
- contrato_implementacion.md

Toda modificación del esquema exigirá la actualización de este documento.
