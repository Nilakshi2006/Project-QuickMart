
const allProducts = [
    { id: "1", name: "Smart Watch", description: "Touchscreen smart watch with heart rate sensor.", price: 1999, category: "Electronics", image: "https://tse1.mm.bing.net/th/id/OIP.Od-RsGqn71D8sFi4IFc4mAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "2", name: "Bluetooth Speaker", description: "Waterproof Bluetooth speaker for outdoor fun.", price: 799, category: "Electronics", image: "https://tse3.mm.bing.net/th/id/OIP.h0LuFwaZOEnBiuiTdOye4wHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "3", name: "Wireless Earbuds", description: "True wireless earbuds with noise canceling.", price: 1599, category: "Accessories", image: "https://m.media-amazon.com/images/I/613+h5iz9VL._SL1500_.jpg" },

    { id: "4", name: "Yoga Mat", description: "Extra thick eco-friendly yoga mat.", price: 549, category: "Sports", image: "https://tse4.mm.bing.net/th/id/OIP.kEvpjZBweC8RI5VEfJJIIAHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "5", name: "Stainless Water Bottle", description: "Keeps drinks hot/cold for hours.", price: 349, category: "Sports", image: "https://tse2.mm.bing.net/th/id/OIP.4HBINaMkPiPr-ZlMUZ7sbwHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "6", name: "Gaming Mouse", description: "Ergonomic wireless mouse for gamers.", price: 1199, category: "Electronics", image: "https://tse2.mm.bing.net/th/id/OIP.BC2H5w0p_Ya-r8xd4sRTBgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "7", name: "Smart Lamp", description: "Touch-controlled RGB bedside lamp.", price: 599, category: "Home", image: "https://m.media-amazon.com/images/I/61KioMHMgxL._SL1500_.jpg" },

    { id: "8", name: "Backpack", description: "Water-resistant, 3 compartments, laptop sleeve.", price: 899, category: "Accessories", image: "https://m.media-amazon.com/images/I/91YandYecdL.jpg" },

    { id: "9", name: "Desk Plant", description: "Lifelike artificial desk succulent.", price: 249, category: "Home", image: "https://cdn.cdnparenting.com/articles/2019/04/24114058/268510094-H.jpg" },

    { id: "10", name: "Fitness Tracker", description: "Waterproof, step counter, sleep tracker.", price: 1299, category: "Electronics", image: "https://tse1.mm.bing.net/th/id/OIP.3nJXd6oYrlr3iPiT0khgcAHaFS?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "11", name: "Sunglasses", description: "UV-protective polarized sunglasses.", price: 499, category: "Accessories", image: "https://images-na.ssl-images-amazon.com/images/I/51zEsraniRL._UL1500_.jpg" },

    { id: "12", name: "Coffee Maker", description: "Automatic drip coffee machine.", price: 2399, category: "Home", image: "https://i5.walmartimages.com/asr/069af1d8-5685-449b-8e9b-3ad3c27b15ca_1.f45921073d88668461d3c45a413108d5.jpeg" },

    { id: "13", name: "Mechanical Keyboard", description: "RGB backlit, blue switches, USB.", price: 3199, category: "Electronics", image: "https://m.media-amazon.com/images/I/61nghmq8GPL._AC_.jpg" },

    { id: "14", name: "Portable Fan", description: "Rechargeable mini hand fan.", price: 349, category: "Home", image: "https://m.media-amazon.com/images/I/81U1mb2jM2L._AC_SL1500_.jpg" },

    { id: "15", name: "Running Shoes", description: "Lightweight, breathable men’s shoes.", price: 1899, category: "Sports", image: "https://tse1.mm.bing.net/th/id/OIP.7O42Tk0Wqch3I33hBwcGLgHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "16", name: "Travel Mug", description: "Insulated travel mug, 350ml.", price: 399, category: "Accessories", image: "https://wickedgoodtraveltips.com/wp-content/uploads/2019/06/Travel-Mug.jpg" },

    { id: "17", name: "Bluetooth Headphones", description: "Over-ear, foldable, with mic.", price: 1799, category: "Electronics", image: "https://m.media-amazon.com/images/I/61K4azdo8BL._AC_SL1500_.jpg" },

    { id: "18", name: "Cosy Blanket", description: "Ultra-soft large fleece blanket.", price: 799, category: "Home", image: "https://m.media-amazon.com/images/I/81+KAQGG9TL.jpg" },

    { id: "19", name: "Gym Bag", description: "Durable, waterproof, two pockets.", price: 699, category: "Sports", image: "https://m.media-amazon.com/images/I/71QO3WlyMAL._SL1500_.jpg" },

    { id: "20", name: "Wireless Charger", description: "Quick charge pad for phones.", price: 949, category: "Electronics", image: "https://m.media-amazon.com/images/I/61frLx8usDL._AC_.jpg" },

    { id: "21", name: "Desk Organizer", description: "Multi-compartment wood caddy.", price: 599, category: "Home", image: "https://m.media-amazon.com/images/I/91YkaTjkp7L._AC_.jpg" },

    { id: "22", name: "Beanie Hat", description: "Winter warm, knitted, unisex.", price: 299, category: "Accessories", image: "https://www.zycapsfactory.com/wp-content/uploads/2018/04/custombeanies-e1524120652841.jpg" },

    { id: "23", name: "Jump Rope", description: "Adjustable speed skipping rope.", price: 199, category: "Sports", image: "https://m.media-amazon.com/images/I/71LCjUIYbML._AC_SL1500_.jpg" },

    { id: "24", name: "Yoga Block", description: "Light, supportive foam block.", price: 229, category: "Sports", image: "https://th.bing.com/th/id/R.e86618d70bbc0c12346ce62268eb1428?rik=hnysp%2fjhJRvBEw&riu=http%3a%2f%2fg02.a.alicdn.com%2fkf%2fHTB1woODLpXXXXabXXXXq6xXFXXXJ%2fEVA-Yoga-Blocks-Bricks-Foaming-Foam-Home-Exercise-Fitness-Health-Gym-Practice-Tool-23-15-7.jpg&ehk=8v25oetJJTmmeLGf2HrBEY2MrJaHLQArGx1pr0%2f%2bRVk%3d&risl=&pid=ImgRaw&r=0" },

    { id: "25", name: "LED Strip Light", description: "RGB, remote controlled, 3m.", price: 699, category: "Home", image: "https://th.bing.com/th/id/OIP.NNeP0B4q9fv-K3zYw0PrAwHaHa?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "26", name: "Tablet Case", description: "Protective folio cover.", price: 349, category: "Accessories", image: "https://m.media-amazon.com/images/I/71Htbd3HY7L.jpg" },

    { id: "27", name: "Mini Projector", description: "Portable mini LED projector.", price: 3289, category: "Electronics", image: "https://i5.walmartimages.com/asr/a20ade70-753e-4ab7-8f06-329ef636a424.d440b51bebdbf33e38fba274696f262f.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" },

    { id: "28", name: "Analog Wall Clock", description: "Silent, battery operated.", price: 699, category: "Home", image: "https://tse1.mm.bing.net/th/id/OIP.klfVCleMg6oE1BGrHxCCvgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: "29", name: "Laptop Stand", description: "Aluminum adjustable stand.", price: 899, category: "Electronics", image: "https://m.media-amazon.com/images/I/619NVqlTSiL._AC_.jpg" },

    { id: "30", name: "Travel Pillow", description: "Memory foam U-shaped pillow.", price: 499, category: "Accessories", image: "https://m.media-amazon.com/images/I/71iJLivS5PL._AC_SL1500_.jpg" },

    { id: "31", name: "Bluetooth Speaker", description: "Portable wireless mini speaker with deep bass.", price: 999, category: "Electronics", image: "https://tse1.mm.bing.net/th/id/OIP.tsdzn4u0ybuyC22PWLpgOAHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "32", name: "Smart Watch", description: "Fitness tracker with heart rate monitor.", price: 899, category: "Electronics", image: "https://thvnext.bing.com/th/id/OIP._EtioZwd_CKYk4l2Xf_T4QHaHa?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "33", name: "USB LED Light", description: "Flexible USB light for laptop and power bank.", price: 149, category: "Accessories", image: "https://th.bing.com/th/id/R.f5b4ec7814b87005b437bfa85d2f9e2b?rik=JOxRt8PMtw08fg&riu=http%3a%2f%2famazoniafamily.com%2fwp-content%2fuploads%2f2020%2f12%2fssl2.jpg&ehk=iCXThSKUdjIREucbZApavyCXA%2bhSGO3oAIpqkdtfvIQ%3d&risl=&pid=ImgRaw&r=0" },

{ id: "34", name: "Wireless Mouse", description: "Ergonomic 2.4GHz optical mouse.", price: 599, category: "Electronics", image: "https://thvnext.bing.com/th/id/OIP.l1zuF9R7j6rGzWvJIYq-XwHaHa?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "35", name: "Water Bottle", description: "Stainless steel insulated bottle, 750ml.", price: 499, category: "Home & Kitchen", image: "https://thvnext.bing.com/th/id/OIP.8UM1E6epe3ktW3xao8uazwHaE8?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "36", name: "Phone Stand", description: "Adjustable metal desk stand for mobile phones.", price: 299, category: "Accessories", image: "https://m.media-amazon.com/images/I/61z3hWDb8XL._AC_.jpg" },

{ id: "37", name: "Yoga Mat", description: "Non-slip fitness and exercise mat.", price: 799, category: "Sports", image: "https://m.media-amazon.com/images/I/61FTABGJz3L.jpg" },
{ id: "38", name: "Power Bank", description: "10000mAh fast-charging power bank.", price: 949, category: "Electronics", image: "https://m.media-amazon.com/images/I/61L-mHU13oL._AC_SL1500_.jpg" },

{ id: "39", name: "Wireless Earphones", description: "In-ear Bluetooth earphones with mic.", price: 999, category: "Electronics", image: "https://m.media-amazon.com/images/I/61V6EHUUYcL._SL1500_.jpg" },

{ id: "40", name: "Notebook", description: "A5 size ruled notebook, 200 pages.", price: 199, category: "Stationery", image: "https://pyxis.nymag.com/v1/imgs/4c9/1bb/36fdf8e825ebaf2da5461b90612df0d124-Lemome.2x.rsquare.w600.jpg" },

{ id: "41", name: "Desk Lamp", description: "Rechargeable LED table lamp with touch control.", price: 699, category: "Home & Kitchen", image: "https://tse4.mm.bing.net/th/id/OIP.RI855QhX0qWJEm6n0HJaOQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "42", name: "Backpack", description: "Water-resistant laptop backpack.", price: 899, category: "Accessories", image: "https://m.media-amazon.com/images/I/719k5fUz4FL._AC_SL1500_.jpg" },

{ id: "43", name: "Coffee Mug", description: "Ceramic mug with motivational quote.", price: 299, category: "Home & Kitchen", image: "https://m.media-amazon.com/images/I/61qq3bcLDXL._AC_SL1500_.jpg" },

{ id: "44", name: "USB Cable", description: "Fast-charging braided Type-C cable.", price: 199, category: "Electronics", image: "https://m.media-amazon.com/images/I/61DXuyMr6AL._SL1500_.jpg" },

{ id: "45", name: "Portable Fan", description: "Rechargeable mini handheld fan.", price: 399, category: "Electronics", image: "https://m.media-amazon.com/images/I/71faVGTVyzL._AC_SL1500_.jpg" },

{ id: "46", name: "Keychain Light", description: "Mini LED torch keychain.", price: 99, category: "Accessories", image: "https://tse4.mm.bing.net/th/id/OIP.iEz4X4oLImHkPUcHAgGIKQHaFV?cb=12&w=1000&h=721&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "47", name: "Wireless Keyboard", description: "Compact Bluetooth keyboard for laptops.", price: 999, category: "Electronics", image: "https://tse3.mm.bing.net/th/id/OIP.bBxFPyb2kxsNBXO4jDQDewHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "48", name: "Scented Candle", description: "Lavender aroma candle in glass jar.", price: 349, category: "Home & Kitchen", image: "https://tse2.mm.bing.net/th/id/OIP.tK2nowwiS73_-ViVUqC7_AHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "49", name: "Car Phone Holder", description: "360° rotating magnetic mount for car.", price: 449, category: "Accessories", image: "https://tse3.mm.bing.net/th/id/OIP.4Ol3W_nhZ9dURgeGL52JjQHaHV?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3" },

{ id: "50", name: "Earbud Case", description: "Silicone protective case for earbuds.", price: 199, category: "Accessories", image: "https://m.media-amazon.com/images/I/61-sdEerjvL.jpg" },
{
    id: "51", name: "Fitness Band", description: "Activity tracker with sleep monitor.", price: 1299, category: "Electronics", image: "https://i.pinimg.com/originals/28/ba/ca/28baca65d181466f8b19ca1e788fa6eb.jpg"
},
{
    id: "52", name: "Desk Calendar", description: "2024 desktop calendar with inspirational quotes.", price: 249, category: "Stationery", image: "https://tse2.mm.bing.net/th/id/OIP.VeehgER_815eSBMauFZU7wHaF7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
}

];


// Product Data

let cart = JSON.parse(localStorage.getItem("cartData")) || [];

// Page Navigation
function showPage(page) {

    document.querySelectorAll(".page").forEach((p) => {
        p.classList.remove("active");
    });

    const selectedPage = document.getElementById(`${page}-page`);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    if (page === "products") {
        renderProductsList(allProducts);
    }

    if (page === "cart") {
        renderCart();
    }

    updateCartCount();
}

// Render featured products
function renderFeatured(products) {
    const featured = products.slice(0,4);
    const div = document.getElementById("featured-products");
    div.innerHTML = '';
    featured.forEach(p => div.innerHTML += productCard(p, true));
}

// Render product list
function renderProductsList(products) {
    const listDiv = document.getElementById("products-list");
    listDiv.innerHTML = '';
    products.forEach(p => listDiv.innerHTML += productCard(p, true));
}

// Product card HTML
function productCard(p, showButton=false){
    return `
    <div class="product-card">
        <img src="${p.image}" class="product-img" alt="${p.name}">
        <div class="product-info">
            <h3 class="product-name">${p.name}</h3>
            <div class="product-category">${p.category}</div>
            <p class="product-description">${p.description}</p>
            <div class="product-footer">
                <div class="product-price">₹${p.price}</div>
                ${showButton?`<button class="btn btn-primary" onclick="addToCart('${p.id}')">Add to Cart</button>
                <button class="btn btn-primary" style="background:#00b06b;" onclick="buyNow('${p.id}')">Buy Now</button>`:''}
            </div>
        </div>
    </div>`;
}

// Add to cart
function addToCart(id){
    const product = allProducts.find(p=>p.id===id);
    if(!product) return;
    const existing = cart.find(item=>item.id===id);
    if(existing){ existing.quantity+=1; } 
    else { cart.push({...product, quantity:1}); }
    localStorage.setItem("cartData", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Buy Now
function buyNow(id){
    const product = allProducts.find(p=>p.id===id);
    if(!product) return;
    cart = [{...product, quantity:1}];
    localStorage.setItem("cartData", JSON.stringify(cart));
    showPage('cart');
}

// Render Cart
function renderCart(){
    const container = document.getElementById("cart-items");
    const subtotalElem = document.getElementById("cart-subtotal");
    const totalElem = document.getElementById("cart-total");
    if(cart.length===0){
        container.innerHTML="<p>Your cart is empty.</p>";
        subtotalElem.textContent="₹0.00";
        totalElem.textContent="₹0.00";
        return;
    }
    container.innerHTML='';
    let subtotal=0;
    cart.forEach(item=>{
        subtotal+=item.price*item.quantity;
        container.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}" class="cart-img" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}',-1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}',1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        </div>`;
    });
    const shipping = 10;
    const total = subtotal + shipping;
    subtotalElem.textContent=`₹${subtotal.toFixed(2)}`;
    totalElem.textContent=`₹${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(id, change){
    const item = cart.find(i=>i.id===id);
    if(!item) return;
    item.quantity+=change;
    if(item.quantity<=0) cart=cart.filter(i=>i.id!==id);
    localStorage.setItem("cartData", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Remove item
function removeFromCart(id){
    cart = cart.filter(i=>i.id!==id);
    localStorage.setItem("cartData", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Checkout
function checkout(){
    if(cart.length===0){ alert("Your cart is empty!"); return; }
    // alert("Order placed successfully! ✅");
      window.location.href = 'payment.html';                ///////
    // cart=[];
    // localStorage.removeItem("cartData");
    renderCart();
    updateCartCount();
}

// Update cart count
function updateCartCount() {

    const badge = document.getElementById("cart-count");

    if (!badge) return;

    const count = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    badge.textContent = count;
}

// Init
renderFeatured(allProducts);
updateCartCount();
showPage('home');
const cartBtn = document.getElementById("cartBtn");

if (cartBtn) {

    cartBtn.addEventListener("click", function (e) {

        e.preventDefault();

        showPage("cart");

    });

}