# 008_acabado_premium.md

# HOME · Acabado Premium

## Estado

Congelado

Versión: 1.0

Deriva de:

- 001_home.md
- 002_layout.md
- 003_espaciado.md
- 004_tipografía.md
- 005_interacciones.md
- 006_lenguaje_visual.md
- 007_microdetalles.md

No modifica arquitectura.

No modifica navegación.

No modifica componentes.

Únicamente especifica el nivel de acabado visual y técnico exigido para la implementación definitiva.

---

# Propósito

El acabado premium no consiste en añadir elementos.

Consiste en eliminar fricción.

Cada detalle debe transmitir precisión.

Nada debe parecer improvisado.

Nada debe parecer genérico.

La percepción final debe corresponder a un instrumento profesional, no a una aplicación convencional.

---

# Principio rector

La diferencia entre un producto de bajo coste y un instrumento de alta gama no reside en la cantidad de elementos visibles.

Reside en:

- la precisión;
- la consistencia;
- la estabilidad;
- la ausencia de ruido.

Cada decisión visual debe aumentar la sensación de confianza.

Nunca la espectacularidad.

---

# Suavizado tipográfico

Toda la tipografía debe renderizarse utilizando suavizado optimizado para pantallas oscuras.

El texto debe percibirse como parte de la superficie.

Nunca como un elemento superpuesto.

---

# Alineación óptica

Las alineaciones geométricas no siempre coinciden con las alineaciones percibidas.

La implementación debe corregir ópticamente:

- números de gran tamaño;
- iconografía;
- flechas;
- elementos alineados junto a texto.

El objetivo es que el conjunto resulte equilibrado para el ojo humano.

No únicamente para la retícula.

---

# Kerning

La tipografía debe respetar el kerning contextual de la fuente.

Cuando determinados pares de caracteres generen desequilibrios visuales podrán realizarse pequeños ajustes ópticos.

Nunca deberán apreciarse manualmente.

---

# Fondo

El fondo constituye una superficie continua.

Nunca aparecen:

- cambios de tono;
- cortes;
- bandas;
- discontinuidades.

Debe ocupar completamente el viewport.

También durante el overscroll.

---

# Transiciones numéricas

Los cambios de valores nunca producen saltos bruscos.

Cuando un valor cambia:

- el valor anterior desaparece progresivamente;
- el nuevo aparece de forma continua.

La transición debe preservar la legibilidad.

Nunca debe parecer una animación.

---

# Respuesta táctil

Toda interacción debe percibirse como inmediata.

El usuario debe recibir confirmación visual antes de retirar el dedo de la pantalla.

Las áreas activas deben disponer de una superficie cómoda independientemente del tamaño visual del contenido.

---

# Cursores

El cursor constituye un elemento de comunicación.

Únicamente existen dos estados.

## Elementos interactivos

Cursor de interacción.

---

## Elementos no interactivos

Cursor estándar.

---

Nunca se utilizarán cursores que sugieran estados inexistentes.

---

# Bordes

Los bordes únicamente aparecen cuando aportan información.

Siempre que sea posible la separación entre elementos se resolverá mediante espacio.

Nunca mediante líneas.

Cuando resulte imprescindible utilizar un borde:

- tendrá un grosor uniforme;
- mantendrá continuidad visual en cualquier densidad de pantalla.

---

# Consistencia entre dispositivos

Todos los tamaños definidos por la especificación deben renderizarse sin producir artefactos.

La interfaz debe mantener exactamente la misma percepción en:

- pantallas estándar;
- pantallas Retina;
- pantallas OLED;
- pantallas de alta densidad.

---

# Ruido visual

La interfaz debe permanecer completamente silenciosa.

Nunca aparecen:

- texturas decorativas;
- efectos tridimensionales;
- brillos;
- reflejos;
- animaciones ambientales.

Si alguna superficie presenta artefactos de renderizado deberán corregirse mediante soluciones técnicas invisibles para el usuario.

---

# Silencio de interacción

La Home nunca produce:

- sonidos;
- vibración;
- notificaciones;
- banners;
- mensajes emergentes.

Toda comunicación comienza únicamente cuando el usuario interactúa.

Nunca antes.

---

# Persistencia visual

La actualización de datos nunca provoca que la pantalla parezca reconstruirse.

Los elementos que no cambian permanecen inmóviles.

Únicamente se actualiza aquello que realmente ha cambiado.

La estabilidad transmite confianza.

---

# Carga tipográfica

La carga de la tipografía nunca debe producir:

- texto invisible;
- saltos de composición;
- cambios bruscos de tamaño.

Si la fuente principal aún no está disponible deberá utilizarse automáticamente la fuente de respaldo manteniendo la estabilidad del diseño.

---

# Integración con el sistema

La aplicación debe integrarse visualmente con el sistema operativo.

Incluye:

- color del navegador;
- favicon;
- manifest;
- modo standalone cuando corresponda.

La interfaz debe percibirse como una aplicación nativa.

Nunca como una página web.

---

# Ausencia como lujo

No existen opciones de personalización visual.

No existen temas.

No existen modos claro u oscuro.

No existe una pantalla inicial de bienvenida.

No existe ayuda permanente.

La interfaz se explica mediante su propia organización.

---

# Calidad percibida

El usuario nunca debe tener la sensación de que la pantalla continúa en desarrollo.

La implementación debe transmitir:

- precisión;
- estabilidad;
- permanencia;
- control.

---

# Restricciones

## R-001

Nunca introducir elementos decorativos.

---

## R-002

Nunca utilizar animaciones cuyo único propósito sea llamar la atención.

---

## R-003

Nunca sacrificar legibilidad por espectacularidad.

---

## R-004

Nunca modificar la composición durante una actualización de datos salvo donde realmente cambie la información.

---

## R-005

Toda decisión visual debe reforzar la percepción de instrumento profesional.

---

# Criterios de aceptación

La implementación se considera correcta únicamente si:

- El texto mantiene máxima nitidez en cualquier densidad de pantalla.
- El fondo permanece completamente continuo en cualquier viewport.
- Las transiciones numéricas resultan naturales y nunca producen saltos bruscos.
- La respuesta táctil se percibe inmediata.
- Los elementos estáticos nunca parpadean durante una actualización.
- No existen efectos decorativos.
- La interfaz mantiene el mismo nivel de calidad en escritorio y dispositivos móviles.
- La Home transmite la sensación de producto terminado desde el primer segundo.
- Ningún detalle visual contradice las especificaciones anteriores.
- La percepción global corresponde a un instrumento de inteligencia organizacional de alta gama.
