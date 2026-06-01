/* KRMU Bites — Application Logic */

const IMG1 = "assets/img1.jpg";
const IMG2 = "assets/img2.jpg";
const IMG3 = "assets/img3.jpg";
const IMG4 = "assets/img4.jpg";

// ── Storage ──
const storage = {
  get: (k) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch(e){ return null; }},
  set: (k,v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){}}
};

// ── Default Menu ──
const DEFAULT_MENU = [
  // A Block
  {id:'a1',name:'Veg Thali',emoji:'🍱',price:70,canteen:'A Block Canteen',category:'Meals',desc:'Rice, dal, sabzi, roti & pickle',type:'veg',available:true},
  {id:'a2',name:'Aloo Paratha',emoji:'🫓',price:40,canteen:'A Block Canteen',category:'Snacks',desc:'Crispy stuffed paratha with curd & pickle',type:'veg',available:true},
  {id:'a3',name:'Samosa (2 pcs)',emoji:'🔺',price:15,canteen:'A Block Canteen',category:'Snacks',desc:'Hot & crispy with green chutney',type:'veg',available:true},
  {id:'a4',name:'Masala Chai',emoji:'☕',price:12,canteen:'A Block Canteen',category:'Beverages',desc:'Ginger & cardamom spiced tea',type:'veg',available:true},
  {id:'a5',name:'Dal Makhani + Rice',emoji:'🫕',price:65,canteen:'A Block Canteen',category:'Meals',desc:'Creamy black dal with basmati rice',type:'veg',available:true},
  {id:'a6',name:'Cold Drink',emoji:'🥤',price:30,canteen:'A Block Canteen',category:'Beverages',desc:'Pepsi / Sprite / 7Up (300ml)',type:'veg',available:true},
  // B Block - Basil
  {id:'b1',name:'Veg Burger',emoji:'🍔',price:80,canteen:'B Block – Basil',category:'Snacks',desc:'Crispy patty, lettuce, cheese & special sauce',type:'veg',available:true},
  {id:'b2',name:'Club Sandwich',emoji:'🥪',price:90,canteen:'B Block – Basil',category:'Snacks',desc:'Triple-decker with cheese & veggies',type:'veg',available:true},
  {id:'b3',name:'French Fries',emoji:'🍟',price:55,canteen:'B Block – Basil',category:'Snacks',desc:'Crispy golden fries with dip',type:'veg',available:true},
  {id:'b4',name:'Cold Coffee',emoji:'🧋',price:65,canteen:'B Block – Basil',category:'Beverages',desc:'Rich blended coffee with ice cream',type:'veg',available:true},
  {id:'b5',name:'Penne Pasta',emoji:'🍝',price:100,canteen:'B Block – Basil',category:'Meals',desc:'Arrabbiata or Alfredo sauce, your choice',type:'veg',available:true},
  {id:'b6',name:'Veg Pizza',emoji:'🍕',price:120,canteen:'B Block – Basil',category:'Meals',desc:'Personal size, loaded with veggies',type:'veg',available:true},
  // B Block - Nescafe
  {id:'n1',name:'Cappuccino',emoji:'☕',price:80,canteen:'B Block – Nescafé',category:'Beverages',desc:'Classic espresso with steamed milk foam',type:'veg',available:true},
  {id:'n2',name:'Café Latte',emoji:'🥛',price:90,canteen:'B Block – Nescafé',category:'Beverages',desc:'Smooth espresso with velvety steamed milk',type:'veg',available:true},
  {id:'n3',name:'Hot Chocolate',emoji:'🍫',price:85,canteen:'B Block – Nescafé',category:'Beverages',desc:'Rich & creamy cocoa delight',type:'veg',available:true},
  {id:'n4',name:'Croissant',emoji:'🥐',price:60,canteen:'B Block – Nescafé',category:'Snacks',desc:'Flaky butter croissant, freshly baked',type:'veg',available:true},
  // C Block - CCD
  {id:'c1',name:'CCD Latte',emoji:'☕',price:130,canteen:'C Block – CCD',category:'Beverages',desc:'Café Coffee Day signature latte',type:'veg',available:true},
  {id:'c2',name:'Cold Coffee Blast',emoji:'🧊',price:145,canteen:'C Block – CCD',category:'Beverages',desc:'Chilled coffee frappe with whipped cream',type:'veg',available:true},
  {id:'c3',name:'Chocolate Muffin',emoji:'🧁',price:90,canteen:'C Block – CCD',category:'Desserts',desc:'Moist, rich chocolate chunk muffin',type:'veg',available:true},
  {id:'c4',name:'Brownie',emoji:'🍫',price:95,canteen:'C Block – CCD',category:'Desserts',desc:'Warm fudgy brownie, best with coffee',type:'veg',available:true},
  // C Block - Main Canteen
  {id:'m1',name:'Chicken Biryani',emoji:'🍛',price:85,canteen:'C Block – Main Canteen',category:'Meals',desc:'Fragrant basmati with tender chicken',type:'nonveg',available:true},
  {id:'m2',name:'Paneer Tikka',emoji:'🧀',price:110,canteen:'C Block – Main Canteen',category:'Meals',desc:'Chargrilled cottage cheese, mint chutney',type:'veg',available:true},
  {id:'m3',name:'Masala Dosa',emoji:'🫔',price:50,canteen:'C Block – Main Canteen',category:'Meals',desc:'Crispy dosa with potato masala & sambar',type:'veg',available:true},
  {id:'m4',name:'Idli Sambar',emoji:'⬜',price:35,canteen:'C Block – Main Canteen',category:'Meals',desc:'Soft idlis with hot sambar & chutney',type:'veg',available:true},
  {id:'m5',name:'Mango Lassi',emoji:'🥭',price:45,canteen:'C Block – Main Canteen',category:'Beverages',desc:'Thick fresh mango yoghurt drink',type:'veg',available:true},
  {id:'m6',name:'Egg Curry + Rice',emoji:'🍳',price:75,canteen:'C Block – Main Canteen',category:'Meals',desc:'Homestyle egg curry with steamed rice',type:'nonveg',available:true},
];

