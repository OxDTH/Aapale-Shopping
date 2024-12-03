/*=============== SHOW MENU ===============*/
// SpeedInsights API monitoring for vercel
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function handler(req, res) {
  SpeedInsights.track("API Monitor"); // Track performance
  res.status(200).json({ message: "API performance is being monitored!" });
}

// SpeedInsights API monitoring for vercel ending

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
    smallImg = document.querySelectorAll('.details__small-img');

    smallImg.forEach((img) => {
      img.addEventListener('click', function () {
        mainImg.src = this.src;
      });
    });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
 var swiperCategories = new Swiper('.categories__container', {
    spaceBetween: 24,
    loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
 });

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper('.new__container', {
  spaceBetween: 24,
  loop: true,
  
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});

/*=============== COUNTDOWN TIMER ===============*/
// Define target dates for each countdown timer
const countdowns = [
  {
    selector: '.deals__item:nth-child(1) .countdown', // First timer selector
    targetDate: new Date('2025-07-19T23:59:59'), // Replace with your desired date
  },
  {
    selector: '.deals__item:nth-child(2) .countdown', // Second timer selector
    targetDate: new Date('2025-07-19T23:59:59'), // Replace with your desired date
  },
];

// Function to update all countdowns
function updateCountdowns() {
  const now = new Date();

  countdowns.forEach((countdown) => {
    const countdownEl = document.querySelector(countdown.selector);
    if (!countdownEl) return; // Skip if the element doesn't exist

    const timeRemaining = countdown.targetDate - now;

    if (timeRemaining <= 0) {
      // If the countdown is over, set all values to zero
      countdownEl.innerHTML = `
        <div class="countdown__amount">
          <p class="countdown__period">0</p><span class="unit">Days</span>
        </div>
        <div class="countdown__amount">
          <p class="countdown__period">0</p><span class="unit">Hours</span>
        </div>
        <div class="countdown__amount">
          <p class="countdown__period">0</p><span class="unit">Mins</span>
        </div>
        <div class="countdown__amount">
          <p class="countdown__period">0</p><span class="unit">Secs</span>
        </div>`;
      return;
    }

    // Calculate time components
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown elements in the DOM
    countdownEl.innerHTML = `
      <div class="countdown__amount">
        <p class="countdown__period">${days}</p><span class="unit">Days</span>
      </div>
      <div class="countdown__amount">
        <p class="countdown__period">${hours}</p><span class="unit">Hours</span>
      </div>
      <div class="countdown__amount">
        <p class="countdown__period">${minutes}</p><span class="unit">Mins</span>
      </div>
      <div class="countdown__amount">
        <p class="countdown__period">${seconds}</p><span class="unit">Secs</span>
      </div>`;
  });
}

// Start a single interval for all countdowns
setInterval(updateCountdowns, 1000);

// Initial update to set values immediately
updateCountdowns();




/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active-tab');
      });

      target.classList.add('active-tab');

      tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
      });

      tab.classList.add('active-tab');
    });
  });

// Function to handle the search functionality
async function handleSearch() {
  const code = document.querySelector('#searchInput').value.trim();

  // Map product codes to their respective pages
  const productPages = {
    ASO1544STT: 'macbookair13inch.html',
    ASO1544TTS: 'macbookpro16inch.html',
    ASO4X92TPQ: 'imac.html',
    ASO87KJ29L: 'macmini.html',
    ASO93MXY1Z: 'macstudio.html',
    ASO5ZP4L8Q: 'macpro.html',
    ASO12JK8W3: 'prodisplay.html',
    ASO9PXY72ML3Q: 'magicmouse.html',
    ASO1B6P9QR: 'Aapale Watch Series 9.html',
    ASO72LK56M: 'Aapale Watch Ultra 2.html',
    ASO3XZ90PQ: 'Airtag.html',
    ASO6YZ4JN1: 'Alpine Loop Indigo.html',
    ASO92MLX87: 'Gold Milanese.html',
    ASO4JK29TR: 'Graphite Milanese.html',
    ASO59QP4YW: 'Hermes Stour Bridon.html',
    ASO1X8MZ72: 'Homepod Mini.html',
    ASO3P9KL56: 'Homepod.html',
    ASO87YW1XZ: 'ipad Pro.html',
    ASO92T4JK8: 'iPhone 15 Pro.html',
    ASO6XY5MZ9: 'iPhone 16 Plus.html',
    ASO7JN1P4LK: 'Laptop Sleeve.html',
    ASO93QR8Z57: 'Magic keyboard.html',
    ASO1XZ92YW: 'Modern Buckle Lavander.html',
    ASO4JK72T9M: 'Nike Sport Band.html',
    ASO8P5XY6QR: 'Nike Sport Loop Game.html',
    ASO9Z3KL87W: 'Ocean Band Blue.html',
    ASO56ML1X8T: 'Silver Bracelet.html',
    ASO92YW4JK29: 'Soft Mint Sport Loop.html',
    ASO3Z9PXY57Q: 'Sport Band Light Blue.html',
    ASO1X87LK6TZ: 'trackpad.html',
    ASO4ML93QR5N: 'USB-C to MagSafe 3 Cable.html',
    ASO8Z7YW2KL9: 'USB-C-PowerAdapter.html',
    ASO3JK29M8Z7: 'Yellow Braided Loop.html',
    ASO56XY1T4P9: 'Vision Pro.html'
    // Add more mappings here as needed
  };

  try {
      // Check if the entered code exists in the productPages map
      if (productPages[code]) {
          // Redirect to the corresponding page
          window.location.href = productPages[code];
      } else {
          // If the code does not exist, show an error
          throw new Error('Product not found');
      }
  } catch (error) {
      // Show an error if the product is not found
      alert(error.message);
  }
}

