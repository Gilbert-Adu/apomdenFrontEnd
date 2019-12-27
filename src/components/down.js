var app = new Vue({
 el: '#app',
 data: {
   system: {'windows':'Windows','apple':'Mac OS', 'linux':'Linux'},
   message: ['microsoft', 'apple', 'linux'],
   image: "./vmSocks-green-onWhite.jpg",
   inStock:true,
   details: ["80% cotton", "20% polyester","Gender-neutral"],
   variants: [{
     variantId:"2234",
     variantColor: "green",
     variantImage: './vmSocks-green-onWhite.jpg'
   },
   {
     variantId: "2235",
     variantColor:"blue",
     variantImage:"./vmSocks-blue-onWhite.jpg"
   }

 ],
 cart: 0
},//end of data

 methods:{
   addToCart(){
     this.cart += 1
   },
   updateProduct(variantImage) {
     this.image = variantImage
   }


 },
 computed: {
   title(){
     return this.brand + ' ' + this.product
   }
 }

});
