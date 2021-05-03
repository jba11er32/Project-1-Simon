// Select all the buttons and put in an array. We can then add functionality to each of these buttons
const buttons = document.querySelectorAll('.button')

const playButton = document.querySelector('.play-button')

const checkAnswer = document.querySelector('.check')

const playerScore = document.querySelector('.js-player-score')

const highScore = document.querySelector('.js-high-score')

let randomArrayOfButtons = []

let playerArray = []

let score = 0;

let highestScore = 0;




function changeOpacity() {
    this.classList.remove('lightUp')
    // some trick from csstricks
    void this.offsetWidth
    this.classList.add('lightUp')
    this.style.padding = 0
    this.style.border = 0
}

function addColorToPlayerArray (event) {
    playerArray.push(event.target.id)
}


function addColorToRandomArray (arr) {
    for (let i = 0; i < 1; i++) {
        arr.push(`${buttons[Math.floor(Math.random() * buttons.length)].id}`)
    }
}

function addScore() {
    score++
    if (score > highestScore) {
        highestScore++
    }
}





for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changeOpacity)
    buttons[i].addEventListener('click', addColorToPlayerArray)
}



// https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
// used this thread to set a delay to the for loop light up
const timer = ms => new Promise(res => setTimeout(res, ms))
    
async function memoryArray (arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(randomArrayOfButtons[i])
        let button = this.document.getElementById(arr[i])
        button.classList.remove('lightUp')
        void button.offsetWidth
        button.classList.add('lightUp')
        // console.log(button)
        await timer(1000)
    }
}

playButton.addEventListener('click', () => {
    playerArray = []

    addColorToRandomArray(randomArrayOfButtons)
    
    memoryArray(randomArrayOfButtons);
})



function compareArrays() {
    if (playerArray.length !== randomArrayOfButtons.length) {
        alert('Incorrect. Start Over!')
        randomArrayOfButtons = []
        score = 0
        playerScore.innerText = `Score: ${score}`
        return 
    }

    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i] !== randomArrayOfButtons[i]) {
            alert('Incorrect. Start Over!')
            randomArrayOfButtons = []
            score = 0
            playerScore.innerText = `Score: ${score}`
            return
        }
    }

    addColorToRandomArray(randomArrayOfButtons)
    memoryArray(randomArrayOfButtons)
    addScore()
    playerScore.innerText = `Score: ${score}`
    highScore.innerText = `Your High Score: ${highestScore}`
    
    
    
    playerArray = []

}


checkAnswer.addEventListener('click', compareArrays)
