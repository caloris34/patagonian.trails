# Base de datos de senderos

Esta carpeta es lo único que se edita a mano. Hay tres archivos, uno por tipo de objeto:

| Archivo | Qué guarda | Cuántos |
|---|---|---|
| `tramos.js` | Senderos entre dos puntos: lo que se dibuja en el mapa | 112 |
| `puntos.js` | Accesos, refugios, puntos de paso, lagunas y cumbres | 153 |
| `travesias.js` | Recorridos armados encadenando tramos | 8 |

Las normas para cuidar el lugar y los contactos de emergencia no están acá: están en la página estática `../info-utiles.html`, que se edita directamente.

La parte que **no** se edita a mano está en `../geo/`: las trazas, los perfiles de altura, la posición de cada punto y el relieve. De ahí salen la distancia, el desnivel, las alturas mínima y máxima y el origen de la traza (OpenStreetMap, track GPX o sin traza).

Cada registro tiene **siempre todos sus campos**, aunque estén vacíos. Así queda a la vista qué falta completar.

## Cómo editar

1. Abrí el archivo con un editor de texto (VS Code, TextEdit en modo texto plano).
2. Cambiá el valor que está a la derecha de los dos puntos. No cambies el nombre del campo.
3. Guardá y recargá `index.html` en el navegador.
4. Si algo quedó mal escrito, aparece un recuadro rojo arriba del panel que dice qué registro y qué campo tienen el problema.

Formato de los valores:

| Tipo | Cómo se escribe | Ejemplo |
|---|---|---|
| texto | entre comillas simples | `'Sube por bosque de lengas.'` |
| texto vacío | dos comillas simples | `''` |
| texto con apóstrofo | barra antes del apóstrofo | `'Paso O\'Higgins'` |
| número | sin comillas | `12` |
| sí / no | `true` o `false`, sin comillas | `true` |
| lista | entre corchetes, separada por comas | `[12, 27, 63]` |

Cada campo termina con coma. Cada registro va entre llaves `{ }` y también termina con coma.

**Agregar un tramo o un punto nuevo:** copiá un registro entero, pegalo y cambiale los valores. La app solo lo puede dibujar si existe su traza o su posición en `geo/geometria.js`; si no existe, lo avisa y no lo muestra. Pedile a Claude que genere la traza desde OpenStreetMap o un GPX.

**Borrar:** borrá el registro entero, desde `{` hasta `},`. Si una travesía lo usaba, la app avisa.

---

## Tramo (`tramos.js`)

### Identidad

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `id` | texto | Código único. Une el tramo con su traza. **No cambiar.** | — |
| `desde` | id de punto | Punto donde arranca el tramo (por ejemplo `'CAT'`) | — |
| `hasta` | id de punto | Punto donde termina el tramo | — |
| `nombre` | texto | Nombre propio del tramo | Se arma con los puntos: "Villa Catedral a Arroyo Van Titter" |
| `via` | texto | Por dónde pasa. Se muestra como "por …" | No se muestra |
| `ida_y_vuelta` | sí/no | El tramo vuelve por la misma traza: no se ofrece "Ver al revés" | — |

### Dificultad y norma

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `dificultad` | valor fijo | Dificultad del tramo. Define el color en el mapa y el filtro "Dificultad" | — |
| `nota_dificultad` | texto | Nota bajo la dificultad | Si está fuera de la APN, se aclara. Si no, no se muestra nada |
| `sendas_apn` | lista de números | Sendas oficiales de la APN que se muestran | No se muestra el bloque |
| `sendas_apn_total` | número | Total de sendas oficiales que pasan por el tramo. Si es mayor que la lista, se muestra "y N más" | — |
| `fuera_de_apn` | sí/no | No figura en el listado de la APN (por ejemplo, un parque municipal) | — |
| `administra` | texto | Quién lo administra, si está fuera de la APN | — |
| `registro` | valor fijo | Registro de trekking | — |
| `huella_andina` | sí/no | Es parte de la Huella Andina | — |

Valores de `dificultad`. Salen del Anexo I de la Disposición 150/19, período 1: Baja = fácil, Media = moderada, Alta = difícil. Ver `../INFORME-SENDAS.md`:

