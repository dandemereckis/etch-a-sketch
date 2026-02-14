const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");

let size;

function getSize() {
  size =
    Number(prompt("How many numbers per side of the grid would you like?")) **
    2;
  if (size > 10000) {
    alert("Cannot pick a number greater than 100");
    size =
      Number(prompt("How many numbers per side of the grid would you like?")) **
      2;
  } else {
    return size;
  }
}

function createGrid() {
  getSize();
  for (let i = 1; i <= size; i++) {
    const boxEl = document.createElement("div");
    boxEl.style.flexBasis = 100 / Math.sqrt(size) + "%";
    boxEl.classList.add("box");
    containerEl.appendChild(boxEl);
  }
}

btnEl.addEventListener("click", () => {
  containerEl.innerHTML = "";
  createGrid();
});

createGrid();
