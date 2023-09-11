
function shiftCardsBack (event){
    const parent = event.currentTarget.parentNode.parentNode.querySelector(".board-cards-cards")
    const cardWidth = parent.querySelector(".card").offsetWidth
    parent.scrollBy({
        left: (cardWidth + 20) * -1, // 20px - margin-right
        behavior: 'smooth'
    });

}


function shiftCardsNext (event){
    const parent = event.currentTarget.parentNode.parentNode.querySelector(".board-cards-cards")
    const cardWidth = parent.querySelector(".card").offsetWidth
    parent.scrollBy({
        left: cardWidth + 20, // 20px - margin-right
        behavior: 'smooth'
    });
}


document.querySelectorAll(".block-in-main > .board-cards-btns > .board-cards-h-header-back").forEach( elem => {
    elem.onclick = shiftCardsBack
})

document.querySelectorAll(".block-in-main > .board-cards-btns > .board-cards-h-header-next").forEach( elem => {
    elem.onclick = shiftCardsNext
})




function addInFavorite(event){
    // на странице просмотра товара разворачивает список со всеми свойствами
    event.currentTarget.classList.toggle("added-favorite")
}

const openAllProps = document.querySelector(".modal-card-viewer > .pop-up > .about > #set-favorite")
if (openAllProps !== null){
    openAllProps.onclick = addInFavorite
}
