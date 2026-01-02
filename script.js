/* IMVpedia 1.0
   - Estrutura pronta para você adicionar MAIS termos (PT/EN/ES) e imagens depois.
   - Para adicionar imagem: preencha imageUrl com um link (ou caminho) válido.
*/

const CATEGORIES = {
  scales:   { pt: "Escalas",   en: "Scales",   es: "Escalas" },
  intervals:{ pt: "Intervalos",en: "Intervals",es: "Intervalos" },
  rhythm:   { pt: "Ritmo",     en: "Rhythm",   es: "Ritmo" },
  notation: { pt: "Notação",   en: "Notation", es: "Notación" },
  harmony:  { pt: "Harmonia",  en: "Harmony",  es: "Armonía" },
  history:  { pt: "História",  en: "History",  es: "Historia" }
};

const CATEGORY_SUB = {
  scales:    { pt:"Base de tonalidade e vocabulário musical", en:"Keys, modes and musical vocabulary", es:"Base de tonalidad y vocabulario musical" },
  intervals: { pt:"Distâncias entre notas e construção de acordes", en:"Distances between notes and chord building", es:"Distancias entre notas y construcción de acordes" },
  rhythm:    { pt:"Tempo, compassos, subdivisões e groove", en:"Time, meter, subdivision and groove", es:"Tiempo, compases, subdivisión y groove" },
  notation:  { pt:"Leitura tradicional e símbolos musicais", en:"Standard notation and symbols", es:"Lectura tradicional y símbolos musicales" },
  harmony:   { pt:"Acordes, funções, progressões e cadências", en:"Chords, functions, progressions and cadences", es:"Acordes, funciones, progresiones y cadencias" },
  history:   { pt:"Evolução das linguagens musicais", en:"Evolution of musical languages", es:"Evolución de los lenguajes musicales" }
};

