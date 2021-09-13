document.addEventListener('DOMContentLoaded',function(){
  $(function(){
    var lists  = document.querySelectorAll("iframe");
    lists.forEach(function($value){
      var $link = $value;
      var $src = $link.src
      $link.width = '560';
      $link.height = '315';
      $link.src = `${$src}?controls=1&rel=0`;
      $link.title = 'YouTube video player';
      $link.frameborder = 0;
      $link.setAttribute('arrows','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen')
    });
  });
});

$(function(){
  $('.single-item').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1
  });
});