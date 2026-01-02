/* IMVpedia — Premium Netflix-like UI (PT/EN/ES)
   - Carrosséis por categoria (scroll horizontal + botões)
   - Busca global + grid de resultados
   - Modal com verbete completo + navegação (anterior/próximo/aleatório)
   - Estrutura pronta para adicionar MUITO conteúdo depois
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

/* ==========
   VERBETES (base inicial)
   Você pode expandir depois: copie um objeto, troque id, category e textos.
   - aliases ajuda a busca
   - seeAlso aponta para outros ids (se não existir, o app ignora)
   - imageUrl: coloque link/caminho no futuro (ex.: "img/escala-maior.png")
   ==========
*/
const ENTRIES = [
  {
    id: "major-scale",
    category: "scales",
    title: { pt: "Escala Maior", en: "Major Scale", es: "Escala Mayor" },
    short: {
      pt: "Padrão T–T–S–T–T–T–S. Base da tonalidade maior.",
      en: "W–W–H–W–W–W–H. Foundation of major keys.",
      es: "T–T–S–T–T–T–S. Base de tonalidades mayores."
    },
    definition: {
      pt: "A <b>escala maior</b> é formada por 7 notas (mais a oitava) com o padrão <b>T–T–S–T–T–T–S</b> (T=tom, S=semitom). Ela define a sonoridade maior e organiza graus e funções harmônicas dentro de uma tonalidade.",
      en: "The <b>major scale</b> is a 7-note collection (plus octave) built by <b>W–W–H–W–W–W–H</b>. It defines the major sound and organizes scale degrees and harmonic functions in a key.",
      es: "La <b>escala mayor</b> tiene 7 notas (más octava) con patrón <b>T–T–S–T–T–T–S</b>. Define el sonido mayor y organiza grados y funciones armónicas en una tonalidad."
    },
    bullets: {
      pt: [
        "Define o campo harmônico diatônico (I, ii, iii, IV, V, vi, vii°).",
        "Base para melodias e progressões tonais.",
        "Relativa menor compartilha a mesma armadura."
      ],
      en: [
        "Defines diatonic harmony (I, ii, iii, IV, V, vi, vii°).",
        "Foundation for tonal melodies and progressions.",
        "Relative minor shares the same key signature."
      ],
      es: [
        "Define la armonía diatónica (I, ii, iii, IV, V, vi, vii°).",
        "Base para melodías y progresiones tonales.",
        "La relativa menor comparte armadura."
      ]
    },
    examples: {
      pt: "Ex.: <b>Dó maior</b> = Dó–Ré–Mi–Fá–Sol–Lá–Si–(Dó).",
      en: "Example: <b>C major</b> = C–D–E–F–G–A–B–(C).",
      es: "Ej.: <b>Do mayor</b> = Do–Re–Mi–Fa–Sol–La–Si–(Do)."
    },
    aliases: ["escala maior", "major scale", "escala mayor", "WWHWWWH", "TTSTTTS", "diatônica", "diatonica"],
    seeAlso: ["natural-minor", "modes", "diatonic-triads", "key-signature"],
    imageUrl: ""
  },

  {
    id: "natural-minor",
    category: "scales",
    title: { pt: "Escala Menor Natural", en: "Natural Minor Scale", es: "Escala Menor Natural" },
    short: {
      pt: "Modo eólio: T–S–T–T–S–T–T. Menor sem alterações.",
      en: "Aeolian: W–H–W–W–H–W–W. Minor without alterations.",
      es: "Eólico: T–S–T–T–S–T–T. Menor sin alteraciones."
    },
    definition: {
      pt: "A <b>menor natural</b> (modo eólio) é a forma básica do modo menor. Sua sonoridade é mais introspectiva porque os graus 3, 6 e 7 são menores em relação à escala maior.",
      en: "The <b>natural minor</b> (Aeolian) is the basic minor form. It sounds darker because scale degrees 3, 6 and 7 are lowered compared to major.",
      es: "La <b>menor natural</b> (eólico) es la forma básica del modo menor. Suena más oscura porque los grados 3, 6 y 7 son menores frente a mayor."
    },
    bullets: {
      pt: ["Relativa maior compartilha as mesmas notas.", "Muito usada em pop/rock e trilhas.", "Base para menor harmônica e melódica."],
      en: ["Relative major shares the same notes.", "Widely used in pop/rock and film music.", "Basis for harmonic and melodic minor."],
      es: ["La relativa mayor comparte notas.", "Muy usada en pop/rock y bandas sonoras.", "Base de menor armónica y melódica."]
    },
    examples: {
      pt: "Ex.: <b>Lá menor</b> = Lá–Si–Dó–Ré–Mi–Fá–Sol–(Lá).",
      en: "Example: <b>A minor</b> = A–B–C–D–E–F–G–(A).",
      es: "Ej.: <b>La menor</b> = La–Si–Do–Re–Mi–Fa–Sol–(La)."
    },
    aliases: ["menor natural", "natural minor", "aeolian", "eólio", "eolico"],
    seeAlso: ["major-scale", "modes"],
    imageUrl: ""
  },

  {
    id: "modes",
    category: "scales",
    title: { pt: "Modos Gregos", en: "Greek Modes", es: "Modos Griegos" },
    short: {
      pt: "Mesmas notas, centro tonal diferente: Jônio, Dório, Frígio etc.",
      en: "Same notes, different center: Ionian, Dorian, Phrygian etc.",
      es: "Mismas notas, centro tonal distinto: Jónico, Dórico, Frigio etc."
    },
    definition: {
      pt: "<b>Modos</b> são ‘perspectivas’ de uma escala: você mantém o conjunto de notas, mas muda o <b>centro tonal</b> (nota de repouso). Isso altera o caráter sem trocar as notas.",
      en: "<b>Modes</b> are ‘views’ of a scale: you keep the note set but change the <b>tonal center</b> (home note). This changes the color without changing notes.",
      es: "Los <b>modos</b> son ‘vistas’ de una escala: mantienes las notas pero cambias el <b>centro tonal</b>. Cambia el color sin cambiar notas."
    },
    bullets: {
      pt: ["Jônio = maior; Eólio = menor natural.", "Dórico (6º maior), Mixolídio (7º menor).", "Muito usados em jazz, rock e trilhas."],
      en: ["Ionian = major; Aeolian = natural minor.", "Dorian (natural 6), Mixolydian (flat 7).", "Common in jazz, rock and film scoring."],
      es: ["Jónico = mayor; Eólico = menor natural.", "Dórico (6 natural), Mixolidio (7 bemol).", "Comunes en jazz, rock y bandas sonoras."]
    },
    examples: {
      pt: "Ex.: Em Dó maior, <b>Ré dórico</b> usa as mesmas notas, mas com centro em Ré.",
      en: "Example: In C major, <b>D Dorian</b> uses the same notes but centers on D.",
      es: "Ej.: En Do mayor, <b>Re dórico</b> usa las mismas notas, pero centra en Re."
    },
    aliases: ["modos", "modes", "ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian", "modos gregos"],
    seeAlso: ["major-scale", "natural-minor"],
    imageUrl: ""
  },

  {
    id: "perfect-fifth",
    category: "intervals",
    title: { pt: "Quinta Justa", en: "Perfect Fifth", es: "Quinta Justa" },
    short: {
      pt: "Intervalo consonante e estável. Base de acordes e do círculo de quintas.",
      en: "Consonant stable interval. Core of chords and the circle of fifths.",
      es: "Intervalo consonante estable. Base de acordes y círculo de quintas."
    },
    definition: {
      pt: "A <b>quinta justa</b> é o intervalo entre uma nota e seu 5º grau (ex.: Dó→Sol). É um dos intervalos mais consonantes e aparece em tríades, power chords e na organização tonal.",
      en: "A <b>perfect fifth</b> spans a note to its 5th degree (e.g., C→G). It’s highly consonant and appears in triads, power chords and tonal organization.",
      es: "La <b>quinta justa</b> va de una nota a su 5º grado (p. ej., Do→Sol). Es muy consonante y aparece en tríadas, power chords y organización tonal."
    },
    bullets: {
      pt: ["Consonância forte (estabilidade).", "Presente em tríades maior/menor.", "Fundamental no círculo de quintas."],
      en: ["Strong consonance (stability).", "Present in major/minor triads.", "Fundamental in the circle of fifths."],
      es: ["Consonancia fuerte (estabilidad).", "Presente en tríadas mayor/menor.", "Fundamental en el círculo de quintas."]
    },
    examples: {
      pt: "Ex.: Dó→Sol, Ré→Lá, Mi→Si.",
      en: "Examples: C→G, D→A, E→B.",
      es: "Ej.: Do→Sol, Re→La, Mi→Si."
    },
    aliases: ["quinta justa", "perfect fifth", "P5", "5J"],
    seeAlso: ["circle-of-fifths", "triad"],
    imageUrl: ""
  },

  {
    id: "syncopation",
    category: "rhythm",
    title: { pt: "Síncope", en: "Syncopation", es: "Síncopa" },
    short: {
      pt: "Acento em partes fracas/contratempos. Groove e tensão rítmica.",
      en: "Accents on weak beats/offbeats. Groove and rhythmic tension.",
      es: "Acentos en partes débiles/contratiempos. Groove y tensión rítmica."
    },
    definition: {
      pt: "A <b>síncope</b> ocorre quando o acento aparece em um lugar ‘inesperado’ (contratempo/subdivisão fraca). Pode ser criada por antecipações, atrasos, ligaduras e pausas estratégicas.",
      en: "<b>Syncopation</b> occurs when accents land in less expected places (offbeats/weak subdivisions). It can be created by anticipations, delays, ties and strategic rests.",
      es: "La <b>síncopa</b> ocurre cuando el acento cae en un lugar ‘inesperado’ (contratiempo/subdivisión débil). Se crea con anticipaciones, retrasos, ligaduras y silencios."
    },
    bullets: {
      pt: ["Comum em samba, funk, jazz e pop.", "Cria swing e movimento.", "Depende de subdivisão clara para soar precisa."],
      en: ["Common in samba, funk, jazz and pop.", "Creates swing and motion.", "Requires clear subdivision to feel tight."],
      es: ["Común en samba, funk, jazz y pop.", "Crea swing y movimiento.", "Requiere subdivisión clara para precisión."]
    },
    examples: {
      pt: "Ex.: acentuar o ‘e’ em “1 <b>e</b> & a” ou ligar do tempo fraco para o forte.",
      en: "Example: accent the ‘e’ in “1 <b>e</b> & a”, or tie a weak beat into a strong beat.",
      es: "Ej.: acentuar la ‘e’ en “1 <b>e</b> & a”, o ligar un tiempo débil hacia uno fuerte."
    },
    aliases: ["síncope", "syncopation", "síncopa", "contratempo", "offbeat", "contratiempo"],
    seeAlso: ["meter", "subdivision"],
    imageUrl: ""
  },

  {
    id: "key-signature",
    category: "notation",
    title: { pt: "Armadura de Clave", en: "Key Signature", es: "Armadura" },
    short: {
      pt: "Sustenidos/bemóis fixos no início da pauta. Sugere tonalidade.",
      en: "Fixed sharps/flats at the staff start. Suggests the key.",
      es: "Sostenidos/bemoles fijos al inicio. Sugiere tonalidad."
    },
    definition: {
      pt: "A <b>armadura de clave</b> aparece após a clave e indica quais notas serão alteradas ao longo do trecho. Ela reduz acidentes repetidos e aponta a tonalidade (maior ou relativa menor).",
      en: "A <b>key signature</b> appears after the clef and indicates which notes are sharpened/flattened throughout. It reduces repeated accidentals and suggests the key (major or relative minor).",
      es: "La <b>armadura</b> aparece tras la clave e indica qué notas estarán sostenidas/bemoles. Evita alteraciones repetidas y sugiere tonalidad (mayor o relativa menor)."
    },
    bullets: {
      pt: ["Ordem fixa de sustenidos e bemóis.", "Maior e relativa menor compartilham armadura.", "Ajuda leitura e análise tonal."],
      en: ["Sharps/flats follow fixed orders.", "Major and relative minor share the signature.", "Helps reading and tonal analysis."],
      es: ["Orden fijo de sostenidos y bemoles.", "Mayor y relativa menor comparten armadura.", "Ayuda lectura y análisis tonal."]
    },
    examples: {
      pt: "Ex.: 1 sustenido (Fá#) sugere Sol maior ou Mi menor.",
      en: "Example: 1 sharp (F#) suggests G major or E minor.",
      es: "Ej.: 1 sostenido (Fa#) sugiere Sol mayor o Mi menor."
    },
    aliases: ["armadura", "armadura de clave", "key signature", "sustenidos", "bemóis", "bemoles"],
    seeAlso: ["circle-of-fifths", "major-scale"],
    imageUrl: ""
  },

  {
    id: "diatonic-triads",
    category: "harmony",
    title: { pt: "Tríades Diatônicas", en: "Diatonic Triads", es: "Tríadas Diatónicas" },
    short: {
      pt: "Acordes de 3 notas em cada grau da escala (I, ii, iii...).",
      en: "Three-note chords built on each scale degree (I, ii, iii...).",
      es: "Acordes de 3 notas por grado de la escala (I, ii, iii...)."
    },
    definition: {
      pt: "As <b>tríades diatônicas</b> são formadas empilhando terças sobre cada grau da escala. Em Dó maior: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° B°.",
      en: "<b>Diatonic triads</b> are formed by stacking thirds on each scale degree. In C major: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° B°.",
      es: "Las <b>tríadas diatónicas</b> se forman apilando terceras sobre cada grado. En Do mayor: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° B°."
    },
    bullets: {
      pt: ["Base da harmonia funcional tonal.", "Qualidade do acorde depende da escala.", "Conecta melodia e harmonia."],
      en: ["Foundation of functional tonal harmony.", "Chord quality depends on the key’s notes.", "Connects melody and harmony."],
      es: ["Base de la armonía funcional tonal.", "La cualidad depende de la escala.", "Conecta melodía y armonía."]
    },
    examples: {
      pt: "Ex.: em Sol maior, o Fá# altera as tríades em relação a Dó maior.",
      en: "Example: in G major, F# changes the triads compared to C major.",
      es: "Ej.: en Sol mayor, Fa# cambia las tríadas frente a Do mayor."
    },
    aliases: ["campo harmônico", "campo harmonico", "diatonic triads", "tríades diatônicas", "tríadas diatónicas"],
    seeAlso: ["major-scale", "triad"],
    imageUrl: ""
  },

  {
    id: "circle-of-fifths",
    category: "harmony",
    title: { pt: "Círculo de Quintas", en: "Circle of Fifths", es: "Círculo de Quintas" },
    short: {
      pt: "Mapa de tonalidades por quintas. Armaduras, modulações e progressões.",
      en: "Key map by fifths. Signatures, modulations and progressions.",
      es: "Mapa de tonalidades por quintas. Armaduras, modulaciones y progresiones."
    },
    definition: {
      pt: "O <b>círculo de quintas</b> organiza as tonalidades avançando por quintas justas. Sentido horário adiciona sustenidos; anti-horário adiciona bemóis. Ele mostra relações próximas e ajuda em cadências e modulações.",
      en: "The <b>circle of fifths</b> organizes keys by perfect fifths. Clockwise adds sharps; counterclockwise adds flats. It shows close relationships and helps with cadences and modulation.",
      es: "El <b>círculo de quintas</b> organiza tonalidades por quintas justas. Horario añade sostenidos; antihorario añade bemoles. Muestra relaciones cercanas y ayuda con cadencias y modulación."
    },
    bullets: {
      pt: ["Excelente para memorizar armaduras.", "Ajuda progressões comuns (ii–V–I).", "Mostra tonalidades vizinhas rapidamente."],
      en: ["Great for memorizing key signatures.", "Helps common progressions (ii–V–I).", "Shows neighboring keys quickly."],
      es: ["Excelente para memorizar armaduras.", "Ayuda progresiones comunes (ii–V–I).", "Muestra tonalidades vecinas rápido."]
    },
    examples: {
      pt: "Ex.: C → G → D → A → E (cada passo adiciona 1 sustenido).",
      en: "Example: C → G → D → A → E (each step adds one sharp).",
      es: "Ej.: C → G → D → A → E (cada paso añade 1 sostenido)."
    },
    aliases: ["círculo de quintas", "circle of fifths", "armaduras", "key signatures"],
    seeAlso: ["key-signature", "perfect-fifth"],
    imageUrl: ""
  },

  {
    id: "music-periods",
    category: "history",
    title: { pt: "Períodos Musicais", en: "Musical Periods", es: "Períodos Musicales" },
    short: {
      pt: "Eras: Medieval, Renascimento, Barroco, Clássico, Romântico, Contemporâneo.",
      en: "Eras: Medieval, Renaissance, Baroque, Classical, Romantic, Contemporary.",
      es: "Eras: Medieval, Renacimiento, Barroco, Clásico, Romántico, Contemporáneo."
    },
    definition: {
      pt: "Os <b>períodos musicais</b> organizam a evolução de estilos, instrumentos e linguagem harmônica. Cada era traz formas e práticas distintas (contraponto, tonalidade, cromatismo, modernismo etc.).",
      en: "<b>Musical periods</b> organize the evolution of styles, instruments and harmonic language. Each era brings distinct forms and practices (counterpoint, tonality, chromaticism, modernism, etc.).",
      es: "Los <b>períodos musicales</b> organizan la evolución de estilos, instrumentos y lenguaje armónico. Cada era aporta formas y prácticas distintas (contrapunto, tonalidad, cromatismo, modernismo, etc.)."
    },
    bullets: {
      pt: ["Barroco: contraponto e consolidação tonal.", "Clássico: clareza formal e equilíbrio.", "Romântico: cromatismo e expansão expressiva."],
      en: ["Baroque: counterpoint and tonal consolidation.", "Classical: formal clarity and balance.", "Romantic: chromaticism and expressive expansion."],
      es: ["Barroco: contrapunto y consolidación tonal.", "Clásico: claridad formal y equilibrio.", "Romántico: cromatismo y expansión expresiva."]
    },
    examples: {
      pt: "Ex.: fuga barroca (contraponto), sinfonia clássica (forma), obra romântica (modulações distantes).",
      en: "Example: Baroque fugue (counterpoint), Classical symphony (form), Romantic work (distant modulation).",
      es: "Ej.: fuga barroca (contrapunto), sinfonía clásica (forma), obra romántica (modulaciones lejanas)."
    },
    aliases: ["períodos musicais", "musical periods", "barroco", "clássico", "romântico", "romantico"],
    seeAlso: ["circle-of-fifths"],
    imageUrl: ""
  },

  /* Termos ponte (para a busca ficar forte) */
  {
    id: "meter",
    category: "rhythm",
    title: { pt: "Compasso (Métrica)", en: "Meter (Time Signature)", es: "Compás (Métrica)" },
    short: { pt: "Organiza o pulso: 4/4, 3/4, 6/8…", en: "Groups beats: 4/4, 3/4, 6/8…", es: "Agrupa pulsos: 4/4, 3/4, 6/8…" },
    definition: {
      pt: "O <b>compasso</b> indica como o tempo é agrupado e acentuado. A fórmula (ex.: 4/4) mostra quantas unidades cabem no compasso e qual figura vale 1 tempo.",
      en: "<b>Meter</b> indicates how time is grouped and accented. The time signature (e.g., 4/4) shows how many beat-units are in a measure and what note value equals one beat.",
      es: "El <b>compás</b> indica cómo se agrupa y acentúa el tiempo. La fórmula (p. ej., 4/4) muestra cuántas unidades hay y qué figura vale un pulso."
    },
    bullets: {
      pt: ["Simples (2/4, 3/4, 4/4) e compostos (6/8, 9/8).", "Define sensação rítmica e acentos.", "Base para leitura e execução precisa."],
      en: ["Simple (2/4, 3/4, 4/4) and compound (6/8, 9/8).", "Defines feel and accents.", "Foundation for accurate reading and performance."],
      es: ["Simples (2/4, 3/4, 4/4) y compuestos (6/8, 9/8).", "Define sensación y acentos.", "Base para lectura y ejecución precisa."]
    },
    examples: {
      pt: "Ex.: 6/8 costuma soar em dois pulsos principais, com subdivisão ternária.",
      en: "Example: 6/8 often feels like two big beats with triple subdivision.",
      es: "Ej.: 6/8 suele sentirse como dos pulsos grandes con subdivisión ternaria."
    },
    aliases: ["compasso", "métrica", "meter", "time signature", "compás", "metrica"],
    seeAlso: ["syncopation", "subdivision"],
    imageUrl: ""
  },

  {
    id: "subdivision",
    category: "rhythm",
    title: { pt: "Subdivisão", en: "Subdivision", es: "Subdivisión" },
    short: { pt: "Divide o pulso: binário, ternário (tercinas) etc.", en: "Splits the beat: duple, triple (triplets) etc.", es: "Divide el pulso: binario, ternario (tresillos) etc." },
    definition: {
      pt: "A <b>subdivisão</b> é como você particiona cada tempo. Em 4/4, você pode subdividir em colcheias (2 partes) ou tercinas (3 partes), etc.",
      en: "<b>Subdivision</b> is how you partition each beat. In 4/4 you can subdivide into eighth notes (2 parts) or triplets (3 parts), etc.",
      es: "La <b>subdivisión</b> es cómo particionas cada pulso. En 4/4 puedes subdividir en corcheas (2) o tresillos (3), etc."
    },
    bullets: {
      pt: ["Base para precisão e groove.", "Define ‘straight’ vs ‘swing’.", "Ajuda contagem com metrônomo."],
      en: ["Foundation for precision and groove.", "Defines straight vs swing feel.", "Helps counting with a metronome."],
      es: ["Base para precisión y groove.", "Define recto vs swing.", "Ayuda a contar con metrónomo."]
    },
    examples: {
      pt: "Ex.: contar ‘1 e & a’ (semicolcheias) ou ‘1-trip-let’ (tercinas).",
      en: "Example: count ‘1 e & a’ (sixteenths) or ‘1-trip-let’ (triplets).",
      es: "Ej.: contar ‘1 e & a’ (semicorcheas) o ‘1-trip-let’ (tresillos)."
    },
    aliases: ["subdivisão", "subdivision", "subdivisión", "tercina", "triplet", "tresillo", "swing"],
    seeAlso: ["meter", "syncopation"],
    imageUrl: ""
  },

  {
    id: "triad",
    category: "harmony",
    title: { pt: "Tríade", en: "Triad", es: "Tríada" },
    short: { pt: "Acorde de 3 notas: tônica, terça e quinta.", en: "Three-note chord: root, third, fifth.", es: "Acorde de 3 notas: tónica, tercera, quinta." },
    definition: {
      pt: "Uma <b>tríade</b> é construída empilhando duas terças acima da nota fundamental. Pode ser maior, menor, diminuta ou aumentada, dependendo da qualidade dos intervalos.",
      en: "A <b>triad</b> is built by stacking two thirds above a root. It can be major, minor, diminished or augmented depending on interval quality.",
      es: "Una <b>tríada</b> se construye apilando dos terceras sobre la raíz. Puede ser mayor, menor, disminuida o aumentada según los intervalos."
    },
    bullets: {
      pt: ["Maior: 3ª maior + 5ª justa.", "Menor: 3ª menor + 5ª justa.", "Diminuta/Aumentada alteram a 5ª."],
      en: ["Major: major 3rd + perfect 5th.", "Minor: minor 3rd + perfect 5th.", "Diminished/Augmented alter the 5th."],
      es: ["Mayor: 3ª mayor + 5ª justa.", "Menor: 3ª menor + 5ª justa.", "Disminuida/Aumentada modifican la 5ª."]
    },
    examples: {
      pt: "Ex.: C = C–E–G; Am = A–C–E.",
      en: "Example: C = C–E–G; Am = A–C–E.",
      es: "Ej.: Do = Do–Mi–Sol; Lam = La–Do–Mi."
    },
    aliases: ["tríade", "triad", "tríada", "acorde", "chord", "triade"],
    seeAlso: ["diatonic-triads", "perfect-fifth"],
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
let filteredOrder = [];
let modalIndex = -1;
let lastOpenId = null;

/* ==========
   DOM HELPERS
   ==========
*/
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

function normalize(str) {
  return (str || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
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

function entryById(id) {
  return ENTRIES.find((e) => e.id === id) || null;
}

function setYear() {
  const y = new Date().getFullYear();
  const a = $("#year"), b = $("#year2"), c = $("#year3");
  if (a) a.textContent = y;
  if (b) b.textContent = y;
  if (c) c.textContent = y;
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

/* ==========
   LANGUAGE
   ==========
*/
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

/* ==========
   CATEGORY FILTER
   ==========
*/
function setCategory(cat) {
  currentCategoryFilter = cat;
  $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.category === cat));
  renderAll();
}

/* ==========
   CARD
   ==========
*/
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

  const h = document.createElement("h3");
  h.className = "card__title";
  h.textContent = langText(entry.title);

  const p = document.createElement("p");
  p.className = "card__desc";
  p.textContent = langText(entry.short);

  body.appendChild(h);
  body.appendChild(p);

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

/* ==========
   ROWS (carrosséis)
   ==========
*/
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
    prev.setAttribute("aria-label", "Voltar");

    const next = document.createElement("button");
    next.className = "iconbtn";
    next.type = "button";
    next.textContent = "›";
    next.setAttribute("aria-label", "Avançar");

    controls.appendChild(prev);
    controls.appendChild(next);

    head.appendChild(left);
    head.appendChild(controls);

    const scroller = document.createElement("div");
    scroller.className = "scroller";

    const list = getEntriesByCategory(cat);
    list.forEach((e) => scroller.appendChild(makeCard(e)));

    const step = () => Math.max(260, scroller.clientWidth * 0.85);
    prev.addEventListener("click", () => scroller.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => scroller.scrollBy({ left: step(), behavior: "smooth" }));

    section.appendChild(head);
    section.appendChild(scroller);
    rows.appendChild(section);
  });
}

