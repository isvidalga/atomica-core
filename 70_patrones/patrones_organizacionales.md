# Patrones Organizacionales

**Versión:** 1.0  
**Estado:** Canónico

---

# Breadcrumb

ATÓMICA

→ Dominio

→ Patrones Organizacionales

---

# Propósito

Este módulo define el catálogo oficial de patrones organizacionales de ATÓMICA.

Un patrón representa una configuración recurrente del comportamiento de una organización.

No describe un evento aislado.

No describe una incidencia.

No describe una opinión.

Describe una estructura que se manifiesta repetidamente a través del tiempo.

---

# Qué es un patrón

Un patrón organizacional es una relación estable entre múltiples observaciones que permite formular una hipótesis sobre el funcionamiento estructural de una organización.

Un patrón no constituye una verdad.

Constituye una hipótesis explicativa respaldada por evidencias.

Su función consiste en ayudar al sistema a comprender aquello que resulta difícil de observar mediante eventos individuales.

---

# Qué no es un patrón

Un patrón no es:

- un indicador;
- una métrica;
- una capacidad;
- una fragilidad;
- una evidencia;
- una intervención;
- un diagnóstico.

Cada uno de esos conceptos pertenece a una capa distinta del modelo organizacional.

---

# Papel dentro del modelo

Los patrones pertenecen al nivel interpretativo del sistema.

Relacionan información procedente de:

- observaciones;
- señales;
- capacidades;
- fragilidades;
- hipótesis;
- evidencias.

Su aparición modifica el conocimiento disponible sobre la organización.

No modifica directamente el estado organizacional.

---

# Ciclo de vida

Todo patrón atraviesa un ciclo de vida común.

```
Observaciones

↓

Señales

↓

Hipótesis

↓

Patrón detectado

↓

Confirmación mediante evidencias

↓

Incremento del nivel de confianza

↓

Patrón consolidado

↓

Revisión continua
```

Un patrón nunca debe considerarse definitivo.

Puede fortalecerse.

Puede debilitarse.

Puede desaparecer.

---

# Relación con el resto del dominio

Un patrón puede:

- utilizar múltiples observaciones;
- apoyar una o varias hipótesis;
- relacionarse con múltiples capacidades;
- contribuir a múltiples fragilidades;
- generar recomendaciones de intervención.

Sin embargo:

Un patrón nunca sustituye a ninguno de esos conceptos.

---

# Catálogo

El catálogo oficial se encuentra en:

```
70_patrones/catalog/
```

Cada patrón posee un identificador único.

La numeración únicamente identifica el documento.

No representa prioridad.

No representa gravedad.

No representa importancia.

---

# Estructura obligatoria

Todos los patrones deberán seguir exactamente la misma estructura documental.

La plantilla oficial se define en:

```
09_patterns/00_especificacion_patron.md
```

No podrán añadirse apartados específicos a un único patrón.

Toda modificación estructural deberá realizarse sobre la plantilla común.

---

# Detectores

La lógica utilizada para detectar patrones pertenece al módulo:

```
09_patterns/detectors/
```

Los detectores implementan reglas.

No definen el significado del patrón.

---

# Índices

Las estructuras auxiliares de búsqueda, clasificación o agrupación pertenecen al módulo:

```
09_patterns/indexes/
```

Los índices no forman parte del conocimiento metodológico.

Únicamente facilitan su utilización.

---

# Evolución

El catálogo de patrones constituye un activo vivo.

Podrán añadirse nuevos patrones cuando existan fundamentos metodológicos suficientes.

Ningún patrón podrá eliminarse sin dejar constancia de su deprecación o sustitución.

---

# Principios

Todo patrón deberá cumplir las siguientes restricciones:

- representar una estructura y no un evento;
- ser falsable;
- ser trazable;
- apoyarse en observaciones identificables;
- admitir distintos niveles de confianza;
- poder revisarse con nueva evidencia;
- mantener independencia respecto a cualquier implementación tecnológica.

---

# Documentos relacionados

- `00_canon/vision.md`
- `00_canon/principios.md`
- `01_methodology/methodology.md`
- `02_ontology/patron.md`
- `03_epistemology/pattern-engine.md`
- `09_patterns/00_especificacion_patron.md`
