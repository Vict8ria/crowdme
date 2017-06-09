// header scroll effect

$(window).scroll(function() {
   if($(this).scrollTop() < 60) {
      $(".header").css({
        "padding": "25px 0",
        "box-shadow": "none",
      });
    }
    else if ($(this).scrollTop() > 60) {
        $(".header").css({
          "padding": "10px 0",
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
    // Declare all variables
    var i, content, contactName;

    // Get all elements with class="tabcontent" and hide them
    content = document.getElementsByClassName("block");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    // Get all elements with class="contactName" and remove the class "active"
    contactName = document.getElementsByClassName("info__item");
    for (i = 0; i < contactName.length; i++) {
        contactName[i].className = contactName[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 


// line

var element = document.querySelector('.info__item'),
    left = 0;

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

