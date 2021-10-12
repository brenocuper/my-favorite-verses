const verse = document.querySelector('[data-verse-input]')
const sendButton = document.querySelector('[data-send-button')
const verses = document.querySelector('[data-verses]')

sendButton.addEventListener('click', () => {
    sendNewVerse()
})

const sendNewVerse = () => {
    const newVerse = `
        <div class="verses__verse"><span class="verses__quotation-marks">"</span>${verse.value}</div>
    `

    verses.innerHTML += newVerse;
}