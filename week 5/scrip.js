let data = [
  {
    id: 1,
    name: "Ash Plantain Organic",
    price: 100,
    img: "Ash-Plantain.jpg",
  },

  {
    id: 2,
    name: "Avocado",
    price: 100,
    img: "Avocado.jpg",
  },

  {
    id: 3,
    name: "Baby Spinach",
    price: 100,
    img: "Baby-spinach.jpg",
  },

  {
    id: 4,
    name: "Banana Blossom",
    price: 100,
    img: "Banana-Blossom.jpg",
  },

  {
    id: 5,
    name: "Green Beans",
    price: 100,
    img: "Green-Beans.jpg",
  },

  {
    id: 6,
    name: "Bell Pepper",
    price: 100,
    img: "Bell-Pepper.jpg",
  },

  {
    id: 7,
    name: "Brinjol",
    price: 100,
    img: "Brinjol.jpg",
  },
  {
    id: 8,
    name: "Butternut Squash",
    price: 100,
    img: "Butternut-Squash.jpg",
  },
];

let cart = [];
var total = 0;

function createCartItem(item) {
  let container = document.createElement(`div`);
  container.setAttribute("class", "item");
  let image = document.createElement("img");
  image.setAttribute("src", item.img);
  image.setAttribute("class", "item");

  let name = document.createElement("p");
  let itemName = document.createTextNode(item.name);
  name.append(itemName);

  let price = document.createElement("p");
  let itemPrice = document.createTextNode(
    `Rs.${item.price} x ${item.itemCount}`
  );
  price.append(itemPrice);

  container.append(image);
  container.append(name);
  container.append(price);

  return container;
}

function createListItem(item) {
  let container = document.createElement(`div`);
  container.setAttribute("class", "item");
  let image = document.createElement("img");
  image.setAttribute("src", item.img);
  image.setAttribute("class", "item");

  let name = document.createElement("p");
  let itemName = document.createTextNode(item.name);
  name.append(itemName);

  let price = document.createElement("p");
  let itemPrice = document.createTextNode("Rs" + item.price);
  price.append(itemPrice);

  let btn = document.createElement("button");
  btn.setAttribute("item-id", item.id);
  let btnText = document.createTextNode("Add To Cart");
  btn.append(btnText);

  btn.addEventListener("click", (event) => {
    addToCart(event.target.attributes[0].nodeValue);
  });

  container.append(image);
  container.append(name);
  container.append(price);
  container.append(btn);

  return container;
}

function AddToCart() {
  cart.forEach((item) => {
    const CartItem = createCartItem(item);
    document.getElementById("cart_container").append(CartItem);
  });
}

function DisplayProductList() {
  data.forEach((item) => {
    const Product = createListItem(item);
    document.getElementById("list").append(Product);
  });
}

function addToCart(id) {
  const filteredList = cart.filter((item) => item.id == id);
  const index = cart.indexOf(filteredList[0]);

  if (filteredList.length != 0) {
    cart[index] = {
      ...data[id - 1],
      itemCount: cart[index].itemCount + 1,
    };
    document.getElementById("total").innerHTML = CalculateTotal(cart[index]);
  } else {
    cart.unshift({
      ...data[id - 1],
      itemCount: 1,
    });
    document.getElementById("total").innerHTML = CalculateTotal(cart[0]);
  }

  let cartContainer = document.getElementById("cart_container");

  console.log(cart);

  while (cartContainer.firstChild) {
    cartContainer.removeChild(cartContainer.firstChild);
  }

  cart.forEach((item) => {
    const CartItem = createCartItem(item);
    cartContainer.append(CartItem);
  });
}

function CalculateTotal(item) {
  total = total + item.price;
  return total;
}

window.onload = function () {
  DisplayProductList();
};
