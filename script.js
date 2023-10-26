let eraserButton = document.querySelector('#eraser');
let blackButton = document.querySelector('#black');
let rgbButton = document.querySelector('#rainbow');
let sizeButton = document.querySelector("#pick-size");
let container = document.querySelector('#container');
const clearGridButton = document.querySelector('#cleargrid');
let hasGridSizeRun = false;
sizeButton.addEventListener("click", pickGridSize);
function genDivs(rows, columns) {
    hasGridSizeRun = true;
    for (let i = 0; i < rows * columns; i++){
        const cell = document.createElement('div');
        cell.style.cssText = 'border: 1px solid black; box-sizing: border-box;';
        cell.classList.add('grid-cell');
        container.appendChild(cell);
    }
    const cellWidth = 100 / columns + '%';
    const cellHeight = 100 / rows + '%';

    const cells = container.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.flex = `0 0 ${cellWidth}`;
        cell.style.height = cellHeight;
        blackButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', () =>{
                cell.style.backgroundColor = 'black'
            })
        })
        clearGridButton.addEventListener('click', () =>{
            cell.style.backgroundColor = 'white';
        })
        rgbButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', () =>{
                cell.style.backgroundColor = pickRandomRGBValue();
            })
        })
        eraserButton.addEventListener('click', () =>{
            cell.addEventListener('mouseover', () =>{
                cell.style.backgroundColor = 'white';
            })
        })
    });
}

    function pickGridSize() {
        const gridValue = prompt("Pick a size for your grid!"); 
        genDivs(gridValue,gridValue);
    }

    function pickRandomRGBValue() {
        let x = Math.floor(Math.random()* 256);
        let y = Math.floor(Math.random()* 256);
        let z = Math.floor(Math.random()* 256);
        let RGBValue = "rgb(" + x + "," + y + "," + z +")"
       return RGBValue;
    }

    pickRandomRGBValue()