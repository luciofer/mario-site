const contactUsBtn = document.querySelector("#contact-btn")
const sendBtn = document.querySelector("#send-btn")
const infoForm = document.querySelector("#contact-form")


contactUsBtn.addEventListener('click', (event)  => {
    event.preventDefault();
    infoForm.className = 'contact-wrapper'
})

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    infoForm.className = 'contact-wrapper-hidden'
})