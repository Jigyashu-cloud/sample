
const cup = document.getElementById('hoverTea')
const sound = new Audio('./garam_hain_garam_hain.mp3')

cup.addEventListener('mouseenter', () => {
    sound.currentTime = 0
    sound.play()
})