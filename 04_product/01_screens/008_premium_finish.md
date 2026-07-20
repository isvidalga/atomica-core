# 008_premium_finish.md — HOME · Acabado Premium

Deriva de 001_home.md v1.0 y 002–007. Solo refinamiento. Sin cambios de arquitectura, layout, componentes ni navegación.

---

## Principio rector

La diferencia entre un producto de 2.000 € y uno de 50.000 € no está en lo que se añade. Está en lo que se elimina, en lo que se calibra, y en la ausencia de fricción perceptible.

---

## 1. Anti-aliasing tipográfico

- `-webkit-font-smoothing: antialiased` en todo el árbol. El gris subpixel rompe la nitidez en fondos oscuros.
- `-moz-osx-font-smoothing: grayscale` para coherencia en macOS.
- El texto debe parecer grabado en la pantalla, no impreso sobre ella.

---

## 2. Alineación óptica

- Los números tabulares (IFO, valores de Sistemas) deben asentar visualmente 1 px por encima de la línea base óptica cuando van acompañados de texto. El ojo percibe los números como más pesados; el desplazamiento sutil corrige la sensación de hundimiento.
- Las flechas de acción (16 px) se alinean no al centro vertical del texto, sino 1 px por debajo del centro-x. El peso visual de la punta requiere esta compensación.

---

## 3. Espaciado de kerning contextual

- El IFO (120 px, tracking −0.035em) puede requerir ajuste de kerning manual en pares problemáticos (ej: "10" donde el 1 deja un vacío). Si la fuente no lo soporta nativamente, aplicar `font-feature-settings: 'kern'` y, en casos extremos, margin-left negativo de 1–2 px en el segundo glifo.
- Los títulos de bloque (12 px, tracking +0.14em) no requieren kerning adicional; el tracking amplio lo absorbe.

---

## 4. Color de fondo inquebrantable

- El fondo primario `#0A0A0F` debe extenderse al 100 % del viewport sin fisuras. Verificar que no existan márgenes implícitos del navegador (`margin: 0` en `body`).
- En pantallas OLED, este negro azulado profundo permite que los píxeles se apaguen parcialmente, reduciendo el consumo energético y aumentando el contraste percibido.

---

## 5. Transiciones de número

- Cuando el IFO o un valor de Sistema cambia, el número no salta. El valor anterior permanece visible 50 ms, luego se desvanece en 80 ms mientras el nuevo aparece en 80 ms (total: 210 ms, ligeramente por encima del límite de 200 ms, pero justificado por la legibilidad del dato).
- Alternativa más estricta: crossfade de 150 ms donde ambos valores coexisten 30 ms. Total: 180 ms.
- Los números tabulares evitan el "baile" de anchura durante la transición.

---

## 6. Respuesta táctil

- Áreas pulsables: mínimo 44 × 44 px de hit area real, aunque visualmente midan menos. El padding de 24 px vertical (003) garantiza esto.
- En dispositivos táctiles, eliminar el delay de 300 ms (`touch-action: manipulation`).
- El estado activo (pressed) debe ser visible en 50 ms. El usuario debe sentir que el sistema respondió antes de que su dedo haya abandonado la pantalla.

---

## 7. Cursor como comunicación

- Cursor `default` sobre todo elemento no interactivo. Nunca `text` sobre un título de bloque; no es editable.
- Cursor `pointer` solo en los tres elementos interactivos.
- Cursor `not-allowed` nunca. Si algo no es interactivo, no lo sugerimos.

---

## 8. Bordes de precisión

- Separadores de 1 px: `rgba(240,240,245,0.06)` — visibles solo cuando estrictamente necesarios. Preferir espacio (003) sobre línea.
- Si un separador es inevitable, debe ser exactamente 1 px en todo dispositivo. Sin compensación de subpixel que lo haga parecer 2 px en algunas densidades.

---

## 9. Consistencia de densidad de píxel

- Todos los tamaños definidos en px deben ser pares (múltiplos de 2) para evitar fracciones en pantallas @2x. Los valores de 003 y 004 ya lo cumplen (8, 12, 16, 18, 24, 28, 32, 48, 64, 96, 120).
- Las transparencias de sombra y fondo deben renderizarse sin banding. Si se detecta banding en fondos oscuros, añadir ruido de 0.5 % de opacidad (`noise texture` de 256×256 px, tileado, `mix-blend-mode: overlay`, opacidad 0.03). Último recurso.

---

## 10. Silencio en la interfaz

- Sin sonidos.
- Sin vibración háptica (salvo que el sistema operativo la aplique nativamente en elementos interactivos).
- Sin notificaciones visuales intrusivas (badges, toasts, banners) en la Home.
- La interfaz no habla salvo que el usuario le pregunte.

---

## 11. Persistencia del estado visual

- Al actualizar datos, los bloques que no cambian no parpadean, no se recolorean, no se reinician.
- Solo el dato que cambia transiciona. Todo lo demás permanece inmóvil. La estabilidad comunica confianza.

---

## 12. Fallback tipográfico invisible

- Si Inter Tight no carga en 200 ms, mostrar la pila de sistema (`system-ui, -apple-system, BlinkMacSystemFont`) sin FOIT (Flash of Invisible Text) ni FOUT (Flash of Unstyled Text) visible. Usar `font-display: swap` con un color de texto que sea idéntico en ambas fuentes (el sistema ya es oscuro, el texto claro; el contraste se mantiene).

---

## 13. Meta-atención al detalle

- El título de la pestaña del navegador debe ser exacto: "DONELLA · Estado Global" — sin prefijos, sin números de notificación, sin "Home".
- El favicon: un punto sólido de 32×32 px, color acento cálido, sin texto, sin gradiente.
- El `theme-color` meta tag: `#0A0A0F` para que la barra de direcciones del navegador móvil se funda con el fondo.
- El `manifest.json` (si aplica) debe declarar `display: standalone` y `background_color: #0A0A0F`.

---

## 14. La ausencia como lujo

- No hay modo oscuro/claro. Esta interfaz es su modo definitivo.
- No hay personalización de tema. La calibración del diseñador es la única válida.
- No hay onboarding. La interfaz se explica por su jerarquía visual.
- No hay menú de ayuda en la Home. La ayuda está donde el usuario la necesita, no donde el diseñador la colocó por defecto.

---

## Checklist de entrega

- [ ] Texto sin borrosidad en pantallas de alta densidad.
- [ ] Ningún elemento parpadea, brilla, o se mueve sin causa.
- [ ] La transición más larga de la interfaz dura ≤ 200 ms.
- [ ] El fondo es ininterrumpido en todo viewport y overscroll.
- [ ] Los tres elementos interactivos responden en < 100 ms perceptual.
- [ ] Ningún color fuera de la paleta definida en 006.
- [ ] Ningún radio fuera de {0, 4 px}.
- [ ] Ninguna sombra fuera de los tokens definidos.
- [ ] `prefers-reduced-motion` respeta todas las animaciones.
- [ ] El producto parece terminado, no en desarrollo.
