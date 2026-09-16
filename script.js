const translations = {
  en: {
    agency:'Agency', expertise:'Expertise', work:'Work', contact:'Contact', startProject:'Start a project',
    creativeStudio:'CREATIVE STUDIO / 2026', scroll:'SCROLL TO EXPLORE', signatureStudy:'SIGNATURE<br>STUDY — 001', heroTitle:'MAKE YOUR<br><em>MARK.</em>', kicker:'BRANDING / SPATIAL / DIGITAL', discover:'DISCOVER',
    intro:"We create identities that don't simply occupy space — they <strong>change it.</strong>",
    idea:'THE IDEA', aboutTitle:"A brand should be<br><span>felt</span> before it's read.",
    aboutCopy:'Signatrix brings together physical signage, spatial design and digital communication to create one unmistakable presence.',
    trades:'TRADES<br>ONE SIGNATURE', whatWeDo:'WHAT WE DO', servicesTitle:'Physical.<br><em>Digital.</em><br>Connected.',
    signageTitle:'Signage<br><i>& Fit-out</i>', signageCopy:'Exterior identities, illuminated letters, interior branding, 3D signage and complete branded spaces.',
    digitalTitle:'Communication<br><i>& Digital</i>', digitalCopy:'Brand identity, art direction, campaigns, social content, websites and digital experiences.',
    exploreField:'EXPLORE FIELD', selectedWork:'SELECTED WORK', workTitle:'Built to be<br><em>noticed.</em>', viewWork:'VIEW ALL WORK ↗',
    haveProject:'HAVE A PROJECT?', contactTitle:"LET'S MAKE<br>SOMETHING<br><em>IMPOSSIBLE TO IGNORE.</em>", startCircle:'START<br>A PROJECT', artLabel:'SIGNATURE<br>STUDY — 001', identityMotion:'IDENTITY IN MOTION', exploreField:'EXPLORE FIELD', viewAllWork:'VIEW ALL WORK ↗', visualIdentity:'VISUAL IDENTITY + SIGNAGE', digitalExperience:'DIGITAL EXPERIENCE', spatialIdentity:'SPATIAL IDENTITY', noFilter:'NO<br>FILTER', formFeeling:'FORM<br>FOLLOWS<br>FEELING', enterIdentity:'ENTER<br>THE<br>IDENTITY', footerBaseline:'360° communication and signage agency based in Algiers. We give ambitious brands a distinct identity.', address:'Algiers, Algeria', hours:'Sun–Thu / 09:00–18:00', legal:'Legal notice', privacy:'Privacy', aboutUs:'About us', brandingDesign:'Branding & design', digitalWeb:'Digital & web', allServices:'All services ↗'
  },
  fr: {
    agency:'Agence', expertise:'Expertise', work:'Réalisations', contact:'Contact', startProject:'Démarrer un projet',
    creativeStudio:'STUDIO CRÉATIF / 2026', scroll:'FAIRE DÉFILER POUR EXPLORER', signatureStudy:'ÉTUDE DE<br>SIGNATURE — 001', heroTitle:'FAITES VOTRE<br><em>MARQUE.</em>', kicker:'IDENTITÉ / ESPACE / DIGITAL', discover:'DÉCOUVRIR',
    intro:'Nous créons des identités qui ne se contentent pas d’occuper l’espace — elles <strong>le transforment.</strong>',
    idea:'L’IDÉE', aboutTitle:'Une marque doit être<br><span>ressentie</span> avant d’être lue.',
    aboutCopy:'Signatrix réunit signalétique, design spatial et communication digitale pour créer une présence unique et reconnaissable.',
    trades:'MÉTIERS<br>UNE SIGNATURE', whatWeDo:'NOTRE SAVOIR-FAIRE', servicesTitle:'Physique.<br><em>Digital.</em><br>Connecté.',
    signageTitle:'Signalétique<br><i>& Agencement</i>', signageCopy:'Identités extérieures, lettres lumineuses, branding intérieur, enseignes 3D et espaces entièrement marqués.',
    digitalTitle:'Communication<br><i>& Digital</i>', digitalCopy:'Identité de marque, direction artistique, campagnes, contenu social, sites web et expériences digitales.',
    exploreField:'EXPLORER', selectedWork:'PROJETS SÉLECTIONNÉS', workTitle:'Conçu pour être<br><em>remarqué.</em>', viewWork:'VOIR LES PROJETS ↗',
    haveProject:'UN PROJET ?', contactTitle:'CRÉONS<br><span>QUELQUE CHOSE</span><br><em>D’IMPOSSIBLE À IGNORER.</em>', startCircle:'DÉMARRER<br>UN PROJET', artLabel:'ÉTUDE DE<br>SIGNATURE — 001', identityMotion:'IDENTITÉ EN MOUVEMENT', exploreField:'EXPLORER', viewAllWork:'VOIR LES PROJETS ↗', visualIdentity:'IDENTITÉ VISUELLE + SIGNALÉTIQUE', digitalExperience:'EXPÉRIENCE DIGITALE', spatialIdentity:'IDENTITÉ SPATIALE', noFilter:'SANS<br>FILTRE', formFeeling:'LA FORME<br>SUIT<br>L’ÉMOTION', enterIdentity:'ENTRER<br>DANS<br>L’IDENTITÉ', footerBaseline:'Agence de communication et de signalétique à 360° basée à Alger. Nous donnons aux marques ambitieuses une identité singulière.', address:'Alger, Algérie', hours:'Dim–Jeu / 09:00–18:00', legal:'Mentions légales', privacy:'Confidentialité', aboutUs:'À propos', brandingDesign:'Branding & design', digitalWeb:'Digital & web', allServices:'Tous les services ↗'
  },
  ar: {
    agency:'الوكالة', expertise:'خدماتنا', work:'أعمالنا', contact:'تواصل معنا', startProject:'ابدأ مشروعًا',
    creativeStudio:'استوديو إبداعي / 2026', scroll:'مرر لاكتشاف المزيد', signatureStudy:'دراسة<br>البصمة — 001', heroTitle:'اترك<br><em>بصمتك.</em>', kicker:'هوية / مساحة / رقمي', discover:'اكتشف',
    intro:'نصنع هويات لا تكتفي باحتلال المكان — بل <strong>تغيّره.</strong>',
    idea:'الفكرة', aboutTitle:'يجب أن تكون العلامة<br><span>محسوسة</span> قبل أن تُقرأ.',
    aboutCopy:'تجمع Signatrix بين اللافتات والتصميم المكاني والتواصل الرقمي لصناعة حضور مميز لا يُنسى.',
    trades:'مجالان<br>بصمة واحدة', whatWeDo:'ماذا نقدم', servicesTitle:'مادي.<br><em>رقمي.</em><br>متصل.',
    signageTitle:'اللافتات<br><i>وتجهيز المساحات</i>', signageCopy:'هويات خارجية، حروف مضيئة، هوية داخلية، لافتات ثلاثية الأبعاد ومساحات تحمل العلامة بالكامل.',
    digitalTitle:'التواصل<br><i>والرقمي</i>', digitalCopy:'هوية العلامة، التوجيه الفني، الحملات، محتوى التواصل، المواقع والتجارب الرقمية.',
    exploreField:'اكتشف المجال', selectedWork:'أعمال مختارة', workTitle:'صُمّم ليكون<br><em>ملحوظًا.</em>', viewWork:'شاهد الأعمال ↗',
    haveProject:'لديك مشروع؟', contactTitle:'لنصنع<br>شيئًا<br><em>يستحيل تجاهله.</em>', startCircle:'ابدأ<br>مشروعًا', artLabel:'دراسة<br>البصمة — 001', identityMotion:'الهوية في حركة', exploreField:'اكتشف المجال', viewAllWork:'شاهد كل الأعمال ↗', visualIdentity:'هوية بصرية + لافتات', digitalExperience:'تجربة رقمية', spatialIdentity:'هوية مكانية', noFilter:'بدون<br>فلتر', formFeeling:'الشكل<br>يتبع<br>الإحساس', enterIdentity:'ادخل<br>إلى<br>الهوية', footerBaseline:'وكالة متكاملة للتواصل واللافتات مقرها الجزائر. نمنح العلامات الطموحة هوية مميزة.', address:'الجزائر، الجزائر', hours:'الأحد–الخميس / 09:00–18:00', legal:'إشعار قانوني', privacy:'الخصوصية', aboutUs:'من نحن', brandingDesign:'الهوية والتصميم', digitalWeb:'الرقمي والويب', allServices:'كل الخدمات ↗'
  }
};

