let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

console.log(moreInfo.style);

let showInfo = function () {
  if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
    moreInfo.style.display = 'block';
    readMore.innerHTML = 'Hide Info';
  } else {
    moreInfo.style.display = 'none';
    readMore.innerHTML = 'Read More';
  }
};
readMore.onclick = showInfo;

let open = function () {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function () {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
let textChange = function () {
  view.innerHTML = 'Hello, World!';
};

let textReturn = function () {
  view.innerHTML = 'View';
};

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);
