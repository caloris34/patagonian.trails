/* ======================================================================
   TRAVESÍAS · base de datos editable
   Recorridos de varios días armados con tramos. "tramos" es la lista de ids
   de datos/tramos.js en el orden en que se caminan.
   
   Cómo editar sin romper nada:
     · Los textos van entre comillas simples: 'así'. Si el texto lleva un
       apóstrofo, escribilo con barra: 'O\'Higgins'.
     · Cada campo termina con coma, y cada registro { ... } también.
     · Vacío = '' (dos comillas). Sí/no = true / false, sin comillas.
     · Las líneas que empiezan con // son comentarios: la app las ignora.
     · Si algo queda mal escrito, la app lo avisa arriba del panel.
   
   Qué significa cada campo: datos/LEEME.md
   ====================================================================== */

const TRAVESIAS = [

{
  id:                 'tv1',
  nombre:             'Frey y Jakob',
  resumen:            'De Villa Catedral al Tambo de Báez',
  senda_apn:          '64',
  tramos:             [
    'cat-vt',
    'vt-fre',
    'fre-cdf',
    'cdf-ruc',
    'ruc-jak',
    'jak-tam',
  ],

  // lo propio de la travesía
  dias:               '',
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv2',
  nombre:             'Frey, Jakob y laguna Negra',
  resumen:            'De Villa Catedral a Colonia Suiza',
  senda_apn:          '65',
  tramos:             [
    'cat-vt',
    'vt-fre',
    'fre-cdf',
    'cdf-ruc',
    'ruc-jak',
    'jak-neg',
    'col-neg',
  ],

  // lo propio de la travesía
  dias:               '',
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv3',
  nombre:             'Cuatro refugios',
  resumen:            'Frey, Jakob, Italia y López',
  senda_apn:          '66',
  tramos:             [
    'cat-vt',
    'vt-fre',
    'fre-cdf',
    'cdf-ruc',
    'ruc-jak',
    'jak-neg',
    'lop-neg',
    'alo-lop',
  ],

  // lo propio de la travesía
  dias:               '',
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv4',
  nombre:             'Laguna Negra y López',
  resumen:            'De Colonia Suiza al Circuito Chico',
  senda_apn:          '103',
  tramos:             [
    'col-neg',
    'lop-neg',
    'alo-lop',
  ],

  // lo propio de la travesía
  dias:               '',
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv5',
  nombre:             'Frey por el filo',
  resumen:            'De Punta Princesa a Villa Catedral',
  senda_apn:          '58 y 63',
  tramos:             [
    'pri-cdf',
    'fre-cdf',
    'vt-fre',
    'cat-vt',
  ],

  // lo propio de la travesía
  dias:               '',
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv6',
  nombre:             'Jakob por la Huella Andina',
  resumen:            'Del Tambo de Báez a Los Césares',
  senda_apn:          '162',
  tramos:             [
    'jak-tam',
    'jak-ces',
  ],

  // lo propio de la travesía
  dias:               '',
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv7',
  nombre:             'Las lagunas',
  resumen:            'De Colonia Suiza a Pampa Linda',
  senda_apn:          '106',
  tramos:             [
    'col-neg',
    'neg-cab',
    'cab-cre',
    'cre-juj',
    'juj-ilo',
    'ilo-pli',
  ],

  // lo propio de la travesía
  dias:               '',
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

{
  id:                 'tv8',
  nombre:             'Refugios del Tronador',
  resumen:            'Meiling, glaciar Frías, Roca y Puerto Frías',
  senda_apn:          '127',
  tramos:             [
    'pli-mei',
    'mei-roc',
    'roc-pfr',
  ],

  // lo propio de la travesía
  dias:               '',
  donde_dormir:       '',
  salidas_de_escape:  '',
  como_volver:        '',
},

];
