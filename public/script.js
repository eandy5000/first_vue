var PRICE = 9.99;

new Vue({
    el: '#app',
    methods: {
        addToCart: function(product) {
            var match = false;
            if(!this.cart.length) {
                this.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    qty: 1
                });
                return this.total += product.price;
            }
            for (var i = 0; i < this.cart.length; i++) {
                if(this.cart[i].id === product.id) {
                    match = true;
                    this.cart[i].qty++;
                    return this.total += this.cart[i].price;
                }
            }
            if(!match){
                this.total += product.price;
                return this.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    qty: 1
                });
            }
        },
        incCart: function(item) {
            for(var i = 0; i < this.cart.length; i++) {
                if(item.id === this.cart[i].id) {
                    this.cart[i].qty++;
                    this.total += this.cart[i].price;
                }
            }          
        },
        decCart: function(item) {
            for(var i = 0; i < this.cart.length; i++) {
                if(item.id === this.cart[i].id) {
                    this.cart[i].qty--;
                    this.total -= this.cart[i].price;
                }
            }
        }

    },
    filters: {
        currency: function(num) {
            return '$' + num.toFixed(2)
        }
    },
    data: {
        total: 0,
        products: [
            {id: 0, name: 'one', price: 9.99 },
            {id: 1, name: 'two', price: 5.99 },
            {id: 2, name: 'three', price: 3.29 },
            {id: 3, name: 'four', price: 11.18 }
        ],
        cart: []
    }
});
