// Slick slider  

$(document).ready(function() {
  $('#slider').slick({
    arrows: false,
    dots: true,
    rows: 1,
    slidesPerRow: 1,
    slidesToShow: 1,
    slide: '.slider_fluid',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  });

  $('.all_manufacturers_slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img style="width: 30px; height: 30px;" src="assets/img/all_manufacturers/arrow_left.png"  alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img style="width: 30px; height: 30px;" src="assets/img/all_manufacturers/arrow_right.png" alt="arrow right"></button>',
    rows: 1,
    slidesPerRow: 6,
    slidesToShow: 6,
    slide: 'li',
    draggable: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesPerRow: 5,
          slidesToShow: 5,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesPerRow: 4,
          slidesToShow: 4,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 3,
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesPerRow: 2,
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 420,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.selling_tools_slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/selling_tools/arrow_left.png"  alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/img/selling_tools/arrow_right.png" alt="arrow right"></button>',
    rows: 1,
    slidesPerRow: 3,
    slidesToShow: 3,
    slide: '.row .col-4',
    draggable: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesPerRow: 2,
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.stocks_slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/stocks/arrow_left.png"  alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/img/stocks/arrow_right.png" alt="arrow right"></button>',
    rows: 1,
    slidesPerRow: 2,
    slidesToShow: 2,
    slide: '.row .col-6',
    draggable: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 1,
          draggable: true,
        }
      },
    ]
  })
});





// drop-down menu

let nav                     = $('header .nav_fluid'                                   ),
    navListItem             = $('header .nav_fluid nav ul li span'                    ),    
    navListItemActive       = $('header .nav_fluid nav ul li.click_menu span'         ),    
    navListItemInMobileMenu = $('header .nav_fluid .hamburger_menu_nav nav ul li span'), 
    desktopNav              = $('header .nav_fluid nav'                               ),
    mobileNav               = $('header .nav_fluid .hamburger_menu_nav'               ),
    mobileNavButton         = $('header .pre_nav_2 .hamburger_menu_button button'     ),
    dropDownMenu            = $('header .drop-down_menu_fluid'                        ),
    slider                  = $('#slider .slider_fluid'                               ),
    dropDownMenuCheck;
    

$(document).mouseup(function(e) { 
  // if this != drop-down menu, != drop-down menu children, != mobile menu, != mobile menu children, != scrollbar, != right mouse button
  if (!dropDownMenu.is(e.target) && dropDownMenu.has(e.target).length === 0 && e.target != $('html').get(0) && e.which == 1) {

    // if this = click menu item
    if (navListItemActive.is(e.target)) {

      // if they do not have active classes
      if (!nav.hasClass('drop-down_menu_active') && !dropDownMenu.hasClass('drop-down_menu_fluid_view')) {
        // add active classes
        dropDownMenu.addClass('drop-down_menu_fluid_view');
        nav.addClass('drop-down_menu_active');
        slider.addClass('drop-down_menu_active');
        mobileNavButton.addClass('active');
        mobileNav.addClass('active');
        mobileNav.addClass('drop-down_menu_active');
      }

      // if they have active classes
      else {
        // remove active classes
        dropDownMenu.removeClass('drop-down_menu_fluid_view');
        nav.removeClass('drop-down_menu_active');
        slider.removeClass('drop-down_menu_active');
        mobileNav.removeClass('drop-down_menu_active');
      }
    } 
    
    // if this != click menu item
    else {
      dropDownMenuCheck = false;

      // if this have active class and = mobile menu or = mobile menu children
      if (mobileNav.hasClass('drop-down_menu_active') && (mobileNav.is(e.target) || mobileNav.has(e.target).length !== 0)) {
        dropDownMenuCheck = true;
      }

      if (dropDownMenuCheck === false) {
        // remove active classes
        dropDownMenu.removeClass('drop-down_menu_fluid_view');
        nav.removeClass('drop-down_menu_active'); 
        mobileNav.removeClass('drop-down_menu_active');
        slider.removeClass('drop-down_menu_active');
      } 

      // if this != mobile nav, != mobile nav children
      if (!mobileNav.is(e.target) && mobileNav.has(e.target).length === 0) {
        navListItemInMobileMenu.parent().removeClass('active_item');
      }

      // if this != desktop nav, != desktop nav children
      if (!desktopNav.is(e.target) && desktopNav.has(e.target).length === 0) {
        navListItem.parent().removeClass('active_item');
      }

      // if this != mobile nav button, != mobile nav button children, != mobile nav, != mobile nav children
      if (!mobileNavButton.is(e.target) && mobileNavButton.has(e.target).length === 0 && !mobileNav.is(e.target) && mobileNav.has(e.target).length === 0) {
        // remove active classes in mobile menu
        mobileNavButton.removeClass('active');
        mobileNav.removeClass('active');
      }
    }
  }
});