function setLanguage(lang){
  if(!translations[lang]) lang='en';
  const t=translations[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(t[k]!==undefined)el.textContent=t[k]});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;if(t[k]!==undefined)el.innerHTML=t[k]});
  document.querySelectorAll('.langs button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));

  document.querySelectorAll('.site-footer').forEach(footer=>{
    footer.querySelector('.footer-lead p')?.replaceChildren(document.createTextNode(t.footerBaseline||''));
    const columns=footer.querySelectorAll('.footer-column');
    if(columns[0]) columns[0].querySelector('b').textContent=t.expertise;
    if(columns[1]) columns[1].querySelector('b').textContent=t.agency;
    if(columns[2]){
      columns[2].querySelector('b').textContent=t.contact;
      const spans=columns[2].querySelectorAll('span');
      if(spans[0]) spans[0].textContent=t.address;
      if(spans[1]) spans[1].textContent=t.hours;
    }
    const legal=footer.querySelectorAll('.footer-bottom a');
    if(legal[0]) legal[0].textContent=t.legal;
    if(legal[1]) legal[1].textContent=t.privacy;
  });
  document.querySelectorAll('.mobile-bottom-nav a').forEach((link,index)=>{
    const labels=[t.agency,t.expertise,t.work,t.contact];
    const label=link.querySelector('b');
    if(label) label.textContent=labels[index];
  });
  localStorage.setItem('signatrix-language',lang);
}

