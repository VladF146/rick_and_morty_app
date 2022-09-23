const form = document.querySelector('[data-js="form"]');
const cardList = document.querySelector('[data-js="card-list"]');

form.addEventListener("submit", (e) => {
  cardList.innerHTML = "";
  e.preventDefault();
  const data = new FormData(e.target);
  const values = Object.fromEntries(data);
  fetchAPIData(values);
});

function fetchAPIData(data) {
  const { status, name } = data;
  console.log(status, name);

  console.log(Boolean(name));
  fetch(
    `https://rickandmortyapi.com/api/character/?status=${status}${
      name ? `&name=${name}` : ""
    }
    `
  )
    .then((e) => e.json())
    .then((e) => {
      e.results?.forEach((e) => renderCard(e));
    })
    .catch((error) =>
      console.error(
        "Please enter a name from the Rick & Morty universe.",
        error
      )
    );
}

function renderCard(data) {
  const card = document.createElement("li");
  const img = document.createElement("img");
  const span = document.createElement("span");

  img.src = data.image;
  span.textContent = data.name;

  card.classList.add(data.status.toLowerCase());

  card.append(img, span);
  cardList.append(card);
}

window.addEventListener("load", () =>
  fetch("https://rickandmortyapi.com/api/character")
    .then((e) => e.json())
    .then((e) => {
      e.results.forEach((e) => renderCard(e));
    })
);
