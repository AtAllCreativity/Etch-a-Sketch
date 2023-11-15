document.addEventListener('DOMContentLoaded', function() {
    createBoard(256);

    let btnDark = document.querySelector('.btn-dark');
    let btnDanger = document.querySelector('.btn-danger');
    let btnSuccess = document.querySelector('.btn-success');
    let btnPrimary = document.querySelector('.btn-primary');
    let btnWarning = document.querySelector('.btn-warning');
    let gridItems = document.querySelectorAll('.grid-items');
    let container = document.querySelector('.container');
    let colorPicker = document.getElementById('color-picker');
    let isMouseDown = false; // Added variable to track mouse state

    btnDark.addEventListener('click', function() {
        container.addEventListener('mousedown', function(event) {
            isMouseDown = true;
            handleGridItemClick(event, 'black');
        });
        container.addEventListener('mouseover', function(event) {
            if (isMouseDown) {
                handleGridItemClick(event, 'black');
            }
        });
        container.addEventListener('mouseup', function() {
            isMouseDown = false;
        });
    });

    btnDanger.addEventListener('click', function() {
        container.addEventListener('mousedown', function(event) {
            isMouseDown = true;
            handleGridItemClick(event, 'white');
        });
        container.addEventListener('mouseover', function(event) {
            if (isMouseDown) {
                handleGridItemClick(event, 'white');
            }
        });
        container.addEventListener('mouseup', function() {
            isMouseDown = false;
        });
    });

    btnSuccess.addEventListener('click', function() {
        container.addEventListener('mousedown', function(event) {
            isMouseDown = true;
            handleGridItemClick(event, getRandomColor());
        });
        container.addEventListener('mouseover', function(event) {
            if (isMouseDown) {
                handleGridItemClick(event, getRandomColor());
            }
        });
        container.addEventListener('mouseup', function() {
            isMouseDown = false;
        });
    });

    btnPrimary.addEventListener('click', function() {
        showColorPicker(colorPicker);
    });

    btnWarning.addEventListener('click', function() {
        clearContainer(container);
    });

    colorPicker.addEventListener('input', function() {
        container.addEventListener('mousedown', function(event) {
            isMouseDown = true;
            handleGridItemClick(event, colorPicker.value);
        });
        container.addEventListener('mouseover', function(event) {
            if (isMouseDown) {
                handleGridItemClick(event, colorPicker.value);
            }
        });
        container.addEventListener('mouseup', function() {
            isMouseDown = false;
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

function clearContainer(container) {
    let gridItems = document.querySelectorAll('.grid-items');
    gridItems.forEach(function(gridItem) {
        gridItem.style.backgroundColor = 'white';
    });
}