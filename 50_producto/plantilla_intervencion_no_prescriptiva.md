# Plantilla de Intervención No Prescriptiva

Estado: validada y aplicada por primera vez la noche del 16-17 de
septiembre de 2026, contra 14 constructos de `CORE_INTERACTIONS`
(`atomica-v2-engine/src/core.js`) que hoy no tenían ningún texto de
orientación. Registrada aquí para que ninguna sesión futura tenga que
reconstruirla desde cero ni pedírsela de nuevo a quien la redactó.

---

## La plantilla

```
[Frase de apertura variando entre constructos, anclada al valor
concreto que indica fragilidad — nunca genérica, nunca la misma
fórmula repetida]. [Puede explorarse / suele explorarse / entre
las vías habituales:] [una o dos acciones concretas en forma NO
prescriptiva].

[Disclaimer fijo, IDÉNTICO en todas las aplicaciones, sin variación]:
"Esto no es una recomendación personalizada para tu organización —
es una pauta general observada en organizaciones con este patrón.
La decisión y su idoneidad para tu situación son tuyas."
```

## Reglas de uso

1. **La frase de apertura ancla siempre a un valor concreto**, no a una
   categoría abstracta — "cuando el margen de operación sin ingresos
   se reduce a pocos meses", no "cuando la holgura financiera es baja".
2. **La vía de exploración nunca prescribe una acción cerrada.** Usa
   siempre formas como "puede explorarse", "suele explorarse", "entre
   las vías habituales" — nunca un imperativo ("haz X", "implementa Y").
   Esto es consistente con `50_producto/intervencion.md`: ATÓMICA no
   prescribe acciones.
3. **El disclaimer es literal e idéntico en cada aplicación.** No se
   parafrasea, no se acorta, no se adapta al tono del constructo.
4. Esta plantilla es para **constructos que ya existen** en
   `CORE_INTERACTIONS`. No se usa para redactar preguntas nuevas — eso
   sigue el estilo de `src/prompts.js`, no esta plantilla.

## Origen

Aplicada por primera vez a los 14 constructos que quedaron identificados
sin cobertura tras cruzar los 52 patrones de `70_patrones/` contra los
19 constructos de `CORE_INTERACTIONS` tramados esa misma noche. La
lista de los 14 y el texto resultante para cada uno viven en el
historial de esa sesión, no en este documento — este archivo guarda
solo la plantilla y sus reglas de uso, para que sea reutilizable sin
depender de esa conversación concreta.
