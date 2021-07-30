$(window).scroll(function() {    
  var navScroll = $(window).scrollTop();

  if (navScroll >= 80) {
    
      $("#head-nav").addClass("nav-fixed");
      $(".logo a").css("color", "white");
      $(".mb-menu-item ul li a").css("color", "white");
      $(".mb-menu-item ul li a").css("padding", "25px 10px");
      $(".mobile-icon div").css("background-color", "white");
  } else {
      $("#head-nav").removeClass("nav-fixed");
      $(".logo a").css("color", "black");
      $(".mb-menu-item ul li a").css("color", "black");
      $(".mb-menu-item ul li a").css("padding", "30px 10px");
      $(".mobile-icon div").css("background-color", " #333");
  }
});



// back to top btn start
var btpButton = document.getElementById("btp-btn");
window.onscroll = function() {scrollMathod()};

function scrollMathod(){
  if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btpButton.style.display = "block";
  }else{
    btpButton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// back to top btn end

// burger animate start
function myFunction(x) {
  x.classList.toggle("anim");
}

// burger animate end

// loader start


  $(window).on("load",function(){
    $(".loader").fadeOut(1000)
    
  })

  setTimeout(function () {
    $('.loader').fadeToggle();
  }, 1500);

// loader end

// mobile menu start
function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.style.display = "block";
    x.className += " k";
  } else {
    x.style.display = "none";
    x.classList.remove("k")
  }
}
// mobile menu css end

// counter 
$('.count').counterUp({
  delay: 10,
  time: 1500
});

// accordion start

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// accordion end


// oul-carosol
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items : 3,
    margin :20,
    loop : true,
    autoplay : true,
    autoplayTimeout : 2000,
    autoplayHoverPause : true,
    nav : true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
});
$(document).ready(function(){
  $('.venobox').venobox(); 
});


