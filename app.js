const W=D.W,H=D.H;
const G={g0:{l:'Sin dato',s:'Sin dato'},g1:{l:'Fácil',s:'Fácil'},g2:{l:'Moderada',s:'Moderada'},g3:{l:'Difícil',s:'Difícil'}};

/* ================= BASE DE DATOS: LECTURA Y CONTROL =================
   Lee datos/*.js, revisa cada registro y lo traduce a la forma interna.
   Todo problema se junta en AVISOS y se muestra arriba del panel.        */
const DIF={facil:'g1',moderada:'g2',dificil:'g3',sin_dato:'g0'};
const TIPO={acceso:'acc',refugio:'ref',paso:'pto',laguna:'lag',cumbre:'cum'};
const LADO={derecha:'start',izquierda:'end',centro:'middle'};
const REGISTRO=['obligatorio','a_confirmar','dificultad_baja','no_requiere'];
const AVISOS=[...(window.__errores||[])];
const aviso=(donde,msg)=>AVISOS.push([donde,msg]);
const DB_T=typeof TRAMOS!=='undefined'?TRAMOS:(aviso('datos/tramos.js','No se pudo leer el archivo. No se muestra ningún tramo.'),[]);
const DB_P=typeof PUNTOS!=='undefined'?PUNTOS:(aviso('datos/puntos.js','No se pudo leer el archivo. No se muestra ningún punto ni tramo.'),[]);
const DB_V=typeof TRAVESIAS!=='undefined'?TRAVESIAS:(aviso('datos/travesias.js','No se pudo leer el archivo. No se muestran travesías.'),[]);

/* tipo de cada campo: t texto, n número, b sí/no, l lista, o una lista de valores permitidos */
const CAMPOS={
  tramo:{id:'t',desde:'t',hasta:'t',nombre:'t',via:'t',ida_y_vuelta:'b',
    dificultad:Object.keys(DIF),nota_dificultad:'t',sendas_apn:'l',sendas_apn_total:'n',
    fuera_de_apn:'b',administra:'t',registro:REGISTRO,huella_andina:'b',
    descripcion:'t',descripcion_verificada:'b',agua:'t',vadeos:'t',sombra:'t',tiempo_medido:'t'},
  punto:{id:'t',nombre:'t',nombre_en_tramos:'t',detalle:'t',tipo:Object.keys(TIPO),descripcion:'t',
    etiqueta_x:'n',etiqueta_y:'n',etiqueta_lado:Object.keys(LADO),solo_con_zoom:'b'},
  refugio:{capacidad:'t',reserva:'t',que_se_compra:'t',agua:'t',acampe:'t',si_esta_lleno:'t'},
  acceso:{colectivo:'t',parada:'t',frecuencia:'t',ultimo_regreso:'t',estacionamiento:'t'},
  travesia:{id:'t',nombre:'t',resumen:'t',senda_apn:'t',tramos:'l',dias:'t',donde_dormir:'t',salidas_de_escape:'t',como_volver:'t'}
};
const VACIO={t:'',n:0,b:false,l:[]};
function revisar(r,campos,donde){
  if(!r||typeof r!=='object'){aviso(donde,'El registro no está entre llaves { }.');return false}
  for(const k in campos){
    const tp=campos[k];
    if(!(k in r)){aviso(donde,`Falta el campo «${k}».`);r[k]=Array.isArray(tp)?tp[0]:VACIO[tp];continue}
    const v=r[k];
    if(Array.isArray(tp)){ if(!tp.includes(v)){aviso(donde,`«${k}» vale '${v}', y solo puede ser: ${tp.map(x=>`'${x}'`).join(', ')}.`);r[k]=tp[0]} }
    else if(tp==='t'&&typeof v!=='string'){aviso(donde,`«${k}» tiene que ser un texto entre comillas.`);r[k]=String(v??'')}
    else if(tp==='n'&&typeof v!=='number'){aviso(donde,`«${k}» tiene que ser un número, sin comillas.`);r[k]=Number(v)||0}
    else if(tp==='b'&&typeof v!=='boolean'){aviso(donde,`«${k}» tiene que ser true o false, sin comillas.`);r[k]=!!v}
    else if(tp==='l'&&!Array.isArray(v)){aviso(donde,`«${k}» tiene que ser una lista entre corchetes [ ].`);r[k]=[]}
  }
  for(const k in r) if(!(k in campos)) aviso(donde,`Campo desconocido «${k}». ¿Está mal escrito?`);
  return true;
}
const dup=new Set();
function idUnico(id,donde){if(dup.has(donde+id)){aviso(donde,`El id '${id}' está repetido. Se usa solo el primero.`);return false}dup.add(donde+id);return true}

