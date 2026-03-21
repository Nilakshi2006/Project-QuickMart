

document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Load cart data from localStorage using consistent key 'cartData'
  function loadCart() {
    return JSON.parse(localStorage.getItem('cartData')) || [];
  }

  // Save cart data to localStorage
  function saveCart(cart) {
    localStorage.setItem('cartData', JSON.stringify(cart));
  }

  // Render cart items
  function renderCartItems() {
    const cart = loadCart();
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalPriceElement.textContent = '0';
      checkoutBtn.disabled = true;
      return;
    }

    checkoutBtn.disabled = false;
    let totalPrice = 0;

    cart.forEach((item, index) => {
      totalPrice += item.price * item.quantity;

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
  }

  // Remove item from cart
  function removeItem(index) {
    const cart = loadCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCartItems();
  }

  // Event delegation for remove buttons
  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const itemIndex = e.target.getAttribute('data-index');
      removeItem(Number(itemIndex));
    }
  });

  // Proceed to checkout
  checkoutBtn.addEventListener('click', () => {
    const cart = loadCart();
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // Redirect to payment page
    window.location.href = 'payment.html';
  });

  renderCartItems();
});
