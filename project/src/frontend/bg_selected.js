var imgBox = ["./img/m1.png", "./img/m2.png", "./img/m3.png"];
var indexInterval = 0;
var indexPrevState = -1;

// init some element follow number of image.
// function initial() {
//   showImage(0);
// }

// Change image in slider by current index: index of imgBox
function showImage(current_index) {
  document.getElementById("img").src = imgBox[current_index];
  // document.getElementById("bgg").style.backgroundImage = imgBox[current_index];
}

// Function for map index to vaild index
function getTrueIndex(index) {
  // console.log(index, imgBox.length);
  if (index > imgBox.length - 1) {
    indexInterval = 0;
  } else if (index < 0) {
    indexInterval = imgBox.length - 1;
  } else {
    indexInterval = index;
  }
  showImage(indexInterval);
  // activeSpan(indexInterval);
}

// Next's event
function nextImage() {
  indexPrevState = indexInterval;
  getTrueIndex(++indexInterval);
}

// Prev's event
function prevImage() {
  indexPrevState = indexInterval;
  getTrueIndex(--indexInterval);
}
// Onclick dot-span
function currentImage(current_index) {
  indexPrevState = indexInterval;
  getTrueIndex(current_index);
}
// Interval for AFK
// setInterval(nextImage, 6500);
