console.log("Welcome to Jen's super site! Thanks for visiting! Enjoy!"),$(document).ready(function(){$("#show-nav").on("click",function(){"hidden"==$(".nav-display").css("visibility")?$(".nav-display").css("visibility","visible"):$(".nav-display").css("visibility","hidden")}),$("#close-nav").on("click",function(){$(".nav-display").css("visibility","hidden")}),$(".nav-display a").bind("click",function(a){a.preventDefault();var b=$(this).attr("href");$("html, body").animate({scrollTop:$(b).offset().top},1500)}),$(".print").click(function(){window.print()})});