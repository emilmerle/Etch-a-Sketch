createGrid(10);

function createGrid(size) {
    let gridContainer = document.querySelector(".gridContainer");
    let fieldSize = 800 / size;

    //creating new divs with gridItem class
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= size; j++){
            let temp = document.createElement("div");
            temp.setAttribute("data-row", i);
            temp.setAttribute("data-column", j);
            temp.classList.add("gridItem");

            //sets the right gridsize for gridContainer
            let rows = "repeat(" + size + ", " + fieldSize + "px)";
            gridContainer.style.gridTemplateColumns = rows;
            gridContainer.style.gridTemplateRows = rows;

            gridContainer.appendChild(temp);
        }
    }
}

function resetGrid() {
    let gridContainer = document.querySelector(".gridContainer");
    //removing all childnodes
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    //lets the user set a new size
    let size = prompt("Choose new size of grid:");
    createGrid(size);
}

let button = document.querySelector(".resetButton");
button.addEventListener("click", resetGrid);