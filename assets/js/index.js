$(document).ready(function(){
  // Window scroll function
  $(window).scroll(function(event){
    var scrollPos=$(this).scrollTop();
    if(scrollPos > 0){
      $("#topbar").find(".background").css({
        opacity:0.9,
        height:"100%"
      });
    }else{
      $("#topbar").find(".background").removeAttr("style");
    }
  });

  // Scroll to div function
  $(this).on("click",".scroll-to",function(event){
    var targetDiv=$("#"+event.target.innerHTML.toLowerCase()).offset().top;
    $("html,body").animate({scrollTop:targetDiv+"px"},750);
  });
});
