// ===== MENU DATA =====
const menuData = {
  starters: [
    {
      name: "Foie Gras Terrine",
      desc: "Pan-seared duck liver with fig compote, brioche toast, and aged balsamic glaze.",
      price: "$28",
      tag: "Chef's Favourite",
      badge: "Signature",
      img: "https://images.pexels.com/photos/27612507/pexels-photo-27612507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Truffle Arancini",
      desc: "Crispy risotto balls infused with black truffle, parmesan, and roasted garlic aioli.",
      price: "$22",
      tag: "Vegetarian",
      badge: "Popular",
      img: "https://images.pexels.com/photos/24246118/pexels-photo-24246118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Burrata & Heirloom",
      desc: "Creamy burrata with heirloom tomatoes, basil oil, sea salt, and toasted pine nuts.",
      price: "$18",
      tag: "Seasonal",
      badge: "Fresh",
      img: "https://images.pexels.com/photos/35336025/pexels-photo-35336025.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Lobster Bisque",
      desc: "Velvety bisque of North Atlantic lobster, crème fraîche, tarragon, and cognac.",
      price: "$24",
      tag: "Seafood",
      badge: "Award Winning",
      img: "https://images.pexels.com/photos/5083908/pexels-photo-5083908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    }
  ],
  mains: [
    {
      name: "Wagyu Beef Tenderloin",
      desc: "Grade A5 Wagyu with pomme purée, wild mushroom jus, and charred asparagus.",
      price: "$78",
      tag: "Premium Cut",
      badge: "Best Seller",
      img: "https://images.pexels.com/photos/15580733/pexels-photo-15580733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Pan-Seared Halibut",
      desc: "Atlantic halibut with saffron beurre blanc, caperberries, and lemon gremolata.",
      price: "$52",
      tag: "Seafood",
      badge: "Seasonal",
      img: "https://images.pexels.com/photos/24246118/pexels-photo-24246118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Duck Confit",
      desc: "Slow-cooked duck leg, lentils du Puy, cherry reduction, and crispy dauphinoise.",
      price: "$48",
      tag: "House Speciality",
      badge: "Signature",
      img: "https://images.pexels.com/photos/33033815/pexels-photo-33033815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Wild Mushroom Risotto",
      desc: "Arborio rice with porcini, truffle oil, aged parmesan, and fresh herbs.",
      price: "$36",
      tag: "Vegetarian",
      badge: "Popular",
      img: "https://images.pexels.com/photos/36694451/pexels-photo-36694451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    }
  ],
  desserts: [
    {
      name: "Crème Brûlée",
      desc: "Classic Madagascan vanilla custard with caramelised sugar crust and fresh berries.",
      price: "$16",
      tag: "Classic",
      badge: "Must Try",
      img: "https://images.pexels.com/photos/38673845/pexels-photo-38673845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Chocolate Fondant",
      desc: "Warm Valrhona chocolate fondant with salted caramel gelato and hazelnut praline.",
      price: "$18",
      tag: "Indulgent",
      badge: "Best Seller",
      img: "https://images.pexels.com/photos/5083908/pexels-photo-5083908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Mango Panna Cotta",
      desc: "Silky coconut panna cotta with alphonso mango coulis and crystallised ginger.",
      price: "$15",
      tag: "Light",
      badge: "Seasonal",
      img: "https://images.pexels.com/photos/27612507/pexels-photo-27612507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Cheese Selection",
      desc: "A curated board of five artisanal cheeses, quince paste, honeycomb, and crackers.",
      price: "$26",
      tag: "Artisan",
      badge: "Sharing",
      img: "https://images.pexels.com/photos/35336025/pexels-photo-35336025.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    }
  ],
  drinks: [
    {
      name: "Lumière Signature Cocktail",
      desc: "Grey Goose vodka, elderflower, yuzu, champagne, and edible gold flakes.",
      price: "$22",
      tag: "Signature",
      badge: "House Special",
      img: "https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Reserve Wine Selection",
      desc: "Bordeaux Château Margaux 2018 — rich, full-bodied with notes of plum and cedar.",
      price: "$85",
      tag: "Premium Wine",
      badge: "Sommelier Pick",
      img: "https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Artisan Mocktail",
      desc: "Pressed watermelon, mint, lime, ginger beer, and rose water syrup. Alcohol free.",
      price: "$14",
      tag: "Non-Alcoholic",
      badge: "Refreshing",
      img: "https://images.pexels.com/photos/38673845/pexels-photo-38673845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    {
      name: "Aged Whisky Flight",
      desc: "A curated trio of single malt Scotch whiskies — 12, 18, and 25 years aged.",
      price: "$60",
      tag: "Spirits",
      badge: "Connoisseur",
      img: "https://images.pexels.com/photos/1860198/pexels-photo-1860198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600"
    }
  ]
};

// ===== RENDER MENU =====
function renderMenu(tab) {
  const grid = document.getElementById("menu-grid");
  const items = menuData[tab];
  grid.style.opacity = "0";
  setTimeout(() => {
    grid.innerHTML = items.map(item => `
      <div class="menu-card reveal visible">
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy"/>
        </div>
        <div class="menu-card-body">
          <p class="menu-card-tag">${item.tag}</p>
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="menu-card-footer">
            <span class="menu-price">${item.price}</span>
            <span class="menu-badge">${item.badge}</span>
          </div>
        </div>
      </div>
    `).join("");
    grid.style.opacity = "1";
    grid.style.transition = "opacity 0.4s ease";
  }, 200);
}

// ===== TABS =====
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.tab);
  });
});
renderMenu("starters");

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
  document.getElementById("back-top").classList.toggle("visible", window.scrollY > 400);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
document.querySelectorAll(".nav-link, .nav-btn").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ===== BACK TO TOP =====
document.getElementById("back-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== GALLERY LIGHTBOX =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const src = item.querySelector("img").src;
    const alt = item.querySelector("img").alt;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});
function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}
document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-overlay").addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

// ===== TESTIMONIALS SLIDER =====
const track = document.getElementById("testimonials-track");
const cards = track.querySelectorAll(".testimonial-card");
const dotsContainer = document.getElementById("testimonial-dots");
let current = 0;
let cardsVisible = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
const totalSlides = Math.ceil(cards.length / cardsVisible);

function createDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.classList.add("t-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  current = index;
  const cardWidth = cards[0].offsetWidth + 28;
  track.style.transform = `translateX(-${current * cardsVisible * cardWidth}px)`;
  document.querySelectorAll(".t-dot").forEach((d, i) => d.classList.toggle("active", i === current));
}

createDots();

let autoSlide = setInterval(() => {
  current = (current + 1) % totalSlides;
  goToSlide(current);
}, 4500);

track.addEventListener("mouseenter", () => clearInterval(autoSlide));
track.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    current = (current + 1) % totalSlides;
    goToSlide(current);
  }, 4500);
});

window.addEventListener("resize", () => {
  cardsVisible = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  createDots();
  goToSlide(0);
});

// ===== RESERVATION FORM =====
// Set min date to today
const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const submitBtn = this.querySelector(".full-btn");
  const successMsg = document.getElementById("form-success");
  submitBtn.textContent = "Confirming...";
  submitBtn.disabled = true;
  setTimeout(() => {
    submitBtn.style.display = "none";
    successMsg.classList.add("show");
    this.reset();
  }, 1400);
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".feature-item, .about-image-wrap, .about-content, .gallery-item, .testimonial-card, .reservation-info, .reservation-form, .stat").forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute("id");
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "var(--gold)";
    }
  });
});