/* ==========
   DADOS (verbetes)
   ==========
   Para expandir:
   - Copie um objeto e altere id, category e textos.
   - "aliases" ajuda a busca (inclua termos e variações).
   - "seeAlso" deve listar ids existentes.
*/
const ENTRIES = [
  {
    id: "major-scale",
    category: "scales",
    title: { pt:"Escala Maior", en:"Major Scale", es:"Escala Mayor" },
    short: {
      pt:"Sequência de 7 notas com padrão de tons e semitons que define o som “maior”.",
      en:"7-note pattern of whole/half steps defining the “major” sound.",
      es:"Secuencia de 7 notas con patrón de tonos y semitonos que define el sonido “mayor”."
    },
    definition: {
      pt: "A <b>escala maior</b> é uma coleção de 7 notas (mais a oitava) organizada pelo padrão: <b>T–T–S–T–T–T–S</b> (T=tom, S=semitom). Ela serve como base da tonalidade maior e do campo harmônico diatônico.",
      en: "The <b>major scale</b> is a 7-note collection (plus the octave) built by the pattern: <b>W–W–H–W–W–W–H</b> (W=whole step, H=half step). It underpins major keys and diatonic harmony.",
      es: "La <b>escala mayor</b> es una colección de 7 notas (más la octava) construida con el patrón: <b>T–T–S–T–T–T–S</b> (T=tono, S=semitono). Sustenta las tonalidades mayores y la armonía diatónica."
    },
    bullets: {
      pt: ["Padrão intervalar fixo (T–T–S–T–T–T–S).", "Define graus e funções harmônicas (I, ii, iii, IV, V, vi, vii°).", "Base de melodias e progressões em música tonal."],
      en: ["Fixed interval pattern (W–W–H–W–W–W–H).", "Defines degrees and harmonic functions (I, ii, iii, IV, V, vi, vii°).", "Foundation for tonal melodies and progressions."],
      es: ["Patrón intervalar fijo (T–T–S–T–T–T–S).", "Define grados y funciones armónicas (I, ii, iii, IV, V, vi, vii°).", "Base para melodías y progresiones tonales."]
    },
    examples: {
      pt: "Ex.: <b>Dó maior</b> = Dó–Ré–Mi–Fá–Sol–Lá–Si–(Dó).<br/>Armadura: sem sustenidos/bemóis.",
      en: "Example: <b>C major</b> = C–D–E–F–G–A–B–(C).<br/>Key signature: no sharps/flats.",
      es: "Ej.: <b>Do mayor</b> = Do–Re–Mi–Fa–Sol–La–Si–(Do).<br/>Armadura: sin sostenidos/bemoles."
    },
    aliases: ["escala maior","major scale","escala mayor","ton semitom","WWHWWWH","TTSTTT S".replace(" ","")],
    seeAlso: ["natural-minor", "modes", "diatonic-triads"],
    imageUrl: "" // coloque aqui no futuro (ex: "img/escala-maior.png")
  },

  {
    id: "natural-minor",
    category: "scales",
    title: { pt:"Escala Menor Natural", en:"Natural Minor Scale", es:"Escala Menor Natural" },
    short: {
      pt:"Escala menor derivada do modo eólio; som mais introspectivo/tenso.",
      en:"Minor scale derived from Aeolian mode; more introspective/tense color.",
      es:"Escala menor derivada del modo eólico; color más introspectivo/tenso."
    },
    definition: {
      pt: "A <b>menor natural</b> (modo eólio) segue o padrão: <b>T–S–T–T–S–T–T</b>. É a base das tonalidades menores (sem alterações adicionais do harmônico/melódico).",
      en: "The <b>natural minor</b> (Aeolian mode) follows: <b>W–H–W–W–H–W–W</b>. It underpins minor keys without the raised tones of harmonic/melodic minor.",
      es: "La <b>menor natural</b> (modo eólico) sigue: <b>T–S–T–T–S–T–T</b>. Sustenta las tonalidades menores sin las alteraciones de la menor armónica/melódica."
    },
    bullets: {
      pt: ["Comparada à maior: 3º, 6º e 7º graus são menores (rebaixados).", "Campo harmônico muda funções e tensões.", "Muito usada em rock, pop e trilhas em clima menor."],
      en: ["Compared to major: lowered 3rd, 6th and 7th degrees.", "Diatonic harmony shifts functions and tensions.", "Widely used in rock, pop and minor-tonality moods."],
      es: ["Comparada con mayor: 3º, 6º y 7º grados son menores (bajados).", "La armonía diatónica cambia funciones y tensiones.", "Muy usada en rock, pop y ambientes menores."]
    },
    examples: {
      pt: "Ex.: <b>Lá menor</b> = Lá–Si–Dó–Ré–Mi–Fá–Sol–(Lá).",
      en: "Example: <b>A minor</b> = A–B–C–D–E–F–G–(A).",
      es: "Ej.: <b>La menor</b> = La–Si–Do–Re–Mi–Fa–Sol–(La)."
    },
    aliases: ["menor natural","natural minor","menor natural","aeolian","eólio","eolico"],
    seeAlso: ["major-scale", "modes", "harmonic-minor"],
    imageUrl: ""
  },

  {
    id: "harmonic-minor",
    category: "scales",
    title: { pt:"Escala Menor Harmônica", en:"Harmonic Minor Scale", es:"Escala Menor Armónica" },
    short: {
      pt:"Menor com 7º grau maior para criar dominante forte (V7).",
      en:"Minor with raised 7th to strengthen dominant (V7).",
      es:"Menor con 7º grado elevado para reforzar la dominante (V7)."
    },
    definition: {
      pt: "A <b>menor harmônica</b> eleva o <b>7º grau</b> da menor natural, criando a sensível (leading tone) que puxa para a tônica e fortalece a cadência (V→i).",
      en: "<b>Harmonic minor</b> raises the <b>7th degree</b> of natural minor, creating a leading tone that pulls to the tonic and strengthens cadences (V→i).",
      es: "La <b>menor armónica</b> eleva el <b>7º grado</b> de la menor natural, creando la sensible que conduce a la tónica y refuerza cadencias (V→i)."
    },
    bullets: {
      pt: ["Gera intervalo característico entre 6º e 7º (1 tom e meio).", "Muito usada em música clássica, flamenco e metal neoclássico.", "Facilita acordes V7 e vii° no modo menor."],
      en: ["Creates a characteristic augmented 2nd between 6th and 7th.", "Common in classical, flamenco and neoclassical metal.", "Enables strong V7 and vii° chords in minor."],
      es: ["Crea una 2ª aumentada característica entre 6º y 7º.", "Común en música clásica, flamenco y metal neoclásico.", "Permite acordes V7 y vii° fuertes en menor."]
    },
    examples: {
      pt: "Ex.: <b>Lá menor harmônica</b> = Lá–Si–Dó–Ré–Mi–Fá–Sol#–(Lá).",
      en: "Example: <b>A harmonic minor</b> = A–B–C–D–E–F–G#–(A).",
      es: "Ej.: <b>La menor armónica</b> = La–Si–Do–Re–Mi–Fa–Sol#–(La)."
    },
    aliases: ["menor harmônica","harmonic minor","menor armónica","leading tone","sensível"],
    seeAlso: ["natural-minor", "melodic-minor", "dominant-function"],
    imageUrl: ""
  },

  {
    id: "melodic-minor",
    category: "scales",
    title: { pt:"Escala Menor Melódica", en:"Melodic Minor Scale", es:"Escala Menor Melódica" },
    short: {
      pt:"Menor com 6º e 7º elevados (subida) para suavizar melodias e cadências.",
      en:"Minor with raised 6th/7th (ascending) to smooth melodies and cadences.",
      es:"Menor con 6º y 7º elevados (ascendente) para suavizar melodías y cadencias."
    },
    definition: {
      pt: "Na prática clássica, a <b>menor melódica</b> eleva <b>6º e 7º</b> graus ao subir, e muitas vezes retorna à menor natural ao descer. Em jazz, o termo costuma indicar a forma ascendente usada como escala base para modos e acordes alterados.",
      en: "In classical practice, <b>melodic minor</b> raises the <b>6th and 7th</b> ascending, often reverting to natural minor descending. In jazz, it usually refers to the ascending form as a parent scale for modes and altered harmony.",
      es: "En la práctica clásica, la <b>menor melódica</b> eleva el <b>6º y 7º</b> al ascender, y a menudo vuelve a la menor natural al descender. En jazz, suele referirse a la forma ascendente como escala madre de modos y armonía alterada."
    },
    bullets: {
      pt: ["Evita o salto grande (2ª aumentada) da menor harmônica entre 6º e 7º.", "No jazz, gera modos importantes (ex.: lídio dominante).", "Muito útil para linhas melódicas no modo menor."],
      en: ["Avoids the big leap (augmented 2nd) found in harmonic minor.", "In jazz, yields important modes (e.g., Lydian dominant).", "Useful for melodic lines in minor keys."],
      es: ["Evita el salto grande (2ª aumentada) de la menor armónica.", "En jazz, genera modos importantes (p. ej., lidio dominante).", "Muy útil para líneas melódicas en tonalidades menores."]
    },
    examples: {
      pt: "Ex. (ascendente): <b>Lá menor melódica</b> = Lá–Si–Dó–Ré–Mi–Fá#–Sol#–(Lá).",
      en: "Example (ascending): <b>A melodic minor</b> = A–B–C–D–E–F#–G#–(A).",
      es: "Ej. (ascendente): <b>La menor melódica</b> = La–Si–Do–Re–Mi–Fa#–Sol#–(La)."
    },
    aliases: ["menor melódica","melodic minor","menor melódica","jazz minor"],
    seeAlso: ["harmonic-minor", "modes", "altered-scale"],
    imageUrl: ""
  },

  {
    id: "modes",
    category: "scales",
    title: { pt:"Modos", en:"Modes", es:"Modos" },
    short: {
      pt:"Variações de uma escala geradas ao mudar a nota inicial (centro).",
      en:"Scale variants formed by shifting the starting note (center).",
      es:"Variantes de una escala al cambiar la nota inicial (centro)."
    },
    definition: {
      pt: "Os <b>modos</b> podem ser entendidos como “perspectivas” de uma escala: você mantém as mesmas notas, mas muda o <b>centro tonal</b> (nota de repouso). Ex.: os modos da escala maior incluem Jônio (maior), Dório, Frígio, Lídio, Mixolídio, Eólio (menor natural) e Lócrio.",
      en: "<b>Modes</b> are “views” of a scale: you keep the same notes but change the <b>tonal center</b> (home note). The major scale yields Ionian (major), Dorian, Phrygian, Lydian, Mixolydian, Aeolian (natural minor) and Locrian.",
      es: "Los <b>modos</b> son “perspectivas” de una escala: mantienes las mismas notas pero cambias el <b>centro tonal</b>. La escala mayor produce Jónico (mayor), Dórico, Frigio, Lidio, Mixolidio, Eólico (menor natural) y Locrio."
    },
    bullets: {
      pt: ["Cada modo tem uma “cor” por causa de seus graus característicos.", "Muito usados em jazz, rock, trilhas e música modal.", "Para soar modal, enfatize o centro e as notas características."],
      en: ["Each mode has a ‘color’ due to characteristic degrees.", "Widely used in jazz, rock, film scoring and modal music.", "To sound modal, emphasize the center and characteristic notes."],
      es: ["Cada modo tiene un ‘color’ por sus grados característicos.", "Muy usados en jazz, rock, bandas sonoras y música modal.", "Para sonar modal, enfatiza el centro y notas características."]
    },
    examples: {
      pt: "Ex.: Em Dó maior, <b>Ré dórico</b> usa as mesmas notas (Dó…Si) mas com centro em Ré.",
      en: "Example: In C major, <b>D Dorian</b> uses the same notes (C…B) but centers on D.",
      es: "Ej.: En Do mayor, <b>Re dórico</b> usa las mismas notas (Do…Si) pero centra en Re."
    },
    aliases: ["modos gregos","modes","modos","ionian","dorian","phrygian","lydian","mixolydian","aeolian","locrian"],
    seeAlso: ["major-scale", "natural-minor", "melodic-minor"],
    imageUrl: ""
  },

  {
    id: "perfect-fifth",
    category: "intervals",
    title: { pt:"Quinta Justa", en:"Perfect Fifth", es:"Quinta Justa" },
    short: {
      pt:"Intervalo estável (consonante) que forma base de acordes e harmonia tonal.",
      en:"Stable consonant interval central to chords and tonal harmony.",
      es:"Intervalo estable (consonante) clave para acordes y armonía tonal."
    },
    definition: {
      pt: "A <b>quinta justa</b> é o intervalo entre a tônica e o 5º grau. É considerado altamente consonante e aparece em tríades, power chords e na organização tonal (ex.: círculo de quintas).",
      en: "A <b>perfect fifth</b> spans from the root to the 5th scale degree. It is highly consonant and appears in triads, power chords, and tonal organization (e.g., circle of fifths).",
      es: "La <b>quinta justa</b> va de la tónica al 5º grado. Es muy consonante y aparece en tríadas, power chords y en la organización tonal (círculo de quintas)."
    },
    bullets: {
      pt: ["Consonância forte: sensação de estabilidade.", "Base do acorde maior/menor (tônica + terça + quinta).", "Elemento central no círculo de quintas."],
      en: ["Strong consonance: stable sound.", "Building block of major/minor triads.", "Central in the circle of fifths."],
      es: ["Consonancia fuerte: sonido estable.", "Base de tríadas mayores/menores.", "Central en el círculo de quintas."]
    },
    examples: {
      pt: "Ex.: Dó→Sol, Ré→Lá, Mi→Si.",
      en: "Examples: C→G, D→A, E→B.",
      es: "Ej.: Do→Sol, Re→La, Mi→Si."
    },
    aliases: ["quinta justa","perfect fifth","quinta justa","P5","5J"],
    seeAlso: ["triad", "circle-of-fifths"],
    imageUrl: ""
  },

  {
    id: "syncopation",
    category: "rhythm",
    title: { pt:"Síncope", en:"Syncopation", es:"Síncopa" },
    short: {
      pt:"Acento em partes fracas do tempo/compasso, criando sensação de deslocamento.",
      en:"Accents on weak beats/subdivisions, creating rhythmic displacement.",
      es:"Acentos en partes débiles del compás, creando desplazamiento rítmico."
    },
    definition: {
      pt: "A <b>síncope</b> acontece quando o acento aparece onde “não se espera”: em contratempos ou subdivisões fracas. Isso cria groove, tensão rítmica e movimento.",
      en: "<b>Syncopation</b> occurs when accents land where they’re less expected: on offbeats or weak subdivisions. It creates groove, rhythmic tension, and motion.",
      es: "La <b>síncopa</b> sucede cuando el acento cae donde menos se espera: en contratiempos o subdivisiones débiles. Genera groove, tensión y movimiento."
    },
    bullets: {
      pt: ["Muito comum em samba, funk, jazz e pop.", "Pode surgir por antecipações, atrasos, ligaduras e pausas estratégicas.", "É parte essencial do ‘swing’ em vários estilos."],
      en: ["Common in samba, funk, jazz and pop.", "Often created by anticipations, delays, ties and strategic rests.", "Core ingredient of ‘swing’ in many styles."],
      es: ["Muy común en samba, funk, jazz y pop.", "Se crea con anticipaciones, retrasos, ligaduras y silencios.", "Ingrediente clave del ‘swing’ en muchos estilos."]
    },
    examples: {
      pt: "Ex.: acentuar o “<b>e</b>” em “1 <b>e</b> & a” ou amarrar a nota do tempo fraco para o forte.",
      en: "Example: accent the “<b>e</b>” in “1 <b>e</b> & a”, or tie a weak-beat note into a strong beat.",
      es: "Ej.: acentuar la “<b>e</b>” en “1 <b>e</b> & a”, o ligar una nota débil hacia un tiempo fuerte."
    },
    aliases: ["síncope","syncopation","síncopa","offbeat","contratempo","contratiempo"],
    seeAlso: ["meter", "subdivision"],
    imageUrl: ""
  },

  {
    id: "key-signature",
    category: "notation",
    title: { pt:"Armadura de Clave", en:"Key Signature", es:"Armadura" },
    short: {
      pt:"Conjunto de sustenidos/bemóis fixos no início da pauta que define a tonalidade.",
      en:"Fixed sharps/flats at the staff start that define the key.",
      es:"Sostenidos/bemoles fijos al inicio que definen la tonalidad."
    },
    definition: {
      pt: "A <b>armadura de clave</b> aparece no início de cada pauta (após a clave) e indica quais notas serão sustenidas/bemóis de forma constante, reduzindo a necessidade de acidentes repetidos. Ela sugere a tonalidade (maior ou relativa menor).",
      en: "A <b>key signature</b> appears at the start of each staff (after the clef) and indicates which notes are consistently sharp/flat, reducing repeated accidentals. It suggests the key (major or relative minor).",
      es: "La <b>armadura</b> aparece al inicio del pentagrama (después de la clave) e indica qué notas serán sostenidas/bemoles de forma constante, evitando alteraciones repetidas. Sugiere la tonalidad (mayor o relativa menor)."
    },
    bullets: {
      pt: ["A ordem dos sustenidos e bemóis é fixa.", "Tonalidade maior e menor relativa compartilham a mesma armadura.", "Ajuda na leitura rápida e na análise tonal."],
      en: ["Sharps/flats follow fixed orders.", "Major key and its relative minor share the same signature.", "Speeds up reading and tonal analysis."],
      es: ["El orden de sostenidos y bemoles es fijo.", "La tonalidad mayor y su relativa menor comparten armadura.", "Acelera la lectura y el análisis tonal."]
    },
    examples: {
      pt: "Ex.: 1 sustenido (Fá#) sugere Sol maior ou Mi menor.",
      en: "Example: 1 sharp (F#) suggests G major or E minor.",
      es: "Ej.: 1 sostenido (Fa#) sugiere Sol mayor o Mi menor."
    },
    aliases: ["armadura de clave","key signature","armadura","sustenidos","bemóis","bemoles"],
    seeAlso: ["circle-of-fifths", "major-scale"],
    imageUrl: ""
  },

  {
    id: "diatonic-triads",
    category: "harmony",
    title: { pt:"Tríades Diatônicas", en:"Diatonic Triads", es:"Tríadas Diatónicas" },
    short: {
      pt:"Acordes de 3 notas construídos sobre cada grau de uma escala/tonalidade.",
      en:"3-note chords built on each scale degree within a key.",
      es:"Acordes de 3 notas construidos sobre cada grado dentro de una tonalidad."
    },
    definition: {
      pt: "As <b>tríades diatônicas</b> são formadas empilhando terças sobre cada grau da escala de uma tonalidade. Em Dó maior, por exemplo, surgem: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° B°.",
      en: "<b>Diatonic triads</b> are formed by stacking thirds on each scale degree within a key. In C major: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° B°.",
      es: "Las <b>tríadas diatónicas</b> se forman apilando terceras sobre cada grado de la escala. En Do mayor: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° B°."
    },
    bullets: {
      pt: ["Base da harmonia funcional tonal.", "Cada grau tem uma função (tônica, subdominante, dominante).", "A qualidade do acorde depende das notas da escala."],
      en: ["Foundation of functional tonal harmony.", "Each degree has a function (tonic, subdominant, dominant).", "Chord quality depends on the key’s notes."],
      es: ["Base de la armonía funcional tonal.", "Cada grado tiene función (tónica, subdominante, dominante).", "La cualidad del acorde depende de la escala."]
    },
    examples: {
      pt: "Ex.: em Sol maior (1 sustenido), as tríades mudam conforme a escala (Fá# influencia acordes).",
      en: "Example: in G major (one sharp), triads change according to the scale (F# affects chords).",
      es: "Ej.: en Sol mayor (un sostenido), las tríadas cambian según la escala (Fa# afecta acordes)."
    },
    aliases: ["tríades diatônicas","diatonic triads","tríadas diatónicas","campo harmônico","harmonized scale"],
    seeAlso: ["major-scale", "dominant-function", "triad"],
    imageUrl: ""
  },

  {
    id: "dominant-function",
    category: "harmony",
    title: { pt:"Função Dominante", en:"Dominant Function", es:"Función Dominante" },
    short: {
      pt:"Função harmônica que cria tensão e pede resolução na tônica.",
      en:"Harmonic function that creates tension and resolves to the tonic.",
      es:"Función armónica que crea tensión y resuelve en la tónica."
    },
    definition: {
      pt: "A <b>dominante</b> (V) e seus acordes relacionados (vii°) tendem a resolver na <b>tônica</b> (I ou i). Essa força vem, entre outros fatores, da presença da <b>sensível</b> (7º grau) e do movimento cadencial.",
      en: "<b>Dominant</b> (V) and related chords (vii°) tend to resolve to the <b>tonic</b> (I or i). This pull is driven by the <b>leading tone</b> (7th degree) and cadential motion.",
      es: "La <b>dominante</b> (V) y acordes relacionados (vii°) tienden a resolver en la <b>tónica</b> (I o i). La atracción se debe a la <b>sensible</b> (7º grado) y al movimiento cadencial."
    },
    bullets: {
      pt: ["Em maior: V e V7 resolvem naturalmente em I.", "Em menor: elevar o 7º (menor harmônica) fortalece o V.", "Cadências (V→I) são marcadores estruturais fortes."],
      en: ["In major: V and V7 naturally resolve to I.", "In minor: raising the 7th (harmonic minor) strengthens V.", "Cadences (V→I) are strong structural markers."],
      es: ["En mayor: V y V7 resuelven naturalmente en I.", "En menor: elevar el 7º (menor armónica) refuerza V.", "Las cadencias (V→I) son marcadores estructurales fuertes."]
    },
    examples: {
      pt: "Ex.: em Dó maior, G7 → C. Em Lá menor harmônica, E7 → Am.",
      en: "Example: in C major, G7 → C. In A harmonic minor, E7 → Am.",
      es: "Ej.: en Do mayor, G7 → C. En La menor armónica, E7 → Am."
    },
    aliases: ["dominante","dominant function","función dominante","V7","cadência","cadence"],
    seeAlso: ["harmonic-minor", "diatonic-triads", "circle-of-fifths"],
    imageUrl: ""
  },

  {
    id: "circle-of-fifths",
    category: "harmony",
    title: { pt:"Círculo de Quintas", en:"Circle of Fifths", es:"Círculo de Quintas" },
    short: {
      pt:"Mapa das tonalidades por quintas; ajuda em armaduras, modulações e progressões.",
      en:"Map of keys by fifths; helps with signatures, modulations and progressions.",
      es:"Mapa de tonalidades por quintas; ayuda en armaduras, modulaciones y progresiones."
    },
    definition: {
      pt: "O <b>círculo de quintas</b> organiza as tonalidades avançando por quintas justas. Ele mostra quantos sustenidos/bemóis cada tonalidade possui e evidencia relações próximas (modulações e empréstimos).",
      en: "The <b>circle of fifths</b> organizes keys by moving in perfect fifths. It shows how many sharps/flats each key has and highlights close relationships (modulation and borrowing).",
      es: "El <b>círculo de quintas</b> organiza las tonalidades avanzando por quintas justas. Muestra cuántos sostenidos/bemoles tiene cada tonalidad y relaciones cercanas (modulación y préstamos)."
    },
    bullets: {
      pt: ["Sentido horário: adiciona sustenidos.", "Sentido anti-horário: adiciona bemóis.", "Muito usado para progressões (ex.: ii–V–I) e análise."],
      en: ["Clockwise: adds sharps.", "Counterclockwise: adds flats.", "Used for progressions (e.g., ii–V–I) and analysis."],
      es: ["Horario: añade sostenidos.", "Antihorario: añade bemoles.", "Usado para progresiones (p. ej., ii–V–I) y análisis."]
    },
    examples: {
      pt: "Ex.: C → G → D → A → E (cada passo adiciona 1 sustenido).",
      en: "Example: C → G → D → A → E (each step adds one sharp).",
      es: "Ej.: C → G → D → A → E (cada paso añade 1 sostenido)."
    },
    aliases: ["círculo de quintas","circle of fifths","círculo de quintas","armaduras","key signatures"],
    seeAlso: ["key-signature", "perfect-fifth", "major-scale"],
    imageUrl: ""
  },

  {
    id: "music-periods",
    category: "history",
    title: { pt:"Períodos Musicais", en:"Musical Periods", es:"Períodos Musicales" },
    short: {
      pt:"Divisão histórica (Medieval, Renascimento, Barroco, Clássico, Romântico, Contemporâneo).",
      en:"Historical eras (Medieval, Renaissance, Baroque, Classical, Romantic, Contemporary).",
      es:"Eras históricas (Medieval, Renacimiento, Barroco, Clásico, Romántico, Contemporáneo)."
    },
    definition: {
      pt: "Os <b>períodos musicais</b> ajudam a organizar a evolução de estilos, linguagem harmônica, formas e práticas de escrita. Cada era traz mudanças em instrumentos, estética e teoria.",
      en: "<b>Musical periods</b> organize the evolution of styles, harmony, forms and writing practices. Each era brings changes in instruments, aesthetics and theory.",
      es: "Los <b>períodos musicales</b> organizan la evolución de estilos, armonía, formas y prácticas de escritura. Cada era trae cambios en instrumentos, estética y teoría."
    },
    bullets: {
      pt: ["Barroco: consolidação de tonalidade e contraponto.", "Clássico: formas claras e harmonia funcional refinada.", "Romântico: cromatismo e expansão expressiva."],
      en: ["Baroque: tonal harmony and counterpoint consolidation.", "Classical: clear forms and refined functional harmony.", "Romantic: chromaticism and expressive expansion."],
      es: ["Barroco: consolidación tonal y contrapunto.", "Clásico: formas claras y armonía funcional refinada.", "Romántico: cromatismo y expansión expresiva."]
    },
    examples: {
      pt: "Ex.: uma fuga barroca foca contraponto; uma sinfonia clássica foca forma; uma obra romântica pode explorar modulações distantes.",
      en: "Example: a Baroque fugue centers counterpoint; a Classical symphony centers form; a Romantic work may explore distant modulations.",
      es: "Ej.: una fuga barroca se centra en contrapunto; una sinfonía clásica en forma; una obra romántica puede explorar modulaciones lejanas."
    },
    aliases: ["períodos musicais","musical periods","períodos musicales","barroco","clássico","romântico"],
    seeAlso: ["circle-of-fifths"],
    imageUrl: ""
  },

  /* Termos-base extras para conectar buscas */
  {
    id: "meter",
    category: "rhythm",
    title: { pt:"Compasso (Métrica)", en:"Meter (Time Signature)", es:"Compás (Métrica)" },
    short: {
      pt:"Organização do pulso em grupos; indicado por fórmulas como 4/4, 3/4, 6/8.",
      en:"Grouping of beats; shown by time signatures like 4/4, 3/4, 6/8.",
      es:"Organización del pulso; indicado por compases como 4/4, 3/4, 6/8."
    },
    definition: {
      pt: "O <b>compasso</b> define como o tempo é dividido em pulsos e quais pulsos recebem acento. A fórmula de compasso (ex.: 4/4) indica quantas unidades cabem no compasso e qual figura representa a unidade de tempo.",
      en: "<b>Meter</b> defines how time is divided into beats and which beats are accented. The time signature (e.g., 4/4) indicates how many beat-units are in a measure and what note value is the unit.",
      es: "El <b>compás</b> define cómo se divide el tiempo en pulsos y cuáles se acentúan. La fórmula (p. ej., 4/4) indica cuántas unidades hay por compás y qué figura es la unidad."
    },
    bullets: {
      pt: ["Simples (2/4, 3/4, 4/4) e compostos (6/8, 9/8, 12/8).", "Afeta acentuação e sensação rítmica.", "Base para leitura e subdivisão."],
      en: ["Simple (2/4, 3/4, 4/4) and compound (6/8, 9/8, 12/8).", "Affects accent patterns and feel.", "Foundation for reading and subdivision."],
      es: ["Simples (2/4, 3/4, 4/4) y compuestos (6/8, 9/8, 12/8).", "Afecta acentos y sensación rítmica.", "Base para lectura y subdivisión."]
    },
    examples: {
      pt: "Ex.: 6/8 costuma soar em dois grandes pulsos (1 e 4), com subdivisão ternária.",
      en: "Example: 6/8 often feels like two big beats (1 and 4) with triple subdivision.",
      es: "Ej.: 6/8 suele sentirse como dos pulsos grandes (1 y 4) con subdivisión ternaria."
    },
    aliases: ["compasso","métrica","meter","time signature","compás"],
    seeAlso: ["syncopation"],
    imageUrl: ""
  },

  {
    id: "subdivision",
    category: "rhythm",
    title: { pt:"Subdivisão", en:"Subdivision", es:"Subdivisión" },
    short: {
      pt:"Divisão do pulso em partes menores (binária, ternária etc.).",
      en:"Splitting the beat into smaller parts (duple, triple, etc.).",
      es:"Dividir el pulso en partes menores (binaria, ternaria, etc.)."
    },
    definition: {
      pt: "A <b>subdivisão</b> é como você “particiona” cada pulso. Em 4/4, uma semínima pode ser subdividida em 2 colcheias (binário) ou 3 notas (ternário, como tercinas).",
      en: "<b>Subdivision</b> is how you partition each beat. In 4/4, a quarter-note beat can subdivide into 2 eighth notes (duple) or 3 notes (triple, like triplets).",
      es: "La <b>subdivisión</b> es cómo particionas cada pulso. En 4/4, un pulso de negra puede subdividirse en 2 corcheas (binario) o 3 notas (ternario, como tresillos)."
    },
    bullets: {
      pt: ["Base para precisão rítmica.", "Define o ‘feel’ (reto vs swing).", "Ajuda a ler figuras e tocar junto com metrônomo."],
      en: ["Foundation for rhythmic accuracy.", "Defines feel (straight vs swing).", "Helps reading and playing with a metronome."],
      es: ["Base para precisión rítmica.", "Define el ‘feel’ (recto vs swing).", "Ayuda a leer y tocar con metrónomo."]
    },
    examples: {
      pt: "Ex.: contar ‘1 e & a’ (semicolcheias) ou ‘1 trip let’ (tercinas).",
      en: "Example: count ‘1 e & a’ (sixteenths) or ‘1 trip let’ (triplets).",
      es: "Ej.: contar ‘1 e & a’ (semicorcheas) o ‘1 trip let’ (tresillos)."
    },
    aliases: ["subdivisão","subdivision","subdivisión","tercina","triplet","swing"],
    seeAlso: ["meter","syncopation"],
    imageUrl: ""
  },

  {
    id: "triad",
    category: "harmony",
    title: { pt:"Tríade", en:"Triad", es:"Tríada" },
    short: {
      pt:"Acorde de 3 notas: tônica, terça e quinta.",
      en:"Three-note chord: root, third, fifth.",
      es:"Acorde de 3 notas: tónica, tercera y quinta."
    },
    definition: {
      pt: "Uma <b>tríade</b> é construída empilhando duas terças sobre uma nota fundamental. Pode ser maior, menor, diminuta ou aumentada, dependendo dos intervalos entre as notas.",
      en: "A <b>triad</b> is built by stacking two thirds above a root. It can be major, minor, diminished or augmented depending on the intervals.",
      es: "Una <b>tríada</b> se construye apilando dos terceras sobre una nota raíz. Puede ser mayor, menor, disminuida o aumentada según los intervalos."
    },
    bullets: {
      pt: ["Maior: 3ª maior + 5ª justa.", "Menor: 3ª menor + 5ª justa.", "Diminuta/Aumentada mudam a 5ª."],
      en: ["Major: major 3rd + perfect 5th.", "Minor: minor 3rd + perfect 5th.", "Diminished/Augmented alter the 5th."],
      es: ["Mayor: 3ª mayor + 5ª justa.", "Menor: 3ª menor + 5ª justa.", "Disminuida/Aumentada modifican la 5ª."]
    },
    examples: {
      pt: "Ex.: C maior = C–E–G; A menor = A–C–E.",
      en: "Example: C major = C–E–G; A minor = A–C–E.",
      es: "Ej.: Do mayor = Do–Mi–Sol; La menor = La–Do–Mi."
    },
    aliases: ["tríade","triad","tríada","acorde","chord"],
    seeAlso: ["diatonic-triads","perfect-fifth"],
    imageUrl: ""
  }
];