const CANTEENS = [
  {id:'all',name:'All Canteens',icon:'🏫',block:'All'},
  {id:'a',name:'A Block Canteen',icon:'🍛',block:'A Block'},
  {id:'b-basil',name:'Basil Café',icon:'🍔',block:'B Block'},
  {id:'b-nescafe',name:'Nescafé',icon:'☕',block:'B Block'},
  {id:'c-ccd',name:'CCD',icon:'🧋',block:'C Block'},
  {id:'c-main',name:'Main Canteen',icon:'🍽️',block:'C Block'},
];

const CATEGORIES = ['All','Meals','Snacks','Beverages','Desserts'];

const CANTEEN_MAP = {
  'A Block Canteen':'a',
  'B Block – Basil':'b-basil',
  'B Block – Nescafé':'b-nescafe',
  'C Block – CCD':'c-ccd',
  'C Block – Main Canteen':'c-main',
};

// ── App State ──
let state = {
  view: 'student', // 'student' | 'manager' | 'login'
  menu: storage.get('krmu-menu') || DEFAULT_MENU,
  orders: storage.get('krmu-orders') || [],
  cart: [],
  cartOpen: false,
  orderModal: null,
  mgrTab: 'menu', // 'menu' | 'orders'
  activeCanteen: 'all',
  activeCategory: 'All',
  search: '',
};

function saveMenu(){ storage.set('krmu-menu', state.menu); }
function saveOrders(){ storage.set('krmu-orders', state.orders); }

// ── Toast ──
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'),3000);
}

// ── Render ──
function render(){
  const app = document.getElementById('app');
  if(state.view === 'login'){ app.innerHTML = renderLogin(); bindLogin(); return; }
  if(state.view === 'manager'){ app.innerHTML = renderManager(); bindManager(); return; }
  app.innerHTML = renderStudent();
  bindStudent();
  initParallax();
  initReveal();
}

