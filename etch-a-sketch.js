const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');

const numberOfGrids = 256;

for (let i = 0; i < numberOfGrids; i++) {
    const gridMainContainer = document.createElement('div');
    gridMainContainer.classList.add('gridMainContainer');
    mainContainer.appendChild(gridMainContainer);
}

const mainContainerElement = document.getElementById('bigContainer');
mainContainerElement.appendChild(mainContainer);

//

const btnRed = document.getElementsByClassName('btnRed')[0];
const btnGreen = document.getElementsByClassName('btnGreen')[0];
const btnBlue = document.getElementsByClassName('btnBlue')[0];

const gridContainers = document.querySelectorAll('.gridMainContainer');

btnRed.addEventListener('click', () => {
    gridContainers.forEach((gridContainer) => {
        gridContainer.addEventListener('click', () => {
            gridContainer.style.backgroundColor = 'red';
        });
    });
})

btnGreen.addEventListener('click', () => {
    gridContainers.forEach((gridContainer) => {
        gridContainer.addEventListener('click', () => {
            gridContainer.style.backgroundColor = 'green';
        });
    });
});

btnBlue.addEventListener('click', () => {
    gridContainers.forEach((gridContainer) => {
        gridContainer.addEventListener('click', () => {
            gridContainer.style.backgroundColor = 'blue';
        });
    });   
})

