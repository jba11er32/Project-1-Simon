// Select all the buttons and put in an array. We can then add functionality to each of these buttons
const buttons = document.querySelectorAll('.button')
console.log(buttons)

// The play button should
const playButton = document.querySelector('.play-button')

function changeOpacity() {
    this.classList.remove('lightUp')
    // some trick from csstricks
    void this.offsetWidth
    this.classList.add('lightUp')
}




for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changeOpacity)
}







let randomArrayOfButtons = []


playButton.addEventListener('click', () => {
    
    for (let i = 0; i < 10; i++) {
        randomArrayOfButtons.push(`${buttons[Math.floor(Math.random() * buttons.length)].id}`)

    }

// https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
// used this thread to set a delay to the for loop light up
    const timer = ms => new Promise(res => setTimeout(res, ms))
    
    async function memoryArray (arr) {
        for (let i = 0; i < 10; i++) {
            // console.log(randomArrayOfButtons[i])
            let button = this.document.getElementById(arr[i])
            button.classList.remove('lightUp')
            void button.offsetWidth
            button.classList.add('lightUp')
            // console.log(button)
            await timer(1000)
        }
    }


    memoryArray(randomArrayOfButtons);


    let playerArrayOfButtons = []




    
    
    console.log(randomArrayOfButtons)
    randomArrayOfButtons = []
})
