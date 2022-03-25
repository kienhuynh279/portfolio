const audio = document.querySelector("audio")
const avatar = document.querySelector(".home-img img")
const contactBtn = document.getElementById('contact-btn')



avatar.addEventListener('mouseover', (e)=> {
    audio.currentTime = 6;
    audio.play();
})

avatar.addEventListener('mouseleave', (e)=> {
    audio.pause();
})

contactBtn.addEventListener('click', function(e) {
    e.preventDefault()

    const contactName = document.getElementById('name').value
    const contactEmail = document.getElementById('email').value
    const contactSubject = document.getElementById('subject').value
    const contactMessage = document.getElementById('message').value


    const body = 'name: ' + contactName + '</br> email: ' + contactEmail + '</br> subject: ' + contactSubject + '</br> message: ' + contactMessage

    Email.send({
        Host : "smtp.gmail.com",
        Username : "kienhuynh279@gmail.com",
        Password : "yzfzsnwnhmnrwlrg",
        To : 'kienhuynh279@gmail.com',
        From : contactEmail,
        Subject : contactSubject,
        Body : body
    }).then(
        alert('Cảm ơn bạn đã gửi thư cho chúng tôi!')
    );
})





