var k = 0;
var slides = document.getElementsByClassName("slideShowElement");
slideShow();

function slideShow() {
  console.log(k);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (k > slides.length - 1) {
    k = 0;
    slides[k].style.display = "block";
  }
  else {
    slides[k].style.display = "block";
    k++;
  }
  setTimeout(slideShow, 4000);
}
