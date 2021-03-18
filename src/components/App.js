
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
//  fetch('./data/pokemon/pokemon.json')
//    .then(resp => resp.json())
//    .then(console.log)
//    .catch(console.error);

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.innerHTML = '<img src="./resources/pokemon.png" alt="Logo Pokemon" id="logo"><h1>Memorice</h1><h2>¿Estás listo para ser un entrenador Pokemón?</h2><h3>Selecciona con cuántos pares quieres jugar</h3><div class="difficulty"><img src="./resources/pokeball.png" alt="Tres pares de cartas" class="dificultad" id="easy"><img src="./resources/superball.png" alt="Seis pares de cartas"  class="dificultad" id="medium"><img src="./resources/ultraball.png" alt="Nueve pares de cartas"  class="dificultad" id="hard"></div><footer><img id="img-footer" src="./resources/ash.gif" alt=""></footer>';

  return el;
};

const gamePage = () => {
  const el = document.createElement('div');

  el.className = 'gamePage';
  el.innerHTML =  '';

  return el;
};

const congratsPage = () => {
  const el = document.createElement('div');

  el.className = 'congratsPage';
  el.innerHTML =  '<h4>Felicitaciones</h4><img src="./resources/celebrate.gif" alt="Pokemones celebrando victoria" id="celebrate1"><img src="./resources/confetti.gif" alt="Confetti" id="celebrate2">';

  return el;
};



export { App, gamePage, congratsPage };