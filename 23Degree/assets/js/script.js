$(document).ready(function() {
  
  // Sly slider  

  let frame  = $('.frame'),
      slider = frame.children('.slider');

  frame.sly({
    scrollBar: frame.find('.scrollbar'),
    scrollBy: 0,
    dragHandle: 1,
    mouseDragging: false,
    horizontal: 1,
    smart: 1,
    slidee: slider,
    itemNav: 'basic',
  });

  $(window).resize(function() {
    frame.sly({
      scrollBar: frame.find('.scrollbar'),
      scrollBy: 0,
      dragHandle: 1,
      mouseDragging: false,
      horizontal: 1,
      smart: 1,
      slidee: slider,
      itemNav: 'basic',
    });
  });

  slider.css('padding-left',  15);
  slider.css('padding-right', 15);





  // Scroll to section "Our services"

  $('.down a').on('click', function(e){
    $('html, body').stop().animate({ scrollTop: $('#our_services').offset().top}, 300);
    e.preventDefault();
  });





  // Сost calculator in the section "Calculate the cost"

  let radio   = $('.radio_selector'),
      area    = $('.area'),
      areaInt = 0,
      cost    = $('.cost'),
      costInt = 0,
      result  = $('.result'),
      answer  = 0;

  radio.click(function () {
    $(this).parent().siblings().children('div').removeClass('active');
    $(this).addClass('active');

    radio.css('width', '18');
    radio.css('height', '18');
    radio.css('background-color', '#fff');
    radio.css('bottom', '0');
    radio.empty('<span></span>');

    if ($(this).hasClass('active')) {
      $(this).css('width', '23');
      $(this).css('height', '23');
      $(this).css('background-color', '#19b5fe');
      $(this).css('bottom', '2.5px');
      $(this).append('<span></span>');
    }


    if ($(this).hasClass('radio_selector_1')) {
      area.html('100м2');
    }

    else if ($(this).hasClass('radio_selector_2')) {
      area.html('10 000м2');
    }

    else if ($(this).hasClass('radio_selector_3')) {
      area.html('250 000м2');
    }

    else if ($(this).hasClass('radio_selector_4')) {
      area.html('500 000м2');
    }


    areaInt = parseInt(area.html().replace(/\s+/g, ''), 10);
    costInt = parseInt(cost.html().replace(/\s+/g, ''), 10);

    answer = areaInt * costInt;

    answer = String(answer).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ') + ' руб.';
    result.html(answer);
  });





  // Yandex maps API

  function initMap() {
    let map = new ymaps.Map("map", {
      center: [43.238293, 76.945465],
      zoom: 13,
      controls: []
    }, 
    {
      searchControlProvider: 'yandex#search'
    });


    map.geoObjects.add(new ymaps.Placemark([43.238293, 76.945465], {
      balloonContent: '',
      iconCaption: 'Алматы'
    }, 
    {
      preset: 'islands#blueCircleDotIconWithCaption',
      iconCaptionMaxWidth: '50'
    }));


    map.behaviors.disable('scrollZoom');
  };

  ymaps.ready(initMap);
});