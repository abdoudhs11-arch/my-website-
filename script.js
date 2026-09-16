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
    haveProject:'HAVE A PROJECT?', contactTitle:"LET'S MAKE<br>SOMETHING<br><em>IMPOSSIBLE TO IGNORE.</em>", startCircle:'START<br>A PROJECT'
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
    haveProject:'UN PROJET ?', contactTitle:'CRÉONS<br><span>QUELQUE CHOSE</span><br><em>D’IMPOSSIBLE À IGNORER.</em>', startCircle:'DÉMARRER<br>UN PROJET'
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
    haveProject:'لديك مشروع؟', contactTitle:'لنصنع<br>شيئًا<br><em>يستحيل تجاهله.</em>', startCircle:'ابدأ<br>مشروعًا'
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
