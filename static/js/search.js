import Character from "./character.js"

var search = document.querySelector('#search')

search.addEventListener('keyup', () => {
  searchCaracter(search.value)
})
async function searchCaracter(search) {
  const characterSearch = await fetch(`https://rickandmortyapi.com/api/character/?name=` + search)
    .then(response => response.json())
  new Character(characterSearch.results[0])
  console.log(characterSearch)
}

