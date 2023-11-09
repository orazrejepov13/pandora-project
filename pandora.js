const cards = document.querySelectorAll(".card")

cards.forEach((el, idx) => {
    console.dir(el)
    const btn = el.childNodes[4]
    const title = el.childNodes[1].innerText 
    
    btn.addEventListener("click", () => {
        const cardsStorage = localStorage.getItem("cart") || "[]"
        const cart = JSON.parse(cardsStorage)
        const card = { title }
        localStorage.setItem("cart", JSON.stringify([...cart , card]))
    })
})