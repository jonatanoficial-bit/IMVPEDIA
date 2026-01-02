/* IMVpedia — Premium Netflix-like UI (PT/EN/ES)
   - Carrosséis por categoria
   - Busca global
   - Modal de leitura
   - Conteúdo vem do arquivo entries.js (window.IMVPEDIA_ENTRIES)
*/

const CATEGORIES = {
  scales:    { pt: "Escalas",    en: "Scales",    es: "Escalas" },
  intervals: { pt: "Intervalos", en: "Intervals", es: "Intervalos" },
  rhythm:    { pt: "Ritmo",      en: "Rhythm",    es: "Ritmo" },
  notation:  { pt: "Notação",    en: "Notation",  es: "Notación" },
  harmony:   { pt: "Harmonia",   en: "Harmony",   es: "Armonía" },
  history:   { pt: "História",   en: "History",   es: "Historia" }
};

const CATEGORY_SUB = {
  scales:    { pt: "Tonalidade, modos e vocabulário", en: "Keys, modes, musical vocabulary", es: "Tonalidad, modos, vocabulario" },
  intervals: { pt: "Distâncias entre notas e base dos acordes", en: "Distances between notes, chord foundation", es: "Distancias entre notas, base de acordes" },
  rhythm:    { pt: "Pulso, compasso, subdivisão e groove", en: "Beat, meter, subdivision, groove", es: "Pulso, compás, subdivisión, groove" },
  notation:  { pt: "Leitura, símbolos e escrita musical", en: "Reading, symbols and notation", es: "Lectura, símbolos y notación" },
  harmony:   { pt: "Acordes, funções, cadências e progressões", en: "Chords, functions, cadences, progressions", es: "Acordes, funciones, cadencias, progresiones" },
  history:   { pt: "Eras e evolução da linguagem musical", en: "Eras and evolution of musical language", es: "Eras y evolución del lenguaje musical" }
};

/* Conteúdo vem do entries.js */
const ENTRIES = Array.isArray(window.IMVPEDIA_ENTRIES) ? window.IMVPEDIA_ENTRIES : [];

/* STATE */
let currentLang = "pt";
let currentCategoryFilter = "all";
let searchQuery = "";
let filteredOrder = [];
let modalIndex = -1;
let lastOpenId = null;

/* HELPERS */
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

function setYear() {
  const y = new Date().getFullYear();
  const a = $("#year"), b = $("#year2"), c = $("#year3");
  if (a) a.textContent = y;
  if (b) b.textContent = y;
  if (c) c.textContent = y;
}

function langText(obj) {
  return obj?.[currentLang] ?? obj?.pt ?? "";
}

function categoryName(key) {
  return langText(CATEGORIES[key] || { pt: key, en: key, es: key });
}

function categorySubtitle(key) {
  return langText(CATEGORY_SUB[key] || { pt: "", en: "", es: "" });
}

function normalize(s) {
  return (s || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function entryById(id) {
  return ENTRIES.find((e) => e.id === id) || null;
}

function buildSearchBlob(entry) {
  const t =
    `${langText(entry.title)} ` +
    `${langText(entry.short)} ` +
    `${langText(entry.definition)} ` +
    `${langText(entry.examples)} ` +
    `${(entry.aliases || []).join(" ")} ` +
    `${entry.category}`;
  return normalize(t);
}

/* LANGUAGE */
function setLang(lang) {
  currentLang = lang;
  document.body.className = `lang-${lang}`;

  $$("#btn-pt, #btn-en, #btn-es").forEach((b) => b.classList.remove("active"));
  const btn = $(`#btn-${lang}`);
  if (btn) btn.classList.add("active");

  const input = $("#searchInput");
  if (input) {
    const ph = { pt: "Buscar no IMVpedia…", en: "Search IMVpedia…", es: "Buscar en IMVpedia…" };
    input.placeholder = ph[lang] || ph.pt;
  }

  renderAll();
}

/* CATEGORY FILTER */
function setCategory(cat) {
  currentCategoryFilter = cat;
  $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.category === cat));
  renderAll();
}

