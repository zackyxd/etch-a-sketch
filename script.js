const btnPrompt = document.createElement("button");
btnPrompt.innerText = "Click to update squares per side. (Max 100)";
document.body.appendChild(btnPrompt);
btnPrompt.addEventListener("click", (event) => {
  const amt = prompt("How many squares should show per side?");
  if (amt > 100) {
    return alert("Max 100");
  }
  createGrid(amt);
});

function createGrid(squares = 16) {
  const deleteGrid = document.querySelector(".container");
  if (deleteGrid) deleteGrid.remove();
  const container = document.createElement("div");
  container.classList.add("container");

  document.body.appendChild(container);
  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      const grid = document.createElement("div");
      grid.classList.add("square");
      grid.style.width = `${100 / squares}%`;
      grid.style.height = `${100 / squares}%`;
      grid.style.backgroundColor = getRandomColor();

      container.appendChild(grid);
      const gridSelector = document.querySelectorAll(".square");
      grid.addEventListener("mouseover", (event) => {
        grid.style.backgroundColor = getRandomColor();
      });
    }
  }
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "gray", "black", "orange", "white"];
  const randInt = Math.floor(Math.random() * colors.length);
  return colors[randInt];
}

createGrid();
