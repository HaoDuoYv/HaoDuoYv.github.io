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
  var btn = document.getElementById('themeBtn');
  if (!btn) return;

  var saved = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = saved ? saved === 'dark' : prefersDark;

  applyTheme(isDark);

  btn.addEventListener('click', function() {
    isDark = !isDark;
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

function applyTheme(isDark) {
  var icon = document.getElementById('themeIcon');
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (icon) icon.setAttribute('data-lucide', 'sun');
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (icon) icon.setAttribute('data-lucide', 'moon');
  }
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
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
