const express = require('express') // use express
const app = express() // holds use of express
const cors = require('cors') // cors package in case of errors
const PORT = 8000 // setting var for port 

app.use(cors())

const coffee = {//object
    'americano': {
        'coffeeDescription': 'Cold or hot water and espresso.',

        'ingredientDescription': 'Espresso and hot water, and ice for an iced americano',

        'roast': 'Dark or medium-dark roast.'
    },
    'macchiato': {
        'coffeeDescription': 'An espresso-based coffee drink that\'s made by topping espresso with a small amount of steamed or foamed milk.',

        'ingredientDescription': 'Pour a shot of espresso and then add a dollop of frothy milk foam.',

        'roast': 'Dark or medium-dark roast.' 
    },
    'caffe latte': {
        'coffeeDescription': 'Coffee drink of Italian origin made with espresso and steamed milk.',

        'ingredientDescription': 'Combine espresso with steamed milk and a small amount of foam.',

        'roast': 'Dark or medium-dark roast.'
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const coffeeName = request.params.name.toLowerCase()

    if( coffee[coffeeName] ){
        response.json(coffee[coffeeName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

