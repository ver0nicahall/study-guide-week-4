'use strict';

/** ********************
 Make an Event Handler
********************* */

// Your Code Here
const popupButton = document.querySelector('#popup-alert-button');
popupButton.addEventListener('click', () => {
  alert('You have clicked the popup button!')
});
/** ***********************
Practice Your Times Tables
************************ */
const multiplyingForm = document.querySelector('#multiplying-form');
multiplyingForm.addEventListener('submit', (evt) => {
  //prevent form from going to /nope
  evt.preventDefault();

  //get values from input form 
  const multsOf = parseInt(document.querySelector('#mults-of').value)
  const max = parseInt(document.querySelector('#max').value)

  console.log('multsOf: ', typeof multsOf);
  console.log('max', typeof max);

  //create result array 
  let result = [];
  for (let i = multsOf; i <= max; i+= multsOf) {
    //push to result array
    result.push(i);
  }
  //print array to the console 
  console.log(result);

})
// Your Code Here

/** **************
An Agreeable Form
*************** */

// Your Code Here
const agreeForm = document.querySelector('#agreeable-form');
const agreeText = document.querySelector('#agreeable-text');
agreeForm.addEventListener('submit', (evt) => {

  //prevent default
  evt.preventDefault();

  //get values from input 
  const faveFood = document.querySelector('#favorite-food-input').value;

  //add message to div 
  agreeText.innerHTML = `I like ${faveFood}, too.`;

})

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

// Your Code Here

/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector('#puppies-go-here');
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML('beforeend', `<img src=${puppyURL} alt="puppy-image">`);
}

// Your Code Here


const numPuppies = Number(document.querySelector('#num-puppies').value);

//add event listener
document.querySelector('#puppy-form').addEventListener('submit', (evt) => {
  evt.preventDefault();
  fetch(`/puppies.json?num-puppies=${numPuppies}`)
    .then(response => response.json())
    .then(data => {
      showPuppies(data);
  });
});

