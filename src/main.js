function getData(done) {
  const results = fetch("./datos.json");
  results
    .then((res) => res.json())
    .then((data) => {
      done(data);
    });
}



getData((data) => {
  data.results.forEach((personaje) => {
    const article = document.createRange().createContextualFragment(`
        <article>

        <div class="container">
          <img class="img-player" src=${personaje.image} alt="jugador">
          <img class="img-country-player" src=${personaje.national_team} alt="bandera-pais">

          <h2 class="name-player">${personaje.name}</h2>
          <span class="position-player">${personaje.position}</span>
          <span class="birth-Date-player">${personaje.birth_Date}</span>
          

        </div>

      </article>`
      );

    const main = document.querySelector("main");
    main.appendChild(article);
  });
});
