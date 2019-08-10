const sketchPad = document.querySelector('.sketchzone');

let gridDiv;

function createGridDiv() {
let sketchPadStyle = window.getComputedStyle(document.querySelector('html'));
let rowNum = parseInt(sketchPadStyle.getPropertyValue('--rowNum'));
let colNum = parseInt(sketchPadStyle.getPropertyValue('--colNum'));
let numGridItems = rowNum * colNum;

for(let i=0; i<numGridItems; i++) {
gridDiv = document.createElement('div');
gridDiv.setAttribute('class', 'griditem');
sketchPad.appendChild(gridDiv);
}
}

window.addEventListener('load', createGridDiv());

let gridItems = sketchPad.getElementsByClassName('griditem');

for (let i = 0; i < gridItems.length; i++) {

    gridItems.item(i).addEventListener('mouseover', () => {gridItems.item(i).style.backgroundColor = "rgba(73, 78, 77, 0.8)";});
    
}
