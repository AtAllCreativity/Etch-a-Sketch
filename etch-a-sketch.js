document.addEventListener('DOMContentLoaded', function() {
    createBoard(256);

    let btnDark = document.querySelector('.btn-dark');
    let btnDanger = document.querySelector('.btn-danger');
    let btnSuccess = document.querySelector('.btn-success');
    let btnPrimary = document.querySelector('.btn-primary');
    let gridItems = document.querySelectorAll('.grid-items');
    let container = document.querySelector('.container');
    let colorPicker = document.getElementById('color-picker');

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

    btnPrimary.addEventListener('click', function() {
        showColorPicker(colorPicker);
    });

    colorPicker.addEventListener('input', function() {
        container.addEventListener('click', function(event) {
            handleGridItemClick(event, colorPicker.value);
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

function handleGridItemClick(event, color) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('grid-items')) {
        clickedElement.style.backgroundColor = color;
    }
}

function showColorPicker(colorPicker) {
    colorPicker.click();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}