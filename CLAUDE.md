# Contexto del proyecto
Mapa de trekking estático (HTML/CSS/JS plano, sin build). Se prueba abriendo index.html (funciona con file://, así que no se puede usar fetch: los datos son archivos .js con `const`).

- `datos/` es la base de datos que el usuario edita a mano. Formato: un campo por línea, alineados, todos los campos presentes en cada registro (vacíos como '' o false), comentarios `//` de sección. Respetar ese formato al editar.
- Si se agrega, renombra o quita un campo: actualizar a la vez `CAMPOS` en app.js (el validador), todos los registros del archivo y `datos/LEEME.md`.
- `geo/` es generado. No editar a mano: `relieve.js` es base64 y `geometria.js` es una línea larga. Modificarlos con scripts.
- Los ids de tramos y puntos unen `datos/` con `geo/`. No renombrarlos sin cambiar los dos.
- Orden de carga: geo/geometria.js, geo/relieve.js, datos/puntos.js, tramos.js, travesias.js, app.js.
- Solo temporada de verano: no hay datos ni selector de invierno.
- `info-utiles.html` es estática (cuidar el lugar, emergencia): no se repite en las fichas.
- Los textos de datos/ se insertan con `esc()` (sin HTML).
- Mantener la atribución OSM/SRTM y el aviso de trazas sin verificar.
- La v1 original está en ../mapa-trekking/ (sin tocar).
- `geo/` cubre todo el parque (Web Mercator, ~35 m/px). Se generó el 12/11/2026 con OSM (extracto Geofabrik) y elevación terrarium/SRTM; los scripts quedaron fuera del proyecto. Para regenerar hay que reconstruirlos.
- Los tramos y puntos agregados desde el Anexo I están al final de `datos/tramos.js` y `datos/puntos.js`. Los puntos `E01`, `E02`… son empalmes o accesos automáticos. `INFORME-SENDAS.md` dice qué senda quedó trazada y cuál no.
