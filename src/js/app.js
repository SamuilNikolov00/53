import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

const products = document.getElementsByClassName("product");


const price = document.getElementsByClassName("price")[0].textContent;
for(let el of products){
  el.setAttribute('data-price',price);
}

});
