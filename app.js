const buttons = document.querySelectorAll('.button')


function changeOpacity() {
    this.classList.remove('lightUp')
    // some trick from csstricks
    void this.offsetWidth
    this.classList.add('lightUp')
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changeOpacity)
}


