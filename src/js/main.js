
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
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var nextBtn = $('.swiper-button-next');
    var prevBtn = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');


    nextBtn.css('left', prevBtn.width() + 20 + bullets.width() + 30);
    bullets.css('left', prevBtn.width() + 30);

    
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







    

    
    
 