const NM={};
DB_P.forEach((r,i)=>{
  const donde=`Punto ${r&&r.id?`'${r.id}'`:'nº '+(i+1)}`;
  const tp=r&&r.tipo; const extra=tp==='refugio'?CAMPOS.refugio:tp==='acceso'?CAMPOS.acceso:{};
  if(!revisar(r,{...CAMPOS.punto,...extra},donde)||!idUnico(r.id,'P'))return;
  if(!D.N[r.id]){aviso(donde,'No tiene posición en el mapa (geo/geometria.js). No se muestra.');return}
  NM[r.id]={n:r.nombre,k:r.nombre_en_tramos||'',s:r.detalle,t:TIPO[r.tipo],lx:r.etiqueta_x,ly:r.etiqueta_y,an:LADO[r.etiqueta_lado],min:r.solo_con_zoom?2:0,db:r};
});
const T=[];
DB_T.forEach((r,i)=>{
  const donde=`Tramo ${r&&r.id?`'${r.id}'`:'nº '+(i+1)}`;
  if(!revisar(r,CAMPOS.tramo,donde)||!idUnico(r.id,'T'))return;
  if(!D.T[r.id]){aviso(donde,'No tiene traza dibujada en geo/geometria.js. No se muestra.');return}
  for(const k of ['desde','hasta']) if(!NM[r[k]]){aviso(donde,`«${k}» es '${r[k]}', que no es un punto de datos/puntos.js. No se muestra.`);return}
  T.push({id:r.id,a:r.desde,b:r.hasta,nm:r.nombre,via:r.via,rt:r.ida_y_vuelta,g:DIF[r.dificultad],
    nota:r.nota_dificultad,sen:r.sendas_apn,nsen:Math.max(r.sendas_apn_total,r.sendas_apn.length),ed:r.fuera_de_apn,muni:r.administra,
    reg:r.registro,ha:r.huella_andina,d:r.descripcion,db:r});
});
const tIds=new Set(T.map(t=>t.id));
const TV=[];
DB_V.forEach((r,i)=>{
  if(typeof TRAMOS==='undefined')return;
  const donde=`Travesía ${r&&r.id?`'${r.id}'`:'nº '+(i+1)}`;
  if(!revisar(r,CAMPOS.travesia,donde)||!idUnico(r.id,'V'))return;
  const falta=r.tramos.filter(x=>!tIds.has(x));
  if(falta.length){aviso(donde,`Usa tramos que no existen o no se muestran: ${falta.join(', ')}. No se muestra.`);return}
  if(!r.tramos.length){aviso(donde,'No tiene tramos. No se muestra.');return}
  TV.push({id:r.id,n:r.nombre,s:r.resumen,sen:r.senda_apn,t:r.tramos,db:r});
});
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function avisos(){
  const box=document.getElementById('avisos'); if(!AVISOS.length){box.hidden=true;return}
  box.hidden=false;
  box.innerHTML=`<details${AVISOS.length<=3?' open':''}><summary>${AVISOS.length===1?'Hay 1 problema':`Hay ${AVISOS.length} problemas`} en la base de datos</summary><ul>${AVISOS.map(([d,m])=>`<li><b>${esc(d)}</b>: ${esc(m)}</li>`).join('')}</ul></details>`;
}

/* ================= ESTADO ================= */
let sel=null, rev=false, show={g0:true,g1:true,g2:true,g3:true};
const $=s=>document.querySelector(s);
const svg=$('#map'), pin=$('#pin');
const NS='http://www.w3.org/2000/svg';
const el=(t,a={},p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e};
T.forEach(t=>Object.assign(t,D.T[t.id]||{}));
const N={}; for(const k in NM){ if(D.N[k]) N[k]={...NM[k],...D.N[k]}; }
const tById=Object.fromEntries(T.map(t=>[t.id,t]));
const worst=a=>a.reduce((m,g)=>g>m?g:m,'g0');
const tvG=tv=>worst(tv.t.map(id=>tById[id].g));
const kn=n=>n.k||n.n;
const tName=t=>t.nm||`${kn(N[t.a])} a ${kn(N[t.b])}`;
const f1=x=>String(x.toFixed(1)).replace('.',',');
const num=x=>String(Math.round(x));
function hours(km,up,dn){const h=km/4,v=up/400+dn/800;return Math.max(h,v)+Math.min(h,v)/2}
function hTxt(t){const r=x=>Math.max(.5,Math.round(x*2)/2);const a=r(t*.85),b=r(t*1.15);const f=x=>String(x).replace('.5',' y media').replace(/^0 y media/,'media');return a===b?`${f(a)} h`:`${f(a)} a ${f(b)} h`}
function orient(v){const ts=v.t.map(i=>tById[i]);const out=[];let cur=null;
  ts.forEach((t,i)=>{if(cur===null){const nx=ts[i+1];cur=(nx&&(t.a===nx.a||t.a===nx.b))?t.b:t.a}
    const to=t.a===cur?t.b:t.a;out.push([t,cur,to]);cur=to});return out}
