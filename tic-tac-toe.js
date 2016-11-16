// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"


var currentShape = "circle"
function shapes() {
  var buttonClicked = 0
  function alertOnlyOnce() {
    if (buttonClicked == 0) {
      alert(shapes)
      buttonClicked = 1
    }
  }
  var canvas = document.getElementById("game-board")
  if (currentShape == "circle") {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 40)
    circle.setAttribute("cy", 40)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
  } else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "80")
    rect.setAttribute("y", "20")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
  }
}
