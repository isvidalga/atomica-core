# Política de Identificadores

Estado: CANÓNICO

Versión: 1.0.0

Ubicación:

```
00_canon/politica_identificadores.md
```

---

# Propósito

Esta política define el sistema oficial de identificadores del canon.

Su responsabilidad consiste exclusivamente en establecer las reglas mediante las cuales se crean, asignan, utilizan, conservan y retiran los identificadores oficiales del repositorio.

No define documentos.

No define conceptos.

No crea espacios de nombres concretos.

No asigna identificadores individuales.

---

# Alcance

Esta política es aplicable a todas las capas del repositorio.

Todo identificador oficial deberá cumplir las reglas aquí establecidas.

Ningún documento podrá establecer reglas incompatibles con esta política.

---

# Definiciones

## Identificador oficial

Designador único, estable y permanente asignado a una entidad registrada del canon.

Su función es garantizar una referencia inequívoca durante todo el ciclo de vida de la entidad.

---

## Etiqueta interna

Numeración utilizada únicamente para organizar el contenido de un documento.

No constituye un identificador oficial.

No puede utilizarse como referencia independiente fuera del documento que la contiene.

---

## Espacio de nombres

Conjunto de identificadores pertenecientes a un mismo concepto y gobernados por una única serie.

Cada espacio de nombres posee un prefijo exclusivo.

---

## Registro

Documento oficial que declara la existencia de un espacio de nombres o de un identificador.

La existencia de un identificador no depende de su utilización, sino de su inscripción en el registro correspondiente.

---

# Principios

## PI-001 · Unicidad

Todo identificador oficial es único dentro del canon.

Dos entidades distintas nunca podrán compartir un mismo identificador.

---

## PI-002 · Estabilidad

Un identificador oficial permanece invariable durante todo el ciclo de vida de la entidad.

El cambio de nombre, ubicación, versión o estado no modifica su identificador.

---

## PI-003 · Persistencia

La retirada de una entidad no implica la desaparición de su identificador.

Todo identificador retirado permanece registrado.

---

## PI-004 · No reutilización

Un identificador retirado nunca podrá asignarse nuevamente.

Los huecos forman parte de la historia del canon.

---

## PI-005 · Separación

Las etiquetas internas y los identificadores oficiales pertenecen a sistemas distintos.

Una etiqueta interna nunca adquiere estatuto de identificador oficial.

---

# Reglas

## R-001

Todo identificador oficial pertenece exactamente a un único espacio de nombres.

---

## R-002

Cada espacio de nombres identifica exactamente un único concepto.

---

## R-003

Un concepto no podrá utilizar simultáneamente más de un espacio de nombres oficial.

---

## R-004

Todo identificador oficial deberá estar inscrito en el Registro de Identificadores.

---

## R-005

Todo espacio de nombres deberá estar inscrito en el Registro de Espacios de Nombres.

---

## R-006

La asignación de un identificador constituye un acto de gobierno del canon.

No podrá producirse automáticamente.

---

## R-007

La asignación de un identificador solo podrá realizarse durante el procedimiento oficial de incorporación de una entidad al canon.

---

## R-008

Un identificador nunca expresa información semántica distinta de la pertenencia a un espacio de nombres y una posición dentro de su serie.

Su interpretación depende exclusivamente de la documentación oficial del concepto correspondiente.

---

## R-009

La modificación de una entidad nunca modifica su identificador.

---

## R-010

La sustitución de una entidad por otra genera un nuevo identificador.

El identificador sustituido permanece registrado como histórico.

---

# Etiquetas internas

Las etiquetas internas podrán utilizarse exclusivamente para organizar el contenido de un documento.

No podrán:

- citarse como autoridad independiente;
- registrarse como entidades;
- reutilizar espacios de nombres oficiales;
- utilizarse fuera del documento sin referencia explícita al documento origen.

---

# Espacios de nombres

La presente política no define ningún espacio de nombres concreto.

Los espacios oficiales se declaran exclusivamente en:

```
00_canon/registro_espacios_nombres.md
```

---

# Registro de identificadores

Los identificadores oficiales se registran exclusivamente mediante el mecanismo definido por el Gobierno del Canon.

Un identificador no registrado carece de validez normativa.

---

# Compatibilidad

Todo documento existente que utilice identificadores incompatibles con esta política deberá adaptarse mediante el procedimiento oficial de normalización.

La adaptación nunca implica reutilización de identificadores previamente retirados.

---

# Restricciones

No se permite:

- reutilizar identificadores retirados;
- crear espacios de nombres fuera del registro oficial;
- asignar identificadores automáticamente;
- utilizar etiquetas internas como identificadores oficiales;
- mantener dos identificadores oficiales para una misma entidad;
- compartir un identificador entre entidades distintas.

---

# Relaciones

Esta política depende de:

- `00_canon/gobierno_del_canon.md`

Esta política gobierna:

- `00_canon/registro_espacios_nombres.md`
- `00_canon/registro_documentos.md`
- `00_canon/registro_obsolescencias.md`

---

# Responsabilidad

Este documento define exclusivamente las reglas del sistema de identificadores del canon.

La declaración de espacios de nombres corresponde al Registro de Espacios de Nombres.

La asignación concreta de identificadores corresponde al procedimiento de incorporación de cada concepto.

La existencia oficial de una entidad corresponde al registro documental correspondiente.
