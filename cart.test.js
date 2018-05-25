const cart = require('./cart');
const cars = require('./data/cars');
var total = 0;
afterEach(()=>{
    cart.total = 0;
    cart.cart = [];
})
describe("Cart Properties", ()=>{
    test('test for the cart property,',()=>{
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    })
    test('test toal property',()=>{
        expect(typeof(cart.total)).toEqual("number");
        expect(cart.total).toEqual(0);
    })
})

describe("Cart Methods",()=>{
    test("add to cart adds to cart", ()=>{
        
        cart.addToCart(cars[0]);
        cart.addToCart(cars[3]);
        
        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);    
        expect(cart.cart[1]).toEqual(cars[3]);    
    });
    test('increase total when adding car to cart', ()=>{
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);
        cart.addToCart(cars[4]);
        expect(cart.total).toEqual(cars[2].price + cars[3].price + cars[4].price);
    });
    test('removeFromCart removes fromm cart', ()=>{
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);
        
        cart.removeFromCart(1, cars[1].price);
        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[1]);
        expect(cart.cart[1]).toEqual(cars[3]);
    });
    test('decrease total when remove from Cart', ()=>{
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);
        
        cart.removeFromCart(0, cars[1].price);
        cart.removeFromCart(1, cars[3].price);
        
        expect(cart.total).toEqual(cars[2].price);
    });
    test('checkout method checksout', ()=>{
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.addToCart(cars[3]);
        cart.checkout();
        expect(cart.total).toEqual(0);
        expect(cart.cart.length).toEqual(0);
    })


})