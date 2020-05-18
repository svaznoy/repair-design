
// document.addEventListener("DOMContentLoaded", function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');

//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   } 

//   modalBtn.forEach(element => {
//     element.addEventListener('click',switchModal);
//   });
//   // Закрываю модальное окно через класс modal__close
//   closeBtn.addEventListener('click', switchModal);
//   // закрываю модальное окно при клике за область модального окна
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.classList.toggle('modal--visible');
//     }
//   }
//   // Удаляю modal--visible при нажатии клавиши esc 
//   document.onkeydown = function(event) {
//     if(event.key === "Escape" || event.key === "Esc" || event.key === 27) {
//       modal.classList.remove('modal--visible');
//     }
//   } 
// });

$(document).ready(function () {
    var modal = $('.modal'),
    modalBtn= $('[data-toggle=modal]'),
    modalClose = $('.modal__close');

    modalBtn.on('click', function() {
       modal.toggleClass('modal--visible');

    });
    modalClose.on('click', function() {
      modal.toggleClass('modal--visible');
    });
    //Закрытие модалки по клику вне области модального окна
    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });
    //Закрытие модалки по клику esc
    $(document).keydown(function(event) {
        if (event.key === "Escape" || event.key === "Esc" || event.key === 27 ) {
            modal.toggleClass('modal--visible');
        }
    });

});


$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper', {
      // Optional parameters
      loop: true,
      pagination: {
        el: '.swiper-pagination1',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
    });

    var nextBtn1 = $('.swiper-button-next1');
    var prevBtn1 = $('.swiper-button-prev1');
    var bullets1 = $('.swiper-pagination1');


    nextBtn1.css('left', prevBtn1.width() + 20 + bullets1.width() + 20);
    bullets1.css('left', prevBtn1.width() + 20);

  
    
  });

  $(document).ready(function () {
    //initialize swiper when document ready 
    let mySwiper = new Swiper ('.swiper-container2', {
      // Optional parameters
      loop: true,
      pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
    });

    var nextBtn2 = $('.swiper-button-next2');
    var prevBtn2 = $('.swiper-button-prev2');
    var bullets2 = $('.swiper-pagination2');

    nextBtn2.css('left', prevBtn2.width() + 20 + bullets2.width() + 20);
    bullets2.css('left', prevBtn2.width() + 20);

});  


$(document).ready(function(){
  /**
   * При прокрутке страницы, показываем или срываем кнопку
   */
  $(window).scroll(function () {
      // Если отступ сверху больше 50px то показываем кнопку "Наверх"
      if ($(this).scrollTop() > 500) {
          $('#arrow').fadeIn();
      } else {
          $('#arrow').fadeOut();
      }
  });
  
  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('#arrow').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  
});











    

    
    
 