// Event listener for the search button
document.querySelector('#searchButton').addEventListener('click', handleSearch);

// Event listener for the Enter key
document.querySelector('#searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
      handleSearch();
  }
});

// This code is for suggestion box search results image and products with code.
// Product data
const products = [
  { name: "Macbook Air 13 inch", code: "ASO1544STT", page: "macbookair13inch.html", image: "/assets/img/Shop (category)/Macbook Air 13 inch M3 chip Midnight Product 1.png" },
  { name: "Macbook Pro 16 inch", code: "ASO1544TTS", page: "macbookpro16inch.html", image: "/assets/img/Shop (category)/Macbook Pro 16-inch (M3 Max chip) Product 2.png" },
  { name: "imac", code: "ASO4X92TPQ", page: "imac.html", image: "/assets/img/Shop (category)/imac 24 blue selection m3 chip Product 3.png" },
  { name: "Mac mini", code: "ASO87KJ29L", page: "macmini.html", image: "/assets/img/Shop (category)/Mac mini M2 Pro Product 4.png" },
  { name: "Mac studio", code: "ASO93MXY1Z", page: "macstudio.html", image: "/assets/img/Shop (category)/Mac studio M2 Ultra Product 5.png" },
  { name: "Mac Pro", code: "ASO5ZP4L8Q", page: "macpro.html", image: "/assets/img/Shop (category)/Mac Pro M2 Ultra Product 6.png" },
  { name: "Pro Display", code: "ASO12JK8W3", page: "prodisplay.html", image: "/assets/img/Products/Product 7/Pro display landscape.png" },
  { name: "Magic Mouse", code: "ASO9PXY72ML3Q", page: "magicmouse.html", image: "assets/img/Products/Product 8/Magic Mouse.png" },
  { name: "Aapale Watch Series 9", code: "ASO1B6P9QR", page: "Aapale Watch Series 9.html", image: "/assets/img/New Arrivals/Apple Watch Series 9.jpg" },
  { name: "Aapale Watch Ultra 2", code: "ASO72LK56M", page: "Aapale Watch Ultra 2.html", image: "/assets/img/New Arrivals/Apple Watch Ultra 2.jpg" },
  { name: "Airtag", code: "ASO3XZ90PQ", page: "airtag.html", image: "/assets/img/Deals/AirTag transparent.png" },
  { name: "Alpine Loop Indigo", code: "ASO6YZ4JN1", page: "Alpine Loop Indigo.html", image: "/assets/img/High Deals/Alpine Loop Indigo.jpg" },
  { name: "Gold Milanese", code: "ASO92MLX87", page: "Gold Milanese.html", image: "/assets/img/Top Selling/Gold Milanese.jpg" },
  { name: "Graphite Milanese", code: "ASO4JK29TR", page: "Graphite Milanese.html", image: "/assets/img/Top Selling/Graphite Milanese.jpg" },
  { name: "Hermes Stour Bridon", code: "ASO59QP4YW", page: "Hermes Stour Bridon.html", image: "/assets/img/High Deals/Hermes stour bridon navy.jpg" },
  { name: "Homepod Mini", code: "ASO1X8MZ72", page: "Homepod Mini.html", image: "/assets/img/Product Details/Product 11/HomePod mini.png" },
  { name: "Homepod", code: "ASO3P9KL56", page: "Homepod.html", image: "assets/img/Product Details/Product 12/HomePod.png" },
  { name: "ipad Pro", code: "ASO87YW1XZ", page: "ipad Pro.html", image: "/assets/img/New Arrivals/ipad-pro-storage-select-202405-13inch-spaceblack-matte-wificell.jpg" },
  { name: "iPhone 15 Pro", code: "ASO92T4JK8", page: "iPhone 15 Pro.html", image: "/assets/img/New Arrivals/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.png" },
  { name: "iPhone 16 Plus", code: "ASO6XY5MZ9", page: "iPhone 16 Plus.html", image: "/assets/img/New Arrivals/Apple-iPhone-16-Plus.jpg" },
  { name: "Laptop Sleeve", code: "ASO7JN1P4LK", page: "Laptop Sleeve.html", image: "/assets/img/New Arrivals/laptop Sleeve.jpg" },
  { name: "Magic keyboard", code: "ASO93QR8Z57", page: "Magic keyboard.html", image: "/assets/img/Deals/Magic Keyboard.png" },
  { name: "Modern Buckle Lavander", code: "ASO1XZ92YW", page: "Modern Buckle Lavander.html", image: "/assets/img/High Deals/Modern Buckle Lavander.jpg" },
  { name: "Nike Sport Band", code: "ASO4JK72T9M", page: "Nike Sport Band.html", image: "/assets/img/Trendy/Nike sport band.jpg" },
  { name: "Nike Sport Loop Game", code: "ASO8P5XY6QR", page: "Nike Sport Loop Game.html", image: "/assets/img/Trendy/Nike sport loop game.jpg" },
  { name: "Ocean Band Blue", code: "ASO9Z3KL87W", page: "Ocean Band Blue.html", image: "/assets/img/Trendy/Ocean band blue.jpg" },
  { name: "Silver Bracelet", code: "ASO56ML1X8T", page: "Silver Bracelet.html", image: "/assets/img/Top Selling/Silver Bracelet.jpg" },
  { name: "Soft Mint Sport Loop", code: "ASO92YW4JK29", page: "Soft Mint Sport Loop.html", image: "/assets/img/Hot Releases/Soft mint Sport loop bg.jpg" },
  { name: "Sport Band Light Blue", code: "ASO3Z9PXY57Q", page: "Sport Band Light Blue.html", image: "/assets/img/Hot Releases/Sport band light blue.jpg" },
  { name: "trackpad", code: "ASO1X87LK6TZ", page: "trackpad.html", image: "/assets/img/Products/Product 9/Magic Trackpad Black.png" },
  { name: "USB-C to MagSafe 3 Cable", code: "ASO4ML93QR5N", page: "USB-C to MagSafe 3 Cable.html", image: "/assets/img/Products/Product 13/USB-C to MagSafe 3 Cable (2 m) - Space Black.png" },
  { name: "USB-C-PowerAdapter", code: "ASO8Z7YW2KL9", page: "USB-C-PowerAdapter.html", image: "/assets/img/Products/Product 10/35W Dual USB-C Port Compact Power Adapter.png" },
  { name: "Yellow Braided Loop", code: "ASO3JK29M8Z7", page: "Yellow Braided Loop.html", image: "/assets/img/Hot Releases/Braided Loop Sunshine unity.jpg" },
  { name: "Vision Pro", code: "ASO56XY1T4P9", page: "Vision Pro.html", image: "assets/img/New Arrivals/Apple-WWDC23-Vision-Pro-glass-230605_big.jpg.large.jpg" },

];

