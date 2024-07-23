// Banco de respostas do chatbot
const respostas = {
    apresentacao: [
        "Bem vindo ao CodeZone! Eu me chamo Athlas, sou o seu acompanhante nesta jornada pela CodeZone, como posso te ajudar neste momento?",
    ],
    sobreMeuTrabalho: {
        sobre: [
            "A CodeZone é especializada em desenvolvimento web e automação de tarefas.",
            "eles possuem experiência em criar sites responsivos e realizar automações eficientes.",
            "Seu maior foco é entregar soluções de qualidade que atendam às suas necessidades."
        ],
        automacoes: [
            "Na CodeZone, somos especialistas em automações avançadas utilizando Python. Automatizamos tarefas repetitivas para aumentar a eficiência e economizar tempo. Podemos ajudar a simplificar seus processos com soluções customizadas.",
            "Utilizamos Python e frameworks como Selenium para criar automações precisas e confiáveis. Se você busca otimizar suas operações, estamos aqui para oferecer soluções eficazes e escaláveis."
        ],
        desenvolvimentoWeb: [
            "Nosso trabalho em desenvolvimento web na CodeZone destaca-se pela criação de sites modernos e responsivos. Utilizamos tecnologias como HTML5, CSS3, JavaScript e frameworks populares como React e Vue.js.",
            "Do design ao desenvolvimento backend robusto com Node.js, Django e Laravel, oferecemos soluções completas para suas necessidades online. Conte com a CodeZone para projetos que combinam estética, funcionalidade e desempenho."
        ]
    },
    sobreMim: {
        codezone: [
            "A CodeZone é uma equipe de desenvolvedores, prontos para te ajudar com o que puder, logo no final desse site você encontrará um campo de contato, você pode usar uma das vias para solicitar um projetos.",
            "Eu sou Athlas, um assistente virtual projetado pela equipe CodeZone para lhe ajudar com o que estiver em meu alcance.",
            "Estou aqui para responder suas dúvidas e oferecer suporte técnico.",
            "Você pode contar comigo para obter informações detalhadas sobre nossos serviços."
        ],
        experiencia: [
            "A CodeZone, possui um experiência em desenvolvimento web e automação, qual lhe interessa no momento?",
            "Nós trabalhamos com a tecnologias modernas e melhores práticas do setor para garantir eficiencia e velocidade dos nossos projetos e experiencia dos usuarios.",
            "Minha missão é facilitar sua jornada tecnológica com soluções eficientes."
        ]
    },
    orcamento: {
        geral: [
            "Para obter um orçamento detalhado, entre em contato com a equipe CodeZone com as especificações do seu projeto.",
            "Os preços variam de acordo com a complexidade e os requisitos do projeto.",
            "Fico feliz em discutir os detalhes do seu projeto para oferecer um orçamento personalizado."
        ],
        desenvolvimentoWeb: [
            "O custo de desenvolvimento de um site pode variar com base no design, funcionalidade e tecnologias utilizadas.",
            "Ofereço pacotes personalizados que atendem às suas necessidades e orçamento.",
            "Entre em contato para discutir seu projeto e obter uma estimativa precisa."
        ],
        automacoes: [
            "Os preços das automações dependem do escopo e da complexidade das tarefas a serem automatizadas.",
            "Ofereço soluções de automação personalizadas para aumentar sua eficiência.",
            "Entre em contato para discutir suas necessidades de automação e obter um orçamento."
        ]
    },
    contato: {
        whatsapp: [
            "Converse diretamente com um especialista da CodeZone pelo WhatsApp, no número (41)9 9866 3390. Estamos aqui para ajudar com seus projetos!",
            "Para um contato direto e personalizado, envie uma mensagem para nós pelo WhatsApp no número (41)9 9866 3390. Estamos ansiosos para discutir suas ideias!",
            "Você pode conversar com um especialista da CodeZone com o numero (41)9 9866 3390, por aqui o contato é direto, porém pode não ser o caminho mais rápido devido a alta demanda."
        ],
        email: [
            "Estamos disponíveis para atender suas dúvidas e discutir seu projeto por e-mail. Envie sua mensagem para codezonectt@gmail.com e nossa equipe responderá o mais breve possível.",
            "Utilize o e-mail codezonectt@gmail.com para nos contatar diretamente. Aguardamos seu contato para discutir como podemos ajudar no seu próximo projeto."
        ],
        redessociais: [
            "Conheça mais sobre a CodeZone e nossos projetos seguindo nossas redes sociais. Estamos ativos no Facebook, Instagram e LinkedIn. Procure por CodeZone e conecte-se conosco!",
            "Siga a CodeZone nas redes sociais para ficar por dentro das últimas novidades, projetos e dicas de tecnologia. Estamos presentes no Facebook, Instagram e LinkedIn.",
            "Nossas redes sociais são o lugar ideal para você acompanhar nosso trabalho e interagir conosco. Encontre a CodeZone no Facebook, Instagram e LinkedIn para insights exclusivos e atualizações regulares."
        ]
    },
    Quemcriouacodezone: {
        visao: [
            "Jair M. é o coração pulsante da CodeZone, trazendo uma visão apaixonada por tecnologia e inovação desde o início.",
            "Nosso fundador, Jair M., é reconhecido pela sua dedicação em proporcionar soluções tecnológicas de alto nível, impulsionando a CodeZone rumo ao sucesso.",
            "Jair M. fundou a CodeZone com a missão de transformar ideias em realidade através de automação em Python e desenvolvimento web, sempre comprometido com a excelência e a inovação."
        ],
        vivencia: [
            "Com vasta experiência em tecnologia, Jair M. lidera a CodeZone com um histórico comprovado de sucesso em automação e desenvolvimento web.",
            "Jair M. acumula anos de experiência na indústria de tecnologia, trazendo um conhecimento profundo que impulsiona a inovação na CodeZone.",
            "Nosso fundador, Jair M., tem uma trajetória marcada por conquistas significativas em automação em Python e desenvolvimento web, contribuindo para o crescimento contínuo da empresa."
        ],
        compromisso: [
            "Jair M. é conhecido por seu compromisso inabalável com a excelência e a inovação na CodeZone, liderando com integridade e visão estratégica.",
            "Nosso fundador, Jair M., tem um compromisso claro em oferecer soluções tecnológicas que transformam negócios e impactam positivamente nossos clientes.",
            "Jair M. fundou a CodeZone com um compromisso firme em superar expectativas e proporcionar resultados excepcionais através de automação em Python e desenvolvimento web."
        ]
    },    
    Objeções: {
        altoCusto: [
            "Entendemos que o custo pode ser uma preocupação. Nossa equipe trabalha para oferecer soluções eficientes que proporcionam valor significativo ao seu investimento.",
            "Vamos discutir suas necessidades e encontrar maneiras de otimizar o custo sem comprometer a qualidade dos nossos serviços."
        ],
        faltaExperiencia: [
            "Se você está preocupado com nossa experiência, gostaríamos de compartilhar nosso histórico com você. Temos anos de experiência comprovada em automação em Python e desenvolvimento web.",
            "Estamos comprometidos em fornecer resultados excepcionais. Podemos compartilhar casos de sucesso e recomendações de clientes satisfeitos para tranquilizar suas preocupações."
        ],
        prazosApertados: [
            "Compreendemos a importância de prazos apertados. Nossa abordagem ágil e nossa equipe dedicada estão prontas para enfrentar desafios e cumprir prazos rigorosos.",
            "Vamos trabalhar em conjunto para estabelecer expectativas claras e alcançar metas dentro dos prazos estabelecidos. Sua satisfação é nossa prioridade."
        ]
    },    
    ideiasdeprojetos: {
        tiposDePaginas: [
            "Podemos criar diferentes tipos de páginas para seu negócio, como páginas promocionais para campanhas, sites informativos fáceis de navegar e lojas online com opções de pagamento seguro.",
            "Imagine uma página que atraia visitantes e converta vendas. Podemos desenvolver sites que destacam seu produto ou serviço de forma eficaz."
        ],
        automacoespython: [
            "Automatizar tarefas pode melhorar sua eficiência operacional. Podemos ajudar com automações para gerenciar leads, atualizar conteúdos automaticamente e simplificar processos de negócio.",
            "Com automações personalizadas, você pode economizar tempo e focar em estratégias mais importantes. Vamos explorar como isso pode beneficiar seu negócio."
        ],
        personalizacao: [
            "Criamos soluções personalizadas que atendem às suas necessidades específicas. Desde sites simples até aplicações web completas para melhorar sua operação.",
            "Imagine uma solução adaptada exatamente ao que você precisa. Podemos personalizar plataformas web para ajudar sua empresa a se destacar no mercado."
        ]
    },
    aquantotempoestamosnomercado: {
        tempo: [
            "Apesar de nossa jornada relativamente curta, estamos comprometidos em oferecer soluções excepcionais em automação em Python e desenvolvimento web.",
            "Com nossa abordagem focada em inovação desde o início, estamos construindo rapidamente um histórico de sucesso e satisfação do cliente."
        ],
        compromisso: [
            "Desde nosso lançamento, nosso compromisso é entregar resultados que superem suas expectativas. Estamos determinados a estabelecer um padrão de excelência no mercado.",
            "Nossa energia e dedicação estão concentradas em criar valor tangível para cada cliente. Vamos mostrar como nossa paixão pela tecnologia pode beneficiar seu negócio."
        ],
        visaoFuturo: [
            "Estamos iniciando nossa jornada com uma visão clara de liderança e inovação. Queremos não apenas acompanhar, mas também moldar o futuro da tecnologia através de soluções personalizadas.",
            "Apesar de sermos novos, nossa visão audaciosa nos motiva a alcançar novos patamares de excelência. Vamos crescer juntos e transformar suas ideias em realidade."
        ]
    },
    sentimentos: {
        feedbackPositivo: [
            "Agradecemos pelo seu feedback positivo! É muito gratificante saber que nossos serviços atenderam às suas expectativas. Como podemos continuar a oferecer um serviço excepcional?",
            "Obrigado por compartilhar seu feedback positivo! Sua satisfação é nossa prioridade. Estamos comprometidos em manter esse padrão de excelência."
        ],
        feedbackNegativo: [
            "Lamentamos ouvir que sua experiência não atendeu completamente suas expectativas. Valorizamos seu feedback e gostaríamos de entender melhor suas preocupações para melhorar nossos serviços.",
            "Seu feedback negativo é importante para nós. Estamos comprometidos em resolver quaisquer problemas e garantir que cada cliente tenha uma experiência positiva conosco."
        ],
        expectativas: [
            "Entendemos a importância de suas expectativas e estamos dedicados a superá-las. Como podemos ajustar nossa abordagem para garantir que suas necessidades sejam totalmente atendidas?",
            "Estamos aqui para garantir que suas expectativas sejam não apenas atendidas, mas excedidas. Por favor, compartilhe suas expectativas conosco para que possamos melhorar continuamente."
        ],
        melhoriaContinua: [
            "Valorizamos seu feedback como uma oportunidade para melhorar. Estamos comprometidos em ouvir nossos clientes e implementar melhorias contínuas em nossos serviços.",
            "Sua opinião é fundamental para nossa melhoria contínua. Estamos sempre abertos a sugestões sobre como podemos aprimorar nossa abordagem e serviços."
        ],
        compromissoQualidade: [
            "Nosso compromisso com a qualidade nos motiva a buscar constantemente a excelência. Estamos aqui para garantir que cada interação com a CodeZone seja satisfatória e produtiva para você.",
            "Estamos comprometidos em oferecer serviços de alta qualidade e valorizar cada cliente. Como podemos garantir que nossa abordagem atenda plenamente às suas expectativas?"
        ]
    },
    novaCategoria: {
        subcategoria: [
            "Resposta para nova subcategoria aqui.",
            "Outra resposta para nova subcategoria."
        ]
    }
};

