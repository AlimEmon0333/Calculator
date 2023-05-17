var dis = document.getElementById("display");
function num(getNum) {
  display.value += getNum;
}
function equal() {
  display.value = eval(display.value);
}
function cLear() {
  display.value = "";
}