// Reference to HTML elements
const searchInput = document.querySelector('#searchInput');
const suggestionsContainer = document.createElement('div');
suggestionsContainer.id = 'suggestionsBox';
searchInput.parentNode.insertBefore(suggestionsContainer, searchInput.nextSibling);

// Event listener for typing in search bar
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  if (query.length < 4) {
      clearSuggestions();
      return;
  }

  const matches = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.code.toLowerCase().startsWith(query)
  );

  renderSuggestions(matches);
});

// Render suggestions
function renderSuggestions(matches) {
  clearSuggestions();

  if (matches.length === 0) {
      const noResult = document.createElement('div');
      noResult.className = 'suggestion-item';
      noResult.textContent = 'No products found';
      suggestionsContainer.appendChild(noResult);
      return;
  }

  matches.forEach(product => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'suggestion-item';
      suggestionItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="suggestion-image">
          <span class="suggestion-name">${product.name} (${product.code})</span>
      `;

      suggestionItem.addEventListener('click', () => {
          window.location.href = product.page; // Redirect to product page
      });

      suggestionsContainer.appendChild(suggestionItem);
  });
}

// Clear suggestions
function clearSuggestions() {
  suggestionsContainer.innerHTML = '';
}

// Event listener for Enter key
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      const query = searchInput.value.toLowerCase().trim();
      const product = products.find(product => 
          product.name.toLowerCase() === query || 
          product.code.toLowerCase() === query
      );
      if (product) {
          window.location.href = product.page; // Redirect to product page on exact match
      } else {
          alert('Product not found!');
      }
  }
});