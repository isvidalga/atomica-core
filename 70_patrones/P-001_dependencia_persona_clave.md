# P-001 · Dependencia de Persona Clave

**ID:** P-001  
**Versión:** 1.0  
**Estado:** Canónico  
**Ubicación:** `70_patrones/P-001_dependencia_persona_clave.md`

---

# Breadcrumb

```
ATÓMICA
└── 70 · Patrones
    └── P-001 · Dependencia de Persona Clave
```

---

# Propósito

Este documento define el patrón organizacional **Dependencia de Persona Clave**.

Describe las condiciones bajo las cuales ATÓMICA puede plantear la hipótesis de que una organización concentra conocimiento, decisiones o capacidad operativa en un número reducido de personas.

---

# Definición

Existe dependencia de persona clave cuando el funcionamiento normal de la organización depende de forma desproporcionada de una persona concreta.

La organización pierde capacidad de funcionamiento si dicha persona deja de estar disponible.

La dependencia puede afectar al conocimiento, la coordinación, la decisión o la operación.

---

# Naturaleza

Este patrón representa una vulnerabilidad estructural.

No implica necesariamente un problema actual.

Describe un incremento de exposición frente a futuras perturbaciones.

---

# Objetivo metodológico

Identificar concentraciones excesivas de capacidad organizacional cuya pérdida pueda comprometer el funcionamiento del sistema.

---

# Manifestaciones habituales

El patrón puede manifestarse mediante situaciones como:

- conocimiento crítico no compartido;
- decisiones concentradas;
- clientes gestionados por una única persona;
- procesos conocidos únicamente por un responsable;
- ausencia de sustitución efectiva;
- delegación insuficiente.

Estas manifestaciones no constituyen por sí mismas evidencia suficiente.

---

# Observaciones relacionadas

El patrón puede apoyarse, entre otras, en observaciones relacionadas con:

- distribución del conocimiento;
- distribución de responsabilidades;
- documentación existente;
- mecanismos de sustitución;
- autonomía de los equipos;
- continuidad operativa.

---

# Hipótesis relacionadas

Este patrón puede reforzar hipótesis como:

- concentración excesiva del conocimiento;
- dependencia operativa;
- baja resiliencia organizacional;
- riesgo elevado de continuidad.

La relación exacta dependerá del modelo organizacional.

---

# Capacidades relacionadas

Este patrón suele asociarse con capacidades vinculadas a:

- transferencia de conocimiento;
- documentación organizacional;
- continuidad operativa;
- desarrollo de personas;
- gobernanza.

La relación concreta se define en el modelo organizacional.

---

# Fragilidades relacionadas

La aparición del patrón puede contribuir al fortalecimiento de diversas fragilidades organizacionales.

No existe una correspondencia uno a uno.

---

# Evidencias que incrementan la confianza

Ejemplos:

- documentación insuficiente;
- ausencia de procedimientos;
- inexistencia de sustitutos funcionales;
- concentración de autorizaciones;
- concentración de decisiones;
- concentración de relaciones críticas.

Las evidencias modifican únicamente el nivel de confianza del patrón.

---

# Evidencias que reducen la confianza

Ejemplos:

- documentación completa;
- responsabilidades compartidas;
- sustituciones verificadas;
- procedimientos utilizados regularmente;
- rotación controlada de funciones.

---

# Nivel de confianza

El patrón deberá incorporar un nivel explícito de confianza conforme al modelo metodológico de ATÓMICA.

---

# Estado

Su evolución se rige por:

- `ciclo_de_vida_patron.md`

---

# Detección

La detección se realiza conforme a:

- `motor_patrones.md`
- `deteccion_patrones.md`

No define reglas de implementación específicas.

---

# Posibles intervenciones

Este documento no prescribe acciones concretas.

Las intervenciones se obtienen mediante el modelo organizacional y el catálogo de intervenciones correspondiente.

---

# Restricciones

Este patrón nunca permite afirmar que una organización vaya a sufrir una interrupción.

Únicamente indica que existe una configuración organizacional compatible con una dependencia elevada respecto a una o varias personas.

---

# Relación con otros documentos

- `naturaleza_patrones.md`
- `catalogo_patrones_organizacionales.md`
- `especificacion_patron.md`
- `motor_patrones.md`
- `deteccion_patrones.md`
- `ciclo_de_vida_patron.md`

---

# Conclusión

La dependencia de persona clave constituye uno de los patrones estructurales más relevantes para evaluar la resiliencia organizacional.

Su detección permite formular hipótesis sobre la capacidad de una organización para mantener su funcionamiento ante la pérdida temporal o permanente de recursos humanos críticos.
