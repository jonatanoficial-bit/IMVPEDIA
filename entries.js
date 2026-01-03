/* IMVpedia — Dicionário (PT/EN/ES) — ETAPA 4
   ✅ Substitua SEU entries.js inteiro por este arquivo.
   ✅ Agora entra: Campo harmônico menor, modos detalhados, escalas simétricas,
      ritmo avançado (polimetria), leitura (compasso composto x simples, barras),
      contraponto/forma básica, ouvido/percepção, e seção de prática.
*/

window.IMVPEDIA_ENTRIES = [
  /* =========================
     LEITURA / NOTAÇÃO — EXPANSÃO
     ========================= */
  {
    id: "barline-measures",
    category: "notation",
    title: { pt: "Barras de Compasso", en: "Barlines & Measures", es: "Barras de Compás" },
    short: {
      pt: "As barras dividem a música em compassos para organizar leitura e acentos.",
      en: "Barlines divide music into measures for organization and accents.",
      es: "Las barras dividen la música en compases para organizar lectura y acentos."
    },
    definition: {
      pt: "As <b>barras de compasso</b> separam a partitura em <b>compassos</b>. Elas ajudam a localizar eventos, organizar a métrica e facilitar ensaio. Há barras simples, barras duplas (mudança de seção/armadura) e barra final.",
      en: "<b>Barlines</b> separate the score into <b>measures</b>. They help locate events, organize meter, and aid rehearsal. Types include single, double (section/key changes), and final barlines.",
      es: "Las <b>barras</b> separan la partitura en <b>compases</b>. Ayudan a ubicar eventos y organizar la métrica. Hay barras simples, dobles y final."
    },
    bullets: {
      pt: ["Barra dupla pode indicar mudança de seção/armadura.", "Barra final encerra a peça.", "Numeração de compassos ajuda estudo."],
      en: ["Double barlines can indicate section/key changes.", "Final barline ends the piece.", "Measure numbers help practice."],
      es: ["Barras dobles pueden indicar cambios.", "Barra final termina la obra.", "Numeración ayuda el estudio."]
    },
    examples: {
      pt: "Em partituras, ensaios usam ‘compasso 37’ para referência rápida.",
      en: "Rehearsals often reference ‘measure 37’ for quick navigation.",
      es: "En ensayos se usa ‘compás 37’ para ubicarse rápido."
    },
    aliases: ["barra de compasso", "barline", "measure", "compasso", "compás", "barra dupla"],
    seeAlso: ["meter", "note-values"],
    imageUrl: ""
  },
  {
    id: "simple-vs-compound",
    category: "rhythm",
    title: { pt: "Compasso Simples vs Composto", en: "Simple vs Compound Meter", es: "Compás Simple vs Compuesto" },
    short: {
      pt: "Simples: subdivisão binária; Composto: subdivisão ternária (ex.: 6/8).",
      en: "Simple: duple subdivision; Compound: triple subdivision (e.g., 6/8).",
      es: "Simple: subdivisión binaria; Compuesto: ternaria (ej.: 6/8)."
    },
    definition: {
      pt: "No <b>compasso simples</b>, cada tempo se divide em <b>2</b>. No <b>composto</b>, cada tempo se divide em <b>3</b>. Ex.: 6/8 costuma ser sentido como <b>2 tempos</b> (2 grupos de 3 colcheias).",
      en: "In <b>simple meter</b>, each beat divides into <b>2</b>. In <b>compound</b>, each beat divides into <b>3</b>. Example: 6/8 often feels like <b>2 beats</b> (two groups of three eighths).",
      es: "En <b>simple</b>, cada pulso se divide en <b>2</b>. En <b>compuesto</b>, se divide en <b>3</b>. Ej.: 6/8 suele sentirse como <b>2 pulsos</b>."
    },
    bullets: {
      pt: ["3/4 é simples (cada tempo divide em 2).", "6/8 é composto (cada grande tempo divide em 3).", "Acentos mudam o ‘feel’ mesmo com mesma fórmula."],
      en: ["3/4 is simple (beats divide by 2).", "6/8 is compound (big beats divide by 3).", "Accents change feel even with same signature."],
      es: ["3/4 es simple.", "6/8 es compuesto.", "Acentos cambian el feel."]
    },
    examples: {
      pt: "6/8: ‘1-la-li 2-la-li’ (dois tempos grandes).",
      en: "6/8: ‘1-la-li 2-la-li’ (two big beats).",
      es: "6/8: ‘1-la-li 2-la-li’ (dos pulsos grandes)."
    },
    aliases: ["compasso composto", "compound meter", "compás compuesto", "simples", "simple meter", "6/8"],
    seeAlso: ["meter", "subdivision"],
    imageUrl: ""
  },
  {
    id: "beaming-grouping",
    category: "notation",
    title: { pt: "Agrupamento de Colcheias (Barras)", en: "Beaming & Grouping", es: "Agrupación de Barras" },
    short: {
      pt: "Os feixes mostram a métrica: agrupam subdivisões para leitura clara.",
      en: "Beams show meter by grouping subdivisions for clarity.",
      es: "Las barras agrupan subdivisiones según la métrica."
    },
    definition: {
      pt: "O <b>beaming</b> (feixes) agrupa colcheias/semicolcheias para refletir a métrica. Em 4/4, é comum agrupar em 2+2 colcheias por tempo; em 6/8, em 3+3 (cada tempo grande).",
      en: "<b>Beaming</b> groups eighths/sixteenths to reflect meter. In 4/4, beams often group by beats; in 6/8, by 3+3 (each big beat).",
      es: "El <b>beaming</b> agrupa corcheas/semicorcheas según el compás. En 4/4 suele agrupar por pulsos; en 6/8, 3+3."
    },
    bullets: {
      pt: ["Agrupamento errado confunde acentuação.", "Em compassos ímpares (7/8), agrupa-se 2+2+3 etc.", "Partituras profissionais respeitam o ‘feel’ do compasso."],
      en: ["Wrong grouping confuses accents.", "In odd meters (7/8), group 2+2+3, etc.", "Pro notation reflects the meter’s feel."],
      es: ["Agrupación errónea confunde acentos.", "En 7/8 se agrupa 2+2+3, etc.", "Notación profesional refleja el feel."]
    },
    examples: {
      pt: "7/8 pode ser sentido como 2+2+3 (curto-curto-longo).",
      en: "7/8 can feel like 2+2+3 (short-short-long).",
      es: "7/8 puede sentirse 2+2+3 (corto-corto-largo)."
    },
    aliases: ["beaming", "feixes", "barras", "grouping", "agrupamento", "7/8"],
    seeAlso: ["meter", "simple-vs-compound"],
    imageUrl: ""
  },

  /* =========================
     RITMO AVANÇADO
     ========================= */
  {
    id: "polymeter",
    category: "rhythm",
    title: { pt: "Polimetria", en: "Polymeter", es: "Polimetría" },
    short: {
      pt: "Diferentes compassos ao mesmo tempo (ex.: bateria em 4/4 e guitarra em 3/4).",
      en: "Different meters simultaneously (e.g., drums in 4/4 and guitar in 3/4).",
      es: "Diferentes compases simultáneos (batería 4/4 y guitarra 3/4)."
    },
    definition: {
      pt: "<b>Polimetria</b> ocorre quando camadas musicais mantêm <b>métricas diferentes</b>. Ao contrário da polirritmia (subdivisões), aqui os <b>agrupamentos de compassos</b> divergem. O alinhamento volta após um ciclo comum (MMC de compassos).",
      en: "<b>Polymeter</b> happens when musical layers keep <b>different meters</b>. Unlike polyrhythm (subdivision), here the <b>measure groupings</b> differ. Alignment returns after a common cycle (LCM of bar lengths).",
      es: "La <b>polimetría</b> ocurre cuando capas mantienen <b>métricas diferentes</b>. A diferencia de polirritmia, aquí divergen los <b>agrupamientos de compases</b>. Se alinean tras un ciclo común."
    },
    bullets: {
      pt: ["Pode soar ‘deslocado’ mas coerente.", "Comum em prog rock, música contemporânea.", "Treine contando cada camada separadamente."],
      en: ["Can feel displaced yet coherent.", "Common in prog rock and contemporary music.", "Practice by counting each layer separately."],
      es: ["Puede sonar desplazado pero coherente.", "Común en prog rock y contemporánea.", "Practica contando cada capa por separado."]
    },
    examples: {
      pt: "4/4 contra 3/4: realinha a cada 12 tempos (3 compassos de 4/4 = 4 de 3/4).",
      en: "4/4 vs 3/4: realigns every 12 beats (3 bars of 4/4 = 4 bars of 3/4).",
      es: "4/4 vs 3/4: se alinea cada 12 pulsos (3 compases 4/4 = 4 compases 3/4)."
    },
    aliases: ["polimetria", "polymeter", "polimetría", "métrica diferente", "odd meter"],
    seeAlso: ["meter", "polyrhythm"],
    imageUrl: ""
  },
  {
    id: "metric-modulation",
    category: "rhythm",
    title: { pt: "Modulação Métrica", en: "Metric Modulation", es: "Modulación Métrica" },
    short: {
      pt: "Troca de unidade de pulso por equivalência de subdivisões.",
      en: "Changing beat unit by equating subdivisions.",
      es: "Cambio de unidad de pulso por equivalencia de subdivisiones."
    },
    definition: {
      pt: "<b>Modulação métrica</b> muda o andamento percebido ao redefinir qual subdivisão vira o novo pulso. Ex.: colcheia = semínima (a subdivisão vira o beat). Muito usada em música contemporânea e em arranjos modernos.",
      en: "<b>Metric modulation</b> changes perceived tempo by redefining which subdivision becomes the new beat. Example: eighth = quarter (subdivision becomes beat). Common in contemporary and modern arranging.",
      es: "La <b>modulación métrica</b> cambia el tempo percibido redefiniendo qué subdivisión se vuelve pulso. Ej.: corchea = negra. Usada en música contemporánea y arreglos."
    },
    bullets: {
      pt: ["Cria transições naturais de tempo.", "Exige subdivisão muito clara.", "Pode ser escrita com indicação de equivalência."],
      en: ["Creates natural tempo transitions.", "Requires very clear subdivision.", "Often written with an equivalence marking."],
      es: ["Crea transiciones naturales.", "Requiere subdivisión clara.", "Se escribe con equivalencias."]
    },
    examples: {
      pt: "Ex.: ‘♪ = ♩’ (colcheia vira o novo pulso).",
      en: "Example: ‘♪ = ♩’ (eighth becomes the new beat).",
      es: "Ej.: ‘♪ = ♩’ (corchea pasa a ser el pulso)."
    },
    aliases: ["modulação métrica", "metric modulation", "modulación métrica", "equivalência", "tempo change"],
    seeAlso: ["subdivision", "tempo"],
    imageUrl: ""
  },

  /* =========================
     MODOS — DETALHADOS (cada um com nota característica)
     ========================= */
  {
    id: "mode-ionian",
    category: "scales",
    title: { pt: "Modo Jônio", en: "Ionian Mode", es: "Modo Jónico" },
    short: { pt: "Equivale à escala maior. Centro estável e brilhante.", en: "Same as major scale. Stable, bright center.", es: "Equivale a mayor. Centro estable y brillante." },
    definition: {
      pt: "O <b>jônio</b> é o modo ‘maior’ (1–2–3–4–5–6–7). Em harmonia funcional, é o centro de tonalidades maiores. Nota característica: 7 maior (sensível) em direção à tônica.",
      en: "<b>Ionian</b> is the ‘major’ mode (1–2–3–4–5–6–7). In functional harmony it centers major keys. Character tone: major 7 leading to the tonic.",
      es: "El <b>jónico</b> es el modo ‘mayor’ (1–2–3–4–5–6–7). Centro de tonalidades mayores. Nota característica: 7 mayor (sensible)."
    },
    bullets: { pt: ["Som ‘maior’ clássico.", "Forte relação V→I.", "Muito usado em pop e música tonal."], en: ["Classic major sound.", "Strong V→I pull.", "Common in pop and tonal music."], es: ["Sonido mayor clásico.", "Fuerte V→I.", "Común en pop y música tonal."] },
    examples: { pt: "Em C: C–D–E–F–G–A–B.", en: "In C: C–D–E–F–G–A–B.", es: "En Do: Do–Re–Mi–Fa–Sol–La–Si." },
    aliases: ["jônio", "ionian", "jónico", "escala maior", "major mode"],
    seeAlso: ["major-scale", "dominant-function"],
    imageUrl: ""
  },
  {
    id: "mode-dorian",
    category: "scales",
    title: { pt: "Modo Dórico", en: "Dorian Mode", es: "Modo Dórico" },
    short: { pt: "Menor com 6 maior (1–2–b3–4–5–6–b7).", en: "Minor with natural 6 (1–2–b3–4–5–6–b7).", es: "Menor con 6 natural (1–2–b3–4–5–6–b7)." },
    definition: {
      pt: "O <b>dórico</b> é um modo menor ‘luminoso’ porque tem <b>6 maior</b>. Muito usado em funk, jazz modal e música folclórica. Nota característica: 6 maior contra o b3.",
      en: "<b>Dorian</b> is a ‘bright minor’ mode due to its <b>natural 6</b>. Common in funk, modal jazz, and folk. Character tone: natural 6 against b3.",
      es: "El <b>dórico</b> es un menor ‘luminoso’ por su <b>6 natural</b>. Común en funk y jazz modal. Nota característica: 6 natural contra b3."
    },
    bullets: { pt: ["Som de ‘menor com esperança’.", "Funciona bem sobre m7 (i m7).", "Vamps i–IV (menor) são comuns."], en: ["‘Hopeful minor’ vibe.", "Works well over m7.", "Common vamp: i–IV (minor)." ], es: ["Vibra de ‘menor luminoso’.", "Funciona sobre m7.", "Vamp común: i–IV (menor)."] },
    examples: { pt: "D dórico (em C maior): D–E–F–G–A–B–C.", en: "D Dorian (from C major): D–E–F–G–A–B–C.", es: "Re dórico (de Do mayor): Re–Mi–Fa–Sol–La–Si–Do." },
    aliases: ["dórico", "dorian", "dórico mode", "minor with natural 6", "modo dórico"],
    seeAlso: ["modes", "seventh-chords"],
    imageUrl: ""
  },
  {
    id: "mode-phrygian",
    category: "scales",
    title: { pt: "Modo Frígio", en: "Phrygian Mode", es: "Modo Frigio" },
    short: { pt: "Menor com 2 menor (1–b2–b3–4–5–b6–b7).", en: "Minor with b2 (1–b2–b3–4–5–b6–b7).", es: "Menor con b2 (1–b2–b3–4–5–b6–b7)." },
    definition: {
      pt: "O <b>frígio</b> tem cor ‘espanhola/árabe’ por causa do <b>b2</b>. Muito usado em metal, flamenco (variações), trilhas e música modal. Nota característica: b2 acima da tônica.",
      en: "<b>Phrygian</b> has a Spanish/Arabic flavor due to <b>b2</b>. Used in metal, film scoring, and modal music. Character tone: b2 above the tonic.",
      es: "El <b>frigio</b> tiene color ‘español/árabe’ por el <b>b2</b>. Usado en metal y cine. Nota característica: b2 sobre la tónica."
    },
    bullets: { pt: ["Tensão imediata no grau b2.", "Bom sobre acordes m7(b9) em contexto modal.", "Dá sensação de ‘gravidade’."], en: ["Immediate tension from b2.", "Works over modal m7(b9) contexts.", "Heavy gravity feel."], es: ["Tensión inmediata por b2.", "Funciona en contextos modales m7(b9).", "Sensación de gravedad."] },
    examples: { pt: "E frígio (de C maior): E–F–G–A–B–C–D.", en: "E Phrygian (from C major): E–F–G–A–B–C–D.", es: "Mi frigio (de Do mayor): Mi–Fa–Sol–La–Si–Do–Re." },
    aliases: ["frígio", "phrygian", "frigio", "b2", "spanish mode"],
    seeAlso: ["modes", "harmonic-minor"],
    imageUrl: ""
  },
  {
    id: "mode-lydian",
    category: "scales",
    title: { pt: "Modo Lídio", en: "Lydian Mode", es: "Modo Lidio" },
    short: { pt: "Maior com #4 (1–2–3–#4–5–6–7).", en: "Major with #4 (1–2–3–#4–5–6–7).", es: "Mayor con #4 (1–2–3–#4–5–6–7)." },
    definition: {
      pt: "O <b>lídio</b> soa ‘aéreo’ por causa do <b>#4</b> (trítono acima da tônica). Muito usado em trilhas e jazz (maj7#11). Nota característica: #4/#11.",
      en: "<b>Lydian</b> sounds airy due to <b>#4</b> (tritone above tonic). Common in film scoring and jazz (maj7#11). Character tone: #4/#11.",
      es: "El <b>lidio</b> suena ‘aéreo’ por su <b>#4</b>. Común en cine y jazz (maj7#11). Nota característica: #4/#11."
    },
    bullets: { pt: ["Evita o ‘peso’ do 4 natural.", "Combina com maj7#11.", "Sensação de suspensão/flutuação."], en: ["Avoids the pull of natural 4.", "Pairs with maj7#11.", "Floating suspension feel."], es: ["Evita el peso del 4 natural.", "Encaja con maj7#11.", "Sensación flotante."] },
    examples: { pt: "F lídio (de C maior): F–G–A–B–C–D–E.", en: "F Lydian (from C major): F–G–A–B–C–D–E.", es: "Fa lidio (de Do mayor): Fa–Sol–La–Si–Do–Re–Mi." },
    aliases: ["lídio", "lydian", "lidio", "#4", "#11"],
    seeAlso: ["modes", "extensions"],
    imageUrl: ""
  },
  {
    id: "mode-mixolydian",
    category: "scales",
    title: { pt: "Modo Mixolídio", en: "Mixolydian Mode", es: "Modo Mixolidio" },
    short: { pt: "Maior com b7 (1–2–3–4–5–6–b7).", en: "Major with b7 (1–2–3–4–5–6–b7).", es: "Mayor con b7 (1–2–3–4–5–6–b7)." },
    definition: {
      pt: "O <b>mixolídio</b> é ‘maior’ mas com 7 menor, criando um som muito usado em rock, blues e folk. Nota característica: b7, que reduz a sensação de sensível.",
      en: "<b>Mixolydian</b> is major but with a flat 7, heavily used in rock, blues, and folk. Character tone: b7, reducing leading-tone pull.",
      es: "El <b>mixolidio</b> es mayor con 7 bemol. Usado en rock/blues/folk. Nota característica: b7."
    },
    bullets: { pt: ["Ótimo sobre acordes dominantes (7) sem muita tensão alterada.", "Base do ‘som de V’ em contexto modal.", "Progressões I–bVII são comuns."], en: ["Great over dominant 7 chords in modal contexts.", "Signature ‘V-ish’ color.", "Common progression: I–bVII."], es: ["Ideal sobre acordes 7 modales.", "Color típico.", "Progresión común: I–bVII."] },
    examples: { pt: "G mixolídio (de C maior): G–A–B–C–D–E–F.", en: "G Mixolydian (from C major): G–A–B–C–D–E–F.", es: "Sol mixolidio (de Do mayor): Sol–La–Si–Do–Re–Mi–Fa." },
    aliases: ["mixolídio", "mixolydian", "mixolidio", "b7", "dominant modal"],
    seeAlso: ["modes", "chord-symbols"],
    imageUrl: ""
  },
  {
    id: "mode-aeolian",
    category: "scales",
    title: { pt: "Modo Eólio", en: "Aeolian Mode", es: "Modo Eólico" },
    short: { pt: "Equivale à menor natural (1–2–b3–4–5–b6–b7).", en: "Same as natural minor (1–2–b3–4–5–b6–b7).", es: "Equivale a menor natural (1–2–b3–4–5–b6–b7)." },
    definition: {
      pt: "O <b>eólio</b> é o modo menor natural. Nota característica: b6 (comparado ao dórico) e b7 (sem sensível).",
      en: "<b>Aeolian</b> is the natural minor mode. Character tones: b6 (vs Dorian) and b7 (no leading tone).",
      es: "El <b>eólico</b> es la menor natural. Nota característica: b6 (vs dórico) y b7 (sin sensible)."
    },
    bullets: { pt: ["Som menor clássico em pop/rock.", "Dominante pode soar menos ‘forte’ sem 7 elevado.", "Base para harmônica e melódica."], en: ["Classic minor sound in pop/rock.", "Dominant may feel weaker without raised 7.", "Basis for harmonic/melodic minor."], es: ["Sonido menor clásico.", "Dominante puede ser menos fuerte sin 7 elevado.", "Base para armónica/melódica."] },
    examples: { pt: "A eólio: A–B–C–D–E–F–G.", en: "A Aeolian: A–B–C–D–E–F–G.", es: "La eólico: La–Si–Do–Re–Mi–Fa–Sol." },
    aliases: ["eólio", "aeolian", "eólico", "menor natural"],
    seeAlso: ["natural-minor", "harmonic-minor"],
    imageUrl: ""
  },
  {
    id: "mode-locrian",
    category: "scales",
    title: { pt: "Modo Lócrio", en: "Locrian Mode", es: "Modo Locrio" },
    short: { pt: "b2 e b5: modo instável (1–b2–b3–4–b5–b6–b7).", en: "b2 and b5: unstable mode (1–b2–b3–4–b5–b6–b7).", es: "b2 y b5: modo inestable (1–b2–b3–4–b5–b6–b7)." },
    definition: {
      pt: "O <b>lócrio</b> é o modo mais instável porque contém <b>b5</b> (trítono) sobre a tônica. Ele aparece naturalmente como o 7º modo da escala maior e se relaciona ao acorde meio-diminuto (m7b5).",
      en: "<b>Locrian</b> is the most unstable mode due to the <b>b5</b> (tritone) over the tonic. It’s the 7th mode of the major scale and relates to half-diminished (m7b5) harmony.",
      es: "El <b>locrio</b> es el modo más inestable por su <b>b5</b> (tritono). Es el 7º modo de la mayor y se relaciona con m7b5."
    },
    bullets: { pt: ["Raro como centro tonal tradicional.", "Usado em contextos experimentais.", "Relaciona-se ao viiø."], en: ["Rare as a tonal center.", "Used in experimental contexts.", "Relates to viiø."], es: ["Raro como centro tonal.", "Usado en contextos experimentales.", "Relacionado con viiø."] },
    examples: { pt: "B lócrito (de C maior): B–C–D–E–F–G–A.", en: "B Locrian (from C major): B–C–D–E–F–G–A.", es: "Si locrio (de Do mayor): Si–Do–Re–Mi–Fa–Sol–La." },
    aliases: ["lócrio", "locrian", "locrio", "b5", "m7b5"],
    seeAlso: ["seventh-chords", "tritone"],
    imageUrl: ""
  },

  /* =========================
     CAMPO HARMÔNICO MENOR (natural/harmônica/melódica)
     ========================= */
  {
    id: "minor-key-harmony",
    category: "harmony",
    title: { pt: "Tonalidade Menor (harmonia)", en: "Minor Key Harmony", es: "Tonalidad Menor (armonía)" },
    short: {
      pt: "No menor, mistura-se menor natural, harmônica e melódica para cadências fortes e linhas suaves.",
      en: "Minor keys often mix natural, harmonic, and melodic minor for strong cadences and smooth lines.",
      es: "En menor se mezclan menor natural, armónica y melódica para cadencias fuertes y líneas suaves."
    },
    definition: {
      pt: "Na prática tonal, a tonalidade menor usa <b>três formas</b> de escala conforme necessidade. A <b>menor natural</b> define o ‘material base’; a <b>menor harmônica</b> eleva o 7º para criar dominante forte; a <b>menor melódica</b> também eleva o 6º na subida para evitar a 2ª aumentada.",
      en: "In tonal practice, minor keys commonly use <b>three forms</b>. <b>Natural minor</b> provides the base collection; <b>harmonic minor</b> raises 7 to strengthen the dominant; <b>melodic minor</b> often raises 6 (ascending) to avoid the augmented 2nd.",
      es: "En la práctica tonal, las tonalidades menores usan <b>tres formas</b>. La <b>menor natural</b> es base; la <b>armónica</b> eleva 7 para dominante fuerte; la <b>melódica</b> eleva también 6 al ascender para evitar 2ª aumentada."
    },
    bullets: {
      pt: ["V em menor costuma ser <b>maior</b> (com 7 elevado).", "Acorde vii° aparece com sensível.", "Cadências em menor frequentemente usam V7→i."],
      en: ["In minor, V is often <b>major</b> (raised 7).", "Leading-tone diminished chord appears.", "Minor cadences often use V7→i."],
      es: ["En menor, V suele ser <b>mayor</b> (7 elevada).", "Aparece acorde disminuido de sensible.", "Cadencias en menor usan V7→i."]
    },
    examples: {
      pt: "Em A menor: E7 → Am (V7→i).",
      en: "In A minor: E7 → Am (V7→i).",
      es: "En La menor: Mi7 → Lam (V7→i)."
    },
    aliases: ["tonalidade menor", "minor key harmony", "menor harmônica", "menor melódica", "V7 i"],
    seeAlso: ["harmonic-minor", "melodic-minor", "cadences", "dominant-function"],
    imageUrl: ""
  },
  {
    id: "minor-diatonic-triads",
    category: "harmony",
    title: { pt: "Tríades no Menor Natural", en: "Triads in Natural Minor", es: "Tríadas en Menor Natural" },
    short: {
      pt: "Padrão de qualidades no modo eólio (i, ii°, III, iv, v, VI, VII).",
      en: "Quality pattern in Aeolian (i, ii°, III, iv, v, VI, VII).",
      es: "Patrón en eólico (i, ii°, III, iv, v, VI, VII)."
    },
    definition: {
      pt: "No menor natural, as tríades por grau seguem: <b>i</b> (menor), <b>ii°</b> (diminuta), <b>III</b> (maior), <b>iv</b> (menor), <b>v</b> (menor), <b>VI</b> (maior), <b>VII</b> (maior). Na prática tonal, o <b>v</b> frequentemente vira <b>V</b> com o 7 elevado (menor harmônica).",
      en: "In natural minor, triads by degree: <b>i</b> minor, <b>ii°</b> diminished, <b>III</b> major, <b>iv</b> minor, <b>v</b> minor, <b>VI</b> major, <b>VII</b> major. In tonal practice, <b>v</b> often becomes <b>V</b> by raising 7 (harmonic minor).",
      es: "En menor natural, tríadas por grado: <b>i</b> menor, <b>ii°</b> disminuida, <b>III</b> mayor, <b>iv</b> menor, <b>v</b> menor, <b>VI</b> mayor, <b>VII</b> mayor. En tonalidad, <b>v</b> suele convertirse en <b>V</b> elevando 7 (armónica)."
    },
    bullets: {
      pt: ["VII (maior) é comum em rock (♭VII em maior por empréstimo).", "III e VI dão cor ‘menor’ ampla.", "Trocar v→V reforça cadência."],
      en: ["VII major is common in rock (as ♭VII in major via borrowing).", "III and VI add wide minor color.", "Raising v→V strengthens cadence."],
      es: ["VII mayor es común en rock.", "III y VI aportan color.", "v→V refuerza cadencia."]
    },
    examples: {
      pt: "Em A menor (natural): Am–B°–C–Dm–Em–F–G.",
      en: "In A natural minor: Am–B°–C–Dm–Em–F–G.",
      es: "En La menor natural: Lam–Si°–Do–Rem–Mim–Fa–Sol."
    },
    aliases: ["campo harmônico menor", "triads natural minor", "ii°", "v", "V em menor"],
    seeAlso: ["minor-key-harmony", "natural-minor", "diatonic-triads"],
    imageUrl: ""
  },

  /* =========================
     ESCALAS SIMÉTRICAS / MODERNAS
     ========================= */
  {
    id: "whole-tone-scale",
    category: "scales",
    title: { pt: "Escala de Tons Inteiros", en: "Whole-Tone Scale", es: "Escala de Tonos Enteros" },
    short: { pt: "Só tons: 6 notas. Sonoridade ‘flutuante’ (sem semitons).", en: "All whole steps: 6 notes. Floating sound (no semitones).", es: "Solo tonos: 6 notas. Sonido flotante (sin semitonos)." },
    definition: {
      pt: "A <b>escala de tons inteiros</b> tem apenas intervalos de tom. Por ser simétrica, não cria sensível nem funções tonais fortes. Muito usada sobre acordes <b>7(#5)</b> e em impressionismo/jazz.",
      en: "The <b>whole-tone scale</b> uses only whole steps. Being symmetric, it lacks a leading tone and strong tonal function. Often used over <b>7(#5)</b> chords and in impressionism/jazz.",
      es: "La <b>escala de tonos enteros</b> usa solo tonos. Es simétrica, sin sensible ni función fuerte. Usada sobre <b>7(#5)</b> y en impresionismo/jazz."
    },
    bullets: {
      pt: ["Existem apenas 2 coleções diferentes (por simetria).", "Cria clima ‘onírico’.", "Combina com dominante aumentado."],
      en: ["Only 2 distinct collections (symmetry).", "Dreamy/ambiguous vibe.", "Fits augmented dominants."],
      es: ["Solo 2 colecciones (simetría).", "Ambiente onírico/ambiguo.", "Encaja con dominante aumentado."]
    },
    examples: {
      pt: "C tons inteiros: C–D–E–F#–G#–A#.",
      en: "C whole-tone: C–D–E–F#–G#–A#.",
      es: "Do tonos enteros: Do–Re–Mi–Fa#–Sol#–La#."
    },
    aliases: ["tons inteiros", "whole tone", "tonos enteros", "7#5", "escala simétrica"],
    seeAlso: ["altered-dominant", "tritone"],
    imageUrl: ""
  },
  {
    id: "diminished-scale",
    category: "scales",
    title: { pt: "Escala Diminuta (Octatônica)", en: "Diminished Scale (Octatonic)", es: "Escala Disminuida (Octatónica)" },
    short: { pt: "8 notas alternando tom e semitom (T–S–T–S… ou S–T…).", en: "8 notes alternating whole/half steps (W–H… or H–W…).", es: "8 notas alternando tono/semitono (T–S… o S–T…)." },
    definition: {
      pt: "A <b>octatônica</b> alterna tom e semitom. Há duas formas comuns: <b>semitom-tom</b> (HW) e <b>tom-semitom</b> (WH). Em jazz, é muito usada sobre dominantes (especialmente 7b9) e acordes diminutos.",
      en: "The <b>octatonic</b> alternates whole and half steps. Two common forms: <b>half–whole</b> (HW) and <b>whole–half</b> (WH). In jazz it’s used over dominants (esp. 7b9) and diminished chords.",
      es: "La <b>octatónica</b> alterna tono y semitono. Formas: <b>semitono-tono</b> y <b>tono-semitono</b>. En jazz se usa sobre dominantes (7b9) y disminuidos."
    },
    bullets: {
      pt: ["Simetria → múltiplas resoluções possíveis.", "Excelente para tensão dominante.", "Relaciona-se a acordes diminutos encadeados."],
      en: ["Symmetry → multiple resolution paths.", "Great for dominant tension.", "Related to diminished chord chains."],
      es: ["Simetría → múltiples resoluciones.", "Ideal para tensión dominante.", "Relacionado con cadenas de disminuidos."]
    },
    examples: {
      pt: "G (half-whole): G–Ab–Bb–B–Db–D–E–F.",
      en: "G (half-whole): G–Ab–Bb–B–Db–D–E–F.",
      es: "Sol (semitono-tono): Sol–Lab–Sib–Si–Reb–Re–Mi–Fa."
    },
    aliases: ["octatônica", "diminished scale", "octatonic", "half-whole", "whole-half", "7b9"],
    seeAlso: ["seventh-chords", "altered-dominant"],
    imageUrl: ""
  },

  /* =========================
     FORMA / COMPOSIÇÃO (fundamentos)
     ========================= */
  {
    id: "musical-form",
    category: "history",
    title: { pt: "Forma Musical (visão geral)", en: "Musical Form (overview)", es: "Forma Musical (visión general)" },
    short: { pt: "Organização em seções: A, B, refrão, ponte, desenvolvimento etc.", en: "Organization into sections: A, B, chorus, bridge, development, etc.", es: "Organización en secciones: A, B, estribillo, puente, desarrollo, etc." },
    definition: {
      pt: "<b>Forma</b> é como a música se organiza no tempo: repetição, contraste e variação. Em música popular, formas comuns incluem <b>verso–refrão</b> e <b>AABA</b>. Em música clássica: <b>forma ternária</b> (ABA), <b>rondó</b> (ABACA) e <b>sonata</b> (exposição–desenvolvimento–recapitulação).",
      en: "<b>Form</b> is how music is organized in time: repetition, contrast, and variation. In popular music: <b>verse–chorus</b> and <b>AABA</b>. In classical: <b>ternary</b> (ABA), <b>rondo</b> (ABACA), and <b>sonata</b> (exposition–development–recap).",
      es: "La <b>forma</b> organiza la música en el tiempo: repetición, contraste y variación. En popular: <b>verso–estribillo</b> y <b>AABA</b>. En clásica: <b>ternaria</b> (ABA), <b>rondó</b> (ABACA) y <b>sonata</b>."
    },
    bullets: {
      pt: ["Repetição cria identidade; contraste cria narrativa.", "Variação mantém interesse.", "Forma guia arranjo e dinâmica."],
      en: ["Repetition builds identity; contrast creates narrative.", "Variation keeps interest.", "Form guides arranging and dynamics."],
      es: ["Repetición crea identidad; contraste narrativa.", "Variación mantiene interés.", "Forma guía arreglo y dinámica."]
    },
    examples: {
      pt: "Pop: Verso (A) → Refrão (B) → Verso → Refrão → Ponte (C) → Refrão.",
      en: "Pop: Verse (A) → Chorus (B) → Verse → Chorus → Bridge (C) → Chorus.",
      es: "Pop: Verso (A) → Estribillo (B) → Verso → Estribillo → Puente (C) → Estribillo."
    },
    aliases: ["forma", "musical form", "forma musical", "AABA", "ABA", "sonata", "rondó", "verse chorus"],
    seeAlso: ["cadences", "dynamics"],
    imageUrl: ""
  },
  {
    id: "counterpoint-overview",
    category: "history",
    title: { pt: "Contraponto (visão geral)", en: "Counterpoint (overview)", es: "Contrapunto (visión general)" },
    short: { pt: "Combinar linhas melódicas independentes com coerência harmônica.", en: "Combining independent melodic lines with harmonic coherence.", es: "Combinar líneas melódicas independientes con coherencia armónica." },
    definition: {
      pt: "<b>Contraponto</b> é a arte de combinar melodias independentes. Conceitos centrais: <b>movimento contrário</b>, evitar paralelismos excessivos, tratar dissonâncias com preparação/resolução e manter cada voz ‘cantável’.",
      en: "<b>Counterpoint</b> is the art of combining independent melodies. Core ideas: <b>contrary motion</b>, avoiding excessive parallels, treating dissonance with preparation/resolution, and keeping each voice singable.",
      es: "El <b>contrapunto</b> combina melodías independientes. Ideas: <b>movimiento contrario</b>, evitar paralelos excesivos, tratar disonancias con preparación/resolución y mantener voces cantables."
    },
    bullets: {
      pt: ["Movimento contrário aumenta clareza.", "Dissonâncias pedem contexto.", "Contraponto influencia harmonia e arranjo modernos."],
      en: ["Contrary motion increases clarity.", "Dissonances need context.", "Counterpoint influences modern harmony and arranging."],
      es: ["Movimiento contrario da claridad.", "Disonancias requieren contexto.", "Influye armonía y arreglo modernos."]
    },
    examples: {
      pt: "Ex.: baixo desce enquanto melodia sobe para evitar colisões.",
      en: "Example: bass descends while melody ascends to avoid collisions.",
      es: "Ej.: bajo baja mientras melodía sube."
    },
    aliases: ["contraponto", "counterpoint", "contrapunto", "voice leading", "condução de vozes"],
    seeAlso: ["inversions", "dominant-function"],
    imageUrl: ""
  },

  /* =========================
     OUVIDO / PERCEPÇÃO (ear training)
     ========================= */
  {
    id: "ear-training-overview",
    category: "history",
    title: { pt: "Treino de Ouvido (visão geral)", en: "Ear Training (overview)", es: "Entrenamiento Auditivo (visión general)" },
    short: {
      pt: "Reconhecer intervalos, acordes, ritmo e função. Base para tocar ‘de ouvido’.",
      en: "Recognize intervals, chords, rhythm, and function. Foundation for playing by ear.",
      es: "Reconocer intervalos, acordes, ritmo y función. Base para tocar de oído."
    },
    definition: {
      pt: "Treino de ouvido envolve <b>percepção relativa</b> (relações entre notas) e, às vezes, <b>percepção absoluta</b>. Práticas essenciais: cantar graus (solfejo), identificar intervalos, reconhecer qualidades de acordes, ditado rítmico e harmônico.",
      en: "Ear training focuses on <b>relative hearing</b> (relationships between notes) and sometimes <b>absolute pitch</b>. Essentials: singing scale degrees (solfege), identifying intervals, recognizing chord qualities, rhythmic and harmonic dictation.",
      es: "El entrenamiento auditivo trabaja <b>oído relativo</b> y a veces <b>oído absoluto</b>. Prácticas: solfeo, intervalos, cualidades de acordes, dictado rítmico y armónico."
    },
    bullets: {
      pt: ["Cantar é o atalho mais poderoso.", "Relacione sons a funções (V→I, etc.).", "Treine ritmos com metrônomo e palmas."],
      en: ["Singing is the strongest shortcut.", "Connect sounds to functions (V→I, etc.).", "Train rhythm with metronome and clapping."],
      es: ["Cantar es el atajo más potente.", "Relaciona sonidos con funciones (V→I).", "Entrena ritmos con metrónomo y palmas."]
    },
    examples: {
      pt: "Ex.: ouvir V7 e ‘sentir’ a resolução para I antes de tocar.",
      en: "Example: hearing V7 and anticipating resolution to I before playing.",
      es: "Ej.: oír V7 y anticipar resolución a I."
    },
    aliases: ["treino de ouvido", "ear training", "entrenamiento auditivo", "solfejo", "dictation"],
    seeAlso: ["interval-definition", "seventh-chords", "rhythm"],
    imageUrl: ""
  },

  /* =========================
     PRÁTICA (método — curto e objetivo)
     ========================= */
  {
    id: "practice-framework",
    category: "history",
    title: { pt: "Método de Estudo (framework)", en: "Practice Framework", es: "Método de Estudio" },
    short: {
      pt: "Rotina eficiente: objetivos, metrônomo, repetição lenta, revisão espaçada.",
      en: "Efficient routine: goals, metronome, slow reps, spaced review.",
      es: "Rutina eficiente: objetivos, metrónomo, reps lentas, revisión espaciada."
    },
    definition: {
      pt: "Um método sólido combina <b>clareza</b> (o que estudar), <b>medição</b> (metrônomo/gravador), <b>progressão</b> (lento→rápido) e <b>revisão</b> (retomar conteúdos). A teoria vira música quando você <b>canta</b>, <b>toca</b> e <b>analisa</b> exemplos reais.",
      en: "A solid framework combines <b>clarity</b> (what to practice), <b>measurement</b> (metronome/recording), <b>progression</b> (slow→fast), and <b>review</b> (returning to material). Theory becomes music when you <b>sing</b>, <b>play</b>, and <b>analyze</b> real examples.",
      es: "Un buen método combina <b>claridad</b>, <b>medición</b>, <b>progresión</b> y <b>revisión</b>. La teoría se vuelve música cuando <b>cantas</b>, <b>tocas</b> y <b>analizas</b> ejemplos reales."
    },
    bullets: {
      pt: ["Regra: 80% lento perfeito, 20% desafio.", "Grave 1x por semana para medir.", "Use flashcards para intervalos/armaduras."],
      en: ["Rule: 80% slow perfect, 20% challenge.", "Record weekly to measure.", "Use flashcards for intervals/keys."],
      es: ["Regla: 80% lento perfecto, 20% reto.", "Graba semanalmente.", "Usa tarjetas para intervalos/armaduras."]
    },
    examples: {
      pt: "Plano diário (30 min): 10 min ritmo + 10 min escalas/intervalos + 10 min análise/ditado.",
      en: "Daily plan (30 min): 10m rhythm + 10m scales/intervals + 10m analysis/dictation.",
      es: "Plan diario (30 min): 10m ritmo + 10m escalas/intervalos + 10m análisis/dictado."
    },
    aliases: ["método de estudo", "practice routine", "rotina", "revisão espaçada", "spaced repetition"],
    seeAlso: ["ear-training-overview", "subdivision", "meter"],
    imageUrl: ""
  }
];