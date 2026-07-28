# ORG-IDENTITY · Identidad Organizacional

| Campo | Valor |
|--------|-------|
| Identificador | ORG-IDENTITY |
| Capa | Ontology |
| Estado | RC-1 |
| Versión | 0.1 |

---

# Propósito

La Identidad constituye el referente permanente sobre el que el Modelo construye conocimiento.

Sin Identidad no pueden existir Estados, Trayectorias ni Representaciones.

La Identidad es el punto de continuidad del Modelo.

---

# Definición

Una Identidad Organizacional es la continuidad lógica de un mismo referente organizacional a través del tiempo.

No representa una empresa.

No representa una personalidad jurídica.

No representa un CIF.

Representa aquello que permite afirmar que múltiples Estados pertenecen al mismo referente organizacional.

---

# Naturaleza

La Identidad:

- no es una observación;
- no es una evidencia;
- no es una hipótesis;
- no es una representación;
- no es un Estado;
- no es una Trayectoria;
- no es una empresa.

La Identidad no describe atributos.

La Identidad describe continuidad.

La Identidad pertenece exclusivamente al Modelo.

---

# Propiedades

La Identidad:

- posee un identificador único;
- puede tener múltiples Estados históricos;
- posee exactamente un Estado vigente;
- posee exactamente una Trayectoria activa;
- puede finalizar;
- nunca puede reiniciarse.

---

# Persistencia

La Identidad permanece mientras continúe existiendo el mismo referente organizacional.

La Identidad no cambia por modificaciones en:

- estructura organizativa;
- organigrama;
- dirección;
- accionariado;
- procesos;
- tamaño;
- tecnología;
- estrategia;
- resultados;
- denominación social;
- forma jurídica.

Estos cambios pueden modificar el Estado.

Nunca modifican por sí mismos la Identidad.

---

# Continuidad

La continuidad de una Identidad no constituye una decisión discrecional.

Se determina mediante los criterios de continuidad establecidos por el Canon.

Dichos criterios podrán evolucionar mediante nuevas versiones del Modelo.

Toda decisión de continuidad deberá ser trazable.

Toda decisión de continuidad deberá poder justificarse.

---

# Ruptura

Una Identidad finaliza únicamente cuando deja de cumplirse el criterio canónico de continuidad.

La finalización de una Identidad:

- cierra definitivamente su Trayectoria;
- impide incorporar nuevos Estados;
- obliga a crear una nueva Identidad si continúa existiendo un nuevo referente organizacional.

Una Identidad finalizada nunca puede reactivarse.

---

# Relaciones

Toda Identidad:

- posee exactamente una Trayectoria activa;
- posee exactamente un Estado vigente;
- puede poseer múltiples Estados históricos;
- puede poseer múltiples Representaciones históricas.

Todo Estado pertenece exactamente a una Identidad.

Toda Trayectoria pertenece exactamente a una Identidad.

Toda Representación pertenece exactamente a una Identidad.

---

# Exclusiones

La Identidad nunca contiene:

- indicadores;
- puntuaciones;
- clasificación metodológica;
- confianza;
- incertidumbre;
- hipótesis;
- evidencias;
- recomendaciones;
- decisiones;
- intervenciones.

---

# Invariantes

**I-1** Toda Identidad posee un identificador único.

**I-2** Ningún Estado existe sin Identidad.

**I-3** Toda Trayectoria pertenece exactamente a una Identidad.

**I-4** Ninguna Identidad pertenece a otra.

**I-5** La desaparición de un Estado no implica la desaparición de la Identidad.

**I-6** Toda nueva Identidad inicia una nueva Trayectoria.

**I-7** Ninguna operación puede fusionar dos Identidades previamente distintas.

**I-8** Ninguna Identidad puede dividirse en dos sin finalizar definitivamente la Trayectoria original.

**I-9** Una Identidad finalizada nunca puede reactivarse.

**I-10** Toda decisión de continuidad debe ser trazable.

---

# Dependencias

- core/axiomas.md

---

# Utilizado por

- estado.md
- trayectoria.md
- representacion.md
- memoria.md
- hipotesis.md
- evidencia.md

---

# Consecuencias arquitectónicas

De este documento se derivan las siguientes restricciones:

1. El Estado nunca identifica una organización; identifica la condición de una Identidad.

2. La Trayectoria nunca une empresas; une Estados pertenecientes a una misma Identidad.

3. Toda Representación pertenece a una única Identidad.

4. Ninguna operación del sistema puede modificar retrospectivamente la Identidad de un Estado histórico.

5. La continuidad organizacional constituye una propiedad del Modelo y no una propiedad jurídica de la organización observada.
