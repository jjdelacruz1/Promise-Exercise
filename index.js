$(document).ready(function(){

var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
];

function buildPromiseFromUrl (url){
  const aPromise = $.get(url)
  console.log('a promise was created')
  return aPromise
}

const arrayOfPromises = urls.map(buildPromiseFromUrl)

arrayOfPromises[0]
  .then(arrayOfPromises[1])
  .then(function () {
    console.log('two promises finished')
  })

Promise.all(arrayOfPromises)
  .then(function(resultArray) {
    console.log('they have all resolved, and here is the result:')
    console.log(resultArray)
  })

})