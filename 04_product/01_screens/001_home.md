# 001_home.md

# HOME · Especificación congelada

## Estado

Congelado

Versión: 1.0

---

# Objetivo

La Home responde exclusivamente a la siguiente pregunta:

> **¿Cómo está mi organización ahora mismo?**

No proporciona explicación, análisis, recomendaciones, evidencias ni contexto histórico.

Su función termina cuando el CEO obtiene una percepción inmediata del estado actual.

Tiempo máximo de comprensión:

**8 segundos.**

---

# Estructura

La pantalla contiene exactamente cinco bloques funcionales.

No existen componentes adicionales.

Orden obligatorio:

1. Estado Global
2. Punto de Atención
3. Cambio Principal
4. Sistemas
5. Acceso al Modelo Vivo

---

# Layout

## Contenedor

Una única columna.

Todo el contenido se encuentra centrado dentro de un único contenedor vertical.

Sin paneles laterales.

Sin columnas.

Sin dashboard.

---

## Anchura

Anchura máxima del contenido:

960 px

Contenido alineado al centro.

---

## Espaciado

Margen superior:

64 px

Separación entre bloques:

48 px

Separación entre título y contenido de cada bloque:

16 px

Separación interna mínima:

24 px

Mucho espacio en blanco.

Nunca existen bloques visualmente pegados.

---

# Jerarquía visual

Orden de atención obligatorio.

1. Estado Global
2. Punto de Atención
3. Cambio Principal
4. Sistemas
5. Acceso al Modelo Vivo

Ningún elemento puede competir visualmente con el Estado Global.

---

# Bloque 1 · Estado Global

## Función

Representar el estado actual de la organización como un único objeto visual.

Nunca se divide en tarjetas.

Nunca aparecen KPIs independientes.

---

## Contenido

Incluye únicamente:

* IFO
* Nivel
* Tendencia
* Confianza

No admite ningún dato adicional.

---

## Organización interna

### IFO

Elemento dominante.

Es el primer elemento que percibe el usuario.

---

### Nivel

Situado inmediatamente debajo del IFO.

Describe el estado cualitativo.

---

### Tendencia

Indicador compacto.

No ocupa entidad visual propia.

---

### Confianza

Indicador compacto.

Siempre visible.

Nunca oculto.

---

## Comportamiento

No es interactivo.

No abre ninguna pantalla.

---

# Bloque 2 · Punto de Atención

## Función

Responder exclusivamente:

> ¿Dónde debo mirar?

---

## Contenido

Una única frase.

Una sola línea cuando sea posible.

Nunca más de dos líneas.

---

## Interacción

Toda el área es pulsable.

Destino:

DONELLA

---

## Estados

Normal

Hover

Activo

No existen estados adicionales.

---

# Bloque 3 · Cambio Principal

## Función

Responder exclusivamente:

> ¿Qué cambió?

---

## Contenido

Una única frase.

No explica causas.

No explica consecuencias.

---

## Interacción

Toda el área es pulsable.

Destino:

CRÓNICA

---

## Estados

Normal

Hover

Activo

---

# Bloque 4 · Sistemas

## Función

Mostrar el estado relativo de las seis dimensiones.

No interpreta.

No compara.

No recomienda.

---

## Orden

Siempre ordenados desde el peor valor hasta el mejor valor.

Nunca mantienen un orden fijo.

---

## Componentes

Cada dimensión contiene únicamente:

Nombre

Barra horizontal

Valor

Nada más.

---

## Barras

Horizontales.

Anchura uniforme.

Altura uniforme.

Sin animaciones permanentes.

Sin efectos tridimensionales.

Sin gradientes informativos.

---

## Información mostrada

Nombre de la dimensión.

Valor asociado.

Representación mediante barra.

No se muestran tendencias.

No se muestran cambios.

No se muestran comparativas.

No se muestran etiquetas adicionales.

---

## Número de elementos

Exactamente seis.

Nunca menos.

Nunca más.

---

# Bloque 5 · Acceso al Modelo Vivo

## Función

Servir únicamente como puerta de acceso.

Nunca representa el Modelo Vivo.

---

## Contenido

Una única acción.

Ejemplo conceptual:

Ver relaciones sistémicas →

---

## Interacción

Toda el área es pulsable.

Destino:

Modelo Vivo

---

# Navegación

Desde Home únicamente existen tres destinos.

Punto de Atención

→ DONELLA

Cambio Principal

→ CRÓNICA

Acceso al Modelo Vivo

→ Modelo Vivo

No existen accesos adicionales.

---

# Estados de la pantalla

## Cargando

Estado Global

Placeholder único.

Punto de Atención

Placeholder.

Cambio Principal

Placeholder.

Sistemas

Seis placeholders.

Acceso Modelo Vivo

Placeholder.

No aparecen indicadores parciales.

---

## Sin datos

Se muestra únicamente un mensaje de estado.

No aparecen valores vacíos.

No aparecen barras.

No aparecen ceros simulados.

---

## Datos disponibles

Se muestran los cinco bloques completos.

---

# Color

Existe un único color de atención.

Su utilización queda restringida a:

IFO

Tendencia

Punto de Atención

Cambio Principal

El resto de elementos utilizan colores neutros.

---

# Tipografía

Tres niveles únicamente.

Nivel 1

IFO

Nivel 2

Títulos de bloque

Nivel 3

Contenido

No existen niveles tipográficos adicionales.

---

# Iconografía

Uso mínimo.

Solo cuando aporte significado inmediato.

Nunca decorativa.

---

# Animaciones

Permitidas únicamente para:

Cambio de estado.

Carga.

Hover.

No existen animaciones continuas.

No existen elementos en movimiento permanente.

---

# Elementos eliminados

No forman parte de la Home.

Alertas.

Actividad reciente.

Intervenciones.

Avatar.

Chat completo.

DONELLA integrada.

Modelo Vivo embebido.

Noticias.

Widgets.

KPIs independientes.

Tarjetas métricas.

Radar.

Donuts.

Gráficos circulares.

Heatmaps.

Tablas.

Paneles laterales.

Carruseles.

Bloques promocionales.

Explicaciones metodológicas.

Recomendaciones.

Evidencias.

Cronología.

Filtros.

Buscador.

Configuraciones.

---

# Criterios de aceptación

La implementación se considera correcta únicamente si cumple todas las condiciones siguientes:

* Existe una única columna de contenido.
* El Estado Global se presenta como un único objeto visual.
* Solo existen cinco bloques funcionales.
* La jerarquía visual coincide exactamente con el orden especificado.
* Los Sistemas muestran exactamente seis barras horizontales ordenadas de peor a mejor.
* Punto de Atención abre DONELLA.
* Cambio Principal abre CRÓNICA.
* Acceso al Modelo Vivo abre el Modelo Vivo.
* No existen componentes distintos de los especificados.
* La pantalla puede comprenderse en menos de ocho segundos.
