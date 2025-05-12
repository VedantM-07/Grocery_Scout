// Show and hide cart functions
function showCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('overlay');
  if (cartSidebar && overlay) {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
  }
}

function hideCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('overlay');
  if (cartSidebar && overlay) {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
  }
}

// Add event listeners for cart open/close
document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.getElementById('cart-icon');
  const closeCartBtn = document.getElementById('close-cart');
  const overlay = document.getElementById('overlay');
  
  if (cartIcon) cartIcon.addEventListener('click', showCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', hideCart);
  if (overlay) overlay.addEventListener('click', hideCart);
});

document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const productsGrid = document.getElementById('products-grid');
    const productsHeading = document.getElementById('products-heading');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const categoryNav = document.querySelector('.category-nav');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const locationSelector = document.querySelector('.location-selector');
    const locationDropdown = document.getElementById('location-dropdown');
    const currentLocation = document.getElementById('current-location');
    const locationList = document.querySelector('.location-list');
    const locationSearchInput = document.getElementById('location-search-input');

    // Cart data
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Initialize the page
    function init() {
        displayProducts('all');
        updateCartUI();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Category navigation
        categoryNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const category = e.target.getAttribute('data-category');
                
                // Update active class
                document.querySelectorAll('.category-nav li').forEach(item => {
                    item.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Display products for the selected category
                displayProducts(category);
            }
        });

        // Search functionality
        searchBtn.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm) {
                searchProducts(searchTerm);
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim().toLowerCase();
                if (searchTerm) {
                    searchProducts(searchTerm);
                }
            }
        });

        // Location selector
        locationSelector.addEventListener('click', (e) => {
            if (!e.target.closest('#location-search-input')) {
                locationDropdown.classList.toggle('active');
            }
        });

        // Location selection
        locationList.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const location = e.target.getAttribute('data-location');
                currentLocation.textContent = location;
                locationDropdown.classList.remove('active');
            }
        });

        // Location search
        locationSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const locations = document.querySelectorAll('.location-list li');
            
            locations.forEach(item => {
                const location = item.textContent.toLowerCase();
                if (location.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        // Checkout button
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Thank you for your order! We will process it right away.');
                cart = [];
                saveCart();
                updateCartUI();
                hideCart();
            } else {
                alert('Your cart is empty. Please add some items first.');
            }
        });

        // Document click to close dropdowns
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.location-selector') && locationDropdown.classList.contains('active')) {
                locationDropdown.classList.remove('active');
            }
        });
    }

    // Display products by category
    function displayProducts(category) {
        productsGrid.innerHTML = '';
        
        const products = window.productDatabase || [];
        const filteredProducts = category === 'all' ? 
            products : 
            products.filter(product => product.category === category);
        
        productsHeading.textContent = category === 'all' ? 
            'All Products' : 
            `${category.charAt(0).toUpperCase() + category.slice(1)} Products`;
        
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    // Search products
    function searchProducts(term) {
        productsGrid.innerHTML = '';
        
        const products = window.productDatabase || [];
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(term) || 
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term)
        );
        
        productsHeading.textContent = `Search Results for "${term}"`;
        
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p class="no-products">No products found for your search.</p>';
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    // Create product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', product.id);
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-unit">${product.unit}</p>
                <p class="product-price">₹${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        
        // Add event listener to the Add to Cart button
        card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
            const productId = e.target.closest('.add-to-cart-btn').getAttribute('data-id');
            addToCart(productId, 1);
        });
        
        return card;
    }

    // Add to cart function (can be called from other files)
    window.addToCart = function(productId, quantity = 1) {
        const products = window.productDatabase || [];
        
        // Convert productId to the same type for comparison (force both to string)
        const product = products.find(p => String(p.id) === String(productId));
        
        if (!product) {
            console.error(`Product with ID ${productId} not found`);
            return false;
        }
        
        // Check if product is already in cart
        const existingItem = cart.find(item => String(item.id) === String(productId));
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit,
                quantity: quantity
            });
        }
        
        saveCart();
        updateCartUI();
        
        // Provide visual feedback
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = `${product.name} added to cart!`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('active');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('active');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
        
        return true;
    };

    // Update cart UI
    function updateCartUI() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart items display
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '₹0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-unit">${item.unit}</p>
                    <p class="cart-item-price">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="item-decrease" data-id="${item.id}">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="item-increase" data-id="${item.id}">+</button>
                    <button class="item-remove" data-id="${item.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to cart items
        document.querySelectorAll('.item-decrease').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                updateCartItemQuantity(id, -1);
            });
        });
        
        document.querySelectorAll('.item-increase').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                updateCartItemQuantity(id, 1);
            });
        });
        
        document.querySelectorAll('.item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.closest('.item-remove').getAttribute('data-id');
                removeCartItem(id);
            });
        });
        
        // Update total
        cartTotal.textContent = `₹${total.toFixed(2)}`;
    }

    // Update cart item quantity - fix ID comparison
    function updateCartItemQuantity(id, change) {
        const item = cart.find(item => String(item.id) === String(id));
        
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                removeCartItem(id);
            } else {
                saveCart();
                updateCartUI();
            }
        }
    }

    // Remove item from cart - fix ID comparison
    function removeCartItem(id) {
        cart = cart.filter(item => String(item.id) !== String(id));
        saveCart();
        updateCartUI();
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Update cart UI function for external use
    window.updateCartUI = updateCartUI;

    // Expose cart functions to window for cross-module access
    window.addToCart = addToCart;
    window.updateCartUI = updateCartUI;
    window.showCart = showCart;

    // Expose necessary functions and data to window scope for cross-file access
    window.productDatabase = productDatabase;
    window.addToCart = addToCart;
    window.updateCartUI = updateCartUI;
    window.showCart = showCart;

    // Initialize the page
    init();
});