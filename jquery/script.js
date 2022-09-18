$(function ($) {

  //   $("#mobile_menu ul li").on('click',function(){
  //     $(this).addClass('active');
  //   });

  $("#mobile_menu ul li").on('click', function () {
    $(this).addClass('active_2');
  });

  $("#mobile_menu ul li i").on('click', function () {
    $(this).addClass('active_3');
  });

  // category part
  $(".category_icons").on('click', function () {
    $(".category_icons i,fa-angle-down").toggleClass('fa-angle-up');
    $(".category_menu ul").toggleClass('active');
  });


  $(".search_category select").on('click', function () {
    $(this).addClass('active_4');
  });
  // countdown
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }());
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "07/26/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days2").innerText = Math.floor(distance / (day)),
          document.getElementById("hours2").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes2").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds2").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }());
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/25/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days3").innerText = Math.floor(distance / (day)),
          document.getElementById("hours3").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes3").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds3").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }());
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days4").innerText = Math.floor(distance / (day)),
          document.getElementById("hours4").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes4").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds4").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }()); 
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days5").innerText = Math.floor(distance / (day)),
          document.getElementById("hours5").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes5").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds5").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }()); 
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days6").innerText = Math.floor(distance / (day)),
          document.getElementById("hours6").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes6").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds6").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }());
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days7").innerText = Math.floor(distance / (day)),
          document.getElementById("hours7").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes7").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds7").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }());
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days8").innerText = Math.floor(distance / (day)),
          document.getElementById("hours8").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes8").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds8").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }());
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/30/",
      birthday = dayMonth + yyyy;
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days9").innerText = Math.floor(distance / (day)),
          document.getElementById("hours9").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes9").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds9").innerText = Math.floor((distance % (minute)) / second);

      }, 0)
  }());
  // scroll
  $(window).on('scroll',function(){
    let scrollToTop=$(window).scrollTop();
   
    // menu js
    if(scrollToTop>400){
     $('#main_menu').addClass("menufix");
    }else{
     $('#main_menu').removeClass("menufix");
    }
 });

//  slider
var swiper = new Swiper(".dream_slider", {
  slidesPerView: 3,
  grid: {
    rows: 3,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// slick
$(".pro_slider").slick({
  autoplay: false,
  prevArrow : '<i class="fa-solid fa-angle-left swipper_arrow swipper_left"></i>',
  nextArrow : '<i class="fa-solid fa-angle-right swipper_arrow swipper_right"></i>'
});


// back to top
$('.back_top').on('click',function(){
  
  $("html,body").animate({
    scrollTop:0
  },500);
});
// zoom plugin

var options = {
  zoom: {
      width: 100,
      height: 100,
      zIndex: 600
  },
  overlay: {
      opacity: 0.65,
      zIndex: 500,
      backgroundColor: '#000000',
      fade: true
  },
  detail: {
      zIndex: 600,
      margin: {
          top: 0,
          left: 10
      },
      fade: true
  }
};
jQuery(document).ready(function() {
  jQuery('.imgZoom').mooZoom(options);
});
    

});