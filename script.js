let unique_colors = [];
let total_painted = 0;
let unique_squares = [];
let total_squares = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    resetGrid();
});

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
    unique_colors = [];
    total_painted = 0;
    unique_squares = [];
    total_squares = 0;
    let gridContainer = document.querySelector(".gridContainer");
    //removing all childnodes
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    //lets the user set a new size
    let size = prompt("Choose new number of squares per side:");
    while((isNaN(size)) || size < 1 || size >100){
        size = prompt("Please enter a number between 1 and 100:");
    }
    createGrid(size);
    document.getElementById("size").innerText = size + "x" + size;
    total_squares = size*size;
    document.getElementById("un_squares").innerText = "0/" + total_squares;
    addListeners();
}

function hovering(e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.style.backgroundColor = "#" + randomColor;

    let row = e.getAttribute("data-row");
    let col = e.getAttribute("data-column");

    if (!unique_squares.includes(""+row+col)) {
        unique_squares.push(""+row+col);
    }
    document.getElementById("un_squares").innerText = ""+unique_squares.length+"/"+total_squares;

    if (!unique_colors.includes(randomColor)) {
        unique_colors.push(randomColor);
    }
    total_painted += 1;
    document.getElementById("total").innerText = total_painted;
    document.getElementById("colors").innerText = unique_colors.length;
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
