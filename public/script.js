var PRICE = 9.99;

new Vue({
    el: '#app',
    methods: {
        addToCart: function(product) {
            var match = false;
            if(!this.cart.length) {
                return this.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    qty: 1
                });
            }
            for (var i = 0; i < this.cart.length; i++) {
                if(this.cart[i].id === product.id) {
                    match = true;
                    this.cart[i].qty++;
                    return this.total += this.cart[i].price;
                }
            }
            if(!match){
                return this.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    qty: 1
                });
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
