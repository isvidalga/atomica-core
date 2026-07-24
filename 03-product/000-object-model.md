# ATÓMICA Product Object Model

Estado: Draft
Versión: 1.0

---

# Propósito

ATÓMICA no se construye a partir de componentes visuales.

Se construye a partir de objetos del dominio.

Las pantallas representan objetos.

Los componentes visuales son únicamente la manifestación de dichos objetos.

Esta separación garantiza que el producto pueda evolucionar visualmente sin alterar el significado del conocimiento representado.

---

# Jerarquía

Dominio

↓

Objeto

↓

Representación

↓

Pantalla

Nunca al revés.

---

# Regla fundamental

Todo componente del producto debe representar exactamente un objeto del dominio.

Si un componente no puede asociarse a un objeto del dominio, no pertenece a ATÓMICA.

---

# Objetos Fundamentales

ATÓMICA se construye sobre diez objetos fundamentales.

---

# Organización

## Definición

Sistema vivo observado por ATÓMICA.

Constituye el objeto raíz del modelo.

Todo el conocimiento pertenece a una organización.

---

## Siempre muestra

- nombre
- estado sistémico
- fecha de observación

---

## Nunca representa

- empresa jurídica
- cliente
- expediente

---

# Estado

## Definición

Representación agregada del comportamiento observado del sistema en un instante determinado.

No representa rendimiento.

No representa cumplimiento.

No representa madurez.

---

## Siempre muestra

- intensidad
- evolución
- confianza
- horizonte temporal

---

## Estados posibles

- estable
- mejorando
- deteriorándose
- incierto

---

# Observación

## Definición

Unidad mínima de conocimiento capturada por ATÓMICA.

Una observación nunca constituye una conclusión.

Siempre constituye un dato.

---

## Procedencia

- cuestionario
- evidencia documental
- integración
- usuario
- IA

---

## Siempre muestra

- origen
- fecha
- tipo

---

# Evidencia

## Definición

Información verificable que incrementa o reduce la confianza de una hipótesis.

---

## Siempre muestra

- origen
- fecha
- tipo
- verificabilidad
- nivel de confianza

---

## Nunca representa

Una opinión.

---

# Hipótesis

## Definición

Explicación provisional del comportamiento observado.

Toda hipótesis posee incertidumbre.

Toda hipótesis puede cambiar.

---

## Siempre muestra

- título
- confianza
- evidencias relacionadas
- última actualización

---

## Puede mostrar

- explicación
- referencias
- evolución

---

# Fragilidad

## Definición

Patrón organizacional que reduce la capacidad adaptativa del sistema.

No representa un problema puntual.

Representa un comportamiento persistente.

---

## Siempre muestra

- intensidad
- tendencia
- impacto
- persistencia

---

# Capacidad

## Definición

Patrón organizacional que incrementa la resiliencia del sistema.

No representa un recurso.

Representa una propiedad emergente.

---

## Siempre muestra

- intensidad
- evolución
- estabilidad

---

# Intervención

## Definición

Acción diseñada para modificar una dinámica organizacional.

No representa una tarea.

No representa un proyecto.

Representa una alteración deliberada del sistema.

---

## Siempre muestra

- impacto esperado
- esfuerzo
- horizonte
- incertidumbre

---

# Evolución

## Definición

Cambio observado entre dos estados del sistema.

No representa actividad.

Representa transformación.

---

## Siempre muestra

- dirección
- velocidad
- periodo observado

---

# Relación

## Definición

Conexión significativa entre dos objetos del modelo.

ATÓMICA observa relaciones.

No elementos aislados.

---

## Siempre muestra

- origen
- destino
- intensidad
- tipo

---

# Reglas de Representación

Todo objeto posee:

- una representación compacta
- una representación expandida
- una representación contextual

Nunca más.

---

# Reglas de Composición

Las pantallas no contienen componentes.

Las pantallas contienen objetos.

Una pantalla constituye una composición de objetos relacionados.

---

# Reglas de Consistencia

Todo objeto conserva:

- mismo significado
- misma jerarquía
- mismo comportamiento
- mismos estados
- misma terminología

En cualquier parte del producto.

---

# Consecuencia

El usuario aprende una vez.

Después reconoce los mismos objetos en cualquier pantalla.

La interfaz desaparece.

Permanece el conocimiento.
