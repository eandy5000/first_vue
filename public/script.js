new Vue({
    el: '#app',
    methods: {
        addToCart: function() {
            console.log(cart)
            return this.total += this.price;
        }
    },
    data: {
        total: 0,
        price: 9.99,
        products: [
            {id: 1, name: 'one'},
            {id: 2, name: 'two'},
            {id: 3, name: 'three'},
            {id: 4, name: 'four'}
        ],
        cart: []
    }
});
