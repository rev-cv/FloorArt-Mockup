

function openComboBox (event) {
    const selection = event.currentTarget.parentNode.querySelector(".combobox-selection")
    if (selection.style.opacity == ""){
        selection.style.transform = "scaleY(1)"
        setTimeout( () => {
            selection.style.opacity = 1;
        }, 50)
    } else {
        closeComboBox(selection)
    }
    event.stopPropagation();
}

function closeComboBox(selection){
    selection.style.opacity = "";
    setTimeout( () => {
        selection.style.transform = "";
    }, 50)
}

function checkPointComboBox (event){
    const type = event.currentTarget.getAttribute("type-question")

    const selected = event.currentTarget.parentNode.parentNode.querySelector('.combobox-selected > span')
    selected.innerText = event.currentTarget.innerText

    openTypeQustions(type)
}


function openTypeQustions (type) {
    document.querySelectorAll('.main-answers-on-questions > .board-answers > .answer').forEach(elem => {
        if (elem.getAttribute("type-question") === type){
            elem.style.display = "block"
        } else {
            elem.style.display = "none"
        }
    })
    openAnswer(false)
}


document.querySelectorAll(".combobox > .combobox-selected").forEach( btn => {
    btn.onclick = openComboBox;
})


document.querySelectorAll(".combobox > .combobox-selection > button").forEach( btn => {
    btn.onclick = checkPointComboBox;
})


document.addEventListener('click', (event) => {
    if(!event.target.matches(".combobox")) {
        document.querySelectorAll(".combobox > .combobox-selection").forEach( elem => {
            closeComboBox(elem)
        })
    }
}) 


openTypeQustions("laminate")



function openAnswer(event){
    let isClose = true;
    let cerrentAnswer;

    if (event !== false){
        cerrentAnswer = event.currentTarget.parentNode.querySelector(".answer")
        if (cerrentAnswer.style.height.length === 0){
            isClose = false
        }
    }

    document.querySelectorAll(".board-answers > .answer > .answer").forEach(elem => {
        elem.style.height = 0;
        elem.style.padding = 0;
    })

    document.querySelectorAll(".board-answers > .answer > button").forEach(elem => {
        elem.style.transform = ""
    })

    document.querySelectorAll(".board-answers > .answer > .question").forEach(elem => {
        elem.style.marginBottom = ""
    })
    

    if (event !== false & isClose){
        event.currentTarget.style.transform = "rotate(180deg)"
        cerrentAnswer.style.height = "";
        cerrentAnswer.style.padding = "";
        event.currentTarget.parentNode.querySelector(".answer > .question").style.marginBottom = "1em"
    }
}


document.querySelectorAll(".board-answers > .answer > button").forEach( btn => {
    btn.addEventListener('click', openAnswer)
})