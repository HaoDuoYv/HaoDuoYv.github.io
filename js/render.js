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
      tag = document.createElement('a');
      if (link.detail) {
        tag.href = link.detail;
      } else {
        tag.href = link.url;
      }
      tag.target = '_blank';
      tag.rel = 'noopener noreferrer';
      tag.className = 'link-tag';

      var faviconUrl = '';
      if (link.favicon) {
        faviconUrl = link.favicon;
      } else if (link.url && link.url !== '#') {
        try {
          var host = new URL(link.url).hostname;
          faviconUrl = 'https://www.google.com/s2/favicons?domain=' + host + '&sz=32';
        } catch (e) {}
      }

      var html = '';
      if (faviconUrl) {
        html += '<img class="link-favicon" src="' + faviconUrl + '" alt="" loading="lazy" width="18" height="18">';
      }
      html += '<span class="link-text">' + escapeHtml(link.name) + '</span>';
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

function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