function swatch(g,w=30){const dash={g0:'',g1:'',g2:'9 5',g3:'2 6'}[g];
  return `<svg class="sw" width="${w}" height="10" viewBox="0 0 ${w} 10" aria-hidden="true"><line x1="3" y1="5" x2="${w-3}" y2="5" stroke="var(--${g})" stroke-width="4.2" stroke-linecap="round" ${dash?`stroke-dasharray="${dash}"`:''}/></svg>`}

/* ================= MAPA ================= */
function lab(parent,cls,x,y){return el('g',{class:cls,style:`transform:translate(${x}px,${y}px) scale(var(--u))`},parent)}
function build(){
  const root=el('g',{},svg);
  el('image',{href:BASE,x:0,y:0,width:W,height:H,preserveAspectRatio:'none'},root);
  const C=el('g',{},root);
  [['shore','shore'],['stream','stream'],['river','river'],['lifts','lifts'],['road2','road2'],['road1','road1c'],['road1','road1'],['tracks','tracks'],['trails','trails']]
    .forEach(([k,c])=>el('path',{d:D.ctx[k],class:'cx '+c},C));
  const E=el('g',{id:'edges'},root), LB=el('g',{},root), ND=el('g',{id:'nodes'},root);
  T.forEach(tr=>{
    const g=el('g',{class:'e','data-id':tr.id,tabindex:0,role:'button','aria-label':'Tramo '+tName(tr)},E);
    el('path',{d:tr.d,class:'ecase'},g);el('path',{d:tr.d,class:'eline'},g);el('path',{d:tr.d,class:'ehit'},g);
    g.addEventListener('click',ev=>{if(moved)return;ev.stopPropagation();go('t',tr.id)});
    g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();go('t',tr.id)}});
  });
  const nodeNames=new Set(Object.values(N).map(n=>n.n));
  D.L.forEach(l=>{
    if(l.t==='lake'&&nodeNames.has(l.n))return;
    const g=lab(LB,`lb ${l.t} lv${l.lv}`,l.x,l.y);
    if(l.t==='peak'){el('path',{d:'M0,-5 L4.5,3.5 L-4.5,3.5 Z'},g);const t=el('text',{x:7,y:3},g);t.textContent=l.n;
      if(l.e){const e=el('text',{x:7,y:15,class:'el'},g);e.textContent=num(l.e)+' m'}}
    else{const t=el('text',{x:0,y:4,'text-anchor':'middle'},g);t.textContent=l.n}
  });
  for(const id in N){
    const n=N[id]; const g=el('g',{class:'n '+n.t+(n.min?' m2':''),'data-id':id,tabindex:0,role:'button','aria-label':n.n,style:`transform:translate(${n.x}px,${n.y}px) scale(var(--u))`},ND);
    el('circle',{class:'halo',cx:0,cy:0,r:13},g);
    if(n.t==='ref') el('rect',{class:'gl',x:-6,y:-6,width:12,height:12},g);
    else if(n.t==='acc') el('circle',{class:'gl',cx:0,cy:0,r:5.6},g);
    else if(n.t==='lag') el('circle',{class:'gl',cx:0,cy:0,r:5},g);
    else if(n.t==='cum') el('path',{class:'gl',d:'M0,-7.5 L7.5,5.5 L-7.5,5.5 Z'},g);
    else el('circle',{class:'gl',cx:0,cy:0,r:3.8},g);
    const tx=el('text',{x:n.lx,y:n.ly,'text-anchor':n.an||'start'},g);tx.textContent=n.n;
    if(n.s){const sx=el('text',{class:'sub',x:n.lx,y:n.ly+13,'text-anchor':n.an||'start'},g);sx.textContent=n.s}
    g.addEventListener('click',ev=>{if(moved)return;ev.stopPropagation();go('n',id)});
    g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();go('n',id)}});
  }
}
function paint(){
  let hi=null;
  if(sel&&sel[0]==='t')hi=new Set([sel[1]]);
  if(sel&&sel[0]==='v')hi=new Set(TV.find(v=>v.id===sel[1]).t);
  if(sel&&sel[0]==='n')hi=new Set(T.filter(t=>t.a===sel[1]||t.b===sel[1]).map(t=>t.id));
  const hn=new Set(); if(hi)T.forEach(t=>{if(hi.has(t.id)){hn.add(t.a);hn.add(t.b)}});
  svg.querySelectorAll('.e').forEach(g=>{
    const t=tById[g.dataset.id], gg=t.g;
    g.setAttribute('class','e '+gg+(t.src==='none'?' none':'')+((hi&&!hi.has(t.id))||!show[gg]?' dim':'')+(hi&&hi.has(t.id)&&sel[0]!=='n'?' sel':''));
  });
  svg.querySelectorAll('.n').forEach(g=>{const id=g.dataset.id;
    g.classList.toggle('dim',!!hi&&!hn.has(id)&&!(sel[0]==='n'&&sel[1]===id));
    g.classList.toggle('sel',!!sel&&sel[0]==='n'&&sel[1]===id)});
  const cnt={g0:0,g1:0,g2:0,g3:0};T.forEach(t=>cnt[t.g]++);
  $('#chips').innerHTML=['g1','g2','g3','g0'].filter(g=>cnt[g]).map(g=>`<button class="chip" data-g="${g}" aria-pressed="${show[g]}">${swatch(g,26)}<span>${G[g].s} <b>${cnt[g]}</b></span></button>`).join('');
  $('#chips').querySelectorAll('.chip').forEach(b=>b.onclick=()=>{show[b.dataset.g]=!show[b.dataset.g];paint()});
}

