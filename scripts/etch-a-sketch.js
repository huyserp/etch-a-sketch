const sketchPad = document.querySelector('.sketchzone');
const gridItem = document.querySelectorAll('.griditem');
let gridDiv;

function createGridDiv() {
let sketchPadStyle = window.getComputedStyle($('html'));
let rowNum = parseInt(sketchPadStyle.getPropertyValue('--rowNum'));
let colNum = parseInt(sketchPadStyle.getPropertyValue('--colNum'));
let numGridItems = rowNum * colNum;

for(i=0; i<numGridItems; i++) {
gridDiv = document.createElement('div');
gridDiv.setAttribute('class', 'griditem');
sketchPad.appendChild(gridDiv);
}
}
/*
function draw() {
    need to put a loop here to assign each item to nodlist

    gridItem.style.backgroundColor = 'black';
}

gridItem.addEventListener('click', draw); */