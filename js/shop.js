/* ============================================================
   CONSTANTS
   ============================================================ */
const SUPABASE_URL = 'https://unsmdmwixipyecsdvuqj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuc21kbXdpeGlweWVjc2R2dXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwMzc4NDQsImV4cCI6MjEwMDYxMzg0NH0.9X2E-A1w2bRmIq7wwxPJTdQpPUlhch3MN2935xCqoMI';
const IMG_BASE = 'https://nexdoevents.vercel.app/';
const SVG_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ddd' width='200' height='200'/%3E%3Ctext fill='%23999' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

const DELIVERY_ZONES = {
    zone1: {
        name: 'Zone 1: 0-5km from CBD',
        fee: 10000,
        areas: ['Central', 'Kololo', 'Nakasero', 'Kamwokya', 'Wandegeya', 'Makerere', 'Industrial Area', 'Bugolobi', 'Naguru', 'Nsambya', 'Namirembe', 'Mengo', 'Old Kampala', 'Jinja Rd', 'Shimoni', 'Clock Tower', 'Kisenyi', 'Owino', 'Nakivubo', 'City Centre', 'Mulago', 'Nakasero Hill', 'Canteen', 'Kitante']
    },
    zone2: {
        name: 'Zone 2: 5-10km from CBD',
        fee: 20000,
        areas: ['Ntinda', 'Bukoto', 'Kisaasi', 'Naalya', 'Kyebando', 'Kyanja', 'Najera', 'Banda', 'Muyenga', 'Kansanga', 'Kabalagala', 'Rubaga', 'Kisasi', 'Komamboga', 'Kiwaatule', 'Kulambiro', 'Kiswa', 'Luzira', 'Mbuya', 'Ggaba', 'Kibuli', 'Katwe', 'Ndeeba', 'Busega', 'Lungujja', 'Mutundwe', 'Salaama', 'Buziga', 'Munyonyo', 'Bunga', 'Tank Hill', 'Kigobe', 'Nsoba', 'Kiwafu', 'Kansanga Gogonya', 'Kiwatule', 'Kanyanya', 'Kawempe', 'Ttula', 'Nabweru', 'Kawanda', 'Namasuba', 'Naalya Estate', 'Kigoowa', 'Nateete']
    },
    zone3: {
        name: 'Zone 3: 10-20km from CBD',
        fee: 30000,
        areas: ['Kira', 'Seeta', 'Mukono', 'Wakiso', 'Namugongo', 'Kasanje', 'Gayaza', 'Nansana', 'Bulenga', 'Seguku', 'Zana', 'Lubowa', 'Kajjansi', 'Bweyogerere', 'Kireka', 'Kasangati', 'Magere', 'Matugga', 'Nalumunye', 'Nabbingo', 'Kyengera', 'Ndejje', 'Kiteezi', 'Sonde', 'Nyanama', 'Nalukolongo', 'Kabowa', 'Lungala', 'Namboole', 'Kijabijo', 'Kiwologoma']
    },
    zone4: {
        name: 'Zone 4: 20km+ (Quote on request)',
        fee: 0,
        areas: ['Entebbe', 'Mpigi', 'Bombo', 'Bwebajja', 'Nsangi', 'Busunju', 'Njeru', 'Jinja', 'Lugazi', 'Mityana', 'Kayunga', 'Luwero', 'Kakiri', 'Ndejje', 'Kalagi', 'Nagalama', 'Ngogwe', 'Sisa', 'Nkumba', 'Kitende', 'Buseeta', 'Zirobwe', 'Wobulenzi', 'Nakaseke', 'Kasangati', 'Masulita', 'Nkoowe', 'Buwama', 'Buikwe', 'Mukono Town']
    },
    zone5: {
        name: 'Zone 5: Upcountry',
        fee: 15000,
        areas: ['Mbarara', 'Jinja', 'Mbale', 'Arua', 'Nebbi', 'Gulu', 'Lira', 'Soroti', 'Masaka']
    }
};

const HUB_SUPABASE_CONFIG = {
    url: 'https://unsmdmwixipyecsdvuqj.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuc21kbXdpeGlweWVjc2R2dXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwMzc4NDQsImV4cCI6MjEwMDYxMzg0NH0.9X2E-A1w2bRmIq7wwxPJTdQpPUlhch3MN2935xCqoMI'
};

/* ============================================================
   DOM REFS - declared here, assigned in boot()
   ============================================================ */
let grids;
let cart = [];
let currentCategory = 'flowers';
let cartCount, cartItems, cartTotal, cartSidebar, cartOverlay, cartIcon, cartClose;
let checkoutBtn, checkoutModal, cancelCheckout, checkoutForm;
let deliveryDate, deliveryInfo, deliveryZone, deliveryArea;
let zoneDetails, zoneInfo, deliveryPlace, deliveryTime;
let checkoutSubtotal, deliveryFee, checkoutTotal;
let hamburger, navLinks, body;
let searchInput, searchWrap, searchToggle, clearSearch;
let searchResultsSection, searchResultsGrid, hideOnSearch;
let lightbox, lightboxImage, lightboxClose;
let detailModal, detailImage, detailName, detailSub, detailPrice, detailAddToCart, detailClose;
let currentDetailProduct = null;
let heroSlides;
let currentSlideIndex = 0;
let wishlistIcon, wishlistCount, wishlistSidebar, wishlistItems, wishlistClose, wishlistOverlay;
let darkModeToggle;
let recentlyViewedSection, recentlyViewedScroll;

/* ============================================================
   TOAST
   ============================================================ */
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;display:flex;flex-direction:column;gap:10px;';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.style.cssText = 'padding:12px 20px;border-radius:8px;color:#fff;font-size:14px;max-width:320px;box-shadow:0 4px 12px rgba(0,0,0,.15);';
    const colors = { success: '#10b981', error: '#ef4444', info: '#3b82f6', warning: '#f59e0b' };
    toast.style.backgroundColor = colors[type] || colors.info;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity .3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

/* ============================================================
   LAZY LOADING (IntersectionObserver + data-src)
   ============================================================ */
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            lazyObserver.unobserve(img);
        }
    });
}, { rootMargin: '400px 0px' });

function img(path) {
    if (!path) return SVG_PLACEHOLDER;
    return path.startsWith('http') ? path : IMG_BASE + path;
}

function handleImageLoad(img) {
    const wrapper = img.closest('.product-image, .bundle-product-image-wrapper, .hub-product-image-wrapper');
    if (wrapper) wrapper.classList.remove('skeleton');
    img.classList.add('loaded');
}

function observeLazyImages(container) {
    if (!container) return;
    container.querySelectorAll('img[data-src]').forEach(img => {
        const wrapper = img.closest('.product-image, .bundle-product-image-wrapper, .hub-product-image-wrapper');
        if (wrapper) wrapper.classList.add('skeleton');
        img.onload = function () { handleImageLoad(this); };
        img.onerror = function () {
            this.onerror = null;
            this.src = SVG_PLACEHOLDER;
            handleImageLoad(this);
        };
        lazyObserver.observe(img);
    });
}

/* ============================================================
   INJECTED CSS (animations, image zoom, wishlist, badges)
   ============================================================ */
(function injectShopStyles() {
    const s = document.createElement('style');
    s.textContent = `
        .fade-in{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}
        .fade-in.visible{opacity:1;transform:translateY(0)}
        .product-image-wrapper img{transition:transform .3s ease}
        .product-image-wrapper:hover img{transform:scale(1.08)}
        .product-wishlist-btn{position:absolute;top:8px;right:8px;background:rgba(255,255,255,.9);border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;font-size:14px;color:#ccc;transition:color .2s,transform .2s}
        .product-wishlist-btn:hover{transform:scale(1.15)}
        .product-wishlist-btn.active{color:#e74c3c}
        .product-badge{position:absolute;top:8px;left:8px;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;text-transform:uppercase;z-index:2;color:#fff}
        .badge-new{background:#3b82f6}
        .badge-sale{background:#ef4444}
        .badge-best-seller{background:#f59e0b}
        .wishlist-sidebar{position:fixed;top:0;right:-380px;width:360px;max-width:90vw;height:100vh;background:var(--bg-card,#fff);box-shadow:-4px 0 20px rgba(0,0,0,.15);z-index:1001;transition:right .3s ease;display:flex;flex-direction:column}
        .wishlist-sidebar.open{right:0}
        .wishlist-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1000;display:none}
        .wishlist-overlay.open{display:block}
        .wishlist-sidebar-header{display:flex;justify-content:space-between;align-items:center;padding:1rem;border-bottom:1px solid var(--border,#eee)}
        .wishlist-sidebar-body{flex:1;overflow-y:auto;padding:.5rem}
        .wishlist-sidebar-body .empty-wishlist{text-align:center;padding:2rem;color:var(--text-muted,#999)}
        .wishlist-sidebar-body .wishlist-item{display:flex;gap:.75rem;padding:.75rem;border-bottom:1px solid var(--border,#eee);align-items:center;cursor:pointer}
        .wishlist-sidebar-body .wishlist-item img{width:60px;height:60px;object-fit:cover;border-radius:6px}
        .wishlist-sidebar-body .wishlist-item-info{flex:1}
        .wishlist-sidebar-body .wishlist-item-info h4{margin:0 0 4px;font-size:13px}
        .wishlist-sidebar-body .wishlist-item-info .price{color:var(--accent,#e74c3c);font-weight:600}
        .wishlist-sidebar-body .wishlist-item-remove{background:none;border:none;cursor:pointer;color:#999;font-size:14px}
        .wishlist-sidebar-body .wishlist-item-remove:hover{color:#e74c3c}
        .qty-controls{display:flex;align-items:center;gap:6px;margin-top:4px}
        .qty-controls button{width:24px;height:24px;border:1px solid var(--border,#ddd);background:var(--bg-card,#fff);border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center}
        .qty-controls button:hover{background:var(--accent,#e74c3c);color:#fff;border-color:var(--accent,#e74c3c)}
        .qty-controls span{min-width:20px;text-align:center;font-weight:600}
        .share-buttons{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
        .share-buttons a{display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border-radius:6px;font-size:12px;text-decoration:none;color:#fff}
        .share-whatsapp{background:#25d366}
        .share-facebook{background:#1877f2}
        .share-twitter{background:#1da1f2}
        .recently-viewed-section{padding:1.5rem 0;display:none}
        .recently-viewed-section.has-items{display:block}
        .recently-viewed-scroll{display:flex;gap:1rem;overflow-x:auto;scroll-snap-type:x mandatory;padding:.5rem 0}
        .recently-viewed-scroll::-webkit-scrollbar{height:4px}
        .recently-viewed-scroll::-webkit-scrollbar-thumb{background:var(--accent,#e74c3c);border-radius:4px}
        .recently-viewed-item{flex:0 0 140px;scroll-snap-align:start;text-align:center;cursor:pointer}
        .recently-viewed-item img{width:100px;height:100px;object-fit:cover;border-radius:8px;margin-bottom:4px}
        .recently-viewed-item .rv-name{font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .recently-viewed-item .rv-price{font-size:12px;color:var(--accent,#e74c3c);font-weight:600}
    `;
    document.head.appendChild(s);
})();

/* ============================================================
   WISHLIST
   ============================================================ */
function getWishlist() {
    try { return JSON.parse(localStorage.getItem('nexdo_wishlist')) || []; } catch { return []; }
}
function saveWishlist(list) { localStorage.setItem('nexdo_wishlist', JSON.stringify(list)); }
function isInWishlist(productId) { return getWishlist().some(item => item.id === productId); }
function toggleWishlist(product, category) {
    let list = getWishlist();
    const idx = list.findIndex(item => item.id === product.id);
    if (idx > -1) { list.splice(idx, 1); showToast('Removed from wishlist', 'info'); }
    else { list.push({ id: product.id, name: product.name, price: product.price, image: product.image, icon: product.icon, category, sub: product.sub }); showToast('Added to wishlist', 'success'); }
    saveWishlist(list);
    updateWishlistUI();
    renderWishlistSidebar();
}
function updateWishlistUI() {
    const list = getWishlist();
    if (wishlistCount) wishlistCount.textContent = list.length;
    document.querySelectorAll('.product-wishlist-btn').forEach(btn => { btn.classList.toggle('active', isInWishlist(btn.dataset.id)); });
}
function renderWishlistSidebar() {
    if (!wishlistItems) return;
    const list = getWishlist();
    if (list.length === 0) { wishlistItems.innerHTML = '<div class="empty-wishlist"><i class="fas fa-heart" style="font-size:2rem;margin-bottom:.5rem;display:block"></i><p>Your wishlist is empty.</p></div>'; return; }
    wishlistItems.innerHTML = list.map(item => `
        <div class="wishlist-item" data-id="${item.id}" data-cat="${item.category}">
            <img src="${item.image ? img(item.image) : SVG_PLACEHOLDER}" alt="${item.name}" loading="lazy" />
            <div class="wishlist-item-info"><h4>${item.name || 'Gift Item'}</h4><div class="price">UGX ${item.price.toLocaleString()}</div></div>
            <button class="wishlist-item-remove" data-id="${item.id}"><i class="fas fa-times"></i></button>
        </div>`).join('');
    wishlistItems.querySelectorAll('.wishlist-item-remove').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const l = getWishlist().filter(i => i.id !== this.dataset.id);
            saveWishlist(l); updateWishlistUI(); renderWishlistSidebar(); showToast('Removed from wishlist', 'info');
        });
    });
    wishlistItems.querySelectorAll('.wishlist-item').forEach(el => {
        el.addEventListener('click', function(e) {
            if (e.target.closest('.wishlist-item-remove')) return;
            const cat = this.dataset.cat, id = this.dataset.id;
            const product = PRODUCTS[cat] && PRODUCTS[cat].find(p => p.id === id);
            if (product) { renderWishlistSidebar(); openProductDetail(product, cat); }
        });
    });
}

/* ============================================================
   RECENTLY VIEWED
   ============================================================ */
function getRecentlyViewed() {
    try { return JSON.parse(localStorage.getItem('nexdo_recently_viewed')) || []; } catch { return []; }
}
function saveRecentlyViewed(list) { localStorage.setItem('nexdo_recently_viewed', JSON.stringify(list)); }
function trackRecentlyViewed(product, category) {
    let list = getRecentlyViewed().filter(item => item.id !== product.id);
    list.unshift({ id: product.id, name: product.name, price: product.price, image: product.image, icon: product.icon, category, sub: product.sub });
    if (list.length > 10) list = list.slice(0, 10);
    saveRecentlyViewed(list);
    renderRecentlyViewed();
}
function renderRecentlyViewed() {
    if (!recentlyViewedScroll || !recentlyViewedSection) return;
    const list = getRecentlyViewed();
    if (list.length === 0) { recentlyViewedSection.classList.remove('has-items'); return; }
    recentlyViewedSection.classList.add('has-items');
    recentlyViewedScroll.innerHTML = list.map(item => `
        <div class="recently-viewed-item" data-id="${item.id}" data-cat="${item.category}">
            <img src="${item.image ? img(item.image) : SVG_PLACEHOLDER}" alt="${item.name}" loading="lazy" />
            <div class="rv-name">${item.name || 'Gift Item'}</div>
            <div class="rv-price">UGX ${item.price.toLocaleString()}</div>
        </div>`).join('');
    recentlyViewedScroll.querySelectorAll('.recently-viewed-item').forEach(el => {
        el.addEventListener('click', function() {
            const cat = this.dataset.cat, id = this.dataset.id;
            const product = PRODUCTS[cat] && PRODUCTS[cat].find(p => p.id === id);
            if (product) openProductDetail(product, cat);
        });
    });
}

/* ============================================================
   DARK MODE
   ============================================================ */
function initDarkMode() {
    if (localStorage.getItem('nexdo_dark_mode') === 'true') document.body.classList.add('dark');
    updateDarkModeIcon();
}
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('nexdo_dark_mode', document.body.classList.contains('dark'));
    updateDarkModeIcon();
}
function updateDarkModeIcon() {
    if (!darkModeToggle) return;
    darkModeToggle.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); fadeObserver.unobserve(entry.target); } });
}, { threshold: 0.1 });

/* ============================================================
   BADGES
   ============================================================ */
const bestSellerCache = {};
function getBestSellers(category) {
    if (bestSellerCache[category]) return bestSellerCache[category];
    const products = PRODUCTS[category] || [];
    bestSellerCache[category] = new Set([...products].sort((a, b) => b.price - a.price).slice(0, 5).map(p => p.id));
    return bestSellerCache[category];
}
function getProductBadges(product, category) {
    const badges = [];
    if (String(product.id).includes('.')) badges.push('NEW');
    if (product.price < 100) badges.push('SALE');
    if (getBestSellers(category).has(product.id)) badges.push('BEST SELLER');
    return badges;
}

/* ============================================================
   SORT
   ============================================================ */
const sortState = {};
function sortProducts(products, sortKey) {
    const sorted = [...products];
    switch (sortKey) {
        case 'price-asc': return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc': return sorted.sort((a, b) => b.price - a.price);
        case 'name-asc': return sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        case 'name-desc': return sorted.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
        default: return sorted;
    }
}

/* ============================================================
   DATA
   ============================================================ */
let PRODUCTS = {
    flowers: [],
    giftboxes: [],
    perfumes: [],
    gadgets: [],
    cakes: [],
    branded: [],
    wines: []
};

/* ============================================================
   FALLBACK DATA
   ============================================================ */