/* ==========
   STATE
   ==========
*/
let currentLang = "pt";
let currentCategoryFilter = "all";
let searchQuery = "";
let filteredOrder = [];      // ordem atual para navegação modal (resultados)
let modalIndex = -1;
let lastOpenId = null;

/* ==========
   HELPERS
   ==========
*/
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function setYear(){
  const y = new Date().getFullYear();
  const a = $("#year"), b = $("#year2"), c = $("#year3");
  if(a) a.textContent = y;
  if(b) b.textContent = y;
  if(c) c.textContent = y;
}

function langText(obj){
  return obj?.[currentLang] ?? obj?.pt ?? "";
}

function categoryName(key){
  return langText(CATEGORIES[key] || {pt:key,en:key,es:key});
}

function categorySubtitle(key){
  return langText(CATEGORY_SUB[key] || {pt:"",en:"",es:""});
}

function normalize(s){
  return (s || "")
    .toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .toLowerCase()
    .trim();
}

function buildSearchBlob(entry){
  const t = `${langText(entry.title)} ${langText(entry.short)} ${langText(entry.definition)} ${langText(entry.examples)} ${(entry.aliases||[]).join(" ")} ${entry.category}`;
  return normalize(t);
}

function entryById(id){
  return ENTRIES.find(e => e.id === id) || null;
}

