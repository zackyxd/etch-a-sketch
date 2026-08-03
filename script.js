const container = document.createElement("div");
container.classList.add("container");

const colors = ["red", "blue", "green", "yellow", "purple", "gray", "black", "orange"];

for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("square");
  grid.addEventListener("mouseover", (event) => {
    const randInt = Math.floor(Math.random() * colors.length + 1);
    grid.style.backgroundColor = colors[randInt];
  });
  container.appendChild(grid);
}

document.body.appendChild(container);