/* CARD */
function makeCard(entry) {
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", langText(entry.title));
  card.dataset.id = entry.id;

  const thumb = document.createElement("div");
  thumb.className = "card__thumb";

  const pill = document.createElement("div");
  pill.className = "card__pill";
  pill.textContent = categoryName(entry.category);
  thumb.appendChild(pill);

  const body = document.createElement("div");
  body.className = "card__body";

  const t = document.createElement("h3");
  t.className = "card__title";
  t.textContent = langText(entry.title);

  const d = document.createElement("p");
  d.className = "card__desc";
  d.textContent = langText(entry.short);

  body.appendChild(t);
  body.appendChild(d);

  card.appendChild(thumb);
  card.appendChild(body);

  const open = () => openModal(entry.id, getCurrentOrder());
  card.addEventListener("click", open);
  card.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" || ev.key === " ") {
      ev.preventDefault();
      open();
    }
  });

  return card;
}

/* ROWS */
function getEntriesByCategory(cat) {
  return ENTRIES.filter((e) => e.category === cat);
}

function renderRows() {
  const rows = $("#rows");
  if (!rows) return;
  rows.innerHTML = "";

  Object.keys(CATEGORIES).forEach((cat) => {
    if (currentCategoryFilter !== "all" && currentCategoryFilter !== cat) return;

    const section = document.createElement("section");
    section.className = "row";

    const head = document.createElement("div");
    head.className = "row__head";

    const left = document.createElement("div");
    const title = document.createElement("h2");
    title.className = "row__title";
    title.textContent = categoryName(cat);

    const sub = document.createElement("p");
    sub.className = "row__subtitle";
    sub.textContent = categorySubtitle(cat);

    left.appendChild(title);
    left.appendChild(sub);

    const controls = document.createElement("div");
    controls.className = "row__controls";

    const prev = document.createElement("button");
    prev.className = "iconbtn";
    prev.type = "button";
    prev.textContent = "‹";

    const next = document.createElement("button");
    next.className = "iconbtn";
    next.type = "button";
    next.textContent = "›";

    controls.appendChild(prev);
    controls.appendChild(next);

    head.appendChild(left);
    head.appendChild(controls);

    const scroller = document.createElement("div");
    scroller.className = "scroller";

    getEntriesByCategory(cat).forEach((e) => scroller.appendChild(makeCard(e)));

    const step = () => Math.max(260, scroller.clientWidth * 0.85);
    prev.addEventListener("click", () => scroller.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => scroller.scrollBy({ left: step(), behavior: "smooth" }));

    section.appendChild(head);
    section.appendChild(scroller);
    rows.appendChild(section);
  });
}

/* SEARCH */
function searchResults() {
  const q = normalize(searchQuery);
  if (!q) return [];

  const hits = ENTRIES
    .map((e) => ({ e, blob: buildSearchBlob(e) }))
    .filter((x) => x.blob.includes(q))
    .map((x) => x.e);

  hits.sort((a, b) => {
    const at = normalize(langText(a.title));
    const bt = normalize(langText(b.title));
    const aAlias = (a.aliases || []).some((al) => normalize(al).includes(q));
    const bAlias = (b.aliases || []).some((al) => normalize(al).includes(q));
    const aScore = (at.includes(q) ? 3 : 0) + (aAlias ? 2 : 0);
    const bScore = (bt.includes(q) ? 3 : 0) + (bAlias ? 2 : 0);
    return bScore - aScore;
  });

  const filtered =
    currentCategoryFilter === "all" ? hits : hits.filter((e) => e.category === currentCategoryFilter);

  return filtered.map((e) => e.id);
}

function getCurrentOrder() {
  if (searchQuery.trim()) return searchResults();
  if (currentCategoryFilter === "all") return ENTRIES.map((e) => e.id);
  return ENTRIES.filter((e) => e.category === currentCategoryFilter).map((e) => e.id);
}

