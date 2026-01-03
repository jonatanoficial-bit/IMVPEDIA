/* IMVpedia — Dicionário (PT/EN/ES) — ETAPA 4 (BASE)
   ✅ Você pode aumentar este arquivo quando quiser.
*/

window.IMVPEDIA_ENTRIES = [
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
    examples: { pt: "Ex.: ‘♪ = ♩’ (colcheia vira o novo pulso).", en: "Example: ‘♪ = ♩’ (eighth becomes the new beat).", es: "Ej.: ‘♪ = ♩’ (corchea pasa a ser el pulso)." },
    aliases: ["modulação métrica", "metric modulation", "modulación métrica", "equivalência", "tempo change"],
    seeAlso: ["subdivision", "tempo"],
    imageUrl: ""
  },
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
    seeAlso: ["subdivision", "meter"],
    imageUrl: ""
  }
];