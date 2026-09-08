// Dictionnaire de traduction FR / AR.
// Chaque clé correspond à un attribut data-i18n placé sur un élément du HTML.
const translations = {
  fr: {
    nav_projet: "Le projet",
    nav_plans: "Plans & prix",
    nav_chantier: "Chantier",
    nav_financement: "Financement",
    nav_contact: "Contact",
    nav_cta: "Nous contacter",

    preview_banner_text: "Ce site est en cours de préparation — le contenu peut encore changer.",

    hero_kicker: "GREEL Promotion Immobilière · Azazga",
    hero_title: "Résidence Yacine Azazga",
    hero_lede: "Une nouvelle adresse résidentielle au cœur d'Azazga : un projet moderne, sécurisé et pensé pour le confort des familles.",
    hero_cta1: "Nous contacter",
    hero_cta2: "Voir les plans",
    hero_stat1_num: "5",
    hero_stat1_lbl: "bâtiments",
    hero_stat2_num: "82–126 m²",
    hero_stat2_lbl: "F3 et F4",
    hero_stat3_num: "1%",
    hero_stat3_lbl: "crédit bancaire bonifié",

    projet_tag: "Le projet",
    projet_title: "Une résidence pensée pour le confort",
    projet_p1: "Portée par le promoteur M. Elaioune Kamel, la résidence GREEL se compose de 5 bâtiments proposant des appartements F3 et F4, avec des superficies allant de 82 à 126 m².",
    projet_p2: "Pensée autour du confort, de la qualité et de la fonctionnalité, la résidence bénéficie d'une architecture moderne, de prestations soignées et d'un environnement agréable. Chaque appartement dispose notamment d'un balcon, pour profiter d'un espace extérieur et d'une vue dégagée.",
    projet_stat1_num: "5",
    projet_stat1_lbl: "bâtiments au total",
    projet_stat2_num: "F3 / F4",
    projet_stat2_lbl: "types d'appartements",
    projet_stat3_num: "82–126 m²",
    projet_stat3_lbl: "superficies disponibles",

    atouts_tag: "Atouts",
    atouts_title: "Un cadre de vie sécurisé et agréable",
    atouts_desc: "La résidence met l'accent sur la qualité de vie de ses résidents grâce à plusieurs équipements et atouts.",
    atout1_h: "Résidence sécurisée",
    atout1_p: "Accès contrôlé et tranquillité pour toute la famille.",
    atout2_h: "Ascenseurs",
    atout2_p: "Un accès facile à tous les étages.",
    atout3_h: "Parking",
    atout3_p: "Des places de stationnement dédiées aux résidents.",
    atout4_h: "Espaces verts",
    atout4_p: "Des espaces extérieurs aménagés et agréables.",
    atout5_h: "Matériaux de qualité",
    atout5_p: "Une construction soignée avec des matériaux supérieurs.",
    atout6_h: "Proche des commodités",
    atout6_p: "Écoles, commerces, transports et gare routière d'Azazga à proximité.",

    gallery_tag: "Galerie",
    gallery_title: "Le projet en images",
    gallery_desc: "Rendus architecturaux de la résidence et vue d'ensemble du complexe.",

    plans_tag: "Plans & prix",
    plans_title: "Résidence Yacine Azazga",
    plans_desc: "Appartements disponibles au 4ème étage : 88 m² / 86 m² / 85 m². D'autres superficies sont disponibles selon les étages, de 82 à 126 m².",
    plan_row1_l: "F3",
    plan_row1_r: "82 – 90 m²",
    plan_row2_l: "F4",
    plan_row2_r: "88 – 126 m²",
    plan_row3_l: "Vente",
    plan_row3_r: "Sur plans",

    fin_title: "Financement facilité",
    fin_desc: "La commercialisation est réalisée sur plans, avec la possibilité de bénéficier d'un crédit bancaire bonifié, sous réserve des conditions d'éligibilité et d'acceptation par l'établissement bancaire.",
    fin_rate: "1%",
    fin_rate_lbl: "crédit bancaire bonifié",

    chantier_tag: "Chantier",
    chantier_title: "Le chantier en cours",
    chantier_desc: "Suivez l'avancement des travaux de la résidence à Azazga.",

    contact_title: "Un projet à découvrir ?",
    contact_desc: "Contactez GREEL Promotion Immobilière pour connaître les appartements disponibles, les plans, les prix et les modalités d'acquisition.",
    contact_addr_lbl: "Adresse",
    contact_addr_val: "Azazga, Wilaya de Tizi Ouzou, Algérie",
    contact_tel_lbl: "Téléphone",
    contact_tel_val: "+213 560 909 530 /+213 550  248 533  ",
    contact_mail_lbl: "E-mail",
    contact_mail_val: "greelpromotion2025@gmail.com",
    whatsapp_btn: "Contacter sur WhatsApp",
    form_name: "Nom",
    form_name_ph: "Votre nom",
    form_phone: "Téléphone",
    form_phone_ph: "Votre numéro",
    form_msg: "Votre message",
    form_msg_ph: "Type d'appartement recherché, budget...",
    form_submit: "Envoyer la demande",

    footer_rights: "© 2026 GREEL Promotion Immobilière — Azazga",
    footer_note: "Résidence Yacine Azazga",

    tab_yacine: "Résidence Yacine",
    tab_rayane: "Résidence Rayane",

    r_kicker: "GREEL Promotion Immobilière · Nouveau projet",
    r_title: "Résidence Rayane",
    r_lede: "Un nouvel ensemble de 3 bâtiments actuellement en projet. Plans, disponibilités et prix seront communiqués prochainement.",
    r_cta: "Être informé du lancement",
    r_stat1_num: "3",
    r_stat1_lbl: "bâtiments",
    r_stat2_num: "—",
    r_stat2_lbl: "statut : en projet",
    r_stat3_num: "1%",
    r_stat3_lbl: "crédit bancaire bonifié",
    r_projet_tag: "Le projet",
    r_projet_title: "Un nouvel ensemble de 3 bâtiments",
    r_projet_desc: "La Résidence Rayane est le nouveau projet porté par GREEL Promotion Immobilière. Les plans, surfaces et modalités de commercialisation seront publiés dès leur finalisation — contactez-nous pour être informé en priorité.",
    r_video_label: "Vidéo — présentation 3D",
    r_gallery_tag: "Galerie",
    r_gallery_title: "Aperçu des finitions",
    r_gallery_desc: "Rendus 3D des intérieurs et du parking souterrain de la Résidence Rayane.",
  },

  ar: {
    nav_projet: "المشروع",
    nav_plans: "المخططات والأسعار",
    nav_chantier: "الورشة",
    nav_financement: "التمويل",
    nav_contact: "اتصل بنا",
    nav_cta: "اتصل بنا",

    preview_banner_text: "هذا الموقع قيد التحضير — قد يتغير المحتوى لاحقًا.",

    hero_kicker: "GREEL للترقية العقارية · عزازقة",
    hero_title: "إقامة ياسين عزازقة",
    hero_lede: "عنوان سكني جديد في قلب عزازقة: مشروع عصري وآمن، مصمم لراحة العائلات.",
    hero_cta1: "اتصل بنا",
    hero_cta2: "شاهد المخططات",
    hero_stat1_num: "5",
    hero_stat1_lbl: "عمارات",
    hero_stat2_num: "126–82 م²",
    hero_stat2_lbl: "شقق من نوع F3 و F4",
    hero_stat3_num: "%1",
    hero_stat3_lbl: "قرض بنكي مدعوم",

    projet_tag: "المشروع",
    projet_title: "إقامة مصممة من أجل الراحة",
    projet_p1: "بإشراف المروّج العقاري السيد العيون كمال، تتكون إقامة GREEL من 5 عمارات تضم شققًا من نوع F3 و F4، بمساحات تتراوح بين 82 و126 م².",
    projet_p2: "صُممت هذه الإقامة حول الراحة والجودة والوظيفية، وتتميز بهندسة معمارية عصرية وتشطيبات معتنى بها وبيئة مريحة. تتوفر كل شقة على شرفة للاستمتاع بمساحة خارجية وإطلالة مفتوحة.",
    projet_stat1_num: "5",
    projet_stat1_lbl: "عمارات إجمالاً",
    projet_stat2_num: "F3 / F4",
    projet_stat2_lbl: "أنواع الشقق",
    projet_stat3_num: "126–82 م²",
    projet_stat3_lbl: "المساحات المتوفرة",

    atouts_tag: "المميزات",
    atouts_title: "إطار عيش آمن ومريح",
    atouts_desc: "تُعنى الإقامة بجودة حياة سكانها من خلال عدة تجهيزات ومزايا.",
    atout1_h: "إقامة آمنة",
    atout1_p: "دخول مُراقب وطمأنينة لكل العائلة.",
    atout2_h: "مصاعد",
    atout2_p: "وصول سهل إلى جميع الطوابق.",
    atout3_h: "موقف سيارات",
    atout3_p: "أماكن ركن مخصصة للسكان.",
    atout4_h: "مساحات خضراء",
    atout4_p: "فضاءات خارجية مهيأة ومريحة.",
    atout5_h: "مواد ذات جودة عالية",
    atout5_p: "بناء معتنى به بمواد ذات جودة عالية.",
    atout6_h: "قرب من المرافق",
    atout6_p: "مدارس ومحلات تجارية ومواصلات ومحطة النقل بعزازقة على مقربة.",

    gallery_tag: "معرض الصور",
    gallery_title: "المشروع بالصور",
    gallery_desc: "تصاميم معمارية للإقامة ونظرة شاملة على المركب السكني.",

    plans_tag: "المخططات والأسعار",
    plans_title: "إقامة ياسين عزازقة",
    plans_desc: "شقق متوفرة في الطابق الرابع: 88 م² / 86 م² / 85 م². مساحات أخرى متوفرة حسب الطوابق، من 82 إلى 126 م².",
    plan_row1_l: "F3",
    plan_row1_r: "90 – 82 م²",
    plan_row2_l: "F4",
    plan_row2_r: "126 – 88 م²",
    plan_row3_l: "البيع",
    plan_row3_r: "على المخطط",

    fin_title: "تمويل ميسّر",
    fin_desc: "يتم التسويق على أساس المخططات، مع إمكانية الاستفادة من قرض بنكي مدعوم، وذلك حسب شروط الأهلية وموافقة المؤسسة البنكية.",
    fin_rate: "%1",
    fin_rate_lbl: "قرض بنكي مدعوم",

    chantier_tag: "الورشة",
    chantier_title: "الورشة قيد الإنجاز",
    chantier_desc: "تابعوا سير الأشغال في الإقامة بعزازقة.",

    contact_title: "مشروع يستحق الاكتشاف؟",
    contact_desc: "اتصلوا بـ GREEL للترقية العقارية لمعرفة الشقق المتوفرة والمخططات والأسعار وطرق الاقتناء.",
    contact_addr_lbl: "العنوان",
    contact_addr_val: "عزازقة، ولاية تيزي وزو، الجزائر",
    contact_tel_lbl: "الهاتف",
    contact_tel_val: "213 560 909 530+ / 213 550 248 533+",
    contact_mail_lbl: "البريد الإلكتروني",
    contact_mail_val: "greelpromotion2025@gmail.com",
    whatsapp_btn: "تواصل عبر واتساب",
    form_name: "الاسم",
    form_name_ph: "اسمكم",
    form_phone: "الهاتف",
    form_phone_ph: "رقم هاتفكم",
    form_msg: "رسالتكم",
    form_msg_ph: "نوع الشقة المطلوبة، الميزانية...",
    form_submit: "إرسال الطلب",

    footer_rights: "© 2026 GREEL للترقية العقارية — عزازقة",
    footer_note: "إقامة ياسين عزازقة",

    tab_yacine: "إقامة ياسين",
    tab_rayane: "إقامة راياني",

    r_kicker: "GREEL للترقية العقارية · مشروع جديد",
    r_title: "إقامة راياني",
    r_lede: "مجمع جديد يضم 3 عمارات، حاليًا قيد الدراسة. سيتم الإعلان عن المخططات والتوفر والأسعار قريبًا.",
    r_cta: "كن أول من يعلم بالانطلاق",
    r_stat1_num: "3",
    r_stat1_lbl: "عمارات",
    r_stat2_num: "—",
    r_stat2_lbl: "الحالة: قيد الدراسة",
    r_stat3_num: "%1",
    r_stat3_lbl: "قرض بنكي مدعوم",
    r_projet_tag: "المشروع",
    r_projet_title: "مجمع جديد من 3 عمارات",
    r_projet_desc: "إقامة راياني هي المشروع الجديد الذي تحمله GREEL للترقية العقارية. سيتم نشر المخططات والمساحات وطرق التسويق فور الانتهاء منها — تواصلوا معنا لتكونوا أول من يُعلم.",
    r_video_label: "فيديو — عرض ثلاثي الأبعاد",
    r_gallery_tag: "معرض الصور",
    r_gallery_title: "لمحة عن التشطيبات",
    r_gallery_desc: "تصاميم ثلاثية الأبعاد للديكور الداخلي والمرآب تحت الأرض لإقامة راياني.",
  }
};