function renderSearch() {
  const results = $("#results");
  const grid = $("#resultsGrid");
  const meta = $("#resultsMeta");
  const empty = $("#emptyState");
  const rows = $("#rows");

  if (!results || !grid || !meta || !empty || !rows) return;

  const q = normalize(searchQuery);
  if (!q) {
    results.classList.add("hidden");
    empty.classList.add("hidden");
    rows.classList.remove("hidden");
    return;
  }

  const ids = searchResults();
  grid.innerHTML = "";

  if (ids.length === 0) {
    results.classList.add("hidden");
    rows.classList.add("hidden");
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");
  rows.classList.add("hidden");
  results.classList.remove("hidden");

  const label = {
    pt: `${ids.length} resultado(s) para “${searchQuery}”`,
    en: `${ids.length} result(s) for “${searchQuery}”`,
    es: `${ids.length} resultado(s) para “${searchQuery}”`
  };
  meta.textContent = label[currentLang] || label.pt;

  ids.forEach((id) => {
    const e = entryById(id);
    if (e) grid.appendChild(makeCard(e));
  });
}

/* MODAL */
function openModal(id, orderIds) {
  const modal = $("#modal");
  if (!modal) return;

  filteredOrder = orderIds && orderIds.length ? orderIds : ENTRIES.map((e) => e.id);
  modalIndex = Math.max(0, filteredOrder.indexOf(id));
  lastOpenId = id;

  const entry = entryById(id);
  if (!entry) return;

  $("#modalTitle").textContent = langText(entry.title);
  $("#modalCategory").textContent = categoryName(entry.category);

  const aliasesWrap = $("#modalAliases");
  const aliases = (entry.aliases || []).slice(0, 6);
  if (aliasesWrap) {
    const label = {
      pt: aliases.length ? `Sinônimos: ${aliases.join(", ")}` : "",
      en: aliases.length ? `Aliases: ${aliases.join(", ")}` : "",
      es: aliases.length ? `Sinónimos: ${aliases.join(", ")}` : ""
    };
    aliasesWrap.textContent = label[currentLang] || label.pt;
  }

  const imgWrap = $("#modalImageWrap");
  const img = $("#modalImage");
  if (imgWrap && img) {
    if (entry.imageUrl && entry.imageUrl.trim()) {
      img.src = entry.imageUrl.trim();
      img.alt = langText(entry.title);
      imgWrap.classList.remove("hidden");
    } else {
      imgWrap.classList.add("hidden");
      img.removeAttribute("src");
    }
  }

  $("#modalDefinition").innerHTML = langText(entry.definition);
  $("#modalExamples").innerHTML = langText(entry.examples);

  const ul = $("#modalBullets");
  ul.innerHTML = "";
  (entry.bullets?.[currentLang] || entry.bullets?.pt || []).forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    ul.appendChild(li);
  });

  const see = $("#modalSeeAlso");
  see.innerHTML = "";
  (entry.seeAlso || []).forEach((sid) => {
    const target = entryById(sid);
    if (!target) return;
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "see-pill";
    pill.textContent = langText(target.title);
    pill.addEventListener("click", () => openModal(target.id, filteredOrder));
    see.appendChild(pill);
  });

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = $("#modal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function modalGo(delta) {
  if (!filteredOrder.length) return;
  modalIndex = (modalIndex + delta + filteredOrder.length) % filteredOrder.length;
  openModal(filteredOrder[modalIndex], filteredOrder);
}

function modalRandom() {
  const pool = filteredOrder.length ? filteredOrder : ENTRIES.map((e) => e.id);
  openModal(pool[Math.floor(Math.random() * pool.length)], pool);
}

/* RENDER ALL */
function renderAll() {
  renderRows();
  renderSearch();

  const modal = $("#modal");
  if (modal && !modal.classList.contains("hidden") && lastOpenId) {
    openModal(lastOpenId, getCurrentOrder());
  }
}

/* INIT */
function init() {
  setYear();

  if (!ENTRIES.length) {
    console.warn("IMVpedia: Nenhum verbete encontrado. Verifique o arquivo entries.js.");
  }

  $$(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => setCategory(chip.dataset.category));
  });

  const input = $("#searchInput");
  const clear = $("#clearSearch");

  if (input) {
    input.addEventListener("input", () => {
      searchQuery = input.value || "";
      renderAll();
    });
  }

  if (clear && input) {
    clear.addEventListener("click", () => {
      input.value = "";
      searchQuery = "";
      renderAll();
      input.focus();
    });
  }

  const modal = $("#modal");
  if (modal) {
    modal.addEventListener("click", (ev) => {
      const t = ev.target;
      if (t && t.dataset && t.dataset.close === "1") closeModal();
    });
  }

  $("#modalClose").addEventListener("click", closeModal);
  $("#modalPrev").addEventListener("click", () => modalGo(-1));
  $("#modalNext").addEventListener("click", () => modalGo(1));
  $("#modalRandom").addEventListener("click", modalRandom);

  document.addEventListener("keydown", (ev) => {
    const modal = $("#modal");
    const opened = modal && !modal.classList.contains("hidden");
    if (!opened) return;

    if (ev.key === "Escape") closeModal();
    if (ev.key === "ArrowLeft") modalGo(-1);
    if (ev.key === "ArrowRight") modalGo(1);
  });

  setLang("pt");
  setCategory("all");
  renderAll();
}

init();