/* ==========
   SEARCH
   ==========
*/
function searchResults() {
  const q = normalize(searchQuery);
  if (!q) return [];

  const hits = ENTRIES
    .map((e) => ({ e, blob: buildSearchBlob(e) }))
    .filter((x) => x.blob.includes(q))
    .map((x) => x.e);

  // Ranking simples: título e aliases ganham peso
  hits.sort((a, b) => {
    const at = normalize(langText(a.title));
    const bt = normalize(langText(b.title));
    const aAlias = (a.aliases || []).some((al) => normalize(al).includes(q));
    const bAlias = (b.aliases || []).some((al) => normalize(al).includes(q));
    const aScore = (at.includes(q) ? 3 : 0) + (aAlias ? 2 : 0);
    const bScore = (bt.includes(q) ? 3 : 0) + (bAlias ? 2 : 0);
    return bScore - aScore;
  });

  const filtered = (currentCategoryFilter === "all")
    ? hits
    : hits.filter((e) => e.category === currentCategoryFilter);

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

/* ==========
   MODAL
   ==========
*/
function openModal(id, orderIds) {
  const modal = $("#modal");
  if (!modal) return;

  filteredOrder = (orderIds && orderIds.length) ? orderIds : ENTRIES.map((e) => e.id);
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

  // imagem opcional
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
    if (!target) return; // ignora se não existir
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
  const id = pool[Math.floor(Math.random() * pool.length)];
  openModal(id, pool);
}

/* ==========
   RENDER ALL
   ==========
*/
function renderAll() {
  renderRows();
  renderSearch();

  const modal = $("#modal");
  if (modal && !modal.classList.contains("hidden") && lastOpenId) {
    openModal(lastOpenId, getCurrentOrder());
  }
}

/* ==========
   INIT
   ==========
*/
function init() {
  setYear();

  // idioma
  $$(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // chips (categorias)
  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => setCategory(chip.dataset.category));
  });

  // busca
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

  // modal events
  const modal = $("#modal");
  if (modal) {
    modal.addEventListener("click", (ev) => {
      const t = ev.target;
      if (t && t.dataset && t.dataset.close === "1") closeModal();
    });
  }

  const closeBtn = $("#modalClose");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  const prevBtn = $("#modalPrev");
  const nextBtn = $("#modalNext");
  const rndBtn = $("#modalRandom");
  if (prevBtn) prevBtn.addEventListener("click", () => modalGo(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => modalGo(1));
  if (rndBtn) rndBtn.addEventListener("click", modalRandom);

  document.addEventListener("keydown", (ev) => {
    const modal = $("#modal");
    const opened = modal && !modal.classList.contains("hidden");
    if (!opened) return;

    if (ev.key === "Escape") closeModal();
    if (ev.key === "ArrowLeft") modalGo(-1);
    if (ev.key === "ArrowRight") modalGo(1);
  });

  // start
  setLang("pt");
  setCategory("all");
  renderAll();
}

init();