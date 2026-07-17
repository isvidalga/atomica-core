# Instrumento de Patrones

## Propósito

El Instrumento de Patrones es el núcleo de inteligencia de ATÓMICA.

No representa datos.

No representa indicadores.

No representa eventos.

Representa estructuras organizacionales que permanecen activas a través del tiempo y explican el comportamiento del sistema.

Su objetivo no es responder qué ocurrió.

Su objetivo es responder por qué sigue ocurriendo.

---

# Principios

## Un patrón es una estructura

Un patrón no es un incidente.

No es un síntoma.

No es una métrica.

Es una configuración estable de relaciones que reaparece bajo distintas formas.

Ejemplo:

No detectamos tres bajas de personal.

Detectamos un patrón persistente de fuga de talento.

---

## Los patrones tienen vida

Todo patrón nace.

Crece.

Puede estabilizarse.

Puede desaparecer.

Puede reaparecer.

El tiempo forma parte del patrón.

Nunca existe un patrón estático.

---

## Los patrones tienen masa

Cada patrón ejerce influencia sobre el resto.

La masa depende de:

- severidad
- persistencia
- amplitud
- confianza
- conexiones

La masa determina el peso visual dentro del instrumento.

---

## Los patrones interactúan

Los patrones nunca existen aislados.

Cada patrón puede:

- reforzar
- debilitar
- provocar
- contener
- acelerar
- retrasar

otro patrón.

El instrumento representa esas relaciones.

---

# Modelo

Cada patrón posee una identidad estable.

```yaml
id:
nombre:
dimension:
descripcion:

estado:

masa:

actividad:

confianza:

fecha_deteccion:

ultima_evidencia:

ultima_actualizacion:

conexiones:

evidencias:

hipotesis:

acciones:

riesgos:

metricas:
```

---

# Estados

Todo patrón pertenece siempre a uno de estos estados.

## Emergente

Existe poca evidencia.

Puede desaparecer.

Debe vigilarse.

---

## Creciendo

La evidencia aumenta.

La confianza crece.

Su influencia aumenta.

---

## Persistente

La organización convive con él.

Tiene múltiples ciclos temporales.

Debe considerarse estructural.

---

## Remitiendo

La intensidad disminuye.

Las evidencias dejan de aparecer.

Debe seguir monitorizándose.

---

## Dormido

No genera nueva actividad.

Permanece como memoria.

Puede reactivarse.

---

# Intensidad

La intensidad representa la energía actual del patrón.

No depende únicamente del número de evidencias.

Se calcula mediante:

- frecuencia
- recurrencia
- impacto
- distribución temporal
- conexión con otros patrones

---

# Confianza

La confianza expresa cuánto sabe ATÓMICA que ese patrón existe.

No expresa gravedad.

Expresa certeza.

Escala:

0–100

---

# Edad

Cada patrón mantiene:

fecha de nacimiento

edad

última actividad

duración activa

duración inactiva

---

# Relaciones

Los patrones forman un grafo.

Las relaciones poseen tipo.

Tipos:

- causa
- consecuencia
- correlación
- dependencia
- bloqueo
- amplificación
- mitigación

Las relaciones poseen dirección.

Nunca son únicamente visuales.

---

# Evidencias

Las evidencias no son protagonistas.

Son fundamento.

Un patrón puede existir gracias a decenas de evidencias.

El usuario consulta primero el patrón.

Después consulta por qué ATÓMICA afirma que existe.

Nunca al revés.

---

# Hipótesis

Un patrón puede generar hipótesis.

Las hipótesis pueden convertirse en:

nuevas evidencias

o

ser descartadas.

ATÓMICA conserva ambas.

---

# Acciones

Las acciones modifican patrones.

Nunca modifican evidencias.

Toda acción genera posteriormente observación.

La observación decide si el patrón cambia.

---

# Visualización

La visualización representa un campo dinámico.

No representa listas.

No representa dashboards.

No representa tarjetas.

El usuario observa comportamiento.

No datos.

---

# Campo

Cada patrón ocupa una posición.

La posición nunca es manual.

Surge del equilibrio del sistema.

---

# Masa

Los patrones grandes poseen mayor influencia.

No necesariamente mayor gravedad.

---

# Movimiento

Todo patrón permanece vivo.

Respira.

Oscila.

Se adapta.

Nunca permanece inmóvil.

---

# Atracción

Los patrones relacionados tienden a aproximarse.

---

# Repulsión

Los patrones incompatibles generan distancia.

---

# Clusters

Los patrones forman regiones.

Cada región representa una dinámica organizacional.

No una dimensión.

---

# Tiempo

El tiempo puede recorrerse.

El usuario puede observar:

nacimiento

crecimiento

estabilidad

desaparición

reactivación

---

# HUD

El HUD nunca sustituye el instrumento.

Únicamente resume.

Debe responder:

- patrones activos
- energía del sistema
- cluster dominante
- cambios recientes

---

# Interacción

Hover.

Filtro.

Tiempo.

Nada más.

No existen ventanas modales.

No existen overlays.

La información aparece sin romper el contexto.

---

# Filosofía

El Instrumento de Patrones no pretende explicar la organización.

Pretende hacer visible aquello que la organización no puede ver por sí sola.

ATÓMICA no muestra el pasado.

Hace visible la estructura que produce continuamente ese pasado.