const FB = {

    flowers: [
        { id: 'f1', name: 'Red Rose Romance', sub: 'gift', price: 120000, icon: 'fa-rose', image: 'images/flowers/others/redromance.jpg' },
        { id: 'f2', name: 'Pink Peony Dream', sub: 'gift', price: 175000, icon: 'fa-leaf',image:'images/flowers/others/pinkpeony.jpg' },
        { id: 'f3', name: 'White Lily Elegance', sub: 'gift', price: 300000, icon: 'fa-ring',image:'images/flowers/others/flw3white.jpg' },
        { id: 'f4', name: 'Eternal Ivory Rose Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-dove',image:'images/flowers/wedding/wedding1.JPG' },
        //{ id: 'f5', name: 'Baby\'s Breath Cloud', sub: 'gift', price: 150000, icon: 'fa-feather',image:'images/flowers/others/flw6.jpg' },
        { id: 'f5.1', name: 'Apology flower Bouquet', sub: 'gift', price: 180000, icon: 'fa-feather',image:'images/flowers/others/fld12.jpg' },
        { id: 'f5.2', name: 'Anniversary Special', sub: 'gift', price: 185000, icon: 'fa-feather',image:'images/flowers/others/fld7.jpg' },
        { id: 'f5.3', name: 'Birthday Bouquet', sub: 'gift', price: 200000, icon: 'fa-feather',image:'images/flowers/others/FLD33.jpg' },
        { id: 'f5.4', name: 'White & Red Roses Bouquet', sub: 'gift', price: 300000, icon: 'fa-feather',image:'images/flowers/others/fld6.png' },
        { id: 'f5.5', name: 'Carnation Carousel', sub: 'gift', price: 185000, icon: 'fa-feather',image:'images/flowers/others/flw8.png' },
        { id: 'f5.6', name: 'Roses Premium', sub: 'gift', price: 300000, icon: 'fa-feather',image:'images/flowers/others/flw5.png' },
        { id: 'f5.7', name: 'Pink Flower Bouquet', sub: 'gift', price: 250000, icon: 'fa-feather',image:'images/flowers/others/flwpink.png' },
        { id: 'f5.8', name: 'Balloon Floral Bouquet', sub: 'gift', price: 150000, icon: 'fa-feather',image:'images/flowers/others/ep2.JPG' },
        { id: 'f5.9', name: 'Rustic Wildflower Mix', sub: 'gift', price: 110000, icon: 'fa-feather',image:'images/flowers/others/flw10.png' },
        { id: 'f5.10', name: 'Red Roses', sub: 'gift', price: 200000, icon: 'fa-feather',image:'images/flowers/others/fld1.png' },
        { id: 'f5.11', name: 'Sunflower Sunshine', sub: 'gift', price: 165000, icon: 'fa-feather',image:'images/flowers/others/fld3.png' },
        { id: 'f5.11', name: 'Tulip Garden Mix', sub: 'gift', price: 300000, icon: 'fa-feather',image:'images/flowers/others/flw5.png' },
        { id: 'f6', name: 'Eternal Love Standing Heart Tribute', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral1.jpeg' },
        { id: 'f7', name: 'Passion & Purity Vase Arrangement', sub: 'Vase Arrangement', price: 150000, icon: 'fa-flask',image:'images/flowers/vessels/vessel1.JPG' },
        { id: 'f8', name: 'Classic Romance Rose Vase', sub: 'Vase Arrangement', price: 150000, icon: 'fa-pagelines',image:'images/flowers/vessels/vessel2.JPG' },

        //wedding
        {id: 'f9', name: 'Cloud Nine Baby\'s Breath Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding2.JPG' },
        {id: 'f10', name: 'Dreamy Gypsophila Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding3.JPG' },
        {id: 'f11', name: 'Classic Ivory Rose Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding4.JPG' },
        {id: 'f12', name: 'Garden Whisper Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding5.JPG' },
        {id: 'f13', name: 'Royal Ivory Sphere Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding6.JPG' },
        {id: 'f14', name: 'Botanical Ivory Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding7.JPG' },
        {id: 'f15', name: 'Passion & Purity Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding8.JPG' },
        {id: 'f16', name: 'Ethereal Snow Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding9.JPG' },
        {id: 'f17', name: 'Crimson Romance Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding10.JPG' },
        {id: 'f18', name: 'Champagne Blush Bridal Bouquet', sub: 'wedding', price: 110000, icon: 'fa-cross',image:'images/flowers/wedding/wedding11.JPG' },

        //Funeral Tributes
        { id: 'f19', name: 'Forever in Our Hearts Rose Tribute', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral2.jpeg' },
        { id: 'f21', name: 'Sacred Memory Heart Wreath', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral3.jpeg' },
        { id: 'f22', name: 'Golden Memory Heart Wreath', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral4.jpeg' },
        { id: 'f23', name: 'Peaceful Rest Cross Tribute', sub: 'funeral', price: 150000, icon: 'fa-cross',image:'images/flowers/funeral/funeral5.jpeg' },
        { id: 'f24', name: 'Sunshine Posy Funeral Arrangement', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral6.jpeg' },
        { id: 'f25', name: 'Light of Faith Cross Tribute', sub: 'funeral', price: 150000, icon: 'fa-cross',image:'images/flowers/funeral/funeral7.jpeg' },
        { id: 'f26', name: 'Serenity Circle Wreath', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral8.jpeg' },
        { id: 'f27', name: 'Eternal Sunshine Wreath', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral9.jpeg' },
        { id: 'f28', name: 'Gentle Blush Memorial Wreath', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral10.jpeg' },
        { id: 'f29', name: 'Pure Peace Standing Wreath', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral11.jpeg' },
        { id: 'f30', name: 'Honor & Remembrance Tribute', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral12.jpeg' },
        { id: 'f31', name: 'Timeless Tribute Wreath', sub: 'funeral', price: 200000, icon: 'fa-cross',image:'images/flowers/funeral/funeral13.jpeg' },

        //Vase Arrangement
        { id: 'f32', name: 'Ruby Elegance Vase Arrangement', sub: 'Vase Arrangement', price: 150000, icon: 'fa-flask',image:'images/flowers/vessels/vessel3.JPG' },
        { id: 'f33', name: 'Sweet Heart Gift Vase', sub: 'Vase Arrangement', price: 150000, icon: 'fa-flask',image:'images/flowers/vessels/vessel4.JPG' },

    ],


    giftboxes: [
        //Baskets
        { id: 'g1', name: 'Blush Celebration Gift Basket', sub: 'Gift Baskets', price: 340000, icon: 'fa-gift', image: 'images/baskets/b2.JPG' },

        { id: 'g1.1', name: 'Grand Luxe Appreciation Basket', sub: 'Gift Baskets', price: 400000, icon: 'fa-apple-alt', image: 'images/baskets/b1.JPG' },

        { id: 'g1.2', name: 'Get Well Soon Basket', sub: 'Gift Baskets', price: 165000, icon: 'fa-gift', image: 'images/baskets/getwellbasket.JPG' },

        { id: 'g1.3', name: 'Garden Fresh Fruit & Bloom Basket', sub: 'Gift Baskets', price: 275000, icon: 'fa-apple-alt', image: 'images/baskets/b3.JPG' },

        { id: 'g1.4', name: 'Romantic Blush Floral Basket', sub: 'Gift Baskets', price: 400000, icon: 'fa-apple-alt', image: 'images/baskets/b4.JPG' },

        { id: 'g1.5', name: 'Royal Celebration Twin Basket', sub: 'Gift Baskets', price: 400000, icon: 'fa-apple-alt', image: 'images/baskets/b5.JPG' },
        
        { id: 'g1.6', name: 'Sweetheart Duo Fruit Basket', sub: 'Gift Baskets', price: 370000, icon: 'fa-apple-alt', image: 'images/baskets/b6.JPG' },
        
        { id: 'g1.7', name: 'Ruby Romance Gift Basket', sub: 'Gift Baskets', price: 300000, icon: 'fa-apple-alt', image: 'images/baskets/b7.JPG' },
        
        { id: 'g1.8', name: 'Celebration Luxe Twin Basket', sub: 'Gift Baskets', price: 340000, icon: 'fa-apple-alt', image: 'images/baskets/b8.JPG' },
        
        { id: 'g1.9', name: 'Classic Crimson Rose Basket', sub: 'Gift Baskets', price: 400000, icon: 'fa-apple-alt', image: 'images/baskets/b9.JPG' },
        
        { id: 'g1.10', name: 'Vibrant Joy Gift Basket', sub: 'Gift Baskets', price: 370000, icon: 'fa-apple-alt', image: 'images/baskets/b10.JPG' },
        
        { id: 'g1.11', name: 'Sweet Indulgence Chocolate Basket', sub: 'Gift Baskets', price: 10, icon: 'fa-baskets-alt', image: 'images/baskets/new1.png' },
        
        { id: 'g1.12', name: 'Golden Celebration Crate Hamper', sub: 'Gift Baskets', price: 10, icon: 'fa-baskets-alt', image: 'images/baskets/new2.png' },
        
        { id: 'g1.13', name: 'Chocolate Indulgence Basket', sub: 'Gift Baskets', price: 10, icon: 'fa-baskets-alt', image: 'images/baskets/new3.png' },

        { id: 'g1.14', name: 'Fresh Ochard Fruit Basket', sub: 'Gift Baskets', price: 10, icon: 'fa-baskets-alt', image: 'images/baskets/new4.png' },

        { id: 'g1.15', name: 'Festive Harvest Wine Basket', sub: 'Gift Baskets', price: 10, icon: 'fa-baskets-alt', image: 'images/baskets/new5.png' },

        { id: 'g1.16', name: 'Executive Signature Gift Basket', sub: 'Gift Baskets', price: 10, icon: 'fa-baskets-alt', image: 'images/baskets/new6.png' },

        { id: 'g1.17', name: 'Midnight Luxe Pamper Basket', sub: 'Gift Baskets', price: 10, icon: 'fa-baskets-alt', image: 'images/baskets/new7.png' },
        
        { id: 'g1.18', name: 'Tropical Sunrise Fruit Basket', sub: 'Gift Baskets', price: 10, icon: 'fa-baskets-alt', image: 'images/baskets/new8.png' },

        

        //Boxes
        { id: 'g2', name: 'Classic Gift Box', sub: 'Gift Boxes', price: 120000, icon: 'fa-candy-cane',image:'images/boxes/box1.png' },

        { id: 'g2.1', name: 'Gold Gift Box', sub: 'Gift Boxes', price: 95000, icon: 'fa-spa',image:'images/boxes/box2.png' },
        
        { id: 'g2.2', name: 'Romantic Pink Gift Box', sub: 'Gift Boxes', price: 100000, icon: 'fa-spa',image:'images/boxes/box3.png' },
        
        { id: 'g2.3', name: 'Corporate Box', sub: 'Gift Boxes', price: 80000, icon: 'fa-spa',image:'images/boxes/box4.png' },
        
        { id: 'g2.4', name: 'Reward Gift Box', sub: 'Gift Boxes', price: 75000, icon: 'fa-spa',image:'images/boxes/box5.png' },
        
        { id: 'g2.5', name: 'Reward Gift Box', sub: 'Gift Boxes', price: 70000, icon: 'fa-spa',image:'images/boxes/box6.png' },
        
        { id: 'g2.6', name: 'Corporate Gift Box', sub: 'Gift Boxes', price: 80000, icon: 'fa-spa',image:'images/boxes/box7.png' },

        { id: 'g2.7', name: 'Corporate Box', sub: 'Gift Boxes', price: 85000, icon: 'fa-spa',image:'images/boxes/box8.png' },

        { id: 'g2.8', name: 'Mini Treats Box', sub: 'Gift Boxes', price: 150000, icon: 'fa-spa',image:'images/boxes/box9.png' },

        { id: 'g2.9', name: 'Premium & Gift Box', sub: 'Gift Boxes', price: 320000, icon: 'fa-spa',image:'images/boxes/box10.png' },
        
        { id: 'g2.10', name: 'Happy Birthday Combo - Customized ballloon + Monti Chocolate', sub: 'Gift Boxes', price: 165000, icon: 'fa-spa',image:'images/boxes/extrapacks/ep1.JPG' },
        
        { id: 'g2.11', name: 'Father\'s Day Gift Box', sub: 'Gift Boxes', price: 200000, icon: 'fa-spa',image:'images/boxes/box12.png' },
        
        { id: 'g2.12', name: 'Congrats balloon Bouquet + Monti Chocolate', sub: 'Gift Boxes', price: 185000, icon: 'fa-spa',image:'images/boxes/extrapacks/ep4.JPG' },
        
        //{ id: 'g2.13', name: 'Graduation Gift Box', sub: 'Gift Boxes', price: 175000, icon: 'fa-spa',image:'images/boxes/box14.png' },
        
        { id: 'g2.14', name: 'Umrah Mubarak Bouquet with Monti Chocolate', sub: 'Gift Boxes', price: 165000, icon: 'fa-spa',image:'images/boxes/extrapacks/ep3.JPG' },

        { id: 'g2.15', name: 'Customised Balloon', sub: 'Gift Boxes', price: 30000, icon: 'fa-spa',image:'images/boxes/extrapacks/ep5.JPG' },

        { id: 'g2.16', name: 'Baby Girl Welcome Essentials Hamper', sub: 'Baby Hampers', price: 200000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb1.JPG' },
        
        { id: 'g2.17', name: 'Up Up & Away Baby Girl Balloon Gift Box', sub: 'Baby Hampers', price: 150000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb2.JPG' },
        
        { id: 'g2.18', name: 'Congratulations It\'s a Girl Balloon Gift Box', sub: 'Baby Hampers', price: 150000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb3.JPG' },
        
        { id: 'g2.19', name: 'Little Gentleman Diaper Hamper Tower', sub: 'Baby Hampers', price: 200000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb4.JPG' },
        
        { id: 'g2.20', name: 'Hello! Little Prince Baby Essentials Bouquet', sub: 'Baby Hampers', price: 200000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb5.JPG' },
        
        { id: 'g2.21', name: 'Baby Boy 3-Tier Welcome Hamper', sub: 'Baby Hampers', price: 200000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb6.JPG' },
        
        { id: 'g2.22', name: 'Little Man Baby Essentials Flower Bouquet', sub: 'Baby Hampers', price: 200000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb7.JPG' },
        
        { id: 'g2.23', name: 'Best of Both Worlds 3-Tier Gift Hamper', sub: 'Baby Hampers', price: 200000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb8.JPG' },
        
        { id: 'g2.24', name: 'Baby Boy Welcome Essentials Hamper', sub: 'Baby Hampers', price: 200000, icon: 'fa-spa',image:'images/boxes/newbornpacks/nb9.JPG' },



        //Watches & Jewelry
        { id: 'g3', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox1.JPG' },
        { id: 'g3.1', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/box18.png' },
        { id: 'g3.2', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox2.JPG' },
        { id: 'g3.3', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox3.JPG' },
        { id: 'g3.4', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox4.JPG' },
        { id: 'g3.5', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox5.JPG' },
        { id: 'g3.6', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox6.JPG' },
        { id: 'g3.7', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox7.JPG' },
        { id: 'g3.8', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox8.JPG' },
        { id: 'g3.10', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox9.JPG' },
        { id: 'g3.11', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/nbox10.JPG' },
        { id: 'g3.12', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw1.JPG' },
        { id: 'g3.13', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw2.JPG' },
        { id: 'g3.14', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw3.JPG' },
        { id: 'g3.15', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/watches/nw4.JPG' },
        { id: 'g3.16', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/watches/nw5.JPG' },
        { id: 'g3.17', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/watches/nw6.JPG' },
        { id: 'g3.18', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/watches/nw7.JPG' },
        { id: 'g3.19', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/watches/nw8.JPG' },
        { id: 'g3.20', name: '', sub: 'Watches & Jewelry', price: 200000, icon: 'fa-spa',image:'images/boxes/watches/nw9.JPG' },
        { id: 'g3.21', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw10.JPG' },
        { id: 'g3.22', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw11.JPG' },
        { id: 'g3.23', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw12.JPG' },
        { id: 'g3.24', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw13.JPG' },
        { id: 'g3.25', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw14.JPG' },
        { id: 'g3.26', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw15.JPG' },
        { id: 'g3.27', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw16.JPG' },
        { id: 'g3.28', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw17.JPG' },
        { id: 'g3.29', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw18.JPG' },
        { id: 'g3.30', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw19.JPG' },
        { id: 'g3.31', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw20.JPG' },
        { id: 'g3.32', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw21.JPG' },
        { id: 'g3.33', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw22.JPG' },
        { id: 'g3.34', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw23.JPG' },
        { id: 'g3.35', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw24.JPG' },
        { id: 'g3.36', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw25.JPG' },
        { id: 'g3.37', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw26.JPG' },
        { id: 'g3.38', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw27.JPG' },
        { id: 'g3.39', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw28.JPG' },
        { id: 'g3.40', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw29.JPG' },
        { id: 'g3.41', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw30.JPG' },
        { id: 'g3.42', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw31.JPG' },
        { id: 'g3.43', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw32.JPG' },
        { id: 'g3.44', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw33.JPG' },
        { id: 'g3.45', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw34.JPG' },
        { id: 'g3.46', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw35.JPG' },
        { id: 'g3.47', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw36.JPG' },
        { id: 'g3.48', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw37.JPG' },
        { id: 'g3.49', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw38.JPG' },
        { id: 'g3.50', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw39.JPG' },
        { id: 'g3.51', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw40.JPG' },
        { id: 'g3.52', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw41.JPG' },
        { id: 'g3.53', name: '', sub: 'Watches & Jewelry', price: 150000, icon: 'fa-spa',image:'images/boxes/watches/nw42.JPG' },



    ],


    perfumes: [
        //Her
        { id: 'p1', name: 'Tresor in Love - EDP 75ml', sub: 'Her', price: 450000, icon: 'fa-male',image:'images/perfumes/Her/TresorInLove.png' },
        { id: 'p1.1', name: 'Tresor in Love - EDP 50ml', sub: 'Her', price: 400000, icon: 'fa-ship',image:'images/perfumes/Her/TresorInLove.png' },
        { id: 'p1.2', name: 'Gucci Bamboo - EDP 75ml', sub: 'Her', price: 540000, icon: 'fa-ship',image:'images/perfumes/Her/GucciBamboo.png' },
        { id: 'p1.3', name: 'Private Collection by Estée Lauder - EDP 50ml', sub: 'Her', price: 500000, icon: 'fa-ship',image:'images/perfumes/Her/Private_Collection_by_Estée Lauder.png' },
        { id: 'p1.4', name: 'Hypnotic Poison by Dior - EDT 50ml', sub: 'Her', price: 450000, icon: 'fa-ship',image:'images/perfumes/Her/HypnoticPoisonbyDior.png' },
        { id: 'p1.5', name: 'Hypnotic Poison by Dior - EDT 100ml', sub: 'Her', price: 550000, icon: 'fa-ship',image:'images/perfumes/Her/HypnoticPoisonbyDior.png' },
        { id: 'p1.6', name: 'Hypnotic Poison by Dior - EDP 50ml', sub: 'Her', price: 500000, icon: 'fa-ship',image:'images/perfumes/Her/HypnoticPoisonbyDior.png' },
        { id: 'p1.7', name: 'Hypnotic Poison by Dior - EDP 100ml', sub: 'Her', price: 650000, icon: 'fa-ship',image:'images/perfumes/Her/HypnoticPoisonbyDior.png' },
        { id: 'p1.8', name: 'Azzaro Club - EDT 75ml', sub: 'Her', price: 260000, icon: 'fa-ship',image:'images/perfumes/Her/Azzaro_Club.png' },
        { id: 'p1.9', name: 'My burberry - 50ml', sub: 'Her', price: 300000, icon: 'fa-ship',image:'images/perfumes/Her/Myburberry.png' },
        { id: 'p1.10', name: 'Eternity intense by Calvin Klein - EDP 50ml', sub: 'Her', price: 200000, icon: 'fa-ship',image:'images/perfumes/Her/Eternity_Women.png' },
        { id: 'p1.11', name: 'Eternity Moment by Calvin Klein - EDP 100ml', sub: 'Her', price: 280000, icon: 'fa-ship',image:'images/perfumes/Her/Eternity_Moment.png' },
        { id: 'p1.12', name: 'Amarige by Givenchy - EDT 100ml', sub: 'Her', price: 530000, icon: 'fa-ship',image:'images/perfumes/Her/Amarige_by_Givenchy.png' },
        { id: 'p1.13', name: 'S by Shakira - EDT 80ml', sub: 'Her', price: 175000, icon: 'fa-ship',image:'images/perfumes/Her/S_byShakira.png' },
        { id: 'p1.14', name: 'My Burberry Blush - EDP 100ml', sub: 'Her', price: 550000, icon: 'fa-ship',image:'images/perfumes/Her/MyBurberry_Blush.png' },
        { id: 'p1.15', name: 'Tom Ford Black Orchid - EDP 100ml', sub: 'Unisex', price: 750000, icon: 'fa-ship',image:'images/perfumes/Her/TomFord_BlackOrchid.png' },
        { id: 'p1.16', name: 'Tom Ford Velvet Orchid - EDP 100ml', sub: 'Her', price: 750000, icon: 'fa-ship',image:'images/perfumes/Her/TomFord_Velvet.png' },
        { id: 'p1.17', name: 'Tom Ford Metallique - EDP 100ml', sub: 'Her', price: 850000, icon: 'fa-ship',image:'images/perfumes/Her/TomFord_Metallique.png' },
        { id: 'p1.18', name: 'Amber Mystic by Estée Lauder - 100ml', sub: 'Her', price: 650000, icon: 'fa-ship',image:'images/perfumes/Her/AmberMystique_byEstéeLauder.png' },
        { id: 'p1.19', name: 'Candy Florale - EDP 80ml', sub: 'Her', price: 495000, icon: 'fa-ship',image:'images/perfumes/Her/CandyFlorale.png' },
        { id: 'p1.20', name: 'Jeanne Lanvin - EDP 100ml', sub: 'Her', price: 370000, icon: 'fa-ship',image:'images/perfumes/Her/JeanneLanvin.png' },
        { id: 'p1.21', name: 'Jeanne Lanvin - EDP 50ml', sub: 'Her', price: 280000, icon: 'fa-ship',image:'images/perfumes/Her/JeanneLanvin.png' },
        { id: 'p1.22', name: 'Dance by Shakira - EDT 80ml', sub: 'Her', price: 195000, icon: 'fa-ship',image:'images/perfumes/Her/DancebyShakira.png' },
        { id: 'p1.23', name: 'Missoni - EDT 100ml', sub: 'Her', price: 150000, icon: 'fa-ship',image:'images/perfumes/Her/Missoni.png' },
        { id: 'p1.24', name: 'Missoni - EDP 100ml', sub: 'Her', price: 420000, icon: 'fa-ship',image:'images/perfumes/Her/Missoni.png' },
        { id: 'p1.25', name: 'OLYMPÉA by Paco Rabanne - EDP 50ml', sub: 'Her', price: 370000, icon: 'fa-ship',image:'images/perfumes/Her/OLYMPÉA.png' },
        { id: 'p1.26', name: 'OLYMPÉA INTENSE by Paco Rabanne - EDP 80ml', sub: 'Her', price: 550000, icon: 'fa-ship',image:'images/perfumes/Her/OLYMPÉA_INTENSE.png' },
        { id: 'p1.27', name: 'OLYMPÉA INTENSE by Paco Rabanne - EDP 50ml', sub: 'Her', price: 420000, icon: 'fa-ship',image:'images/perfumes/Her/OLYMPÉA_INTENSE.png' },
        { id: 'p1.28', name: 'OLYMPÉA by Paco Rabanne - EDP 100ml', sub: 'Her', price: 470000, icon: 'fa-ship',image:'images/perfumes/Her/OLYMPÉA.png' },
        { id: 'p1.29', name: 'Chanel No.5 - EDP 50ml', sub: 'Her', price:500000 , icon: 'fa-ship',image:'images/perfumes/Her/Chanel_No5.png' },
        { id: 'p1.30', name: 'Chanel No.5 - EDP 100ml', sub: 'Her', price: 750000, icon: 'fa-ship',image:'images/perfumes/Her/Chanel_No5.png' },
        { id: 'p1.31', name: 'Chanel No.5 - EDP 200ml', sub: 'Her', price: 1200000, icon: 'fa-ship',image:'images/perfumes/Her/Chanel_No5.png' },
        { id: 'p1.32', name: 'Candy L\'eau by Prada - EDT 80ml', sub: 'Her', price: 460000, icon: 'fa-ship',image:'images/perfumes/Her/CandyLeaubyPrada.png' },
        { id: 'p1.33', name: 'Mon Paris by YSL - EDP 90ml', sub: 'Her', price: 550000, icon: 'fa-ship',image:'images/perfumes/Her/MonParisbyYSL.png' },
        { id: 'p1.34', name: 'Arden beauty by Elizabeth Arden - 100ml', sub: 'Her', price: 265000, icon: 'fa-ship',image:'images/perfumes/Her/ArdenBeauty.png' },
        { id: 'p1.35', name: 'Allure - EDT 50ml', sub: 'Her', price: 400000, icon: 'fa-ship',image:'images/perfumes/Her/Allure.png' },
        { id: 'p1.36', name: 'Allure - EDT 100ml', sub: 'Her', price: 555000, icon: 'fa-ship',image:'images/perfumes/Her/Allure.png' },
        { id: 'p1.37', name: 'I AM JUICY COUTURE - EDP 100ml', sub: 'Her', price: 356400, icon: 'fa-ship',image:'images/perfumes/Her/JUICY_COUTURE.png' },
        { id: 'p1.38', name: 'Versace Pour Femme Oud Oriental - EDP 100ml', sub: 'Her', price: 450000, icon: 'fa-ship',image:'images/perfumes/Her/Versace_PourFemme_Oud_Oriental.png' },
        { id: 'p1.39', name: 'Classique by Jean Paul Gaultier - EDT 50ml', sub: 'Her', price: 370000, icon: 'fa-ship',image:'images/perfumes/Her/Classique_JPG.png' },
        { id: 'p1.40', name: 'Classique by Jean Paul Gaultier - EDT 100ml', sub: 'Her', price: 450000, icon: 'fa-ship',image:'images/perfumes/Her/Classique_JPG.png' },
        { id: 'p1.41', name: 'Poême  by Lancôme - EDP 100ml', sub: 'Her', price: 590000, icon: 'fa-ship',image:'images/perfumes/Her/Poême_Lancôme.png' },
        { id: 'p1.42', name: 'Flowerbomb by Viktor & Rolf - EDP 50ml', sub: 'Her', price: 400000, icon: 'fa-ship',image:'images/perfumes/Her/Flowerbomb_VR.png' },
        { id: 'p1.43', name: 'Obsessed Intense - EDP 75ml', sub: 'Her', price: 380000, icon: 'fa-ship',image:'images/perfumes/Her/Obsessed_Intense.png' },
        { id: 'p1.44', name: 'Alien by Thiery Mugler - 90ml', sub: 'Her', price: 490000, icon: 'fa-ship',image:'images/perfumes/Her/Alien_ThieryMugler.png' },
        { id: 'p1.45', name: 'Irresistible by Givenchy - EDT 80ml', sub: 'Her', price: 400000, icon: 'fa-ship',image:'images/perfumes/Her/irresistible-givenchy.png' },
        { id: 'p1.46', name: '212 VIP Rosé - 50ml', sub: 'Her', price: 420000, icon: 'fa-ship',image:'images/perfumes/Her/212_VIP_Rosé.png' },
        { id: 'p1.47', name: '212 VIP Rosé - 100ml', sub: 'Her', price: 490000, icon: 'fa-ship',image:'images/perfumes/Her/212_VIP_Rosé.png' },
        { id: 'p1.48', name: 'Scandal by Jean Paul Gaultier - EDP', sub: 'Her', price: 500000, icon: 'fa-ship',image:'images/perfumes/Her/Scandal_JPG.png' },
        { id: 'p1.49', name: 'So Scandal by Jean Paul Gaultier - EDP', sub: 'Her', price: 550000, icon: 'fa-ship',image:'images/perfumes/Her/SoScandal.png' },
        { id: 'p1.50', name: 'Sì Fiori by Giorgio Armani - EDP 50ml', sub: 'Her', price: 480000, icon: 'fa-ship',image:'images/perfumes/Her/si-fiori.png' },
        { id: 'p1.51', name: 'Idôle L\'intense - EDP 75ml', sub: 'Her', price: 490000, icon: 'fa-ship',image:'images/perfumes/Her/Idôle_Lintense.png' },
        { id: 'p1.52', name: 'Riri by Rihanna - EDP 100ml', sub: 'Her', price: 300000, icon: 'fa-ship',image:'images/perfumes/Her/Riri_Rihanna.png' },
        { id: 'p1.53', name: 'Armani Code women - EDP 75ml', sub: 'Her', price: 550000, icon: 'fa-ship',image:'images/perfumes/Her/Armani_Code.png' },
        { id: 'p1.54', name: 'Cartier Carat - EDP 50ml', sub: 'Her', price: 290000, icon: 'fa-ship',image:'images/perfumes/Her/CartierCarat.png' },
        { id: 'p1.55', name: 'La vie est belle intensement - EDP 100ml', sub: 'Her', price: 580000, icon: 'fa-ship',image:'images/perfumes/Her/intensement.png' },
        { id: 'p1.56', name: 'La vie est belle - EDP 100ml', sub: 'Her', price: 500000, icon: 'fa-ship',image:'images/perfumes/Her/LaVieEst_belle.png' },
        { id: 'p1.57', name: 'La vie est belle - EDP 75ml', sub: 'Her', price: 450000, icon: 'fa-ship',image:'images/perfumes/Her/LaVieEst_belle.png' },
        { id: 'p1.58', name: 'La vie est belle - EDP 50ml', sub: 'Her', price: 400000, icon: 'fa-ship',image:'images/perfumes/Her/LaVieEst_belle.png' },
        { id: 'p1.59', name: 'Just Cavalli for Her - EDT 50ml', sub: 'Her', price: 290000, icon: 'fa-ship',image:'images/perfumes/Her/JustCavalli.png' },
        { id: 'p1.60', name: 'Just Cavalli for Her - EDT 75ml', sub: 'Her', price: 340000, icon: 'fa-ship',image:'images/perfumes/Her/JustCavalli.png' },
        { id: 'p1.61', name: 'Si Passione - EDP 100ml', sub: 'Her', price: 550000, icon: 'fa-ship',image:'images/perfumes/Her/Si_Passione.png' },
        { id: 'p1.62', name: 'Si Intense - EDP 100ml', sub: 'Her', price: 600000, icon: 'fa-ship',image:'images/perfumes/Her/Si_Intense.png' },
        { id: 'p1.63', name: 'Si Passione Intense - EDP 100ml', sub: 'Her', price: 600000, icon: 'fa-ship',image:'images/perfumes/Her/Si_Passione_Intense.png' },
        { id: 'p1.64', name: 'Flower by Kenzo - EDP 50ml', sub: 'Her', price: 400000, icon: 'fa-ship',image:'images/perfumes/Her/Flower_Kenzo.png' },
        { id: 'p1.65', name: 'Flower by Kenzo - EDP 100ml', sub: 'Her', price: 530000, icon: 'fa-ship',image:'images/perfumes/Her/Flower_Kenzo.png' },
        { id: 'p1.66', name: 'Donna by Valentino - EDP 100ml', sub: 'Her', price: 540000, icon: 'fa-ship',image:'images/perfumes/Her/Donna_Valentino.png' },
        { id: 'p1.67', name: 'Cool Water Woman by Davidoff - EDT 100ml', sub: 'Her', price: 250000, icon: 'fa-ship',image:'images/perfumes/Her/Cool_water.png' },
        { id: 'p1.68', name: 'Libre by YSL - EDP 90ml', sub: 'Her', price: 600000, icon: 'fa-ship',image:'images/perfumes/Her/Libre_YSL.png' },
        { id: 'p1.69', name: 'Club De Nuit Woman - EDP', sub: 'Her', price: 270000, icon: 'fa-ship',image:'images/perfumes/Her/ClubdeNuit_woman.png' },
        { id: 'p1.70', name: 'Club De Nuit Intense Woman - EDP', sub: 'Her', price: 280000, icon: 'fa-ship',image:'images/perfumes/Her/ClubDeNuit_Intense.png' },
        { id: 'p1.71', name: 'My Way Intense by Giorgio Armani - EDP 90ml', sub: 'Her', price: 550000, icon: 'fa-ship',image:'images/perfumes/Her/MyWay_Intense.png' },
        { id: 'p1.72', name: 'In Love With You by Emporio Armani - EDP 100ml', sub: 'Her', price: 600000, icon: 'fa-ship',image:'images/perfumes/Her/in_love_with_you.png' },
        { id: 'p1.73', name: 'Chance by Chanel - EDP 100ml', sub: 'Her', price: 750000, icon: 'fa-ship',image:'images/perfumes/Her/Chance_Chanel.png' },

        //Him
        { id: 'p2', name: 'Explorer by Mont Blanc - EDP 100ml', sub: 'Him', price: 400000, icon: 'fa-female',image:'images/perfumes/Him/Explorer_MontBlanc.png' },
        { id: 'p2.1', name: 'Black Touch by Frank Olivier - EDP 100ml', sub: 'Him', price: 270000, icon: 'fa-flower',image:'images/perfumes/Him/BlackTouch_FrankOlivier.png' },
        { id: 'p2.2', name: 'Oud Touch by Franck Olivier - EDP 100ml', sub: 'Him', price: 270000, icon: 'fa-flower',image:'images/perfumes/Him/OudTouch_Franck Olivier.png' },
        { id: 'p2.3', name: 'Guerlain Homme - EDT 50ml', sub: 'Him', price: 240000, icon: 'fa-flower',image:'images/perfumes/Him/GuerlainHomme.png' },
        { id: 'p2.4', name: 'Pure XS by Paco Rabanne - EDT 100ml', sub: 'Him', price: 480000, icon: 'fa-flower',image:'images/perfumes/Him/PureXS.png' },
        { id: 'p2.5', name: 'Bvlgari Pour Homme - EDT 50ml', sub: 'Him', price: 280000, icon: 'fa-flower',image:'images/perfumes/Him/BvlgariPourHomme.png' },
        { id: 'p2.6', name: 'Dior Sauvage - EDT 60ml', sub: 'Him', price: 400000, icon: 'fa-flower',image:'images/perfumes/Him/SauvageEDT.png' },
        { id: 'p2.7', name: 'Dior Sauvage - EDT 100ml', sub: 'Him', price: 500000, icon: 'fa-flower',image:'images/perfumes/Him/SauvageEDT.png' },
        { id: 'p2.8', name: 'Dior Sauvage - EDT 200ml', sub: 'Him', price: 650000, icon: 'fa-flower',image:'images/perfumes/Him/SauvageEDT.png' },
        { id: 'p2.9', name: 'Dior Sauvage - EDP 60ml', sub: 'Him', price: 450000, icon: 'fa-flower',image:'images/perfumes/Him/SauvageEDP.png' },
        { id: 'p2.10', name: 'Dior Sauvage - EDP 100ml', sub: 'Him', price: 650000, icon: 'fa-flower',image:'images/perfumes/Him/SauvageEDP.png' },
        { id: 'p2.11', name: 'Dior Sauvage - EDP 200ml', sub: 'Him', price: 800000, icon: 'fa-flower',image:'images/perfumes/Him/SauvageEDP.png' },
        { id: 'p2.12', name: 'Dior Sauvage Parfum - EDP 60ml', sub: 'Him', price: 500000, icon: 'fa-flower',image:'images/perfumes/Him/SauvagePARFUM.png' },
        { id: 'p2.13', name: 'Dior Sauvage Parfum - EDP 100ml', sub: 'Him', price: 650000, icon: 'fa-flower',image:'images/perfumes/Him/SauvagePARFUM.png' },
        { id: 'p2.14', name: 'Light blue for men - EDT 75ml', sub: 'Him', price: 150000, icon: 'fa-flower',image:'images/perfumes/Him/Light_blue.png' },
        { id: 'p2.15', name: 'Just Cavalli For Him - EDT 90ml', sub: 'Him', price: 150000, icon: 'fa-flower',image:'images/perfumes/Him/JustCavalli.png' },
        { id: 'p2.16', name: 'Armani Code Pour Homme - EDT 125ml', sub: 'Him', price: 550000, icon: 'fa-flower',image:'images/perfumes/Him/ArmaniCode_Homme.png' },
        { id: 'p2.17', name: 'Ultra Male by JPG - 50ml', sub: 'Him', price: 150000, icon: 'fa-flower',image:'images/perfumes/Him/UltraMale_JPG.png' },
        { id: 'p2.18', name: 'Ultra Male by JPG - 100ml', sub: 'Him', price: 460000, icon: 'fa-flower',image:'images/perfumes/Him/UltraMale_JPG.png' },
        { id: 'p2.19', name: 'Hugo Boss The Scent - EDP 50ml', sub: 'Him', price: 340000, icon: 'fa-flower',image:'images/perfumes/Him/HugoBoss_TheScent.png' },
        { id: 'p2.20', name: 'Hugo Boss The Scent Absolute - EDP 50ml', sub: 'Him', price: 360000, icon: 'fa-flower',image:'images/perfumes/Him/HugoBoss_TheScentAbsolute.png' },
        { id: 'p2.21', name: 'Hugo Boss The scent Private Accord - EDP 50ml', sub: 'Him', price: 380000, icon: 'fa-flower',image:'images/perfumes/Him/HugoBossTheScentAbsolutePrivate Accord.png' },
        { id: 'p2.22', name: 'Allure Homme Sport Eau Extreme - EDP 50ml', sub: 'Him', price: 400000, icon: 'fa-flower',image:'images/perfumes/Him/AllureHomme_SportEauExtreme.png' },
        { id: 'p2.23', name: 'Allure Homme Sport Eau Extreme - EDP 100ml', sub: 'Him', price: 550000, icon: 'fa-flower',image:'images/perfumes/Him/AllureHomme_SportEauExtreme.png' },
        { id: 'p2.24', name: 'Allure Homme Sport Eau Extreme - EDP 150ml', sub: 'Him', price: 650000, icon: 'fa-flower',image:'images/perfumes/Him/AllureHomme_SportEauExtreme.png' },
        { id: 'p2.25', name: 'Bvlgari Man - 50ml', sub: 'Him', price: 270000, icon: 'fa-flower',image:'images/perfumes/Him/BvlgariMan.png' },
        { id: 'p2.26', name: 'Gentleman Givenchy Cologne - 50ml', sub: 'Him', price: 265000, icon: 'fa-flower',image:'images/perfumes/Him/Gentleman_GivenchyCologne.png' },
        { id: 'p2.27', name: 'Montblanc Legend - EDP 100ml', sub: 'Him', price: 400000, icon: 'fa-flower',image:'images/perfumes/Him/Montblanc_Legend.png' },
        { id: 'p2.28', name: 'Montblanc Legend Spirit - EDT 50ml', sub: 'Him', price: 250000, icon: 'fa-flower',image:'images/perfumes/Him/Montblanc_LegendSpirit.png' },
        { id: 'p2.29', name: 'Acqua Di Gio by Giorgio Armani - EDT 50ml', sub: 'Him', price: 150000, icon: 'fa-flower',image:'images/perfumes/Him/AcquaDiGio_GiorgioArmani_EDT.png' },
        { id: 'p2.30', name: 'Acqua Di Gio by Giorgio Armani - EDT 100ml', sub: 'Him', price: 450000, icon: 'fa-flower',image:'images/perfumes/Him/AcquaDiGio_GiorgioArmani_EDT.png' },
        { id: 'p2.31', name: 'Acqua Di Gio by Giorgio Armani - EDT 200ml', sub: 'Him', price: 550000, icon: 'fa-flower',image:'images/perfumes/Him/AcquaDiGio_GiorgioArmani_EDT.png' },
        { id: 'p2.32', name: 'Aqua Di Gio Absolu - EDP 75ml', sub: 'Him', price: 450000, icon: 'fa-flower',image:'images/perfumes/Him/AquaDiGio_ABSOLU.png' },
        { id: 'p2.33', name: 'Aqua Di Gio Absolu - EDP 125ml', sub: 'Him', price: 550000, icon: 'fa-flower',image:'images/perfumes/Him/AquaDiGio_ABSOLU.png' },
        { id: 'p2.34', name: 'Aqua Di Gio Profondo - EDP 75ml', sub: 'Him', price: 450000, icon: 'fa-flower',image:'images/perfumes/Him/ProfondoEDP.png' },
        { id: 'p2.35', name: 'Aqua Di Gio Profondo - EDP 125ml', sub: 'Him', price: 550000, icon: 'fa-flower',image:'images/perfumes/Him/ProfondoEDP.png' },
        { id: 'p2.36', name: 'Aqua Di Gio Profumo - EDP 125ml', sub: 'Him', price: 550000, icon: 'fa-flower',image:'images/perfumes/Him/Profumo.png' },
        { id: 'p2.37', name: 'Dior Fahrenheit Parfum - EDP 100ml', sub: 'Him', price: 550000, icon: 'fa-flower',image:'images/perfumes/Him/fahrenheit.png' },
        { id: 'p2.38', name: 'Bleu de Chanel - EDT 50ml', sub: 'Him', price: 320000, icon: 'fa-flower',image:'images/perfumes/Him/BleuDeChanel.png' },
        { id: 'p2.39', name: 'Bleu de Chanel - EDT 100ml', sub: 'Him', price: 480000, icon: 'fa-flower',image:'images/perfumes/Him/BleuDeChanel.png' },
        { id: 'p2.40', name: 'Gucci Guilty Pour Homme - EDP 50ml', sub: 'Him', price: 490000, icon: 'fa-flower',image:'images/perfumes/Him/Gucci_Guilty.png' },
        { id: 'p2.41', name: 'Invictus Intense - EDT 100ml', sub: 'Him', price: 500000, icon: 'fa-flower',image:'images/perfumes/Him/Invictus_Intense.png' },
        { id: 'p2.42', name: 'Invictus Victory Extreme - EDP 100ml', sub: 'Him', price: 550000, icon: 'fa-flower',image:'images/perfumes/Him/Invictus_VictoryEDP.png' },
        { id: 'p2.43', name: 'Invictus Legend - EDP 100ml', sub: 'Him', price: 500000, icon: 'fa-flower',image:'images/perfumes/Him/Invictus_Legend.png' },
        { id: 'p2.44', name: 'Burberry Touch For Men - EDT 50ml', sub: 'Him', price: 280000, icon: 'fa-flower',image:'images/perfumes/Him/Burberry_Touch.png' },
        { id: 'p2.45', name: 'Ombre leather by Tom Ford - EDP 50ml', sub: 'Him', price: 650000, icon: 'fa-flower',image:'images/perfumes/Him/Ombre_leather_50ml.png' },
        { id: 'p2.46', name: 'Ombre leather by Tom Ford - EDP 100ml', sub: 'Him', price: 750000, icon: 'fa-flower',image:'images/perfumes/Him/Ombre_Leather.png' },
        { id: 'p2.47', name: 'Y by YSL - EDT 100ml', sub: 'Him', price: 450000, icon: 'fa-flower',image:'images/perfumes/Him/Y_YSL.png' },
        { id: 'p2.48', name: 'Gucci Guilty Platinum Edition - EDT 75ml', sub: 'Him', price: 460000, icon: 'fa-flower',image:'images/perfumes/Him/GucciGuilty_PlatinumEdition..png' },
        { id: 'p2.49', name: 'Prada Amber Pour Homme Intense - 100ml', sub: 'Him', price: 420000, icon: 'fa-flower',image:'images/perfumes/Him/PradaAmber_PourHommeIntense.png' },
        { id: 'p2.50', name: '212 VIP Men - EDT 100ml', sub: 'Him', price: 430000, icon: 'fa-flower',image:'images/perfumes/Him/212VIP_Men.png' },
        { id: 'p2.51', name: '212 VIP Black for Men - EDP 100ml', sub: 'Him', price: 470000, icon: 'fa-flower',image:'images/perfumes/Him/212VIP_Black.png' },
        { id: 'p2.52', name: '212 Men Sexy - 100ml', sub: 'Him', price: 450000, icon: 'fa-flower',image:'images/perfumes/Him/212Men_Sexy.png' },
        { id: 'p2.53', name: '212 Men Heroes Forever Young - 100ml', sub: 'Him', price: 450000, icon: 'fa-flower',image:'images/perfumes/Him/212Men_Heroes.png' },
        { id: 'p2.54', name: '212 Sexy Men - EDT 50ml', sub: 'Him', price: 320000, icon: 'fa-flower',image:'images/perfumes/Him/212Men_Sexy.png' },
        { id: 'p2.55', name: 'Spicebomb by Viktor & Rolf - EDT 90ml', sub: 'Him', price: 150000, icon: 'fa-flower',image:'images/perfumes/Him/spicebomb.png' },
        { id: 'p2.56', name: 'Chrome Pure by Azzaro - EDT 100ml', sub: 'Him', price: 150000, icon: 'fa-flower',image:'images/perfumes/Him/AzzaroPure.png' },
        { id: 'p2.57', name: 'Azzaro Chrome - 100ml', sub: 'Him', price: 150000, icon: 'fa-flower',image:'images/perfumes/Him/AzzaroChrome.png' },
        { id: 'p2.58', name: 'Homme by David Beckham - EDT 75ml', sub: 'Him', price: 250000, icon: 'fa-flower',image:'images/perfumes/Him/Homme_DavidBeckham.png' },
        { id: 'p2.59', name: 'Eternity for Men - EDT 50ml', sub: 'Him', price: 250000, icon: 'fa-flower',image:'images/perfumes/Him/Eternity_Men.png' },
        { id: 'p2.60', name: 'Valentino Uomo - EDT 100ml', sub: 'Him', price: 400000, icon: 'fa-flower',image:'images/perfumes/Him/ValentinoUomo.png' },
        { id: 'p2.61', name: 'Bvlgari Man Wood Neroli - EDP 100ml', sub: 'Him', price: 450000, icon: 'fa-flower',image:'images/perfumes/Him/Bvlgari_ManWoodNeroli.png' },
        { id: 'p2.62', name: 'Stronger With You Intensely - EDP 50ml', sub: 'Him', price: 400000, icon: 'fa-flower',image:'images/perfumes/Him/StrongerWithYou_Intensely.png' },
        { id: 'p2.63', name: 'Stronger With You Intensely - EDP 100ml', sub: 'Him', price: 500000, icon: 'fa-flower',image:'images/perfumes/Him/StrongerWithYou_Intensely.png' },
        { id: 'p2.64', name: 'Burberry Brit For Men - EDT 50ml', sub: 'Him', price: 310000, icon: 'fa-flower',image:'images/perfumes/Him/BurberryBritForMen.png' },
        { id: 'p2.65', name: 'Cool Water by Davidoff - EDT 100ml', sub: 'Him', price: 150000, icon: 'fa-flower',image:'images/perfumes/Him/CoolWater_Davidoff.png' },

        //Unisex
        { id: 'p3', name: 'CK all by Calvin Klein - EDT 100ml', sub: 'Unisex', price: 250000, icon: 'fa-leaf',image:'images/perfumes/Unisex/CK_All.png' },
        { id: 'p3.1', name: 'CK all by Calvin Klein - EDT 200ml', sub: 'Unisex', price: 300000, icon: 'fa-cloud',image:'images/perfumes/Unisex/CK_All.png' },
        { id: 'p3.2', name: 'Oud Vanille - EDP 100ml', sub: 'Unisex', price: 270000, icon: 'fa-cloud',image:'images/perfumes/Unisex/OudVanille.png' },
    ],


    gadgets: [
        //Phones- iphone
        { id: 'd1', name: 'iPhone 17 Pro 256 eSIM Deep Blue', sub: 'Phones', price: 4850000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/iphone17DeepBlue.png' },
        { id: 'd1.1', name: 'iPhone 17 Pro 256 eSIM Cosmic Orange', sub: 'Phones', price: 4850000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/orangeCosmic.png' },
        { id: 'd1.2', name: 'iPhone 17 Pro 256 eSIM Silver', sub: 'Phones', price: 4950000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/silver.png' },
        { id: 'd1.3', name: 'iPhone 17 Pro Max 256 eSIM Cosmic Orange', sub: 'Phones', price: 5200000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/OrangeProMax.png' },
        { id: 'd1.4', name: 'iPhone 17 Pro Max 256 eSIM Deep Blue', sub: 'Phones', price: 5230000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/proMaxDeepBlue.png' },
        { id: 'd1.5', name: 'iPhone 17 Pro Max 256 eSIM Silver', sub: 'Phones', price: 5330000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/silver.png' },
        { id: 'd1.6', name: 'iPhone Air 256 eSIM Sky Blue', sub: 'Phones', price: 3600000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/airSkyblue2.png' },
        { id: 'd1.7', name: 'iPhone Air 256 eSIM Space Black', sub: 'Phones', price: 3600000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/airSpaceBlack.png' },
        { id: 'd1.8', name: 'iPhone Air 512 eSIM Sky Blue', sub: 'Phones', price: 4200000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/airSkyblue2.png' },
        { id: 'd1.9', name: 'iPhone 17 256 1SIM + eSIM Black', sub: 'Phones', price: 3100000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/black17.png' },
        { id: 'd1.10', name: 'iPhone 17 256 1SIM + eSIM  Blue', sub: 'Phones', price: 3100000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/blue17.png' },
        { id: 'd1.11', name: 'iPhone 17 256 1SIM + eSIM Lavender', sub: 'Phones', price: 3130000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/lavender17.png' },
        { id: 'd1.12', name: 'iPhone 17 Pro 256 1SIM + eSIM Cosmic Orange', sub: 'Phones', price: 5140000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/orangeCosmic.png' },
        { id: 'd1.13', name: 'iPhone 17 Pro 256 1SIM + eSIM Deep Blue', sub: 'Phones', price: 5140000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/proMaxDeepBlue.png' },
        { id: 'd1.14', name: 'iPhone 17 Pro 256 1SIM + eSIM Silver', sub: 'Phones', price: 5270000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/silver.png' },
        { id: 'd1.15', name: 'iPhone 17 Pro 512 1SIM + eSIM Deep Blue', sub: 'Phones', price: 5830000, icon: 'fa-mobile-alt',image:'images/Gadgets/phones/iphone/iphone17DeepBlue.png' },
        
        //phones Samsung
        { id: 'd2', name: 'Samsung A56 5G 8/128 Black/Olive/Light Gray', sub: 'Phones', price: 1190000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s1.png' },
        { id: 'd2.1', name: 'Samsung A56 5G 8/256 Black/Olive/Light Gray', sub: 'Phones', price: 1300000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s2.png' },
        { id: 'd2.2', name: 'Samsung A36 5G 8/128 Awesome Black', sub: 'Phones', price: 950000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s3.png' },
        { id: 'd2.3', name: 'Samsung A36 5G 8/256 Awesome Black', sub: 'Phones', price: 1060000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s4.png' },
        { id: 'd2.4', name: 'Samsung A26 5G 6/128 Black', sub: 'Phones', price: 790000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s5.png' },
        { id: 'd2.5', name: 'Samsung A26 5G 8/256 Black', sub: 'Phones', price: 870000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s6.png' },
        { id: 'd2.6', name: 'Samsung M36 5G 6/128 Blue/Gray', sub: 'Phones', price: 690000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s7.png' },
        { id: 'd2.7', name: 'Samsung A17 4/128 Black', sub: 'Phones', price: 600000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/a17black.png' },
        { id: 'd2.8', name: 'Samsung A17 6/128 Black', sub: 'Phones', price: 650000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s9.png' },
        { id: 'd2.9', name: 'Samsung A17 8/256 Black', sub: 'Phones', price: 700000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s9.png' },
        { id: 'd2.10', name: 'Samsung S25 FE 8/256 Jet Black', sub: 'Phones', price: 1940000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/jet25.png' },
        { id: 'd2.11', name: 'Samsung S25 12/256 Icy Blue', sub: 'Phones', price: 2550000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/icy25.png' },
        { id: 'd2.12', name: 'Samsung S25+ 12/256 Navy', sub: 'Phones', price: 2750000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/navy25.png' },
        { id: 'd2.13', name: 'Samsung S25 Ultra 12/256 Titanium Black/Gray/SilverBlue', sub: 'Phones', price: 3450000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s254-1.png' },
        { id: 'd2.14', name: 'Samsung S25 Ultra 12/512 Titanium Black/Gray/SilverBlue', sub: 'Phones', price: 3900000, icon: 'fa-mobile',image:'images/Gadgets/phones/samsung/s25Ultra.png' },

        //Gaming
        { id: 'd3', name: 'Playstation 5 Pro', sub: 'Gaming', price: 3900000, icon: 'fa-music',image:'images/Gadgets/Gaming/ps5pro.png' },
        { id: 'd4', name: 'Playstation DualSense Controller', sub: 'Gaming', price: 340000, icon: 'fa-volume-up',image:'images/Gadgets/Gaming/controller.png' },
        { id: 'd5', name: 'Playstation Portal', sub: 'Gaming', price: 1000000, icon: 'fa-clock',image:'images/Gadgets/Gaming/portal.png' },
        { id: 'd6', name: 'Playstation Pulse 3D Wireless Headset', sub: 'Gaming', price: 500000, icon: 'fa-game',image:'images/Gadgets/Gaming/headset.png' },
        { id: 'd7', name: 'Playstation DualSense Charging Station', sub: 'Gaming', price: 270000, icon: 'fa-game',image:'images/Gadgets/Gaming/charging.png' },
        { id: 'd8', name: 'PlayStation 5 Slim', sub: 'Gaming', price: 2700000, icon: 'fa-game',image:'images/Gadgets/Gaming/ps5sim.png' },
        { id: 'd9', name: 'PS5 Multi-Functional Cooling Charging Dock', sub: 'Gaming', price: 115000, icon: 'fa-game',image:'images/Gadgets/Gaming/coolingdock.png' },

        //Speakers
        { id: 'd10', name: 'Harman/Kardon Citation 200', sub: 'Speakers', price: 1150000, icon: 'fa-mobile',image:'images/Gadgets/speakers/citation200.png' },
        { id: 'd11', name: 'Harman/Kardon Onyx Studio 9', sub: 'Speakers', price: 850000, icon: 'fa-mobile',image:'images/Gadgets/speakers/studio9.png' },
        { id: 'd12', name: 'Harman/Kardon Go+ Play 3', sub: 'Speakers', price: 1200000, icon: 'fa-mobile',image:'images/Gadgets/speakers/go+3.png' },
        { id: 'd13', name: 'Harman/Kardon Luna', sub: 'Speakers', price: 520000, icon: 'fa-mobile',image:'images/Gadgets/speakers/luna.png' },
        { id: 'd14', name: 'JBL Boombox 4', sub: 'Speakers', price: 1850000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/jbl4.png'},
        { id: 'd15', name: 'JBL Boombox 3', sub: 'Speakers', price: 1500000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/jblboombox3.png'},
        { id: 'd16', name: 'JBL Partybox Club 120', sub: 'Speakers', price: 1500000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/partybox120.png'},
        { id: 'd17', name: 'JBL Partybox Stage 320', sub: 'Speakers', price: 2250000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/partybox320.png'},
        { id: 'd18', name: 'JBL Go 4', sub: 'Speakers', price: 230000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/jblGo4.png'},
        { id: 'd19', name: 'JBL Clip 5', sub: 'Speakers', price: 280000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/clip5.png'},
        { id: 'd20', name: 'JBL Xtreme 4', sub: 'Speakers', price: 1040000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/xtreme4.png'},
        { id: 'd21', name: 'JBL Partybox Ultimate', sub: 'Speakers', price: 4700000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/partyboxUltimate.png'},
        { id: 'd22', name: 'JBL Boombox 3 WiFi', sub: 'Speakers', price: 1700000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/jbl3wifi.png'},
        { id: 'd23', name: 'JBL Flip 7', sub: 'Speakers', price: 450000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/flip7.png'},
        { id: 'd24', name: 'JBL Authentics 300', sub: 'Speakers', price: 1300000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/authentics300.png'},
        { id: 'd25', name: 'JBL PartyLight Stick', sub: 'Accessories', price: 150000, icon: 'fa-speaker' ,image:'images/Gadgets/accessories/jbllightstick.png'},
        { id: 'd26', name: 'JBL Charge 6', sub: 'Speakers', price: 600000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/charge6.png'},
        { id: 'd27', name: 'JBL Partybox Encore 2 with Mic', sub: 'Speakers', price: 1550000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/encore2.png'},
        { id: 'd28', name: 'JBL Horizon 3', sub: 'Speakers', price: 600000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/horizon3.png'},
        { id: 'd29', name: 'JBL Grip', sub: 'Speakers', price: 370000, icon: 'fa-speaker' ,image:'images/Gadgets/speakers/jblgrip.png'},

        //Watches
        { id: 'w1', name: 'Apple Watch Ultra 3 Black Titanium 2.77M', sub: 'Watches', price: 2770000, icon: 'fa-mobile',image:'images/Gadgets/watches/w1.png' },
        { id: 'w2', name: 'Apple Watch Ultra 3 Natural Titanium 2.8M', sub: 'Watches', price: 2800000, icon: 'fa-mobile',image:'images/Gadgets/watches/w2.png' },
        { id: 'w3', name: 'Apple Watch Series 11 46mm 1.39M Space Gray', sub: 'Watches', price: 1390000, icon: 'fa-mobile',image:'images/Gadgets/watches/w3.png' },
        { id: 'w4', name: 'Apple Watch Series 11 46mm 1.39M Jet Black', sub: 'Watches', price: 1390000, icon: 'fa-mobile',image:'images/Gadgets/watches/w4.png' },
        { id: 'w5', name: 'Apple Watch Series 11 46mm 1.39M Rose Gold', sub: 'Watches', price: 1390000, icon: 'fa-mobile',image:'images/Gadgets/watches/w8.png' },
        { id: 'w6', name: 'Apple Watch Series 11 42mm 1.28M Jet Black', sub: 'Watches', price: 1280000, icon: 'fa-mobile',image:'images/Gadgets/watches/w4.png' },
        { id: 'w7', name: 'Apple Watch Series 11 42mm 1.28M Rose Gold', sub: 'Watches', price: 1280000, icon: 'fa-mobile',image:'images/Gadgets/watches/w5.png' },
        { id: 'w8', name: 'Apple Watch Series 11 42mm 1.28M Space Gray', sub: 'Watches', price: 1280000, icon: 'fa-mobile',image:'images/Gadgets/watches/w3.png' },
        { id: 'w9', name: 'Apple Watch SE 3 44mm 1.03M Midnight', sub: 'Watches', price: 1030000, icon: 'fa-mobile',image:'images/Gadgets/watches/w6.png' },
        { id: 'w10', name: 'Apple Watch SE 3 44mm 1.03M Starlight', sub: 'Watches', price: 1030000, icon: 'fa-mobile',image:'images/Gadgets/watches/w7.png' },

        //Accessories
        { id: 'a1.1', name: 'AirPods Pro 3 White', sub: 'Accessories', price: 860000, icon: 'fa-mobile',image:'images/Gadgets/accessories/airpods/a1.png' },
        { id: 'a1.2', name: 'AirPods 4 ANC White', sub: 'Accessories', price: 570000, icon: 'fa-mobile',image:'images/Gadgets/accessories/airpods/a2.png' },
        { id: 'a1.3', name: 'AirPods 4 White', sub: 'Accessories', price: 450000, icon: 'fa-mobile',image:'images/Gadgets/accessories/airpods/a3.png' },
        { id: 'a1.4', name: 'AirPods Max USB-C 1.85M Midnight', sub: 'Accessories', price: 1850000, icon: 'fa-mobile',image:'images/Gadgets/accessories/headsets/ah1.png' },
        { id: 'a1.5', name: 'AirPods Max USB-C 1.89M Blue', sub: 'Accessories', price: 1890000, icon: 'fa-mobile',image:'images/Gadgets/accessories/headsets/ah2.png' },
        { id: 'a1.6', name: 'Apple Battery Pack for iPhone Air White', sub: 'Accessories', price: 450000, icon: 'fa-mobile',image:'images/Gadgets/accessories/batterypack.png' },
        { id: 'a1.7', name: 'Apple AirTag 4-Pack White', sub: 'Accessories', price: 320000, icon: 'fa-mobile',image:'images/Gadgets/accessories/tag.png' },
        { id: 'a1.8', name: 'Apple AirTag 1pc White', sub: 'Accessories', price: 80000, icon: 'fa-mobile',image:'images/Gadgets/accessories/tag1.png' },

        { id: 'a1', name: 'Fashion Earmuffs Black', sub: 'Accessories', price: 100000, icon: 'fa-mobile',image:'images/Gadgets/accessories/headsets/h1.JPG' },
        { id: 'a2', name: 'Fashion Earmuffs White', sub: 'Accessories', price: 100000, icon: 'fa-mobile',image:'images/Gadgets/accessories/headsets/h2.JPG' },
        { id: 'a3', name: 'Fashion Earmuffs Pink', sub: 'Accessories', price: 100000, icon: 'fa-mobile',image:'images/Gadgets/accessories/headsets/h3.JPG' },
        { id: 'a4', name: 'Fashion Earmuffs Gray', sub: 'Accessories', price: 100000, icon: 'fa-mobile',image:'images/Gadgets/accessories/headsets/h4.JPG' },

    ],

    
    cakes: [
        { id: 'c1', name: 'Black Forest Cake', sub: 'Others', price: 180000, icon: 'fa-heart',image:'images/cakes/others/blackforest.png' },
        { id: 'c2', name: 'Chocolate Cake', sub: 'Others', price: 185000, icon: 'fa-star',image:'images/cakes/others/chocolatecake.png' },
        { id: 'c3', name: 'Red Velvet Cake', sub: 'Others', price: 150000, icon: 'fa-birthday-cake',image:'images/cakes/others/redvelvet.png' },
        { id: 'c4', name: 'Strawberry Cream ', sub: 'Others', price: 150000, icon: 'fa-rainbow',image:'images/cakes/others/strawberrycream.png' },
        { id: 'c5', name: 'Black Forest Cake', sub: 'Others', price: 180000, icon: 'fa-graduation-cap',image:'images/cakes/others/blackforest2.png' },
        { id: 'c6', name: 'Marble Cake', sub: 'Others', price: 150000, icon: 'fa-cake',image:'images/cakes/others/marble.png' },
        { id: 'c7', name: 'Marble Swirl Cake', sub: 'Birthday', price: 150000, icon: 'fa-cake',image:'images/cakes/others/marbleswirl.png' },
        { id: 'c8', name: 'Drizzle Cake', sub: 'Birthday', price: 150000, icon: 'fa-cake',image:'images/cakes/birthday/drizzle.png' },
        { id: 'c9', name: 'Coconut Cream', sub: 'Birthday', price: 120000, icon: 'fa-cake',image:'images/cakes/birthday/coconut.png' },
        { id: 'c10', name: 'Birthday Cake', sub: 'Birthday', price: 150000, icon: 'fa-cake',image:'images/cakes/birthday/birthday.png' },
        { id: 'c11', name: 'Chocolate Cake', sub: 'Others', price: 185000, icon: 'fa-cake',image:'images/cakes/others/chocolate2.png' },
        { id: 'c12', name: 'Birthday Cake', sub: 'Birthday', price: 150000, icon: 'fa-cake',image:'images/cakes/birthday/birthday2.png' },
        { id: 'c13', name: 'Walnut Cake', sub: 'Birthday', price: 120000, icon: 'fa-cake',image:'images/cakes/birthday/walnut.png' },
        { id: 'c14', name: 'Mickey Mouse Cake', sub: 'Others', price: 150000, icon: 'fa-cake',image:'images/cakes/others/mickeymouse.png' },
        { id: 'c15', name: 'Red Velvet Cake', sub: 'Others', price: 150000, icon: 'fa-cake',image:'images/cakes/others/redvelvet2.png' },
        { id: 'c16', name: 'Black Forest Cake', sub: 'Others', price: 180000, icon: 'fa-cake',image:'images/cakes/others/blackforest3.png' },
        { id: 'c17', name: 'Strawberry Cake', sub: 'Others', price: 150000, icon: 'fa-cake',image:'images/cakes/others/strawberrycream2.png' },
        { id: 'c18', name: 'Chocolate Cake', sub: 'Birthday', price: 185000, icon: 'fa-cake',image:'images/cakes/birthday/chocolatebirthday.png' },
        { id: 'c19', name: 'Black Buttercream', sub: 'Birthday', price: 180000, icon: 'fa-cake',image:'images/cakes/birthday/blackforest4.png' },
        { id: 'c20', name: 'Birthday Cake', sub: 'Birthday', price: 150000, icon: 'fa-cake',image:'images/cakes/birthday/birthday3.png' },

    ],


    branded: [
        { id: 'b1', name: 'Classic Navy Blue Tee', sub: 'T-shirts', price: 35000, icon: 'fa-tshirt',image:'images/brandedgifts/Tees/navyblue.png' },
        { id: 'b2', name: 'Black Tee', sub: 'T-shirts', price: 35000, icon: 'fa-tshirt',image:'images/brandedgifts/Tees/blacktee.png' },
        { id: 'b3', name: 'Black Pillow', sub: 'Others', price: 50000, icon: 'fa-hat-cowboy',image:'images/brandedgifts/Others/blackpillow.png' },
        { id: 'b4', name: 'White Pillow', sub: 'Others', price: 50000, icon: 'fa-hat-cowboy',image:'images/brandedgifts/Others/whitepillow.png' },
        { id: 'b5', name: 'White Tee', sub: 'T-shirts', price: 35000, icon: 'fa-shopping-bag',image:'images/brandedgifts/Tees/whitetee.png' },
        { id: 'b6', name: 'Black Tee', sub: 'T-shirts', price: 35000, icon: 'fa-key',image:'images/brandedgifts/Tees/blacktee2.png' },
        { id: 'b7', name: 'Black Tee', sub: 'T-shirts', price: 35000, icon: 'fa-key',image:'images/brandedgifts/Tees/blacktee3.png' },
        { id: 'b8', name: 'Black Tee', sub: 'T-shirts', price: 35000, icon: 'fa-key',image:'images/brandedgifts/Tees/blacktee4.png' },
        { id: 'b9', name: 'God\'s Plan White Tee', sub: 'T-shirts', price: 35000, icon: 'fa-key',image:'images/brandedgifts/Tees/GenTee.png' },
        { id: 'b10', name: 'God\'s Plan Black Tee', sub: 'T-shirts', price: 35000, icon: 'fa-key',image:'images/brandedgifts/Tees/blacktee5.png' },
        { id: 'b11', name: 'Sweater Shirt', sub: 'Others', price: 60000, icon: 'fa-key',image:'images/brandedgifts/Others/sweatshirt1.png' },
        { id: 'b12', name: 'Victory Black Tee', sub: 'T-shirts', price: 30000, icon: 'fa-key',image:'images/brandedgifts/Tees/victoryblack.png' },
        { id: 'b13', name: 'Victory White Tee', sub: 'T-shirts', price: 30000, icon: 'fa-key',image:'images/brandedgifts/Tees/victorywhite.png' },
        { id: 'b14', name: 'Sweater Shirt', sub: 'Others', price: 60000, icon: 'fa-key',image:'images/brandedgifts/Others/sweatshirt2.png' },
        { id: 'b15', name: 'Sweater Shirt', sub: 'Others', price: 60000, icon: 'fa-key',image:'images/brandedgifts/Others/sweatshirt3.png' },
        { id: 'b16', name: 'Green Snapback Cap', sub: 'Caps', price: 30000, icon: 'fa-key',image:'images/brandedgifts/Caps/greencap.png' },
        { id: 'b17', name: 'Black Snapback cap', sub: 'Caps', price: 30000, icon: 'fa-key',image:'images/brandedgifts/Caps/blackcap.png' },
        { id: 'b18', name: 'Green Snapback Cap', sub: 'Caps', price: 30000, icon: 'fa-key',image:'images/brandedgifts/Caps/greengoldcap.png' },
        { id: 'b19', name: 'Jumper', sub: 'Others', price: 65000, icon: 'fa-key',image:'images/brandedgifts/Others/jumper1.png' },
        { id: 'b20', name: 'Faith Snapback Cap', sub: 'Caps', price: 30000, icon: 'fa-key',image:'images/brandedgifts/Caps/faithcap.png' },
        { id: 'b21', name: 'Made to Worship Vacuum Cup', sub: 'Others', price: 35000, icon: 'fa-key',image:'images/brandedgifts/Others/vacuum.png' },
        { id: 'b22', name: 'Customizable thermo Mugs', sub: 'Others', price: 40000, icon: 'fa-key',image:'images/brandedgifts/Others/cups1.JPG' },
        { id: 'b23', name: 'Customizable Mugs ', sub: 'Others', price: 30000, icon: 'fa-key',image:'images/brandedgifts/Others/cups2.JPG' },
        { id: 'b24', name: 'Inspirational Wooden Frame Set - A1', sub: 'Others', price: 450000, icon: 'fa-key',image:'images/brandedgifts/Others/a1set-1.JPG' },
        { id: 'b25', name: 'Just Do It Motivational Trio A1 Frames Set', sub: 'Others', price: 450000, icon: 'fa-key',image:'images/brandedgifts/Others/a1set-2.JPG' },
        { id: 'b26', name: 'Gratitude Wooden Frame Set - A2', sub: 'Others', price: 300000, icon: 'fa-key',image:'images/brandedgifts/Others/a2set.JPG' },
        { id: 'b27', name: 'Customizable Bracelets', sub: 'Others', price: 45000, icon: 'fa-key',image:'images/brandedgifts/Others/bracelet.JPG' },

        // Gift Cards
        { id: 'bc1', name: 'XOXO a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/XOXO-Card.png' },
        { id: 'bc2', name: 'To My Wife with Love a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/To-my-wife-with-love-card.png' },
        { id: 'bc3', name: 'XOXO Pink and Orange a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/xoxo-pink-orange.png' },
        { id: 'bc4', name: 'Thinking of you a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/thinking-of-you-a6-card.png' },
        { id: 'bc5', name: 'Thanks for being my unpaid therapist a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/unpaid-therapist-a6-card.png' },
        { id: 'bc6', name: 'A little note of thanks a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/alittleNoteCard.png' },
        { id: 'bc7', name: 'Another day of new growth a6 cad', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Another-Day-Growth-Card.png' },
        { id: 'bc8', name: 'Best Dad a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/best-dad-in-the-world-a6-card.png' },
        { id: 'bc9', name: 'Best of luck a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/best-of-luck-A5-card.png' },
        { id: 'bc10', name: 'Big Hug a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Big-Hug-A6-Card.png' },
        { id: 'bc11', name: 'Bright thank you a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Bright-Thank-You-A6-Card.png' },
        { id: 'bc12', name: 'Cherry Hearts a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Cherry-Hearts-card.png' },
        { id: 'bc13', name: 'Congrats floral a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Congrats-Floral-A6-Card.png' },
        { id: 'bc14', name: 'Congratulations a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Congratulations-.png' },
        { id: 'bc15', name: 'Cute butt a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/cute-butt-a6-card-addons.png' },
        { id: 'bc16', name: 'Cute together a6 card', sub: 'Cards', price: 20000, icon: 'fa-key',image:'images/brandedgifts/Cards/Cute-together.png' },
        { id: 'bc17', name: 'Keep Calm and just do it - Success a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Exam-Success-Card-A6---Keep-Calm_Do-It.png' },
        { id: 'bc18', name: 'Exam Success Card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Exam-Success-Card.png' },
        { id: 'bc19', name: 'Floral get well soon a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/floral-get-well-soon-card.png' },
        { id: 'bc20', name: 'Belated Special Day a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/ForgetYourSpecialDay.png' },
        { id: 'bc21', name: 'Get well soon card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/get-well-soon-card.png' },
        { id: 'bc22', name: 'Graduation a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/graduation-card-a6-adventure-awaits-card-.png' },
        { id: 'bc23', name: 'Have a beautiful day a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Have-a-beautiful-Day-Card.png' },
        { id: 'bc24', name: 'I believe in you A5 Success card', sub: 'Cards', price: 20000, icon: 'fa-key',image:'images/brandedgifts/Cards/I-believe-in-you-A5-Success.png' },
        { id: 'bc25', name: 'I\'ll be there for you a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/i-ll-be-there-for-you-a6-card.png' },
        { id: 'bc26', name: 'I really love you card', sub: 'Cards', price: 20000, icon: 'fa-key',image:'images/brandedgifts/Cards/i-really-love-you-2-card.png' },
        { id: 'bc27', name: 'It\'s a boy a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/it-s-a-boy-a6-card.png' },
        { id: 'bc28', name: 'I really love you a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/i-really-love-you-a6.png' },
        { id: 'bc29', name: 'It\'s a beautiful girl a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/its-a-beautiful-girl.png' },
        { id: 'bc30', name: 'Kiss and Make up a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/kiss-make-up-a6-card.png' },
        { id: 'bc31', name: 'Love you Mum a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/love-you-mum-a6-card-addons.png' },
        { id: 'bc32', name: 'Missing Piece Card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Missing-Piece-Card.png' },
        { id: 'bc33', name: 'Older Wiser a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/olderWiser.png' },
        { id: 'bc34', name: 'Red Love Heart card', sub: 'Cards', price: 22000, icon: 'fa-key',image:'images/brandedgifts/Cards/Red-Love-Heart-Card.png'} ,
        { id: 'bc35', name: 'Simple Heart a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/simple-heart-a6.png' },
        { id: 'bc36', name: 'So Sorry for Your Loss card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/so-sorry-for-your-loss.png' },
        { id: 'bc37', name: 'The one I love a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/the-one-i-love-a6-card.png' },
        { id: 'bc38', name: 'Thank you Mom card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/thank-you-mom-CARD_1.png' },
        { id: 'bc39', name: 'Sorry a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/sorry-a6-card.png' },
        { id: 'bc40', name: 'Thank You white card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/ThankYouWhiteCard.png' },
        { id: 'bc41', name: 'Wishing You Sun and Fun Day a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Wishing-Sun-and-Fun.png' },
        { id: 'bc42', name: 'Yay it\'s your day a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/yay-it-s-your-day-card-a6-card.png' },
        { id: 'bc43', name: 'You\'re Aging well a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/You_reAgingWellcard.png' },
        { id: 'bc44', name: 'Women like you a6 card', sub: 'Cards', price: 20000, icon: 'fa-key',image:'images/brandedgifts/Cards/WomenLikeYou.png' },
        { id: 'bc45', name: 'Women\'s Day a6 card', sub: 'Cards', price: 15000, icon: 'fa-key',image:'images/brandedgifts/Cards/Womens-Day-Card.png' },
    ],

    wines: [
        // Wines & Sparkling
        { id: 'w1', name: 'Baron D\'Arignac Sweet Red 750ml', sub: 'Wines & Sparkling', price: 44000, icon: 'fa-wine-glass', image: 'images/wines/BaronDArignacSweetRed.png' },
        { id: 'w1.1', name: 'Belaire Luxe 750ml', sub: 'Wines & Sparkling', price: 165000, icon: 'fa-wine-glass', image: 'images/wines/BelaireLuxe.png' },
        { id: 'w1.2', name: 'Belaire with light 750ml', sub: 'Wines & Sparkling', price: 165000, icon: 'fa-wine-glass', image: 'images/wines/Belaire_with_Light.png' },
        { id: 'w1.3', name: 'Bella Wine 750ml', sub: 'Wines & Sparkling', price: 31900, icon: 'fa-champagne-glasses', image: 'images/wines/BellaWine.png' },
        { id: 'w1.4', name: 'Donatello Sparkling 750ml', sub: 'Wines & Sparkling', price: 37400, icon: 'fa-champagne-glasses', image: 'images/wines/DonatelloSparkling.png' },
        { id: 'w1.5', name: 'Four cousins Dry Red 5L Cask', sub: 'Wines & Sparkling', price: 185900, icon: 'fa-champagne-glasses', image: 'images/wines/FourCousinsDryRed.png' },
        { id: 'w1.6', name: 'Four cousins Dry Red 750ml', sub: 'Wines & Sparkling', price: 52800, icon: 'fa-champagne-glasses', image: 'images/wines/FourDryRedBottle.png' },
        { id: 'w1.7', name: 'Herxheim Spatburgunder 750ml', sub: 'Wines & Sparkling', price: 71500, icon: 'fa-champagne-glasses', image: 'images/wines/HerxheimSpatburgunder.png' },
        { id: 'w1.8', name: 'Herxheim Troken Sauvignon Blanc 750ml', sub: 'Wines & Sparkling', price: 93500, icon: 'fa-champagne-glasses', image: 'images/wines/HerxheimSauvignonBlanc.png' },
        { id: 'w1.9', name: 'JC Leroux Sparkling Wine 750ml', sub: 'Wines & Sparkling', price:  67100, icon: 'fa-champagne-glasses', image: 'images/wines/JCLerouxSparklingWine.png' },
        { id: 'w1.10', name: 'JP Chenet Pink 750ml', sub: 'Wines & Sparkling', price: 70000, icon: 'fa-champagne-glasses', image: 'images/wines/JPChenetPink.png' },
        { id: 'w1.11', name: 'KWV Merlot 750ml', sub: 'Wines & Sparkling', price: 66000, icon: 'fa-champagne-glasses', image: 'images/wines/KwvMerlot.png' },
        { id: 'w1.12', name: 'Lambrusco sweet red 750ml', sub: 'Wines & Sparkling', price: 50600, icon: 'fa-champagne-glasses', image: 'images/wines/LambruscoSweetRed.png' },
        { id: 'w1.13', name: 'Macola Sweet Red 750ml', sub: 'Wines & Sparkling', price: 50600, icon: 'fa-champagne-glasses', image: 'images/wines/macola.png' },
        { id: 'w1.14', name: 'Moet and Chandon Imperial Brut 750ml', sub: 'Wines & Sparkling', price: 374000, icon: 'fa-champagne-glasses', image: 'images/wines/Moet_Chandon_Imperial_Brut.png' },
        { id: 'w1.15', name: 'Nederburg Baronne 750ml', sub: 'Wines & Sparkling', price: 63800, icon: 'fa-champagne-glasses', image: 'images/wines/NederburgBaronne.png' },
        { id: 'w1.16', name: 'Pearly Bay Sweet red 750ml', sub: 'Wines & Sparkling', price: 42900, icon: 'fa-champagne-glasses', image: 'images/wines/pearly-bay-sweet-red.png' },

        // Whisky, Spirits & Tequila
        { id: 'w2', name: 'Ballantine\'s 200ml', sub: 'Whisky, Spirits & Tequila', price: 24200, icon: 'fa-wine-bottle', image: 'images/wines/Ballantines.png' },
        { id: 'w2.1', name: 'Ballantine\'s Finest 1 Litre', sub: 'Whisky, Spirits & Tequila', price: 110000, icon: 'fa-wine-bottle', image: 'images/wines/ballentines_finest.png' },
        { id: 'w2.2', name: 'Captain Morgan Spiced Gold 750ml', sub: 'Whisky, Spirits & Tequila', price: 71500, icon: 'fa-wine-bottle', image: 'images/wines/CaptainMorganSpicedGold.png' },
        { id: 'w2.3', name: 'Chivas Regal Scotch Whisky 1 Litre', sub: 'Whisky, Spirits & Tequila', price: 200200, icon: 'fa-wine-bottle', image: 'images/wines/ChivasRegalScotchWhisky.png' },
        { id: 'w2.4', name: 'Don Julio Blanco Tequila 750ml', sub: 'Whisky, Spirits & Tequila', price: 374000, icon: 'fa-wine-bottle', image: 'images/wines/DonJulioBlancoTequila.png' },
        { id: 'w2.5', name: 'Famous Grouse 750ml', sub: 'Whisky, Spirits & Tequila', price: 79200, icon: 'fa-wine-bottle', image: 'images/wines/FamousGrouse.png' },
        { id: 'w2.6', name: 'Hennessy V.S 750ml', sub: 'Whisky, Spirits & Tequila', price: 330000, icon: 'fa-wine-bottle', image: 'images/wines/Hennessy_VS.png' },
        { id: 'w2.7', name: 'Imperial Blue Whisky 750ml', sub: 'Whisky, Spirits & Tequila', price: 38500, icon: 'fa-wine-bottle', image: 'images/wines/imperial-blue.png' },
        { id: 'w2.8', name: 'Jack Daniel\'s Tennessee Fire 1 Litre', sub: 'Whisky, Spirits & Tequila', price: 171600, icon: 'fa-wine-bottle', image: 'images/wines/JackDanielsTennesseeFire.png' },
        { id: 'w2.9', name: 'Jameson Whisky 1 Litre', sub: 'Whisky, Spirits & Tequila', price: 137500, icon: 'fa-wine-bottle', image: 'images/wines/JamesonWhisky.png' },
        { id: 'w2.10', name: 'Jameson Whisky 350ml', sub: 'Whisky, Spirits & Tequila', price: 64900, icon: 'fa-wine-bottle', image: 'images/wines/JamesonWhisky.png' },
        { id: 'w2.11', name: 'Johnnie Walker Black Label 1L', sub: 'Whisky, Spirits & Tequila', price: 209000, icon: 'fa-wine-bottle', image: 'images/wines/johnnie-walker-black-label.png' },
        { id: 'w2.11.1', name: 'Johnnie Walker Black Label 750ml', sub: 'Whisky, Spirits & Tequila', price: 167200, icon: 'fa-wine-bottle', image: 'images/wines/johnnie-walker-black-label.png' },
        { id: 'w2.11.2', name: 'Johnnie Walker Black Label 200ml', sub: 'Whisky, Spirits & Tequila', price:55000 , icon: 'fa-wine-bottle', image: 'images/wines/blacklabel200ml.png' },
        { id: 'w2.12', name: 'Johnnie Walker Double Black 1 Litre', sub: 'Whisky, Spirits & Tequila', price: 242000, icon: 'fa-wine-bottle', image: 'images/wines/johnnie-walker-double-black.png' },
        { id: 'w2.13', name: 'Johnnie Walker Gold Reserve 750ml', sub: 'Whisky, Spirits & Tequila', price:  279400, icon: 'fa-wine-bottle', image: 'images/wines/johnnie-walker-gold-label-reserve.png' },
        { id: 'w2.14', name: 'Johnnie Walker Red Label 1L', sub: 'Whisky, Spirits & Tequila', price: 101200, icon: 'fa-wine-bottle', image: 'images/wines/JOHNNIE-WALKER-RED-LABEL2.png' },
        { id: 'w2.14.1', name: 'Johnnie Walker Red Label 750ml', sub: 'Whisky, Spirits & Tequila', price: 78100, icon: 'fa-wine-bottle', image: 'images/wines/JOHNNIE-WALKER-RED-LABEL2.png' },
        { id: 'w2.14.2', name: 'Johnnie Walker Red Label 375ml', sub: 'Whisky, Spirits & Tequila', price: 48400, icon: 'fa-wine-bottle', image: 'images/wines/JOHNNIE-WALKER-RED-LABEL2.png' },
        { id: 'w2.15', name: 'Malibu 1 Litre', sub: 'Whisky, Spirits & Tequila', price: 128700, icon: 'fa-wine-bottle', image: 'images/wines/Malibu.png' },
        { id: 'w2.16', name: 'Remy Martin Cognac 1738 750ml', sub: 'Whisky, Spirits & Tequila', price: 293700, icon: 'fa-wine-bottle', image: 'images/wines/RemyMartinCognac_1738.png' },
        { id: 'w2.17', name: 'Singleton 12 Years 750ml', sub: 'Whisky, Spirits & Tequila', price: 200200, icon: 'fa-wine-bottle', image: 'images/wines/Singleton_12_Years.png' },
        { id: 'w2.18', name: 'Singleton 15 Years 750ml', sub: 'Whisky, Spirits & Tequila', price: 286000, icon: 'fa-wine-bottle', image: 'images/wines/Singleton_15_Years.png' },
        { id: 'w2.19', name: 'Tequilla Olmeca Gold 1 Litre', sub: 'Whisky, Spirits & Tequila', price: 157300, icon: 'fa-wine-bottle', image: 'images/wines/Tequila_OlmecaGold.png' },
        { id: 'w2.20', name: 'The Glenlivet Founders Reserve 750ml', sub: 'Whisky, Spirits & Tequila', price: 300300, icon: 'fa-wine-bottle', image: 'images/wines/glenlivet-founders-reserve.png' },

        // Liqueurs, Cream & Aperitifs
        { id: 'w3', name: 'Baileys Delight 750ml', sub: 'Liqueurs, Cream & Aperitifs', price:  94600, icon: 'fa-cocktail', image: 'images/wines/baileys_delight.png' },
        { id: 'w3.1', name: 'Baileys Original 750ml', sub: 'Liqueurs, Cream & Aperitifs', price: 96800, icon: 'fa-cocktail', image: 'images/wines/baileys_original.png' },
        { id: 'w3.2', name: 'Baileys Original 375 ml', sub: 'Liqueurs, Cream & Aperitifs', price: 62700, icon: 'fa-cocktail', image: 'images/wines/baileys_original.png' },
        { id: 'w3.3', name: 'Jägermeister 750ml', sub: 'Liqueurs, Cream & Aperitifs', price: 107800, icon: 'fa-cocktail', image: 'images/wines/Jagermeister.png' },
        { id: 'w3.4', name: 'Martini Rosso 1 Litre', sub: 'Liqueurs, Cream & Aperitifs', price: 85800, icon: 'fa-cocktail', image: 'images/wines/MartiniRosso.png' },
        { id: 'w3.5', name: 'Sheridan\'s Coffee Layered Liqueur 1 Litre', sub: 'Liqueurs, Cream & Aperitifs', price: 185900, icon: 'fa-cocktail', image: 'images/wines/SheridansCoffee.png' },
        { id: 'w3.6', name: 'Wild Africa Chocolate 750ml', sub: 'Liqueurs, Cream & Aperitifs', price: 68200, icon: 'fa-cocktail', image: 'images/wines/Wildafrica_chocolate.png' },
        { id: 'w3.7', name: 'Wild Africa Cream 750ml', sub: 'Liqueurs, Cream & Aperitifs', price: 68200, icon: 'fa-cocktail', image: 'images/wines/WildAfrica_Cream.png' },
    ]
};

/* ============================================================
   END FALLBACK DATA
   ============================================================ */
const FALLBACK_PRODUCTS = FB;

/* ============================================================
   LOAD FROM SUPABASE
   ============================================================ */
async function loadProducts() {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/products?order=updated_at.desc`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        if (!response.ok) throw new Error('Failed to load products');
        const products = await response.json();
        PRODUCTS = { flowers: [], giftboxes: [], perfumes: [], gadgets: [], cakes: [], branded: [], wines: [] };
        products.forEach(product => {
            if (PRODUCTS[product.category]) {
                PRODUCTS[product.category].push({
                    id: product.id, name: product.name, sub: product.sub,
                    price: product.price, icon: product.icon, image: product.image
                });
            }
        });
        renderAllProducts();
    } catch (error) {
        console.error('Error loading from Supabase, using fallback:', error);
        PRODUCTS = FALLBACK_PRODUCTS;
        renderAllProducts();
    }
}

/* ============================================================
   RENDER ALL PRODUCTS
   ============================================================ */
function renderAllProducts() {
    const categories = ['flowers', 'giftboxes', 'perfumes', 'gadgets', 'cakes', 'branded', 'wines'];
    categories.forEach(category => renderProducts(category, 'all'));
    initBundleSection();
}

/* ============================================================
   RENDER PRODUCTS (with lazy loading)
   ============================================================ */
const visibleProducts = {};
const loadCount = {};
const INITIAL_VISIBLE = 10;
const SECOND_LOAD_COUNT = 10;
const SUBSEQUENT_LOAD_COUNT = 22;

function renderProducts(category, sub = 'all', loadMore = false) {
    const products = PRODUCTS[category] || [];
    const grid = grids[category];
    if (!grid) return;
    const filtered = sortProducts(sub === 'all' ? products : products.filter(p => p.sub === sub), sortState[category] || 'default');
    const key = `${category}-${sub}`;
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; color:var(--text-muted); padding:1rem 0;">No products in this section.</p>';
        return;
    }
    if (!visibleProducts[key] || !loadMore) {
        visibleProducts[key] = INITIAL_VISIBLE;
        loadCount[key] = 0;
    }
    const visibleCount = Math.min(visibleProducts[key], filtered.length);
    const productsToShow = filtered.slice(0, visibleCount);
    const remainingCount = filtered.length - visibleCount;
    grid.innerHTML = productsToShow.map(p => {
        const badges = getProductBadges(p, category);
        const badgesHtml = badges.map(b => `<span class="product-badge badge-${b.toLowerCase().replace(/ /g, '-')}">${b}</span>`).join('');
        return `
        <div class="product-card hub-style-card fade-in">
            <div class="product-image-wrapper">
                <button class="product-wishlist-btn ${isInWishlist(p.id) ? 'active' : ''}" data-id="${p.id}" data-cat="${category}">
                    <i class="fas fa-heart"></i>
                </button>
                ${badgesHtml}
                ${p.image ? `<img data-src="${img(p.image)}" src="${SVG_PLACEHOLDER}" alt="${p.name}" class="product-image" loading="lazy" decoding="async" />` : `<i class="fas ${p.icon}"></i>`}
                <button class="product-cart-btn" data-id="${p.id}" data-cat="${category}">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-name">${p.name || 'Gift Item'}</div>
                <div class="product-subcategory">${p.sub.replace('-',' ')}</div>
                <div class="product-price">UGX ${p.price.toLocaleString()}</div>
            </div>
        </div>`;
    }).join('');
    if (remainingCount > 0) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.className = 'load-more-btn';
        loadMoreBtn.dataset.category = category;
        loadMoreBtn.dataset.sub = sub;
        loadMoreBtn.innerHTML = `Load More (${remainingCount} remaining)`;
        grid.appendChild(loadMoreBtn);
    }
    observeLazyImages(grid);
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.product-cart-btn') || e.target.closest('.load-more-btn')) return;
            const btn = card.querySelector('.product-cart-btn');
            if (btn) {
                const id = btn.dataset.id;
                const cat = btn.dataset.cat;
                const product = PRODUCTS[cat].find(p => p.id === id);
                if (product) openProductDetail(product, cat);
            }
        });
    });
    grid.querySelectorAll('.product-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.dataset.id;
            const cat = this.dataset.cat;
            const product = PRODUCTS[cat].find(p => p.id === id);
            if (product) addToCart(product, cat, this);
        });
    });
    const loadMoreBtn = grid.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const cat = this.dataset.category;
            const subCat = this.dataset.sub;
            const currentKey = `${cat}-${subCat}`;
            loadCount[currentKey]++;
            let toAdd = loadCount[currentKey] === 1 ? SECOND_LOAD_COUNT : SUBSEQUENT_LOAD_COUNT;
            const totalProducts = PRODUCTS[cat].filter(p => subCat === 'all' || p.sub === subCat).length;
            const currentlyVisible = visibleProducts[currentKey];
            toAdd = Math.min(toAdd, totalProducts - currentlyVisible);
            visibleProducts[currentKey] += toAdd;
            renderProducts(cat, subCat, true);
        });
    }
    grid.querySelectorAll('.product-wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.dataset.id;
            const cat = this.dataset.cat;
            const product = PRODUCTS[cat].find(p => p.id === id);
            if (product) toggleWishlist(product, cat);
        });
    });
    grid.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}

function rerenderGrid(category) {
    const activeTab = document.querySelector(`.subcategory-tabs[data-category="${category}"] button.active`);
    const sub = activeTab ? activeTab.dataset.sub : 'all';
    visibleProducts[`${category}-${sub}`] = undefined;
    renderProducts(category, sub);
}

/* ============================================================
   BUNDLE SECTION - PING-PONG AUTO SCROLL
   ============================================================ */
let bundleScrollDirection = 1;
let bundleScrollSpeed = 1;
let bundleScrollAnimationId = null;
let bundleIsPaused = false;
let bundleCategories = ['flowers', 'giftboxes', 'perfumes', 'gadgets', 'cakes', 'branded', 'wines'];
let currentBundleCategory = 'all';

function initBundleSection() {
    const scrollContainer = document.getElementById('bundle-products-scroll');
    if (!scrollContainer) return;
    renderBundleProducts('all');
    renderBundleTabs();
    startBundlePingPongScroll();
    scrollContainer.addEventListener('mouseenter', () => { if (window.innerWidth > 768) bundleIsPaused = true; });
    scrollContainer.addEventListener('mouseleave', () => { if (window.innerWidth > 768) bundleIsPaused = false; });
    let touchStartTime, touchTimeout;
    scrollContainer.addEventListener('touchstart', () => {
        touchStartTime = Date.now();
        touchTimeout = setTimeout(() => { bundleIsPaused = true; }, 500);
    });
    scrollContainer.addEventListener('touchend', () => {
        clearTimeout(touchTimeout);
        if (Date.now() - touchStartTime < 500) { bundleIsPaused = false; }
        else { setTimeout(() => { bundleIsPaused = false; }, 500); }
    });
    window.addEventListener('resize', () => {
        if (bundleScrollAnimationId) cancelAnimationFrame(bundleScrollAnimationId);
        startBundlePingPongScroll();
    });
}

function renderBundleTabs() {
    const tabsContainer = document.getElementById('bundle-tabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';
    const allTab = document.createElement('button');
    allTab.className = 'bundle-tab active';
    allTab.textContent = 'All';
    allTab.dataset.category = 'all';
    allTab.addEventListener('click', () => setActiveBundleTab('all'));
    tabsContainer.appendChild(allTab);
    bundleCategories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'bundle-tab';
        tab.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        tab.dataset.category = category;
        tab.addEventListener('click', () => setActiveBundleTab(category));
        tabsContainer.appendChild(tab);
    });
}

function setActiveBundleTab(category) {
    currentBundleCategory = category;
    document.querySelectorAll('.bundle-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    const scrollContainer = document.getElementById('bundle-products-scroll');
    if (scrollContainer) scrollContainer.scrollLeft = 0;
    renderBundleProducts(category);
}

function renderBundleProducts(category) {
    const scrollContainer = document.getElementById('bundle-products-scroll');
    if (!scrollContainer) return;
    scrollContainer.innerHTML = '';
    let products = [];
    if (category === 'all') {
        Object.keys(PRODUCTS).forEach(cat => { products = products.concat((PRODUCTS[cat] || []).slice(0, 2).map(p => ({...p, _cat: cat}))); });
    } else {
        products = (PRODUCTS[category] || []).map(p => ({...p, _cat: category}));
    }
    const isMobile = window.innerWidth <= 768;
    const limit = category === 'all' ? (isMobile ? 20 : 14) : (isMobile ? 18 : 12);
    products = products.slice(0, limit);
    if (products.length === 0) {
        scrollContainer.innerHTML = '<p style="padding: 2rem; color: var(--text-muted);">No products available</p>';
        return;
    }
    products.forEach(product => scrollContainer.appendChild(createBundleProductCard(product)));
    observeLazyImages(scrollContainer);
    if (bundleScrollAnimationId) cancelAnimationFrame(bundleScrollAnimationId);
    startBundlePingPongScroll();
}

function createBundleProductCard(product) {
    const card = document.createElement('div');
    card.className = 'bundle-product-card';
    card.onclick = () => { openProductDetail(product, product._cat || product.category); };
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'bundle-product-image-wrapper';
    const image = document.createElement('img');
    image.className = 'bundle-product-image';
    image.dataset.src = img(product.image);
    image.src = SVG_PLACEHOLDER;
    image.alt = product.name || 'Gift Item';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.onerror = function() { this.onerror = null; this.src = SVG_PLACEHOLDER; };
    const badge = document.createElement('div');
    badge.className = 'bundle-product-badge featured';
    badge.textContent = 'Featured';
    const cartBtn = document.createElement('button');
    cartBtn.className = 'bundle-product-cart-btn';
    cartBtn.dataset.id = product.id;
    cartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    cartBtn.onclick = (e) => { e.stopPropagation(); addToCart(product, product._cat || product.category, cartBtn); };
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(badge);
    imageWrapper.appendChild(cartBtn);
    const infoDiv = document.createElement('div');
    infoDiv.className = 'bundle-product-info';
    const nameDiv = document.createElement('div');
    nameDiv.className = 'bundle-product-name';
    nameDiv.textContent = product.name || 'Gift Item';
    const subcategoryDiv = document.createElement('div');
    subcategoryDiv.className = 'bundle-product-subcategory';
    subcategoryDiv.textContent = product.sub.replace('-', ' ');
    const priceDiv = document.createElement('div');
    priceDiv.className = 'bundle-product-price';
    priceDiv.textContent = `UGX ${product.price.toLocaleString()}`;
    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(subcategoryDiv);
    infoDiv.appendChild(priceDiv);
    card.appendChild(imageWrapper);
    card.appendChild(infoDiv);
    return card;
}

function startBundlePingPongScroll() {
    const scrollContainer = document.getElementById('bundle-products-scroll');
    if (!scrollContainer) return;
    if (bundleScrollAnimationId) cancelAnimationFrame(bundleScrollAnimationId);
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const speed = isMobile ? 1 : (isTablet ? 0.75 : 0.5);
    function animate() {
        if (!bundleIsPaused) {
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            if (maxScrollLeft > 0) {
                scrollContainer.scrollLeft += speed * bundleScrollDirection;
                if (bundleScrollDirection === 1 && scrollContainer.scrollLeft >= maxScrollLeft - 1) {
                    bundleScrollDirection = -1;
                } else if (bundleScrollDirection === -1 && scrollContainer.scrollLeft <= 1) {
                    bundleScrollDirection = 1;
                }
            }
        }
        bundleScrollAnimationId = requestAnimationFrame(animate);
    }
    bundleScrollAnimationId = requestAnimationFrame(animate);
}

/* ============================================================
   HUB SECTION
   ============================================================ */
let hubSupabaseClient = null;
let hubCollections = [];
let hubProducts = {};
let activeHubTab = null;

async function initHubSection() {
    try {
        if (window.supabase) {
            hubSupabaseClient = window.supabase.createClient(HUB_SUPABASE_CONFIG.url, HUB_SUPABASE_CONFIG.anonKey);
            await loadHubSection();
        } else {
            console.warn('Supabase library not loaded for hub section');
        }
    } catch (error) {
        console.error('Error initializing hub section:', error);
    }
}

async function loadHubSection() {
    try {
        const { data: hubSection, error: sectionError } = await hubSupabaseClient
            .from('hub_section').select('*').limit(1);
        if (sectionError) { console.error('Error loading hub section:', sectionError); return; }
        if (hubSection && hubSection.length > 0) {
            const headingEl = document.getElementById('hub-heading');
            const paragraphEl = document.getElementById('hub-paragraph');
            if (headingEl) headingEl.textContent = hubSection[0].heading;
            if (paragraphEl) paragraphEl.textContent = hubSection[0].paragraph;
        }
        const { data: collections, error: collectionsError } = await hubSupabaseClient
            .from('hub_collections').select('*').order('display_order', { ascending: true });
        if (collectionsError) { console.error('Error loading collections:', collectionsError); return; }
        if (collections && collections.length > 0) {
            hubCollections = collections;
            await loadHubCollectionProducts();
            renderHubTabs();
            if (hubCollections.length > 0) setActiveHubTab(hubCollections[0].id);
        }
    } catch (error) {
        console.error('Error in loadHubSection:', error);
    }
}

async function loadHubCollectionProducts() {
    for (const collection of hubCollections) {
        const { data: collectionProducts, error: productsError } = await hubSupabaseClient
            .from('hub_collection_products').select('product_id, display_order')
            .eq('collection_id', collection.id).order('display_order', { ascending: true });
        if (productsError) { console.error('Error loading collection products:', productsError); continue; }
        if (!collectionProducts || collectionProducts.length === 0) { hubProducts[collection.id] = []; continue; }
        const productIds = collectionProducts.map(cp => cp.product_id);
        const { data: products, error: productsDetailsError } = await hubSupabaseClient
            .from('products').select('*').in('id', productIds);
        if (productsDetailsError) { console.error('Error loading product details:', productsDetailsError); continue; }
        hubProducts[collection.id] = productIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    }
}

function renderHubTabs() {
    const tabsEl = document.getElementById('hub-tabs');
    if (!tabsEl) return;
    tabsEl.innerHTML = '';
    hubCollections.forEach(collection => {
        const tab = document.createElement('button');
        tab.className = 'hub-tab';
        tab.textContent = collection.title;
        tab.dataset.collectionId = collection.id;
        tab.addEventListener('click', () => setActiveHubTab(collection.id));
        tabsEl.appendChild(tab);
    });
}

function setActiveHubTab(collectionId) {
    activeHubTab = collectionId;
    document.querySelectorAll('.hub-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.collectionId === collectionId);
    });
    renderHubProducts(collectionId);
}

function renderHubProducts(collectionId) {
    const productsScrollEl = document.getElementById('hub-products-scroll');
    if (!productsScrollEl) return;
    productsScrollEl.innerHTML = '';
    const products = hubProducts[collectionId] || [];
    if (products.length === 0) {
        productsScrollEl.innerHTML = '<p style="padding: 2rem; color: var(--text-muted);">No products available</p>';
        return;
    }
    products.forEach(product => productsScrollEl.appendChild(createHubProductCard(product)));
    observeLazyImages(productsScrollEl);
    let loadingBar = document.querySelector('.hub-loading-bar');
    if (!loadingBar) {
        loadingBar = createLoadingBar();
        productsScrollEl.parentElement.appendChild(loadingBar);
        productsScrollEl.addEventListener('scroll', () => updateLoadingBar(productsScrollEl, loadingBar));
    }
}

function createHubProductCard(product) {
    const card = document.createElement('div');
    card.className = 'hub-product-card';
    card.onclick = () => { openProductDetail(product, product.category); };
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'hub-product-image-wrapper';
    const image = document.createElement('img');
    image.className = 'hub-product-image';
    image.dataset.src = img(product.image);
    image.src = SVG_PLACEHOLDER;
    image.alt = product.name || 'Gift Item';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.onerror = function() { this.onerror = null; this.src = SVG_PLACEHOLDER; };
    const badge = document.createElement('div');
    badge.className = 'hub-product-badge featured';
    badge.textContent = 'Featured';
    const cartBtn = document.createElement('button');
    cartBtn.className = 'hub-product-cart-btn';
    cartBtn.dataset.id = product.id;
    cartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    cartBtn.onclick = (e) => { e.stopPropagation(); addToCart(product, product.category, cartBtn); };
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(badge);
    imageWrapper.appendChild(cartBtn);
    const infoDiv = document.createElement('div');
    infoDiv.className = 'hub-product-info';
    const nameDiv = document.createElement('div');
    nameDiv.className = 'hub-product-name';
    nameDiv.textContent = product.name || 'Gift Item';
    const priceDiv = document.createElement('div');
    priceDiv.className = 'hub-product-price';
    priceDiv.textContent = `UGX ${product.price.toLocaleString()}`;
    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(priceDiv);
    card.appendChild(imageWrapper);
    card.appendChild(infoDiv);
    return card;
}

function createLoadingBar() {
    const loadingBar = document.createElement('div');
    loadingBar.className = 'hub-loading-bar';
    const loadingBarFill = document.createElement('div');
    loadingBarFill.className = 'hub-loading-bar-fill';
    loadingBar.appendChild(loadingBarFill);
    return loadingBar;
}

function updateLoadingBar(scrollContainer, loadingBar) {
    const loadingBarFill = loadingBar.querySelector('.hub-loading-bar-fill');
    if (!loadingBarFill) return;
    const scrollLeft = scrollContainer.scrollLeft;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    if (scrollWidth <= clientWidth) { loadingBarFill.style.width = '100%'; return; }
    const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    loadingBarFill.style.width = `${Math.min(scrollPercentage, 100)}%`;
}

/* ============================================================
   CART
   ============================================================ */
function addToCart(product, category, clickedBtn = null) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) { existing.qty += 1; }
    else { cart.push({ ...product, category, qty: 1 }); }
    updateCartUI();
    showToast(`${product.name} added to cart`, 'success');
    const btn = clickedBtn || document.querySelector(`[data-id="${product.id}"]`);
    if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => { btn.innerHTML = orig; }, 800);
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = count;
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty.</p>
            </div>`;
        cartTotal.textContent = 'UGX 0';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        html += `
            <div class="cart-item">
                <div class="ci-img">
                    ${item.image ? `<img src="${img(item.image)}" alt="${item.name}" loading="lazy" decoding="async" />` : `<i class="fas ${item.icon}"></i>`}
                </div>
                <div class="ci-info">
                    <h4>${item.name}</h4>
                    <div class="ci-price">UGX ${itemTotal.toLocaleString()}</div>
                    <div class="qty-controls">
                        <button class="qty-minus" data-id="${item.id}">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <span class="ci-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></span>
            </div>`;
    });
    cartItems.innerHTML = html;
    cartTotal.textContent = `UGX ${total.toLocaleString()}`;
    cartItems.querySelectorAll('.ci-remove').forEach(el => {
        el.addEventListener('click', function() { removeFromCart(this.dataset.id); });
    });
    cartItems.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = cart.find(i => i.id === this.dataset.id);
            if (item && item.qty > 1) { item.qty--; updateCartUI(); }
            else { removeFromCart(this.dataset.id); }
        });
    });
    cartItems.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = cart.find(i => i.id === this.dataset.id);
            if (item) { item.qty++; updateCartUI(); }
        });
    });
}

/* ============================================================
   CART SIDEBAR TOGGLE
   ============================================================ */
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
}

/* ============================================================
   DELIVERY ZONE FUNCTIONS
   ============================================================ */
function getDeliveryFee(zone) {
    return DELIVERY_ZONES[zone]?.fee || 0;
}

function getZoneAreas(zone) {
    return DELIVERY_ZONES[zone]?.areas || [];
}

function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const zone = deliveryZone.value;
    const fee = getDeliveryFee(zone);
    const total = subtotal + fee;
    checkoutSubtotal.textContent = `UGX ${subtotal.toLocaleString()}`;
    deliveryFee.textContent = `UGX ${fee.toLocaleString()}`;
    checkoutTotal.textContent = `UGX ${total.toLocaleString()}`;
}

/* ============================================================
   ORDER CODE GENERATION
   ============================================================ */
function generateOrderCode() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    const code = String(timestamp).slice(-5) + String(random).padStart(4, '0');
    return code.slice(0, 5);
}

/* ============================================================
   SEARCH FUNCTIONALITY
   ============================================================ */
function performSearch(query) {
    const trimmed = query.trim().toLowerCase();
    if (trimmed === '') {
        searchResultsSection.classList.remove('active');
        hideOnSearch.forEach(el => el.classList.remove('searching'));
        clearSearch.classList.remove('visible');
        return;
    }
    clearSearch.classList.add('visible');
    let allProducts = [];
    for (const [cat, items] of Object.entries(PRODUCTS)) {
        items.forEach(p => {
            allProducts.push({ ...p, category: cat, categoryName: cat.charAt(0).toUpperCase() + cat.slice(1) });
        });
    }
    const results = allProducts.filter(p =>
        p.name.toLowerCase().includes(trimmed) ||
        p.sub.toLowerCase().includes(trimmed) ||
        p.categoryName.toLowerCase().includes(trimmed)
    );
    searchResultsSection.classList.add('active');
    hideOnSearch.forEach(el => el.classList.add('searching'));
    searchResultsSection.scrollIntoView({ behavior: 'instant', block: 'start' });
    if (results.length === 0) {
        searchResultsGrid.innerHTML = `
            <div class="no-results" style="grid-column:1/-1;">
                <i class="fas fa-search"></i>
                <p>No products found for "<strong>${query}</strong>"</p>
            </div>`;
    } else {
        searchResultsGrid.innerHTML = results.map(p => `
            <div class="product-card">
                <div class="img-wrap">
                    ${p.image ? `<img data-src="${img(p.image)}" src="${SVG_PLACEHOLDER}" alt="${p.name}" loading="lazy" decoding="async" />` : `<i class="fas ${p.icon}"></i>`}
                </div>
                <div class="info">
                    <h4>${p.name}</h4>
                    <div class="price">UGX ${p.price.toLocaleString()}</div>
                    <div class="desc">${p.categoryName} &middot; ${p.sub.replace('-',' ')}</div>
                    <button class="btn btn-sm" data-id="${p.id}" data-cat="${p.category}">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>`).join('');
        observeLazyImages(searchResultsGrid);
        searchResultsGrid.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.closest('.btn')) return;
                const btn = card.querySelector('.btn');
                if (btn) {
                    const id = btn.dataset.id;
                    const cat = btn.dataset.cat;
                    const product = PRODUCTS[cat].find(p => p.id === id);
                    if (product) openProductDetail(product, cat);
                }
            });
        });
        searchResultsGrid.querySelectorAll('.product-card .btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = this.dataset.id;
                const cat = this.dataset.cat;
                const product = PRODUCTS[cat].find(p => p.id === id);
                if (product) addToCart(product, cat, this);
            });
        });
    }
}

function openMobileSearch() {
    if (window.innerWidth <= 820) {
        searchWrap.classList.add('open');
        searchInput.focus();
        document.body.classList.add('search-focused');
        clearSearch.classList.add('visible');
    }
}

function closeMobileSearch() {
    if (window.innerWidth <= 820) {
        searchWrap.classList.remove('open');
        document.body.classList.remove('search-focused');
        clearSearch.classList.remove('visible');
    }
}

/* ============================================================
   HAMBURGER (mobile nav)
   ============================================================ */
function closeMobileNav() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    body.classList.remove('nav-open');
    const icon = hamburger.querySelector('i');
    if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
}

function openMobileNav() {
    navLinks.classList.add('open');
    hamburger.classList.add('open');
    body.classList.add('nav-open');
    const icon = hamburger.querySelector('i');
    if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-times'); }
}

/* ============================================================
   HERO BACKGROUND SLIDESHOW
   ============================================================ */
function startHeroSlideshow() {
    if (heroSlides.length === 0) return;
    heroSlides[0].classList.add('active');
    setInterval(() => {
        heroSlides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
        heroSlides[currentSlideIndex].classList.add('active');
    }, 3000);
}

/* ============================================================
   SCROLL SPY
   ============================================================ */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + 150;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) link.classList.add('active');
    });
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openLightbox(imageSrc) {
    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { if (lightboxImage) lightboxImage.src = ''; }, 300);
    }
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */
function openProductDetail(product, category) {
    if (!detailModal) return;
    currentDetailProduct = { ...product, category };
    detailImage.src = img(product.image);
    detailImage.alt = product.name || 'Gift Item';
    detailName.textContent = product.name || 'Gift Item';
    detailSub.textContent = product.sub.replace('-', ' ');
    detailPrice.textContent = `UGX ${product.price.toLocaleString()}`;
    trackRecentlyViewed(product, category);
    const shareText = encodeURIComponent(`Check out ${product.name || 'this item'} on Nexdo Shop! UGX ${product.price.toLocaleString()}`);
    const shareUrl = encodeURIComponent(window.location.href);
    const shareBtns = detailModal.querySelector('.share-buttons');
    if (shareBtns) {
        shareBtns.innerHTML = `
            <a href="https://wa.me/256706538815?text=${shareText}" target="_blank" class="share-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" class="share-facebook"><i class="fab fa-facebook-f"></i> Facebook</a>
            <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" class="share-twitter"><i class="fab fa-twitter"></i> Twitter</a>
        `;
    }
    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
    if (detailModal) {
        detailModal.classList.remove('active');
        document.body.style.overflow = '';
        currentDetailProduct = null;
    }
}

/* ============================================================
   BOOT
   ============================================================ */
function boot() {
    grids = {
        flowers: document.getElementById('grid-flowers'),
        giftboxes: document.getElementById('grid-giftboxes'),
        perfumes: document.getElementById('grid-perfumes'),
        gadgets: document.getElementById('grid-gadgets'),
        cakes: document.getElementById('grid-cakes'),
        branded: document.getElementById('grid-branded'),
        wines: document.getElementById('grid-wines'),
    };
    cartCount = document.getElementById('cartCount');
    cartItems = document.getElementById('cartItems');
    cartTotal = document.getElementById('cartTotal');
    cartSidebar = document.getElementById('cartSidebar');
    cartOverlay = document.getElementById('cartOverlay');
    cartIcon = document.getElementById('cartIcon');
    cartClose = document.getElementById('cartClose');
    checkoutBtn = document.getElementById('checkoutBtn');
    checkoutModal = document.getElementById('checkoutModal');
    cancelCheckout = document.getElementById('cancelCheckout');
    checkoutForm = document.getElementById('checkoutForm');
    deliveryDate = document.getElementById('deliveryDate');
    deliveryInfo = document.getElementById('deliveryInfo');
    deliveryZone = document.getElementById('deliveryZone');
    deliveryArea = document.getElementById('deliveryArea');
    zoneDetails = document.getElementById('zoneDetails');
    zoneInfo = document.getElementById('zoneInfo');
    deliveryPlace = document.getElementById('deliveryPlace');
    deliveryTime = document.getElementById('deliveryTime');
    checkoutSubtotal = document.getElementById('checkoutSubtotal');
    deliveryFee = document.getElementById('deliveryFee');
    checkoutTotal = document.getElementById('checkoutTotal');
    hamburger = document.getElementById('hamburger');
    navLinks = document.getElementById('navLinks');
    body = document.body;
    searchInput = document.getElementById('searchInput');
    searchWrap = document.getElementById('searchWrap');
    searchToggle = document.getElementById('searchToggle');
    clearSearch = document.getElementById('clearSearch');
    searchResultsSection = document.getElementById('searchResultsSection');
    searchResultsGrid = document.getElementById('searchResultsGrid');
    hideOnSearch = document.querySelectorAll('.hide-when-search');
    lightbox = document.getElementById('lightbox');
    lightboxImage = document.getElementById('lightboxImage');
    lightboxClose = document.getElementById('lightboxClose');
    detailModal = document.getElementById('productDetailModal');
    detailImage = document.getElementById('detailImage');
    detailName = document.getElementById('detailName');
    detailSub = document.getElementById('detailSub');
    detailPrice = document.getElementById('detailPrice');
    detailAddToCart = document.getElementById('detailAddToCart');
    detailClose = document.getElementById('productDetailClose');
    heroSlides = document.querySelectorAll('.hero-slide');
    currentSlideIndex = 0;

    /* Tab setup */
    document.querySelectorAll('.subcategory-tabs').forEach(tabContainer => {
        const category = tabContainer.dataset.category;
        const buttons = tabContainer.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                buttons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderProducts(category, this.dataset.sub);
            });
        });
    });

    /* Cart sidebar toggle */
    cartIcon.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    /* Checkout modal */
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) { alert('Your cart is empty. Add some items first.'); return; }
        const now = new Date();
        const currentHour = now.getHours();
        const cutoffHour = 18;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        function formatDateLocal(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        if (currentHour < cutoffHour) {
            deliveryDate.value = formatDateLocal(today);
            deliveryDate.min = formatDateLocal(today);
        } else {
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            deliveryDate.value = formatDateLocal(tomorrow);
            deliveryDate.min = formatDateLocal(tomorrow);
        }
        if (currentHour < cutoffHour && currentHour < 9) {
            deliveryTime.value = '09:00';
        } else if (currentHour < cutoffHour) {
            const suggestedHour = Math.min(currentHour + 2, 19);
            deliveryTime.value = `${suggestedHour.toString().padStart(2, '0')}:00`;
        } else {
            deliveryTime.value = '10:00';
        }
        deliveryZone.value = '';
        deliveryArea.value = '';
        deliveryArea.disabled = true;
        zoneDetails.style.display = 'none';
        updateCheckoutSummary();
        if (currentHour < cutoffHour) {
            deliveryInfo.textContent = 'Same-day delivery available! Order before 6pm for delivery today.';
            deliveryInfo.style.color = '#10b981';
        } else {
            deliveryInfo.textContent = 'Next-day delivery available. Orders placed after 6pm will be delivered tomorrow.';
            deliveryInfo.style.color = '#f59e0b';
        }
        checkoutModal.classList.add('open');
    });

    deliveryZone.addEventListener('change', function() {
        const zone = this.value;
        const areas = getZoneAreas(zone);
        deliveryArea.innerHTML = '<option value="">Select specific area</option>';
        areas.forEach(area => {
            const option = document.createElement('option');
            option.value = area;
            option.textContent = area;
            deliveryArea.appendChild(option);
        });
        deliveryArea.disabled = false;
        if (DELIVERY_ZONES[zone]) {
            zoneInfo.textContent = `Areas in ${DELIVERY_ZONES[zone].name}: ${areas.join(', ')}`;
            zoneDetails.style.display = 'block';
        } else {
            zoneDetails.style.display = 'none';
        }
        updateCheckoutSummary();
    });

    deliveryArea.addEventListener('change', updateCheckoutSummary);
    cancelCheckout.addEventListener('click', function() { checkoutModal.classList.remove('open'); });
    checkoutModal.addEventListener('click', function(e) { if (e.target === this) checkoutModal.classList.remove('open'); });

    /* Submit order -> WhatsApp */
    checkoutForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const date = deliveryDate.value;
        const zone = deliveryZone.value;
        const area = deliveryArea.value;
        const place = deliveryPlace.value.trim();
        const time = deliveryTime.value;
        if (!date || !zone || !area || !place || !time) {
            alert('Please fill in all delivery details.');
            return;
        }
        const [h, m] = time.split(':').map(Number);
        if (h < 9 || h > 19 || (h === 19 && m > 0)) {
            alert('Delivery time must be between 9:00 am and 7:00 pm.');
            return;
        }
        const zoneName = DELIVERY_ZONES[zone]?.name || zone;
        const deliveryFeeAmount = getDeliveryFee(zone);
        const orderCode = generateOrderCode();
        let subtotal = 0;
        const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
        const processedItems = [];
        for (const item of cart) {
            const sub = item.price * item.qty;
            subtotal += sub;
            let imageUrl = item.image;
            if (imageUrl && !imageUrl.startsWith('http')) {
                imageUrl = `${SUPABASE_URL}/storage/v1/object/public/product-images/${imageUrl}`;
            }
            processedItems.push({ ...item, imageUrl: imageUrl });
        }
        const total = subtotal + deliveryFeeAmount;
        const orderData = {
            order_code: orderCode, order_date: new Date().toISOString(),
            delivery_date: date, delivery_time: time,
            delivery_zone: zoneName, delivery_area: area, delivery_place: place,
            items: processedItems, subtotal: subtotal, delivery_fee: deliveryFeeAmount, total: total
        };
        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json', 'Prefer': 'return=representation'
                },
                body: JSON.stringify(orderData)
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error saving order to Supabase:', errorData);
                alert('Error saving order. Please try again.');
                return;
            }
            const data = await response.json();
            console.log('Order saved to Supabase:', data);
        } catch (error) {
            console.error('Error saving order:', error);
            alert('Error saving order. Please try again.');
            return;
        }
        const orderPageUrl = `${window.location.origin}/order.html?code=${orderCode}`;
        let summary = 'New Order from Nexdo Shop\n\n';
        summary += `Order ID #${orderCode}\n`;
        summary += `Items: ${itemCount}\n`;
        summary += `Date: ${date}\n\n`;
        summary += `View your order here:\n${orderPageUrl}\n\n`;
        summary += 'Thank You! We will confirm your delivery shortly.';
        const phone = '256706538815';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(summary)}`;
        checkoutModal.classList.remove('open');
        closeCart();
        cart = [];
        updateCartUI();
        window.open(url, '_blank');
    });

    /* Search event listeners */
    searchInput.addEventListener('input', function() { performSearch(this.value); });
    searchInput.addEventListener('focus', function() {
        document.body.classList.add('search-focused');
        clearSearch.classList.add('visible');
        if (window.innerWidth <= 820) searchWrap.classList.add('open');
    });
    searchInput.addEventListener('blur', function() {
        if (window.innerWidth <= 820 && this.value.trim() === '') { closeMobileSearch(); }
        else { document.body.classList.remove('search-focused'); clearSearch.classList.remove('visible'); }
    });
    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (searchWrap.classList.contains('open')) { closeMobileSearch(); }
        else { openMobileSearch(); }
    });
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        performSearch('');
        document.body.classList.remove('search-focused');
        clearSearch.classList.remove('visible');
        if (window.innerWidth <= 820) { closeMobileSearch(); }
        else { searchInput.focus(); }
    });
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 820 && searchWrap.classList.contains('open') && !searchWrap.contains(e.target)) {
            closeMobileSearch();
        }
    });

    /* Hamburger event listeners */
    hamburger.addEventListener('click', function() {
        if (navLinks.classList.contains('open')) { closeMobileNav(); }
        else { openMobileNav(); }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            closeMobileNav();
            navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    /* Lightbox event listeners */
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });
    }

    /* Detail modal event listeners */
    if (detailClose) detailClose.addEventListener('click', closeProductDetail);
    if (detailModal) {
        detailModal.addEventListener('click', function(e) { if (e.target === detailModal) closeProductDetail(); });
    }
    if (detailAddToCart) {
        detailAddToCart.addEventListener('click', function() {
            if (currentDetailProduct) {
                addToCart(currentDetailProduct, currentDetailProduct.category, null);
                closeProductDetail();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (lightbox && lightbox.classList.contains('active')) closeLightbox();
            if (detailModal && detailModal.classList.contains('active')) closeProductDetail();
        }
    });

    /* Delivery date setup */
    const tomorrow2 = new Date();
    tomorrow2.setDate(tomorrow2.getDate() + 1);
    deliveryDate.min = tomorrow2.toISOString().split('T')[0];

    /* Scroll spy */
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();

    /* New DOM refs */
    wishlistIcon = document.getElementById('wishlistIcon');
    wishlistCount = document.getElementById('wishlistCount');
    wishlistSidebar = document.getElementById('wishlistSidebar');
    wishlistItems = document.getElementById('wishlistItems');
    wishlistClose = document.getElementById('wishlistClose');
    wishlistOverlay = document.getElementById('wishlistOverlay');
    darkModeToggle = document.getElementById('darkModeToggle');
    recentlyViewedSection = document.getElementById('recentlyViewedSection');
    recentlyViewedScroll = document.getElementById('recentlyViewedScroll');

    /* Create wishlist sidebar if not in DOM */
    if (!wishlistSidebar) {
        wishlistOverlay = document.createElement('div');
        wishlistOverlay.className = 'wishlist-overlay';
        document.body.appendChild(wishlistOverlay);
        wishlistSidebar = document.createElement('div');
        wishlistSidebar.className = 'wishlist-sidebar';
        wishlistSidebar.id = 'wishlistSidebar';
        wishlistSidebar.innerHTML = '<div class="wishlist-sidebar-header"><h3>Wishlist</h3><button id="wishlistClose" style="background:none;border:none;font-size:1.2rem;cursor:pointer;"><i class="fas fa-times"></i></button></div><div class="wishlist-sidebar-body" id="wishlistItems"></div>';
        document.body.appendChild(wishlistSidebar);
        wishlistItems = document.getElementById('wishlistItems');
        wishlistClose = document.getElementById('wishlistClose');
    }

    /* Create recently viewed section if not in DOM */
    if (!recentlyViewedSection) {
        const rvSection = document.createElement('section');
        rvSection.className = 'recently-viewed-section';
        rvSection.id = 'recentlyViewedSection';
        rvSection.innerHTML = '<div class="container"><h2 class="section-title">Recently Viewed</h2><div class="recently-viewed-scroll" id="recentlyViewedScroll"></div></div>';
        const footer = document.querySelector('footer');
        if (footer) footer.parentNode.insertBefore(rvSection, footer);
        else document.body.appendChild(rvSection);
        recentlyViewedSection = document.getElementById('recentlyViewedSection');
        recentlyViewedScroll = document.getElementById('recentlyViewedScroll');
    }

    /* Create dark mode toggle if not in DOM */
    if (!darkModeToggle) {
        darkModeToggle = document.createElement('button');
        darkModeToggle.id = 'darkModeToggle';
        darkModeToggle.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:999;background:var(--bg-card,#fff);border:1px solid var(--border,#ddd);border-radius:50%;width:44px;height:44px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.15);';
        document.body.appendChild(darkModeToggle);
    }

    /* Dark mode */
    initDarkMode();
    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);

    /* Wishlist sidebar toggle */
    if (wishlistIcon) {
        wishlistIcon.addEventListener('click', function() {
            renderWishlistSidebar();
            wishlistSidebar.classList.toggle('open');
            wishlistOverlay.classList.toggle('open');
        });
    }
    if (wishlistClose) {
        wishlistClose.addEventListener('click', function() {
            wishlistSidebar.classList.remove('open');
            wishlistOverlay.classList.remove('open');
        });
    }
    if (wishlistOverlay) {
        wishlistOverlay.addEventListener('click', function() {
            wishlistSidebar.classList.remove('open');
            wishlistOverlay.classList.remove('open');
        });
    }

    /* Sort dropdowns */
    function getCurrentSub(category) {
        const activeTab = document.querySelector('.subcategory-tabs[data-category="' + category + '"] button.active');
        return activeTab ? activeTab.dataset.sub : 'all';
    }
    document.querySelectorAll('.sort-select').forEach(select => {
        const category = select.dataset.category;
        if (category) {
            select.addEventListener('change', function() {
                sortState[category] = this.value;
                visibleProducts[category + '-' + getCurrentSub(category)] = undefined;
                renderProducts(category, getCurrentSub(category));
            });
        }
    });

    /* Recently viewed */
    renderRecentlyViewed();

    /* Init */
    loadProducts();
    startHeroSlideshow();
    initHubSection();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}

console.log('Nexdo Events loaded successfully.');
