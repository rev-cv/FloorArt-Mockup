let firstTouch = 0;
let lastTouch = 0;
let caruselBlocks = []
let widthBlock = 0;
let posBlock = []



function startTrackingTouch (event) {
    if (event.type === "touchstart"){
        firstTouch = event.touches[0].clientX
    } else {
        firstTouch = event.clientX
    }
}



function trackingTouch (event) {
    let blockWidth = Number( getComputedStyle(caruselBlocks[0]).width)

    if (event.which === 1 | event.type === "touchmove") {
        lastTouch = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
        const diff = lastTouch - firstTouch

        // console.log(event.touches)
        

        caruselBlocks.forEach( (block, index) => {
            const shift = diff < 0 ? 
                `calc(${(100 * posBlock[index])}% - ${diff*-1}px)`
                :
                `calc(${(100 * posBlock[index])}% + ${diff}px)`

            block.style.transform = `translateX(${shift})`;
            // console.log(shift)
            
        })
    }
}



function finishTrackingTouch (event) {
    let blockWidth = Number( getComputedStyle(caruselBlocks[0]).width.replace("px", "") )
    const diff = lastTouch - firstTouch;

    if (diff < 0){ // крутить вперед?
        if (posBlock.indexOf(0) + 1 != posBlock.length){
            // не является ли текущий элемент последним?
            if (diff < blockWidth * -1 / 4) {
                // прошла ли мышка хотя бы треть пути?
                posBlock = posBlock.map(item => item - 1);
            }
        }
    } else if (posBlock.indexOf(0) != 0) {
        // не является ли текущий элемент первым?
        if (diff > blockWidth / 4) {
            // прошла ли мышка хотя бы треть пути?
            posBlock = posBlock.map(item => item + 1);
        }
    }

    caruselBlocks.forEach( (block, index) => {
        block.style.transition = "transform 300ms ease-out";
        block.style.transform = `translateX(${100 * posBlock[index]}%)`;
        setTimeout( () => {
            block.style.transition = "";
        }, 300)
    })

    document.querySelectorAll(".carusel > .circles > div").forEach( (div, index) => {
        div.style.opacity = posBlock[index] === 0 ? .9 : .5 
    })
}



const circles = document.querySelector(".carusel > .circles")



document.querySelectorAll(".carusel > .carusel-block").forEach( (block, index) => {
    block.style.transform = `translateX(${100 * index}%)`;

    block.addEventListener("mousedown", startTrackingTouch)
    block.addEventListener("mousemove", trackingTouch)
    block.addEventListener("mouseup", finishTrackingTouch)

    block.addEventListener("touchstart", startTrackingTouch)
    block.addEventListener("touchmove", trackingTouch)
    block.addEventListener("touchend", finishTrackingTouch)

    caruselBlocks.push(block)
    posBlock.push(index)

    circles.append(document.createElement('div'))
})



document.querySelectorAll(".carusel > .circles > div").forEach( (div, index) => {
    div.style.opacity = posBlock[index] === 0 ? .9 : .5 
})