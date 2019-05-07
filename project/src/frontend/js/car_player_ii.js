var imgBoxCarII = [
  "./img/c1.png",
  "./img/c2.png",
  "./img/c3.png",
  "./img/c4.png",
  "./img/c5.png",
  "./img/c6.png",
  "./img/c7.png"
];
// var imgBoxCarII = ["./img/m1.png", "./img/m2.png", "./img/m3.png"];
var indexIntervalCarII = 0;
var indexPrevStateCarII = -1;

// init some element follow number of image.
// function initialCarII() {
//   showImageCarII(0);
// }

// Change image in slider by current index: index of imgBoxCarII
function showImageCarII(current_index) {
  document.getElementById("playerII").src = imgBoxCarII[current_index];
  // document.getElementById("bgg").style.backgroundImage = imgBoxCarII[current_index];
}

// Function for map index to vaild index
function getTrueIndexCarII(index) {
  // console.log(index, imgBoxCarII.length);
  if (index > imgBoxCarII.length - 1) {
    indexIntervalCarII = 0;
  } else if (index < 0) {
    indexIntervalCarII = imgBoxCarII.length - 1;
  } else {
    indexIntervalCarII = index;
  }
  showImageCarII(indexIntervalCarII);
  // activeSpan(indexIntervalCarII);
}

// Next's event
function nextImageCarII() {
  indexPrevStateCarII = indexIntervalCarII;
  getTrueIndexCarII(++indexIntervalCarII);
}

// Prev's event
function prevImageCarII() {
  indexPrevStateCarII = indexIntervalCarII;
  getTrueIndexCarII(--indexIntervalCarII);
}
// Onclick dot-span
function currentImageCarII(current_index) {
  indexPrevStateCarII = indexIntervalCarII;
  getTrueIndexCarII(current_index);
}
// Interval for AFK
// setInterval(nextImageCarII, 6500);
