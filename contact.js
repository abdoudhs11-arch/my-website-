const translations={
en:{agency:"Agency",expertise:"Expertise",work:"Work",contact:"Contact",startProject:"Start a project",kicker:"NEW PROJECT / NEW SIGNATURE",heroTitle:"LET'S MAKE<br><em>CONTACT.</em>",heroIntro:"Have an idea, a space, a brand — or just the beginning of one? <strong>Let's turn it into something people remember.</strong>",contactPage:"CONTACT PAGE",talkToUs:"TALK TO US",infoTitle:"GOOD THINGS<br>START WITH<br><em>A MESSAGE.</em>",infoCopy:"Tell us what you're building, changing or imagining. We'll take it from there.",phone:"PHONE",social:"SOCIAL",projectBrief:"PROJECT BRIEF",name:"NAME",email:"EMAIL",company:"COMPANY",message:"MESSAGE",namePlaceholder:"Your name",emailPlaceholder:"you@company.com",companyPlaceholder:"Company / brand",messagePlaceholder:"Tell us about the project...",send:"SEND INQUIRY",formNote:"By sending this message, you are starting a conversation — not filling out a corporate form.",sent:"Thanks — your message is ready to send.",basedIn:"BASED IN ALGIERS / WORKING BEYOND BORDERS"},
fr:{agency:"Agence",expertise:"Expertise",work:"Réalisations",contact:"Contact",startProject:"Démarrer un projet",kicker:"NOUVEAU PROJET / NOUVELLE SIGNATURE",heroTitle:"CRÉONS LE<br><em>CONTACT.</em>",heroIntro:"Une idée, un espace, une marque — ou simplement le début de quelque chose ? <strong>Transformons-la en quelque chose dont on se souvient.</strong>",contactPage:"PAGE CONTACT",talkToUs:"PARLONS",infoTitle:"LES BONNES CHOSES<br>COMMENCENT PAR<br><em>UN MESSAGE.</em>",infoCopy:"Dites-nous ce que vous construisez, transformez ou imaginez. Nous nous occupons de la suite.",phone:"TÉLÉPHONE",social:"RÉSEAUX",projectBrief:"BRIEF PROJET",name:"NOM",email:"EMAIL",company:"ENTREPRISE",message:"MESSAGE",namePlaceholder:"Votre nom",emailPlaceholder:"vous@entreprise.com",companyPlaceholder:"Entreprise / marque",messagePlaceholder:"Parlez-nous du projet...",send:"ENVOYER LA DEMANDE",formNote:"En envoyant ce message, vous démarrez une conversation — pas un formulaire administratif.",sent:"Merci — votre message est prêt à être envoyé.",basedIn:"BASÉS À ALGER / AU-DELÀ DES FRONTIÈRES"},
ar:{agency:"الوكالة",expertise:"خدماتنا",work:"أعمالنا",contact:"تواصل معنا",startProject:"ابدأ مشروعًا",kicker:"مشروع جديد / بصمة جديدة",heroTitle:"لنبدأ<br><em>التواصل.</em>",heroIntro:"لديك فكرة، مساحة، علامة تجارية — أو مجرد بداية شيء جديد؟ <strong>لنحوّلها إلى شيء يتذكره الناس.</strong>",contactPage:"صفحة التواصل",talkToUs:"تحدث معنا",infoTitle:"الأشياء الرائعة<br>تبدأ دائمًا<br><em>برسالة.</em>",infoCopy:"أخبرنا بما تبنيه أو تغيّره أو تتخيله. سنتولى الباقي.",phone:"الهاتف",social:"التواصل الاجتماعي",projectBrief:"تفاصيل المشروع",name:"الاسم",email:"البريد الإلكتروني",company:"الشركة",message:"الرسالة",namePlaceholder:"اسمك",emailPlaceholder:"you@company.com",companyPlaceholder:"الشركة / العلامة",messagePlaceholder:"أخبرنا عن المشروع...",send:"إرسال الطلب",formNote:"بإرسال هذه الرسالة، أنت تبدأ محادثة — ولست بصدد ملء نموذج رسمي.",sent:"شكرًا — رسالتك جاهزة للإرسال.",basedIn:"مقرنا الجزائر / نعمل بلا حدود"}};