// Função para verificar se alguma das palavras-chave está presente na mensagem
function checkWordsInText(message, keywords) {
    const lowerCaseMessage = message.toLowerCase();
    return keywords.some(keyword => lowerCaseMessage.includes(keyword));
}

// Função para obter uma resposta aleatória de um array de respostas
function getRandomResponse(responsesArray) {
    const randomIndex = Math.floor(Math.random() * responsesArray.length);
    return responsesArray[randomIndex];
}

// Função para extrair uma única resposta baseada na mensagem recebida
function getResponseFromMessage(message) {
    const checks = [
        { keywords: ['oi', 'opa', 'opaa', 'opaaa', 'olá', 'bom dia', 'boa tarde', 'boa noite'], responses: respostas.apresentacao },
        { keywords: ['sobre o seu trabalho', 'sobre seu trabalho', 'sobre o que você faz', 'trabalho'], responses: respostas.sobreMeuTrabalho.geral },
        { keywords: ['automatizações que você faz', 'tipo de automatização', 'que tipo de automatização'], responses: respostas.sobreMeuTrabalho.automacoes },
        { keywords: ['que tipo de site', 'site html5', 'tipo de site'], responses: respostas.sobreMeuTrabalho.desenvolvimentoWeb.criacoes },
        { keywords: ['quem é você', 'sobre você', 'informações sobre você', 'projetos', 'projetos realizados', 'realizou'], responses: respostas.sobreMim.geral },
        { keywords: ['experiência', 'qual a sua experiência', 'seu histórico'], responses: respostas.sobreMim.experiencia },
        { keywords: ['orçamento', 'preço', 'quanto custa'], responses: respostas.orcamento.geral },
        { keywords: ['orçamento do site', 'preço do site', 'custo do site'], responses: respostas.orcamento.desenvolvimentoWeb },
        { keywords: ['orçamento automação', 'preço automação', 'custo automação', 'orçamento da automação', 'preço da automação', 'custo da automação'], responses: respostas.orcamento.automacoes },
        { keywords: ['qual o whatsapp', 'wpp', 'zap', 'me fala seu zap', 'me fala seu wpp', 'me fala seu whatsapp'], responses: respostas.contato.whatsapp },
        { keywords: ['Qual o seu e-mail', 'email', 'E-mail', 'me passa seu email'], responses: respostas.contato.email },
        { keywords: ['redes sociais', 'instagram', 'facebook', 'linkedin'], responses: respostas.contato.redessociais },
        { keywords: ['jair', 'criador', 'fundador'], responses: respostas.Quemcriouacodezone.visao },
        { keywords: ['como ele iniciou'], responses: respostas.Quemcriouacodezone.vivencia },
        { keywords: ['ideia', 'desenvolvimento'], responses: respostas.Quemcriouacodezone.compromisso },
        { keywords: ['muito caro', 'valor alto', 'poderia melhorar o valor', 'tem desconto'], responses: respostas.Objeções.altoCusto },
        { keywords: ['precisa melhorar muito', 'baixa experiencia', 'não sabe nada'], responses: respostas.Objeções.faltaExperiencia },
        { keywords: ['prazo', 'demora para ficar pronto', 'fica pronto em quanto tempo', 'pode me dar um prazo'], responses: respostas.novaCategoria.subcategoria },
        { keywords: ['nova categoria'], responses: respostas.novaCategoria.subcategoria },
        { keywords: ['nova categoria'], responses: respostas.novaCategoria.subcategoria },
        { keywords: ['nova categoria'], responses: respostas.novaCategoria.subcategoria },
        { keywords: ['nova categoria'], responses: respostas.novaCategoria.subcategoria },
        { keywords: ['ideias de sites', 'tipos de sites', 'modelos de sites'], responses: respostas.ideiasdeprojetos.tiposDePaginas },
        { keywords: ['ideias de automação', 'tipos de automação', 'modelos de automação'], responses: respostas.ideiasdeprojetos.automacoespython },
        { keywords: ['diferença', 'ponto forte', 'com vocês'], responses: respostas.ideiasdeprojetos.personalizacao },
        { keywords: ['tempo no mercado', 'quando iniciou', 'começo'], responses: respostas.aquantotempoestamosnomercado.tempo },
        { keywords: ['compromisso', 'valores'], responses: respostas.aquantotempoestamosnomercado.compromisso },
        { keywords: ['metas', 'futuro', 'projetos futuros'], responses: respostas.aquantotempoestamosnomercado.visaoFuturo },
        { keywords: ['feedback positivo', 'opinião positiva', 'satisfeito', 'agradecimento'], responses: respostas.sentimentos.feedbackPositivo },
        { keywords: ['feedback negativo', 'opinião negativa', 'insatisfeito', 'problema'], responses: respostas.sentimentos.feedbackNegativo },
        { keywords: ['expectativas', 'expectativa não atendida', 'ajuste necessário'], responses: respostas.sentimentos.expectativas },
        { keywords: ['melhoria contínua', 'sugestão de melhoria', 'como podemos melhorar'], responses: respostas.sentimentos.melhoriaContinua },
        { keywords: ['compromisso qualidade', 'comprometidos com qualidade', 'excelência'], responses: respostas.sentimentos.compromissoQualidade },
        { keywords: ['nova categoria'], responses: respostas.aquantotempoestamosnomercado.subcategoria },
        { keywords: ['nova categoria'], responses: respostas.novaCategoria.subcategoria },
        { keywords: ['nova categoria'], responses: respostas.novaCategoria.subcategoria },
        { keywords: ['nova categoria'], responses: respostas.novaCategoria.subcategoria }
    ];

    for (let check of checks) {
        if (checkWordsInText(message, check.keywords)) {
            return getRandomResponse(check.responses);
        }
    }

    return "Desculpe, não tenho uma resposta adequada no momento. Por favor, forneça mais detalhes.";
}

// Função principal para obter a resposta do chatbot
function getResponse(message) {
    return getResponseFromMessage(message);
}
