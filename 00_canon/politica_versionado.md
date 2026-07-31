# Política de Versionado

Estado: CANÓNICO

Versión: 1.0.0

Ubicación:

```
00_canon/politica_versionado.md
```

---

# Propósito

Esta política define el sistema oficial de versionado del canon.

Su responsabilidad consiste exclusivamente en establecer cómo evolucionan los documentos y el propio canon sin comprometer su estabilidad, trazabilidad y compatibilidad.

No define procedimientos de publicación.

No define herramientas.

No define el sistema de control de versiones.

---

# Alcance

Esta política es aplicable a:

- el canon completo;
- todos los documentos canónicos;
- los registros oficiales;
- los catálogos oficiales.

---

# Definiciones

## Versión

Identificador que representa un estado publicado del canon o de un documento canónico.

---

## Compatibilidad

Capacidad de una nueva versión para mantener válidas las referencias, reglas y significado establecidos por una versión anterior.

---

## Cambio incompatible

Toda modificación que invalida el comportamiento normativo esperado por una versión anterior.

---

## Cambio compatible

Toda modificación que amplía o corrige el canon sin invalidar la interpretación de versiones anteriores.

---

# Principios

## PV-001 · Toda modificación produce una nueva versión

Ningún documento canónico podrá modificarse sin incrementar su versión.

---

## PV-002 · Toda versión es permanente

Una versión publicada nunca podrá modificarse.

Toda modificación genera una nueva versión.

---

## PV-003 · La historia se conserva

Las versiones anteriores forman parte del historial oficial del canon.

Nunca se eliminan.

---

## PV-004 · La compatibilidad debe declararse

Toda nueva versión deberá indicar expresamente su relación con la versión anterior.

---

# Esquema de versionado

El canon utiliza tres niveles de versión.

```
MAJOR.MINOR.PATCH
```

---

# Cambios MAJOR

Una versión MAJOR representa un cambio incompatible.

Entre otros casos:

- eliminación de conceptos;
- modificación de la arquitectura del repositorio;
- cambios incompatibles en normas existentes;
- retirada de identificadores oficiales;
- modificación de relaciones fundamentales entre conceptos.

---

# Cambios MINOR

Una versión MINOR representa una ampliación compatible.

Entre otros casos:

- incorporación de nuevos documentos;
- incorporación de nuevos conceptos;
- incorporación de nuevos catálogos;
- incorporación de nuevas políticas;
- ampliaciones metodológicas compatibles.

---

# Cambios PATCH

Una versión PATCH representa una corrección compatible.

Entre otros casos:

- errores tipográficos;
- referencias incorrectas;
- rutas erróneas;
- enlaces rotos;
- correcciones editoriales sin efecto normativo.

---

# Reglas

## R-001

Todo documento canónico declara exactamente una versión.

---

## R-002

Toda publicación del canon declara una única versión oficial.

---

## R-003

Una versión publicada nunca podrá modificarse.

---

## R-004

Las versiones deberán avanzar de forma monotónica.

Nunca retroceden.

---

## R-005

La clasificación del cambio deberá justificarse.

---

## R-006

Un cambio incompatible requiere incremento MAJOR.

---

## R-007

Una ampliación compatible requiere incremento MINOR.

---

## R-008

Una corrección compatible requiere incremento PATCH.

---

# Compatibilidad

Toda nueva versión deberá declarar una de las siguientes condiciones:

- Compatible
- Parcialmente compatible
- Incompatible

La clasificación deberá justificarse.

---

# Publicación

Una versión oficial del canon requiere:

- aprobación por el Gobierno del Canon;
- actualización de los registros afectados;
- actualización de la versión correspondiente.

---

# Restricciones

No se permite:

- modificar una versión publicada;
- reutilizar un número de versión;
- reducir una versión;
- publicar documentos sin versión;
- modificar la clasificación del cambio después de la publicación.

---

# Relaciones

Depende de:

- `00_canon/gobierno_del_canon.md`

Gobierna:

- todos los documentos canónicos;
- todos los registros;
- todos los catálogos;
- todas las publicaciones del canon.

---

# Responsabilidad

Este documento define exclusivamente la política oficial de versionado del canon.

No define herramientas de control de versiones.

No define procedimientos de publicación.

No define estrategias de desarrollo.
