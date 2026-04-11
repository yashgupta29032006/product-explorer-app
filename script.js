const productList = document.getElementById('product-list');
const loadingText = document.getElementById('loading');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');
const themeToggle = document.getElementById('theme-toggle');

let allProducts = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    }
}

async function init() {
    loadTheme();
    try {
        const productsResponse = await fetch('https://fakestoreapi.com/products');
        const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
        
        allProducts = await productsResponse.json();
        const categories = await categoriesResponse.json();
        
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categorySelect.appendChild(option);
        });

        render();
    } catch (error) {
        loadingText.textContent = 'Error loading data.';
    } finally {
        loadingText.style.display = 'none';
    }
}

function render() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const sortBy = sortSelect.value;

    let filteredProducts = allProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );

    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (sortBy === 'low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    productList.innerHTML = filteredProducts.map(product => {
        const isFavorite = favorites.includes(product.id);
        return `
            <div class="card">
                <button class="fav-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    ${isFavorite ? '❤️' : '🤍'}
                </button>
                <div class="image-container">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="card-content">
                    <h2 class="card-title">${product.title}</h2>
                    <p class="card-price">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
    }).join('');
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favoriteId => favoriteId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    render();
}

let debounceTimer;
searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        render();
    }, 300);
});

categorySelect.addEventListener('change', render);
sortSelect.addEventListener('change', render);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

init();
