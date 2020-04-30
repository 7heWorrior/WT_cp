
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

function register(){
  x.style.left= "-400px";
  y.style.left= "50px";
  z.style.left= "110px";
 
}
function login(){
  x.style.left= "50px";
  y.style.left= "450px";
  z.style.left= "0px";
}

const loginForm = document.querySelector('#login')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const result = document.querySelector('#result')


loginForm.addEventListener('submit' , (e)=>{
e.preventDefault()
var settings = {
  "url": "/users/login",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer {{authToken}}",
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"email":email.value,"password":password.value}),
};

$.ajax(settings).done(function (response) {
  result.textContent = "Login Successful"
    window.location.replace('/')
    document.cookie = "token="+ response.token
})
})



const registerForm = document.querySelector('#register')

const email1 = document.querySelector('#email1')
const password1= document.querySelector('#password1')
const result1 = document.querySelector('#result1')

registerForm.addEventListener('submit' , (e)=> {
    e.preventDefault()
    var settings = {
        "url": "/users",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({"name":name.value,"email": email1.value ,"password": password1.value }),
      };
      
      $.ajax(settings).done(function (response) {
        result.textContent = "User is registered successfully"
        window.location.replace('/')
        document.cookie = "token="+ response.token
      });

})
 