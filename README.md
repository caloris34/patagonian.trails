# Mapa de trekking — Nahuel Huapi, sector central (v2, con base de datos)

Mapa SVG estático, sin build ni dependencias. Abrir `index.html` en el navegador.

La información de cada sendero está en una base de datos editable, separada de la geometría.

```
index.html        mapa: estructura y orden de carga
info-utiles.html  página estática: cuidar el lugar y emergencia (se edita directo)
INFORME-SENDAS.md qué sendas del Anexo I se pudieron trazar y cuáles no
style.css         estilos
app.js            lógica: lee y controla la base de datos, dibuja el mapa y las fichas
datos/            BASE DE DATOS EDITABLE A MANO  → ver datos/LEEME.md
  tramos.js       senderos entre dos puntos (TRAMOS)
  puntos.js       accesos, refugios, pasos, lagunas, cumbres (PUNTOS)
  travesias.js    recorridos armados con tramos (TRAVESIAS)
geo/              GENERADO, no editar a mano
  geometria.js    trazas, perfiles, posiciones, contexto del mapa (D)
  relieve.js      relieve SRTM como WebP en base64 (BASE)
```

Si la base de datos tiene un error (un campo mal escrito, un valor no permitido, un id que no existe o una coma de menos), la app lo muestra en un recuadro rojo arriba del panel.

Atribución: senderos, lagos y cumbres © colaboradores de OpenStreetMap (noviembre 2026). Relieve: SRTM.
Las trazas no están verificadas: no usar para navegar.
