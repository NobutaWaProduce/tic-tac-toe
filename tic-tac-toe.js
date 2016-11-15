// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function one() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 40)
  circle.setAttribute("cy", 40)
  circle.setAttribute("r", 10)
  circle.setAttribute("fill" , "blue")
  canvas.appendChild(circle)
}
function two() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 100)
  circle.setAttribute("cy", 40)
  circle.setAttribute("r", 10)
  circle.setAttribute("fill" , "green")
  canvas.appendChild(circle)
}
