
  // header scroll effect
  $(window).scroll(function() {
    if($(this).scrollTop() < 60) {
        $(".header").css({
          "padding-top": "25px",
          "padding-bottom": "25px",
          "box-shadow": "none",
        });
      }
      else if ($(this).scrollTop() > 60) {
          $(".header").css({
            "padding-top": "10px",
            "padding-bottom": "10px",
            "box-shadow": "0px 0px 17px 0px rgba(0,0,0,0.1)",
          });
      }
  });

  // main slider
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;

  function nextSlide(){
      goToSlide(currentSlide+1);
  }

  function previousSlide(){
      goToSlide(currentSlide-1);
  }

  function goToSlide(n){
      slides[currentSlide].className = 'slide';
      currentSlide = (n+slides.length)%slides.length;
      slides[currentSlide].className = 'slide showing';
  }

  var next = document.getElementById('next');
  var previous = document.getElementById('previous');

  next.onclick = function(){
      nextSlide();
  };
  previous.onclick = function(){
      previousSlide();
  };

  setInterval(nextSlide, 5000);

  // info
  function changeview(evt, tabName) {
    var i, content, contactName;
    content = document.getElementsByClassName("block");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    contactName = document.getElementsByClassName("info__item");
    for (i = 0; i < contactName.length; i++) {
      contactName[i].className = contactName[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  } 


  // line
  var element = document.querySelector('.info__item');
   $(".line").width(Math.ceil($(".info__item:eq(0)").outerWidth()));

    $(".info__item:eq(0)").click(function(){
      var elem = document.getElementsByClassName("info__item")[0];
      left = 0 + parseFloat(elem.offsetLeft);
      var widthCurrent = Math.ceil($(".info__item:eq(0)").outerWidth());
      $(".line").width(widthCurrent).animate({left: left }, 100);
    });
    $(".info__item:eq(1)").click(function(){
      var elem = document.getElementsByClassName("info__item")[1];
       left = 0 + parseFloat(elem.offsetLeft);
       var widthCurrent = Math.ceil($(".info__item:eq(1)").outerWidth());
      $(".line").width(widthCurrent).animate({left: left }, 100);
    });
    $(".info__item:eq(2)").click(function(){
      var elem = document.getElementsByClassName("info__item")[2];
       left = 0 + parseFloat(elem.offsetLeft);
       var widthCurrent = Math.ceil($(".info__item:eq(2)").outerWidth());
      $(".line").width(widthCurrent).animate({left: left }, 100);
     });

