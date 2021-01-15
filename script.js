var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");
const banner = document.getElementById("banner");
const productContainer = document.getElementById("product-container");
const detailedPage = document.getElementById("detailedPage");
const bracelete = document.getElementById("bracelete");
const productDetails = {
  bracelete: {
    braceletetImgSrc: "./images/bracelete.jpeg",
    braceletePrice: "💲200",
    braceleteAbout: 'Here are a few bracelet suggestions from budget to luxury wear. If you are a solitaire lover there is the Frele Diamond Bracelet and Vanilla Diamond Bracelet for those who prefer more traditional Kadas, there is the openable bracelet – Stars and Stripes Diamond Bracelet and the Kalamkari Diamond Kada. For the minimalists we have a series of delicate bracelets like the New Leaf Diamond Bracelet, charm bracelets like The Forest Fairy Diamond Bracelet,  Friends Forever Diamond Bracelet, Joy Diamond Bracelet-cum-Pendant that is open to customization too.There are beautiful, pretty, very feminine and dainty designer diamond bangles on Candere, the styling suited to match your personalities or make your selection easier based on your moods or the likes & tastes of the one you are going to gift them to. Try the cross curved Neeharika Diamond Bangle with pretty leaves for your party or the Aaliya Diamond Bangle for your best friend’s marriage.',
   
  },
};

bracelete.addEventListener("click", () => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  img.setAttribute("src", `${productDetails.bracelete.braceletetImgSrc}`);
  img.setAttribute('class','img');
  h2.setAttribute('class','h2');
  p.setAttribute('class','para');
  h2.innerText = productDetails.bracelete.braceletePrice;
  p.innerText = productDetails.bracelete.braceleteAbout;
  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(p);
  detailedPage.appendChild(div);
  banner.classList.add("toggle");
  productContainer.classList.add("toggle");
});
menuBtn.addEventListener("click", () => {
  sidenav.classList.toggle("toggle");
});
