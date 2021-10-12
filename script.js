const verseInput = document.querySelector('[data-verse-input]')
const sendButton = document.querySelector('[data-send-button')
const verses = document.querySelector('[data-verses]')
const deleteVerseButton = document.querySelector('[data-delete-verse-button]')
let id = 0;

sendButton.addEventListener('click', () => {
    sendNewVerse()
})

verses.addEventListener('click', (event) => {
    event.target.hasAttribute('data-delete-verse-button') ? removeVerse(event.target) : null
})

const sendNewVerse = () => {

    // TO-DO: remove quotation marks from html and send to css.
    const newVerse = `

    <div class="verses__verse" data-id="${id}">
        <button class="verses__delete-verse" data-delete-verse-button>X</button>
        <p><span class="verses__quotation-marks">"</span>${verseInput.value}<p>
    </div>

    `
    
    id++;
    verses.innerHTML += newVerse
    clearInput()
}

const removeVerse = (element) => {
    element.parentNode.remove()
}

const clearInput = () => {
    verseInput.value = ''
}