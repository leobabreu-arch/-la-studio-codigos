const categories = [
  [
    "Fotografia",
    "◉",
    [
      [
        "cinematic",
        "Cinema em cada detalhe",
        "Use enquadramento cinematográfico, luz principal lateral suave, contraste controlado, sombras naturais e gradação de cor sutil. Preserve textura e proporções realistas.",
        "Uma pessoa caminhando em uma rua à noite."
      ],
      [
        "goldenhour",
        "A última luz do dia",
        "Fotografe durante a golden hour, com luz solar baixa e quente, sombras alongadas e brilho delicado nas bordas. Mantenha os tons de pele naturais.",
        "Retrato na orla durante o pôr do sol."
      ],
      [
        "portrait",
        "Retrato com presença",
        "Crie um retrato editorial com lente de 85 mm, olhos nítidos, fundo suavemente desfocado e textura real da pele, sem suavização artificial.",
        "Retrato profissional de um designer."
      ],
      [
        "streetphoto",
        "A vida sem pose",
        "Use linguagem documental de fotografia de rua, enquadramento espontâneo, luz disponível, lente de 35 mm e pequenos detalhes cotidianos.",
        "Uma feira de bairro pela manhã."
      ],
      [
        "macro",
        "Chegue mais perto",
        "Mostre um detalhe em macrofotografia, com textura tátil, foco seletivo preciso e iluminação que revele pequenos relevos do material.",
        "Detalhe da textura de uma caneca."
      ],
      [
        "overhead",
        "Um novo ponto de vista",
        "Posicione a câmera perpendicularmente acima da cena, em vista superior de 90 graus. Organize os elementos com equilíbrio e sombras coerentes.",
        "Mesa de trabalho vista de cima."
      ],
      [
        "windowportrait",
        "Retrato junto à janela",
        "Posicione o rosto a 45 graus de uma janela ampla. Use luz difusa lateral, fundo simples e enquadramento do peito para cima. Preserve poros, idade e assimetrias; mantenha olhos em foco e evite clarear excessivamente o lado sombreado.",
        "Retrato de um designer no seu estúdio."
      ],
      [
        "environmentalportrait",
        "Profissão em contexto",
        "Fotografe a pessoa no ambiente de trabalho, incluindo objetos que expliquem sua atividade. Use lente de 35 mm e enquadramento médio; equilibre rosto e cenário sem transformar o fundo em uma coleção de distrações.",
        "Uma ceramista trabalhando em seu ateliê."
      ],
      [
        "silhouette",
        "História pela silhueta",
        "Posicione o sujeito contra uma área claramente mais iluminada. Exponha para o fundo, preserve o contorno reconhecível e separe braços e pernas da silhueta principal. Evite luz frontal que elimine o efeito.",
        "Surfista segurando a prancha ao pôr do sol."
      ],
      [
        "reflection",
        "Uma segunda leitura",
        "Use uma superfície refletora plausível, como vidro ou água calma. Faça o reflexo corresponder à posição do sujeito e ao ângulo da câmera; preserve pequenas imperfeições da superfície e evite duplicações incoerentes.",
        "Uma bicicleta refletida em uma poça urbana."
      ],
      [
        "panning",
        "Velocidade em fotografia",
        "Acompanhe lateralmente um sujeito em movimento com a câmera. Mantenha o assunto relativamente nítido e crie borrão direcional no fundo. Faça rodas e chão expressarem velocidade sem deformar o objeto principal.",
        "Ciclista cruzando uma avenida ao entardecer."
      ],
      [
        "longexposure",
        "O tempo desenha",
        "Use exposição longa com câmera fixa. Mantenha arquitetura e objetos estáticos nítidos, enquanto luzes ou água deixam rastros coerentes com o movimento. Evite aplicar o mesmo borrão indiscriminadamente a toda a imagem.",
        "Rastros de carros em uma avenida à noite."
      ],
      [
        "blackandwhite",
        "Forma antes da cor",
        "Crie fotografia em preto e branco com gradação rica entre sombras e altas luzes. Use textura, geometria e contraste local para conduzir o olhar; preserve detalhes no rosto e evite uma aparência apenas dessaturada.",
        "Retrato documental de um artesão."
      ],
      [
        "filmgrain",
        "Textura analógica",
        "Adote uma estética de filme colorido com grão fino e irregular, altas luzes suaves e cores moderadas. Preserve nitidez útil e tons de pele; não use ruído digital uniforme nem riscos que dominem a cena.",
        "Café de bairro fotografado em uma manhã nublada."
      ],
      [
        "contactsheet",
        "Uma sessão, seis quadros",
        "Apresente seis fotografias da mesma sessão em uma grade regular. Varie enquadramentos e gestos mantendo identidade, roupa, cenário e luz consistentes. Use bordas discretas e não acrescente textos ou números sem pedido.",
        "Sessão editorial de uma pessoa com casaco laranja."
      ],
      [
        "negativeportrait",
        "Retrato com respiro",
        "Coloque o sujeito no terço direito e reserve aproximadamente metade do quadro como espaço negativo à esquerda. Use um fundo simples e mantenha o olhar direcionado para dentro da composição, preservando leitura em miniatura.",
        "Retrato para a capa de um curso de design."
      ],
      [
        "foregroundframe",
        "Moldura em primeiro plano",
        "Inclua um elemento desfocado perto da lente, como folhas ou um batente, para enquadrar parcialmente o sujeito. Deixe rosto e ação principal livres; mantenha profundidade óptica plausível e evite uma vinheta artificial.",
        "Músico visto através da porta do camarim."
      ],
      [
        "lowangle",
        "Presença monumental",
        "Posicione a câmera abaixo da linha dos olhos, apontada suavemente para cima. Use perspectiva controlada e elementos de fundo que reforcem a escala; preserve proporções faciais e evite alongar pernas ou mãos sem intenção.",
        "Atleta em pé na entrada de um estádio."
      ],
      [
        "telephoto",
        "Planos que se aproximam",
        "Use linguagem de lente teleobjetiva, com campo de visão estreito e planos aparentemente comprimidos. Isole o sujeito contra um fundo distante, mantenha foco preciso e evite distorções de grande angular.",
        "Pessoa caminhando diante de montanhas ao fundo."
      ],
      [
        "widecontext",
        "O ambiente participa",
        "Use lente grande angular moderada para incluir contexto. Mantenha o sujeito longe das bordas, linhas verticais controladas e distância suficiente para não distorcer o rosto. Deixe o cenário explicar a história.",
        "Chef no centro de uma cozinha profissional."
      ],
      [
        "foodphoto",
        "Textura que dá fome",
        "Fotografe o alimento em ângulo de 45 graus, com luz lateral difusa e cores naturais. Destaque textura, frescor e volume; use poucos acessórios e mantenha porções, ingredientes e apresentação coerentes com a referência.",
        "Pizza artesanal sobre uma mesa de madeira."
      ],
      [
        "interiorphoto",
        "Espaço bem apresentado",
        "Fotografe o interior a uma altura natural, com verticais retas e perspectiva moderada. Equilibre luz de janela e luzes internas, preserve dimensões reais e evite ampliar artificialmente o espaço ou inventar móveis.",
        "Um pequeno escritório de design com luz natural."
      ],
      [
        "architecture",
        "Linhas que conduzem",
        "Escolha um ponto de vista que destaque a geometria da construção. Controle convergência das verticais e use pessoas ou objetos discretos como referência de escala. Preserve elementos arquitetônicos fornecidos e materiais reais.",
        "Fachada de um café com grandes janelas."
      ],
      [
        "rainportrait",
        "Chuva com narrativa",
        "Crie um retrato sob chuva leve, com gotas iluminadas por contraluz e roupa molhada de maneira coerente. Preserve olhos e rosto legíveis; distribua reflexos no chão sem transformar a cena em uma névoa opaca.",
        "Pessoa de jaqueta escura esperando na rua."
      ],
      [
        "sportfreeze",
        "O ápice da ação",
        "Congele uma ação esportiva no instante de maior expressão. Use enquadramento que inclua o gesto completo, anatomia plausível e contato coerente com equipamentos. Mantenha suor e partículas discretos, sem simular lesões.",
        "Jogador saltando para uma cesta em quadra aberta."
      ]
    ]
  ],
  [
    "Luz e atmosfera",
    "☀",
    [
      [
        "backlight",
        "Contorno de luz",
        "Posicione a fonte principal atrás do sujeito para criar recorte luminoso nas bordas. Use preenchimento frontal discreto para preservar os detalhes.",
        "Retrato com uma janela luminosa ao fundo."
      ],
      [
        "neonorange",
        "Assinatura laranja",
        "Use luzes práticas laranja intenso em um ambiente preto e grafite. Limite o brilho às fontes e reflexos, preservando áreas de sombra e detalhes.",
        "Tênis preto em um estúdio com luz laranja."
      ],
      [
        "lowkey",
        "O poder da sombra",
        "Crie uma cena low-key, com fundo escuro e uma fonte de luz direcional. Preserve detalhes nas sombras e evite pretos completamente bloqueados.",
        "Frasco escuro com uma faixa de luz lateral."
      ],
      [
        "softbox",
        "Luz de estúdio",
        "Ilumine com uma softbox grande a 45 graus e preenchimento sutil do lado oposto. Produza sombras suaves e transições naturais.",
        "Caneca fotografada para catálogo."
      ],
      [
        "foglight",
        "Luz que ganha volume",
        "Adicione névoa leve e feixes volumétricos coerentes com as fontes de luz. Mantenha o assunto principal nítido e reconhecível.",
        "Pessoa em um corredor com névoa leve."
      ],
      [
        "bluehour",
        "Entre o dia e a noite",
        "Crie uma atmosfera de blue hour, com céu azul profundo, iluminação urbana quente e equilíbrio entre luz ambiente e luzes práticas.",
        "Vista urbana no início da noite."
      ],
      [
        "rimlight",
        "Recorte preciso",
        "Use uma fonte estreita atrás e ao lado do sujeito para destacar apenas suas bordas. Acrescente preenchimento mínimo na frente, mantenha detalhes internos e impeça que o brilho se espalhe por superfícies sem relação com a luz.",
        "Tênis preto recortado por luz laranja."
      ],
      [
        "rembrandt",
        "Um triângulo de luz",
        "Ilumine o rosto de cima e lateralmente, formando um pequeno triângulo luminoso na bochecha sombreada. Preserve a conexão natural entre sombras do nariz e da face; use preenchimento suave e fundo discreto.",
        "Retrato sóbrio de uma pessoa sentada."
      ],
      [
        "butterfly",
        "Retrato de beleza clássico",
        "Posicione uma fonte suave acima e à frente do rosto, produzindo pequena sombra abaixo do nariz. Use rebatedor discreto inferior; preserve textura de pele e não altere formato do rosto ou idade aparente.",
        "Retrato editorial com maquiagem simples."
      ],
      [
        "splitlight",
        "Metade luz, metade mistério",
        "Posicione a fonte a 90 graus do rosto para dividir luz e sombra. Preserve uma transição plausível e detalhes mínimos no lado escuro. Use fundo neutro e evite brilho frontal que destrua a separação.",
        "Retrato dramático com fundo grafite."
      ],
      [
        "clamshell",
        "Luz envolvente",
        "Combine uma fonte suave acima da câmera com um rebatedor inferior. Faça o preenchimento reduzir sombras sem eliminar volume; mantenha reflexos discretos nos olhos e textura realista em pele e cabelo.",
        "Retrato profissional para uma página pessoal."
      ],
      [
        "hardlight",
        "Sombras com desenho",
        "Use uma fonte pequena e direcional para criar sombras bem definidas. Posicione os objetos para que a geometria da sombra contribua com a composição; preserve altas luzes e evite áreas completamente estouradas.",
        "Frasco de perfume sobre fundo areia."
      ],
      [
        "gobo",
        "Luz recortada",
        "Projete padrões de sombra por uma persiana ou elemento vazado entre a fonte e o sujeito. Faça direção, escala e suavidade corresponderem à distância; mantenha o foco principal legível e evite padrões sem origem física.",
        "Retrato junto a uma persiana de madeira."
      ],
      [
        "bounce",
        "Luz rebatida",
        "Ilumine indiretamente ao rebater a fonte em uma parede clara. Produza transições amplas e suaves, com dominante de cor compatível com a superfície. Preserve sombras de contato para manter o volume da cena.",
        "Produto de cerâmica sobre uma mesa clara."
      ],
      [
        "practical",
        "A luz existe na cena",
        "Use luminárias visíveis, telas ou letreiros como fontes principais. Faça cor e intensidade refletirem de forma coerente nos objetos próximos; acrescente preenchimento discreto apenas para preservar leitura do sujeito.",
        "Pessoa trabalhando à luz de uma luminária."
      ],
      [
        "candlelight",
        "Calor e intimidade",
        "Ilumine com velas visíveis e preenchimento ambiente muito suave. Preserve o brilho quente próximo às chamas, a queda rápida da luz e pequenas sombras irregulares; evite transformar todo o cenário em laranja uniforme.",
        "Mesa de jantar com cerâmica e velas."
      ],
      [
        "moonlight",
        "Noite em camadas",
        "Crie uma cena noturna com luz lunar discreta e fria, contrastada por uma fonte quente distante. Mantenha a noite escura, preserve silhuetas e profundidade; evite uma paisagem diurna apenas tingida de azul.",
        "Cabana junto a uma floresta à noite."
      ],
      [
        "overcast",
        "Suavidade natural",
        "Use luz de céu encoberto, ampla e difusa. Mantenha sombras suaves, cores moderadas e detalhes consistentes em áreas claras e escuras. Evite feixes de sol ou sombras duras incompatíveis com as nuvens.",
        "Retrato em uma praça num dia nublado."
      ],
      [
        "dappled",
        "Sol entre folhas",
        "Faça a luz atravessar uma copa de árvore, criando manchas irregulares sobre cenário e roupa. Preserve o rosto em uma área legível e mantenha padrão, direção e escala das sombras coerentes.",
        "Pessoa lendo em um banco de jardim."
      ],
      [
        "colorcontrast",
        "Temperaturas em diálogo",
        "Combine uma fonte quente principal com uma luz fria secundária. Separe suas áreas de influência e mantenha pele e materiais reconhecíveis; evite aplicar as duas cores com a mesma intensidade sobre todo o quadro.",
        "Retrato em estúdio com laranja e azul discreto."
      ],
      [
        "lightgradient",
        "Fundo que ganha profundidade",
        "Crie um gradiente de iluminação físico no fundo, com uma área mais clara atrás do sujeito e queda suave nas bordas. Preserve sombras e separação de planos; não use contornos luminosos artificiais.",
        "Relógio escuro em fundo grafite."
      ],
      [
        "caustics",
        "Reflexos da água",
        "Projete padrões luminosos refratados por água ou vidro sobre uma superfície. Mantenha desenho irregular, bordas suaves e uma origem clara para o efeito. Deixe o produto principal visível e evite desenhos geométricos perfeitos.",
        "Frasco transparente próximo de uma piscina."
      ],
      [
        "dustbeam",
        "Partículas na luz",
        "Mostre partículas finas apenas onde um feixe de luz as atravessa. Use concentração baixa, profundidade e variação de foco; preserve nitidez do sujeito e evite preencher o ar inteiro com pontos brilhantes.",
        "Ateliê antigo iluminado por uma janela alta."
      ],
      [
        "frostlight",
        "Atmosfera gelada",
        "Use iluminação fria difusa e pequenas áreas de brilho nas bordas congeladas. Preserve transparência do gelo e textura da geada; mantenha a superfície do produto reconhecível e evite neve uniforme sobre tudo.",
        "Lata de bebida com gelo e condensação."
      ],
      [
        "stagelight",
        "Presença de palco",
        "Ilumine o artista com um foco principal definido e recortes laterais coloridos. Separe o público em um plano mais escuro; mantenha rosto, mãos e instrumento legíveis e feixes coerentes com os refletores.",
        "Cantor em um palco com luzes laranja."
      ]
    ]
  ],
  [
    "Produto e 3D",
    "◇",
    [
      [
        "heroshot",
        "Seu produto, protagonista",
        "Apresente o produto em destaque, com ângulo levemente baixo, iluminação de estúdio, base discreta e acabamento publicitário. Preserve forma, marca e materiais.",
        "Tênis de uma marca fictícia sobre pedestal."
      ],
      [
        "explodedview",
        "Beleza por dentro",
        "Crie uma vista explodida conceitual, com componentes separados ao longo de um eixo, alinhados e organizados sobre fundo neutro. Não apresente como engenharia validada.",
        "Vista conceitual das camadas de uma câmera."
      ],
      [
        "chrome",
        "Metal com personalidade",
        "Aplique acabamento cromado ao objeto, com reflexos coerentes do ambiente, microtextura sutil e contraste que preserve a leitura de sua forma.",
        "Escultura abstrata em metal cromado."
      ],
      [
        "glass",
        "Transparência que impressiona",
        "Explore vidro com espessura visível, refração plausível, bordas iluminadas e reflexos controlados. Use um fundo simples para destacar a silhueta.",
        "Frasco transparente em fundo grafite."
      ],
      [
        "floating",
        "Desafie a gravidade",
        "Apresente o produto suspenso, com sombra projetada coerente abaixo dele e composição equilibrada. Preserve proporções e detalhes da embalagem.",
        "Garrafa térmica suspensa em estúdio."
      ],
      [
        "splash",
        "Impacto congelado",
        "Fotografe o produto cercado por respingos congelados em alta velocidade, com gotas nítidas e iluminação de recorte. Deixe a marca legível.",
        "Lata de bebida cercada por respingos."
      ],
      [
        "clayrender",
        "Volume sem distrações",
        "Apresente o objeto como um estudo de argila monocromática fosca. Use luz lateral ampla e sombras de contato para revelar forma e proporção. Remova texturas decorativas, mas preserve encaixes e características essenciais do produto.",
        "Estudo de uma cadeira de design."
      ],
      [
        "ceramic",
        "Esmalte e matéria",
        "Aplique cerâmica esmaltada com espessura, brilho e pequenas irregularidades plausíveis. Destaque a borda com iluminação suave; preserve a forma original e evite reflexos metálicos ou transparência incompatíveis com o material.",
        "Caneca laranja com acabamento artesanal."
      ],
      [
        "woodgrain",
        "Madeira com direção",
        "Use veios de madeira coerentes com cada peça e com o processo de fabricação. Preserve junções e espessuras; ilumine lateralmente para revelar textura sem exagerar o relevo ou repetir o mesmo padrão artificialmente.",
        "Caixa de madeira com tampa deslizante."
      ],
      [
        "brushedmetal",
        "Metal escovado",
        "Aplique metal escovado com linhas finas orientadas de acordo com a peça. Use faixas largas de luz para revelar o acabamento; preserve cantos, junções e pequenas marcas de uso sem transformar a superfície em espelho.",
        "Garrafa térmica de aço escovado."
      ],
      [
        "rubber",
        "Superfície emborrachada",
        "Crie acabamento de borracha fosca com microtextura discreta. Faça reflexos suaves e pouco intensos, preserve bordas e diferenças de material e evite brilho de plástico polido na superfície emborrachada.",
        "Controle de videogame com áreas de aderência."
      ],
      [
        "fabricdetail",
        "Trama em evidência",
        "Aproxime a câmera do tecido para mostrar a trama, costuras e dobras. Use iluminação rasante suave e foco seletivo; mantenha escala realista das fibras e preserve cores e desenhos fornecidos.",
        "Detalhe de uma jaqueta esportiva preta."
      ],
      [
        "resin",
        "Camadas translúcidas",
        "Use resina translúcida com profundidade visível e pequenas inclusões distribuídas no volume. Preserve espessura, refração e bordas; evite bolhas repetidas ou transparência idêntica em todas as partes.",
        "Objeto decorativo laranja de resina."
      ],
      [
        "isometric",
        "Perspectiva organizada",
        "Represente o objeto em projeção isométrica, com eixos consistentes e sem ponto de fuga evidente. Organize peças e sombras para facilitar a leitura; preserve proporções e mantenha um fundo discreto.",
        "Miniatura de um estúdio de design."
      ],
      [
        "cutaway",
        "Uma janela para o interior",
        "Remova visualmente uma seção da carcaça para revelar camadas internas conceituais. Mantenha o exterior reconhecível, cortes limpos e separação clara de materiais. Identifique o resultado como ilustração conceitual, não desenho técnico validado.",
        "Ilustração das camadas de um tênis."
      ],
      [
        "wireframe",
        "A estrutura aparece",
        "Apresente uma malha tridimensional organizada sobre parte do objeto. Preserve a silhueta e use densidade de linhas suficiente para explicar a forma sem ocultá-la; faça a transição para o acabamento final de modo legível.",
        "Metade de um carro em malha e metade renderizada."
      ],
      [
        "pedestal",
        "Uma pequena exposição",
        "Coloque o produto sobre um pedestal proporcional e discreto. Use fundo simples, luz que revele materiais e sombra de contato precisa; mantenha distância suficiente das bordas e destaque o produto acima da base.",
        "Perfume em um pedestal de concreto."
      ],
      [
        "shadowstudy",
        "A sombra como composição",
        "Posicione o objeto e uma fonte direcional para que a sombra forme parte importante do quadro. Preserve correspondência entre silhueta e sombra, textura do suporte e espaço negativo; evite sombras desconectadas.",
        "Óculos projetando uma sombra longa."
      ],
      [
        "condensation",
        "Frescor visível",
        "Distribua gotas de condensação de tamanhos variados sobre uma superfície fria. Faça a água seguir a gravidade e respeitar o material; preserve rótulo e marca, evitando gotas uniformes ou repetidas.",
        "Garrafa de suco recém-retirada da geladeira."
      ],
      [
        "materialsplit",
        "Duas matérias, uma forma",
        "Apresente o mesmo objeto dividido em dois acabamentos, com uma transição claramente definida. Preserve geometria e escala em ambos os lados; use iluminação consistente para comparar materiais sem confundir forma e textura.",
        "Vaso metade cerâmica, metade metal."
      ],
      [
        "softbody",
        "Deformação controlada",
        "Mostre um objeto flexível sob uma força simples, como compressão ou gravidade. Preserve continuidade do material, espessura e pontos de contato; evite partes atravessando umas às outras ou deformações sem causa.",
        "Almofada comprimida por um peso leve."
      ],
      [
        "voxel",
        "Construção em blocos",
        "Reconstrua o assunto usando pequenos volumes cúbicos com escala consistente. Preserve a silhueta geral, organize cores em massas legíveis e use sombras coerentes; evite detalhes minúsculos que destruam a leitura.",
        "Miniatura de uma bicicleta feita de blocos."
      ],
      [
        "lowpoly",
        "Geometria essencial",
        "Simplifique o objeto em faces poligonais claramente definidas. Use poucas cores e iluminação que revele os planos; preserve características de reconhecimento e evite suavização que apague as arestas do estilo.",
        "Raposa geométrica em fundo neutro."
      ],
      [
        "turntableboard",
        "O produto em quatro vistas",
        "Monte uma prancha com frente, lateral, traseira e perspectiva do mesmo produto. Preserve dimensões, materiais, detalhes e luz entre as vistas; use escala uniforme e não invente partes incompatíveis.",
        "Um capacete preto e laranja em quatro ângulos."
      ],
      [
        "scaleobject",
        "Escala que se entende",
        "Inclua um objeto cotidiano reconhecível como referência de tamanho. Mantenha ambos no mesmo plano ou deixe a perspectiva clara; preserve proporções reais e evite usar uma miniatura como se fosse tamanho natural.",
        "Uma caixa de som portátil ao lado de uma caneca."
      ]
    ]
  ],
  [
    "Design e tipografia",
    "Aa",
    [
      [
        "editorial",
        "Design que conta histórias",
        "Crie uma composição editorial com hierarquia clara, grid consistente, margens generosas e equilíbrio entre imagem e espaço negativo.",
        "Página de uma revista sobre design."
      ],
      [
        "typechrome",
        "Palavras em metal",
        "Transforme o texto fornecido em tipografia tridimensional cromada. Preserve a grafia exata e a legibilidade, com reflexos de estúdio e fundo escuro.",
        "A palavra CRIAR em metal cromado."
      ],
      [
        "swissgrid",
        "Precisão visual",
        "Use grid modular, alinhamentos rigorosos, tipografia sem serifa, hierarquia por escala e contraste. Priorize clareza e espaço em branco.",
        "Cartaz de um evento com informações fornecidas."
      ],
      [
        "brutalist",
        "Atitude sem filtro",
        "Explore design brutalista com tipografia expressiva, alto contraste e composição assimétrica intencional. Preserve legibilidade e organização da informação.",
        "Pôster de uma oficina de criatividade."
      ],
      [
        "poster",
        "Uma ideia que ocupa a parede",
        "Crie um pôster com um único foco visual, título dominante e informações secundárias bem hierarquizadas. Evite elementos decorativos sem função.",
        "Pôster com o título IDEIAS EM MOVIMENTO."
      ],
      [
        "papercut",
        "Camadas de criatividade",
        "Construa uma composição de recortes de papel em camadas, com bordas físicas, pequenas sombras de contato e profundidade artesanal.",
        "Paisagem construída em camadas de papel."
      ],
      [
        "typestone",
        "Letras esculpidas",
        "Modele o texto exato fornecido como letras de pedra, com espessura e relevos consistentes. Use luz lateral para revelar textura; preserve a leitura de cada caractere e evite rachaduras que alterem a palavra.",
        "A palavra CRIAR esculpida em pedra escura."
      ],
      [
        "typeglass",
        "Palavras transparentes",
        "Construa o texto fornecido em vidro espesso, com bordas luminosas e refração controlada. Use fundo simples e espaço entre letras suficiente para manter a leitura. Não acrescente palavras nem altere a ortografia.",
        "A palavra VISÃO em vidro transparente."
      ],
      [
        "typefabric",
        "Letras com textura têxtil",
        "Transforme o texto fornecido em letras volumétricas revestidas de tecido. Mostre costuras e dobras coerentes com o volume, mantenha alinhamento e legibilidade e evite unir caracteres por excesso de material.",
        "A palavra CONFORTO em tecido macio."
      ],
      [
        "typeinflated",
        "Tipografia inflável",
        "Crie letras infláveis com costuras discretas, pressão interna plausível e reflexos suaves. Preserve a palavra exata e abra espaços internos das letras; evite deformações que confundam caracteres.",
        "A palavra IDEIA como balões laranja."
      ],
      [
        "typepaper",
        "Letras de papel",
        "Construa as letras com dobras ou camadas de papel. Use sombras pequenas entre camadas e espessura coerente; mantenha a palavra legível e preserve suas proporções sem adicionar enfeites que dominem o texto.",
        "A palavra FORMA em papel branco dobrado."
      ],
      [
        "kinetictype",
        "Ritmo tipográfico",
        "Crie uma composição estática que sugira movimento através de repetição e deslocamento controlado do texto. Preserve uma instância principal totalmente legível; limite variações de escala e mantenha margens consistentes.",
        "Pôster com a palavra MOVIMENTO repetida em diagonal."
      ],
      [
        "outlineletters",
        "Contornos em destaque",
        "Use letras de contorno com espessura uniforme e alto contraste com o fundo. Combine uma palavra principal com amplo espaço negativo; preserve os espaços internos e evite linhas finas demais para leitura reduzida.",
        "Pôster minimalista com o título DESIGN."
      ],
      [
        "duotone",
        "Duas cores, uma direção",
        "Converta a imagem para uma composição em duas cores escolhidas, preservando contraste e hierarquia. Distribua uma cor nas sombras e outra nas altas luzes; evite perder detalhes essenciais no rosto ou objeto.",
        "Retrato em preto e laranja para um cartaz."
      ],
      [
        "halftone",
        "Textura de impressão",
        "Traduza os tons da imagem em uma retícula de pontos com escala consistente. Preserve contornos e rosto legíveis, use contraste controlado e evite pontos tão grandes que eliminem informações importantes.",
        "Retrato editorial em retícula preta sobre creme."
      ],
      [
        "risoprint",
        "Camadas de tinta",
        "Simule impressão risográfica com duas ou três tintas, textura de papel e pequenos desalinhamentos entre camadas. Preserve legibilidade do texto e a forma principal; não exagere o deslocamento ou a sujeira.",
        "Cartaz de uma oficina criativa em laranja e preto."
      ],
      [
        "papergrain",
        "O suporte participa",
        "Use textura discreta de papel no fundo e na impressão, com distribuição irregular natural. Mantenha títulos e elementos finos nítidos; evite manchas artificiais ou granulação que concorra com o conteúdo.",
        "Convite editorial sobre papel creme."
      ],
      [
        "collage",
        "Conexões inesperadas",
        "Monte uma colagem com um assunto central e poucos recortes complementares. Varie escala de forma intencional, preserve bordas físicas e sombras discretas; organize um percurso visual em vez de preencher todos os espaços.",
        "Pessoa em miniatura explorando objetos de escritório."
      ],
      [
        "editorialspread",
        "Uma dupla de páginas",
        "Planeje duas páginas editoriais com grid comum, títulos e legendas hierarquizados. Respeite margens e área da dobra; mantenha textos importantes longe do centro e use imagens que conduzam a leitura entre páginas.",
        "Matéria visual sobre design e inteligência artificial."
      ],
      [
        "covergrid",
        "Capa com hierarquia",
        "Crie uma capa com um título dominante, imagem principal e no máximo três chamadas secundárias fornecidas. Organize leitura em níveis claros e deixe espaço para respirar; não invente nomes, números ou datas.",
        "Capa de um guia chamado PRIMEIROS PASSOS NO DESIGN."
      ],
      [
        "wayfinding",
        "Informação que orienta",
        "Desenvolva placas direcionais com setas consistentes, contraste alto e textos curtos fornecidos. Use grid e espaçamentos uniformes; priorize leitura à distância e evite símbolos ambíguos ou excesso de cores.",
        "Sinalização para recepção, salas e saída de um estúdio."
      ],
      [
        "iconfamily",
        "Ícones da mesma família",
        "Crie um conjunto de ícones com espessura de traço, cantos e proporções consistentes. Trabalhe em uma grade comum e teste a leitura em tamanho pequeno; não misture ícones preenchidos e lineares sem um sistema claro.",
        "Ícones para câmera, pincel, luz e imagem."
      ],
      [
        "patterntile",
        "Padrão que continua",
        "Construa um módulo visual repetível cujas bordas se conectem sem interrupção. Distribua motivos com ritmo equilibrado e mantenha escala consistente; apresente uma amostra repetida para demonstrar continuidade.",
        "Estampa geométrica preta e laranja para embalagem."
      ],
      [
        "monogramstudy",
        "Iniciais com intenção",
        "Explore três soluções conceituais de monograma para as iniciais fornecidas. Preserve a identificação das letras, equilibre espessuras e espaços negativos e apresente primeiro em uma cor, sem simular registro de marca.",
        "Estudos das iniciais de uma marca fictícia chamada NO."
      ],
      [
        "infographic",
        "Dados que se entendem",
        "Organize apenas os dados fornecidos em uma hierarquia visual clara, com rótulos legíveis e escala coerente. Use uma forma gráfica apropriada a cada comparação; marque informações ausentes em vez de inventar números.",
        "Infográfico com três etapas reais de um processo criativo."
      ]
    ]
  ],
  [
    "Personagens",
    "♙",
    [
      [
        "identitylock",
        "Você continua sendo você",
        "Use a referência enviada como guia de identidade. Preserve formato do rosto, traços, idade aparente, tom de pele e assimetrias; altere apenas o cenário solicitado.",
        "Meu avatar em uma cafeteria, usando minha referência."
      ],
      [
        "charactersheet",
        "Consistência em todos os ângulos",
        "Crie uma prancha do mesmo personagem em vistas frontal, lateral e traseira, com roupa, proporções e iluminação consistentes sobre fundo neutro.",
        "Prancha frontal, lateral e traseira do avatar."
      ],
      [
        "techwear",
        "Futuro pronto para vestir",
        "Vista o personagem com techwear funcional preto e grafite, recortes estruturados e detalhes laranja discretos. Mantenha materiais e anatomia plausíveis.",
        "Meu avatar com roupa técnica preta e laranja."
      ],
      [
        "claycharacter",
        "Personalidade modelada à mão",
        "Transforme o personagem em uma figura de argila artesanal, com pequenas marcas de modelagem, volumes expressivos e iluminação de estúdio suave.",
        "Personagem simpático modelado em argila."
      ],
      [
        "miniature",
        "Um universo em miniatura",
        "Mostre o personagem em escala miniatura ao lado de um objeto cotidiano. Use pistas claras de escala, textura realista e foco seletivo.",
        "Avatar em miniatura escalando uma caneca."
      ],
      [
        "expression",
        "Uma identidade, várias emoções",
        "Apresente quatro expressões do mesmo personagem: alegria, surpresa, concentração e confiança. Preserve roupa, proporções faciais e identidade.",
        "Quatro expressões de um personagem original."
      ],
      [
        "frontprofile",
        "Frente e perfil coerentes",
        "Apresente a mesma pessoa de frente e de perfil, lado a lado e na mesma escala. Preserve nariz, queixo, orelhas, cabelo, roupa e idade aparente; use luz uniforme e fundo neutro para comparação visual.",
        "Avatar adulto em duas vistas de referência."
      ],
      [
        "wardrobevariants",
        "Uma pessoa, três looks",
        "Mostre três variações de roupa na mesma pessoa, mantendo rosto, corpo, pose básica e iluminação. Troque apenas o vestuário solicitado; preserve marcas fornecidas e evite alterações de idade ou proporções.",
        "Avatar com roupa casual, esportiva e executiva."
      ],
      [
        "poseboard",
        "Gestos consistentes",
        "Monte uma prancha com quatro poses distintas do mesmo personagem. Preserve rosto, roupa e escala; escolha gestos com anatomia plausível e silhuetas claras, evitando mãos ocultas quando forem importantes para a ação.",
        "Personagem cumprimentando, apontando, caminhando e sentado."
      ],
      [
        "handgesture",
        "Mãos que comunicam",
        "Enquadre o personagem com as mãos visíveis em um gesto simples e específico. Preserve dedos, articulações e conexão dos braços com o corpo; use luz suficiente para leitura e evite mãos sobrepostas sem necessidade.",
        "Designer apresentando um objeto com as duas mãos."
      ],
      [
        "seatedportrait",
        "Presença sem rigidez",
        "Posicione o personagem sentado de maneira natural, com apoio coerente na cadeira e pés estáveis. Preserve proporções de tronco e pernas, use gestos relaxados e deixe mãos legíveis no enquadramento.",
        "Retrato de uma pessoa sentada em um banco de madeira."
      ],
      [
        "walkingportrait",
        "Um passo natural",
        "Mostre o personagem no meio de uma caminhada, com apoio do peso em uma perna e balanço coerente dos braços. Preserve roupa e identidade; evite pés flutuantes ou passadas anatomicamente impossíveis.",
        "Avatar caminhando por uma rua de Florianópolis."
      ],
      [
        "athleticportrait",
        "Energia sem exagero",
        "Retrate a pessoa durante uma atividade física simples, com esforço plausível e expressão natural. Preserve seu corpo de referência, roupa e idade; não acrescente músculos nem altere proporções para intensificar a cena.",
        "Pessoa fazendo alongamento em uma quadra."
      ],
      [
        "workportrait",
        "A pessoa e o ofício",
        "Mostre o personagem realizando uma tarefa de sua profissão com ferramentas adequadas. Faça mãos e objetos interagirem de forma plausível; preserve identidade e evite equipamentos sem função ou posição impossível.",
        "Designer desenhando em uma mesa de trabalho."
      ],
      [
        "characterduo",
        "Duas identidades claras",
        "Use duas referências separadas para dois personagens. Mantenha os traços, roupas e proporções de cada um sem mistura; organize uma interação simples com espaço entre corpos e mãos claramente atribuídas.",
        "Dois amigos conversando em frente a um palco."
      ],
      [
        "heightcontrast",
        "Diferença de escala humana",
        "Coloque os dois personagens lado a lado no mesmo plano, com pés no mesmo chão e câmera à altura natural. Preserve as alturas relativas fornecidas; não use perspectiva forçada que distorça rostos ou corpos.",
        "Dupla de personagens com alturas diferentes."
      ],
      [
        "mascotconcept",
        "Mascote com personalidade",
        "Crie um mascote original a partir de três atributos fornecidos da marca. Use silhueta simples, expressão reconhecível e poucos detalhes; apresente corpo inteiro sobre fundo neutro e evite imitar personagens existentes.",
        "Mascote curioso, criativo e amigável para um estúdio."
      ],
      [
        "robotassistant",
        "Tecnologia com expressão",
        "Desenvolva um robô assistente original com juntas funcionais, sensores legíveis e silhueta amigável. Use materiais coerentes e detalhes luminosos com função aparente; evite excesso de peças e rostos humanos distorcidos.",
        "Robô preto e laranja para um universo de design."
      ],
      [
        "plushcharacter",
        "Personagem de pelúcia",
        "Converta o personagem em um boneco de pelúcia, preservando seus traços distintivos. Use fibras curtas, costuras e volumes macios plausíveis; mantenha olhos e acessórios firmemente integrados e evite aparência de pele real.",
        "Avatar com barba transformado em uma pelúcia."
      ],
      [
        "vinyltoy",
        "Colecionável autoral",
        "Transforme o personagem em um colecionável de vinil com formas simplificadas e acabamento acetinado. Preserve elementos de reconhecimento, use base estável e apresente como objeto físico fotografado em estúdio.",
        "Personagem de agasalho laranja como miniatura de vinil."
      ],
      [
        "origamicharacter",
        "Personalidade em dobras",
        "Construa o personagem com planos de papel dobrado e vincos claros. Preserve a silhueta e poucos traços essenciais; mantenha espessura fina e sombras entre dobras, sem misturar aparência de tecido ou argila.",
        "Raposa simpática feita de papel laranja."
      ],
      [
        "inkcharacter",
        "Traço com identidade",
        "Ilustre o personagem em tinta preta com variação controlada de espessura. Preserve proporções e características reconhecíveis; organize sombras em massas claras e evite excesso de hachuras no rosto.",
        "Retrato de um avatar em desenho de tinta."
      ],
      [
        "watercolorportrait",
        "Cor que respira",
        "Crie um retrato em aquarela com áreas translúcidas e bordas suaves. Preserve olhos, formato do rosto e identidade; use o branco do papel como luz e evite manchas que apaguem traços essenciais.",
        "Retrato de uma pessoa com roupa laranja."
      ],
      [
        "pixelportrait",
        "Reconhecimento em poucos pixels",
        "Traduza o personagem para pixel art com grade consistente e paleta limitada. Preserve silhueta, cabelo e acessórios principais; use blocos definidos, sem suavização de bordas nem mistura de resoluções.",
        "Avatar de designer em pixel art de corpo inteiro."
      ],
      [
        "creatureboard",
        "Uma criatura coerente",
        "Desenvolva uma criatura original em vistas frontal e lateral, com anatomia consistente e pontos de articulação plausíveis. Preserve materiais e padrões entre vistas; use fundo simples e inclua uma silhueta de escala.",
        "Dragão mecânico original preto com detalhes laranja."
      ]
    ]
  ],
  [
    "Cinema e vídeo",
    "▷",
    [
      [
        "dollyin",
        "Aproxime a emoção",
        "Planeje uma tomada contínua com avanço lento da câmera em direção ao sujeito, sem zoom digital. Preserve continuidade de cenário, identidade e iluminação.",
        "Aproximação lenta de uma pessoa em uma mesa."
      ],
      [
        "orbit",
        "Veja por outro ângulo",
        "Planeje um movimento orbital suave de 90 graus em torno do sujeito, mantendo distância e altura constantes, com paralaxe natural do fundo.",
        "Câmera contorna um produto em 90 graus."
      ],
      [
        "slowmotion",
        "Cada instante importa",
        "Descreva uma ação simples em câmera lenta, com aceleração física coerente, movimento fluido e detalhes preservados. Evite mudanças bruscas de enquadramento.",
        "Pessoa lançando um tecido leve ao ar."
      ],
      [
        "matchcut",
        "Conecte duas ideias",
        "Planeje dois planos conectados por uma forma ou movimento semelhante. Descreva o quadro final do primeiro e o inicial do segundo para manter a continuidade.",
        "Corte entre um círculo desenhado e uma roda."
      ],
      [
        "establishing",
        "Primeiro, o universo",
        "Abra com um plano geral que apresente local, horário e escala. Faça um movimento lento e direcional para revelar o sujeito principal.",
        "Plano geral de um estúdio criativo."
      ],
      [
        "loop",
        "O fim encontra o começo",
        "Planeje um ciclo curto de movimento cujo último quadro corresponda ao primeiro. Preserve posição da câmera, luz e fundo para uma repetição suave.",
        "Um objeto oscilando suavemente em um ciclo."
      ],
      [
        "panreveal",
        "Revelação lateral",
        "Planeje uma panorâmica horizontal lenta a partir de um detalhe do cenário até revelar o sujeito. Mantenha a câmera no mesmo ponto e descreva início e fim claramente; evite deslocamento lateral confundido com rotação.",
        "Revelar um carro estacionado dentro de uma garagem."
      ],
      [
        "tiltup",
        "Da base ao protagonista",
        "Planeje uma inclinação suave da câmera de baixo para cima, começando nos pés ou na base e terminando no rosto ou topo. Mantenha o ponto da câmera fixo e preserve geometria durante a revelação.",
        "Revelar um personagem com roupa futurista."
      ],
      [
        "craneup",
        "Ganhar altura",
        "Planeje uma subida gradual da câmera para revelar a escala do ambiente. Defina um sujeito de referência que permaneça reconhecível; mantenha horizonte estável e evite teletransporte ou mudança abrupta de distância.",
        "Sair de um músico e revelar o palco completo."
      ],
      [
        "tracking",
        "Acompanhe a ação",
        "Planeje um deslocamento da câmera paralelo ao sujeito em movimento. Mantenha velocidade relativa constante e distância estável; descreva uma única ação principal e preserve continuidade de cenário, roupa e iluminação.",
        "Acompanhar uma pessoa caminhando pela orla."
      ],
      [
        "followshot",
        "Dentro do caminho",
        "Posicione a câmera atrás do sujeito e acompanhe seu percurso com movimento suave. Mantenha distância legível, horizonte estável e continuidade do espaço; evite atravessar paredes ou objetos do cenário.",
        "Seguir um personagem entrando em um estúdio."
      ],
      [
        "handheld",
        "Presença documental",
        "Use movimento de câmera na mão com pequenas oscilações naturais e controladas. Mantenha o assunto legível e uma ação simples; evite tremores excessivos, cortes involuntários ou deformação do cenário.",
        "Bastidores de um artista preparando o palco."
      ],
      [
        "lockedoff",
        "Deixe a ação falar",
        "Fixe a câmera em um enquadramento único enquanto o sujeito realiza uma ação simples. Preserve foco, exposição e cenário; descreva começo, desenvolvimento e conclusão sem acrescentar movimentos de câmera.",
        "Pessoa coloca uma caneca na mesa e olha para a câmera."
      ],
      [
        "rackfocus",
        "O foco muda a história",
        "Planeje uma transição de foco do primeiro plano para o fundo, com câmera fixa. Defina claramente os dois assuntos e suas distâncias; preserve tamanho, posição e iluminação durante a mudança de foco.",
        "Foco sai de um pincel e chega ao designer ao fundo."
      ],
      [
        "parallax",
        "Profundidade em movimento",
        "Desloque a câmera lateralmente entre elementos próximos e distantes. Faça o primeiro plano mover-se mais rápido no quadro que o fundo; preserve geometria e evite que objetos se deformem ou deslizem sozinhos.",
        "Produto em uma mesa com plantas no primeiro plano."
      ],
      [
        "whippan",
        "Transição por movimento",
        "Planeje dois planos unidos por uma panorâmica rápida na mesma direção. Use borrão direcional no instante da transição e estabilize o segundo plano; mantenha a ação compreensível sem flashes ou cortes adicionais.",
        "Transição entre um desenho e o produto final."
      ],
      [
        "revealdoor",
        "Uma entrada com intenção",
        "Comece com uma porta fechada e revele o sujeito quando ela se abre. Defina a dobradiça, o sentido de abertura e a posição da câmera; mantenha mãos, maçaneta e painel sem atravessamentos.",
        "Pessoa abre a porta de seu ateliê."
      ],
      [
        "productrotation",
        "Giro de produto",
        "Planeje uma rotação lenta do produto sobre um eixo vertical fixo. Mantenha câmera, luz e escala constantes; preserve marca, materiais e geometria ao longo do giro e evite mudar detalhes entre ângulos.",
        "Giro de uma caixa de som preta e laranja."
      ],
      [
        "lightreveal",
        "A luz revela a forma",
        "Mantenha produto e câmera fixos enquanto uma faixa luminosa atravessa a superfície. Revele contornos e materiais gradualmente; preserve a posição do objeto e faça os reflexos acompanharem apenas a luz.",
        "Revelação de um capacete em um estúdio escuro."
      ],
      [
        "timelapse",
        "Transformação no tempo",
        "Planeje uma passagem acelerada do tempo com câmera fixa e elementos estáveis. Defina uma mudança gradual específica, como luz do dia ou montagem de uma mesa; evite alterações aleatórias na arquitetura.",
        "Mesa de trabalho sendo organizada antes de uma sessão."
      ],
      [
        "stopmotion",
        "Movimento artesanal",
        "Planeje uma animação em pequenos deslocamentos quadro a quadro, com câmera e luz fixas. Preserve a forma dos objetos e use intervalos de movimento consistentes; evite fluidez que apague a sensação de stop motion.",
        "Recortes de papel formando uma composição."
      ],
      [
        "shotreverse",
        "Conversa com continuidade",
        "Planeje dois enquadramentos alternados de uma conversa, respeitando a linha de ação e a direção dos olhares. Preserve posição relativa, luz e figurino; mantenha cada plano focado em uma reação clara.",
        "Dois personagens discutindo uma ideia em uma mesa."
      ],
      [
        "actionmatch",
        "Um gesto atravessa o corte",
        "Divida uma ação simples em dois planos com continuidade de posição e direção. Termine o primeiro no início do gesto e retome no segundo no mesmo movimento; evite repetir ou pular etapas da ação.",
        "Pessoa pega um lápis em plano aberto e começa a desenhar em detalhe."
      ],
      [
        "ambientloop",
        "Ambiente que respira",
        "Planeje um plano fixo com movimentos ambientais sutis e repetíveis, como cortina ou reflexo. Preserve o assunto principal estável e faça início e fim visualmente compatíveis para um loop contínuo.",
        "Estúdio vazio com cortina se movendo suavemente."
      ],
      [
        "performance",
        "Gestos de apresentação",
        "Planeje uma performance curta com dois ou três gestos naturais associados à fala ou música fornecida. Preserve identidade, mãos e figurino; use câmera estável e não invente sincronização labial sem referência de áudio.",
        "Rapper gesticulando com uma mão durante uma apresentação."
      ]
    ]
  ],
  [
    "Marca e publicidade",
    "↗",
    [
      [
        "brandworld",
        "Um universo para sua marca",
        "Crie um cenário de marca usando a paleta e a logo fornecidas, materiais coerentes e um elemento central memorável. Preserve a geometria e as cores da logo.",
        "Universo visual preto e laranja para um estúdio."
      ],
      [
        "packaging",
        "Uma embalagem desejável",
        "Apresente uma embalagem com a arte fornecida aplicada corretamente às superfícies, sem deformar a logo. Use perspectiva e iluminação realistas.",
        "Caixa de produto usando a arte anexada."
      ],
      [
        "campaign",
        "Uma campanha, uma ideia",
        "Desenvolva três conceitos visuais de campanha com a mesma direção de arte. Defina foco, enquadramento e aplicação para cada peça, sem inventar benefícios do produto.",
        "Três conceitos para uma campanha de canecas."
      ],
      [
        "flatlay",
        "Tudo no seu lugar",
        "Organize os produtos em uma composição vista de cima, com espaçamentos consistentes, fundo coerente com a marca e sombras suaves.",
        "Kit de ferramentas de design visto de cima."
      ],
      [
        "apparel",
        "Sua identidade em movimento",
        "Aplique a arte fornecida a uma peça de vestuário, acompanhando dobras e textura do tecido. Preserve o desenho e apresente frente e costas.",
        "Camiseta com a logo fornecida aplicada ao tecido."
      ],
      [
        "billboard",
        "Sua ideia em grande escala",
        "Insira a arte fornecida em um outdoor urbano realista, com perspectiva e iluminação coerentes. Preserve proporções e área segura da composição.",
        "Cartaz fornecido aplicado a um outdoor urbano."
      ],
      [
        "brandpalette",
        "Uma paleta em aplicação",
        "Apresente a paleta fornecida em superfícies e materiais de uma cena de marca. Defina uma cor dominante e acentos menores; preserve os valores das cores e não acrescente tons que mudem a identidade.",
        "Preto, branco e laranja aplicados a um kit de escritório."
      ],
      [
        "stationery",
        "Identidade no cotidiano",
        "Aplique a identidade fornecida a papel timbrado, cartão e envelope. Preserve logo, margens e proporções; apresente os três itens com perspectiva coerente e não invente dados de contato ou textos institucionais.",
        "Papelaria de um estúdio usando a logo anexada."
      ],
      [
        "businesscard",
        "Primeiro contato",
        "Crie um mockup de cartão com frente e verso, usando apenas as informações fornecidas. Preserve área segura e legibilidade; apresente espessura e acabamento do papel de forma realista, sem alterar a logo.",
        "Cartão preto com monograma laranja."
      ],
      [
        "logodeboss",
        "Marca em baixo-relevo",
        "Aplique a logo fornecida em baixo-relevo sobre papel ou couro. Preserve desenho e proporções; use iluminação lateral para mostrar profundidade discreta e evite sombras que deformem letras ou preencham espaços internos.",
        "Monograma em baixo-relevo em uma capa de caderno."
      ],
      [
        "foil",
        "Detalhe metalizado",
        "Aplique acabamento metalizado somente às áreas indicadas da arte. Use reflexos dependentes da iluminação e textura do suporte; preserve bordas e legibilidade e evite transformar toda a embalagem em metal.",
        "Logo em acabamento cobre sobre caixa preta."
      ],
      [
        "storefront",
        "Marca na fachada",
        "Aplique a identidade fornecida à fachada de um estabelecimento com escala plausível. Respeite perspectiva, iluminação e arquitetura; mantenha textos legíveis e não invente placas, promoções ou serviços.",
        "Fachada de um estúdio com letreiro branco e laranja."
      ],
      [
        "vehicleskin",
        "Identidade em movimento",
        "Aplique a arte fornecida às superfícies de um veículo, respeitando portas, janelas e curvaturas. Preserve geometria, rodas e detalhes do modelo de referência; mantenha a logo legível e evite cobrir áreas de visão.",
        "Van de atendimento com envelopamento preto e laranja."
      ],
      [
        "shoppingbag",
        "A marca vai junto",
        "Crie um mockup de sacola com alças e dobras realistas. Aplique a logo sem deformações, respeite área de impressão e use textura compatível com o papel; mantenha uma composição simples e bem iluminada.",
        "Sacola preta com assinatura branca de um estúdio."
      ],
      [
        "labeldesign",
        "Rótulo com leitura",
        "Organize o conteúdo fornecido de um rótulo em níveis de importância. Preserve nome, volume e informações obrigatórias recebidas; sinalize dados ausentes e não invente ingredientes, certificações ou benefícios.",
        "Rótulo de um café artesanal com informações fornecidas."
      ],
      [
        "unboxing",
        "Uma experiência de abertura",
        "Planeje uma cena de embalagem aberta mostrando produto, proteção e materiais de apoio coerentes. Preserve a identidade visual e organize os elementos na ordem da experiência; não acrescente itens que não existam no kit.",
        "Kit de boas-vindas de uma marca de design."
      ],
      [
        "pointofsale",
        "Destaque no ponto de venda",
        "Apresente o produto em um expositor proporcional e estável. Use a identidade fornecida com foco no item principal; preserve circulação, escala e legibilidade e evite promoções ou preços não informados.",
        "Expositor de balcão para uma linha de canecas."
      ],
      [
        "seasonalcampaign",
        "Estação sem perder identidade",
        "Adapte a cena da marca à estação solicitada por luz, materiais e poucos elementos de contexto. Preserve logo e paleta principal; evite decoração genérica excessiva ou mudanças no produto.",
        "Campanha de verão para uma garrafa térmica."
      ],
      [
        "benefitvisual",
        "Mostre um benefício real",
        "Traduza um benefício comprovado e fornecido em uma situação de uso visual. Mantenha proporções e contexto plausíveis; não invente resultados, testes ou números e preserve a identidade do produto.",
        "Mochila com divisórias organizando os itens mostrados na referência."
      ],
      [
        "usecontext",
        "Produto em uso",
        "Mostre o produto sendo utilizado em uma situação cotidiana apropriada. Faça mãos, postura e objetos interagirem naturalmente; preserve dimensões e detalhes e evite promessas visuais incompatíveis com o uso real.",
        "Pessoa usando uma caneca na mesa de trabalho."
      ],
      [
        "materialstory",
        "A origem pela matéria",
        "Construa uma composição com o produto e sua matéria-prima informada. Relacione textura e cor sem sugerir ingredientes desconhecidos; mantenha o produto em destaque e use poucos elementos complementares.",
        "Caderno ao lado de papel e fibras fornecidos como referência."
      ],
      [
        "launchvisual",
        "Uma chegada marcante",
        "Crie uma imagem de lançamento com produto dominante, fundo coerente com a marca e espaço para o texto fornecido. Preserve embalagem e logo; não acrescente datas, escassez ou afirmações comerciais não informadas.",
        "Lançamento visual de uma camiseta preta e laranja."
      ],
      [
        "brandtexture",
        "Textura com assinatura",
        "Desenvolva uma textura de apoio a partir de formas e cores da identidade fornecida. Use repetição sutil e contraste baixo para não competir com textos; preserve a logo como elemento separado e íntegro.",
        "Textura geométrica para fundos de posts do estúdio."
      ],
      [
        "brandguideline",
        "Regras visuais claras",
        "Organize uma prancha de identidade com logo fornecida, paleta, tipografia indicada e exemplos de aplicação. Separe regras confirmadas de sugestões; não invente fontes ou especificações e preserve proporções do símbolo.",
        "Prancha resumida da identidade visual de uma marca."
      ],
      [
        "mockupset",
        "Uma marca, vários contatos",
        "Apresente três aplicações complementares da mesma identidade em uma cena organizada. Use luz e perspectiva consistentes, preserve logo e paleta e evite sobreposição que esconda informações importantes.",
        "Cartão, caderno e camiseta com a mesma identidade."
      ]
    ]
  ],
  [
    "Social e conteúdo",
    "▤",
    [
      [
        "carousel",
        "Uma ideia por slide",
        "Estruture um carrossel de seis slides: gancho, problema, dois passos práticos, exemplo e chamada para ação. Use textos curtos e uma ideia por slide.",
        "Carrossel sobre três formas de melhorar um título."
      ],
      [
        "reelcover",
        "O primeiro segundo visual",
        "Crie uma capa vertical com foco visual único, contraste forte e espaço seguro para um título curto. Preserve a leitura em tamanho pequeno.",
        "Capa para um Reel sobre contraste."
      ],
      [
        "beforeafter",
        "Mostre a transformação",
        "Organize um comparativo visual entre o material original e sua versão revisada, usando a mesma escala e enquadramento. Não invente resultados.",
        "Comparativo real de uma arte antes e depois da revisão."
      ],
      [
        "tutorial",
        "Aprender fazendo",
        "Divida o assunto em quatro passos para iniciantes. Explique termos técnicos em linguagem simples e inclua um exemplo concreto em cada passo.",
        "Tutorial básico sobre hierarquia visual."
      ],
      [
        "moodboard",
        "A direção antes da criação",
        "Monte um painel de referências organizado por paleta, materiais, luz e composição. Mantenha um conceito visual claro e evite excesso de elementos.",
        "Painel de direção de arte para uma marca de café."
      ],
      [
        "story",
        "Uma história em três telas",
        "Planeje uma sequência de três Stories: uma pergunta relevante, uma demonstração visual e um convite à interação. Use linguagem direta e legível no celular.",
        "Três Stories ensinando a usar espaço negativo."
      ],
      [
        "hookquestion",
        "Uma pergunta que abre",
        "Escreva cinco perguntas de abertura específicas para o tema e público fornecidos. Evite promessas absolutas e suspense sem entrega; escolha uma e explique qual dúvida concreta o conteúdo responderá.",
        "Ganchos para ensinar contraste a iniciantes no Canva."
      ],
      [
        "hookmistake",
        "Comece pelo erro",
        "Crie três aberturas baseadas em um erro real relacionado ao assunto. Mostre a consequência de forma concreta e conecte cada abertura a uma correção prática; evite humilhar iniciantes ou inventar estatísticas.",
        "Post sobre excesso de fontes em uma arte."
      ],
      [
        "mythfact",
        "Mito com explicação",
        "Estruture um post que apresente uma crença comum, explique sua limitação e ofereça um exemplo útil. Diferencie opinião de fato e peça fonte quando uma afirmação depender de dados não fornecidos.",
        "A ideia de que todo espaço vazio precisa ser preenchido."
      ],
      [
        "quicktip",
        "Uma dica aplicável",
        "Crie um conteúdo curto com uma única melhoria prática, explicada em linguagem simples. Inclua situação de uso, ação concreta e forma de conferir o resultado; evite acumular dicas desconectadas no mesmo post.",
        "Melhorar o contraste de um título em uma imagem."
      ],
      [
        "checklist",
        "Antes de publicar",
        "Monte uma lista de verificação curta para o objetivo fornecido. Use itens observáveis e ações claras, em ordem de revisão; explique termos técnicos em poucas palavras e evite critérios vagos como deixar mais bonito.",
        "Checklist de legibilidade de um post para celular."
      ],
      [
        "stepbystep",
        "Do primeiro toque ao resultado",
        "Estruture um tutorial para iniciantes com uma ação por etapa e um resultado esperado. Use a versão ou interface informada; quando ela faltar, sinalize que os nomes dos controles precisam ser conferidos, sem inventar botões.",
        "Tutorial de organização de elementos no Canva mobile."
      ],
      [
        "comparison",
        "Compare para decidir",
        "Compare duas alternativas usando os mesmos critérios fornecidos, com exemplos concretos. Explique para qual situação cada uma funciona melhor e indique informações ausentes; não invente preços ou recursos atuais.",
        "Comparação visual entre alinhamento central e à esquerda."
      ],
      [
        "minicase",
        "O raciocínio por trás",
        "Transforme o projeto fornecido em um mini case com problema, decisões, execução e resultado observado. Use apenas fatos e métricas recebidos; quando não houver resultado medido, descreva a mudança visual sem inventar impacto.",
        "Redesign de um card com melhor hierarquia."
      ],
      [
        "processpost",
        "Mostre como chegou lá",
        "Organize o processo criativo em etapas com uma decisão por quadro. Explique por que cada mudança ajuda o objetivo e mostre materiais reais fornecidos; evite apresentar rascunhos fictícios como bastidores autênticos.",
        "Da ideia inicial à composição final de um cartaz."
      ],
      [
        "faq",
        "Respostas sem enrolação",
        "Crie respostas curtas para as dúvidas fornecidas, usando linguagem de iniciante e um exemplo por resposta. Separe limitações e hipóteses de fatos; não invente perguntas de clientes como se fossem depoimentos reais.",
        "Dúvidas sobre resolução e tamanho de imagens."
      ],
      [
        "contentseries",
        "Uma série com continuidade",
        "Planeje cinco episódios curtos sobre o mesmo tema, do básico à aplicação. Dê a cada episódio uma pergunta central e um exercício; evite repetir explicações e termine com uma conexão natural ao próximo assunto.",
        "Série sobre tipografia para quem cria pelo celular."
      ],
      [
        "challenge",
        "Prática que cabe no dia",
        "Crie um desafio de cinco dias com tarefas pequenas e progressivas. Defina material necessário, ação e critério de conclusão em cada dia; adapte ao nível informado e evite depender de ferramentas pagas não solicitadas.",
        "Desafio de composição com formas e duas cores."
      ],
      [
        "exercise",
        "Aprenda testando",
        "Proponha um exercício simples com objetivo, restrições claras e modo de comparar o antes e depois. Use exemplos acessíveis e uma tarefa que possa ser concluída com os recursos informados.",
        "Criar três hierarquias usando o mesmo texto."
      ],
      [
        "caption",
        "Legenda com direção",
        "Escreva uma legenda com abertura concreta, desenvolvimento curto e uma chamada para ação ligada ao conteúdo. Preserve o tom informado e inclua cinco hashtags pertinentes; não prometa viralização nem invente resultados.",
        "Legenda de um post mostrando um estudo de luz com IA."
      ],
      [
        "cta",
        "Um próximo passo claro",
        "Crie cinco chamadas para ação distintas e específicas para o conteúdo. Relacione cada uma a uma ação possível, como salvar ou testar; evite pedidos múltiplos na mesma frase e iscas sem entrega.",
        "CTA para um carrossel sobre combinações de cores."
      ],
      [
        "storypoll",
        "Conversa em duas opções",
        "Planeje um Story com pergunta clara e duas alternativas comparáveis, seguido por uma tela explicando o raciocínio. Use o assunto fornecido e evite perguntas manipulativas ou respostas em que uma opção seja obviamente absurda.",
        "Enquete comparando duas hierarquias de título."
      ],
      [
        "contentremix",
        "Uma ideia, três formatos",
        "Adapte o conteúdo fornecido para post único, carrossel e roteiro curto, preservando a mesma mensagem. Ajuste extensão e ritmo a cada formato; não acrescente dados ou exemplos apresentados como fatos sem fonte.",
        "Transformar uma aula sobre espaço negativo em três posts."
      ],
      [
        "accessibility",
        "Conteúdo que mais gente entende",
        "Revise o material fornecido quanto a legibilidade, contraste, linguagem e dependência exclusiva de cor. Sugira texto alternativo descritivo para imagens e legendas para vídeo; não afirme conformidade técnica sem verificação apropriada.",
        "Revisão de um carrossel com textos pequenos e cores próximas."
      ],
      [
        "contentaudit",
        "Revisão com critério",
        "Avalie o conteúdo recebido por clareza do objetivo, hierarquia, utilidade e chamada para ação. Aponte três ajustes prioritários com exemplos de reescrita; não atribua desempenho a métricas que não foram fornecidas.",
        "Revisão de um post educativo antes da publicação."
      ]
    ]
  ],
  [
    "Gastronomia e bebidas",
    "♨",
    [
      [
        "foodsteam",
        "Vapor de comida recém-servida",
        "Fotografe o prato quente com luz lateral posterior, evidenciando fios de vapor translúcido. Preserve textura dos ingredientes, louça e porção realista. Use fundo escuro desfocado e evite fumaça densa que esconda o alimento.",
        "Sopa de abóbora em uma tigela de cerâmica."
      ],
      [
        "foodcrumb",
        "O miolo em detalhe",
        "Mostre uma fatia parcialmente separada para revelar miolo, crosta e migalhas naturais. Ilumine lateralmente e mantenha a superfície cortada em foco. Preserve a densidade plausível da massa e evite textura de esponja artificial.",
        "Pão de fermentação natural sobre tábua de madeira."
      ],
      [
        "foodcheesepull",
        "Queijo no instante certo",
        "Capture uma porção sendo levantada com poucos fios de queijo ligando as partes. Mantenha utensílio, mão e alimento em posições físicas coerentes. Preserve textura e evite fios infinitos ou excesso de brilho oleoso.",
        "Fatia de pizza de queijo saindo da assadeira."
      ],
      [
        "foodlayers",
        "Camadas apetitosas",
        "Fotografe um corte limpo que revele as camadas do alimento na ordem correta. Use luz suave, foco frontal e fundo simples. Preserve espessuras plausíveis e deixe pequenas irregularidades que comuniquem preparo real.",
        "Fatia de bolo com três camadas e recheio de chocolate."
      ],
      [
        "foodpour",
        "Calda em movimento",
        "Mostre um fio contínuo de calda caindo de um recipiente visível sobre a sobremesa. Faça a viscosidade, o acúmulo e os reflexos coerentes. Evite respingos impossíveis e mantenha o alimento principal claramente reconhecível.",
        "Calda de chocolate sendo servida sobre sorvete."
      ],
      [
        "foodprep",
        "O ingrediente encontra a mão",
        "Registre uma etapa específica do preparo, com mãos e utensílios interagindo corretamente. Use superfície organizada e poucos ingredientes relevantes. Preserve anatomia e posição dos dedos e deixe a ação central visualmente compreensível.",
        "Mãos abrindo massa fresca sobre uma bancada."
      ],
      [
        "foodrustic",
        "Mesa com memória",
        "Apresente o prato em louça simples sobre uma superfície rústica, com luz de janela e acessórios usados de forma discreta. Preserve higiene visual e cores naturais; evite desgaste excessivo ou objetos sem relação com a refeição.",
        "Arroz de forno em uma mesa de almoço familiar."
      ],
      [
        "foodfine",
        "Precisão no prato",
        "Crie uma apresentação gastronômica com porção central, poucos elementos e amplo espaço na louça. Use luz suave e câmera a 45 graus. Preserve texturas comestíveis, proporções plausíveis e não acrescente ingredientes desconhecidos.",
        "Sobremesa de frutas com montagem minimalista."
      ],
      [
        "foodbreakfast",
        "Manhã bem servida",
        "Organize uma pequena mesa de café da manhã com luz natural baixa e itens de escala coerente. Use uma composição convidativa, sem excesso de utensílios, e preserve a textura de pão, frutas e bebidas.",
        "Café, pão e frutas em uma mesa junto à janela."
      ],
      [
        "foodmarket",
        "Cor de feira",
        "Fotografe ingredientes frescos em uma banca organizada, com pequenas variações de tamanho e maturação. Use luz ambiente e profundidade de campo moderada. Evite frutas clonadas, brilho plástico e padrões repetidos artificialmente.",
        "Tomates de diferentes tamanhos em caixas de madeira."
      ],
      [
        "foodgrill",
        "Textura na grelha",
        "Mostre o alimento sobre a grelha com marcas de cocção, calor e pouca fumaça. Preserve volumes e materiais plausíveis, mantendo o ponto visual solicitado. Evite chamas cobrindo o prato ou uma superfície inteiramente carbonizada.",
        "Legumes coloridos sendo grelhados ao ar livre."
      ],
      [
        "foodicecream",
        "Derretimento delicado",
        "Apresente sorvete com bordas levemente amolecidas e pequenas gotas escorrendo pela gravidade. Preserve a forma principal e a textura cremosa. Use iluminação suave e evite poças exageradas que escondam a apresentação.",
        "Sorvete de pistache em uma casquinha artesanal."
      ],
      [
        "foodingredients",
        "Receita em elementos",
        "Disponha os ingredientes informados ao redor do prato final, com separação clara e porções plausíveis. Use vista superior e iluminação uniforme. Não adicione ingredientes não fornecidos nem trate a composição como informação nutricional.",
        "Ingredientes de uma salada mediterrânea ao redor da tigela."
      ],
      [
        "foodshared",
        "Refeição compartilhada",
        "Enquadre uma mesa com pratos ao centro e mãos alcançando itens diferentes, sem colisões. Preserve quantidade de pessoas implícita, anatomia e posições dos talheres. Use luz acolhedora e mantenha o alimento em destaque.",
        "Amigos dividindo uma pizza em uma mesa pequena."
      ],
      [
        "drinkespresso",
        "Crema em primeiro plano",
        "Fotografe uma xícara pequena de espresso com crema irregular e reflexos suaves. Mostre porcelana, borda e escala realistas, usando foco próximo e fundo discreto. Evite espuma alta semelhante a cappuccino.",
        "Espresso recém-servido em xícara branca."
      ],
      [
        "drinklatte",
        "Desenho na espuma",
        "Apresente a bebida vista de cima com um desenho simples de latte art integrado à espuma. Preserve bordas naturais, contraste entre café e leite e escala da xícara. Evite figuras excessivamente detalhadas ou flutuantes.",
        "Cappuccino com uma folha desenhada na espuma."
      ],
      [
        "drinktea",
        "Infusão em transparência",
        "Mostre uma infusão em recipiente transparente, com cor gradual e folhas compatíveis com o chá informado. Use contraluz suave, vapor discreto e refração plausível. Preserve o volume do líquido e a espessura do vidro.",
        "Chá de hibisco servido em um bule de vidro."
      ],
      [
        "drinkmocktail",
        "Frescor sem álcool",
        "Crie uma apresentação de mocktail com ingredientes fornecidos, gelo irregular e decoração comestível discreta. Use luz lateral e fundo simples. Preserve nível do líquido e evite frutas atravessando o vidro ou flutuando sem apoio.",
        "Mocktail de limão e hortelã em copo alto."
      ],
      [
        "drinkbubbles",
        "Efervescência sutil",
        "Fotografe uma bebida gaseificada em vidro, com bolhas pequenas subindo de pontos plausíveis. Preserve transparência, nível do líquido e reflexos controlados. Evite bolhas enormes ou distribuição perfeitamente uniforme.",
        "Água com gás e uma rodela de limão."
      ],
      [
        "drinkbottlepair",
        "Garrafa e serviço",
        "Apresente uma garrafa ao lado do copo com a bebida correspondente. Preserve identidade do rótulo fornecido, escala relativa e nível do líquido. Organize os objetos sem ocultar a marca e use luz que revele vidro e conteúdo.",
        "Suco artesanal em garrafa e copo sobre fundo claro."
      ]
    ]
  ],
  [
    "Arquitetura e espaços",
    "⌂",
    [
      [
        "spaceatrium",
        "Luz no vazio central",
        "Crie um átrio com iluminação zenital, circulação clara e elementos estruturais plausíveis. Mostre a relação entre pavimentos sem distorcer escadas ou guarda-corpos. Use pessoas discretas apenas como escala e preserve as linhas verticais.",
        "Átrio de uma biblioteca contemporânea."
      ],
      [
        "spacecourtyard",
        "Um jardim no centro",
        "Apresente um pátio interno conectado aos ambientes por portas e janelas coerentes. Use vegetação proporcional, materiais naturais e luz suave. Preserve drenagem visualmente plausível e evite árvores atravessando coberturas.",
        "Pátio de uma casa compacta com uma árvore central."
      ],
      [
        "spaceloft",
        "Amplitude com função",
        "Organize um loft em zonas de estar, trabalho e descanso sem bloquear a circulação. Use luz natural e perspectiva controlada, mantendo pilares e aberturas consistentes. Evite móveis em escala incompatível com o ambiente.",
        "Loft com área de trabalho para um designer."
      ],
      [
        "spacetiny",
        "Pouco espaço, boa solução",
        "Mostre um ambiente compacto com mobiliário proporcional e usos claramente definidos. Preserve passagem entre peças e acesso a portas. Use enquadramento honesto, sem distorções de grande angular que façam o espaço parecer maior.",
        "Home office em um canto de apartamento pequeno."
      ],
      [
        "spacegallery",
        "Arte com respiro",
        "Apresente uma galeria com obras originais ou fornecidas, iluminação dirigida e distância suficiente entre peças. Preserve perspectiva de molduras e circulação. Evite textos curatoriais inventados e reflexos que impeçam a leitura das obras.",
        "Galeria com três pinturas abstratas em tons terrosos."
      ],
      [
        "spacecafe",
        "Um café para ficar",
        "Crie um café com balcão funcional, mesas proporcionais e caminhos livres. Equilibre luz natural e luminárias, preserve materiais e detalhes de uso. Evite repetir cadeiras idênticas em posições fisicamente impossíveis.",
        "Café pequeno com madeira clara e detalhes laranja."
      ],
      [
        "spacestudio",
        "Criatividade organizada",
        "Apresente um estúdio de design com mesa de trabalho, referências visuais e armazenamento coerente. Use poucos objetos que comuniquem atividade real. Preserve cabos, telas e perspectiva, sem textos aleatórios ou interfaces ilegíveis dominantes.",
        "Estúdio de criação preto e grafite com acentos laranja."
      ],
      [
        "spacelibrary",
        "Ritmo entre estantes",
        "Organize estantes, mesas e iluminação para criar profundidade e circulação clara. Preserve espessura das prateleiras e apoio dos livros. Use lombadas discretas sem títulos inventados e evite escadas ou corredores sem saída plausível.",
        "Biblioteca de bairro com uma área de leitura."
      ],
      [
        "spacehotel",
        "Quarto acolhedor",
        "Mostre um quarto de hospedagem com cama proporcional, iluminação em camadas e acesso livre aos móveis. Preserve textura de tecidos e simetria intencional. Evite transformar o ambiente em uma suíte maior que a referência.",
        "Quarto compacto com roupa de cama clara e madeira."
      ],
      [
        "spacebath",
        "Materiais em equilíbrio",
        "Apresente um banheiro com bancada, espelho e box em posições funcionais. Faça reflexos coerentes com a câmera e mantenha acabamentos resistentes à água. Evite torneiras sem ligação visual ou espelhos refletindo espaços inexistentes.",
        "Banheiro com pedra cinza e metais escuros."
      ],
      [
        "spacekitchen",
        "Uma cozinha utilizável",
        "Organize bancada, pia e equipamentos com escala e acesso coerentes. Use iluminação natural e detalhes de uso moderados. Preserve continuidade dos armários e evite portas que colidam visualmente ou utensílios atravessando superfícies.",
        "Cozinha integrada pequena com bancada de madeira."
      ],
      [
        "spacebalcony",
        "Entre dentro e fora",
        "Mostre uma varanda com mobiliário proporcional, vegetação e vista compatível com o pavimento. Preserve guarda-corpo e circulação. Equilibre exposição interna e externa sem criar um fundo superiluminado ou perspectiva irreal.",
        "Varanda de apartamento com duas cadeiras e plantas."
      ],
      [
        "spacerooftop",
        "Horizonte habitável",
        "Apresente um terraço com áreas de estar, proteção nas bordas e estrutura plausível. Use luz de fim de tarde e vista urbana coerente. Evite piscinas, árvores ou volumes sem suporte estrutural aparente.",
        "Terraço de um prédio com bancos e vasos grandes."
      ],
      [
        "spacepool",
        "Reflexos arquitetônicos",
        "Componha uma piscina junto à arquitetura, com bordas retas, nível da água e reflexos coerentes. Use luz natural e profundidade visível. Preserve a escala do entorno e evite água atravessando o revestimento.",
        "Piscina de uma casa com paredes claras e jardim."
      ],
      [
        "spacepassage",
        "Um caminho de luz",
        "Mostre um corredor com repetição de elementos e um ponto de chegada claro. Use luz para guiar o olhar, mantendo largura e altura plausíveis. Evite portas desalinhadas e linhas convergentes contraditórias.",
        "Corredor de um centro cultural com iluminação lateral."
      ],
      [
        "spacestair",
        "Escada como escultura",
        "Apresente uma escada com degraus regulares, apoio estrutural e guarda-corpo coerentes. Use enquadramento que revele sua forma sem impedir a leitura do percurso. Evite degraus que desapareçam ou se conectem de modo impossível.",
        "Escada curva de concreto em um hall."
      ],
      [
        "spacefacadedetail",
        "Encontro de materiais",
        "Aproxime a câmera de uma junção arquitetônica, mostrando textura e espessura dos materiais. Preserve escala e fixações plausíveis. Use luz lateral para revelar detalhes sem inventar especificações técnicas ou cotas.",
        "Encontro de madeira, vidro e concreto numa fachada."
      ],
      [
        "spaceshadowwall",
        "A parede recebe o dia",
        "Use uma parede arquitetônica como suporte para sombras produzidas por elementos reais do espaço. Preserve direção e escala da luz, textura do revestimento e poucas linhas de composição. Evite sombras sem fonte identificável.",
        "Parede clara recebendo a sombra de um pergolado."
      ],
      [
        "spacenightfront",
        "Fachada ao anoitecer",
        "Mostre a fachada com iluminação interna e externa coerentes, preservando detalhes arquitetônicos. Controle o brilho das janelas e mantenha a rua legível. Não invente letreiros ou nomes de estabelecimentos.",
        "Casa contemporânea com luzes quentes ao anoitecer."
      ],
      [
        "spaceadaptive",
        "Novo uso, memória preservada",
        "Represente um edifício antigo adaptado a uma nova função, preservando elementos originais visíveis. Diferencie materiais novos e antigos com coerência. Não apresente a imagem conceitual como obra executada ou projeto estrutural aprovado.",
        "Antigo galpão convertido em espaço de criação."
      ]
    ]
  ],
  [
    "Natureza e paisagens",
    "❋",
    [
      [
        "landmistvalley",
        "Vale em camadas",
        "Crie uma paisagem de vale com névoa baixa entre planos de relevo. Preserve a escala das árvores e a direção da luz. Use contraste decrescente ao fundo, evitando montanhas repetidas ou neblina igualmente densa em toda parte.",
        "Vale verde ao amanhecer com uma trilha estreita."
      ],
      [
        "landdunes",
        "Linhas do vento",
        "Fotografe dunas com cristas irregulares e marcas de vento em escala coerente. Use luz baixa lateral para revelar volume. Preserve textura de areia e evite formas idênticas ou sombras apontando em direções diferentes.",
        "Dunas costeiras ao pôr do sol."
      ],
      [
        "landrockshore",
        "Encontro com o mar",
        "Mostre ondas encontrando rochas com espuma e água escoando pelas superfícies. Preserve escala, horizonte e textura molhada. Use um ponto de vista seguro e evite ondas geometricamente repetidas ou rochas flutuantes.",
        "Costão rochoso com mar agitado em dia nublado."
      ],
      [
        "landtidal",
        "O desenho da maré",
        "Apresente uma faixa costeira durante maré baixa, com canais rasos e superfícies úmidas refletindo o céu. Preserve o horizonte e as variações naturais da areia. Evite padrões perfeitos ou água sem conexão com o mar.",
        "Praia extensa com pequenos canais de maré."
      ],
      [
        "landwaterfall",
        "Água e relevo",
        "Mostre uma queda d'água seguindo a topografia e acumulando-se numa área plausível. Preserve textura das rochas, escala da vegetação e névoa discreta. Evite água surgindo de paredes sem origem ou correndo contra a gravidade.",
        "Cachoeira estreita em uma mata densa."
      ],
      [
        "landforestpath",
        "O caminho na mata",
        "Componha uma trilha entre árvores com profundidade progressiva e vegetação variada. Use luz filtrada e solo irregular, preservando uma passagem legível. Evite troncos repetidos ou raízes que se confundam com objetos artificiais.",
        "Trilha úmida em uma floresta atlântica."
      ],
      [
        "landbamboo",
        "Ritmo vertical",
        "Apresente um bosque de bambu com variação natural de espessura, inclinação e distância entre caules. Preserve nós e folhas plausíveis. Use luz difusa e mantenha uma trilha ou abertura que organize a profundidade.",
        "Passagem estreita entre bambus altos."
      ],
      [
        "landalpine",
        "Altitude em silêncio",
        "Crie uma paisagem montanhosa com encostas, neve ou rocha distribuídas de forma plausível. Use atmosfera fria e perspectiva aérea. Preserve escala e evite picos idênticos ou vegetação tropical em áreas congeladas.",
        "Lago de montanha cercado por picos rochosos."
      ],
      [
        "landmeadow",
        "Um campo vivo",
        "Mostre um campo com diferentes alturas de grama e flores distribuídas sem padrão uniforme. Use luz natural suave e foco que destaque uma área principal. Evite flores clonadas ou saturação excessiva.",
        "Prado com flores pequenas numa manhã clara."
      ],
      [
        "landautumn",
        "Cor em transição",
        "Apresente árvores com variações graduais de cor e folhas caídas em distribuição natural. Preserve diversidade de formas e luz coerente. Evite pintar toda a paisagem de um único tom ou misturar estações contraditórias.",
        "Caminho de parque no início do outono."
      ],
      [
        "landwinter",
        "Branco com textura",
        "Mostre neve acumulada de forma coerente sobre solo, galhos e estruturas. Preserve sombras suaves, pequenas irregularidades e marcas de passagem quando solicitadas. Evite superfícies totalmente lisas ou neve cobrindo áreas protegidas igualmente.",
        "Cabana cercada de neve após uma noite fria."
      ],
      [
        "landstormsky",
        "O céu anuncia",
        "Crie uma paisagem sob nuvens de tempestade com variações de densidade e luz distante. Preserve um horizonte legível e escala atmosférica. Evite relâmpagos decorativos em excesso ou nuvens com formas repetidas.",
        "Campo aberto sob um céu carregado."
      ],
      [
        "landrainbow",
        "Cor depois da chuva",
        "Mostre uma paisagem úmida após chuva, com arco-íris discreto numa posição coerente com a iluminação. Preserve contraste natural e reflexos suaves. Evite arco opaco ou cores neon sem relação com a cena.",
        "Estrada rural molhada com arco-íris ao fundo."
      ],
      [
        "landstars",
        "Noite sob estrelas",
        "Apresente uma paisagem noturna com céu estrelado e primeiro plano pouco iluminado. Preserve escala e distribuição irregular das estrelas. Evite combinar um céu de longa exposição com sombras solares fortes ou excesso de luminosidade no chão.",
        "Árvore isolada numa planície sob céu estrelado."
      ],
      [
        "landriverbend",
        "Curva que conduz",
        "Mostre um rio sinuoso integrado ao relevo, com margens e vegetação coerentes. Use um ponto de vista elevado para revelar o percurso. Evite bifurcações impossíveis ou mudanças de nível sem queda d'água.",
        "Rio atravessando uma planície verde."
      ],
      [
        "landmangrove",
        "Raízes entre águas",
        "Fotografe um manguezal com raízes, água rasa e sedimentos em escala natural. Use luz filtrada e reflexos discretos. Preserve a estrutura das plantas e evite transparência de piscina ou vegetação incompatível com o ambiente.",
        "Manguezal visto próximo à superfície da água."
      ],
      [
        "landlagoon",
        "Calma em transparência",
        "Mostre uma lagoa com variação de profundidade, margens naturais e reflexos coerentes. Use água parcialmente transparente sem eliminar a reflexão do céu. Preserve escala do relevo e evite saturação turquesa uniforme.",
        "Lagoa rasa junto a dunas e vegetação baixa."
      ],
      [
        "landbasalt",
        "Geometria da natureza",
        "Apresente formações rochosas com padrões naturais irregulares, fissuras e desgaste. Use luz lateral para revelar volume. Preserve variação de escala e evite transformar a formação em uma estrutura perfeitamente modular.",
        "Colunas de basalto próximas ao mar."
      ],
      [
        "landmorningdew",
        "O pequeno amanhecer",
        "Fotografe folhas ou grama com gotas de orvalho em tamanhos variados. Preserve aderência às superfícies, refração e escala. Use luz baixa suave e evite gotas idênticas ou superfícies artificialmente plastificadas.",
        "Orvalho em folhas de um jardim ao amanhecer."
      ],
      [
        "landislandair",
        "Ilha vista do alto",
        "Mostre uma ilha em vista aérea oblíqua, com relevo, vegetação e faixa costeira coerentes. Preserve profundidade do mar por gradientes naturais. Evite recifes simétricos ou construções sem escala consistente.",
        "Pequena ilha rochosa com enseada e mata."
      ]
    ]
  ],
  [
    "Moda e acessórios",
    "✧",
    [
      [
        "wearlookbook",
        "Look completo em contexto",
        "Apresente uma pessoa de corpo inteiro usando o conjunto fornecido, com pose simples e fundo discreto. Preserve caimento, cores e proporções da roupa. Deixe calçados e acessórios visíveis, sem alongar artificialmente o corpo.",
        "Look casual com jaqueta preta e tênis laranja."
      ],
      [
        "weartailoring",
        "Estrutura de alfaiataria",
        "Destaque a construção de uma peça de alfaiataria, com lapelas, costuras e caimento plausíveis. Use pose natural e luz suave. Preserve o corpo da referência e evite tecido rígido ou botões desalinhados.",
        "Blazer cinza sobre camisa branca sem gravata."
      ],
      [
        "weardenim",
        "Jeans com personalidade",
        "Fotografe uma peça de jeans enfatizando trama, lavagem e costuras. Faça dobras coerentes com o movimento do corpo. Preserve detalhes fornecidos e evite desgaste distribuído de forma artificial ou uniforme.",
        "Jaqueta jeans escura em um retrato urbano."
      ],
      [
        "wearknit",
        "Volume da malha",
        "Apresente uma roupa de tricô com pontos e espessura consistentes. Use iluminação suave que revele volume e dobras naturais. Preserve proporção dos pontos e evite malha esticada sem relação com a postura.",
        "Suéter de tricô creme em uma pessoa sentada."
      ],
      [
        "wearleather",
        "Couro em movimento",
        "Mostre uma peça de couro com vincos nas áreas de articulação e brilho controlado. Preserve peso visual e costuras, sem efeito de plástico molhado. Use enquadramento que mostre o caimento real da peça.",
        "Jaqueta de couro preta com poucos acessórios."
      ],
      [
        "wearlinen",
        "Leveza do linho",
        "Fotografe roupa de linho com amassados leves e trama visível. Use luz natural difusa e gesto relaxado. Preserve transparência plausível e não elimine todas as marcas do tecido para produzir acabamento artificial.",
        "Camisa de linho bege em ambiente costeiro."
      ],
      [
        "wearsports",
        "Função esportiva",
        "Apresente roupa esportiva durante um movimento simples, preservando ajuste, costuras e áreas de ventilação. Use anatomia coerente e tecido reagindo à postura. Evite modificar a logo ou inventar tecnologias de desempenho.",
        "Conjunto de treino preto e laranja em uma quadra."
      ],
      [
        "wearraincoat",
        "Proteção sob chuva",
        "Mostre uma capa ou jaqueta impermeável sob chuva leve, com gotas aderindo ao tecido e escorrendo pelas dobras. Preserve fechamento e capuz. Evite sugerir desempenho certificado ou propriedades não fornecidas.",
        "Jaqueta laranja fotografada numa rua molhada."
      ],
      [
        "wearpuffer",
        "Camadas de volume",
        "Apresente uma jaqueta acolchoada com gomos proporcionais e costuras contínuas. Faça a compressão nas articulações acompanhar a pose. Preserve o volume original sem inflar excessivamente braços ou tronco.",
        "Jaqueta puffer preta em cenário urbano frio."
      ],
      [
        "wearsneakerpair",
        "Tênis em dupla",
        "Organize os dois tênis em ângulos complementares, mostrando lateral, sola e materiais sem deformação. Preserve o desenho fornecido e a relação entre pé esquerdo e direito. Use sombras de contato e fundo limpo.",
        "Par de tênis branco com detalhes laranja."
      ],
      [
        "wearsole",
        "Tração em detalhe",
        "Aproxime a câmera da sola para mostrar desenho, textura e transição de materiais. Preserve a geometria de referência e use luz lateral. Não invente números de desempenho ou transforme sulcos em padrões aleatórios.",
        "Detalhe da sola de um tênis esportivo."
      ],
      [
        "wearwatchwrist",
        "Relógio no pulso",
        "Fotografe o relógio no pulso com proporção realista e pulseira ajustada. Preserve caixa, mostrador e marca fornecidos. Controle reflexos no vidro e mantenha anatomia da mão e do antebraço coerentes.",
        "Relógio de caixa escura com pulseira de tecido."
      ],
      [
        "wearglasses",
        "Óculos com transparência",
        "Apresente os óculos em um rosto ou suporte simples, mantendo lentes, hastes e ponte na mesma geometria. Preserve transparência e reflexos discretos. Evite alterar os olhos ou deformar o rosto através das lentes.",
        "Óculos de armação âmbar em retrato editorial."
      ],
      [
        "wearbagopen",
        "O que cabe na bolsa",
        "Mostre a bolsa aberta com poucos objetos relevantes organizados em compartimentos plausíveis. Preserve costuras, ferragens e volume externo. Evite itens atravessando o tecido ou um interior maior que a própria bolsa.",
        "Mochila com caderno, fone e garrafa."
      ],
      [
        "wearjewelry",
        "Pequena escala, grande detalhe",
        "Fotografe a joia sobre superfície simples, com luz que revele metal e pedras. Preserve tamanho relativo, encaixes e delicadeza das peças. Evite brilho que apague a forma ou invente gemas não fornecidas.",
        "Anel de prata sobre cerâmica fosca."
      ],
      [
        "wearscarf",
        "Tecido em fluxo",
        "Mostre um lenço em movimento suave, preso ou segurado por um ponto claramente definido. Preserve estampa e continuidade do tecido. Use luz que revele translucidez sem criar dobras impossíveis ou partes soltas duplicadas.",
        "Lenço laranja sendo segurado ao vento."
      ],
      [
        "wearcap",
        "Boné em três quartos",
        "Apresente um boné em ângulo de três quartos para mostrar aba, copa e ajuste traseiro quando visível. Preserve a logo e costuras. Use materiais realistas e evite aba assimétrica ou símbolo deformado.",
        "Boné preto com monograma fornecido na frente."
      ],
      [
        "wearbelt",
        "Ferragens e acabamento",
        "Organize um cinto em curva natural com fivela e ponta visíveis. Preserve largura, furos e espessura do material. Use luz suave com reflexos metálicos controlados, evitando curvas que pareçam borracha líquida.",
        "Cinto de couro marrom com fivela escovada."
      ],
      [
        "wearfabricmotion",
        "Caimento em um passo",
        "Capture uma pessoa dando um passo simples para revelar como a roupa se move. Preserve peso do tecido, direção das dobras e anatomia. Evite vento exagerado ou barra atravessando o corpo.",
        "Vestido de tecido leve em uma caminhada."
      ],
      [
        "wearaccessoryset",
        "Conjunto coordenado",
        "Apresente três acessórios de um mesmo look em composição organizada, com escala e materiais consistentes. Use uma paleta de fundo que destaque o conjunto. Preserve marcas fornecidas e evite sobreposição que esconda detalhes.",
        "Óculos, relógio e carteira sobre fundo grafite."
      ]
    ]
  ],
  [
    "Arte e ilustração",
    "✎",
    [
      [
        "artgouache",
        "Cor opaca e gesto",
        "Ilustre o assunto em guache com massas de cor opaca, pinceladas visíveis e bordas ligeiramente irregulares. Preserve formas essenciais e hierarquia. Evite brilho de renderização ou textura digital uniforme sobre toda a imagem.",
        "Uma cafeteria de esquina ilustrada em guache."
      ],
      [
        "artcharcoal",
        "Luz feita de carvão",
        "Desenhe o assunto em carvão sobre papel texturizado, com massas escuras e áreas apagadas para luz. Preserve estrutura e contraste focal. Evite contornos igualmente fortes em todas as partes ou aparência de filtro fotográfico.",
        "Retrato expressivo em carvão."
      ],
      [
        "artpastel",
        "Pigmento macio",
        "Use pastel seco com sobreposição de pigmentos e textura de papel aparente. Preserve volumes por manchas de cor e bordas suaves. Evite misturar todas as cores até perder contraste ou usar brilho oleoso.",
        "Paisagem de praia em tons suaves."
      ],
      [
        "artlinocut",
        "Força do entalhe",
        "Crie uma ilustração com aparência de gravura em linóleo, usando áreas chapadas e linhas de entalhe. Preserve contraste e simplificação das formas. Evite gradientes fotográficos ou detalhes finos incompatíveis com a técnica.",
        "Ilustração de um pássaro entre folhas."
      ],
      [
        "artwoodcut",
        "Marcas na matriz",
        "Represente o assunto como xilogravura com cortes irregulares e contraste forte. Use textura de impressão discreta, sem perder a leitura da cena. Evite sombreado digital suave ou padrões repetidos mecanicamente.",
        "Barco de pesca numa cena costeira."
      ],
      [
        "artetching",
        "Linhas que constroem volume",
        "Ilustre com traços finos e hachuras cruzadas, variando densidade para formar luz e sombra. Preserve legibilidade das áreas principais. Evite linhas aleatórias que não acompanhem a forma ou preencham todo o papel.",
        "Uma máquina de escrever em gravura detalhada."
      ],
      [
        "artbotanical",
        "Planta observada",
        "Crie uma ilustração botânica da planta informada, mostrando folhas, caule e flor com estrutura coerente. Use fundo claro e cores moderadas. Não invente identificação científica ou apresente detalhes imaginados como registro técnico.",
        "Ramo de uma planta de referência com flores."
      ],
      [
        "artcutpaperportrait",
        "Retrato em recortes",
        "Construa o rosto com poucos planos de papel colorido sobrepostos. Preserve características reconhecíveis, proporções e direção da luz. Use sombras de contato discretas e evite adicionar detalhes fotográficos fora da linguagem escolhida.",
        "Retrato de um avatar em cinco cores de papel."
      ],
      [
        "artmosaic",
        "Imagem em fragmentos",
        "Monte a imagem com pequenas peças de mosaico, variando formato e orientação conforme as áreas. Preserve leitura à distância e juntas visíveis. Evite peças todas iguais ou superfícies contínuas sem separação.",
        "Paisagem costeira formada por mosaico de cerâmica."
      ],
      [
        "artstainedglass",
        "Luz através da cor",
        "Represente o assunto em vitral com segmentos de vidro e linhas estruturais de chumbo. Use luz transmitida e variação sutil de textura. Preserve uma composição legível e evite divisões tão pequenas que apaguem o desenho.",
        "Painel de vitral com formas de folhas."
      ],
      [
        "artfresco",
        "Pigmento na parede",
        "Crie uma pintura mural com aparência de pigmento integrado ao reboco, usando cores terrosas e textura discreta. Preserve a forma principal e evite desgaste exagerado. Não imite uma obra histórica específica.",
        "Cena original de pessoas trabalhando em um jardim."
      ],
      [
        "artimpasto",
        "Pintura que tem relevo",
        "Use pinceladas espessas e camadas de tinta em relevo para construir o assunto. Faça a luz revelar marcas físicas e direção do gesto. Preserve a composição e evite textura idêntica aplicada indiscriminadamente.",
        "Natureza-morta com frutas em pintura espessa."
      ],
      [
        "artwash",
        "Uma cor, vários valores",
        "Ilustre usando lavagens de uma única cor, com transparência variável e reservas de papel. Preserve profundidade por valores tonais. Evite contornos excessivos e mantenha uma área focal com contraste mais definido.",
        "Rua antiga ilustrada em azul monocromático."
      ],
      [
        "artlinecontinuous",
        "Uma linha conta",
        "Desenhe o assunto com uma linha contínua expressiva, priorizando silhueta e traços essenciais. Use fundo simples e peso de linha consistente. Evite excesso de voltas que tornem a figura difícil de reconhecer.",
        "Perfil de uma pessoa em linha contínua."
      ],
      [
        "artgeometricanimal",
        "Fauna em planos",
        "Construa um animal com formas geométricas planas e paleta reduzida. Preserve postura e características que permitem reconhecê-lo. Organize sobreposições de modo claro e evite detalhes realistas que conflitem com a simplificação.",
        "Tucano composto por círculos e polígonos."
      ],
      [
        "arteditorialmetaphor",
        "Uma ideia visual",
        "Traduza o conceito informado em uma metáfora visual com um elemento principal e um contraste claro. Use composição simples e símbolos compreensíveis. Evite texto explicativo dentro da imagem e associações visuais excessivamente abstratas.",
        "Criatividade representada por uma planta crescendo de um lápis."
      ],
      [
        "artchildrenbook",
        "História ilustrada",
        "Crie uma cena original de livro infantil com formas claras, expressões suaves e poucos elementos narrativos. Preserve consistência do personagem e espaço para texto externo. Evite imitar personagens existentes ou incluir palavras inventadas.",
        "Uma criança explorando um jardim com uma lanterna."
      ],
      [
        "artscientificconcept",
        "Explicação visual conceitual",
        "Ilustre o processo informado com partes claramente separadas e sequência visual simples. Preserve os fatos fornecidos e sinalize o caráter conceitual. Evite números, rótulos ou detalhes científicos não confirmados.",
        "Ilustração conceitual do ciclo da água sem textos."
      ],
      [
        "artcomicpanel",
        "Um instante de quadrinhos",
        "Crie um único quadro de quadrinhos com ação compreensível, silhuetas separadas e expressão clara. Use enquadramento que conduza o olhar. Não acrescente balões ou falas sem texto fornecido e preserve anatomia consistente.",
        "Personagem surpreso ao encontrar uma ideia desenhada no ar."
      ],
      [
        "arttravelposter",
        "Um lugar em síntese",
        "Represente o destino por elementos visuais fornecidos, com grandes massas de cor e hierarquia de formas. Preserve traços reconhecíveis e deixe espaço para título externo. Evite inventar monumentos ou inserir slogans não solicitados.",
        "Cartaz ilustrado de Florianópolis com mar e ponte de referência."
      ]
    ]
  ],
  [
    "Mundos imaginários",
    "✦",
    [
      [
        "worldfloatingcity",
        "Cidade nas nuvens",
        "Crie uma cidade fictícia suspensa entre nuvens, com plataformas conectadas e arquitetura de linguagem consistente. Defina uma lógica visual para sua sustentação. Preserve escala e profundidade, evitando edifícios repetidos ou pontes sem destino.",
        "Cidade flutuante com estruturas brancas e jardins."
      ],
      [
        "worldunderwater",
        "Vida sob o oceano",
        "Imagine uma estação submarina com módulos pressurizados, passagens e iluminação interna visíveis. Preserve espessura dos vidros e diferença entre interior e água. Use fauna como escala, sem transformar o ambiente em um aquário raso.",
        "Base científica fictícia no fundo do mar."
      ],
      [
        "worlddesertoutpost",
        "Abrigo no deserto",
        "Crie um posto avançado fictício adaptado ao calor, com sombreamento, reservas e materiais desgastados pelo vento. Organize acessos e funções claramente. Evite detalhes tecnológicos sem relação com o ambiente ou vegetação incompatível.",
        "Estação de pesquisa futurista entre dunas."
      ],
      [
        "worldforestvillage",
        "Arquitetura entre árvores",
        "Imagine uma aldeia integrada a árvores gigantes, com plataformas e caminhos em escala coerente. Preserve crescimento dos troncos e pontos de apoio visíveis. Use iluminação orgânica discreta e evite construções atravessando a vegetação aleatoriamente.",
        "Vila fantástica em uma floresta de árvores monumentais."
      ],
      [
        "worldorbital",
        "Estação em órbita",
        "Mostre uma estação espacial fictícia com módulos conectados, áreas habitáveis e uma silhueta funcional. Defina a fonte de luz principal e preserve escala. Evite misturar atmosferas densas com o vazio do espaço sem justificativa visual.",
        "Estação orbital vista com um planeta ao fundo."
      ],
      [
        "worldlunarhabitat",
        "Casa em outro solo",
        "Imagine um habitat lunar com módulos fechados, passagens protegidas e equipamentos externos plausíveis para a proposta. Use sombras nítidas e terreno irregular. Preserve uma linguagem de materiais consistente, sem vegetação exposta ao vácuo.",
        "Base lunar modular com detalhes laranja."
      ],
      [
        "worldmechgarage",
        "Oficina de máquinas gigantes",
        "Crie uma oficina fictícia para robôs grandes, com plataformas de manutenção, ferramentas proporcionais e zonas de circulação. Use pessoas pequenas como referência de escala. Evite mecanismos flutuantes ou passarelas que terminem no vazio.",
        "Robô de exploração em manutenção numa garagem industrial."
      ],
      [
        "worldbioluminescent",
        "Floresta de luz própria",
        "Imagine um ecossistema noturno com luz produzida por organismos distribuídos de forma seletiva. Preserve áreas escuras e cores organizadas por espécie visual. Evite iluminar cada superfície igualmente ou perder o ponto focal.",
        "Floresta fictícia com fungos luminosos azuis e laranja."
      ],
      [
        "worldcrystalcave",
        "Geologia fantástica",
        "Crie uma caverna fictícia com cristais de diferentes tamanhos ligados às superfícies rochosas. Use refração e luz interna com parcimônia. Preserve profundidade e escala, evitando cristais perfeitamente repetidos ou suspensos sem motivo.",
        "Caverna com cristais âmbar e uma trilha central."
      ],
      [
        "worldskyport",
        "Porto entre alturas",
        "Projete visualmente um terminal aéreo fictício com plataformas de chegada, sinalização sem texto e circulação compreensível. Use veículos originais e coerentes entre si. Preserve escala e evite aeronaves atravessando estruturas.",
        "Porto futurista elevado sobre uma cidade."
      ],
      [
        "worldretrofuture",
        "O futuro imaginado ontem",
        "Crie uma cena futurista original com formas arredondadas, painéis analógicos e materiais inspirados no design industrial retrô. Preserve coerência entre objetos e ambiente. Evite copiar obras ou incluir interfaces com textos ilegíveis dominantes.",
        "Sala de controle retrofuturista em tons creme e laranja."
      ],
      [
        "worldsolarpunk",
        "Cidade que cultiva",
        "Imagine um bairro fictício com vegetação integrada, mobilidade leve e estruturas de captação de energia visualmente plausíveis. Preserve acessos, manutenção e escala humana. Evite apresentar a cena conceitual como solução técnica comprovada.",
        "Praça de um bairro futurista com jardins e cobertura solar."
      ],
      [
        "worldclockwork",
        "Mecânica como linguagem",
        "Construa um ambiente fantástico com engrenagens e mecanismos conectados de forma legível. Use metal, madeira e desgaste controlado. Preserve escalas e pontos de apoio, evitando peças decorativas que se atravessem ou flutuem.",
        "Biblioteca fictícia com mecanismos de relógio nas paredes."
      ],
      [
        "worldicecity",
        "Habitar o frio",
        "Imagine uma cidade fictícia em clima extremo, com caminhos protegidos, entradas abrigadas e materiais coerentes. Use neve acumulada conforme vento e cobertura. Preserve escala humana e evite grandes aberturas desprotegidas sem intenção narrativa.",
        "Pequena cidade polar futurista sob luz azul."
      ],
      [
        "worldminiplanet",
        "Um mundo de bolso",
        "Crie um planeta minúsculo estilizado com uma paisagem contínua envolvendo sua superfície. Defina escala e ponto focal claros. Mantenha a linguagem fantástica consistente e evite objetos realistas gigantes sem relação com o conjunto.",
        "Pequeno planeta com uma casa, árvores e um caminho circular."
      ],
      [
        "worldairship",
        "Viagem suspensa",
        "Imagine um dirigível original com envelope, cabine e pontos de fixação coerentes dentro da proposta. Use nuvens e relevo como escala. Preserve materiais e evite hélices ou asas que se conectem de maneira impossível.",
        "Dirigível de exploração sobre uma cadeia de montanhas."
      ],
      [
        "worldancientfuture",
        "Ruína e tecnologia",
        "Combine uma ruína fictícia com uma intervenção tecnológica claramente posterior. Diferencie materiais e desgaste, mantendo uma história visual simples. Evite símbolos religiosos reais usados aleatoriamente ou aparência de registro arqueológico autêntico.",
        "Observatório futurista instalado numa ruína imaginária."
      ],
      [
        "worldneonmarket",
        "Mercado de outro tempo",
        "Crie um mercado noturno fictício com bancas, circulação e luzes práticas coloridas. Use objetos originais e detalhe concentrado nas áreas principais. Evite letreiros com palavras inventadas e excesso de brilho que elimine profundidade.",
        "Mercado futurista de peças e plantas exóticas."
      ],
      [
        "worldportal",
        "A passagem impossível",
        "Mostre um portal fantástico com borda material definida e um segundo ambiente claramente distinto além dele. Faça a luz interagir com o chão e o sujeito. Preserve continuidade da perspectiva e evite misturar os dois espaços sem limite.",
        "Portal circular numa oficina revelando uma floresta."
      ],
      [
        "worldgiantgarden",
        "Jardim em outra escala",
        "Imagine um jardim em que plantas comuns tenham escala monumental, mantendo texturas e estruturas reconhecíveis. Inclua um sujeito pequeno para comparação. Preserve perspectiva e evite apenas ampliar um elemento sem ajustar seu contexto.",
        "Pessoa caminhando entre folhas gigantes iluminadas pelo sol."
      ]
    ]
  ],
  [
    "Composição e narrativa visual",
    "⊞",
    [
      [
        "frametriangle",
        "Equilíbrio em três pontos",
        "Organize os elementos principais formando um triângulo visual, com um foco dominante e dois apoios secundários. Use diferenças de escala e contraste para guiar a leitura. Evite alinhamento rígido ou competição igual entre os três pontos.",
        "Três produtos em uma composição publicitária."
      ],
      [
        "framediagonal",
        "Energia diagonal",
        "Construa a cena em torno de uma diagonal clara que conecte o primeiro plano ao fundo. Preserve o horizonte quando necessário e distribua elementos secundários sem ruído. Evite inclinar tudo apenas para sugerir dinamismo.",
        "Ciclista atravessando uma composição urbana."
      ],
      [
        "framecenter",
        "Um centro forte",
        "Posicione o assunto principal no centro e organize o entorno para reforçar sua importância. Use simetria ou equilíbrio de massas, preservando espaço ao redor. Evite preencher cada área vazia com elementos decorativos.",
        "Frasco de perfume centralizado em fundo arquitetônico."
      ],
      [
        "frameoffcenter",
        "Equilíbrio fora do centro",
        "Desloque o assunto principal para um dos terços e equilibre-o com uma massa visual menor do lado oposto. Preserve direção do olhar e espaço de movimento. Evite uma composição que pareça cortada por acidente.",
        "Pessoa à direita de uma paisagem com uma árvore distante."
      ],
      [
        "frameleadinglines",
        "Linhas até o assunto",
        "Use linhas reais do cenário para conduzir ao foco principal. Preserve perspectiva e continuidade de trilhos, paredes ou caminhos. Evite convergências contraditórias ou linhas que levem o olhar para fora sem intenção.",
        "Pessoa ao final de um corredor iluminado."
      ],
      [
        "framepatternbreak",
        "Uma diferença que chama",
        "Crie uma repetição visual organizada e introduza um único elemento diferente. Faça a diferença ser clara por cor, posição ou forma, preservando a coerência do conjunto. Evite várias exceções competindo pela atenção.",
        "Uma cadeira laranja entre cadeiras pretas."
      ],
      [
        "frameframewithin",
        "Uma cena dentro da outra",
        "Enquadre o assunto por uma abertura real, como arco ou janela. Preserve espessura, perspectiva e separação entre planos. Mantenha o elemento principal legível e evite bordas que cortem partes importantes do rosto ou objeto.",
        "Pessoa vista através de uma janela de ateliê."
      ],
      [
        "framehorizonlow",
        "O céu ganha espaço",
        "Posicione o horizonte no terço inferior e use o céu como parte dominante da composição. Preserve escala do assunto e variação atmosférica. Evite um céu vazio sem função ou distorção das estruturas no chão.",
        "Silhueta de uma casa sob nuvens expressivas."
      ],
      [
        "framehorizonhigh",
        "O chão conta a história",
        "Coloque o horizonte no terço superior para destacar textura e percurso no primeiro plano. Preserve profundidade e escala progressiva dos elementos. Evite uma superfície repetida artificialmente ou ausência de um ponto focal.",
        "Trilha de areia conduzindo até uma pessoa distante."
      ],
      [
        "framelayerdepth",
        "Três planos legíveis",
        "Organize primeiro plano, assunto principal e fundo com separação clara de foco, luz ou escala. Preserve continuidade espacial e evite que os planos pareçam colagens independentes. Use elementos próximos sem bloquear a ação central.",
        "Café visto entre plantas, com uma pessoa ao centro."
      ],
      [
        "framecoloranchor",
        "Uma cor conduz o olhar",
        "Use uma única cor de destaque no elemento principal e mantenha o entorno em tons moderados. Preserve variações naturais de luz e material. Evite espalhar a mesma cor de destaque por todo o cenário.",
        "Guarda-chuva laranja numa rua cinza."
      ],
      [
        "framesmallsubject",
        "A escala do lugar",
        "Mostre um sujeito pequeno em um ambiente amplo, com contraste suficiente para identificá-lo. Preserve a relação de tamanho e o percurso visual até ele. Evite ampliar detalhes do sujeito incompatíveis com a distância.",
        "Pessoa diante de uma parede rochosa monumental."
      ],
      [
        "frameclosecrop",
        "O detalhe sugere o todo",
        "Faça um corte próximo e intencional que preserve uma característica de reconhecimento do assunto. Use textura e luz para comunicar o restante da forma. Evite cortes acidentais em articulações ou detalhes que tornem a imagem indecifrável.",
        "Enquadramento próximo da roda e carenagem de uma bicicleta."
      ],
      [
        "framevisualecho",
        "Formas que conversam",
        "Relacione duas formas semelhantes em planos ou objetos diferentes, criando uma repetição sutil. Preserve função e escala de cada elemento. Evite correspondência perfeita demais ou adição de objetos sem motivo para forçar a relação.",
        "Uma xícara circular diante de uma janela redonda."
      ],
      [
        "frameabsence",
        "A presença pelo vestígio",
        "Conte uma ação por seus sinais restantes, sem mostrar a pessoa. Use poucos objetos em posições plausíveis e luz coerente. Evite excesso de pistas ou elementos dramáticos que mudem o tom solicitado.",
        "Mesa com uma caneca e um caderno recém-aberto."
      ],
      [
        "frameanticipation",
        "O instante anterior",
        "Mostre uma ação simples um momento antes de acontecer, com tensão visual clara e anatomia plausível. Preserve distância entre os elementos e direção do movimento. Evite mostrar simultaneamente o antes e o resultado.",
        "Mão prestes a tocar a primeira tecla de um piano."
      ],
      [
        "frameaftermoment",
        "Depois do movimento",
        "Represente o instante logo após uma ação cotidiana, usando postura, objetos e pequenas marcas para sugerir o ocorrido. Preserve causalidade e escala. Evite desordem exagerada ou elementos que contradigam a ação proposta.",
        "Pincel ao lado de uma pintura ainda úmida."
      ],
      [
        "frameviewpoint",
        "O olhar de quem participa",
        "Use um enquadramento de ponto de vista pessoal, incluindo mãos ou objetos próximos quando necessário. Preserve perspectiva e anatomia coerentes. Evite mostrar o próprio rosto de forma impossível sem uma superfície refletora.",
        "Vista de quem segura um caderno diante de uma paisagem."
      ],
      [
        "framevisualbalance",
        "Massas em equilíbrio",
        "Equilibre uma forma grande com várias pequenas usando espaço, cor e contraste. Preserve um foco principal e leitura simples. Evite simetria obrigatória ou distribuir os elementos de modo igualmente espaçado sem intenção.",
        "Vaso grande à esquerda e pequenos objetos à direita."
      ],
      [
        "framequietscene",
        "Poucos elementos, muita leitura",
        "Reduza a cena a um assunto principal, uma superfície e uma fonte de luz clara. Preserve textura e pequenas diferenças de valor. Evite preencher o espaço negativo ou adicionar efeitos que enfraqueçam o silêncio visual.",
        "Uma cadeira vazia junto a uma janela."
      ]
    ]
  ],
  [
    "Eventos e celebrações",
    "✺",
    [
      [
        "eventinvitescene",
        "Convite em contexto",
        "Apresente o convite fornecido em uma composição com poucos objetos relacionados ao evento. Preserve texto e proporções, usando luz suave e área livre para leitura. Evite inventar nomes, datas ou detalhes da celebração.",
        "Convite de uma oficina criativa sobre uma mesa."
      ],
      [
        "eventtablescape",
        "Mesa preparada",
        "Crie uma mesa de celebração com louça, flores e iluminação coerentes com o estilo informado. Preserve escala e espaço entre lugares. Evite talheres duplicados, velas atravessando arranjos ou decoração impedindo o uso da mesa.",
        "Mesa de jantar com flores brancas e detalhes laranja."
      ],
      [
        "eventfloralarch",
        "Uma entrada em flores",
        "Apresente um arco floral com estrutura de apoio plausível e distribuição natural de folhagens. Preserve circulação abaixo dele e escala humana. Evite flores repetidas, elementos suspensos sem suporte ou arranjos excessivamente simétricos.",
        "Arco de entrada para uma celebração ao ar livre."
      ],
      [
        "eventstagewide",
        "O evento em escala",
        "Mostre um palco em plano geral com áreas de apresentação, iluminação e plateia claramente separadas. Preserve escala e linhas de visão. Use identidade fornecida sem inventar patrocinadores ou textos nos telões.",
        "Palco de um encontro de design com iluminação laranja."
      ],
      [
        "eventbackstage",
        "Antes de entrar",
        "Fotografe uma preparação de bastidores com uma ação central e poucos objetos relevantes. Preserve identidade, roupa e anatomia. Use luz ambiente plausível e evite apresentar personagens fictícios como registro de um evento real.",
        "Músico ajustando o instrumento antes de subir ao palco."
      ],
      [
        "eventcrowdreaction",
        "A reação em foco",
        "Capture uma pequena parte da plateia reagindo de forma natural, com expressões variadas e mãos plausíveis. Use profundidade de campo para destacar uma pessoa ou grupo. Evite rostos repetidos ou multidão com gestos idênticos.",
        "Público aplaudindo uma apresentação criativa."
      ],
      [
        "eventconfetti",
        "Um instante de festa",
        "Mostre confetes em queda com tamanhos, foco e orientação variados, preservando o rosto do sujeito principal. Faça a distribuição acompanhar gravidade e profundidade. Evite partículas cobrindo toda a imagem de forma uniforme.",
        "Pessoa comemorando uma conquista com confetes laranja."
      ],
      [
        "eventcake",
        "O bolo como centro",
        "Apresente um bolo de celebração com decoração fornecida e acabamento comestível plausível. Use enquadramento que mostre volume e base, preservando escala. Não acrescente nomes, idades ou mensagens não informadas.",
        "Bolo minimalista branco com detalhes laranja."
      ],
      [
        "eventcandles",
        "Luz de comemoração",
        "Fotografe velas acesas sobre uma composição festiva, com chamas proporcionais e luz quente local. Preserve detalhes do entorno com preenchimento suave. Evite fumaça excessiva ou reflexos que simulem incêndio.",
        "Pequeno bolo com velas numa mesa escura."
      ],
      [
        "eventgiftwrap",
        "O cuidado da embalagem",
        "Mostre um presente embrulhado com dobras, fita e papel de textura coerente. Preserve tensão dos laços e posição das abas. Use poucos elementos de apoio e evite etiquetas com textos inventados.",
        "Caixa preta com fita laranja sobre fundo claro."
      ],
      [
        "eventballoons",
        "Volumes no ar",
        "Organize balões com diferentes alturas e pontos de fixação plausíveis. Preserve transparência, brilho e contato entre superfícies. Evite balões atravessando objetos ou cordas que terminem sem ligação.",
        "Arranjo de balões brancos e laranja para uma entrada."
      ],
      [
        "eventoutdoorlights",
        "Festa sob pequenas luzes",
        "Crie uma celebração externa com cordões de luz presos a suportes visíveis e iluminação ambiente discreta. Preserve escala e queda da luz. Evite fios desconectados ou brilho intenso demais para pequenas lâmpadas.",
        "Jantar ao ar livre com luzes suspensas entre árvores."
      ],
      [
        "eventtoast",
        "O encontro dos copos",
        "Capture um brinde com poucos copos se aproximando no centro, mãos anatomicamente coerentes e reflexos controlados. Preserve quantidade de dedos e continuidade dos braços. Evite líquido atravessando o vidro ou respingos sem movimento.",
        "Amigos brindando com bebidas sem álcool numa varanda."
      ],
      [
        "eventgraduation",
        "Um marco pessoal",
        "Crie um retrato de celebração de conclusão de curso com roupa e objetos fornecidos. Preserve identidade e proporções, usando expressão natural. Não invente instituição, certificado ou título e evite textos ilegíveis como destaque.",
        "Pessoa segurando um certificado sem texto legível."
      ],
      [
        "eventworkshop",
        "Aprender junto",
        "Mostre um pequeno grupo participando de uma atividade prática, com tarefas e materiais coerentes. Preserve mãos e escala dos objetos, evitando poses idênticas. Use ambiente organizado e não invente marcas ou nomes de participantes.",
        "Oficina de pintura em uma mesa compartilhada."
      ],
      [
        "eventexhibition",
        "Um projeto em exposição",
        "Apresente trabalhos fornecidos em um espaço expositivo com iluminação adequada e circulação clara. Preserve as artes e sua proporção. Evite inventar prêmios, autoria ou textos curatoriais e mantenha visitantes como elementos secundários.",
        "Exposição de cartazes de design em um corredor amplo."
      ],
      [
        "eventlaunchdesk",
        "Mesa de lançamento",
        "Organize materiais de um lançamento em uma mesa com produto principal, embalagem e identidade fornecida. Preserve coerência de escala e dados reais. Evite preços, datas ou benefícios não informados.",
        "Apresentação de um novo caderno de marca autoral."
      ],
      [
        "eventphotoarea",
        "Espaço para retratos",
        "Crie uma área de fotos com fundo, luz e elementos decorativos proporcionais. Reserve espaço para uma ou duas pessoas sem bloquear a marca fornecida. Evite cenários tão densos que prejudiquem rosto e leitura.",
        "Espaço de retratos preto e laranja para um evento."
      ],
      [
        "eventsunsetceremony",
        "Cerimônia ao fim do dia",
        "Mostre uma pequena cerimônia ao ar livre com luz baixa, assentos organizados e foco claro no espaço principal. Preserve escala e acessibilidade visual. Evite identificar pessoas ou acrescentar símbolos não solicitados.",
        "Cerimônia íntima num jardim ao pôr do sol."
      ],
      [
        "eventcleanup",
        "Quando a festa termina",
        "Represente o encerramento de uma celebração por objetos sendo organizados e luz ambiente mais calma. Preserve um tom respeitoso e a coerência do espaço. Evite sujeira exagerada ou sinais de dano não solicitados.",
        "Mesa de oficina sendo arrumada após o encontro."
      ]
    ]
  ],
  [
    "Artesanato e processos",
    "⚒",
    [
      [
        "craftpottery",
        "A forma nasce no torno",
        "Mostre mãos modelando argila num torno, com pressão e umidade plausíveis. Preserve conexão dos dedos e eixo de rotação. Use foco na ação e evite barro com aparência líquida demais ou peça sem apoio.",
        "Artesão formando uma tigela de cerâmica."
      ],
      [
        "craftglazing",
        "Cor sobre a cerâmica",
        "Capture a aplicação de esmalte numa peça cerâmica com pincel ou banho coerente. Preserve espessura da camada, pontos de contato e textura. Evite apresentar a cor antes da queima como resultado final garantido.",
        "Pincel aplicando acabamento a uma caneca artesanal."
      ],
      [
        "craftwoodjoin",
        "O encontro da madeira",
        "Mostre uma etapa de encaixe entre peças de madeira com geometria e ferramentas plausíveis. Use luz lateral para revelar veios e precisão. Evite partes atravessadas ou detalhes apresentados como instrução técnica validada.",
        "Duas peças de uma caixa sendo ajustadas numa bancada."
      ],
      [
        "craftsanding",
        "Superfície em transformação",
        "Fotografe o lixamento de uma peça com mão, ferramenta e direção do movimento coerentes. Use poeira discreta e textura visível. Preserve apoio do objeto e equipamentos de proteção compatíveis com a cena.",
        "Artesão lixando uma pequena peça de madeira."
      ],
      [
        "craftleatherstitch",
        "Costura à mão",
        "Mostre uma costura manual em couro com furos, linha e agulha posicionados de modo plausível. Preserve tensão da linha e escala dos pontos. Use foco próximo e evite dedos fundidos ou fios sem continuidade.",
        "Detalhe de uma carteira de couro sendo costurada."
      ],
      [
        "craftweaving",
        "Trama em construção",
        "Apresente um tear com fios de urdidura e trama claramente organizados. Preserve direção, tensão e repetição dos fios. Use uma mão em ação simples e evite fios que mudem de percurso sem conexão.",
        "Tecido colorido sendo feito em um pequeno tear."
      ],
      [
        "craftembroidery",
        "Ponto por ponto",
        "Fotografe bordado em bastidor com tecido esticado e linha contínua passando pela agulha. Preserve escala dos pontos e desenho fornecido. Evite símbolos deformados ou agulha atravessando a mão.",
        "Bordado de uma folha em tecido cru."
      ],
      [
        "craftcrochet",
        "Laçadas com volume",
        "Mostre uma peça de crochê em produção, com pontos de escala consistente e fio ligado ao novelo. Preserve posição da agulha e anatomia das mãos. Evite laçadas impossíveis ou textura semelhante a plástico.",
        "Pequeno cesto de crochê em uma mesa."
      ],
      [
        "craftpapermaking",
        "Papel antes da folha",
        "Apresente uma etapa artesanal de produção de papel com fibras úmidas e moldura apoiada. Preserve água, textura e espessura plausíveis. Use luz natural e evite uma superfície pronta perfeitamente lisa no meio do processo.",
        "Folha artesanal sendo retirada de uma tela."
      ],
      [
        "craftbookbinding",
        "Páginas que se unem",
        "Mostre a montagem de um caderno com folhas alinhadas, capa e linha de costura coerentes. Preserve espessura do bloco e posição das mãos. Evite textos aleatórios ou páginas fundidas sem separação.",
        "Caderno artesanal sendo costurado numa bancada."
      ],
      [
        "craftscreenprint",
        "Tinta encontra o suporte",
        "Capture uma etapa de serigrafia com tela, rodo e suporte alinhados. Preserve a arte fornecida e a direção de aplicação. Use detalhes de tinta plausíveis e evite apresentar o processo como garantia de resultado técnico.",
        "Estampa simples sendo aplicada a uma camiseta."
      ],
      [
        "craftletterpress",
        "Impressão com pressão",
        "Mostre tipos ou matriz organizados numa prensa artesanal, com papel e tinta coerentes. Preserve a composição fornecida e detalhes mecânicos visíveis. Evite letras inventadas ou peças que se conectem de modo impossível.",
        "Cartão tipográfico sendo impresso numa prensa pequena."
      ],
      [
        "craftglassblow",
        "Vidro em transformação",
        "Crie uma cena documental de trabalho com vidro quente, com equipamento e proteção adequados ao contexto. Preserve brilho térmico localizado e distância entre pessoas e material. Evite representar contato direto com vidro incandescente.",
        "Artesão trabalhando uma peça de vidro numa oficina."
      ],
      [
        "craftmetalbench",
        "Pequenas peças em bancada",
        "Fotografe uma bancada de trabalho em metal com uma peça central e ferramentas relevantes. Preserve escala e organização funcional. Use marcas de uso moderadas e evite transformar a cena em instrução de operação perigosa.",
        "Oficina de joalheria com um anel em elaboração."
      ],
      [
        "craftwaxseal",
        "Um selo no instante",
        "Mostre a aplicação de um selo sobre cera em uma superfície apropriada, com pressão e volume plausíveis. Preserve símbolo fornecido e textura. Evite texto inventado ou cera que atravesse papel e objetos.",
        "Selo com monograma fornecido sobre um envelope."
      ],
      [
        "craftstamp",
        "Repetição manual",
        "Apresente um carimbo e sua impressão com pequenas diferenças naturais de tinta. Preserve o desenho fornecido, a direção de aplicação e o suporte. Evite duplicações perfeitas sem textura ou símbolos alterados entre carimbo e impressão.",
        "Carimbo de uma folha aplicado a etiquetas de papel."
      ],
      [
        "craftclaysculpt",
        "Escultura em andamento",
        "Mostre uma pequena escultura de argila em processo, com ferramentas e marcas de modelagem coerentes. Preserve estrutura e pontos de apoio. Evite acabamento final polido em toda a peça se a cena representa construção.",
        "Escultura original de um personagem sobre bancada."
      ],
      [
        "craftmending",
        "Reparo que conta história",
        "Fotografe um reparo têxtil visível com pontos consistentes e tecido apoiado. Preserve a continuidade do material e a posição da linha. Use luz suave e evite transformar o reparo em um padrão digital sem textura.",
        "Remendo bordado em uma jaqueta jeans."
      ],
      [
        "craftbasket",
        "Fibra e ritmo",
        "Mostre um cesto em construção com fibras entrelaçadas e pontos de tensão plausíveis. Preserve espessura e direção das tiras. Use mãos em ação simples, evitando fibras que terminem abruptamente ou atravessem umas às outras.",
        "Cesto de fibras naturais sendo finalizado."
      ],
      [
        "crafttoolstory",
        "Ferramentas que revelam o ofício",
        "Organize poucas ferramentas de um processo artesanal junto a uma peça em andamento. Use desgaste e resíduos compatíveis com o trabalho. Preserve escala e função aparente, evitando objetos aleatórios usados apenas como decoração.",
        "Ferramentas de encadernação ao lado de um caderno."
      ]
    ]
  ],
  [
    "Cenas do cotidiano",
    "☷",
    [
      [
        "dailydeskstart",
        "O começo do trabalho",
        "Fotografe uma mesa sendo preparada para o dia, com uma ação principal e objetos de uso real. Preserve luz natural, escala e cabos coerentes. Evite telas com informações pessoais ou excesso de acessórios decorativos.",
        "Pessoa abrindo um caderno ao lado de uma xícara."
      ],
      [
        "dailynotebook",
        "Uma ideia anotada",
        "Mostre uma mão escrevendo ou desenhando no caderno, com postura e apoio plausíveis. Preserve linhas e perspectiva da página. Use apenas texto fornecido ou traços sem leitura, evitando frases inventadas como informação real.",
        "Rascunho visual de uma composição num caderno."
      ],
      [
        "dailycommute",
        "Caminho habitual",
        "Crie uma cena de deslocamento cotidiano com um sujeito principal e ambiente urbano coerente. Use luz disponível e gestos naturais. Preserve trânsito e escala, evitando sinais ou placas com textos incorretos em destaque.",
        "Pessoa caminhando até um ponto de ônibus."
      ],
      [
        "dailybikepark",
        "Uma pausa no percurso",
        "Mostre uma bicicleta apoiada ou presa a uma estrutura plausível, com rodas, quadro e corrente coerentes. Use detalhes do ambiente para sugerir uma pausa. Evite peças duplicadas ou apoio físico impossível.",
        "Bicicleta estacionada em frente a um café."
      ],
      [
        "dailyreading",
        "Tempo de leitura",
        "Fotografe uma pessoa lendo em posição confortável, com livro e mãos em escala natural. Use luz suave e fundo discreto. Preserve páginas e capa fornecida ou sem texto legível, evitando títulos inventados.",
        "Pessoa lendo numa poltrona junto à janela."
      ],
      [
        "dailyplantcare",
        "Cuidar do verde",
        "Mostre uma tarefa simples de cuidado com plantas, como rega moderada ou limpeza das folhas. Preserve mão, recipiente e direção da água. Evite excesso de líquido ou ferramentas sem relação com a ação.",
        "Pessoa regando uma planta numa varanda."
      ],
      [
        "dailycookinghome",
        "Preparar em casa",
        "Crie uma cena doméstica com uma única etapa de preparo e poucos ingredientes relevantes. Preserve interação das mãos com utensílios e superfícies. Use ambiente funcional, evitando uma cozinha cenográfica sem sinais de uso.",
        "Pessoa misturando uma massa numa tigela."
      ],
      [
        "dailylaundry",
        "Tecido ao vento",
        "Mostre roupas num varal com pontos de fixação visíveis e movimento leve. Preserve peso e caimento de cada peça, além de luz e sombras coerentes. Evite peças fundidas ou tecidos que flutuem sem apoio.",
        "Varal com lençóis claros num quintal ensolarado."
      ],
      [
        "dailyrepair",
        "Conserto pequeno",
        "Fotografe uma pessoa realizando um reparo doméstico simples com objeto apoiado e ferramentas apropriadas. Preserve anatomia e posição das peças. Evite detalhes instrucionais de tarefas perigosas ou uma cena fisicamente impossível.",
        "Pessoa ajustando uma gaveta de madeira."
      ],
      [
        "dailymusicpractice",
        "Ensaio pessoal",
        "Mostre uma pessoa praticando um instrumento fornecido, com postura e contato das mãos plausíveis. Preserve identidade e geometria do instrumento. Use luz ambiente e evite cordas, teclas ou braços duplicados.",
        "Guitarrista praticando num quarto organizado."
      ],
      [
        "dailyrecording",
        "Uma gravação em casa",
        "Apresente uma pequena configuração de gravação com microfone, suporte e pessoa em posição natural. Preserve distâncias e cabos plausíveis. Evite interfaces de software inventadas ou equipamentos sem ligação funcional.",
        "Criador gravando uma explicação em seu home office."
      ],
      [
        "dailywindowpause",
        "Olhar para fora",
        "Retrate uma pessoa em pausa junto a uma janela, com expressão natural e luz lateral suave. Preserve reflexos e anatomia, deixando o ambiente contribuir discretamente. Evite poses excessivamente dramáticas ou aparência publicitária artificial.",
        "Designer observando a rua durante uma pausa."
      ],
      [
        "dailyrainwait",
        "Esperar a chuva passar",
        "Mostre uma pessoa abrigada enquanto a chuva aparece além da cobertura. Preserve limite entre áreas secas e molhadas, reflexos e luz ambiente. Evite gotas atravessando o teto ou cobrindo igualmente todos os objetos.",
        "Pessoa sob a marquise de uma loja."
      ],
      [
        "dailygrocery",
        "Escolhas na feira",
        "Fotografe uma interação simples numa feira, com mão escolhendo um ingrediente e banca em escala natural. Preserve variedade dos produtos e gestos. Evite rostos repetidos, preços inventados ou objetos atravessando as mãos.",
        "Pessoa escolhendo frutas numa banca de bairro."
      ],
      [
        "dailywalkdog",
        "Passeio tranquilo",
        "Mostre uma pessoa passeando com um cão em ritmo natural, com guia conectada e postura coerente. Preserve anatomia, escala e distância entre ambos. Evite patas duplicadas ou guia atravessando o corpo.",
        "Passeio com cachorro numa rua arborizada."
      ],
      [
        "dailyplayboard",
        "Uma partida na mesa",
        "Crie uma cena de jogo de tabuleiro original ou fornecido com poucas pessoas e gestos distintos. Preserve escala das peças e superfície do tabuleiro. Evite regras ou textos inventados apresentados como parte de um jogo real.",
        "Amigos movendo peças num tabuleiro geométrico simples."
      ],
      [
        "dailypacking",
        "Preparar a viagem",
        "Mostre uma mala aberta com itens organizados de forma plausível e uma mão posicionando uma peça. Preserve volume interno e dobraduras. Evite documentos pessoais legíveis ou quantidade de objetos incompatível com o espaço.",
        "Mala com roupas dobradas e um par de tênis."
      ],
      [
        "dailypicnic",
        "Pausa no parque",
        "Apresente um piquenique pequeno com objetos apoiados numa toalha e alimentos em recipientes coerentes. Use luz natural e vegetação variada. Preserve higiene visual e escala, evitando utensílios flutuantes ou excesso de decoração.",
        "Piquenique de duas pessoas em um gramado."
      ],
      [
        "dailyeveningdesk",
        "Fim de expediente",
        "Mostre uma mesa de trabalho ao final do dia com sinais discretos de uso e iluminação mais baixa. Preserve objetos e organização plausíveis. Evite informações privadas nas telas ou desordem exagerada sem intenção.",
        "Mesa de designer com caderno aberto e luminária acesa."
      ],
      [
        "dailysundayquiet",
        "Um domingo sem pressa",
        "Crie uma cena doméstica calma com uma atividade simples, poucos objetos e luz natural suave. Preserve gestos espontâneos e textura dos materiais. Evite poses rígidas ou acrescentar elementos apenas para preencher o quadro.",
        "Pessoa tomando café numa varanda tranquila."
      ]
    ]
  ],
  [
    "Tecnologia e dispositivos",
    "⌘",
    [
      [
        "techfold",
        "Celular dobrável sobre mesa grafite",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Mostre dobradiça aberta e continuidade da tela, sem dobras impossíveis.",
        "Celular dobrável sobre mesa grafite."
      ],
      [
        "techlaptop",
        "Notebook fino em uma bancada",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Destaque perfil lateral, teclado alinhado e reflexos discretos na tela.",
        "Notebook fino em uma bancada."
      ],
      [
        "techheadphones",
        "Fone de ouvido sobre suporte",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Mostre arco, almofadas e cabo com conexões fisicamente coerentes.",
        "Fone de ouvido sobre suporte."
      ],
      [
        "techearbuds",
        "Fones pequenos dentro do estojo",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Organize os dois lados em encaixes correspondentes, com tampa apoiada.",
        "Fones pequenos dentro do estojo."
      ],
      [
        "techkeyboard",
        "Teclado mecânico visto em diagonal",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Preserve espaçamento regular das teclas e destaque diferentes alturas das fileiras.",
        "Teclado mecânico visto em diagonal."
      ],
      [
        "techmouse",
        "Mouse ergonômico em mesa clara",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Revele curvatura, apoio e textura sem alterar a geometria funcional.",
        "Mouse ergonômico em mesa clara."
      ],
      [
        "techmicrophone",
        "Microfone de mesa para gravação",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Destaque grade metálica, suporte e conexão do cabo, sem peças flutuantes.",
        "Microfone de mesa para gravação."
      ],
      [
        "techwebcam",
        "Webcam sobre um monitor",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Mostre fixação plausível e lente com reflexo pequeno e controlado.",
        "Webcam sobre um monitor."
      ],
      [
        "techprojector",
        "Projetor compacto numa sala escura",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Mostre projeção alinhada à parede, sem feixe opaco cobrindo o ambiente.",
        "Projetor compacto numa sala escura."
      ],
      [
        "techspeaker",
        "Caixa de som portátil num banco",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Destaque tecido acústico, alça e controles, preservando escala e proporção.",
        "Caixa de som portátil num banco."
      ],
      [
        "techrouter",
        "Roteador discreto numa prateleira",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Organize antenas e cabos coerentemente, sem representar sinais invisíveis como fato.",
        "Roteador discreto numa prateleira."
      ],
      [
        "techpowerbank",
        "Carregador portátil junto ao celular",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Mostre conexão entre portas compatíveis visualmente, sem inventar potência.",
        "Carregador portátil junto ao celular."
      ],
      [
        "techdrawingtablet",
        "Mesa digitalizadora com caneta",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Posicione a caneta com apoio plausível e preserve a superfície de desenho.",
        "Mesa digitalizadora com caneta."
      ],
      [
        "techcamera",
        "Câmera compacta sobre tecido escuro",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Revele lente, botões e encaixes sem duplicar controles ou inventar inscrições.",
        "Câmera compacta sobre tecido escuro."
      ],
      [
        "techlens",
        "Lente fotográfica com tampa ao lado",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Mostre anéis concêntricos, montagem e reflexos ópticos discretos, sem números inventados.",
        "Lente fotográfica com tampa ao lado."
      ],
      [
        "techconsole",
        "Console de jogos numa sala",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Separe equipamento, controle e tela, mantendo cabos e proporções legíveis.",
        "Console de jogos numa sala."
      ],
      [
        "techvr",
        "Visor de realidade virtual sobre base",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Destaque lentes internas e tiras ajustáveis, sem confundir encaixes e aberturas.",
        "Visor de realidade virtual sobre base."
      ],
      [
        "techdrone",
        "Drone dobrado em uma mochila aberta",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Preserve hélices, braços articulados e espaço real disponível no compartimento.",
        "Drone dobrado em uma mochila aberta."
      ],
      [
        "techprinter",
        "Impressora doméstica em uso",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Mostre uma única folha saindo corretamente, sem papel atravessando a carcaça.",
        "Impressora doméstica em uso."
      ],
      [
        "techchargingdock",
        "Estação de carregamento numa mesa",
        "Crie uma fotografia publicitária do dispositivo descrito no projeto, com materiais realistas, perspectiva controlada e fundo organizado. Preserve desenho e marca das referências. Use telas sem dados pessoais e não invente especificações de desempenho. Distribua os dispositivos nos apoios correspondentes e preserve contatos plausíveis.",
        "Estação de carregamento numa mesa."
      ]
    ]
  ],
  [
    "Interfaces e telas conceituais",
    "▣",
    [
      [
        "uimusic",
        "Tela de um player musical fictício",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Destaque capa, reprodução e progresso, separando controles primários dos secundários.",
        "Tela de um player musical fictício."
      ],
      [
        "uitasks",
        "Aplicativo simples de tarefas",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Agrupe pendências, andamento e concluídas, evitando botões com funções ambíguas.",
        "Aplicativo simples de tarefas."
      ],
      [
        "uiweather",
        "Painel conceitual de previsão do tempo",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Identifique todos os valores ilustrativos e organize horário, temperatura e condição.",
        "Painel conceitual de previsão do tempo."
      ],
      [
        "uibooking",
        "Tela de reserva de uma sala",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Separe data, horários disponíveis e confirmação, sem sugerir reserva efetivada.",
        "Tela de reserva de uma sala."
      ],
      [
        "uirecipe",
        "Aplicativo de receitas caseiras",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Diferencie ingredientes e etapas, mantendo instruções legíveis em tela pequena.",
        "Aplicativo de receitas caseiras."
      ],
      [
        "uifitness",
        "Tela de registro de atividade",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Use dados fictícios identificados e destaque duração, tipo e histórico.",
        "Tela de registro de atividade."
      ],
      [
        "uireading",
        "Biblioteca digital de leitura",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Priorize capas e progresso ilustrativo, com filtros simples e boa legibilidade.",
        "Biblioteca digital de leitura."
      ],
      [
        "uilearning",
        "Tela de uma aula online",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Destaque conteúdo principal, progresso e próxima etapa, evitando distrações laterais.",
        "Tela de uma aula online."
      ],
      [
        "uipodcast",
        "Catálogo de podcasts fictícios",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Organize episódios por título e duração ilustrativa, com reprodução claramente localizada.",
        "Catálogo de podcasts fictícios."
      ],
      [
        "uistore",
        "Página de produto de uma loja fictícia",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Separe imagens, variações e ação principal; não invente preço como oferta real.",
        "Página de produto de uma loja fictícia."
      ],
      [
        "uiprofile",
        "Perfil de portfólio de um designer",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Destaque nome fornecido, projetos e contato, sem clientes ou credenciais inventados.",
        "Perfil de portfólio de um designer."
      ],
      [
        "uionboarding",
        "Três telas de introdução de um aplicativo",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Use uma ação por tela e mantenha navegação e progresso consistentes.",
        "Três telas de introdução de um aplicativo."
      ],
      [
        "uicalendar",
        "Calendário semanal de uma equipe fictícia",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Diferencie dias e horários, evitando sobreposição ilegível de compromissos ilustrativos.",
        "Calendário semanal de uma equipe fictícia."
      ],
      [
        "uinotes",
        "Aplicativo de notas visuais",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Organize coleções e notas com títulos curtos, sem imitar dados pessoais.",
        "Aplicativo de notas visuais."
      ],
      [
        "uimessages",
        "Tela conceitual de mensagens",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Use conversa fictícia identificada, distinguindo remetentes e estados sem dados privados.",
        "Tela conceitual de mensagens."
      ],
      [
        "uimap",
        "Mapa esquemático de um espaço fictício",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Mostre pontos e caminhos legíveis, sem apresentar rotas inventadas como geográficas.",
        "Mapa esquemático de um espaço fictício."
      ],
      [
        "uifiles",
        "Organizador visual de arquivos",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Diferencie tipos, pastas e seleção, mantendo nomes ilustrativos claramente genéricos.",
        "Organizador visual de arquivos."
      ],
      [
        "uipresentation",
        "Tela de edição de apresentação",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Separe miniaturas, slide e propriedades, preservando espaço útil para o conteúdo.",
        "Tela de edição de apresentação."
      ],
      [
        "uidarklight",
        "Interface comparada nos temas claro e escuro",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Mantenha conteúdo e estrutura idênticos, ajustando contraste sem alterar hierarquia.",
        "Interface comparada nos temas claro e escuro."
      ],
      [
        "uiemptystate",
        "Tela vazia de uma biblioteca digital",
        "Crie um mockup visual conceitual da interface solicitada, com hierarquia clara, espaçamento consistente e textos curtos fornecidos pelo usuário. Apresente como proposta visual, não como aplicativo funcionando. Não invente dados reais de usuários nem métricas verificadas. Explique visualmente o estado inicial e destaque uma única ação possível.",
        "Tela vazia de uma biblioteca digital."
      ]
    ]
  ],
  [
    "Jogos e cenários originais",
    "♜",
    [
      [
        "gamehub",
        "Praça central de uma vila fantástica",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Organize entradas e pontos de interesse ao redor de uma referência central.",
        "Praça central de uma vila fantástica."
      ],
      [
        "gamecheckpoint",
        "Posto de controle numa estrada fictícia",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Separe passagem, vigilância e abrigo, preservando circulação e escala humana.",
        "Posto de controle numa estrada fictícia."
      ],
      [
        "gamehangar",
        "Hangar de veículos de exploração",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Mostre zonas de manutenção e entrada ampla, sem equipamentos atravessando estruturas.",
        "Hangar de veículos de exploração."
      ],
      [
        "gamelab",
        "Laboratório abandonado de ficção científica",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Use desgaste localizado e objetos para sugerir história, sem excesso aleatório.",
        "Laboratório abandonado de ficção científica."
      ],
      [
        "gamearena",
        "Arena esportiva de um universo fictício",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Defina limites, acessos e arquibancadas com leitura clara do espaço central.",
        "Arena esportiva de um universo fictício."
      ],
      [
        "gameharbor",
        "Porto de uma cidade imaginária",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Organize cais, embarcações e depósitos com níveis e conexões plausíveis.",
        "Porto de uma cidade imaginária."
      ],
      [
        "gameobservatory",
        "Observatório numa montanha fictícia",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Destaque instrumento central e caminho de acesso, preservando apoio estrutural.",
        "Observatório numa montanha fictícia."
      ],
      [
        "gameunderground",
        "Estação subterrânea de um jogo original",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Use iluminação para revelar saídas e planos, mantendo trilhos geometricamente coerentes.",
        "Estação subterrânea de um jogo original."
      ],
      [
        "gameruins",
        "Pátio de ruínas de um reino imaginário",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Diferencie partes preservadas e desabadas, sugerindo uma rota visual contínua.",
        "Pátio de ruínas de um reino imaginário."
      ],
      [
        "gamebridge",
        "Ponte sobre um abismo fantástico",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Mostre apoios e destino claros, com escala indicada por pequenos elementos.",
        "Ponte sobre um abismo fantástico."
      ],
      [
        "gameworkshop",
        "Oficina de inventores de um jogo",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Agrupe ferramentas por função visual e destaque um projeto em construção.",
        "Oficina de inventores de um jogo."
      ],
      [
        "gamegreenhouse",
        "Estufa futurista de exploração",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Separe cultivo, circulação e equipamentos, mantendo iluminação coerente com o vidro.",
        "Estufa futurista de exploração."
      ],
      [
        "gamecanyon",
        "Passagem estreita entre rochas",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Crie alternância de áreas abertas e fechadas sem perder a orientação.",
        "Passagem estreita entre rochas."
      ],
      [
        "gameicehall",
        "Salão de gelo de um mundo fantástico",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Use refração moderada e arquitetura consistente, evitando transparência que apague limites.",
        "Salão de gelo de um mundo fantástico."
      ],
      [
        "gamejungletemple",
        "Templo fictício coberto por vegetação",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Preserve hierarquia arquitetônica e raízes aderentes, sem símbolos históricos inventados como autênticos.",
        "Templo fictício coberto por vegetação."
      ],
      [
        "gamemarketstall",
        "Banca de objetos de um universo de jogo",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Organize itens por escala e função, destacando uma peça narrativa principal.",
        "Banca de objetos de um universo de jogo."
      ],
      [
        "gameairfield",
        "Campo de pouso numa região imaginária",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Defina pista, manutenção e abrigo com distâncias visualmente plausíveis.",
        "Campo de pouso numa região imaginária."
      ],
      [
        "gamerooftoproute",
        "Percurso entre telhados de uma cidade fictícia",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Mostre conexões e diferenças de altura sem saltos visualmente impossíveis.",
        "Percurso entre telhados de uma cidade fictícia."
      ],
      [
        "gamecontrolroom",
        "Sala de comando de uma nave original",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Distribua postos e passagens, usando interfaces abstratas sem textos ilegíveis dominantes.",
        "Sala de comando de uma nave original."
      ],
      [
        "gamecamp",
        "Acampamento de exploradores de um jogo",
        "Crie uma arte conceitual original para um ambiente de jogo, com foco narrativo, escala consistente e percurso visual compreensível. Use arquitetura, objetos e símbolos próprios. Não copie personagens ou mapas existentes; preserve continuidade espacial e materiais. Separe descanso, armazenamento e circulação, preservando terreno e pontos de apoio.",
        "Acampamento de exploradores de um jogo."
      ]
    ]
  ],
  [
    "Esportes de quadra e arena",
    "◎",
    [
      [
        "sportbasketpass",
        "Jogador de basquete preparando um passe",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Mantenha bola entre as mãos e base de apoio estável.",
        "Jogador de basquete preparando um passe."
      ],
      [
        "sportbasketdribble",
        "Atleta conduzindo a bola numa quadra",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Mostre uma fase clara do drible, com contato e sombra coerentes.",
        "Atleta conduzindo a bola numa quadra."
      ],
      [
        "sporttennisserve",
        "Tenista iniciando um saque",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Separe braço de lançamento e raquete, preservando orientação da bola.",
        "Tenista iniciando um saque."
      ],
      [
        "sporttennisvolley",
        "Tenista executando um voleio",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Mostre impacto próximo à rede com empunhadura e equilíbrio plausíveis.",
        "Tenista executando um voleio."
      ],
      [
        "sportvolleyset",
        "Jogador levantando uma bola de vôlei",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Preserve posição dos dedos e trajetória acima da testa.",
        "Jogador levantando uma bola de vôlei."
      ],
      [
        "sportvolleyreceive",
        "Atleta recebendo um saque de vôlei",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Alinhe antebraços e flexão dos joelhos, evitando contato impossível.",
        "Atleta recebendo um saque de vôlei."
      ],
      [
        "sportbadminton",
        "Dupla jogando badminton em ginásio",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Destaque um golpe e mantenha peteca distinta das linhas da quadra.",
        "Dupla jogando badminton em ginásio."
      ],
      [
        "sporttabletennis",
        "Partida de tênis de mesa",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Preserve dimensões relativas de mesa, rede, raquetes e bola.",
        "Partida de tênis de mesa."
      ],
      [
        "sportfutsal",
        "Jogador dominando uma bola de futsal",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Mostre controle junto ao pé com piso e sombra coerentes.",
        "Jogador dominando uma bola de futsal."
      ],
      [
        "sporthandball",
        "Atleta preparando um arremesso de handebol",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Preserve posição da bola, apoio e separação dos braços.",
        "Atleta preparando um arremesso de handebol."
      ],
      [
        "sportsquash",
        "Jogador de squash junto à parede",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Faça perspectiva da sala e direção do golpe visualmente compreensíveis.",
        "Jogador de squash junto à parede."
      ],
      [
        "sportbowling",
        "Pessoa lançando uma bola de boliche",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Mostre liberação próxima à pista, sem bola flutuando acima da mão.",
        "Pessoa lançando uma bola de boliche."
      ],
      [
        "sportgymrings",
        "Ginasta em posição estática nas argolas",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Preserve tensão das fitas e apoio corporal plausível.",
        "Ginasta em posição estática nas argolas."
      ],
      [
        "sportgymbeam",
        "Ginasta equilibrando-se numa trave",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Mantenha contato dos pés e escala da trave claramente legíveis.",
        "Ginasta equilibrando-se numa trave."
      ],
      [
        "sportfencing",
        "Dupla em treino de esgrima",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Mostre equipamentos de proteção e distância coerente entre os participantes.",
        "Dupla em treino de esgrima."
      ],
      [
        "sportboxingbag",
        "Pessoa treinando golpes num saco de boxe",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Preserve luvas, punhos e fixação do saco, sem sinais de lesão.",
        "Pessoa treinando golpes num saco de boxe."
      ],
      [
        "sportjudo",
        "Dupla praticando postura de judô",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Use interação controlada, tecido tensionado e apoio coerente no tatame.",
        "Dupla praticando postura de judô."
      ],
      [
        "sportkarate",
        "Atleta executando uma forma de karatê",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Destaque alinhamento corporal e gesto único, sem membros duplicados.",
        "Atleta executando uma forma de karatê."
      ],
      [
        "sportskatingrink",
        "Patinador deslizando numa pista coberta",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Preserve contato dos patins e inclinação compatível com a curva.",
        "Patinador deslizando numa pista coberta."
      ],
      [
        "sportwheelchair",
        "Atleta de basquete em cadeira esportiva",
        "Crie uma fotografia esportiva do projeto, com anatomia coerente, equipamento correto para a ação descrita e ponto de vista que permita entender o gesto. Preserve identidade e uniforme das referências. Não invente resultados, patrocinadores ou registros de competição. Preserve geometria funcional da cadeira e interação natural com a bola.",
        "Atleta de basquete em cadeira esportiva."
      ]
    ]
  ],
  [
    "Aventura e movimento ao ar livre",
    "△",
    [
      [
        "adventurehike",
        "Pessoa caminhando numa trilha de montanha",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Mostre apoio dos pés e mochila ajustada, mantendo percurso visível.",
        "Pessoa caminhando numa trilha de montanha."
      ],
      [
        "adventuretrailrun",
        "Corredor atravessando uma trilha de terra",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Use uma passada clara e partículas discretas próximas ao chão.",
        "Corredor atravessando uma trilha de terra."
      ],
      [
        "adventurecamping",
        "Montagem de uma barraca num campo",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Preserve varetas, estacas e tensão do tecido com conexões plausíveis.",
        "Montagem de uma barraca num campo."
      ],
      [
        "adventurekayak",
        "Pessoa remando num caiaque em lago",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Mostre pá entrando na água e ondulação coerente com o movimento.",
        "Pessoa remando num caiaque em lago."
      ],
      [
        "adventurecanoe",
        "Dupla numa canoa em rio calmo",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Distribua pessoas e remos com equilíbrio e escala consistentes.",
        "Dupla numa canoa em rio calmo."
      ],
      [
        "adventuresup",
        "Pessoa praticando stand-up paddle",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Preserve contato dos pés e posição do remo em relação à prancha.",
        "Pessoa praticando stand-up paddle."
      ],
      [
        "adventuresurfturn",
        "Surfista fazendo uma curva numa onda",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Mantenha prancha avançando e spray relacionado à borda em contato.",
        "Surfista fazendo uma curva numa onda."
      ],
      [
        "adventurebodyboard",
        "Praticante de bodyboard numa onda pequena",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Preserve apoio do corpo, prancha e direção natural da água.",
        "Praticante de bodyboard numa onda pequena."
      ],
      [
        "adventuresailing",
        "Veleiro pequeno navegando perto da costa",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Faça vela, vento e inclinação do casco visualmente coerentes.",
        "Veleiro pequeno navegando perto da costa."
      ],
      [
        "adventurewindsurf",
        "Pessoa velejando numa prancha de windsurf",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Preserve conexões entre mastro, vela e prancha, sem peças soltas.",
        "Pessoa velejando numa prancha de windsurf."
      ],
      [
        "adventureclimbwall",
        "Escalador numa parede esportiva equipada",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Mostre corda, pontos de contato e equipamento de proteção plausíveis.",
        "Escalador numa parede esportiva equipada."
      ],
      [
        "adventureboulder",
        "Pessoa em uma sessão de boulder baixo",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Inclua colchão de proteção e posições corporais coerentes com as agarras.",
        "Pessoa em uma sessão de boulder baixo."
      ],
      [
        "adventuremountainbike",
        "Ciclista numa curva de trilha",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Preserve contato dos pneus, inclinação e suspensão sem deformar o quadro.",
        "Ciclista numa curva de trilha."
      ],
      [
        "adventuregravel",
        "Ciclista pedalando numa estrada de cascalho",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Destaque terreno e ritmo, mantendo rodas alinhadas ao movimento.",
        "Ciclista pedalando numa estrada de cascalho."
      ],
      [
        "adventurelongboard",
        "Pessoa deslizando de longboard numa área segura",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Preserve apoio dos pés, direção das rodas e postura equilibrada.",
        "Pessoa deslizando de longboard numa área segura."
      ],
      [
        "adventuresnowboard",
        "Praticante descendo uma pista de snowboard",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Mostre borda trabalhando a neve e equipamento proporcional ao corpo.",
        "Praticante descendo uma pista de snowboard."
      ],
      [
        "adventureski",
        "Esquiador numa descida moderada",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Preserve paralelismo dos esquis e posição dos bastões.",
        "Esquiador numa descida moderada."
      ],
      [
        "adventuresnowshoe",
        "Pessoa caminhando com raquetes de neve",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Mostre afundamento e pegadas compatíveis com o equipamento.",
        "Pessoa caminhando com raquetes de neve."
      ],
      [
        "adventureorienteering",
        "Pessoa consultando um mapa numa trilha",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Mantenha mapa sem dados inventados legíveis e contexto de orientação claro.",
        "Pessoa consultando um mapa numa trilha."
      ],
      [
        "adventureparaglider",
        "Parapente em voo sobre uma paisagem",
        "Crie uma fotografia de aventura que mostre ação e ambiente com escala legível. Preserve equipamentos adequados ao contexto, anatomia e pontos de apoio. Use luz natural coerente e evite representar uma manobra impossível como documentação de um feito real. Preserve linhas conectadas ao arnês e formato plausível da vela.",
        "Parapente em voo sobre uma paisagem."
      ]
    ]
  ],
  [
    "Mobilidade urbana",
    "↔",
    [
      [
        "urbanbikecargo",
        "Bicicleta cargueira estacionada numa praça",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Mostre compartimento de carga, direção e rodas com geometria funcional.",
        "Bicicleta cargueira estacionada numa praça."
      ],
      [
        "urbanbikeshare",
        "Estação de bicicletas compartilhadas fictícia",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Organize encaixes e espaços entre bicicletas, evitando quadros fundidos.",
        "Estação de bicicletas compartilhadas fictícia."
      ],
      [
        "urbanelectricbike",
        "Bicicleta elétrica numa ciclovia",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Destaque bateria integrada e transmissão sem inventar autonomia.",
        "Bicicleta elétrica numa ciclovia."
      ],
      [
        "urbanscooter",
        "Patinete dobrável junto a uma parede",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Preserve mecanismo de dobra e apoio estável no chão.",
        "Patinete dobrável junto a uma parede."
      ],
      [
        "urbanmoped",
        "Moto urbana compacta numa rua",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Mostre proporções do banco, rodas e guidão sem alterar o modelo.",
        "Moto urbana compacta numa rua."
      ],
      [
        "urbantram",
        "Bonde passando por uma avenida",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Alinhe rodas, trilhos e perspectiva dos cabos quando presentes.",
        "Bonde passando por uma avenida."
      ],
      [
        "urbanbusstop",
        "Ponto de ônibus com pessoas aguardando",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Organize abrigo e faixa de embarque com circulação clara.",
        "Ponto de ônibus com pessoas aguardando."
      ],
      [
        "urbanbusinterior",
        "Interior de um ônibus urbano",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Preserve corredores, barras e espaçamento dos assentos, sem repetições impossíveis.",
        "Interior de um ônibus urbano."
      ],
      [
        "urbanmetroentry",
        "Entrada de metrô numa praça fictícia",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Mostre escadas e fluxo de pessoas sem sinalização geográfica falsa.",
        "Entrada de metrô numa praça fictícia."
      ],
      [
        "urbantrainplatform",
        "Plataforma ferroviária num dia nublado",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Preserve distância segura da borda e perspectiva contínua dos trilhos.",
        "Plataforma ferroviária num dia nublado."
      ],
      [
        "urbanferry",
        "Balsa de passageiros próxima ao cais",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Mostre acesso e diferença de nível com conexão plausível.",
        "Balsa de passageiros próxima ao cais."
      ],
      [
        "urbanpedestrian",
        "Rua comercial voltada a pedestres",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Distribua caminhada, bancos e vegetação sem bloquear entradas.",
        "Rua comercial voltada a pedestres."
      ],
      [
        "urbancrosswalk",
        "Travessia de pedestres numa esquina",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Mantenha faixas e calçadas conectadas, com trânsito coerente.",
        "Travessia de pedestres numa esquina."
      ],
      [
        "urbanbikeparking",
        "Bicicletário numa área de escritório",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Mostre travas e apoios possíveis, sem rodas atravessando estruturas.",
        "Bicicletário numa área de escritório."
      ],
      [
        "urbanaccessible",
        "Rampa de acesso numa calçada ampla",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Preserve continuidade do percurso e espaço de manobra, sem afirmar certificação.",
        "Rampa de acesso numa calçada ampla."
      ],
      [
        "urbancourier",
        "Entregador com bicicleta e mochila",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Preserve fixação da carga e postura natural ao lado do veículo.",
        "Entregador com bicicleta e mochila."
      ],
      [
        "urbantaxi",
        "Carro de transporte numa área de embarque",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Use identidade fictícia e deixe claro o espaço de entrada do passageiro.",
        "Carro de transporte numa área de embarque."
      ],
      [
        "urbanevcharge",
        "Carro elétrico conectado a uma estação",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Mostre cabo entre porta e equipamento, sem números de carregamento inventados.",
        "Carro elétrico conectado a uma estação."
      ],
      [
        "urbandeliveryvan",
        "Van de entregas numa rua de bairro",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Preserve espaço para abertura das portas e carga proporcional.",
        "Van de entregas numa rua de bairro."
      ],
      [
        "urbannightcycle",
        "Ciclista equipado numa ciclovia noturna",
        "Crie uma cena de mobilidade com proporções realistas, vias e pontos de apoio coerentes. Preserve o desenho dos veículos fornecidos e use pessoas como escala quando necessário. Evite placas, marcas ou especificações inventadas em destaque. Use luzes visíveis no veículo e reflexos coerentes no percurso.",
        "Ciclista equipado numa ciclovia noturna."
      ]
    ]
  ],
  [
    "Veículos de trabalho e exploração",
    "⚙",
    [
      [
        "vehiclecamper",
        "Van camper estacionada numa área natural",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mostre adaptação interna visível pela porta, respeitando o volume externo.",
        "Van camper estacionada numa área natural."
      ],
      [
        "vehicleexpedition",
        "Veículo de expedição numa estrada remota",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Fixe bagagens e acessórios em suportes plausíveis e preserve suspensão.",
        "Veículo de expedição numa estrada remota."
      ],
      [
        "vehiclefarmtractor",
        "Trator trabalhando numa área agrícola",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mantenha pneus em contato e implemento conectado na direção correta.",
        "Trator trabalhando numa área agrícola."
      ],
      [
        "vehicleforklift",
        "Empilhadeira movimentando uma carga organizada",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Preserve centro visual da carga e encaixe dos garfos no pallet.",
        "Empilhadeira movimentando uma carga organizada."
      ],
      [
        "vehicleexcavator",
        "Escavadeira numa área de obra organizada",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mostre braço, articulações e esteiras coerentes, sem peças atravessadas.",
        "Escavadeira numa área de obra organizada."
      ],
      [
        "vehiclecrane",
        "Guindaste numa composição industrial",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Preserve apoio e continuidade dos cabos, sem sugerir operação técnica validada.",
        "Guindaste numa composição industrial."
      ],
      [
        "vehiclesnowplow",
        "Veículo de remoção de neve",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mostre lâmina deslocando neve na direção do movimento.",
        "Veículo de remoção de neve."
      ],
      [
        "vehiclestreetclean",
        "Veículo de limpeza de rua",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Preserve escovas em contato com o piso e reservatórios plausíveis.",
        "Veículo de limpeza de rua."
      ],
      [
        "vehiclefoodtruck",
        "Food truck aberto numa praça",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Organize balcão, cozinha e circulação sem expandir o espaço interno.",
        "Food truck aberto numa praça."
      ],
      [
        "vehiclemobilelab",
        "Laboratório móvel fictício numa van",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mostre bancada e equipamentos presos, respeitando portas e área de trabalho.",
        "Laboratório móvel fictício numa van."
      ],
      [
        "vehiclefiretruck",
        "Caminhão de bombeiros estacionado",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Preserve compartimentos, mangueiras e escala sem inventar brasões oficiais.",
        "Caminhão de bombeiros estacionado."
      ],
      [
        "vehicleambulance",
        "Ambulância estacionada em área de serviço",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Use identidade fictícia e evite dados médicos ou cenas de emergência.",
        "Ambulância estacionada em área de serviço."
      ],
      [
        "vehiclerescueboat",
        "Barco de apoio junto a um píer",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mostre bordas, cabos e equipamento de segurança em escala coerente.",
        "Barco de apoio junto a um píer."
      ],
      [
        "vehiclefishingboat",
        "Barco de pesca artesanal no cais",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Organize redes e caixas sem bloquear circulação ou deformar o casco.",
        "Barco de pesca artesanal no cais."
      ],
      [
        "vehicletugboat",
        "Rebocador navegando num porto",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Preserve proporção da cabine e defensas, com esteira coerente.",
        "Rebocador navegando num porto."
      ],
      [
        "vehiclefreight",
        "Trem de carga numa paisagem aberta",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mantenha engates, bitola visual e continuidade dos vagões.",
        "Trem de carga numa paisagem aberta."
      ],
      [
        "vehiclecablecar",
        "Cabine de teleférico sobre um vale",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mostre cabos contínuos e suspensão ligada corretamente à cabine.",
        "Cabine de teleférico sobre um vale."
      ],
      [
        "vehicleluggagecart",
        "Carrinho de bagagens num terminal",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Preserve rodas, plataforma e estabilidade da carga empilhada.",
        "Carrinho de bagagens num terminal."
      ],
      [
        "vehiclemoonrover",
        "Veículo lunar fictício num terreno rochoso",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Use rodas e instrumentos coerentes com a proposta, sem especificações inventadas.",
        "Veículo lunar fictício num terreno rochoso."
      ],
      [
        "vehicleunderwaterrover",
        "Robô submarino conceitual próximo ao fundo",
        "Crie uma imagem conceitual ou fotográfica do veículo solicitado, preservando estrutura, rodas ou apoios e relação com o terreno. Use referências para detalhes específicos. Não invente capacidade técnica, certificações ou desempenho; mantenha equipamentos conectados de forma plausível. Mostre propulsores, braços e iluminação sem confundir água com espaço vazio.",
        "Robô submarino conceitual próximo ao fundo."
      ]
    ]
  ],
  [
    "Instrumentos e som",
    "♫",
    [
      [
        "musicacoustic",
        "Violão apoiado num estúdio",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Mostre cordas contínuas entre ponte e tarraxas, com apoio estável.",
        "Violão apoiado num estúdio."
      ],
      [
        "musicelectric",
        "Guitarra elétrica sobre fundo grafite",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Destaque captadores e ferragens sem duplicar cordas ou controles.",
        "Guitarra elétrica sobre fundo grafite."
      ],
      [
        "musicbass",
        "Contrabaixo elétrico numa sala de ensaio",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Preserve comprimento do braço e alinhamento das cordas.",
        "Contrabaixo elétrico numa sala de ensaio."
      ],
      [
        "musicviolin",
        "Violino e arco sobre tecido",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Separe peças e mantenha cavalete, cordas e crina plausíveis.",
        "Violino e arco sobre tecido."
      ],
      [
        "musiccello",
        "Violoncelo junto a uma cadeira",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Preserve espigão apoiado e escala em relação ao assento.",
        "Violoncelo junto a uma cadeira."
      ],
      [
        "musicharp",
        "Harpa num espaço iluminado",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Mantenha sequência de cordas e estrutura sem interseções impossíveis.",
        "Harpa num espaço iluminado."
      ],
      [
        "musicpiano",
        "Piano de cauda com tampa aberta",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Mostre suporte da tampa e teclado com padrão regular.",
        "Piano de cauda com tampa aberta."
      ],
      [
        "musickeyboard",
        "Teclado eletrônico sobre pedestal",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Preserve distribuição das teclas e estabilidade do suporte.",
        "Teclado eletrônico sobre pedestal."
      ],
      [
        "musicsynth",
        "Sintetizador modular numa mesa",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Organize cabos ligados a conectores, sem circuitos mágicos ou textos aleatórios.",
        "Sintetizador modular numa mesa."
      ],
      [
        "musicdrumkit",
        "Bateria montada num palco vazio",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Separe tambores, pratos e pedais com suportes coerentes.",
        "Bateria montada num palco vazio."
      ],
      [
        "musiccajon",
        "Cajón de madeira numa sala",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Revele tampo frontal, junções e textura sem inventar marca.",
        "Cajón de madeira numa sala."
      ],
      [
        "musicconga",
        "Par de congas em estúdio",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Mostre diferenças de tamanho e ferragens com tensão plausível.",
        "Par de congas em estúdio."
      ],
      [
        "musictambourine",
        "Pandeiro visto de perto",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Preserve aro, pele e platinelas distribuídas em encaixes reais.",
        "Pandeiro visto de perto."
      ],
      [
        "musicsax",
        "Saxofone sobre suporte",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Mostre chaves, curvas e reflexos sem fundir mecanismos.",
        "Saxofone sobre suporte."
      ],
      [
        "musictrumpet",
        "Trompete em uma bancada",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Preserve válvulas e tubulação contínua, com metal de brilho controlado.",
        "Trompete em uma bancada."
      ],
      [
        "musicflute",
        "Flauta transversal numa composição simples",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Alinhe segmentos e chaves, evitando furos ou mecanismos duplicados.",
        "Flauta transversal numa composição simples."
      ],
      [
        "musicaccordion",
        "Acordeão parcialmente aberto",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Mostre fole com dobras regulares e teclas proporcionais.",
        "Acordeão parcialmente aberto."
      ],
      [
        "musicturntable",
        "Toca-discos com vinil",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Preserve braço ligado à base e agulha em posição plausível.",
        "Toca-discos com vinil."
      ],
      [
        "musicmixer",
        "Mesa de som numa cabine",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Organize canais e cabos sem inventar indicadores de áudio reais.",
        "Mesa de som numa cabine."
      ],
      [
        "musicpedalboard",
        "Pedaleira de guitarra organizada",
        "Crie uma fotografia detalhada do instrumento ou equipamento musical, com materiais e construção coerentes. Preserve desenho das referências, escala e posição de cordas, teclas ou controles. Use iluminação que revele textura sem ocultar a função do objeto. Mostre conexões entre pedais e alimentação sem fios desconectados dominantes.",
        "Pedaleira de guitarra organizada."
      ]
    ]
  ],
  [
    "Capas e universos musicais",
    "◉",
    [
      [
        "coverambient",
        "Capa de álbum ambiente com horizonte nebuloso",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Use poucos planos e transições tonais, preservando um ponto focal discreto.",
        "Capa de álbum ambiente com horizonte nebuloso."
      ],
      [
        "coverjazz",
        "Capa de jazz com instrumento e sombra",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Combine ritmo visual e luz lateral, evitando clichês decorativos excessivos.",
        "Capa de jazz com instrumento e sombra."
      ],
      [
        "coverrap",
        "Capa de rap com retrato urbano",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Preserve identidade e atitude natural, usando arquitetura como contexto secundário.",
        "Capa de rap com retrato urbano."
      ],
      [
        "coverrock",
        "Capa de rock com cenário industrial",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Destaque textura e contraste sem acrescentar destruição ou símbolos não pedidos.",
        "Capa de rock com cenário industrial."
      ],
      [
        "coveracoustic",
        "Capa acústica com luz de janela",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Use materiais naturais e composição íntima, com poucos objetos narrativos.",
        "Capa acústica com luz de janela."
      ],
      [
        "coverelectronic",
        "Capa eletrônica com geometria luminosa",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Organize repetição e brilho em torno de uma forma dominante.",
        "Capa eletrônica com geometria luminosa."
      ],
      [
        "coverfunk",
        "Capa de música dançante com cor expressiva",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Sugira ritmo por diagonais e contraste, mantendo hierarquia visual clara.",
        "Capa de música dançante com cor expressiva."
      ],
      [
        "coverbossa",
        "Capa de música suave com paisagem costeira",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Use curvas e luz calma, sem copiar capas conhecidas.",
        "Capa de música suave com paisagem costeira."
      ],
      [
        "coverclassical",
        "Capa instrumental com arquitetura simétrica",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Combine profundidade e silêncio visual sem ornamentação excessiva.",
        "Capa instrumental com arquitetura simétrica."
      ],
      [
        "coverchoir",
        "Capa de música coral com formas convergentes",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Sugira vozes em conjunto por elementos distintos que se aproximam.",
        "Capa de música coral com formas convergentes."
      ],
      [
        "coverlofi",
        "Capa lo-fi com quarto ao entardecer",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Mostre uma atividade discreta e luz acolhedora, sem interfaces ou textos aleatórios.",
        "Capa lo-fi com quarto ao entardecer."
      ],
      [
        "coverdance",
        "Capa dançante com gesto corporal",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Capture uma pose legível e anatomia coerente, sem borrão uniforme.",
        "Capa dançante com gesto corporal."
      ],
      [
        "covercinematic",
        "Capa de trilha fictícia com paisagem monumental",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Use escala e contraste atmosférico para sugerir narrativa original.",
        "Capa de trilha fictícia com paisagem monumental."
      ],
      [
        "coverpiano",
        "Capa de piano com detalhe de teclado",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Preserve padrão das teclas e deixe amplo espaço negativo.",
        "Capa de piano com detalhe de teclado."
      ],
      [
        "coverpercussion",
        "Capa percussiva com objetos em ritmo",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Organize repetições de tamanho e intervalo com uma quebra intencional.",
        "Capa percussiva com objetos em ritmo."
      ],
      [
        "coverduet",
        "Capa de um duo musical fictício",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Diferencie as duas identidades e equilibre presença sem fundir rostos.",
        "Capa de um duo musical fictício."
      ],
      [
        "coverlive",
        "Capa de show com artista e plateia",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Preserve luz de palco e escala, sem inventar festival ou público real.",
        "Capa de show com artista e plateia."
      ],
      [
        "covernostalgia",
        "Capa com memória de uma fita cassete",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Use desgaste moderado e objetos de época coerentes, sem marcas falsas.",
        "Capa com memória de uma fita cassete."
      ],
      [
        "covernature",
        "Capa inspirada em sons naturais",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Relacione água, vento ou vegetação com um único gesto visual.",
        "Capa inspirada em sons naturais."
      ],
      [
        "coversingle",
        "Capa de single com objeto simbólico",
        "Crie uma capa musical original com um foco visual forte e leitura em miniatura. Traduza o clima informado em cor, luz e composição. Reserve espaço para títulos apenas quando solicitados; não invente nome de artista, selo ou participação. Escolha um elemento central e fundo simples para leitura imediata.",
        "Capa de single com objeto simbólico."
      ]
    ]
  ],
  [
    "Profissões criativas em cena",
    "✎",
    [
      [
        "proillustrator",
        "Ilustrador desenhando numa mesa",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Mantenha mão, lápis e papel conectados numa ação única legível.",
        "Ilustrador desenhando numa mesa."
      ],
      [
        "prophotographer",
        "Fotógrafo ajustando uma câmera",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Preserve empunhadura e posição dos controles, sem lentes duplicadas.",
        "Fotógrafo ajustando uma câmera."
      ],
      [
        "profilmmaker",
        "Cineasta preparando um enquadramento",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Mostre câmera apoiada e atenção voltada ao cenário, sem equipamentos flutuantes.",
        "Cineasta preparando um enquadramento."
      ],
      [
        "proeditor",
        "Editor de vídeo diante de uma tela",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Use interface abstrata sem dados reais e destaque a postura de trabalho.",
        "Editor de vídeo diante de uma tela."
      ],
      [
        "proanimator",
        "Animador estudando poses num caderno",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Mostre pequenas figuras coerentes e gesto de observação natural.",
        "Animador estudando poses num caderno."
      ],
      [
        "proartdirector",
        "Diretor de arte organizando referências",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Agrupe materiais sobre a mesa sem texto ilegível dominando a composição.",
        "Diretor de arte organizando referências."
      ],
      [
        "procopywriter",
        "Redator revisando anotações",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Use páginas sem conteúdo privado e foco no gesto de revisão.",
        "Redator revisando anotações."
      ],
      [
        "proarchitect",
        "Arquiteto analisando uma maquete",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Preserve escala da maquete e interação das mãos com o modelo.",
        "Arquiteto analisando uma maquete."
      ],
      [
        "prointeriordesigner",
        "Designer de interiores comparando materiais",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Mostre amostras distintas com textura e espessura plausíveis.",
        "Designer de interiores comparando materiais."
      ],
      [
        "profashiondesigner",
        "Estilista ajustando tecido num manequim",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Preserve drapeado e pontos de fixação, sem tecido atravessando o corpo.",
        "Estilista ajustando tecido num manequim."
      ],
      [
        "procostume",
        "Figurinista organizando um look",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Separe peças e acessórios por função, mantendo escala e continuidade.",
        "Figurinista organizando um look."
      ],
      [
        "prosetdesigner",
        "Cenógrafo trabalhando numa miniatura de palco",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Destaque a maquete e ferramentas sem confundir escalas humanas.",
        "Cenógrafo trabalhando numa miniatura de palco."
      ],
      [
        "prosounddesigner",
        "Designer de som numa cabine",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Mostre escuta e controles de áudio de modo plausível e discreto.",
        "Designer de som numa cabine."
      ],
      [
        "proceramicartist",
        "Artista ceramista avaliando uma peça pronta",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Destaque observação e textura da obra, sem repetir a cena de torno.",
        "Artista ceramista avaliando uma peça pronta."
      ],
      [
        "protattooartist",
        "Tatuador preparando materiais em bancada",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Mostre organização e materiais fechados, sem procedimento invasivo ou marcas inventadas.",
        "Tatuador preparando materiais em bancada."
      ],
      [
        "promakeupartist",
        "Maquiador organizando uma paleta",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Preserve pincéis e produtos com higiene visual e escala realista.",
        "Maquiador organizando uma paleta."
      ],
      [
        "prohairstylist",
        "Cabeleireiro preparando uma estação",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Organize ferramentas e espelho com reflexo coerente, sem dados pessoais.",
        "Cabeleireiro preparando uma estação."
      ],
      [
        "proflorist",
        "Florista montando um arranjo",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Mostre caules apoiados e distribuição natural entre as mãos.",
        "Florista montando um arranjo."
      ],
      [
        "procalligrapher",
        "Calígrafo praticando traços numa folha",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Use apenas letras fornecidas ou exercícios abstratos, sem palavras inventadas.",
        "Calígrafo praticando traços numa folha."
      ],
      [
        "procurator",
        "Curador posicionando obras numa parede",
        "Crie um retrato profissional em ação, preservando identidade, idade e corpo da referência quando fornecida. Mostre uma tarefa concreta com ferramentas apropriadas e anatomia coerente. Não invente clientes, diplomas, prêmios ou resultados de trabalho. Preserve arte fornecida e escala, sem atribuições ou certificados fictícios.",
        "Curador posicionando obras numa parede."
      ]
    ]
  ],
  [
    "Ofícios e serviços",
    "⚒",
    [
      [
        "workbarista",
        "Barista preparando uma bebida",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Mostre xícara e equipamento em posições coerentes, com ação claramente definida.",
        "Barista preparando uma bebida."
      ],
      [
        "workbaker",
        "Padeiro organizando pães numa bancada",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Destaque textura, utensílios e postura sem duplicar mãos ou alimentos.",
        "Padeiro organizando pães numa bancada."
      ],
      [
        "workchef",
        "Chef finalizando um prato",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Use um gesto preciso e mantenha utensílio, mão e alimento separados.",
        "Chef finalizando um prato."
      ],
      [
        "workgardener",
        "Jardineiro cuidando de um canteiro",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Mostre ferramenta apropriada e apoio corporal coerente junto à vegetação.",
        "Jardineiro cuidando de um canteiro."
      ],
      [
        "workcarpenter",
        "Marceneiro conferindo uma peça de madeira",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Destaque medição visual sem cotas inventadas e mantenha objeto apoiado.",
        "Marceneiro conferindo uma peça de madeira."
      ],
      [
        "workelectrician",
        "Profissional organizando ferramentas elétricas",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Mostre preparação com circuito desligado, sem exposição a contatos energizados.",
        "Profissional organizando ferramentas elétricas."
      ],
      [
        "workplumber",
        "Encanador inspecionando conexões aparentes",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Preserve continuidade dos tubos e posição das ferramentas sem instruções operacionais.",
        "Encanador inspecionando conexões aparentes."
      ],
      [
        "workmechanic",
        "Mecânico examinando uma roda removida",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Mostre veículo apoiado adequadamente e peças organizadas, sem risco encenado.",
        "Mecânico examinando uma roda removida."
      ],
      [
        "workbikemechanic",
        "Mecânico de bicicletas ajustando um suporte",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Preserve quadro preso e transmissão contínua, com mãos em gesto simples.",
        "Mecânico de bicicletas ajustando um suporte."
      ],
      [
        "workseamstress",
        "Costureira guiando tecido numa máquina",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Mantenha tecido apoiado e dedos afastados da área da agulha.",
        "Costureira guiando tecido numa máquina."
      ],
      [
        "workshoemaker",
        "Sapateiro avaliando um calçado",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Destaque costuras e ferramentas manuais sem peças fundidas.",
        "Sapateiro avaliando um calçado."
      ],
      [
        "worklocksmith",
        "Chaveiro organizando chaves em bancada",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Use objetos genéricos sem mostrar técnicas de acesso ou cópias identificáveis.",
        "Chaveiro organizando chaves em bancada."
      ],
      [
        "workbookrestorer",
        "Restaurador examinando um livro antigo",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Mostre suporte apropriado e manuseio delicado, sem inventar proveniência histórica.",
        "Restaurador examinando um livro antigo."
      ],
      [
        "workmuseumtech",
        "Técnico preparando suporte para uma peça",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Preserve proteção e escala, evitando contato inadequado com o objeto.",
        "Técnico preparando suporte para uma peça."
      ],
      [
        "workdelivery",
        "Entregador conferindo uma caixa",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Use etiqueta sem dados pessoais e postura coerente com o peso.",
        "Entregador conferindo uma caixa."
      ],
      [
        "workreception",
        "Recepcionista atendendo num balcão",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Mostre interação cordial e tela sem informações privadas.",
        "Recepcionista atendendo num balcão."
      ],
      [
        "worklibrarian",
        "Bibliotecário organizando uma estante",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Preserve apoio dos livros e espaçamento, sem títulos inventados dominantes.",
        "Bibliotecário organizando uma estante."
      ],
      [
        "worktailor",
        "Alfaiate observando o caimento de uma peça",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Destaque lapela e costuras sem alterar proporções da pessoa.",
        "Alfaiate observando o caimento de uma peça."
      ],
      [
        "workcleaning",
        "Profissional organizando materiais de limpeza",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Separe produtos fechados e equipamentos, sem misturas químicas ou instruções perigosas.",
        "Profissional organizando materiais de limpeza."
      ],
      [
        "workguide",
        "Guia apresentando um espaço cultural",
        "Crie uma fotografia documental encenada do ofício solicitado, mostrando uma tarefa simples e ferramentas adequadas. Preserve anatomia, proteção compatível e ambiente organizado. Não apresente procedimentos técnicos ou profissionais fictícios como instruções validadas. Use gesto natural e grupo pequeno, sem inventar credenciais ou informações locais.",
        "Guia apresentando um espaço cultural."
      ]
    ]
  ],
  [
    "Beleza e cosméticos",
    "✧",
    [
      [
        "beautyserum",
        "Frasco de sérum com conta-gotas",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Mostre gota suspensa na ponta e nível de líquido coerente.",
        "Frasco de sérum com conta-gotas."
      ],
      [
        "beautycream",
        "Pote de creme aberto",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Preserve borda, tampa separada e textura cremosa com pequenas marcas naturais.",
        "Pote de creme aberto."
      ],
      [
        "beautylipstick",
        "Batom aberto sobre fundo neutro",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Destaque corte da bala e mecanismo sem alterar embalagem fornecida.",
        "Batom aberto sobre fundo neutro."
      ],
      [
        "beautygloss",
        "Gloss com aplicador ao lado",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Mostre produto aderido ao aplicador em volume plausível, sem fios infinitos.",
        "Gloss com aplicador ao lado."
      ],
      [
        "beautyfoundation",
        "Base líquida numa composição minimalista",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Use pequena amostra de textura sem sugerir tonalidade universal para peles.",
        "Base líquida numa composição minimalista."
      ],
      [
        "beautypowder",
        "Pó compacto parcialmente aberto",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Revele superfície e espelho com reflexo coerente, sem dados ou inscrições falsas.",
        "Pó compacto parcialmente aberto."
      ],
      [
        "beautyblush",
        "Blush com pincel em uma mesa",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Mostre pigmento discreto nas cerdas e preserve formato da embalagem.",
        "Blush com pincel em uma mesa."
      ],
      [
        "beautyeyeshadow",
        "Paleta de sombras em vista oblíqua",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Mantenha divisórias e cores distintas, sem mistura artificial entre compartimentos.",
        "Paleta de sombras em vista oblíqua."
      ],
      [
        "beautymascara",
        "Máscara de cílios com escova",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Preserve cerdas individuais e quantidade moderada de produto.",
        "Máscara de cílios com escova."
      ],
      [
        "beautynailpolish",
        "Esmalte com uma amostra de cor",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Mostre pincel e superfície pintada sem alterar a cor de referência.",
        "Esmalte com uma amostra de cor."
      ],
      [
        "beautyperfume",
        "Perfume com tampa e vidro facetado",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Destaque refração e desenho do frasco sem inventar marca ou notas olfativas.",
        "Perfume com tampa e vidro facetado."
      ],
      [
        "beautysoap",
        "Sabonete artesanal sobre cerâmica",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Mostre bordas e textura realistas, sem ingredientes não fornecidos.",
        "Sabonete artesanal sobre cerâmica."
      ],
      [
        "beautyshampoo",
        "Frasco de shampoo num cenário de banho",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Use gotas discretas e mantenha rótulo legível e íntegro.",
        "Frasco de shampoo num cenário de banho."
      ],
      [
        "beautyconditioner",
        "Condicionador ao lado de uma toalha",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Preserve material da embalagem e dobra do tecido sem promessas de resultado.",
        "Condicionador ao lado de uma toalha."
      ],
      [
        "beautysunscreen",
        "Protetor solar em composição de verão",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Use sombra e contexto externo sem inventar fator de proteção.",
        "Protetor solar em composição de verão."
      ],
      [
        "beautycleanser",
        "Frasco de limpeza facial em bancada",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Mostre espuma moderada apenas quando compatível com o produto informado.",
        "Frasco de limpeza facial em bancada."
      ],
      [
        "beautybrushes",
        "Kit de pincéis sobre suporte",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Separe formatos das cerdas e mantenha cabos proporcionais.",
        "Kit de pincéis sobre suporte."
      ],
      [
        "beautyroller",
        "Acessório facial sobre tecido claro",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Preserve rotação e encaixe das peças, sem alegações terapêuticas.",
        "Acessório facial sobre tecido claro."
      ],
      [
        "beautybalm",
        "Bálsamo em pequeno recipiente",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Destaque superfície cerosa e volume contido, sem efeito líquido incompatível.",
        "Bálsamo em pequeno recipiente."
      ],
      [
        "beautytravelkit",
        "Kit de cosméticos de viagem",
        "Crie uma fotografia comercial do cosmético descrito, com embalagem e identidade preservadas quando houver referência. Destaque textura e uso visual sem prometer benefícios clínicos, mudanças corporais ou resultados não comprovados. Use materiais, luz e proporções plausíveis. Organize miniaturas com escala relativa consistente e embalagens reconhecíveis.",
        "Kit de cosméticos de viagem."
      ]
    ]
  ],
  [
    "Objetos de decoração",
    "◇",
    [
      [
        "decorlamp",
        "Luminária de mesa acesa",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mostre origem da luz e cabo contínuo, preservando a forma da cúpula.",
        "Luminária de mesa acesa."
      ],
      [
        "decorpendant",
        "Pendente sobre uma mesa",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mantenha suspensão e altura plausíveis, sem fio desaparecendo no vazio.",
        "Pendente sobre uma mesa."
      ],
      [
        "decorvase",
        "Vaso escultural numa estante",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Use iluminação lateral e deixe a borda revelar espessura do material.",
        "Vaso escultural numa estante."
      ],
      [
        "decorbowl",
        "Tigela decorativa sobre aparador",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Preserve concavidade e sombra de contato, sem conteúdo desnecessário.",
        "Tigela decorativa sobre aparador."
      ],
      [
        "decormirror",
        "Espelho arredondado numa parede",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Faça o reflexo corresponder ao espaço e ao ponto de vista.",
        "Espelho arredondado numa parede."
      ],
      [
        "decorclock",
        "Relógio de parede minimalista",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mantenha ponteiros ligados ao centro e marcações organizadas.",
        "Relógio de parede minimalista."
      ],
      [
        "decorcushion",
        "Almofada texturizada num sofá",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mostre compressão natural e costuras coerentes nas bordas.",
        "Almofada texturizada num sofá."
      ],
      [
        "decorthrow",
        "Manta sobre uma poltrona",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Faça dobras acompanharem o apoio e preserve peso do tecido.",
        "Manta sobre uma poltrona."
      ],
      [
        "decorrug",
        "Tapete geométrico numa sala",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Preserve perspectiva do desenho e contato com o piso.",
        "Tapete geométrico numa sala."
      ],
      [
        "decorcandleholder",
        "Castical sobre mesa escura",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Destaque encaixe da vela e metal sem reflexos estourados.",
        "Castical sobre mesa escura."
      ],
      [
        "decorbookend",
        "Aparadores segurando livros",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mostre peso e contato suficientes para sustentar o conjunto.",
        "Aparadores segurando livros."
      ],
      [
        "decortray",
        "Bandeja com poucos objetos",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mantenha escala relativa e bordas visíveis, sem sobrecarga visual.",
        "Bandeja com poucos objetos."
      ],
      [
        "decorplanter",
        "Cachepô com planta pequena",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Preserve encaixe do vaso e crescimento natural da folhagem.",
        "Cachepô com planta pequena."
      ],
      [
        "decorsculpture",
        "Escultura abstrata numa base",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mostre pontos de apoio e textura sem aparência de objeto flutuante.",
        "Escultura abstrata numa base."
      ],
      [
        "decorwallart",
        "Arte fornecida numa parede",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Preserve a imagem original e perspectiva da moldura sem cortes indevidos.",
        "Arte fornecida numa parede."
      ],
      [
        "decorceramicset",
        "Conjunto de cerâmicas numa prateleira",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Varie alturas mantendo linguagem de acabamento consistente.",
        "Conjunto de cerâmicas numa prateleira."
      ],
      [
        "decorroomdivider",
        "Divisória vazada num ambiente",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Preserve espessura, apoio e passagem de luz entre os módulos.",
        "Divisória vazada num ambiente."
      ],
      [
        "decorcoatrack",
        "Cabideiro com uma peça de roupa",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mantenha equilíbrio e ponto de apoio do tecido claramente visíveis.",
        "Cabideiro com uma peça de roupa."
      ],
      [
        "decorstoragebox",
        "Caixa decorativa com tampa",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Mostre encaixe e espessura, sem volume interno impossível.",
        "Caixa decorativa com tampa."
      ],
      [
        "decorhourglass",
        "Ampulheta sobre superfície clara",
        "Crie uma fotografia de objeto decorativo em contexto doméstico simples, com escala, materiais e sombras de contato realistas. Preserve o desenho fornecido. Use poucos elementos de apoio para destacar função e forma, sem inventar marcas ou autoria. Preserve fluxo de areia entre compartimentos e transparência do vidro.",
        "Ampulheta sobre superfície clara."
      ]
    ]
  ],
  [
    "Vitrines e espaços de venda",
    "▤",
    [
      [
        "retailshoes",
        "Vitrine de calçados com poucos pares",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Varie alturas dos suportes sem ocultar laterais e solas importantes.",
        "Vitrine de calçados com poucos pares."
      ],
      [
        "retailjewelry",
        "Expositor de joias em balcão",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Use bases proporcionais e luz controlada para preservar detalhes pequenos.",
        "Expositor de joias em balcão."
      ],
      [
        "retailbooks",
        "Mesa de novidades de uma livraria",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Organize capas fornecidas em alturas legíveis, sem títulos falsos.",
        "Mesa de novidades de uma livraria."
      ],
      [
        "retailplants",
        "Loja de plantas com corredor central",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Separe vasos e espécies por escala sem bloquear a circulação.",
        "Loja de plantas com corredor central."
      ],
      [
        "retailcoffee",
        "Balcão de uma loja de café",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Destaque produto embalado e área de atendimento sem informações inventadas.",
        "Balcão de uma loja de café."
      ],
      [
        "retailbakery",
        "Vitrine de uma padaria artesanal",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Preserve bandejas, vidro e diversidade natural dos alimentos.",
        "Vitrine de uma padaria artesanal."
      ],
      [
        "retailapparel",
        "Arara de roupas coordenadas",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Mantenha cabides e espaçamento coerentes, sem peças fundidas.",
        "Arara de roupas coordenadas."
      ],
      [
        "retailbags",
        "Parede de exposição de bolsas",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Mostre apoios discretos e escala consistente entre modelos.",
        "Parede de exposição de bolsas."
      ],
      [
        "retailcosmetics",
        "Bancada de uma loja de cosméticos",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Agrupe famílias de produto sem duplicar rótulos aleatoriamente.",
        "Bancada de uma loja de cosméticos."
      ],
      [
        "retailstationery",
        "Prateleira de papelaria criativa",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Organize tamanhos e cores com hierarquia, mantendo produtos identificáveis.",
        "Prateleira de papelaria criativa."
      ],
      [
        "retailtoys",
        "Vitrine de brinquedos originais",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Use personagens próprios e escala compatível com os suportes.",
        "Vitrine de brinquedos originais."
      ],
      [
        "retailceramics",
        "Loja pequena de peças cerâmicas",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Distribua peças com respiro e apoios estáveis.",
        "Loja pequena de peças cerâmicas."
      ],
      [
        "retailelectronics",
        "Mesa demonstrativa de dispositivos",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Preserve conexões e posição de uso, sem números de desempenho falsos.",
        "Mesa demonstrativa de dispositivos."
      ],
      [
        "retailrecords",
        "Loja de discos com expositores",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Use capas originais ou fornecidas e perspectiva coerente dos nichos.",
        "Loja de discos com expositores."
      ],
      [
        "retailsport",
        "Exposição de equipamentos esportivos",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Agrupe itens por atividade e mantenha pontos de fixação plausíveis.",
        "Exposição de equipamentos esportivos."
      ],
      [
        "retailpopup",
        "Loja temporária numa estrutura modular",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Mostre montagem, atendimento e acesso com linguagem visual consistente.",
        "Loja temporária numa estrutura modular."
      ],
      [
        "retailwindowseason",
        "Vitrine temática de uma estação",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Use poucos sinais sazonais e mantenha o produto como foco principal.",
        "Vitrine temática de uma estação."
      ],
      [
        "retailisland",
        "Ilha de exposição num corredor amplo",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Preserve acesso por todos os lados e altura proporcional.",
        "Ilha de exposição num corredor amplo."
      ],
      [
        "retailcheckout",
        "Área de caixa de uma loja fictícia",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Separe pagamento, embalagem e circulação sem dados de clientes.",
        "Área de caixa de uma loja fictícia."
      ],
      [
        "retaildisplaylight",
        "Produto em vitrine com iluminação dirigida",
        "Crie uma proposta visual de exposição comercial com produto dominante, circulação compreensível e identidade fornecida. Preserve escala e materiais. Não invente preços, descontos, vendas, depoimentos ou marcas; trate o ambiente como conceito quando não houver referência real. Faça cada foco corresponder a uma fonte, sem brilho uniforme excessivo.",
        "Produto em vitrine com iluminação dirigida."
      ]
    ]
  ],
  [
    "Educação e aprendizagem visual",
    "✎",
    [
      [
        "educount",
        "Objetos organizados para contagem",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Separe claramente cada unidade e evite sobreposição que dificulte contar.",
        "Objetos organizados para contagem."
      ],
      [
        "edushapes",
        "Família de formas geométricas básicas",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Mantenha contornos definidos e destaque diferenças sem efeitos que confundam.",
        "Família de formas geométricas básicas."
      ],
      [
        "educolors",
        "Círculos mostrando mistura de cores de tinta",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Use sobreposição ilustrativa e diferencie mistura de pigmento de luz.",
        "Círculos mostrando mistura de cores de tinta."
      ],
      [
        "edusizes",
        "Comparação de três tamanhos do mesmo objeto",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Preserve forma e perspectiva, variando somente escala visual.",
        "Comparação de três tamanhos do mesmo objeto."
      ],
      [
        "edupatterns",
        "Sequência visual com repetição simples",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Use um padrão consistente e deixe uma posição vazia claramente marcada.",
        "Sequência visual com repetição simples."
      ],
      [
        "edusorting",
        "Objetos separados por material",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Destaque textura de cada grupo sem depender apenas da cor.",
        "Objetos separados por material."
      ],
      [
        "eduopposites",
        "Duas cenas mostrando cheio e vazio",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Mantenha recipiente e enquadramento iguais para comparação direta.",
        "Duas cenas mostrando cheio e vazio."
      ],
      [
        "eduseasons",
        "Quatro vistas de uma árvore imaginária",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Preserve estrutura do tronco enquanto folhas e ambiente mudam.",
        "Quatro vistas de uma árvore imaginária."
      ],
      [
        "edudaynight",
        "Mesmo lugar durante dia e noite",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Mantenha arquitetura idêntica e altere somente luz e atividade pertinente.",
        "Mesmo lugar durante dia e noite."
      ],
      [
        "eduplantgrowth",
        "Etapas conceituais do crescimento de uma planta",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Mostre progressão clara e não acrescente tempos ou espécies não informados.",
        "Etapas conceituais do crescimento de uma planta."
      ],
      [
        "edufoodgroups",
        "Alimentos variados organizados em grupos visuais",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Use classificação fornecida, sem prescrever dieta ou inventar valores nutricionais.",
        "Alimentos variados organizados em grupos visuais."
      ],
      [
        "educlassroom",
        "Sala de aula ilustrada com materiais acessíveis",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Organize áreas de atividade e passagem sem excesso decorativo.",
        "Sala de aula ilustrada com materiais acessíveis."
      ],
      [
        "eduletters",
        "Formas de letras fornecidas em materiais simples",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Preserve exatamente os caracteres e evite inventar palavras.",
        "Formas de letras fornecidas em materiais simples."
      ],
      [
        "edufractions",
        "Divisão de um círculo em partes iguais",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Mantenha áreas equivalentes e separações visíveis, sem distorção de perspectiva.",
        "Divisão de um círculo em partes iguais."
      ],
      [
        "edubalance",
        "Balança ilustrativa com objetos",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Preserve apoio e inclinação coerentes com a relação solicitada.",
        "Balança ilustrativa com objetos."
      ],
      [
        "edutimeline",
        "Linha visual de etapas fornecidas",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Use espaçamento consistente e sentido de leitura claro, sem datas inventadas.",
        "Linha visual de etapas fornecidas."
      ],
      [
        "edumapclass",
        "Mapa fictício de uma sala",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Preserve relação entre portas e móveis, deixando claro o caráter esquemático.",
        "Mapa fictício de uma sala."
      ],
      [
        "edurecycle",
        "Objetos separados para triagem ilustrativa",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Siga categorias fornecidas e não invente regras locais de descarte.",
        "Objetos separados para triagem ilustrativa."
      ],
      [
        "edumotions",
        "Sequência de posições de uma bola",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Mantenha direção e distância coerentes para explicar o movimento solicitado.",
        "Sequência de posições de uma bola."
      ],
      [
        "eduobservation",
        "Lupa aproximando um detalhe de folha",
        "Crie uma ilustração educativa conceitual com uma ideia principal, formas legíveis e organização simples. Use somente informações fornecidas ou relações elementares estáveis; não invente rótulos, números ou resultados. Reserve espaços para texto externo quando necessário. Preserve correspondência entre detalhe ampliado e área original.",
        "Lupa aproximando um detalhe de folha."
      ]
    ]
  ],
  [
    "Ciência em imagens conceituais",
    "⌬",
    [
      [
        "scilightprism",
        "Prisma separando um feixe de luz",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Mantenha entrada e saída coerentes, diferenciando feixe e suporte.",
        "Prisma separando um feixe de luz."
      ],
      [
        "scireflection",
        "Reflexão num espelho plano",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Mostre raios esquemáticos com geometria coerente e poucos elementos.",
        "Reflexão num espelho plano."
      ],
      [
        "scirefraction",
        "Objeto parcialmente imerso em água",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Represente mudança aparente na interface sem deformar todo o recipiente.",
        "Objeto parcialmente imerso em água."
      ],
      [
        "scishadow",
        "Objeto e sombra numa superfície",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Faça tamanho e direção corresponderem à posição da fonte luminosa.",
        "Objeto e sombra numa superfície."
      ],
      [
        "scieclipse",
        "Alinhamento conceitual de corpos celestes",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Indique visualmente a ordem solicitada sem alegar escala real.",
        "Alinhamento conceitual de corpos celestes."
      ],
      [
        "sciorbits",
        "Modelo esquemático de órbitas",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Use trajetórias organizadas e deixe claro que tamanhos são ilustrativos.",
        "Modelo esquemático de órbitas."
      ],
      [
        "scicrystal",
        "Crescimento conceitual de um cristal",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Mostre faces conectadas e irregularidades, sem inventar composição química.",
        "Crescimento conceitual de um cristal."
      ],
      [
        "scidiffusion",
        "Cor se espalhando num líquido",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Use gradientes progressivos e movimento contínuo sem padrões geométricos perfeitos.",
        "Cor se espalhando num líquido."
      ],
      [
        "scisurfacetension",
        "Gota apoiada numa superfície",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Preserve curvatura e contato plausíveis sem apresentar medição de tensão.",
        "Gota apoiada numa superfície."
      ],
      [
        "scicapillary",
        "Líquido subindo em tubos finos ilustrativos",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Mantenha recipientes e interfaces legíveis sem valores numéricos inventados.",
        "Líquido subindo em tubos finos ilustrativos."
      ],
      [
        "scimagnet",
        "Campo magnético representado por limalhas",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Mostre padrão conceitual ao redor dos polos, sem alegar registro laboratorial.",
        "Campo magnético representado por limalhas."
      ],
      [
        "scilevers",
        "Alavanca com apoio e cargas ilustrativas",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Preserve relação espacial entre fulcro, esforço e resistência solicitada.",
        "Alavanca com apoio e cargas ilustrativas."
      ],
      [
        "scigears",
        "Duas engrenagens em contato",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Mantenha dentes compatíveis e eixos alinhados, sem interpenetração.",
        "Duas engrenagens em contato."
      ],
      [
        "scipulley",
        "Sistema simples de polia em esquema",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Preserve continuidade da corda e pontos de fixação legíveis.",
        "Sistema simples de polia em esquema."
      ],
      [
        "sciwatercycle",
        "Ciclo da água em paisagem conceitual",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Organize evaporação, nuvens e precipitação em percurso visual compreensível.",
        "Ciclo da água em paisagem conceitual."
      ],
      [
        "scisoillayers",
        "Perfil ilustrativo de camadas do solo",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Diferencie materiais e raízes sem inventar profundidades específicas.",
        "Perfil ilustrativo de camadas do solo."
      ],
      [
        "scierosion",
        "Margem de rio mostrando erosão conceitual",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Relacione fluxo e retirada de material sem dados de evento real.",
        "Margem de rio mostrando erosão conceitual."
      ],
      [
        "scimicrolife",
        "Microrganismos imaginados em ambiente ilustrativo",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Identifique como representação conceitual, evitando diagnóstico ou espécie falsa.",
        "Microrganismos imaginados em ambiente ilustrativo."
      ],
      [
        "scicellmodel",
        "Modelo didático de célula fornecida",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Mostre componentes pedidos com separação clara, sem adicionar estruturas não confirmadas.",
        "Modelo didático de célula fornecida."
      ],
      [
        "scisoundwave",
        "Ondas sonoras em representação abstrata",
        "Crie uma ilustração científica conceitual, claramente distinta de uma medição ou registro experimental. Preserve relações físicas básicas e fatos fornecidos. Não invente dados, espécies, escalas numéricas ou resultados; use rótulos apenas quando o texto exato for informado. Diferencie fonte e propagação sem tratar ondas desenhadas como imagem física literal.",
        "Ondas sonoras em representação abstrata."
      ]
    ]
  ],
  [
    "Animais de companhia",
    "♧",
    [
      [
        "petdogportrait",
        "Cão sentado junto a uma janela",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mantenha olhos nítidos e patas apoiadas, sem humanizar a anatomia.",
        "Cão sentado junto a uma janela."
      ],
      [
        "petdogrun",
        "Cão correndo num gramado",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mostre uma fase plausível da passada e sombra acompanhando o corpo.",
        "Cão correndo num gramado."
      ],
      [
        "petdogtoy",
        "Cão brincando com um brinquedo seguro",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Preserve contato da boca ou patas sem deformar o objeto.",
        "Cão brincando com um brinquedo seguro."
      ],
      [
        "petdogrest",
        "Cão descansando numa cama",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Use compressão do tecido e postura corporal relaxada natural.",
        "Cão descansando numa cama."
      ],
      [
        "petdogbathafter",
        "Cão enrolado numa toalha após banho",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mantenha focinho livre e pelagem úmida de forma discreta.",
        "Cão enrolado numa toalha após banho."
      ],
      [
        "petcatportrait",
        "Gato sobre um banco de madeira",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Preserve bigodes, orelhas e cauda com continuidade anatômica.",
        "Gato sobre um banco de madeira."
      ],
      [
        "petcatwindow",
        "Gato observando pela janela",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Faça reflexo e apoio das patas coerentes com o vidro.",
        "Gato observando pela janela."
      ],
      [
        "petcatplay",
        "Gato seguindo um brinquedo pendurado",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mostre gesto curto e espaço seguro, evitando saltos impossíveis.",
        "Gato seguindo um brinquedo pendurado."
      ],
      [
        "petcatsleep",
        "Gato dormindo sobre tecido",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Preserve posição das patas e pequenas variações da pelagem.",
        "Gato dormindo sobre tecido."
      ],
      [
        "petcatstretch",
        "Gato se alongando num tapete",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mantenha articulações e coluna em postura felina plausível.",
        "Gato se alongando num tapete."
      ],
      [
        "petrabbit",
        "Coelho num espaço doméstico preparado",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mostre chão estável e esconderijo apropriado, sem roupa ou pose humana.",
        "Coelho num espaço doméstico preparado."
      ],
      [
        "petguineapig",
        "Porquinho-da-índia junto a um abrigo",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Preserve escala e textura do pelo, sem acessórios apertados.",
        "Porquinho-da-índia junto a um abrigo."
      ],
      [
        "pethamster",
        "Hamster explorando um ambiente enriquecido",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Use objetos proporcionais e caminhos seguros, sem espaços minúsculos decorativos.",
        "Hamster explorando um ambiente enriquecido."
      ],
      [
        "petbirdperch",
        "Ave de companhia num poleiro",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Preserve pegada dos pés e posição das penas, sem asas duplicadas.",
        "Ave de companhia num poleiro."
      ],
      [
        "petbirdbath",
        "Ave pequena num banho raso",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mostre água em escala moderada e plumagem naturalmente molhada.",
        "Ave pequena num banho raso."
      ],
      [
        "petfish",
        "Peixe ornamental em aquário adequado",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Preserve nadadeiras e água transparente sem excesso de objetos ou lotação.",
        "Peixe ornamental em aquário adequado."
      ],
      [
        "petturtle",
        "Tartaruga em ambiente compatível com a referência",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mostre apoio e textura do casco sem inventar habitat específico.",
        "Tartaruga em ambiente compatível com a referência."
      ],
      [
        "petpair",
        "Dois animais descansando no mesmo ambiente",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Diferencie corpos e sombras sem fundir patas ou caudas.",
        "Dois animais descansando no mesmo ambiente."
      ],
      [
        "petpawdetail",
        "Detalhe de uma pata apoiada",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Preserve almofadas, unhas e pelos com foco seletivo natural.",
        "Detalhe de uma pata apoiada."
      ],
      [
        "petownerhand",
        "Animal recebendo carinho de uma mão",
        "Crie uma fotografia respeitosa do animal descrito, preservando aparência da referência e anatomia natural. Use comportamento plausível, cenário seguro e iluminação suave. Não atribua diagnóstico, personalidade comprovada ou capacidades extraordinárias ao animal. Mantenha contato delicado e anatomia de mão e cabeça coerentes.",
        "Animal recebendo carinho de uma mão."
      ]
    ]
  ],
  [
    "Fauna terrestre e aves",
    "❖",
    [
      [
        "faunafox",
        "Raposa atravessando uma clareira",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Mostre passada leve e cauda contínua, com vegetação em escala.",
        "Raposa atravessando uma clareira."
      ],
      [
        "faunadeer",
        "Cervo numa borda de floresta",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Preserve pernas e postura de atenção sem galhadas geometricamente perfeitas.",
        "Cervo numa borda de floresta."
      ],
      [
        "faunaelk",
        "Alce em uma paisagem úmida",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Mantenha proporções corporais e contato das patas com o solo.",
        "Alce em uma paisagem úmida."
      ],
      [
        "faunabear",
        "Urso caminhando numa área natural",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Use distância de observação e gesto cotidiano, sem agressividade gratuita.",
        "Urso caminhando numa área natural."
      ],
      [
        "faunawolf",
        "Lobo num campo aberto",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Preserve anatomia e pelagem sem atribuir expressão humana.",
        "Lobo num campo aberto."
      ],
      [
        "faunaraccoon",
        "Guaxinim explorando um tronco",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Mostre apoio das patas e textura da madeira com escala coerente.",
        "Guaxinim explorando um tronco."
      ],
      [
        "faunasquirrel",
        "Esquilo num galho",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Preserve cauda e mãos pequenas sem dedos humanos.",
        "Esquilo num galho."
      ],
      [
        "faunahedgehog",
        "Ouriço junto a folhas secas",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Mostre espinhos irregulares e focinho legível, sem padrões mecânicos.",
        "Ouriço junto a folhas secas."
      ],
      [
        "faunacapybara",
        "Capivara perto de um corpo d'água",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Use postura relaxada e margem natural, sem objetos urbanos desnecessários.",
        "Capivara perto de um corpo d'água."
      ],
      [
        "faunaarmadillo",
        "Tatu caminhando em solo terroso",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Preserve placas e articulações sem transformar carapaça em metal.",
        "Tatu caminhando em solo terroso."
      ],
      [
        "faunagiraffe",
        "Girafa numa paisagem aberta",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Mantenha escala do pescoço e patas, sem padrões de pelagem repetidos.",
        "Girafa numa paisagem aberta."
      ],
      [
        "faunaelephant",
        "Elefante caminhando em grupo pequeno",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Separe corpos e trombas, preservando diferenças naturais de tamanho.",
        "Elefante caminhando em grupo pequeno."
      ],
      [
        "faunazebra",
        "Zebras numa composição de campo",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Use listras individuais coerentes sem copiar o mesmo animal.",
        "Zebras numa composição de campo."
      ],
      [
        "faunalion",
        "Leão descansando numa sombra",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Preserve volume da juba e postura natural sem pose teatral.",
        "Leão descansando numa sombra."
      ],
      [
        "faunapenguin",
        "Pinguins numa margem gelada",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Mostre apoio e variação de postura, evitando cópias idênticas.",
        "Pinguins numa margem gelada."
      ],
      [
        "faunaowl",
        "Coruja pousada num galho",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Preserve garras e penas, com olhos sem brilho artificial excessivo.",
        "Coruja pousada num galho."
      ],
      [
        "faunaeagle",
        "Águia em voo sobre relevo",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Mostre abertura das asas e orientação das penas coerentes.",
        "Águia em voo sobre relevo."
      ],
      [
        "faunakingfisher",
        "Ave pescadora pousada sobre água",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Use poleiro estável e reflexos naturais sem inventar captura simultânea.",
        "Ave pescadora pousada sobre água."
      ],
      [
        "faunahummingbird",
        "Beija-flor junto a uma flor",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Preserve bico e posição de voo, com movimento restrito às asas.",
        "Beija-flor junto a uma flor."
      ],
      [
        "faunaflamingo",
        "Flamingos numa área rasa",
        "Crie uma imagem de fauna com anatomia plausível, comportamento natural e ambiente coerente com o animal informado. Use distância de observação respeitosa. Evite interação humana arriscada, espécies inventadas apresentadas como reais e padrões clonados de pelo ou penas. Mantenha pernas e reflexos separados, sem confundir corpos e água.",
        "Flamingos numa área rasa."
      ]
    ]
  ],
  [
    "Vida marinha e aquática",
    "≈",
    [
      [
        "seaturtle",
        "Tartaruga marinha nadando sobre recife",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Preserve nadadeiras e casco, com partículas discretas na água.",
        "Tartaruga marinha nadando sobre recife."
      ],
      [
        "seadolphin",
        "Golfinho próximo à superfície",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Mostre corpo contínuo e ondulação compatível com a direção do nado.",
        "Golfinho próximo à superfície."
      ],
      [
        "seawhale",
        "Baleia vista a distância no oceano",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Use escala monumental e visibilidade moderada, sem transparência irreal.",
        "Baleia vista a distância no oceano."
      ],
      [
        "searay",
        "Arraia deslizando sobre areia",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Preserve contorno e sombra suave no fundo sem asas de ave.",
        "Arraia deslizando sobre areia."
      ],
      [
        "seajelly",
        "Água-viva em água escura",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Mostre transparência e tentáculos contínuos sem brilho neon indiscriminado.",
        "Água-viva em água escura."
      ],
      [
        "seaoctopus",
        "Polvo sobre uma rocha submersa",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Preserve braços distintos e contato das ventosas com a superfície.",
        "Polvo sobre uma rocha submersa."
      ],
      [
        "seasquid",
        "Lula numa coluna d'água",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Destaque corpo e nadadeiras com movimento plausível e fundo simples.",
        "Lula numa coluna d'água."
      ],
      [
        "seaseahorse",
        "Cavalo-marinho preso a uma planta",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Mantenha cauda enrolada e escala pequena sem postura humana.",
        "Cavalo-marinho preso a uma planta."
      ],
      [
        "seacrab",
        "Caranguejo numa poça de maré",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Separe patas e pinças, preservando apoio e reflexos da água.",
        "Caranguejo numa poça de maré."
      ],
      [
        "sealobster",
        "Lagosta junto a uma rocha",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Mostre antenas contínuas e carapaça texturizada sem membros duplicados.",
        "Lagosta junto a uma rocha."
      ],
      [
        "seastar",
        "Estrela-do-mar sobre substrato",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Preserve contato e textura sem transformá-la em objeto rígido brilhante.",
        "Estrela-do-mar sobre substrato."
      ],
      [
        "seaurchin",
        "Ouriço-do-mar numa área rochosa",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Distribua espinhos organicamente e preserve escala do ambiente.",
        "Ouriço-do-mar numa área rochosa."
      ],
      [
        "seacoral",
        "Recife com diversidade de formas",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Varie colônias e profundidade sem repetir módulos idênticos.",
        "Recife com diversidade de formas."
      ],
      [
        "seaschool",
        "Cardume atravessando água azul",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Preserve direções relacionadas e distâncias, evitando peixes clonados.",
        "Cardume atravessando água azul."
      ],
      [
        "seaclownfish",
        "Peixe pequeno entre tentáculos de anêmona",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Separe animal e habitat sem fundir nadadeiras às estruturas.",
        "Peixe pequeno entre tentáculos de anêmona."
      ],
      [
        "seashark",
        "Tubarão observado de longe",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Use comportamento neutro e anatomia coerente, sem ataque encenado.",
        "Tubarão observado de longe."
      ],
      [
        "seaseal",
        "Foca descansando numa margem",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Preserve postura e textura da pele sem membros de animal terrestre.",
        "Foca descansando numa margem."
      ],
      [
        "seaotter",
        "Lontra flutuando em água calma",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Mantenha apoio do corpo e ondulações coerentes com a flutuação.",
        "Lontra flutuando em água calma."
      ],
      [
        "seakelp",
        "Floresta submarina de algas",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Mostre caules ancorados e folhas seguindo uma corrente comum.",
        "Floresta submarina de algas."
      ],
      [
        "seashell",
        "Conchas numa faixa de areia molhada",
        "Crie uma cena subaquática ou costeira com animais em comportamento plausível e água coerente com a profundidade. Preserve anatomia, escala e iluminação filtrada. Não invente identificação científica, dados de conservação ou interação humana perigosa. Preserve irregularidades e pequenas sombras, sem padrões perfeitamente repetidos.",
        "Conchas numa faixa de areia molhada."
      ]
    ]
  ],
  [
    "Insetos e pequenos mundos",
    "⌕",
    [
      [
        "smallbutterfly",
        "Borboleta pousada numa flor",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Preserve simetria geral das asas e apoio das pernas sem copiar texturas.",
        "Borboleta pousada numa flor."
      ],
      [
        "smallmoth",
        "Mariposa numa superfície de madeira",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Destaque escamas e antenas sem transformar asas em tecido sintético.",
        "Mariposa numa superfície de madeira."
      ],
      [
        "smallbee",
        "Abelha visitando uma flor",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Mostre contato com a flor e pólen discreto, sem olhos humanos.",
        "Abelha visitando uma flor."
      ],
      [
        "smallbumble",
        "Inseto polinizador sobre pétalas",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Preserve proporções e profundidade de campo curta sem exagerar pelos.",
        "Inseto polinizador sobre pétalas."
      ],
      [
        "smallladybug",
        "Joaninha caminhando numa folha",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Mostre patas apoiadas e brilho moderado da carapaça.",
        "Joaninha caminhando numa folha."
      ],
      [
        "smallbeetle",
        "Besouro sobre um tronco",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Preserve segmentação e encaixe das patas, com textura natural.",
        "Besouro sobre um tronco."
      ],
      [
        "smallant",
        "Formiga carregando um fragmento vegetal",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Mantenha contato da carga e escala plausível do fragmento.",
        "Formiga carregando um fragmento vegetal."
      ],
      [
        "smalldragonfly",
        "Libélula pousada numa haste",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Mostre asas transparentes e nervuras sem duplicações.",
        "Libélula pousada numa haste."
      ],
      [
        "smalldamselfly",
        "Pequeno inseto alado junto à água",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Preserve corpo fino e posição natural das asas conforme referência.",
        "Pequeno inseto alado junto à água."
      ],
      [
        "smallgrasshopper",
        "Gafanhoto numa folha longa",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Destaque pernas traseiras articuladas e apoio estável.",
        "Gafanhoto numa folha longa."
      ],
      [
        "smallcricket",
        "Grilo numa área de vegetação baixa",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Mantenha antenas contínuas e textura do solo em escala.",
        "Grilo numa área de vegetação baixa."
      ],
      [
        "smallmantis",
        "Louva-a-deus sobre um ramo",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Preserve articulações e postura natural sem gesto humano.",
        "Louva-a-deus sobre um ramo."
      ],
      [
        "smallcaterpillar",
        "Lagarta atravessando uma folha",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Mostre segmentação e pontos de apoio sem padrões mecânicos.",
        "Lagarta atravessando uma folha."
      ],
      [
        "smallchrysalis",
        "Crisálida presa a um galho",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Preserve ponto de fixação e textura, sem sugerir transformação instantânea.",
        "Crisálida presa a um galho."
      ],
      [
        "smallsnail",
        "Caracol numa pedra úmida",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Mostre corpo aderente e espiral plausível da concha.",
        "Caracol numa pedra úmida."
      ],
      [
        "smallslug",
        "Lesma sobre uma folha molhada",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Use brilho úmido moderado e contato contínuo com a superfície.",
        "Lesma sobre uma folha molhada."
      ],
      [
        "smallspiderweb",
        "Aranha numa teia iluminada",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Preserve conexões dos fios e anatomia sem padrões perfeitos artificiais.",
        "Aranha numa teia iluminada."
      ],
      [
        "smalljumpingspider",
        "Aranha pequena observada em macro",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Mostre olhos e pernas conforme referência, sem expressão humana.",
        "Aranha pequena observada em macro."
      ],
      [
        "smallwoodlouse",
        "Tatuzinho-de-jardim sob folhas",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Preserve placas segmentadas e ambiente úmido em escala.",
        "Tatuzinho-de-jardim sob folhas."
      ],
      [
        "smallfirefly",
        "Vagalume num ambiente noturno",
        "Crie uma macrofotografia ou ilustração naturalista do pequeno animal informado, com escala e anatomia plausíveis. Use foco seletivo e ambiente coerente. Evite identificação de espécie não fornecida e estruturas inventadas apresentadas como observação científica. Use brilho localizado no abdômen e entorno escuro, sem iluminar todo o corpo.",
        "Vagalume num ambiente noturno."
      ]
    ]
  ],
  [
    "Flores e jardins",
    "❀",
    [
      [
        "gardenrose",
        "Rosa numa composição de fundo simples",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Mostre pétalas sobrepostas com pequenas irregularidades e profundidade natural.",
        "Rosa numa composição de fundo simples."
      ],
      [
        "gardensunflower",
        "Girassol iluminado lateralmente",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Preserve disco central e inserção das pétalas sem repetição perfeita.",
        "Girassol iluminado lateralmente."
      ],
      [
        "gardentulip",
        "Tulipas num vaso transparente",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Mostre caules atravessando a água com refração coerente.",
        "Tulipas num vaso transparente."
      ],
      [
        "gardenorchid",
        "Orquídea sobre uma bancada clara",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Preserve estrutura da flor conforme referência e apoio da haste.",
        "Orquídea sobre uma bancada clara."
      ],
      [
        "gardenlavender",
        "Campo de flores lilases ao entardecer",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Varie alturas e densidade, evitando fileiras clonadas sem textura.",
        "Campo de flores lilases ao entardecer."
      ],
      [
        "gardenwildflowers",
        "Pequeno buquê de flores do campo",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Use caules de comprimentos diferentes e distribuição informal equilibrada.",
        "Pequeno buquê de flores do campo."
      ],
      [
        "gardensucculent",
        "Suculenta em recipiente de cerâmica",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Preserve espessura e inserção das folhas sem simetria matemática.",
        "Suculenta em recipiente de cerâmica."
      ],
      [
        "gardencactus",
        "Cacto em fundo de areia",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Mostre espinhos e sombra de contato sem aparência de plástico.",
        "Cacto em fundo de areia."
      ],
      [
        "gardenfern",
        "Samambaia perto de uma janela",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Mantenha frondes conectadas e curvatura causada pelo peso.",
        "Samambaia perto de uma janela."
      ],
      [
        "gardenmonstera",
        "Folha recortada em luz suave",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Preserve aberturas orgânicas e nervuras contínuas, sem recortes geométricos.",
        "Folha recortada em luz suave."
      ],
      [
        "gardenherbs",
        "Vasos de ervas numa cozinha",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Separe recipientes e mantenha diversidade de folhas conforme referência.",
        "Vasos de ervas numa cozinha."
      ],
      [
        "gardenvertical",
        "Jardim vertical num pátio",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Mostre módulos e crescimento com manutenção visualmente plausível.",
        "Jardim vertical num pátio."
      ],
      [
        "gardenraisedbed",
        "Canteiros elevados numa horta",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Preserve profundidade, caminhos e escala das plantas sem lotação excessiva.",
        "Canteiros elevados numa horta."
      ],
      [
        "gardenpond",
        "Pequeno lago ornamental num jardim",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Faça margens, água e plantas se conectarem naturalmente.",
        "Pequeno lago ornamental num jardim."
      ],
      [
        "gardenpath",
        "Caminho de pedras entre plantas",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Mantenha intervalos transitáveis e vegetação fora da passagem principal.",
        "Caminho de pedras entre plantas."
      ],
      [
        "gardenpergola",
        "Pergolado coberto por trepadeira",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Mostre ramos apoiados e sombra correspondente à estrutura.",
        "Pergolado coberto por trepadeira."
      ],
      [
        "gardenbonsai",
        "Árvore em miniatura num vaso",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Preserve proporção de tronco, raízes e copa sem aparência de árvore colada.",
        "Árvore em miniatura num vaso."
      ],
      [
        "gardenterrarium",
        "Terrário fechado sobre uma mesa",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Mostre camadas de substrato e reflexos controlados no vidro.",
        "Terrário fechado sobre uma mesa."
      ],
      [
        "gardenseeds",
        "Sementes organizadas numa superfície",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Destaque diferenças de forma e escala sem rótulos científicos inventados.",
        "Sementes organizadas numa superfície."
      ],
      [
        "gardenfallenpetals",
        "Pétalas caídas sobre pedra úmida",
        "Crie uma imagem botânica ou paisagística do projeto, com crescimento, escala e distribuição naturais. Use luz coerente e preserve a planta de referência. Não invente identificação científica, condições de cultivo ou propriedades medicinais; priorize textura e organização visual. Use distribuição irregular e contato com a superfície, sem arranjo perfeito.",
        "Pétalas caídas sobre pedra úmida."
      ]
    ]
  ],
  [
    "Cenas urbanas e arquitetura cotidiana",
    "▥",
    [
      [
        "citycorner",
        "Esquina de bairro num fim de tarde",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Use duas direções de rua para criar profundidade e circulação legível.",
        "Esquina de bairro num fim de tarde."
      ],
      [
        "cityalley",
        "Viela com luz no fim do percurso",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Preserve largura e portas coerentes, sem aumentar artificialmente o espaço.",
        "Viela com luz no fim do percurso."
      ],
      [
        "citystairs",
        "Escadaria externa entre construções",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Mantenha degraus regulares e apoios, com ponto de chegada visível.",
        "Escadaria externa entre construções."
      ],
      [
        "citylaundryfacade",
        "Fachada residencial com roupas no varal",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Mostre fixações e janelas em escala, sem dados de moradores.",
        "Fachada residencial com roupas no varal."
      ],
      [
        "citynewsstand",
        "Banca de revistas numa calçada",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Use capas genéricas sem manchetes falsas e preserve passagem de pedestres.",
        "Banca de revistas numa calçada."
      ],
      [
        "citystreetcafe",
        "Mesas de café numa calçada ampla",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Distribua cadeiras e atendimento sem bloquear portas ou circulação.",
        "Mesas de café numa calçada ampla."
      ],
      [
        "citycrossingrain",
        "Cruzamento depois de uma chuva",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Faça reflexos corresponderem a luzes e edifícios presentes.",
        "Cruzamento depois de uma chuva."
      ],
      [
        "citystreetmusician",
        "Músico tocando numa praça",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Preserve instrumento e gesto natural, com público discreto e variado.",
        "Músico tocando numa praça."
      ],
      [
        "cityskatepark",
        "Pista de skate vazia ao amanhecer",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Mostre curvas e transições contínuas, sem rampas desconectadas.",
        "Pista de skate vazia ao amanhecer."
      ],
      [
        "citybasketcourt",
        "Quadra de bairro entre prédios",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Mantenha linhas e tabelas coerentes com a perspectiva.",
        "Quadra de bairro entre prédios."
      ],
      [
        "cityunderpass",
        "Passagem urbana sob um viaduto",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Use luz e profundidade para organizar pilares e percurso.",
        "Passagem urbana sob um viaduto."
      ],
      [
        "cityoverpass",
        "Passarela de pedestres sobre uma via",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Preserve guarda-corpos, acessos e escala das pessoas.",
        "Passarela de pedestres sobre uma via."
      ],
      [
        "citystationhall",
        "Saguão de estação fictícia",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Separe áreas de espera e passagem, sem horários ou destinos inventados.",
        "Saguão de estação fictícia."
      ],
      [
        "citylibraryfront",
        "Biblioteca de bairro vista da rua",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Mostre acesso e relação com a calçada sem nomes institucionais falsos.",
        "Biblioteca de bairro vista da rua."
      ],
      [
        "citymarketfront",
        "Entrada de um mercado local fictício",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Use produtos e movimento como contexto, preservando a arquitetura.",
        "Entrada de um mercado local fictício."
      ],
      [
        "cityrooftopdetail",
        "Caixas e antenas num conjunto de telhados",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Mantenha apoio e conexões plausíveis sem poluição visual aleatória.",
        "Caixas e antenas num conjunto de telhados."
      ],
      [
        "citynightwindow",
        "Janelas iluminadas numa fachada noturna",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Varie intensidade e cortinas sem revelar pessoas identificáveis ou dados privados.",
        "Janelas iluminadas numa fachada noturna."
      ],
      [
        "citystreetbench",
        "Banco de praça sob uma árvore",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Mostre desgaste moderado e sombra coerente da vegetação.",
        "Banco de praça sob uma árvore."
      ],
      [
        "citybikewaycurve",
        "Curva de ciclovia junto a um parque",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Preserve continuidade do piso e separação clara de percursos.",
        "Curva de ciclovia junto a um parque."
      ],
      [
        "cityquietdawn",
        "Rua quase vazia ao amanhecer",
        "Crie uma fotografia urbana original com perspectiva, escala e atividade coerentes. Use locais fictícios ou preserve referências fornecidas para lugares reais. Não invente endereços, placas comerciais ou fatos históricos; evite informações pessoais legíveis. Use luz baixa e atividade mínima para comunicar o horário.",
        "Rua quase vazia ao amanhecer."
      ]
    ]
  ],
  [
    "Ambientes rurais e produção",
    "♧",
    [
      [
        "ruralbarn",
        "Celeiro de madeira numa paisagem aberta",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Mostre estrutura e acesso coerentes com uso e desgaste moderado.",
        "Celeiro de madeira numa paisagem aberta."
      ],
      [
        "ruralfence",
        "Cerca seguindo o relevo de um campo",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Preserve postes conectados e perspectiva sem intervalos aleatórios.",
        "Cerca seguindo o relevo de um campo."
      ],
      [
        "ruralorchard",
        "Pomar com caminhos entre árvores",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Varie copas e frutos mantendo organização plausível das fileiras.",
        "Pomar com caminhos entre árvores."
      ],
      [
        "ruralvineyard",
        "Videiras numa encosta",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Mostre suportes e orientação das linhas sem padrões perfeitamente clonados.",
        "Videiras numa encosta."
      ],
      [
        "ruralgreenhouse",
        "Estufa rural com área de cultivo",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Preserve estrutura, transparência e circulação entre canteiros.",
        "Estufa rural com área de cultivo."
      ],
      [
        "ruralhay",
        "Fardos num campo após colheita",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Use tamanhos consistentes e sombras de contato com o solo.",
        "Fardos num campo após colheita."
      ],
      [
        "ruralgrain",
        "Grãos sendo organizados em recipientes",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Destaque textura e escala sem inventar peso ou qualidade.",
        "Grãos sendo organizados em recipientes."
      ],
      [
        "ruralcoffeeharvest",
        "Frutos de café numa cena de colheita",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Preserve mãos e ramos, sem alegações de origem ou método certificado.",
        "Frutos de café numa cena de colheita."
      ],
      [
        "ruralteafield",
        "Campo de cultivo verde com caminhos",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Mostre relevo e variação natural sem figuras humanas repetidas.",
        "Campo de cultivo verde com caminhos."
      ],
      [
        "ruralirrigation",
        "Canal de água numa área agrícola",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Preserve fluxo e diferença de nível, sem instruções de manejo.",
        "Canal de água numa área agrícola."
      ],
      [
        "ruralfarmhouse",
        "Casa rural com varanda",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Use materiais coerentes e relação clara com o terreno.",
        "Casa rural com varanda."
      ],
      [
        "ruralwell",
        "Poço ilustrativo num pátio rural",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Mostre estrutura e cobertura sem sugerir potabilidade da água.",
        "Poço ilustrativo num pátio rural."
      ],
      [
        "ruralwindmill",
        "Moinho numa paisagem campestre",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Preserve eixo e pás conectadas sem movimento impossível.",
        "Moinho numa paisagem campestre."
      ],
      [
        "ruralwaterwheel",
        "Roda d'água junto a um canal",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Faça contato com o fluxo e apoio estrutural visualmente coerentes.",
        "Roda d'água junto a um canal."
      ],
      [
        "ruraltoolshed",
        "Abrigo de ferramentas organizado",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Separe utensílios e mantenha pontos de apoio seguros.",
        "Abrigo de ferramentas organizado."
      ],
      [
        "ruralbasketproduce",
        "Cesto de produtos recém-colhidos",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Varie formas e marcas naturais sem brilho de plástico.",
        "Cesto de produtos recém-colhidos."
      ],
      [
        "ruraldirtroad",
        "Estrada de terra entre campos",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Use sulcos e perspectiva coerentes sem veículos ou rastros contraditórios.",
        "Estrada de terra entre campos."
      ],
      [
        "ruralmorningfog",
        "Construções rurais sob névoa matinal",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Separe planos por contraste sem esconder o assunto principal.",
        "Construções rurais sob névoa matinal."
      ],
      [
        "ruralhorsepasture",
        "Cavalos num pasto aberto",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Preserve anatomia e distâncias naturais, sem animais clonados.",
        "Cavalos num pasto aberto."
      ],
      [
        "ruralsheep",
        "Pequeno rebanho numa encosta",
        "Crie uma fotografia de ambiente rural com terreno, construções e atividades visualmente plausíveis. Preserve materiais e escala. Não invente produtividade, origem certificada ou práticas agronômicas; evite apresentar uma cena ilustrativa como registro de uma propriedade real. Varie posturas e mantenha contato das patas com o relevo.",
        "Pequeno rebanho numa encosta."
      ]
    ]
  ],
  [
    "Viagem e hospedagem visual",
    "⌂",
    [
      [
        "travelarrival",
        "Pessoa chegando a uma pousada fictícia",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Mostre bagagem e entrada com circulação clara e escala realista.",
        "Pessoa chegando a uma pousada fictícia."
      ],
      [
        "travelcabin",
        "Cabana de madeira em paisagem natural",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Preserve apoio no terreno e acesso plausível sem luxo não solicitado.",
        "Cabana de madeira em paisagem natural."
      ],
      [
        "travelcampview",
        "Vista de dentro de uma barraca",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Use a abertura como moldura e preserve espessura do tecido.",
        "Vista de dentro de uma barraca."
      ],
      [
        "travelhostel",
        "Área compartilhada de hostel fictício",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Separe camas e circulação, evitando ampliar artificialmente o ambiente.",
        "Área compartilhada de hostel fictício."
      ],
      [
        "travelboutique",
        "Quarto de hospedagem com detalhe autoral",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Destaque uma peça de decoração sem ocultar a dimensão do espaço.",
        "Quarto de hospedagem com detalhe autoral."
      ],
      [
        "travelbreakfastroom",
        "Sala de café da manhã de uma pousada",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Organize mesas e serviço sem prometer itens ou benefícios reais.",
        "Sala de café da manhã de uma pousada."
      ],
      [
        "travellobby",
        "Lobby de hotel fictício",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Mostre recepção, espera e passagem com hierarquia espacial clara.",
        "Lobby de hotel fictício."
      ],
      [
        "travelwindowseat",
        "Assento junto à janela de transporte",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Preserve moldura e perspectiva externa sem identificar companhia.",
        "Assento junto à janela de transporte."
      ],
      [
        "travelluggage",
        "Mala junto a uma porta aberta",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Use posição e luz para sugerir partida, sem documentos legíveis.",
        "Mala junto a uma porta aberta."
      ],
      [
        "travelmaptable",
        "Mesa com mapa fictício e caderno",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Destaque planejamento sem apresentar rotas inventadas como reais.",
        "Mesa com mapa fictício e caderno."
      ],
      [
        "travelsouvenir",
        "Objeto artesanal como lembrança de viagem",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Mostre textura e contexto sem inventar origem cultural certificada.",
        "Objeto artesanal como lembrança de viagem."
      ],
      [
        "travelviewpoint",
        "Mirante com uma pessoa observando",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Preserve proteção nas bordas e escala do panorama.",
        "Mirante com uma pessoa observando."
      ],
      [
        "traveltrailhut",
        "Abrigo de trilha numa paisagem montanhosa",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Mostre acesso e construção coerentes com o terreno.",
        "Abrigo de trilha numa paisagem montanhosa."
      ],
      [
        "travelbeachroom",
        "Quarto fictício próximo ao mar",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Equilibre luz interna e vista sem alterar proporções da janela.",
        "Quarto fictício próximo ao mar."
      ],
      [
        "travelcitystay",
        "Janela de hospedagem voltada à cidade",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Faça perspectiva e altura plausíveis, sem monumentos inventados.",
        "Janela de hospedagem voltada à cidade."
      ],
      [
        "travellakeside",
        "Deck de hospedagem junto a um lago",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Preserve apoios, bordas e reflexos sem estrutura flutuante inexplicada.",
        "Deck de hospedagem junto a um lago."
      ],
      [
        "travelroadstop",
        "Pausa de viagem numa área segura",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Mostre veículo estacionado e espaço de descanso separado da via.",
        "Pausa de viagem numa área segura."
      ],
      [
        "traveljournal",
        "Diário visual com lembranças fornecidas",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Preserve fotos e bilhetes recebidos, evitando dados pessoais ou datas falsas.",
        "Diário visual com lembranças fornecidas."
      ],
      [
        "traveltraincabin",
        "Interior de cabine ferroviária fictícia",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Mantenha assentos, bagageiro e janela em escala coerente.",
        "Interior de cabine ferroviária fictícia."
      ],
      [
        "travelpackingflat",
        "Itens essenciais de viagem vistos de cima",
        "Crie uma imagem de viagem ou hospedagem que comunique experiência e espaço com proporções honestas. Use destinos fictícios ou referências confirmadas. Não invente serviços disponíveis, avaliações, preços ou características de um estabelecimento real. Organize objetos sem marcas inventadas e preserve tamanhos relativos.",
        "Itens essenciais de viagem vistos de cima."
      ]
    ]
  ],
  [
    "Cultura, lazer e convivência",
    "✺",
    [
      [
        "culturecinema",
        "Sala de cinema antes da sessão",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Mostre fileiras e tela coerentes, usando imagem original sem filme reconhecível.",
        "Sala de cinema antes da sessão."
      ],
      [
        "culturetheater",
        "Palco teatral com cenário original",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Organize entradas e iluminação sem copiar montagem existente.",
        "Palco teatral com cenário original."
      ],
      [
        "culturemuseum",
        "Visitante observando uma obra fornecida",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Preserve arte e escala, mantendo distância e gesto naturais.",
        "Visitante observando uma obra fornecida."
      ],
      [
        "culturebookclub",
        "Grupo pequeno numa conversa sobre leitura",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Varie posturas e livros sem capas ou falas inventadas.",
        "Grupo pequeno numa conversa sobre leitura."
      ],
      [
        "culturechess",
        "Duas pessoas diante de um tabuleiro",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Mantenha casas regulares e peças em posições fisicamente plausíveis.",
        "Duas pessoas diante de um tabuleiro."
      ],
      [
        "culturepuzzle",
        "Mesa com quebra-cabeça em montagem",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Preserve continuidade da imagem e encaixes sem peças fundidas.",
        "Mesa com quebra-cabeça em montagem."
      ],
      [
        "cultureboardgame",
        "Família jogando um jogo original",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Separe mãos e peças, sem regras ou marcas fictícias apresentadas como reais.",
        "Família jogando um jogo original."
      ],
      [
        "culturedanceclass",
        "Aula de dança em um estúdio",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Mostre uma sequência simples com espelhos e anatomia coerentes.",
        "Aula de dança em um estúdio."
      ],
      [
        "cultureceramicclass",
        "Grupo numa atividade de cerâmica",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Diferencie tarefas e peças, evitando participantes com gestos idênticos.",
        "Grupo numa atividade de cerâmica."
      ],
      [
        "culturepaintingclass",
        "Pessoas pintando em cavaletes",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Preserve apoio das telas e obras originais sem textos aleatórios.",
        "Pessoas pintando em cavaletes."
      ],
      [
        "culturechoirpractice",
        "Ensaio de coro num espaço simples",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Varie expressões e preserve partituras sem conteúdo falso legível.",
        "Ensaio de coro num espaço simples."
      ],
      [
        "cultureorchestra",
        "Pequeno conjunto instrumental em ensaio",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Posicione instrumentos e cadeiras de forma plausível, sem músicos duplicados.",
        "Pequeno conjunto instrumental em ensaio."
      ],
      [
        "culturestreetfair",
        "Feira cultural fictícia ao ar livre",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Organize bancas e percurso com diversidade visual controlada.",
        "Feira cultural fictícia ao ar livre."
      ],
      [
        "culturepuppet",
        "Teatro de bonecos original",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Mostre palco e personagens próprios com mecanismos discretos plausíveis.",
        "Teatro de bonecos original."
      ],
      [
        "culturestorytelling",
        "Pessoa contando uma história a um grupo",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Use gestos naturais e atenção variada sem expressões exageradas.",
        "Pessoa contando uma história a um grupo."
      ],
      [
        "cultureplanetarium",
        "Sala de projeção astronômica conceitual",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Mostre cúpula e assentos, sem representar o céu como medição real.",
        "Sala de projeção astronômica conceitual."
      ],
      [
        "cultureaquarium",
        "Visitantes diante de um tanque amplo",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Preserve espessura do vidro e escala sem superlotar os animais.",
        "Visitantes diante de um tanque amplo."
      ],
      [
        "culturebotanicvisit",
        "Passeio por um jardim organizado",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Mostre caminhos livres e vegetação variada sem placas científicas inventadas.",
        "Passeio por um jardim organizado."
      ],
      [
        "cultureoutdoorfilm",
        "Projeção de imagem original numa praça",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Preserve tela, fonte luminosa e posições do público.",
        "Projeção de imagem original numa praça."
      ],
      [
        "culturecraftfair",
        "Mostra de objetos artesanais",
        "Crie uma cena cultural ou de lazer original com interações naturais, anatomia coerente e espaço compreensível. Use obras, identidades e textos somente quando fornecidos. Não invente eventos realizados, público real, autoria ou credenciais. Destaque peças distintas e apoios estáveis sem autoria inventada.",
        "Mostra de objetos artesanais."
      ]
    ]
  ],
  [
    "Cenografia e estúdios",
    "▱",
    [
      [
        "setcyclorama",
        "Estúdio com fundo contínuo",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Mostre curva suave entre parede e piso, sem linha de horizonte marcada.",
        "Estúdio com fundo contínuo."
      ],
      [
        "setpodcast",
        "Cenário para conversa gravada",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Posicione duas cadeiras e microfones sem bloquear rostos ou passagem.",
        "Cenário para conversa gravada."
      ],
      [
        "setinterview",
        "Espaço de entrevista com fundo simples",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Separe sujeito e fundo usando luz e distância visual.",
        "Espaço de entrevista com fundo simples."
      ],
      [
        "setproducttable",
        "Mesa de fotografia de produto",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Mostre superfície, rebatedor e apoio sem equipamentos desnecessários.",
        "Mesa de fotografia de produto."
      ],
      [
        "setbeautycorner",
        "Cenário para demonstração de beleza",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Use espelho com reflexo coerente e bancada organizada.",
        "Cenário para demonstração de beleza."
      ],
      [
        "setcookingdemo",
        "Bancada para demonstração culinária",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Preserve espaço de trabalho e visibilidade dos ingredientes.",
        "Bancada para demonstração culinária."
      ],
      [
        "setclassroomvideo",
        "Cenário para aula em vídeo",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Reserve área de apresentação e quadro sem textos inventados.",
        "Cenário para aula em vídeo."
      ],
      [
        "setlivemusic",
        "Pequeno palco de apresentação musical",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Organize instrumentos, cabos e luz sem cruzar áreas de circulação.",
        "Pequeno palco de apresentação musical."
      ],
      [
        "setgreenscreen",
        "Estúdio com fundo verde preparado",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Use iluminação uniforme no fundo e separação do sujeito.",
        "Estúdio com fundo verde preparado."
      ],
      [
        "setwindowfake",
        "Cenário com janela cenográfica",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Faça luz e sombra corresponderem à abertura visível.",
        "Cenário com janela cenográfica."
      ],
      [
        "setindustrialwall",
        "Fundo de concreto para retratos",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Destaque textura moderada sem competir com a pessoa.",
        "Fundo de concreto para retratos."
      ],
      [
        "setpaperroll",
        "Fundo fotográfico de papel desenrolado",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Mostre suporte e curva do papel sem rasgos ou flutuação.",
        "Fundo fotográfico de papel desenrolado."
      ],
      [
        "setfabricdrape",
        "Cenário com tecido suspenso",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Preserve fixações e dobras causadas pela gravidade.",
        "Cenário com tecido suspenso."
      ],
      [
        "setmodularblocks",
        "Blocos cenográficos em composição",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Mantenha apoios estáveis e diferença de escala clara.",
        "Blocos cenográficos em composição."
      ],
      [
        "setmirrorpanels",
        "Painéis espelhados num cenário",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Faça reflexos consistentes, evitando duplicar câmeras ou pessoas indevidamente.",
        "Painéis espelhados num cenário."
      ],
      [
        "setlighttunnel",
        "Túnel cenográfico de luzes",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Preserve repetição e perspectiva sem transformar barras em raios sólidos.",
        "Túnel cenográfico de luzes."
      ],
      [
        "setarchedwalls",
        "Paredes cenográficas com arcos",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Mostre espessura e passagens coerentes entre os planos.",
        "Paredes cenográficas com arcos."
      ],
      [
        "setwaterstage",
        "Palco conceitual com superfície refletora",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Preserve limites e reflexos, sem sugerir estrutura técnica validada.",
        "Palco conceitual com superfície refletora."
      ],
      [
        "setminiature",
        "Miniatura de um cenário de filmagem",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Inclua referência de escala e materiais de maquete claramente reconhecíveis.",
        "Miniatura de um cenário de filmagem."
      ],
      [
        "setbackdroptextures",
        "Painéis de materiais para fotografia",
        "Crie uma proposta visual de cenário com estruturas, materiais e iluminação coerentes. Defina um espaço central útil e preserve circulação. Não apresente o conceito como montagem executada nem invente marcas, inscrições ou medidas técnicas. Separe amostras e mantenha textura coerente com cada superfície.",
        "Painéis de materiais para fotografia."
      ]
    ]
  ],
  [
    "Texturas e superfícies",
    "▧",
    [
      [
        "textureconcrete",
        "Concreto aparente em luz rasante",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Mostre poros e pequenas variações sem rachaduras dramáticas gratuitas.",
        "Concreto aparente em luz rasante."
      ],
      [
        "textureplaster",
        "Reboco claro com marcas suaves",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Use irregularidades discretas e transições tonais sem padrão repetido.",
        "Reboco claro com marcas suaves."
      ],
      [
        "texturebrick",
        "Parede de tijolos com juntas",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Preserve alinhamento, espessura e desgaste natural sem peças fundidas.",
        "Parede de tijolos com juntas."
      ],
      [
        "textureterrazzo",
        "Terrazzo com fragmentos coloridos",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Varie tamanho e distribuição das inclusões, mantendo base contínua.",
        "Terrazzo com fragmentos coloridos."
      ],
      [
        "texturemarble",
        "Pedra com veios orgânicos",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Evite repetição espelhada e preserve profundidade visual moderada.",
        "Pedra com veios orgânicos."
      ],
      [
        "textureslate",
        "Ardósia escura em detalhe",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Mostre camadas e arestas com brilho baixo e irregularidade natural.",
        "Ardósia escura em detalhe."
      ],
      [
        "texturecork",
        "Cortiça em uma superfície plana",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Use grânulos variados e poros sem aparência de espuma sintética.",
        "Cortiça em uma superfície plana."
      ],
      [
        "texturebamboo",
        "Painel de bambu em luz lateral",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Preserve fibras e junções, evitando veios de madeira incompatíveis.",
        "Painel de bambu em luz lateral."
      ],
      [
        "textureplywood",
        "Borda de compensado em close",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Mostre lâminas paralelas e espessuras coerentes sem padrões aleatórios.",
        "Borda de compensado em close."
      ],
      [
        "texturefelt",
        "Feltro colorido numa dobra",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Revele fibras curtas e acabamento fosco, sem trama de tecido.",
        "Feltro colorido numa dobra."
      ],
      [
        "texturevelvet",
        "Veludo com mudança de direção",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Use variação de brilho ligada ao sentido dos pelos.",
        "Veludo com mudança de direção."
      ],
      [
        "texturesatin",
        "Cetim em dobras largas",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Preserve reflexos suaves e continuidade do tecido sem efeito metálico rígido.",
        "Cetim em dobras largas."
      ],
      [
        "texturecanvas",
        "Lona em detalhe de superfície",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Mostre trama regular com pequenas imperfeições e escala consistente.",
        "Lona em detalhe de superfície."
      ],
      [
        "texturemesh",
        "Malha aberta sobre fundo neutro",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Preserve vazios e cruzamentos, sem preencher a estrutura com textura sólida.",
        "Malha aberta sobre fundo neutro."
      ],
      [
        "texturecarbon",
        "Material composto em estudo visual",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Mostre padrão de trama coerente sem alegar desempenho estrutural.",
        "Material composto em estudo visual."
      ],
      [
        "textureoxidized",
        "Metal com oxidação localizada",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Diferencie superfície preservada e oxidada sem corrosão uniforme artificial.",
        "Metal com oxidação localizada."
      ],
      [
        "texturehammered",
        "Metal martelado em close",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Varie pequenas marcas e reflexos, mantendo espessura plausível.",
        "Metal martelado em close."
      ],
      [
        "texturefrostedglass",
        "Vidro fosco diante de uma forma",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Mostre difusão da luz e bordas do vidro sem transparência total.",
        "Vidro fosco diante de uma forma."
      ],
      [
        "texturebubblewrap",
        "Plástico bolha em composição simples",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Preserve volumes individuais e transparência sem bolhas fundidas.",
        "Plástico bolha em composição simples."
      ],
      [
        "texturehandpaper",
        "Papel artesanal contra a luz",
        "Crie um estudo visual de material com iluminação que revele textura, relevo e escala. Mantenha uma área ampla legível e evite objetos decorativos desnecessários. Não acrescente propriedades físicas ou certificações; preserve o material descrito e sua resposta plausível à luz. Revele fibras e espessura irregular sem manchas decorativas excessivas.",
        "Papel artesanal contra a luz."
      ]
    ]
  ],
  [
    "Papelaria e impressos",
    "▣",
    [
      [
        "printflyer",
        "Folheto sobre uma mesa",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Mantenha margens e arte sem esticar a composição.",
        "Folheto sobre uma mesa."
      ],
      [
        "printbrochure",
        "Folder com três dobras aberto",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Preserve continuidade da arte e separação correta dos painéis.",
        "Folder com três dobras aberto."
      ],
      [
        "printzine",
        "Zine artesanal parcialmente aberto",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Mostre grampos ou costura plausíveis e páginas distintas.",
        "Zine artesanal parcialmente aberto."
      ],
      [
        "printmagazine",
        "Revista aberta num aparador",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Faça a arte acompanhar a curvatura sem deformar títulos fornecidos.",
        "Revista aberta num aparador."
      ],
      [
        "printcatalog",
        "Catálogo de produtos em perspectiva",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Preserve grid e imagens recebidas sem inventar preços ou estoque.",
        "Catálogo de produtos em perspectiva."
      ],
      [
        "printpostcard",
        "Cartão-postal com imagem fornecida",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Mantenha proporções e bordas sem acrescentar selo ou destino falso.",
        "Cartão-postal com imagem fornecida."
      ],
      [
        "printbookmark",
        "Marcador de páginas dentro de um livro",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Mostre espessura fina e encaixe sem atravessar folhas.",
        "Marcador de páginas dentro de um livro."
      ],
      [
        "printnotepad",
        "Bloco de anotações sobre bancada",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Preserve colagem superior e repetição plausível das folhas.",
        "Bloco de anotações sobre bancada."
      ],
      [
        "printplanner",
        "Planner aberto com conteúdo fictício identificado",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Diferencie dias e áreas de notas sem compromissos pessoais inventados.",
        "Planner aberto com conteúdo fictício identificado."
      ],
      [
        "printcalendar",
        "Calendário visual sem datas não fornecidas",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Organize grade e hierarquia, deixando números ausentes em branco.",
        "Calendário visual sem datas não fornecidas."
      ],
      [
        "printmenu",
        "Cardápio com texto fornecido",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Destaque categorias e preços recebidos, sem criar ofertas novas.",
        "Cardápio com texto fornecido."
      ],
      [
        "printticket",
        "Ingresso conceitual de evento fictício",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Use dados ilustrativos identificados e não gere código funcional de acesso.",
        "Ingresso conceitual de evento fictício."
      ],
      [
        "printbadge",
        "Credencial com identidade fornecida",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Preserve nome autorizado e encaixe do cordão, sem cargo inventado.",
        "Credencial com identidade fornecida."
      ],
      [
        "printcertificate",
        "Certificado conceitual com campos vazios",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Não invente instituição, assinatura ou qualificação obtida.",
        "Certificado conceitual com campos vazios."
      ],
      [
        "printsticker",
        "Folha de adesivos com artes originais",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Mantenha margem de corte visual e separação entre peças.",
        "Folha de adesivos com artes originais."
      ],
      [
        "printlabeltag",
        "Etiqueta pendurada numa peça",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Preserve furo, cordão e escala, sem informações comerciais falsas.",
        "Etiqueta pendurada numa peça."
      ],
      [
        "printenvelopecard",
        "Envelope com cartão parcialmente visível",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Mostre abertura e espessura do papel sem objetos atravessados.",
        "Envelope com cartão parcialmente visível."
      ],
      [
        "printposterwall",
        "Cartaz fornecido aplicado numa parede",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Preserve arte e proporção, com fixação e sombras discretas.",
        "Cartaz fornecido aplicado numa parede."
      ],
      [
        "printfoldmap",
        "Mapa fictício dobrado sobre mesa",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Mantenha vincos e continuidade gráfica sem alegar precisão geográfica.",
        "Mapa fictício dobrado sobre mesa."
      ],
      [
        "printbookjacket",
        "Livro com sobrecapa fornecida",
        "Crie um mockup de impresso usando arte e textos fornecidos, com perspectiva, dobra e espessura realistas. Preserve legibilidade e proporções da identidade. Não invente contatos, datas ou conteúdo editorial; use áreas neutras quando faltarem informações. Faça lombada e abas se conectarem sem distorcer o desenho.",
        "Livro com sobrecapa fornecida."
      ]
    ]
  ],
  [
    "Embalagens e apresentação física",
    "⬡",
    [
      [
        "packtubebox",
        "Embalagem cilíndrica com tampa",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Preserve encaixe, espessura e continuidade da arte na superfície curva.",
        "Embalagem cilíndrica com tampa."
      ],
      [
        "packdrawerbox",
        "Caixa com gaveta parcialmente aberta",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Mostre trilho visual e volume interno compatível com o exterior.",
        "Caixa com gaveta parcialmente aberta."
      ],
      [
        "packmagnetbox",
        "Caixa rígida com tampa articulada",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Preserve dobra e espessura, sem tampa solta em posição impossível.",
        "Caixa rígida com tampa articulada."
      ],
      [
        "packpillow",
        "Embalagem almofada sobre fundo simples",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Mostre abas curvas fechadas e tensão plausível do papel.",
        "Embalagem almofada sobre fundo simples."
      ],
      [
        "packgable",
        "Caixa com alça integrada",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Preserve encaixes superiores e apoio sem recortes desconectados.",
        "Caixa com alça integrada."
      ],
      [
        "packmailer",
        "Caixa de envio aberta",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Mostre abas, proteção e produto em escala realista.",
        "Caixa de envio aberta."
      ],
      [
        "packcorrugated",
        "Embalagem de papelão em detalhe",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Revele ondas na borda sem exagerar a espessura das camadas.",
        "Embalagem de papelão em detalhe."
      ],
      [
        "packglassjar",
        "Pote de vidro com rótulo",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Preserve tampa, rosca e arte sem refração que apague a leitura.",
        "Pote de vidro com rótulo."
      ],
      [
        "packmetalcan",
        "Lata metálica numa composição comercial",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Mostre bordas e abertura coerentes sem inscrições inventadas.",
        "Lata metálica numa composição comercial."
      ],
      [
        "packsachet",
        "Sachê flexível sobre superfície",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Preserve selagem e pequenas dobras sem aparência de caixa rígida.",
        "Sachê flexível sobre superfície."
      ],
      [
        "packstandpouch",
        "Pouch com base de apoio",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Mostre volume e fechamento, mantendo a base estável.",
        "Pouch com base de apoio."
      ],
      [
        "packzipbag",
        "Saco com fecho tipo zíper",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Destaque trilho contínuo e transparência compatível com o material.",
        "Saco com fecho tipo zíper."
      ],
      [
        "packblister",
        "Embalagem com visor moldado",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Faça o molde acompanhar o produto sem atravessá-lo.",
        "Embalagem com visor moldado."
      ],
      [
        "packwindowbox",
        "Caixa com janela transparente",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Preserve espessura do papel e separação entre visor e produto.",
        "Caixa com janela transparente."
      ],
      [
        "packgiftset",
        "Kit em berço interno organizado",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Mantenha cada item no encaixe correspondente sem espaço impossível.",
        "Kit em berço interno organizado."
      ],
      [
        "packbottlesleeve",
        "Garrafa com faixa de papel",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Preserve ajuste da faixa e leitura da arte na curvatura.",
        "Garrafa com faixa de papel."
      ],
      [
        "packrefill",
        "Embalagem de refil conceitual",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Mostre bico e selagem sem alegar sustentabilidade não comprovada.",
        "Embalagem de refil conceitual."
      ],
      [
        "packeggcarton",
        "Embalagem de polpa moldada",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Revele textura fibrosa e divisórias de espessura consistente.",
        "Embalagem de polpa moldada."
      ],
      [
        "packtakeaway",
        "Caixa para alimento para viagem",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Mostre fechamento e apoio do conteúdo sem gordura ou vapor exagerados.",
        "Caixa para alimento para viagem."
      ],
      [
        "packprotective",
        "Embalagem protetora de um objeto frágil",
        "Crie uma proposta de embalagem ou mockup com estrutura plausível, materiais coerentes e arte fornecida preservada. Mostre abertura ou fechamento de forma legível. Não invente ingredientes, certificações, benefícios, volume ou dados obrigatórios do produto. Preserve encaixes e distância das bordas sem afirmar resistência certificada.",
        "Embalagem protetora de um objeto frágil."
      ]
    ]
  ],
  [
    "Humor e surrealismo visual",
    "✱",
    [
      [
        "surrealtinychef",
        "Cozinheiro em miniatura sobre uma tábua",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Use ingredientes grandes como referência de escala e mantenha ferramentas proporcionais.",
        "Cozinheiro em miniatura sobre uma tábua."
      ],
      [
        "surrealcupclimb",
        "Avatar em miniatura escalando uma caneca",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Preserve mãos e pés apoiados na superfície, com sombra e escala coerentes.",
        "Avatar em miniatura escalando uma caneca."
      ],
      [
        "surrealcloudpillow",
        "Pessoa carregando uma nuvem como almofada",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Diferencie vapor e tecido por textura, mantendo o gesto fisicamente legível.",
        "Pessoa carregando uma nuvem como almofada."
      ],
      [
        "surrealfloatingdesk",
        "Mesa de trabalho flutuando sobre uma sala",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Preserve todos os objetos apoiados na mesa e sombra abaixo do conjunto.",
        "Mesa de trabalho flutuando sobre uma sala."
      ],
      [
        "surrealdoorbeach",
        "Porta de escritório aberta para uma praia",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Mantenha limite entre ambientes e luz atravessando a abertura.",
        "Porta de escritório aberta para uma praia."
      ],
      [
        "surrealpapersea",
        "Barco de papel navegando num mar de páginas",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Use dobras e fibras coerentes sem transformar o papel em água literal.",
        "Barco de papel navegando num mar de páginas."
      ],
      [
        "surreallightbulbgarden",
        "Jardim crescendo dentro de uma lâmpada gigante",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Preserve vidro, base e escala das plantas, com refração controlada.",
        "Jardim crescendo dentro de uma lâmpada gigante."
      ],
      [
        "surrealpencilbridge",
        "Pessoas atravessando uma ponte feita de lápis",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Mostre apoios e perspectiva dentro da lógica fantástica da cena.",
        "Pessoas atravessando uma ponte feita de lápis."
      ],
      [
        "surrealcoffeeplanet",
        "Xícara contendo um pequeno planeta",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Faça o mundo caber no recipiente com profundidade e iluminação coerentes.",
        "Xícara contendo um pequeno planeta."
      ],
      [
        "surrealsuitcaseforest",
        "Mala aberta revelando uma floresta",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Preserve borda da mala e transição clara de escala no interior.",
        "Mala aberta revelando uma floresta."
      ],
      [
        "surrealfishsky",
        "Peixes atravessando um céu de fim de tarde",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Mantenha anatomia dos animais e uma direção comum de movimento.",
        "Peixes atravessando um céu de fim de tarde."
      ],
      [
        "surrealumbrellaindoor",
        "Guarda-chuva criando chuva apenas por dentro",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Defina claramente o limite da água e preserve o rosto do sujeito.",
        "Guarda-chuva criando chuva apenas por dentro."
      ],
      [
        "surrealbookstairs",
        "Livro aberto formando uma escadaria",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Use páginas como degraus com continuidade e foco visual único.",
        "Livro aberto formando uma escadaria."
      ],
      [
        "surrealmoonballoon",
        "Pessoa segurando uma lua como balão",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Preserve corda conectada e diferença de escala deliberada.",
        "Pessoa segurando uma lua como balão."
      ],
      [
        "surrealshoecity",
        "Pequena cidade construída sobre um tênis",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Mantenha o calçado reconhecível e edifícios apoiados nas superfícies.",
        "Pequena cidade construída sobre um tênis."
      ],
      [
        "surrealclockgarden",
        "Relógio cujos ponteiros são ramos",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Preserve centro e leitura da forma, sem acrescentar mecanismos aleatórios.",
        "Relógio cujos ponteiros são ramos."
      ],
      [
        "surrealpaintwaterfall",
        "Tinta saindo de um quadro como cachoeira",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Mantenha origem na moldura e fluxo coerente até a superfície inferior.",
        "Tinta saindo de um quadro como cachoeira."
      ],
      [
        "surrealchairgiant",
        "Cadeira gigante numa paisagem urbana fictícia",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Use pessoas pequenas como escala e sombra compatível com o volume.",
        "Cadeira gigante numa paisagem urbana fictícia."
      ],
      [
        "surrealwindowocean",
        "Janela mostrando o oceano dentro de uma sala",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Preserve moldura e separação entre ar e ambiente subaquático imaginário.",
        "Janela mostrando o oceano dentro de uma sala."
      ],
      [
        "surrealideaorbit",
        "Objetos criativos orbitando ao redor de uma pessoa",
        "Crie uma cena surreal original com uma impossibilidade central claramente intencional e acabamento visual coerente. Preserve anatomia, identidade das referências e relações de luz e perspectiva. Evite misturar várias piadas visuais; não apresente a cena fantástica como registro real. Mantenha distâncias legíveis e sombras coerentes, sem cobrir o rosto.",
        "Objetos criativos orbitando ao redor de uma pessoa."
      ]
    ]
  ]
];
const items=categories.flatMap(([category,icon,rows])=>rows.map(([code,title,prompt,example])=>({code:"/"+code,title,prompt,example,category,icon})));