// ────────────────────────────────
// STUDENT VIEW
// ────────────────────────────────
function renderStudent(){
  const filteredItems = getFilteredItems();
  return `
  <nav id="mainNav">
    <div class="nav-logo">KRMU BITES<span>KR Mangalam University</span></div>
    <div class="nav-actions">
      <button class="btn btn-ghost btn-sm" onclick="goManager()">🔐 Manager</button>
      <button class="cart-btn" onclick="toggleCart()">
        🛒 Cart
        ${state.cart.length > 0 ? `<span class="cart-badge">${state.cart.reduce((a,c)=>a+c.qty,0)}</span>` : ''}
      </button>
    </div>
  </nav>

  <!-- HERO -->
  <div class="hero" id="hero">
    <div class="hero-bg" id="heroBg" style="background-image:url('${IMG1}')"></div>
    <div class="hero-overlay"></div>
    <div class="particles" id="particles"></div>
    <div class="hero-content">
      <div class="hero-tag">🟢 Canteen System Live — Sohna Road Campus</div>
      <h1 class="hero-title">
        <span class="line1">Skip The Queue.</span>
        <span class="line2">Order Smart.</span>
      </h1>
      <p class="hero-sub">Pre-order from all 5 KRMU canteens — A Block, Basil, Nescafé, CCD & C Block Main — and pick up when it's ready.</p>
      <div class="hero-btns">
        <button class="btn btn-gold" onclick="scrollToMenu()">🍽️ Browse Menu</button>
        <button class="btn btn-ghost" onclick="scrollToCanteens()">🏫 View Canteens</button>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><div class="num" data-count="5">0</div><div class="label">Canteens</div></div>
        <div class="hero-stat"><div class="num" data-count="${state.menu.length}">0</div><div class="label">Menu Items</div></div>
        <div class="hero-stat"><div class="num" data-count="${state.orders.length}">0</div><div class="label">Orders Placed</div></div>
      </div>
    </div>
    <div class="hero-img-stack">
      <div class="si"><img src="${IMG2}" alt="Campus"/></div>
      <div class="si"><img src="${IMG3}" alt="Rotunda"/></div>
      <div class="si"><img src="${IMG4}" alt="Corridor"/></div>
    </div>
  </div>

  <!-- CANTEENS -->
  <section id="canteensSection">
    <div class="reveal">
      <div class="section-label">📍 On Campus</div>
      <h2 class="section-title">Choose Your Canteen</h2>
      <p class="section-sub">We have 5 food outlets spread across blocks A, B and C — each with their own specialities.</p>
      <div class="divider"></div>
    </div>
    <div class="canteen-grid reveal">
      ${CANTEENS.map(c=>{
        const items = c.id==='all' ? state.menu : state.menu.filter(m=>CANTEEN_MAP[m.canteen]===c.id);
        const avail = items.filter(m=>m.available).length;
        return `<div class="canteen-card ${state.activeCanteen===c.id?'active':''}" onclick="selectCanteen('${c.id}'); scrollToMenu()">
          <div class="cc-icon">${c.icon}</div>
          <div class="cc-block">${c.block}</div>
          <div class="cc-name">${c.name}</div>
          <div class="cc-count">${avail} items available</div>
          <div class="cc-status open">Open Now</div>
        </div>`;
      }).join('')}
    </div>
  </section>

  <!-- PARALLAX BANNER -->
  <div class="parallax-banner" style="background-image:url('${IMG3}')">
    <div class="pb-overlay">
      <h2 class="pb-title">Order. Track. Pickup.</h2>
      <p class="pb-sub">Real-time status from kitchen to your hands</p>
    </div>
  </div>

  <!-- MENU -->
  <div class="menu-wrap" id="menuSection">
    <div class="menu-inner">
      <div class="reveal">
        <div class="section-label">🍽️ Today's Menu</div>
        <h2 class="section-title">What's Cooking</h2>
        <div class="divider"></div>
      </div>
      <div class="filter-bar reveal">
        ${CATEGORIES.map(c=>`<button class="filter-pill ${state.activeCategory===c?'active':''}" onclick="setCategory('${c}')">${c}</button>`).join('')}
        <input class="search-box" type="text" placeholder="🔍 Search items..." value="${state.search}" oninput="setSearch(this.value)">
      </div>
      <div class="menu-grid" id="menuGrid">
        ${filteredItems.length > 0 ? filteredItems.map(renderMenuItem).join('') : `
          <div class="no-results" style="grid-column:1/-1">
            <span class="nr-icon">🔍</span>
            <p>No items found</p>
            <small>Try a different filter or canteen</small>
          </div>`}
      </div>
    </div>
  </div>

  <!-- HOW IT WORKS -->
  <section style="max-width:1200px;margin:0 auto;padding:80px 32px" class="bg-section" id="howSection">
    <div class="reveal" style="text-align:center;max-width:600px;margin:0 auto 60px">
      <div class="section-label">✨ Simple & Fast</div>
      <h2 class="section-title">How KRMU Bites Works</h2>
      <div class="divider" style="margin:0 auto 0"></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:24px" class="reveal">
      ${[
        {n:'01',icon:'🔐',t:'Login Securely',d:'Use your KR Mangalam student ID to access the platform exclusively.'},
        {n:'02',icon:'🍽️',t:'Browse & Add',d:'Explore 5 canteens, pick your favourites, add them to your cart.'},
        {n:'03',icon:'💳',t:'Pay Online',d:'Checkout securely — UPI, card or wallet. No cash needed.'},
        {n:'04',icon:'📱',t:'Track Live',d:'Watch your order go from Placed → Preparing → Ready in real time.'},
        {n:'05',icon:'🏃',t:'Pick Up',d:'Head to the canteen when notified. No queue, no wait.'},
      ].map(s=>`
        <div class="canteen-card" style="text-align:center;padding:30px 20px">
          <div style="font-family:'Space Mono',monospace;font-size:0.65rem;color:var(--gold);letter-spacing:0.2em;margin-bottom:12px">${s.n}</div>
          <div style="font-size:2.5rem;margin-bottom:12px">${s.icon}</div>
          <div style="font-weight:700;font-size:0.95rem;margin-bottom:8px">${s.t}</div>
          <div style="font-size:0.78rem;color:var(--muted);line-height:1.6">${s.d}</div>
        </div>`).join('')}
    </div>
  </section>

  <!-- CAMPUS GALLERY -->
  <div style="overflow:hidden;padding:60px 0;background:var(--bg)">
    <div style="max-width:1200px;margin:0 auto;padding:0 32px" class="reveal">
      <div class="section-label" style="text-align:center">📸 KR Mangalam University</div>
      <h2 class="section-title" style="text-align:center">Our Campus</h2>
      <div class="divider" style="margin:0 auto 40px"></div>
    </div>
    <div id="galleryTrack" style="display:flex;gap:16px;padding:0 32px;animation:galleryScroll 22s linear infinite;width:max-content">
      ${[IMG1,IMG2,IMG3,IMG4,IMG1,IMG2,IMG3,IMG4].map((img,i)=>`
        <div style="flex-shrink:0;width:340px;height:220px;border-radius:16px;overflow:hidden;border:1px solid var(--border);position:relative;transition:transform 0.4s">
          <img src="${img}" style="width:100%;height:100%;object-fit:cover" alt="KRMU Campus"/>
          <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(6,8,15,0.7));display:flex;align-items:flex-end;padding:14px 16px">
            <span style="font-size:0.72rem;color:rgba(255,255,255,0.7);font-weight:600">${['Academic Block','Campus Greens','Rotunda Lobby','School of Architecture'][i%4]}</span>
          </div>
        </div>`).join('')}
    </div>
    <style>@keyframes galleryScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}</style>
  </div>

  <!-- HAND GESTURE SECTION -->
  <div style="background:linear-gradient(135deg,var(--bg2),var(--bg3));border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:80px 32px">
    <div style="max-width:900px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center" class="reveal">
      <div>
        <div class="section-label">🖐 Innovation Feature</div>
        <h2 class="section-title">Hand Gesture Control</h2>
        <p style="color:var(--muted);line-height:1.8;margin-bottom:24px">Use hand gestures to navigate the menu, add items to cart, or confirm orders — a first-of-its-kind experience on a campus canteen platform.</p>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${[['👆','Point to select item'],['✌️','Double point to add to cart'],['🤚','Open palm to open cart'],['👍','Thumbs up to confirm order']].map(([g,d])=>`
            <div style="display:flex;align-items:center;gap:14px;background:rgba(240,165,0,0.05);border:1px solid var(--border);border-radius:10px;padding:10px 14px">
              <span style="font-size:1.8rem">${g}</span>
              <span style="font-size:0.85rem;color:var(--muted)">${d}</span>
            </div>`).join('')}
        </div>
      </div>
      <div style="position:relative">
        <canvas id="gestureCanvas" width="360" height="320" style="border-radius:16px;border:1px solid var(--border);background:var(--bg);width:100%;max-width:360px;display:block;margin:0 auto"></canvas>
        <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);background:rgba(0,201,167,0.1);border:1px solid rgba(0,201,167,0.25);border-radius:100px;padding:5px 14px;font-size:0.72rem;color:var(--teal);font-weight:600;white-space:nowrap">🟢 Gesture Detection Active</div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer style="background:var(--bg2);border-top:1px solid var(--border);padding:48px 32px;text-align:center">
    <div style="max-width:1200px;margin:0 auto">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:32px;border-radius:16px;overflow:hidden;height:200px">
        ${[IMG1,IMG2,IMG3,IMG4].map(i=>`<img src="${i}" style="width:100%;height:100%;object-fit:cover" alt=""/>`).join('')}
      </div>
      <div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:900;background:linear-gradient(135deg,var(--gold),var(--gold2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px">KRMU BITES</div>
      <p style="color:var(--muted);font-size:0.82rem">KR Mangalam University, Sohna Road, Gurugram, Haryana 122103</p>
      <p style="color:rgba(255,255,255,0.2);font-size:0.7rem;margin-top:24px">© 2025 KR Mangalam University · School of Architecture & Planning · Smart Campus Initiative</p>
    </div>
  </footer>

  <!-- CART SIDEBAR -->
  <div class="cart-overlay ${state.cartOpen?'open':''}" onclick="toggleCart()"></div>
  <div class="cart-panel ${state.cartOpen?'open':''}">
    <div class="cart-header">
      <h3>🛒 Your Cart</h3>
      <button class="close-btn" onclick="toggleCart()">✕</button>
    </div>
    <div class="cart-items">
      ${state.cart.length === 0 ? `<div class="empty-cart"><div class="icon">🛒</div><p>Nothing in your cart yet</p><small style="color:var(--muted)">Browse the menu and add items!</small></div>` :
        state.cart.map(ci=>{
          const item = state.menu.find(m=>m.id===ci.id);
          if(!item) return '';
          return `<div class="cart-item">
            <div class="ci-emoji">${item.emoji}</div>
            <div class="ci-info">
              <div class="ci-name">${item.name}</div>
              <div class="ci-price">₹${item.price} × ${ci.qty} = <b>₹${item.price*ci.qty}</b></div>
              <div class="qty-ctrl" style="margin-top:6px;display:inline-flex">
                <button onclick="updateQty('${ci.id}',-1)">−</button>
                <span>${ci.qty}</span>
                <button onclick="updateQty('${ci.id}',1)">+</button>
              </div>
            </div>
            <button class="ci-remove" onclick="removeFromCart('${ci.id}')" title="Remove">✕</button>
          </div>`;
        }).join('')
      }
    </div>
    ${state.cart.length > 0 ? `
    <div class="cart-footer">
      <div class="cart-total-row"><span>Subtotal</span><span>₹${cartSubtotal()}</span></div>
      <div class="cart-total-row"><span>Platform fee</span><span>₹5</span></div>
      <div class="cart-total"><span class="label">Total</span><span class="amount">₹${cartSubtotal()+5}</span></div>
      <input class="sid-input" id="studentId" type="text" placeholder="Enter Student ID (e.g. KRM2022001)" maxlength="20">
      <select class="canteen-select" id="pickupCanteen">
        <option value="">— Select Pickup Canteen —</option>
        ${[...new Set(state.cart.map(ci=>{const m=state.menu.find(x=>x.id===ci.id);return m?m.canteen:'';}).filter(Boolean))].map(c=>`<option value="${c}">${c}</option>`).join('')}
      </select>
      <button class="btn btn-gold" style="width:100%;padding:13px" onclick="placeOrder()">🍽️ Place Order</button>
    </div>` : ''}
  </div>

  <!-- ORDER MODAL -->
  ${state.orderModal ? renderOrderModal(state.orderModal) : ''}
  `;
}

