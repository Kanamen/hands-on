'use strict';

// ===== 商品データ（本来はAPIから取得） =====
const products = [
  { id: 1, name: 'オーガニックコットンTシャツ', price: 3980, emoji: '👕', badge: 'NEW' },
  { id: 2, name: 'ハンドメイドマグカップ', price: 2480, emoji: '☕', badge: 'NEW' },
  { id: 3, name: 'アロマキャンドル セット', price: 1980, emoji: '🕯️', badge: '' },
  { id: 4, name: 'レザートートバッグ', price: 8900, emoji: '👜', badge: 'NEW' },
  { id: 5, name: 'ステンレスボトル 500ml', price: 2980, emoji: '🍶', badge: '' },
  { id: 6, name: 'ワイヤレスイヤホン', price: 5980, emoji: '🎧', badge: 'SALE' },
  { id: 7, name: '観葉植物 モンステラ', price: 3480, emoji: '🪴', badge: '' },
  { id: 8, name: 'リネンクッションカバー', price: 1680, emoji: '🛋️', badge: '' },
];

// ===== カート =====
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  cartCount += 1;
  cartCountEl.textContent = cartCount;
  showToast(`「${product.name}」をカートに追加しました`);
}

// ===== 商品カードを描画 =====
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (p) => `
      <article class="product-card">
        <div class="product-card__img">${p.emoji}</div>
        <div class="product-card__body">
          ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
          <h3 class="product-card__name">${p.name}</h3>
          <p class="product-card__price">¥${p.price.toLocaleString()}</p>
          <button class="product-card__btn" data-id="${p.id}">カートに入れる</button>
        </div>
      </article>`
    )
    .join('');

  grid.querySelectorAll('.product-card__btn').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(Number(btn.dataset.id)));
  });
}

// ===== トースト通知 =====
let toastTimer;
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      background: #2c2c2c; color: #fff; padding: 14px 24px; border-radius: 8px;
      font-size: 0.9rem; box-shadow: 0 6px 18px rgba(0,0,0,0.2);
      opacity: 0; transition: opacity 0.3s; z-index: 1000;`;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => (toast.style.opacity = '1'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toast.style.opacity = '0'), 2500);
}

// ===== ハンバーガーメニュー =====
function setupHamburger() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = nav.style.display === 'block';
    nav.style.display = isOpen ? 'none' : 'block';
  });
}

// ===== スムーススクロール =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ===== ニュースレター登録 =====
function setupNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    showToast('ニュースレターに登録しました。ありがとうございます！');
  });
}

// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupHamburger();
  setupSmoothScroll();
  setupNewsletter();
});
