const express = require('express')

const app = express()


app.use(express.static(`${__dirname}/public`))

let recipeDatabase = ['Jambalaya Rice Recipe', 'Spicy Jerk Chicken with Potatoes', 'Smoked Jollof Rice', 'Coconut Fried Rice with Suya Sticks']


app.get ('/recipe', (req, res) => {
    let randomIndex = Math.floor(Math.random() * recipeDatabase.length + 1)

    res.status(200).send(recipeDatabase[randomIndex])
})


app.listen(4000, () => console.log('server is running on port 4000'))
