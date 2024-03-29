interface Pokemon {
  number: string;
  name: string;
  description: string;
  imageUrl: string;
}

const pokedex: Pokemon[] = [
  {
    number: '001',
    name: 'Bulbasaur',
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '004',
    name: 'Charmander',
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '007',
    name: 'Squirtle',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '002',
    name: 'Ivysaur',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png',
  },
  {
    number: '005',
    name: 'Charmeleon',
    description:
      'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png',
  },
  {
    number: '008',
    name: 'Wartortle',
    description:
      'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png',
  },
  {
    number: '003',
    name: 'Venusaur',
    description:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png',
  },
  {
    number: '006',
    name: 'Charizard',
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png',
  },
  {
    number: '009',
    name: 'Blastoise',
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png',
  },
];

function renderPokemon(pokemon: Pokemon): HTMLDivElement {
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('class', 'column-third');
  const childDiv = document.createElement('div');
  childDiv.setAttribute('class', 'pokemon-card');
  mainDiv.appendChild(childDiv);
  const childDivImg = document.createElement('img');
  childDivImg.setAttribute('src', pokemon.imageUrl);
  const grandChildDiv = document.createElement('div');
  grandChildDiv.setAttribute('class', 'pokemon-card-text');
  const grandChildH2 = document.createElement('h2');
  grandChildH2.textContent = pokemon.name;
  const grandChildH3 = document.createElement('h3');
  grandChildH3.textContent = pokemon.number;
  const grandChildP = document.createElement('p');
  grandChildP.textContent = pokemon.description;
  childDiv.appendChild(childDivImg);
  childDiv.appendChild(grandChildDiv);
  grandChildDiv.appendChild(grandChildH2);
  grandChildDiv.appendChild(grandChildH3);
  grandChildDiv.appendChild(grandChildP);
  return mainDiv;
}

const $row = document.querySelector('.row');
if (!$row) throw new Error('The $row query failed');

for (const pokemon of pokedex) {
  const pokemonElement = renderPokemon(pokemon);
  $row.appendChild(pokemonElement);
}
