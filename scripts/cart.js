/// cart.js

function renderCart() {
    const cart = getCart();
    const display = document.getElementById('cart-area');
	// Find the Shipping Page button in the navigation
    const shippingBtn = document.querySelector('a[href="shipping.html"]')
	
    display.innerHTML = "";
    let total = 0;

    // Check if cart is empty
    if (cart.length === 0) {
		// Disable the Shipping button if cart is empty
        if (shippingBtn) {
            shippingBtn.style.pointerEvents = "none";
            shippingBtn.style.opacity = "0.5";
        }
        const emptyMsg = document.createElement('div');
        emptyMsg.className = "empty-cart";
        emptyMsg.innerHTML = "<h3>Your cart is empty</h3><p>Go back to the store to add some items!</p>";
        display.appendChild(emptyMsg);
        
        // Hide or reset total if the element exists
        const totalBox = document.getElementById('total-box');
        if (totalBox) totalBox.textContent = "0.00";
        return; 
    }
	// Enable the Shipping button if cart has items
    if (shippingBtn) {
        shippingBtn.style.pointerEvents = "auto";
        shippingBtn.style.opacity = "1";
    }
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const row = document.createElement('div');
        row.className = "cart-row";

        // 1. Name Display
        const title = document.createElement('strong');
        title.className = "cart-item-title";
        title.textContent = item.name;
        row.appendChild(title);

        // 2. Price Display
        const priceTag = document.createElement('span');
        priceTag.className = "cart-price";
        priceTag.textContent = "$" + parseFloat(item.price).toFixed(2);
        row.appendChild(priceTag);

        // 3. Color Changer
        const colorSel = document.createElement('select');
		let colors;
		switch(item.id){
			case 6: colors = ["Black",  "Maroon"];
					break;
			default: colors = ["Small", "Medium", "Large", "XL"];
		}	
 
        colors.forEach(c => {
            const opt = document.createElement('option');
            opt.textContent = c;
            if (c === item.color) opt.selected = true;
            colorSel.appendChild(opt);
        });
        colorSel.onchange = function() { updateItem(i, 'color', colorSel.value); };
        row.appendChild(colorSel);

        // 4. Size Changer
        const sizeSel = document.createElement('select');
		let sizes;
		switch(item.id){
			case 5: sizes = ["Small", "Medium", "Large"];
					break;
			case 6: sizes = ["Medium"];
					break;
			default: sizes = ["Small", "Medium", "Large", "XL"];
		}
        sizes.forEach(s => {
            const opt = document.createElement('option');
            opt.textContent = s;
            if (s === item.size) opt.selected = true;
            sizeSel.appendChild(opt);
        });
        sizeSel.onchange = function() { updateItem(i, 'size', sizeSel.value); };
        row.appendChild(sizeSel);

	
	// 5. Quantity Changer
	const qtySel = document.createElement('select');

	const quantities = [1, 2, 3, 4, 5];

	quantities.forEach(q => {
		const opt = document.createElement('option');
		opt.textContent = q;
		if (q == item.qty) opt.selected = true;
			qtySel.appendChild(opt);
		});

	qtySel.onchange = function() { 
		updateItem(i, 'qty', parseInt(qtySel.value)); 
	};

row.appendChild(qtySel);

        // 6. Remove Button
        const remBtn = document.createElement('button');
        remBtn.textContent = "Remove";
        remBtn.className = "remove-button action-button";
        remBtn.onclick = function() {
            cart.splice(i, 1);
            saveCart(cart);
            renderCart();
        };
        row.appendChild(remBtn);

        display.appendChild(row);
        total += (parseFloat(item.price) * parseInt(item.qty));
    }
    
    const totalBox = document.getElementById('total-box');
    if (totalBox) totalBox.textContent = total.toFixed(2);
}

function updateItem(index, field, newValue) {
    let cart = getCart();
    cart[index][field] = newValue; // Update the specific field (color, size, or qty)
    saveCart(cart);
    renderCart(); // Refresh to show new total
}