const sketchPad = document.querySelector('.sketchzone');
const resetBtn = document.querySelector('.resetbtn');
let gridDiv;

function createGridDiv() {
let sketchPadStyle = window.getComputedStyle(document.querySelector('.sketchzone'));
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
    gridItems.item(i).addEventListener('mouseover', 
    () => {gridItems.item(i).style.backgroundColor = "rgba(73, 78, 77, 0.8)";}); 
}

function cleanSlate() {
    for(let i = 0; i < gridItems.length; i++) {
        if (gridItems.item(i).style.backgroundColor = "rgba(73, 78, 77, 0.8)"){
            gridItems.item(i).style.backgroundColor = '';
        }
    }
}

function setGrid() {
    let girdSize = prompt('How many squares per side would you like to make the grid?')
    let root = document.documentElement;
    root.style.setProperty('--rowNum', parseInt(girdSize));
    root.style.setProperty('--colNum', parseInt(girdSize));
}

resetBtn.addEventListener('click', () => {cleanSlate(); setGrid();});
