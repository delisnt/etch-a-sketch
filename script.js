function genDivs(rows, columns) {
    let container = document.querySelector('#container');
    for (let i = 0; i < rows * columns; i++){
        const cell = document.createElement('div');
        cell.style.cssText = 'border: 1px solid black; box-sizing: border-box;';
        cell.classList.add('grid-cell');
        container.appendChild(cell);
    }
    const cellWidth = 100 / columns + '%';
    const cellHeight = 100 / rows + '%';

    const cells = container.querySelectorAll ('.grid-cell');
    cells.forEach(cell => {
        cell.style.flex = `0 0 ${cellWidth}`;
        cell.style.height = cellHeight;
    });
}


   
genDivs(16,16);
