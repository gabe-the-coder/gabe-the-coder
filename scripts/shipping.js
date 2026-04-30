// shipping.js
function initShippingPage() {
    displayShippingPage();
    const form = document.getElementById('shipping-form');
    if (form) form.addEventListener('submit', submitShippingForm);
}

function displayShippingPage() {
    const summaryBox = document.getElementById('shipping-summary');
    if (!summaryBox) return;

    const cart = getCart();
    let total = 0;

    // Build the HTML for each item in the summary
    let html = cart.map(item => {
        const itemTotal = parseFloat(item.price) * parseInt(item.qty);
        total += itemTotal;
        return `
            <div class="summary-line">
                <span>${item.name} (${item.size}, ${item.color}) x ${item.qty}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>`;
    }).join('');

    // Add the final total line
    html += `
        <div class="summary-line">
            <strong>Total</strong>
            <strong>$${total.toFixed(2)}</strong>
        </div>`;
        
    summaryBox.innerHTML = html;
}

function submitShippingForm(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    
    // Display success message
    document.getElementById('shipping-message').innerHTML = `
        <div class="message-box">
            Order placed for ${fullName}!
        </div>`;

    // Clear the cart from storage after successful order
    localStorage.removeItem('school_cart');
    
    // Reset the form and refresh the summary
    event.target.reset();
    displayShippingPage();
}