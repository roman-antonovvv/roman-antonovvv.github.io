$(document).ready(function(){let e=$(".frame"),t=e.children(".slider");e.sly({scrollBar:e.find(".scrollbar"),scrollBy:0,dragHandle:1,mouseDragging:!1,horizontal:1,smart:1,slidee:t,itemNav:"basic"}),$(window).resize(function(){e.sly({scrollBar:e.find(".scrollbar"),scrollBy:0,dragHandle:1,mouseDragging:!1,horizontal:1,smart:1,slidee:t,itemNav:"basic"})}),t.css("padding-left",15),t.css("padding-right",15),$(".down a").on("click",function(e){$("html, body").stop().animate({scrollTop:$("#our_services").offset().top},300),e.preventDefault()});let a=$(".radio_selector"),s=$(".area"),n=0,o=$(".cost"),i=0,l=$(".result"),r=0;a.click(function(){$(this).parent().siblings().children("div").removeClass("active"),$(this).addClass("active"),a.css("width","18"),a.css("height","18"),a.css("background-color","#fff"),a.css("bottom","0"),a.empty("<span></span>"),$(this).hasClass("active")&&($(this).css("width","23"),$(this).css("height","23"),$(this).css("background-color","#19b5fe"),$(this).css("bottom","2.5px"),$(this).append("<span></span>")),$(this).hasClass("radio_selector_1")?s.html("100м2"):$(this).hasClass("radio_selector_2")?s.html("10 000м2"):$(this).hasClass("radio_selector_3")?s.html("250 000м2"):$(this).hasClass("radio_selector_4")&&s.html("500 000м2"),n=parseInt(s.html().replace(/\s+/g,""),10),i=parseInt(o.html().replace(/\s+/g,""),10),r=n*i,r=String(r).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")+" руб.",l.html(r)});let c=$("#map").children(".loader"),d=!1;function h(){let e=new ymaps.Map("yandex_map",{center:[43.238293,76.945465],zoom:13,controls:[]});e.geoObjects.add(new ymaps.Placemark([43.238293,76.945465],{balloonContent:"",iconCaption:"Алматы"},{preset:"islands#blueCircleDotIconWithCaption",iconCaptionMaxWidth:"50"})),function(e){return new ymaps.vow.Promise(function(t,a){let s=function(e){for(let t in e)if(e.hasOwnProperty(t)&&(e[t]instanceof ymaps.layer.tileContainer.CanvasContainer||e[t]instanceof ymaps.layer.tileContainer.DomContainer))return e[t];return null}(e),n=!0;s.tiles.each(function(e,t){e.isReady()||(n=!1)}),n?t():s.events.once("ready",function(){t()})})}(e.layers.get(0).get(0)).then(function(){c.removeClass("is-active")}),e.behaviors.disable("scrollZoom")}let m=function(){$("#map").mouseenter(function(){d||(d=!0,c.addClass("is-active"),function(e,t){let a=document.createElement("script");a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,t())}:a.onload=function(){t()},a.src=e,document.getElementsByTagName("head")[0].appendChild(a)}("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1",function(){ymaps.load(h)}))})};$(function(){m()})});