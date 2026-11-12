/* ======================================================================
   PUNTOS · base de datos editable
   Accesos, refugios, puntos de paso, lagunas y cumbres donde empiezan o
   terminan los tramos. No cambies el "id": une el punto con su posición.
   
   Cómo editar sin romper nada:
     · Los textos van entre comillas simples: 'así'. Si el texto lleva un
       apóstrofo, escribilo con barra: 'O\'Higgins'.
     · Cada campo termina con coma, y cada registro { ... } también.
     · Vacío = '' (dos comillas). Sí/no = true / false, sin comillas.
     · Las líneas que empiezan con // son comentarios: la app las ignora.
     · Si algo queda mal escrito, la app lo avisa arriba del panel.
   
   Qué significa cada campo: datos/LEEME.md
   ====================================================================== */

const PUNTOS = [

{
  // identidad
  id:                 'CAT',
  nombre:             'Villa Catedral',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -8,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'VT',
  nombre:             'Arroyo Van Titter',
  nombre_en_tramos:   '',
  detalle:            'empalme',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         5,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'FRE',
  nombre:             'Refugio Frey',
  nombre_en_tramos:   '',
  detalle:            'laguna Toncek',
  tipo:               'refugio',
  descripcion:        '',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -4,
  etiqueta_y:         22,
  etiqueta_lado:      'centro',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CDF',
  nombre:             'Cancha de Fútbol',
  nombre_en_tramos:   '',
  detalle:            'empalme del filo',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         9,
  etiqueta_y:         -16,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'PRI',
  nombre:             'Punta Princesa',
  nombre_en_tramos:   '',
  detalle:            'filo del Catedral',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         -9,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'RUC',
  nombre:             'Arroyo Rucaco',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         0,
  etiqueta_y:         19,
  etiqueta_lado:      'centro',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'JAK',
  nombre:             'Refugio San Martín',
  nombre_en_tramos:   'Laguna Jakob',
  detalle:            'laguna Jakob',
  tipo:               'refugio',
  descripcion:        '',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -11,
  etiqueta_y:         15,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'TAM',
  nombre:             'Tambo de Báez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CES',
  nombre:             'Los Césares',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         16,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'NEG',
  nombre:             'Refugio Italia',
  nombre_en_tramos:   'Laguna Negra',
  detalle:            'laguna Negra',
  tipo:               'refugio',
  descripcion:        '',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -11,
  etiqueta_y:         5,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'COL',
  nombre:             'Colonia Suiza',
  nombre_en_tramos:   '',
  detalle:            'arroyo Goye',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         14,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'LOP',
  nombre:             'Refugio López',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'refugio',
  descripcion:        '',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -11,
  etiqueta_y:         5,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'ALO',
  nombre:             'Arroyo López',
  nombre_en_tramos:   '',
  detalle:            'Circuito Chico',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         8,
  etiqueta_y:         -9,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'BLO',
  nombre:             'Bahía López',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         14,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CAB',
  nombre:             'Laguna CAB',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CRE',
  nombre:             'Laguna Cretón',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         15,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'AZU',
  nombre:             'Laguna Azul',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         14,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'JUJ',
  nombre:             'Laguna Jujuy',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         0,
  etiqueta_y:         -11,
  etiqueta_lado:      'centro',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'ILO',
  nombre:             'Laguna Ilón',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         -6,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'PLI',
  nombre:             'Pampa Linda',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         16,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'MEI',
  nombre:             'Refugio Otto Meiling',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'refugio',
  descripcion:        '',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         11,
  etiqueta_y:         16,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'RVI',
  nombre:             'Refugio Viejo',
  nombre_en_tramos:   '',
  detalle:            'Tronador',
  tipo:               'refugio',
  descripcion:        '',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         -11,
  etiqueta_y:         15,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'ROC',
  nombre:             'Refugio Roca',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'refugio',
  descripcion:        '',

  // el refugio
  capacidad:          '',
  reserva:            '',
  que_se_compra:      '',
  agua:               '',
  acampe:             '',
  si_esta_lleno:      '',

  // etiqueta en el mapa
  etiqueta_x:         11,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'PFR',
  nombre:             'Puerto Frías',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'GUT',
  nombre:             'Seccional Gutiérrez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'DUE',
  nombre:             'Cascada de los Duendes',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -9,
  etiqueta_y:         -5,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'MIG',
  nombre:             'Mirador del Gutiérrez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -9,
  etiqueta_y:         12,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'GSU',
  nombre:             'Cabecera sur',
  nombre_en_tramos:   '',
  detalle:            'lago Gutiérrez',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         15,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'LLA',
  nombre:             'Parque Llao Llao',
  nombre_en_tramos:   '',
  detalle:            'Circuito Chico',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         -6,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'CLL',
  nombre:             'Cerro Llao Llao',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -6,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'TAC',
  nombre:             'Villa Tacul',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         -9,
  etiqueta_y:         -6,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      false,
},

{
  // identidad
  id:                 'SMI',
  nombre:             'Inicio',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         -10,
  etiqueta_y:         -6,
  etiqueta_lado:      'izquierda',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CSM',
  nombre:             'Cerro San Martín',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         14,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

// ===== Puntos agregados desde el Anexo I (Disp. 150/19) y OpenStreetMap =====
// Los ids que empiezan con E son empalmes o accesos detectados automáticamente: renombralos si conocés el lugar.

{
  // identidad
  id:                 'FAA',
  nombre:             'Lago Villarino',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'FAL',
  nombre:             'Cerro Falkner',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NIV',
  nombre:             'Cascada Ñivinco',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NIA',
  nombre:             'Ruta 40, antes de Villarino',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MON',
  nombre:             'Cerro La Mona',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LEC',
  nombre:             'Lago Espejo Chico',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MEL',
  nombre:             'Lagunas Las Mellizas',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LAG',
  nombre:             'Las Lagunas',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ACT',
  nombre:             'Arroyo Cataratas',
  nombre_en_tramos:   '',
  detalle:            'lago Traful',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MNT',
  nombre:             'Margen norte lago Traful',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MLE',
  nombre:             'Mirador Lago Espejo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'SLE',
  nombre:             'Seccional Lago Espejo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LCO',
  nombre:             'Lago Correntoso',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E06',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cartel de Villa Traful',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E05',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Aiken',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E07',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Vulcanche',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'AGU',
  nombre:             'Aguada del Burro',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NAS',
  nombre:             'Mirador El Naso',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'AGB',
  nombre:             'Ruta 231, km 4,5',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PAN',
  nombre:             'Ruta 231, km 6,5',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'COI',
  nombre:             'Coihue El Abuelo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ABU',
  nombre:             'Ruta 231, km 2,5',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'BUO',
  nombre:             'Cerro Buol',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E33',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Playa Bahía de la Última Esperanza',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E22',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cerro Buol',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'RAN',
  nombre:             'Arroyo La Rana',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'UES',
  nombre:             'Brazo Última Esperanza',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'TLA',
  nombre:             'Tapera de Lagos',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'TRF',
  nombre:             'Traful',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NE2',
  nombre:             'Cerro Negro',
  nombre_en_tramos:   '',
  detalle:            'Traful',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CPA',
  nombre:             'Cerro Panguinal',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CNE',
  nombre:             'Cajón Negro',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'FBE',
  nombre:             'Filo Falso Belvedere',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E31',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cerro Book',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'VOR',
  nombre:             'Valle del Arroyo Voruco',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CDO',
  nombre:             'Cascada Dora',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E17',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Mirador Cascada Dora',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CSA',
  nombre:             'Cascada Santa Ana',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'R7L',
  nombre:             'Ruta de los 7 Lagos',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'DSA',
  nombre:             'Ruta 231, km 28',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'INA',
  nombre:             'Cascada Inacayal',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ANT',
  nombre:             'Calle Cacique Antriao',
  nombre_en_tramos:   '',
  detalle:            'Villa La Angostura',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E43',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Macrolote 5',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E51',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Macrolote 5',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'BAY',
  nombre:             'Base Cerro Bayo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E52',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de 76 Viviendas IPPV',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PMA',
  nombre:             'Población Martínez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'DOR',
  nombre:             'Cerro Dormilón',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'OCO',
  nombre:             'Cerro O\'Connor',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MNB',
  nombre:             'Mallín de las Nieblas',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'IST',
  nombre:             'Istmo Quetrihué',
  nombre_en_tramos:   '',
  detalle:            'Villa La Angostura',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E35',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cabañas Colibri',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MQU',
  nombre:             'Miradores de Quetrihué',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E32',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Mirador Bahía Mansa',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'OCA',
  nombre:             'Chacras del Manzano',
  nombre_en_tramos:   '',
  detalle:            'ruta 40',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E34',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Acceso Sendero Rio Bonito',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E12',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Bahía Manzano Resort',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'RBV',
  nombre:             'Valle del Río Bonito',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'RBA',
  nombre:             'Río Bonito, ruta 40',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'RAG',
  nombre:             'Arroyo Ragintuco',
  nombre_en_tramos:   '',
  detalle:            'ruta 40',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ARR',
  nombre:             'Bosque de Arrayanes',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CHB',
  nombre:             'Población Chabol',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CEN',
  nombre:             'Cerro Centinela',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'HUA',
  nombre:             'Río Huemul, ruta 40',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CCO',
  nombre:             'Cerro Colorado',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PBL',
  nombre:             'Piedras Blancas',
  nombre_en_tramos:   '',
  detalle:            'isla Victoria',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E41',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Puerto Anchorena',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'IVA',
  nombre:             'Puerto Anchorena',
  nombre_en_tramos:   '',
  detalle:            'isla Victoria',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'TOT',
  nombre:             'Bahía Totoras',
  nombre_en_tramos:   '',
  detalle:            'isla Victoria',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'OBA',
  nombre:             'Lago Ortiz Basualdo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LCA',
  nombre:             'Lago Los Cántaros',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E02',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Mirador Cascada Los Cántaros',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PCA',
  nombre:             'Puerto Cántaros',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'BLE',
  nombre:             'Puerto Blest',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E57',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Abra de Pérez Rosales',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'VIC',
  nombre:             'Mirador Cerro Vichadero',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'GAL',
  nombre:             'Glaciar Alerce',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MDO',
  nombre:             'Mirada del Doctor',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E47',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Punta condor',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E14',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Refugio Otto Meiling',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'GCO',
  nombre:             'Glaciar Castaño Overa',
  nombre_en_tramos:   '',
  detalle:            'mirador',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'GDI',
  nombre:             'Garganta del Diablo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E48',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Laguna Ilón',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'PPE',
  nombre:             'Piedra Pérez',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CTE',
  nombre:             'Casa de Té Los Ventisqueros',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E59',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Almohadilla',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'VUR',
  nombre:             'Paso Vuriloche',
  nombre_en_tramos:   '',
  detalle:            'límite',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MVA',
  nombre:             'Mirador del Valle',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E15',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Pampa Linda',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E68',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Portezuelo de Bariloche O Tronador',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E09',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'ROS',
  nombre:             'Laguna Rosada',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E40',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'NEU',
  nombre:             'Ex refugio Neumeyer',
  nombre_en_tramos:   '',
  detalle:            'valle del Challhuaco',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E19',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LVE',
  nombre:             'Laguna Verde',
  nombre_en_tramos:   '',
  detalle:            'valle del Challhuaco',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E58',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Camping Agreste Remü Lafken',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E49',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Laguna Verde Valle del Challhuaco',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MAI',
  nombre:             'Cabecera norte Mascardi',
  nombre_en_tramos:   '',
  detalle:            'seccional Los Maitenes',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E67',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Campamento Los Césares',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E66',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Campamento Los Césares',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CHA',
  nombre:             'Cerro Challhuaco',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E39',
  nombre:             'Empalme',
  nombre_en_tramos:   '',
  detalle:            'cerca de Cascada Los Césares',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'VOL',
  nombre:             'Cerro Volcánico',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'CLC',
  nombre:             'Cascada Los Césares',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LEO',
  nombre:             'Playa Leones',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'paso',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LLU',
  nombre:             'Laguna Llum',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LLC',
  nombre:             'Laguna Los Césares',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'MAR',
  nombre:             'Campamento Marista',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E42',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Laguna Juventus',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'LLO',
  nombre:             'Arroyo Llodconto',
  nombre_en_tramos:   '',
  detalle:            'Huella Andina',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E08',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Huinca Ruca',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'JUV',
  nombre:             'Laguna Juventus',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'HUI',
  nombre:             'Cerro Huinca',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'FGR',
  nombre:             'Cerro Falso Granítico',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'cumbre',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E26',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Huinca Ruca',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'GUI',
  nombre:             'Lago Guillelmo',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E01',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Camping Agreste',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'STE',
  nombre:             'Lago Steffen',
  nombre_en_tramos:   '',
  detalle:            '',
  tipo:               'laguna',
  descripcion:        '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

{
  // identidad
  id:                 'E29',
  nombre:             'Acceso',
  nombre_en_tramos:   '',
  detalle:            'cerca de Los Piletones del Río Manso',
  tipo:               'acceso',
  descripcion:        '',

  // cómo llegar
  colectivo:          '',
  parada:             '',
  frecuencia:         '',
  ultimo_regreso:     '',
  estacionamiento:    '',

  // etiqueta en el mapa
  etiqueta_x:         10,
  etiqueta_y:         -7,
  etiqueta_lado:      'derecha',
  solo_con_zoom:      true,
},

];
