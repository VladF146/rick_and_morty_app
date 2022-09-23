import { fetchAPIData } from "./scripts/fetchAPIData.js";

const form = document.querySelector('[data-js="form"]');
const cardList = document.querySelector('[data-js="card-list"]');

form.addEventListener("submit", (e) => {
  cardList.innerHTML = "";
  e.preventDefault();
  const data = new FormData(e.target);
  const values = Object.fromEntries(data);
  fetchAPIData(values, cardList);
});

window.addEventListener("load", () => fetchAPIData("", cardList));
