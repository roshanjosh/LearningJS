const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "./img/f1.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "./img/f2.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "./img/f3.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "./img/f4.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "./img/f5.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "./img/f6.jpg",
    price: 74,
    cat: "Casual",
  },
  {
    id: 6,
    name: "Garmin ",
    img: "./img/f7.jpg",
    price: 74,
    cat: "Luxury",
  },
  {
    id: 8,
    name: "Garmin Venu Random ",
    img: "./img/f8.jpg",
    price: 74,
    cat: "Casual",
  },
];

const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoryContainer = document.querySelector(".cats");
const priceValue = document.querySelector(".priceValue");
const priceRange = document.querySelector(".priceRange");

const displayProducts = (filteredProducts) => {
  productContainer.innerHTML = filteredProducts.map(
    (product) => 
    `
    <div class="product">
      <img src=${product.img} alt="Shirt">
      <span class="name">${product.name}</span>
      <span class="price">$${product.price}</span>
    </div>
    `
  ).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) =>{
  const value = e.target.value.toLowerCase();

  if (value) { 
    displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1 ))
  }else {
    displayProducts(data);
  }
});

