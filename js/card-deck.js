// Card Data (Simple Example)
const cardDeck = [
  { id: 1, name: "Ace of Spades", image: "path-to-ace-spades.jpg" },
  { id: 2, name: "King of Hearts", image: "path-to-king-hearts.jpg" },
  // Add more cards here
];

// Initialize Deck
const deckContainer = document.getElementById("deck-container");
const cardDeckElement = document.getElementById("card-deck");

// Shuffle Deck
function shuffleDeck() {
  cardDeck.sort(() => Math.random() - 0.5);
  alert("Deck shuffled!");
}

// Flip and Teleport Card
cardDeckElement.addEventListener("click", function () {
  if (cardDeck.length === 0) return;
  
  const card = cardDeck.pop(); // Draw the top card
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.style.backgroundImage = `url(${card.image})`;
  cardElement.draggable = true;

  // Add dragging functionality
  cardElement.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", card.id);
  });

  // Teleport card to first available drop area
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
