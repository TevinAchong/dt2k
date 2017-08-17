/*---Checking if menu changed ----*/ 

setInterval(function() {
  if ($( window ).width() >= 500) {
    $("#hide").show(); 
  }
  console.log("Quit checking my console"); 
}, 100);

/*----End Menu Check----*/ 



/*--- Navigation Menu ---*/

function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        $("#hide").show();
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
  $("#hide-link").click(function(){
    if ($( window ).width() < 500)
      $("#hide").hide(1800); 
  });
});
$(document).ready(function(){
  $("#hide-link-p").click(function(){
    if ($( window ).width() < 500)
      $("#hide").hide(1800); 
  });
});
$(document).ready(function(){
  $("#hide-link-c").click(function(){
    if ($( window ).width() < 500)
      $("#hide").hide(1800); 
  });
});
$(document).ready(function(){
  $("#hide-link-s").click(function(){
    if ($( window ).width() < 500)
      $("#hide").hide(1800);  
  });
});

/*---- End Navigation Menu ----*/



var myVar;
/*---- Loader ----*/
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/*---- End Loader ----*/


/*---- Overlay Navigation ----*/

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

/* End Overlay Navigation */

/* Modal Images */ 
function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementById('myTopnav').style.opacity = "0";
  
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('myTopnav').style.opacity = "1";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* End Modal */