$(document).ready(function(){

// var urls = [
//   'https://dog.ceo/api/breed/beagle/images/random',
//   'https://dog.ceo/api/breed/chow/images/random',
//   'https://dog.ceo/api/breed/akita/images/random',
//   'https://dog.ceo/api/breed/dingo/images/random',
//   'https://dog.ceo/api/breed/eskimo/images/random'
// ];

// function buildPromiseFromUrl (url){
//   const aPromise = $.get(url)
//   // console.log('a promise was created')
//   return aPromise
// }

// const arrayOfPromises = urls.map(buildPromiseFromUrl)

// arrayOfPromises[0]
//   .then(function () {
//   console.log('one promise finished')
//   })
//   .then(arrayOfPromises[1])
//   .then(function () {
//     console.log('two promises finished')
//   })
//   .then(arrayOfPromises[2])
//   .then(function () {
//     console.log('three promises finished')
//   })
//   .then(arrayOfPromises[3])
//   .then(function () {
//     console.log('four promises finished')
//   })
//   .then(arrayOfPromises[4])
//   .then(function () {
//     console.log('five promises finished')
//   })

// Promise.all(arrayOfPromises)
//   .then(function(resultArray) {
//     console.log('they have all resolved, and here is the result:')
//     console.log(resultArray)
//   })


  function addNumbers(x, y) {
    return new Promise(function(resolve, reject){
      if(typeof x === 'number' && typeof y === 'number'){
        console.log("These can be added because they are numbers")
        resolve(x + y)
      } else {
        const errMsg = 'These are not numbers'
        console.error(errMsg)
        reject(errMsg) 
      }
    })
  }

const addNumbersWith7BakedIn = addNumbers.bind({}, 7)

  addNumbers(4, 6)
    .then(function(answer){
      console.log(answer)
      return answer
    })
    .then(addNumbersWith7BakedIn)
    .then((x) => console.log(x))
    .catch(function(error){
      console.log('zzzz' + error)
    })
})


// window.jerome = 'confusing'
function foo () {
  console.log('foo:', this.jerome)
}

foo() // "window.jerome is undefined"

const obj1 = {
  jerome: 'duck'
}

const obj2 = {
  jerome: 'goose'
}

const fooBoundToPaige = foo.bind({jerome: 'paige'})
fooBoundToPaige()
foo.apply(obj1)
foo.apply(obj2)
fooBoundToPaige.apply(obj1)
fooBoundToPaige.apply(window)
fooBoundToPaige.apply(null)