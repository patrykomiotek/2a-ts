window.addEventListener("DOMContentLoaded", () => {
  console.log("Hello");

  const url = "https://rickandmortyapi.com/api/character";
  // get
  // fetch
  // const response = fetch(url); // Promise: pending, fulfilled, rejected

  fetch(url)
    .then((response) => {
      console.log(
        `Status: ${response.status}, status text: ${response.statusText}`
      );
      console.log({ response });

      return response.json(); // Promise
    })
    .then((data) => {
      console.log(data); //

      const root = document.getElementById("root");
      const characters = data.results;
      characters.forEach((element) => {
        const characterHtml = document.createElement("div");
        characterHtml.innerHTML = `<h2>${element.name}</h2><div><img src="${element.image}" /></div>`;
        root.appendChild(characterHtml);
      });
    })
    .catch((error) => {
      console.error({ error });
    })
    .finally(() => {
      const loadingHtml = document.getElementById("loading");
      loadingHtml.textContent = "";
    });

  // console.log({ response });
});
