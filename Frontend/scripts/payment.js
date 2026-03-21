
document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const placeOrderBtn = document.getElementById('place-order');

  const cart = JSON.parse(localStorage.getItem('cartData')) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalPriceElement.textContent = '0';
      placeOrderBtn.disabled = true;
      return;
    }

    cart.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>${item.name} - ₹${item.price} x ${item.quantity}</div>
        <div>₹${(item.price * item.quantity).toFixed(2)}</div>
      `;
      cartItemsContainer.appendChild(div);
      total += item.price * item.quantity;
    });

    totalPriceElement.textContent = total.toFixed(2);
    placeOrderBtn.disabled = false;
  }

  renderCart();

  placeOrderBtn.addEventListener('click', async () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !address || !city || !pincode || !phone) {
      alert('Please fill all shipping details.');
      return;
    }

    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

    const user = JSON.parse(localStorage.getItem('quickmart_user'));
    const userId = user ? user.id : null;
    if (!userId) {
      alert('Please login before placing an order.');
      return;
    }

    const orderData = {
      userId,
      products: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity
      })),
      totalAmount: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      paymentStatus: 'Paid',
      paymentMethod: selectedPayment,
      shippingAddress: `${address}, ${city}, ${pincode}`,
      contactPhone: phone
    };

    try {
      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      const result = await response.json();
      if (response.ok) {
        alert('Order placed successfully!');
        localStorage.removeItem('cartData');
        window.location.href = 'thankyou.html';
      } else {
        alert('Failed to place order: ' + result.message);
      }
    } catch (err) {
      alert('Order error: ' + err.message);
    }
  });
});
