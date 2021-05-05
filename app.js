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

const instructions = document.getElementById('show-instructions')

const modal = document.getElementById('modal')

const closeInstructions = document.getElementById('close')

const directions = document.querySelector('.directions')

let slowSpeed = 900



const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}


function changeOpacity() {
    this.classList.remove('lightUp')
    // some trick from csstricks
    void this.offsetWidth
    this.classList.add('lightUp')
}

function addColorToPlayerArray (event) {
    console.log(event)
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
        

        if (arr.length > 2) {
            slowSpeed = 600
        } else if (arr.length > 4) {
            slowSpeed = 400
        } else if (arr.length > 6) {
            slowSpeed = 250
        } else if (arr.length > 8) {
            slowSpeed = 100
        } else {
            slowSpeed = 900
        }
        
        await timer(slowSpeed)

    }
}


async function compareArrays() {
    if (playerArray.length !== randomArrayOfButtons.length) {
        directions.innerText = 'Incorrect. Start Over!'
        randomArrayOfButtons = []
        score = 0
        playerScore.innerText = `Score: ${score}`
        return 
    }

    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i] !== randomArrayOfButtons[i]) {
            directions.innerText = 'Incorrect. Start Over!'
            randomArrayOfButtons = []
            score = 0
            playerScore.innerText = `Score: ${score}`
            return
        } else {
            addScore()
        }
    }
    
    
    addColorToRandomArray(randomArrayOfButtons)
    playerScore.innerText = `Score: ${score}`
    highScore.innerText = `Your High Score: ${highestScore}`
    await timer(500)
    memoryArray(randomArrayOfButtons)

    
    playerArray = []
}


instructions.addEventListener('click', openModal)

closeInstructions.addEventListener('click', closeModal)



playButton.addEventListener('click', async function (){
    directions.innerText = 'Watch Closely'
    playerArray = []
    addColorToRandomArray(randomArrayOfButtons)
    await timer(750)
    memoryArray(randomArrayOfButtons);

})



checkAnswer.addEventListener('click', compareArrays)
