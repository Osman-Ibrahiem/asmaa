/* ==========================================================
   asmaa — عيد ميلاد أسماء
   كل اللي محتاج تعديله موجود في بلوك CONFIG تحت 👇
   ========================================================== */

const CONFIG = {
  /* اسمها زي ما هيظهر في الرسايل */
  name: 'أسماء',

  /* التواريخ المهمة (سنة، شهر-1، يوم) — منها بتتحسب العدّادات والعدّ التنازلي */
  dates: {
    birth:     new Date(2002, 7, 6),   /* ٦ أغسطس ٢٠٠٢ — عيد ميلادها */
    firstMet:  new Date(2022, 4, 5),   /* ٥ مايو ٢٠٢٢ — أول مرة شفتها */
    fatiha:    new Date(2022, 4, 28),  /* ٢٨ مايو ٢٠٢٢ — قراية الفاتحة */
    engaged:   new Date(2022, 6, 11),  /* ١١ يوليو ٢٠٢٢ — الشبكة */
    katbKetab: new Date(2023, 5, 29),  /* ٢٩ يونيو ٢٠٢٣ — كتب الكتاب */
    wedding:   new Date(2023, 8, 9),   /* ٩ سبتمبر ٢٠٢٣ — الفرح */
  },

  /* جُمَل الهيرو اللي بتتكتب حرف حرف */
  typewriter: [
    'يا أحلى حاجة حصلت في حياتي 🌸',
    'يا نصيبي من أول نظرة سنة ٢٠٢٢ 👀',
    'يا أم زين.. يا أم زيزو ❤️',
    'كل سنة وأنتي ملكة قلبي 👑',
  ],

  /* الصور: حط الملفات في مجلد images/ وسيب الأسماء دي أو غيّرها */
  photos: [
    { file: 'photo1.jpeg',  caption: 'يا قمر 🌙' },
    { file: 'photo2.jpeg',  caption: 'ضحكتك اللي بتنوّر الدنيا' },
    { file: 'photo3.jpeg',  caption: 'لحظة مش بتتنسي' },
    { file: 'photo4.jpeg',  caption: 'أحلى الأوقات معاكي' },
    { file: 'photo5.jpeg',  caption: 'وأنتي على طبيعتك 🌸' },
    { file: 'photo6.jpeg',  caption: 'كل صورة معاكي ذكرى' },
    { file: 'photo7.jpeg',  caption: 'حبيبة قلبي ❤️' },
    { file: 'photo8.jpeg',  caption: 'الدنيا حلوة وأنتي فيها' },
    { file: 'photo9.jpeg',  caption: 'يا ستّ الكل 👑' },
    { file: 'photo10.jpeg', caption: 'عمري كله معاكي' },
    { file: 'photo11.jpeg', caption: 'أنتي وبس ✨' },
  ],

  /* حكايتنا بالتواريخ الحقيقية */
  timeline: [
    {
      date: '٦ أغسطس ٢٠٠٢',
      title: 'يوم ما نوّرتي الدنيا 👶',
      text: 'قبل ما أعرفك بسنين، كان ربنا بيجهّزلي أحلى نصيب في الدنيا.',
    },
    {
      date: '٥ مايو ٢٠٢٢',
      title: 'أول مرة شفتك 👀',
      text: 'رحت وأنا مش عارف إن اليوم ده هيقسم حياتي لنُصين: قبلك.. وبعدك.',
    },
    {
      date: '٢٨ مايو ٢٠٢٢',
      title: 'قرينا الفاتحة 🤲',
      text: 'ثلاث وعشرين يوم بس كانوا كفاية أعرف إنك أنتي، وإني مش عايز أستنى.',
    },
    {
      date: '١١ يوليو ٢٠٢٢',
      title: 'الشبكة 💍',
      text: 'أول مرة ألبّسك حاجة تقول للدنيا كلها إن البنت دي ليا.',
    },
    {
      date: '٢٩ يونيو ٢٠٢٣',
      title: 'كتب الكتاب 📜',
      text: 'وقّعنا على ورق، بس الحقيقة إحنا كنا متوقّعين من زمان في القلب.',
    },
    {
      date: '٩ سبتمبر ٢٠٢٣',
      title: 'الفرح 🎊',
      text: 'أحلى ليلة في عمري، ومن يومها والبيت مالوش طعم غير بيكي.',
    },
    {
      date: 'اللي جاي',
      title: 'باقي العمر ♾️',
      text: 'ووعد مني إن كل سنة جاية تكون أحلى من اللي فاتت.',
    },
  ],

  /* أسباب بحبك (الإيموچي + السبب) */
  reasons: [
    ['🌸', 'لأن قلبك أطيب قلب عرفته'],
    ['😂', 'لأنك بتضحكيني وأنا زعلان'],
    ['🍲', 'لأن أكلك بيداوي أي يوم وحش'],
    ['🤝', 'لأنك بتقفي جنبي من غير ما أطلب'],
    ['✨', 'لأن وجودك بيهدّي الدنيا كلها'],
    ['🏠', 'لأن البيت بيبقى بيت وأنتي فيه'],
    ['💪', 'لأنك أقوى من أي ظرف'],
    ['❤️', 'لأنك ببساطة.. أنتي'],
  ],

  /* الرسالة اللي بتتكتب حرف حرف */
  letter:
    'حبيبتي أسماء،\n' +
    'في ٥ مايو ٢٠٢٢ رحت أشوفك وأنا مش حاسس إن الزيارة دي هتغيّر عمري كله،\n' +
    'وبعدها بكام يوم قرينا الفاتحة، وأنا عمري ما ندمت على قرار زي ده.\n' +
    'من الشبكة، لكتب الكتاب، لليلة ٩ سبتمبر، ولحد النهاردة —\n' +
    'وأنا كل يوم بكتشف إني اخترت صح، وإن ربنا كان بيدبّرلي أحسن مما أتخيّل.\n' +
    'شكراً على صبرك، وعلى ضحكتك، وعلى إنك بتخليني أحس إني في بيتي يا أم زين.\n' +
    'ربنا يخليكي ليا ويحقق كل حاجة نفسك فيها.\n' +
    'كل سنة وأنتي طيبة يا أغلى الناس 🎂❤️',
};