function setLang(lang){
  currentLang = lang;
  document.body.className = `lang-${lang}`;

  $$("#btn-pt, #btn-en, #btn-es").forEach(b => b.classList.remove("active"));
  const btn = $(`#btn-${lang}`);
  if(btn) btn.classList.add("active");

  // atualizar placeholder
  const input = $("#searchInput");
  if(input){
    const ph = {
      pt:"Buscar no IMVpedia…",
      en:"Search IMVpedia…",
      es:"Buscar en IMVpedia…"
    };
    input.placeholder = ph[lang] || ph.pt;
  }

  // re-render para textos da UI
  renderAll();
}

/* ==========
   RENDER: Cards
   ==========
*/
function makeCard(entry){
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role","button");
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

  const title = document.createElement("h3");
  title.className = "card__title";
  title.textContent = langText(entry.title);

  const desc = document.createElement("p");
  desc.className = "card__desc";
  desc.textContent = langText(entry.short);

  body.appendChild(title);
  body.appendChild(desc);

  card.appendChild(thumb);
  card.appendChild(body);

  const open = () => openModal(entry.id, getCurrentOrder());
  card.addEventListener("click", open);
  card.addEventListener("keydown", (ev) => {
    if(ev.key === "Enter" || ev.key === " "){
      ev.preventDefault();
      open();
    }
  });

  return card;
}

