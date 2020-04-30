
console.log('Client Side JS file !!!')
const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg1')
const msgTwo = document.querySelector('#msg2')
const msgThree = document.querySelector('#msg3')
const msg4 = document.querySelector('#msg4')
const msg5 = document.querySelector('#msg5')
searchForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  const name = search.value
  msgOne.textContent = "Loading...."
  msgThree.textContent = " "
  msgTwo.textContent = " "
  fetch('/recipes?name=' + name).then((response)=>{
        
        response.json().then((data)=>{
        // console.log(data)
        if(data.error){
          msgOne.textContent = data.error
        }
        else {msgOne.textContent  = "Name: " + data.name 
        msg4.textContent = "Description: " + data.description
        msgThree.textContent = "Ingredients: " + data.ingredients
        msgTwo.textContent = "Recipe: " + data.recipe
        msg5.textContent = "Where to get them: " + data.shop}

        
    })
  })
})

