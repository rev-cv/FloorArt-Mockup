const menu = document.querySelector(".modal-menu")
const search = document.querySelector(".modal-search")
const favorite = document.querySelector(".modal-favorite")
const basket = document.querySelector(".modal-basket")
const checkout = document.querySelector(".modal-checkout")

let modalLevel = 0;

function openPopUp(element){
    element.style.display = "flex";
    setTimeout(()=>{
        element.style.opacity = 1;
        element.style.backdropFilter = "blur(6px)";
    }, 50);

    const popup = element.querySelector(".pop-up")
    popup.onclick = event => event.stopPropagation();

    setTimeout(()=>{
        popup.style.opacity = 1;
        popup.style.transform = "translateY(-40%)";
    }, 300);

    const cwa = document.body.clientWidth;
    document.body.style.overflow = "hidden";
    const cwl = document.body.clientWidth;

    if ( cwa < cwl ) {
        document.body.style.paddingRight = cwl - cwa + "px";
    };

    modalLevel += 1;
}

function closePopUp(element){
    const popup = element.querySelector(".pop-up")
    popup.style.opacity = 0;
    popup.style.transform = "translateY(-55%)";

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

document.querySelector("#open-checkout").onclick = () => openPopUp(checkout);
checkout.onclick = () => closePopUp(checkout);

