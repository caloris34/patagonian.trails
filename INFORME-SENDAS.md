# Informe: sendas del Anexo I agregadas al mapa

Fuente: `inputs/Sendas_Guias_Trekking_PNNH.xlsx` (Anexo I, Disposición 150/19, sendas para guías de trekking). Se usó solo el período 1 (temporada de verano). Trazas de OpenStreetMap (extracto Geofabrik del 12/11/2026).

- **Completas:** 126 sendas trazadas de punta a punta.
- **Parciales:** 12 sendas con algún tramo que no está en OSM.
- **No trazables:** 31 sendas. Falta el sendero o el lugar en OSM.

**Cómo se asignó la dificultad de cada tramo.** Cada tramo toma la dificultad *más baja* de las sendas que lo recorren completo. Por ejemplo, Catedral → Frey es "media" en la senda 63, aunque también forme parte de travesías "altas". El registro de trekking queda "no requiere" en los tramos fáciles y "obligatorio" en el resto, según el criterio del Anexo.

**Tramos sin dato.** Jakob → Laguna Negra, Meiling → Refugio Viejo y Meiling → Refugio Roca no figuran en la lista de trekking. Tampoco los tres tramos municipales (Llao Llao y cerro San Martín).

**Empalmes y accesos automáticos.** Los puntos con id `E01`, `E02`… son cruces de senderos o accesos desde un camino detectados en OSM. Tienen nombre genérico ("Empalme", "Acceso") y en `detalle` el lugar con nombre más cercano. Conviene renombrarlos en `datos/puntos.js`.

