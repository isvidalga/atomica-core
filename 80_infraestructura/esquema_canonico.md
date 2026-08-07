# Esquema Canónico v2

Estado: CANÓNICO

Versión: 1.0.0

Ubicación:

30_infrastructura/esquema_canonico.md

---

## El esquema no es la fuente de verdad

El Esquema Canónico deriva del Canon.

Nunca constituye la definición del Modelo.

Toda implementación deberá poder regenerarse a partir del Canon sin consultar una base de datos existente.

---

# Propósito

El Esquema Canónico define la estructura persistente necesaria para implementar el Modelo de ATÓMICA.

Constituye la especificación normativa de la capa de persistencia.

No depende de una tecnología concreta.

No describe PostgreSQL.

No describe Supabase.

No describe migraciones.

Describe únicamente las entidades persistentes y las relaciones que deben existir para que el Modelo pueda materializarse.

---

# Naturaleza

El Esquema pertenece a la Infraestructura.

No pertenece al Dominio.

No modifica el Modelo.

Implementa el Modelo.

---

# Principios

## El dominio gobierna el esquema

Ninguna tabla existe por decisión técnica.

Toda estructura persistente deriva de un concepto definido en el Canon.

---

## El esquema no crea conocimiento

Persistir no significa modelar.

El Modelo existe independientemente de la base de datos.

---

## Una responsabilidad por entidad

Cada entidad persistente posee una única responsabilidad.

No se permiten tablas híbridas.

---

## La implementación es sustituible

El Esquema Canónico debe poder implementarse sobre distintas tecnologías sin alterar el Modelo.

---

# Niveles

El esquema se organiza en cuatro niveles.

## Nivel 1 · Núcleo

Persistencia indispensable para representar el Modelo.

Su ausencia impide el funcionamiento del sistema.

Ejemplos:

- Organización
- Observación
- Evidencia
- Estado Sistémico

---

## Nivel 2 · Catálogos

Conocimiento relativamente estable utilizado por el Modelo.

Ejemplos:

- Capacidades
- Fragilidades
- Principios
- Referencias

---

## Nivel 3 · Operación

Datos derivados de la interacción con el usuario.

Ejemplos:

- Diagnósticos
- Respuestas
- Credenciales

---

## Nivel 4 · Infraestructura

Objetos necesarios para operar la plataforma.

Ejemplos:

- Usuarios
- Permisos
- Auditoría técnica

---

# Especificación de entidades

Cada entidad deberá documentarse mediante la siguiente estructura.

## Nombre

Responsabilidad única.

### Propósito

Qué representa.

### Origen

Qué concepto del Canon implementa.

### Persistencia

Qué información conserva.

### Relaciones

Con qué otras entidades puede relacionarse.

### Restricciones

Invariantes del Modelo.

### Estado

Canónica / Experimental / Derivada.

---

# Relaciones

Toda relación deberá existir porque representa una relación del Modelo.

No se crearán relaciones exclusivamente para simplificar consultas.

---

# Datos derivados

Los datos calculables no forman parte del Esquema Canónico.

Deberán obtenerse mediante cálculo.

No deberán persistirse salvo justificación explícita.

---

# Dependencias

Las dependencias externas deberán declararse explícitamente.

Ejemplos:

- autenticación
- almacenamiento documental
- búsqueda
- IA

No podrán modificar el Modelo.

---

# Exclusiones

No forman parte del Esquema Canónico:

- índices
- vistas
- triggers
- políticas RLS
- funciones SQL
- permisos
- migraciones
- optimizaciones
- configuraciones del proveedor

Todos ellos pertenecen a la implementación.

---

# Trazabilidad

Toda entidad persistente deberá poder responder:

1. ¿Qué concepto del Canon implementa?

2. ¿Por qué necesita persistirse?

3. ¿Qué ocurriría si desapareciera?

Si una entidad no puede responder a estas tres preguntas, no pertenece al Esquema Canónico.

---

# Criterio de conformidad

Una implementación será conforme cuando:

- implemente todas las entidades obligatorias;
- respete las relaciones definidas;
- preserve las invariantes del Modelo;
- no introduzca conceptos inexistentes en el Canon.

La tecnología utilizada es irrelevante para la conformidad.
