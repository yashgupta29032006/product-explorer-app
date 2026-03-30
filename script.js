const productList = document.getElementById('product-list');
const loadingText = document.getElementById('loading');

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        renderProducts(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        loadingText.textContent = 'Failed to load products. Please try again.';
    } finally {
        if (loadingText && productList.children.length > 0) {
            loadingText.style.display = 'none';
        }
    }
}

function renderProducts(products) {
    productList.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        
        productCard.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="card-content">
                <h2 class="card-title">${product.title}</h2>
                <p class="card-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        
        productList.appendChild(productCard);
    });
}

fetchProducts();
