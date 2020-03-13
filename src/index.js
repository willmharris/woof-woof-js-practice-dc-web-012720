document.addEventListener("DOMContentLoaded", () => {
    addDogs()
})

function addDogs() {
    let dogInfo = getDogInfo() 
    console.log(dogInfo)
}

function getDogInfo() {
    fetch("http://localhost:3000/pups").then(
       response => response.json() 
    ).then( json => {
        json.forEach( (dog) => {
            renderDog(dog)
        })
    })
}

function renderDog(dog) {
    let span = document.createElement('span')
    span.innerText = dog.name 
    span.dataset.name = dog.name
    span.dataset.image = dog.image
    span.dataset.goodness = dog.isGoodDog
    canBeClicked(span)
    let dogArea = document.querySelector("#dog-bar")
    dogArea.append(span)
}

function canBeClicked(span) {
    let cardArea = document.querySelector("#dog-info")
    span.addEventListener("click", (event) => {
        cardArea.innerHTML = " "
        card = createCard(event.target)
        cardArea.append(card)
    })
}

function createCard(span) {
    let card = document.createElement('div')
    let header = document.createElement('h2')
    let imageArea = document.createElement('img')
    let button = document.createElement('button')

    header.innerText = span.dataset.name
    imageArea.src = span.dataset.image
    let goodness = span.dataset.goodness
    if (goodness === "true")  {
        button.innerText = "Good Dog!"
    } else {
        button.innerText = "Bad Dog! :("
    }

    card.append(header, imageArea, button) 
    
    return card 
}

