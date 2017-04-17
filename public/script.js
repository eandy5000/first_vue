var PRICE = 9.99;

new Vue({
    el: '#app',
    methods: {
        addToCart: function(product) {
            if(!product.qty || product.qty === 0) {
                product.qty = 1
                this.cart.push(product);
                this.total += product.price;
            } else {
                product.qty++;
                this.total += product.price;
            }
            
        },
        
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