| Senda | Recorrido | Dificultad | Estado | Detalle |
|---|---|---|---|---|
| 1 | Ex refugio Neumeyer → Mirador Ñirihuau | Baja → fácil | no trazable | no está en OSM: Mirador Ñirihuau |
| 2 | Ex refugio Neumeyer → Valle de los Perdidos | Baja → fácil | no trazable | no está en OSM: Valle de los Perdidos |
| 3 | Ex refugio Neumeyer → Ex refugio Neumeyer → Mirador del valle | Baja → fácil | no trazable | no está en OSM: Mirador del valle |
| 4 | Ex refugio Neumeyer → Ex refugio Neumeyer → Mirador de Laguna Verde | Baja → fácil | completa | tramos nuevos: neu-e49, e49-lve |
| 5 | Ex refugio Neumeyer → Ex refugio Neumeyer → Cumbre Cº Challhuaco | Media → moderada | completa | tramos nuevos: neu-e49, e49-cha |
| 6 | Ruta 40 y camino acceso Ñireco → Nacientes valle Aº Ñireco | Alta → difícil | sin datos | no está en OSM: Acceso Ñireco, Nacientes Aº Ñireco |
| 7 | Dest. Ñirihuau → Refugio Velco | Alta → difícil | no trazable | DNI → VEL: sin punto de enganche en OSM |
| 8 | Secc. Gutiérrez → Cascada de los Duendes | Baja → fácil | completa | usa tramos que ya existían |
| 9 | Secc. Gutiérrez → Mirador del lago Gutiérrez | Baja → fácil | completa | usa tramos que ya existían |
| 10 | Secc. Gutiérrez → Refugio Piedritas → Refugio Frey | Media → moderada | completa | usa tramos que ya existían |
| 11 | Secc. Gutiérrez → Aº La Menta → Playa Muñoz | Baja → fácil | completa | usa tramos que ya existían |
| 12 | Secc. Gutiérrez → Playa Muñoz → Catedral (Estacionamiento) | Media → moderada | completa | usa tramos que ya existían |
| 13 | Secc. Gutiérrez → Playa Muñoz → Cabecera sur Lº Gutiérrez | Media → moderada | completa | usa tramos que ya existían |
| 14 | Secc. Gutiérrez → Refugio Frey → Catedral (Punta Princesa) | Alta → difícil | completa | usa tramos que ya existían |
| 15 | Secc. Gutiérrez → Refugio Frey-Ref. San Martín (laguna Jakob) → Aº Casa de Piedra (Tambo de Baez) | Alta → difícil | completa | usa tramos que ya existían |
| 19 | Secc. Gutiérrez → Ref. Frey-Aº Fresco → Cabecera norte Lº Mascardi | Alta → difícil | parcial | Refugio Frey → Cabecera norte Mascardi: en OSM no hay sendero por el Arroyo Fresco |
| 20 | Secc. Gutiérrez → Ref. Frey-Ref. San Martín (laguna Jakob)-Aº Casalata → Los Césares | Alta → difícil | completa | usa tramos que ya existían |
| 23 | Cabecera sur Lº Gutiérrez → Playa Muñoz | Baja → fácil | completa | usa tramos que ya existían |
| 24 | Cabecera sur Lº Gutiérrez → Refugio Piedritas → Refugio Frey | Media → moderada | completa | usa tramos que ya existían |
| 25 | Cabecera sur Lº Gutiérrez → Playa Muñoz → Gutiérrez | Media → moderada | completa | usa tramos que ya existían |
| 26 | Cabecera sur Lº Gutiérrez → Refugio Frey-Punta Princesa → Catedral (Punta Princesa) | Alta → difícil | completa | usa tramos que ya existían |
| 27 | Cabecera sur Lº Gutiérrez → Playa Muñoz → Catedral (Estacionamiento) | Media → moderada | completa | usa tramos que ya existían |
| 28 | Cabecera sur Lº Gutiérrez → Refugio Frey- Refugio San Martin (laguna Jakob) → Aº Casa de Piedra (Tambo de Baez) | Alta → difícil | completa | usa tramos que ya existían |
| 32 | Cabecera sur Lº Gutiérrez → Refugio Frey- Refugio San Martín (laguna Jakob)- Aº Casalata → Los Césares | Alta → difícil | completa | usa tramos que ya existían |
| 35 | Cabecera sur Lº Gutiérrez → Ref. Frey- Ref. San Martín (laguna Jakob)- Aº Fresco → Cabecera norte del Lº Mascardi | Alta → difícil | parcial | Refugio San Martín → Cabecera norte Mascardi: en OSM no hay sendero por el Arroyo Fresco |
| 36 | Cabecera sur Lº Gutiérrez → Aº Torrontegui - Laguna Hosseus → Refugio Velco | Alta → difícil | no trazable | Cabecera sur → HOS: sin punto de enganche en OSM; HOS → VEL: sin punto de enganche en OSM |
| 37 | A.C.A Mascardi → Cº Lantzina → Refugio Velco | Alta → difícil | no trazable | ACA → VEL: falta un lugar intermedio; no está en OSM: Cº Lantzina |
| 38 | Secc. Maitenes → Playa Leones → Laguna Llum | Baja → fácil | completa | tramos nuevos: llu-leo, e40-mai, e58-leo |
| 39 | Secc. Maitenes → Laguna Llum → Los Césares | Alta → difícil | completa | tramos nuevos: llu-e19, llu-leo, e40-mai, e58-leo |
| 40 | Secc. Maitenes → Aº Fresco- Ref. San Martín (laguna Jakob) → Aº Casa de Piedra (Tambo de Baez) | Alta → difícil | parcial | Cabecera norte Mascardi → Refugio San Martín: OSM solo lo une pasando por Refugio Frey |
| 44 | Secc. Maitenes → Aº Fresco- Ref. San Martín (laguna Jakob)- Aº Rucaco- Ref. Frey- Aº Van Titter → Catedral (Estacionamiento) | Alta → difícil | parcial | Cabecera norte Mascardi → Refugio San Martín: en OSM no hay sendero por el Arroyo Fresco |
| 45 | Secc. Maitenes → Aº Fresco- Ref. San Martín (laguna Jakob)- Aº Rucaco → Catedral (Punta Princesa) | Alta → difícil | parcial | Cabecera norte Mascardi → Refugio San Martín: OSM solo lo une pasando por Refugio Frey |
| 46 | Secc. Maitenes → Aº Fresco- Ref. San Martín (laguna Jakob)- Ref. Frey- Aº Van Titter → Cabecera sur Lº Gutiérrez | Alta → difícil | parcial | Cabecera norte Mascardi → Refugio San Martín: en OSM no hay sendero por el Arroyo Fresco |
| 47 | Frente camp. Marista → Cº Falso Granito | Media → moderada | completa | tramos nuevos: mar-fgr |
| 48 | Aº Llodconto → Lº Steffen (Huella Andina) | Media → moderada | completa | tramos nuevos: llo-e01 |
| 49 | Secc. Mascardi → Laguna Juventus | Media → moderada | completa | tramos nuevos: e42-juv |
| 50 | Secc. Mascardi → Cº Huinca | Alta → difícil | completa | tramos nuevos: e08-hui |
| 51 | Secc. Mascardi → Lº Guillelmo (bicicletas) | Media → moderada | completa | tramos nuevos: gui-e26 |
| 52 | Punta Princesa (filo) → Aº Rucaco- Ref. San Martín (laguna Jakob) → Aº Casa de Piedra (Tambo de Baez) | Alta → difícil | completa | usa tramos que ya existían |
| 56 | Punta Princesa (filo) → Aº Rucaco- Ref. San Martín (laguna Jakob)- Aº Fresco → Cabecera norte Lº Mascardi | Alta → difícil | parcial | Refugio San Martín → Cabecera norte Mascardi: OSM solo lo une pasando por Refugio Frey |
| 57 | Punta Princesa (filo) → Aº Rucaco- Ref. San Martín (laguna Jakob)- Aº Casalata → Los Césares | Alta → difícil | completa | usa tramos que ya existían |
| 58 | Punta Princesa (filo) → Laguna Schmoll → Refugio Frey | Alta → difícil | completa | usa tramos que ya existían |
| 59 | Punta Princesa (filo) → Ref. Frey → Catedral (Estacionamiento) | Alta → difícil | completa | usa tramos que ya existían |
| 60 | Punta Princesa (filo) → Ref. Frey → Gutiérrez | Alta → difícil | completa | usa tramos que ya existían |
| 61 | Punta Princesa (filo) → Ref. Frey → Cabecera sur Lº Gutiérrez | Alta → difícil | completa | usa tramos que ya existían |
| 62 | Estacionamiento → Ref. Frey → Punta Princesa (filo) | Alta → difícil | completa | usa tramos que ya existían |
| 63 | Estacionamiento → Refugio Piedritas → Refugio Frey | Media → moderada | completa | usa tramos que ya existían |
| 64 | Estacionamiento → Ref. Frey- Aº Rucaco- Ref. San Martín (laguna Jakob) → Aº Casa de Piedra (Tambo de Baez) | Alta → difícil | completa | usa tramos que ya existían |
| 68 | Estacionamiento → Ref. Frey- Aº Rucaco- Ref. San Martín (laguna Jakob) - Aº Fresco → Cabecera norte Lº Mascardi | Alta → difícil | parcial | Refugio San Martín → Cabecera norte Mascardi: en OSM no hay sendero por el Arroyo Fresco |
| 69 | Estacionamiento → Refugio Frey- Aº Rucaco- Refugio San Martín (laguna Jakob)- Aº Casalata → Los Césares | Alta → difícil | completa | usa tramos que ya existían |
| 70 | Estacionamiento → Playa Muñoz → Gutiérrez | Media → moderada | completa | usa tramos que ya existían |
| 71 | Estacionamiento → Playa Muñoz → Cabecera sur Lº Gutiérrez | Media → moderada | completa | usa tramos que ya existían |
| 72 | Puerto Blest → Laguna Los Clavos - laguna Pangue → Puerto Frias | Alta → difícil | no trazable | Puerto Blest → LCL: sin punto de enganche en OSM; LCL → LPA: sin punto de enganche en OSM; LPA → Puerto Frías: sin punto de enganche en OSM |
| 73 | Puerto Blest → Aº Blest → Puerto Cantaros | Media → moderada | completa | tramos nuevos: pca-e02, e02-ble |
| 74 | Puerto Cantaros → Cascada Los Cantaros → Lago Cantaros | Baja → fácil | completa | tramos nuevos: pca-e02, lca-e02 |
| 75 | Puerto Cantaros → Lago Cantaros → Lago Ortiz Basualdo | Alta → difícil | completa | tramos nuevos: pca-e02, oba-lca, lca-e02 |
| 76 | Lº Frias → Mirador Cº Vichadero | Alta → difícil | completa | tramos nuevos: e57-vic |
| 77 | Lº Frias → Glaciar Frias- Paso de las Nubes → Refugio Roca | Media → moderada | completa | usa tramos que ya existían |
| 78 | Lº Frias → Paso de las Nubes → Pampa Linda | Media → moderada | completa | usa tramos que ya existían |
| 80 | Brazo Tristeza → Lº Frey | Media → moderada | no trazable | BTR → LFR: sin punto de enganche en OSM |
| 81 | Isla Victoria → Piedras Blancas | Baja → fácil | completa | tramos nuevos: pbl-e41, iva-e41 |
| 82 | Isla Victoria → Pampita Suiza → Totoras | Baja → fácil | completa | tramos nuevos: iva-e41, e41-tot |
| 83 | Isla Victoria → Aserradero Viejo → Antepuerto | Baja → fácil | no trazable | no está en OSM: Antepuerto |
| 84 | Isla Victoria → Puerto Oscuro → Antepuerto | Baja → fácil | no trazable | no está en OSM: Puerto Oscuro, Antepuerto |
| 85 | Isla Victoria → Chacra de Esparza → Puerto Guerrero | Baja → fácil | no trazable | no está en OSM: Chacra de Esparza, Puerto Guerrero |
| 86 | Isla Victoria → Punta Sur | Media → moderada | no trazable | Puerto Anchorena → PSU: sin punto de enganche en OSM |
| 87 | Isla Victoria → Piedras Blancas- Turbina- Lavallol → Puerto Radal | Alta → difícil | parcial | tramos nuevos: pbl-e41, iva-e41; no está en OSM: Puerto Radal |
| 88 | Isla Victoria → Puerto Pampa | Media → moderada | no trazable | no está en OSM: Puerto Pampa |
| 89 | Isla Victoria → Puerto Pampa → Laguna Pescado | Alta → difícil | no trazable | no está en OSM: Puerto Pampa, Laguna Pescado |
| 90 | Circuito Chico → Refugio López- Refugio Italia (laguna Negra)- Arroyo Goye → Colonia Suiza | Alta → difícil | completa | usa tramos que ya existían |
| 91 | Circuito Chico → Refugio López- Ref. Italia (laguna Negra)- Laguna C.A.B.- Laguna Creton- Laguna Jujuy- Laguna Ilon → Pampa Linda | Alta → difícil | completa | usa tramos que ya existían |
| 92 | Circuito Chico → Refugio López- Ref. Italia (Laguna Negra)- Laguna C.A.B.- Laguna Creton- Laguna Azul → Los Césares | Alta → difícil | completa | usa tramos que ya existían |
| 100 | Circuito Chico → Refugio López → Bahía López | Alta → difícil | completa | usa tramos que ya existían |
| 101 | Aº Goye → Rancho Manolo → Refugio Italia (Laguna Negra) | Media → moderada | completa | usa tramos que ya existían |
| 102 | Aº Goye → Refugio Italia (laguna Negra)- Refugio López → Bahía López | Alta → difícil | completa | usa tramos que ya existían |
| 103 | Aº Goye → Refugio Italia (laguna Negra)- Refugio López → Aº López-Circuito Chico | Alta → difícil | completa | usa tramos que ya existían |
| 104 | Aº Goye → Refugio Italia (laguna Negra)- Laguna CAB- Laguna Creton- Laguna Azul → Los Césares | Alta → difícil | completa | usa tramos que ya existían |
| 106 | Aº Goye → Refugio Italia (laguna Negra)- Laguna CAB- Laguna Creton- Laguna Jujuy- Laguna Ilon → Pampa Linda | Alta → difícil | completa | usa tramos que ya existían |
| 113 | Ídem → Palotinos-Cº López-Refugio López → Aº López | Alta → difícil | completa | usa tramos que ya existían |
| 114 | Ídem → Palotinos-Desvío Cº López- Ref. Italia (laguna Negra)- Aº Goye → Colonia Suiza | Alta → difícil | completa | usa tramos que ya existían |
| 115 | Ídem → Palotinos- Desvío Ref. López- Ref. Italia (laguna Negra)- Laguna CAB- Laguna Creton- Laguna Jujuy- Laguna Ilon → Pampa Linda | Alta → difícil | completa | usa tramos que ya existían |
| 116 | Ídem → Palotinos- Desvío Ref. López- Ref. Italia (laguna Negra)- Laguna CAB- Laguna Creton- Laguna Azul → Los Césares | Alta → difícil | completa | usa tramos que ya existían |
| 124 | Tronador → La Almohadilla → Refugio Meilling | Media → moderada | completa | usa tramos que ya existían |
| 125 | Tronador → Paso de Las Nubes → Refugio Roca | Media → moderada | completa | usa tramos que ya existían |
| 126 | Tronador → Refugio Roca → Puerto Frias | Media → moderada | completa | usa tramos que ya existían |
| 128 | Tronador → Laguna Ilon → Laguna Ilon - Mirada del Doctor | Media → moderada | completa | tramos nuevos: e48-mdo |
| 129 | Tronador → Laguna Ilon - Mirada del Doctor - Paso la Marca → Refugio Roca | Alta → difícil | parcial | tramos nuevos: e48-mdo; Mirada del Doctor → Refugio Roca: falta un lugar intermedio; no está en OSM: Paso la Marca |
| 130 | Tronador → Laguna Ilon- Laguna Azul → Los Césares | Alta → difícil | completa | usa tramos que ya existían |
| 131 | Tronador → Laguna Ilon- Laguna Azul- Laguna Cretton- Laguna C.A.B.- Ref. Italia (Laguna Negra) → Colonia Suiza | Alta → difícil | completa | usa tramos que ya existían |
| 132 | Tronador → Laguna Ilon- Laguna Azul- Laguna Cretton- Laguna C.A.B.- Refugio López → Aº López-Circuito Chico | Alta → difícil | completa | usa tramos que ya existían |
| 133 | Tronador → Mallín Chileno → Refugio Viejo (Tronador) | Alta → difícil | completa | usa tramos que ya existían |
| 134 | Tronador → Paso Vuriloches (límite) | Media → moderada | completa | tramos nuevos: vur-e68 |
| 135 | Tronador → Cerro Volcánico | Alta → difícil | completa | tramos nuevos: e09-ros, ros-vol |
| 136 | Tronador → Laguna Rosada | Alta → difícil | completa | tramos nuevos: e09-ros |
| 137 | Tronador → Casa de Té "Los Ventisqueros" → Piedra Pérez | Alta → difícil | completa | tramos nuevos: cte-ppe |
| 139 | Tronador → Glaciar Alerce | Alta → difícil | completa | tramos nuevos: gal-e14 |
| 140 | Tronador → Saltillo de las Nalcas | Baja → fácil | completa | usa tramos que ya existían |
| 141 | Tronador → Garganta del Diablo | Baja → fácil | completa | tramos nuevos: cte-gdi |
| 142 | Tronador → Laguna Ilon- Laguna Azul- Laguna C.A.B.- Refugio López- Palotinos → Bahía López | Alta → difícil | completa | usa tramos que ya existían |
| 150 | Tronador → Laguna Cauquenes | Alta → difícil | completa | usa tramos que ya existían |
| 151 | Tronador → Mirador del Valle | Media → moderada | completa | tramos nuevos: e15-mva |
| 152 | Tronador → Glaciar Castaño Overa | Media → moderada | completa | tramos nuevos: e59-gco |
| 153 | "El Tambo" → Refugio San Martin (Jakob) (Huella Andina) | Media → moderada | completa | usa tramos que ya existían |
| 154 | "El Tambo" → Refugio San Martín (laguna Jakob)- Aº Rucaco- Refugio Frey → Secc. Gutiérrez | Alta → difícil | completa | usa tramos que ya existían |
| 155 | "El Tambo" → Refugio San Martín (laguna Jakob)- Aº Rucaco- Refugio Frey- Aº Van Titter → Cabecera sur Lago Gutiérrez | Alta → difícil | completa | usa tramos que ya existían |
| 156 | "El Tambo" → Refugio San Martín (laguna Jakob)- Aº Rucaco- Refugio Frey- Aº Van Titter → Catedral (Punta Princesa) | Alta → difícil | completa | usa tramos que ya existían |
| 157 | "El Tambo" → Refugio San Martín (laguna Jakob)- Aº Rucaco- Punta Princesa → Catedral | Alta → difícil | completa | tramos nuevos: pri-e47 |
| 161 | "El Tambo" → Refugio San Martín (laguna Jakob)- Aº Fresco → Cabecera norte Lago Mascardi | Alta → difícil | parcial | Refugio San Martín → Cabecera norte Mascardi: OSM solo lo une pasando por Refugio Frey |
| 162 | "El Tambo" → Refugio San Martín (laguna Jakob)- Aº Casalata → Los Césares (Huella Andina) | Alta → difícil | completa | usa tramos que ya existían |
| 164 | Brazo Tronador Lago Mascardi → Cascada Los Césares | Baja → fácil | completa | tramos nuevos: e39-e66, e39-clc, ces-e67 |
| 165 | Brazo Tronador Lago Mascardi → Cascada Los Césares → Laguna Los Césares | Media → moderada | completa | tramos nuevos: llc-e39, e39-e66, e39-clc, ces-e67 |
| 166 | Brazo Tronador Lago Mascardi → Cº Diego Flores de León | Media → moderada | no trazable | no está en OSM: Cº Diego Flores de León |
| 167 | Brazo Tronador Lago Mascardi → Cº Diego Flores de León → Los Rápidos | Media → moderada | no trazable | Los Césares → RAP: falta un lugar intermedio; no está en OSM: Cº Diego Flores de León |
| 168 | Brazo Tronador Lago Mascardi → Pasarela "Manolo Puente" → Los Pozones | Media → moderada | no trazable | no está en OSM: Los Pozones |
| 169 | Brazo Tronador Lago Mascardi → Pasarela "Manolo Puente" → Castillo Rojo | Media → moderada | no trazable | no está en OSM: Castillo Rojo |
| 170 | Brazo Tronador Lago Mascardi → Pasarela "Manolo Puente" → Laguna Azul | Media → moderada | completa | usa tramos que ya existían |
| 171 | Brazo Tronador Lago Mascardi → Laguna Azul-Laguna Ilon → Pampa Linda | Alta → difícil | completa | usa tramos que ya existían |
| 172 | Brazo Tronador Lago Mascardi → Laguna Azul- Laguna Cretton- Laguna C.A.B.- Refugio López → Aº López-Circuito Chico | Alta → difícil | completa | usa tramos que ya existían |
| 173 | Brazo Tronador Lago Mascardi → Laguna Azul- Laguna Cretton- Laguna C.A.B.- Ref Italia (laguna Negra)- Aº Goye → Colonia Suiza | Alta → difícil | completa | usa tramos que ya existían |
| 174 | Brazo Tronador Lago Mascardi → Laguna Azul- Laguna Cretton- Laguna C.A.B.- Ref. López x Palotinos → Bahía López | Alta → difícil | completa | usa tramos que ya existían |
| 175 | Brazo Tronador Lago Mascardi → Aº Casalata - Refugio San Martín (laguna Jakob)- bajada x Aº Fresco → Cabecera norte lago Mascardi | Alta → difícil | parcial | Refugio San Martín → Cabecera norte Mascardi: OSM solo lo une pasando por Refugio Frey |
| 176 | Brazo Tronador Lago Mascardi → Aº Casalata - Refugio San Martín (laguna Jakob)- Ref. Frey- Aº Van Titter- Playa Muñoz → Cabecera sur lago Gutiérrez | Alta → difícil | completa | usa tramos que ya existían |
| 177 | Brazo Tronador Lago Mascardi → Aº Casalata - Refugio San Martín (laguna Jakob)- Ref. Frey- Aº Van Titter- Catedral → Catedral (Estacionamiento) | Alta → difícil | completa | usa tramos que ya existían |
| 178 | Brazo Tronador Lago Mascardi → Aº Casalata - Refugio San Martín (laguna Jakob), Ref. Frey, Punta Princesa → Catedral (Punta Princesa) | Alta → difícil | completa | usa tramos que ya existían |
| 179 | Brazo Tronador Lago Mascardi → Aº Casalata -Refugio San Martín (laguna Jakob)-Ref. Frey- Aº Van Titter → Seccional Gutiérrez | Alta → difícil | completa | usa tramos que ya existían |
| 183 | Brazo Tronador Lago Mascardi → Aº Casalata - Refugio San Martín (laguna Jakob)- Aº Casa de Piedra → Tambo de Baez (Huella Andina) | Alta → difícil | completa | usa tramos que ya existían |
| 184 | Brazo Tronador Lago Mascardi → Laguna Llum → Cabecera norte lago Mascardi | Alta → difícil | completa | tramos nuevos: llu-e19, llu-leo, e40-mai, e58-leo |
| 185 | Seccional Lago Roca → Cascada Los Alerces | Baja → fácil | completa | usa tramos que ya existían |
| 186 | Seccional Lago Roca → Lago Fonck | Baja → fácil | no trazable | SLR → FON: sin punto de enganche en OSM |
| 187 | Pasarela Barria → Playa Ninva | Baja → fácil | sin datos | no está en OSM: Pasarela Barría, Playa Ninva |
| 188 | Rº Villegas y ruta 40 → Población Huenchupan → Lago Steffen (Huella Andina) | Media → moderada | completa | tramos nuevos: e29-ste |
| 189 | Población Martínez → Brazo Machete | Media → moderada | no trazable | Población Martínez → BMA: sin punto de enganche en OSM |
| 190 | Desemboque Rº Machete → Lº Gallardo | Media → moderada | sin datos | no está en OSM: Desemboque Rº Machete, Lago Gallardo |
| 191 | Ruta 231 km 7,5 → Lº Aroncohue | Media → moderada | sin datos | no está en OSM: Ruta 231 km 7,5, Lago Aroncohue |
| 192 | Ruta 231 km 4,5 → Aguada del Burro | Baja → fácil | completa | tramos nuevos: agu-agb |
| 193 | Arroyo La Rana → Camino viejo → Ruta 7 Lagos | Media → moderada | completa | tramos nuevos: ran-r7l |
| 194 | Ruta 231- km 2,5 → Coihue "El Abuelo" | Media → moderada | completa | tramos nuevos: coi-e33, e33-abu |
| 195 | Ruta 231- km 2,5 → Brazo Ultima Esperanza | Baja → fácil | completa | tramos nuevos: ues-e33, e33-abu |
| 196 | Calle Cacique Antriao Ejido VLA → Cascada Inacayal → Cajón Negro | Media → moderada | completa | tramos nuevos: fbe-ina, fbe-cne, ina-ant |
| 197 | Calle Cacique Antriao → Filo Falso Belvedere | Alta → difícil | completa | tramos nuevos: fbe-ina, ina-ant |
| 198 | Ruta 231, km 6,5 → Cerro Panguinal | Media → moderada | completa | tramos nuevos: cpa-pan |
| 199 | Ruta 231- Camping Rincón → Península Panguinal | Media → moderada | sin datos | no está en OSM: Camping Rincón, Península Panguinal |
| 201 | Ruta 231- km.28 → Cascada Dora y Santa Ana | Alta → difícil | completa | tramos nuevos: csa-e17, e17-dsa, e17-cdo |
| 202 | Cajón Negro → Cº Buol conexión Huella Andina → Traful (Aº Cataratas) (Huella Andina) | Alta → difícil | completa | tramos nuevos: cne-buo, tla-e22, e22-buo, tla-act |
| 203 | Desde la base Cerro Bayo → Aº Ujenjo-Aº Cataratas-Aº Malalco → Traful (Aº Cataratas) (Huella Andina) | Media → moderada | completa | tramos nuevos: tla-e22, bay-e31, e22-e31, tla-act |
| 204 | Itsmo Quetrihue → Miradores Pen. Quetrihue | Media → moderada | completa | tramos nuevos: mqu-e32, e32-ist |
| 205 | Itsmo Quetrihue → Península Quetrihue → Bosque de Arrayanes (Huella Andina) | Media → moderada | completa | tramos nuevos: arr-e32, e32-ist |
| 206 | Ruta 40- Chacras del Manzano → Cerro O' Connor | Media → moderada | completa | tramos nuevos: oco-oca |
| 207 | Valle Rio Bonito → Valle del Aº Voruco | Media → moderada | completa | tramos nuevos: rbv-e12, e34-e12, vor-e35 |
| 208 | Ruta 40 → Valle del Rio Bonito | Media → moderada | completa | tramos nuevos: rbv-e12, e12-rba |
| 209 | Ruta 40 Aº Estacada → Valle Aº La Estacada | Media → moderada | sin datos | no está en OSM: Ruta 40 Aº Estacada, Valle Aº La Estacada |
| 210 | None → Población Martínez | Media → moderada | no trazable | BRI → Población Martínez: sin sendero continuo en OSM |
| 211 | Población Martinez → Cº Dormilón | Media → moderada | completa | tramos nuevos: dor-pma |
| 212 | Población Chabol → Cº Colorado | Alta → difícil | completa | tramos nuevos: cco-chb |
| 213 | Ruta 40, Aº Ragintuco Población Avila → Mallín de las Nieblas | Alta → difícil | completa | tramos nuevos: mnb-rag |
| 214 | Ruta 40- Población Avila → Mallín de las Nieblas/ Arroyo Minero → Traful | Alta → difícil | completa | tramos nuevos: trf-mnb, mnb-rag |
| 216 | Ruta 40- Rio Huemul → Cerro Centinela | Media → moderada | completa | tramos nuevos: hua-cen |
| 217 | None → Valle del Mallín | Alta → difícil | sin datos | no está en OSM: Cuyín Manzano, Valle del Mallín |
| 218 | None → Cº Bayo - Cº Blanco | Alta → difícil | sin datos | no está en OSM: Cuyín Manzano, Cº Bayo y Cº Blanco |
| 219 | Secc.Lº Espejo → Lº Correntoso | Baja → fácil | completa | tramos nuevos: lco-sle |
| 220 | Mirador Lº Espejo → Las Lagunas | Baja → fácil | completa | tramos nuevos: lag-mle |
| 221 | Lº Espejo Chico → Cº La Mona | Alta → difícil | completa | tramos nuevos: mon-lec |
| 222 | Lº Espejo Chico → Cabaña Piuken | Alta → difícil | no trazable | no está en OSM: Cabaña Piuken |
| 224 | Ruta 40 Norte- 5 km antes Seccional Villarino → Cascada Ñivinco | Media → moderada | completa | tramos nuevos: nia-niv |
| 225 | Ruta 40 Norte- Lago Villarino → Cº Falkner | Alta → difícil | completa | tramos nuevos: fal-faa |
| 226 | Villa Traful → Mirador "El Naso" → Cº Negro | Alta → difícil | completa | tramos nuevos: e05-e06, e07-nas, nas-ne2 |
| 227a | Aº Cataratas → "Tapera de Lagos" → Villa la Angostura (Huella Andina) | Media → moderada | completa | tramos nuevos: tla-e22, e22-e31, e43-e31, e51-e52, tla-act |
| 227b | Aº Cataratas → Sendero accesible → Aº Cataratas | Baja → fácil | no trazable | no está en OSM: Sendero accesible |
| 229 | Margen norte Lº Traful → Lagunas Las Mellizas | Media → moderada | completa | tramos nuevos: mnt-mel |