function setLanguage(lang){
 if(!translations[lang])lang="en";
 const t=translations[lang];
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[k]!==undefined)el.textContent=t[k]});
 document.querySelectorAll("[data-i18n-html]").forEach(el=>{const k=el.dataset.i18nHtml;if(t[k]!==undefined)el.innerHTML=t[k]});
 document.querySelectorAll("[data-placeholder]").forEach(el=>{const k=el.dataset.placeholder;if(t[k]!==undefined)el.placeholder=t[k]});
 document.querySelectorAll(".langs button").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
 localStorage.setItem("signatrix-language",lang);
}

document.querySelectorAll(".langs button").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));

const menu=document.querySelector(".menu");
menu?.addEventListener("click",()=>{
 document.body.classList.toggle("menu-open");
 const old=document.querySelector(".mobile-nav");
 if(old){old.remove();return}
 const lang=localStorage.getItem("signatrix-language")||"en",t=translations[lang];
 const nav=document.createElement("div");
 nav.className="mobile-nav";
 nav.innerHTML=`<a href="index.html#about">${t.agency}</a><a href="index.html#services">${t.expertise}</a><a href="index.html#work">${t.work}</a><a href="contact.html">${t.contact}</a><a class="mobile-project" href="contact.html#project">${t.startProject} ↗</a><div class="mobile-langs"><button data-lang="fr">FR</button><button data-lang="en">EN</button><button data-lang="ar">AR</button></div>`;
 document.querySelector("header").insertAdjacentElement("afterend",nav);
 nav.querySelectorAll("[data-lang]").forEach(b=>{b.classList.toggle("active",b.dataset.lang===lang);b.addEventListener("click",()=>{setLanguage(b.dataset.lang);nav.remove();document.body.classList.remove("menu-open")})});
});

document.addEventListener("click",e=>{if(e.target.closest(".mobile-nav a")){document.body.classList.remove("menu-open");document.querySelector(".mobile-nav")?.remove()}});

const budgetSelect=document.querySelector("#budgetSelect");
const customBudgetField=document.querySelector("#customBudgetField");
budgetSelect?.addEventListener("change",()=>{
  const isCustom=budgetSelect.value==="custom";
  if(customBudgetField){
    customBudgetField.hidden=false;
    requestAnimationFrame(()=>customBudgetField.classList.toggle("is-open",isCustom));
  }
  const customInput=customBudgetField?.querySelector("input");
  if(customInput) customInput.required=isCustom;
  if(!isCustom && customInput){customInput.required=false;customInput.value="";}
});

document.querySelector("#contactForm")?.addEventListener("submit",async e=>{
 e.preventDefault();
 const form=e.currentTarget,button=form.querySelector(".submit-btn"),status=document.querySelector("#formStatus"),lang=localStorage.getItem("signatrix-language")||"en",t=translations[lang];
 if(button?.disabled)return;
 button.disabled=true; status.textContent=lang==="fr"?"Envoi en cours…":lang==="ar"?"جارٍ الإرسال…":"Sending…";
 const payload=Object.fromEntries(new FormData(form).entries());
 payload.needs=[...form.querySelectorAll('input[name="needs"]:checked')].map(input=>input.value);
 try{
  const result=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
  const data=await result.json();
  if(!result.ok)throw new Error(data.error||"Request failed");
  status.textContent=lang==="fr"?"Merci — votre demande a bien été envoyée.":lang==="ar"?"شكرًا — تم إرسال طلبك بنجاح.":"Thanks — your inquiry has been sent.";
  form.reset(); if(customBudgetField){customBudgetField.hidden=true;customBudgetField.classList.remove("is-open");}
 }catch(error){
  status.textContent=lang==="fr"?"Échec de l’envoi. Vérifiez vos informations et réessayez.":lang==="ar"?"تعذر الإرسال. تحقق من معلوماتك وحاول مرة أخرى.":"We couldn’t send your inquiry. Please check your details and try again.";
  console.error("[contact] Submission failed:",error);
 }finally{button.disabled=false;}
});

setLanguage(localStorage.getItem("signatrix-language")||"en");
