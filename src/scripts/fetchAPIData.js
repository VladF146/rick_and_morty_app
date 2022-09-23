import { renderCard } from "./renderCard.js";

export async function fetchAPIData(data, root) {
  try {
    const apiURL = data
      ? `https://rickandmortyapi.com/api/character/?status=${data.status}${
          data.name ? `&name=${data.name}` : ""
        }
    `
      : `https://rickandmortyapi.com/api/character?page=${
          Math.floor(Math.random() * 42) + 1
        }`;

    const response = await fetch(apiURL);
    const apiData = await response.json();
    apiData.results?.forEach((e) => renderCard(e, root));
  } catch (error) {
    (error) => console.error(error.message);
  }
}
