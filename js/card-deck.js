// Card Data (Simple Example)
const cardDeck = [
  { id: 1, name: "Ace of Spades", image: "path-to-ace-spades.jpg" },
  { id: 2, name: "King of Hearts", image: "path-to-king-hearts.jpg" },
  // Add more cards here
];

// Initialize Deck
const deckContainer = document.getElementById("deck-container");
const cardDeckElement = document.getElementById("card-deck");
let cardsDealt = 0; // Track number of cards dealt

// Flip and Teleport Card (modified to create cards on demand)
cardDeckElement.addEventListener("click", function () {
  if (cardsDealt >= 52) return; // Stop if all cards dealt
  
  cardsDealt++;
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.textContent = `Card ${cardsDealt}`;
  cardElement.draggable = true;

  // Add dragging functionality
  cardElement.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", cardsDealt);
  });

  // Find first empty drop area and place card
  const dropAreas = document.querySelectorAll(".drop-area");
  for (const dropArea of dropAreas) {
    if (!dropArea.hasChildNodes()) {
      dropArea.appendChild(cardElement);
      break;
    }
  }
});

// Make Drop Areas Interactive
const dropAreas = document.querySelectorAll(".drop-area");
dropAreas.forEach((area) => {
  area.addEventListener("dragover", (e) => e.preventDefault());
  area.addEventListener("drop", (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text/plain");
    const cardElement = document.querySelector(`[data-id='${cardId}']`);
    if (cardElement) {
      area.appendChild(cardElement);
    }
  });
});

// Default card back image (Base64 string or URL)
const defaultCardBack = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='; // Replace with your default image

// Function to remove background from image
async function removeImageBackground(imageUrl) {
  // This is a placeholder for background removal
  // You would typically use an API service for this
  // For now, we'll just return the original image
  return imageUrl;
}

// Function to set custom deck image
function setDeckImage(imageUrl) {
  const deckElement = document.querySelector('.card-deck');
  const deckLayers = document.querySelectorAll('.deck-layer');
  
  // Create a new image object to check if image loads successfully
  const img = new Image();
  
  img.onload = function() {
    // Fade out current deck
    deckElement.style.opacity = '0';
    
    setTimeout(() => {
      // Hide default deck styling
      deckElement.style.backgroundColor = 'transparent';
      deckElement.style.boxShadow = 'none';
      
      // Remove default deck pseudo-elements
      deckElement.style.setProperty('--before-display', 'none');
      deckElement.style.setProperty('--after-display', 'none');
      
      // Apply image to all deck layers
      deckLayers.forEach(layer => {
        layer.style.backgroundImage = `url(${imageUrl})`;
        layer.style.backgroundColor = 'transparent';
      });
      
      // Fade back in
      deckElement.style.opacity = '1';
    }, 300);
  };
  
  img.onerror = function() {
    console.error('Error loading image:', imageUrl);
  };
  
  // Start loading the image
  img.src = imageUrl;
}

// Call setDeckImage with your image path (make sure the path is correct)
setDeckImage('assets/idk.png');

// Initialize with default or saved image
const savedDeckImage = localStorage.getItem('deckImage') || defaultCardBack;
setDeckImage(savedDeckImage);