function getEntriesByCategory(cat){
  return ENTRIES.filter(e => e.category === cat);
}

/* ==========
   RENDER: Rows
   ==========
*/
function renderRows(){
  const rows = $("#rows");
  if(!rows) return;
  rows.innerHTML = "";

  const cats = Object.keys(CATEGORIES);

  cats.forEach(cat => {
    if(currentCategoryFilter !== "all" && currentCategoryFilter !== cat) return;

    const section = document.createElement("section");
    section.className = "row";
    section.id = `row-${cat}`;

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
    prev.setAttribute("aria-label","Voltar");

    const next = document.createElement("button");
    next.className = "iconbtn";
    next.type = "button";
    next.textContent = "›";
    next.setAttribute("aria-label","Avançar");

    controls.appendChild(prev);
    controls.appendChild(next);

    head.appendChild(left);
    head.appendChild(controls);

    const scroller = document.createElement("div");
    scroller.className = "scroller";

    const list = getEntriesByCategory(cat);
    list.forEach(e => scroller.appendChild(makeCard(e)));

    // scroll controls
    const scrollStep = () => Math.max(240, scroller.clientWidth * 0.8);
    prev.addEventListener("click", () => scroller.scrollBy({left: -scrollStep(), behavior:"smooth"}));
    next.addEventListener("click", () => scroller.scrollBy({left: scrollStep(), behavior:"smooth"}));

    section.appendChild(head);
    section.appendChild(scroller);
    rows.appendChild(section);
  });
}

