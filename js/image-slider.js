


function backImage(slider){
    const currentIndex = Number(slider.getAttribute("select-img-index")) - 1
    const imageList = slider.querySelectorAll(".image-slider-list > div")

    setImage(
        slider,
        0 < currentIndex ? imageList[currentIndex - 1] : imageList[imageList.length - 1],
        "B"
    )
}

function nextImage(slider){
    const currentIndex = Number(slider.getAttribute("select-img-index")) - 1
    const imageList = slider.querySelectorAll(".image-slider-list > div")

    setImage(
        slider,
        currentIndex + 1 < imageList.length ? imageList[currentIndex + 1] : imageList[0],
        "N"
    )
}

function setImage(slider, image, way) {
    const container = slider.querySelector(".image-slider-img");
    const showImg = slider.querySelector(".image-slider-img > div");


    // скрываем, а затем удоляем текущую картинку
    let transform = "translateY(-3em)";
    if (way === "B") {
        transform = "translateX(-3em)";
    } else if (way === "N") {
        transform = "translateX(3em)";
    }

    if (showImg !== null){
        showImg.style.transform = transform;
        showImg.style.opacity = "0";

        setTimeout(() => {
            showImg.remove()
        }, 300)
    }


    // добавляем картинку для отображения
    const div = document.createElement('div');
    container.prepend(div)

    const img = document.createElement('img');
    img.src = image.querySelector("img").src
    div.prepend(img)

    slider.setAttribute("select-img-index", image.getAttribute("img-index"))


    // выделяем выбранную картинку
    slider.querySelectorAll(".image-slider-list > div").forEach( item => {
        item.style.transform = ""
    })
    image.style.transform = "scale(1.1)"

    // прокручиваем скроллбар так, чтобы выбранная картинка была видна в image-slider-list
    // …
}


function initialImageSlider(slider){

    const btns = `
    <button class="image-slider-btn-back" act>
        <svg class="icon"><use xlink:href="#ico-angular-arrow"/></svg>
    </button>
    `;

    slider.insertAdjacentHTML('afterbegin', `<div class="image-slider-img"></div>`);
    slider.insertAdjacentHTML('beforeend', btns);
    slider.insertAdjacentHTML('beforeend', btns.replace("back", "next"));


    const btnBack = slider.querySelector(".image-slider-btn-back")
    const btnNext = slider.querySelector(".image-slider-btn-next")

    btnBack.onclick = () => backImage(slider);
    btnNext.onclick = () => nextImage(slider);

    const images = slider.querySelectorAll(".image-slider-list > div");
    images.forEach( (btn, index) => {
        btn.onclick = () => setImage(slider, btn)
        btn.setAttribute("img-index", index + 1)
    })

    setImage(slider, images[0], "S")


    // показ кнопок по наведеню

    const e = [btnBack, btnNext, slider.querySelector(".image-slider-img")]
    e.forEach( elem => {
        elem.onmouseover = () => {
            btnBack.style.opacity = 1;
            btnNext.style.opacity = 1;
        }
    })

    slider.querySelector(".image-slider-img").onmouseout = () => {
        btnBack.style.opacity = 0;
        btnNext.style.opacity = 0;
    }

}



document.querySelectorAll(".image-slider").forEach(slider => {
    initialImageSlider(slider)
})