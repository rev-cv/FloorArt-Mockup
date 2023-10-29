const menu = document.querySelector(".modal-menu")
const search = document.querySelector(".modal-search")
const favorite = document.querySelector(".modal-favorite")
const basket = document.querySelector(".modal-basket")
const checkout = document.querySelector(".modal-checkout")
const cardviewer = document.querySelector(".modal-card-viewer")
const cooperation = document.querySelector(".modal-cooperation")

let modalLevel = 0;


function openPopUp(element, isShiftY){
    element.style.display = "flex";
    setTimeout(()=>{
        element.style.opacity = 1;
        element.style.backdropFilter = "blur(6px)";
    }, 50);

    const popup = element.querySelector(".pop-up")
    popup.onclick = event => event.stopPropagation();

    setTimeout(()=>{
        popup.style.opacity = 1;
        if (isShiftY === true){
            popup.style.transform = "translateY(-40%)";
        }
    }, 300);

    const cwa = document.body.clientWidth;
    document.body.style.overflow = "hidden";
    const cwl = document.body.clientWidth;

    if ( cwa < cwl ) {
        document.body.style.paddingRight = cwl - cwa + "px";
    };

    modalLevel += 1;

    if (element.classList.contains("modal-card-viewer")){
        element.querySelector(".about").scrollTop = 0;
    }
}


function closePopUp(element, isShiftY){
    const popup = element.querySelector(".pop-up")
    popup.style.opacity = 0;

    if (isShiftY === true){
        popup.style.transform = "translateY(-55%)";
    }

    setTimeout(()=>{
        element.style.opacity = 0;
        element.style.backdropFilter = "blur(0px)";
    }, 200)

    setTimeout(()=>{
        element.style.display = ""
    }, 800)

    modalLevel -= 1;

    if (modalLevel === 0){
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }
}
        

function openModalWidows(element){
    element.style.display = "flex";
    setTimeout(()=>{
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
    }, 50);

    const cwa = document.body.clientWidth;
    document.body.style.overflow = "hidden";
    const cwl = document.body.clientWidth;

    if ( cwa < cwl ) {
        document.body.style.paddingRight = cwl - cwa + "px";
    };

    modalLevel += 1;
}


function closeModalWidows(event){
    const modal = event.currentTarget.parentNode
    modal.style.opacity = 0
    modal.style.transform = "translateY(-3em)"
    setTimeout(()=>{
        modal.style.display = ""
    }, 300)

    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    modalLevel -= 1;
}


document.querySelector("#open-menu").onclick = () => openModalWidows(menu);
document.querySelector("#open-search").onclick = () => openModalWidows(search);
document.querySelector("#open-basket").onclick = () => openModalWidows(basket);
document.querySelector("#open-favorite").onclick = () => openModalWidows(favorite);
document.querySelector("#open-menu-on-pc").onclick = () => openModalWidows(search);
document.querySelectorAll(".modal-close").forEach( elem => elem.onclick = closeModalWidows)

document.querySelector("#open-checkout").onclick = () => openPopUp(checkout, true);
document.querySelectorAll(".open-card-viewer").forEach( elem => {
    elem.onclick = () => openPopUp(cardviewer)
})

checkout.onclick = () => closePopUp(checkout);
cardviewer.onclick = () => closePopUp(cardviewer);
document.querySelectorAll(".modal-card-viewer > .pop-up > .pop-up-close").forEach(elem => {
    elem.onclick = () => closePopUp(cardviewer);
})


const menuCatalogManufacturer = document.querySelector(".menu-catalog-manufacturer")
if (menuCatalogManufacturer !== null){
    menuCatalogManufacturer.onclick = event => {
        event.currentTarget.parentNode
            .querySelector(".options")
            .classList.toggle("show")
    };
}


document.addEventListener('click', (event) => {
    const a = !event.target.matches(".menu-catalog-manufacturer > .selected")
    const b = !event.target.matches(".menu-catalog-manufacturer > .selected > span")
    const c = !event.target.matches(".menu-catalog-manufacturer > .selected > svg")

    if(a & b & c) {
        document.querySelectorAll(".menu-catalog-manufacturer > .options").forEach( elem => {
            elem.classList.remove("show")
        })
    } 
}) 


const sortByPrice = document.querySelector(".catalog-navigaror > .btns > .sort-by-price")
if (sortByPrice !== null){
    sortByPrice.onclick = event => {
        event.currentTarget.classList.toggle("reverse")
    }
}


const openFiltersByCatalog = document.querySelector(".open-filters-by-catalog")
if (openFiltersByCatalog !== null){
    openFiltersByCatalog.onclick = event => {
        event.currentTarget.parentNode.parentNode
            .querySelector(".filters")
            .classList.toggle("show")
    }
}


const fFilterClose = document.querySelector(".filters > .filter-close")
if (fFilterClose !== null){
    fFilterClose.onclick = event => {
        event.currentTarget.parentNode.classList.remove("show")
    }
}   


if (cooperation !== null){

    document.querySelector("#open-offer-cooperation > button").onclick = () => {
        openPopUp(cooperation, true)
    }

    cooperation.onclick = () => closePopUp(cooperation);

    document.querySelector(".how-are-you > .selected").onclick = event => {
        event.currentTarget.parentNode.querySelector('.options').classList.toggle("show")
    }

    document.querySelectorAll(".how-are-you > .options > .point").forEach( btn => {
        
        btn.onclick = event => {
            const selected = event.currentTarget.parentNode.parentNode.querySelector(".selected > span");
            event.currentTarget.parentNode.classList.remove("show")
            selected.innerText = event.currentTarget.innerText;
        }
    })
}


// ↓ код скрывает / открывает панель навигации в каталоге
var prevScrollpos = window.scrollY;
const catalogNavigator = document.querySelector(".catalog-navigaror")
window.onscroll = function() {

    if (catalogNavigator === null){
        return
    }

    if (700 < window.innerWidth) {
        catalogNavigator.style.display = "";
        return
    }

    var currentScrollPos = window.scrollY;
    
    if (prevScrollpos > currentScrollPos) {
        catalogNavigator.style.display = "";
    } else {
        catalogNavigator.style.display = "none";
    }
    
    prevScrollpos = currentScrollPos;
}