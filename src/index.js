// Your code here
const API = ('http://localhost:3000/characters')



fetch(API)
.then(res => res.json())
.then(renderCharacters)

function renderCharacters(characters) {
    console.log(renderCharacters)
    characters.forEach(renderCharacter)
}

function renderCharacter(character) {
    const characterBarDiv = document.getElementById('character-bar')

    const characterName = document.createElement('span')
    // const nameDisplay = document.createElement('name')
    characterName.textContent = character.name
    // nameDisplay.alt = character.characterName
    characterBarDiv.append(characterName)

    characterName.addEventListener('click', e => renderInfo(character))
}

function renderInfo(character) {
    console.log(character.name)

    const name = el('name')
    const image = el('image')
    const enterVotes = el('votes')
    const submitVotes = el('votes')
    const votes = el('vote-count')
    // const voteCount = el('votes-form')
    // const votesForm = el('votes-form')
    // const resetButton = el('reset-btn')
    
    name.textContent = character.name
    image.src = character.image
    enterVotes.textContent = character.votes
    submitVotes.textContent = character.votes
    votes.textContent = character.votes
    // voteCount.textContent = character.votes
    // votesForm.textContent = character.votes
    // resetButton.textContent = character.reset
}

function el(elementName){
    return document.getElementById(elementName)

    
}

// voteForm.addEventListener('submit', (e) => {

// })

el('votes-form').addEventListener('text', enterVotes)
el('votes-form').addEventListener('submit', addVotes)

function enterVotes(e){
    e.preventDefault()

}
function addVotes(e) {
    // const votesForm = document.getElementById('votes-form')

    // const characterVotes = document.createElement('')


}
