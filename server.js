const express = require('express')

const app = express()


app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ca3ccde6ef654d50aadb11314186df5c',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

let recipeDatabase = ['Jambalaya Rice Recipe', 'Spicy Jerk Chicken with Potatoes', 'Smoked Jollof Rice', 'Coconut Fried Rice with Suya Sticks']


app.get ('/recipe', (req, res) => {
    let randomIndex = Math.floor(Math.random() * recipeDatabase.length + 1)

    res.status(200).send(recipeDatabase[randomIndex])
})


app.listen(4000, () => console.log('server is running on port 4000'))
