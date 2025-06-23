const emojis = ["🐻","🐻","🐻‍❄️","🐻‍❄️","🍇","🍇","🦀","🦀","🐦","🐦","🐈‍⬛","🐈‍⬛"]
let openCards = []

// Separa dois pesos diferente para cada emoji (fzd o computador decidir de forma aleatória)
let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1))

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div")
    box.className = "card"
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick
    document.querySelector("#cards").appendChild(box)
}

function handleClick(){
    if(openCards.length < 2){
        //Elemento clicado
        this.classList.add("boxOpen")
        openCards.push(this)
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    if(openCards[0].innerHTML == openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }else{
        openCards[0].classList.remove('boxOpen')
        openCards[1].classList.remove('boxOpen')
    }

    openCards = []

    //Significa que eles têm o mesmo tamanho
    if(document.querySelectorAll('.boxMatch').length == emojis.length){
        alert("Você venceu!")
    }
}