/* IMVpedia — ETAPA 5
   Netflix UI + Carrosséis + Busca + 3 idiomas + Página de Detalhe
   Admin (localStorage) + Imagens Base64 + Export/Import JSON
*/

(() => {
  "use strict";

  // ---------- Helpers ----------
  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => [...el.querySelectorAll(s)];
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const escapeHtml = (str="") => str.replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
  const safeId = (s="") => String(s).trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9\-_]/g,"").toLowerCase();

  const STORE = {
    lang: "imvpedia_lang",
    custom: "imvpedia_custom_entries_v1",
    adminPass: "imvpedia_admin_pass_v1",
    lastViewed: "imvpedia_last_viewed_v1"
  };

  const DEFAULT_ADMIN_PASS = "imvadmin";

  // ---------- i18n UI strings ----------
  const UI = {
    pt: {
      homeTitle: "IMVpedia",
      homeSub: "Uma enciclopédia premium de Teoria Musical (IMV Instituto Musical Vale). Explore escalas, harmonia, ritmo, leitura, história e pratique com estrutura.",
      featured: "Destaque do dia",
      continue: "Continuar",
      open: "Abrir",
      browseAll: "Ver tudo",
      searchTitle: "Resultados da busca",
      searchHint: "Digite para buscar por termos, aliases e conteúdo.",
      categoryTitle: "Categoria",
      notFound: "Nada encontrado.",
      back: "Voltar",
      seeAlso: "Ver também",
      bullets: "Pontos-chave",
      example: "Exemplo",
      about: "Sobre",
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
      homeSub: "A premium Music Theory encyclopedia (IMV Instituto Musical Vale). Explore scales, harmony, rhythm, notation, history, and a solid practice framework.",
      featured: "Featured today",
      continue: "Continue",
      open: "Open",
      browseAll: "Browse all",
      searchTitle: "Search results",
      searchHint: "Type to search terms, aliases, and content.",
      categoryTitle: "Category",
      notFound: "Nothing found.",
      back: "Back",
      seeAlso: "See also",
      bullets: "Key points",
      example: "Example",
      about: "About",
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
      homeSub: "Una enciclopedia premium de Teoría Musical (IMV Instituto Musical Vale). Explora escalas, armonía, ritmo, lectura, historia y un método de práctica.",
      featured: "Destacado del día",
      continue: "Continuar",
      open: "Abrir",
      browseAll: "Ver todo",
      searchTitle: "Resultados de búsqueda",
      searchHint: "Escribe para buscar términos, alias y contenido.",
      categoryTitle: "Categoría",
      notFound: "No se encontró nada.",
      back: "Volver",
      seeAlso: "Ver también",
      bullets: "Puntos clave",
      example: "Ejemplo",
      about: "Acerca de",
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

  // Category labels
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
    rhythm: { pt:"Métrica, subdivisão, síncope, polirritmia…", en:"Meter, subdivision, syncopation, polyrhythm…", es:"Métrica, subdivisión, síncopa, polirritmia…" },
    notation:{ pt:"Pauta, claves, figuras, articulação, dinâmica…", en:"Staff, clefs, note values, articulation, dynamics…", es:"Pentagrama, claves, figuras, articulación, dinámica…" },
    history: { pt:"Contexto, eras, formas, treino de ouvido…", en:"Context, eras, forms, ear training…", es:"Contexto, eras, formas, entrenamiento auditivo…" }
  };

  const app = qs("#app");
  const searchInput = qs("#searchInput");
  const clearSearchBtn = qs("#clearSearchBtn");
  const adminBtn = qs("#adminBtn");

  // ---------- Modal / Toast ----------
  const toastEl = qs("#toast");
  let toastTimer = null;
  function toast(msg){
    if(!msg) return;
    toastEl.textContent = msg;
    toastEl.style.display = "block";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=> toastEl.style.display="none", 2200);
  }

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

  // ---------- Data Layer ----------
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
  function setAdminPass(p){
    localStorage.setItem(STORE.adminPass, p);
  }

  function loadCustomEntries(){
    try{
      const raw = localStorage.getItem(STORE.custom);
      if(!raw) return [];
      const data = JSON.parse(raw);
      if(!Array.isArray(data)) return [];
      return data;
    }catch{
      return [];
    }
  }
  function saveCustomEntries(arr){
    localStorage.setItem(STORE.custom, JSON.stringify(arr || []));
  }

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
    const all = getAllEntries();
    return all.find(e => e.id === id) || null;
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

  function entrySearchBlob(entry){
    const lang = getLang();
    const parts = [
      entry.id,
      entry.category,
      getText(entry.title, "pt"),
      getText(entry.title, "en"),
      getText(entry.title, "es"),
      getText(entry.short, "pt"),
      getText(entry.short, "en"),
      getText(entry.short, "es"),
      getText(entry.definition, "pt"),
      getText(entry.definition, "en"),
      getText(entry.definition, "es"),
      entry.examples ? getText(entry.examples, "pt") : "",
      entry.examples ? getText(entry.examples, "en") : "",
      entry.examples ? getText(entry.examples, "es") : "",
      (entry.aliases || []).join(" "),
      (entry.seeAlso || []).join(" ")
    ];
    // include bullets
    if(entry.bullets){
      const bpt = (entry.bullets.pt || []).join(" ");
      const ben = (entry.bullets.en || []).join(" ");
      const bes = (entry.bullets.es || []).join(" ");
      parts.push(bpt, ben, bes);
    }
    // prefer current lang slightly, but keep all
    parts.unshift(
      getText(entry.title, lang),
      getText(entry.short, lang),
      getText(entry.definition, lang)
    );
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
        if(!t) continue;
        if(blob.includes(t)){
          score += 10;
          if(normalize(e.id).includes(t)) score += 12;
          if(normalize(getText(e.title, getLang())).includes(t)) score += 14;
          if((e.aliases||[]).some(a => normalize(a).includes(t))) score += 10;
        }else{
          score -= 2;
        }
      }
      if(score > 0) scored.push({e, score});
    }
    scored.sort((a,b)=> b.score - a.score);
    return scored.map(x=>x.e);
  }

  function categoryEntries(cat){
    return getAllEntries().filter(e => e.category === cat);
  }

  function setLastViewed(id){
    try{ localStorage.setItem(STORE.lastViewed, id); }catch{}
  }
  function getLastViewed(){
    try{ return localStorage.getItem(STORE.lastViewed) || ""; }catch{ return ""; }
  }

  // ---------- UI Builders ----------
  function badgeLabel(cat, lang){
    return (CATEGORY_LABELS[cat] && CATEGORY_LABELS[cat][lang]) ? CATEGORY_LABELS[cat][lang] : (cat || "");
  }

  function makeCard(entry, lang){
    const title = escapeHtml(getText(entry.title, lang));
    const desc = escapeHtml(getText(entry.short, lang));
    const cat = entry.category || "history";
    const badge = escapeHtml(badgeLabel(cat, lang));
    const img = entry.imageUrl || "";
    const media = img
      ? `<div class="card__media"><img alt="" src="${img}"><span class="badge">${badge}</span></div>`
      : `<div class="card__media"><span class="badge">${badge}</span></div>`;

    return `
      <article class="card" role="button" tabindex="0" data-open="${escapeHtml(entry.id)}">
        ${media}
        <div class="card__body">
          <h3 class="card__title">${title}</h3>
          <p class="card__desc">${desc}</p>
          <div class="card__meta">
            <span class="pill">${escapeHtml(entry.id)}</span>
          </div>
        </div>
      </article>
    `;
  }

  function bindCardClicks(container){
    qsa("[data-open]", container).forEach(el=>{
      const id = el.getAttribute("data-open");
      const go = ()=> { location.hash = `#/entry/${encodeURIComponent(id)}`; };
      el.addEventListener("click", go);
      el.addEventListener("keydown", (e)=>{
        if(e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    });
  }

  function makeRow(cat, entries, lang){
    const label = badgeLabel(cat, lang);
    const hint = (CATEGORY_HINTS[cat] && CATEGORY_HINTS[cat][lang]) ? CATEGORY_HINTS[cat][lang] : "";
    const cards = entries.map(e => makeCard(e, lang)).join("");

    const rowId = `row_${cat}_${Math.random().toString(16).slice(2)}`;

    return `
      <section class="section">
        <div class="section__head">
          <div>
            <h2 class="section__title">${escapeHtml(label)}</h2>
            <p class="section__hint">${escapeHtml(hint)}</p>
          </div>
          <a class="linkpill" href="#/category/${encodeURIComponent(cat)}">${escapeHtml(UI[lang].browseAll)} →</a>
        </div>
        <div class="row" data-row="${rowId}">
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
        scroller.scrollBy({ left: dir * step * 2.6, behavior: "smooth" });
      };
      left.addEventListener("click", ()=> scrollByCards(-1));
      right.addEventListener("click", ()=> scrollByCards(1));
    });
  }

  function pickFeatured(){
    const all = getAllEntries();
    if(!all.length) return null;

    const last = getLastViewed();
    const lastEntry = last ? all.find(e=>e.id===last) : null;
    if(lastEntry) return lastEntry;

    // pick one from variety
    const preferredOrder = ["harmony","scales","rhythm","notation","history"];
    for(const cat of preferredOrder){
      const list = all.filter(e=>e.category===cat);
      if(list.length) return list[Math.floor(Math.random()*list.length)];
    }
    return all[Math.floor(Math.random()*all.length)];
  }

  // ---------- Pages ----------
  function renderHome(){
    const lang = getLang();
    const featured = pickFeatured();
    const featuredTitle = featured ? escapeHtml(getText(featured.title, lang)) : "—";
    const featuredDesc = featured ? escapeHtml(getText(featured.short, lang)) : "";
    const featuredCat = featured ? featured.category : "history";
    const featuredBadge = escapeHtml(badgeLabel(featuredCat, lang));
    const featuredImg = featured && featured.imageUrl ? featured.imageUrl : "";

    const heroThumb = featuredImg
      ? `<div class="thumb"><img alt="" src="${featuredImg}"></div>`
      : `<div class="thumb"></div>`;

    const hero = `
      <section class="hero">
        <div class="hero__inner">
          <div>
            <h1 class="hero__title">${escapeHtml(UI[lang].homeTitle)} — Netflix de Teoria Musical</h1>
            <p class="hero__subtitle">${escapeHtml(UI[lang].homeSub)}</p>

            <div class="hero__chips">
              <span class="chip">PT / EN / ES</span>
              <span class="chip">Carrosséis por categoria</span>
              <span class="chip">Busca avançada</span>
              <span class="chip">Modo Admin + Imagens</span>
              <span class="chip">GitHub Pages Ready</span>
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

    // category rows (limit)
    const catOrder = ["scales","harmony","rhythm","notation","history"];
    const rows = catOrder.map(cat=>{
      const list = categoryEntries(cat);
      // rank: show up to 16 cards
      const subset = list.slice(0, 16);
      return makeRow(cat, subset, lang);
    }).join("");

    app.innerHTML = hero + rows;

    // bind CTA
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
          <a class="linkpill" href="#/search">${escapeHtml(UI[lang].searchTitle)}</a>
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

  function renderEntry(id){
    const lang = getLang();
    const entry = getEntryById(id);
    if(!entry){
      app.innerHTML = `
        <div class="pagehead">
          <div>
            <h1>${escapeHtml(UI[lang].notFound)}</h1>
            <p>ID: ${escapeHtml(id)}</p>
          </div>
          <div class="kbtn">
            <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
          </div>
        </div>
      `;
      return;
    }

    setLastViewed(entry.id);

    const title = getText(entry.title, lang);
    const short = getText(entry.short, lang);
    const def = getText(entry.definition, lang);
    const bullets = entry.bullets ? (entry.bullets[lang] || entry.bullets.pt || entry.bullets.en || entry.bullets.es || []) : [];
    const example = entry.examples ? getText(entry.examples, lang) : "";
    const img = entry.imageUrl || "";

    const catLabel = badgeLabel(entry.category, lang);
    const see = Array.isArray(entry.seeAlso) ? entry.seeAlso : [];
    const seeLinks = see.map(sid=>{
      const e2 = getEntryById(sid);
      const label = e2 ? getText(e2.title, lang) : sid;
      return `<a class="linkpill" href="#/entry/${encodeURIComponent(sid)}">↗ ${escapeHtml(label)}</a>`;
    }).join("");

    const imgHtml = img
      ? `<div class="entry__img"><img alt="" src="${img}"></div>`
      : `<div class="entry__img"></div>`;

    app.innerHTML = `
      <div class="pagehead">
        <div>
          <h1>${escapeHtml(getText(entry.title, lang))}</h1>
          <p>${escapeHtml(catLabel)} • ${escapeHtml(entry.id)}</p>
        </div>
        <div class="kbtn">
          <a class="linkpill" href="#/">${escapeHtml(UI[lang].back)} ←</a>
          <a class="linkpill" href="#/category/${encodeURIComponent(entry.category)}">${escapeHtml(UI[lang].categoryTitle)}: ${escapeHtml(catLabel)}</a>
        </div>
      </div>

      <article class="entry">
        <div class="entry__top">
          <div>
            <h1>${escapeHtml(title)}</h1>
            <p class="lead">${escapeHtml(short)}</p>
            <div class="seealso">
              <span class="pill">${escapeHtml(catLabel)}</span>
              ${entry.aliases?.slice(0,3)?.map(a=>`<span class="pill">${escapeHtml(a)}</span>`).join("") || ""}
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
  }

  // ---------- Admin ----------
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
            <div class="hint">Default: <b>${escapeHtml(DEFAULT_ADMIN_PASS)}</b> (você pode trocar dentro do painel)</div>
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

      const finish = (ok)=>{
        closeModal();
        resolve(ok);
      };

      btnCancel.addEventListener("click", ()=> finish(false));
      btnEnter.addEventListener("click", ()=>{
        const pass = passInput.value || "";
        if(pass === getAdminPass()){
          finish(true);
        }else{
          toast(UI[lang].wrongPass);
        }
      });
      passInput.addEventListener("keydown", (e)=>{
        if(e.key === "Enter"){
          e.preventDefault();
          btnEnter.click();
        }
      });
      setTimeout(()=> passInput.focus(), 50);
    });
  }

  function renderAdmin(){
    const lang = getLang();
    const custom = loadCustomEntries();

    // options for select
    const options = Object.keys(CATEGORY_LABELS).map(cat=>{
      const label = badgeLabel(cat, lang);
      return `<option value="${escapeHtml(cat)}">${escapeHtml(label)} (${escapeHtml(cat)})</option>`;
    }).join("");

    // list of custom ids for quick load
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
              <input id="f_title_en" placeholder="ex.: Tritone Substitution" />
            </div>
            <div class="field">
              <label>Título (ES)</label>
              <input id="f_title_es" placeholder="ex.: Sustitución por Tritono" />
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
              <label>Definição (PT) — aceita HTML simples (ex.: &lt;b&gt;)</label>
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
            <button class="btn btn--muted" id="btnClear" type="button">Limpar form</button>
            <button class="btn btn--muted" id="btnExport" type="button">Export JSON (copiar)</button>
            <button class="btn btn--muted" id="btnImport" type="button">Import JSON</button>
            <button class="btn btn--muted" id="btnResetPass" type="button">Reset senha (default)</button>
          </div>
        </div>
      </section>
    `;

    // bind admin logic
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
      seealso: qs("#f_seealso"),
      image: qs("#f_image"),
      imageFile: qs("#f_image_file"),
      loadSelect: qs("#adminLoadSelect")
    };

    function clearForm(){
      Object.values(f).forEach(el=>{
        if(!el || el.tagName === "SELECT") return;
        if(el.type === "file") el.value = "";
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

      const bpt = entry.bullets?.pt ? entry.bullets.pt.join("\n") : "";
      const ben = entry.bullets?.en ? entry.bullets.en.join("\n") : "";
      const bes = entry.bullets?.es ? entry.bullets.es.join("\n") : "";
      f.bullets_pt.value = bpt;
      f.bullets_en.value = ben;
      f.bullets_es.value = bes;

      f.ex_pt.value = entry.examples ? getText(entry.examples,"pt") : "";
      f.ex_en.value = entry.examples ? getText(entry.examples,"en") : "";
      f.ex_es.value = entry.examples ? getText(entry.examples,"es") : "";

      f.aliases.value = (entry.aliases || []).join(", ");
      f.seealso.value = (entry.seeAlso || []).join(", ");
      f.image.value = entry.imageUrl || "";
    }

    // load select
    f.loadSelect.addEventListener("change", ()=>{
      const id = f.loadSelect.value;
      if(!id) return;
      const list = loadCustomEntries();
      const found = list.find(x=>x.id === id);
      if(found) fillForm(found);
    });

    // image file -> base64
    f.imageFile.addEventListener("change", async ()=>{
      const file = f.imageFile.files && f.imageFile.files[0];
      if(!file) return;
      const dataUrl = await fileToDataUrl(file);
      f.image.value = dataUrl;
      toast("Imagem carregada (Base64).");
    });

    // Save
    qs("#btnSave").addEventListener("click", ()=>{
      const id = safeId(f.id.value);
      if(!id){
        toast("ID inválido.");
        return;
      }

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
        seeAlso: toCsv(f.seealso.value),
        imageUrl: (f.image.value || "").trim()
      };

      // remove empty structures to keep clean
      if(!entry.examples.pt && !entry.examples.en && !entry.examples.es) delete entry.examples;
      if(!entry.bullets.pt.length && !entry.bullets.en.length && !entry.bullets.es.length) delete entry.bullets;

      const list = loadCustomEntries();
      const idx = list.findIndex(x=>x.id === id);
      if(idx >= 0) list[idx] = entry;
      else list.push(entry);
      saveCustomEntries(list);

      toast(UI[lang].saved);
      // refresh select list by re-render admin
      location.hash = "#/admin";
    });

    // Delete
    qs("#btnDelete").addEventListener("click", ()=>{
      const id = safeId(f.id.value);
      if(!id) return;

      openModal({
        title: "Confirmar",
        bodyHTML: `<p style="margin:0">${escapeHtml(UI[lang].confirmDelete)}</p><p style="margin:10px 0 0;color:rgba(234,240,255,.85);font-weight:900">${escapeHtml(id)}</p>`,
        footerHTML: `
          <button class="btn btn--secondary" type="button" id="delCancel">${escapeHtml(UI[lang].cancel)}</button>
          <button class="btn btn--danger" type="button" id="delOk">${escapeHtml("Deletar")}</button>
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

    // Clear
    qs("#btnClear").addEventListener("click", clearForm);

    // Export
    qs("#btnExport").addEventListener("click", async ()=>{
      const list = loadCustomEntries();
      const payload = JSON.stringify(list, null, 2);
      await copyToClipboard(payload);
      toast(UI[lang].exported);
      openModal({
        title: "Export JSON",
        bodyHTML: `<p style="margin-top:0">Copiado para a área de transferência. Você pode colar em um arquivo .json para backup.</p>
                  <div class="field"><label>Conteúdo</label><textarea style="min-height:220px">${escapeHtml(payload)}</textarea></div>`,
        footerHTML: `<button class="btn btn--primary" type="button" id="expClose">OK</button>`
      });
      qs("#expClose").addEventListener("click", closeModal);
    });

    // Import
    qs("#btnImport").addEventListener("click", ()=>{
      openModal({
        title: "Import JSON",
        bodyHTML: `
          <p style="margin-top:0">Cole abaixo um JSON (array de entries) para importar no localStorage.</p>
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
          // validate minimal
          const cleaned = parsed
            .filter(x=>x && typeof x === "object" && x.id && x.category)
            .map(x=>({
              ...x,
              id: safeId(x.id),
              category: String(x.category || "history")
            }));
          saveCustomEntries(cleaned);
          closeModal();
          toast(UI[lang].imported);
          location.hash = "#/admin";
        }catch{
          toast("JSON inválido.");
        }
      });
    });

    // Reset pass
    qs("#btnResetPass").addEventListener("click", ()=>{
      setAdminPass(DEFAULT_ADMIN_PASS);
      toast(UI[lang].resetPassDone);
    });
  }

  function toLines(text){
    return String(text||"")
      .split("\n")
      .map(s=>s.trim())
      .filter(Boolean)
      .map(s=>s.replace(/^[-•]\s*/,""));
  }
  function toCsv(text){
    return String(text||"")
      .split(",")
      .map(s=>s.trim())
      .filter(Boolean);
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
    try{
      await navigator.clipboard.writeText(text);
    }catch{
      // fallback
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

  // ---------- Router ----------
  function parseHash(){
    const raw = location.hash || "#/";
    const h = raw.replace(/^#/, "");
    const [path, queryStr] = h.split("?");
    const parts = path.split("/").filter(Boolean);
    const query = new URLSearchParams(queryStr || "");
    return { parts, query };
  }

  function render(){
    const lang = getLang();
    // update clear button visibility
    const v = (searchInput.value || "").trim();
    clearSearchBtn.style.display = v ? "block" : "none";

    const { parts, query } = parseHash();
    const route0 = parts[0] || "";
    const route1 = parts[1] || "";
    const route2 = parts[2] || "";

    // focus app
    app?.focus?.();

    if(route0 === "" || route0 === "home"){
      renderHome();
      return;
    }

    if(route0 === "entry"){
      const id = decodeURIComponent(route1 || "");
      renderEntry(id);
      return;
    }

    if(route0 === "category"){
      const cat = decodeURIComponent(route1 || "");
      renderCategory(cat);
      return;
    }

    if(route0 === "search"){
      const q = query.get("q") || searchInput.value || "";
      renderSearch(q);
      return;
    }

    if(route0 === "admin"){
      // gate
      requireAdmin().then(ok=>{
        if(ok) renderAdmin();
        else location.hash = "#/";
      });
      return;
    }

    // fallback
    renderHome();
  }

  // ---------- Header bindings ----------
  function setupHeader(){
    // language dropdown
    const langBtn = qs("#langBtn");
    const langMenu = qs("#langMenu");
    const closeMenu = ()=> {
      langMenu.style.display = "none";
      langBtn.setAttribute("aria-expanded","false");
    };
    const openMenu = ()=> {
      langMenu.style.display = "block";
      langBtn.setAttribute("aria-expanded","true");
    };

    langBtn.addEventListener("click", ()=>{
      const open = langMenu.style.display === "block";
      if(open) closeMenu();
      else openMenu();
    });

    document.addEventListener("click", (e)=>{
      if(!langMenu.contains(e.target) && !langBtn.contains(e.target)){
        closeMenu();
      }
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

    // search
    searchInput.addEventListener("input", ()=>{
      const v = (searchInput.value || "").trim();
      clearSearchBtn.style.display = v ? "block" : "none";
      // live route update
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

    // admin
    adminBtn.addEventListener("click", ()=>{
      location.hash = "#/admin";
    });
  }

  // ---------- Boot ----------
  function boot(){
    // ensure base entries loaded
    setLang(getLang());
    setupHeader();

    window.addEventListener("hashchange", render);

    // if empty hash
    if(!location.hash) location.hash = "#/";
    render();
  }

  // wait until entries are ready
  const wait = ()=>{
    if(Array.isArray(window.IMVPEDIA_ENTRIES)){
      boot();
    }else{
      setTimeout(wait, 25);
    }
  };
  wait();
})();