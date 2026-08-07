# Esquema Canónico

Estado: CANÓNICO

Versión: 1.0.0

Ubicación:

80_infraestructura/esquema_canonico.md

---

# Propósito

El Esquema Canónico define la estructura persistente necesaria para materializar el Modelo de ATÓMICA.

Constituye la especificación normativa de la persistencia.

No define una implementación concreta.

No depende de PostgreSQL.

No depende de Supabase.

No depende de SQL.

---

# Naturaleza

El Esquema pertenece a la Infraestructura.

No pertenece a la Ontología.

No pertenece al Producto.

No modifica el Modelo.

Lo implementa.

---

# Principios

## El Canon gobierna el esquema

Toda entidad persistente deriva de un concepto definido en el Canon.

Nunca al contrario.

---

## El esquema no es la fuente de verdad

La autoridad reside en el Canon.

El esquema constituye una implementación derivada.

Toda implementación deberá poder regenerarse a partir del Canon.

---

## Persistir no significa modelar

El Modelo existe independientemente de cualquier tecnología.

Persistir consiste únicamente en conservar el estado necesario para reconstruir el Modelo.

---

## Persistencia mínima

Solo se persistirá aquello cuya pérdida impida reconstruir el Modelo.

Toda información derivable deberá calcularse.

---

## Una responsabilidad por entidad

Cada entidad persistente representa un único concepto.

No existirán tablas híbridas.

No existirán entidades creadas únicamente para simplificar consultas.

---

## Independencia tecnológica

El Esquema Canónico deberá poder implementarse sobre distintas tecnologías sin alterar el Modelo.

La conformidad depende de la semántica, no del motor de almacenamiento.

---

# Componentes

El Esquema Canónico se compone exclusivamente de:

- entidades persistentes;
- atributos persistentes;
- relaciones;
- invariantes;
- reglas de trazabilidad.

Todo lo demás pertenece a la implementación.

---

# No pertenecen al Esquema Canónico

No forman parte del Esquema:

- tablas físicas;
- tipos SQL;
- índices;
- restricciones técnicas;
- vistas;
- funciones;
- procedimientos;
- triggers;
- políticas RLS;
- permisos;
- migraciones;
- optimizaciones;
- configuraciones del proveedor.

Estos elementos pertenecen al Modelo Físico.

---

# Entidad persistente

Toda entidad persistente deberá especificar:

## Identidad

Qué representa.

## Propósito

Por qué necesita persistirse.

## Origen

Qué concepto del Canon implementa.

## Estado persistido

Qué información conserva.

## Relaciones

Con qué otras entidades puede relacionarse.

## Invariantes

Qué condiciones deben cumplirse siempre.

## Justificación

Qué perdería el Modelo si desapareciera.

---

# Relaciones

Las relaciones únicamente existirán cuando representen relaciones reales del Modelo.

Nunca se introducirán relaciones motivadas exclusivamente por conveniencia técnica.

---

# Datos derivados

Los datos calculables no pertenecen al Esquema Canónico.

Su persistencia requerirá una justificación explícita.

---

# Dependencias

Toda dependencia externa deberá declararse.

Las dependencias pueden proporcionar servicios.

Nunca podrán modificar el significado del Modelo.

---

# Conformidad

Una implementación será conforme cuando:

- implemente todas las entidades obligatorias;
- preserve sus relaciones;
- mantenga las invariantes;
- respete la semántica definida por el Canon.

La tecnología utilizada no forma parte del criterio de conformidad.
