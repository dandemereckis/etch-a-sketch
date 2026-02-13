const containerEl = document.querySelector(".container");

let size = Number(prompt("How big would you like?"));

for (let i = 1; i <= size; i++) {
  const boxEl = document.createElement("div");
  boxEl.style.flexBasis = 100 / Math.sqrt(size) + "%";
  boxEl.classList.add("box");
  containerEl.appendChild(boxEl);
}