/* ========================================================== */

const $ = (sel) => document.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 1) بتلات ووردة متساقطة على الكانفس ---------- */
(function petals() {
  const canvas = $('#petals');
  if (!canvas || reduceMotion) return;

  const ctx = canvas.getContext('2d');
  const colors = ['#ff9ec4', '#ffc9e0', '#f0c3ff', '#ffd9a0'];
  let items = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.min(46, Math.round(canvas.width / 26));
    items = Array.from({ length: count }, () => spawn(true));
  }

  function spawn(anywhere) {
    return {
      x: Math.random() * canvas.width,
      y: anywhere ? Math.random() * canvas.height : -20,
      r: 4 + Math.random() * 7,
      speed: 0.4 + Math.random() * 1.1,
      drift: -0.6 + Math.random() * 1.2,
      spin: Math.random() * Math.PI * 2,
      spinSpeed: -0.02 + Math.random() * 0.04,
      color: colors[(Math.random() * colors.length) | 0],
      alpha: 0.35 + Math.random() * 0.45,
    };
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < items.length; i++) {
      const p = items[i];
      p.y += p.speed;
      p.x += p.drift + Math.sin(p.y / 60) * 0.5;
      p.spin += p.spinSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.spin);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (p.y > canvas.height + 20) items[i] = spawn(false);
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  frame();
})();

/* ---------- 2) شاشة البداية: إطفاء الشمعة ---------- */
const cake = $('#cake');
const enterBtn = $('#enterBtn');
let candleOut = false;

function blowCandle() {
  if (candleOut) return;
  candleOut = true;
  cake.classList.add('out');
  $('#cakeHint').textContent = 'براڤو يا قمر 🎉 اتمني أمنية!';
  enterBtn.classList.add('ready');
  burst(0.5, 0.45, 60);
  if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
}

