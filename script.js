/* Safran: reveals, hero parallax, sticky narrative, booking, AR/FR, theme. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var STR = {
    skip: { ar: 'تخطَّ إلى المحتوى', fr: 'Aller au contenu' },
    brandSub: { ar: 'سطيف · مشروع تجريبي', fr: 'Sétif · démo' },
    nav0: { ar: 'الحكاية', fr: 'Histoire' },
    nav1: { ar: 'التوقيع', fr: 'Signature' },
    nav2: { ar: 'القائمة', fr: 'Menu' },
    nav3: { ar: 'احجز', fr: 'Réserver' },
    navLabel: { ar: 'أقسام الصفحة', fr: 'Sections de la page' },
    themeToggle: { ar: 'تبديل المظهر', fr: 'Changer de thème' },
    book: { ar: 'احجز طاولة', fr: 'Réserver' },
    kicker: { ar: 'سطيف · منذ 2019 · نار الحطب', fr: 'Sétif · depuis 2019 · feu de bois' },
    heroTitle: { ar: 'النار أوّلاً، <em>والباقي يتبع</em>', fr: 'Le feu d’abord, <em>le reste suit</em>' },
    heroSub: { ar: 'مطعم الزعفران: أطباق جزائرية تُطهى بصبر وتُقدَّم بفخر. زعفران حر، لحم بلدي، وخبز من الفرن.', fr: 'Safran : plats algériens mijotés avec patience, servis avec fierté. Safran pur, viande locale, pain du four.' },
    ctaTable: { ar: 'احجز طاولة', fr: 'Réserver une table' },
    ctaMenu: { ar: 'اكتشف القائمة', fr: 'Découvrir le menu' },
    sKicker: { ar: 'حكايتنا', fr: 'Notre histoire' },
    sTitle: { ar: 'دارٌ صغيرة قرّرت <em>ألّا تستعجل شيئاً</em>', fr: 'Une petite maison qui a décidé de <em>ne jamais se presser</em>' },
    sBody1: { ar: 'بدأ الزعفران بطاولة واحدة قرب السوق: قدر نحاس، حطب بلوط، ووصفات الجدّة مكتوبة بخط اليد. اليوم صرنا قاعة كاملة — لكن القدر نفسه ما زال على النار.', fr: 'Safran a commencé par une table près du marché : marmite en cuivre, bois de chêne, recettes de grand-mère manuscrites. Aujourd’hui une vraie salle — mais la même marmite est toujours sur le feu.' },
    sBody2: { ar: 'لا صلصات جاهزة، لا لحوم مجمّدة، لا اختصارات. كل صحن يخرج من مطبخنا مرّ بثلاث ساعات على الأقل من النار الهادئة.', fr: 'Ni sauces prêtes, ni viandes congelées, ni raccourcis. Chaque plat a passé trois heures minimum sur feu doux.' },
    st0: { ar: 'ساعات نار هادئة لكل مرق', fr: 'heures de feu doux par sauce' },
    st1: { ar: 'تفويرات للكسكس، لا واحدة', fr: 'roulages du couscous, pas un' },
    st2: { ar: 'مكوّنات مجمّدة في المطبخ', fr: 'ingrédients congelés en cuisine' },
    capTable: { ar: 'مائدة الجمعة عندنا — تُفرش قبل الأذان بساعة', fr: 'Notre table du vendredi — dressée une heure avant l’appel' },
    dKicker: { ar: 'الطبق التوقيع', fr: 'Plat signature' },
    dTitle: { ar: 'كسكس الزعفران الملكي', fr: 'Couscous royal au safran' },
    dBody: { ar: 'سميد يُفوَّر مرتين على بخار المرق، لحم غنم بلدي، خضرة السوق، ورشّة زعفران حرّ في اللحظة الأخيرة. يُقدَّم في قدر النحاس نفسه.', fr: 'Semoule roulée deux fois à la vapeur du bouillon, agneau local, légumes du marché, pincée de safran pur à la dernière minute. Servi dans la marmite en cuivre.' },
    dPrice: { ar: '650 دج · يكفي شخصين', fr: '650 DA · pour deux' },
    b0t: { ar: 'الحطب', fr: 'Le bois' },
    b0b: { ar: 'بلوط الزيتون فقط — يعطي حرارة ثابتة ودخاناً خفيفاً يُنكّه اللحم من بعيد.', fr: 'Que du chêne — chaleur stable et fumée légère qui parfume la viande de loin.' },
    b1t: { ar: 'الصبر', fr: 'La patience' },
    b1b: { ar: 'المرق يُعقد ثلاث ساعات. من يستعجله يقدّم ماءً ملوّناً — ونحن لا نقدّم الماء.', fr: 'La sauce mijote trois heures. La presser, c’est servir de l’eau colorée — et nous ne servons pas d’eau.' },
    b2t: { ar: 'التقديم', fr: 'Le service' },
    b2b: { ar: 'الصحن يخرج يغلي، الأتاي يُصبّ من علوّ، والحلو يتبع مباشرة. الترتيب جزء من الوصفة.', fr: 'Le plat sort bouillant, le thé se verse de haut, le dessert suit aussitôt. L’ordre fait partie de la recette.' },
    mKicker: { ar: 'القائمة', fr: 'Le menu' },
    mTitle: { ar: 'مختصرة <em>عن قصد</em>', fr: 'Courte <em>à dessein</em>' },
    mBody: { ar: 'ستة أطباق فقط — ما نُتقنه فعلاً. القائمة الكاملة (شوربات، سلطات، عصائر) تجدها في المطعم.', fr: 'Six plats seulement — ce qu’on maîtrise vraiment. Le reste (soupes, salades, jus) vous attend sur place.' },
    d0m: { ar: 'كسكس الزعفران الملكي', fr: 'Couscous royal au safran' },
    d1m: { ar: 'طاجين الزيتون بالدجاج البلدي', fr: 'Tajine zitoune, poulet fermier' },
    d2m: { ar: 'مشوي مشكّل على الفحم', fr: 'Grillades mixtes au charbon' },
    d3m: { ar: 'شخشوخة بوسعادية', fr: 'Chakhchoukha de Boussaâda' },
    d4m: { ar: 'مقروط + بقلاوة + أتاي', fr: 'Makroud + baklawa + thé' },
    mNote: { ar: 'أسعار وأطباق تجريبية — تُضبط حسب المطعم الحقيقي.', fr: 'Plats et prix fictifs — ajustés selon le vrai restaurant.' },
    fKicker: { ar: 'لماذا الزعفران', fr: 'Pourquoi Safran' },
    fTitle: { ar: 'ثلاثة أشياء <em>لا نفعلها أبداً</em>', fr: 'Trois choses <em>jamais</em> faites' },
    f0t: { ar: 'لا تجميد', fr: 'Zéro congélation' },
    f0b: { ar: 'اللحم والخضرة من السوق صباحاً، كل صباح. ما بات ليلة في المجمّد لا يدخل القدر.', fr: 'Viande et légumes du marché chaque matin. Rien de congelé n’entre dans la marmite.' },
    f1t: { ar: 'لا صلصات جاهزة', fr: 'Zéro sauces prêtes' },
    f1b: { ar: 'كل مرق يُبنى من الصفر: بصل، طماطم، توابل تُطحن في الدار.', fr: 'Chaque sauce naît de zéro : oignons, tomates, épices moulues maison.' },
    f2t: { ar: 'لا استعجال', fr: 'Zéro précipitation' },
    f2b: { ar: 'إذا تأخر صحنك عشر دقائق، فذلك لأن النار قرّرت — وليس النادل.', fr: 'Si votre plat tarde de dix minutes, c’est le feu qui l’a décidé — pas le serveur.' },
    tsTag: { ar: 'شهادة تجريبية — تُستبدل بشهادة حقيقية', fr: 'Témoignage d’exemple — à remplacer' },
    tsBody: { ar: '"جيت على الغداء ورجعت بالعائلة في العشاء نفسه. الكسكس ذكّرني بدار جدّي — وهذا أغلى مدح نعرفه."', fr: '« Venu pour déjeuner, revenu le soir avec la famille. Le couscous m’a rappelé chez mon grand-père — notre plus beau compliment. »' },
    tsWho: { ar: 'زبون من سطيف', fr: 'Client de Sétif' },
    bkKicker: { ar: 'احجز', fr: 'Réserver' },
    bkTitle: { ar: 'طاولتك <em>تنتظرك</em>', fr: 'Votre table <em>vous attend</em>' },
    bkKicker: { ar: 'احجز', fr: 'Réserver' },
    bkTitle: { ar: 'طاولتك <em>تنتظرك</em>', fr: 'Votre table <em>vous attend</em>' },
    bkName: { ar: 'الاسم', fr: 'Nom' },
    bkNamePh: { ar: 'مثال: أمين بن علي', fr: 'Ex : Amine Ben Ali' },
    bkPhone: { ar: 'رقم الهاتف', fr: 'Téléphone' },
    bkGuests: { ar: 'عدد الضيوف', fr: 'Convives' },
    gBig: { ar: 'مناسبة (+8)', fr: 'Événement (+8)' },
    bkDay: { ar: 'اختر اليوم', fr: 'Choisissez le jour' },
    bkTime: { ar: 'اختر الفترة', fr: 'Choisissez le créneau' },
    bkOrCall: { ar: 'أو اتصل مباشرة:', fr: 'Ou appelez directement :' },
    foot: { ar: 'مطعم الزعفران — مشروع تجريبي · صُنع بواسطة Ibdaa Creations', fr: 'Restaurant Safran — maquette de démonstration · par Ibdaa Creations' },
    altFire: { ar: 'لحم على نار الحطب — صورة توضيحية', fr: 'Viande sur feu de bois — photo d’illustration' },
    altTable: { ar: 'مائدة جزائرية عامرة — صورة توضيحية', fr: 'Table algérienne garnie — photo d’illustration' },
    altFood: { ar: 'طبق جزائري تقليدي — صورة توضيحية', fr: 'Plat traditionnel algérien — photo d’illustration' },
    altDessert: { ar: 'حلو جزائري — صورة توضيحية', fr: 'Dessert algérien — photo d’illustration' },
    altTea: { ar: 'أتاي يُصب من علو — صورة توضيحية', fr: 'Thé versé de haut — photo d’illustration' },
    days: { ar: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'], fr: ['Samedi', 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'] },
    times: { ar: ['غداء · 12–15', 'عشاء · 19–23'], fr: ['Déjeuner · 12–15', 'Dîner · 19–23'] },
    errNeed: { ar: 'يرجى إدخال الاسم ورقم هاتف صحيح (05/06/07 + 8 أرقام).', fr: 'Veuillez saisir nom et téléphone valides (05/06/07 + 8 chiffres).' },
    goPrefix: { ar: 'تأكيد', fr: 'Confirmer' },
    bookMsg: {
      ar: function (n, p, g, d, t) { return 'حجز طاولة: ' + n + '، ' + p + '، ' + g + '، ' + d + ' ' + t; },
      fr: function (n, p, g, d, t) { return 'Réservation table : ' + n + ', ' + p + ', ' + g + ', ' + d + ' ' + t; }
    }
  };
  var lang = 'ar';
  try { lang = localStorage.getItem('safran-lang') || 'ar'; } catch (e) {}
  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n'), v = STR[k] && STR[k][lang];
      if (v == null) return;
      if (k === 'bkNamePh') { el.placeholder = v; return; }
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) { el.setAttribute(attr, v); return; }
      el.innerHTML = v;
    });
    var di = cur('bookDays'), ti = cur('bookTimes');
    var db = document.getElementById('bookDays'), tb = document.getElementById('bookTimes');
    if (db) db.querySelectorAll('button').forEach(function (b, i) { b.textContent = STR.days[lang][i]; b.dataset.i = i; b.classList.toggle('is-sel', i == di); });
    if (tb) tb.querySelectorAll('button').forEach(function (b, i) { b.textContent = STR.times[lang][i]; b.dataset.i = i; b.classList.toggle('is-sel', i == ti); });
    var t = document.getElementById('langToggle');
    if (t) t.textContent = lang === 'ar' ? 'FR' : 'عربي';
    refreshBooking();
    try { localStorage.setItem('safran-lang', lang); } catch (e) {}
  }
  document.getElementById('langToggle').addEventListener('click', function () { lang = lang === 'ar' ? 'fr' : 'ar'; applyLang(); });

  var themeBtn = document.getElementById('themeToggle');
  var theme = 'system';
  try { theme = localStorage.getItem('safran-theme') || 'system'; } catch (e) {}
  function applyTheme() {
    if (theme === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', theme);
    var icon = themeBtn && themeBtn.querySelector('i');
    if (icon) icon.className = 'ph-light ' + (theme === 'dark' ? 'ph-sun' : theme === 'light' ? 'ph-moon' : 'ph-monitor');
    try { localStorage.setItem('safran-theme', theme); } catch (e) {}
  }
  themeBtn.addEventListener('click', function () {
    theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
    applyTheme();
  });
  applyTheme();

  /* Reveals */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

  /* Hero parallax + progress */
  var heroBg = document.querySelector('.hero__bg');
  var progress = document.getElementById('progress');
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var max = document.body.scrollHeight - window.innerHeight;
    if (progress) progress.style.setProperty('--p', max > 0 ? (y / max).toFixed(3) : 0);
    if (heroBg && !reduce && y < window.innerHeight * 1.2) {
      heroBg.style.transform = 'translateY(' + (y * 0.28).toFixed(1) + 'px)';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });

  /* Narrative image swap */
  var narrImg = document.getElementById('narrImg');
  var narrMap = { fire: 'assets/fire-sm.webp', tea: 'assets/tea-sm.webp', dessert: 'assets/still_dessert-sm.webp' };
  var bio = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      var beat = en.target.closest('.beat');
      if (!beat) return;
      beat.classList.toggle('lit', en.isIntersecting);
      if (en.isIntersecting && narrImg) {
        var src = narrMap[beat.dataset.img];
        if (src && narrImg.getAttribute('src') !== src) {
          narrImg.style.opacity = 0;
          setTimeout(function () { narrImg.src = src; narrImg.style.opacity = 1; }, 220);
        }
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.narr__beats .beat').forEach(function (b) { bio.observe(b); });

  /* Booking (same proven pattern) */
  function cur(id) {
    var b = document.querySelector('#' + id + ' button.is-sel');
    return b ? b.dataset.i : 0;
  }
  var go = document.getElementById('bookGo');
  var goText = document.getElementById('bookGoText');
  var errBox = document.getElementById('bookErr');
  var nameI = document.getElementById('bkName');
  var phoneI = document.getElementById('bkPhone');
  var guestsI = document.getElementById('bkGuests');
  function valid() {
    return nameI && nameI.value.trim().length >= 3 &&
           phoneI && /^0[567][0-9]{8}$/.test(phoneI.value.replace(/[\s-]/g, ''));
  }
  function refreshBooking() {
    var dayShort = STR.days[lang][cur('bookDays')];
    var timeFull = STR.times[lang][cur('bookTimes')];
    var timeShort = timeFull.split(' ·')[0];
    var g = guestsI ? guestsI.options[guestsI.selectedIndex].text : '';
    var n = nameI && nameI.value.trim() ? nameI.value.trim() : '…';
    var p = phoneI && phoneI.value.trim() ? phoneI.value.trim() : '…';
    var msg = STR.bookMsg[lang](n, p, g, dayShort, timeFull);
    if (go) go.href = 'https://wa.me/213000000000?text=' + encodeURIComponent(msg);
    if (goText) goText.textContent = STR.goPrefix[lang] + ': ' + dayShort + ' ' + timeShort;
  }
  function pills(id) {
    var box = document.getElementById(id);
    if (!box) return;
    box.querySelectorAll('button').forEach(function (b, i) {
      b.dataset.i = i;
      b.setAttribute('aria-pressed', b.classList.contains('is-sel') ? 'true' : 'false');
    });
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      box.querySelectorAll('button').forEach(function (x) { x.classList.remove('is-sel'); x.setAttribute('aria-pressed', 'false'); });
      b.classList.add('is-sel');
      b.setAttribute('aria-pressed', 'true');
      if (errBox) errBox.hidden = true;
      refreshBooking();
    });
  }
  pills('bookDays');
  pills('bookTimes');
  ['bkName', 'bkPhone'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', function () { if (errBox) errBox.hidden = true; refreshBooking(); });
  });
  if (guestsI) guestsI.addEventListener('change', refreshBooking);
  if (go) go.addEventListener('click', function (e) {
    if (!valid()) {
      e.preventDefault();
      if (errBox) { errBox.textContent = STR.errNeed[lang]; errBox.hidden = false; }
      (nameI && nameI.value.trim().length < 3 ? nameI : phoneI).focus();
    }
  });

  applyLang();
  onScroll();
})();
