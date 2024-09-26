// Shopping Cart Implementation

// Array to store the cart items
let cart = [];

// Function to add item to the cart
function addItemToCart(item, price, quantity) {
    // Check if item is already in the cart
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].item === item) {
            cart[i].quantity += quantity; // Update quantity if item exists
            return;
        }
    }
    // Add new item to the cart if not already present
    cart.push({ item: item, price: price, quantity: quantity });
}

// Function to remove item from the cart
function removeItemFromCart(item) {
    cart = cart.filter(cartItem => cartItem.item !== item);
}

// Function to calculate total price
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

// Function to display the cart items
function displayCart() {
    console.log("Cart Contents:");
    cart.forEach(item => {
        console.log(`${item.item} - Price: $${item.price} - Quantity: ${item.quantity}`);
    });

    console.log(`Total: $${calculateTotal()}`);
}

// Test the shopping cart functions
addItemToCart("Apple", 1.2, 2);
addItemToCart("Banana", 0.8, 5);
addItemToCart("Orange", 1.5, 3);
displayCart();
removeItemFromCart("Banana");
displayCart();
