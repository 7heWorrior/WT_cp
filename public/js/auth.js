var token = document.cookie

token = token.replace('token=','')



const logged = document.querySelector('#login')

// function userLogout(){
//   var settings = {
//     "url": "/users/logout",
//     "method": "POST",
//     "timeout": 0,
//     "headers": {
//       "Authorization": "Bearer " + token
//     },
//   };
  
//   $.ajax(settings).done(function (response) {
//     window.location.replace('/index.html')
//   });
// }

// console.log(token)
var settings = {
    "url": "/users/me",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer " + token
    },
  };
  
  $.ajax(settings).done(function (response) {
      logged.removeChild(logged.firstChild)
    var user = document.createElement('a')
    user.href = '/users/me'
    user.textContent = response.name
    // var logout = document.createElement('a')
    // logout.onclick = userLogout()
    // logout.textContent = 'LogOut'
    logged.appendChild(user)
    // logged.appendChild(logout)
  });