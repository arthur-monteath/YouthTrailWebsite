var wraps = document.querySelectorAll('.wrap');

wraps.forEach(function(wrap) {
  var toggle = wrap.querySelector('.toggle');
  var isPlus = false;

  wrap.addEventListener('click', function() {
    toggle.className = isPlus ? 'toggle' : 'toggle open';
    isPlus = !isPlus;
  });
});