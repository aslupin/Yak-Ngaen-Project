function nextSmokeI() {
  if (smoke_index_i + 1 == smoke_animation_i.length) {
    smoke_index_i = 0;
  }
  document.getElementById("smoke_i").src = smoke_animation_i[++smoke_index_i];
}
function nextSmokeII() {
  if (smoke_index_ii + 1 == smoke_animation_ii.length) {
    smoke_index_ii = 0;
  }
  document.getElementById("smoke_ii").src =
    smoke_animation_ii[++smoke_index_ii];
}
