//Creazione delle sezioni della pagina
let textContainer = document.querySelector(".text-container")
let btnContainer = document.querySelector(".btn-container")

// Creazione dell'elemento che mostra il conteggio

let counterText = document.createElement("h1")
let countingVariable = 0

counterText.innerHTML = countingVariable
textContainer.appendChild(counterText)

// Creazione dei bottoni

const minusButton = document.createElement("button")
const plusButton = document.createElement("button")

minusButton.classList.add("btn-counter")
minusButton.innerHTML = "-"

plusButton.classList.add("btn-counter")
plusButton.innerHTML = "+"


btnContainer.appendChild(minusButton)
btnContainer.appendChild(plusButton)

//Funzioni che aggiornano il conteggio

function plusCounter(){
    return countingVariable + 1
}

function minusCounter(){
    return countingVariable - 1 
}

//Funzione per la visualizzazione del valore

function updateCounter(){
    counterText.innerHTML = countingVariable
}

//Event listener

minusButton.addEventListener("click",() =>{
    countingVariable = minusCounter()
    updateCounter()
})

plusButton.addEventListener("click",() =>{
    countingVariable = plusCounter()
    updateCounter()
})

