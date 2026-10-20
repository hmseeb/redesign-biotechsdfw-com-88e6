/* ==========================================================================
   BioTechs Online — site behaviour
   Mobile nav, dropdowns, sticky header, reveal-on-scroll, form handling
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var body = doc.body;

  /* ---------------- Mobile navigation ---------------- */
  var toggle = doc.querySelector('.nav-toggle');
  var scrim = doc.querySelector('.nav-scrim');
  var nav = doc.querySelector('.nav');

  function closeNav() {
    body.classList.remove('nav-open');
    if (toggle) { toggle.setAttribute('aria-expanded', 'false'); }
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (scrim) { scrim.addEventListener('click', closeNav); }
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeNav();
      Array.prototype.forEach.call(doc.querySelectorAll('.has-sub.open'), function (el) {
        el.classList.remove('open');
        var b = el.querySelector('button.nav-link');
        if (b) { b.setAttribute('aria-expanded', 'false'); }
      });
    }
  });

  /* ---------------- Dropdown submenus ---------------- */
  Array.prototype.forEach.call(doc.querySelectorAll('.has-sub > button.nav-link'), function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var parent = btn.parentElement;
      var willOpen = !parent.classList.contains('open');
      Array.prototype.forEach.call(doc.querySelectorAll('.has-sub.open'), function (el) {
        if (el !== parent) {
          el.classList.remove('open');
          var b = el.querySelector('button.nav-link');
          if (b) { b.setAttribute('aria-expanded', 'false'); }
        }
      });
      parent.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  doc.addEventListener('click', function (e) {
    if (!e.target.closest || e.target.closest('.nav')) { return; }
    Array.prototype.forEach.call(doc.querySelectorAll('.has-sub.open'), function (el) {
      el.classList.remove('open');
      var b = el.querySelector('button.nav-link');
      if (b) { b.setAttribute('aria-expanded', 'false'); }
    });
  });

  /* Close the mobile drawer after tapping a real link */
  Array.prototype.forEach.call(doc.querySelectorAll('.nav a[href]'), function (a) {
    a.addEventListener('click', closeNav);
  });

  /* ---------------- Sticky header shadow ---------------- */
  var header = doc.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealables = doc.querySelectorAll('.reveal');
  if (revealables.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      Array.prototype.forEach.call(revealables, function (el) { io.observe(el); });
    } else {
      Array.prototype.forEach.call(revealables, function (el) { el.classList.add('in'); });
    }
  }

  /* ---------------- Current year ---------------- */
  Array.prototype.forEach.call(doc.querySelectorAll('[data-year]'), function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------------- Pre-select a service from ?service=slug ---------------- */
  (function () {
    var match = /[?&]service=([a-z0-9-]+)/i.exec(window.location.search);
    if (!match) { return; }
    var wanted = match[1].replace(/-/g, ' ').toLowerCase();
    Array.prototype.forEach.call(doc.querySelectorAll('select[name="Service needed"]'), function (sel) {
      for (var i = 0; i < sel.options.length; i++) {
        var text = sel.options[i].text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
        if (text === wanted || text === wanted.replace(' ', ' / ')) { sel.selectedIndex = i; return; }
      }
      /* fall back to a loose match on the significant words */
      for (var j = 0; j < sel.options.length; j++) {
        var t = sel.options[j].text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
        if (t.indexOf(wanted.split(' ')[0]) === 0) { sel.selectedIndex = j; return; }
      }
    });
  })();

  /* ---------------- Forms ---------------- */
  var OK_MSG = 'Thanks, your message was sent. A BioTechs team member will contact you shortly — for an immediate response, call (469) 240-2020 or (817) 270-6363.';
  var ERR_MSG = 'Sorry, something went wrong sending your message. Please call us at (469) 240-2020 or (817) 270-6363 and we will respond right away.';

  function iconFor(kind) {
    if (kind === 'ok') {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
    }
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v4m0 4h.01"/></svg>';
  }

  function showStatus(el, kind, message) {
    if (!el) { return; }
    el.className = 'form-status show ' + kind;
    el.innerHTML = iconFor(kind) + '<span>' + message + '</span>';
  }

  var forms = doc.querySelectorAll('form[data-leadr]');

  /* Keep _page pointed at the page the visitor is on */
  Array.prototype.forEach.call(doc.querySelectorAll('input[name="_page"]'), function (input) {
    input.value = window.location.href;
  });

  Array.prototype.forEach.call(forms, function (form) {
    var status = form.querySelector('.form-status');

    form.addEventListener('submit', function (e) {
      if (!window.fetch) { return; } /* let the plain POST happen */
      if (typeof form.reportValidity === 'function' && !form.reportValidity()) { return; }

      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      var btnText = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }
      if (status) { status.className = 'form-status'; }

      var payload = {};
      var fd = new FormData(form);
      fd.forEach(function (value, key) {
        if (Object.prototype.hasOwnProperty.call(payload, key)) {
          payload[key] = [].concat(payload[key], value);
        } else {
          payload[key] = value;
        }
      });
      payload._page = window.location.href;

      fetch(form.getAttribute('action'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().catch(function () { return { ok: res.ok }; });
        })
        .then(function (data) {
          if (data && data.ok) {
            form.reset();
            Array.prototype.forEach.call(form.querySelectorAll('input[name="_page"]'), function (i) {
              i.value = window.location.href;
            });
            showStatus(status, 'ok', OK_MSG);
          } else {
            showStatus(status, 'err', ERR_MSG);
          }
        })
        .catch(function () {
          showStatus(status, 'err', ERR_MSG);
        })
        .then(function () {
          if (btn) { btn.disabled = false; btn.innerHTML = btnText; }
          if (status && status.scrollIntoView) {
            status.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
    });
  });

  /* ---------------- ?submitted=1 confirmation ---------------- */
  if (window.location.search.indexOf('submitted=1') > -1) {
    var banners = doc.querySelectorAll('[data-submitted-banner]');
    Array.prototype.forEach.call(banners, function (el) {
      el.innerHTML = iconFor('ok') +
        '<span><strong>Thanks, your message was sent.</strong> A BioTechs team member will contact you shortly. ' +
        'For an immediate response, call <a href="tel:+14692402020">(469) 240-2020</a> or ' +
        '<a href="tel:+18172706363">(817) 270-6363</a>.</span>';
      el.style.display = 'flex';
    });
    if (banners.length && banners[0].scrollIntoView) {
      setTimeout(function () {
        banners[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 220);
    }
  }
})();
