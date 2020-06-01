let btn = document.querySelector(".btn1")
let form = document.querySelector('.form')
btn.addEventListener('click', () => {
    console.log('in')
    
    alert('Your will now be sent.  Thank you for contacting me')
    // form.reset()
})



let headings = document.querySelectorAll(".anch")

headings.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        e.target.style.color = "white"
    })
})

headings.forEach(item => {
    item.addEventListener('mouseleave', (e) => {
        e.target.style.color = "purple"
    })
})