cake.addEventListener('click', blowCandle);

/* نفخ حقيقي عن طريق المايك (لو المستخدم سمح) */
$('#micNote').addEventListener('click', startMic);

async function startMic() {
  if (!navigator.mediaDevices?.getUserMedia) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ac.createAnalyser();
    analyser.fftSize = 512;
    ac.createMediaStreamSource(stream).connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);

    $('#micNote').textContent = 'المايك شغّال — انفخي 🌬️';

    (function listen() {
      analyser.getByteTimeDomainData(data);
      let peak = 0;
      for (const v of data) peak = Math.max(peak, Math.abs(v - 128));
      if (peak > 42) {
        blowCandle();
        stream.getTracks().forEach((t) => t.stop());
        ac.close();
        return;
      }
      if (!candleOut) requestAnimationFrame(listen);
    })();
  } catch {
    $('#micNote').textContent = 'مفيش مايك؟ عادي — دوسي على الشمعة 🕯️';
  }
}

/* ---------- 3) الدخول للمحتوى ---------- */
const music = $('#bgMusic');
const musicBtn = $('#musicBtn');

enterBtn.addEventListener('click', () => {
  rain(3500);

  music.volume = 0;
  music.play().then(() => {
    musicBtn.hidden = false;
    fadeIn(music, 0.55, 2500);
  }).catch(() => { musicBtn.hidden = false; musicBtn.classList.add('paused'); });

  $('#splash').classList.add('gone');
  setTimeout(() => {
    $('#splash').remove();
    $('#content').hidden = false;
    buildAll();
    countUp();
    startCountdown();
    revealCheck();
    typeHero();
  }, 700);
});

function fadeIn(audio, target, ms) {
  const step = 40;
  const inc = target / (ms / step);
  const id = setInterval(() => {
    audio.volume = Math.min(target, audio.volume + inc);
    if (audio.volume >= target) clearInterval(id);
  }, step);
}

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.classList.remove('paused');
  } else {
    music.pause();
    musicBtn.classList.add('paused');
  }
});

/* ---------- 4) بناء الأقسام ---------- */
function buildAll() {
  buildGallery();
  buildTimeline();
  buildReasons();
  typeLetter();
}

function buildGallery() {
  const wrap = $('#gallery');
  wrap.innerHTML = CONFIG.photos.map((p, i) => `
    <figure class="photo-card reveal" data-index="${i}">
      <img src="images/${encodeURIComponent(p.file)}" alt="${p.caption}" loading="lazy">
      <div class="slot">حطّي الصورة هنا<br><code>images/${p.file}</code></div>
      <p>${p.caption}</p>
    </figure>`).join('');

  wrap.querySelectorAll('.photo-card').forEach((card) => {
    const img = card.querySelector('img');
    img.addEventListener('error', () => card.classList.add('missing'));
    card.addEventListener('click', () => {
      if (!card.classList.contains('missing')) openLightbox(+card.dataset.index);
    });
  });
}

function buildTimeline() {
  $('#timeline').innerHTML = CONFIG.timeline.map((t) => `
    <div class="tl-item reveal">
      <div class="tl-card">
        <span>${t.date}</span>
        <h3>${t.title}</h3>
        <p>${t.text}</p>
      </div>
    </div>`).join('');
}

function buildReasons() {
  const wrap = $('#reasons');
  wrap.innerHTML = CONFIG.reasons.map(([emoji, text]) => `
    <button class="rcard reveal" type="button">
      <span class="rcard-in">
        <span class="rface rfront">${emoji}</span>
        <span class="rface rback">${text}</span>
      </span>
    </button>`).join('');

  wrap.querySelectorAll('.rcard').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      if (card.classList.contains('flipped')) {
        const r = card.getBoundingClientRect();
        burst((r.left + r.width / 2) / window.innerWidth, (r.top + r.height / 2) / window.innerHeight, 18);
      }
    });
  });
}

