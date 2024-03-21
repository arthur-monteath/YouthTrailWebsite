var informations = document.querySelectorAll('.information');

informations.forEach(function(info) {
  var toggle = info.querySelector('.toggle');
  var isPlus = true;

  var side = info.querySelector('.side');
  side.addEventListener('click', function() {
    toggle.className = isPlus ? 'toggle' : 'toggle open';
    isPlus = !isPlus;

    var paragraph = info.querySelector('.paragraph');
    var title = info.querySelector(".tit");

    if(isPlus)
    {
        paragraph.className = 'paragraph closed'
        title.className = 'tit'    
    }
    else
    {
        paragraph.className = 'paragraph'
        title.className = 'tit high'
    }
  });
});