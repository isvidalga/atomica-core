# Registro de Documentos

Estado: CANÓNICO

Versión: 1.0.0

Ubicación:

```
00_canon/registro_documentos.md
```

---

# Propósito

Este registro declara el inventario oficial de documentos del canon.

Su responsabilidad consiste exclusivamente en determinar qué documentos pertenecen al canon y cuál es su estado oficial.

No define conceptos.

No define metodología.

No define estructura documental.

No sustituye a los catálogos propios de cada concepto.

---

# Alcance

Todo documento canónico deberá estar inscrito en este registro.

La pertenencia al canon depende exclusivamente de este registro.

La existencia física de un archivo no implica pertenencia al canon.

---

# Definiciones

## Documento canónico

Documento inscrito oficialmente en este registro.

---

## Documento no registrado

Documento existente en el repositorio que no pertenece al canon.

Puede corresponder a:

- investigación;
- trabajo en curso;
- archivo histórico;
- documentación auxiliar;
- cualquier otra categoría no canónica.

---

## Registro documental

Inventario oficial de documentos reconocidos por el Gobierno del Canon.

---

# Principios

## RD-001 · Fuente única

Este registro constituye la única autoridad para determinar qué documentos pertenecen al canon.

---

## RD-002 · Persistencia

La retirada de un documento nunca elimina su entrada del registro.

---

## RD-003 · Trazabilidad

Todo documento conserva su historial documental.

---

## RD-004 · Unicidad

Cada documento aparece exactamente una vez.

---

# Estructura del registro

Cada entrada deberá contener, como mínimo:

- Identificador documental
- Nombre oficial
- Tipo documental
- Capa
- Ruta oficial
- Estado
- Versión
- Documento autoridad
- Fecha de incorporación
- Fecha de retirada (si procede)

---

# Registro

| ID | Documento | Tipo | Capa | Estado | Versión |
|----|-----------|------|-------|---------|----------|
| *(Sin entradas en la versión 1.0.0)* |

---

# Reglas

## R-001

Todo documento canónico deberá figurar en este registro.

---

## R-002

Un documento sólo podrá aparecer una vez.

---

## R-003

La modificación del estado de un documento requiere la actualización de este registro.

---

## R-004

La modificación de la ubicación oficial requiere la actualización de este registro.

---

## R-005

La retirada de un documento nunca elimina su entrada.

Su estado deberá reflejar dicha condición.

---

## R-006

La incorporación de un documento constituye un acto de gobierno del canon.

---

## R-007

La inscripción en este registro prevalece sobre cualquier declaración contenida en la cabecera del propio documento.

---

# Estados

Los estados válidos son los definidos por:

```
00_canon/gobierno_del_canon.md
```

Este registro únicamente refleja dichos estados.

No los define.

---

# Incorporación

Un documento podrá incorporarse únicamente cuando:

- exista físicamente;
- cumpla la tipología documental correspondiente;
- haya sido aprobado por el Gobierno del Canon;
- quede inscrito en este registro.

---

# Modificación

Toda modificación que afecte a:

- nombre;
- ruta;
- estado;
- versión;
- tipo documental;

deberá reflejarse en este registro.

---

# Retirada

La retirada de un documento:

- conserva la entrada;
- conserva el historial;
- modifica únicamente su estado.

---

# Restricciones

No se permite:

- registrar dos veces el mismo documento;
- eliminar entradas históricas;
- considerar canónico un documento no registrado;
- utilizar este registro para definir conceptos;
- utilizar este registro como catálogo metodológico.

---

# Relaciones

Depende de:

- `00_canon/gobierno_del_canon.md`
- `00_canon/politica_versionado.md`

Es utilizado por:

- todos los documentos canónicos;
- todos los catálogos;
- todas las auditorías del canon.

---

# Responsabilidad

Este documento declara exclusivamente el inventario oficial de documentos del canon.

No define normas.

No define conceptos.

No define metodología.

No define arquitectura.