function renderMenuItem(item){
  const cartItem = state.cart.find(c=>c.id===item.id);
  return `<div class="menu-item ${item.available?'':'unavailable'}" style="animation:fadeInUp 0.5s ease both">
    <div class="mi-img">
      <span>${item.emoji}</span>
      <span class="mi-badge ${item.type}">${item.type==='veg'?'🟢 Veg':'🔴 Non-veg'}</span>
    </div>
    <div class="mi-body">
      <div class="mi-canteen">${item.canteen}</div>
      <div class="mi-name">${item.name}</div>
      <div class="mi-desc">${item.desc}</div>
      <div class="mi-footer">
        <div class="mi-price">₹${item.price}</div>
        ${!item.available ? '<span class="unavail-chip">Unavailable</span>' :
          cartItem ? `<div class="qty-ctrl">
            <button onclick="updateQty('${item.id}',-1)">−</button>
            <span>${cartItem.qty}</span>
            <button onclick="updateQty('${item.id}',1)">+</button>
          </div>` :
          `<button class="add-btn" onclick="addToCart('${item.id}')">+</button>`
        }
      </div>
    </div>
  </div>`;
}

function renderOrderModal(order){
  const steps = [
    {key:'placed',label:'Order Placed',icon:'✓'},
    {key:'confirmed',label:'Confirmed by Kitchen',icon:'👨‍🍳'},
    {key:'preparing',label:'Being Prepared',icon:'🔥'},
    {key:'ready',label:'Ready for Pickup',icon:'🎉'},
    {key:'done',label:'Picked Up',icon:'✅'},
  ];
  const idx = ['placed','confirmed','preparing','ready','done'].indexOf(order.status);
  return `<div class="order-modal open" id="orderModal">
    <div class="order-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div>
          <div class="order-id">ORDER #${order.id}</div>
          <div class="order-title">${order.status==='ready'?'🎉 Ready!':'⏳ Tracking Order'}</div>
        </div>
        <button class="close-btn" onclick="closeOrderModal()">✕</button>
      </div>
      <div class="order-pickup">
        <span class="icon">📍</span>
        <div><b>Pickup:</b> ${order.canteen}<br><small style="color:var(--muted)">Student ID: ${order.studentId}</small></div>
      </div>
      <div class="eta-chip">⏱ Est. ready in ${order.eta} mins</div>
      <div class="tracker">
        ${steps.map((s,i)=>{
          const done = i <= idx;
          const active = i === idx;
          return `<div class="track-step ${done?'done':''} ${active?'active':''}">
            <div class="ts-dot">${done?s.icon:''}</div>
            <div class="ts-info">
              <div class="ts-title">${s.label}</div>
              <div class="ts-time">${done?'Completed':'Pending'}</div>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div style="background:var(--bg3);border-radius:10px;padding:12px 14px;margin-bottom:12px">
        ${order.items.map(ci=>{const m=state.menu.find(x=>x.id===ci.id);return m?`<div style="display:flex;justify-content:space-between;font-size:0.8rem;padding:3px 0"><span>${m.emoji} ${m.name} ×${ci.qty}</span><span>₹${m.price*ci.qty}</span></div>`:''}).join('')}
        <div style="display:flex;justify-content:space-between;font-size:0.8rem;padding:3px 0;border-top:1px solid var(--border);margin-top:6px;font-weight:700"><span>Total</span><span style="color:var(--gold)">₹${order.total}</span></div>
      </div>
      <button class="btn btn-ghost close-order" onclick="closeOrderModal()">Close</button>
    </div>
  </div>`;
}

// ────────────────────────────────
// MANAGER VIEW
// ────────────────────────────────
function renderManager(){
  const todayOrders = state.orders.filter(o=>{
    const d = new Date(o.time);
    const n = new Date();
    return d.toDateString() === n.toDateString();
  });
  const revenue = todayOrders.reduce((a,o)=>a+o.total,0);
  return `
  <nav id="mainNav" class="scrolled">
    <div class="nav-logo">KRMU BITES<span>Manager Dashboard</span></div>
    <div class="nav-actions">
      <button class="btn btn-ghost btn-sm" onclick="goStudent()">← Student View</button>
      <button class="btn btn-red btn-sm" onclick="logoutManager()">Logout</button>
    </div>
  </nav>
  <div class="manager-wrap">
    <div class="manager-inner">
      <div class="mgr-header">
        <div class="mgr-title">Manager Dashboard</div>
        <div style="font-size:0.8rem;color:var(--muted)">Logged in as Canteen Manager · ${new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long'})}</div>
      </div>
      <div class="stats-row">
        <div class="stat-card"><div class="sc-val">${state.menu.length}</div><div class="sc-label">Total Items</div></div>
        <div class="stat-card"><div class="sc-val">${state.menu.filter(m=>m.available).length}</div><div class="sc-label">Available Now</div></div>
        <div class="stat-card"><div class="sc-val">${todayOrders.length}</div><div class="sc-label">Orders Today</div></div>
        <div class="stat-card"><div class="sc-val">₹${revenue}</div><div class="sc-label">Today's Revenue</div></div>
      </div>
      <div class="mgr-tabs">
        <button class="mgr-tab ${state.mgrTab==='menu'?'active':''}" onclick="setMgrTab('menu')">🍽️ Menu Management</button>
        <button class="mgr-tab ${state.mgrTab==='orders'?'active':''}" onclick="setMgrTab('orders')">📋 Orders (${state.orders.length})</button>
      </div>
      ${state.mgrTab === 'menu' ? renderMenuManagement() : renderOrderManagement()}
    </div>
  </div>`;
}

function renderMenuManagement(){
  return `
  <div class="add-item-form">
    <div class="form-title">➕ Add New Menu Item</div>
    <div class="form-grid">
      <div class="form-group" style="grid-column:span 2">
        <label>Item Name *</label>
        <input class="form-input" id="f-name" placeholder="e.g. Paneer Butter Masala" type="text">
      </div>
      <div class="form-group">
        <label>Price (₹) *</label>
        <input class="form-input" id="f-price" placeholder="e.g. 80" type="number" min="1">
      </div>
      <div class="form-group">
        <label>Emoji Icon *</label>
        <input class="form-input" id="f-emoji" placeholder="e.g. 🍛" maxlength="4">
      </div>
      <div class="form-group">
        <label>Canteen *</label>
        <select class="form-select" id="f-canteen">
          <option value="">Select Canteen</option>
          <option>A Block Canteen</option>
          <option>B Block – Basil</option>
          <option>B Block – Nescafé</option>
          <option>C Block – CCD</option>
          <option>C Block – Main Canteen</option>
        </select>
      </div>
      <div class="form-group">
        <label>Category *</label>
        <select class="form-select" id="f-category">
          <option>Meals</option>
          <option>Snacks</option>
          <option>Beverages</option>
          <option>Desserts</option>
        </select>
      </div>
      <div class="form-group">
        <label>Type</label>
        <select class="form-select" id="f-type">
          <option value="veg">🟢 Veg</option>
          <option value="nonveg">🔴 Non-veg</option>
        </select>
      </div>
      <div class="form-group" style="grid-column:span 2">
        <label>Description</label>
        <input class="form-input" id="f-desc" placeholder="Brief item description..." type="text">
      </div>
      <div class="form-group" style="align-self:end">
        <button class="btn btn-gold" style="width:100%;padding:10px" onclick="addItem()">➕ Add Item</button>
      </div>
    </div>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:8px">
    <div style="font-weight:700;font-size:1rem">${state.menu.length} Menu Items</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <select class="form-select" id="filterCanteen" style="width:auto" onchange="render()">
        <option value="all">All Canteens</option>
        <option>A Block Canteen</option>
        <option>B Block – Basil</option>
        <option>B Block – Nescafé</option>
        <option>C Block – CCD</option>
        <option>C Block – Main Canteen</option>
      </select>
    </div>
  </div>
  <div class="items-table">
    <div class="tbl-header">
      <div>Item</div>
      <div>Canteen</div>
      <div>Category</div>
      <div>Price</div>
      <div>Actions</div>
    </div>
    ${(()=>{
      const cf = document.getElementById('filterCanteen');
      const cf_val = cf ? cf.value : 'all';
      const items = state.menu.filter(m => cf_val === 'all' || m.canteen === cf_val);
      if(items.length === 0) return `<div style="padding:40px;text-align:center;color:var(--muted)">No items found</div>`;
      return items.map(item=>`
        <div class="tbl-row">
          <div class="tbl-name">
            <div class="tbl-emoji">${item.emoji}</div>
            <div>
              <div style="font-weight:700;font-size:0.88rem">${item.name}</div>
              <div style="font-size:0.7rem;color:var(--muted)">${item.desc||'—'}</div>
            </div>
          </div>
          <div style="font-size:0.78rem;color:var(--muted)">${item.canteen}</div>
          <div style="font-size:0.78rem">${item.category}</div>
          <div style="font-family:'Playfair Display',serif;font-weight:700;color:var(--gold)">₹${item.price}</div>
          <div style="display:flex;align-items:center;gap:8px">
            <div class="toggle ${item.available?'on':''}" onclick="toggleAvailability('${item.id}')" title="${item.available?'Mark Unavailable':'Mark Available'}"></div>
            <button class="del-btn" onclick="deleteItem('${item.id}')">🗑</button>
          </div>
        </div>`).join('');
    })()}
  </div>`;
}

function renderOrderManagement(){
  const sorted = [...state.orders].sort((a,b)=>b.time-a.time);
  if(sorted.length===0) return `<div style="text-align:center;padding:60px;color:var(--muted)"><div style="font-size:3rem;margin-bottom:12px">📋</div><p>No orders yet</p></div>`;
  return `<div class="orders-list">
    ${sorted.map(o=>`
      <div class="order-row">
        <div>
          <div class="or-id">ORDER #${o.id}</div>
          <div class="or-student">👤 ${o.studentId}</div>
          <div class="or-items">${o.items.map(ci=>{const m=state.menu.find(x=>x.id===ci.id);return m?`${m.emoji}${m.name}×${ci.qty}`:''}).filter(Boolean).join(', ')}</div>
          <div style="font-size:0.72rem;color:var(--muted);margin-top:4px">📍 ${o.canteen} · ${new Date(o.time).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:10px">
          <div class="or-price">₹${o.total}</div>
          <select class="status-select" onchange="updateOrderStatus('${o.id}',this.value)">
            ${['placed','confirmed','preparing','ready','done'].map(s=>`<option value="${s}" ${o.status===s?'selected':''}>${s.charAt(0).toUpperCase()+s.slice(1)}</option>`).join('')}
          </select>
          <span class="status-badge sb-${o.status==='done'?'done':o.status==='ready'?'ready':o.status==='preparing'?'preparing':'placed'}">${o.status}</span>
        </div>
      </div>`).join('')}
  </div>`;
}

function renderLogin(){
  return `
  <div class="login-wrap">
    <div style="position:absolute;inset:0;background-image:url('${IMG1}');background-size:cover;background-position:center;opacity:0.12"></div>
    <div class="login-card">
      <div class="login-logo">KRMU BITES</div>
      <div class="login-sub">Canteen Manager Access · Restricted</div>
      <div class="login-err" id="loginErr">Incorrect password. Please try again.</div>
      <div class="login-field">
        <label>Manager ID</label>
        <input type="text" id="mgrId" value="canteen_manager" readonly style="opacity:0.6">
      </div>
      <div class="login-field">
        <label>Password</label>
        <input type="password" id="mgrPass" placeholder="Enter manager password" onkeydown="if(event.key==='Enter')checkLogin()">
      </div>
      <button class="btn btn-gold" style="width:100%;padding:13px;margin-top:8px" onclick="checkLogin()">🔐 Login</button>
      <button class="btn btn-ghost" style="width:100%;padding:10px;margin-top:8px" onclick="goStudent()">← Back to Student View</button>
      <div class="login-hint">Demo password: <span>krmu@admin</span></div>
    </div>
  </div>`;
}

// ────────────────────────────────
// ACTIONS
// ────────────────────────────────
function getFilteredItems(){
  return state.menu.filter(m=>{
    if(state.activeCanteen !== 'all' && CANTEEN_MAP[m.canteen] !== state.activeCanteen) return false;
    if(state.activeCategory !== 'All' && m.category !== state.activeCategory) return false;
    if(state.search && !m.name.toLowerCase().includes(state.search.toLowerCase()) && !m.canteen.toLowerCase().includes(state.search.toLowerCase())) return false;
    return true;
  });
}

function cartSubtotal(){ return state.cart.reduce((a,c)=>{const m=state.menu.find(x=>x.id===c.id);return a+(m?m.price*c.qty:0);},0); }

function addToCart(id){
  const item = state.menu.find(m=>m.id===id);
  if(!item||!item.available) return;
  const existing = state.cart.find(c=>c.id===id);
  if(existing) existing.qty++;
  else state.cart.push({id,qty:1});
  showToast(`Added ${item.emoji} ${item.name}`);
  render();
}

function updateQty(id,delta){
  const ci = state.cart.find(c=>c.id===id);
  if(!ci) return;
  ci.qty += delta;
  if(ci.qty <= 0) state.cart = state.cart.filter(c=>c.id!==id);
  render();
}

function removeFromCart(id){ state.cart = state.cart.filter(c=>c.id!==id); render(); }

function toggleCart(){ state.cartOpen = !state.cartOpen; render(); }

function selectCanteen(id){ state.activeCanteen = id; render(); }
function setCategory(c){ state.activeCategory = c; render(); }
function setSearch(v){ state.search = v; render(); }

function scrollToMenu(){ document.getElementById('menuSection')?.scrollIntoView({behavior:'smooth'}); }
function scrollToCanteens(){ document.getElementById('canteensSection')?.scrollIntoView({behavior:'smooth'}); }

function placeOrder(){
  const sid = document.getElementById('studentId')?.value?.trim();
  const can = document.getElementById('pickupCanteen')?.value;
  if(!sid || sid.length < 5){ showToast('❌ Enter a valid Student ID'); return; }
  if(!can){ showToast('❌ Select pickup canteen'); return; }
  const id = 'KRM' + Date.now().toString().slice(-6);
  const order = {
    id, studentId: sid, canteen: can,
    items: [...state.cart],
    total: cartSubtotal() + 5,
    status: 'placed',
    eta: Math.floor(Math.random()*10)+10,
    time: Date.now(),
  };
  state.orders.push(order);
  saveOrders();
  state.cart = [];
  state.cartOpen = false;
  state.orderModal = order;
  playSuccess();
  showToast('🎉 Order placed successfully!');
  render();
}

function closeOrderModal(){ state.orderModal = null; render(); }

function goManager(){ state.view = 'login'; render(); }
function goStudent(){ state.view = 'student'; render(); }
function logoutManager(){ state.view = 'login'; render(); }

function checkLogin(){
  const pass = document.getElementById('mgrPass')?.value;
  if(pass === 'krmu@admin'){
    state.view = 'manager';
    render();
  } else {
    document.getElementById('loginErr').classList.add('show');
  }
}

function setMgrTab(t){ state.mgrTab = t; render(); }

function addItem(){
  const name = document.getElementById('f-name')?.value?.trim();
  const price = parseInt(document.getElementById('f-price')?.value);
  const emoji = document.getElementById('f-emoji')?.value?.trim() || '🍽️';
  const canteen = document.getElementById('f-canteen')?.value;
  const category = document.getElementById('f-category')?.value;
  const type = document.getElementById('f-type')?.value;
  const desc = document.getElementById('f-desc')?.value?.trim() || '';
  if(!name){ showToast('❌ Enter item name'); return; }
  if(!price || price <= 0){ showToast('❌ Enter valid price'); return; }
  if(!canteen){ showToast('❌ Select a canteen'); return; }
  const newItem = {id:'c'+Date.now(), name, price, emoji, canteen, category, type, desc, available:true};
  state.menu.push(newItem);
  saveMenu();
  showToast(`✅ "${name}" added to ${canteen}`);
  render();
}

function toggleAvailability(id){
  const item = state.menu.find(m=>m.id===id);
  if(!item) return;
  item.available = !item.available;
  saveMenu();
  showToast(`${item.available?'✅ Enabled':'⛔ Disabled'}: ${item.name}`);
  render();
}

function deleteItem(id){
  const item = state.menu.find(m=>m.id===id);
  if(!item) return;
  if(!confirm(`Delete "${item.name}"?`)) return;
  state.menu = state.menu.filter(m=>m.id!==id);
  saveMenu();
  showToast(`🗑️ "${item.name}" removed`);
  render();
}

function updateOrderStatus(oid, status){
  const o = state.orders.find(x=>x.id===oid);
  if(!o) return;
  o.status = status;
  saveOrders();
  showToast(`📋 Order #${oid} → ${status}`);
  if(state.orderModal && state.orderModal.id === oid) state.orderModal.status = status;
  render();
}

// ────────────────────────────────
// EFFECTS
// ────────────────────────────────
function bindStudent(){
  window.onscroll = ()=>{
    const nav = document.getElementById('mainNav');
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    initParallax();
  };
  countUp();
  setTimeout(animateGestureCanvas, 500);
  // Pause gallery on hover
  const gt = document.getElementById('galleryTrack');
  if(gt){
    gt.addEventListener('mouseenter',()=>gt.style.animationPlayState='paused');
    gt.addEventListener('mouseleave',()=>gt.style.animationPlayState='running');
  }
}

function animateGestureCanvas(){
  const canvas = document.getElementById('gestureCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  // Hand skeleton points simulation
  let t = 0;
  const joints = [
    // Palm base
    {x:0.5,y:0.75},
    // Fingers (5 fingers, 3 joints each simplified)
    {x:0.28,y:0.55},{x:0.22,y:0.35},{x:0.20,y:0.22},
    {x:0.38,y:0.38},{x:0.36,y:0.18},{x:0.35,y:0.10},
    {x:0.50,y:0.35},{x:0.50,y:0.14},{x:0.50,y:0.06},
    {x:0.62,y:0.38},{x:0.64,y:0.19},{x:0.65,y:0.11},
    {x:0.72,y:0.48},{x:0.76,y:0.34},{x:0.77,y:0.24},
  ];
  const connections = [
    [0,1],[1,2],[2,3],
    [0,4],[4,5],[5,6],
    [0,7],[7,8],[8,9],
    [0,10],[10,11],[11,12],
    [0,13],[13,14],[14,15],
  ];
  function frame(){
    ctx.clearRect(0,0,W,H);
    t += 0.018;
    // Background glow
    const grad = ctx.createRadialGradient(W/2,H*0.6,20,W/2,H*0.6,W*0.5);
    grad.addColorStop(0,'rgba(240,165,0,0.08)');
    grad.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);
    // Animate joints with slight wave
    const pts = joints.map((j,i)=>({
      x: j.x*W + Math.sin(t+i*0.4)*4,
      y: j.y*H + Math.cos(t*0.7+i*0.3)*4
    }));
    // Draw connections
    connections.forEach(([a,b])=>{
      const pa=pts[a], pb=pts[b];
      const g = ctx.createLinearGradient(pa.x,pa.y,pb.x,pb.y);
      g.addColorStop(0,'rgba(240,165,0,0.8)');
      g.addColorStop(1,'rgba(255,203,107,0.4)');
      ctx.beginPath(); ctx.moveTo(pa.x,pa.y); ctx.lineTo(pb.x,pb.y);
      ctx.strokeStyle=g; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.stroke();
    });
    // Draw joint dots
    pts.forEach((p,i)=>{
      const r = i===0 ? 7 : 4;
      ctx.beginPath(); ctx.arc(p.x,p.y,r,0,Math.PI*2);
      ctx.fillStyle = i===0 ? 'rgba(240,165,0,1)' : 'rgba(255,203,107,0.9)';
      ctx.fill();
      // Glow
      ctx.beginPath(); ctx.arc(p.x,p.y,r+4,0,Math.PI*2);
      ctx.fillStyle = 'rgba(240,165,0,0.12)'; ctx.fill();
    });
    // Gesture label
    const gestures = ['Selecting Item...','Adding to Cart...','Confirming Order...','Menu Navigation...'];
    const gi = Math.floor(t/3) % gestures.length;
    ctx.fillStyle = 'rgba(0,201,167,0.85)';
    ctx.font = 'bold 12px DM Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(gestures[gi], W/2, H-18);
    // Pulse ring at palm
    const palmPt = pts[0];
    const pr = 18 + Math.sin(t*3)*5;
    ctx.beginPath(); ctx.arc(palmPt.x,palmPt.y,pr,0,Math.PI*2);
    ctx.strokeStyle=`rgba(240,165,0,${0.3+Math.sin(t*3)*0.15})`; ctx.lineWidth=1.5; ctx.stroke();
    requestAnimationFrame(frame);
  }
  frame();
}

function bindManager(){
  window.onscroll = ()=>{};
}

function bindLogin(){
  window.onscroll = ()=>{};
}

function initParallax(){
  const bg = document.getElementById('heroBg');
  if(bg){ const s = window.scrollY; bg.style.transform = `scale(1.08) translateY(${s*0.25}px)`; }
}

function countUp(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(()=>{
      current = Math.min(current+step, target);
      el.textContent = current;
      if(current >= target) clearInterval(interval);
    }, 40);
  });
}

