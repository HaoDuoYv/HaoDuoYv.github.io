function getFileParam() {
  var params = new URLSearchParams(window.location.search);
  return params.get('file') || '';
}

function findLinkByFile(file) {
  for (var i = 0; i < NAV_DATA.length; i++) {
    var links = NAV_DATA[i].links;
    for (var j = 0; j < links.length; j++) {
      if (links[j].detail && links[j].detail.indexOf('file=' + file) !== -1) {
        return links[j];
      }
    }
  }
  return null;
}

function processCallouts(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  var blockquotes = div.querySelectorAll('blockquote');
  for (var i = 0; i < blockquotes.length; i++) {
    var bq = blockquotes[i];
    var text = bq.textContent.trim();
    var type = '';
    var label = '';
    if (text.indexOf('📌') === 0) {
      type = 'note';
      label = '提示';
    } else if (text.indexOf('⚠️') === 0) {
      type = 'warning';
      label = '注意';
    } else if (text.indexOf('💡') === 0) {
      type = 'tip';
      label = '小提示';
    }
    if (type) {
      var callout = document.createElement('div');
      callout.className = 'callout callout-' + type;
      var labelDiv = document.createElement('div');
      labelDiv.className = 'callout-label';
      labelDiv.textContent = label;
      var bodyDiv = document.createElement('div');
      bodyDiv.className = 'callout-body';
      bodyDiv.innerHTML = bq.innerHTML.replace(/^[📌⚠️💡]\s*/, '');
      callout.appendChild(labelDiv);
      callout.appendChild(bodyDiv);
      bq.parentNode.replaceChild(callout, bq);
    }
  }
  return div.innerHTML;
}

function generateTOC(article) {
  var headings = article.querySelectorAll('h2, h3');
  var select = document.getElementById('tocSelect');
  if (!headings.length || !select) return;

  for (var i = 0; i < headings.length; i++) {
    var h = headings[i];
    if (!h.id) {
      h.id = 'section-' + (i + 1);
    }
    var opt = document.createElement('option');
    opt.value = h.id;
    var indent = h.tagName === 'H3' ? '    ' : '';
    opt.textContent = indent + h.textContent;
    select.appendChild(opt);
  }

  select.addEventListener('change', function() {
    var id = this.value;
    if (!id) return;
    var target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.blur();
  });
}

function renderResourceBtn(file) {
  var link = findLinkByFile(file);
  if (!link) return;
  var btn = document.getElementById('guideResourceBtn');
  var anchor = document.getElementById('guideResourceLink');
  if (!btn || !anchor) return;
  if (link.url && link.url !== '#') {
    anchor.href = link.url;
    btn.style.display = '';
  }
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

function loadGuide() {
  var file = getFileParam();
  if (!file) {
    document.getElementById('guideLoading').style.display = 'none';
    document.getElementById('guideError').style.display = '';
    return;
  }

  var url = 'details/' + file + '.md';

  fetch(url)
    .then(function(res) {
      if (!res.ok) throw new Error('Not found');
      return res.text();
    })
    .then(function(md) {
      var html = marked.parse(md);
      html = processCallouts(html);

      var article = document.getElementById('guideArticle');
      article.innerHTML = html;

      document.getElementById('guideLoading').style.display = 'none';
      article.style.display = 'block';

      generateTOC(article);
      renderResourceBtn(file);

      document.title = article.querySelector('h1').textContent + ' - 资源导航';

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    })
    .catch(function() {
      document.getElementById('guideLoading').style.display = 'none';
      document.getElementById('guideError').style.display = '';
    });
}

document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  initTheme();
  loadGuide();
});
