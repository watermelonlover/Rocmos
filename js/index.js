$(function(){
   $(".RM-nav li").hover(function(){
        $(this).children("div").show();
   },function(){
    $(this).children("div").hide();
   })
   scrollNews();
})
var scrollNews=function (){
    $(document).ready(function(){
      $('.RM-table-news li').eq(0).fadeOut("slow",function(){
       $(this).clone().appendTo($(this).parent()).fadeIn("slow");
       $(this).remove();
      });
    });
    }
    setInterval('scrollNews()',2000);