
/**
 * Adds one product card to the end of the list.
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.className = "card";

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceElement = document.createElement("p");
  priceElement.className = "price";
  priceElement.textContent = `${price} EGP`;

  card.append(heading, priceElement);
  document.querySelector("#list").appendChild(card);
}

/**
 * Removes the card with that name, if there is one.
 */
export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out.
 */
export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list.
 */
export function clearProducts() {
  const cards = document.querySelectorAll("#list .card");

  cards.forEach((card) => card.remove());
}

/**
 * Connects the Add and Reset buttons.
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
