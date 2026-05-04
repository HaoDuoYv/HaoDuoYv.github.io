var QUOTE_API = 'https://api.mir6.com/api/yulu?txt=4&type=js';
var TYPE_SPEED = 80;
var PAUSE_AFTER = 3000;
var FADE_DURATION = 500;

var FALLBACK_QUOTES = [
  '再长的路，一步步也能走完；再短的路，不迈开双脚也无法到达。',
  '生活不是等待风暴过去，而是学会在雨中翩翩起舞。',
  '每一个不曾起舞的日子，都是对生命的辜负。',
  '世界上唯一不变的，就是一切都在变。',
  '把脸一直向着阳光，这样就不会见到阴影。',
  '你不能左右天气，但可以改变心情。'
];

function initQuote() {
  var textEl = document.getElementById('quoteText');
  var banner = document.getElementById('quoteBanner');
  if (!textEl || !banner) return;
  cycleQuote(textEl, banner);
}

function cycleQuote(textEl, banner) {
  fetchQuote().then(function(quote) {
    typeText(textEl, quote, function() {
      setTimeout(function() {
        fadeOut(banner, function() {
          textEl.textContent = '';
          fadeIn(banner, function() {
            cycleQuote(textEl, banner);
          });
        });
      }, PAUSE_AFTER);
    });
  });
}

function fetchQuote() {
  return new Promise(function(resolve) {
    var script = document.createElement('script');
    var timer = setTimeout(function() { cleanup(); resolve(fallback()); }, 5000);

    // API 返回: function yiyan(){document.write('语录内容');}
    // 1. 劫持 document.write 捕获输出
    // 2. 加载脚本（定义 window.yiyan）
    // 3. 调用 yiyan()，document.write 被拦截，捕获文本
    var origWrite = document.write;
    document.write = function(text) {
      cleanup();
      resolve(text || fallback());
    };

    script.src = QUOTE_API + '&_t=' + Date.now();
    script.onload = function() {
      try {
        if (typeof window.yiyan === 'function') {
          window.yiyan();
        } else {
          cleanup();
          resolve(fallback());
        }
      } catch(e) {
        cleanup();
        resolve(fallback());
      }
    };
    script.onerror = function() {
      cleanup();
      resolve(fallback());
    };

    function cleanup() {
      clearTimeout(timer);
      document.write = origWrite;
      if (script.parentNode) script.parentNode.removeChild(script);
      try { delete window.yiyan; } catch(e) { window.yiyan = undefined; }
    }

    function fallback() {
      return FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    }

    document.head.appendChild(script);
  });
}

function typeText(el, text, callback) {
  var i = 0;
  (function next() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(next, TYPE_SPEED);
    } else if (callback) {
      callback();
    }
  })();
}

function fadeOut(el, cb) {
  el.style.transition = 'opacity ' + FADE_DURATION + 'ms';
  el.style.opacity = '0';
  setTimeout(cb, FADE_DURATION);
}

function fadeIn(el, cb) {
  el.style.transition = 'opacity ' + FADE_DURATION + 'ms';
  el.style.opacity = '1';
  setTimeout(cb, FADE_DURATION);
}
