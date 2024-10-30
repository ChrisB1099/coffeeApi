document.querySelector('button').addEventListener('click', getCoffee)

function getCoffee(){
    const coffee = document.querySelector('input').value
    const url = `/api/${coffee}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#coffeeDescription').innerText = data.coffeeDescription
        document.querySelector('#roast').innerText = data.roast
        document.querySelector('#ingredientDescription').innerText = data.ingredientDescription
    })
}
