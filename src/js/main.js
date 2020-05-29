

$(document).ready(function () {
  var success = $(".success");
  var controlForm = $("#submitcontrol");
  var footerButton = $("#submitfooter");
  var close = $(".success__close");
  var modalCl = $("#submitmodal");
  var valute;
  var modal = $(".modal"),
    modalBtn = $("[data-toggle=modal]"),
    modalClose = $(".modal__close");



  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  modalClose.on("click", function () {
    $("#mainmodal")[0].reset();
    modal.toggleClass("modal--visible");
    
  });

  



  //Закрытие модалки по клику вне области модального окна
  $(document).click(function (e) {
    if ($(e.target).is(".modal")) {
      $("#mainmodal")[0].reset();
      modal.toggleClass("modal--visible");
    }
  });
  //Закрытие модалки по клику esc
  $(document).keydown(function (event) {
    if (event.key === "Escape" || event.key === "Esc" || event.key === 27) {
      $("#mainmodal")[0].reset();
      modal.toggleClass("modal--visible");
    }
  });


  //перемещение плавное вниз
  $("#nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 6500); 
});

$("#foot").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      up = $(id).offset().up;
  $('body,html').animate({scrollTop: up}, 6250);
});


  




$("a").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html, body').animate({ scrollTop: destination }, 600);
  return false;
});


  $().ready(function () {
    $(".modal__form").validate({
      errorPlacement: function(error, element) {
        if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
        }  
        error.insertAfter($(element));
      },

      errorClass: "invalid",
      errorElement: "div",
      rules: {
        // simple rule, converted to {required:true}
        userNameModal: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhoneModal: {
          required: true,
          minlength: 18
        },

        // compound rule
        userEmailModal: {
          required: true,
          email: true
        },
        modalcheckbox: {
          required: true
        },
      },
      messages: {
        userNameModal: {
          required: "Заполните Имя",
          minlength: "имя не короче 2х символов",
          maxlength: "Имя не больше 15ти символов",
        },

        userPhoneModal: "Заполните Телефон",

        userEmailModal: {
          required: "Заполните поле email",
          email: "Введите корректный email name@domain.com",
        },
        modalcheckbox: "Примите соглашение конфидициальности"
           
        
      },

     
      submitHandler: function (form) {
        $.ajax({

          type: "POST",
          url: "modal.php",
          data: $(form).serialize(),
          success: function (responce) {
            
            $(form)[0].reset();

            modal.removeClass('modal--visible');
            success.toggleClass('success--visible');
            close.on('click', function() {
            success.removeClass('success--visible');
            });

          }

        });
      

      }


    });

    $(".control__form").validate({
      errorPlacement: function(error, element) {
        if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
        }  
        error.insertAfter($(element));
      },
      errorClass: "invalid",
      errorElement: "div",
      
      rules: {

        // simple rule, converted to {required:true}
        userNameControl: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhoneControl: {
          required: true,
          minlength: 18
        },

        controlcheckbox: {
          required: true
        },
      },
      messages: {
        userNameControl: {
          required: "Заполните Имя",
          minlength: "имя не короче 2х символов",
          maxlength: "Имя не больше 15ти символов",
        },

        userPhoneControl: "Заполните Телефон",
        controlcheckbox: "Примите соглашение конфидициальности",
      },

      submitHandler: function (form) {
        $.ajax({
          
          type: "POST",
          url: "control.php",
          data: $(form).serialize(),
          success: function(responce) {

            success.toggleClass('success--visible');
            $(form)[0].reset();
            close.on('click', function() {
            success.removeClass('success--visible');
            });
           
          }

        });
        

      }


    });


    $(".footer__form").validate({
      errorPlacement: function(error, element) {
        if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
        }  
        error.insertAfter($(element));
    },
      errorClass: "invalid",
      errorElement: "div",
      
      rules: {
        // simple rule, converted to {required:true}
        userNameForm: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhoneForm: {
          required: true,
          minlength: 18
        },

        userQuestionForm: {
          required: true,
          minlength: 10,
          maxlength: 100
        },

        footercheck:{
          required: true
      },

      },
      messages: {
        userNameForm: {
          required: "Заполните Имя",
          minlength: "имя не короче 2х символов",
          maxlength: "Имя не больше 15ти символов",
        },

        userPhoneForm: "Заполните Телефон",

        userQuestionForm: {
          required: "Нам важен ваш вопрос",
          minlength: "Вопрос не короче 10 символов",
          maxlength: "Вопрос не больше 100 символов",
        },
        footercheck: {
          required: "Примите соглашение конфидициальности"
        },

      },

      submitHandler: function (form) {
        $.ajax({

          type: "POST",
          url: "footer.php",
          data: $(form).serialize(),
          success: function (responce) {
            
            success.toggleClass('success--visible');
            $(form)[0].reset();
            close.on('click', function() {
            success.removeClass('success--visible');
            });

          }

        });

      }

    });

    




    $("[type=tel]").mask("+7 (999) 999-99-99", {
      placeholder: "Ваш номер телефона:",
    });

    


    var player;

    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '460',
        width: '100%',
        videoId: 'MZqtJ1IrRNI',
        events: {
          'onReady': videoPlay,
        }
      });
    });

    function videoPlay(event) {
      event.target.playVideo();
    }

  });

});

//control checkbox
$(function () {
  $('#policy-checkbox').on('change', function () {
    if ($('#policy-checkbox').prop('checked')) {
      $('#submitcontrol').attr('disabled', false);
    } else {
      $('#submitcontrol').attr('disabled', true);
    }
  });
});


//modal checkbox
// $(function () {
//   $('#modal-checkbox').on('change', function () {
//     if ($('#modal-checkbox').prop('checked')) {
//       $('#submitmodal').attr('disabled', false);
//     } else {
//       $('#submitmodal').attr('disabled', true);
//     }
//   });
// });

//footer checbox
$(function () {
  $('#footer-checkbox').on('change', function () {
    if ($('#footer-checkbox').prop('checked')) {
      $('#submitfooter').attr('disabled', false);
    } else {
      $('#submitfooter').attr('disabled', true);
    }
  });
});


$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    pagination: {
      el: ".swiper-pagination1",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });

  var nextBtn1 = $(".swiper-button-next1");
  var prevBtn1 = $(".swiper-button-prev1");
  var bullets1 = $(".swiper-pagination1");

  nextBtn1.css("left", prevBtn1.width() + 20 + bullets1.width() + 20);
  bullets1.css("left", prevBtn1.width() + 20);
});


$(document).ready(function () {
  /**
   * При прокрутке страницы, показываем или срываем кнопку
   */
  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 500) {
      $("#arrow").fadeIn();
    } else {
      $("#arrow").fadeOut();
    }
  });

  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $("#arrow").click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      2500 
    );
    return false;
  });


  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 500) {
      $("#mobile").fadeIn();
    } else {
      $("#mobile").fadeOut();
    }
  });

  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $("#mobile").click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      2500 
    );
    return false;
  });





  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animate__animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();


 

});