| Valor | En el mapa |
|---|---|
| `'facil'` | Fácil (verde, línea llena) |
| `'moderada'` | Moderada (naranja, rayada) |
| `'dificil'` | Difícil (rojo, punteada) |
| `'sin_dato'` | Sin dato (marrón) |

Valores de `registro`:

| Valor | Qué muestra |
|---|---|
| `'obligatorio'` | Obligatorio, con el enlace a la web del parque |
| `'a_confirmar'` | A confirmar |
| `'dificultad_baja'` | A confirmar, con la nota de que la dificultad baja estaría exceptuada |
| `'no_requiere'` | No hace falta |

### Cómo es

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `descripcion` | texto | Cómo es el sendero | "Pendiente de escribir" |
| `descripcion_verificada` | sí/no | `true` cuando la descripción está comprobada en el terreno | Con `false` se muestra "Descripción provisoria" |
| `agua` | texto | Dónde hay agua | "a relevar" |
| `vadeos` | texto | Cruces de arroyo | "a relevar" |
| `sombra` | texto | Cuánto tramo va a la sombra o expuesto | "a relevar" |
| `tiempo_medido` | texto | Tiempo real caminando de `desde` a `hasta`, por ejemplo `'2 h 30'` | Se muestra el estimado por fórmula. Al ver el tramo al revés, se muestra el estimado y se aclara el tiempo medido en el otro sentido |

---

## Punto (`puntos.js`)

### Todos los puntos

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `id` | texto | Código único. Une el punto con su posición. **No cambiar.** | — |
| `nombre` | texto | Nombre en el mapa y en la ficha | — |
| `nombre_en_tramos` | texto | Nombre que se usa al nombrar tramos. Ejemplo: el Refugio San Martín aparece como "Laguna Jakob" | Se usa `nombre` |
| `detalle` | texto | Línea chica bajo el nombre en el mapa | No se muestra |
| `tipo` | valor fijo | `'acceso'`, `'refugio'`, `'paso'`, `'laguna'` o `'cumbre'`. Define el símbolo y qué campos extra tiene | — |
| `descripcion` | texto | Texto libre en la ficha del punto | No se muestra |
| `etiqueta_x`, `etiqueta_y` | número | Corrimiento de la etiqueta respecto del punto, en píxeles. `y` negativo la sube | — |
| `etiqueta_lado` | valor fijo | `'derecha'`, `'izquierda'` o `'centro'`: hacia dónde crece el texto | — |
| `solo_con_zoom` | sí/no | El punto solo aparece al acercar el mapa | — |

### Solo refugios (`tipo: 'refugio'`)

`capacidad`, `reserva`, `que_se_compra`, `agua`, `acampe`, `si_esta_lleno`: todos de texto. Si están todos vacíos, la ficha dice "Pendiente: …". Si hay alguno completo, se muestran los seis y los vacíos dicen "a relevar".

### Solo accesos (`tipo: 'acceso'`)

`colectivo`, `parada`, `frecuencia`, `ultimo_regreso`, `estacionamiento`: todos de texto. Funcionan igual que los del refugio.

Si cambiás el `tipo` de un punto, agregá o borrá estos campos extra. Si no, la app avisa qué falta o qué sobra.

---

## Travesía (`travesias.js`)

| Campo | Tipo | Qué es | Si está vacío |
|---|---|---|---|
| `id` | texto | Código único | — |
| `nombre` | texto | Nombre de la travesía | — |
| `resumen` | texto | Línea bajo el nombre ("De Villa Catedral a…") | — |
| `senda_apn` | texto | Número de senda oficial. Va como texto porque puede ser `'58 y 63'` | — |
| `tramos` | lista de ids | Tramos en el orden en que se caminan. El sentido de cada uno se deduce solo | — |
| `dias` | texto | Cuántos días | "a definir" |
| `donde_dormir` | texto | Dónde se duerme | "a definir" |
| `salidas_de_escape` | texto | Por dónde salir si hay que abandonar | "a relevar" |
| `como_volver` | texto | Cómo se vuelve desde el final | "a relevar" |

La dificultad (la del tramo más exigente), la distancia, el desnivel y el perfil de una travesía no se escriben: se calculan con sus tramos.
