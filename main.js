/* ============================================================
   Dap IN — shared site behaviour (vanilla JS, no libraries)
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Mobile nav ---------- */

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- Nav dropdown ("Host") ---------- */

  var dropdowns = document.querySelectorAll('.nav-item-dropdown');
  dropdowns.forEach(function (dd) {
    var ddToggle = dd.querySelector('.nav-dropdown-toggle');
    if (!ddToggle) return;
    ddToggle.addEventListener('click', function (e) {
      e.preventDefault();
      var open = dd.classList.toggle('open');
      ddToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  document.addEventListener('click', function (e) {
    dropdowns.forEach(function (dd) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        var t = dd.querySelector('.nav-dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdowns.forEach(function (dd) {
        dd.classList.remove('open');
        var t = dd.querySelector('.nav-dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* ---------- Scroll reveal (Intersection Observer) ----------
     Fade up: opacity 0 -> 1, translateY 30px -> 0, 600ms ease-out.
     Trigger when the element is 80px into the viewport.
     Children of [data-stagger] groups delay by 120ms each. */

  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.classList.add('reveal');
      child.style.transitionDelay = i * 120 + 'ms';
    });
  });

  var revealables = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px' }
    );
    revealables.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealables.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- Accordion ---------- */

  document.querySelectorAll('.accordion-item').forEach(function (item) {
    var trigger = item.querySelector('.accordion-trigger');
    var panel = item.querySelector('.accordion-panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      // Close any sibling that is open, animating from its current height.
      var accordion = item.parentElement;
      accordion.querySelectorAll('.accordion-item.open').forEach(function (other) {
        if (other === item) return;
        var otherPanel = other.querySelector('.accordion-panel');
        otherPanel.style.maxHeight = otherPanel.scrollHeight + 'px';
        requestAnimationFrame(function () {
          otherPanel.style.maxHeight = '0px';
        });
        other.classList.remove('open');
        other
          .querySelector('.accordion-trigger')
          .setAttribute('aria-expanded', 'false');
      });

      if (isOpen) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        requestAnimationFrame(function () {
          panel.style.maxHeight = '0px';
        });
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.addEventListener('transitionend', function onEnd(e) {
          if (e.propertyName !== 'max-height') return;
          if (item.classList.contains('open')) {
            panel.style.maxHeight = 'none';
          }
          panel.removeEventListener('transitionend', onEnd);
        });
      }
    });
  });

  /* ---------- Hero pill cycling ----------
     Each pill fades out (400ms), swaps its word, and fades back in,
     on its own interval so the three rows never move in lockstep. */

  var PILL_SETS = {
    group: {
      words: ['your circle', 'a circle', 'your people', 'a good crowd', 'good company', 'the whole gang'],
      interval: 4100
    },
    activity: {
      words: ['hiking', 'chess', 'pickleball', 'running', 'bouldering', 'coffee', 'yoga', 'badminton'],
      interval: 3500
    },
    location: {
      words: ['Bangsar', 'TTDI', 'Mont Kiara', 'PJ', 'Cheras', 'Ampang', 'KL City'],
      interval: 4500
    }
  };

  Object.keys(PILL_SETS).forEach(function (key) {
    var el = document.querySelector('[data-pill="' + key + '"]');
    if (!el) return;
    var set = PILL_SETS[key];
    var index = 0;

    setInterval(function () {
      el.classList.add('fading');
      setTimeout(function () {
        index = (index + 1) % set.words.length;
        el.textContent = set.words[index];
        el.classList.remove('fading');
      }, 400);
    }, set.interval);
  });

  /* ---------- Stat count-up ---------- */

  var statNums = document.querySelectorAll('.stat-num[data-count]');
  if (statNums.length && 'IntersectionObserver' in window) {
    var reduceCount = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          countObserver.unobserve(el);
          var target = parseFloat(el.getAttribute('data-count')) || 0;
          var suffix = el.getAttribute('data-suffix') || '';
          if (reduceCount) {
            el.textContent = target + suffix;
            return;
          }
          var duration = 1400;
          var startTime = null;
          function tick(now) {
            if (startTime === null) startTime = now;
            var p = Math.min((now - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            el.textContent = Math.round(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
          }
          requestAnimationFrame(tick);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.3 }
    );
    statNums.forEach(function (el) {
      countObserver.observe(el);
    });
  }

  /* ---------- Download modal ---------- */

  var downloadModal = document.getElementById('download-modal');
  if (downloadModal) {
    var lastFocused = null;

    var openModal = function () {
      lastFocused = document.activeElement;
      downloadModal.hidden = false;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(function () {
        downloadModal.classList.add('open');
      });
      var first = downloadModal.querySelector('.store-btn');
      if (first) first.focus();
    };

    var closeModal = function () {
      if (downloadModal.hidden) return;
      downloadModal.classList.remove('open');
      document.body.style.overflow = '';
      downloadModal.addEventListener('transitionend', function onEnd(e) {
        if (e.target !== downloadModal) return;
        downloadModal.hidden = true;
        downloadModal.removeEventListener('transitionend', onEnd);
      });
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    };

    document.querySelectorAll('[data-download-trigger]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    downloadModal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    downloadModal.addEventListener('click', function (e) {
      if (e.target === downloadModal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ---------- Contact form ---------- */

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thanks, your message is on its way. We’ll get back to you soon.';
      }
      form.reset();
    });
  }
})();
