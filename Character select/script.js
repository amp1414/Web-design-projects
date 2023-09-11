// Set up variables
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const playBtn = document.querySelector('.play');

let currentSlide = 0;
let slideInterval;

// Show the first slide
slides[currentSlide].classList.add('active');

// Create functions for the buttons
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function playSlides() {
  slideInterval = setInterval(nextSlide, 2000);
}

function pauseSlides() {
  clearInterval(slideInterval);
}

// Add event listeners to the buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
playBtn.addEventListener('click', function() {
    if (slideInterval) {
        pauseSlides();
        
      } else {
        playSlides();
       
      }
});


const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('click', (event) => {
        const imageUrl = event.target.src;
        window.open(imageUrl, '_blank');
    });
});

const addButton = document.querySelector('#addButton');
const favoritesArea = document.querySelector('#favoritesArea');
let favoritesCount = 0;

addButton.addEventListener('click', () => {
	if (favoritesCount < 5) {
		const activeImage = document.querySelector('.active');
		const clonedImage = activeImage.cloneNode(true);
    clonedImage.style.width = '125px';
    clonedImage.style.height = '200px';
		favoritesArea.appendChild(clonedImage);
		favoritesCount++;
    favoritesArea.style.display = 'flex';
    favoritesArea.style.flexWrap = 'nowrap';
	} else {
		alert('You can only add a maximum of 5 favorites.');
	}
});

favoritesArea.addEventListener('click', (event) => {
	if (event.target.className === 'removeButton') {
		const favoriteImage = event.target.parentElement;
		favoritesArea.removeChild(favoriteImage);
		favoritesCount--;
	}
});
favoritesArea.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName === 'IMG') {
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    target.insertAdjacentElement('afterend', removeButton);

    removeButton.addEventListener('click', () => {
      target.remove();
      removeButton.remove();
      favoritesCount--;
    });
  }
});
