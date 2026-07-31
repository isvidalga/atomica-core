# Política de Directorios

Estado: CANÓNICO

Versión: 1.0.0

Ubicación:

00_canon/politica_directorios.md

---

# Propósito

Definir el significado arquitectónico de los directorios del repositorio.

Establecer qué directorios forman parte del canon.

Establecer qué directorios existen únicamente como soporte del repositorio.

---

# Principios

La arquitectura intelectual prevalece sobre la estructura física.

Todo directorio posee exactamente una responsabilidad.

Ningún directorio podrá existir sin una responsabilidad declarada.

---

# Clasificación

Los directorios pertenecen exactamente a una de las siguientes categorías.

- Capa arquitectónica
- Directorio de gobierno
- Directorio de soporte
- Directorio histórico

No existen categorías adicionales.

---

# Capas arquitectónicas

Constituyen el canon.

Únicamente ellas contienen conocimiento normativo.

Son:

- 00_canon
- 10_nucleo
- 20_epistemologia
- 30_ontologia
- 40_metodologia
- 50_producto
- 60_interfaces
- 70_patrones

Su definición oficial reside exclusivamente en:

arquitectura_repositorio.md

---

# Directorios de gobierno

Contienen artefactos necesarios para gobernar el repositorio.

No forman parte de la arquitectura metodológica.

No introducen conceptos del dominio.

Ejemplos:

- governance

---

# Directorios de soporte

Contienen recursos utilizados durante el desarrollo.

Nunca constituyen autoridad metodológica.

Ejemplos:

- docs
- src
- static

---

# Directorios históricos

Conservan trazabilidad.

Nunca constituyen fuente de verdad.

Ejemplos:

- archive

---

# Directorios de trabajo

Contienen investigación o experimentación.

Su contenido carece de autoridad normativa.

Ejemplos:

- research
- atomicalab
- audit

---

# Restricciones

Un documento canónico únicamente podrá residir:

- en una capa arquitectónica;

o

- en un directorio cuyo estatuto haya sido declarado explícitamente por esta política.

---

# Prohibiciones

No crear directorios sin responsabilidad.

No utilizar directorios de soporte como fuente normativa.

No utilizar directorios históricos como fuente de verdad.

No introducir conceptos metodológicos fuera de las capas arquitectónicas.

---

# Relaciones

Depende de:

- arquitectura_repositorio.md

Utilizado por:

- todo el repositorio
