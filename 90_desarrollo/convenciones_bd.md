# Convenciones de Base de Datos

Estado: DESARROLLO

Versión: 1.0.0

Tipo: Desarrollo

Ubicación:

90_desarrollo/convenciones_bd.md

---

# Propósito

Definir las reglas obligatorias que deberán cumplir todos los objetos de la Base de Datos.

Estas convenciones garantizan la uniformidad del esquema y evitan decisiones locales inconsistentes.

---

# Idioma

Todos los nombres estarán en español.

Se utilizarán nombres en singular.

---

# Tablas

Las tablas representan entidades persistentes.

Ejemplos:

- organizacion
- observacion
- evidencia
- hipotesis

No se utilizarán abreviaturas.

---

# Claves primarias

Toda tabla dispondrá de una única clave primaria denominada:

id

---

# Claves foráneas

Toda clave foránea finalizará en:

_id

Ejemplos:

organizacion_id

estado_sistemico_id

pregunta_id

---

# Auditoría

Toda entidad persistente incluirá, cuando corresponda:

- created_at
- updated_at
- deleted_at

Las eliminaciones serán lógicas salvo indicación expresa.

---

# Versionado

Toda entidad versionable incluirá:

- version
- vigente

Nunca se sobrescribirá una versión histórica.

---

# Estados

Los estados son inmutables.

Toda modificación genera un nuevo registro.

---

# Catálogos

Los catálogos pertenecen al Marco metodológico.

Nunca contendrán datos específicos de organizaciones.

---

# Integridad

Toda relación deberá implementarse mediante claves foráneas.

No se duplicará información derivable.

---

# Identificadores

Los identificadores serán internos.

No incorporarán significado funcional.

---

# Cálculos

La Base de Datos almacenará hechos.

Los valores derivados deberán calcularse siempre que sea posible.

No se persistirán cálculos salvo por razones justificadas de rendimiento.

---

# Convenciones de nomenclatura

Tablas:

- singular
- minúsculas
- snake_case

Columnas:

- minúsculas
- snake_case

Restricciones:

ck_<tabla>_<nombre>

Índices:

idx_<tabla>_<columnas>

Claves foráneas:

fk_<tabla>_<tabla_destino>

Únicos:

uq_<tabla>_<columnas>

---

# Compatibilidad

Todo objeto nuevo deberá cumplir este documento antes de incorporarse al esquema SQL.