function initReveal(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

function spawnParticles(){
  const cont = document.getElementById('particles');
  if(!cont) return;
  const emojis = ['🍛','🍔','🍕','☕','🧋','🍟','🍱','🥐','🍫','🍝','🥭','🍜'];
  for(let i=0;i<18;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    p.style.left = Math.random()*100+'%';
    p.style.animationDuration = (Math.random()*15+10)+'s';
    p.style.animationDelay = (Math.random()*10)+'s';
    p.style.fontSize = (Math.random()*20+14)+'px';
    cont.appendChild(p);
  }
}

// ── Cursor ──
let mouseX=window.innerWidth/2, mouseY=window.innerHeight/2;
let ringX=mouseX, ringY=mouseY;
function animateCursor(){
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  const r = document.getElementById('cursorRing');
  if(r){ r.style.left=ringX+'px'; r.style.top=ringY+'px'; }
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.addEventListener('mousemove',e=>{
  mouseX=e.clientX; mouseY=e.clientY;
  const c = document.getElementById('cursor');
  if(c){ c.style.left=e.clientX+'px'; c.style.top=e.clientY+'px'; }
  handle3DTilt(e);
  handleMagnetic(e);
});
document.addEventListener('mousedown',()=>{
  const c=document.getElementById('cursor'),r=document.getElementById('cursorRing');
  if(c){c.style.width='20px';c.style.height='20px';}
  if(r){r.style.width='20px';r.style.height='20px';r.style.borderColor='rgba(240,165,0,0.9)';}
  playClick();
});
document.addEventListener('mouseup',()=>{
  const c=document.getElementById('cursor'),r=document.getElementById('cursorRing');
  if(c){c.style.width='14px';c.style.height='14px';}
  if(r){r.style.width='40px';r.style.height='40px';r.style.borderColor='rgba(240,165,0,0.5)';}
});
document.addEventListener('mouseover',e=>{
  const r=document.getElementById('cursorRing');
  if(e.target.closest('button,.menu-item,.canteen-card,.add-btn')){
    if(r){r.style.width='60px';r.style.height='60px';r.style.borderColor='rgba(240,165,0,0.8)';}
  }
},true);
document.addEventListener('mouseout',e=>{
  const r=document.getElementById('cursorRing');
  if(e.target.closest('button,.menu-item,.canteen-card,.add-btn')){
    if(r){r.style.width='40px';r.style.height='40px';r.style.borderColor='rgba(240,165,0,0.5)';}
  }
},true);

// ── 3D Card Tilt ──
function handle3DTilt(e){
  document.querySelectorAll('.menu-item,.canteen-card.active-tilt').forEach(card=>{
    const rect=card.getBoundingClientRect();
    const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
    const dx=(e.clientX-cx)/rect.width, dy=(e.clientY-cy)/rect.height;
    const dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<0.9){
      const tx=dy*10, ty=-dx*10;
      card.style.transform=`perspective(800px) rotateX(${tx}deg) rotateY(${ty}deg) translateY(-4px)`;
      card.style.transition='transform 0.05s ease';
    } else {
      card.style.transform='perspective(800px) rotateX(0) rotateY(0) translateY(0)';
      card.style.transition='transform 0.4s ease';
    }
  });
}
document.addEventListener('mouseleave',()=>{
  document.querySelectorAll('.menu-item,.canteen-card').forEach(c=>{
    c.style.transform='';c.style.transition='transform 0.4s ease';
  });
});

// ── Magnetic Buttons ──
function handleMagnetic(e){
  document.querySelectorAll('.btn-gold,.btn-red,.add-btn').forEach(btn=>{
    const rect=btn.getBoundingClientRect();
    const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
    const dx=e.clientX-cx, dy=e.clientY-cy;
    const dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<80){
      const pull=0.25*(1-dist/80);
      btn.style.transform=`translate(${dx*pull}px,${dy*pull}px)`;
    } else {
      btn.style.transform='';
    }
  });
}

