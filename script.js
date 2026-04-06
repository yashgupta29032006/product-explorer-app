const productList = document.getElementById('product-list');
const loadingText = document.getElementById('loading');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');

let allProducts = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

async function init() {
    try {
        const [prodRes, catRes] = await Promise.all([
            fetch('https://fakestoreapi.com/products'),
            fetch('https://fakestoreapi.com/products/categories')
        ]);
        
        allProducts = await prodRes.json();
        const categories = await catRes.json();
        
        categories.map(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
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
    const selectedCat = categorySelect.value;
    const sortBy = sortSelect.value;

    let filtered = allProducts.filter(p => 
        p.title.toLowerCase().includes(searchTerm)
    );

    if (selectedCat !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCat);
    }

    if (sortBy === 'low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
        filtered.sort((a, b) => b.price - a.price);
    }

    productList.innerHTML = filtered.map(product => {
        const isFav = favorites.includes(product.id);
        return `
            <div class="card">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(${product.id})">
                    ${isFav ? '❤️' : '🤍'}
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

function toggleFav(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    render();
}

searchInput.addEventListener('input', render);
categorySelect.addEventListener('change', render);
sortSelect.addEventListener('change', render);

init();
