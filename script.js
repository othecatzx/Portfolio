/* Caick Rigato — portfolio. No frameworks, tracking, or third-party analytics. */
(() => {
  'use strict';
  const translations = {
    pt: {
      skip:'Pular para o conteúdo',navAbout:'Sobre',navProjects:'Projetos',navExperience:'Experiência',navEducation:'Formação',navSkills:'Skills',navContact:'Contato',
      heroStatus:'OPEN TO OPPORTUNITIES / 2026',heroIntro:'OLÁ, EU SOU',heroDescription:'Segurança, infraestrutura e código. Transformo curiosidade técnica em soluções reais — de laboratórios de rede à automação de operações.',exploreProjects:'Explorar projetos',scroll:'SCROLL PARA EXPLORAR',
      aboutTitle:'Tecnologia com<br><em>propósito.</em>',aboutStatement:'Acredito que a melhor forma de aprender tecnologia é <strong>construindo, testando e resolvendo problemas reais.</strong>',aboutP1:'Sou Caick Rigato, formado em Defesa Cibernética pela Faculdade Impacta, com foco em segurança da informação, redes, infraestrutura e desenvolvimento de software.',aboutP2:'Minha trajetória conecta a operação de e-commerce ao universo técnico: desenvolvo ferramentas próprias, integro APIs e mantenho um home lab para explorar serviços Linux, automação, conectividade e segurança.',aboutP3:'Busco oportunidades para crescer em cibersegurança, SOC, infraestrutura e desenvolvimento backend, levando uma mentalidade prática e uma vontade constante de aprender.',aboutLocation:'LOCALIZAÇÃO',languages:'IDIOMAS',languageValues:'Português / Inglês intermediário',
      projectsTitle:'Ideias que viram<br><em>sistemas.</em>',projectsIntro:'Projetos reais, ambientes de laboratório e soluções desenvolvidas para aprender, integrar e automatizar.',mlDesc:'Plataforma para centralizar operações de marketplaces, automatizar processos, gerenciar licenças, dispositivos e usuários, integrar APIs e apoiar a gestão de vendas.',viewRepo:'Ver repositório',labDesc:'Ambiente próprio com Linux, VPN mesh, DNS filtrado, proxy reverso, automação residencial e hospedagem de aplicações para experimentação e estudo.',socDesc:'Estudos práticos em análise de pacotes, protocolos, tráfego de rede, monitoramento e investigação de eventos de segurança com LetsDefend.',integrationDesc:'Integrações entre Mercado Livre, Bling e sistemas internos para reduzir tarefas repetitivas e organizar fluxos operacionais de múltiplas lojas.',
      experienceTitle:'Da operação à<br><em>tecnologia.</em>',expCurrent:'JAN 2024 — ATUAL',role1Period:'FEV 2025 — ATUAL',role1:'Assistente de Vendas',role1Desc:'Operações de marketplaces e e-commerce, integração de sistemas, suporte tecnológico, análise de planilhas e identificação de oportunidades de automação.',role2Period:'MAI 2024 — FEV 2025',role2:'Assistente Administrativo',role2Desc:'Organização de processos internos, controle de informações, rotinas administrativas e apoio às operações comerciais.',role3Period:'JAN 2024 — MAI 2024',role3:'Embalador',role3Desc:'Preparação e customização de equipamentos eletrônicos e apoio aos processos logísticos da operação.',
      educationTitle:'Conhecimento em<br><em>construção contínua.</em>',educationIntro:'Base acadêmica e formação complementar em segurança, redes, administração de sistemas e operações SOC.',degreeType:'GRADUAÇÃO',degreeName:'Defesa Cibernética',degreeDate:'ABR 2024 — JUN 2026',certsTitle:'Certificações & cursos',
      skillsTitle:'Meu arsenal<br><em>técnico.</em>',skillCyber:'Cibersegurança',skillCyberDesc:'Fundamentos de segurança, SOC, análise de pacotes, protocolos e monitoramento de tráfego.',skillNetwork:'Redes & Infraestrutura',skillNetworkDesc:'TCP/IP, redes, Linux, administração de serviços, VPN e conectividade.',skillDev:'Desenvolvimento',skillDevDesc:'Aplicações web, backend Node.js, APIs REST e extensões para navegador.',skillCloud:'Cloud & Automação',skillCloudDesc:'Deploy, bancos de dados, infraestrutura própria, integrações e automação operacional.',
      contactKicker:'TEM UM PROJETO OU OPORTUNIDADE?',contactTitle:'Vamos construir<br><em>algo relevante.</em>',contactDesc:'Aberto a conversas sobre cibersegurança, infraestrutura, desenvolvimento e novas oportunidades.',rights:'— TODOS OS DIREITOS RESERVADOS',backTop:'VOLTAR AO TOPO'
    },
    en: {
      skip:'Skip to content',navAbout:'About',navProjects:'Projects',navExperience:'Experience',navEducation:'Education',navSkills:'Skills',navContact:'Contact',
      heroStatus:'OPEN TO OPPORTUNITIES / 2026',heroIntro:'HELLO, I AM',heroDescription:'Security, infrastructure, and code. I turn technical curiosity into practical solutions — from network labs to operational automation.',exploreProjects:'Explore projects',scroll:'SCROLL TO EXPLORE',
      aboutTitle:'Technology with<br><em>purpose.</em>',aboutStatement:'I believe the best way to learn technology is by <strong>building, testing, and solving real-world problems.</strong>',aboutP1:'I am Caick Rigato, a Cyber Defense graduate from Faculdade Impacta, focused on information security, networking, IT infrastructure, and software development.',aboutP2:'My journey connects e-commerce operations with technology: I build my own tools, integrate APIs, and maintain a home lab to explore Linux services, automation, connectivity, and security.',aboutP3:'I am seeking opportunities to grow in cybersecurity, SOC, infrastructure, and backend development, bringing a hands-on mindset and a constant desire to learn.',aboutLocation:'LOCATION',languages:'LANGUAGES',languageValues:'Portuguese / Intermediate English',
      projectsTitle:'Ideas turned into<br><em>systems.</em>',projectsIntro:'Real projects, lab environments, and solutions built to learn, integrate, and automate.',mlDesc:'A platform to centralize marketplace operations, automate workflows, manage licenses, devices, and users, integrate APIs, and support sales management.',viewRepo:'View repository',labDesc:'A self-hosted environment using Linux, mesh VPN, DNS filtering, reverse proxy, home automation, and application hosting for hands-on experimentation.',socDesc:'Hands-on learning in packet analysis, protocols, network traffic, monitoring, and investigating security events through LetsDefend.',integrationDesc:'Integrations between Mercado Livre, Bling, and internal systems to reduce repetitive tasks and streamline multi-store operations.',
      experienceTitle:'From operations<br><em>to technology.</em>',expCurrent:'JAN 2024 — PRESENT',role1Period:'FEB 2025 — PRESENT',role1:'Sales Assistant',role1Desc:'Marketplace and e-commerce operations, systems integration, technology support, spreadsheet analysis, and identifying automation opportunities.',role2Period:'MAY 2024 — FEB 2025',role2:'Administrative Assistant',role2Desc:'Internal process organization, information management, administrative workflows, and support for commercial operations.',role3Period:'JAN 2024 — MAY 2024',role3:'Packaging Associate',role3Desc:'Preparation and customization of electronic equipment and support for logistics operations.',
      educationTitle:'Always expanding<br><em>my knowledge.</em>',educationIntro:'Academic training and additional courses in security, networking, system administration, and SOC operations.',degreeType:'DEGREE',degreeName:'Cyber Defense',degreeDate:'APR 2024 — JUN 2026',certsTitle:'Certifications & courses',
      skillsTitle:'My technical<br><em>toolkit.</em>',skillCyber:'Cybersecurity',skillCyberDesc:'Security fundamentals, SOC concepts, packet analysis, protocols, and traffic monitoring.',skillNetwork:'Networking & Infrastructure',skillNetworkDesc:'TCP/IP, computer networks, Linux, service administration, VPN, and connectivity.',skillDev:'Development',skillDevDesc:'Web applications, Node.js backend, REST APIs, and browser extensions.',skillCloud:'Cloud & Automation',skillCloudDesc:'Deployment, databases, self-hosted infrastructure, integrations, and operational automation.',
      contactKicker:'HAVE A PROJECT OR OPPORTUNITY?',contactTitle:'Let’s build<br><em>something meaningful.</em>',contactDesc:'Open to conversations about cybersecurity, infrastructure, development, and new opportunities.',rights:'— ALL RIGHTS RESERVED',backTop:'BACK TO TOP'
    }
  };
  const langButton = document.querySelector('.language-toggle');
  let language = 'pt';
  try { language = localStorage.getItem('caick-language') === 'en' ? 'en' : 'pt'; } catch (_) {}
  function setLanguage(lang) {
    language = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(translations[lang], key)) el.innerHTML = translations[lang][key];
    });
    langButton.innerHTML = lang === 'pt' ? '<span class="lang-active">PT</span><span class="lang-divider">/</span><span class="lang-inactive">EN</span>' : '<span class="lang-inactive">PT</span><span class="lang-divider">/</span><span class="lang-active">EN</span>';
    langButton.setAttribute('aria-label',lang === 'pt' ? 'Switch to English' : 'Mudar para português');
    try { localStorage.setItem('caick-language', lang); } catch (_) {}
  }
  langButton.addEventListener('click', () => setLanguage(language === 'pt' ? 'en' : 'pt'));
  setLanguage(language);

  document.getElementById('year').textContent = String(new Date().getFullYear());
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => { const open=navLinks.classList.toggle('open'); navToggle.setAttribute('aria-expanded',String(open)); });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}));
  document.addEventListener('keydown',ev => {if(ev.key==='Escape'){navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}});

  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals=document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{rootMargin:'0px 0px -35px 0px',threshold:.1});
    reveals.forEach(el=>observer.observe(el));
  } else reveals.forEach(el=>el.classList.add('visible'));

  const progress=document.querySelector('.progress');
  const parallax=document.querySelectorAll('.parallax');
  const sections=document.querySelectorAll('main section[id]');
  const links=document.querySelectorAll('.nav-links a');
  let scrollScheduled=false;
  function onScroll(){
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.width=(max>0?window.scrollY/max*100:0)+'%';
    if (!reducedMotion) parallax.forEach(el=> {const speed=Number(el.dataset.speed)||0;el.style.transform=`translate3d(0,${window.scrollY*speed}px,0)`;});
    let selected='';sections.forEach(section=>{if(section.getBoundingClientRect().top<innerHeight*.35)selected=section.id;});
    links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+selected));
    scrollScheduled=false;
  }
  window.addEventListener('scroll',()=>{if(!scrollScheduled){requestAnimationFrame(onScroll);scrollScheduled=true;}},{passive:true});
  onScroll();

  if(!reducedMotion && window.matchMedia('(pointer:fine)').matches){
    const glow=document.querySelector('.cursor-glow');
    const scene=document.getElementById('cyberScene');
    let last=0;
    document.addEventListener('pointermove',event=>{
      if(event.timeStamp-last<20)return;
      last=event.timeStamp;
      glow.style.left=event.clientX+'px';glow.style.top=event.clientY+'px';
    },{passive:true});
    scene.addEventListener('pointermove',event=>{
      const rect=scene.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-.5;
      const y=(event.clientY-rect.top)/rect.height-.5;
      scene.style.transform=`perspective(900px) rotateY(${x*11}deg) rotateX(${-y*11}deg)`;
    },{passive:true});
    scene.addEventListener('pointerleave',()=>{scene.style.transform='perspective(900px) rotateY(0deg) rotateX(0deg)';});
  }
})();
