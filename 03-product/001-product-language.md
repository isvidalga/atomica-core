# ATÓMICA Product Language

Estado: Draft

Versión: 1.0

---

# Propósito

El Product Language define las reglas mediante las cuales los objetos del modelo se representan, se relacionan y construyen significado dentro del producto.

No define diseño.

No define componentes.

Define el lenguaje del instrumento.

Toda pantalla deberá expresarse utilizando exclusivamente este lenguaje.

---

# Principio Fundamental

ATÓMICA no muestra pantallas.

ATÓMICA representa conocimiento.

Toda representación deberá conservar el significado del objeto representado.

La representación nunca modificará el significado.

---

# Regla 1 · Todo representa algo

Todo elemento visible representa un objeto del dominio.

Si un elemento no representa ningún objeto, no pertenece al producto.

---

# Regla 2 · Una representación, un significado

Un mismo objeto siempre posee el mismo significado.

Nunca cambiará dependiendo de la pantalla.

Cambiará únicamente su nivel de detalle.

---

# Regla 3 · Progresión

Todo objeto dispone de tres niveles de representación.

## Compacto

Permite reconocimiento inmediato.

No requiere interacción.

---

## Expandido

Añade contexto.

Explica relaciones.

Permite comprender.

---

## Profundo

Expone toda la información disponible.

Permite investigar.

Nunca aparece por defecto.

---

# Regla 4 · La profundidad nunca sustituye a la claridad

Toda pantalla deberá responder primero a la pregunta principal.

Los detalles únicamente aparecerán cuando el usuario decida profundizar.

---

# Regla 5 · Las relaciones son conocimiento

Los objetos nunca aparecen aislados.

Siempre aparecen relacionados.

Ejemplos:

Hipótesis

↓

Evidencias

↓

Observaciones

↓

Organización

---

Intervención

↓

Fragilidad

↓

Capacidad

↓

Estado

---

La relación forma parte del conocimiento.

No constituye un enlace de navegación.

---

# Regla 6 · El contexto siempre precede al detalle

Nunca se mostrará una cifra sin contexto.

Nunca se mostrará un estado sin evolución.

Nunca se mostrará una hipótesis sin confianza.

Nunca se mostrará una intervención sin impacto esperado.

---

# Regla 7 · Toda incertidumbre es visible

ATÓMICA nunca oculta la incertidumbre.

Todo objeto cuya interpretación dependa de evidencia deberá indicar explícitamente:

- confianza
- calidad de la evidencia
- fecha de actualización

---

# Regla 8 · Toda representación conserva memoria

El producto nunca muestra únicamente el presente.

Siempre permite comprender:

- de dónde viene
- cómo ha evolucionado
- qué ha cambiado

---

# Regla 9 · El movimiento explica

Las transiciones únicamente existen cuando ayudan a comprender.

Nunca decoran.

Siempre comunican.

Ejemplos:

Expandir.

Colapsar.

Evolucionar.

Actualizar.

Relacionar.

---

# Regla 10 · El color comunica estado

El color nunca comunica decoración.

Nunca comunica jerarquía.

Nunca comunica marca.

Comunica exclusivamente significado.

Ejemplos:

Estado.

Confianza.

Riesgo.

Evolución.

---

# Regla 11 · La tipografía comunica importancia

El tamaño tipográfico nunca responde a criterios estéticos.

Representa únicamente:

- prioridad
- jerarquía
- relación

---

# Regla 12 · El espacio comunica estructura

El espacio constituye información.

La proximidad implica relación.

La separación implica independencia.

Nunca se utilizará espacio únicamente como decoración.

---

# Regla 13 · La interfaz desaparece

Cuando el usuario comprende el sistema observado, la interfaz deja de ser protagonista.

Toda decisión visual deberá perseguir este objetivo.

---

# Reglas de composición

Toda pantalla deberá poder describirse mediante la siguiente estructura.

Pregunta

↓

Estado

↓

Relaciones

↓

Explicación

↓

Acción

Nunca en otro orden.

---

# Reglas de navegación

La navegación nunca constituye el objetivo.

Únicamente permite profundizar.

Toda pantalla deberá ser útil incluso si el usuario no navega.

---

# Reglas de aprendizaje

El usuario aprende una única vez.

Después reconoce:

- Estados
- Hipótesis
- Evidencias
- Fragilidades
- Capacidades
- Intervenciones

En cualquier parte del producto.

---

# Consecuencia

El producto deja de sentirse como una colección de pantallas.

Empieza a sentirse como un único instrumento de observación.
