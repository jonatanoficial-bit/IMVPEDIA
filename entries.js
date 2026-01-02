/* IMVpedia — Dicionário (PT/EN/ES) — ETAPA 3
   ✅ Substitua SEU entries.js inteiro por este arquivo.
   ✅ Agora o dicionário cresceu bastante (leitura + ritmo + harmonia + cifra + escalas/intervalos).
   ✅ Para adicionar mais verbetes depois: copie um item, troque id/category e textos.
*/

window.IMVPEDIA_ENTRIES = [
  /* =========================
     FUNDAMENTOS (conceitos)
     ========================= */
  {
    id: "sound-basics",
    category: "history",
    title: { pt: "Som (conceito)", en: "Sound (concept)", es: "Sonido (concepto)" },
    short: {
      pt: "Vibração que se propaga em um meio e pode ser percebida pela audição.",
      en: "Vibration that propagates through a medium and can be perceived by hearing.",
      es: "Vibración que se propaga en un medio y puede percibirse por el oído."
    },
    definition: {
      pt: "Em música, o <b>som</b> é descrito por quatro pilares: <b>altura</b> (pitch), <b>duração</b> (tempo), <b>intensidade</b> (volume) e <b>timbre</b> (cor). A teoria musical organiza sons no tempo para criar significado, forma e emoção.",
      en: "In music, <b>sound</b> is described by four pillars: <b>pitch</b>, <b>duration</b>, <b>loudness</b>, and <b>timbre</b>. Music theory organizes sound in time to create meaning, form, and emotion.",
      es: "En música, el <b>sonido</b> se describe por cuatro pilares: <b>altura</b>, <b>duración</b>, <b>intensidad</b> y <b>timbre</b>. La teoría organiza sonidos en el tiempo para crear sentido y forma."
    },
    bullets: {
      pt: ["Altura se relaciona à frequência (Hz).", "Timbre envolve harmônicos e envelope.", "Ritmo é organização temporal do som e do silêncio."],
      en: ["Pitch relates to frequency (Hz).", "Timbre involves harmonics and envelope.", "Rhythm is the time-organization of sound and silence."],
      es: ["Altura se relaciona con frecuencia (Hz).", "Timbre incluye armónicos y envolvente.", "Ritmo organiza sonido y silencio en el tiempo."]
    },
    examples: {
      pt: "Ex.: Lá4 = 440 Hz (padrão comum de afinação).",
      en: "Example: A4 = 440 Hz (common tuning standard).",
      es: "Ej.: La4 = 440 Hz (estándar común de afinación)."
    },
    aliases: ["som", "sound", "sonido", "frequência", "frequency", "frecuencia", "timbre", "harmônicos", "harmonics"],
    seeAlso: ["pitch-frequency", "timbre"],
    imageUrl: ""
  },
  {
    id: "pitch-frequency",
    category: "history",
    title: { pt: "Altura e Frequência", en: "Pitch and Frequency", es: "Altura y Frecuencia" },
    short: {
      pt: "Altura é percepção; frequência é a medida física em Hz.",
      en: "Pitch is perception; frequency is the physical measure in Hz.",
      es: "Altura es percepción; frecuencia es la medida física en Hz."
    },
    definition: {
      pt: "<b>Frequência</b> é o número de vibrações por segundo (Hz). <b>Altura</b> é a sensação auditiva produzida por essa frequência. Dobrar a frequência geralmente corresponde a subir uma <b>oitava</b>.",
      en: "<b>Frequency</b> is the number of vibrations per second (Hz). <b>Pitch</b> is the auditory sensation produced by that frequency. Doubling frequency typically equals going up an <b>octave</b>.",
      es: "<b>Frecuencia</b> es el número de vibraciones por segundo (Hz). <b>Altura</b> es la sensación auditiva. Doblar la frecuencia suele equivaler a subir una <b>octava</b>."
    },
    bullets: {
      pt: ["Dobrar Hz → +1 oitava.", "Contexto e timbre influenciam percepção.", "Afinação (A=440) é convenção."],
      en: ["Double Hz → +1 octave.", "Context and timbre influence perception.", "Tuning (A=440) is a convention."],
      es: ["Doblar Hz → +1 octava.", "Contexto y timbre influyen.", "Afinación (La=440) es convención."]
    },
    examples: { pt: "220 Hz (Lá3) → 440 Hz (Lá4) → 880 Hz (Lá5).", en: "220 Hz (A3) → 440 Hz (A4) → 880 Hz (A5).", es: "220 Hz (La3) → 440 Hz (La4) → 880 Hz (La5)." },
    aliases: ["altura", "pitch", "frequência", "frequency", "frecuencia", "hz", "oitava", "octave"],
    seeAlso: ["sound-basics"],
    imageUrl: ""
  },
  {
    id: "timbre",
    category: "history",
    title: { pt: "Timbre", en: "Timbre", es: "Timbre" },
    short: {
      pt: "A ‘cor’ do som: harmônicos + ataque/decay/sustain/release.",
      en: "Sound ‘color’: harmonics + attack/decay/sustain/release.",
      es: "El ‘color’ del sonido: armónicos + ADSR."
    },
    definition: {
      pt: "<b>Timbre</b> é o que faz um mesmo Dó soar diferente no piano e no violino. Depende do espectro de harmônicos, do envelope (ADSR) e da técnica de execução.",
      en: "<b>Timbre</b> is what makes the same C sound different on piano vs violin. It depends on harmonic spectrum, ADSR envelope, and playing technique.",
      es: "El <b>timbre</b> hace que el mismo Do suene distinto en piano y violín. Depende del espectro armónico, ADSR y técnica."
    },
    bullets: {
      pt: ["Mais harmônicos → som mais brilhante.", "Ataque rápido → sensação de ‘pancada’.", "Técnicas mudam timbre (pizzicato, slap, etc.)."],
      en: ["More harmonics → brighter sound.", "Fast attack → more punch.", "Techniques change timbre (pizzicato, slap, etc.)."],
      es: ["Más armónicos → más brillo.", "Ataque rápido → más golpe.", "Técnicas cambian timbre (pizzicato, slap, etc.)."]
    },
    examples: { pt: "Distorção adiciona harmônicos e agressividade.", en: "Distortion adds harmonics and aggression.", es: "La distorsión añade armónicos y agresividad." },
    aliases: ["timbre", "harmônicos", "harmonics", "envelope", "adrs", "adsr"],
    seeAlso: ["sound-basics"],
    imageUrl: ""
  },

  /* =========================
     NOTAÇÃO / LEITURA (ETAPA 3 — GRANDE EXPANSÃO)
     ========================= */
  {
    id: "staff",
    category: "notation",
    title: { pt: "Pauta (Pentagrama)", en: "Staff", es: "Pentagrama" },
    short: { pt: "5 linhas e 4 espaços para escrever alturas.", en: "Five lines and four spaces for writing pitch.", es: "Cinco líneas y cuatro espacios para alturas." },
    definition: {
      pt: "A <b>pauta</b> é o sistema de 5 linhas onde as notas são posicionadas conforme a altura. A <b>clave</b> define quais alturas correspondem a cada linha/espaço. Para notas fora da pauta, usam-se <b>linhas suplementares</b>.",
      en: "The <b>staff</b> is a five-line system where notes are placed by pitch. The <b>clef</b> maps pitches to lines/spaces. Notes outside use <b>ledger lines</b>.",
      es: "El <b>pentagrama</b> tiene cinco líneas. La <b>clave</b> asigna alturas. Fuera del pentagrama se usan <b>líneas adicionales</b>."
    },
    bullets: {
      pt: ["A clave é a ‘chave’ do mapa de alturas.", "Linhas suplementares estendem o registro.", "Base da notação tradicional."],
      en: ["The clef is the pitch map key.", "Ledger lines extend range.", "Foundation of standard notation."],
      es: ["La clave es la llave del mapa.", "Líneas adicionales amplían el registro.", "Base de la notación."]
    },
    examples: { pt: "Notas acima/abaixo usam linhas suplementares.", en: "Notes above/below use ledger lines.", es: "Notas arriba/abajo usan líneas adicionales." },
    aliases: ["pauta", "pentagrama", "staff", "ledger lines", "linhas suplementares", "líneas adicionales"],
    seeAlso: ["clefs"],
    imageUrl: ""
  },
  {
    id: "clefs",
    category: "notation",
    title: { pt: "Claves (Sol, Fá, Dó)", en: "Clefs (Treble, Bass, C)", es: "Claves (Sol, Fa, Do)" },
    short: { pt: "A clave ancora as alturas. Sol e Fá são as mais comuns.", en: "Clefs anchor pitch. Treble and Bass are most common.", es: "Las claves anclan alturas. Sol y Fa son comunes." },
    definition: {
      pt: "A <b>clave</b> define a referência de altura na pauta. A <b>clave de Sol</b> marca o Sol na 2ª linha; a <b>clave de Fá</b> marca o Fá na 4ª linha. A <b>clave de Dó</b> coloca o Dó central em diferentes linhas (alto/tenor).",
      en: "A <b>clef</b> sets a pitch reference. <b>Treble</b> places G on line 2; <b>Bass</b> places F on line 4. <b>C clef</b> places middle C on different lines (alto/tenor).",
      es: "La <b>clave</b> fija una referencia. <b>Sol</b> ubica Sol en la 2ª línea; <b>Fa</b> ubica Fa en la 4ª. <b>Do</b> coloca Do central en varias líneas (alto/tenor)."
    },
    bullets: {
      pt: ["Clave muda a leitura, não o som real.", "Piano costuma usar duas claves (Sol/Fá).", "Claves de Dó aparecem em viola, trombone, etc."],
      en: ["Clef changes reading, not actual sound.", "Piano often uses two clefs (treble/bass).", "C clefs appear in viola, trombone, etc."],
      es: ["La clave cambia lectura, no el sonido.", "Piano usa dos claves.", "Claves de Do aparecen en viola, trombón, etc."]
    },
    examples: { pt: "Violoncelo lê principalmente em Fá e às vezes em tenor.", en: "Cello reads mostly bass and sometimes tenor.", es: "Violonchelo usa Fa y a veces tenor." },
    aliases: ["clave", "clef", "treble", "bass", "alto clef", "tenor clef", "clave de sol", "clave de fá", "clave de do"],
    seeAlso: ["staff"],
    imageUrl: ""
  },
  {
    id: "note-values",
    category: "notation",
    title: { pt: "Figuras (duração)", en: "Note Values", es: "Figuras (duración)" },
    short: { pt: "Semibreve, mínima, semínima, colcheia… e subdivisões.", en: "Whole, half, quarter, eighth… and subdivisions.", es: "Redonda, blanca, negra, corchea… y subdivisiones." },
    definition: {
      pt: "As <b>figuras</b> indicam duração relativa. Proporção: 1 semibreve = 2 mínimas = 4 semínimas = 8 colcheias = 16 semicolcheias (e assim por diante).",
      en: "<b>Note values</b> indicate relative duration. Ratio: 1 whole = 2 halves = 4 quarters = 8 eighths = 16 sixteenths, etc.",
      es: "Las <b>figuras</b> indican duración relativa. Proporción: 1 redonda = 2 blancas = 4 negras = 8 corcheas = 16 semicorcheas."
    },
    bullets: {
      pt: ["O andamento muda o tempo real, não a proporção.", "Feixes (barras) agrupam subdivisões.", "Pontuação e ligaduras somam valores."],
      en: ["Tempo changes real time, not ratio.", "Beams group subdivisions.", "Dots and ties add values."],
      es: ["El tempo cambia el tiempo real, no la proporción.", "Barras agrupan subdivisiones.", "Puntos y ligaduras suman valores."]
    },
    examples: { pt: "2 colcheias = 1 semínima (se a semínima é 1 tempo).", en: "2 eighths = 1 quarter (if quarter is 1 beat).", es: "2 corcheas = 1 negra (si negra es 1 pulso)." },
    aliases: ["figuras", "note values", "duracao", "duração", "redonda", "negra", "semínima", "colcheia", "semicolcheia"],
    seeAlso: ["rests", "dots", "ties", "subdivision"],
    imageUrl: ""
  },
  {
    id: "rests",
    category: "notation",
    title: { pt: "Pausas (silêncios)", en: "Rests", es: "Silencios" },
    short: { pt: "Silêncio também é ritmo: cada figura tem uma pausa.", en: "Silence is rhythm too: each value has a rest.", es: "El silencio también es ritmo: cada figura tiene un silencio." },
    definition: {
      pt: "<b>Pausas</b> são durações sem som. Elas definem respiração musical, articulação e clareza. Contar pausas corretamente é tão importante quanto contar notas.",
      en: "<b>Rests</b> are durations of silence. They shape phrasing, articulation, and clarity. Counting rests is as important as counting notes.",
      es: "Los <b>silencios</b> son duraciones sin sonido. Dan fraseo y claridad. Contarlos es tan importante como contar notas."
    },
    bullets: {
      pt: ["Pausas criam intenção e espaço.", "Pausas podem gerar síncope.", "Conte pausas com metrônomo."],
      en: ["Rests create space and intention.", "Rests can create syncopation.", "Count rests with a metronome."],
      es: ["Crean espacio e intención.", "Pueden crear síncopa.", "Cuenta silencios con metrónomo."]
    },
    examples: { pt: "Pausa de semínima = 1 tempo (se semínima = 1 tempo).", en: "Quarter rest = 1 beat (if quarter = beat).", es: "Silencio de negra = 1 pulso (si negra = pulso)." },
    aliases: ["pausas", "silêncio", "silencio", "rests", "rest"],
    seeAlso: ["note-values", "meter", "syncopation"],
    imageUrl: ""
  },
  {
    id: "dots",
    category: "notation",
    title: { pt: "Ponto de aumento", en: "Dotted Notes", es: "Punto de aumento" },
    short: { pt: "Um ponto soma metade do valor da figura.", en: "A dot adds half the note’s value.", es: "Un punto suma la mitad del valor." },
    definition: {
      pt: "Com <b>1 ponto</b>, a figura passa a valer 1,5×. Com <b>2 pontos</b>, soma-se 1/2 + 1/4 do valor original (1,75×).",
      en: "With <b>1 dot</b>, value becomes 1.5×. With <b>2 dots</b>, add 1/2 + 1/4 of the original (1.75×).",
      es: "Con <b>1 punto</b>, vale 1,5×. Con <b>2 puntos</b>, suma 1/2 + 1/4 (1,75×)."
    },
    bullets: {
      pt: ["Muito comum em 6/8 e ritmos pontuados.", "Ajuda a escrever padrões long-short.", "Não confundir com staccato."],
      en: ["Common in 6/8 and dotted rhythms.", "Useful for long-short patterns.", "Not the same as staccato."],
      es: ["Común en 6/8 y ritmos con puntillo.", "Útil para long-short.", "No es staccato."]
    },
    examples: { pt: "Semínima pontuada = semínima + colcheia.", en: "Dotted quarter = quarter + eighth.", es: "Negra con punto = negra + corchea." },
    aliases: ["ponto", "pontuada", "dotted", "puntillo", "punto de aumento"],
    seeAlso: ["note-values", "ties", "meter"],
    imageUrl: ""
  },
  {
    id: "ties",
    category: "notation",
    title: { pt: "Ligadura de valor", en: "Tie", es: "Ligadura (de valor)" },
    short: { pt: "Une duas notas iguais somando durações.", en: "Connects two same pitches to add durations.", es: "Une dos notas iguales sumando duraciones." },
    definition: {
      pt: "A <b>ligadura de valor</b> conecta notas da <b>mesma altura</b>, somando suas durações. Já a <b>ligadura de fraseado</b> (slur) liga notas diferentes indicando articulação/frase.",
      en: "A <b>tie</b> connects notes of the <b>same pitch</b>, adding durations. A <b>slur</b> connects different pitches for phrasing/articulation.",
      es: "La <b>ligadura</b> une notas de la <b>misma altura</b>, sumando duraciones. El <b>slur</b> une alturas distintas para fraseo."
    },
    bullets: {
      pt: ["Muito usada atravessando a barra de compasso.", "Cria síncope/antecipação.", "Escrita rítmica mais limpa."],
      en: ["Often used across barlines.", "Creates syncopation/anticipation.", "Cleaner rhythm notation."],
      es: ["Se usa cruzando compases.", "Crea síncopa/anticipación.", "Notación más limpia."]
    },
    examples: { pt: "Colcheia ligada à semínima pode ‘puxar’ acento.", en: "An eighth tied to a quarter can ‘pull’ accents.", es: "Corchea ligada a negra puede ‘tirar’ el acento." },
    aliases: ["ligadura", "tie", "ligadura de valor", "slur", "ligadura de fraseado"],
    seeAlso: ["syncopation", "dots"],
    imageUrl: ""
  },
  {
    id: "accidentals",
    category: "notation",
    title: { pt: "Acidentes (♯ ♭ ♮)", en: "Accidentals (♯ ♭ ♮)", es: "Alteraciones (♯ ♭ ♮)" },
    short: { pt: "Sustenido, bemol e natural alteram a nota no compasso.", en: "Sharps, flats, naturals alter notes within the measure.", es: "Sostenidos, bemoles y becuadros alteran notas en el compás." },
    definition: {
      pt: "<b>Acidentes</b> alteram a altura: ♯ sobe 1 semitom, ♭ desce 1 semitom, ♮ cancela alterações. Em notação tradicional, o efeito vale até o fim do <b>compasso</b> (salvo indicação).",
      en: "<b>Accidentals</b> alter pitch: ♯ raises by a semitone, ♭ lowers by a semitone, ♮ cancels. Typically effective until the end of the <b>measure</b>.",
      es: "Las <b>alteraciones</b> cambian la altura: ♯ sube 1 semitono, ♭ baja 1 semitono, ♮ cancela. Suele valer hasta el final del <b>compás</b>."
    },
    bullets: {
      pt: ["Armadura define acidentes fixos.", "Acidente escrito vale até o fim do compasso.", "Enarmonia: nomes diferentes, mesmo som (em temperamento igual)."],
      en: ["Key signature sets fixed accidentals.", "Written accidentals last within the bar.", "Enharmonic: different names, same pitch (equal temperament)."],
      es: ["Armadura fija alteraciones.", "La alteración escrita dura en el compás.", "Enarmonía: nombres distintos, mismo sonido."]
    },
    examples: { pt: "Ex.: Fá# = Fá elevado 1 semitom.", en: "Example: F# is F raised one semitone.", es: "Ej.: Fa# es Fa subido un semitono." },
    aliases: ["acidentes", "accidentals", "alteraciones", "sustenido", "bemol", "natural", "enarmonia", "enharmonic"],
    seeAlso: ["key-signature", "chromatic-scale"],
    imageUrl: ""
  },
  {
    id: "key-signature",
    category: "notation",
    title: { pt: "Armadura de Clave", en: "Key Signature", es: "Armadura" },
    short: { pt: "Sustenidos/bemóis fixos no início. Sugere tonalidade.", en: "Fixed sharps/flats at start. Suggests key.", es: "Sostenidos/bemoles fijos. Sugiere tonalidad." },
    definition: {
      pt: "A <b>armadura</b> indica alterações fixas válidas ao longo do trecho. Ela facilita a leitura e sugere a tonalidade (maior ou relativa menor).",
      en: "A <b>key signature</b> indicates fixed sharps/flats through the passage. It eases reading and suggests the key (major or relative minor).",
      es: "La <b>armadura</b> indica alteraciones fijas. Facilita la lectura y sugiere tonalidad (mayor o relativa menor)."
    },
    bullets: {
      pt: ["Ordem: sustenidos (F C G D A E B) / bemóis (B E A D G C F).", "Maior e relativa menor compartilham armadura.", "Círculo de quintas ajuda a memorizar."],
      en: ["Order: sharps (F C G D A E B) / flats (B E A D G C F).", "Major and relative minor share signature.", "Circle of fifths helps memorization."],
      es: ["Orden: sostenidos (F C G D A E B) / bemoles (B E A D G C F).", "Mayor y relativa menor comparten armadura.", "Círculo de quintas ayuda a memorizar."]
    },
    examples: { pt: "2 sustenidos (F#, C#) → Ré maior / Si menor.", en: "2 sharps (F#, C#) → D major / B minor.", es: "2 sostenidos (Fa#, Do#) → Re mayor / Si menor." },
    aliases: ["armadura", "key signature", "sustenidos", "bemóis", "bemoles", "tonalidade", "key"],
    seeAlso: ["circle-of-fifths", "major-scale", "natural-minor"],
    imageUrl: ""
  },
  {
    id: "tempo",
    category: "rhythm",
    title: { pt: "Andamento (Tempo)", en: "Tempo", es: "Tempo (Andamiento)" },
    short: { pt: "Velocidade do pulso (BPM) e indicações (Allegro, Adagio).", en: "Speed of the beat (BPM) and markings (Allegro, Adagio).", es: "Velocidad del pulso (BPM) e indicaciones (Allegro, Adagio)." },
    definition: {
      pt: "<b>Andamento</b> é a velocidade do pulso, normalmente medida em <b>BPM</b>. Também pode ser indicado por termos (Allegro, Andante, Adagio) e por caracteres (rubato, accelerando).",
      en: "<b>Tempo</b> is the speed of the beat, often measured in <b>BPM</b>. It can also be marked with terms (Allegro, Andante, Adagio) and changes (rubato, accelerando).",
      es: "El <b>tempo</b> es la velocidad del pulso, medida en <b>BPM</b>. También se indica con términos (Allegro, Andante, Adagio) y cambios (rubato, accelerando)."
    },
    bullets: {
      pt: ["BPM define duração real das figuras.", "Mudanças de andamento alteram a sensação.", "Rubato flexibiliza sem ‘quebrar’ o pulso interno."],
      en: ["BPM sets real duration of note values.", "Tempo changes alter feel.", "Rubato bends time without losing internal pulse."],
      es: ["BPM define duración real.", "Cambios alteran la sensación.", "Rubato flexibiliza sin perder pulso interno."]
    },
    examples: { pt: "Ex.: 120 BPM = 120 batidas por minuto.", en: "Example: 120 BPM = 120 beats per minute.", es: "Ej.: 120 BPM = 120 pulsos por minuto." },
    aliases: ["andamento", "tempo", "bpm", "allegro", "adagio", "andante", "rubato", "accelerando", "ritardando"],
    seeAlso: ["meter", "subdivision"],
    imageUrl: ""
  },
  {
    id: "articulation",
    category: "notation",
    title: { pt: "Articulação", en: "Articulation", es: "Articulación" },
    short: { pt: "Como a nota começa/termina: staccato, legato, acentos.", en: "How notes start/end: staccato, legato, accents.", es: "Cómo empieza/termina: staccato, legato, acentos." },
    definition: {
      pt: "<b>Articulação</b> descreve o ‘desenho’ das notas: staccato (curto), legato (ligado), acento (ênfase), tenuto (sustentado). Ela muda o fraseado mesmo com as mesmas alturas e durações.",
      en: "<b>Articulation</b> describes note shaping: staccato (short), legato (connected), accent (emphasis), tenuto (held). It changes phrasing even with the same pitches and rhythms.",
      es: "La <b>articulación</b> describe el ‘molde’ de las notas: staccato, legato, acento, tenuto. Cambia el fraseo con mismas alturas y ritmos."
    },
    bullets: {
      pt: ["Não confundir ligadura de valor (tie) com fraseado (slur).", "Acentos podem reforçar métrica ou criar síncope.", "Articulação é essencial em estilos (jazz, clássico, funk)."],
      en: ["Don’t confuse tie with slur.", "Accents can reinforce meter or create syncopation.", "Articulation is essential across styles."],
      es: ["No confundir tie con slur.", "Acentos refuerzan métrica o crean síncopa.", "Es esencial en estilos."]
    },
    examples: { pt: "Ex.: mesma frase em legato soa ‘cantada’; em staccato soa ‘picada’.", en: "Example: legato feels singing; staccato feels detached.", es: "Ej.: legato suena cantado; staccato suena picado." },
    aliases: ["articulação", "articulation", "articulación", "staccato", "legato", "tenuto", "accent", "acento"],
    seeAlso: ["ties", "syncopation"],
    imageUrl: ""
  },
  {
    id: "dynamics",
    category: "notation",
    title: { pt: "Dinâmica (p, f, cresc.)", en: "Dynamics (p, f, cresc.)", es: "Dinámica (p, f, cresc.)" },
    short: { pt: "Volume e variações: piano, forte, crescendo, decrescendo.", en: "Loudness and changes: piano, forte, crescendo, diminuendo.", es: "Volumen y cambios: piano, forte, crescendo, diminuendo." },
    definition: {
      pt: "<b>Dinâmica</b> indica intensidade: p (piano), f (forte), mf, mp, ff… e variações como <b>crescendo</b> e <b>decrescendo</b>. Em performance, é uma escala de intenções, não números absolutos.",
      en: "<b>Dynamics</b> mark loudness: p, f, mf, mp, ff… plus <b>crescendo</b> and <b>diminuendo</b>. In performance, it’s intention-based, not absolute numbers.",
      es: "La <b>dinámica</b> indica intensidad: p, f, mf, mp, ff… y cambios como <b>crescendo</b> y <b>diminuendo</b>. Es intención, no números absolutos."
    },
    bullets: {
      pt: ["Dinâmica influencia emoção e forma.", "Crescendo pode criar direção harmônica.", "Em gravação, dinâmica também é mix/produção."],
      en: ["Dynamics shape emotion and form.", "Crescendo can reinforce harmonic direction.", "In recording, dynamics also involve mixing/production."],
      es: ["Define emoción y forma.", "Crescendo refuerza dirección armónica.", "En grabación también depende de mezcla/producción."]
    },
    examples: { pt: "Ex.: p → mf → f ao longo do refrão.", en: "Example: p → mf → f through a chorus.", es: "Ej.: p → mf → f durante el estribillo." },
    aliases: ["dinâmica", "dynamics", "dinámica", "piano", "forte", "cresc", "decresc", "diminuendo"],
    seeAlso: ["articulation"],
    imageUrl: ""
  },

  /* =========================
     RITMO / MÉTRICA (ETAPA 3 — EXPANSÃO)
     ========================= */
  {
    id: "meter",
    category: "rhythm",
    title: { pt: "Compasso (Métrica)", en: "Meter (Time Signature)", es: "Compás (Métrica)" },
    short: { pt: "Organiza o pulso: 4/4, 3/4, 6/8…", en: "Groups beats: 4/4, 3/4, 6/8…", es: "Agrupa pulsos: 4/4, 3/4, 6/8…" },
    definition: {
      pt: "O <b>compasso</b> define como os pulsos se agrupam e onde caem os acentos principais. A fórmula indica quantas unidades por compasso e qual figura é a unidade de pulso.",
      en: "<b>Meter</b> defines how beats are grouped and where primary accents fall. The time signature indicates beats per bar and which note value is the beat unit.",
      es: "El <b>compás</b> define cómo se agrupan pulsos y dónde caen acentos. La fórmula indica unidades por compás y la figura unidad de pulso."
    },
    bullets: {
      pt: ["Simples: 2/4, 3/4, 4/4.", "Compostos: 6/8, 9/8, 12/8.", "Complexos: 5/8, 7/8, 11/8 (assimétricos)."],
      en: ["Simple: 2/4, 3/4, 4/4.", "Compound: 6/8, 9/8, 12/8.", "Complex: 5/8, 7/8, 11/8 (asymmetrical)."],
      es: ["Simples: 2/4, 3/4, 4/4.", "Compuestos: 6/8, 9/8, 12/8.", "Complejos: 5/8, 7/8, 11/8 (asimétricos)."]
    },
    examples: { pt: "6/8 costuma sentir ‘2 grandes pulsos’ com subdivisão ternária.", en: "6/8 often feels like two big beats with triple subdivision.", es: "6/8 suele sentirse como dos pulsos grandes con subdivisión ternaria." },
    aliases: ["compasso", "métrica", "meter", "time signature", "compás", "metrica"],
    seeAlso: ["subdivision", "polyrhythm", "hemiola"],
    imageUrl: ""
  },
  {
    id: "subdivision",
    category: "rhythm",
    title: { pt: "Subdivisão", en: "Subdivision", es: "Subdivisión" },
    short: { pt: "Divide o pulso: binário, ternário (tercinas) etc.", en: "Splits the beat: duple, triple (triplets) etc.", es: "Divide el pulso: binario, ternario (tresillos) etc." },
    definition: {
      pt: "<b>Subdivisão</b> é como você particiona cada tempo. Subdivisão clara é a base do groove e da precisão (principalmente com metrônomo).",
      en: "<b>Subdivision</b> is how you partition each beat. Clear subdivision is the foundation of groove and precision (especially with a metronome).",
      es: "La <b>subdivisión</b> es cómo partes cada pulso. Es la base del groove y la precisión (con metrónomo)."
    },
    bullets: {
      pt: ["Binária: colcheias em 4/4 (‘1 e 2 e…’).", "Quaternária: semicolcheias (‘1 e & a’).", "Ternária: tercinas (‘1-trip-let’)."],
      en: ["Duple: eighths in 4/4 (‘1 & 2 &…’).", "Quadruple: sixteenths (‘1 e & a’).", "Triple: triplets (‘1-trip-let’)."],
      es: ["Binaria: corcheas (‘1 y 2 y…’).", "Cuaternaria: semicorcheas (‘1 e & a’).", "Ternaria: tresillos (‘1-trip-let’)."]
    },
    examples: { pt: "Treinar subdivisão falando em voz alta estabiliza o tempo.", en: "Speaking subdivisions out loud stabilizes time.", es: "Decir subdivisiones en voz alta estabiliza el tempo." },
    aliases: ["subdivisão", "subdivision", "subdivisión", "tercina", "triplet", "tresillo", "swing"],
    seeAlso: ["tempo", "syncopation", "tuplet"],
    imageUrl: ""
  },
  {
    id: "syncopation",
    category: "rhythm",
    title: { pt: "Síncope", en: "Syncopation", es: "Síncopa" },
    short: { pt: "Acento em partes fracas/contratempos. Groove e tensão.", en: "Accents on weak beats/offbeats. Groove and tension.", es: "Acentos en partes débiles/contratiempos. Groove y tensión." },
    definition: {
      pt: "A <b>síncope</b> acontece quando o acento cai em lugares ‘inesperados’ (contratempos ou subdivisões fracas). Pode ser gerada por ligaduras, antecipações, atrasos, pausas e acentos deslocados.",
      en: "<b>Syncopation</b> happens when accents land in less expected places (offbeats/weak subdivisions). It can be created by ties, anticipations, delays, rests, and displaced accents.",
      es: "La <b>síncopa</b> ocurre cuando el acento cae en lugares ‘inesperados’ (contratiempos/subdivisiones débiles). Se crea con ligaduras, anticipaciones, retrasos, silencios y acentos desplazados."
    },
    bullets: {
      pt: ["Síncope precisa de pulso/subdivisão firmes.", "Muito comum em samba, funk, jazz, pop.", "Pode ‘empurrar’ a música pra frente."],
      en: ["Syncopation needs solid pulse/subdivision.", "Common in samba, funk, jazz, pop.", "Can create forward motion."],
      es: ["Necesita pulso/subdivisión sólidos.", "Común en samba, funk, jazz, pop.", "Puede impulsar la música."]
    },
    examples: { pt: "Acentuar o ‘e’ do tempo (‘1 <b>e</b> 2 e…’) ou ligar fraco→forte.", en: "Accent the ‘&’ or tie weak→strong.", es: "Acentuar el ‘y’ o ligar débil→fuerte." },
    aliases: ["síncope", "syncopation", "síncopa", "contratempo", "offbeat", "contratiempo"],
    seeAlso: ["ties", "rests", "subdivision"],
    imageUrl: ""
  },
  {
    id: "tuplet",
    category: "rhythm",
    title: { pt: "Quiálteras (Tercinas etc.)", en: "Tuplets (Triplets etc.)", es: "Tresillos (y otros)" },
    short: { pt: "Dividir um tempo em partes ‘fora do padrão’ (3 no lugar de 2, etc.).", en: "Split time into ‘non-standard’ parts (3 in place of 2, etc.).", es: "Dividir el tiempo en partes ‘no estándar’ (3 en lugar de 2, etc.)." },
    definition: {
      pt: "<b>Quiálteras</b> são grupos rítmicos que repartem um espaço de tempo em um número diferente do esperado. A mais comum é a <b>tercina</b> (3 notas no espaço de 2).",
      en: "<b>Tuplets</b> are rhythmic groupings that divide a time-span into a different number than expected. The most common is the <b>triplet</b> (3 in the space of 2).",
      es: "Los <b>tresillos/tupletas</b> dividen un espacio temporal en un número distinto al esperado. El más común es el <b>tresillo</b> (3 en el lugar de 2)."
    },
    bullets: {
      pt: ["Tercina: ‘1-trip-let’.", "Também existem quintinas, septinas, etc.", "Em swing, tercinas ajudam a sentir a ‘colcheia swingada’."],
      en: ["Triplet feel: ‘1-trip-let’.", "Also quintuplets, septuplets, etc.", "In swing, triplets help feel swung eighths."],
      es: ["Tresillo: ‘1-trip-let’.", "También quintillos, septillos, etc.", "En swing, ayuda a sentir corchea swing."]
    },
    examples: { pt: "Ex.: 3 colcheias em tercina ocupam 1 tempo (em 4/4).", en: "Example: 3 triplet eighths fill one beat (in 4/4).", es: "Ej.: 3 corcheas en tresillo llenan 1 pulso (en 4/4)." },
    aliases: ["quiáltera", "tuplet", "tercina", "triplet", "tresillo", "quintina", "quintuplet"],
    seeAlso: ["subdivision", "swing"],
    imageUrl: ""
  },
  {
    id: "swing",
    category: "rhythm",
    title: { pt: "Swing (feel)", en: "Swing (feel)", es: "Swing (feel)" },
    short: { pt: "Interpretação ‘long-short’ das colcheias; sensação de balanço.", en: "Long-short interpretation of eighths; a bouncing feel.", es: "Interpretación long-short de corcheas; sensación de balanceo." },
    definition: {
      pt: "<b>Swing</b> é uma forma de interpretar subdivisões, especialmente colcheias, aproximando-as de uma sensação ternária (como tercinas: longo-curto). A quantidade de swing varia com estilo, andamento e tradição.",
      en: "<b>Swing</b> is a subdivision interpretation, especially of eighths, leaning toward a triplet-like feel (long-short). The amount varies by style, tempo, and tradition.",
      es: "<b>Swing</b> es una interpretación de subdivisión (corcheas) con sensación ternaria (largo-corto). La cantidad varía según estilo y tempo."
    },
    bullets: {
      pt: ["Swing não é só ‘ritmo’: é linguagem.", "No jazz, swing é central.", "Em andamentos muito rápidos, swing tende a ‘endireitar’."],
      en: ["Swing is language, not just rhythm.", "Central in jazz.", "At very fast tempos, swing often straightens."],
      es: ["Es lenguaje, no solo ritmo.", "Central en jazz.", "A tempos rápidos, suele enderezarse."]
    },
    examples: { pt: "Ex.: colcheias em swing soam como ‘tercina sem a do meio’ (aproximação).", en: "Example: swung eighths approximate ‘triplet without the middle’ (roughly).", es: "Ej.: corcheas swing ≈ tresillo sin la del medio (aprox.)." },
    aliases: ["swing", "shuffle", "balanço", "groove", "triplet feel"],
    seeAlso: ["tuplet", "subdivision"],
    imageUrl: ""
  },
  {
    id: "hemiola",
    category: "rhythm",
    title: { pt: "Hemiola", en: "Hemiola", es: "Hemiola" },
    short: { pt: "Sensação de 3 sobre 2 (ou 2 sobre 3) por acentuação.", en: "3-over-2 (or 2-over-3) feel via accenting.", es: "Sensación 3 sobre 2 (o 2 sobre 3) por acentos." },
    definition: {
      pt: "<b>Hemiola</b> é um efeito rítmico em que a acentuação sugere outra organização métrica (ex.: em 3/4, acentos a cada 2 tempos criam sensação de 2/4 por um momento).",
      en: "<b>Hemiola</b> is a rhythmic effect where accenting suggests a different metric grouping (e.g., in 3/4, accents every two beats imply 2/4 briefly).",
      es: "<b>Hemiola</b> es un efecto donde los acentos sugieren otra métrica (p. ej., en 3/4 acentuar cada 2 pulsos sugiere 2/4 momentáneamente)."
    },
    bullets: {
      pt: ["Muito comum no barroco e em música latina.", "Pode ser escrita ou interpretada.", "Cria tensão e ‘virada’."],
      en: ["Common in Baroque and Latin music.", "Can be written or performed.", "Creates tension and a turn."],
      es: ["Común en barroco y música latina.", "Puede ser escrita o interpretada.", "Crea tensión y giro."]
    },
    examples: { pt: "Ex.: em 3/4, sentir ‘1-2 | 1-2 | 1-2’ por 3 compassos.", en: "Example: in 3/4, feel ‘1-2 | 1-2 | 1-2’ across 3 bars.", es: "Ej.: en 3/4, sentir ‘1-2 | 1-2 | 1-2’ en 3 compases." },
    aliases: ["hemiola", "3 sobre 2", "3:2", "polirritmia leve"],
    seeAlso: ["polyrhythm", "meter"],
    imageUrl: ""
  },
  {
    id: "polyrhythm",
    category: "rhythm",
    title: { pt: "Polirritmia", en: "Polyrhythm", es: "Polirritmia" },
    short: { pt: "Dois (ou mais) padrões rítmicos diferentes ao mesmo tempo (3:2, 4:3…).", en: "Two or more different rhythmic patterns simultaneously (3:2, 4:3…).", es: "Dos o más patrones simultáneos (3:2, 4:3…)."},
    definition: {
      pt: "<b>Polirritmia</b> ocorre quando padrões com subdivisões diferentes coexistem. Ex.: 3:2 significa ‘3 ataques’ no mesmo espaço em que outro padrão faz ‘2’ (mesma duração total).",
      en: "<b>Polyrhythm</b> happens when patterns with different subdivisions coexist. Example: 3:2 means ‘3 attacks’ in the same time another pattern plays ‘2’ (same total span).",
      es: "<b>Polirritmia</b> ocurre cuando conviven subdivisiones distintas. Ej.: 3:2 = ‘3 ataques’ en el mismo tiempo que otro hace ‘2’."
    },
    bullets: {
      pt: ["Base em música africana e muitas tradições.", "Exige subdivisão interna estável.", "Pode ser interpretada sem mudar o compasso escrito."],
      en: ["Core in African music and many traditions.", "Requires stable internal subdivision.", "Can be performed without changing written meter."],
      es: ["Base en música africana y muchas tradiciones.", "Requiere subdivisión interna estable.", "Puede interpretarse sin cambiar el compás escrito."]
    },
    examples: { pt: "Ex.: bater palmas em 2 enquanto canta 3 no mesmo espaço.", en: "Example: clap 2 while singing 3 in the same span.", es: "Ej.: palmear 2 mientras cantas 3 en el mismo tiempo." },
    aliases: ["polirritmia", "polyrhythm", "polirritmia", "3:2", "4:3", "5:4"],
    seeAlso: ["tuplet", "hemiola"],
    imageUrl: ""
  },

  /* =========================
     ESCALAS (ETAPA 3 — EXPANSÃO)
     ========================= */
  {
    id: "major-scale",
    category: "scales",
    title: { pt: "Escala Maior", en: "Major Scale", es: "Escala Mayor" },
    short: { pt: "Padrão T–T–S–T–T–T–S. Base da tonalidade maior.", en: "W–W–H–W–W–W–H. Foundation of major keys.", es: "T–T–S–T–T–T–S. Base de tonalidades mayores." },
    definition: {
      pt: "A <b>escala maior</b> tem 7 notas e organiza graus e funções tonais. Padrão: <b>T–T–S–T–T–T–S</b>.",
      en: "The <b>major scale</b> has 7 notes and organizes degrees and tonal functions. Pattern: <b>W–W–H–W–W–W–H</b>.",
      es: "La <b>escala mayor</b> tiene 7 notas y organiza grados y funciones tonales. Patrón: <b>T–T–S–T–T–T–S</b>."
    },
    bullets: {
      pt: ["Base do campo harmônico diatônico.", "Relativa menor compartilha armadura.", "Fundamento para melodias tonais."],
      en: ["Basis of diatonic harmony.", "Relative minor shares signature.", "Foundation for tonal melodies."],
      es: ["Base de armonía diatónica.", "Relativa menor comparte armadura.", "Fundamento de melodías tonales."]
    },
    examples: { pt: "Dó maior = Dó–Ré–Mi–Fá–Sol–Lá–Si.", en: "C major = C–D–E–F–G–A–B.", es: "Do mayor = Do–Re–Mi–Fa–Sol–La–Si." },
    aliases: ["escala maior", "major scale", "escala mayor", "TTSTTTS", "WWHWWWH", "diatônica", "diatonica"],
    seeAlso: ["natural-minor", "modes", "diatonic-triads", "circle-of-fifths"],
    imageUrl: ""
  },
  {
    id: "natural-minor",
    category: "scales",
    title: { pt: "Escala Menor Natural", en: "Natural Minor Scale", es: "Escala Menor Natural" },
    short: { pt: "Modo eólio: T–S–T–T–S–T–T.", en: "Aeolian: W–H–W–W–H–W–W.", es: "Eólico: T–S–T–T–S–T–T." },
    definition: {
      pt: "A <b>menor natural</b> (eólio) é a forma básica do modo menor. Ela não eleva 6º e 7º graus; por isso, a dominante pode soar menos ‘forte’ do que no maior.",
      en: "<b>Natural minor</b> (Aeolian) is the basic minor form. It doesn’t raise 6th/7th, so the dominant can feel less strong than in major.",
      es: "La <b>menor natural</b> (eólico) es la forma menor básica. No eleva 6º/7º, por eso la dominante puede sentirse menos fuerte."
    },
    bullets: {
      pt: ["Relativa maior compartilha as mesmas notas.", "Base para menor harmônica e melódica.", "Muito usada em pop/rock."],
      en: ["Relative major shares the same notes.", "Basis for harmonic/melodic minor.", "Common in pop/rock."],
      es: ["Relativa mayor comparte notas.", "Base para menor armónica/melódica.", "Común en pop/rock."]
    },
    examples: { pt: "Lá menor = Lá–Si–Dó–Ré–Mi–Fá–Sol.", en: "A minor = A–B–C–D–E–F–G.", es: "La menor = La–Si–Do–Re–Mi–Fa–Sol." },
    aliases: ["menor natural", "natural minor", "aeolian", "eólio", "eolico"],
    seeAlso: ["major-scale", "harmonic-minor", "melodic-minor"],
    imageUrl: ""
  },
  {
    id: "harmonic-minor",
    category: "scales",
    title: { pt: "Escala Menor Harmônica", en: "Harmonic Minor", es: "Menor Armónica" },
    short: { pt: "Menor com 7º grau elevado (sensível).", en: "Minor with raised 7th (leading tone).", es: "Menor con 7º elevado (sensible)." },
    definition: {
      pt: "A <b>menor harmônica</b> eleva o 7º grau para criar a <b>sensível</b> e fortalecer a dominante (V7). Isso cria uma 2ª aumentada entre 6º e 7º graus (cor característica).",
      en: "<b>Harmonic minor</b> raises the 7th degree to create a <b>leading tone</b> and strengthen the dominant (V7). This creates an augmented 2nd between degrees 6 and 7 (signature color).",
      es: "La <b>menor armónica</b> eleva el 7º para crear <b>sensible</b> y fortalecer dominante (V7). Crea 2ª aumentada entre 6 y 7 (color típico)."
    },
    bullets: {
      pt: ["Domina em tonalidade menor (cadências fortes).", "Muito usada em clássico/flamenco.", "Gera modos úteis (ex.: frígio dominante)."],
      en: ["Strengthens minor-key cadences.", "Common in classical/flamenco.", "Generates useful modes (e.g., Phrygian dominant)."],
      es: ["Fortalece cadencias en menor.", "Común en clásica/flamenco.", "Genera modos útiles (p. ej., frigio dominante)."]
    },
    examples: { pt: "Lá menor harmônica = Lá–Si–Dó–Ré–Mi–Fá–Sol#.", en: "A harmonic minor = A–B–C–D–E–F–G#.", es: "La menor armónica = La–Si–Do–Re–Mi–Fa–Sol#." },
    aliases: ["menor harmônica", "harmonic minor", "menor armónica", "sensível", "leading tone"],
    seeAlso: ["dominant-function", "natural-minor"],
    imageUrl: ""
  },
  {
    id: "melodic-minor",
    category: "scales",
    title: { pt: "Escala Menor Melódica", en: "Melodic Minor", es: "Menor Melódica" },
    short: { pt: "Clássico: sobe com 6/7 elevados; jazz: forma única.", en: "Classical: raise 6/7 ascending; jazz: single form.", es: "Clásico: sube con 6/7 elevadas; jazz: forma única." },
    definition: {
      pt: "A <b>menor melódica</b> evita a 2ª aumentada da menor harmônica. No jazz, é comum usar a forma ‘jazz minor’ (mesma na subida e descida), gerando muitos modos modernos.",
      en: "<b>Melodic minor</b> avoids harmonic minor’s augmented 2nd. In jazz, the ‘jazz minor’ single form is common, generating many modern modes.",
      es: "La <b>menor melódica</b> evita la 2ª aumentada. En jazz se usa como forma única (‘jazz minor’), generando modos modernos."
    },
    bullets: {
      pt: ["Muito usada sobre acordes maj7#11, alt, etc.", "Base de escalas alteradas (por modos).", "Cria sonoridade moderna."],
      en: ["Used over maj7#11, alt, etc. (via modes).", "Basis for altered sounds (via modes).", "Modern color."],
      es: ["Usada sobre maj7#11, alt, etc. (por modos).", "Base para sonidos alterados.", "Color moderno."]
    },
    examples: { pt: "Lá menor melódica = Lá–Si–Dó–Ré–Mi–Fá#–Sol#.", en: "A melodic minor = A–B–C–D–E–F#–G#.", es: "La menor melódica = La–Si–Do–Re–Mi–Fa#–Sol#." },
    aliases: ["menor melódica", "melodic minor", "jazz minor", "menor melodica"],
    seeAlso: ["harmonic-minor", "modes"],
    imageUrl: ""
  },
  {
    id: "pentatonic-major",
    category: "scales",
    title: { pt: "Pentatônica Maior", en: "Major Pentatonic", es: "Pentatónica Mayor" },
    short: { pt: "5 notas da maior: 1–2–3–5–6. Muito ‘limpa’ e cantável.", en: "5 notes: 1–2–3–5–6. Clean and singable.", es: "5 notas: 1–2–3–5–6. Limpia y cantable." },
    definition: {
      pt: "A <b>pentatônica maior</b> remove os graus 4 e 7 da escala maior, reduzindo semitons e evitando tensão forte. É muito usada em melodias populares e improviso.",
      en: "The <b>major pentatonic</b> removes degrees 4 and 7 from the major scale, reducing semitones and strong tension. Widely used in popular melodies and improvisation.",
      es: "La <b>pentatónica mayor</b> elimina grados 4 y 7 de la mayor, reduciendo semitonos y tensión. Muy usada en melodías e improvisación."
    },
    bullets: {
      pt: ["Soa ‘aberta’ e universal.", "Ótima para improviso iniciante.", "Combina com acordes I, IV, V e vi."],
      en: ["Open, universal sound.", "Great for beginner improvisation.", "Fits well over I, IV, V, vi."],
      es: ["Sonido abierto y universal.", "Ideal para improvisación inicial.", "Encaja con I, IV, V y vi."]
    },
    examples: { pt: "C pentatônica maior: C–D–E–G–A.", en: "C major pentatonic: C–D–E–G–A.", es: "Do pentatónica mayor: Do–Re–Mi–Sol–La." },
    aliases: ["pentatônica maior", "major pentatonic", "pentatónica mayor", "1 2 3 5 6"],
    seeAlso: ["major-scale", "pentatonic-minor"],
    imageUrl: ""
  },
  {
    id: "pentatonic-minor",
    category: "scales",
    title: { pt: "Pentatônica Menor", en: "Minor Pentatonic", es: "Pentatónica Menor" },
    short: { pt: "5 notas: 1–b3–4–5–b7. Base do rock/blues.", en: "5 notes: 1–b3–4–5–b7. Rock/blues staple.", es: "5 notas: 1–b3–4–5–b7. Base del rock/blues." },
    definition: {
      pt: "A <b>pentatônica menor</b> é extremamente usada em rock, blues e pop. Funciona bem sobre acordes menores e também como ‘cor’ sobre progressões maiores (dependendo do contexto).",
      en: "<b>Minor pentatonic</b> is widely used in rock, blues, and pop. It works over minor chords and can color major progressions depending on context.",
      es: "La <b>pentatónica menor</b> se usa mucho en rock, blues y pop. Funciona sobre acordes menores y puede colorear progresiones mayores según contexto."
    },
    bullets: {
      pt: ["Excelente para fraseado simples e expressivo.", "Combina com bends e blue notes.", "Pode ‘misturar’ com a blues scale."],
      en: ["Great for expressive phrasing.", "Pairs well with bends and blue notes.", "Can blend with blues scale."],
      es: ["Ideal para fraseo expresivo.", "Va bien con bends y blue notes.", "Se mezcla con escala blues."]
    },
    examples: { pt: "A pentatônica menor: A–C–D–E–G.", en: "A minor pentatonic: A–C–D–E–G.", es: "La pentatónica menor: La–Do–Re–Mi–Sol." },
    aliases: ["pentatônica menor", "minor pentatonic", "pentatónica menor", "1 b3 4 5 b7"],
    seeAlso: ["blues-scale", "natural-minor"],
    imageUrl: ""
  },
  {
    id: "blues-scale",
    category: "scales",
    title: { pt: "Escala Blues", en: "Blues Scale", es: "Escala Blues" },
    short: { pt: "Pentatônica menor + ‘blue note’ (b5).", en: "Minor pentatonic + blue note (b5).", es: "Pentatónica menor + blue note (b5)." },
    definition: {
      pt: "A <b>escala blues</b> geralmente é a pentatônica menor com a nota adicional <b>b5</b> (trítono). Ela cria a tensão característica do blues e do rock.",
      en: "The <b>blues scale</b> is typically minor pentatonic plus the <b>b5</b> (tritone). It creates the signature blues/rock tension.",
      es: "La <b>escala blues</b> suele ser pentatónica menor más la nota <b>b5</b> (tritono). Crea la tensión típica del blues/rock."
    },
    bullets: {
      pt: ["Blue notes variam por tradição (b3 ‘entre’ maior/menor).", "Muito expressiva com microvariações (bends).", "Funciona sobre blues I–IV–V."],
      en: ["Blue notes vary by tradition (b3 between major/minor).", "Very expressive with micro-bends.", "Works over blues I–IV–V."],
      es: ["Blue notes varían por tradición (b3 entre mayor/menor).", "Muy expresiva con bends.", "Funciona sobre blues I–IV–V."]
    },
    examples: { pt: "A blues: A–C–D–Eb–E–G.", en: "A blues: A–C–D–Eb–E–G.", es: "La blues: La–Do–Re–Mib–Mi–Sol." },
    aliases: ["escala blues", "blues scale", "blue note", "trítono", "b5"],
    seeAlso: ["pentatonic-minor", "tritone"],
    imageUrl: ""
  },
  {
    id: "chromatic-scale",
    category: "scales",
    title: { pt: "Escala Cromática", en: "Chromatic Scale", es: "Escala Cromática" },
    short: { pt: "Todas as 12 notas (semitons) dentro da oitava.", en: "All 12 semitones within the octave.", es: "Todos los 12 semitonos dentro de la octava." },
    definition: {
      pt: "A <b>escala cromática</b> contém todos os semitons. É base para entender alterações, enarmonia, tensões e cromatismo melódico/harmônico.",
      en: "The <b>chromatic scale</b> contains all semitones. It’s fundamental for accidentals, enharmonics, tensions, and melodic/harmonic chromaticism.",
      es: "La <b>escala cromática</b> contiene todos los semitonos. Es base para alteraciones, enarmonía y cromatismo."
    },
    bullets: {
      pt: ["No temperamento igual: 12 notas equidistantes.", "Cromatismo = uso de notas fora da diatônica.", "Ajuda a explicar acordes alterados."],
      en: ["In equal temperament: 12 equally spaced pitches.", "Chromaticism = notes outside the diatonic set.", "Helps explain altered chords."],
      es: ["En temperamento igual: 12 notas.", "Cromatismo = notas fuera de la diatónica.", "Ayuda a explicar acordes alterados."]
    },
    examples: { pt: "C cromática: C–C#–D–D#–E–F–F#–G–G#–A–A#–B.", en: "C chromatic: C–C#–D–D#–E–F–F#–G–G#–A–A#–B.", es: "Do cromática: Do–Do#–Re–Re#–Mi–Fa–Fa#–Sol–Sol#–La–La#–Si." },
    aliases: ["cromática", "chromatic", "escala cromática", "12 semitons", "12 semitonos"],
    seeAlso: ["accidentals", "tritone"],
    imageUrl: ""
  },
  {
    id: "modes",
    category: "scales",
    title: { pt: "Modos Gregos", en: "Greek Modes", es: "Modos Griegos" },
    short: { pt: "Mesmo conjunto de notas, centro tonal diferente (cor modal).", en: "Same notes, different center (modal color).", es: "Mismas notas, centro distinto (color modal)." },
    definition: {
      pt: "<b>Modos</b> são variações de uma escala quando você muda a nota de repouso. Cada modo tem ‘notas características’ que definem a cor (ex.: Dórico tem 6 maior; Mixolídio tem 7 menor).",
      en: "<b>Modes</b> are scale variations by shifting the tonal center. Each mode has characteristic tones (e.g., Dorian has natural 6; Mixolydian has flat 7).",
      es: "Los <b>modos</b> cambian el centro tonal. Cada modo tiene notas características (p. ej., dórico 6 natural; mixolidio 7 bemol)."
    },
    bullets: {
      pt: ["Jônio = maior; Eólio = menor natural.", "Cor modal depende de centro + notas características.", "Muito usados em jazz/rock e trilhas."],
      en: ["Ionian = major; Aeolian = natural minor.", "Modal color depends on center + characteristic tones.", "Common in jazz/rock and film scoring."],
      es: ["Jónico = mayor; Eólico = menor natural.", "El color depende del centro + notas.", "Comunes en jazz/rock y cine."]
    },
    examples: { pt: "Em Dó maior: Ré dórico usa as mesmas notas, centro em Ré.", en: "In C major: D Dorian uses same notes, centered on D.", es: "En Do mayor: Re dórico mismas notas, centro en Re." },
    aliases: ["modos", "modes", "dórico", "dorian", "frígio", "phrygian", "lídio", "lydian", "mixolídio", "mixolydian", "lócrio", "locrian"],
    seeAlso: ["major-scale", "natural-minor"],
    imageUrl: ""
  },

  /* =========================
     INTERVALOS (ETAPA 3 — EXPANSÃO)
     ========================= */
  {
    id: "interval-definition",
    category: "intervals",
    title: { pt: "Intervalo (definição)", en: "Interval (definition)", es: "Intervalo (definición)" },
    short: { pt: "Distância entre duas notas (melódica ou harmônica).", en: "Distance between two notes (melodic or harmonic).", es: "Distancia entre dos notas (melódica o armónica)." },
    definition: {
      pt: "<b>Intervalo</b> é a distância entre duas alturas. Nomeia-se por <b>número</b> (2ª, 3ª…) e <b>qualidade</b> (maior, menor, justo, aumentado, diminuto). Intervalos são a base de escalas e acordes.",
      en: "<b>Interval</b> is the distance between two pitches. It’s named by <b>size</b> (2nd, 3rd…) and <b>quality</b> (major, minor, perfect, augmented, diminished). Intervals are the foundation of scales and chords.",
      es: "<b>Intervalo</b> es la distancia entre dos alturas. Se nombra por <b>número</b> y <b>cualidad</b> (mayor, menor, justo, aumentado, disminuido). Es base de escalas y acordes."
    },
    bullets: {
      pt: ["Melódico: notas em sequência. Harmônico: simultâneas.", "Consonância/dissonância dependem do contexto.", "Inversão: soma 9 (ex.: 3ª ↔ 6ª)."],
      en: ["Melodic: sequential notes. Harmonic: simultaneous.", "Consonance/dissonance depend on context.", "Inversion: sums to 9 (e.g., 3rd ↔ 6th)."],
      es: ["Melódico: en secuencia. Armónico: simultáneo.", "Consonancia/disonancia dependen del contexto.", "Inversión: suma 9 (3ª ↔ 6ª)."]
    },
    examples: { pt: "Dó→Mi = 3ª maior; Dó→Mib = 3ª menor.", en: "C→E = major 3rd; C→Eb = minor 3rd.", es: "Do→Mi = 3ª mayor; Do→Mib = 3ª menor." },
    aliases: ["intervalo", "interval", "intervalo musical", "inversão", "inversion", "qualidade", "quality"],
    seeAlso: ["triad", "tritone", "perfect-fifth"],
    imageUrl: ""
  },
  {
    id: "perfect-fifth",
    category: "intervals",
    title: { pt: "Quinta Justa", en: "Perfect Fifth", es: "Quinta Justa" },
    short: { pt: "Consonante e estável. Base do círculo de quintas.", en: "Consonant and stable. Basis of circle of fifths.", es: "Consonante y estable. Base del círculo de quintas." },
    definition: {
      pt: "A <b>quinta justa</b> (ex.: Dó→Sol) é um dos intervalos mais estáveis e estruturais. Aparece em tríades, power chords e na organização tonal.",
      en: "The <b>perfect fifth</b> (e.g., C→G) is among the most stable, structural intervals. It appears in triads, power chords, and tonal organization.",
      es: "La <b>quinta justa</b> (p. ej., Do→Sol) es muy estable y estructural. Aparece en tríadas, power chords y organización tonal."
    },
    bullets: {
      pt: ["Consonância forte.", "Estrutura básica de acordes.", "Organiza tonalidades (círculo)."],
      en: ["Strong consonance.", "Basic chord structure.", "Organizes keys (circle)."],
      es: ["Consonancia fuerte.", "Estructura de acordes.", "Organiza tonalidades (círculo)."]
    },
    examples: { pt: "Power chord: 1–5 (às vezes +8).", en: "Power chord: 1–5 (sometimes +8).", es: "Power chord: 1–5 (a veces +8)." },
    aliases: ["quinta justa", "perfect fifth", "P5", "5J", "power chord"],
    seeAlso: ["circle-of-fifths", "triad"],
    imageUrl: ""
  },
  {
    id: "tritone",
    category: "intervals",
    title: { pt: "Trítono", en: "Tritone", es: "Tritono" },
    short: { pt: "Intervalo de 3 tons (6 semitons): b5 / #4. Tensão forte.", en: "Three whole tones (6 semitones): b5 / #4. Strong tension.", es: "Tres tonos (6 semitonos): b5 / #4. Fuerte tensión." },
    definition: {
      pt: "O <b>trítono</b> é um intervalo muito instável (6 semitons). Em harmonia tonal, ele é crucial no V7: as notas 3ª e 7ª formam um trítono que tende a resolver por movimento contrário.",
      en: "The <b>tritone</b> is a highly unstable interval (6 semitones). In tonal harmony it’s crucial in V7: the 3rd and 7th form a tritone that tends to resolve by contrary motion.",
      es: "El <b>tritono</b> es muy inestable (6 semitonos). En armonía tonal es clave en V7: la 3ª y 7ª forman un tritono que tiende a resolver por movimiento contrario."
    },
    bullets: {
      pt: ["Também chamado ‘diabolus’ historicamente (mito popular).", "Base da substituição por trítono no jazz.", "Aparece como b5 na escala blues."],
      en: ["Historically nicknamed ‘diabolus’ (popular myth).", "Basis of tritone substitution in jazz.", "Appears as b5 in blues scale."],
      es: ["Apodo histórico ‘diabolus’ (mito popular).", "Base de sustitución por tritono en jazz.", "Aparece como b5 en escala blues."]
    },
    examples: { pt: "Em C: F↔B é trítono (#4/b5).", en: "In C: F↔B is a tritone (#4/b5).", es: "En Do: Fa↔Si es tritono (#4/b5)." },
    aliases: ["trítono", "tritone", "tritono", "b5", "#4", "6 semitons", "6 semitonos"],
    seeAlso: ["dominant-function", "blues-scale"],
    imageUrl: ""
  },

  /* =========================
     HARMONIA (ETAPA 3 — GRANDE EXPANSÃO)
     ========================= */
  {
    id: "triad",
    category: "harmony",
    title: { pt: "Tríade", en: "Triad", es: "Tríada" },
    short: { pt: "Acorde de 3 notas: tônica, terça e quinta.", en: "Three-note chord: root, third, fifth.", es: "Acorde de 3 notas: tónica, tercera, quinta." },
    definition: {
      pt: "Uma <b>tríade</b> é construída empilhando terças sobre a fundamental. A qualidade (maior/menor/diminuta/aumentada) depende dos intervalos internos.",
      en: "A <b>triad</b> is built by stacking thirds above a root. Quality (major/minor/diminished/augmented) depends on internal intervals.",
      es: "Una <b>tríada</b> se construye apilando terceras sobre la raíz. La cualidad depende de los intervalos internos."
    },
    bullets: {
      pt: ["Maior: 3ª maior + 5ª justa.", "Menor: 3ª menor + 5ª justa.", "Diminuta: 3ª menor + 5ª diminuta."],
      en: ["Major: M3 + P5.", "Minor: m3 + P5.", "Diminished: m3 + d5."],
      es: ["Mayor: 3M + 5J.", "Menor: 3m + 5J.", "Disminuida: 3m + 5d."]
    },
    examples: { pt: "C = C–E–G; Am = A–C–E; B° = B–D–F.", en: "C = C–E–G; Am = A–C–E; B° = B–D–F.", es: "Do = Do–Mi–Sol; Lam = La–Do–Mi; Si° = Si–Re–Fa." },
    aliases: ["tríade", "triad", "tríada", "acorde", "chord"],
    seeAlso: ["diatonic-triads", "seventh-chords", "inversions"],
    imageUrl: ""
  },
  {
    id: "inversions",
    category: "harmony",
    title: { pt: "Inversões (acordes)", en: "Chord Inversions", es: "Inversiones (acordes)" },
    short: { pt: "Trocar a nota do baixo: fundamental, 1ª inv., 2ª inv., etc.", en: "Change bass note: root position, 1st inv., 2nd inv., etc.", es: "Cambiar el bajo: estado fundamental, 1ª, 2ª inv., etc." },
    definition: {
      pt: "Em uma <b>inversão</b>, a nota mais grave (baixo) não é a fundamental. Ex.: C/E (1ª inversão) tem Mi no baixo. Inversões mudam condução de vozes e sensação de estabilidade sem trocar a função básica do acorde.",
      en: "In an <b>inversion</b>, the lowest note (bass) is not the root. Example: C/E (1st inversion) has E in the bass. Inversions change voice leading and stability without changing basic function.",
      es: "En una <b>inversión</b>, la nota más grave no es la raíz. Ej.: Do/Mi (1ª inversión) tiene Mi en el bajo. Cambia el voice leading y estabilidad."
    },
    bullets: {
      pt: ["Tríades: 0 (fundamental), 1ª, 2ª inversão.", "Tétras: até 3ª inversão.", "Muito usadas para baixo melódico."],
      en: ["Triads: root, 1st, 2nd inversion.", "Seventh chords: up to 3rd inversion.", "Used for melodic bass lines."],
      es: ["Tríadas: fundamental, 1ª, 2ª.", "Séptimas: hasta 3ª.", "Usadas para bajo melódico."]
    },
    examples: { pt: "C: C–E–G; 1ª inv.: E–G–C; 2ª inv.: G–C–E.", en: "C: C–E–G; 1st inv.: E–G–C; 2nd inv.: G–C–E.", es: "Do: Do–Mi–Sol; 1ª: Mi–Sol–Do; 2ª: Sol–Do–Mi." },
    aliases: ["inversão", "inversion", "slash chord", "baixo", "bass note"],
    seeAlso: ["slash-chords", "triad"],
    imageUrl: ""
  },
  {
    id: "diatonic-triads",
    category: "harmony",
    title: { pt: "Tríades Diatônicas", en: "Diatonic Triads", es: "Tríadas Diatónicas" },
    short: { pt: "Tríades em cada grau da escala (I, ii, iii...).", en: "Triads on each scale degree (I, ii, iii...).", es: "Tríadas por grado (I, ii, iii...)." },
    definition: {
      pt: "No maior, as tríades em cada grau seguem um padrão de qualidades. Em Dó maior: I (C), ii (Dm), iii (Em), IV (F), V (G), vi (Am), vii° (B°).",
      en: "In major keys, triads on each degree follow a quality pattern. In C major: I (C), ii (Dm), iii (Em), IV (F), V (G), vi (Am), vii° (B°).",
      es: "En mayor, las tríadas por grado siguen un patrón. En Do mayor: I (Do), ii (Rem), iii (Mim), IV (Fa), V (Sol), vi (Lam), vii° (Si°)."
    },
    bullets: {
      pt: ["Base de progressões tonais.", "Ajuda análise funcional.", "Conecta escala ↔ harmonia."],
      en: ["Foundation of tonal progressions.", "Helps functional analysis.", "Connects scale ↔ harmony."],
      es: ["Base de progresiones tonales.", "Ayuda análisis funcional.", "Conecta escala ↔ armonía."]
    },
    examples: { pt: "Progressão pop comum: I–V–vi–IV.", en: "Common pop: I–V–vi–IV.", es: "Pop común: I–V–vi–IV." },
    aliases: ["campo harmônico", "campo harmonico", "diatonic triads", "triadas diatonicas", "tríades diatônicas"],
    seeAlso: ["major-scale", "triad", "functional-harmony"],
    imageUrl: ""
  },
  {
    id: "seventh-chords",
    category: "harmony",
    title: { pt: "Acordes com 7ª (Tétras)", en: "Seventh Chords", es: "Acordes de 7ª" },
    short: { pt: "Tríade + 7ª: maj7, m7, 7, m7b5, dim7…", en: "Triad + 7th: maj7, m7, 7, m7b5, dim7…", es: "Tríada + 7ª: maj7, m7, 7, m7b5, dim7…" },
    definition: {
      pt: "Um acorde de <b>7ª</b> adiciona a 7ª acima da fundamental. Tipos principais: <b>maj7</b> (maior), <b>m7</b> (menor), <b>7</b> (dominante), <b>m7b5</b> (meio-diminuto) e <b>dim7</b> (diminuto).",
      en: "A <b>seventh chord</b> adds the 7th above the root. Main types: <b>maj7</b>, <b>m7</b>, <b>7</b> (dominant), <b>m7b5</b> (half-diminished), and <b>dim7</b> (diminished).",
      es: "Un acorde de <b>7ª</b> agrega la 7ª sobre la raíz. Tipos: <b>maj7</b>, <b>m7</b>, <b>7</b> (dominante), <b>m7b5</b> y <b>dim7</b>."
    },
    bullets: {
      pt: ["Dominante 7 (V7) é central na tonalidade.", "Maj7 soa ‘suave’/jazzístico.", "m7b5 aparece no viiø (em maior) e iiø (em menor)."],
      en: ["Dominant 7 (V7) is central in tonality.", "Maj7 sounds smooth/jazzy.", "m7b5 appears as viiø (major) and iiø (minor)."],
      es: ["Dominante 7 (V7) es central.", "Maj7 suena suave/jazz.", "m7b5 aparece como viiø (mayor) y iiø (menor)."]
    },
    examples: { pt: "Em C: G7 = G–B–D–F; Cmaj7 = C–E–G–B.", en: "In C: G7 = G–B–D–F; Cmaj7 = C–E–G–B.", es: "En Do: Sol7 = Sol–Si–Re–Fa; Domaj7 = Do–Mi–Sol–Si." },
    aliases: ["tétrade", "tetrade", "acorde de 7", "seventh chord", "maj7", "m7", "dominant 7", "m7b5", "dim7"],
    seeAlso: ["dominant-function", "tritone", "extensions"],
    imageUrl: ""
  },
  {
    id: "functional-harmony",
    category: "harmony",
    title: { pt: "Harmonia Funcional", en: "Functional Harmony", es: "Armonía Funcional" },
    short: { pt: "Funções: tônica, subdominante, dominante (tensão → resolução).", en: "Functions: tonic, subdominant, dominant (tension → resolution).", es: "Funciones: tónica, subdominante, dominante (tensión → resolución)." },
    definition: {
      pt: "<b>Harmonia funcional</b> organiza acordes por função: <b>Tônica</b> (repouso), <b>Subdominante</b> (preparação/movimento), <b>Dominante</b> (tensão e direção). É a base da tonalidade (clássico, pop, jazz tradicional).",
      en: "<b>Functional harmony</b> groups chords by function: <b>Tonic</b> (rest), <b>Subdominant</b> (preparation/motion), <b>Dominant</b> (tension/direction). Foundation of tonal music.",
      es: "La <b>armonía funcional</b> agrupa acordes por función: <b>Tónica</b>, <b>Subdominante</b>, <b>Dominante</b>. Base de la tonalidad."
    },
    bullets: {
      pt: ["T: I, vi (às vezes iii).", "SD: ii, IV.", "D: V, vii° (ou V7, viiø)."],
      en: ["T: I, vi (sometimes iii).", "PD/SD: ii, IV.", "D: V, vii° (or V7, viiø)."],
      es: ["T: I, vi (a veces iii).", "SD: ii, IV.", "D: V, vii° (o V7, viiø)."]
    },
    examples: { pt: "Ex.: ii–V–I (prepara → tensiona → resolve).", en: "Example: ii–V–I (prepare → tension → resolve).", es: "Ej.: ii–V–I (prepara → tensa → resuelve)." },
    aliases: ["função harmônica", "functional harmony", "tônica", "dominante", "subdominante", "tonic", "dominant"],
    seeAlso: ["cadences", "dominant-function"],
    imageUrl: ""
  },
  {
    id: "dominant-function",
    category: "harmony",
    title: { pt: "Função Dominante", en: "Dominant Function", es: "Función Dominante" },
    short: { pt: "Tensão que pede resolução na tônica (V, V7, vii°).", en: "Tension resolving to tonic (V, V7, vii°).", es: "Tensión que resuelve a tónica (V, V7, vii°)." },
    definition: {
      pt: "A <b>dominante</b> cria direção para a tônica. Em V7, o <b>trítono</b> (3ª e 7ª) tende a resolver por movimento contrário (ex.: B→C e F→E em G7→C).",
      en: "The <b>dominant</b> drives toward tonic. In V7, the <b>tritone</b> (3rd and 7th) tends to resolve by contrary motion (e.g., B→C and F→E in G7→C).",
      es: "La <b>dominante</b> dirige a la tónica. En V7, el <b>tritono</b> (3ª y 7ª) resuelve por movimiento contrario (B→C y F→E en Sol7→Do)."
    },
    bullets: {
      pt: ["Sensível (7º grau) resolve na tônica.", "Trítono gera tensão ‘inevitável’.", "Cadências usam D→T."],
      en: ["Leading tone resolves to tonic.", "Tritone creates strong tension.", "Cadences use D→T."],
      es: ["La sensible resuelve a tónica.", "El tritono crea tensión fuerte.", "Cadencias usan D→T."]
    },
    examples: { pt: "G7 → C (em Dó maior).", en: "G7 → C (in C major).", es: "Sol7 → Do (en Do mayor)." },
    aliases: ["dominante", "dominant", "V7", "leading tone", "sensível", "trítono"],
    seeAlso: ["tritone", "cadences", "secondary-dominants"],
    imageUrl: ""
  },
  {
    id: "cadences",
    category: "harmony",
    title: { pt: "Cadências", en: "Cadences", es: "Cadencias" },
    short: { pt: "Formas de ‘fechar’ ou ‘respirar’: autêntica, plagal, meia, deceptiva.", en: "Ways to ‘close’ or ‘pause’: authentic, plagal, half, deceptive.", es: "Formas de ‘cerrar’ o ‘pausar’: auténtica, plagal, semicadencia, deceptiva." },
    definition: {
      pt: "<b>Cadência</b> é um padrão de acordes que cria sensação de conclusão ou pausa. Tipos comuns: <b>Autêntica</b> (V→I), <b>Plagal</b> (IV→I), <b>Meia cadência</b> (qualquer→V) e <b>Deceptiva</b> (V→vi).",
      en: "<b>Cadence</b> is a chord pattern that creates closure or pause. Common types: <b>Authentic</b> (V→I), <b>Plagal</b> (IV→I), <b>Half cadence</b> (anything→V), and <b>Deceptive</b> (V→vi).",
      es: "Una <b>cadencia</b> es un patrón que crea cierre o pausa. Tipos: <b>auténtica</b> (V→I), <b>plagal</b> (IV→I), <b>semicadencia</b> (→V) y <b>deceptiva</b> (V→vi)."
    },
    bullets: {
      pt: ["Autêntica perfeita: V–I com tônica na melodia (forte).", "Plagal é o ‘Amém’ (IV–I).", "Deceptiva prolonga a música evitando o I."],
      en: ["Perfect authentic: V–I with tonic in melody (strong).", "Plagal is the ‘Amen’ cadence (IV–I).", "Deceptive delays resolution by avoiding I."],
      es: ["Auténtica perfecta: V–I con tónica en melodía.", "Plagal es ‘Amén’ (IV–I).", "Deceptiva evita I y prolonga."]
    },
    examples: { pt: "Ex.: ii–V–I é uma cadência muito comum no jazz.", en: "Example: ii–V–I is very common in jazz.", es: "Ej.: ii–V–I es muy común en jazz." },
    aliases: ["cadência", "cadence", "cadencia", "V I", "IV I", "deceptive"],
    seeAlso: ["functional-harmony", "dominant-function"],
    imageUrl: ""
  },
  {
    id: "secondary-dominants",
    category: "harmony",
    title: { pt: "Dominantes Secundários", en: "Secondary Dominants", es: "Dominantes Secundarios" },
    short: { pt: "V de algum grau: V/V, V/ii… cria brilho e movimento tonal.", en: "V of a degree: V/V, V/ii… adds brightness and motion.", es: "V de un grado: V/V, V/ii… añade brillo y movimiento." },
    definition: {
      pt: "<b>Dominante secundário</b> é um acorde dominante que resolve para um grau que não é a tônica. Ex.: em C, D7 é <b>V/V</b> porque resolve em G (o V de C).",
      en: "<b>Secondary dominant</b> is a dominant chord resolving to a degree other than the tonic. Example: in C, D7 is <b>V/V</b> because it resolves to G (the V of C).",
      es: "Una <b>dominante secundaria</b> es una dominante que resuelve a un grado que no es la tónica. Ej.: en Do, Re7 es <b>V/V</b> porque resuelve en Sol."
    },
    bullets: {
      pt: ["Cria cromatismo controlado.", "Muito comum em pop e jazz.", "Pode formar cadeias: V/V → V → I."],
      en: ["Creates controlled chromaticism.", "Common in pop and jazz.", "Can chain: V/V → V → I."],
      es: ["Crea cromatismo controlado.", "Común en pop y jazz.", "Puede encadenar: V/V → V → I."]
    },
    examples: { pt: "Em C: D7 → G7 → C.", en: "In C: D7 → G7 → C.", es: "En Do: Re7 → Sol7 → Do." },
    aliases: ["dominante secundário", "secondary dominant", "V/V", "V/ii", "applied dominant"],
    seeAlso: ["dominant-function", "chromatic-scale"],
    imageUrl: ""
  },
  {
    id: "borrowed-chords",
    category: "harmony",
    title: { pt: "Empréstimo Modal", en: "Modal Borrowing", es: "Préstamo Modal" },
    short: { pt: "Acordes ‘emprestados’ do modo paralelo (C maior pega do C menor, etc.).", en: "Chords borrowed from the parallel mode (C major borrows from C minor).", es: "Acordes prestados del modo paralelo (Do mayor toma de Do menor)." },
    definition: {
      pt: "<b>Empréstimo modal</b> é usar acordes do modo paralelo (maior↔menor) sem mudar a tonalidade base. Ex.: em C maior, usar <b>iv</b> (Fm) ou <b>♭VI</b> (Ab) vem do C menor.",
      en: "<b>Modal borrowing</b> uses chords from the parallel mode (major↔minor) without changing the home key. Example: in C major, using <b>iv</b> (Fm) or <b>♭VI</b> (Ab) is borrowed from C minor.",
      es: "El <b>préstamo modal</b> usa acordes del modo paralelo (mayor↔menor) sin cambiar tonalidad base. En Do mayor, usar <b>iv</b> (Fam) o <b>♭VI</b> (Lab) viene de Do menor."
    },
    bullets: {
      pt: ["Muito comum em pop/rock (♭VII, iv).", "Cria cor ‘dramática’ sem modulação.", "Relaciona-se a modos e mistura modal."],
      en: ["Common in pop/rock (♭VII, iv).", "Adds dramatic color without full modulation.", "Related to modes and modal mixture."],
      es: ["Común en pop/rock (♭VII, iv).", "Añade color sin modulación completa.", "Relacionado con mezcla modal."]
    },
    examples: { pt: "Em C: C–Ab–F–G (♭VI e IV).", en: "In C: C–Ab–F–G (♭VI and IV).", es: "En Do: Do–Lab–Fa–Sol (♭VI y IV)." },
    aliases: ["empréstimo modal", "modal borrowing", "modal mixture", "préstamo modal", "♭VI", "bVII"],
    seeAlso: ["modes", "natural-minor"],
    imageUrl: ""
  },
  {
    id: "circle-of-fifths",
    category: "harmony",
    title: { pt: "Círculo de Quintas", en: "Circle of Fifths", es: "Círculo de Quintas" },
    short: { pt: "Mapa de tonalidades por quintas. Armaduras e modulações.", en: "Key map by fifths. Signatures and modulation.", es: "Mapa por quintas. Armaduras y modulación." },
    definition: {
      pt: "Organiza tonalidades avançando por quintas. Sentido horário adiciona sustenidos; anti-horário adiciona bemóis. Excelente para relações próximas, cadências e memorização de armaduras.",
      en: "Organizes keys by fifths. Clockwise adds sharps; counterclockwise adds flats. Great for close key relationships, cadences, and key signature memorization.",
      es: "Organiza tonalidades por quintas. Horario añade sostenidos; antihorario añade bemoles. Ideal para relaciones cercanas y armaduras."
    },
    bullets: {
      pt: ["Ajuda ii–V–I e progressões por quintas.", "Mostra tons vizinhos rapidamente.", "Base para pensar modulação simples."],
      en: ["Helps ii–V–I and fifth-motion progressions.", "Shows neighboring keys quickly.", "Basis for simple modulation thinking."],
      es: ["Ayuda ii–V–I y progresiones por quintas.", "Muestra tonos vecinos rápido.", "Base para modulación simple."]
    },
    examples: { pt: "C → G → D → A → E (cada passo +1 sustenido).", en: "C → G → D → A → E (each step adds one sharp).", es: "Do → Sol → Re → La → Mi (cada paso +1 sostenido)." },
    aliases: ["círculo de quintas", "circle of fifths", "armaduras", "key signatures"],
    seeAlso: ["key-signature", "perfect-fifth"],
    imageUrl: ""
  },

  /* =========================
     CIFRA / SÍMBOLOS (ETAPA 3 — EXPANSÃO)
     ========================= */
  {
    id: "chord-symbols",
    category: "harmony",
    title: { pt: "Cifra (símbolos de acordes)", en: "Chord Symbols (Lead Sheet)", es: "Cifrado (símbolos)" },
    short: { pt: "Notação prática: C, Am, G7, Dm7, Cmaj7, F#°…", en: "Practical notation: C, Am, G7, Dm7, Cmaj7, F#°…", es: "Notación práctica: Do, Lam, Sol7, Rem7, Domaj7…" },
    definition: {
      pt: "<b>Cifra</b> é a notação de acordes usada em música popular e jazz. Indica raiz (letra), qualidade (m, maj, °, ø), extensões (7, 9, 11, 13) e alterações (#, b).",
      en: "<b>Chord symbols</b> are used in pop and jazz. They indicate root letter, quality (m, maj, °, ø), extensions (7, 9, 11, 13) and alterations (#, b).",
      es: "El <b>cifrado</b> se usa en pop y jazz. Indica raíz, cualidad (m, maj, °, ø), extensiones (7, 9, 11, 13) y alteraciones (#, b)."
    },
    bullets: {
      pt: ["C = dó maior; Am = lá menor.", "Cmaj7 = acorde maior com 7ª maior.", "G7 = dominante (7ª menor)."],
      en: ["C = C major; Am = A minor.", "Cmaj7 = major chord with major 7th.", "G7 = dominant (minor 7th)."],
      es: ["Do = Do mayor; Lam = La menor.", "Domaj7 = mayor con 7ª mayor.", "Sol7 = dominante (7ª menor)."]
    },
    examples: { pt: "Ex.: Dm7–G7–Cmaj7 (ii–V–I em C).", en: "Example: Dm7–G7–Cmaj7 (ii–V–I in C).", es: "Ej.: Rem7–Sol7–Domaj7 (ii–V–I en Do)." },
    aliases: ["cifra", "chord symbols", "lead sheet", "cifrado", "maj7", "m7", "ø", "dim"],
    seeAlso: ["seventh-chords", "extensions", "slash-chords"],
    imageUrl: ""
  },
  {
    id: "extensions",
    category: "harmony",
    title: { pt: "Extensões (9, 11, 13)", en: "Extensions (9, 11, 13)", es: "Extensiones (9, 11, 13)" },
    short: { pt: "Notas acima da 7ª: tensões que enriquecem acordes.", en: "Notes above the 7th: tensions that enrich chords.", es: "Notas sobre la 7ª: tensiones que enriquecen acordes." },
    definition: {
      pt: "<b>Extensões</b> são notas além da 7ª: 9ª, 11ª, 13ª (equivalentes a 2, 4, 6 uma oitava acima). Em jazz/pop, adicionam cor. Podem ser naturais ou alteradas (#11, b9 etc.).",
      en: "<b>Extensions</b> are notes beyond the 7th: 9th, 11th, 13th (same as 2, 4, 6 an octave up). They add color and can be natural or altered (#11, b9, etc.).",
      es: "Las <b>extensiones</b> son notas más allá de la 7ª: 9ª, 11ª, 13ª (2, 4, 6 una octava arriba). Añaden color y pueden ser alteradas (#11, b9…)."
    },
    bullets: {
      pt: ["Maj7(9) soa ‘aberto’ e suave.", "7(b9) aumenta tensão dominante.", "#11 é comum em acordes lídios (maj7#11)."],
      en: ["Maj7(9) sounds open and smooth.", "7(b9) increases dominant tension.", "#11 is common in Lydian colors (maj7#11)."],
      es: ["Maj7(9) suena abierto.", "7(b9) aumenta tensión dominante.", "#11 es común en color lidio (maj7#11)."]
    },
    examples: { pt: "Ex.: Cmaj9 = C–E–G–B–D.", en: "Example: Cmaj9 = C–E–G–B–D.", es: "Ej.: Domaj9 = Do–Mi–Sol–Si–Re." },
    aliases: ["extensões", "extensions", "extensiones", "9", "11", "13", "b9", "#11", "tensões", "tensions"],
    seeAlso: ["chord-symbols", "seventh-chords", "altered-dominant"],
    imageUrl: ""
  },
  {
    id: "slash-chords",
    category: "harmony",
    title: { pt: "Slash Chords (C/E)", en: "Slash Chords (C/E)", es: "Acordes con bajo (Do/Mi)" },
    short: { pt: "C/E = acorde C com baixo em E. Muito usado para condução.", en: "C/E = C chord with E in the bass. Great for voice leading.", es: "Do/Mi = Do con bajo en Mi. Para conducción." },
    definition: {
      pt: "Um <b>slash chord</b> indica acorde + nota do baixo. Pode ser uma inversão (C/E) ou um baixo não pertencente ao acorde (pedal/baixo cromático), dependendo do contexto.",
      en: "A <b>slash chord</b> indicates chord + bass note. It can be an inversion (C/E) or a non-chord bass (pedal/chromatic bass), depending on context.",
      es: "Un <b>acorde con bajo</b> indica acorde + nota de bajo. Puede ser inversión (Do/Mi) o un bajo externo (pedal/cromático)."
    },
    bullets: {
      pt: ["Ajuda a criar baixo melódico.", "Comum em pop, gospel e trilhas.", "Facilita condução sem trocar acorde principal."],
      en: ["Creates melodic bass lines.", "Common in pop, gospel, scoring.", "Helps voice leading without changing main chord."],
      es: ["Crea bajo melódico.", "Común en pop, gospel, cine.", "Ayuda a conducción sin cambiar acorde principal."]
    },
    examples: { pt: "Ex.: C – C/B – Am (baixo descendo).", en: "Example: C – C/B – Am (descending bass).", es: "Ej.: Do – Do/Si – Lam (bajo descendente)." },
    aliases: ["slash chord", "C/E", "acorde com baixo", "bajo", "inversão", "inversion"],
    seeAlso: ["inversions", "chord-symbols"],
    imageUrl: ""
  },
  {
    id: "altered-dominant",
    category: "harmony",
    title: { pt: "Dominante Alterado (7alt)", en: "Altered Dominant (7alt)", es: "Dominante Alterado (7alt)" },
    short: { pt: "Acorde V7 com b9/#9/b5/#5 para máxima tensão antes de resolver.", en: "V7 with b9/#9/b5/#5 for maximum tension before resolving.", es: "V7 con b9/#9/b5/#5 para máxima tensión antes de resolver." },
    definition: {
      pt: "<b>Dominante alterado</b> é um V7 com tensões alteradas (b9, #9, b5/#11, #5/b13). Em jazz, resolve muito bem para acordes de tônica (maj7 ou m) por condução cromática.",
      en: "<b>Altered dominant</b> is a V7 with altered tensions (b9, #9, b5/#11, #5/b13). In jazz it resolves strongly to tonic chords via chromatic voice leading.",
      es: "Una <b>dominante alterada</b> es un V7 con tensiones alteradas (b9, #9, b5/#11, #5/b13). En jazz resuelve fuerte por conducción cromática."
    },
    bullets: {
      pt: ["É ‘tensão máxima’ antes da resolução.", "Relacionado a escalas alteradas (por modos).", "Muito comum em turnarounds e ii–V–I."],
      en: ["Maximum tension before resolution.", "Related to altered scales (via modes).", "Common in turnarounds and ii–V–I."],
      es: ["Máxima tensión antes de resolver.", "Relacionado a escalas alteradas.", "Común en turnarounds y ii–V–I."]
    },
    examples: { pt: "Ex.: G7alt → Cmaj7 (em C).", en: "Example: G7alt → Cmaj7 (in C).", es: "Ej.: Sol7alt → Domaj7 (en Do)." },
    aliases: ["7alt", "dominante alterado", "altered dominant", "b9", "#9", "b13", "#11"],
    seeAlso: ["extensions", "dominant-function", "tritone-substitution"],
    imageUrl: ""
  },
  {
    id: "tritone-substitution",
    category: "harmony",
    title: { pt: "Substituição por Trítono", en: "Tritone Substitution", es: "Sustitución por Tritono" },
    short: { pt: "Trocar V7 por outro dominante a trítono de distância (G7 ↔ Db7).", en: "Replace V7 with a dominant a tritone away (G7 ↔ Db7).", es: "Sustituir V7 por dominante a tritono (Sol7 ↔ Reb7)." },
    definition: {
      pt: "Na <b>substituição por trítono</b>, troca-se um dominante por outro cuja fundamental está a um trítono. Eles compartilham o mesmo trítono interno (3ª e 7ª invertidas), mantendo a ‘força’ de resolução.",
      en: "In <b>tritone substitution</b>, a dominant is replaced by another whose root is a tritone away. They share the same internal tritone (3rd and 7th swapped), preserving resolution strength.",
      es: "En la <b>sustitución por tritono</b>, se reemplaza una dominante por otra a tritono. Comparten el mismo tritono interno (3ª y 7ª invertidas)."
    },
    bullets: {
      pt: ["Cria movimento cromático no baixo.", "Muito comum em jazz (ii–V–I com ‘subV’).", "Ex.: Dm7–Db7–Cmaj7."],
      en: ["Creates chromatic bass motion.", "Common in jazz (ii–V–I with ‘subV’).", "Example: Dm7–Db7–Cmaj7."],
      es: ["Crea bajo cromático.", "Común en jazz (ii–V–I con ‘subV’).", "Ej.: Rem7–Reb7–Domaj7."]
    },
    examples: { pt: "Em C: G7 pode virar Db7 antes de C.", en: "In C: G7 can become Db7 before C.", es: "En Do: Sol7 puede ser Reb7 antes de Do." },
    aliases: ["subV", "tritone substitution", "substituição por trítono", "sustitución por tritono", "Db7", "reb7"],
    seeAlso: ["tritone", "dominant-function"],
    imageUrl: ""
  },

  /* =========================
     HISTÓRIA (ponte)
     ========================= */
  {
    id: "music-periods",
    category: "history",
    title: { pt: "Períodos Musicais", en: "Musical Periods", es: "Períodos Musicales" },
    short: { pt: "Eras: Medieval → Contemporâneo. Estilo e linguagem mudam no tempo.", en: "Eras: Medieval → Contemporary. Style and language evolve.", es: "Eras: Medieval → Contemporáneo. Evolución del lenguaje." },
    definition: {
      pt: "Divisão didática: Medieval, Renascimento, Barroco, Clássico, Romântico, Século XX/Contemporâneo. Cada período tem estética, formas, instrumentos e práticas composicionais características.",
      en: "Didactic division: Medieval, Renaissance, Baroque, Classical, Romantic, 20th/Contemporary. Each period has characteristic aesthetics, forms, instruments, and compositional practices.",
      es: "División didáctica: Medieval, Renacimiento, Barroco, Clásico, Romántico, Siglo XX/Contemporáneo. Cada era tiene rasgos propios."
    },
    bullets: {
      pt: ["Barroco: contraponto e consolidação tonal.", "Clássico: forma e equilíbrio.", "Romântico: cromatismo e expansão."],
      en: ["Baroque: counterpoint and tonal consolidation.", "Classical: form and balance.", "Romantic: chromaticism and expansion."],
      es: ["Barroco: contrapunto y tonalidad.", "Clásico: forma y equilibrio.", "Romántico: cromatismo y expansión."]
    },
    examples: { pt: "Ex.: fuga (barroco), sonata (clássico), poema sinfônico (romântico).", en: "Example: fugue (Baroque), sonata (Classical), tone poem (Romantic).", es: "Ej.: fuga (barroco), sonata (clásico), poema sinfónico (romántico)." },
    aliases: ["história da música", "music history", "barroco", "classico", "romantico", "renascimento", "medieval"],
    seeAlso: ["sound-basics"],
    imageUrl: ""
  }
];