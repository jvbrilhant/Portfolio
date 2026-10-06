import images from './images.json';

export type Lang = 'en' | 'pt';

export interface ProjectCopy {
  title: string;
  subtitle: string;
  client: string;
  role: string;
  services: string;
  tools?: string;
  overview: string[];
  discovery: string[];
  solution: string[];
  result: string[];
}

export interface Project {
  slug: string;
  /** Catalogue number printed on the sleeve and the record label. */
  cat: string;
  year: string;
  /** Short line under the album on the home page ("Design system", "Mobile app"…). */
  kind: { en: string; pt: string };
  /**
   * Typographic cover to render. See src/components/covers/Cover.astro.
   * To use an image instead, drop a square file in public/covers/ and set
   * `coverImage: 'covers/<file>.jpg'`: it takes priority over the typographic one.
   */
  cover: string;
  coverImage?: string;
  /** Colour of the record label in the centre of the vinyl. */
  label: string;
  link?: string;
  en: ProjectCopy;
  pt: ProjectCopy;
}

export const projects: Project[] = [
  {
    slug: 'design-system',
    cat: 'BRL-001',
    year: '2026',
    kind: { en: 'Design system', pt: 'Design system' },
    cover: 'design-system',
    label: '#a7d8fb',
    en: {
      title: 'Design System for GIM Digital',
      subtitle: 'A self-initiated Figma system that cut wireframe production time by 60%',
      client: 'GIM Digital',
      role: 'Product Designer (self-initiated)',
      services: 'Design system creation',
      tools: 'Figma',
      overview: [
        'Every new project at GIM Digital started its wireframes from zero, even when the same components showed up across dozens of client briefs. Nobody asked me to fix this. I built a centralised design system on my own initiative because I could see the pattern costing the team time every single sprint.',
      ],
      discovery: [
        'I tracked how long it actually took to move from discovery to high-fidelity handoff across recent projects. The pattern was consistent: teams were rebuilding the same buttons, cards, navigation patterns and form elements from scratch on every brief, with small inconsistencies creeping in depending on who built what.',
        'There was no shared library, no naming convention and no single source of truth for components already in production. The cost wasn’t only speed. It was also visual inconsistency across a client portfolio spanning tech, banking and gaming, where every brand needed its own visual language built on the same underlying patterns.',
      ],
      solution: [
        'I audited screens across active and past projects, pulled out the components that repeated most often, and built a centralised Figma library organised around components, icons and reference screens. It was structured so a designer could start a new project by pulling from the library instead of opening a blank canvas.',
        'I presented the system to the team and to leadership, walked everyone through it in a live session, and set a clear expectation: new projects build from the library first, and only create new components when the library genuinely has a gap.',
      ],
      result: [
        'I measured delivery time before and after using sprint retrospective data, not estimates. Wireframe production dropped from seven days to three, a 60% reduction. The system kept running after I moved into a senior role, and stayed in active use after I left, which is the clearest sign it solved a real problem instead of adding process for its own sake.',
      ],
    },
    pt: {
      title: 'Design System para a GIM Digital',
      subtitle: 'Um sistema no Figma, criado por iniciativa própria, que reduziu em 60% o tempo de produção de wireframes',
      client: 'GIM Digital',
      role: 'Product Designer (iniciativa própria)',
      services: 'Criação de design system',
      tools: 'Figma',
      overview: [
        'Todo projeto novo na GIM Digital começava os wireframes do zero, mesmo quando os mesmos componentes apareciam em dezenas de briefings. Ninguém me pediu para resolver isso. Construí um design system centralizado por conta própria, porque via esse padrão custando tempo ao time em todas as sprints.',
      ],
      discovery: [
        'Medi quanto tempo realmente levávamos da descoberta até o handoff em alta fidelidade nos projetos recentes. O padrão se repetia: o time reconstruía do zero os mesmos botões, cards, navegações e formulários em cada briefing, com pequenas inconsistências surgindo conforme quem desenhava.',
        'Não havia biblioteca compartilhada, convenção de nomes nem uma fonte única para os componentes que já estavam em produção. O custo não era só de velocidade. Era também de inconsistência visual numa carteira de clientes de tecnologia, bancos e games, em que cada marca precisava de uma linguagem própria sobre os mesmos padrões de base.',
      ],
      solution: [
        'Auditei telas de projetos ativos e antigos, separei os componentes que mais se repetiam e montei uma biblioteca centralizada no Figma, organizada em componentes, ícones e telas de referência. A estrutura permitia começar um projeto puxando da biblioteca em vez de abrir um canvas em branco.',
        'Apresentei o sistema ao time e à liderança, conduzi uma sessão ao vivo mostrando como usá-lo e combinei uma regra clara: projetos novos partem da biblioteca, e componentes novos só nascem quando existe uma lacuna de verdade.',
      ],
      result: [
        'Medi o tempo de entrega antes e depois com dados das retrospectivas, não com estimativas. A produção de wireframes caiu de sete para três dias, uma redução de 60%. O sistema seguiu rodando quando assumi uma função sênior e continuou em uso depois que saí da empresa, o sinal mais claro de que resolveu um problema real em vez de criar processo por criar.',
      ],
    },
  },
  {
    slug: 'redesigning-legal-filing-workflows',
    cat: 'BRL-002',
    year: '2026',
    kind: { en: 'Dashboard', pt: 'Dashboard' },
    cover: 'legal',
    label: '#9ad7ce',
    en: {
      title: 'Redesigning legal filing workflows',
      subtitle: 'Centralising data and reducing cognitive load for Caixa’s judicial filing team',
      client: 'Caixa Econômica Federal, via Fóton Informática',
      role: 'UX/UI Designer, UX Researcher',
      services: 'Dashboard design',
      overview: [
        'The judicial filing team worked through a slow, fragmented process built on a legacy system and a manually updated Excel spreadsheet. Critical information was spread across tools that didn’t match, so people struggled to find what they needed to finish a task. The core problem was the sheer number of actions it took to process a single filing, which added friction and room for error at every step.',
      ],
      discovery: [
        'I ran three rounds of user research directly with the filing team before opening Figma. I needed to know which fields people checked constantly, which ones they only needed now and then, and where the current process broke down under real workload, not just in theory. That distinction became the backbone of the whole redesign.',
      ],
      solution: [
        'Every filing meant jumping between the legacy system and the spreadsheet just to find the information needed to act. The real problem wasn’t the interface, it was that critical data lived in two places that never talked to each other, and every extra click was another chance for something to be missed or duplicated. The new dashboard brings both into one view, with the high-frequency fields up front and the occasional ones a step away.',
      ],
      result: [
        'The dashboard shipped to strong praise from both the product owner and the people who use it every day, replacing a fragmented, error-prone workflow with a single source of truth. It’s part of a wider effort across Caixa’s ecosystem of 100+ legacy products, where the same tension between data density and usability keeps coming back.',
      ],
    },
    pt: {
      title: 'Redesenhando o fluxo de protocolos judiciais',
      subtitle: 'Centralizando dados e reduzindo a carga cognitiva do time de protocolo judicial da Caixa',
      client: 'Caixa Econômica Federal, via Fóton Informática',
      role: 'UX/UI Designer, UX Researcher',
      services: 'Design de dashboard',
      overview: [
        'O time de protocolo judicial trabalhava num fluxo lento e fragmentado, apoiado num sistema legado e numa planilha de Excel atualizada à mão. As informações críticas estavam espalhadas por ferramentas que não conversavam, e as pessoas tinham dificuldade para achar o que precisavam para concluir uma tarefa. O problema central era a quantidade de ações necessárias para processar um único protocolo, o que aumentava o atrito e a chance de erro a cada passo.',
      ],
      discovery: [
        'Fiz três rodadas de pesquisa diretamente com o time antes de abrir o Figma. Precisava entender quais campos eram consultados o tempo todo, quais eram usados só de vez em quando e onde o processo quebrava sob a carga real de trabalho, não só na teoria. Essa distinção virou a espinha dorsal do redesign.',
      ],
      solution: [
        'Cada protocolo exigia pular entre o sistema legado e a planilha só para encontrar a informação necessária. O problema real não era a interface, era que dados críticos viviam em dois lugares que nunca se falavam, e cada clique a mais era uma nova chance de algo ser esquecido ou duplicado. O novo dashboard reúne tudo numa única visão, com os campos mais usados em primeiro plano e os ocasionais a um passo de distância.',
      ],
      result: [
        'O dashboard foi entregue com elogios do product owner e de quem usa a plataforma todos os dias, substituindo um fluxo fragmentado e sujeito a erros por uma fonte única de informação. Ele faz parte de um esforço maior no ecossistema da Caixa, com mais de 100 produtos legados, onde a mesma tensão entre densidade de dados e usabilidade aparece o tempo todo.',
      ],
    },
  },
  {
    slug: 'bioeconomy-challenge',
    cat: 'BRL-003',
    year: '2025',
    kind: { en: 'Web platform', pt: 'Plataforma web' },
    cover: 'bioeconomy-challenge',
    label: '#e2a549',
    link: 'https://bioeconomychallenge.org/',
    en: {
      title: 'Bioeconomy Challenge',
      subtitle: 'Shipping a platform for a global bioeconomy coalition in two weeks, backed by the UN and FAO',
      client: 'NatureFinance',
      role: 'Lead Developer and Product Designer, end to end: from briefing to launch and ongoing maintenance',
      services: 'Product design, web design, multilingual content structure, WordPress implementation',
      tools: 'WordPress, Elementor, hosting, DNS and SSL configuration, Google Analytics',
      overview: [
        'The Bioeconomy Challenge needed a public home in time for its official launch at COP30 in Belém, backed by Brazil’s Ministry of Environment and Climate Change, NatureFinance, the FAO, the IDB Group, UNCTAD and the World Resources Institute. The catch: two weeks from contract to live site, for a platform meant to represent a coalition of 60+ global organisations from day one.',
      ],
      discovery: [
        'Two weeks for an institutional, multilingual platform with this many stakeholders meant the usual discovery-then-design sequence wasn’t an option. I had to compress research and decisions into days, not weeks, and still deliver something credible enough to represent UN agencies and government ministries at launch.',
      ],
      solution: [
        'I chose WordPress with Elementor for speed without giving up structure: it got me from wireframe to a working, editable site fast enough to hit the deadline, and left the client with a platform they could maintain themselves. I handled hosting, DNS and SSL directly instead of looping in a separate technical team, which removed a dependency that could have cost days I didn’t have.',
        'The site supports English, Portuguese and Spanish from the structure up, reflecting the international audience the coalition serves. SEO and Google Analytics were set up before launch, not after, so the client could see real traffic from day one.',
      ],
      result: [
        'The site launched on time for COP30 and has drawn 30,000+ visits in seven months. It now represents the Bioeconomy Challenge publicly, with founding partners including the FAO, IDB Group, UNCTAD and WRI, and it’s one of the clearest examples I have of shipping something credible under real time pressure, not despite the constraint but because of how the work was structured around it.',
      ],
    },
    pt: {
      title: 'Bioeconomy Challenge',
      subtitle: 'Uma plataforma para uma coalizão global de bioeconomia, com apoio da ONU e da FAO, entregue em duas semanas',
      client: 'NatureFinance',
      role: 'Lead Developer e Product Designer, de ponta a ponta: do briefing ao lançamento e à manutenção',
      services: 'Product design, web design, estrutura de conteúdo multilíngue, implementação em WordPress',
      tools: 'WordPress, Elementor, configuração de hospedagem, DNS e SSL, Google Analytics',
      overview: [
        'O Bioeconomy Challenge precisava de uma casa pública a tempo do lançamento oficial na COP30, em Belém, com apoio do Ministério do Meio Ambiente e Mudança do Clima, NatureFinance, FAO, Grupo BID, UNCTAD e World Resources Institute. O detalhe: duas semanas entre o contrato e o site no ar, para uma plataforma que representaria uma coalizão de mais de 60 organizações globais desde o primeiro dia.',
      ],
      discovery: [
        'Duas semanas para uma plataforma institucional e multilíngue com tantos envolvidos tiravam da mesa a sequência habitual de descoberta e depois design. Precisei comprimir pesquisa e decisões em dias, não semanas, e ainda entregar algo à altura de agências da ONU e ministérios no lançamento.',
      ],
      solution: [
        'Escolhi WordPress com Elementor pela velocidade sem abrir mão de estrutura: ele me levou do wireframe a um site funcional e editável a tempo do prazo, e deixou o cliente com uma plataforma que ele mesmo consegue manter. Cuidei de hospedagem, DNS e SSL diretamente, sem envolver um time técnico à parte, o que eliminou uma dependência que poderia custar dias que eu não tinha.',
        'O site foi estruturado desde a base para inglês, português e espanhol, refletindo o público internacional da coalizão. SEO e Google Analytics foram configurados antes do lançamento, não depois, para que o cliente visse o tráfego real desde o primeiro dia.',
      ],
      result: [
        'O site entrou no ar a tempo da COP30 e já soma mais de 30 mil visitas em sete meses. Hoje ele é a cara pública do Bioeconomy Challenge, com parceiros fundadores como FAO, Grupo BID, UNCTAD e WRI, e é um dos exemplos mais claros que tenho de entregar algo sólido sob pressão real de prazo, não apesar da restrição, mas pela forma como o trabalho foi organizado em torno dela.',
      ],
    },
  },
  {
    slug: 'bioeconomia-brasil',
    cat: 'BRL-004',
    year: '2022',
    kind: { en: 'Multilingual website', pt: 'Site multilíngue' },
    cover: 'bioeconomia-brasil',
    label: '#e9a07c',
    en: {
      title: 'Bioeconomia Brasil',
      subtitle: 'A platform where five languages, including Arabic right-to-left, all feel equally native',
      client: 'GIZ, via GIM Digital',
      role: 'Lead Developer and Product Designer, end to end: from briefing to launch and ongoing maintenance',
      services: 'Product design, web design, multilingual content structure, RTL layout, WordPress implementation, localisation coordination',
      tools: 'Figma, WordPress, RTL layout implementation, translation coordination',
      overview: [
        'The Brazil–Germany Cooperation for Sustainable Development needed a digital home for its bioeconomy initiative in the Amazon, a programme connecting producers, seed guardians, researchers and institutional partners. The site had to work just as clearly for a Brazilian smallholder as for a German policy reader.',
      ],
      discovery: [
        'The main constraint wasn’t visual, it was linguistic. The platform had to serve five languages, Portuguese, English, French, German and Arabic, without any of them feeling like an afterthought. Arabic in particular meant designing for right-to-left reading from the layout up, not retrofitting it later.',
      ],
      solution: [
        'I wrote the core English content myself and coordinated the translation approval flow with stakeholders across languages and time zones. In Figma, I built the component system with language variants from the start, so RTL wasn’t a special case bolted onto an LTR design, it was one of five equally supported reading directions. I implemented the localised versions directly in WordPress and tested each language’s typography and spacing on its own, instead of assuming what worked in Portuguese would hold in Arabic.',
      ],
      result: [
        'The platform is now GIZ’s public hub for the bioeconomy programme, with content, testimonials and publications navigable natively in all five languages. It’s one of the clearest proofs I have of designing for genuinely international, multi-directional audiences rather than translating a single-language design after the fact.',
      ],
    },
    pt: {
      title: 'Bioeconomia Brasil',
      subtitle: 'Uma plataforma em que cinco idiomas, incluindo o árabe da direita para a esquerda, soam igualmente nativos',
      client: 'GIZ, via GIM Digital',
      role: 'Lead Developer e Product Designer, de ponta a ponta: do briefing ao lançamento e à manutenção',
      services: 'Product design, web design, estrutura de conteúdo multilíngue, layout RTL, implementação em WordPress, coordenação de localização',
      tools: 'Figma, WordPress, layout RTL, coordenação de traduções',
      overview: [
        'A Cooperação Brasil–Alemanha para o Desenvolvimento Sustentável precisava de uma casa digital para sua iniciativa de bioeconomia na Amazônia, um programa que conecta produtores, guardiões de sementes, pesquisadores e parceiros institucionais. O site tinha que funcionar com a mesma clareza para um pequeno produtor brasileiro e para um leitor de políticas públicas na Alemanha.',
      ],
      discovery: [
        'A principal restrição não era visual, era linguística. A plataforma precisava atender cinco idiomas, português, inglês, francês, alemão e árabe, sem que nenhum parecesse um improviso. O árabe, em especial, exigia pensar a leitura da direita para a esquerda desde o layout, e não adaptá-la depois.',
      ],
      solution: [
        'Escrevi o conteúdo base em inglês e coordenei o fluxo de aprovação das traduções com pessoas de vários idiomas e fusos horários. No Figma, construí o sistema de componentes com variantes de idioma desde o início, para que o RTL não fosse um caso especial encaixado num design LTR, e sim uma das cinco direções de leitura com o mesmo suporte. Implementei as versões localizadas direto no WordPress e testei a tipografia e o espaçamento de cada idioma separadamente, em vez de supor que o que funcionava em português funcionaria em árabe.',
      ],
      result: [
        'Hoje a plataforma é o hub público da GIZ para o programa de bioeconomia, com conteúdos, depoimentos e publicações navegáveis de forma nativa nos cinco idiomas. É uma das provas mais claras que tenho de design para públicos realmente internacionais e com mais de uma direção de leitura, em vez de traduzir um design monolíngue depois de pronto.',
      ],
    },
  },
  {
    slug: 'abrace',
    cat: 'BRL-005',
    year: '2025',
    kind: { en: 'Website & donations', pt: 'Site e doações' },
    cover: 'abrace',
    label: '#feb837',
    en: {
      title: 'Abrace',
      subtitle: 'Supporting families of children with cancer through careful design and resilient engineering',
      client: 'Abrace (Associação Brasileira de Assistência às Famílias de Crianças Portadoras de Câncer e Hemopatias)',
      role: 'Lead Developer and Product Designer, end to end: from briefing to launch and ongoing maintenance',
      services: 'Product design, web development, WordPress, design system, CRM and donation integrations, performance and SEO',
      tools: 'Figma, WordPress, Cielo, RD Station, Google Analytics, Search Console, AI-assisted optimisation',
      overview: [
        'Abrace supports families of children with cancer and blood disorders. When I joined as lead developer and product designer, their digital presence was fragile: at risk of downtime, disconnected from their CRM and donation systems, and not built to last.',
      ],
      discovery: [
        'The real risk wasn’t visual, it was operational. Migrating hosting while keeping every donor record and recurring subscription running without interruption was the hard constraint. Get that wrong, and real donors lose the ability to give in the middle of their relationship with the organisation.',
      ],
      solution: [
        'I led the project end to end: architecture planning, a custom design system built for consistency and scale, and a WordPress rebuild integrated with Cielo for donations and RD Station for CRM. I set up Google Analytics and Search Console so I could follow real performance after launch, not just at delivery, and use AI tools to diagnose issues and guide monthly optimisation.',
      ],
      result: [
        'Monthly active users grew 47% since launch, and the migration happened with zero downtime and every donor’s history intact. The client still praises the site’s reliability well after handoff, which matters more to me than the launch-day reaction.',
      ],
    },
    pt: {
      title: 'Abrace',
      subtitle: 'Apoio a famílias de crianças com câncer, com design cuidadoso e engenharia resiliente',
      client: 'Abrace (Associação Brasileira de Assistência às Famílias de Crianças Portadoras de Câncer e Hemopatias)',
      role: 'Lead Developer e Product Designer, de ponta a ponta: do briefing ao lançamento e à manutenção',
      services: 'Product design, desenvolvimento web, WordPress, design system, integrações de CRM e doações, performance e SEO',
      tools: 'Figma, WordPress, Cielo, RD Station, Google Analytics, Search Console, otimização assistida por IA',
      overview: [
        'A Abrace apoia famílias de crianças com câncer e doenças do sangue. Quando entrei como lead developer e product designer, a presença digital deles era frágil: com risco de ficar fora do ar, desconectada do CRM e do sistema de doações, e sem estrutura para durar.',
      ],
      discovery: [
        'O risco real não era visual, era operacional. Migrar a hospedagem mantendo cada registro de doador e cada doação recorrente funcionando, sem interrupção, era a restrição mais dura. Se isso desse errado, doadores de verdade perderiam a possibilidade de contribuir no meio da sua relação com a instituição.',
      ],
      solution: [
        'Conduzi o projeto de ponta a ponta: planejamento da arquitetura, um design system próprio pensado para consistência e escala, e a reconstrução em WordPress integrada à Cielo para doações e ao RD Station como CRM. Configurei Google Analytics e Search Console para acompanhar o desempenho real depois do lançamento, e não só na entrega, e uso ferramentas de IA para diagnosticar problemas e orientar a otimização mensal.',
      ],
      result: [
        'Os usuários ativos mensais cresceram 47% desde o lançamento, e a migração aconteceu sem nenhum minuto fora do ar e com todo o histórico de doadores preservado. O cliente segue elogiando a estabilidade do site muito depois da entrega, o que para mim vale mais do que a reação no dia do lançamento.',
      ],
    },
  },
  {
    slug: 'stag',
    cat: 'BRL-006',
    year: '2026',
    kind: { en: 'Website redesign', pt: 'Redesign de site' },
    cover: 'stag',
    label: '#e9661b',
    link: 'https://stagestagios.com.br/',
    en: {
      title: 'Stag: Website redesign',
      subtitle: 'Giving a 40-year-old brand the modern voice it deserved',
      client: 'Stag, via GIM Digital',
      role: 'Lead Developer and Product Designer, end to end: from briefing to launch',
      services: 'Product design, web development, WordPress, CRM integration',
      tools: 'Figma, WordPress, Elementor, CRM integration',
      overview: [
        'Stag is a 40-year-old internship consultancy connecting students and companies across Brazil. The brand had real credibility, but the site felt dated and wasn’t reaching its actual audience: young students entering the job market for the first time.',
      ],
      discovery: [
        'The client knew something was off but not what to fix. My job was to turn “this feels old” into concrete design decisions: what exactly had to change in tone, layout and visual language to feel current without throwing away 40 years of trust.',
      ],
      solution: [
        'I led the redesign end to end, from positioning to final build. I prototyped the full experience in high fidelity in Figma first, so the client could validate the direction early instead of finding problems after development started. The site was built on WordPress with Elementor, with CRM integration and a form database that supports lead capture the way the client actually works, not a generic contact form.',
      ],
      result: [
        'The client responded to the first delivery with immediate enthusiasm, and the whole project shipped in 30 days, which is fast for a full brand and site redesign.',
      ],
    },
    pt: {
      title: 'Stag: Redesign do site',
      subtitle: 'Uma voz atual para uma marca com 40 anos de história',
      client: 'Stag, via GIM Digital',
      role: 'Lead Developer e Product Designer, de ponta a ponta: do briefing ao lançamento',
      services: 'Product design, desenvolvimento web, WordPress, integração com CRM',
      tools: 'Figma, WordPress, Elementor, integração com CRM',
      overview: [
        'A Stag é uma consultoria de estágios com 40 anos de mercado, que conecta estudantes e empresas em todo o Brasil. A marca tinha credibilidade de sobra, mas o site parecia datado e não falava com o público de verdade: estudantes jovens entrando no mercado de trabalho pela primeira vez.',
      ],
      discovery: [
        'O cliente sabia que algo estava errado, mas não sabia o quê. Meu papel foi transformar “isso parece velho” em decisões de design concretas: o que exatamente precisava mudar no tom, no layout e na linguagem visual para soar atual sem jogar fora 40 anos de confiança.',
      ],
      solution: [
        'Conduzi o redesign de ponta a ponta, do posicionamento à entrega final. Prototipei a experiência completa em alta fidelidade no Figma antes de tudo, para que o cliente validasse a direção cedo em vez de descobrir problemas com o desenvolvimento já em andamento. O site foi construído em WordPress com Elementor, com integração ao CRM e um banco de formulários que atende a captação de leads do jeito que o cliente realmente trabalha, e não um formulário de contato genérico.',
      ],
      result: [
        'O cliente recebeu a primeira entrega com entusiasmo imediato, e o projeto inteiro foi entregue em 30 dias, um prazo curto para um redesign completo de marca e site.',
      ],
    },
  },
  {
    slug: 'cepel-nzeb',
    cat: 'BRL-007',
    year: '2025',
    kind: { en: 'Virtual tour', pt: 'Tour virtual' },
    cover: 'cepel',
    label: '#bcf215',
    en: {
      title: 'Cepel NZEB',
      subtitle: 'Bringing a building that didn’t exist yet to life through an interactive virtual tour',
      client: 'GIZ, via GIM Digital',
      role: 'Product Designer, Product Owner',
      services: 'Product design, web design, interactive virtual tour, WordPress, front-end and back-end customisation',
      tools: 'Figma, WordPress, custom-configured virtual tour plugin',
      overview: [
        'Cepel needed to promote its Near Zero Energy Building (NZEB) concept at conferences across Brazil, but the house wasn’t finished yet. There was no building to show, only renderings and a concept that had to feel real to an audience that couldn’t walk through it.',
      ],
      discovery: [
        'Looking at the early project photos, I saw the actual problem: this wasn’t a “make a website” brief, it was “make people feel the building before it exists”. A standard institutional site with static renders wouldn’t communicate what it’s like to be in the space. So I proposed an interactive virtual tour, treating the site itself as a stand-in for the visit.',
      ],
      solution: [
        'I prototyped the whole experience in Figma before touching code, then built the site in WordPress with a dedicated virtual tour plugin. Matching the interaction model I had designed, rather than the plugin’s defaults, took extensive front-end and back-end customisation. I owned it end to end: concept, design and implementation, with no handoff to a separate developer.',
      ],
      result: [
        'The site gave Cepel a way to present the NZEB concept at conferences before construction was complete, turning an unfinished building into something people could explore. I no longer have access to the live site and some content has changed since handoff, so this case uses archived screens rather than the live URL.',
      ],
    },
    pt: {
      title: 'Cepel NZEB',
      subtitle: 'Um prédio que ainda não existia, apresentado por meio de um tour virtual interativo',
      client: 'GIZ, via GIM Digital',
      role: 'Product Designer, Product Owner',
      services: 'Product design, web design, tour virtual interativo, WordPress, customização de front-end e back-end',
      tools: 'Figma, WordPress, plugin de tour virtual configurado sob medida',
      overview: [
        'O Cepel precisava divulgar seu conceito de Edificação de Energia Quase Zero (NZEB) em congressos pelo Brasil, mas a casa ainda não estava pronta. Não havia prédio para mostrar, só renderizações e um conceito que precisava parecer real para um público que não podia andar por ele.',
      ],
      discovery: [
        'Olhando as primeiras fotos da obra, entendi o problema de verdade: o briefing não era “fazer um site”, era “fazer as pessoas sentirem o prédio antes de ele existir”. Um site institucional com renders estáticos não passaria a experiência de estar no espaço. Então propus um tour virtual interativo, tratando o próprio site como substituto da visita.',
      ],
      solution: [
        'Prototipei toda a experiência no Figma antes de escrever código e depois construí o site em WordPress com um plugin de tour virtual. Fazer o plugin seguir o modelo de interação que eu tinha desenhado, e não o comportamento padrão dele, exigiu bastante customização de front-end e back-end. Fui responsável de ponta a ponta: conceito, design e implementação, sem repassar para outro desenvolvedor.',
      ],
      result: [
        'O site deu ao Cepel uma forma de apresentar o conceito NZEB em congressos antes do fim da obra, transformando um prédio inacabado em algo que as pessoas podiam explorar. Não tenho mais acesso ao site no ar e parte do conteúdo mudou depois da entrega, por isso este case usa telas arquivadas em vez do link ao vivo.',
      ],
    },
  },
  {
    slug: 'universo-paralello',
    cat: 'BRL-008',
    year: '2025',
    kind: { en: 'Festival website', pt: 'Site de festival' },
    cover: 'universo-paralello',
    label: '#ffc323',
    link: 'https://vilamundo.com/universo-paralello/',
    en: {
      title: 'Universo Paralello: Vila Mundo',
      subtitle: 'Living the festival from the inside',
      client: 'Vila Mundo Hospedagem & Infraestrutura, via GIM Digital',
      role: 'Product Designer, Product Owner',
      services: 'Product design, web design',
      tools: 'Figma, WordPress, multilingual content structure, Google Analytics',
      overview: [
        'Vila Mundo builds accommodation for events, mixing outdoor freedom with hotel-level comfort. For the 19th edition of Universo Paralello, one of Brazil’s biggest festivals, they wanted to turn “a place to sleep” into “a place to belong”.',
      ],
      discovery: [
        'The challenge was translating something physical and sensory, arriving at a festival, into a website that makes you feel it before you’ve bought a ticket. Generic hospitality templates would have flattened exactly what makes the offer special.',
      ],
      solution: [
        'I structured the platform around clarity, emotion and momentum: multilingual check-in support, shaded villages, lounges, food and infrastructure, each section designed to feel like stepping into a parallel world rather than reading a spec sheet. Visual storytelling and fluid navigation turn the complex logistics, tent types, capacity, add-ons, into an inviting journey instead of a booking form.',
      ],
      result: [
        'Vila Mundo has hosted 4,000+ guests across 11 projects, and the platform now works as the gateway that makes festival accommodation feel like part of the event, not a separate transaction.',
      ],
    },
    pt: {
      title: 'Universo Paralello: Vila Mundo',
      subtitle: 'Viver o festival por dentro',
      client: 'Vila Mundo Hospedagem & Infraestrutura, via GIM Digital',
      role: 'Product Designer, Product Owner',
      services: 'Product design, web design',
      tools: 'Figma, WordPress, estrutura de conteúdo multilíngue, Google Analytics',
      overview: [
        'A Vila Mundo cria hospedagens para eventos, misturando a liberdade do ar livre com conforto de hotel. Para a 19ª edição do Universo Paralello, um dos maiores festivais do Brasil, a ideia era transformar “um lugar para dormir” em “um lugar para pertencer”.',
      ],
      discovery: [
        'O desafio era traduzir algo físico e sensorial, a chegada a um festival, num site que faz você sentir isso antes mesmo de comprar o ingresso. Templates genéricos de hospedagem achatariam justamente o que torna a proposta especial.',
      ],
      solution: [
        'Estruturei a plataforma em torno de clareza, emoção e ritmo: check-in com suporte multilíngue, vilas com sombra, lounges, alimentação e infraestrutura, cada seção pensada para parecer a entrada num mundo paralelo, e não a leitura de uma ficha técnica. Narrativa visual e navegação fluida transformam uma logística complexa, tipos de barraca, capacidade, adicionais, numa jornada convidativa em vez de um formulário de reserva.',
      ],
      result: [
        'A Vila Mundo já recebeu mais de 4.000 hóspedes em 11 projetos, e a plataforma hoje funciona como a porta de entrada que faz a hospedagem parecer parte do festival, e não uma transação à parte.',
      ],
    },
  },
  {
    slug: 'logali',
    cat: 'BRL-009',
    year: '2022',
    kind: { en: 'Mobile app', pt: 'App mobile' },
    cover: 'logali',
    label: '#ec4677',
    en: {
      title: 'Logali',
      subtitle: 'Event discovery that gives a small poetry night the same shot as a major festival',
      client: 'Academic project',
      role: 'Project Manager, Product Designer',
      services: 'UX/UI design, mobile design',
      tools: 'Figma, recommendation system design, mobile UX',
      overview: [
        'Brasília’s events scene is busy but uneven: well-funded events get visibility, smaller and grassroots ones don’t, which leaves organisers and attendees with a fragmented, unequal picture of what’s actually happening in the city.',
      ],
      discovery: [
        'The design problem wasn’t listing events, plenty of platforms already do that. It was building something that gave a grassroots poetry night the same chance at visibility as a major festival, without becoming just another feed people scroll past.',
      ],
      solution: [
        'I designed Logali as a mobile app built around personalised recommendations and social proof, showing people which events their friends are going to. That does two things at once: it puts smaller events in front of the people most likely to care about them, and it uses social context to make discovery feel less like browsing and more like being invited.',
      ],
      result: [
        'Logali gives smaller organisers a realistic path to visibility that doesn’t depend on ad spend, and gives attendees a more personal way to find events worth their time.',
      ],
    },
    pt: {
      title: 'Logali',
      subtitle: 'Descoberta de eventos que dá a um sarau de poesia a mesma chance de um grande festival',
      client: 'Projeto acadêmico',
      role: 'Gerente de Projeto, Product Designer',
      services: 'UX/UI design, design mobile',
      tools: 'Figma, design de sistema de recomendação, UX mobile',
      overview: [
        'A cena de eventos de Brasília é movimentada, mas desigual: eventos com dinheiro ganham visibilidade, os menores e independentes não, e tanto organizadores quanto público ficam com uma visão fragmentada e desigual do que realmente acontece na cidade.',
      ],
      discovery: [
        'O problema de design não era listar eventos, várias plataformas já fazem isso. Era criar algo que desse a um sarau de poesia independente a mesma chance de ser visto que um grande festival, sem virar mais um feed que as pessoas rolam sem ver.',
      ],
      solution: [
        'Desenhei o Logali como um app mobile baseado em recomendações personalizadas e prova social, mostrando a quais eventos os amigos da pessoa vão. Isso resolve duas coisas ao mesmo tempo: leva os eventos menores até quem tem mais chance de se interessar por eles e usa o contexto social para que descobrir um evento pareça menos uma busca e mais um convite.',
      ],
      result: [
        'O Logali dá aos pequenos organizadores um caminho realista para serem vistos sem depender de mídia paga, e dá ao público uma forma mais pessoal de encontrar eventos que valem o seu tempo.',
      ],
    },
  },
  {
    slug: 'suindara-app',
    cat: 'BRL-010',
    year: '2024',
    kind: { en: 'Mobile app', pt: 'App mobile' },
    cover: 'suindara-app',
    label: '#daa421',
    en: {
      title: 'Suindara: App',
      subtitle: 'Turning everyday people into part of the Cerrado’s real-time monitoring network',
      client: 'Instituto Cerrados',
      role: 'Product Designer',
      services: 'App design, software',
      tools: 'Figma, geolocation-based interaction design',
      overview: [
        'Instituto Cerrados is working to protect 1 million hectares of the Cerrado by 2050, one of the most biodiverse and threatened ecosystems in the world. They needed a way to turn everyday people, not just researchers, into active participants in monitoring deforestation, wildfires and land degradation.',
      ],
      discovery: [
        'The challenge was designing for people in the field, often with unreliable connectivity, who need to report something urgent, a heat source or a fire risk, in seconds rather than minutes. Here, complexity isn’t a feature, it’s a liability.',
      ],
      solution: [
        'I designed the Suindara app around geolocated, low-friction reporting: people flag heat sources and fire risks in a few steps and receive real-time fire risk forecasts based on climate conditions. Educational content and conservation updates sit alongside the reporting tools, so the app works both as an alert system and as a way into ongoing engagement, not a one-off utility.',
      ],
      result: [
        'The app gives Instituto Cerrados a distributed monitoring network built on public participation, instead of relying only on institutional resources to cover a huge geographic area.',
      ],
    },
    pt: {
      title: 'Suindara: App',
      subtitle: 'Pessoas comuns como parte da rede de monitoramento do Cerrado em tempo real',
      client: 'Instituto Cerrados',
      role: 'Product Designer',
      services: 'Design de app, software',
      tools: 'Figma, design de interação baseado em geolocalização',
      overview: [
        'O Instituto Cerrados trabalha para proteger 1 milhão de hectares do Cerrado até 2050, um dos ecossistemas mais biodiversos e ameaçados do mundo. Eles precisavam de uma forma de transformar pessoas comuns, e não só pesquisadores, em participantes ativos no monitoramento de desmatamento, queimadas e degradação do solo.',
      ],
      discovery: [
        'O desafio era desenhar para quem está em campo, muitas vezes com conexão instável, e precisa reportar algo urgente, um foco de calor ou um risco de incêndio, em segundos e não em minutos. Aqui, complexidade não é recurso, é risco.',
      ],
      solution: [
        'Desenhei o app Suindara em torno de registros geolocalizados e sem atrito: a pessoa sinaliza focos de calor e riscos de incêndio em poucos passos e recebe previsões de risco de fogo em tempo real com base nas condições climáticas. Conteúdo educativo e novidades de conservação ficam ao lado das ferramentas de registro, para que o app funcione como sistema de alerta e também como porta de entrada para um engajamento contínuo, e não como uma ferramenta de uso único.',
      ],
      result: [
        'O app dá ao Instituto Cerrados uma rede de monitoramento distribuída, baseada na participação das pessoas, em vez de depender só de recursos institucionais para cobrir uma área geográfica enorme.',
      ],
    },
  },
  {
    slug: 'suindara-dashboard',
    cat: 'BRL-011',
    year: '2024',
    kind: { en: 'Dashboard', pt: 'Dashboard' },
    cover: 'suindara-dashboard',
    label: '#daa421',
    en: {
      title: 'Suindara: Dashboard',
      subtitle: 'Giving program leads a live, readable picture of Cerrado conservation',
      client: 'Instituto Cerrados',
      role: 'Product Designer',
      services: 'Intranet, dashboard, software',
      tools: 'Figma, dashboard design, data visualisation',
      overview: [
        'The app solved reporting for people on the ground. But Instituto Cerrados also needed a way for administrators to see the whole picture: how many territories were registered, how many incidents were coming in, and whether conservation actions were actually happening.',
      ],
      discovery: [
        'Different audience, different job. Field users need speed. Administrators need a clear, trustworthy overview to support decisions, funding conversations and reporting to partners. Designing both from the same visual system without treating them as the same problem was the real work.',
      ],
      solution: [
        'I designed a dashboard that brings protected territories, real-time heat source detections, total engaged users and completed mitigation actions into a single administrative view. The goal was to turn raw monitoring data into something a non-technical programme lead could read at a glance and act on, not a data dump that needs a technical translator.',
      ],
      result: [
        'Administrators now have a live, centralised view of conservation activity across the programme, supporting faster response and clearer reporting on impact over time.',
      ],
    },
    pt: {
      title: 'Suindara: Dashboard',
      subtitle: 'Uma visão viva e legível da conservação do Cerrado para quem coordena o programa',
      client: 'Instituto Cerrados',
      role: 'Product Designer',
      services: 'Intranet, dashboard, software',
      tools: 'Figma, design de dashboard, visualização de dados',
      overview: [
        'O app resolveu os registros para quem está em campo. Mas o Instituto Cerrados também precisava que os administradores enxergassem o quadro completo: quantos territórios estavam cadastrados, quantas ocorrências chegavam e se as ações de conservação estavam de fato acontecendo.',
      ],
      discovery: [
        'Outro público, outra tarefa. Quem está em campo precisa de velocidade. Quem administra precisa de uma visão clara e confiável para apoiar decisões, conversas com financiadores e relatórios para parceiros. O trabalho de verdade foi desenhar os dois a partir do mesmo sistema visual sem tratá-los como o mesmo problema.',
      ],
      solution: [
        'Desenhei um dashboard que reúne territórios protegidos, focos de calor detectados em tempo real, total de usuários engajados e ações de mitigação realizadas numa única visão administrativa. O objetivo era transformar dados brutos de monitoramento em algo que uma coordenação sem perfil técnico conseguisse ler de relance e usar para agir, e não um despejo de dados que precisa de tradutor.',
      ],
      result: [
        'Os administradores agora têm uma visão centralizada e ao vivo das ações de conservação em todo o programa, o que acelera a resposta e deixa mais claros os relatórios de impacto ao longo do tempo.',
      ],
    },
  },
  {
    slug: 'e-statis',
    cat: 'BRL-012',
    year: '2022',
    kind: { en: 'App prototype', pt: 'Protótipo de app' },
    cover: 'e-statis',
    label: '#f2f229',
    en: {
      title: 'e-Statis',
      subtitle: 'Every e-sports league, across every game, in one place',
      client: 'Academic project (CEUB)',
      role: 'Project Manager, UX Designer',
      services: 'UX/UI design, mobile design',
      tools: 'Figma, usability testing, brand identity design, user surveys',
      overview: [
        'E-sports fandom was growing fast, but unlike traditional sports, there was no single place to follow it. A football fan can track every league and team from one app. An e-sports fan following several games had to jump between separate platforms, one per title, with no unified view of what was happening across the scene.',
      ],
      discovery: [
        'Before designing anything, we surveyed 20 people to test whether this was a problem worth solving, and what information they’d want if it was. The goal wasn’t to confirm our assumption, it was to find out if we were wrong before building around a false premise.',
      ],
      solution: [
        'I led brand strategy, usability testing and prototyping for e-Statis, a navigable app prototype that brings every championship, across every game, into one experience. Usability testing surfaced something we hadn’t assumed: people wanted leagues front and centre, before the games themselves. They followed leagues the same way they already followed traditional sports, and only then cared which title was being played. That one insight reshaped the information hierarchy of the whole app: leagues first, games as a layer underneath.',
      ],
      result: [
        'e-Statis won Best Digital Project of the Semester at CEUB. More than the award, it’s proof that a research-first process works even under academic constraints: the strongest decision in the project came straight from a test result we didn’t expect, not from our original assumption.',
      ],
    },
    pt: {
      title: 'e-Statis',
      subtitle: 'Todas as ligas de e-sports, de todos os jogos, num só lugar',
      client: 'Projeto acadêmico (CEUB)',
      role: 'Gerente de Projeto, UX Designer',
      services: 'UX/UI design, design mobile',
      tools: 'Figma, testes de usabilidade, identidade visual, pesquisas com usuários',
      overview: [
        'O público de e-sports crescia rápido, mas, ao contrário dos esportes tradicionais, não havia um lugar único para acompanhar tudo. Um torcedor de futebol segue todas as ligas e times num só app. Quem acompanhava vários jogos de e-sports precisava pular entre plataformas separadas, uma por título, sem uma visão unificada da cena.',
      ],
      discovery: [
        'Antes de desenhar qualquer coisa, fizemos uma pesquisa com 20 pessoas para testar se o problema valia ser resolvido e que informações elas queriam, caso valesse. O objetivo não era confirmar nossa hipótese, era descobrir se estávamos errados antes de construir em cima de uma premissa falsa.',
      ],
      solution: [
        'Liderei a estratégia de marca, os testes de usabilidade e a prototipação do e-Statis, um protótipo navegável que reúne todos os campeonatos, de todos os jogos, numa única experiência. Os testes revelaram algo que não tínhamos previsto: as pessoas queriam as ligas em destaque, antes dos jogos. Elas acompanhavam ligas do mesmo jeito que já acompanhavam esportes tradicionais, e só depois se importavam com qual título estava sendo jogado. Esse insight reorganizou a hierarquia de informação do app inteiro: ligas primeiro, jogos como uma camada abaixo.',
      ],
      result: [
        'O e-Statis venceu o prêmio de Melhor Projeto Digital do Semestre no CEUB. Mais do que o prêmio, ele prova que um processo guiado por pesquisa funciona mesmo com restrições acadêmicas: a decisão mais forte do projeto veio direto de um resultado de teste que não esperávamos, e não da nossa hipótese inicial.',
      ],
    },
  },
];

type Img = { src: string; w: number; h: number };
type ImageSet = { hero: Img; overview: Img[]; discovery: Img[]; solution: Img[]; result: Img[] };

export function projectImages(slug: string): ImageSet {
  return (images as Record<string, ImageSet>)[slug];
}
