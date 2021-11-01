document.querySelector('h1').innerHTML = 'Welcome to the DOM';
document.querySelector('p').innerHTML =
  'Most of the content and style were already modified via the DOM';

document.getElementById('paragraph').innerHTML = 'Changed the message via id "paragraph"';

document.body.style.backgroundColor = '#201F2E';
document.body.style.color = 'white';
document.body.style.fontSize = '2em';
document.body.style.padding = '25px';

let lists = document.getElementById('lists');
let newList = document.createElement('li');
newList.innerHTML = 'new added list from the DOM';
lists.appendChild(newList);

let removedList = document.getElementById('will-be-removed');
lists.removeChild(removedList);

let firstChild = document.body.firstChild;
firstChild.nextSibling.textContent += ' (more like a tree!)';
// firstChild.

let button = document.getElementById('button');
button.style.width = '120px';
button.style.height = '80px';
button.style.fontSize = '20px';
button.style.borderColor = 'white';
button.style.backgroundColor = 'white';
button.style.color = 'black';
button.style.fontWeight = 'bold';
button.onclick = function changeColor() {
  let { backgroundColor, color, borderColor } = button.style;
  let { innerHTML } = button;
  button.style.backgroundColor = backgroundColor === 'white' ? '#B91646' : 'white';
  button.style.color = color === 'black' ? 'white' : 'black';
  button.style.borderColor = borderColor === 'white' ? '#B91646' : 'white';
  button.innerHTML = innerHTML === 'Turn White' ? 'Turn Red' : 'Turn White';
};
