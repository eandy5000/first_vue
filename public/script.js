
var PRICE = 9.99;

new Vue({
    el: '#app',
    methods: {
        addToCart: function(product) {
            var match = false;
            if(!this.cart.length) {
                this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: PRICE,
                    qty: 1
                });
                return this.total += PRICE;
            }
            for (var i = 0; i < this.cart.length; i++) {
                if(this.cart[i].id === product.id) {
                    match = true;
                    this.cart[i].qty++;
                    return this.total += PRICE;
                }
            }
            if(!match){
                this.total += PRICE;
                return this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: PRICE,
                    qty: 1
                });
            }
        },
        incCart: function(item) {
            for(var i = 0; i < this.cart.length; i++) {
                if(item.id === this.cart[i].id) {
                    this.cart[i].qty++;
                    return this.total += PRICE;
                }
            }          
        },
        decCart: function(item) {
            for(var i = 0; i < this.cart.length; i++) {
                if(item.id === this.cart[i].id) {
                    this.cart[i].qty--;
                    return this.total -= PRICE;
                }
            }
        },
        onSubmit: function() {
            this.$http
                .get('/search/'.concat(this.search))
                .then(function(res){
                    this.products = res.data.slice(0,10);
                    this.search = '';
                });
        }

    },
    filters: {
        currency: function(num) {
            return '$' + num.toFixed(2)
        },
        zero: function(num) {
            if(num === "$-0.00") {
              return  num = "$0.00"
            }
            return num;
        }
    },
    data: {
        total: 0,
        search: 'cats',
        products: [],
        cart: [],
        price: PRICE
    },
    mounted: function() {
        this.onSubmit();
    }
});
