window.addEventListener('load', function() {
  var botton = document.getElementById('btn');
  botton.addEventListener('click', function() {
    var menu = document.getElementById('opcs-menu');
    if (menu.classList.contains('disabled-menu')) {
      menu.classList.remove('disabled-menu');
      menu.classList.add('enabled-menu');
    } else {
      menu.classList.remove('enabled-menu');
      menu.classList.add('disabled-menu');
    }
  });
});
