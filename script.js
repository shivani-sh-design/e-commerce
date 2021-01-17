var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");
const banner = document.getElementById("banner");
const productContainer = document.getElementById("details");
const detailedPage = document.getElementById("detailedPage");
const backButton = document.querySelector('.fa-arrow-alt-circle-left');
backButton.addEventListener('click',()=>{
 document.location.reload();
 console.log('clicked');
 backButton.classList.add('toggle');
})
const showDescription = (e)=>{
  let imgSrc = document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src');
  let price = document.activeElement.previousElementSibling.innerHTML;
  let description = document.activeElement.previousElementSibling.previousElementSibling.innerHTML;
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let button = document.createElement('button');
  button.innerHTML = 'Buy Now'
  button.classList.add('buy-btn');
  img.setAttribute("src", `${imgSrc}`);
  img.classList.add('img');
  h2.classList.add('h2');
  p.classList.add('para');
  h2.innerText = price;
  p.innerText = `If you are a solitaire lover there is the Frele ${description} and Vanilla ${description} for those who prefer more traditional Kadas, there is the openable bracelet – Stars and Stripes ${description} and the Kalamkari Diamond Kada. For the minimalists we have a series of delicate bracelets like the New Leaf ${description}, charm bracelets like The Forest Fairy ${description},  Friends Forever ${description}, Joy ${description}-cum-Pendant that is open to customization too.There are beautiful, pretty, very feminine and dainty designer diamond bangles on Candere, the styling suited to match your personalities or make your selection easier based on your moods or the likes & tastes of the one you are going to gift them to.`;
  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(button);
  div.appendChild(p);
  detailedPage.appendChild(div);
  banner.classList.add("toggle");
  productContainer.classList.add("toggle");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
   backButton.classList.remove('toggle');

}

// bracelete.addEventListener("click", () => {
//   let div = document.createElement("div");
//   let img = document.createElement("img");
//   let h2 = document.createElement("h2");
//   let p = document.createElement("p");
//   img.setAttribute("src", `${productDetails.bracelete.braceletetImgSrc}`);
//   img.setAttribute('class','img');
//   h2.setAttribute('class','h2');
//   p.setAttribute('class','para');
//   h2.innerText = productDetails.bracelete.braceletePrice;
//   p.innerText = productDetails.bracelete.braceleteAbout;
//   div.appendChild(img);
//   div.appendChild(h2);
//   div.appendChild(p);
//   detailedPage.appendChild(div);
//   banner.classList.add("toggle");
//   productContainer.classList.add("toggle");
// });
menuBtn.addEventListener("click", () => {
  sidenav.classList.toggle("toggle");
});



