// Netify Studio — ponašanje sajta (zaglavlje, meni, animacije, video, brojači, forma, kursor)
(function () {
  var en = document.documentElement.lang === 'en';
  var T = en
    ? { open: 'Open menu', close: 'Close menu', play: 'Play video', pause: 'Pause video', full: 'Show video full screen', exit: 'Close full screen view' }
    : { open: 'Otvori meni', close: 'Zatvori meni', play: 'Pusti video', pause: 'Pauziraj video', full: 'Prikaži video preko celog ekrana', exit: 'Zatvori prikaz preko celog ekrana' };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.querySelector('.ns');
  if (root && !reduce) root.classList.add('motion');
  var show = function (name, on) { document.querySelectorAll('[data-if="' + name + '"]').forEach(function (e) { e.hidden = !on; }); };
  var big = false, open = false, last = 0, hid = false;

  // zaglavlje + meni
  var h = document.querySelector('header'), m = document.getElementById('mnav'), b = document.querySelector('.menu-btn');
  function upd() {
    var y = window.scrollY || 0;
    if (y < 120) hid = false; else if (y > last + 6) hid = true; else if (y < last - 6) hid = false;
    if (Math.abs(y - last) > 6 || y < 120) last = y;
    if (h) h.className = 'hdr' + (y > 40 && !open ? ' on' : '') + (hid && !open ? ' hide' : '') + (open ? ' menu-open' : '');
    if (m) m.className = 'mnav' + (open ? ' open' : '');
    if (b) { b.setAttribute('aria-expanded', open ? 'true' : 'false'); b.setAttribute('aria-label', open ? T.close : T.open); }
    document.documentElement.style.overflow = (open || big) ? 'hidden' : '';
  }
  addEventListener('scroll', upd, { passive: true });
  addEventListener('resize', function () { if (innerWidth >= 1024 && open) { open = false; upd(); } }, { passive: true });
  if (b) b.addEventListener('click', function () { open = !open; upd(); });
  if (m) m.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { open = false; upd(); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) { open = false; upd(); if (b) b.focus(); } });

  // pojavljivanje pri skrolu
  var els = document.querySelectorAll('.rv, .rvi');
  if (!('IntersectionObserver' in window)) els.forEach(function (e) { e.classList.add('is-in'); });
  else {
    var io = new IntersectionObserver(function (list) {
      list.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  // brojači
  var cs = [].slice.call(document.querySelectorAll('[data-count]'));
  if (cs.length && !reduce && 'IntersectionObserver' in window) {
    cs.forEach(function (e) { e.textContent = '0'; });
    var cio = new IntersectionObserver(function (list) {
      list.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        e.target.querySelectorAll('[data-count]').forEach(function (el, i) {
          var t = parseInt(el.getAttribute('data-count'), 10) || 0;
          setTimeout(function () {
            var t0 = performance.now();
            (function s(n) { var k = Math.max(0, Math.min(1, (n - t0) / 1600)); el.textContent = String(Math.round(t * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(s); })(t0);
          }, i * 120);
        });
      });
    }, { threshold: 0.5 });
    var g = [];
    cs.forEach(function (e) { var p = e.closest('dl') || e.parentElement; if (g.indexOf(p) < 0) { g.push(p); cio.observe(p); } });
  }

  // video u uvodu
  document.querySelectorAll('video[data-hero-video]').forEach(function (v) {
    v.muted = true;
    if (reduce) v.pause(); else { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  });

  // video projekta
  var v = document.querySelector('video[data-proj-video]');
  if (v) {
    var fig = v.closest('.pj-frame'), btns = fig.querySelectorAll('.pj-btn'), bp = btns[0], bf = btns[1], userPaused = false;
    v.muted = true;
    var state = function () { var pl = !v.paused; show('projPlaying', pl); show('projPaused', !pl); bp.setAttribute('aria-label', pl ? T.pause : T.play); };
    v.addEventListener('play', state); v.addEventListener('pause', state);
    var inView = function () { var r = v.getBoundingClientRect(); return r.bottom > innerHeight * 0.15 && r.top < innerHeight * 0.85; };
    var kick = function () {
      if (userPaused) return;
      if (inView()) { if (v.paused) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } }
      else if (!v.paused) v.pause();
    };
    addEventListener('scroll', kick, { passive: true }); addEventListener('resize', kick, { passive: true });
    v.addEventListener('canplay', kick);
    bp.addEventListener('click', function () {
      if (v.paused) { userPaused = false; var p = v.play(); if (p && p.catch) p.catch(function () {}); } else { userPaused = true; v.pause(); }
    });
    var fsEl = function () { return document.fullscreenElement || document.webkitFullscreenElement; };
    var setBig = function (on) {
      big = on;
      fig.classList.toggle('pj-big', on && !fsEl());
      show('projBig', on); show('projSmall', !on);
      bf.setAttribute('aria-label', on ? T.exit : T.full);
      upd();
    };
    var fsChange = function () { setBig(!!fsEl()); };
    document.addEventListener('fullscreenchange', fsChange); document.addEventListener('webkitfullscreenchange', fsChange);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && big && !fsEl()) setBig(false); });
    bf.addEventListener('click', function () {
      if (fsEl()) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
      if (big) { setBig(false); return; }
      var ok = document.fullscreenEnabled || document.webkitFullscreenEnabled;
      if (ok && fig.requestFullscreen) { var p = fig.requestFullscreen(); if (p && p.catch) p.catch(function () { setBig(true); }); }
      else if (ok && fig.webkitRequestFullscreen) fig.webkitRequestFullscreen();
      else if (v.webkitEnterFullscreen && /iP(hone|od)/.test(navigator.userAgent)) { try { v.webkitEnterFullscreen(); } catch (e) { setBig(true); } }
      else setBig(true);
    });
    show('projBig', false); show('projSmall', true); state(); kick();
  }

  // forma: slanje se uključuje na hostingu, do tada poruka sa telefonom
  show('formSent', false);
  var f = document.getElementById('forma');
  if (f) f.addEventListener('submit', function (e) { e.preventDefault(); show('formSent', true); });
  // kursor: tačka prati miš, prsten kasni; samo uređaji sa mišem; polja forme zadržavaju običan kursor
  (function () {
    var mq = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq || !mq.matches || !document.body) return;
    var html = document.documentElement;
    var dot = document.createElement('div'); dot.className = 'nsc-dot'; dot.setAttribute('aria-hidden', 'true');
    var ring = document.createElement('div'); ring.className = 'nsc-ring'; ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ring); document.body.appendChild(dot);
    var LINK = 'a[href], button, [role="button"], summary';
    var TEXT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]), textarea, select';
    var mx = 0, my = 0, rx = 0, ry = 0, raf = 0, seen = false;
    function place(el, x, y) { el.style.translate = x + 'px ' + y + 'px'; }
    function tick() {
      raf = 0; rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      if (Math.abs(mx - rx) < 0.1 && Math.abs(my - ry) < 0.1) { rx = mx; ry = my; } else raf = requestAnimationFrame(tick);
      place(ring, rx, ry);
    }
    function fsOn() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY; place(dot, mx, my);
      if (!seen || reduce) { rx = mx; ry = my; place(ring, rx, ry); seen = true; } else if (!raf) raf = requestAnimationFrame(tick);
      var t = e.target && e.target.closest ? e.target : null;
      var tx = !!(t && t.closest(TEXT));
      html.classList.toggle('nsc-tx', tx);
      html.classList.toggle('nsc-lk', !tx && !!(t && t.closest(LINK)));
      html.classList.toggle('nsc-on', !fsOn());
      html.classList.add('nsc-vis');
    }, { passive: true });
    document.addEventListener('mouseout', function (e) { if (!e.relatedTarget) html.classList.remove('nsc-vis'); });
    function fs() { if (fsOn()) html.classList.remove('nsc-on'); else if (seen) html.classList.add('nsc-on'); }
    document.addEventListener('fullscreenchange', fs);
    document.addEventListener('webkitfullscreenchange', fs);
  })();

  upd();
})();