document.querySelectorAll('.langs button').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));

const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{
  document.body.classList.toggle('menu-open');
  const old=document.querySelector('.mobile-nav');
  if(old){old.remove();return;}
  const lang=localStorage.getItem('signatrix-language')||'en',t=translations[lang];
  const nav=document.createElement('div'); nav.className='mobile-nav';
  nav.innerHTML=`<a href="index.html#about">${t.agency}</a><a href="index.html#services">${t.expertise}</a><a href="index.html#work">${t.work}</a><a href="contact.html">${t.contact}</a><a class="mobile-project" href="contact.html#project">${t.startProject} ↗</a><div class="mobile-langs"><button data-lang="fr">FR</button><button data-lang="en">EN</button><button data-lang="ar">AR</button></div>`;
  document.querySelector('header')?.insertAdjacentElement('afterend',nav);
  nav.querySelectorAll('[data-lang]').forEach(b=>{b.classList.toggle('active',b.dataset.lang===lang);b.addEventListener('click',()=>{setLanguage(b.dataset.lang);nav.remove();document.body.classList.remove('menu-open')})});
});

document.addEventListener('click',e=>{if(e.target.closest('.mobile-nav a')){document.body.classList.remove('menu-open');document.querySelector('.mobile-nav')?.remove()}});
setLanguage(localStorage.getItem('signatrix-language')||'en');

const motionTargets = [
  ['.hero-copy', 'motion-slide'],
  ['.hero-art', 'motion-pop'],
  ['.about-copy', 'motion-pop'],
  ['.service-card', 'motion-pop'],
  ['.work-item', 'motion-pop'],
  ['.contact h2', 'motion-slide'],
  ['.page-hero .kicker, .page-hero h1', 'motion-slide'],
  ['.page-hero .page-intro', 'motion-pop'],
  ['.expertise-item', 'motion-pop'],
  ['.detail-callout', 'motion-pop'],
  ['.filter-bar', 'motion-slide'],
  ['.portfolio-card', 'motion-pop'],
  ['.empty-state', 'motion-slide'],
  ['.case-hero .kicker, .case-hero h1, .case-hook', 'motion-slide'],
  ['.case-facts', 'motion-pop'],
  ['.case-narrative article', 'motion-pop'],
  ['.case-gallery', 'motion-pop'],
  ['.next-project', 'motion-slide'],
  ['.site-footer', 'motion-pop']
];

motionTargets.forEach(([selector, motionClass]) => {
  document.querySelectorAll(selector).forEach(element => {
    element.classList.add(motionClass);
  });
});

const motionObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.14 })
  : null;

document.querySelectorAll('.motion-pop, .motion-slide').forEach(element => {
  if (motionObserver) motionObserver.observe(element);
  else element.classList.add('is-visible');
});


const filterButtons=document.querySelectorAll('[data-filter]');
const portfolioCards=document.querySelectorAll('.portfolio-card');
const emptyState=document.querySelector('.empty-state');
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  filterButtons.forEach(item=>item.classList.toggle('active',item===button));
  let visible=0;
  portfolioCards.forEach(card=>{
    const matches=filter==='all'||card.dataset.category.split(' ').includes(filter);
    card.hidden=!matches;
    if(matches) visible++;
  });
  if(emptyState) emptyState.hidden=visible>0;
}));
