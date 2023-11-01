const products = [
    { id: 1, name: 'Cement', price: 750 },
    { id: 2, name: 'Iron Sheets', price: 600 },
    { id: 3, name: 'Nails', price: 50 },
    // Add more products as needed
];

const availableItemsContainer = document.querySelector('.available-items');

function displayAvailableItems() {
    availableItemsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span>${product.name}</span>
            <span>KSH. ${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        availableItemsContainer.appendChild(productDiv);
    });
}

displayAvailableItems();

const itemsForSaleContainer = document.querySelector('.items-for-sale');

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${product.name}</span>
            <input type="number" value="1" min="1">
            <span>$${product.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${productId})">Remove</button>
        `;
        itemsForSaleContainer.appendChild(cartItem);
    }
}

function removeFromCart(productId) {
    const cartItems = itemsForSaleContainer.getElementsByClassName('cart-item');
    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        if (item.dataset.productId === productId) {
            item.remove();
        }
    }
}

