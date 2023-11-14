document.addEventListener('DOMContentLoaded', function() {
    createBoard(256);

    let btnDark = document.querySelector('.btn-dark');
    let btnDanger = document.querySelector('.btn-danger');
    let btnSuccess = document.querySelector('.btn-success');
    let gridItems = document.querySelectorAll('.grid-items')
    let container = document.querySelector('.container');

    btnDark.addEventListener('click', function() {
        container.addEventListener('click', function(event) {
            handleGridItemClick(event, 'black');
        });
    });

    btnDanger.addEventListener('click', function() {
        container.addEventListener('click', function(event) {
            handleGridItemClick(event, 'white');
        });
    });

    btnSuccess.addEventListener('click', function() {
        container.addEventListener('click', function(event) {
            handleGridItemClick(event, getRandomColor());
        });
    });
});

function createBoard(numberOfGrids) {
    let container = document.querySelector('.container');

    for (let i = 0; i < numberOfGrids; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-items');
        container.appendChild(gridItem);
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function handleGridItemClick(event, color) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('grid-items')) {
        clickedElement.style.backgroundColor = color;
    }
}