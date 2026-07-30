# Arquitectura del Repositorio

**Versión:** 1.0  
**Estado:** Canónico  
**Ubicación:** `00_canon/arquitectura_repositorio.md`

---

# Breadcrumb

```
ATÓMICA
└── 00_canon
    └── arquitectura_repositorio.md
```

---

# Propósito

Este documento define la arquitectura intelectual del repositorio de ATÓMICA.

No describe la metodología.

No describe el producto.

No describe la implementación.

Describe cómo se organiza el conocimiento y cómo se relacionan sus distintas capas.

Toda modificación del repositorio deberá respetar esta arquitectura.

En caso de conflicto, este documento prevalece sobre la organización física de carpetas.

---

# Principio fundamental

El repositorio representa una jerarquía de conocimiento.

Cada capa depende exclusivamente de las capas situadas por encima de ella.

Ninguna capa puede modificar las decisiones de una capa superior.

El conocimiento siempre fluye desde los principios hacia la implementación.

Nunca en sentido contrario.

---

# Capas del repositorio

```
00_canon

↓

10_nucleo

↓

20_ontologia

↓

30_epistemologia

↓

40_metodologia

↓

50_producto

↓

60_interfaces

↓

70_patrones
```

Cada carpeta posee una única responsabilidad.

---

# 00 · Canon

## Función

Define las decisiones fundamentales que gobiernan todo el repositorio.

Contiene únicamente principios permanentes.

Nunca contiene decisiones de implementación.

## Responde

¿Por qué existe ATÓMICA?

## Puede depender de

Nada.

## Puede ser utilizado por

Todas las capas.

---

# 10 · Núcleo

## Función

Define el lenguaje común del sistema.

Establece conceptos transversales necesarios para comprender el resto del repositorio.

No modela entidades.

No define producto.

## Puede depender de

00_canon

## Puede ser utilizado por

Todas las capas inferiores.

---

# 20 · Ontología

## Función

Define qué existe dentro del dominio de ATÓMICA.

Toda entidad oficial del sistema nace aquí.

Una entidad solo puede existir si posee una definición ontológica.

## Puede depender de

00_canon

10_nucleo

## Puede ser utilizado por

30_epistemologia

40_metodologia

50_producto

60_interfaces

70_patrones

---

# 30 · Epistemología

## Función

Define cómo conoce ATÓMICA.

Describe la naturaleza del conocimiento, la incertidumbre, la confianza, las hipótesis y las inferencias.

Nunca define entidades nuevas.

## Puede depender de

00_canon

10_nucleo

20_ontologia

## Puede ser utilizado por

40_metodologia

50_producto

60_interfaces

70_patrones

---

# 40 · Metodología

## Función

Define cómo se construye el modelo organizacional.

Describe el funcionamiento del método.

Nunca modifica la ontología.

Nunca modifica la epistemología.

## Puede depender de

00_canon

10_nucleo

20_ontologia

30_epistemologia

## Puede ser utilizado por

50_producto

60_interfaces

70_patrones

---

# 50 · Producto

## Función

Define el comportamiento del producto.

Contiene:

- navegación
- gramática cognitiva
- objetos del producto
- estados
- acciones
- reglas
- interacción

Nunca define metodología.

Nunca define ontología.

Nunca define principios.

## Puede depender de

00_canon

10_nucleo

20_ontologia

30_epistemologia

40_metodologia

## Puede ser utilizado por

60_interfaces

---

# 60 · Interfaces

## Función

Define cada pantalla del producto.

Cada documento especifica completamente una interfaz.

Nunca modifica el comportamiento del producto.

Nunca redefine conceptos metodológicos.

## Puede depender de

00_canon

10_nucleo

20_ontologia

30_epistemologia

40_metodologia

50_producto

## Puede ser utilizado por

Implementación.

---

# 70 · Patrones

## Función

Define los patrones organizacionales oficiales de ATÓMICA.

Cada patrón constituye una instancia metodológica construida a partir del dominio.

Nunca introduce nuevas entidades.

Nunca modifica el método.

## Puede depender de

00_canon

10_nucleo

20_ontologia

30_epistemologia

40_metodologia

## No puede ser utilizado como fundamento metodológico.

Los patrones aplican la metodología.

No la definen.

---

