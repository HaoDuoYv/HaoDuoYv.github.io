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

function getIconMap() {
  return {
    'zap': 'zap',
    'brain': 'brain',
    'palette': 'palette',
    'file-text': 'file-text',
    'book': 'book',
    'plug': 'plug',
    'code-2': 'code-2',
    'graduation-cap': 'graduation-cap',
    'lightbulb': 'lightbulb'
  };
}

function renderDetailPage(link) {
  var loading = document.getElementById('detailLoading');
  var error = document.getElementById('detailError');
  var content = document.getElementById('detailContent');

  if (!link) {
    loading.style.display = 'none';
    error.style.display = '';
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    return;
  }

  loading.style.display = 'none';
  content.style.display = '';

  var icon = document.getElementById('detailIcon');
  if (link.favicon) {
    icon.src = link.favicon;
    icon.onerror = function() {
      this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%230ea5e9" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>';
    };
  } else {
    icon.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%230ea5e9" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>';
  }

  document.getElementById('detailTitle').textContent = link.name;
  document.getElementById('detailDesc').textContent = link.desc || '';

  var metaHtml = '';
  if (link.size) {
    metaHtml += '<span class="detail-meta-tag"><svg data-lucide="hard-drive"></svg>' + link.size + '</span>';
  }
  if (link.format) {
    metaHtml += '<span class="detail-meta-tag"><svg data-lucide="file-archive"></svg>' + link.format + '</span>';
  }
  var metaEl = document.getElementById('detailMeta');
  if (metaHtml) {
    metaEl.innerHTML = metaHtml;
  } else {
    metaEl.style.display = 'none';
  }

  var introSection = document.getElementById('detailIntroSection');
  var introEl = document.getElementById('detailIntro');
  if (link.intro) {
    introEl.textContent = link.intro;
  } else {
    introSection.style.display = 'none';
  }

  var downloadBtn = document.getElementById('detailDownload');
  var visitBtn = document.getElementById('detailVisit');

  if (link.url && link.url !== '#') {
    var isDownload = link.url.match(/\.(zip|rar|7z|tar|gz|chm|pdf|exe)$/i);
    if (isDownload) {
      downloadBtn.href = link.url;
      downloadBtn.style.display = '';
      visitBtn.style.display = 'none';
    } else {
      downloadBtn.href = link.url;
      downloadBtn.style.display = '';
      visitBtn.href = link.url;
      visitBtn.style.display = '';
    }
  } else {
    downloadBtn.style.display = 'none';
    visitBtn.style.display = 'none';
  }

  var skillsSection = document.getElementById('detailSkillsSection');
  if (link.skills && link.skills.length > 0) {
    var skillsHtml = '';
    var iconMap = getIconMap();

    for (var i = 0; i < link.skills.length; i++) {
      var cat = link.skills[i];
      var iconName = cat.icon || 'box';
      skillsHtml += '<div class="skills-category' + (i === 0 ? ' open' : '') + '">' +
        '<div class="skills-category-header" onclick="toggleCategory(this)">' +
        '<div class="skills-category-icon">' +
        '<svg data-lucide="' + iconName + '"></svg>' +
        '</div>' +
        '<div class="skills-category-info">' +
        '<div class="skills-category-name">' + cat.category + '</div>' +
        '<div class="skills-category-count">' + cat.items.length + ' 个项目</div>' +
        '</div>' +
        '<div class="skills-category-toggle">' +
        '<svg data-lucide="chevron-down"></svg>' +
        '</div>' +
        '</div>' +
        '<div class="skills-category-content">';

      for (var j = 0; j < cat.items.length; j++) {
        var item = cat.items[j];
        skillsHtml += '<div class="skill-item">' +
          '<span class="skill-name">' + item.name + '</span>' +
          '<span class="skill-desc">' + item.desc + '</span>' +
          '</div>';
      }

      skillsHtml += '</div></div>';
    }
    skillsSection.innerHTML = skillsHtml;
  } else {
    skillsSection.style.display = 'none';
  }

  var infoEl = document.getElementById('detailInfo');
  var infoHtml = '';
  if (link.name) {
    infoHtml += '<div class="info-item"><span class="info-label">资源名称</span><span class="info-value">' + link.name + '</span></div>';
  }
  if (link.desc) {
    infoHtml += '<div class="info-item"><span class="info-label">简单描述</span><span class="info-value">' + link.desc + '</span></div>';
  }
  if (link.size) {
    infoHtml += '<div class="info-item"><span class="info-label">文件大小</span><span class="info-value">' + link.size + '</span></div>';
  }
  if (link.format) {
    infoHtml += '<div class="info-item"><span class="info-label">文件格式</span><span class="info-value">' + link.format + '</span></div>';
  }
  if (link.skills) {
    var totalSkills = 0;
    for (var k = 0; k < link.skills.length; k++) {
      totalSkills += link.skills[k].items.length;
    }
    infoHtml += '<div class="info-item"><span class="info-label">包含技能</span><span class="info-value">' + totalSkills + ' 个</span></div>';
    infoHtml += '<div class="info-item"><span class="info-label">分类数量</span><span class="info-value">' + link.skills.length + ' 个</span></div>';
  }
  infoEl.innerHTML = infoHtml;

  document.title = link.name + ' - 资源导航';

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function toggleCategory(header) {
  var category = header.parentElement;
  category.classList.toggle('open');
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

function loadDetail() {
  var file = getFileParam();
  if (!file) {
    document.getElementById('detailLoading').style.display = 'none';
    document.getElementById('detailError').style.display = '';
    return;
  }

  var link = findLinkByFile(file);
  renderDetailPage(link);
}

document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  initTheme();
  loadDetail();
});

window.toggleCategory = toggleCategory;