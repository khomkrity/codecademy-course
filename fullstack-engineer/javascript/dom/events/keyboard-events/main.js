let ball = document.getElementById('float-circle');

// Write your code below
let up = function () {
  ball.style.bottom = '60%';
};

let down = function () {
  ball.style.bottom = '50px';
};
document.onkeydown = up;
document.onkeyup = down;
