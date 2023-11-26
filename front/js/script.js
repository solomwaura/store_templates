
const products = [
    { name: 'Simba Cement', price: 580 },
    { name: 'Iron Sheet', price: 650 },
    { name: 'Meshed Wire Mesh', price: 250 },
    { name: 'Nails', price: 160 },
    { name: 'Hose Pipes', price: 100 },
    { name: 'Conduits', price: 25 },
    { name: 'Blue Drums', price: 750 },
    { name: 'United Paints', price: 1150 },
    { name: 'Dura Paints', price: 1250 },
    { name: 'Edged Hammer', price: 400 },
    { name: 'Mattoke', price: 450 },
    { name: 'Wheel barrow', price: 2000 }
];

const cart = [];

function renderProducts() {
    const productList = document.getElementById('productList');

    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td><button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button></td>
        `;
        productList.appendChild(tr);
    });
}

function renderCart() {
    const cartList = document.getElementById('cartList');
    const totalElement = document.getElementById('total');
    cartList.innerHTML = '';

    let totalCost = 0;

    cart.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)"></td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartList.appendChild(tr);

        totalCost += item.price * item.quantity;
    });

    totalElement.textContent = `Total: KSH ${totalCost.toFixed(2)}`;
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    renderCart();
}

function updateQuantity(name, quantity) {
    const item = cart.find(item => item.name === name);

    if (item) {
        item.quantity = parseInt(quantity, 10);
        renderCart();
    }
}

// Initial render
renderProducts();
renderCart();
