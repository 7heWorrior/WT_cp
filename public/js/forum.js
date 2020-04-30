const data = document.querySelector("#main-content")
var token = document.cookie
token = token.replace('token=','')



var settings = {
    "url": "/forums/",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    
    response.forEach(element => {
        var post = document.createElement('div')
        post.innerHTML = '<div class="container-fluid mt-100"><div class="row"><div class="col-md-12"><div class="card mb-4"><div class="card-header"><div class="media-body ml-3"> <a href="javascript:void(0)" data-abc="true">'+ element.owner +'</a><div class="text-muted small"></div></div><div class="text-muted small ml-3"><div>Posted On <strong>'+ element.createdAt+'</strong></div><div><strong>134</strong> posts</div></div></div><div class="card-body"><h3>'+element.topic+'</h3><p>'+element.body+'</p></div><div class="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3"><div class="px-4 pt-3"> <a href="javascript:void(0)" class="text-muted d-inline-flex align-items-center align-middle" data-abc="true"> <i class="fa fa-heart text-danger"></i>&nbsp; <span class="align-middle">445</span> </a> <span class="text-muted d-inline-flex align-items-center align-middle ml-4"> <i class="fa fa-eye text-muted fsize-3"></i>&nbsp; <span class="align-middle">14532</span> </span> </div><div class="px-4 pt-3"></div></div></div></div></div></div>'

        data.appendChild(post)
    });
  });






  const post = document.querySelector("#reply")
  const topic = document.querySelector('#topic')
  const body = document.querySelector('#body')


  post.addEventListener('submit',(e)=>{
      e.preventDefault()
      var settings = {
        "url": "/forums/",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer " + token ,
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({"topic":topic.value ,"body":body.value}),
      };
      
      $.ajax(settings).done(function (response) {
          console.log('posted')
        location.reload()
      });
  })