/* ==========
   SEARCH + FILTER
   ==========
*/
function getCurrentOrder(){
  // ordem usada no modal: se há busca, usa resultados; senão usa categoria ou tudo
  if(searchQuery.trim()){
    return searchResults();
  }
  if(currentCategoryFilter === "all"){
    return ENTRIES.map(e=>e.id);
  }
  return ENTRIES.filter(e=>e.category===currentCategoryFilter).map(e=>e.id);
}

function searchResults(){
  const q = normalize(searchQuery);
  if(!q) return [];
  const hits = ENTRIES
    .map(e => ({ id:e.id, blob: buildSearchBlob(e), entry:e }))
    .filter(x => x.blob.includes(q))
    .map(x => x.entry);

  // rank simples: título/aliases primeiro
  const ranked = hits.sort((a,b) => {
    const at = normalize(langText(a.title));
    const bt = normalize(langText(b.title));
    const aScore = (at.includes(q)? 2:0) + ((a.aliases||[]).some(al=>normalize(al).includes(q))? 1:0);
    const bScore = (bt.includes(q)? 2:0) + ((b.aliases||[]).some(al=>normalize(al).includes(q))? 1:0);
    return bScore - aScore;
  });

  if(currentCategoryFilter !== "all"){
    return ranked.filter(e=>e.category===currentCategoryFilter).map(e=>e.id);
  }
  return ranked.map(e=>e.id);
}

