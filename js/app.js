document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  renderCategories(NAV_DATA);
  initQuote();
  initSearch();
  initTheme();
  initModal();
  initClock();
});

function initSearch() {
  var input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', function() {
    var q = this.value.toLowerCase().trim();
    var categories = document.querySelectorAll('.category');

    categories.forEach(function(cat) {
      var tags = cat.querySelectorAll('.link-tag');
      var visible = 0;

      tags.forEach(function(tag) {
        var text = tag.textContent.toLowerCase();
        var show = !q || text.indexOf(q) !== -1;
        tag.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      cat.style.display = visible > 0 ? '' : 'none';
    });
  });
}

function initTheme() {
  var dropdown = document.getElementById('themeDropdown');
  var btn = document.getElementById('themeBtn');
  var menu = document.getElementById('themeMenu');
  if (!dropdown || !btn || !menu) return;

  var saved = localStorage.getItem('theme') || 'system';

  function applyTheme(mode) {
    var isDark;
    if (mode === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      isDark = mode === 'dark';
    }

    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    var icon = document.getElementById('themeIcon');
    if (icon) {
      var iconMap = { light: 'sun', dark: 'moon', system: 'monitor' };
      icon.setAttribute('data-lucide', iconMap[mode] || 'monitor');
    }

    menu.querySelectorAll('.theme-option').forEach(function(opt) {
      opt.classList.toggle('active', opt.getAttribute('data-theme') === mode);
    });

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  applyTheme(saved);

  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', function() {
    if ((localStorage.getItem('theme') || 'system') === 'system') {
      applyTheme('system');
    }
  });

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  menu.addEventListener('click', function(e) {
    var option = e.target.closest('.theme-option');
    if (!option) return;
    var mode = option.getAttribute('data-theme');
    localStorage.setItem('theme', mode);
    applyTheme(mode);
    menu.classList.remove('show');
  });

  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
}

function initModal() {
  var overlay = document.getElementById('modalOverlay');
  var closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeDetail);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      closeDetail();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeDetail();
    }
  });
}

function initClock() {
  var el = document.getElementById('clock');
  if (!el) return;

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function update() {
    var now = new Date();
    var week = ['日', '一', '二', '三', '四', '五', '六'];
    el.textContent =
      now.getFullYear() + '/' + pad(now.getMonth() + 1) + '/' + pad(now.getDate()) +
      ' 周' + week[now.getDay()] + ' ' +
      pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  }

  update();
  setInterval(update, 1000);
}
