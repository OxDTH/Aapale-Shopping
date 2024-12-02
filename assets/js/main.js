/*=============== SHOW MENU ===============*/

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
    ASO3JK29M8Z7: 'Yellow Braided Loop.html'
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

