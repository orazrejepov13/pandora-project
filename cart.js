const cartSide = document.querySelector(".cart")

const cardsStorage = JSON.parse(localStorage.getItem("cart") || "[]")

if (cardsStorage.length) {
    cardsStorage.forEach(el => {
        const {title} = el
        const newCard = document.createElement("div")
        newCard.innerHTML = `<p class="card_title" style="margin-left: 50px;">${title}<button style="margin-left: 45px; margin-bottom: -30px; border: 1px solid black; border-radius: 8px 8px 8px; padding: 5px;">Delete</button>`
        cartSide.appendChild(newCard)
    })
}