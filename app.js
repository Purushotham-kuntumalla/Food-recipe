//importing the EXPRESS module from the node_modules folder

const express = require('express');

//importing the body-parser for getting the data from the body
const bodyParser = require('body-parser')
// by creating the app variable and assaigning the express method to the variable we created the express app 
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//using 3000 port for the server connection 
const port = process.env.port || 3000;

//using the app variable and the get is a Method to the request and using the '/' we send a headding as a response

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('Home')
})


app.get('/about', (req, res) => {
    res.render('About');
})


app.get('/login', (req, res) => {
    res.render('Login');
})

app.get('/add', (req, res) => {
    res.render('Add');
})

app.post('/add-data', (req, res) => {
    const foodData = JSON.stringify(req.body);
    res.send(foodData)
})

app.post('/data', (req, res) => {
    const data = JSON.stringify(req.body)
    res.send(data);
})
//the app variable has the all required methods and properties to work with. And using the listen method to listen the server on the port 3000
app.listen(port, () => console.log('server is running'));