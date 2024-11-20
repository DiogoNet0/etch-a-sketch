// Define the grid size
const rows = 55;
const columns = 55;

// Get the grid container element
const container = document.querySelector(".container");

// Create the grid dynamically
for (let i = 0; i < rows; i += 1) {
  for (let j = 0; j < columns; j += 1) {
    // Create a grid item element
    const gridElement = document.createElement("div");
    gridElement.className = "grid-item";

    // Append the grid item to the grid container
    container.appendChild(gridElement);
  }
}

const gridSize = (a) => 100 / a;
const gs = gridSize(rows);

const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
  Object.assign(item.style, {
    height: `${gs}%`,
    width: `${gs}%`,
  });
});
