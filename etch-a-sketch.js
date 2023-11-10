const mainContainer = document.createElement('div'); // create a div element
mainContainer.classList.add('mainContainer'); // add a class to the div element

const numberOfGrids = 16; // number of total grids

for (let i = 0; i < numberOfGrids; i++) {
    const gridMainContainer = document.createElement('div');
    gridMainContainer.classList.add('gridMainContainer');
    mainContainer.appendChild(gridMainContainer);
} // loop to create 16 div with class gridMainContainer and append it to mainContainer

const mainContainerElement = document.getElementById('body'); // select the body
mainContainerElement.appendChild(mainContainer); // append the div inside the body

