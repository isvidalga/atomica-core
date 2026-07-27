All sources located. Writing the consolidation document.

Let me verify every citation is literal and every line reference is correct.

`atomica-core/ontology/estado.md` creado y publicado. 42 fragmentos literales de 20 fuentes, agrupados bajo la plantilla canónica de una entidad del dominio (Objetivo · Responsabilidad · Jerarquía · Anatomía · Contenido · Espaciado · Restricciones · Reutilización · Invariantes).

Verifiqué las 35 referencias `archivo:línea` una por una y comprobé que los bloques citados son byte-literales: 0 discrepancias.

## 6 CONFLICTOS conservados

1. **Estado ⇄ Confianza.** D-003 (`decision_log.md:31`) dice *"ejes ortogonales"*; `home-v2/README.md:37` dice *"Confianza fundida al estado"* y `:48` *"acompaña siempre al estado"*.
2. **Jerarquía del Estado.** Es *jerarquía 1, bloque dominante* en la Home (`home.md:171`) y *jerarquía 4, la región de menor extensión, "nunca domina"* en la Crónica (`chronic.md:143`). Ambos son Canon congelado.
3. **Estados de pantalla: tres enumeraciones incompatibles.** 7 en `home.md:183`, 5 en `screen_specification.md:118`, 4 en `design_system.md:264`. Difieren en número, nombres e idioma — y `screen_specification.md:10` exige que toda pantalla siga *exactamente* su plantilla, que `home.md` no sigue.
4. **Colores de los niveles del IFO.** Los cuatro nombres coinciden, los cuatro hex **no**: `design_system.md` dice Frágil `#A63D2F`, producción `#D6402E`; y así los cuatro. El sistema de diseño está declarado *"freeze de implementación"*.
5. **Estados de datos: por bloque vs pantalla completa.** `design_system.md:265` dice *"nunca a pantalla completa"*; `layout_system.md:283` autoriza centrar en vacíos, carga y errores.
6. **Peso del IFO dentro del Estado.** `demo/README.md:59`: *"el IFO ya como dato secundario"*. `home-v2/README.md:37`: *"El héroe. Máximo contraste."*

## 6 TODO

`latencia` y `grado de posesión` como atributos de tipo estado dentro de otras entidades · la escala del IFO no tiene documento propio (solo aparece entrecomillada en una tabla de color) · dos vocabularios cerrados de `estado` en base de datos (`en_progreso|completado`, `verificada|pendiente|rechazada`) que el Canon no declara — y `evidence.md` no menciona ningún estado · frontera Badge ("mostrar estado") / Tag ("no comunica estado") · qué es "Estado Sistémico": ¿entidad, región o servicio? · seis usos homónimos de "estado" en código e infraestructura.

## Dos notas

Descarté como ruido dos patrones que inflaban el barrido a 127 coincidencias: la fórmula de cabecera `Estado: CONGELADO` y la cláusula de exclusión `sin estados` de los patrones arquitectónicos. Ninguna habla del concepto. Está dicho en el encabezado del documento.

Y una tensión que te señalo sin haberla resuelto: el documento vive en `atomica-core/ontology/`, que según la estructura que acabamos de fijar es solo Canon — y `README.md` del Canon dice que nunca contiene material no congelado. Lo creé donde lo pediste y lo blindé con un encabezado en mayúsculas que declara que **no es Canon**. Si prefieres que no toque el Canon hasta estar congelado, su sitio natural sería `archive/research/estado.md`; es un `git mv` de un segundo.