/* ---------- 5) الكتابة حرف حرف ---------- */
function typeHero() {
  const el = $('#typewriter');
  const lines = CONFIG.typewriter;
  let li = 0, ci = 0, deleting = false;

  (function tick() {
    const line = lines[li];
    el.textContent = line.slice(0, ci);

    if (!deleting && ci < line.length) { ci++; setTimeout(tick, 70); }
    else if (!deleting) { deleting = true; setTimeout(tick, 1800); }
    else if (ci > 0) { ci--; setTimeout(tick, 30); }
    else { deleting = false; li = (li + 1) % lines.length; setTimeout(tick, 300); }
  })();
}

function typeLetter() {
  const el = $('#letterText');
  const text = CONFIG.letter;
  let started = false;

  const io = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting || started) return;
    started = true;
    io.disconnect();
    let i = 0;
    (function tick() {
      el.textContent = text.slice(0, i);
      if (i++ < text.length) setTimeout(tick, 34);
    })();
  }, { threshold: 0.35 });

  io.observe(el);
}

/* ---------- 6) العدّادات ---------- */
const DAY = 86400000;
const daysSince = (d) => Math.max(0, Math.floor((Date.now() - d) / DAY));

/* عدد السنين اللي كمّلتها النهاردة */
function ageNow() {
  const b = CONFIG.dates.birth;
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  const before = now.getMonth() < b.getMonth()
    || (now.getMonth() === b.getMonth() && now.getDate() < b.getDate());
  return before ? age - 1 : age;
}

/* كام يوم فاضل على عيد الميلاد الجاي (٠ يعني النهاردة) */
function daysToBirthday() {
  const b = CONFIG.dates.birth;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let next = new Date(today.getFullYear(), b.getMonth(), b.getDate());
  if (next < today) next.setFullYear(next.getFullYear() + 1);
  return Math.round((next - today) / DAY);
}

function countUp() {
  /* رقم السنين بيزيد لوحده الساعة ١٢ بالليل — العدّاد الحيّ فوق بيغطّي الانتظار */
  const stats = [
    { value: ageNow(), label: 'سنة نوّرتي فيها الدنيا' },
    { value: daysSince(CONFIG.dates.firstMet), label: 'يوم من أول ما شفتك' },
    { value: daysSince(CONFIG.dates.wedding), label: 'يوم في بيتنا' },
    { text: '∞', label: 'حب مش بينتهي' },
  ];

  $('#stats').innerHTML = stats.map((s) => `
    <div class="stat reveal">
      <b>${s.text ?? '0'}</b>
      <small>${s.label}</small>
    </div>`).join('');

  $('#stats').querySelectorAll('.stat').forEach((el, i) => {
    if (stats[i].value !== undefined) animateNumber(el.querySelector('b'), stats[i].value);
  });
}

