let shopping = []
let hamburguers = {
    hamburguerSimples:{price:22},
    hamburguerBacon:{price:25},
    hamburguerDuplo:{price:30},
}
function shop(idHamburguer){
    let objHamburguer = {complements:[], idHamburguer}
    objHamburguer.price = hamburguers[idHamburguer].price * document.querySelector("#quant-" + idHamburguer).value
    for(i of document.querySelector("#list-"+idHamburguer).children){
        if(i.children[0].checked){
            objHamburguer.complements.push(i.children[0].value)
        }
    };
    objHamburguer.quant = document.querySelector("#quant-hamburguerSimples").value
    shopping.push(objHamburguer)
    console.log(shopping)
}

function updatePrice(idHamburguer){
    let calculedPrice = hamburguers[idHamburguer].price * document.querySelector("#quant-" + idHamburguer).value 
    document.querySelector("#price-" + idHamburguer).innerHTML = `Preço:` + calculedPrice
}

function sendOrder(){
    let valueTot = 0
    let text = "*Novo%20pedido*%0A%0A----------%0A%0A"
    shopping.forEach(hamburguer=>{
        valueTot += hamburguer.price
        text += `(${hamburguer.quant}) ${hamburguer.idHamburguer}`
        if(hamburguer.complements.length > 0){
            text += "%0ASem%20os%20seguintes%20ingredientes:%0A"
            hamburguer.complements.forEach(complement=>{
                text += `%20%20%20%20%20*${complement}*%0A`
            })
        }
        text += "%0A%0A"
    })  
    text += `----------%0A%0APreço%20total:${valueTot.toFixed(2)}%20R$`
    location.href= `https://wa.me/5551998116453?text=${text}`
    

}
