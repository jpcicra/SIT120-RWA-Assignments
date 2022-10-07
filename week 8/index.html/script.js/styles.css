const json = '[' + '{"image" : "avacado.jpg", "name" : "Avacado", "Price" : "100", "categories": "Fruits"},' +
  '{"image" : "banana.jpg", "name" : "Banana", "Price" : "100", "categories": "Fruits"},' +
  '{"image" : "dragonfruit.jpg", "name" : "Dragon Fruit", "Price" : "100", "categories": "Fruits"},' +
  '{"image" : "grapes.jpg", "name" : "Grapes", "Price" : "100", "categories": "Fruits"},' +
  '{"image" : "mango.jpeg", "name" : "Mango", "Price" : "100", "categories": "Fruits"},' +
  '{"image" : "orange.jpg", "name" : "Orange", "Price" : "100", "categories": "Fruits"},' +
  '{"image" : "papaya.jpg", "name" : "Papaya", "Price" : "100", "categories": "Fruits"},' +
  '{"image" : "pineapple.jpg", "name" : "Pineapple", "Price" : "100", "categories": "Fruits"},' +
  '{"image" : "beans.jpg", "name" : "Beans", "Price" : "100", "categories": "Vegetables"},' +
  '{"image" : "bellpepper.jpg", "name" : "Bell Peppers", "Price" : "100", "categories": "Vegetables"},' +
  '{"image" : "redchilly.jpg", "name" : "Red Chilly", "Price" : "100", "categories": "Vegetables"},' +
  '{"image" : "bittergourd.jpg", "name" : "Bitter Gourd", "Price" : "100", "categories": "Vegetables"},' +
  '{"image" : "carrot.jpg", "name" : "Carrot", "Price" : "100", "categories": "Vegetables"},' +
  '{"image" : "cabbage.jpg", "name" : "Cabbage", "Price" : "100", "categories": "Vegetables"},' +
  '{"image" : "cucumber.jpg", "name" : "Bell Peppers", "Price" : "100", "categories": "Vegetables"},' +
  '{"image" : "pumpkin.jpg", "name" : "Cucumber", "Price" : "100", "categories": "Vegetables"}' + ']'

var product = JSON.parse(json);

Vue.component('heading', {

  props: ['headingp'],

  template: `<div class='heading'>
                     <h2>Good Market</h2>
              </div>`
})

new Vue({ el: '#shop_name' })

Vue.component('categories', {
  props: ['activecategory'],
  template:
    `<div class="categories">
                    <button v-on:click = "All">Main menue</button><br>
                    <button v-on:click = "Fruits">Fruits</button><br>
                    <button v-on:click = "Vegetables">Vegetables</button>

        </div>`,
  methods: {
    All: function () {
      Vue.set(cart_products, 'activecategory', 'All')
    },
    Fruits: function () {
      Vue.set(cart_products, 'activecategory', 'Fruits')
    },
    Vegetables: function () {
      Vue.set(cart_products, 'activecategory', 'Vegetables')
    }
  }
})

var categories = new Vue({ el: '#categories' })

function RemoveItem(element) {
  var this_item= element.parentElement;
  this_item.remove();
}

function emptyCart() {
  var cart = document.querySelector('#cart_items');
  cart.innerHTML = ' ';
  total = 0;
}

Vue.component('product', {
  props: ['productp'],
  template: `<div class="product">
                    <img v-bind:src="productp.image" alt="image"/>
                    <p>{{productp.name}}</p>
                    <p>price: $ {{productp.Price}}</p>
                    <p><button v-on:click = "add(productp)">Add to cart</button></p>
                </div>`,
  methods: {
    add: function (element) {
      var cart = document.querySelector('#cart_items')
      var cart_item = document.createElement('div');
      cart_item.innerHTML = element.name + '  ' + '$' + element.Price + '      ' +'<button onclick="RemoveItem(this)">Remove</button>';
      cart.append(cart_item);
    }
  }
})



var cart_products = new Vue({
  el: '#cart_products',
  data: {
    product: product,
    activecategory: "All"
  },
  watch: {
    activecategory: function () {
      if (this.activecategory == "All") {
        this.product = JSON.parse(json);
      }
      if (this.activecategory == "Fruits") {
        this.product = JSON.parse(json);
        this.product = product.filter(product => product.categories == 'Fruits');
      }
      if (this.activecategory == "Vegetables") {
        this.product = JSON.parse(json);
        this.product = product.filter(product => product.categories == 'Vegetables');
      }
    }
  }
});
