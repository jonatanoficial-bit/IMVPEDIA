const data = [
  {
    category: "Escalas",
    items: [
      {
        title: {
          pt: "Escala Maior",
          en: "Major Scale",
          es: "Escala Mayor"
        },
        text: {
          pt: "A escala maior é formada pelo padrão T-T-S-T-T-T-S e serve como base da tonalidade maior.",
          en: "The major scale follows the pattern W-W-H-W-W-W-H and is the foundation of major tonality.",
          es: "La escala mayor sigue el patrón T-T-S-T-T-T-S y es la base de la tonalidad mayor."
        }
      },
      {
        title: {
          pt: "Escala Menor Natural",
          en: "Natural Minor Scale",
          es: "Escala Menor Natural"
        },
        text: {
          pt: "A escala menor natural deriva do modo eólio e possui sonoridade mais introspectiva.",
          en: "The natural minor scale derives from the Aeolian mode and has a darker sound.",
          es: "La escala menor natural deriva del modo eólico y tiene un sonido más oscuro."
        }
      }
    ]
  },
  {
    category: "Ritmo",
    items: [
      {
        title: {
          pt: "Síncope",
          en: "Syncopation",
          es: "Síncopa"
        },
        text: {
          pt: "Síncope é o deslocamento do acento rítmico para partes fracas do compasso.",
          en: "Syncopation is the displacement of rhythmic accents to weak beats.",
          es: "La síncopa es el desplazamiento del acento rítmico a tiempos débiles."
        }
      }
    ]
  }
];

const content = document.getElementById("content");
const search = document.getElementById("search");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

function render(lang, filter = "") {
  content.innerHTML = "";

  data.forEach(cat => {
    const section = document.createElement("div");
    section.className = "category";

    const h3 = document.createElement("h3");
    h3.textContent = cat.category;
    section.appendChild(h3);

    cat.items.forEach(item => {
      const title = item.title[lang];
      const text = item.text[lang];

      if (title.toLowerCase().includes(filter) || text.toLowerCase().includes(filter)) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<strong>${title}</strong><p>${text}</p>`;
        section.appendChild(card);
      }
    });

    content.appendChild(section);
  });
}

let currentLang = "pt";
render(currentLang);

document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.className = "lang-" + btn.dataset.lang;
    document.querySelectorAll(".lang-switch button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentLang = btn.dataset.lang;
    render(currentLang, search.value.toLowerCase());
  });
});

search.addEventListener("input", () => {
  render(currentLang, search.value.toLowerCase());
});