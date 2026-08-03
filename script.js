const btnPrompt = document.createElement("button");
btnPrompt.innerText = "Click to update squares per side.";
document.body.appendChild(btnPrompt);
btnPrompt.addEventListener("click", (event) => {
  const amt = prompt("How many squares should show per side?");
  createGrid(amt);
});

function createGrid(squares = 16) {
  const deleteGrid = document.querySelector(".container");
  if (deleteGrid) deleteGrid.remove();
  const container = document.createElement("div");
  container.classList.add("container");

  document.body.appendChild(container);
  const colors = ["red", "blue", "green", "yellow", "purple", "gray", "black", "orange"];
  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      const grid = document.createElement("div");
      grid.classList.add("square");
      grid.style.width = `${100 / squares}%`;
      grid.style.height = `${100 / squares}%`;
      container.appendChild(grid);
      const gridSelector = document.querySelectorAll(".square");
      console.log(gridSelector);
      grid.addEventListener("mouseover", (event) => {
        const randInt = Math.floor(Math.random() * colors.length + 1);
        grid.style.backgroundColor = colors[randInt];
      });
    }
  }
}

createGrid();
