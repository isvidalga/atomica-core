# AD-10 · Especificación de la declaración del vocabulario primitivo

Estado: CONGELADO

Versión: 1.0

---

# Antecedentes

AD-01 a AD-09 determinan qué términos requieren declaración y el mecanismo documental para incorporarlos.

Esta auditoría fija exclusivamente el contenido que deberá incorporarse a `10_nucleo/axiomas.md`.

No ejecuta la modificación.

---

# Declaraciones obligatorias

La declaración deberá incluir exactamente los siguientes términos primitivos:

- Modelo
- Organización
- Dominio
- Conocimiento admitido
- Instante lógico

---

# Declaraciones prohibidas

No deberán declararse:

- entidades del dominio
- plausibilidad

Ambos quedaron resueltos como expresiones derivadas.

---

# Restricciones

La implementación deberá cumplir simultáneamente:

1. Un único documento modificado.
2. Ningún axioma alterado.
3. Ninguna numeración modificada.
4. Ningún documento nuevo.
5. Ninguna sección `# Dependencias` modificada.
6. Ningún concepto cambia de capa.
7. Ninguna definición contradice AD-01…AD-09.

---

# Verificación

La implementación será correcta únicamente si:

- desaparece H-01;
- desaparece H-02;
- no aparecen nuevos hallazgos;
- no aumenta el número de ciclos;
- no cambia el camino crítico del plan.

---

# Declaración

Queda congelada la especificación que deberá satisfacer la implementación documental de G-1.
