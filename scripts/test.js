var k = 0;
var slides = document.getElementsByClassName("slideShowElement");
var dots = document.getElementsByClassName("dot");
slideShow();
var interval = setInterval(slideShow, 4000);

function slideShow() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.backgroundColor = "#bbb";

  }
  if (k > slides.length - 1) {
    k = 0;
    console.log(k);
    slides[k].style.display = "block";
    dots[k].style.backgroundColor = "#717171";
    k++;
  }
  else {
    console.log(k);
    slides[k].style.display = "block";
    dots[k].style.backgroundColor = "#717171";
    k++;
  }
}
function changeSlideIndex(x) {
  clearInterval(interval);
  k = x;
  slideShow();
  interval = setInterval(slideShow, 4000);
}
