const express = require('express')
const app = express()
const PORT = 8000

// Object with rapper details
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}


// GET Request
app.get('/', (request, response)=>{
   response.sendFile(__dirname + '/index.html',) 
})

// Creating API with query parameter
app.get('/api:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    } 
})

// Setting up the port
app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}.`)
})