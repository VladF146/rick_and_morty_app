export function renderCard(data, root) {
  const card = document.createElement("li");
  const img = document.createElement("img");
  const span = document.createElement("span");

  img.src = data.image;
  span.textContent = data.name;

  card.classList.add(data.status.toLowerCase());
  card.append(img, span);
  root.append(card);
}
