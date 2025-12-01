// ================= PRODUCT DATA WITH IMAGES =================
const products = [
    // HOT DRINKS
    { id: 1, name: "Masala Chai", price: 20, category: "hot", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46W7KIiEcq4OAldEPcUUMec_q6qjD_roXhg&s" },
    { id: 2, name: "Ginger Tea", price: 25, category: "hot", img: "https://www.myovacare.com/cdn/shop/articles/cup_of_ginger_root_tea.jpg?v=1718363084" },
    { id: 3, name: "Hot Coffee", price: 40, category: "hot", img: "https://images.herzindagi.info/image/2024/Aug/How-To-Make-Instant-Hot-Coffee-recipe-At-Home.jpg" },
    { id: 4, name: "Black Coffee", price: 35, category: "hot", img: "https://weaverscoffee.com/cdn/shop/articles/1_957x.png?v=1568421338" },
    { id: 5, name: "Hot Chocolate", price: 60, category: "hot", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvM_rSF7fR5bj2jubTtWsK6OlCc3pQxw4P0Q&s" },

    // COLD DRINKS
    { id: 6, name: "Cold Coffee", price: 120, category: "cold", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJKPQynVCGs8vzXbuYiBPYOPCfg_KzdJ78Q&s" },
    { id: 7, name: "Ice Tea", price: 90, category: "cold", img: "https://www.southernliving.com/thmb/XoM6xDREX1o2gyulEUYowqQtA5I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27053-SweetTea_0155_4x3-9a4ef2365a5e4a10b62478e2040fb0cb.jpg" },
    { id: 8, name: "Lemon Soda", price: 50, category: "cold", img: "https://bakesbybrownsugar.com/wp-content/uploads/2023/01/Lemon-Soda-15C.jpg" },
    { id: 9, name: "Orange Juice", price: 70, category: "cold", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2bIw4asa-RoIdb82YxQ8E_Xo_MCf5BPPh_Q&s" },
    { id: 10, name: "Cold Coca-Cola", price: 40, category: "cold", img: "https://citma.shorthandstories.com/6e7d13ef-02b7-42af-9d16-cce70df03f84/assets/G3zfKMJ2tq/shorthand-images5-2560x1440.jpg" },
    { id: 11, name: "Cold Sprite", price: 40, category: "cold", img: "https://www.shutterstock.com/image-photo/moscow-russiaapril-4-2014-can-260nw-186209966.jpg" },
    { id: 12, name: "Cold Fanta", price: 40, category: "cold", img: "https://www.shutterstock.com/image-photo/murmansk-russia-february-16-2018-260nw-1026047062.jpg" },

    // SANDWICHES
    { id: 13, name: "Veg Sandwich", price: 80, category: "sandwich", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6_9u0TnWDghsXKG2BvWsUhij4XHBNYjCdA&s" },
    { id: 14, name: "Cheese Sandwich", price: 110, category: "sandwich", img: "https://media.istockphoto.com/id/1079003392/photo/cheese-toast.jpg?s=612x612&w=0&k=20&c=vsugRVfW3JRaQQZOH6hiYOA1IID-H2rva2ek1IIOdBo=" },
    { id: 15, name: "Club Sandwich", price: 130, category: "sandwich", img: "https://valentinascorner.com/wp-content/uploads/2021/08/Club-Sandwich-4.jpg" },
    { id: 16, name: "Paneer Grilled Sandwich", price: 150, category: "sandwich", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/paneer-sandwich.jpg" },
    { id: 17, name: "Veg Grilled Sandwich", price: 120, category: "sandwich", img: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/grilled-sandwich-4.jpg" },

    // MAGGI
    { id: 18, name: "Veg Maggi", price: 60, category: "maggi", img: "https://www.secondrecipe.com/wp-content/uploads/2020/04/vegetable-maggi-noodles.jpg" },
    { id: 19, name: "Cheese Maggi", price: 90, category: "maggi", img: "https://qben.in/wp-content/uploads/2025/04/Cheese-Maggie-600x641.webp" },

    // NOODLES
    { id: 20, name: "Veg Noodles", price: 90, category: "noodles", img: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/chinese-vegetable-noodles.jpg" },
    { id: 21, name: "Hakka Noodles", price: 110, category: "noodles", img: "https://www.sharmispassions.com/wp-content/uploads/2012/09/HakkaNoodles4-e1689045142580-500x500.jpg" },
    { id: 22, name: "Schezwan Noodles", price: 120, category: "noodles", img: "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-38-1-500x500.jpg" },

    // BITES
    { id: 23, name: "French Fries", price: 70, category: "bites", img: "https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg" },
    { id: 24, name: "Peri Peri Fries", price: 90, category: "bites", img: "https://rppizzeria.com/web/image/product.template/206/image_1024?unique=142cabe" },

    // BURGERS
    { id: 25, name: "Veg Burger", price: 60, category: "burger", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IvOEs9XPj4AaKqnTnI5698CueUIQ600TRA&s" },
    { id: 26, name: "Cheese Burger", price: 90, category: "burger", img: "https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg" },

    // ROLLS
    { id: 27, name: "Veg Roll", price: 70, category: "roll", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuii3vz-c9a8uofaphIF_OV3CkMqEl7b39iA&s" },
    { id: 28, name: "Paneer Roll", price: 110, category: "roll", img: "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg" },

    // SHAKES
    { id: 29, name: "Chocolate Shake", price: 140, category: "shake", img: "https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2022/04/chocolate-milkshake-no-ice-cream-2.jpg" },
    { id: 30, name: "Oreo Shake", price: 150, category: "shake", img: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-1.jpg" },
    { id: 31, name: "Strawberry Shake", price: 130, category: "shake", img: "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured.jpg" },
    { id: 32, name: "Vanilla Shake", price: 120, category: "shake", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMtxdCVsACvnqm3G49HzyMNdp9tRL1P2EdA&s" },
    { id: 33, name: "Mango Shake", price: 140, category: "shake", img: "https://farahjeats.com/wp-content/uploads/2022/08/IMG-7265.jpg" },
    { id: 34, name: "KitKat Shake", price: 160, category: "shake", img: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/874ddf1c19adff5463b9675736872cdc" },

    // MOJITO
    { id: 35, name: "Mint Mojito", price: 110, category: "mojito", img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/07/mojito.jpg" },
    { id: 36, name: "Blue Lagoon", price: 130, category: "mojito", img: "https://thefoodiebunch.sfo3.digitaloceanspaces.com/wp-content/uploads/2022/08/12205137/blue-lagoon-cocktail.jpg" },

    // DESSERTS
    { id: 37, name: "Brownie", price: 80, category: "dessert", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5cIYIZ4x3gHMt09gNQUxGf6NdhGlJBe_Vg&s" },
    { id: 38, name: "Chocolate Cake", price: 120, category: "dessert", img: "https://butternutbakeryblog.com/wp-content/uploads/2023/04/chocolate-cake.jpg" },

    // PIZZA
    { id: 39, name: "Margherita Pizza", price: 180, category: "pizza", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0HbRY0SsECXq3XHqjXUBw3CqK1VfE5PX1w&s" },
    { id: 40, name: "Cheese Pizza", price: 200, category: "pizza", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SVkzW0zCUtweFgf-ejOElQwfYFSoCI56TFlw97Y-IR9kvkJSGG6fJO7yc8q3JCn5iBs&usqp=CAU" },
    { id: 41, name: "Veg Pizza", price: 240, category: "pizza", img: "https://mrprabhu.in/uploads/products/203--1736798822.jpg" },
    { id: 42, name: "Paneer Tikka Pizza", price: 260, category: "pizza", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFCkhCWe9RZKpHwnaySo9ZGDul0eV2cCerw&s" },
    { id: 43, name: "Farmhouse Pizza", price: 280, category: "pizza", img: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/f9701b4e9e6aae4febe5e52c9f5e36f9" },
    { id: 44, name: "Mexican Pizza", price: 300, category: "pizza", img: "https://kfoods.com/images1/newrecipeicon/mexican-pizza_4960.jpg" },
];


// ================= SHOW PRODUCTS =================
const productGrid = document.getElementById("product-grid");

function renderProducts(filter = "all") {
    if (!productGrid) return;

    productGrid.innerHTML = "";

    const filteredProducts =
        filter === "all"
            ? products
            : products.filter((p) => p.category === filter.toLowerCase());

    filteredProducts.forEach((item) => {
        productGrid.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="${item.name}" class="card-img">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>

            <button 
                onclick="addToCart(${item.id})" 
                class="add-btn">
                Add to Cart
            </button>
        </div>`;
    });
}


// ================= FILTER BUTTONS =================
document.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter.active").classList.remove("active");
        btn.classList.add("active");
        renderProducts(btn.dataset.filter);
    });
});


// ================= CART SYSTEM =================
function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const el = document.getElementById("cart-count");
    if (el) el.textContent = count;
}


// ================= ADD TO CART =================
function addToCart(id) {
    let cart = getCart();
    const product = products.find((p) => p.id === id);

    let existing = cart.find((item) => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.img,
            quantity: 1,
        });
    }

    saveCart(cart);
}


// ================= RENDER CART PAGE =================
function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    if (!cartContainer) return;

    let cart = getCart();

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
        updateTotals();
        return;
    }

    cartContainer.innerHTML = cart
        .map(
            (item) => `
        <div class="cart-item">
            <img src="${item.image}" class="cart-img">
            
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>

                <div class="qty-box">
                    <button class="minus-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="plus-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>

                <button onclick="removeItem(${item.id})" class="remove-btn">Remove</button>
            </div>
        </div>
    `
        )
        .join("");

    updateTotals();
}


// ================= UPDATE QUANTITY =================
function changeQty(id, change) {
    let cart = getCart();
    let item = cart.find((i) => i.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter((i) => i.id !== id);
    }

    saveCart(cart);
    renderCart();
}


// ================= REMOVE ITEM =================
function removeItem(id) {
    let cart = getCart().filter((item) => item.id !== id);
    saveCart(cart);
    renderCart();
}


// ================= TOTALS =================
function updateTotals() {
    let cart = getCart();
    let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const sub = document.getElementById("subtotal");
    const total = document.getElementById("total");

    if (sub) sub.textContent = "₹" + subtotal;

    let delivery = cart.length > 0 ? 20 : 0;
    if (total) total.textContent = "₹" + (subtotal + delivery);
}


// ================= PAGE LOAD =================
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderCart();

    const placeBtn = document.getElementById("place-order");
    if (placeBtn) {
        placeBtn.addEventListener("click", () => {
            const address = document.getElementById("address").value.trim();

            if (address === "") {
                alert("Please enter delivery address!");
                return;
            }

            alert("Order placed successfully!");
            localStorage.removeItem("cart");
            window.location.href = "index.html";
        });
    }
});


// ================= MOBILE NAV =================
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("mobile-toggle")) {
        document.querySelector(".nav").classList.toggle("open");
    }
});