function renderSearch(){
  const results = $("#results");
  const grid = $("#resultsGrid");
  const meta = $("#resultsMeta");
  const empty = $("#emptyState");
  const rows = $("#rows");

  if(!results || !grid || !meta || !empty || !rows) return;

  const q = normalize(searchQuery);
  if(!q){
    results.classList.add("hidden");
    empty.classList.add("hidden");
    rows.classList.remove("hidden");
    return;
  }

  const ids = searchResults();
  grid.innerHTML = "";

  if(ids.length === 0){
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

  ids.forEach(id => {
    const e = entryById(id);
    if(e) grid.appendChild(makeCard(e));
  });
}

/* ==========
   MODAL
   ==========
*/
function openModal(id, orderIds){
  const modal = $("#modal");
  if(!modal) return;

  filteredOrder = orderIds && orderIds.length ? orderIds : ENTRIES.map(e=>e.id);
  modalIndex = Math.max(0, filteredOrder.indexOf(id));
  lastOpenId = id;

  const entry = entryById(id);
  if(!entry) return;

  $("#modalTitle").textContent = langText(entry.title);
  $("#modalCategory").textContent = categoryName(entry.category);

  // aliases (pequeno)
  const aliases = (entry.aliases || []).slice(0, 6);
  const aliasesWrap = $("#modalAliases");
  if(aliasesWrap){
    const label = {
      pt: aliases.length ? `Sinônimos: ${aliases.join(", ")}` : "",
      en: aliases.length ? `Aliases: ${aliases.join(", ")}` : "",
      es: aliases.length ? `Sinónimos: ${aliases.join(", ")}` : ""
    };
    aliasesWrap.textContent = label[currentLang] || label.pt;
  }

  // Image
  const imgWrap = $("#modalImageWrap");
  const img = $("#modalImage");
  if(imgWrap && img){
    if(entry.imageUrl && entry.imageUrl.trim()){
      img.src = entry.imageUrl.trim();
      imgWrap.classList.remove("hidden");
      img.alt = langText(entry.title);
    }else{
      imgWrap.classList.add("hidden");
      img.removeAttribute("src");
    }
  }

  // Definition / Examples (HTML permitido)
  $("#modalDefinition").innerHTML = langText(entry.definition);
  $("#modalExamples").innerHTML = langText(entry.examples);

  // Bullets
  const ul = $("#modalBullets");
  ul.innerHTML = "";
  (entry.bullets?.[currentLang] || entry.bullets?.pt || []).forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    ul.appendChild(li);
  });

  // See also
  const see = $("#modalSeeAlso");
  see.innerHTML = "";
  (entry.seeAlso || []).forEach(sid => {
    const target = entryById(sid);
    if(!target) return;
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

function closeModal(){
  const modal = $("#modal");
  if(!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function modalGo(delta){
  if(!filteredOrder.length) return;
  modalIndex = (modalIndex + delta + filteredOrder.length) % filteredOrder.length;
  const id = filteredOrder[modalIndex];
  openModal(id, filteredOrder);
}

function modalRandom(){
  const pool = filteredOrder.length ? filteredOrder : ENTRIES.map(e=>e.id);
  const id = pool[Math.floor(Math.random()*pool.length)];
  openModal(id, pool);
}

/* ==========
   UI: Category chips
   ==========
*/
function setCategory(cat){
  currentCategoryFilter = cat;
  $$(".chip").forEach(c => c.classList.toggle("active", c.dataset.category === cat));
  renderAll();
}

/* ==========
   RENDER ALL
   ==========
*/
function renderAll(){
  // se existe busca, mostra resultados; senão rows
  renderRows();
  renderSearch();

  // se modal aberto, reatualiza conteúdo no idioma atual
  const modal = $("#modal");
  if(modal && !modal.classList.contains("hidden") && lastOpenId){
    openModal(lastOpenId, getCurrentOrder());
  }
}

/* ==========
   INIT
   ==========
*/
function init(){
  setYear();

  // Lang buttons
  $$(".lang__btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // Chips
  $$(".chip").forEach(chip => {
    chip.addEventListener("click", () => setCategory(chip.dataset.category));
  });

  // Search
  const input = $("#searchInput");
  const clear = $("#clearSearch");
  if(input){
    input.addEventListener("input", () => {
      searchQuery = input.value || "";
      renderAll();
    });
  }
  if(clear && input){
    clear.addEventListener("click", () => {
      input.value = "";
      searchQuery = "";
      renderAll();
      input.focus();
    });
  }

  // Modal close
  const modal = $("#modal");
  if(modal){
    modal.addEventListener("click", (ev) => {
      const t = ev.target;
      if(t && t.dataset && t.dataset.close === "1") closeModal();
    });
  }
  $("#modalClose").addEventListener("click", closeModal);
  document.addEventListener("keydown", (ev) => {
    const modal = $("#modal");
    const opened = modal && !modal.classList.contains("hidden");
    if(!opened) return;
    if(ev.key === "Escape") closeModal();
    if(ev.key === "ArrowLeft") modalGo(-1);
    if(ev.key === "ArrowRight") modalGo(1);
  });

  // Modal nav buttons
  $("#modalPrev").addEventListener("click", () => modalGo(-1));
  $("#modalNext").addEventListener("click", () => modalGo(1));
  $("#modalRandom").addEventListener("click", modalRandom);

  // default
  setLang("pt");
  setCategory("all");
  renderAll();
}

init();