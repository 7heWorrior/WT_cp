const data = document.querySelector("#main-content")
const name = window.location.search

var settings = {
    "url": "/recipes" + name,
    "method": "GET",
    "timeout": 0,
  };
  
$.ajax(settings).done(function (response) {
    let recipe = document.createElement('div')
    recipe.innerHTML = "<label><b>Name: </b></label><p>"+ 
    response.name
    +"<br><br><label><b>Recipe: </b><p></label>"+
    response.recipe
    +"<br><br><label><b>Ingredients: </b></label><p>"+
    response.ingredients
    +"<br><br><label><b>Description: </b></label><p>"+
    response.description
    +"<br><br><label><b>Shop: </b></label><p>"+
    response.shop
    +"<br><br></br>"
    
    data.appendChild(recipe)
});
