(function (window, document, undefined) {
  'use strict';

  /* Common functions */
  var device = function () {
    if (window.addEventListener)
      return 'ontouchstart' in window ? 'touchstart' : 'click';
    else 
      return 'click';
  };

  function attach (obj, event, fn) {
    if (window.addEventListener)
      obj.addEventListener(event, fn, false);
    else
      obj.attachEvent('on' + event, fn);
  }

  /* Common variables */
  var mainNav = document.getElementById('js-main-nav'),
      deviceMenuBtn = document.getElementById('js-menu-btn');

  /* Setup on load */
  // Close the navigation on load (will remain open for non-js)
  mainNav.setAttribute('data-state', 'closed'); 

  /* Toggle menu */
  var toggleNavigation = function (e) {
    e.preventDefault();
    var state = mainNav.getAttribute('data-state') === 'open' ? 'closed' : 'open';
    mainNav.setAttribute('data-state', state);
    this.setAttribute('data-state', state);
  };

  attach(deviceMenuBtn, device(), toggleNavigation);
})(window, document);
