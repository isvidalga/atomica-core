# ARQUITECTURA DEL REPOSITORIO

Estado: CANÓNICO

Tipo: NORMA

Versión: 4.0.0

Ubicación:

00_canon/arquitectura_repositorio.md

---

# Propósito

Definir la arquitectura documental de ATÓMICA.

El repositorio se organiza por capas que reflejan la arquitectura intelectual del sistema y no criterios técnicos.

Cada capa posee una responsabilidad única.

Cada capa solo puede depender de las capas superiores autorizadas.

---

# Responsabilidad única

Cada documento posee una única responsabilidad.

Cada concepto posee una única definición oficial.

No podrán existir documentos con responsabilidades compartidas.

En caso de detectar duplicidades:

- se conservará una única fuente de verdad;
- el resto deberá integrarse o eliminarse.

---

# Capas

| Capa | Responsabilidad | Puede depender de |
|---|---|---|
| `00_canon` | Gobierno del Canon | — |
| `10_nucleo` | Fundamentos invariantes | `00_canon` |
| `20_epistemologia` | Principios del conocimiento | `00_canon`, `10_nucleo` |
| `30_ontologia` | Entidades y relaciones | `00_canon`, `10_nucleo`, `20_epistemologia` |
| `40_metodologia` | Métodos e instrumentos | `00_canon`–`30_ontologia` |
| `50_producto` | Materialización del producto | `00_canon`–`40_metodologia` |
| `60_interfaces` | Interfaces oficiales | `00_canon`–`50_producto` |
| `70_patrones` | Patrones reutilizables | `00_canon`–`60_interfaces` |
| `80_infraestructura` | Infraestructura del sistema | `00_canon`–`70_patrones` |
| `90_desarrollo` | Desarrollo e implementación | `00_canon`–`80_infraestructura` |

---

# Dependencias

Las dependencias entre capas son unidireccionales.

Una capa únicamente puede depender de las capas superiores declaradas en la tabla anterior.

Las dependencias inversas no están permitidas.

Un documento de una capa inferior no puede redefinir, sustituir ni contradecir una definición o norma de una capa superior.

---

# Naturaleza de las capas

## 00_canon

Contiene las normas que gobiernan el Canon y la autoridad documental de ATÓMICA.

---

## 10_nucleo

Contiene los fundamentos invariantes del sistema.

---

## 20_epistemologia

Contiene los principios y conceptos que gobiernan la construcción y evaluación del conocimiento.

---

## 30_ontologia

Contiene las entidades y relaciones reconocidas por la ontología de ATÓMICA.

---

## 40_metodologia

Contiene los métodos mediante los cuales se construye y transforma el conocimiento conforme al Canon.

---

## 50_producto

Contiene la materialización del producto y sus instrumentos.

---

## 60_interfaces

Contiene las interfaces oficiales mediante las cuales el producto representa y permite explorar el conocimiento.

---

## 70_patrones

Contiene los patrones reutilizables definidos por ATÓMICA.

---

## 80_infraestructura

Contiene la infraestructura necesaria para soportar el sistema.

Esta capa pertenece a la arquitectura del repositorio, pero no puede redefinir conceptos, normas, entidades, metodología o producto establecidos en las capas superiores.

---

## 90_desarrollo

Contiene los artefactos de desarrollo e implementación.

Esta capa pertenece a la arquitectura operativa del repositorio.

No posee autoridad para redefinir ninguna decisión, norma, entidad, concepto metodológico o definición de producto establecida en las capas superiores.

---

# Autoridad

La posición de un documento dentro de una capa no le confiere por sí misma autoridad normativa.

La autoridad deberá proceder del mecanismo de gobierno establecido por el Canon.

La existencia de un documento no constituye evidencia de su autoridad.

---

# Precedencia

En caso de conflicto entre documentos, se aplicarán las reglas de precedencia establecidas por:

- `00_canon/sistema_normativo.md`
- `00_canon/gobierno_del_canon.md`
- `00_canon/politica_precedencia_repositorios.md`

La pertenencia a una capa no autoriza a resolver mediante interpretación un conflicto normativo.

---

# Integridad documental

Todo documento deberá:

- pertenecer a una única responsabilidad;
- declarar su tipo;
- declarar su estado;
- respetar las dependencias de su capa;
- mantener trazabilidad hasta su fuente de autoridad;
- evitar duplicar definiciones existentes.

---

# Duplicidades

Cuando un mismo artefacto exista en más de una capa:

1. deberá determinarse cuál es su única fuente de verdad;
2. las copias que no constituyan fuente de verdad deberán integrarse o eliminarse;
3. no podrán coexistir dos autoridades para el mismo artefacto.

La existencia de una versión posterior no determina por sí sola su autoridad.

---

# Documentos de infraestructura y desarrollo

Los documentos de `80_infraestructura` y `90_desarrollo` están subordinados a las capas conceptuales y de producto.

No podrán utilizarse como fuente para modificar:

- axiomas;
- principios;
- conceptos epistemológicos;
- entidades ontológicas;
- metodología;
- producto;
- interfaces.

Cuando un documento de infraestructura o desarrollo entre en conflicto con una definición o norma superior, prevalece la autoridad superior conforme al Sistema Normativo.

---

# Responsabilidad

Este documento define exclusivamente la arquitectura documental del repositorio.

No define:

- el contenido de las capas;
- las entidades de la ontología;
- los procedimientos metodológicos;
- el producto;
- la infraestructura concreta;
- las prácticas de desarrollo.

---

# Referencias normativas

- `00_canon/sistema_normativo.md`
- `00_canon/gobierno_del_canon.md`
- `00_canon/politica_directorios.md`
- `00_canon/politica_precedencia_repositorios.md`
- `00_canon/proceso_modificacion_canon.md`
