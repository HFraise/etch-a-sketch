const container = document.querySelector("#container");

let i = 1;
let cases = 16;

function makeRows(cases) {
    container.innerHTML = "";
    let cellSize = 960/cases;
    container.style.gridTemplateColumns = 'repeat('+cases+', '+cellSize+'px)';
    container.style.gridTemplateRows = 'repeat('+cases+', '+cellSize+'px)';
    for(let i = 1; i<=(cases*cases); i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        square.setAttribute('id', i);
        container.appendChild(square);
    };
};


function colorSquare(e) {
    let tag = e.srcElement.id;
    
    if (isNaN(tag)) {
        console.log("En dehors de la zone");
    } else {
        const cell = document.getElementById(tag);
        cell.classList.add('moused');
    };
};

container.addEventListener('mouseover', colorSquare);


//clear button 

const button = document.querySelector("#clearBtn");

function clearSquare(e) {
    const cells = document.querySelectorAll(".square");
    cells.forEach(function(cell) {
        cell.classList.remove('moused');
    });
    const cases = prompt("Combien par combien ?");
    container.style.gridTemplateColumns = null;
    container.style.gridTemplateRows = null;
    makeRows(cases);
};

button.addEventListener('click', clearSquare);