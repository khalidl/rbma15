$(document).ready(function(){function c(e){var t=h(),n=$(window).width(),r=e.parent().parent();r.find(".text").hide();r.find("#loop").addClass("video-playing").fadeOut();/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?$("#film").find("#embed").html('<iframe frameborder="0" scrolling="no" seamless="seamless" webkitallowfullscreen="webkitAllowFullScreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen" id="rbmaplayer" width="'+n+'" height="'+t+'" '+'src="http://www.youtube.com/embed/uVzx_p_DrL8?enablejsapi=1&amp;origin=*&amp;autoplay=1&amp;loop=1&amp;hd=1&amp;'+"controls=1&amp;showinfo=1&amp;modestbranding=0&amp;iv_load_policy=3&amp;"+'rel=0"></iframe>'):$("#film").find("#embed").html('<iframe frameborder="0" scrolling="no" seamless="seamless" webkitallowfullscreen="webkitAllowFullScreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen" id="rbmaplayer" width="'+n+'" height="'+t+'" '+'src="http://www.youtube.com/embed/uVzx_p_DrL8?enablejsapi=1&amp;origin=*&amp;autoplay=1&amp;loop=1&amp;hd=1&amp;'+"controls=0&amp;showinfo=1&amp;modestbranding=0&amp;iv_load_policy=3&amp;"+'rel=0"></iframe>');r.find("iframe").show();$("#film").find("#embed").css({zIndex:"9"})}function h(){var e=document.getElementById("film").getBoundingClientRect();e.height?o=e.height:o=e.bottom-e.height;return o}function p(e){var t=e.length,n=Math.floor(Math.random()*t);$("#title").one().css({background:"url(img/"+e[n]+".jpg) no-repeat left top"}).fadeIn()}function d(e){e<800&&$("#film").find("#loop").hide();if(e>800){if($("#loop").hasClass("video-playing"))return;$("#film").find("#loop").show()}}function v(e){e.hide();$("#nav-burger").fadeIn()}function m(e){$("#nav-burger").hide();e.fadeIn()}function g(){var o=$("#wrapper").scrollTop();i=$(window).height();if(o<58){n.css({display:"none"});r.css({display:"none"});m(e);m(t);l=0}o>=58&&$("#pointer").fadeOut();if(o>=i-35){n.css({display:"block"});r.css({display:"none"});v(e);v(t)}if(o>i*2-35){n.css({display:"none"});r.css({display:"block"})}if(o>i*2+58&&l===0){p(a);l=1}if(o>i*3-35){n.css({display:"block"});r.css({display:"none"})}if(o>i*4-35)if(s<=721){n.css({display:"block"});r.css({display:"none"})}else{n.css({display:"none"});r.css({display:"block"})}if(o<i-58){m(e);m(t);n.css({display:"none"});r.css({display:"none"})}if(s>800){if(o<u&&f===0){f=1;$("#about .buy").transition({right:"-50%"},750)}if(o>u&&f===1){$("#about .buy").transition({right:"0"},750);f=0}}}function y(e){e.hasClass("filmlink")?$("#wrapper").animate({scrollTop:i+10},500):e.hasClass("booklink")?$("#wrapper").animate({scrollTop:i*2+10},750):e.hasClass("extraslink")?$("#wrapper").animate({scrollTop:i*3+10},1e3):e.hasClass("aboutlink")?$("#wrapper").animate({scrollTop:i*4+10},1500):e.hasClass("titlelink")&&$("#wrapper").animate({scrollTop:0},500)}function b(e){var t=e.getBoundingClientRect();t.height?o=t.height:o=t.bottom-t.height;E(o,$("#title-text"))}function w(e){var t=e.getBoundingClientRect();return[t.left]}function E(e){i=$(window).height();var t=i-e,n=t/2;$("#title-text").css({marginTop:n-50+"px",marginBottom:n+"px"});console.log(n)}function S(){var e=$("#book").find(".book-wrapper"),t=$("#book").find("img.leftbook"),n=$(window).width(),r=w(document.getElementById("leftbook"));n<800?e.transition({x:0},1e3):r>0?e.transition({x:-n},2e3):r<0&&r>-n*1.5?e.transition({x:-(n*2)},2e3):r<-(n*1.5)&&e.transition({x:0},3e3)}var e=$("nav a"),t=$("#nav-bottom a"),n=$("#nav-burger .white"),r=$("#nav-burger .black"),i=$(window).height(),s=$(window).width(),o=0,u=$(window).scrollTop()+i*4,a=["pillow1","pillow2","pillow3","pillow4","pillow6","pillow7"],f=1,l=0;$(".scroll").click(function(e){e.preventDefault();y($(this))});$("#pointer").on("click",function(e){e.preventDefault();$(this).fadeOut("fast");$("#wrapper").animate({scrollTop:i+10},500)});if(s>800){$("#extras .extras-container").on("mouseenter","div",function(){$(this).find("p").show()});$("#extras .extras-container").on("mouseleave","div",function(){$(this).find("p").hide()})}$("#about").find(".social .fb-button").on("click",function(e){e.preventDefault();$(this).parent().parent().find("iframe").slideToggle("slow")});$("#film").find("#embed").empty();p(a);b(document.getElementById("title-text"));d(s);$("#wrapper").scroll(function(){g()});$(window).resize(function(){var e=$(window).width();d(e);g();b(document.getElementById("title-text"))});$("#nav-burger").on("click",function(){$("#wrapper").animate({scrollTop:0},500)});$("#play-button").on("click",function(){c($(this))});setInterval(S,7e3)});