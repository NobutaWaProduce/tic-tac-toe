// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"



var turn = "player1"
function one(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 40)
    circle.setAttribute("cy", 40)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "20")
    rect.setAttribute("y", "20")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}

function two(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 100)
    circle.setAttribute("cy", 40)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "80")
    rect.setAttribute("y", "20")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}

function three(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 160)
    circle.setAttribute("cy", 40)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "140")
    rect.setAttribute("y", "20")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}

function four(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 40)
    circle.setAttribute("cy", 100)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "20")
    rect.setAttribute("y", "80")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}

function five(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 100)
    circle.setAttribute("cy", 100)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "80")
    rect.setAttribute("y", "80")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}

function six(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 160)
    circle.setAttribute("cy", 100)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "140")
    rect.setAttribute("y", "80")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}

function seven(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 40)
    circle.setAttribute("cy", 160)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "20")
    rect.setAttribute("y", "140")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}

function eight(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 100)
    circle.setAttribute("cy", 160)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "80")
    rect.setAttribute("y", "140")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}

function nine(){
  if (turn == "player1"){
    var currentShape = "circle"
     var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 160)
    circle.setAttribute("cy", 160)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill" , "blue")
    canvas.appendChild(circle)
    currentShape = "rect"
    turn = "player2"
  }else{
    var currentShape = "rect"
     var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", "140")
    rect.setAttribute("y", "140")
    rect.setAttribute("width", "40")
    rect.setAttribute("height", "40")
    rect.setAttribute("fill", "green")
    canvas.appendChild(rect)
    currentShape = "circle"
    turn = "player1"
  }
}
