var imgBoxCarI = [
  "./img/c1.png",
  "./img/c2.png",
  "./img/c3.png",
  "./img/c4.png",
  "./img/c5.png",
  "./img/c6.png",
  "./img/c7.png"
];
// var imgBoxCarI = ["./img/m1.png", "./img/m2.png", "./img/m3.png"];
var indexIntervalCarI = 0;
var indexPrevStateCarI = -1;

// init some element follow number of image.
// function initialCarI() {
//   showImageCarI(0);
// }

// Change image in slider by current index: index of imgBoxCarI
function showImageCarI(current_index) {
  document.getElementById("playerI").src = imgBoxCarI[current_index];
  // document.getElementById("bgg").style.backgroundImage = imgBoxCarI[current_index];
}

// Function for map index to vaild index
function getTrueIndexCarI(index) {
  // console.log(index, imgBoxCarI.length);
  if (index > imgBoxCarI.length - 1) {
    indexIntervalCarI = 0;
  } else if (index < 0) {
    indexIntervalCarI = imgBoxCarI.length - 1;
  } else {
    indexIntervalCarI = index;
  }
  showImageCarI(indexIntervalCarI);
  // activeSpan(indexIntervalCarI);
}

// Next's event
function nextImageCarI() {
  indexPrevStateCarI = indexIntervalCarI;
  getTrueIndexCarI(++indexIntervalCarI);
}

// Prev's event
function prevImageCarI() {
  indexPrevStateCarI = indexIntervalCarI;
  getTrueIndexCarI(--indexIntervalCarI);
}
// Onclick dot-span
function currentImageCarI(current_index) {
  indexPrevStateCarI = indexIntervalCarI;
  getTrueIndexCarI(current_index);
}
// Interval for AFK
// setInterval(nextImageCarI, 6500);
