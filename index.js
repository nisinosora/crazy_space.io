document.addEventListener('DOMContentLoaded',function(){
  $(function(){
    var lists  = document.querySelectorAll("iframe");
    lists.forEach(function($value){
      var $link = $value;
      var $src = $link.src
      $link.src = `${$src}?controls=1&rel=0`;
      $link.title = 'YouTube video player';
      $link.setAttribute('frameborder', "0")
      $link.setAttribute('arrows','accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
    });
  });
});

window.addEventListener('resize', function(){
  var lists  = document.querySelectorAll("iframe");
    lists.forEach(function($value){
      if(parseInt($value.width) < 430){
        $value.src = `${$value.src.replace("?controls=1&rel=0", "")}?controls=0&rel=0`;
      }
    });
},false)

$(function(){
  $('.single-item').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1
  });
});