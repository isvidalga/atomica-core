# Modelo relacional BD v2

Estado: DESARROLLO

Versión: 1.0.0

Tipo: Desarrollo

Ubicación:

90_desarrollo/modelo_relacional_bd_v2.md

---

# Propósito

Este documento transforma la arquitectura lógica definida en `80_infraestructura/esquema_bd_v2.md` en un modelo relacional implementable.

No constituye todavía el esquema SQL.

Su finalidad consiste en definir los agregados, entidades persistentes y relaciones que deberán implementarse.

---

# Agregados

La Base de Datos se organiza en los siguientes agregados:

1. Marco metodológico

2. Organización

3. Observación

4. Modelo Vivo

5. Evidencia

6. Hipótesis

7. Intervención

8. Credencial

9. Benchmark

10. Plataforma

---

# Agregado · Marco metodológico

Responsabilidad:

Persistir las definiciones versionadas de la metodología.

Entidades principales:

- metodología
- dimensión
- capacidad
- pregunta
- escala
- umbral

No depende de ningún otro agregado.

---

# Agregado · Organización

Responsabilidad:

Persistir la identidad organizacional.

Entidades principales:

- organización
- usuario
- pertenencia
- evento_identidad

Depende únicamente del Marco metodológico.

---

# Agregado · Observación

Responsabilidad:

Persistir todas las observaciones realizadas sobre una organización.

Entidades principales:

- observación
- respuesta
- instrumento
- origen

Depende de:

- Marco metodológico
- Organización

---

# Agregado · Modelo Vivo

Responsabilidad:

Persistir la evolución del conocimiento.

Entidades principales:

- modelo_vivo
- estado_sistemico
- trayectoria

Depende de:

- Organización
- Observación

---

# Agregado · Evidencia

Responsabilidad:

Persistir las evidencias.

Entidades principales:

- evidencia
- archivo
- confianza

Depende de:

- Observación
- Modelo Vivo

---

# Agregado · Hipótesis

Responsabilidad:

Persistir las hipótesis generadas por la metodología.

Entidades principales:

- hipótesis
- contradicción

Depende de:

- Modelo Vivo
- Evidencia

---

# Agregado · Intervención

Responsabilidad:

Persistir las intervenciones realizadas.

Entidades principales:

- intervención
- seguimiento

Depende de:

- Modelo Vivo
- Hipótesis

---

# Agregado · Credencial

Responsabilidad:

Persistir las credenciales emitidas.

Entidades principales:

- credencial
- sello

Depende de:

- Modelo Vivo

---

# Agregado · Benchmark

Responsabilidad:

Persistir conocimiento agregado anonimizado.

Entidades principales:

- benchmark
- percentil
- referencia

Depende de:

- Modelo Vivo

Nunca modifica el Modelo Vivo.

---

# Agregado · Plataforma

Responsabilidad:

Persistir la información necesaria para operar el producto.

Entidades principales:

- suscripción
- auditoría
- configuración
- telemetría

No forma parte del dominio.

---

# Relaciones

Las dependencias permitidas son:

Marco metodológico

↓

Organización

↓

Observación

↓

Modelo Vivo

↓

Evidencia

↓

Hipótesis

↓

Intervención

↓

Credencial

↓

Benchmark

Plataforma permanece desacoplada del dominio.

---

# Restricciones

Todo agregado posee un único propietario.

No existen dependencias circulares.

Las referencias cruzadas deberán realizarse mediante identificadores.

Los Estados Sistémicos son inmutables.

Toda modificación genera un nuevo Estado.

---

# Implementación

El esquema SQL deberá derivarse exclusivamente de este documento.

No podrán incorporarse tablas ajenas a los agregados aquí definidos sin modificar previamente este documento.
