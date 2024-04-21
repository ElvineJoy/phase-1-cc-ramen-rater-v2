// index.js
// baseURL
const ramenUrl = "http://localhost:3000/ramens"
// Callbacks
const handleClick = (ramen) => {
  // Add code
  console.table(ramen);

   // ramen image display
   const ourRamenImage = document.getElementById("ramen-image")
   ourRamenImage.src = ramen.image
  //  ramen name display
   const ourRamenName = document.querySelector("h2")
   ourRamenName.textContent = ramen.name
  //  ramen restuarant display
   const ourRamenRestaurant = document.getElementById("rest-ramen")
   ourRamenRestaurant.textContent = ramen.restaurant
  // rating display
  const ourRamenRatings = document.getElementById("rating-display")
  ourRamenRatings.textContent = ramen.rating
  // comment display on click
  const ourRamenComments = document.getElementById("comment-display")
  ourRamenComments.textContent = ramen.comment
 
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  // Add code
fetch(ramenUrl)
.then(res => res.json())
.then(data => {
  console.log('These are our Ramen options available', data)
  displayRamenDataOnViewPage(data)
});
};

function displayRamenDataOnViewPage(ramenArray){

const ramenMenu = document.getElementById("ramen-menu")
console.log(ramenMenu)

ramenArray.forEach( element => {
  const imgTag = document.createElement("img")
  imgTag.src = element.image
  imgTag.alt = element.name

  // add event listener
  imgTag.addEventListener('click', () => handleClick(element));

  // append the imgtag to the div
  ramenMenu.appendChild(imgTag)

});

}

// get the component by id

const main = () => {
  // Invoke displayRamens here
displayRamens();
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