function applyLanguage(lang){
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined){
      if(el.hasAttribute("data-i18n-placeholder")){
        el.setAttribute("placeholder", dict[key]);
      } else {
        el.textContent = dict[key];
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if(dict[key] !== undefined){
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.documentElement.setAttribute("lang", lang);
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("greel-lang", lang);
}

function activateProject(project){
  document.querySelectorAll(".project-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === "panel-" + project);
  });
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-project") === project);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("preview-banner");
  const closeBtn = document.getElementById("preview-banner-close");
  if(banner && closeBtn){
    if(sessionStorage.getItem("greel-banner-closed") === "1"){
      banner.classList.add("hidden");
    }
    closeBtn.addEventListener("click", () => {
      banner.classList.add("hidden");
      sessionStorage.setItem("greel-banner-closed", "1");
    });
  }

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
  });

  const saved = localStorage.getItem("greel-lang");
  applyLanguage(saved === "ar" ? "ar" : "fr");

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => activateProject(btn.getAttribute("data-project")));
  });

  // Les liens du menu (Le projet, Plans, Chantier...) pointent vers des
  // sections de la Résidence Yacine : on bascule sur cet onglet avant de défiler.
  const yacineAnchors = ["#projet", "#plans", "#chantier", "#galerie"];
  document.querySelectorAll('.navlinks a').forEach(link => {
   const href = link.getAttribute("href");

if (yacineAnchors.includes(href)) {
    link.addEventListener("click", () => activateProject("yacine"));
}
  });

  const form = document.getElementById("contact-form");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = document.documentElement.getAttribute("lang") || "fr";
      alert(lang === "ar" ? "شكرًا، سيتم التواصل معكم قريبًا." : "Merci, nous reviendrons vers vous rapidement.");
      form.reset();
    });
  }
});
