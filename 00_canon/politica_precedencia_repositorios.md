# Política de Precedencia entre Repositorios

Estado: CANÓNICO

Versión: 1.0.0

---

# Propósito

Establecer la autoridad normativa entre los repositorios oficiales de ATÓMICA.

Determinar el orden de precedencia cuando exista conflicto entre ellos.

No define la organización interna de cada repositorio.

---

# Regla

ATÓMICA se compone de repositorios con responsabilidades distintas.

Cada repositorio posee un ámbito de autoridad exclusivo.

La autoridad normativa reside exclusivamente en atomica-core.

La implementación del producto reside exclusivamente en atomica-app.

---

# Orden de precedencia

Cada repositorio oficial declara su ámbito de autoridad.

Cuando exista conflicto entre dos repositorios, prevalecerá el repositorio cuya responsabilidad incluya el conocimiento gobernado.

Actualmente:

1. atomica-core
2. atomica-app

Toda discrepancia entre ambos se resolverá en favor de atomica-core.

La implementación deberá adaptarse a la autoridad normativa de atomica-core.

El canon nunca se adaptará a una implementación existente.

---

# Consecuencias

Una discrepancia entre ambos repositorios no constituye un defecto del Canon.

Constituye una desviación de implementación.

Nunca una modificación implícita del Canon.

---

# Clasificación

Las auditorías utilizarán las siguientes categorías:

## Canon

Defecto interno de atomica-core.

Afecta a la validez del conocimiento oficial.

## Implementación

Desviación entre atomica-app y atomica-core.

No modifica la validez del canon.

Debe corregirse en la aplicación.

---

# Restricciones

Ningún documento de atomica-app podrá redefinir:

- conceptos
- ontología
- epistemología
- metodología
- taxonomías
- clasificación
- lenguaje oficial

Toda modificación de estos elementos deberá realizarse primero en atomica-core.

Solo después podrá sincronizarse la aplicación.

Ningún repositorio distinto de atomica-core podrá publicar documentos con autoridad canónica.

---

# Auditorías

Las auditorías del canon evaluarán exclusivamente atomica-core.

Las auditorías de sincronización evaluarán la correspondencia entre atomica-app y atomica-core.

Las discrepancias detectadas en la sincronización se clasificarán como desviaciones de implementación.

---

# Relaciones

Depende de:

- gobierno_del_canon.md
- sistema_normativo.md

Gobierna:

- la relación normativa entre repositorios oficiales
