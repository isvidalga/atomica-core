# Política de Directorios

Estado: CANÓNICO

Tipo: NORMA

Versión: 2.0.0

Ubicación:

00_canon/politica_directorios.md

---

# Propósito

Definir el significado arquitectónico de los directorios del repositorio.

Establecer qué directorios forman parte del canon.

Establecer la clasificación oficial de todos los directorios del repositorio.

---

# Principios

La arquitectura intelectual prevalece sobre la estructura física.

Todo directorio posee exactamente una responsabilidad.

Ningún directorio podrá existir sin una responsabilidad declarada.

Todo directorio pertenece exactamente a una categoría.

---

# Categorías oficiales

Existen únicamente las siguientes categorías.

## Capa arquitectónica

Constituye el canon metodológico.

Contiene exclusivamente conocimiento normativo.

Directorios:

- 00_canon
- 10_nucleo
- 20_epistemologia
- 30_ontologia
- 40_metodologia
- 50_producto
- 60_interfaces
- 70_patrones

---

## Directorio de gobierno

Gobierna el repositorio.

No introduce conocimiento metodológico.

Directorios:

- governance

---

## Directorio de soporte

Contiene recursos auxiliares del repositorio.

Nunca constituye autoridad normativa.

Directorios:

- docs
- src
- static

---

## Directorio histórico

Conserva trazabilidad.

Nunca constituye fuente de verdad.

Directorios:

- archive

---

## Directorio de trabajo

Contiene investigación, auditorías o experimentación.

Su contenido carece de autoridad normativa salvo declaración expresa del Canon.

Directorios:

- auditorias
- research
- atomicalab

---

# Restricciones

Un documento canónico únicamente podrá residir:

- en una capa arquitectónica; o
- en un directorio cuyo estatuto haya sido declarado explícitamente por esta política.

Todo directorio de primer nivel deberá pertenecer exactamente a una categoría.

---

# Prohibiciones

No crear directorios sin responsabilidad.

No utilizar directorios de soporte como fuente normativa.

No utilizar directorios históricos como fuente de verdad.

No introducir conocimiento metodológico fuera de las capas arquitectónicas salvo autorización explícita del Canon.

---

# Relaciones

Depende de:

- arquitectura_repositorio.md

Gobernado por:

- sistema_normativo.md

Utilizado por:

- todo el repositorio
