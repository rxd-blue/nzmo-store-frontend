let lastFilter = {};
let currentCart = [];

function filterProducts(category, brand) {
  const products = document.querySelectorAll('.product');
  products.forEach(p => {
    const cat = p.dataset.category;
    const br = p.dataset.brand;
    if ((category && cat !== category) || (brand && br !== brand)) {
      p.style.display = 'none';
    } else {
      p.style.display = 'inline-block';
    }
  });
}

// استدعاء الفلتر من API كل 2 ثانية
async function checkFilterUpdate() {
  try {
    const res = await fetch('http://localhost:3000/api/filter');
    const filter = await res.json();

    if (JSON.stringify(filter) !== JSON.stringify(lastFilter)) {
      lastFilter = filter;
      filterProducts(filter.category, filter.brand);
    }
  } catch (error) {
    console.error('Error fetching filter:', error);
  }
}

// استدعاء محتويات العربة
async function pollCart() {
  try {
    const res = await fetch('http://localhost:3000/api/cart');
    const newCart = await res.json();

    if (JSON.stringify(newCart) !== JSON.stringify(currentCart)) {
      currentCart = newCart;
      showSlideInCart(currentCart);
    }
  } catch (e) {
    console.error("Error fetching cart", e);
  }
}

// عرض العربة الجانبية
function showSlideInCart(items) {
  const container = document.getElementById('cart-content');
  container.innerHTML = '';

  if (!items.length) return;

  items.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${item.name}</strong><p>${item.details}</p><hr>`;
    container.appendChild(div);
  });

  document.getElementById('cart-slide').classList.add('visible');
}

// عند إتمام الشراء
function completeCheckout() {
  fetch('http://localhost:3000/api/cart/reset', { method: 'POST' });
  document.getElementById('cart-slide').classList.remove('visible');
  alert('✅ تم الشراء!');
}

// تفعيل المراقبة
setInterval(checkFilterUpdate, 2000);
setInterval(pollCart, 2000); 