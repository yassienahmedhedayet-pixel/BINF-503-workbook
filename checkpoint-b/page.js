// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.

import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.className = "row";
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.appendChild(li);
  });
}

export function matching() {
  return items.filter((item) => item.category === "stationery");
}

export function start() {
  renderItems(items);

  document.querySelector("#apply").addEventListener("click", () => {
    renderItems(matching());
  });
}


