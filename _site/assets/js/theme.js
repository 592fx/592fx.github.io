$(function() {
  $('#change-skin').on('click', function () {
    $("body").toggleClass("page-dark-mode");
    localStorage.setItem('bj-dark-mode', $("body").hasClass("page-dark-mode"));
    BeautifulJekyllJS.initNavbar();
//      置顶颜色
      if (localStorage.getItem('bj-dark-mode') === 'true') {
          $('.pin').css("background", "#222325");
          $('.pin i').css("color", "#6c757d");
        } else {
          $('.pin').css("background", "#f5f5f5");
          $('.pin i').css("color", "#999fa4");
        }
  });
  if (localStorage.getItem('bj-dark-mode') === 'true') {
    $('#change-skin').trigger('click');
  }
    
//分类事件
    $("[href$='/game']").on('click', function () {
        consle.log('================');
        $("[href$='/game']").parent().prev().text("game");
    });

    $("[href$='/app']").on('click', function () {
        
    });
    
    $("[href$='/other']").on('click', function () {
        
    });
});
