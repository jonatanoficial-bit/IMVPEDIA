(() => {
  "use strict";

  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => [...el.querySelectorAll(s)];
  const escapeHtml = (str="") => str.replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m]));
  const safeId = (s="") => String(s).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_]/g,"").toLowerCase();

  const STORE = {
    lang: "imvpedia_lang",
    custom: "imvpedia_custom_entries_v1",
    adminPass: "imvpedia_admin_pass_v1",
    lastViewed: "imvpedia_last_viewed_v1",
    favorites: "imvpedia_favorites_v1",
    history: "imvpedia_history_v1",
    practice: "imvpedia_practice_progress_v1",
    quiz: "imvpedia_quiz_stats_v1"
  };
  const DEFAULT_ADMIN_PASS = "imvadmin";

  const UI = {
    pt: {
      homeTitle:"IMVpedia",
      homeSub:"Uma enciclopédia premium de Teoria Musical (IMV Instituto Musical Vale). Explore escalas, harmonia, ritmo, leitura, história e pratique com estrutura.",
      featured:"Destaque do dia",
      continue:"Continuar",
      open:"Abrir",
      browseAll:"Ver tudo",
      searchTitle:"Resultados da busca",
      searchHint:"Digite para buscar por termos, aliases, tags e conteúdo.",
      categoryTitle:"Categoria",
      notFound:"Nada encontrado.",
      back:"Voltar",
      seeAlso:"Ver também",
      bullets:"Pontos-chave",
      example:"Exemplo",
      about:"Sobre",
      myList:"Minha Lista",
      recent:"Continuar assistindo",
      collections:"Coleções",
      addList:"Adicionar à Minha Lista",
      removeList:"Remover da Minha Lista",
      adminTitle:"Painel Admin (Local)",
      adminSub:"Crie/edite verbetes e imagens (Base64) sem servidor. Salva no seu navegador (localStorage).",
      lockTitle:"Acesso Admin",
      lockBody:"Digite a senha do Admin para entrar.",
      passLabel:"Senha",
      enter:"Entrar",
      cancel:"Cancelar",
      wrongPass:"Senha incorreta.",
      saved:"Salvo!",
      deleted:"Deletado!",
      imported:"Importado!",
      exported:"Exportado (copiado).",
      resetPassDone:"Senha redefinida.",
      confirmDelete:"Tem certeza que quer deletar este verbete?",
      tips:"Dica: bullets e aliases separados por quebra de linha / vírgulas.",
      imgHint:"Upload → vira Base64 (fica no navegador).",
      practice:"Praticar agora",
      checklist:"Checklist",
      tracks:"Trilhas de Aprendizado",
      track:"Trilha",
      start:"Começar",
      next:"Próxima",
      finish:"Finalizar",
      quiz:"Quiz",
      question:"Pergunta",
      of:"de",
      score:"Pontuação",
      again:"De novo"
    },
    en: {
      homeTitle:"IMVpedia",
      homeSub:"A premium Music Theory encyclopedia (IMV Instituto Musical Vale). Explore scales, harmony, rhythm, notation, history, and practice with structure.",
      featured:"Featured today",
      continue:"Continue",
      open:"Open",
      browseAll:"Browse all",
      searchTitle:"Search results",
      searchHint:"Type to search terms, aliases, tags and content.",
      categoryTitle:"Category",
      notFound:"Nothing found.",
      back:"Back",
      seeAlso:"See also",
      bullets:"Key points",
      example:"Example",
      about:"About",
      myList:"My List",
      recent:"Continue watching",
      collections:"Collections",
      addList:"Add to My List",
      removeList:"Remove from My List",
      adminTitle:"Admin Panel (Local)",
      adminSub:"Create/edit entries and images (Base64) without a server. Saved in your browser (localStorage).",
      lockTitle:"Admin Access",
      lockBody:"Enter the admin password to continue.",
      passLabel:"Password",
      enter:"Enter",
      cancel:"Cancel",
      wrongPass:"Wrong password.",
      saved:"Saved!",
      deleted:"Deleted!",
      imported:"Imported!",
      exported:"Exported (copied).",
      resetPassDone:"Password reset.",
      confirmDelete:"Are you sure you want to delete this entry?",
      tips:"Tip: bullets and aliases separated by newline / commas.",
      imgHint:"Upload → becomes Base64 (stored locally).",
      practice:"Practice now",
      checklist:"Checklist",
      tracks:"Learning Paths",
      track:"Track",
      start:"Start",
      next:"Next",
      finish:"Finish",
      quiz:"Quiz",
      question:"Question",
      of:"of",
      score:"Score",
      again:"Again"
    },
    es: {
      homeTitle:"IMVpedia",
      homeSub:"Una enciclopedia premium de Teoría Musical (IMV Instituto Musical Vale). Explora escalas, armonía, ritmo, lectura, historia y practica con estructura.",
      featured:"Destacado del día",
      continue:"Continuar",
      open:"Abrir",
      browseAll:"Ver todo",
      searchTitle:"Resultados de búsqueda",
      searchHint:"Escribe para buscar términos, alias, tags y contenido.",
      categoryTitle:"Categoría",
      notFound:"No se encontró nada.",
      back:"Volver",
      seeAlso:"Ver también",
      bullets:"Puntos clave",
      example:"Ejemplo",
      about:"Acerca de",
      myList:"Mi Lista",
      recent:"Seguir viendo",
      collections:"Colecciones",
      addList:"Agregar a Mi Lista",
      removeList:"Quitar de Mi Lista",
      adminTitle:"Panel Admin (Local)",
      adminSub:"Crea/edita entradas e imágenes (Base64) sin servidor. Guardado en tu navegador (localStorage).",
      lockTitle:"Acceso Admin",
      lockBody:"Ingresa la contraseña de Admin para continuar.",
      passLabel:"Contraseña",
      enter:"Entrar",
      cancel:"Cancelar",
      wrongPass:"Contraseña incorrecta.",
      saved:"¡Guardado!",
      deleted:"¡Eliminado!",
      imported:"¡Importado!",
      exported:"Exportado (copiado).",
      resetPassDone:"Contraseña restablecida.",
      confirmDelete:"¿Seguro que deseas eliminar esta entrada?",
      tips:"Tip: bullets y alias separados por salto de línea / comas.",
      imgHint:"Subir → se vuelve Base64 (guardado localmente).",
      practice:"Practicar ahora",
      checklist:"Checklist",
      tracks:"Rutas de Aprendizaje",
      track:"Ruta",
      start:"Comenzar",
      next:"Siguiente",
      finish:"Finalizar",
      quiz:"Quiz",
      question:"Pregunta",
      of:"de",
      score:"Puntaje",
      again:"Otra vez"
    }
  };

  const CATEGORY_LABELS = {
    scales: { pt: "Escalas", en: "Scales", es: "Escalas" },
    harmony:{ pt: "Harmonia", en: "Harmony", es: "Armonía" },
    rhythm: { pt: "Ritmo", en: "Rhythm", es: "Ritmo" },
    notation:{ pt: "Leitura", en: "Notation", es: "Lectura" },
    history: { pt: "História", en: "History", es: "Historia" }
  };
  const CATEGORY_HINTS = {
    scales: { pt:"Maior, menor, modos, pentatônicas, simétricas…", en:"Major, minor, modes, pentatonics, symmetric…", es:"Mayor, menor, modos, pentatónicas, simétricas…" },
    harmony:{ pt:"Tríades, 7ª, funções, cadências, modernos…", en:"Triads, 7ths, functions, cadences, modern…", es:"Tríadas, 7ª, funciones, cadencias, moderno…" },
    rhythm: { pt:"Métrica, subdivisão, síncope, polimetria…", en:"Meter, subdivision, syncopation, polymeter…", es:"Métrica, subdivisión, síncopa, polimetría…" },
    notation:{ pt:"Pauta, claves, figuras, articulação, dinâmica…", en:"Staff, clefs, note values, articulation, dynamics…", es:"Pentagrama, claves, figuras, articulación, dinámica…" },
    history: { pt:"Contexto, eras, forma, ouvido…", en:"Context, eras, form, ear training…", es:"Contexto, eras, forma, oído…" }
  };

  // Coleções (home)
  const COLLECTIONS = [
    { id:"start-here",  title:{pt:"Comece por aqui", en:"Start here", es:"Empieza aquí"}, match:(e)=> (e.level==="beginner") },
    { id:"rhythm-pro",  title:{pt:"Ritmo — Avançado", en:"Rhythm — Advanced", es:"Ritmo — Avanzado"}, match:(e)=> e.category==="rhythm" && (e.level==="advanced" || (e.tags||[]).includes("advanced")) },
    { id:"modes-pack",  title:{pt:"Modos (Pacote)", en:"Modes (Pack)", es:"Modos (Pack)"}, match:(e)=> e.category==="scales" && (e.tags||[]).includes("modes") },
    { id:"notation-core",title:{pt:"Leitura essencial", en:"Notation essentials", es:"Lectura esencial"}, match:(e)=> e.category==="notation" },
    { id:"harmony-core", title:{pt:"Harmonia essencial", en:"Harmony essentials", es:"Armonía esencial"}, match:(e)=> e.category==="harmony" }
  ];

  const app = qs("#app");
  const searchInput = qs("#searchInput");
  const clearSearchBtn = qs("#clearSearchBtn");
  const adminBtn = qs("#adminBtn");

  // Toast
  const toastEl = qs("#toast");
  let toastTimer = null;
  const toast = (msg)=>{ if(!msg) return; toastEl.textContent = msg; toastEl.style.display="block"; clearTimeout(toastTimer); toastTimer=setTimeout(()=> toastEl.style.display="none", 2200); };

  // Modal
  const modal = qs("#modal");
  const modalBackdrop = qs("#modalBackdrop");
  const modalCloseBtn = qs("#modalCloseBtn");
  const modalTitle = qs("#modalTitle");
  const modalBody = qs("#modalBody");
  const modalFooter = qs("#modalFooter");
  const openModal = ({title, bodyHTML, footerHTML}) => { modalTitle.textContent = title||""; modalBody.innerHTML=bodyHTML||""; modalFooter.innerHTML=footerHTML||""; modal.style.display="block"; modal.setAttribute("aria-hidden","false"); };
  const closeModal = ()=> { modal.style.display="none"; modal.setAttribute("aria-hidden","true"); modalBody.innerHTML=""; modalFooter.innerHTML=""; };
  modalBackdrop.addEventListener("click", closeModal);
  modalCloseBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", e=>{ if(e.key==="Escape" && modal.style.display==="block") closeModal(); });

  // Data helpers
  const getLang = ()=> { const l = localStorage.getItem(STORE.lang); return (l==="pt"||l==="en"||l==="es")? l : "pt"; };
  const setLang = (l)=> { localStorage.setItem(STORE.lang, l); qs("#langLabel").textContent = l.toUpperCase(); document.documentElement.lang = l==="pt" ? "pt-BR" : (l==="es" ? "es" : "en"); };
  const getAdminPass = ()=> { const p = localStorage.getItem(STORE.adminPass); return (p && p.length>=3) ? p : DEFAULT_ADMIN_PASS; };
  const setAdminPass = (p)=> localStorage.setItem(STORE.adminPass, p);

  const loadCustomEntries = ()=> { try{ const raw = localStorage.getItem(STORE.custom); if(!raw) return []; const data = JSON.parse(raw); return Array.isArray(data) ? data : []; }catch{ return []; } };
  const saveCustomEntries = (arr)=> localStorage.setItem(STORE.custom, JSON.stringify(arr||[]));
  const mergeEntries = (base, custom)=> { const map=new Map(); (base||[]).forEach(e=>map.set(e.id,e)); (custom||[]).forEach(e=>map.set(e.id,e)); return [...map.values()]; };
  const getAllEntries = ()=> mergeEntries(Array.isArray(window.IMVPEDIA_ENTRIES)?window.IMVPEDIA_ENTRIES:[], loadCustomEntries());
  const getEntryById = (id)=> getAllEntries().find(e=>e.id===id) || null;

  const getText = (obj, lang)=> { if(!obj) return ""; if(typeof obj==="string") return obj; return obj[lang] || obj.pt || obj.en || obj.es || ""; };
  const normalize = (s)=> String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");

  // Favorites / History / Practice
  const loadFavorites = ()=> { try{ const raw=localStorage.getItem(STORE.favorites); const arr=raw?JSON.parse(raw):[]; return Array.isArray(arr)?arr:[]; }catch{ return []; } };
  const saveFavorites = (arr)=> localStorage.setItem(STORE.favorites, JSON.stringify(arr||[]));
  const isFav = (id)=> loadFavorites().includes(id);
  const toggleFav = (id)=> { const fav=loadFavorites(); const i=fav.indexOf(id); if(i>=0) fav.splice(i,1); else fav.unshift(id); saveFavorites(fav.slice(0,200)); return fav.includes(id); };

  const loadHistory = ()=> { try{ const raw=localStorage.getItem(STORE.history); const arr=raw?JSON.parse(raw):[]; return Array.isArray(arr)?arr:[]; }catch{ return []; } };
  const pushHistory = (id)=> { const h=loadHistory().filter(x=>x!==id); h.unshift(id); localStorage.setItem(STORE.history, JSON.stringify(h.slice(0,30))); };
  const setLastViewed = (id)=> { try{ localStorage.setItem(STORE.lastViewed,id); }catch{} };

  const PRACTICE_DEFAULTS = (id)=> ([
    { id: `${id}-read`, label: "Leitura em voz alta/contagem (2 min)", done:false },
    { id: `${id}-apply`, label: "Aplicar no instrumento (3 min)", done:false },
    { id: `${id}-quiz`, label: "Mini-quiz mental (1 min)", done:false }
  ]);
  const loadPractice = ()=> { try{ const raw=localStorage.getItem(STORE.practice); return raw? JSON.parse(raw): {}; }catch{ return {}; } };
  const savePractice = (obj)=> localStorage.setItem(STORE.practice, JSON.stringify(obj||{}));

  // Search
  const entrySearchBlob = (entry)=>{
    const lang=getLang();
    const parts=[
      entry.id, entry.category,
      getText(entry.title,"pt"), getText(entry.title,"en"), getText(entry.title,"es"),
      getText(entry.short,"pt"), getText(entry.short,"en"), getText(entry.short,"es"),
      getText(entry.definition,"pt"), getText(entry.definition,"en"), getText(entry.definition,"es"),
      entry.examples? getText(entry.examples,"pt") : "",
      entry.examples? getText(entry.examples,"en") : "",
      entry.examples? getText(entry.examples,"es") : "",
      (entry.aliases||[]).join(" "),
      (entry.seeAlso||[]).join(" "),
      (entry.tags||[]).join(" "),
      entry.level||""
    ];
    if(entry.bullets){
      parts.push((entry.bullets.pt||[]).join(" "), (entry.bullets.en||[]).join(" "), (entry.bullets.es||[]).join(" "));
    }
    parts.unshift(getText(entry.title,lang), getText(entry.short,lang), getText(entry.definition,lang));
    return normalize(parts.join(" "));
  };
  const searchEntries = (query)=>{
    const q=normalize(query).trim(); if(!q) return [];
    const all=getAllEntries(); const tokens=q.split(/\s+/).filter(Boolean);
    const scored=[];
    for(const e of all){
      const blob=entrySearchBlob(e);
      let score=0;
      for(const t of tokens){
        if(blob.includes(t)){
          score+=10;
          if(normalize(e.id).includes(t)) score+=12;
          if(normalize(getText(e.title,getLang())).includes(t)) score+=14;
          if((e.aliases||[]).some(a=>normalize(a).includes(t))) score+=10;
          if((e.tags||[]).some(a=>normalize(a).includes(t))) score+=8;
        } else score-=2;
      }
      if(score>0) scored.push({e,score});
    }
    scored.sort((a,b)=> b.score - a.score);
    return scored.map(x=>x.e);
  };

  // UI helpers (cards/rows)
  const badgeLabel = (cat, lang)=> (CATEGORY_LABELS[cat] && CATEGORY_LABELS[cat][lang]) ? CATEGORY_LABELS[cat][lang] : (cat||"");
  const makeCard = (entry, lang)=>{
    const title=escapeHtml(getText(entry.title,lang));
    const desc=escapeHtml(getText(entry.short,lang));
    const cat=entry.category||"history"; const badge=escapeHtml(badgeLabel(cat,lang));
    const img=entry.imageUrl||""; const favOn=isFav(entry.id);
    const media = img
      ? `<div class="card__media"><img alt="" src="${img}"><span class="badge">${badge}</span><button class="favbtn ${favOn?"is-on":""}" type="button" data-fav="${escapeHtml(entry.id)}">${favOn?"★":"☆"}</button></div>`
      : `<div class="card__media"><span class="badge">${badge}</span><button class="favbtn ${favOn?"is-on":""}" type="button" data-fav="${escapeHtml(entry.id)}">${favOn?"★":"☆"}</button></div>`;
    const tags=(entry.tags||[]).slice(0,2).map(t=>`<span class="pill">${escapeHtml(t)}</span>`).join("");
    return `
      <article class="card" role="button" tabindex="0" data-open="${escapeHtml(entry.id)}">
        ${media}
        <div class="card__body">
          <h3 class="card__title">${title}</h3>
          <p class="card__desc">${desc}</p>
          <div class="card__meta">
            <span class="pill">${escapeHtml(entry.id)}</span>
            ${entry.level? `<span class="pill">${escapeHtml(entry.level)}</span>` : ""}
            ${tags}
          </div>
        </div>
      </article>`;
  };
  const bindCardClicks = (container)=>{
    qsa("[data-open]",container).forEach(el=>{
      const id=el.getAttribute("data-open");
      const go=()=>{ location.hash=`#/entry/${encodeURIComponent(id)}`; };
      el.addEventListener("click",(e)=>{ if(e.target && e.target.closest && e.target.closest("[data-fav]")) return; go(); });
      el.addEventListener("keydown",(e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); go(); }});
    });
    qsa("[data-fav]",container).forEach(btn=>{
      btn.addEventListener("click",(e)=>{
        e.preventDefault(); e.stopPropagation();
        const id=btn.getAttribute("data-fav"); const on=toggleFav(id);
        btn.textContent = on ? "★" : "☆"; btn.classList.toggle("is-on", on);
        toast(on ? UI[getLang()].addList : UI[getLang()].removeList);
      });
    });
  };
  const makeRow = (title,hint,entries,lang,linkHref)=>{
    const cards=entries.map(e=>makeCard(e,lang)).join("");
    const rowId=`row_${Math.random().toString(16).slice(2)}`;
    return `
      <section class="section">
        <div class="section__head">
          <div>
            <h2 class="section__title">${escapeHtml(title)}</h2>
            ${hint? `<p class="section__hint">${escapeHtml(hint)}</p>`: `<p class="section__hint"></p>`}
          </div>
          ${linkHref? `<a class="linkpill" href="${linkHref}">${escapeHtml(UI[lang].browseAll)} →</a>`: ``}
        </div>
        <div class="row">
          <button class="row__btn row__btn--left" type="button">‹</button>
          <div class="row__scroller" id="${rowId}">
            ${cards}
          </div>
          <button class="row__btn row__btn--right" type="button">›</button>
        </div>
      </section>`;
  };
  const bindRows = ()=>{
    qsa(".row").forEach(row=>{
      const scroller=qs(".row__scroller",row);
      const left=qs(".row__btn--left",row);
      const right=qs(".row__btn--right",row);
      if(!scroller||!left||!right) return;
      const scrollByCards = (dir)=>{
        const card=qs(".card",scroller);
        const step=(card? card.getBoundingClientRect().width:240)+12;
        scroller.scrollBy({left: dir*step*2.4, behavior:"smooth"});
      };
      left.addEventListener("click", ()=> scrollByCards(-1));
      right.addEventListener("click", ()=> scrollByCards(1));
    });
  };

  const pickFeatured = ()=>{
    const all=getAllEntries(); if(!all.length) return null;
    const hist=loadHistory(); if(hist.length){ const e=getEntryById(hist[0]); if(e) return e; }
    const pref=["harmony","scales","rhythm","notation","history"];
    for(const cat of pref){ const list=all.filter(e=>e.category===cat); if(list.length) return list[Math.floor(Math.random()*list.length)]; }
    return all[Math.floor(Math.random()*all.length)];
  };

  // ---------- PAGES
  const renderHome = ()=>{
    const lang=getLang();
    const featured=pickFeatured();
    const featuredTitle=featured? escapeHtml(getText(featured.title,lang)) : "—";
    const featuredDesc=featured? escapeHtml(getText(featured.short,lang)) : "";
    const featuredCat=featured? featured.category : "history";
    const featuredBadge=escapeHtml(badgeLabel(featuredCat,lang));
    const featuredImg=featured && featured.imageUrl ? featured.imageUrl : "";
    const heroThumb=featuredImg? `<div class="thumb"><img alt="" src="${featuredImg}"></div>`: `<div class="thumb"></div>`;
    const hero = `
      <section class="hero">
        <div class="hero__inner">
          <div>
            <h1 class="hero__title">${escapeHtml(UI[lang].homeTitle)} — Netflix de Teoria Musical</h1>
            <p class="hero__subtitle">${escapeHtml(UI[lang].homeSub)}</p>
            <div class="hero__chips">
              <span class="chip">PT / EN / ES</span>
              <span class="chip">Coleções + Tags</span>
              <span class="chip">Minha Lista ★</span>
              <span class="chip">Quiz Offline</span>
              <span class="chip">Trilhas</span>
            </div>
            <div class="hero__cta">
              <button class="btn btn--primary" type="button" id="ctaFeatured">${escapeHtml(UI[lang].open)}: ${featuredTitle}</button>
              <a class="btn btn--secondary" href="#/quiz">${escapeHtml(UI[lang].quiz)}</a>
              <a class="btn btn--secondary" href="#/tracks">${escapeHtml(UI[lang].tracks)}</a>
            </div>
          </div>
          <aside class="hero__feature" aria-label="${escapeHtml(UI[lang].featured)}">
            <div class="hero__featureTop"><div class="kicker"><span class="dot"></span>${escapeHtml(UI[lang].featured)}</div></div>
            <div class="hero__featureCard">
              ${heroThumb}
              <div class="featureMeta">
                <h3>${featuredTitle}</h3>
                <p>${featuredDesc}</p>
                <div class="mini"><span class="pill">${featuredBadge}</span>${featured? `<span class="pill">${escapeHtml(featured.id)}</span>`:""}</div>
              </div>
            </div>
          </aside>
        </div>
      </section>`;
    const favIds=loadFavorites(); const favEntries=favIds.map(getEntryById).filter(Boolean).slice(0,16);
    const histIds=loadHistory(); const histEntries=histIds.map(getEntryById).filter(Boolean).slice(0,16);
    const myListRow = favEntries.length? makeRow(UI[lang].myList,"",favEntries,lang,"#/favorites") : "";
    const recentRow = histEntries.length? makeRow(UI[lang].recent,"",histEntries,lang,"#/recent") : "";
    const collectionsRows = COLLECTIONS.map(col=>{
      const list=getAllEntries().filter(col.match).slice(0,16);
      if(!list.length) return "";
      return makeRow(getText(col.title,lang), UI[lang].collections, list, lang, `#/collection/${encodeURIComponent(col.id)}`);
    }).join("");
    const catOrder=["scales","harmony","rhythm","notation","history"];
    const categoryRows = catOrder.map(cat=>{
      const label=badgeLabel(cat,lang);
      const hint=(CATEGORY_HINTS[cat] && CATEGORY_HINTS[cat][lang])? CATEGORY_HINTS[cat][lang] : "";
      const subset=getAllEntries().filter(e=>e.category===cat).slice(0,16);
      return makeRow(label,hint,subset,lang,`#/category/${encodeURIComponent(cat)}`);
    }).join("");

    app.innerHTML = hero + myListRow + recentRow + collectionsRows + categoryRows;
    const ctaFeatured=qs("#ctaFeatured");
    if(ctaFeatured && featured){ ctaFeatured.addEventListener("click", ()=> location.hash=`#/entry/${encodeURIComponent(featured.id)}`); }
    bindCardClicks(app); bindRows();
  };

  const renderCategory = (cat)=>{
    const lang=getLang();
    const label=badgeLabel(cat,lang);
    const hint=(CATEGORY_HINTS[cat] && CATEGORY_HINTS[cat][lang])? CATEGORY_HINTS[cat][lang] : "";
    const list=getAllEntries().filter(e=>e.category===cat);
    const cards=list.map(e=>makeCard(e,lang)).join("");
    app.innerHTML = `
      <div class="pagehead">
        <div><h1>${escapeHtml(label)}</h1><p>${escapeHtml(hint)} • ${list.length} verbetes</p></div>
        <div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a><a class="linkpill" href="#/favorites">${escapeHtml(UI[lang].myList)} ★</a></div>
      </div>
      <div class="grid">${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}</div>`;
    bindCardClicks(app);
  };

  const renderSearch = (query)=>{
    const lang=getLang();
    const q=(query||"").trim();
    const results=q? searchEntries(q) : [];
    const cards=results.map(e=>makeCard(e,lang)).join("");
    app.innerHTML = `
      <div class="pagehead">
        <div><h1>${escapeHtml(UI[lang].searchTitle)}</h1><p>${escapeHtml(UI[lang].searchHint)} ${q? `• “${escapeHtml(q)}” • ${results.length} resultados` : ""}</p></div>
        <div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a><a class="linkpill" href="#/favorites">${escapeHtml(UI[lang].myList)} ★</a></div>
      </div>
      ${q? `<div class="grid">${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}</div>` : `<div class="field"><label>Buscar</label><div class="hint">${escapeHtml(UI[lang].searchHint)}</div></div>`}`;
    bindCardClicks(app);
  };

  const renderFavorites = ()=>{
    const lang=getLang();
    const fav=loadFavorites().map(getEntryById).filter(Boolean);
    const cards=fav.map(e=>makeCard(e,lang)).join("");
    app.innerHTML = `
      <div class="pagehead"><div><h1>${escapeHtml(UI[lang].myList)} ★</h1><p>${fav.length? `${fav.length} itens salvos` : escapeHtml(UI[lang].notFound)}</p></div><div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a></div></div>
      <div class="grid">${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}</div>`;
    bindCardClicks(app);
  };

  const renderRecent = ()=>{
    const lang=getLang();
    const hist=loadHistory().map(getEntryById).filter(Boolean);
    const cards=hist.map(e=>makeCard(e,lang)).join("");
    app.innerHTML = `
      <div class="pagehead"><div><h1>${escapeHtml(UI[lang].recent)}</h1><p>${hist.length? `${hist.length} vistos recentemente` : escapeHtml(UI[lang].notFound)}</p></div><div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a></div></div>
      <div class="grid">${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}</div>`;
    bindCardClicks(app);
  };

  // ----------- TRILHAS (Learning Paths)
  const getTracks = ()=> Array.isArray(window.IMVPEDIA_TRACKS) ? window.IMVPEDIA_TRACKS : [];
  const renderTracks = ()=>{
    const lang=getLang();
    const tracks=getTracks();
    const cards = tracks.map(t=>{
      const title=getText(t.title,lang);
      const desc=getText(t.desc,lang);
      return `
        <section class="trackCard">
          <h3 style="margin:0 0 8px">${escapeHtml(title)}</h3>
          <p style="margin:0 0 12px; color:var(--muted)">${escapeHtml(desc)}</p>
          <div class="kbtn">
            <a class="btn btn--primary" href="#/track/${encodeURIComponent(t.id)}">${escapeHtml(UI[lang].start)}</a>
          </div>
        </section>`;
    }).join("");
    app.innerHTML = `
      <div class="pagehead"><div><h1>${escapeHtml(UI[lang].tracks)}</h1><p>Trilhas curadas por nível: iniciante, intermediário e avançado.</p></div><div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a></div></div>
      <div class="trackGrid">${cards || `<div class="field">Sem trilhas.</div>`}</div>`;
  };
  const renderTrack = (trackId)=>{
    const lang=getLang();
    const t=getTracks().find(x=>x.id===trackId);
    if(!t){ location.hash="#/tracks"; return; }
    const title=getText(t.title,lang), desc=getText(t.desc,lang);
    const entries = t.steps.map(id=> getEntryById(id)).filter(Boolean);
    const items = entries.map((e,i)=>`
      <li class="practiceItem" style="justify-content:space-between">
        <div style="display:flex;align-items:center;gap:10px">
          <span class="pill">${i+1}</span>
          <div>
            <div style="font-weight:900">${escapeHtml(getText(e.title,lang))}</div>
            <div style="font-size:12px;color:var(--muted)">${escapeHtml(getText(e.short,lang))}</div>
          </div>
        </div>
        <a class="linkpill" href="#/entry/${encodeURIComponent(e.id)}">Abrir</a>
      </li>`).join("");
    app.innerHTML = `
      <div class="pagehead"><div><h1>${escapeHtml(UI[lang].track)} — ${escapeHtml(title)}</h1><p>${escapeHtml(desc)}</p></div><div class="kbtn"><a class="linkpill" href="#/tracks">${escapeHtml(UI[lang].back)} ←</a></div></div>
      <section class="practiceBox">
        <h3 style="margin:0 0 10px">Passo a passo</h3>
        <ul class="practiceList" style="list-style:none; padding:0; margin:0">${items}</ul>
      </section>`;
  };

  // ----------- ENTRY (com Índice e Prática)
  const sectionId = (label)=> `s-${safeId(label)}`;
  const renderEntry = (id)=>{
    const lang=getLang();
    const entry=getEntryById(id);
    if(!entry){ app.innerHTML=`<div class="pagehead"><div><h1>${escapeHtml(UI[lang].notFound)}</h1><p>ID: ${escapeHtml(id)}</p></div><div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a></div></div>`; return; }

    setLastViewed(entry.id); pushHistory(entry.id);

    const title=getText(entry.title,lang);
    const short=getText(entry.short,lang);
    const def=getText(entry.definition,lang);
    const bullets=entry.bullets? (entry.bullets[lang]||entry.bullets.pt||entry.bullets.en||entry.bullets.es||[]) : [];
    const example=entry.examples? getText(entry.examples,lang) : "";
    const img=entry.imageUrl||"";
    const catLabel=badgeLabel(entry.category,lang);
    const favOn=isFav(entry.id);
    const tags=(entry.tags||[]).map(t=>`<span class="pill">${escapeHtml(t)}</span>`).join("");
    const see = Array.isArray(entry.seeAlso) ? entry.seeAlso : [];
    const seeLinks = see.map(sid=>{ const e2=getEntryById(sid); const label=e2? getText(e2.title,lang): sid; return `<a class="linkpill" href="#/entry/${encodeURIComponent(sid)}">↗ ${escapeHtml(label)}</a>`; }).join("");
    const imgHtml = img ? `<div class="entry__img"><img alt="" src="${img}"></div>` : `<div class="entry__img"></div>`;

    // índice interno (anchors)
    const idx = [
      { id: sectionId("def"), label:"Definição", show:true },
      { id: sectionId("bullets"), label:UI[lang].bullets, show: bullets && bullets.length },
      { id: sectionId("example"), label:UI[lang].example, show: !!example },
      { id: sectionId("practice"), label:UI[lang].practice, show: true },
      { id: sectionId("seealso"), label:UI[lang].seeAlso, show: !!seeLinks }
    ].filter(x=>x.show);
    const indexHtml = `<nav class="entryIndex">${idx.map(i=>`<a href="#/entry/${encodeURIComponent(id)}#${i.id}">${escapeHtml(i.label)}</a>`).join("")}</nav>`;

    // prática (checklist salva em localStorage)
    const practiceState = loadPractice();
    const key = entry.id;
    if(!practiceState[key]) practiceState[key] = PRACTICE_DEFAULTS(entry.id);
    const practiceList = practiceState[key];

    const practiceHtml = `
      <section id="${sectionId("practice")}" class="practiceBox">
        <h2 style="margin:0 0 10px">${escapeHtml(UI[lang].practice)}</h2>
        <div class="practiceList">
          ${practiceList.map(item => `
            <label class="practiceItem">
              <input type="checkbox" data-pr="${escapeHtml(key)}" data-item="${escapeHtml(item.id)}" ${item.done? "checked": ""}/>
              <span>${escapeHtml(item.label)}</span>
            </label>`).join("")}
        </div>
        <div class="kbtn" style="margin-top:10px">
          <a class="linkpill" href="#/quiz">Quiz rápido</a>
        </div>
      </section>`;

    app.innerHTML = `
      <div class="pagehead">
        <div><h1>${escapeHtml(getText(entry.title,lang))}</h1><p>${escapeHtml(catLabel)} • ${escapeHtml(entry.id)}</p></div>
        <div class="kbtn">
          <button class="btn btn--secondary" id="favToggle" type="button">${favOn ? "★" : "☆"} ${escapeHtml(favOn ? UI[lang].removeList : UI[lang].addList)}</button>
          <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
        </div>
      </div>

      <article class="entry">
        <div class="entry__top">
          <div>
            <h1>${escapeHtml(title)}</h1>
            <p class="lead">${escapeHtml(short)}</p>
            <div class="seealso"><span class="pill">${escapeHtml(catLabel)}</span>${entry.level? `<span class="pill">${escapeHtml(entry.level)}</span>`:""}${tags}</div>
            ${indexHtml}
          </div>
          <aside class="entry__side">
            ${imgHtml}
            <div class="sidepad">
              <p class="miniTitle">${escapeHtml(UI[lang].about)}</p>
              <p class="small">${escapeHtml(short)}</p>
            </div>
          </aside>
        </div>

        <div class="entry__content">
          <h2 id="${sectionId("def")}">Definição</h2>
          <div class="def">${def || ""}</div>

          ${bullets && bullets.length ? `
            <h2 id="${sectionId("bullets")}" style="margin-top:16px">${escapeHtml(UI[lang].bullets)}</h2>
            <ul>${bullets.map(b=>`<li>${escapeHtml(b)}</li>`).join("")}</ul>
          ` : ""}

          ${example ? `
            <h2 id="${sectionId("example")}">${escapeHtml(UI[lang].example)}</h2>
            <div class="example">${escapeHtml(example)}</div>
          ` : ""}

          ${practiceHtml}

          ${seeLinks ? `
            <h2 id="${sectionId("seealso")}" style="margin-top:16px">${escapeHtml(UI[lang].seeAlso)}</h2>
            <div class="seealso">${seeLinks}</div>
          ` : ""}
        </div>
      </article>
    `;

    // bind prática
    qsa("[data-pr]").forEach(cb=>{
      cb.addEventListener("change", ()=>{
        const k=cb.getAttribute("data-pr");
        const id=cb.getAttribute("data-item");
        const state=loadPractice();
        if(!state[k]) state[k]=PRACTICE_DEFAULTS(k);
        const it = state[k].find(x=>x.id===id);
        if(it){ it.done = cb.checked; savePractice(state); }
      });
    });

    // fav
    const favToggle=qs("#favToggle");
    if(favToggle){
      favToggle.addEventListener("click", ()=>{
        const on=toggleFav(entry.id);
        favToggle.textContent=`${on?"★":"☆"} ${on ? UI[lang].removeList : UI[lang].addList}`;
        toast(on ? UI[lang].addList : UI[lang].removeList);
      });
    }
  };

  // ----------- QUIZ OFFLINE
  const QUIZ_BANK = {
    intervals: [
      { q:"Qual é o intervalo entre C e G?", choices:["4ª justa","5ª justa","3ª maior","2ª maior"], a:1 },
      { q:"Intervalo entre E e C?", choices:["3ª menor descendente","6ª menor","3ª maior","5ª diminuta"], a:0 },
      { q:"C para E é…", choices:["3ª menor","3ª maior","4ª justa","2ª maior"], a:1 }
    ],
    chords: [
      { q:"Acorde Cm7 tem…", choices:["1 b3 5 b7","1 3 5 b7","1 b3 b5 b7","1 b3 5 7"], a:0 },
      { q:"Símbolo de acorde dominante alterado típico:", choices:["Cmaj7","C7alt","Cm6","Cø7"], a:1 }
    ],
    meter: [
      { q:"6/8 costuma sentir-se como…", choices:["6 tempos","3 tempos","2 tempos grandes","1 tempo"], a:2 },
      { q:"7/8 frequentemente agrupa-se como…", choices:["2+2+3","3+2+2","4+4","5+2+1"], a:0 }
    ]
  };
  const buildQuizDeck = ()=>{
    const all=[...QUIZ_BANK.intervals, ...QUIZ_BANK.chords, ...QUIZ_BANK.meter];
    // embaralhar
    for(let i=all.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [all[i],all[j]]=[all[j],all[i]]; }
    return all.slice(0,10);
  };
  const renderQuiz = ()=>{
    const lang=getLang();
    let deck = buildQuizDeck();
    let idx=0, score=0, answered=false;

    const paint = ()=>{
      const item = deck[idx];
      const body = `
        <section class="quizWrap">
          <div class="quizBadge">${escapeHtml(UI[lang].question)} ${idx+1} ${escapeHtml(UI[lang].of)} ${deck.length}</div>
          <h3 class="quizQ">${escapeHtml(item.q)}</h3>
          <div class="quizChoices">
            ${item.choices.map((c,i)=> `<button class="quizBtn" data-i="${i}">${escapeHtml(c)}</button>`).join("")}
          </div>
          <div class="quizFooter">
            <div class="quizBadge">${escapeHtml(UI[lang].score)}: ${score}</div>
            <div class="kbtn">
              ${idx < deck.length-1 ? `<button class="btn btn--secondary" id="nextBtn" disabled>${escapeHtml(UI[lang].next)} →</button>` : `<button class="btn btn--primary" id="finishBtn" disabled>${escapeHtml(UI[lang].finish)}</button>`}
            </div>
          </div>
          <div id="quizResult" class="quizResult" style="display:none"></div>
        </section>`;
      app.innerHTML = `
        <div class="pagehead"><div><h1>${escapeHtml(UI[lang].quiz)}</h1><p>Intervalos, acordes e compassos — offline.</p></div><div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a></div></div>
        ${body}`;
      qsa(".quizBtn").forEach(btn=>{
        btn.addEventListener("click", ()=>{
          if(answered) return;
          answered = true;
          const i = Number(btn.getAttribute("data-i"));
          const ok = (i === deck[idx].a);
          if(ok){ score++; btn.classList.add("correct"); } else { btn.classList.add("wrong"); qsa(".quizBtn")[deck[idx].a].classList.add("correct"); }
          const res = qs("#quizResult");
          res.style.display="block";
          res.textContent = ok ? "✔ Resposta correta!" : "✖ Resposta incorreta.";
          const nb = qs("#nextBtn"); const fb=qs("#finishBtn");
          if(nb) nb.disabled=false; if(fb) fb.disabled=false;
        });
      });
      const next=qs("#nextBtn"); if(next) next.addEventListener("click", ()=>{ idx++; answered=false; paint(); });
      const fin=qs("#finishBtn"); if(fin) fin.addEventListener("click", ()=>{
        const resultHtml = `<div class="quizResult">Resultado: ${score}/${deck.length}</div>
          <div class="kbtn" style="margin-top:10px">
            <button class="btn btn--secondary" id="againBtn">↻ ${escapeHtml(UI[lang].again)}</button>
          </div>`;
        app.innerHTML = `
          <div class="pagehead"><div><h1>${escapeHtml(UI[lang].quiz)}</h1><p>${escapeHtml(UI[lang].score)}: ${score}/${deck.length}</p></div><div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a></div></div>
          <section class="quizWrap">${resultHtml}</section>`;
        qs("#againBtn").addEventListener("click", ()=> renderQuiz());
      });
    };
    paint();
  };

  // ----------- ADMIN (igual base da etapa 6, mantido)
  const requireAdmin = ()=> new Promise((resolve)=>{
    const lang=getLang();
    openModal({
      title: UI[lang].lockTitle,
      bodyHTML: `<p style="margin-top:0">${escapeHtml(UI[lang].lockBody)}</p>
      <div class="field"><label>${escapeHtml(UI[lang].passLabel)}</label><input id="adminPassInput" type="password" placeholder="••••••••" />
      <div class="hint">Default: <b>imvadmin</b></div></div>`,
      footerHTML: `<button class="btn btn--secondary" id="adminCancel">${escapeHtml(UI[lang].cancel)}</button><button class="btn btn--primary" id="adminEnter">${escapeHtml(UI[lang].enter)}</button>`
    });
    const passInput=qs("#adminPassInput"); const btnCancel=qs("#adminCancel"); const btnEnter=qs("#adminEnter");
    const finish=(ok)=>{ closeModal(); resolve(ok); };
    btnCancel.addEventListener("click", ()=> finish(false));
    btnEnter.addEventListener("click", ()=>{ const pass=passInput.value||""; if(pass===getAdminPass()) finish(true); else toast(UI[lang].wrongPass); });
    passInput.addEventListener("keydown",(e)=>{ if(e.key==="Enter"){ e.preventDefault(); btnEnter.click(); }});
    setTimeout(()=> passInput.focus(), 50);
  });

  const renderAdmin = ()=>{
    const lang=getLang();
    const custom=loadCustomEntries();
    const options=Object.keys(CATEGORY_LABELS).map(cat=> `<option value="${escapeHtml(cat)}">${escapeHtml(badgeLabel(cat,lang))} (${escapeHtml(cat)})</option>`).join("");
    const customList = custom.slice().sort((a,b)=> (a.id||"").localeCompare(b.id||"")).map(e=> `<option value="${escapeHtml(e.id)}">${escapeHtml(e.id)} — ${escapeHtml(getText(e.title,lang))}</option>`).join("");

    app.innerHTML = `
      <section class="admin">
        <div class="admin__head">
          <div><h1>${escapeHtml(UI[lang].adminTitle)}</h1><p>${escapeHtml(UI[lang].adminSub)}</p></div>
          <div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a></div>
        </div>
        <div class="admin__body">
          <div class="field"><label>Carregar verbete (custom)</label><select id="adminLoadSelect"><option value="">—</option>${customList}</select><div class="hint">${escapeHtml(UI[lang].tips)}</div></div>
          <div class="hr"></div>
          <div class="formgrid">
            <div class="field"><label>ID (único)</label><input id="f_id" placeholder="ex.: tritone-substitution" /><div class="hint">Use letras/números/hífen.</div></div>
            <div class="field"><label>Categoria</label><select id="f_category">${options}</select></div>
            <div class="field"><label>Título (PT)</label><input id="f_title_pt" /></div>
            <div class="field"><label>Title (EN)</label><input id="f_title_en" /></div>
            <div class="field"><label>Título (ES)</label><input id="f_title_es" /></div>
            <div class="field"><label>Resumo (PT)</label><textarea id="f_short_pt"></textarea></div>
            <div class="field"><label>Summary (EN)</label><textarea id="f_short_en"></textarea></div>
            <div class="field"><label>Resumen (ES)</label><textarea id="f_short_es"></textarea></div>
            <div class="field" style="grid-column:1/-1"><label>Definição (PT)</label><textarea id="f_def_pt"></textarea></div>
            <div class="field" style="grid-column:1/-1"><label>Definition (EN)</label><textarea id="f_def_en"></textarea></div>
            <div class="field" style="grid-column:1/-1"><label>Definición (ES)</label><textarea id="f_def_es"></textarea></div>
            <div class="field"><label>Bullets (PT)</label><textarea id="f_bullets_pt"></textarea></div>
            <div class="field"><label>Bullets (EN)</label><textarea id="f_bullets_en"></textarea></div>
            <div class="field"><label>Bullets (ES)</label><textarea id="f_bullets_es"></textarea></div>
            <div class="field"><label>Exemplo (PT)</label><textarea id="f_ex_pt"></textarea></div>
            <div class="field"><label>Example (EN)</label><textarea id="f_ex_en"></textarea></div>
            <div class="field"><label>Ejemplo (ES)</label><textarea id="f_ex_es"></textarea></div>
            <div class="field" style="grid-column:1/-1"><label>Aliases (vírgula)</label><input id="f_aliases" /></div>
            <div class="field" style="grid-column:1/-1"><label>Tags (vírgula)</label><input id="f_tags" /></div>
            <div class="field"><label>Nível</label><select id="f_level"><option value="">—</option><option value="beginner">beginner</option><option value="intermediate">intermediate</option><option value="advanced">advanced</option></select></div>
            <div class="field" style="grid-column:1/-1"><label>See Also (IDs, vírgula)</label><input id="f_seealso" /></div>
            <div class="field" style="grid-column:1/-1"><label>Imagem (Base64/URL)</label><input id="f_image" /><input id="f_image_file" type="file" accept="image/*" /><div class="hint">${escapeHtml(UI[lang].imgHint)}</div></div>
          </div>
          <div class="admin__actions">
            <button class="btn btn--ok" id="btnSave" type="button">Salvar / Atualizar</button>
            <button class="btn btn--danger" id="btnDelete" type="button">Deletar</button>
            <button class="btn btn--muted" id="btnClear" type="button">Limpar</button>
            <button class="btn btn--muted" id="btnExport" type="button">Export JSON</button>
            <button class="btn btn--muted" id="btnImport" type="button">Import JSON</button>
            <button class="btn btn--muted" id="btnResetPass" type="button">Reset senha</button>
          </div>
        </div>
      </section>`;

    const f = {
      id: qs("#f_id"), category: qs("#f_category"),
      title_pt: qs("#f_title_pt"), title_en: qs("#f_title_en"), title_es: qs("#f_title_es"),
      short_pt: qs("#f_short_pt"), short_en: qs("#f_short_en"), short_es: qs("#f_short_es"),
      def_pt: qs("#f_def_pt"), def_en: qs("#f_def_en"), def_es: qs("#f_def_es"),
      bullets_pt: qs("#f_bullets_pt"), bullets_en: qs("#f_bullets_en"), bullets_es: qs("#f_bullets_es"),
      ex_pt: qs("#f_ex_pt"), ex_en: qs("#f_ex_en"), ex_es: qs("#f_ex_es"),
      aliases: qs("#f_aliases"), tags: qs("#f_tags"), level: qs("#f_level"), seealso: qs("#f_seealso"),
      image: qs("#f_image"), imageFile: qs("#f_image_file"), loadSelect: qs("#adminLoadSelect")
    };
    const toLines=(t)=> String(t||"").split("\n").map(s=>s.trim()).filter(Boolean).map(s=>s.replace(/^[-•]\s*/,""));
    const toCsv=(t)=> String(t||"").split(",").map(s=>s.trim()).filter(Boolean);
    const fileToDataUrl=(file)=> new Promise((resolve,reject)=>{ const r=new FileReader(); r.onload=()=>resolve(String(r.result||"")); r.onerror=reject; r.readAsDataURL(file); });
    const copyToClipboard=async(text)=>{ try{ await navigator.clipboard.writeText(text);}catch{ const ta=document.createElement("textarea"); ta.value=text; ta.style.position="fixed"; ta.style.left="-9999px"; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);} };
    const clearForm=()=>{ Object.values(f).forEach(el=>{ if(!el) return; if(el.type==="file") el.value=""; else if(el.tagName==="SELECT") el.value=""; else el.value=""; }); f.category.value="history"; f.loadSelect.value=""; };
    const fillForm=(e)=>{ f.id.value=e.id||""; f.category.value=e.category||"history"; f.title_pt.value=getText(e.title,"pt"); f.title_en.value=getText(e.title,"en"); f.title_es.value=getText(e.title,"es"); f.short_pt.value=getText(e.short,"pt"); f.short_en.value=getText(e.short,"en"); f.short_es.value=getText(e.short,"es"); f.def_pt.value=getText(e.definition,"pt"); f.def_en.value=getText(e.definition,"en"); f.def_es.value=getText(e.definition,"es"); f.bullets_pt.value=e.bullets?.pt? e.bullets.pt.join("\n"):""; f.bullets_en.value=e.bullets?.en? e.bullets.en.join("\n"):""; f.bullets_es.value=e.bullets?.es? e.bullets.es.join("\n"):""; f.ex_pt.value=e.examples? getText(e.examples,"pt"):""; f.ex_en.value=e.examples? getText(e.examples,"en"):""; f.ex_es.value=e.examples? getText(e.examples,"es"):""; f.aliases.value=(e.aliases||[]).join(", "); f.tags.value=(e.tags||[]).join(", "); f.level.value=e.level||""; f.seealso.value=(e.seeAlso||[]).join(", "); f.image.value=e.imageUrl||""; };
    f.loadSelect.addEventListener("change", ()=>{ const id=f.loadSelect.value; if(!id) return; const list=loadCustomEntries(); const found=list.find(x=>x.id===id); if(found) fillForm(found); });
    f.imageFile.addEventListener("change", async ()=>{ const file=f.imageFile.files && f.imageFile.files[0]; if(!file) return; const dataUrl=await fileToDataUrl(file); f.image.value=dataUrl; toast("Imagem carregada."); });
    qs("#btnSave").addEventListener("click", ()=>{ const id=safeId(f.id.value); if(!id){ toast("ID inválido."); return; }
      const entry={ id, category:f.category.value||"history", title:{pt:f.title_pt.value||id,en:f.title_en.value||f.title_pt.value||id,es:f.title_es.value||f.title_pt.value||id}, short:{pt:f.short_pt.value||"",en:f.short_en.value||"",es:f.short_es.value||""}, definition:{pt:f.def_pt.value||"",en:f.def_en.value||"",es:f.def_es.value||""}, bullets:{pt:toLines(f.bullets_pt.value),en:toLines(f.bullets_en.value),es:toLines(f.bullets_es.value)}, examples:{pt:f.ex_pt.value||"",en:f.ex_en.value||"",es:f.ex_es.value||""}, aliases:toCsv(f.aliases.value), tags:toCsv(f.tags.value), level:(f.level.value||"").trim(), seeAlso:toCsv(f.seealso.value), imageUrl:(f.image.value||"").trim() };
      if(!entry.examples.pt && !entry.examples.en && !entry.examples.es) delete entry.examples;
      if(!entry.bullets.pt.length && !entry.bullets.en.length && !entry.bullets.es.length) delete entry.bullets;
      if(!entry.tags.length) delete entry.tags; if(!entry.level) delete entry.level;
      const list=loadCustomEntries(); const idx=list.findIndex(x=>x.id===id); if(idx>=0) list[idx]=entry; else list.push(entry); saveCustomEntries(list); toast(UI[lang].saved); location.hash="#/admin"; });
    qs("#btnDelete").addEventListener("click", ()=>{ const id=safeId(qs("#f_id").value); if(!id) return; openModal({ title:"Confirmar", bodyHTML:`<p>${escapeHtml(UI[lang].confirmDelete)}</p><p style="margin:10px 0 0;font-weight:900">${escapeHtml(id)}</p>`, footerHTML:`<button class="btn btn--secondary" id="delCancel">${escapeHtml(UI[lang].cancel)}</button><button class="btn btn--danger" id="delOk">Deletar</button>` }); qs("#delCancel").addEventListener("click", closeModal); qs("#delOk").addEventListener("click", ()=>{ const list=loadCustomEntries().filter(x=>x.id!==id); saveCustomEntries(list); closeModal(); toast(UI[lang].deleted); location.hash="#/admin"; }); });
    qs("#btnClear").addEventListener("click", clearForm);
    qs("#btnExport").addEventListener("click", async ()=>{ const list=loadCustomEntries(); const payload=JSON.stringify(list,null,2); await copyToClipboard(payload); toast(UI[lang].exported); openModal({ title:"Export JSON", bodyHTML:`<div class="field"><label>Conteúdo</label><textarea style="min-height:220px">${escapeHtml(payload)}</textarea></div>`, footerHTML:`<button class="btn btn--primary" id="expClose">OK</button>` }); qs("#expClose").addEventListener("click", closeModal); });
    qs("#btnImport").addEventListener("click", ()=>{ openModal({ title:"Import JSON", bodyHTML:`<div class="field"><label>JSON</label><textarea id="importArea" style="min-height:240px" placeholder='[ { "id": "...", "category": "scales", ... } ]'></textarea></div>`, footerHTML:`<button class="btn btn--secondary" id="impCancel">${escapeHtml(UI[lang].cancel)}</button><button class="btn btn--primary" id="impOk">Importar</button>` }); qs("#impCancel").addEventListener("click", closeModal); qs("#impOk").addEventListener("click", ()=>{ const raw=qs("#importArea").value||""; try{ const parsed=JSON.parse(raw); if(!Array.isArray(parsed)) throw 0; const cleaned=parsed.filter(x=>x&&typeof x==="object"&&x.id&&x.category).map(x=>({...x,id:safeId(x.id),category:String(x.category||"history")})); saveCustomEntries(cleaned); closeModal(); toast(UI[lang].imported); location.hash="#/admin"; }catch{ toast("JSON inválido."); } }); });
    qs("#btnResetPass").addEventListener("click", ()=>{ setAdminPass(DEFAULT_ADMIN_PASS); toast(UI[lang].resetPassDone); });
  };

  // Router
  const parseHash = ()=>{
    const raw=location.hash || "#/"; const h=raw.replace(/^#/, ""); const [path,queryStr]=h.split("?"); const parts=path.split("/").filter(Boolean); const query=new URLSearchParams(queryStr||""); return {parts,query};
  };
  const render = ()=>{
    const v=(searchInput.value||"").trim(); clearSearchBtn.style.display = v ? "block" : "none";
    const {parts, query} = parseHash(); const r0=parts[0]||""; const r1=parts[1]||"";
    if(r0===""||r0==="home"){ renderHome(); return; }
    if(r0==="entry"){ renderEntry(decodeURIComponent(r1||"")); return; }
    if(r0==="category"){ renderCategory(decodeURIComponent(r1||"")); return; }
    if(r0==="search"){ const q=query.get("q") || searchInput.value || ""; renderSearch(q); return; }
    if(r0==="favorites"){ renderFavorites(); return; }
    if(r0==="recent"){ renderRecent(); return; }
    if(r0==="collection"){ renderCollection(decodeURIComponent(r1||"")); return; }
    if(r0==="tracks"){ renderTracks(); return; }
    if(r0==="track"){ renderTrack(decodeURIComponent(r1||"")); return; }
    if(r0==="quiz"){ renderQuiz(); return; }
    if(r0==="admin"){ requireAdmin().then(ok=>{ if(ok) renderAdmin(); else location.hash="#/"; }); return; }
    renderHome();
  };
  const renderCollection = (colId)=>{
    const lang=getLang();
    const col=COLLECTIONS.find(c=>c.id===colId); if(!col){ location.hash="#/"; return; }
    const list=getAllEntries().filter(col.match);
    const cards=list.map(e=>makeCard(e,lang)).join("");
    app.innerHTML = `
      <div class="pagehead"><div><h1>${escapeHtml(getText(col.title,lang))}</h1><p>${list.length} itens</p></div><div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a><a class="linkpill" href="#/favorites">${escapeHtml(UI[lang].myList)} ★</a></div></div>
      <div class="grid">${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}</div>`;
    bindCardClicks(app);
  };

  // Header
  const setupHeader = ()=>{
    const langBtn=qs("#langBtn"); const langMenu=qs("#langMenu");
    const closeMenu=()=>{ langMenu.style.display="none"; langBtn.setAttribute("aria-expanded","false"); };
    const openMenu=()=>{ langMenu.style.display="block"; langBtn.setAttribute("aria-expanded","true"); };
    langBtn.addEventListener("click", ()=>{ const open=langMenu.style.display==="block"; open? closeMenu(): openMenu(); });
    document.addEventListener("click",(e)=>{ if(!langMenu.contains(e.target) && !langBtn.contains(e.target)) closeMenu(); });
    qsa(".pillselect__item", langMenu).forEach(btn=>{
      btn.addEventListener("click", ()=>{ const l=btn.getAttribute("data-lang"); if(l==="pt"||l==="en"||l==="es"){ setLang(l); closeMenu(); render(); }});
    });
    searchInput.addEventListener("input", ()=>{
      const v=(searchInput.value||"").trim(); clearSearchBtn.style.display = v ? "block" : "none";
      if(location.hash.startsWith("#/search")){ const url=`#/search?q=${encodeURIComponent(v)}`; history.replaceState(null,"",url); renderSearch(v); bindCardClicks(app); }
    });
    searchInput.addEventListener("keydown",(e)=>{ if(e.key==="Enter"){ e.preventDefault(); const v=(searchInput.value||"").trim(); location.hash=`#/search?q=${encodeURIComponent(v)}`; }});
    clearSearchBtn.addEventListener("click", ()=>{ searchInput.value=""; clearSearchBtn.style.display="none"; if(location.hash.startsWith("#/search")){ history.replaceState(null,"","#/search"); renderSearch(""); } searchInput.focus(); });
    adminBtn.addEventListener("click", ()=> location.hash="#/admin");
  };

  // Boot
  const boot=()=>{ setLang(getLang()); setupHeader(); window.addEventListener("hashchange", render); if(!location.hash) location.hash="#/"; render(); };
  const wait=()=>{ if(Array.isArray(window.IMVPEDIA_ENTRIES)) boot(); else setTimeout(wait,25); };
  wait();
})();