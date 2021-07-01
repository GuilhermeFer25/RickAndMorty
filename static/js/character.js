export default class Character {
  constructor({ name, image, gender, status, species, origin }) {
    this.name = name
    this.image = image
    this.gender = gender
    this.status = status
    this.species = species
    this.origin = origin.name
    this.characterImageContainer = document.querySelector("#character-image-container")
    this.characterDescriptionContainer = document.querySelector("#character-description-container")
    this.characterNameContainer = document.querySelector("#character-name-container")
    this.characterNamePlaceholder = document.querySelector("#character-name-placeholder")
    this.render()

  }
  buildImage() {
    return `
      <img class="character-image" src=${this.image} alt=${this.name}>
    `
  }
  buildName() {
    return `
    <div class="character-name">
    <h2>${this.name}</h2>
  </div>
  `
  }
  buildDescription() {
    return `
    <div class="character-labels">
    <h3 class="character-label">Genero: ${this.gender}</h3>
    <h3 class="character-label">Origem: ${this.origin}</h3>
    <h3 class="character-label">Especie: ${this.species}</h3>
    <h3 class="character-label">Status: ${this.status}</h3>
    </div>
    `
  }
  render() {
    this.characterImageContainer.innerHTML = this.buildImage()
    this.characterNameContainer.innerHTML = this.buildName()
    this.characterDescriptionContainer.innerHTML = this.buildDescription()
    this.characterNamePlaceholder.innerHTML = this.name
  }
}