function renderCategories(data) {
  var main = document.getElementById('mainContent');
  var footer = document.getElementById('footer');
  var totalLinks = 0;

  main.innerHTML = '';

  data.forEach(function(category) {
    totalLinks += category.links.length;

    var section = document.createElement('div');
    section.className = 'category';

    var title = document.createElement('div');
    title.className = 'category-title';
    title.innerHTML =
      '<i data-lucide="' + category.icon + '" class="category-icon"></i> ' +
      escapeHtml(category.name) +
      ' <span class="category-count">' + category.links.length + ' 个</span>';

    var grid = document.createElement('div');
    grid.className = 'links-grid';

    category.links.forEach(function(link) {
      var tag;
      if (link.detail) {
        tag = document.createElement('button');
        tag.addEventListener('click', function() {
          openDetail(link.detail, link.url, link.name);
        });
      } else {
        tag = document.createElement('a');
        tag.href = link.url;
        tag.target = '_blank';
        tag.rel = 'noopener noreferrer';
      }
      tag.className = 'link-tag';

      var html = escapeHtml(link.name);
      if (link.badge) {
        html += ' <span class="badge badge-' + escapeHtml(link.badge) + '">' + escapeHtml(link.badge) + '</span>';
      }
      tag.innerHTML = html;
      grid.appendChild(tag);
    });

    section.appendChild(title);
    section.appendChild(grid);
    main.appendChild(section);
  });

  footer.textContent = '共 ' + data.length + ' 个分类 · ' + totalLinks + ' 个资源';

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function openDetail(detailPath, url, name) {
  var overlay = document.getElementById('modalOverlay');
  var body = document.getElementById('modalBody');
  var btn = document.getElementById('modalBtn');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  body.innerHTML = '<div class="loading">加载中...</div>';
  btn.href = url;

  fetch(detailPath)
    .then(function(res) {
      if (!res.ok) throw new Error('加载失败');
      return res.arrayBuffer();
    })
    .then(function(buf) {
      var md = new TextDecoder('utf-8').decode(buf);
      body.innerHTML = marked.parse(md);
    })
    .catch(function() {
      body.innerHTML = '<p style="color:var(--text-secondary)">详细说明加载失败，请直接访问资源。</p>';
    });
}

function closeDetail() {
  var overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
