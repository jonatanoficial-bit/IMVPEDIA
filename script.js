(() => {
  "use strict";

  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => [...el.querySelectorAll(s)];
  const escapeHtml = (str="") => str.replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
  const safeId = (s="") => String(s).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_]/g,"").toLowerCase();

  const STORE = {
    lang: "imvpedia_lang",
    custom: "imvpedia_custom_entries_v1",
    adminPass: "imvpedia_admin_pass_v1",
    lastViewed: "imvpedia_last_viewed_v1",
    favorites: "imvpedia_favorites_v1",
    history: "imvpedia_history_v1"
  };
  const DEFAULT_ADMIN_PASS = "imvadmin";

  const UI = {
    pt: {
      homeTitle: "IMVpedia",
      homeSub: "Uma enciclopédia premium de Teoria Musical (IMV Instituto Musical Vale). Explore escalas, harmonia, ritmo, leitura, história e pratique com estrutura.",
      featured: "Destaque do dia",
      continue: "Continuar",
      open: "Abrir",
      browseAll: "Ver tudo",
      searchTitle: "Resultados da busca",
      searchHint: "Digite para buscar por termos, aliases, tags e conteúdo.",
      categoryTitle: "Categoria",
      notFound: "Nada encontrado.",
      back: "Voltar",
      seeAlso: "Ver também",
      bullets: "Pontos-chave",
      example: "Exemplo",
      about: "Sobre",
      myList: "Minha Lista",
      recent: "Continuar assistindo",
      collections: "Coleções",
      addList: "Adicionar à Minha Lista",
      removeList: "Remover da Minha Lista",
      adminTitle: "Painel Admin (Local)",
      adminSub: "Crie/edite verbetes e imagens (Base64) sem servidor. Salva no seu navegador (localStorage).",
      lockTitle: "Acesso Admin",
      lockBody: "Digite a senha do Admin para entrar.",
      passLabel: "Senha",
      enter: "Entrar",
      cancel: "Cancelar",
      wrongPass: "Senha incorreta.",
      saved: "Salvo!",
      deleted: "Deletado!",
      imported: "Importado!",
      exported: "Exportado (copiado).",
      resetPassDone: "Senha redefinida.",
      confirmDelete: "Tem certeza que quer deletar este verbete?",
      tips: "Dica: bullets e aliases separados por quebra de linha / vírgulas.",
      imgHint: "Upload → vira Base64 (fica no navegador)."
    },
    en: {
      homeTitle: "IMVpedia",
      homeSub: "A premium Music Theory encyclopedia (IMV Instituto Musical Vale). Explore scales, harmony, rhythm, notation, history, and practice with structure.",
      featured: "Featured today",
      continue: "Continue",
      open: "Open",
      browseAll: "Browse all",
      searchTitle: "Search results",
      searchHint: "Type to search terms, aliases, tags and content.",
      categoryTitle: "Category",
      notFound: "Nothing found.",
      back: "Back",
      seeAlso: "See also",
      bullets: "Key points",
      example: "Example",
      about: "About",
      myList: "My List",
      recent: "Continue watching",
      collections: "Collections",
      addList: "Add to My List",
      removeList: "Remove from My List",
      adminTitle: "Admin Panel (Local)",
      adminSub: "Create/edit entries and images (Base64) without a server. Saved in your browser (localStorage).",
      lockTitle: "Admin Access",
      lockBody: "Enter the admin password to continue.",
      passLabel: "Password",
      enter: "Enter",
      cancel: "Cancel",
      wrongPass: "Wrong password.",
      saved: "Saved!",
      deleted: "Deleted!",
      imported: "Imported!",
      exported: "Exported (copied).",
      resetPassDone: "Password reset.",
      confirmDelete: "Are you sure you want to delete this entry?",
      tips: "Tip: bullets and aliases separated by newline / commas.",
      imgHint: "Upload → becomes Base64 (stored locally)."
    },
    es: {
      homeTitle: "IMVpedia",
      homeSub: "Una enciclopedia premium de Teoría Musical (IMV Instituto Musical Vale). Explora escalas, armonía, ritmo, lectura, historia y practica con estructura.",
      featured: "Destacado del día",
      continue: "Continuar",
      open: "Abrir",
      browseAll: "Ver todo",
      searchTitle: "Resultados de búsqueda",
      searchHint: "Escribe para buscar términos, alias, tags y contenido.",
      categoryTitle: "Categoría",
      notFound: "No se encontró nada.",
      back: "Volver",
      seeAlso: "Ver también",
      bullets: "Puntos clave",
      example: "Ejemplo",
      about: "Acerca de",
      myList: "Mi Lista",
      recent: "Seguir viendo",
      collections: "Colecciones",
      addList: "Agregar a Mi Lista",
      removeList: "Quitar de Mi Lista",
      adminTitle: "Panel Admin (Local)",
      adminSub: "Crea/edita entradas e imágenes (Base64) sin servidor. Guardado en tu navegador (localStorage).",
      lockTitle: "Acceso Admin",
      lockBody: "Ingresa la contraseña de Admin para continuar.",
      passLabel: "Contraseña",
      enter: "Entrar",
      cancel: "Cancelar",
      wrongPass: "Contraseña incorrecta.",
      saved: "¡Guardado!",
      deleted: "¡Eliminado!",
      imported: "¡Importado!",
      exported: "Exportado (copiado).",
      resetPassDone: "Contraseña restablecida.",
      confirmDelete: "¿Seguro que deseas eliminar esta entrada?",
      tips: "Tip: bullets y alias separados por salto de línea / comas.",
      imgHint: "Subir → se vuelve Base64 (guardado localmente)."
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

  // Coleções (Netflix-like) — usa category + tags + level
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
  function toast(msg){
    if(!msg) return;
    toastEl.textContent = msg;
    toastEl.style.display = "block";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=> toastEl.style.display="none", 2200);
  }

  // Modal
  const modal = qs("#modal");
  const modalBackdrop = qs("#modalBackdrop");
  const modalCloseBtn = qs("#modalCloseBtn");
  const modalTitle = qs("#modalTitle");
  const modalBody = qs("#modalBody");
  const modalFooter = qs("#modalFooter");
  function openModal({title, bodyHTML, footerHTML}){
    modalTitle.textContent = title || "";
    modalBody.innerHTML = bodyHTML || "";
    modalFooter.innerHTML = footerHTML || "";
    modal.style.display = "block";
    modal.setAttribute("aria-hidden","false");
  }
  function closeModal(){
    modal.style.display = "none";
    modal.setAttribute("aria-hidden","true");
    modalBody.innerHTML = "";
    modalFooter.innerHTML = "";
  }
  modalBackdrop.addEventListener("click", closeModal);
  modalCloseBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && modal.style.display === "block") closeModal();
  });

  // Data
  function getLang(){
    const l = localStorage.getItem(STORE.lang);
    return (l === "pt" || l === "en" || l === "es") ? l : "pt";
  }
  function setLang(l){
    localStorage.setItem(STORE.lang, l);
    qs("#langLabel").textContent = l.toUpperCase();
    document.documentElement.lang = l === "pt" ? "pt-BR" : (l === "es" ? "es" : "en");
  }

  function getAdminPass(){
    const p = localStorage.getItem(STORE.adminPass);
    return (p && p.length >= 3) ? p : DEFAULT_ADMIN_PASS;
  }
  function setAdminPass(p){ localStorage.setItem(STORE.adminPass, p); }

  function loadCustomEntries(){
    try{
      const raw = localStorage.getItem(STORE.custom);
      if(!raw) return [];
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    }catch{ return []; }
  }
  function saveCustomEntries(arr){ localStorage.setItem(STORE.custom, JSON.stringify(arr || [])); }

  function mergeEntries(base, custom){
    const map = new Map();
    (base || []).forEach(e => map.set(e.id, e));
    (custom || []).forEach(e => map.set(e.id, e));
    return [...map.values()];
  }

  function getAllEntries(){
    const base = Array.isArray(window.IMVPEDIA_ENTRIES) ? window.IMVPEDIA_ENTRIES : [];
    const custom = loadCustomEntries();
    return mergeEntries(base, custom);
  }
  function getEntryById(id){
    return getAllEntries().find(e => e.id === id) || null;
  }
  function getText(obj, lang){
    if(!obj) return "";
    if(typeof obj === "string") return obj;
    return obj[lang] || obj.pt || obj.en || obj.es || "";
  }
  function normalize(s){
    return String(s||"")
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  // Favorites / History
  function loadFavorites(){
    try{
      const raw = localStorage.getItem(STORE.favorites);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    }catch{ return []; }
  }
  function saveFavorites(arr){
    localStorage.setItem(STORE.favorites, JSON.stringify(arr || []));
  }
  function isFav(id){
    const fav = loadFavorites();
    return fav.includes(id);
  }
  function toggleFav(id){
    const fav = loadFavorites();
    const idx = fav.indexOf(id);
    if(idx >= 0) fav.splice(idx,1);
    else fav.unshift(id);
    saveFavorites(fav.slice(0,200));
    return fav.includes(id);
  }

  function loadHistory(){
    try{
      const raw = localStorage.getItem(STORE.history);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    }catch{ return []; }
  }
  function pushHistory(id){
    const h = loadHistory().filter(x=>x!==id);
    h.unshift(id);
    localStorage.setItem(STORE.history, JSON.stringify(h.slice(0,30)));
  }

  function setLastViewed(id){
    try{ localStorage.setItem(STORE.lastViewed, id); }catch{}
  }
  function getLastViewed(){
    try{ return localStorage.getItem(STORE.last_viewed) || localStorage.getItem(STORE.lastViewed) || ""; }catch{ return ""; }
  }

  function entrySearchBlob(entry){
    const lang = getLang();
    const parts = [
      entry.id, entry.category,
      getText(entry.title, "pt"), getText(entry.title, "en"), getText(entry.title, "es"),
      getText(entry.short, "pt"), getText(entry.short, "en"), getText(entry.short, "es"),
      getText(entry.definition, "pt"), getText(entry.definition, "en"), getText(entry.definition, "es"),
      entry.examples ? getText(entry.examples, "pt") : "",
      entry.examples ? getText(entry.examples, "en") : "",
      entry.examples ? getText(entry.examples, "es") : "",
      (entry.aliases || []).join(" "),
      (entry.seeAlso || []).join(" "),
      (entry.tags || []).join(" "),
      entry.level || ""
    ];
    if(entry.bullets){
      parts.push(
        (entry.bullets.pt || []).join(" "),
        (entry.bullets.en || []).join(" "),
        (entry.bullets.es || []).join(" ")
      );
    }
    parts.unshift(getText(entry.title, lang), getText(entry.short, lang), getText(entry.definition, lang));
    return normalize(parts.join(" "));
  }

  function searchEntries(query){
    const q = normalize(query).trim();
    if(!q) return [];
    const all = getAllEntries();
    const tokens = q.split(/\s+/).filter(Boolean);
    const scored = [];
    for(const e of all){
      const blob = entrySearchBlob(e);
      let score = 0;
      for(const t of tokens){
        if(blob.includes(t)){
          score += 10;
          if(normalize(e.id).includes(t)) score += 12;
          if(normalize(getText(e.title, getLang())).includes(t)) score += 14;
          if((e.aliases||[]).some(a => normalize(a).includes(t))) score += 10;
          if((e.tags||[]).some(a => normalize(a).includes(t))) score += 8;
        }else score -= 2;
      }
      if(score > 0) scored.push({e, score});
    }
    scored.sort((a,b)=> b.score - a.score);
    return scored.map(x=>x.e);
  }

  function categoryEntries(cat){ return getAllEntries().filter(e => e.category === cat); }
  function badgeLabel(cat, lang){
    return (CATEGORY_LABELS[cat] && CATEGORY_LABELS[cat][lang]) ? CATEGORY_LABELS[cat][lang] : (cat || "");
  }

  // UI: cards/rows
  function makeCard(entry, lang){
    const title = escapeHtml(getText(entry.title, lang));
    const desc = escapeHtml(getText(entry.short, lang));
    const cat = entry.category || "history";
    const badge = escapeHtml(badgeLabel(cat, lang));
    const img = entry.imageUrl || "";
    const favOn = isFav(entry.id);

    const media = img
      ? `<div class="card__media"><img alt="" src="${img}"><span class="badge">${badge}</span><button class="favbtn ${favOn?"is-on":""}" type="button" data-fav="${escapeHtml(entry.id)}" aria-label="Favorito">${favOn?"★":"☆"}</button></div>`
      : `<div class="card__media"><span class="badge">${badge}</span><button class="favbtn ${favOn?"is-on":""}" type="button" data-fav="${escapeHtml(entry.id)}" aria-label="Favorito">${favOn?"★":"☆"}</button></div>`;

    const tags = (entry.tags||[]).slice(0,2).map(t=>`<span class="pill">${escapeHtml(t)}</span>`).join("");

    return `
      <article class="card" role="button" tabindex="0" data-open="${escapeHtml(entry.id)}">
        ${media}
        <div class="card__body">
          <h3 class="card__title">${title}</h3>
          <p class="card__desc">${desc}</p>
          <div class="card__meta">
            <span class="pill">${escapeHtml(entry.id)}</span>
            ${entry.level ? `<span class="pill">${escapeHtml(entry.level)}</span>` : ""}
            ${tags}
          </div>
        </div>
      </article>
    `;
  }

  function bindCardClicks(container){
    qsa("[data-open]", container).forEach(el=>{
      const id = el.getAttribute("data-open");
      const go = ()=> { location.hash = `#/entry/${encodeURIComponent(id)}`; };
      el.addEventListener("click", (e)=>{
        if(e.target && e.target.closest && e.target.closest("[data-fav]")) return;
        go();
      });
      el.addEventListener("keydown", (e)=>{
        if(e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    });

    // fav buttons
    qsa("[data-fav]", container).forEach(btn=>{
      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute("data-fav");
        const on = toggleFav(id);
        btn.textContent = on ? "★" : "☆";
        btn.classList.toggle("is-on", on);
        toast(on ? UI[getLang()].addList : UI[getLang()].removeList);
      });
    });
  }

  function makeRow(title, hint, entries, lang, linkHref){
    const cards = entries.map(e => makeCard(e, lang)).join("");
    const rowId = `row_${Math.random().toString(16).slice(2)}`;
    return `
      <section class="section">
        <div class="section__head">
          <div>
            <h2 class="section__title">${escapeHtml(title)}</h2>
            ${hint ? `<p class="section__hint">${escapeHtml(hint)}</p>` : `<p class="section__hint"></p>`}
          </div>
          ${linkHref ? `<a class="linkpill" href="${linkHref}">${escapeHtml(UI[lang].browseAll)} →</a>` : ``}
        </div>
        <div class="row">
          <button class="row__btn row__btn--left" type="button" aria-label="Anterior">‹</button>
          <div class="row__scroller" id="${rowId}">
            ${cards}
          </div>
          <button class="row__btn row__btn--right" type="button" aria-label="Próximo">›</button>
        </div>
      </section>
    `;
  }

  function bindRows(){
    qsa(".row").forEach(row=>{
      const scroller = qs(".row__scroller", row);
      const left = qs(".row__btn--left", row);
      const right = qs(".row__btn--right", row);
      if(!scroller || !left || !right) return;

      const scrollByCards = (dir)=>{
        const card = qs(".card", scroller);
        const step = (card ? card.getBoundingClientRect().width : 240) + 12;
        scroller.scrollBy({ left: dir * step * 2.4, behavior: "smooth" });
      };
      left.addEventListener("click", ()=> scrollByCards(-1));
      right.addEventListener("click", ()=> scrollByCards(1));
    });
  }

  function pickFeatured(){
    const all = getAllEntries();
    if(!all.length) return null;
    const hist = loadHistory();
    if(hist.length){
      const e = getEntryById(hist[0]);
      if(e) return e;
    }
    const preferred = ["harmony","scales","rhythm","notation","history"];
    for(const cat of preferred){
      const list = all.filter(e=>e.category===cat);
      if(list.length) return list[Math.floor(Math.random()*list.length)];
    }
    return all[Math.floor(Math.random()*all.length)];
  }

  // Pages
  function renderHome(){
    const lang = getLang();
    const featured = pickFeatured();
    const featuredTitle = featured ? escapeHtml(getText(featured.title, lang)) : "—";
    const featuredDesc = featured ? escapeHtml(getText(featured.short, lang)) : "";
    const featuredCat = featured ? featured.category : "history";
    const featuredBadge = escapeHtml(badgeLabel(featuredCat, lang));
    const featuredImg = featured && featured.imageUrl ? featured.imageUrl : "";

    const heroThumb = featuredImg ? `<div class="thumb"><img alt="" src="${featuredImg}"></div>` : `<div class="thumb"></div>`;

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
              <span class="chip">Continuar assistindo</span>
              <span class="chip">Modo Admin</span>
            </div>

            <div class="hero__cta">
              <button class="btn btn--primary" type="button" id="ctaFeatured">
                ${escapeHtml(UI[lang].open)}: ${featuredTitle}
              </button>
              <button class="btn btn--secondary" type="button" id="ctaSearch">
                ${escapeHtml(UI[lang].continue)}: Buscar
              </button>
            </div>
          </div>

          <aside class="hero__feature" aria-label="${escapeHtml(UI[lang].featured)}">
            <div class="hero__featureTop">
              <div class="kicker"><span class="dot"></span>${escapeHtml(UI[lang].featured)}</div>
            </div>
            <div class="hero__featureCard">
              ${heroThumb}
              <div class="featureMeta">
                <h3>${featuredTitle}</h3>
                <p>${featuredDesc}</p>
                <div class="mini">
                  <span class="pill">${featuredBadge}</span>
                  ${featured ? `<span class="pill">${escapeHtml(featured.id)}</span>` : ""}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    `;

    const favIds = loadFavorites();
    const favEntries = favIds.map(getEntryById).filter(Boolean).slice(0,16);

    const histIds = loadHistory();
    const histEntries = histIds.map(getEntryById).filter(Boolean).slice(0,16);

    const myListRow = favEntries.length
      ? makeRow(UI[lang].myList, "", favEntries, lang, "#/favorites")
      : "";

    const recentRow = histEntries.length
      ? makeRow(UI[lang].recent, "", histEntries, lang, "#/recent")
      : "";

    const collectionsRows = COLLECTIONS.map(col=>{
      const list = getAllEntries().filter(col.match).slice(0,16);
      if(!list.length) return "";
      return makeRow(getText(col.title, lang), UI[lang].collections, list, lang, `#/collection/${encodeURIComponent(col.id)}`);
    }).join("");

    const catOrder = ["scales","harmony","rhythm","notation","history"];
    const categoryRows = catOrder.map(cat=>{
      const label = badgeLabel(cat, lang);
      const hint = (CATEGORY_HINTS[cat] && CATEGORY_HINTS[cat][lang]) ? CATEGORY_HINTS[cat][lang] : "";
      const subset = categoryEntries(cat).slice(0,16);
      return makeRow(label, hint, subset, lang, `#/category/${encodeURIComponent(cat)}`);
    }).join("");

    app.innerHTML = hero + myListRow + recentRow + collectionsRows + categoryRows;

    const ctaFeatured = qs("#ctaFeatured");
    const ctaSearch = qs("#ctaSearch");
    if(ctaFeatured && featured){
      ctaFeatured.addEventListener("click", ()=> location.hash = `#/entry/${encodeURIComponent(featured.id)}`);
    }
    if(ctaSearch){
      ctaSearch.addEventListener("click", ()=>{
        searchInput?.focus();
        location.hash = "#/search";
      });
    }

    bindCardClicks(app);
    bindRows();
  }

  function renderCategory(cat){
    const lang = getLang();
    const label = badgeLabel(cat, lang);
    const hint = (CATEGORY_HINTS[cat] && CATEGORY_HINTS[cat][lang]) ? CATEGORY_HINTS[cat][lang] : "";
    const list = categoryEntries(cat);

    const cards = list.map(e => makeCard(e, lang)).join("");
    app.innerHTML = `
      <div class="pagehead">
        <div>
          <h1>${escapeHtml(label)}</h1>
          <p>${escapeHtml(hint)} • ${list.length} verbetes</p>
        </div>
        <div class="kbtn">
          <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
          <a class="linkpill" href="#/favorites">${escapeHtml(UI[lang].myList)} ★</a>
        </div>
      </div>

      <div class="grid">
        ${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}
      </div>
    `;
    bindCardClicks(app);
  }

  function renderSearch(query){
    const lang = getLang();
    const q = (query || "").trim();
    const results = q ? searchEntries(q) : [];
    const cards = results.map(e => makeCard(e, lang)).join("");

    app.innerHTML = `
      <div class="pagehead">
        <div>
          <h1>${escapeHtml(UI[lang].searchTitle)}</h1>
          <p>${escapeHtml(UI[lang].searchHint)} ${q ? `• “${escapeHtml(q)}” • ${results.length} resultados` : ""}</p>
        </div>
        <div class="kbtn">
          <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
          <a class="linkpill" href="#/favorites">${escapeHtml(UI[lang].myList)} ★</a>
        </div>
      </div>

      ${q ? `
        <div class="grid">
          ${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}
        </div>
      ` : `
        <div class="field">
          <label>Buscar</label>
          <div class="hint">${escapeHtml(UI[lang].searchHint)}</div>
        </div>
      `}
    `;
    bindCardClicks(app);
  }

  function renderFavorites(){
    const lang = getLang();
    const fav = loadFavorites().map(getEntryById).filter(Boolean);
    const cards = fav.map(e => makeCard(e, lang)).join("");

    app.innerHTML = `
      <div class="pagehead">
        <div>
          <h1>${escapeHtml(UI[lang].myList)} ★</h1>
          <p>${fav.length ? `${fav.length} itens salvos` : escapeHtml(UI[lang].notFound)}</p>
        </div>
        <div class="kbtn">
          <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
        </div>
      </div>
      <div class="grid">
        ${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}
      </div>
    `;
    bindCardClicks(app);
  }

  function renderRecent(){
    const lang = getLang();
    const hist = loadHistory().map(getEntryById).filter(Boolean);
    const cards = hist.map(e => makeCard(e, lang)).join("");

    app.innerHTML = `
      <div class="pagehead">
        <div>
          <h1>${escapeHtml(UI[lang].recent)}</h1>
          <p>${hist.length ? `${hist.length} vistos recentemente` : escapeHtml(UI[lang].notFound)}</p>
        </div>
        <div class="kbtn">
          <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
        </div>
      </div>
      <div class="grid">
        ${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}
      </div>
    `;
    bindCardClicks(app);
  }

  function renderCollection(colId){
    const lang = getLang();
    const col = COLLECTIONS.find(c=>c.id===colId);
    if(!col){ location.hash="#/"; return; }
    const list = getAllEntries().filter(col.match);
    const cards = list.map(e => makeCard(e, lang)).join("");

    app.innerHTML = `
      <div class="pagehead">
        <div>
          <h1>${escapeHtml(getText(col.title, lang))}</h1>
          <p>${list.length} itens</p>
        </div>
        <div class="kbtn">
          <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
          <a class="linkpill" href="#/favorites">${escapeHtml(UI[lang].myList)} ★</a>
        </div>
      </div>
      <div class="grid">
        ${cards || `<div class="field" style="grid-column:1/-1">${escapeHtml(UI[lang].notFound)}</div>`}
      </div>
    `;
    bindCardClicks(app);
  }

  function renderEntry(id){
    const lang = getLang();
    const entry = getEntryById(id);
    if(!entry){
      app.innerHTML = `
        <div class="pagehead">
          <div><h1>${escapeHtml(UI[lang].notFound)}</h1><p>ID: ${escapeHtml(id)}</p></div>
          <div class="kbtn"><a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a></div>
        </div>
      `;
      return;
    }

    setLastViewed(entry.id);
    pushHistory(entry.id);

    const title = getText(entry.title, lang);
    const short = getText(entry.short, lang);
    const def = getText(entry.definition, lang);
    const bullets = entry.bullets ? (entry.bullets[lang] || entry.bullets.pt || entry.bullets.en || entry.bullets.es || []) : [];
    const example = entry.examples ? getText(entry.examples, lang) : "";
    const img = entry.imageUrl || "";
    const catLabel = badgeLabel(entry.category, lang);

    const favOn = isFav(entry.id);

    const see = Array.isArray(entry.seeAlso) ? entry.seeAlso : [];
    const seeLinks = see.map(sid=>{
      const e2 = getEntryById(sid);
      const label = e2 ? getText(e2.title, lang) : sid;
      return `<a class="linkpill" href="#/entry/${encodeURIComponent(sid)}">↗ ${escapeHtml(label)}</a>`;
    }).join("");

    const imgHtml = img ? `<div class="entry__img"><img alt="" src="${img}"></div>` : `<div class="entry__img"></div>`;

    const tags = (entry.tags||[]).map(t=>`<span class="pill">${escapeHtml(t)}</span>`).join("");

    app.innerHTML = `
      <div class="pagehead">
        <div>
          <h1>${escapeHtml(getText(entry.title, lang))}</h1>
          <p>${escapeHtml(catLabel)} • ${escapeHtml(entry.id)}</p>
        </div>
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
            <div class="seealso">
              <span class="pill">${escapeHtml(catLabel)}</span>
              ${entry.level ? `<span class="pill">${escapeHtml(entry.level)}</span>` : ""}
              ${tags}
            </div>
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
          <h2>Definição</h2>
          <div class="def">${def || ""}</div>

          ${bullets && bullets.length ? `
            <h2 style="margin-top:16px">${escapeHtml(UI[lang].bullets)}</h2>
            <ul>${bullets.map(b=>`<li>${escapeHtml(b)}</li>`).join("")}</ul>
          ` : ""}

          ${example ? `
            <h2>${escapeHtml(UI[lang].example)}</h2>
            <div class="example">${escapeHtml(example)}</div>
          ` : ""}

          ${seeLinks ? `
            <h2 style="margin-top:16px">${escapeHtml(UI[lang].seeAlso)}</h2>
            <div class="seealso">${seeLinks}</div>
          ` : ""}
        </div>
      </article>
    `;

    const favToggle = qs("#favToggle");
    if(favToggle){
      favToggle.addEventListener("click", ()=>{
        const on = toggleFav(entry.id);
        favToggle.textContent = `${on ? "★" : "☆"} ${on ? UI[lang].removeList : UI[lang].addList}`;
        toast(on ? UI[lang].addList : UI[lang].removeList);
      });
    }
  }

  // Admin (mantido do seu anterior — enxuto, sem mudar fluxo)
  function requireAdmin(){
    return new Promise((resolve)=>{
      const lang = getLang();
      openModal({
        title: UI[lang].lockTitle,
        bodyHTML: `
          <p style="margin-top:0">${escapeHtml(UI[lang].lockBody)}</p>
          <div class="field">
            <label>${escapeHtml(UI[lang].passLabel)}</label>
            <input id="adminPassInput" type="password" placeholder="••••••••" />
            <div class="hint">Default: <b>${escapeHtml(DEFAULT_ADMIN_PASS)}</b></div>
          </div>
        `,
        footerHTML: `
          <button class="btn btn--secondary" type="button" id="adminCancel">${escapeHtml(UI[lang].cancel)}</button>
          <button class="btn btn--primary" type="button" id="adminEnter">${escapeHtml(UI[lang].enter)}</button>
        `
      });

      const passInput = qs("#adminPassInput");
      const btnCancel = qs("#adminCancel");
      const btnEnter = qs("#adminEnter");

      const finish = (ok)=>{ closeModal(); resolve(ok); };
      btnCancel.addEventListener("click", ()=> finish(false));
      btnEnter.addEventListener("click", ()=>{
        const pass = passInput.value || "";
        if(pass === getAdminPass()) finish(true);
        else toast(UI[lang].wrongPass);
      });
      passInput.addEventListener("keydown", (e)=>{
        if(e.key === "Enter"){ e.preventDefault(); btnEnter.click(); }
      });
      setTimeout(()=> passInput.focus(), 50);
    });
  }

  function renderAdmin(){
    const lang = getLang();
    const custom = loadCustomEntries();

    const options = Object.keys(CATEGORY_LABELS).map(cat=>{
      const label = badgeLabel(cat, lang);
      return `<option value="${escapeHtml(cat)}">${escapeHtml(label)} (${escapeHtml(cat)})</option>`;
    }).join("");

    const customList = custom
      .slice()
      .sort((a,b)=> (a.id||"").localeCompare(b.id||""))
      .map(e=> `<option value="${escapeHtml(e.id)}">${escapeHtml(e.id)} — ${escapeHtml(getText(e.title, lang))}</option>`)
      .join("");

    app.innerHTML = `
      <section class="admin">
        <div class="admin__head">
          <div>
            <h1>${escapeHtml(UI[lang].adminTitle)}</h1>
            <p>${escapeHtml(UI[lang].adminSub)}</p>
          </div>
          <div class="kbtn">
            <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
          </div>
        </div>

        <div class="admin__body">
          <div class="field">
            <label>Carregar verbete (custom)</label>
            <select id="adminLoadSelect">
              <option value="">—</option>
              ${customList}
            </select>
            <div class="hint">${escapeHtml(UI[lang].tips)}</div>
          </div>

          <div class="hr"></div>

          <div class="formgrid">
            <div class="field">
              <label>ID (único)</label>
              <input id="f_id" placeholder="ex.: tritone-substitution" />
              <div class="hint">Use letras/números/hífen. Sem espaços.</div>
            </div>

            <div class="field">
              <label>Categoria</label>
              <select id="f_category">${options}</select>
              <div class="hint">Define onde o card aparece.</div>
            </div>

            <div class="field">
              <label>Título (PT)</label>
              <input id="f_title_pt" placeholder="ex.: Substituição por Trítono" />
            </div>
            <div class="field">
              <label>Title (EN)</label>
              <input id="f_title_en" placeholder="e.g.: Tritone Substitution" />
            </div>
            <div class="field">
              <label>Título (ES)</label>
              <input id="f_title_es" placeholder="ej.: Sustitución por Tritono" />
            </div>

            <div class="field">
              <label>Resumo (PT)</label>
              <textarea id="f_short_pt" placeholder="Frase curta…"></textarea>
            </div>
            <div class="field">
              <label>Summary (EN)</label>
              <textarea id="f_short_en" placeholder="Short sentence…"></textarea>
            </div>
            <div class="field">
              <label>Resumen (ES)</label>
              <textarea id="f_short_es" placeholder="Frase corta…"></textarea>
            </div>

            <div class="field" style="grid-column:1/-1">
              <label>Definição (PT) — aceita HTML simples</label>
              <textarea id="f_def_pt" placeholder="Texto completo…"></textarea>
            </div>
            <div class="field" style="grid-column:1/-1">
              <label>Definition (EN) — supports simple HTML</label>
              <textarea id="f_def_en" placeholder="Full text…"></textarea>
            </div>
            <div class="field" style="grid-column:1/-1">
              <label>Definición (ES) — soporta HTML simple</label>
              <textarea id="f_def_es" placeholder="Texto completo…"></textarea>
            </div>

            <div class="field">
              <label>Bullets (PT) — 1 por linha</label>
              <textarea id="f_bullets_pt" placeholder="• item 1&#10;• item 2"></textarea>
            </div>
            <div class="field">
              <label>Bullets (EN) — 1 per line</label>
              <textarea id="f_bullets_en" placeholder="• item 1&#10;• item 2"></textarea>
            </div>
            <div class="field">
              <label>Bullets (ES) — 1 por línea</label>
              <textarea id="f_bullets_es" placeholder="• item 1&#10;• item 2"></textarea>
            </div>

            <div class="field">
              <label>Exemplo (PT)</label>
              <textarea id="f_ex_pt" placeholder="Ex.: ..."></textarea>
            </div>
            <div class="field">
              <label>Example (EN)</label>
              <textarea id="f_ex_en" placeholder="Example: ..."></textarea>
            </div>
            <div class="field">
              <label>Ejemplo (ES)</label>
              <textarea id="f_ex_es" placeholder="Ej.: ..."></textarea>
            </div>

            <div class="field" style="grid-column:1/-1">
              <label>Aliases (separar por vírgula)</label>
              <input id="f_aliases" placeholder="ex.: tritone, subV, substitute..." />
            </div>

            <div class="field" style="grid-column:1/-1">
              <label>Tags (separar por vírgula) — ex.: modes, advanced, reading</label>
              <input id="f_tags" placeholder="ex.: modes, beginner, essentials" />
            </div>

            <div class="field">
              <label>Nível</label>
              <select id="f_level">
                <option value="">—</option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="advanced">advanced</option>
              </select>
            </div>

            <div class="field" style="grid-column:1/-1">
              <label>See Also (IDs separados por vírgula)</label>
              <input id="f_seealso" placeholder="ex.: tritone, dominant-function, altered-dominant" />
            </div>

            <div class="field" style="grid-column:1/-1">
              <label>Imagem (Base64 / URL)</label>
              <input id="f_image" placeholder="Cole URL ou Base64..." />
              <input id="f_image_file" type="file" accept="image/*" />
              <div class="hint">${escapeHtml(UI[lang].imgHint)}</div>
            </div>
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
      </section>
    `;

    const f = {
      id: qs("#f_id"),
      category: qs("#f_category"),
      title_pt: qs("#f_title_pt"),
      title_en: qs("#f_title_en"),
      title_es: qs("#f_title_es"),
      short_pt: qs("#f_short_pt"),
      short_en: qs("#f_short_en"),
      short_es: qs("#f_short_es"),
      def_pt: qs("#f_def_pt"),
      def_en: qs("#f_def_en"),
      def_es: qs("#f_def_es"),
      bullets_pt: qs("#f_bullets_pt"),
      bullets_en: qs("#f_bullets_en"),
      bullets_es: qs("#f_bullets_es"),
      ex_pt: qs("#f_ex_pt"),
      ex_en: qs("#f_ex_en"),
      ex_es: qs("#f_ex_es"),
      aliases: qs("#f_aliases"),
      tags: qs("#f_tags"),
      level: qs("#f_level"),
      seealso: qs("#f_seealso"),
      image: qs("#f_image"),
      imageFile: qs("#f_image_file"),
      loadSelect: qs("#adminLoadSelect")
    };

    function toLines(text){
      return String(text||"").split("\n").map(s=>s.trim()).filter(Boolean).map(s=>s.replace(/^[-•]\s*/,""));
    }
    function toCsv(text){
      return String(text||"").split(",").map(s=>s.trim()).filter(Boolean);
    }
    function fileToDataUrl(file){
      return new Promise((resolve,reject)=>{
        const reader = new FileReader();
        reader.onload = ()=> resolve(String(reader.result||""));
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    async function copyToClipboard(text){
      try{ await navigator.clipboard.writeText(text); }
      catch{
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
    }

    function clearForm(){
      Object.values(f).forEach(el=>{
        if(!el) return;
        if(el.type === "file") el.value = "";
        else if(el.tagName === "SELECT") el.value = "";
        else el.value = "";
      });
      f.category.value = "history";
      f.loadSelect.value = "";
    }

    function fillForm(entry){
      f.id.value = entry.id || "";
      f.category.value = entry.category || "history";
      f.title_pt.value = getText(entry.title, "pt");
      f.title_en.value = getText(entry.title, "en");
      f.title_es.value = getText(entry.title, "es");
      f.short_pt.value = getText(entry.short, "pt");
      f.short_en.value = getText(entry.short, "en");
      f.short_es.value = getText(entry.short, "es");
      f.def_pt.value = getText(entry.definition, "pt");
      f.def_en.value = getText(entry.definition, "en");
      f.def_es.value = getText(entry.definition, "es");

      f.bullets_pt.value = entry.bullets?.pt ? entry.bullets.pt.join("\n") : "";
      f.bullets_en.value = entry.bullets?.en ? entry.bullets.en.join("\n") : "";
      f.bullets_es.value = entry.bullets?.es ? entry.bullets.es.join("\n") : "";

      f.ex_pt.value = entry.examples ? getText(entry.examples,"pt") : "";
      f.ex_en.value = entry.examples ? getText(entry.examples,"en") : "";
      f.ex_es.value = entry.examples ? getText(entry.examples,"es") : "";

      f.aliases.value = (entry.aliases || []).join(", ");
      f.tags.value = (entry.tags || []).join(", ");
      f.level.value = entry.level || "";
      f.seealso.value = (entry.seeAlso || []).join(", ");
      f.image.value = entry.imageUrl || "";
    }

    f.loadSelect.addEventListener("change", ()=>{
      const id = f.loadSelect.value;
      if(!id) return;
      const list = loadCustomEntries();
      const found = list.find(x=>x.id === id);
      if(found) fillForm(found);
    });

    f.imageFile.addEventListener("change", async ()=>{
      const file = f.imageFile.files && f.imageFile.files[0];
      if(!file) return;
      const dataUrl = await fileToDataUrl(file);
      f.image.value = dataUrl;
      toast("Imagem carregada (Base64).");
    });

    qs("#btnSave").addEventListener("click", ()=>{
      const id = safeId(f.id.value);
      if(!id){ toast("ID inválido."); return; }

      const entry = {
        id,
        category: f.category.value || "history",
        title: { pt: f.title_pt.value || id, en: f.title_en.value || f.title_pt.value || id, es: f.title_es.value || f.title_pt.value || id },
        short: { pt: f.short_pt.value || "", en: f.short_en.value || "", es: f.short_es.value || "" },
        definition: { pt: f.def_pt.value || "", en: f.def_en.value || "", es: f.def_es.value || "" },
        bullets: {
          pt: toLines(f.bullets_pt.value),
          en: toLines(f.bullets_en.value),
          es: toLines(f.bullets_es.value)
        },
        examples: { pt: f.ex_pt.value || "", en: f.ex_en.value || "", es: f.ex_es.value || "" },
        aliases: toCsv(f.aliases.value),
        tags: toCsv(f.tags.value),
        level: (f.level.value || "").trim(),
        seeAlso: toCsv(f.seealso.value),
        imageUrl: (f.image.value || "").trim()
      };

      if(!entry.examples.pt && !entry.examples.en && !entry.examples.es) delete entry.examples;
      if(!entry.bullets.pt.length && !entry.bullets.en.length && !entry.bullets.es.length) delete entry.bullets;
      if(!entry.tags.length) delete entry.tags;
      if(!entry.level) delete entry.level;

      const list = loadCustomEntries();
      const idx = list.findIndex(x=>x.id === id);
      if(idx >= 0) list[idx] = entry;
      else list.push(entry);
      saveCustomEntries(list);

      toast(UI[lang].saved);
      location.hash = "#/admin";
    });

    qs("#btnDelete").addEventListener("click", ()=>{
      const id = safeId(f.id.value);
      if(!id) return;

      openModal({
        title: "Confirmar",
        bodyHTML: `<p style="margin:0">${escapeHtml(UI[lang].confirmDelete)}</p><p style="margin:10px 0 0;color:rgba(234,240,255,.85);font-weight:900">${escapeHtml(id)}</p>`,
        footerHTML: `
          <button class="btn btn--secondary" type="button" id="delCancel">${escapeHtml(UI[lang].cancel)}</button>
          <button class="btn btn--danger" type="button" id="delOk">Deletar</button>
        `
      });

      qs("#delCancel").addEventListener("click", closeModal);
      qs("#delOk").addEventListener("click", ()=>{
        const list = loadCustomEntries().filter(x=>x.id !== id);
        saveCustomEntries(list);
        closeModal();
        toast(UI[lang].deleted);
        location.hash = "#/admin";
      });
    });

    qs("#btnClear").addEventListener("click", clearForm);

    qs("#btnExport").addEventListener("click", async ()=>{
      const list = loadCustomEntries();
      const payload = JSON.stringify(list, null, 2);
      await copyToClipboard(payload);
      toast(UI[lang].exported);
      openModal({
        title: "Export JSON",
        bodyHTML: `<p style="margin-top:0">Copiado. Cole em um arquivo .json para backup.</p>
                  <div class="field"><label>Conteúdo</label><textarea style="min-height:220px">${escapeHtml(payload)}</textarea></div>`,
        footerHTML: `<button class="btn btn--primary" type="button" id="expClose">OK</button>`
      });
      qs("#expClose").addEventListener("click", closeModal);
    });

    qs("#btnImport").addEventListener("click", ()=>{
      openModal({
        title: "Import JSON",
        bodyHTML: `
          <p style="margin-top:0">Cole um JSON (array de entries) para importar.</p>
          <div class="field">
            <label>JSON</label>
            <textarea id="importArea" style="min-height:240px" placeholder='[ { "id": "...", "category": "scales", ... } ]'></textarea>
          </div>
        `,
        footerHTML: `
          <button class="btn btn--secondary" type="button" id="impCancel">${escapeHtml(UI[lang].cancel)}</button>
          <button class="btn btn--primary" type="button" id="impOk">Importar</button>
        `
      });

      qs("#impCancel").addEventListener("click", closeModal);
      qs("#impOk").addEventListener("click", ()=>{
        const raw = qs("#importArea").value || "";
        try{
          const parsed = JSON.parse(raw);
          if(!Array.isArray(parsed)) throw new Error("not array");
          const cleaned = parsed
            .filter(x=>x && typeof x === "object" && x.id && x.category)
            .map(x=>({ ...x, id: safeId(x.id), category: String(x.category || "history") }));
          saveCustomEntries(cleaned);
          closeModal();
          toast(UI[lang].imported);
          location.hash = "#/admin";
        }catch{
          toast("JSON inválido.");
        }
      });
    });

    qs("#btnResetPass").addEventListener("click", ()=>{
      setAdminPass(DEFAULT_ADMIN_PASS);
      toast(UI[lang].resetPassDone);
    });
  }

  // Router
  function parseHash(){
    const raw = location.hash || "#/";
    const h = raw.replace(/^#/, "");
    const [path, queryStr] = h.split("?");
    const parts = path.split("/").filter(Boolean);
    const query = new URLSearchParams(queryStr || "");
    return { parts, query };
  }

  function render(){
    const v = (searchInput.value || "").trim();
    clearSearchBtn.style.display = v ? "block" : "none";

    const { parts, query } = parseHash();
    const r0 = parts[0] || "";
    const r1 = parts[1] || "";

    if(r0 === "" || r0 === "home"){ renderHome(); return; }
    if(r0 === "entry"){ renderEntry(decodeURIComponent(r1||"")); return; }
    if(r0 === "category"){ renderCategory(decodeURIComponent(r1||"")); return; }
    if(r0 === "search"){
      const q = query.get("q") || searchInput.value || "";
      renderSearch(q);
      return;
    }
    if(r0 === "favorites"){ renderFavorites(); return; }
    if(r0 === "recent"){ renderRecent(); return; }
    if(r0 === "collection"){ renderCollection(decodeURIComponent(r1||"")); return; }
    if(r0 === "admin"){
      requireAdmin().then(ok=>{
        if(ok) renderAdmin();
        else location.hash = "#/";
      });
      return;
    }
    renderHome();
  }

  // Header
  function setupHeader(){
    const langBtn = qs("#langBtn");
    const langMenu = qs("#langMenu");
    const closeMenu = ()=> { langMenu.style.display = "none"; langBtn.setAttribute("aria-expanded","false"); };
    const openMenu = ()=> { langMenu.style.display = "block"; langBtn.setAttribute("aria-expanded","true"); };

    langBtn.addEventListener("click", ()=>{
      const open = langMenu.style.display === "block";
      if(open) closeMenu(); else openMenu();
    });

    document.addEventListener("click", (e)=>{
      if(!langMenu.contains(e.target) && !langBtn.contains(e.target)) closeMenu();
    });

    qsa(".pillselect__item", langMenu).forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const l = btn.getAttribute("data-lang");
        if(l === "pt" || l === "en" || l === "es"){
          setLang(l);
          closeMenu();
          render();
        }
      });
    });

    searchInput.addEventListener("input", ()=>{
      const v = (searchInput.value || "").trim();
      clearSearchBtn.style.display = v ? "block" : "none";
      if(location.hash.startsWith("#/search")){
        const url = `#/search?q=${encodeURIComponent(v)}`;
        history.replaceState(null, "", url);
        renderSearch(v);
        bindCardClicks(app);
      }
    });

    searchInput.addEventListener("keydown", (e)=>{
      if(e.key === "Enter"){
        e.preventDefault();
        const v = (searchInput.value || "").trim();
        location.hash = `#/search?q=${encodeURIComponent(v)}`;
      }
    });

    clearSearchBtn.addEventListener("click", ()=>{
      searchInput.value = "";
      clearSearchBtn.style.display = "none";
      if(location.hash.startsWith("#/search")){
        history.replaceState(null, "", "#/search");
        renderSearch("");
      }
      searchInput.focus();
    });

    adminBtn.addEventListener("click", ()=> location.hash = "#/admin");
  }

  function boot(){
    setLang(getLang());
    setupHeader();
    window.addEventListener("hashchange", render);
    if(!location.hash) location.hash = "#/";
    render();
  }

  const wait = ()=>{
    if(Array.isArray(window.IMVPEDIA_ENTRIES)) boot();
    else setTimeout(wait, 25);
  };
  wait();
})();