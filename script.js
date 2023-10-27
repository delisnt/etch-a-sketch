let eraserButton = document.querySelector('#eraser');
let blackButton = document.querySelector('#black');
let rgbButton = document.querySelector('#rainbow');
let sizeButton = document.querySelector("#pick-size");
let container = document.querySelector('#container');
const clearGridButton = document.querySelector('#cleargrid');
let r = 0, b = 0, g = 0;
let hasGridSizeRun = false;
let hasRainbowRun = false;
let isMouseOver = false;



sizeButton.addEventListener("click", function() {
    if (hasGridSizeRun) {
        alert("You already picked a grid size!");
    } else {
        pickGridSize();
    }
});


function genDivs(rows, columns) {
    for (let i = 0; i < rows * columns; i++){
        const cell = document.createElement('div');
        cell.style.cssText = 'border: 1px thin black; box-sizing: border-box;';
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
        hasGridSizeRun = true;
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


    function rainbowBackground() {
        hasRainbowRun = true;
        if (r <= 255 && g == 0 && b == 0) {
            r ++;
        }
    
        if (r == 255 && b == 0 && g <= 255) {
            g ++;
        }
    
        if (r == 255 && g == 255 && b <= 255) {
            b ++;
        }
    
        if (b == 255 && g == 255 && r > 0) {
            r --;
        }
    
        if (r == 0 && b == 255 && g > 0) {
            g --;
        }
    
        if (r == 0 && g == 0 && b > 0) {
            b --;

        }
    
        setTimeout(function() {
            rainbowBackground();
        }, 10);

        rgbButton.style.backgroundColor ='rgb('+r+','+g+','+b+')';
        return;
    }

    rgbButton.addEventListener('mouseover', function() {
        if (hasRainbowRun) {
            return;
        } else {
            rainbowBackground();
        }
        
    });
    
    rgbButton.addEventListener('mouseout', function(){
        if (hasRainbowRun)
        rgbButton.style.backgroundColor = 'white'
    })