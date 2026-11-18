// Overlap report mockup: the behaviour the server would otherwise supply.
// - Views: the page holds every view. The default is in the page; the others are
//   <template>s, and ?view= swaps one in. This runs before show-more.js, which is
//   deferred, so the swapped-in view gets its buttons.
// - Add another ID: adds a field to the group. Without the script the button
//   submits the form with add=1, and the server sends it back with one more field.
// - Compare: shows the view that fits the IDs entered.
// - The account menu closes on an outside click and on Escape.
(function () {
  var params = new URLSearchParams(location.search);
  var view = params.get('view');
  var template = view && document.getElementById('view-' + view);
  if (template) {
    document.querySelectorAll('[data-view-part]').forEach(function (part) { part.remove(); });
    var band = document.querySelector('main > .ds-zone-secondary');
    band.parentNode.insertBefore(template.content.cloneNode(true), band);
    document.title = template.getAttribute('data-title');
  }

  var form = document.getElementById('compare-form');
  if (form) {
    var ordinals = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
    var group = form.querySelector('.ds-input-group');
    form.querySelector('[name="add"]').addEventListener('click', function (e) {
      e.preventDefault();
      var n = group.querySelectorAll('input').length;
      var id = 'cmp-' + (n + 1);
      var label = document.createElement('label');
      label.className = 'is-sr-only';
      label.htmlFor = id;
      label.textContent = (ordinals[n] || 'Another') + ' ID';
      var input = document.createElement('input');
      input.className = 'ds-input';
      input.id = id;
      input.name = 'id';
      input.type = 'text';
      input.autocomplete = 'off';
      input.spellcheck = false;
      input.setAttribute('aria-describedby', 'cmp-hint');
      group.appendChild(label);
      group.appendChild(input);
      input.focus();
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ids = Array.prototype.map.call(group.querySelectorAll('input'), function (i) {
        return i.value.trim();
      }).filter(Boolean);
      var valid = /^(submit\/\d{7}|\d{4}\.\d{4,5}(v\d+)?)$/;
      var next = ids.length > 2 ? 'three-ids'
        : ids.some(function (v) { return !valid.test(v); }) ? 'error'
        : ids.indexOf('submit/9108815') !== -1 ? 'fraud'
        : '';
      location.href = 'index.html' + (next ? '?view=' + next : '');
    });
  }

  document.addEventListener('click', function (e) {
    document.querySelectorAll('.ds-site-header-dropdown[open]').forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute('open');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.ds-site-header-dropdown[open]').forEach(function (d) {
      var wasInside = d.contains(document.activeElement);
      d.removeAttribute('open');
      if (wasInside) d.querySelector('summary').focus();
    });
  });
})();
