# Arquitectura del Repositorio

Estado: CANÓNICO

Versión: 3.0.0

Ubicación:

00_canon/arquitectura_repositorio.md

---

# Propósito

Definir la arquitectura oficial del repositorio.

Establecer la organización estructural del conocimiento.

Determinar la responsabilidad de cada directorio.

Definir las dependencias permitidas entre las capas del canon.

No define metodología.

No define conceptos.

No define normas de gobierno.

No define procedimientos.

---

# Principios

## A-001 · Arquitectura intelectual

La organización del repositorio responde a la arquitectura del conocimiento y no a criterios técnicos.

---

## A-002 · Responsabilidad única

Todo directorio posee exactamente una responsabilidad.

---

## A-003 · Dependencias dirigidas

Las dependencias únicamente podrán seguir la dirección definida por esta arquitectura.

---

## A-004 · Separación

Los documentos pertenecientes a responsabilidades distintas deberán residir en directorios distintos.

---

## A-005 · Estabilidad

La incorporación de nuevos documentos no modifica la arquitectura del repositorio.

Toda modificación arquitectónica requiere una nueva versión de este documento.

---

# Estructura oficial

## Capas del canon

Las siguientes capas constituyen la arquitectura metodológica oficial.

| Capa | Responsabilidad |
|------|-----------------|
| 00_canon | Gobierno del canon |
| 10_nucleo | Fundamentos invariantes |
| 20_epistemologia | Principios del conocimiento |
| 30_ontologia | Entidades y relaciones |
| 40_metodologia | Métodos e instrumentos |
| 50_producto | Materialización del producto |
| 60_interfaces | Interfaces oficiales |
| 70_patrones | Patrones reutilizables |

---

## Directorios de gobierno

Contienen artefactos necesarios para gobernar el repositorio.

No forman parte del conocimiento metodológico.

Ejemplos:

- auditorias
- governance

---

## Directorios de soporte

Contienen recursos auxiliares.

Nunca constituyen autoridad normativa.

Ejemplos:

- docs
- src
- static

---

## Directorios históricos

Conservan trazabilidad.

Nunca constituyen fuente de verdad.

Ejemplos:

- archive

---

## Directorios experimentales

Contienen trabajo en curso.

Su contenido carece de autoridad normativa.

Ejemplos:

- research
- atomicalab

---

# Dependencias permitidas

Las dependencias entre capas siguen una única dirección.

| Capa | Puede depender de |
|------|-------------------|
| 00_canon | — |
| 10_nucleo | 00_canon |
| 20_epistemologia | 00_canon, 10_nucleo |
| 30_ontologia | 00_canon, 10_nucleo, 20_epistemologia |
| 40_metodologia | 00_canon, 10_nucleo, 20_epistemologia, 30_ontologia |
| 50_producto | 00–40 |
| 60_interfaces | 00–50 |
| 70_patrones | 00–60 |

Las dependencias inversas no están permitidas.

---

# Incorporación de directorios

Todo nuevo directorio deberá:

- poseer una responsabilidad única;
- pertenecer a una categoría definida por el Canon;
- no duplicar responsabilidades existentes.

---

# Restricciones

No crear capas adicionales sin modificar este documento.

No modificar la responsabilidad de una capa sin nueva versión.

No situar documentos canónicos fuera de las capas o directorios autorizados.

No introducir dependencias inversas.

---

# Relaciones

Depende de:

- sistema_normativo.md
- gobierno_del_canon.md

Gobierna:

- politica_directorios.md

---

# Responsabilidad

Este documento define exclusivamente la arquitectura oficial del repositorio.

No define el contenido de las capas.

No define metodología.

No define conceptos.

No define normas de gobierno.
