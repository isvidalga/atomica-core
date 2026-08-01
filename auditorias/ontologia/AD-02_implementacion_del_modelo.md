# AD-02 · Implementación del Modelo

Estado: CERRADA

Repositorio: atomica-core

Ámbito: Arquitectura documental

Referencia auditada:
tag v1.0 (`fe6dc5c`)

Ubicación:

90_auditorias/ontologia/AD-02_implementacion_del_modelo.md

---

> Esta decisión arquitectónica implementa AD-01.
>
> No modifica la metodología.
>
> No redefine conceptos.
>
> No sustituye documentos canónicos.
>
> Únicamente determina la ubicación documental del concepto `Modelo`.

---

# Antecedentes

AD-01 determina:

> `Modelo` es un metaobjeto raíz.

Y descarta explícitamente:

> `Modelo` como entidad de `30_ontologia`.

Sin embargo AD-01 deja abiertas dos variantes de implementación:

C.i

Incorporar `Modelo` dentro de `10_nucleo/axiomas.md`.

C.ii

Crear un documento propio en `10_nucleo`.

La elección quedó diferida para la ejecución de G-1.

---

# Alternativas

## A · Integrar Modelo en `10_nucleo/axiomas.md`

Ventajas

- ningún documento adicional;
- mantiene todo el fundamento en un único fichero.

Inconvenientes

- mezcla axiomas y conceptos primitivos;
- aumenta la responsabilidad de un documento ya utilizado por toda la Ontología;
- dificulta futuras ampliaciones del vocabulario primitivo.

---

## B · Crear `10_nucleo/modelo.md`

Ventajas

- mantiene separados axiomas y conceptos primitivos;
- preserva la responsabilidad única de `axiomas.md`;
- permite que `Modelo` tenga estructura documental completa;
- permite ampliar el vocabulario primitivo sin aumentar la complejidad de `axiomas.md`;
- mantiene la decisión C de AD-01.

Inconvenientes

- incorpora un documento adicional en `10_nucleo`.

---

# Evidencia

R-10 verifica que:

- `Modelo` constituye la principal causa de falta de cierre semántico;
- `Modelo` no aparece como concepto derivado de los axiomas;
- los diez documentos dependen de `10_nucleo`.

RA-01 agrupa `Modelo` dentro de G-1 como vocabulario primitivo.

AD-01 determina que `Modelo` no pertenece a `30_ontologia`.

Ninguna auditoría exige que un concepto primitivo deba residir obligatoriamente dentro de `axiomas.md`.

---

# Decisión

## B · Crear un documento propio

Se adopta la variante C.ii de AD-01.

`Modelo` se implementará mediante:

10_nucleo/modelo.md

No se incorpora a `30_ontologia`.

No se integra dentro de `axiomas.md`.

`axiomas.md` continuará siendo el documento fundacional.

`modelo.md` será un concepto primitivo sustentado por dicho fundamento.

---

# Consecuencias

1.

La decisión de AD-01 queda completamente implementada.

2.

G-1 puede ejecutarse sin modificar RA-01.

3.

No es necesario recalcular el plan de remediación.

4.

La Ontología continúa comenzando en `30_ontologia`.

El fundamento permanece en `10_nucleo`.

5.

Las futuras incorporaciones al vocabulario primitivo seguirán el mismo patrón documental.

---

# Declaración

Queda congelado que el concepto `Modelo` se implementará mediante un documento propio dentro de `10_nucleo`.

La presente decisión cierra definitivamente la ambigüedad entre las variantes C.i y C.ii de AD-01.

A partir de esta decisión, toda remediación correspondiente al grupo G-1 deberá utilizar exclusivamente esta implementación.
