function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // Para a execução da função
    audio.currentTime = 0; // seta o audio para seu ínicio
    audio.play();
    key.classList.add('playing');
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //Pula essa função
    console.log(e.propertyName)
    this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)

