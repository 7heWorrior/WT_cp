const fetch = require('node-fetch');
global.fetch = fetch;   
const {toJson} = require('unsplash-js')
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    accessKey: "ksMxlppbEKmhIimYz4_NiHW8-GJozbB-FI3EhEq5HGU"
});


// Unsplash.search.photos("Coffee",1).then(toJson).then((json)=>{
//     console.log(json)
// })

unsplash.search.photos("Coffee", 1, { orientation: "landscape" })
  .then(toJson)
  .then(json => {
    console.log(json.results[0].urls.thumb)
  });

// applicationId: "ksMxlppbEKmhIimYz4_NiHW8-GJozbB-FI3EhEq5HGU",
//   secret: "KKnfYtVr2PZ7-Ee3kSE1maW0HzOnP6MFMHQJcTdbfHvU"