// hide elements on click Esc

$(document).on('keyup', function(e) {
  if (e.keyCode === 27) {
    dropDownMenu.removeClass('drop-down_menu_fluid_view'); 
    nav.removeClass('drop-down_menu_active'); 
    slider.removeClass('drop-down_menu_active');
    navListItem.parent().removeClass('active_item');
    mobileNav.removeClass('drop-down_menu_active');
  }
});





// Active elements

$(document).on('click', 'header .nav_fluid nav ul li span', function(e) {

  // if this = list item in mobile menu
  if (navListItemInMobileMenu.is(e.target)) {

    // if this have active class 
    if ($(this).parent().hasClass('active_item')) {
      navListItemInMobileMenu.parent().removeClass('active_item');
    }

    // if this do not have active class 
    else {
      navListItemInMobileMenu.parent().removeClass('active_item');
      $(this).parent().addClass('active_item');
    }
  }

  // if this = list item in desktop menu
  else {
    $(this).parent().toggleClass('active_item');
    $(this).parent().siblings().removeClass('active_item');
  }

  if (dropDownMenuCheck === true) {
    dropDownMenu.removeClass('drop-down_menu_fluid_view');
    mobileNav.removeClass('drop-down_menu_active');
    nav.removeClass('drop-down_menu_active'); 
    slider.removeClass('drop-down_menu_active');
    dropDownMenuCheck = false;
  }
});


$(document).on('click', 'header .pre_nav_2 .hamburger_menu_button button', function () {
  $(this).toggleClass('active');
  mobileNav.toggleClass('active');
  mobileNav.removeClass('drop-down_menu_active');
});


$(document).on('click', '.selling_tools_nav ul li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});


$(document).on('click', '.selling_tools_slider_hover ul li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});





// Max element hight

let slideImg, slideText, row = {byRow: false};

$(window).resize(function() {
  searchMaxHeight();
});

$(document).ready(function() {
  searchMaxHeight();
});


function searchMaxHeight() {
  slideImg  = $('#selling_tools .selling_tools_slider_container .selling_tools_slider .slick-list .selling_tools_slider_slide .selling_tools_slider_img');
  slideText = $('#selling_tools .selling_tools_slider_container .selling_tools_slider .slick-list .selling_tools_slider_slide .selling_tools_slider_text');
  slideImg.matchHeight(row);
  slideText.matchHeight(row);

  slideImg  = $('#noveltys .selling_tools_slider_container .selling_tools_slider .slick-list .selling_tools_slider_slide .selling_tools_slider_img');
  slideText = $('#noveltys .selling_tools_slider_container .selling_tools_slider .slick-list .selling_tools_slider_slide .selling_tools_slider_text');
  slideImg.matchHeight(row);
  slideText.matchHeight(row);

  slideText = $('#stocks .stocks_slider .slick-list .stocks_slider_block .stocks_slider_text');
  slideText.matchHeight(row);
};