// ── Web Audio Click Sound ──
let audioCtx;
function playClick(){
  try{
    if(!audioCtx) audioCtx=new(window.AudioContext||window.webkitAudioContext)();
    const o=audioCtx.createOscillator();
    const g=audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.frequency.setValueAtTime(800,audioCtx.currentTime);
    o.frequency.exponentialRampToValueAtTime(200,audioCtx.currentTime+0.08);
    g.gain.setValueAtTime(0.06,audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+0.08);
    o.start(); o.stop(audioCtx.currentTime+0.08);
  }catch(e){}
}
function playSuccess(){
  try{
    if(!audioCtx) audioCtx=new(window.AudioContext||window.webkitAudioContext)();
    [600,800,1000].forEach((f,i)=>{
      const o=audioCtx.createOscillator();
      const g=audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      o.type='sine';
      o.frequency.setValueAtTime(f,audioCtx.currentTime+i*0.1);
      g.gain.setValueAtTime(0.08,audioCtx.currentTime+i*0.1);
      g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+i*0.1+0.15);
      o.start(audioCtx.currentTime+i*0.1);
      o.stop(audioCtx.currentTime+i*0.1+0.15);
    });
  }catch(e){}
}

// ── Canvas Star-field / Particle Background ──
function initCanvas(){
  let canvas=document.getElementById('bgCanvas');
  if(!canvas){ canvas=document.createElement('canvas'); canvas.id='bgCanvas'; canvas.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.35'; document.body.prepend(canvas); }
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  window.addEventListener('resize',()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
  const dots=Array.from({length:80},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5+0.3,vx:(Math.random()-0.5)*0.15,vy:(Math.random()-0.5)*0.15,op:Math.random()*0.5+0.1}));
  function drawFrame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dots.forEach(d=>{
      d.x+=d.vx; d.y+=d.vy;
      if(d.x<0)d.x=canvas.width; if(d.x>canvas.width)d.x=0;
      if(d.y<0)d.y=canvas.height; if(d.y>canvas.height)d.y=0;
      ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(240,165,0,${d.op})`; ctx.fill();
    });
    dots.forEach((d,i)=>{
      dots.slice(i+1).forEach(d2=>{
        const dx=d.x-d2.x,dy=d.y-d2.y,dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120){
          ctx.beginPath(); ctx.moveTo(d.x,d.y); ctx.lineTo(d2.x,d2.y);
          ctx.strokeStyle=`rgba(240,165,0,${0.06*(1-dist/120)})`; ctx.lineWidth=0.5; ctx.stroke();
        }
      });
    });
    requestAnimationFrame(drawFrame);
  }
  drawFrame();
}

// ── Ripple on card click ──
document.addEventListener('click',e=>{
  const card=e.target.closest('.menu-item,.canteen-card,.btn-gold');
  if(!card) return;
  const rect=card.getBoundingClientRect();
  const rip=document.createElement('span');
  rip.style.cssText=`position:absolute;border-radius:50%;background:rgba(240,165,0,0.25);width:8px;height:8px;left:${e.clientX-rect.left-4}px;top:${e.clientY-rect.top-4}px;transform:scale(0);animation:rippleAnim 0.55s ease forwards;pointer-events:none;z-index:99`;
  if(getComputedStyle(card).position==='static') card.style.position='relative';
  card.appendChild(rip);
  setTimeout(()=>rip.remove(),600);
},true);

// ── inject ripple keyframe ──
const ripSt=document.createElement('style');
ripSt.textContent='@keyframes rippleAnim{to{transform:scale(28);opacity:0}}';
document.head.appendChild(ripSt);

// ── Scroll progress bar ──
const prog=document.createElement('div');
prog.style.cssText='position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#f0a500,#ffcb6b);z-index:9999;width:0%;transition:width 0.1s;pointer-events:none';
document.body.appendChild(prog);
window.addEventListener('scroll',()=>{
  const pct=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100;
  prog.style.width=pct+'%';
});

// ── Init ──
window.addEventListener('load',()=>{
  initCanvas();
  setTimeout(()=>{
    document.getElementById('preloader').classList.add('hide');
    render();
    setTimeout(spawnParticles, 800);
  }, 2200);
});