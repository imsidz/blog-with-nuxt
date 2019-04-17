(function($){"use strict";$.qtWebsiteObj={};$.qtWebsiteObj.body=$("body");$.qtWebsiteObj.htmlAndbody=$('html,body');window.goBack=function(e){var defaultLocation="http://www.mysite.com";var oldHash=window.location.hash;history.back();var newHash=window.location.hash;if(newHash===oldHash&&(typeof(document.referrer)!=="string"||document.referrer==="")){window.setTimeout(function(){window.location.href=defaultLocation;},1000);}
if(e){if(e.preventDefault){e.preventDefault();}
if(e.preventPropagation){e.preventPropagation();}}
return false;};$.fn.embedMixcloudPlayer=function(content){var finalurl=((encodeURIComponent(content)));finalurl=finalurl.replace("https","http");var embedcode='<iframe data-state="0" class="mixcloudplayer" width="100%" height="80" src="//www.mixcloud.com/widget/iframe/?feed='+finalurl+'&embed_uuid=addfd1ba-1531-4f6e-9977-6ca2bd308dcc&stylecolor=&embed_type=widget_standard" frameborder="0"></iframe><div class="canc"></div>';return embedcode;}
$.fn.embedVideo=function(content,width,height){height=width/16*9;var youtubeUrl=content;var youtubeId=youtubeUrl.match(/=[\w-]{11}/);var strId=youtubeId[0].replace(/=/,'');var result='<iframe width="'+width+'" height="'+height+'" src="'+window.location.protocol+'//www.youtube.com/embed/'+strId+'?html5=1" frameborder="0" class="youtube-player" allowfullscreen></iframe>';return result;}
$.fn.qtSmoothScroll=function(){var body=$("body"),topscroll;body.off("click",'a.qt-smoothscroll');body.on("click",'a.qt-smoothscroll',function(e){e.preventDefault();topscroll=$(this.hash).offset().top;$('html,body').animate({scrollTop:topscroll},600);});}
$.fn.NewYoutubeResize=function(){jQuery("iframe").each(function(i,c){var t=jQuery(this);if(t.attr("src")){var href=t.attr("src");if(href.match("youtube.com")||href.match("vimeo.com")||href.match("vevo.com")){var width=t.parent().width(),height=t.height();t.css({"width":width});t.height(width/16*9);};};});};$.fn.imagesLoaded=function(){var $imgs=this.find('img[src!=""]');if(!$imgs.length){return $.Deferred().resolve().promise();}
var dfds=[];$imgs.each(function(){var dfd=$.Deferred();dfds.push(dfd);var img=new Image();img.onload=function(){dfd.resolve();}
img.onerror=function(){dfd.resolve();}
img.src=this.src;});return $.when.apply($,dfds);}
$.fn.transformlinks=function(targetContainer){if(undefined===targetContainer){targetContainer="body";}
jQuery(targetContainer).find("a[href*='youtube.com'],a[href*='youtu.be'],a[href*='mixcloud.com'],a[href*='soundcloud.com'], [data-autoembed]").not('.qw-disableembedding').each(function(element){var that=jQuery(this);var mystring=that.attr('href');if(that.attr('data-autoembed')){mystring=that.attr('data-autoembed');}
var width=that.parent().width();if(width===0){width=that.parent().parent().parent().width();}
if(width===0){width=that.parent().parent().parent().width();}
if(width===0){width=that.parent().parent().parent().parent().width();}
var height=that.height();var element=that;var expression=/(http|https):\/\/(\w{0,3}\.)?youtube\.\w{2,3}\/watch\?v=[\w-]{11}/gi;var videoUrl=mystring.match(expression);if(videoUrl!==null){for(var count=0;count<videoUrl.length;count++){mystring=mystring.replace(videoUrl[count],$.fn.embedVideo(videoUrl[count],width,(width/16*9)));replacethisHtml(mystring);}}
var temphtml='';var iframeUrl='';var $temphtml;var expression=/(http|https)(\:\/\/soundcloud.com\/+([a-zA-Z0-9\/\-_]*))/g;var scUrl=mystring.match(expression);if(scUrl!==null){for(count=0;count<scUrl.length;count++){var finalurl=scUrl[count].replace(':','%3A');finalurl=finalurl.replace("https","http");jQuery.getJSON('https://soundcloud.com/oembed?maxheight=140&format=js&url='+finalurl+'&iframe=true&callback=?',function(response){temphtml=response.html;if(that.closest("li").length>0){if(that.closest("li").hasClass("qt-collapsible-item")){$temphtml=$(temphtml);iframeUrl=$temphtml.attr("src");replacethisHtml('<div class="qt-dynamic-iframe" data-src="'+iframeUrl+'"></div>');}}else{replacethisHtml(temphtml);}});}}
var expression=/(http|https)\:\/\/www\.mixcloud\.com\/[\w-]{0,150}\/[\w-]{0,150}\/[\w-]{0,1}/ig;videoUrl=mystring.match(expression);if(videoUrl!==null){for(count=0;count<videoUrl.length;count++){mystring=mystring.replace(videoUrl[count],$.fn.embedMixcloudPlayer(videoUrl[count]));replacethisHtml(mystring);}}
function replacethisHtml(mystring){element.replaceWith(mystring);return true;}
$.fn.NewYoutubeResize();});$("body").on("click",'.qt-collapsible li',function(e){var that=$(this);if(that.hasClass("active")){var item=that.find(".qt-dynamic-iframe");var itemurl=item.attr("data-src");item.replaceWith('<iframe src="'+itemurl+'" frameborder="0"></iframe>');$.fn.NewYoutubeResize();}});}
$.fn.qtFitvids=function(){if(typeof($.fn.fitVids)==="undefined"){return;}
$("#maincontent").fitVids();};$.fn.qtMobileNav=function(){$("body").off("click",".side-nav li.menu-item-has-children > a");$("body").on("click",".side-nav li.menu-item-has-children > a",function(e){var that=$(this).parent();e.preventDefault();if(that.hasClass("open")){that.removeClass("open");}else{that.addClass("open");}
return true;});return true;};$.fn.slickGallery=function(){$.qtWebsiteObj.slickSliders=$('.qt-slickslider, .qt-slick');if($.qtWebsiteObj.slickSliders.length===0){return;}
$.qtWebsiteObj.slickSliders.not('.slick-initialized').each(function(){var that=$(this),slidesToShow=that.attr("data-slidestoshow"),slidestoshowMobile=that.attr("data-slidestoshowmobile"),slidestoshowIpad=that.attr("data-slidestoshowipad"),appendArrows=that.attr("data-appendArrows");if(slidesToShow===undefined||slidesToShow===""){slidesToShow=1;}
if(slidestoshowMobile===undefined||slidestoshowMobile===""){slidestoshowMobile=1;}
if(slidestoshowIpad===undefined||slidestoshowIpad===""){slidestoshowIpad=3;}
if(appendArrows===undefined||appendArrows===""){appendArrows=that;}else{appendArrows=that.closest(appendArrows);}
that.slick({slidesToScroll:1,pauseOnHover:that.attr("data-pauseonhover")==="true",infinite:that.attr("data-infinite")==="true",autoplay:that.attr("data-autoplay")==="true",autoplaySpeed:4000,centerPadding:that.attr("data-centerpadding")||0,slide:".qt-item",dots:that.attr("data-dots")==="true",variableWidth:that.attr("data-variablewidth")==="true",arrows:that.attr("data-arrows")==="true",centerMode:that.attr("data-centermode")==="true",slidesToShow:slidesToShow,appendArrows:appendArrows,responsive:[{breakpoint:790,settings:{arrows:that.attr("data-arrowsmobile")==="true",centerMode:that.attr("data-centermodemobile")==="true",centerPadding:0,variableWidth:true,variableHeight:false,dots:that.attr("data-dotsmobile")==="true",slidesToShow:slidestoshowMobile,draggable:false,swipe:true,touchMove:true,infinite:that.attr("data-infinitemobile")==="true",}},{breakpoint:1200,settings:{arrows:that.attr("data-arrowsipad"),dots:that.attr("data-dotsipad")==="true",slidesToShow:slidestoshowIpad,}}]}).promise().done(function(){that.removeClass("qt-invisible");});});$.qtWebsiteObj.body.on("click","[data-slicknext]",function(e){e.preventDefault();var slidertarget=$(this).attr("data-slicknext");$(slidertarget).find('.qt-slickslider').slick("slickNext");});$.qtWebsiteObj.body.on("click","[data-slickprev]",function(e){e.preventDefault();var slidertarget=$(this).attr("data-slickprev");$(slidertarget).find('.qt-slickslider').slick("slickPrev");});};$.fn.qtQtSwitch=function(){$("body").off("click","[data-qtswitch]");$("body").on("click","[data-qtswitch]",function(e){var that=$(this);e.preventDefault();$(that.attr("data-target")).toggleClass(that.attr("data-qtswitch"));});$("[data-expandable]").each(function(i,c){var that=$(c),selector=that.attr("data-expandable"),target=$(selector);if(selector!==""){if(target.hasClass("open")){target.velocity({properties:{height:target.find(".qt-expandable-inner").height()+"px"},options:{duration:50}});}}});$("body").off("click","[data-expandable]");$("body").on("click","[data-expandable]",function(e){e.preventDefault();var btn=$(this);var that=$(btn.attr("data-expandable"));if(!that.hasClass("open")){that.addClass("open");that.velocity({properties:{height:that.find(".qt-expandable-inner").height()+"px"},options:{duration:300}});}else{that.removeClass("open");that.velocity({properties:{height:0},options:{duration:300}});}});};$.fn.qtParallaxV5=function(options){var windowHeight=$(window).height();var settings=$.extend({speed:0.15},options);return this.each(function(){var $this=$(this),userAgent=navigator.userAgent;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)||$(window).width()<1280){$this.css('background-attachment','local');return;}else{$this.css('background-attachment','fixed');}
$(document).scroll(function(){var scrollTop=$(window).scrollTop();var offset=$this.offset().top;var height=$this.outerHeight();if(offset+height<=scrollTop||offset>=scrollTop+windowHeight){return;}
var yBgPosition=Math.round((offset-scrollTop)*settings.speed);$this.css('background-position','center '+yBgPosition+'px');});});}
$.fn.dynamicBackgroundsV2=function(targetContainer){if(undefined===targetContainer){targetContainer="body";}
$(targetContainer+" [data-bgimage]").each(function(){var that=$(this),bg=that.attr("data-bgimage");if(bg!==''){that.css({"background-image":"url("+bg+")","background-attachment":that.attr("data-bgattachment")||"local"});if(that.attr("data-parallax")==="1"){that.qtParallaxV5({speed:0.15});}
return;}});};$.fn.qtPushpin=function(){};$.fn.qtCountdown=function(){$.each($('.qt-countdown'),function(i,c){var that=$(c),date=that.attr("data-end");if(date!==undefined&&date!==""){var eventdate=new Date(date),nowdate=(new Date()),eventtime=eventdate.getTime(),nowtime=nowdate.getTime(),difference=eventtime-nowtime;$(c).ClassyCountdown({theme:"white-wide",end:$.now()+(difference/1000)});}});};$.fn.qtPopupwindow=function(){if(typeof($.fn.popupwindow)!=="undefined"){$.fn.popupwindow();}};$.fn.qtSharelink=function(){$(".qt-sharelink").each(function(){var that=$(this),urlencoded=encodeURIComponent(window.location.href),sharetype=that.attr("data-sharetype"),finalurl='';switch(sharetype){case "facebook":finalurl='https://www.facebook.com/sharer/sharer.php?u='+urlencoded;break;case "twitter":finalurl='https://twitter.com/home?status='+urlencoded;break;case "google":finalurl='https://plus.google.com/share?url='+urlencoded;break;case "pinterest":finalurl='https://pinterest.com/pin/create/bookmarklet/?url='+urlencoded;break;}
that.attr("href",finalurl);});};$.fn.qtMasonry=function(targetContainer){if(undefined===targetContainer){targetContainer="body";}
$(targetContainer).find('.qt-masonry').each(function(i,c){var idc=$(c).attr("id");var container=document.querySelector('#'+idc);if(container){var msnry=new Masonry(container,{itemSelector:'.qt-ms-item',columnWidth:'.qt-ms-item'});}});$("body").imagesLoaded().then(function(){$(targetContainer).find('.gallery').each(function(i,c){var idc=$(c).attr("id");var container=document.querySelector('#'+idc);if(container){var msnry=new Masonry(container,{itemSelector:'.gallery-item',columnWidth:'.gallery-item'});}});});return true;};$.fn.qtSkrollrInit=function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){return;}
$.skrollrInstance=skrollr.init({smoothScrolling:true,forceHeight:false});}
$.fn.qtMaterialSlideshow=function(){$('.qt-material-slider').each(function(i,c){var that=$(c),timing=that.attr("data-timeout");if(""===timing||undefined===timing||null===timing){timing=3000;}
that.slider({full_width:true,height:"100%",indicators:true,interval:Number(timing)||3000});that.on("click",".prev",function(){that.slider("prev");});that.on("click",".next",function(){that.slider("next");});that.on("mouseenter",".qt-slideshow-link",function(){that.slider("pause");}).mouseleave(function(){that.slider("start");});if(that.hasClass("qt-hero-slider")){that.find(".qt-hero-slider-index").append('<hr class="qt-heroindex-indicator">');var indicatorsArray=that.find(".indicators li.indicator-item"),itemsNumber=indicatorsArray.length,itemsWidth=100/itemsNumber;indicatorsArray.css({width:itemsWidth+"%"});that.find(".qt-heroindex-indicator").css({width:itemsWidth+"%"});that.on("click","[data-qtslidegoto]",function(e){e.preventDefault();var togo=$(this).attr("data-qtslidegoto");that.find(".indicators li").eq(togo).click();that.find(".qt-active").removeClass("qt-active");that.find(".qt-heroindex-indicator").css({left:(itemsWidth*togo)+"%"});$(this).parent().addClass("qt-active");});var theIndexNow=0,updateSlideIndex=setInterval(function(){theIndexNow=that.find(".indicators li.indicator-item.active").index();that.find(".qt-active").removeClass("qt-active");that.find(".qt-hero-slider-index-item").eq(theIndexNow).addClass("qt-active");that.find(".qt-heroindex-indicator").css({left:(itemsWidth*theIndexNow)+"%"});},500);}});}
$.fn.qtFooterFx=function(){var qtFooterfxcontainer=$("#qtFooterfxcontainer"),qtFooterfx=$("#qtFooterfx"),maincontent=$("#maincontent");qtFooterfxcontainer.removeAttr('style');qtFooterfx.removeAttr('style');if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||$(window).width()<1280){return;}
qtFooterfxcontainer.css({"height":qtFooterfx.outerHeight()+"px"});qtFooterfx.css({"width":qtFooterfx.outerWidth()+"px"});qtFooterfx.css({"position":"fixed","height":qtFooterfx.outerHeight()+"px","bottom":"0"});}
$.fn.qtCardActivator=function(){$.qtWebsiteObj.body.on("click",".qt-activate-card",function(e){e.preventDefault();$(this).closest(".qt-interactivecard").toggleClass("open");$.fn.NewYoutubeResize();});$.qtWebsiteObj.body.on("click","[data-activatetab]",function(e){e.preventDefault();var that=$(this),container=that.closest(".qt-cardtabs"),target=container.find("[data-"+that.attr("data-activatetab")+"]");container.find(".qt-the-content").addClass("qt-hidden");target.removeClass("qt-hidden");});}
$.fn.qtnavSearch=function(){var navsearch=$("#qtnavsearch"),qtsearch=$("#qtsearch");$.qtWebsiteObj.body.on("click","#qtnavsearchbutton",function(e){e.preventDefault();if(navsearch.hasClass("open")&&qtsearch.val()!==''){$("#qtnavform").submit();}else{navsearch.toggleClass("open");}});$.qtWebsiteObj.body.on("click","#qtnavsearchclose",function(e){e.preventDefault();navsearch.removeClass("open");});}
$.fn.qtVideoActivator=function(){$.qtWebsiteObj.body.on("click","[data-videoactivator]",function(e){e.preventDefault();var that=$(this),target=$(that.attr("data-videoactivator"));target.toggleClass("active");});}
$.fn.initializeAfterAjax=function(){$.fn.slickGallery();$.fn.qtQtSwitch();$.fn.dynamicBackgroundsV2();$.fn.qtCardActivator();if("undefined"!==typeof($.skrollrInstance)){$.skrollrInstance.refresh();}else{$.fn.qtSkrollrInit();}
$.fn.qtVideoActivator();$.fn.qtPopupwindow();$.fn.qtSharelink();$.fn.qtMasonry();$.fn.qtCountdown();$.fn.qtFitvids();$.fn.qtPushpin();$.fn.transformlinks("#maincontent");$('.qt-collapsible').collapsible();jQuery('ul.tabs').tabs({"swipeable":false}).delay(500).promise().done(function(){jQuery('ul.tabs li:first-child a').click();});$('.qt-scrollspy').scrollSpy();$('.tooltipped').tooltip({delay:50});if(typeof jQuery.vdl_Init==="function"){jQuery.vdl_Init();}
if(typeof $.fn.qtDynamicMaps==="function"){$.fn.qtDynamicMaps();}
if(typeof $.fn.qtPlacesInit==="function"){$.fn.qtPlacesInit();}
$("#qwShowDropdown").change(function(){$("a#"+$(this).attr("value")).click();});$.fn.qtMaterialSlideshow();$.fn.qtSmoothScroll();return true;}
$.fn.qtPageloadInit=function(){$(".button-collapse").sideNav();$('.qt-button-extrasidebar').sideNav({edge:'right',closeOnClick:false,draggable:false});$("body").on("click",".qt-button-extrasidebar-close",function(e){e.preventDefault();$('.qt-button-extrasidebar').sideNav('hide');});$.fn.qtnavSearch();$("body").off("click",".qt-scrolltop");$("body").on("click",".qt-scrolltop",function(e){e.preventDefault();$("html, body").animate({scrollTop:0},"slow");});$.fn.qtMobileNav();$.fn.qtFooterFx();$.fn.initializeAfterAjax();};jQuery(document).ready(function(){$.fn.qtPageloadInit();});$(window).resize(function(){$.fn.qtPushpin();$.fn.NewYoutubeResize();$.fn.qtFooterFx();});})(jQuery);