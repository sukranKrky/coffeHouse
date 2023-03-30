const navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = (e) => {
  navbar.classList.toggle("active");
  cartBtn.classList.remove("active");
  search.classList.remove("active");
  console.log(e.target.classList);
};

const cartBtn = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartBtn.classList.toggle("active");
  search.classList.remove("active");
  navbar.classList.remove("active");
};

const search = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  search.classList.toggle("active");
  cartBtn.classList.remove("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  search.classList.remove("active");
  cartBtn.classList.remove("active");
  navbar.classList.remove("active");
};

const pruductDom = document.querySelector("#product-list");
const card = document.querySelectorAll("#card"); //product

const cartList = document.querySelector(".cart-items");
const cart = document.getElementsByClassName("cart-item");
const cartPrice = document.getElementsByClassName("price");

const add = document.getElementsByClassName("addToCart");

const cartDelete = document.getElementsByClassName("fa-times");
const totalPrice = document.querySelector(".total");

let totaldiv = document.querySelector(".totaldiv");
let listItem = document.getElementsByClassName("cart-item");
let itemCount = document.querySelector(".count");

const cartItem=document.querySelector(".cart-item")

function updateCartTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    cartRow = cart.length[i];
    let priceElement = cartPrice[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    total = total + price;
  }
  if (listItem.length === 0) {
    totaldiv.innerHTML = ` 
 <div><label class="cart-empty">Cart empty</label></div>
  
  <div class="totalPrice">
  <label class="total" for="">$0.00</label>
  </div>
  `
  }else{
    totaldiv.innerHTML = ` 
 
  <div class="totalPrice">
  <label class="total" for="">$${total}</label>
  </div>`

  }
}

class Shopping {
  constructor(image, title, price) {
    this.image = image;
    this.title = title;
    this.price = price;
  }
}
class UI {
  addToCart(shopping) {
    const listItem = document.createElement("div");
    listItem.classList = "cart-item";
    listItem.innerHTML = `
    <span class="fas fa-times" id="delete" ></span>
    <img class="cart-img" src="${shopping.image}" alt="" />
    <div class="content">
      <h3 id="cart-title" >${shopping.title}</h3>
      <div class="price">${shopping.price}</div>
    </div>
    `;

    cartList.appendChild(listItem);
  }

  deleteToCart() {
    let self = this;
    for (let i = 0; i < cartDelete.length; i++) {
      cartDelete[i].addEventListener("click", function () {
        this.parentElement.remove();
        self.cartCount();
      });
    }
  }

  cartCount() {
    itemCount.innerHTML = listItem.length;
    updateCartTotal();
  }
}

for (let i = 0; i < card.length; i++) {
  add[i].addEventListener("click", function (e) {
    let title = card[i].getElementsByClassName("card-title")[0].textContent;
    let price = card[i].getElementsByClassName("price")[0].textContent;
    let image = card[i].getElementsByClassName("image")[0].src;

    let shopping = new Shopping(image, title, price);
    let ui = new UI();

    ui.addToCart(shopping);
    ui.deleteToCart();
    ui.cartCount();
    updateCartTotal();
    e.preventDefault();
  });
}

let ui = new UI();
ui.cartCount();