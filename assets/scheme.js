/* Colour scheme for the Faculty Leadership for Life site.
   To change the default for every visitor, edit DEFAULT_SCHEME below.
   Options: lalminar, sabarmati, gulmohar, roller, monsoon, bandhani.
   To preview a scheme without editing, add ?scheme=NAME to any page address. */
(function () {
  var DEFAULT_SCHEME = 'lalminar';
  var ALL = ['lalminar', 'sabarmati', 'gulmohar', 'roller', 'monsoon', 'bandhani'];
  var q = new URLSearchParams(window.location.search).get('scheme');
  var chosen = ALL.indexOf(q) >= 0 ? q : DEFAULT_SCHEME;
  var root = document.querySelector('.nflp');
  if (!root) return;
  ALL.forEach(function (s) { root.classList.remove('th-' + s); });
  root.classList.add('th-' + chosen);
  if (q && ALL.indexOf(q) >= 0) {
    document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (/^(https?:|mailto:)/.test(h)) return;
      var parts = h.split('#');
      a.setAttribute('href', parts[0] + '?scheme=' + q + (parts[1] ? '#' + parts[1] : ''));
    });
  }
})();
