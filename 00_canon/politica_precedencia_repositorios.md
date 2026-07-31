# Política de Precedencia entre Repositorios

Estado: CANÓNICO

Versión: 1.0.0

---

# Propósito

Establecer la autoridad normativa entre los repositorios de ATÓMICA.

---

# Regla

ATÓMICA se compone de repositorios con responsabilidades distintas.

Cada repositorio posee un ámbito de autoridad exclusivo.

La autoridad metodológica reside únicamente en atomica-core.

La implementación del producto reside únicamente en atomica-app.

---

# Orden de precedencia

1. atomica-core
2. atomica-app

Toda discrepancia entre ambos se resolverá en favor de atomica-core.

La implementación deberá adaptarse al canon.

El canon nunca se adaptará a una implementación existente.

---

# Consecuencias

Una discrepancia entre ambos repositorios no constituye un defecto del canon.

Constituye una desviación de implementación.

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

---

# Auditorías

Las auditorías del canon evaluarán exclusivamente atomica-core.

Las auditorías de sincronización evaluarán la correspondencia entre atomica-app y atomica-core.

Las discrepancias detectadas en la sincronización se clasificarán como desviaciones de implementación.
