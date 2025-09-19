window.addEventListener("DOMContentLoaded", () => {
  console.log("Hello");

  const url = "https://rickandmortyapi.com/api/character";
  // get
  // fetch
  // const response = fetch(url); // Promise: pending, fulfilled, rejected

  fetch(url)
    .then((response) => {
      console.log({ response });
    })
    .catch((error) => {
      console.error({ error });
    });

  console.log({ response });
});
