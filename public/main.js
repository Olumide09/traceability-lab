let recipeBtn = document.querySelector('button')

let myDiv = document.querySelector('div')




recipeBtn.addEventListener('click', () => {
    axios.get('/recipe')
    .then((response) => {
        let recipeName = response.data


        myDiv.innerHTML = ''


        let newR = document.createElement('p')
        newR.innerHTML = recipeName
        myDiv.appendChild(newR)
    })
    .catch ((error) => {
        console.log(error)
    })
})