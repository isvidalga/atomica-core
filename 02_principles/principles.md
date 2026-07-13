# Principios de ATÓMICA

**Versión:** 1.0  
**Estado:** Normativo  
**Última actualización:** 2026-07-13

---

# Propósito

Este documento establece los principios metodológicos que gobiernan el desarrollo de ATÓMICA.

Su finalidad es garantizar la coherencia del modelo organizacional independientemente de la evolución del software, del cuestionario, de las capacidades, de las fragilidades o de cualquier otra implementación futura.

Todos los documentos metodológicos del repositorio deberán ser compatibles con los principios definidos en este documento.

En caso de conflicto, este documento prevalece.

---

# Naturaleza de los principios

Los principios representan restricciones metodológicas.

No describen cómo funciona actualmente el sistema.

Definen cómo puede evolucionar.

Cualquier modificación metodológica deberá respetarlos o modificarlos explícitamente mediante una nueva versión de este documento.

---

# I. Principios epistemológicos

## P1. El conocimiento es siempre incompleto.

ATÓMICA asume que ninguna organización puede ser conocida completamente.

Todo modelo constituye una representación parcial de una realidad compleja.

La metodología debe minimizar la incertidumbre, nunca eliminarla.

---

## P2. Las organizaciones son sistemas complejos.

Una organización no puede comprenderse mediante relaciones lineales de causa y efecto.

Las propiedades relevantes emergen de la interacción entre personas, procesos, recursos, incentivos, estructuras y contexto.

Por tanto, el análisis debe centrarse en relaciones, dependencias y configuraciones, no únicamente en atributos individuales.

---

## P3. Las declaraciones no constituyen hechos.

El diagnóstico recopila declaraciones realizadas por la organización.

Estas declaraciones representan observaciones reportadas.

No constituyen evidencia objetiva.

Toda inferencia posterior deberá considerar esta limitación.

---

## P4. Toda conclusión es una hipótesis.

ATÓMICA no emite afirmaciones categóricas sobre una organización.

El modelo organizacional está compuesto por hipótesis cuya plausibilidad depende de la información disponible.

---

## P5. La incertidumbre forma parte del modelo.

La incertidumbre no representa un error.

Representa una propiedad explícita del conocimiento disponible.

La metodología deberá conservar dicha incertidumbre siempre que no existan elementos suficientes para reducirla.

---

# II. Principios de modelado

## P6. El modelo precede a la implementación.

El software implementa la metodología.

La metodología nunca debe adaptarse a limitaciones tecnológicas temporales.

---

## P7. Existe una única fuente de verdad metodológica.

Cada concepto del dominio deberá poseer una única definición oficial.

No podrán existir definiciones alternativas en diferentes documentos.

---

## P8. Separación de responsabilidades.

Cada componente metodológico deberá poseer una única responsabilidad claramente definida.

Ningún documento deberá incorporar conceptos cuya definición corresponda a otro nivel del modelo.

---

## P9. La ontología gobierna el dominio.

Toda entidad utilizada por ATÓMICA deberá estar definida dentro de la ontología oficial.

No podrán introducirse nuevos conceptos sin ampliar previamente la ontología.

---

## P10. La complejidad requiere justificación.

Todo incremento de complejidad metodológica deberá aportar una mejora observable en la capacidad explicativa del modelo.

La complejidad nunca constituye un objetivo.

---

# III. Principios de inferencia

## P11. Toda inferencia debe ser trazable.

Cada conclusión generada por el sistema deberá poder reconstruirse a partir de las observaciones que la originaron.

No se admitirán inferencias opacas.

---

## P12. La ausencia de evidencia no constituye evidencia de ausencia.

La falta de evidencia únicamente limita el nivel de confianza.

No autoriza concluir que una condición no existe.

---

## P13. Las evidencias modifican la confianza, no la realidad.

Las evidencias no alteran directamente el modelo organizacional.

Incrementan o reducen la confianza asociada a determinadas hipótesis.

---

## P14. El grado de confianza debe permanecer explícito.

Toda hipótesis deberá poder distinguirse de su nivel de confianza.

Dos hipótesis idénticas pueden poseer distintos niveles de confianza según las evidencias disponibles.

---

## P15. El modelo debe ser falsable.

Toda hipótesis deberá poder ser revisada o descartada cuando aparezca nueva información.

La metodología prohíbe conclusiones irreversibles.

---

# IV. Principios de evolución metodológica

## P16. La metodología precede al conocimiento acumulado.

Los casos particulares nunca redefinen los principios generales.

La experiencia puede motivar cambios metodológicos, pero no sustituirlos.

---

## P17. Toda decisión relevante debe poder versionarse.

Las modificaciones metodológicas deberán registrarse de forma explícita.

La evolución del conocimiento constituye parte del propio sistema.

---

## P18. La coherencia prevalece sobre la innovación.

Una mejora aislada no deberá incorporarse si compromete la consistencia global del modelo.

---

## P19. La metodología debe permanecer independiente de marcos externos.

ATÓMICA podrá incorporar conocimiento procedente de estándares, normas o investigaciones externas.

Sin embargo, ningún marco externo definirá directamente la estructura metodológica del sistema.

Toda incorporación deberá reinterpretarse conforme a los principios establecidos en este documento.

---

## P20. El objetivo es reducir fragilidad.

ATÓMICA no optimiza indicadores.

No certifica organizaciones.

No clasifica empresas.

Su finalidad consiste en identificar hipótesis de fragilidad organizacional cuya reducción aumente la capacidad adaptativa del sistema analizado.

---

# Cláusula de prevalencia

Este documento constituye la referencia normativa del repositorio metodológico de ATÓMICA.

Toda contradicción detectada entre este documento y cualquier otro documento metodológico deberá resolverse modificando el documento de menor jerarquía o, cuando resulte necesario, mediante una nueva versión de estos principios acompañada de la correspondiente decisión metodológica versionada.