# Flujo del conocimiento

Toda decisión deberá seguir el siguiente recorrido.

```
Canon

↓

Núcleo

↓

Ontología

↓

Epistemología

↓

Metodología

↓

Producto

↓

Interfaces

↓

Implementación
```

Nunca podrá invertirse este flujo.

---

# Dependencias permitidas

Cada capa únicamente podrá depender de capas superiores.

Ejemplo válido:

```
Producto

↓

Metodología
```

Ejemplo no válido:

```
Metodología

↓

Producto
```

---

# Dependencias prohibidas

Quedan expresamente prohibidas las siguientes situaciones:

- una entidad definida fuera de la ontología;
- una regla metodológica definida dentro del producto;
- una decisión de UX definida en la metodología;
- una página que modifique el dominio;
- una implementación que redefina el comportamiento del producto;
- un patrón que introduzca nuevos conceptos metodológicos.

---

---

# Matriz de dependencias

La siguiente matriz define las únicas dependencias permitidas entre las capas del repositorio.

| Capa | 00 | 10 | 20 | 30 | 40 | 50 | 60 | 70 |
|------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **00 · Canon** | — | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **10 · Núcleo** | ✅ | — | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **20 · Ontología** | ✅ | ✅ | — | ❌ | ❌ | ❌ | ❌ | ❌ |
| **30 · Epistemología** | ✅ | ✅ | ✅ | — | ❌ | ❌ | ❌ | ❌ |
| **40 · Metodología** | ✅ | ✅ | ✅ | ✅ | — | ❌ | ❌ | ❌ |
| **50 · Producto** | ✅ | ✅ | ✅ | ✅ | ✅ | — | ❌ | ❌ |
| **60 · Interfaces** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — | ❌ |
| **70 · Patrones** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | — |

---

## Interpretación

La fila representa el documento que depende.

La columna representa la capa de la que puede depender.

**✅** Dependencia permitida.

**❌** Dependencia prohibida.

**—** Misma capa.

---

## Ejemplos válidos

```
60_interfaces

↓

50_producto
```

```
40_metodologia

↓

20_ontologia
```

```
30_epistemologia

↓

20_ontologia
```

---

## Ejemplos no válidos

```
20_ontologia

↓

40_metodologia
```

```
40_metodologia

↓

60_interfaces
```

```
50_producto

↓

70_patrones
```

```
30_epistemologia

↓

50_producto
```

---

# Regla de dependencia

Ningún documento podrá depender de una capa situada por debajo de la suya.

Cuando un concepto requiera modificar una capa superior, la modificación deberá realizarse primero en dicha capa y propagarse posteriormente hacia las capas dependientes.

Las dependencias ascendentes quedan prohibidas.

Toda excepción deberá justificarse explícitamente mediante una nueva versión de esta arquitectura.

---

# Responsabilidad única

Cada documento posee una única responsabilidad.

Cada concepto posee una única definición oficial.

No podrán existir documentos con responsabilidades compartidas.

En caso de detectar duplicidades:

- se conservará una única fuente de verdad;
- el resto deberá integrarse o eliminarse.

---

# Evolución del repositorio

Toda nueva incorporación deberá responder, en este orden, a las siguientes preguntas:

1. ¿Es un principio?
2. ¿Es un concepto del dominio?
3. ¿Es una regla epistemológica?
4. ¿Es una regla metodológica?
5. ¿Es una regla del producto?
6. ¿Es una especificación de interfaz?
7. ¿Es un patrón organizacional?

Solo después podrá determinarse su ubicación.

Nunca al contrario.

---

# Criterio de incorporación

Ningún documento podrá añadirse al repositorio si:

- duplica otro documento existente;
- redefine un concepto ya oficial;
- mezcla responsabilidades de distintas capas;
- contradice una decisión canónica.

Toda nueva documentación deberá integrarse respetando la arquitectura definida en este documento.

---

# Regla de oro

La arquitectura intelectual constituye la referencia estable del repositorio.

La estructura física podrá evolucionar siempre que preserve dicha arquitectura.

Toda reorganización deberá mantener inalteradas las responsabilidades y dependencias definidas en este documento.

Las carpetas organizan documentos.

La arquitectura organiza conocimiento.

La segunda prevalece siempre sobre la primera.
