# Relación

Entidad del dominio de ATÓMICA.

Estado: CONGELADO.

---

## Objetivo

Una Relación es una entidad del dominio de ATÓMICA.

Representa una conexión estructural entre dos o más entidades del dominio.

Es aquello que da estructura al dominio: sin relaciones, las entidades permanecerían aisladas.

No es ninguna de las entidades que conecta.

No modifica aquello que conecta.

No interpreta.

Existe con independencia de cualquier tecnología.

Pertenece al dominio, no a la arquitectura de observación: es aquello que existe en el sistema, nunca cómo se representa.

Una Relación es suficientemente abstracta para permanecer válida con independencia de las entidades que conecta.

---

## Responsabilidad

Una Relación puede:

- Conectar dos o más entidades del dominio.
- Expresar la naturaleza estructural de esa conexión.
- Dar estructura al dominio.

Una Relación nunca puede:

- Modificar las entidades que conecta.
- Sustituir a las entidades que conecta.
- Ser una de las entidades que conecta.
- Invertir la conexión que representa.
- Conectar elementos de la arquitectura de observación.
- Interpretar.
- Recomendar.
- Persuadir.
- Calcular.

---

## Jerarquía

Una Relación conecta dos o más entidades del dominio.

Una Relación no existe sin las entidades que conecta.

La importancia de una Relación deriva de las entidades que conecta, nunca de sí misma.

Una Relación puede tener una dirección cuando la naturaleza de la conexión lo exige, con independencia del número de entidades que conecta; nunca la invierte.

Relación con las entidades del dominio:

- Nunca las modifica.
- Nunca las sustituye.

Relación con otras relaciones:

- Las relaciones no se interpretan entre sí.
- Ninguna Relación depende de otra para existir.
- Varias relaciones pueden conectar las mismas entidades.

---

## Anatomía

Una Relación puede disponer de los siguientes elementos conceptuales. No es obligatorio que todos existan.

- Una identidad, que la distingue de otras relaciones.
- Las entidades relacionadas, que son las entidades del dominio que conecta.
- Una dirección, cuando la naturaleza de la conexión lo exige.

La identidad y las entidades relacionadas son constantes: una Relación no existe sin las entidades que conecta. La dirección depende de la naturaleza de la Relación.

---

## Contenido

Una Relación admite:

- La identidad de la relación.
- Las entidades relacionadas.
- La dirección, cuando corresponde.
- La naturaleza de la conexión.

Una Relación prohíbe:

- Interpretación.
- Recomendaciones.
- Cálculos.
- Contenido propio de las entidades que conecta.
- Modificación de las entidades que conecta.
- Conexión de elementos de la arquitectura de observación.
- Ser confundida con una de las entidades que conecta.

---

## Espaciado

Una Relación no tiene dimensión espacial.

Pertenece al dominio, no al Layout.

La separación exterior, la anchura y los márgenes pertenecen al Layout y a la Región.

Una Relación es conceptual. No introduce reglas de espaciado propias.

---

## Restricciones

- Una Relación nunca existe sin las entidades que conecta.
- Una Relación nunca conecta una sola entidad.
- Una Relación nunca modifica las entidades que conecta.
- Una Relación nunca sustituye a una entidad del dominio.
- Una Relación nunca es una de las entidades que conecta.
- Una Relación nunca invierte la conexión que representa.
- Una Relación nunca conecta elementos de la arquitectura de observación.
- Una Relación nunca interpreta.
- Una Relación nunca recomienda.
- Una Relación nunca persuade.
- Una Relación nunca calcula.
- Una Relación nunca determina su posición, su anchura ni sus márgenes.
- Una Relación nunca define espaciado.
- Una Relación nunca pertenece al Layout.
- Una Relación nunca pertenece a la arquitectura de observación.
- Una Relación nunca depende de ninguna tecnología para existir.

---

## Reutilización

Las relaciones son entidades reutilizables del dominio de ATÓMICA.

La definición de la entidad Relación permanece constante con independencia de las entidades que conecta.

La relación concreta cambia según las entidades que conecta. La definición de la entidad Relación no.

Nunca puede cambiar:

- Que una Relación conecta dos o más entidades del dominio.
- Que una Relación no existe sin las entidades que conecta.
- Que una Relación nunca modifica las entidades que conecta.
- Que una Relación nunca invierte la conexión que representa.
- Que una Relación nunca interpreta.

---

## Invariantes

Propiedades que siempre se cumplen, con independencia de las entidades que la Relación conecta.

- Toda Relación conecta dos o más entidades del dominio.
- Ninguna Relación existe sin las entidades que conecta.
- Ninguna Relación modifica las entidades que conecta.
- Ninguna Relación sustituye a las entidades que conecta.
- Ninguna Relación es una de las entidades que conecta.
- Ninguna Relación invierte la conexión que representa.
- Ninguna Relación conecta elementos de la arquitectura de observación.
- Ninguna Relación interpreta, recomienda, persuade ni calcula.
- Toda Relación existe con independencia de cualquier tecnología.

---

Estado: CONGELADO.