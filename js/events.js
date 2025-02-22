// console.log('world')

// option 2
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3: get element by Id and then set button

const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
// option 3: different version 
const btnMakePurple = document.getElementById("btn-make-purple");
// console.log(btnMakePurple)
btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
