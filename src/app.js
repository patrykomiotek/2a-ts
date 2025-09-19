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
    })
    .catch((error) => {
      console.error({ error });
    });

  // console.log({ response });
});