function animateNumber(el, target) {
  const dur = 1600;
  const t0 = performance.now();
  (function tick(now) {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString('ar-EG');
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ---------- 6.ب) العدّاد الحيّ ---------- */

/* أرقام عربية بصفر على الشمال: ٥ ← ٠٥ */
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
const ar = (n, pad = 2) => String(n).padStart(pad, '0').replace(/\d/g, (d) => AR_DIGITS[+d]);

/* بداية يوم عيد الميلاد (الساعة ١٢ بالليل) في سنة معيّنة */
const birthdayAt = (year) => {
  const b = CONFIG.dates.birth;
  return new Date(year, b.getMonth(), b.getDate(), 0, 0, 0, 0);
};

/*
  ٣ حالات:
  - قبل نص الليل        → عدّ تنازلي لحد ما تعيد
  - يوم عيد الميلاد نفسه → عدّ طالع من نص الليل
  - بعد ما اليوم يعدّي   → عدّ تنازلي لعيد الميلاد اللي بعده
*/
function birthdayClock() {
  const now = new Date();
  const thisYear = birthdayAt(now.getFullYear());
  const endOfDay = new Date(thisYear.getTime() + DAY);

  if (now < thisYear) return { mode: 'before', ms: thisYear - now };
  if (now < endOfDay) return { mode: 'today', ms: now - thisYear };
  return { mode: 'before', ms: birthdayAt(now.getFullYear() + 1) - now };
}

function startCountdown() {
  const label = $('#cdLabel');
  const units = $('#cdUnits');
  const box = $('#countdown');
  let wasBefore = birthdayClock().mode === 'before';

  function render() {
    const { mode, ms } = birthdayClock();

    /* لحظة ما الساعة تضرب ١٢: كونفيتي وتحديث رقم السنين */
    if (wasBefore && mode === 'today') {
      wasBefore = false;
      rain(6000);
      countUp();
      revealCheck();
    }

    const total = Math.floor(ms / 1000);
    const days = Math.floor(total / 86400);
    const hours = Math.floor(total / 3600) % 24;
    const mins = Math.floor(total / 60) % 60;
    const secs = total % 60;

    box.classList.toggle('done', mode === 'today');
    label.textContent = mode === 'today'
      ? 'عدّى على عيد ميلادك 🎉'
      : 'فاضل على عيد ميلادك 🎂';

    const cells = [
      ...(days > 0 ? [[ar(days, 1), 'يوم']] : []),   /* خانة الأيام بتظهر بس لو فاضل أكتر من يوم */
      [ar(hours), 'ساعة'],
      [ar(mins), 'دقيقة'],
      [ar(secs), 'ثانية'],
    ];

    units.innerHTML = cells.map(([v, l], i) => `
      <div class="cd-unit${i === cells.length - 1 ? ' sec' : ''}">
        <b>${v}</b><small>${l}</small>
      </div>`).join('');
  }

  render();
  setInterval(render, 1000);
}

/* ---------- 7) الظهور عند السكرول ---------- */
function revealCheck() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  const h = window.innerHeight;
  items.forEach((el, i) => {
    if (el.getBoundingClientRect().top < h - 70) {
      setTimeout(() => el.classList.add('visible'), Math.min(i * 70, 420));
    }
  });
}

window.addEventListener('scroll', revealCheck, { passive: true });
window.addEventListener('resize', revealCheck);

/* ---------- 8) اللايت بوكس ---------- */
const lb = $('#lightbox');
let lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;
  renderLightbox();
  lb.hidden = false;
  document.body.classList.add('locked');
}

function renderLightbox() {
  const p = CONFIG.photos[lbIndex];
  $('#lbImg').src = 'images/' + encodeURIComponent(p.file);
  $('#lbCap').textContent = p.caption;
}

function stepLightbox(d) {
  lbIndex = (lbIndex + d + CONFIG.photos.length) % CONFIG.photos.length;
  renderLightbox();
}

function closeLightbox() {
  lb.hidden = true;
  document.body.classList.remove('locked');
}

$('#lbClose').addEventListener('click', closeLightbox);
$('#lbNext').addEventListener('click', () => stepLightbox(1));
$('#lbPrev').addEventListener('click', () => stepLightbox(-1));
lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') stepLightbox(-1);
  if (e.key === 'ArrowLeft') stepLightbox(1);
});

/* ---------- 9) الهدية ---------- */
const giftBox = $('#giftBox');

giftBox.addEventListener('click', () => {
  if (giftBox.classList.contains('open')) return;
  giftBox.classList.add('open');
  $('#giftHint').textContent = 'كل سنة وأنتي طيبة 🎂';
  $('#wish').hidden = false;
  rain(4000);
  if (navigator.vibrate) navigator.vibrate([30, 50, 30, 50, 80]);
});

$('#againBtn').addEventListener('click', () => rain(3000));

/* ---------- 10) الكونفيتي ---------- */
const PALETTE = ['#ff5fa2', '#b5179e', '#ffb703', '#ffffff', '#c39bff'];

function burst(x, y, count) {
  if (typeof confetti !== 'function') return;
  confetti({ particleCount: count, spread: 70, startVelocity: 32, origin: { x, y }, colors: PALETTE, scalar: 0.9 });
}

function rain(duration) {
  if (typeof confetti !== 'function') return;
  const end = Date.now() + duration;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0, y: 0.7 }, colors: PALETTE });
    confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1, y: 0.7 }, colors: PALETTE });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