/* ================= PANEL ================= */
function difBox(g,note){
  return `<div class="guia"><div class="gseason on">${swatch(g)}<span class="lab">${G[g].l}</span></div>${note?`<div class="gnote">${note}</div>`:''}</div>`}
const INFO='<p class="fine" style="margin-top:14px">Normas para cuidar el lugar y teléfonos de emergencia: <a href="info-utiles.html">Info útiles</a>.</p>';
function regBlock(reg='obligatorio'){
  if(reg==='no_requiere') return `<div class="row"><span class="k">Registro de trekking</span><span class="v">No hace falta</span></div>`;
  if(reg==='a_confirmar'||reg==='dificultad_baja') return `<div class="row"><span class="k">Registro de trekking</span><span class="v soft">a confirmar <b class="mk pe">○</b></span></div>${reg==='dificultad_baja'?'<p class="pend" style="font-size:15px;margin-top:4px">Los senderos de dificultad baja están exceptuados; falta el anexo de clasificación para confirmarlo.</p>':''}`;
  return `<div class="row"><span class="k">Registro de trekking</span><span class="v">Obligatorio <b class="mk of">■</b></span></div><p class="reg" style="margin-top:4px"><a href="https://www.nahuelhuapi.gov.ar/trekking-y-actividades-de-montana/" target="_blank" rel="noopener">Hacer el registro en la web del parque</a></p>`}
function profSvg(z,km,label){
  const lo=Math.min(...z),hi=Math.max(...z),w=560,h=120,x0=14,x1=546,y0=24,y1=100;
  const pts=z.map((v,i)=>`${(x0+(x1-x0)*i/(z.length-1)).toFixed(1)},${(y1-(y1-y0)*(v-lo)/Math.max(1,hi-lo)).toFixed(1)}`).join(' ');
  return `<svg class="prof" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
    <line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="var(--hair)"/><line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="var(--hair)" stroke-dasharray="2 4"/>
    <polygon points="${x0},${y1} ${pts} ${x1},${y1}" fill="var(--g0)" opacity=".14"/><polyline points="${pts}" fill="none" stroke="var(--g0)" stroke-width="2.6" stroke-linejoin="round"/>
    <text x="${x0}" y="17" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-size="19" fill="#5C6E77">${num(hi)} m</text>
    <text x="${x0}" y="${h-4}" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-size="19" fill="#5C6E77">${num(lo)} m</text>
    <text x="${x1}" y="${h-4}" text-anchor="end" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-size="19" fill="#5C6E77">${f1(km)} km</text></svg>`}
