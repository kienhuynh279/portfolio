const audio = document.querySelector("audio")
const avatar = document.querySelector(".home-img img")

avatar.addEventListener('mouseover', (e)=> {
    audio.currentTime = 6;
    audio.play();
})

avatar.addEventListener('mouseleave', (e)=> {
    audio.pause();
})
