$((function(){$("#slider").slick({arrows:!1,dots:!0,rows:1,slidesPerRow:1,slidesToShow:1,slide:".slider_fluid",pauseOnHover:!1}),$(".all_manufacturers_slider").slick({arrows:!0,prevArrow:'<button type="button" class="slick-prev all_manufacturers_button b-lazy bg" data-src="assets/img/webp/all_manufacturers/arrow_left.webp?assets/img/no_webp/all_manufacturers/arrow_left.png"></button>',nextArrow:'<button type="button" class="slick-next all_manufacturers_button b-lazy bg" data-src="assets/img/webp/all_manufacturers/arrow_right.webp?assets/img/no_webp/all_manufacturers/arrow_right.png"></button>',rows:1,slidesPerRow:6,slidesToShow:6,slide:"li",draggable:!1,responsive:[{breakpoint:1200,settings:{slidesPerRow:5,slidesToShow:5}},{breakpoint:992,settings:{slidesPerRow:4,slidesToShow:4}},{breakpoint:768,settings:{slidesPerRow:3,slidesToShow:3}},{breakpoint:576,settings:{slidesPerRow:2,slidesToShow:2}},{breakpoint:420,settings:{slidesPerRow:1,slidesToShow:1}}]}),$("#selling_tools .selling_tools_slider").slick({arrows:!0,prevArrow:'<button type="button" class="slick-prev selling_tools_button b-lazy bg" data-src="assets/img/webp/selling_tools/arrow_left.webp?assets/img/no_webp/selling_tools/arrow_left.png"></button>',nextArrow:'<button type="button" class="slick-next selling_tools_button b-lazy bg" data-src="assets/img/webp/selling_tools/arrow_right.webp?assets/img/no_webp/selling_tools/arrow_right.png"></button>',rows:1,slidesPerRow:3,slidesToShow:3,slide:".row .col-4",draggable:!1,responsive:[{breakpoint:1200,settings:{slidesPerRow:2,slidesToShow:2}},{breakpoint:768,settings:{slidesPerRow:1,slidesToShow:1}}]}),$("#noveltys .selling_tools_slider").slick({arrows:!0,prevArrow:'<button type="button" class="slick-prev noveltys_button b-lazy bg" data-src="assets/img/webp/selling_tools/arrow_left.webp?assets/img/no_webp/selling_tools/arrow_left.png"></button>',nextArrow:'<button type="button" class="slick-next noveltys_button b-lazy bg" data-src="assets/img/webp/selling_tools/arrow_right.webp?assets/img/no_webp/selling_tools/arrow_right.png"></button>',rows:1,slidesPerRow:3,slidesToShow:3,slide:".row .col-4",draggable:!1,responsive:[{breakpoint:1200,settings:{slidesPerRow:2,slidesToShow:2}},{breakpoint:768,settings:{slidesPerRow:1,slidesToShow:1}}]}),$("#stocks .stocks_slider").slick({arrows:!0,prevArrow:'<button type="button" class="slick-prev stocks_button b-lazy bg" data-src="assets/img/webp/stocks/arrow_left.webp?assets/img/no_webp/stocks/arrow_left.png"></button>',nextArrow:'<button type="button" class="slick-next stocks_button b-lazy bg" data-src="assets/img/webp/stocks/arrow_right.webp?assets/img/no_webp/stocks/arrow_right.png"></button>',rows:1,slidesPerRow:2,slidesToShow:2,slide:".row .col-6",draggable:!1,responsive:[{breakpoint:992,settings:{slidesPerRow:1,slidesToShow:1,draggable:!0}}]})}));let button1,button2,url,img,slideImg,slideText,dropDownMenuCheck,check1=!1,check2=!1,check3=!1,checkBlazy=!1,nav=$("header .nav_fluid"),navListItem=$("header .nav_fluid nav ul li span"),navListItemActive=$("header .nav_fluid nav ul li.click_menu span"),navListItemInMobileMenu=$("header .nav_fluid .hamburger_menu_nav nav ul li span"),desktopNav=$("header .nav_fluid nav"),mobileNav=$("header .nav_fluid .hamburger_menu_nav"),mobileNavButton=$("header .pre_nav_2 .hamburger_menu_button button"),dropDownMenu=$("header .drop-down_menu_fluid"),slider=$("#slider .slider_fluid");function debounce(e,s,o){let t;return function(){const l=this,a=arguments,i=function(){t=null,o||e.apply(l,a)},n=o&&!t;clearTimeout(t),t=setTimeout(i,s),n&&e.apply(l,a)}}const blazy=new Blazy({loadInvisible:!1,error:function(e,s){"invalid"===s&&console.log("invalid")}});function checkSliderImageLoaded(){!1===check1&&$("#selling_tools .selling_tools_slider_img img").hasClass("b-loaded")&&(searchMaxHeight(),check1=!0),!1===check2&&$("#noveltys .selling_tools_slider_img img").hasClass("b-loaded")&&(searchMaxHeight(),check2=!0),!1===check3&&$("#stocks .stocks_slider_image img").hasClass("b-loaded")&&(searchMaxHeight(),check3=!0),!0===check1&&!0===check2&&!0===check3&&document.removeEventListener("scroll",checkSliderImageLoaded)}function searchMaxHeight(){slideImg=$("#selling_tools .selling_tools_slider_img"),slideText=$("#selling_tools .selling_tools_slider_text"),slideImg.matchHeight({byRow:!1}),slideText.matchHeight({byRow:!1}),slideImg=$("#noveltys .selling_tools_slider_img"),slideText=$("#noveltys .selling_tools_slider_text"),slideImg.matchHeight({byRow:!1}),slideText.matchHeight({byRow:!1}),slideText=$("#stocks .stocks_slider_text"),slideText.matchHeight({byRow:!1})}$((function(){$("html").hasClass("no-webp")&&$(".bg").each((function(){$(this).attr("data-src")?(url=$(this).attr("data-src").split("?").pop(),$(this).css("background-image",'url("'+url+'")')):(url=$(this).css("background-image").split("?").pop(),$(this).css("background-image",'url("'+url))}))})),$((function(){function e(){img=$(this).parent().find("img"),blazy.load(img),searchMaxHeight(),img.hasClass("b-loaded")&&($(this).hasClass("all_manufacturers_button")?button1.off("click.loadSliderImages"):$(this).hasClass("selling_tools_button")?button2.off("click.loadSliderImages"):$(this).hasClass("noveltys_button")?button3.off("click.loadSliderImages"):$(this).hasClass("stocks_button")&&button4.off("click.loadSliderImages"))}button1=$(".all_manufacturers_button"),button2=$(".selling_tools_button"),button3=$(".noveltys_button"),button4=$(".stocks_button"),button1.on("click.loadSliderImages",e),button2.on("click.loadSliderImages",e),button3.on("click.loadSliderImages",e),button4.on("click.loadSliderImages",e)})),$((function(){$(".selling_tools_slider_slide").on("mouseenter.loadHiddenImages",(function(){$(this).find(".selling_tools_slider_hover img").hasClass("b-loaded")||(img=$(this).find(".selling_tools_slider_hover img"),blazy.load(img))}))})),$((function(){navListItemActive.on("click.loadHiddenImages",(function(){img=$("header .drop-down_menu .drop-down_menu_image img"),blazy.load(img),img.hasClass("b-loaded")&&navListItemActive.off("click.loadHiddenImages")}))})),checkSliderImageLoaded=debounce(checkSliderImageLoaded,30),document.addEventListener("scroll",checkSliderImageLoaded,{passive:!0}),$(window).on("resize",debounce(searchMaxHeight,50)),checkSliderImageLoaded(),searchMaxHeight(),$((function(){$(document).on("mouseup",(function(e){dropDownMenu.is(e.target)||0!==dropDownMenu.has(e.target).length||e.target==$("html").get(0)||1!=e.which||(navListItemActive.is(e.target)?nav.hasClass("drop-down_menu_active")||dropDownMenu.hasClass("drop-down_menu_fluid_view")?(dropDownMenu.removeClass("drop-down_menu_fluid_view"),nav.removeClass("drop-down_menu_active"),slider.removeClass("drop-down_menu_active"),mobileNav.removeClass("drop-down_menu_active")):(dropDownMenu.addClass("drop-down_menu_fluid_view"),nav.addClass("drop-down_menu_active"),slider.addClass("drop-down_menu_active"),mobileNavButton.addClass("active"),mobileNav.addClass("active"),mobileNav.addClass("drop-down_menu_active")):(dropDownMenuCheck=!1,mobileNav.hasClass("drop-down_menu_active")&&(mobileNav.is(e.target)||0!==mobileNav.has(e.target).length)&&(dropDownMenuCheck=!0),!1===dropDownMenuCheck&&(dropDownMenu.removeClass("drop-down_menu_fluid_view"),nav.removeClass("drop-down_menu_active"),mobileNav.removeClass("drop-down_menu_active"),slider.removeClass("drop-down_menu_active")),mobileNav.is(e.target)||0!==mobileNav.has(e.target).length||navListItemInMobileMenu.parent().removeClass("active_item"),desktopNav.is(e.target)||0!==desktopNav.has(e.target).length||navListItem.parent().removeClass("active_item"),mobileNavButton.is(e.target)||0!==mobileNavButton.has(e.target).length||mobileNav.is(e.target)||0!==mobileNav.has(e.target).length||(mobileNavButton.removeClass("active"),mobileNav.removeClass("active"))))}))})),$((function(){$(document).on("keyup",(function(e){27===e.keyCode&&(dropDownMenu.removeClass("drop-down_menu_fluid_view"),nav.removeClass("drop-down_menu_active"),slider.removeClass("drop-down_menu_active"),navListItem.parent().removeClass("active_item"),mobileNav.removeClass("drop-down_menu_active"))}))})),$((function(){$(document).on("click","header .nav_fluid nav ul li span",(function(e){navListItemInMobileMenu.is(e.target)?$(this).parent().hasClass("active_item")?navListItemInMobileMenu.parent().removeClass("active_item"):(navListItemInMobileMenu.parent().removeClass("active_item"),$(this).parent().addClass("active_item")):($(this).parent().toggleClass("active_item"),$(this).parent().siblings().removeClass("active_item")),!0===dropDownMenuCheck&&(dropDownMenu.removeClass("drop-down_menu_fluid_view"),mobileNav.removeClass("drop-down_menu_active"),nav.removeClass("drop-down_menu_active"),slider.removeClass("drop-down_menu_active"),dropDownMenuCheck=!1)})),$(document).on("click","header .pre_nav_2 .hamburger_menu_button button",(function(){$(this).toggleClass("active"),mobileNav.toggleClass("active"),mobileNav.removeClass("drop-down_menu_active")})),$(document).on("click",".selling_tools_nav ul li",(function(){$(this).addClass("active").siblings().removeClass("active")})),$(document).on("click",".selling_tools_slider_hover ul li",(function(){$(this).addClass("active").siblings().removeClass("active")}))})),$(window).on("unload",(function(){$("html, body").scrollTop(0)}));