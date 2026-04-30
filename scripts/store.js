// store.js

function addToCart(name, price, idNum) {
    // 1. Get the values the user picked from the dropdowns
    const chosenColor = document.getElementById('color-' + idNum).value;
    const chosenSize = document.getElementById('size-' + idNum).value;
    const chosenQty = parseInt(document.getElementById('qty-' + idNum).value);

    // 2. Get the current cart from storage
    let cart = getCart();

    // 3. Check if the exact same item (name, color, and size) is already in the cart
    let existingItem = cart.find(item => 
        item.name === name && 
        item.color === chosenColor && 
        item.size === chosenSize
    );

    if (existingItem) {
        // If it exists, just add the new quantity to the existing quantity
        existingItem.qty = parseInt(existingItem.qty) + chosenQty;
    } else {
        // If it doesn't exist, create the new item object and push it
        const newItem = {
			id: idNum,
            name: name,
            price: price,
            color: chosenColor,
            size: chosenSize,
            qty: chosenQty
        };
        cart.push(newItem);
    }

    // 4. Save and alert
    saveCart(cart);
    alert(chosenQty + " " + name + " (" + chosenColor + " " + chosenSize + ") added to cart!");
}