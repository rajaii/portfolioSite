

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