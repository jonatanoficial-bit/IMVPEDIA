/* IMVpedia — Dicionário (PT/EN/ES)
   Este arquivo contém SOMENTE conteúdo.
   Para adicionar verbetes: copie um item e edite.
*/

window.IMVPEDIA_ENTRIES = [
  /* =========================
     FUNDAMENTOS / CONCEITOS
     (Usaremos category existentes para já aparecer nos carrosséis.
     “Fundamentos” fica em Notation/History/Harmony/Rhythm/Scales conforme o tema.)
     ========================= */

  {
    id: "sound-basics",
    category: "history",
    title: { pt: "Som (conceito)", en: "Sound (concept)", es: "Sonido (concepto)" },
    short: {
      pt: "Vibração que se propaga em meio material e pode ser percebida pela audição.",
      en: "Vibration that propagates through a medium and can be perceived by hearing.",
      es: "Vibración que se propaga en un medio y puede percibirse por el oído."
    },
    definition: {
      pt: "Em música, o <b>som</b> é descrito por quatro pilares: <b>altura</b> (pitch), <b>duração</b> (tempo), <b>intensidade</b> (volume) e <b>timbre</b> (cor).",
      en: "In music, <b>sound</b> is described by four pillars: <b>pitch</b>, <b>duration</b>, <b>loudness</b>, and <b>timbre</b>.",
      es: "En música, el <b>sonido</b> se describe por cuatro pilares: <b>altura</b>, <b>duración</b>, <b>intensidad</b> y <b>timbre</b>."
    },
    bullets: {
      pt: ["Altura: ligada à frequência (Hz).", "Timbre: espectro de harmônicos.", "Música organiza sons no tempo."],
      en: ["Pitch relates to frequency (Hz).", "Timbre relates to harmonic spectrum.", "Music organizes sound in time."],
      es: ["Altura: ligada a la frecuencia (Hz).", "Timbre: espectro de armónicos.", "La música organiza sonidos en el tiempo."]
    },
    examples: {
      pt: "Ex.: Lá4 = 440 Hz (padrão comum de afinação).",
      en: "Example: A4 = 440 Hz (common tuning standard).",
      es: "Ej.: La4 = 440 Hz (estándar común de afinación)."
    },
    aliases: ["som", "sound", "sonido", "freq", "frequência", "frecuencia", "timbre", "harmônicos", "harmonics"],
    seeAlso: ["timbre", "pitch-frequency"],
    imageUrl: ""
  },

  {
    id: "pitch-frequency",
    category: "history",
    title: { pt: "Altura e Frequência", en: "Pitch and Frequency", es: "Altura y Frecuencia" },
    short: {
      pt: "Altura é percepção; frequência é medida física (Hz).",
      en: "Pitch is perception; frequency is physical measure (Hz).",
      es: "Altura es percepción; frecuencia es medida física (Hz)."
    },
    definition: {
      pt: "<b>Frequência</b> é quantas vibrações por segundo (Hz). <b>Altura</b> é como o ouvido percebe essa frequência. A mesma nota pode soar diferente em timbres distintos, mas a altura principal se mantém.",
      en: "<b>Frequency</b> is vibrations per second (Hz). <b>Pitch</b> is how we perceive it. Timbre changes color, but the perceived fundamental pitch remains.",
      es: "<b>Frecuencia</b> son vibraciones por segundo (Hz). <b>Altura</b> es la percepción. El timbre cambia el color, pero la altura fundamental permanece."
    },
    bullets: {
      pt: ["Dobrar a frequência = subir 1 oitava.", "Percepção pode variar com contexto.", "Afinação é convenção cultural/técnica."],
      en: ["Doubling frequency = up one octave.", "Perception can vary by context.", "Tuning is a cultural/technical convention."],
      es: ["Doblar la frecuencia = subir una octava.", "La percepción varía según el contexto.", "La afinación es convención cultural/técnica."]
    },
    examples: {
      pt: "Ex.: 220 Hz (Lá3) → 440 Hz (Lá4) → 880 Hz (Lá5).",
      en: "Example: 220 Hz (A3) → 440 Hz (A4) → 880 Hz (A5).",
      es: "Ej.: 220 Hz (La3) → 440 Hz (La4) → 880 Hz (La5)."
    },
    aliases: ["altura", "pitch", "frequência", "frequency", "frecuencia", "hz", "oitava", "octave"],
    seeAlso: ["sound-basics"],
    imageUrl: ""
  },

  {
    id: "timbre",
    category: "history",
    title: { pt: "Timbre", en: "Timbre", es: "Timbre" },
    short: {
      pt: "“Cor” do som: harmônicos, ataque, decaimento e forma de onda.",
      en: "Sound “color”: harmonics, attack, decay and waveform.",
      es: "“Color” del sonido: armónicos, ataque, decaimiento y forma de onda."
    },
    definition: {
      pt: "<b>Timbre</b> é o que faz um mesmo Dó soar diferente no piano e no violino. Ele depende do espectro de harmônicos, do envelope (ataque/decay/sustain/release) e de características do instrumento/voz.",
      en: "<b>Timbre</b> is what makes the same C sound different on piano vs violin. It depends on harmonic spectrum, envelope (ADSR), and instrument/voice traits.",
      es: "El <b>timbre</b> hace que el mismo Do suene distinto en piano y violín. Depende del espectro armónico, envolvente (ADSR) y rasgos del instrumento/voz."
    },
    bullets: {
      pt: ["Harmônicos definem brilho/escuro.", "Ataque muda a percepção de ‘pancada’.", "Técnicas (pizzicato, sopro) alteram timbre."],
      en: ["Harmonics define brightness/darkness.", "Attack changes perceived punch.", "Techniques (pizzicato, breathy) alter timbre."],
      es: ["Armónicos definen brillo/oscuridad.", "Ataque cambia el golpe percibido.", "Técnicas alteran el timbre."]
    },
    examples: {
      pt: "Ex.: distorção na guitarra adiciona harmônicos e ‘agressividade’.",
      en: "Example: guitar distortion adds harmonics and aggression.",
      es: "Ej.: la distorsión añade armónicos y ‘agresividad’."
    },
    aliases: ["timbre", "harmônicos", "harmonics", "adrs", "envelope", "envolvente"],
    seeAlso: ["sound-basics"],
    imageUrl: ""
  },

  /* =========================
     NOTAÇÃO / LEITURA
     ========================= */

  {
    id: "staff",
    category: "notation",
    title: { pt: "Pauta (Pentagrama)", en: "Staff", es: "Pentagrama" },
    short: {
      pt: "5 linhas e 4 espaços onde se escrevem alturas musicais.",
      en: "Five lines and four spaces for writing pitch.",
      es: "Cinco líneas y cuatro espacios para escribir alturas."
    },
    definition: {
      pt: "A <b>pauta</b> é o sistema de linhas onde as notas são posicionadas verticalmente conforme a altura. A clave define quais alturas correspondem a cada linha/espaço.",
      en: "The <b>staff</b> is the line system where notes are placed vertically by pitch. The clef defines which pitches match lines/spaces.",
      es: "El <b>pentagrama</b> es el sistema de líneas donde las notas se ubican según la altura. La clave define qué alturas corresponden."
    },
    bullets: {
      pt: ["Clave é essencial para interpretar alturas.", "Linhas/espacos continuam com linhas suplementares.", "Base para leitura tradicional."],
      en: ["Clef is essential to interpret pitches.", "Ledger lines extend above/below.", "Basis for standard notation."],
      es: ["La clave es esencial.", "Líneas adicionales extienden el registro.", "Base de la notación tradicional."]
    },
    examples: {
      pt: "Ex.: notas acima da pauta usam linhas suplementares.",
      en: "Example: notes above staff use ledger lines.",
      es: "Ej.: notas arriba usan líneas adicionales."
    },
    aliases: ["pauta", "pentagrama", "staff", "ledger lines", "linhas suplementares"],
    seeAlso: ["clefs"],
    imageUrl: ""
  },

  {
    id: "clefs",
    category: "notation",
    title: { pt: "Claves (Sol, Fá, Dó)", en: "Clefs (Treble, Bass, C)", es: "Claves (Sol, Fa, Do)" },
    short: {
      pt: "A clave ‘ancora’ as alturas na pauta. Sol e Fá são as mais comuns.",
      en: "Clefs anchor pitch on the staff. Treble and Bass are most common.",
      es: "Las claves anclan alturas. Sol y Fa son las más comunes."
    },
    definition: {
      pt: "A <b>clave</b> define a referência de uma linha da pauta. A <b>clave de Sol</b> marca o Sol na 2ª linha; a <b>clave de Fá</b> marca o Fá na 4ª linha. A <b>clave de Dó</b> pode marcar o Dó em posições diferentes (alto/tenor).",
      en: "A <b>clef</b> sets a reference pitch for a staff line. <b>Treble</b> places G on line 2; <b>Bass</b> places F on line 4. <b>C clef</b> places middle C on different lines (alto/tenor).",
      es: "La <b>clave</b> fija una referencia. <b>Sol</b> marca Sol en la 2ª línea; <b>Fa</b> marca Fa en la 4ª. <b>Do</b> coloca Do central en varias posiciones (alto/tenor)."
    },
    bullets: {
      pt: ["Clave muda leitura, não muda o som real.", "Piano lê duas claves (mão direita/esquerda).", "Claves de Dó são comuns em cordas."],
      en: ["Clef changes reading, not actual sound.", "Piano uses two clefs (RH/LH).", "C clefs are common in strings."],
      es: ["La clave cambia lectura, no el sonido.", "Piano usa dos claves.", "Claves de Do son comunes en cuerdas."]
    },
    examples: {
      pt: "Ex.: violoncelo lê geralmente em clave de Fá e, às vezes, Dó/tenor.",
      en: "Example: cello reads mostly bass clef, sometimes tenor clef.",
      es: "Ej.: violonchelo usa Fa y a veces tenor."
    },
    aliases: ["clave", "clef", "treble", "bass", "alto clef", "tenor clef", "clave de sol", "clave de fá", "clave de do"],
    seeAlso: ["staff"],
    imageUrl: ""
  },

  {
    id: "note-values",
    category: "notation",
    title: { pt: "Figuras (duração)", en: "Note Values", es: "Figuras (duración)" },
    short: {
      pt: "Semibreve, mínima, semínima, colcheia… e suas subdivisões.",
      en: "Whole, half, quarter, eighth… and subdivisions.",
      es: "Redonda, blanca, negra, corchea… y subdivisiones."
    },
    definition: {
      pt: "As <b>figuras</b> indicam quanto tempo um som dura dentro de um pulso/compasso. A relação é proporcional: 1 semibreve = 2 mínimas = 4 semínimas = 8 colcheias = 16 semicolcheias.",
      en: "<b>Note values</b> indicate duration. Ratios are proportional: 1 whole = 2 halves = 4 quarters = 8 eighths = 16 sixteenths.",
      es: "Las <b>figuras</b> indican duración. Proporciones: 1 redonda = 2 blancas = 4 negras = 8 corcheas = 16 semicorcheas."
    },
    bullets: {
      pt: ["Duração depende do andamento.", "Barras/feixes agrupam subdivisões.", "Pontuação e ligadura alteram valores."],
      en: ["Duration depends on tempo.", "Beams group subdivisions.", "Dots and ties modify values."],
      es: ["Depende del tempo.", "Barras agrupan subdivisiones.", "Puntos y ligaduras modifican valores."]
    },
    examples: {
      pt: "Ex.: duas colcheias ocupam o mesmo tempo de uma semínima.",
      en: "Example: two eighth notes equal one quarter note.",
      es: "Ej.: dos corcheas equivalen a una negra."
    },
    aliases: ["figuras", "note values", "duração", "duracao", "redonda", "negra", "semínima", "colcheia", "semicolcheia"],
    seeAlso: ["rests", "dots", "ties"],
    imageUrl: ""
  },

  {
    id: "rests",
    category: "notation",
    title: { pt: "Pausas (silêncios)", en: "Rests", es: "Silencios" },
    short: {
      pt: "Silêncio também é ritmo: cada figura tem sua pausa correspondente.",
      en: "Silence is rhythm too: each note value has a matching rest.",
      es: "El silencio también es ritmo: cada figura tiene su silencio."
    },
    definition: {
      pt: "<b>Pausas</b> indicam ausência de som com duração específica. Elas são fundamentais para fraseado, respiração musical e clareza rítmica.",
      en: "<b>Rests</b> indicate silence with specific duration. They’re essential for phrasing, musical breathing, and rhythmic clarity.",
      es: "Los <b>silencios</b> indican ausencia de sonido con duración específica. Son clave para fraseo y claridad rítmica."
    },
    bullets: {
      pt: ["Pausa cria espaço e intenção.", "Pausas podem gerar síncope.", "Leitura: conte a pausa como tempo."],
      en: ["Rests create space and intention.", "Rests can create syncopation.", "Count rests as time."],
      es: ["Crean espacio e intención.", "Pueden crear síncopa.", "Cuenta los silencios como tiempo."]
    },
    examples: {
      pt: "Ex.: pausa de semínima = 1 tempo em 4/4 (se semínima = 1 tempo).",
      en: "Example: quarter rest = 1 beat in 4/4 (if quarter = beat).",
      es: "Ej.: silencio de negra = 1 pulso en 4/4 (si negra = pulso)."
    },
    aliases: ["pausas", "silêncio", "silencio", "rests", "rest"],
    seeAlso: ["note-values", "meter"],
    imageUrl: ""
  },

  {
    id: "dots",
    category: "notation",
    title: { pt: "Ponto de aumento", en: "Dotted Notes", es: "Punto de aumento" },
    short: {
      pt: "O ponto adiciona metade do valor da figura.",
      en: "A dot adds half the note’s value.",
      es: "El punto añade la mitad del valor."
    },
    definition: {
      pt: "Uma figura pontuada dura <b>1,5×</b> seu valor (um ponto). Dois pontos: soma 1/2 + 1/4 do valor original.",
      en: "A dotted note lasts <b>1.5×</b> its value (one dot). Two dots add 1/2 + 1/4 of the original value.",
      es: "Una figura con punto dura <b>1,5×</b> (un punto). Dos puntos: 1/2 + 1/4 del valor original."
    },
    bullets: {
      pt: ["Muito comum em 6/8 e ritmos pontuados.", "Ajuda a escrever swing/“long-short”.", "Não confundir com staccato."],
      en: ["Very common in 6/8 and dotted rhythms.", "Useful for long-short feels.", "Not the same as staccato."],
      es: ["Común en 6/8 y ritmos puntillo.", "Útil para long-short.", "No confundir con staccato."]
    },
    examples: {
      pt: "Ex.: semínima pontuada = semínima + colcheia.",
      en: "Example: dotted quarter = quarter + eighth.",
      es: "Ej.: negra con punto = negra + corchea."
    },
    aliases: ["ponto de aumento", "dotted", "puntillo", "pontuada", "dotted notes"],
    seeAlso: ["note-values", "ties", "meter"],
    imageUrl: ""
  },

  {
    id: "ties",
    category: "notation",
    title: { pt: "Ligadura de valor", en: "Tie", es: "Ligadura" },
    short: {
      pt: "Une duas notas iguais somando durações (não é fraseado).",
      en: "Connects two same pitches to add durations (not phrasing).",
      es: "Une dos notas iguales sumando duraciones (no fraseo)."
    },
    definition: {
      pt: "A <b>ligadura de valor</b> conecta duas notas da <b>mesma altura</b> para formar uma duração maior. Já a ligadura de fraseado (slur) liga alturas diferentes indicando articulação/frase.",
      en: "A <b>tie</b> connects two notes of the <b>same pitch</b> to form a longer duration. A slur connects different pitches for phrasing/articulation.",
      es: "La <b>ligadura</b> une dos notas de la <b>misma altura</b> para crear mayor duración. La de fraseo une alturas distintas."
    },
    bullets: {
      pt: ["Muito usada para atravessar a barra de compasso.", "Cria síncope/antecipação.", "Ajuda escrita rítmica limpa."],
      en: ["Often used across barlines.", "Creates syncopation/anticipation.", "Keeps rhythm notation clean."],
      es: ["Se usa para cruzar compases.", "Crea síncopa/anticipación.", "Limpia la escritura rítmica."]
    },
    examples: {
      pt: "Ex.: colcheia ligada à semínima atravessando o tempo forte.",
      en: "Example: eighth tied to quarter across a strong beat.",
      es: "Ej.: corchea ligada a negra cruzando pulso fuerte."
    },
    aliases: ["ligadura", "tie", "slur", "ligadura de valor", "ligadura de fraseado"],
    seeAlso: ["syncopation", "dots"],
    imageUrl: ""
  },

  /* =========================
     RITMO (essenciais)
     ========================= */

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
    seeAlso: ["subdivision", "syncopation"],
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
    seeAlso: ["meter", "syncopation", "note-values"],
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
    seeAlso: ["meter", "subdivision", "ties", "rests"],
    imageUrl: ""
  },

  /* =========================
     ESCALAS (essenciais + ponte)
     ========================= */

  {
    id: "major-scale",
    category: "scales",
    title: { pt: "Escala Maior", en: "Major Scale", es: "Escala Mayor" },
    short: { pt: "Padrão T–T–S–T–T–T–S. Base da tonalidade maior.", en: "W–W–H–W–W–W–H. Foundation of major keys.", es: "T–T–S–T–T–T–S. Base de tonalidades mayores." },
    definition: {
      pt: "A <b>escala maior</b> tem 7 notas e organiza funções tonais (tônica, subdominante, dominante). O padrão intervalar é <b>T–T–S–T–T–T–S</b>.",
      en: "The <b>major scale</b> has 7 notes and organizes tonal functions (tonic, subdominant, dominant). Interval pattern is <b>W–W–H–W–W–W–H</b>.",
      es: "La <b>escala mayor</b> tiene 7 notas y organiza funciones tonales (tónica, subdominante, dominante). Patrón: <b>T–T–S–T–T–T–S</b>."
    },
    bullets: {
      pt: ["Base do campo harmônico diatônico.", "Relativa menor compartilha armadura.", "Base de leitura tonal."],
      en: ["Basis of diatonic harmony.", "Relative minor shares key signature.", "Foundation of tonal reading."],
      es: ["Base de armonía diatónica.", "Relativa menor comparte armadura.", "Fundamento tonal."]
    },
    examples: { pt: "Ex.: Dó maior = Dó–Ré–Mi–Fá–Sol–Lá–Si.", en: "Example: C major = C–D–E–F–G–A–B.", es: "Ej.: Do mayor = Do–Re–Mi–Fa–Sol–La–Si." },
    aliases: ["escala maior", "major scale", "escala mayor", "TTSTTTS", "WWHWWWH"],
    seeAlso: ["natural-minor", "modes", "key-signature", "diatonic-triads"],
    imageUrl: ""
  },

  {
    id: "natural-minor",
    category: "scales",
    title: { pt: "Escala Menor Natural", en: "Natural Minor Scale", es: "Escala Menor Natural" },
    short: { pt: "Modo eólio: T–S–T–T–S–T–T.", en: "Aeolian: W–H–W–W–H–W–W.", es: "Eólico: T–S–T–T–S–T–T." },
    definition: {
      pt: "A <b>menor natural</b> é o modo eólio. É a forma básica do modo menor sem alterações no 6º e 7º graus.",
      en: "<b>Natural minor</b> is the Aeolian mode. It’s the basic minor form without altering 6th and 7th degrees upward.",
      es: "La <b>menor natural</b> es el modo eólico. Es la forma básica menor sin elevar 6º y 7º grados."
    },
    bullets: {
      pt: ["Relativa maior compartilha notas.", "Base para menor harmônica e melódica.", "Muito usada em música popular."],
      en: ["Relative major shares notes.", "Basis for harmonic/melodic minor.", "Common in popular music."],
      es: ["Relativa mayor comparte notas.", "Base para menor armónica/melódica.", "Común en música popular."]
    },
    examples: { pt: "Ex.: Lá menor = Lá–Si–Dó–Ré–Mi–Fá–Sol.", en: "Example: A minor = A–B–C–D–E–F–G.", es: "Ej.: La menor = La–Si–Do–Re–Mi–Fa–Sol." },
    aliases: ["menor natural", "natural minor", "aeolian", "eólio", "eolico"],
    seeAlso: ["major-scale", "modes"],
    imageUrl: ""
  },

  {
    id: "harmonic-minor",
    category: "scales",
    title: { pt: "Escala Menor Harmônica", en: "Harmonic Minor", es: "Menor Armónica" },
    short: { pt: "Menor natural com 7º grau maior (sensível).", en: "Natural minor with raised 7th (leading tone).", es: "Menor natural con 7º elevado (sensible)." },
    definition: {
      pt: "A <b>menor harmônica</b> eleva o 7º grau para criar a <b>sensível</b> e fortalecer a dominante (V7). Isso gera o intervalo característico de 2ª aumentada entre 6º e 7º graus.",
      en: "<b>Harmonic minor</b> raises the 7th degree to create a <b>leading tone</b> and strengthen the dominant (V7). It creates a characteristic augmented 2nd between 6 and 7.",
      es: "La <b>menor armónica</b> eleva el 7º para crear <b>sensible</b> y fortalecer dominante (V7). Crea la 2ª aumentada característica entre 6 y 7."
    },
    bullets: {
      pt: ["Dominante fica maior e mais ‘tensa’.", "Muito usada em música clássica e flamenco.", "Base para modos da menor harmônica."],
      en: ["Dominant becomes major and more tense.", "Used in classical music and flamenco.", "Basis for harmonic-minor modes."],
      es: ["Dominante se vuelve mayor y más tensa.", "Usada en clásica y flamenco.", "Base de modos de menor armónica."]
    },
    examples: { pt: "Ex.: Lá menor harmônica = Lá–Si–Dó–Ré–Mi–Fá–Sol#.", en: "Example: A harmonic minor = A–B–C–D–E–F–G#.", es: "Ej.: La menor armónica = La–Si–Do–Re–Mi–Fa–Sol#." },
    aliases: ["menor harmônica", "harmonic minor", "menor armónica", "leading tone", "sensível", "sensible"],
    seeAlso: ["natural-minor", "dominant-function"],
    imageUrl: ""
  },

  {
    id: "melodic-minor",
    category: "scales",
    title: { pt: "Escala Menor Melódica", en: "Melodic Minor", es: "Menor Melódica" },
    short: { pt: "Sobe: 6º e 7º maiores; desce: muitas tradições voltam ao menor natural.", en: "Up: raised 6 & 7; down: many traditions return to natural minor.", es: "Sube: 6 y 7 elevadas; baja: a veces vuelve a menor natural." },
    definition: {
      pt: "A <b>menor melódica</b> surgiu para evitar a 2ª aumentada da menor harmônica. Na tradição clássica, costuma subir com 6º/7º maiores e descer como menor natural. No jazz, frequentemente é tratada como forma ‘única’ (mesmo subindo e descendo).",
      en: "<b>Melodic minor</b> avoids harmonic minor’s augmented 2nd. In classical tradition it often raises 6/7 ascending and reverts descending. In jazz it’s often used as a single form both ways.",
      es: "La <b>menor melódica</b> evita la 2ª aumentada de la armónica. En tradición clásica sube con 6/7 elevadas y baja como menor natural. En jazz se usa como forma única."
    },
    bullets: {
      pt: ["Cria sonoridade moderna no jazz.", "Base de vários modos usados sobre acordes alterados.", "Melhora condução melódica."],
      en: ["Modern sound in jazz.", "Basis of modes used over altered chords.", "Improves melodic motion."],
      es: ["Sonido moderno en jazz.", "Base de modos sobre acordes alterados.", "Mejora el movimiento melódico."]
    },
    examples: { pt: "Ex.: Lá menor melódica asc. = Lá–Si–Dó–Ré–Mi–Fá#–Sol#.", en: "Example: A melodic minor asc. = A–B–C–D–E–F#–G#.", es: "Ej.: La menor melódica asc. = La–Si–Do–Re–Mi–Fa#–Sol#." },
    aliases: ["menor melódica", "melodic minor", "menor melódica", "jazz minor"],
    seeAlso: ["harmonic-minor", "natural-minor"],
    imageUrl: ""
  },

  {
    id: "modes",
    category: "scales",
    title: { pt: "Modos Gregos", en: "Greek Modes", es: "Modos Griegos" },
    short: { pt: "Mesmo conjunto de notas, centro tonal diferente (cor modal).", en: "Same notes, different tonal center (modal color).", es: "Mismas notas, centro tonal distinto (color modal)." },
    definition: {
      pt: "<b>Modos</b> são variações de uma escala quando você muda a nota de repouso (centro). Isso muda o caráter. Ex.: Dórico tem 6º maior; Mixolídio tem 7º menor.",
      en: "<b>Modes</b> change color by shifting the tonal center while keeping the same note set. Example: Dorian has natural 6; Mixolydian has flat 7.",
      es: "Los <b>modos</b> cambian el color al mover el centro tonal manteniendo las mismas notas. Ej.: Dórico 6 natural; Mixolidio 7 bemol."
    },
    bullets: {
      pt: ["Jônio = maior; Eólio = menor natural.", "Ênfase em notas características é essencial.", "Muito usados em jazz/rock."],
      en: ["Ionian = major; Aeolian = natural minor.", "Emphasize characteristic tones.", "Widely used in jazz/rock."],
      es: ["Jónico = mayor; Eólico = menor natural.", "Enfatiza notas características.", "Muy usados en jazz/rock."]
    },
    examples: { pt: "Ex.: Ré dórico em Dó maior (mesmas notas).", en: "Example: D Dorian from C major (same notes).", es: "Ej.: Re dórico desde Do mayor (mismas notas)." },
    aliases: ["modos", "modes", "dórico", "dorian", "frígio", "phrygian", "lídio", "lydian", "mixolídio", "mixolydian", "lócrio", "locrian"],
    seeAlso: ["major-scale", "natural-minor"],
    imageUrl: ""
  },

  /* =========================
     INTERVALOS
     ========================= */

  {
    id: "interval-definition",
    category: "intervals",
    title: { pt: "Intervalo (definição)", en: "Interval (definition)", es: "Intervalo (definición)" },
    short: { pt: "Distância entre duas notas (melódica ou harmônica).", en: "Distance between two notes (melodic or harmonic).", es: "Distancia entre dos notas (melódica u armónica)." },
    definition: {
      pt: "<b>Intervalo</b> é a distância entre duas alturas. Pode ser <b>melódico</b> (uma após a outra) ou <b>harmônico</b> (simultâneo). Classifica-se por número (2ª, 3ª…) e qualidade (maior, menor, justo, aumentado, diminuto).",
      en: "<b>Interval</b> is the distance between two pitches. It can be <b>melodic</b> (one after the other) or <b>harmonic</b> (simultaneous). It’s named by size (2nd, 3rd…) and quality (major, minor, perfect, augmented, diminished).",
      es: "<b>Intervalo</b> es la distancia entre dos alturas. Puede ser <b>melódico</b> o <b>armónico</b>. Se nombra por número y cualidad (mayor, menor, justo, aumentado, disminuido)."
    },
    bullets: {
      pt: ["Base para escalas e acordes.", "Qualidade define caráter (consonância/dissonância).", "Inversão muda o número e a qualidade."],
      en: ["Foundation of scales and chords.", "Quality affects consonance/dissonance.", "Inversion changes size and quality."],
      es: ["Base de escalas y acordes.", "La cualidad define consonancia/disonancia.", "La inversión cambia número y cualidad."]
    },
    examples: {
      pt: "Ex.: Dó→Mi é 3ª maior; Dó+Mi juntos é intervalo harmônico.",
      en: "Example: C→E is a major 3rd; C+E together is harmonic interval.",
      es: "Ej.: Do→Mi es 3ª mayor; Do+Mi juntos es armónico."
    },
    aliases: ["intervalo", "interval", "intervalo musical", "harmônico", "melódico", "melodic", "harmonic"],
    seeAlso: ["perfect-fifth", "triad"],
    imageUrl: ""
  },

  {
    id: "perfect-fifth",
    category: "intervals",
    title: { pt: "Quinta Justa", en: "Perfect Fifth", es: "Quinta Justa" },
    short: { pt: "Consonante e estável. Base do círculo de quintas.", en: "Consonant and stable. Basis of circle of fifths.", es: "Consonante y estable. Base del círculo de quintas." },
    definition: {
      pt: "A <b>quinta justa</b> (ex.: Dó→Sol) é um dos intervalos mais estáveis. Estrutural em tríades e em progressões tonais.",
      en: "The <b>perfect fifth</b> (e.g., C→G) is among the most stable intervals. Structural in triads and tonal progressions.",
      es: "La <b>quinta justa</b> (p. ej., Do→Sol) es muy estable. Estructural en tríadas y progresiones tonales."
    },
    bullets: {
      pt: ["Consonância forte.", "Presente em tríades.", "Organiza tonalidades no círculo."],
      en: ["Strong consonance.", "Appears in triads.", "Organizes keys in circle."],
      es: ["Consonancia fuerte.", "Aparece en tríadas.", "Organiza tonalidades en el círculo."]
    },
    examples: { pt: "Ex.: power chord = tônica + quinta.", en: "Example: power chord = root + fifth.", es: "Ej.: power chord = raíz + quinta." },
    aliases: ["quinta justa", "perfect fifth", "P5", "5J", "power chord"],
    seeAlso: ["circle-of-fifths", "triad"],
    imageUrl: ""
  },

  /* =========================
     HARMONIA
     ========================= */

  {
    id: "triad",
    category: "harmony",
    title: { pt: "Tríade", en: "Triad", es: "Tríada" },
    short: { pt: "Acorde de 3 notas: tônica, terça e quinta.", en: "Three-note chord: root, third, fifth.", es: "Acorde de 3 notas: tónica, tercera, quinta." },
    definition: {
      pt: "Uma <b>tríade</b> é formada ao empilhar terças sobre a fundamental. Qualidade: maior, menor, diminuta, aumentada.",
      en: "A <b>triad</b> is built by stacking thirds above a root. Qualities: major, minor, diminished, augmented.",
      es: "Una <b>tríada</b> se forma apilando terceras sobre la raíz. Cualidades: mayor, menor, disminuida, aumentada."
    },
    bullets: {
      pt: ["Maior: 3ª maior + 5ª justa.", "Menor: 3ª menor + 5ª justa.", "Diminuta/Aumentada alteram 5ª."],
      en: ["Major: M3 + P5.", "Minor: m3 + P5.", "Dim/Aug alter the 5th."],
      es: ["Mayor: 3M + 5J.", "Menor: 3m + 5J.", "Dis/Aum alteran la 5ª."]
    },
    examples: { pt: "Ex.: C = C–E–G; Am = A–C–E.", en: "Example: C = C–E–G; Am = A–C–E.", es: "Ej.: Do = Do–Mi–Sol; Lam = La–Do–Mi." },
    aliases: ["tríade", "triad", "tríada", "acorde", "chord"],
    seeAlso: ["diatonic-triads", "perfect-fifth"],
    imageUrl: ""
  },

  {
    id: "diatonic-triads",
    category: "harmony",
    title: { pt: "Tríades Diatônicas", en: "Diatonic Triads", es: "Tríadas Diatónicas" },
    short: { pt: "Tríades em cada grau da escala (I, ii, iii...).", en: "Triads on each scale degree (I, ii, iii...).", es: "Tríadas por grado (I, ii, iii...)." },
    definition: {
      pt: "Formam-se empilhando terças sobre cada grau da escala. Em Dó maior: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° B°.",
      en: "Built by stacking thirds on each scale degree. In C major: I C, ii Dm, iii Em, IV F, V G, vi Am, vii° B°.",
      es: "Se forman apilando terceras. En Do mayor: I Do, ii Rem, iii Mim, IV Fa, V Sol, vi Lam, vii° Si°."
    },
    bullets: {
      pt: ["Base de progressões tonais.", "Define funções (tônica/subdominante/dominante).", "Conecta análise e prática."],
      en: ["Basis of tonal progressions.", "Defines functions (tonic/subdominant/dominant).", "Connects analysis and practice."],
      es: ["Base de progresiones tonales.", "Define funciones.", "Conecta análisis y práctica."]
    },
    examples: { pt: "Ex.: I–V–vi–IV é progressão comum em pop.", en: "Example: I–V–vi–IV is common in pop.", es: "Ej.: I–V–vi–IV es común en pop." },
    aliases: ["campo harmônico", "campo harmonico", "diatonic triads", "tríades diatônicas", "triadas diatonicas"],
    seeAlso: ["major-scale", "triad"],
    imageUrl: ""
  },

  {
    id: "dominant-function",
    category: "harmony",
    title: { pt: "Função Dominante", en: "Dominant Function", es: "Función Dominante" },
    short: { pt: "Tensão que pede resolução na tônica (V, V7, vii°).", en: "Tension that resolves to tonic (V, V7, vii°).", es: "Tensión que resuelve a tónica (V, V7, vii°)." },
    definition: {
      pt: "A <b>função dominante</b> cria tensão e direcionamento para a <b>tônica</b>. Em tonalidade maior: V e V7 são dominantes fortes; vii° também cumpre função dominante por conter a sensível.",
      en: "<b>Dominant function</b> creates tension and direction toward the <b>tonic</b>. In major keys, V and V7 are strong dominants; vii° also functions dominantly due to the leading tone.",
      es: "La <b>función dominante</b> crea tensión hacia la <b>tónica</b>. En mayor, V y V7 son dominantes fuertes; vii° también por la sensible."
    },
    bullets: {
      pt: ["Sensível (7º grau) resolve na tônica.", "Trítono em V7 puxa para resolver.", "Cadências usam dominante → tônica."],
      en: ["Leading tone resolves to tonic.", "Tritone in V7 drives resolution.", "Cadences use dominant → tonic."],
      es: ["La sensible resuelve a tónica.", "El tritono en V7 impulsa resolución.", "Cadencias usan dominante → tónica."]
    },
    examples: { pt: "Ex.: G7 → C (em Dó maior).", en: "Example: G7 → C (in C major).", es: "Ej.: Sol7 → Do (en Do mayor)." },
    aliases: ["dominante", "dominant", "V7", "trítono", "tritone", "sensível", "leading tone"],
    seeAlso: ["harmonic-minor", "circle-of-fifths"],
    imageUrl: ""
  },

  {
    id: "circle-of-fifths",
    category: "harmony",
    title: { pt: "Círculo de Quintas", en: "Circle of Fifths", es: "Círculo de Quintas" },
    short: { pt: "Mapa de tonalidades por quintas. Armaduras e modulações.", en: "Key map by fifths. Signatures and modulation.", es: "Mapa por quintas. Armaduras y modulación." },
    definition: {
      pt: "Organiza tonalidades avançando por quintas. Horário adiciona sustenidos; anti-horário adiciona bemóis. Excelente para entender relações próximas e progressões.",
      en: "Organizes keys by fifths. Clockwise adds sharps; counterclockwise adds flats. Great for understanding close relationships and progressions.",
      es: "Organiza tonalidades por quintas. Horario añade sostenidos; antihorario añade bemoles. Ideal para relaciones cercanas y progresiones."
    },
    bullets: {
      pt: ["Memorizar armaduras.", "Modular para tons vizinhos.", "Entender ii–V–I no jazz."],
      en: ["Memorize key signatures.", "Modulate to nearby keys.", "Understand ii–V–I in jazz."],
      es: ["Memorizar armaduras.", "Modular a tonos vecinos.", "Entender ii–V–I en jazz."]
    },
    examples: { pt: "Ex.: C→G→D→A adiciona 1 sustenido por passo.", en: "Example: C→G→D→A adds one sharp each step.", es: "Ej.: Do→Sol→Re→La añade 1 sostenido por paso." },
    aliases: ["círculo de quintas", "circle of fifths", "armadura", "key signature", "tonalidades"],
    seeAlso: ["key-signature", "perfect-fifth"],
    imageUrl: ""
  },

  /* =========================
     NOTAÇÃO (ponte)
     ========================= */

  {
    id: "key-signature",
    category: "notation",
    title: { pt: "Armadura de Clave", en: "Key Signature", es: "Armadura" },
    short: { pt: "Sustenidos/bemóis fixos no início. Sugere tonalidade.", en: "Fixed sharps/flats at start. Suggests key.", es: "Sostenidos/bemoles fijos. Sugiere tonalidad." },
    definition: {
      pt: "A <b>armadura</b> indica alterações fixas (sustenidos/bemóis) válidas ao longo do trecho. Ajuda leitura e aponta tonalidade (maior ou relativa menor).",
      en: "A <b>key signature</b> indicates fixed sharps/flats for the passage. It helps reading and suggests the key (major or relative minor).",
      es: "La <b>armadura</b> indica alteraciones fijas. Ayuda a leer y sugiere tonalidad (mayor o relativa menor)."
    },
    bullets: {
      pt: ["Ordem fixa: sustenidos (F C G D A E B) / bemóis (B E A D G C F).", "Maior e relativa menor compartilham armadura.", "Círculo de quintas facilita."],
      en: ["Fixed orders: sharps (F C G D A E B) / flats (B E A D G C F).", "Major & relative minor share signature.", "Circle of fifths helps."],
      es: ["Órdenes fijos: sostenidos (F C G D A E B) / bemoles (B E A D G C F).", "Mayor y relativa menor comparten armadura.", "El círculo ayuda."]
    },
    examples: { pt: "Ex.: 2 sustenidos (F#, C#) = Ré maior / Si menor.", en: "Example: 2 sharps (F#, C#) = D major / B minor.", es: "Ej.: 2 sostenidos (Fa#, Do#) = Re mayor / Si menor." },
    aliases: ["armadura", "key signature", "sustenidos", "bemóis", "bemoles", "tonalidade"],
    seeAlso: ["circle-of-fifths", "major-scale", "natural-minor"],
    imageUrl: ""
  },

  /* =========================
     HISTÓRIA (ponte)
     ========================= */

  {
    id: "music-periods",
    category: "history",
    title: { pt: "Períodos Musicais", en: "Musical Periods", es: "Períodos Musicales" },
    short: { pt: "Eras: Medieval → Contemporâneo. Estilo e linguagem mudam no tempo.", en: "Eras: Medieval → Contemporary. Style & language change over time.", es: "Eras: Medieval → Contemporáneo. Cambia el lenguaje musical." },
    definition: {
      pt: "Divisão didática da história: Medieval, Renascimento, Barroco, Clássico, Romântico, Século XX/Contemporâneo. Cada período tem estética, formas e práticas características.",
      en: "A didactic division: Medieval, Renaissance, Baroque, Classical, Romantic, 20th/Contemporary. Each period has characteristic aesthetics, forms and practices.",
      es: "División didáctica: Medieval, Renacimiento, Barroco, Clásico, Romántico, Siglo XX/Contemporáneo. Cada periodo tiene rasgos propios."
    },
    bullets: {
      pt: ["Barroco: contraponto e tonalidade.", "Clássico: forma e equilíbrio.", "Romântico: cromatismo e expansão."],
      en: ["Baroque: counterpoint and tonality.", "Classical: form and balance.", "Romantic: chromaticism and expansion."],
      es: ["Barroco: contrapunto y tonalidad.", "Clásico: forma y equilibrio.", "Romántico: cromatismo y expansión."]
    },
    examples: { pt: "Ex.: fuga (Barroco), sonata (Clássico), poema sinfônico (Romântico).", en: "Example: fugue (Baroque), sonata (Classical), tone poem (Romantic).", es: "Ej.: fuga (Barroco), sonata (Clásico), poema sinfónico (Romántico)." },
    aliases: ["história da música", "music history", "barroco", "classico", "romantico", "renascimento", "medieval"],
    seeAlso: ["sound-basics"],
    imageUrl: ""
  }
];