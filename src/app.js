const TOKEN = "";

window.addEventListener("DOMContentLoaded", async () => {
  console.log("Hello");

  const url = "https://rickandmortyapi.com/api/character";
  // get
  // fetch
  // const response = fetch(url); // Promise: pending, fulfilled, rejected

  // fetch(url)
  //   .then((response) => {
  //     console.log(
  //       `Status: ${response.status}, status text: ${response.statusText}`
  //     );
  //     console.log({ response });

  //     return response.json(); // Promise
  //   })
  //   .then((data) => {
  //     console.log(data); //

  //     const root = document.getElementById("root");
  //     const characters = data.results;
  //     characters.forEach((element) => {
  //       const characterHtml = document.createElement("div");
  //       characterHtml.innerHTML = `<h2>${element.name}</h2><div><img src="${element.image}" /></div>`;
  //       root.appendChild(characterHtml);
  //     });
  //   })
  //   .catch((error) => {
  //     console.error({ error });
  //   })
  //   .finally(() => {
  //     const loadingHtml = document.getElementById("loading");
  //     loadingHtml.textContent = "";
  //   });

  try {
    const response = await fetch(url);

    console.log(
      `Status: ${response.status}, status text: ${response.statusText}`
    );
    console.log({ response });

    const data = await response.json();

    console.log(data); //

    render(data.results);
  } catch (error) {
    console.error(error);
  } finally {
    const loadingHtml = document.getElementById("loading");
    loadingHtml.textContent = "";
  }
});

const fetchData = async () => {
  const response = await fetch(
    "https://api.airtable.com/v0/appHETENHL4rmOb9N/characters",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();

  return data;
};

const render = (data) => {
  const root = document.getElementById("root");
  const characters = data;
  characters.forEach((element) => {
    const characterHtml = document.createElement("div");
    characterHtml.innerHTML = `<h2>${element.name}</h2><div><img src="${element.image}" /></div>`;
    root.appendChild(characterHtml);
  });
};

const form = document.getElementById("main-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = document.getElementById("name").value;
  const statusValue = document.getElementById("status").value;

  // add record to airtable
  fetch("https://api.airtable.com/v0/appHETENHL4rmOb9N/characters", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            name: nameValue,
            status: statusValue,
          },
        },
      ],
    }),
  });

  console.log({ nameValue, statusValue });
});