function bigNums(km,up,dn,t,med,medOtro){return `<div class="big"><div><b>${f1(km)} km</b><span>distancia</span></div><div><b>+${num(up)} m</b><span>subida</span></div><div><b>−${num(dn)} m</b><span>bajada</span></div></div>
  ${med?`<div class="row" style="margin-top:7px"><span class="k">Tiempo de marcha</span><span class="v">${esc(med)}</span></div>
  <p class="fine">Tiempo medido, sin paradas.</p>`
  :`<div class="row" style="margin-top:7px"><span class="k">Tiempo de marcha</span><span class="v">${hTxt(t)} <b class="mk pe">○</b></span></div>
  <p class="fine">Estimado por fórmula según distancia y desnivel, sin paradas.${medOtro?` En el otro sentido hay un tiempo medido: ${esc(medOtro)}.`:' No reemplaza un tiempo medido.'}</p>`}`}
function rows(pares,vacio){return pares.map(([k,v])=>`<div class="row"><span class="k">${k}</span>${v?`<span class="v">${esc(v)}</span>`:`<span class="v soft">${vacio} <b class="mk pe">○</b></span>`}</div>`).join('')}
function subt(t){return [t.via?'por '+esc(t.via):'',t.rt?'ida y vuelta':''].filter(Boolean).join(', ')}
function home(){
  const pend=T.filter(t=>t.src==='none').length;
  pin.innerHTML=`
  <p class="kind">Para empezar</p>
  <h1 class="t">Tocá un tramo o un refugio</h1>
  <p style="margin:10px 0 0">Cada línea de color es un tramo entre dos puntos, dibujado sobre su traza. El color dice la dificultad del tramo. Con los botones de arriba podés mostrar u ocultar cada dificultad.</p>
  <div class="blk"><h2>Cómo leer el mapa</h2>
    <div class="leg">
      ${swatch('g1',34)}<span>Fácil</span>
      ${swatch('g2',34)}<span>Moderada</span>
      ${swatch('g3',34)}<span>Difícil</span>
      <svg width="34" height="10" viewBox="0 0 34 10"><line x1="3" y1="5" x2="31" y2="5" stroke="#6B4A2B" stroke-width="1.6" stroke-dasharray="1.5 4" stroke-linecap="round"/></svg><span>Otros senderos, todavía sin ficha</span>
    </div>
    <p class="fine" style="margin-top:8px">Curvas de nivel cada 100 m, marcadas cada 500. Al acercar aparecen más cumbres y lagunas.</p>
  </div>
  <div class="blk"><h2>Travesías armadas con estos tramos</h2>
    <ul class="list">${TV.map(v=>`<li><button data-v="${v.id}"><span><span class="nm">${v.n}</span><span class="ds">${v.s}</span></span><span class="sws" title="Dificultad del tramo más exigente">${swatch(tvG(v))}</span></button></li>`).join('')}</ul>
  </div>
  <div class="blk"><h2>Qué tiene y qué no tiene esta versión</h2>
    <p>Tiene ${T.length} tramos sobre relieve real. Distancia, desnivel y perfil salen de la traza de OpenStreetMap y del modelo de alturas.</p>
    <p>La dificultad viene del Anexo I de la Disposición 150/19 del parque, temporada de noviembre a abril. Cada tramo toma la dificultad más baja de las sendas oficiales que lo recorren.</p>
    <p>Ninguna traza está verificada en el terreno todavía. Agua, vadeos, sombra y tiempos medidos siguen pendientes.</p>
    <p>Quedaron afuera las sendas oficiales que no tienen traza en OpenStreetMap, como las bajadas por el arroyo Fresco al lago Mascardi, el refugio Velco, el lago Fonck y la mayor parte de isla Victoria. La travesía glaciaria entre Meiling y Refugio Viejo figura como línea recta.</p>
  </div>
  <div class="blk"><h2>Antes de salir</h2><p>Las normas para cuidar el lugar y los teléfonos de emergencia están en <a href="info-utiles.html">Info útiles</a>.</p></div>`;
  pin.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>go('v',b.dataset.v));
}
function tramo(id){
  const t=tById[id], db=t.db;
  const A=rev?t.b:t.a,B=rev?t.a:t.b;
  const sen=t.sen.length?`<div class="sendas">${t.sen.map(s=>`<span>${s}</span>`).join('')}${t.nsen>t.sen.length?`<em>y ${t.nsen-t.sen.length} más</em>`:''}</div>`:'';
  const tvs=TV.filter(v=>v.t.includes(id));
  let geo='';
  if(t.src==='none'){
    geo=`<div class="blk"><h2>Recorrido</h2><span class="stamp no">Sin traza</span><p style="margin-top:7px">Es una ruta sobre glaciar que no tiene sendero marcado. La línea recta del mapa solo muestra que los dos refugios se conectan.</p></div>`;
  }else{
    const up=rev&&!t.rt?t.dn:t.up, dn=rev&&!t.rt?t.up:t.dn, z=rev&&!t.rt?[...t.prof].reverse():t.prof;
    geo=`<div class="blk"><h2><span>${t.rt?'Ida y vuelta':`De ${kn(N[A])} a ${kn(N[B])}`}</span>${t.rt?'':'<button id="rv">Ver al revés</button>'}</h2>
      ${bigNums(t.km,up,dn,hours(t.km,up,dn),(!rev||t.rt)?db.tiempo_medido:'',(rev&&!t.rt)?db.tiempo_medido:'')}
      <div style="margin-top:10px">${profSvg(z,t.km,'Perfil de altura del tramo')}</div>
      <div class="row" style="margin-top:6px"><span class="k">Altura mínima y máxima</span><span class="v">${num(t.zmin)} a ${num(t.zmax)} m</span></div>
      ${db.agua||db.vadeos||db.sombra?rows([['Agua',db.agua],['Vadeos',db.vadeos],['Sombra',db.sombra]],'a relevar')
        :`<div class="row"><span class="k">Agua, vadeos y sombra</span><span class="v soft">a relevar <b class="mk pe">○</b></span></div>`}
    </div>
    <div class="blk"><h2>Origen de la traza</h2>${t.src==='gpx'
      ?'<span class="stamp">Track de terceros, Wikiloc</span><p style="margin-top:7px">Distancia y desnivel medidos sobre el track. Todavía no cuenta como sendero verificado.</p>'
      :'<span class="stamp">OpenStreetMap, sin verificar</span><p style="margin-top:7px">La traza la cargaron voluntarios y puede tener errores o estar desactualizada. Se reemplaza cuando haya un track propio.</p>'}</div>`;
  }
  pin.innerHTML=`
  <button class="back" id="bk">Volver al inicio</button>
  <p class="kind">Tramo${t.ha?', parte de la Huella Andina':''}</p>
  <h1 class="t">${esc(tName(t))}</h1>
  ${subt(t)?`<p class="subt">${subt(t)}</p>`:''}
  <div class="blk"><h2>Dificultad</h2>${difBox(t.g, esc(t.nota)|| (t.ed?(t.muni?'Es '+esc(t.muni)+', no figura en el listado de la APN.':'No figura en el listado de la APN.'):''))}
    <div style="margin-top:9px">${regBlock(t.reg)}</div>
  </div>
  ${geo}
  <div class="blk"><h2>Cómo es</h2>${t.d?`<p>${esc(t.d)}</p>${db.descripcion_verificada?'':'<p class="pend" style="font-size:15px">Descripción provisoria, sin verificar en el terreno.</p>'}`:`<p class="pend">Pendiente de escribir.</p>`}</div>
  ${t.ed||!sen?'':`<div class="blk"><h2>Sendas oficiales que lo incluyen</h2>${sen}</div>`}
  ${tvs.length?`<div class="blk"><h2>Travesías que pasan por acá</h2><ul class="list">${tvs.map(v=>`<li><button data-v="${v.id}"><span><span class="nm">${v.n}</span><span class="ds">${v.s}</span></span><span class="sws">${swatch(tvG(v))}</span></button></li>`).join('')}</ul></div>`:''}
  ${INFO}`;
  wire(); const r=$('#rv'); if(r)r.onclick=()=>{rev=!rev;tramo(id)};
}
function nodo(id){
  const n=N[id], db=n.db; const ts=T.filter(t=>t.a===id||t.b===id);
  const kind={acc:'Acceso',ref:'Refugio',pto:'Punto de paso',lag:'Laguna',cum:'Cumbre'}[n.t];
  pin.innerHTML=`
  <button class="back" id="bk">Volver al inicio</button>
  <p class="kind">${kind}</p>
  <h1 class="t">${esc(n.n)}</h1>
  <p class="subt">${n.s&&!/\d/.test(n.s)?esc(n.s)+', ':''}${num(n.ele)} m</p>
  ${db.descripcion?`<div class="blk"><p>${esc(db.descripcion)}</p></div>`:''}
  ${n.t==='ref'?`<div class="blk"><h2>El refugio</h2>${[db.capacidad,db.reserva,db.que_se_compra,db.agua,db.acampe,db.si_esta_lleno].some(Boolean)
    ?rows([['Capacidad',db.capacidad],['Reserva',db.reserva],['Qué se puede comprar',db.que_se_compra],['Agua',db.agua],['Dónde se acampa',db.acampe],['Si llegás y está lleno',db.si_esta_lleno]],'a relevar')
    :'<p class="pend">Pendiente: capacidad, si hay que reservar, qué se puede comprar, agua, dónde se acampa y qué pasa si llegás y está lleno.</p>'}</div>`:''}
  ${n.t==='acc'?`<div class="blk"><h2>Cómo llegar</h2>${[db.colectivo,db.parada,db.frecuencia,db.ultimo_regreso,db.estacionamiento].some(Boolean)
    ?rows([['Colectivo',db.colectivo],['Parada',db.parada],['Frecuencia',db.frecuencia],['Último horario de vuelta',db.ultimo_regreso],['Dónde dejar el auto',db.estacionamiento]],'a relevar')
    :'<p class="pend">Pendiente: colectivo, parada, frecuencia, último horario de vuelta y dónde dejar el auto.</p>'}</div>`:''}
  <div class="blk"><h2>Tramos que salen de acá</h2>
    <ul class="list">${ts.map(t=>{const o=t.a===id?t.b:t.a;const up=t.a===id?t.up:t.dn;return `<li><button data-t="${t.id}" data-rev="${t.a===id?0:1}"><span><span class="nm">a ${kn(N[o])}</span><span class="ds">${t.src==='none'?'ruta glaciaria, sin traza':`${f1(t.km)} km, +${num(up)} m${t.via?', por '+esc(t.via):''}`}</span></span><span class="sws">${swatch(t.g)}</span></button></li>`}).join('')}</ul>
  </div>
  ${INFO}`;
  wire();
}
function travesia(id){
  const v=TV.find(x=>x.id===id); const g=tvG(v); const O=orient(v);
  let km=0,up=0,dn=0,z=[];
  O.forEach(([t,a])=>{if(t.src==='none')return;const f=t.a===a;km+=t.km;up+=f?t.up:t.dn;dn+=f?t.dn:t.up;const p=f?t.prof:[...t.prof].reverse();const k=Math.max(4,Math.round(t.km*4));for(let i=0;i<k;i++)z.push(p[Math.round(i*(p.length-1)/(k-1))])});
  const crit=v.t.map(i=>tById[i]).filter(t=>t.g===g);
  const note=crit.length===v.t.length?'Todos los tramos tienen esta dificultad.':`La define el tramo más exigente: ${crit.map(t=>esc(tName(t))).join(' y ')}.`;
  pin.innerHTML=`
  <button class="back" id="bk">Volver al inicio</button>
  <p class="kind">Travesía, senda oficial ${v.sen} <b class="mk of">■</b></p>
  <h1 class="t">${v.n}</h1>
  <p class="subt">${v.s}</p>
  <div class="blk"><h2>Dificultad</h2>${difBox(g,note)}<div style="margin-top:9px">${regBlock()}</div></div>
  <div class="blk"><h2>El recorrido completo</h2>${bigNums(km,up,dn,hours(km,up,dn))}<div style="margin-top:10px">${profSvg(z,km,'Perfil de altura de la travesía')}</div></div>
  <div class="blk"><h2>Tramos, en orden</h2>
    <ul class="list">${O.map(([t,a,b])=>{const f=t.a===a;return `<li><button data-t="${t.id}" data-rev="${f?0:1}"><span><span class="nm">${kn(N[a])} a ${kn(N[b])}</span><span class="ds">${t.src==='none'?'ruta glaciaria, sin traza':`${f1(t.km)} km, +${num(f?t.up:t.dn)} m, −${num(f?t.dn:t.up)} m`}</span></span><span class="sws">${swatch(t.g)}</span></button></li>`}).join('')}</ul>
  </div>
  <div class="blk"><h2>Lo propio de la travesía</h2>
    ${rows([['Días',v.db.dias],['Dónde se duerme',v.db.donde_dormir]],'a definir')}
    ${rows([['Salidas de escape',v.db.salidas_de_escape],['Cómo volver',v.db.como_volver]],'a relevar')}
  </div>
  ${INFO}`;
  wire();
}
function wire(){
  const b=$('#bk'); if(b)b.onclick=()=>go(null);
  pin.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{rev=b.dataset.rev==='1';go('t',b.dataset.t,true)});
  pin.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>go('v',b.dataset.v));
}
function go(k,id,keepRev){
  if(!keepRev)rev=false;
  sel=k?[k,id]:null;
  if(!k)home(); else if(k==='t')tramo(id); else if(k==='n')nodo(id); else travesia(id);
  paint(); $('#panel').scrollTop=0;
  if(k&&window.matchMedia('(max-width:880px)').matches) $('#panel').scrollIntoView({behavior:'smooth',block:'start'});
}

