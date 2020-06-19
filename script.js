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
    let size = prompt("Choose new number of quares per side:");
    while((isNaN(size)) || size < 1 || size >100){
        size = prompt("Please enter a number between 1 and 100:");
    }
    createGrid(size);
    addListeners();
}

function hovering(e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.style.backgroundColor = "#" + randomColor;
}

let button = document.querySelector(".resetButton");
button.addEventListener("click", resetGrid);

function addListeners() {
    let gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach(element => {
        element.addEventListener("mouseover", e => {
            hovering(e.target);    
        });
    });
}
