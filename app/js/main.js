$(function () {
  // -- Start raiting --
  $(".review__raiting").rateYo({
    rating: 5,
    ratedFill: '#FDE400',
    starWidth: "14px",
    spacing: "4.5px",
    readOnly: true,
    "starSvg": '<svg width="15" height="13" viewBox="0 0 15 13" xmlns="http://www.w3.org/2000/svg"><path d="M6.76309 0.424756L5.08643 3.58193L1.33512 4.08985C0.662404 4.18046 0.392803 4.95068 0.880653 5.39182L3.59464 7.84793L2.95273 11.3175C2.83719 11.9446 3.54842 12.4144 4.14411 12.1211L7.5 10.4829L10.8559 12.1211C11.4516 12.412 12.1628 11.9446 12.0473 11.3175L11.4054 7.84793L14.1194 5.39182C14.6072 4.95068 14.3376 4.18046 13.6649 4.08985L9.91357 3.58193L8.23691 0.424756C7.9365 -0.138003 7.06607 -0.145157 6.76309 0.424756Z"/></svg>',
  });
  // -- End raiting --

  // -- Start header fixed --
  window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('header');
    
    if(scrolled >= 86){ 
      header.classList.add("fixed-top"); 
    } else {
      header.classList.remove("fixed-top"); 
    }
  }
  // -- End header fixed --

  // -- Start swiper slider --
  const swiper = document.querySelector('.product');
  const about = document.querySelector('.review');

  let mySwiper = new Swiper(swiper, {
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.service__next',
      prevEl: '.service__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      440: {
        slidesPerView: 2
      },
      768:{
        slidesPerView: 3
      }
    }
  });

  let myAbout = new Swiper(about, {
    slidesPerView: 3,
    spaceBetween: 12,
    loop: true,
    navigation: {
      nextEl: '.about__next',
      prevEl: '.about__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2
      },
      768:{
        slidesPerView: 3
      }
    }
  });
  // -- End swiper slider --

  const links = document.querySelectorAll('.nav__link');
  const burger = document.querySelector('.header__burger');
  const contactLink = document.querySelector('.nav__link-contact')
  let intViewportWidth = window.innerWidth;
  
  // -- Start scroll --
  for (let link of links){
    link.addEventListener('click', function(e){
      e.preventDefault();
      const blockID = link.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      if(intViewportWidth <= 992){
        burger.classList.remove('active');
      }
    });
  }
  // -- End scroll --

  // -- Start add class active --
  if(intViewportWidth > 992){
    links.forEach(c => {
      c.addEventListener('click', () => {
        links.forEach(s => s.classList.remove('nav__link-active'));
        c.classList.add('nav__link-active');
      });
    });
  }
  // -- End add class active --

  // -- Start resetting a class from navigation --
  if(intViewportWidth > 992){
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
      let link = $('.nav__link');
      if (!link.is(e.target) // проверка условия если клик был не по нашему блоку
          && link.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            link.removeClass('nav__link-active'); // если условия выполняются - скрываем наш элемент
      }
    });
  }
  // -- End resetting a class from navigation --

  
  // -- Start mobile burger --
  if(intViewportWidth <= 992){
    burger.onclick = function(){
      $(this).toggleClass('active');
    };

    contactLink.onclick = function(){
      burger.classList.remove('active');
    };

    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
      let link = $('.nav__link');
      let btn = $('.header__burger');
      if (!link.is(e.target) // проверка условия если клик был не по нашему блоку
      && link.has(e.target).length === 0 && btn.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
          btn.removeClass('active');// если условия выполняются - скрываем наш элемент
      }
    });
  }
  // -- End mobile burger --
  
});