/* ================= PAN / ZOOM ================= */
let vb={x:0,y:0,w:W,h:H}, moved=false;
function fit(){vb={x:0,y:0,w:W,h:H};apply()}
function apply(){
  const r=svg.getBoundingClientRect(); if(!r.width)return;
  const a=r.width/r.height; const maxW=Math.max(W,H*a);
  vb.w=Math.min(maxW,Math.max(110,vb.w)); vb.h=vb.w/a;
  vb.x=vb.w>=W?(W-vb.w)/2:Math.min(W-vb.w,Math.max(0,vb.x));
  vb.y=vb.h>=H?(H-vb.h)/2:Math.min(H-vb.h,Math.max(0,vb.y));
  svg.setAttribute('viewBox',`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
  const u=vb.w/r.width; svg.style.setProperty('--u',u);
  const zf=maxW/vb.w; svg.dataset.z=zf<1.6?1:zf<3?2:3;
  const mpp=D.mpp*u; const opts=[.1,.2,.5,1,2,5,10]; let km=opts[0]; for(const o of opts){if(o*1000/mpp<=130)km=o}
  const sc=$('#scale'); sc.querySelector('span').textContent=(km<1?km*1000+' m':km+' km'); sc.querySelector('i').style.width=(km*1000/mpp)+'px';
}
function pt(ev){const r=svg.getBoundingClientRect();const s=vb.w/r.width;return {x:vb.x+(ev.clientX-r.left)*s,y:vb.y+(ev.clientY-r.top)*s,s}}
function zoom(f,cx,cy){const w0=vb.w;cx=cx??vb.x+vb.w/2;cy=cy??vb.y+vb.h/2;
  const r=svg.getBoundingClientRect();const a=r.width/r.height;const maxW=Math.max(W,H*a);
  const w=Math.min(maxW,Math.max(110,vb.w*f)),k=w/w0; vb={x:cx-(cx-vb.x)*k,y:cy-(cy-vb.y)*k,w,h:vb.h*k}; apply()}
svg.addEventListener('wheel',ev=>{ev.preventDefault();const p=pt(ev);zoom(ev.deltaY>0?1.2:1/1.2,p.x,p.y)},{passive:false});
const ptrs=new Map(); let last=null, pinch=0;
svg.addEventListener('pointerdown',ev=>{ptrs.set(ev.pointerId,ev);last={x:ev.clientX,y:ev.clientY};moved=false;
  if(ptrs.size===2){const [a,b]=[...ptrs.values()];pinch=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)}});
svg.addEventListener('pointermove',ev=>{
  if(!ptrs.has(ev.pointerId))return; ptrs.set(ev.pointerId,ev);
  if(ptrs.size===1&&last){const dx=ev.clientX-last.x,dy=ev.clientY-last.y;
    if(Math.abs(dx)+Math.abs(dy)>4||moved){ if(!moved){moved=true;svg.classList.add('drag');try{svg.setPointerCapture(ev.pointerId)}catch(e){}}
      const s=vb.w/svg.getBoundingClientRect().width; vb.x-=dx*s; vb.y-=dy*s; apply(); last={x:ev.clientX,y:ev.clientY}; }}
  else if(ptrs.size===2){const [a,b]=[...ptrs.values()];const d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
    if(pinch){const m=pt({clientX:(a.clientX+b.clientX)/2,clientY:(a.clientY+b.clientY)/2});zoom(pinch/d,m.x,m.y);moved=true}pinch=d}
});
const up=ev=>{ptrs.delete(ev.pointerId);svg.classList.remove('drag');if(ptrs.size<2)pinch=0;setTimeout(()=>{moved=false},0)};
svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',up);
svg.addEventListener('click',()=>{if(!moved&&sel)go(null)});
$('#zin').onclick=()=>zoom(1/1.5);$('#zout').onclick=()=>zoom(1.5);$('#zre').onclick=fit;
document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&sel)go(null)});
window.addEventListener('resize',apply);

build(); avisos(); home(); paint(); fit();
