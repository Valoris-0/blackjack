const showDialog = (message) => {
    document.querySelector("dialog > p").innerText = message;
    document.querySelector("dialog").showModal();
}

class Blackjack {
    constructor() {
        this.decks = [];
        this.playerHand = [];
        this.dealerHand = [];
        this.loadCardImages();
        this.initializeGame();
        this.bindEvents();
    }

    loadCardImages() {
        this.cardImages = {};
        const suits = ['H', 'D', 'C', 'S'];  // Hearts, Diamonds, Clubs, Spades
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        suits.forEach(suit => {
            values.forEach(value => {
                const img = new Image();
                img.src = `img/cards/${value}${suit}.png`;
                this.cardImages[`${value}${suit}`] = img;
            });
        });

        // Add card back image
        const backImg = new Image();
        backImg.src = 'img/cards/BACK.png';
        this.cardImages['BACK'] = backImg;
    }

    initializeGame() {
        this.addDeck();
        this.shuffle();
        this.renderDeck();
    }

    addDeck() {
        const suits = ['H', 'D', 'C', 'S'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        suits.forEach(suit => {
            values.forEach(value => {
                this.decks.push({
                    suit,
                    value,
                    key: `${value}${suit}`
                });
            });
        });
    }

    shuffle() {
        for (let i = this.decks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.decks[i], this.decks[j]] = [this.decks[j], this.decks[i]];
        }
    }

    dealCard(hand) {
        const card = this.decks.pop();
        hand.push(card);
        return card;
    }

    calculateHand(hand) {
        let total = 0;
        let aces = 0;

        hand.forEach(card => {
            if (card.value === 'A') {
                aces++;
            } else if (['K', 'Q', 'J'].includes(card.value)) {
                total += 10;
            } else {
                total += parseInt(card.value);
            }
        });

        for (let i = 0; i < aces; i++) {
            if (total + 11 <= 21) {
                total += 11;
            } else {
                total += 1;
            }
        }

        return total;
    }

    renderHand(hand, element, hideFirst = false) {
        const container = document.querySelector(element);
        container.innerHTML = '';
        
        const cardsWrapper = document.createElement('div');
        cardsWrapper.className = 'cards-wrapper';
        
        hand.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            
            // If it's dealer's second card and should be hidden
            if (hideFirst && index === 1) {
                cardElement.className += ' face-down';
                cardElement.innerHTML = `
                    <div class="card-value"></div>
                    <div class="card-suit"></div>
                `;
            } else {
                let displayValue = card.value;
                let suitSymbol = this.getSuitSymbol(card.suit);
                if (['K', 'Q', 'J'].includes(card.value)) displayValue = card.value;
                cardElement.innerHTML = `
                    <div class="card-value">${displayValue}</div>
                    <div class="card-suit" data-suit="${card.suit}">${suitSymbol}</div>
                `;
            }
            
            cardsWrapper.appendChild(cardElement);
        });
        
        container.appendChild(cardsWrapper);

        // Only show total for player or when dealer's turn
        if (!hideFirst) {
            const total = this.calculateHand(hand);
            const totalElement = document.createElement('div');
            totalElement.className = 'hand-total';
            totalElement.textContent = `Total: ${total}`;
            container.appendChild(totalElement);
        }
    }

    getSuitSymbol(suit) {
        switch(suit) {
            case 'H': return '♥';
            case 'D': return '♦';
            case 'C': return '♣';
            case 'S': return '♠';
            default: return '';
        }
    }

    renderDeck() {
        // Add a visible deck of cards in the center
        const deck = document.createElement('div');
        deck.className = 'deck';
        deck.innerHTML = `
            <div class="card" style="background-color: #000;">
                <div class="card-back"></div>
            </div>
        `;
        document.querySelector('.stage').appendChild(deck);
    }

    bindEvents() {
        // Fix button functionality
        document.querySelector('.hit').addEventListener('click', () => {
            if (this.playerHand.length > 0) {  // Only if game is active
                this.hit();
            }
        });

        document.querySelector('.stand').addEventListener('click', () => {
            if (this.playerHand.length > 0) {  // Only if game is active
                this.stand();
            }
        });

        document.querySelector('.new-game').addEventListener('click', () => this.newGame());
        
        document.querySelector('.shuffle').addEventListener('click', () => {
            this.shuffle();
            showDialog('Deck shuffled!'); 
        });

        document.querySelector('.add-deck').addEventListener('click', () => {
            this.addDeck();
            this.shuffle();
            showDialog('New deck added and shuffled!');
        });
    }

    hit() {
        const card = this.dealCard(this.playerHand);
        this.renderHand(this.playerHand, '.player-cards');
        
        const score = this.calculateHand(this.playerHand);
        if (score > 21) {
            setTimeout(() => {
                showDialog('Bust! Dealer wins!');
                this.newGame();
            }, 500);
        }
    }

    stand() {
        // Show dealer's hidden card
        this.renderHand(this.dealerHand, '.dealer-cards', false);
        
        const dealerPlay = () => {
            const dealerScore = this.calculateHand(this.dealerHand);
            if (dealerScore < 17) {
                this.dealCard(this.dealerHand);
                this.renderHand(this.dealerHand, '.dealer-cards', false);
                setTimeout(dealerPlay, 500);
            } else {
                this.endGame();
            }
        };

        setTimeout(dealerPlay, 500);
    }

    endGame() {
        const playerTotal = this.calculateHand(this.playerHand);
        const deshowDialogotal = this.calculateHand(this.dealerHand);
        
        setTimeout(() => {
            let message = `Your score: ${playerTotal}\nDealer's score: ${deshowDialogotal}\n\n`;
            
            if (deshowDialogotal > 21) {
                message += 'Dealer busts! You win!';
            } else if (playerTotal > deshowDialogotal) {
                message += 'You win!';
            } else if (deshowDialogotal > playerTotal) {
                message += 'Dealer wins!';
            } else {
                message += 'Push! It\'s a tie!';
            }
            
            showDialog(message);
            this.newGame();
        }, 500);
    }

    newGame() {
        if (this.decks.length < 10) {
            this.addDeck();
            this.shuffle();
        }
        this.playerHand = [];
        this.dealerHand = [];
        this.dealCard(this.playerHand);
        this.dealCard(this.playerHand);
        this.dealCard(this.dealerHand);
        this.renderHand(this.playerHand, '.player-cards');
        this.renderHand(this.dealerHand, '.dealer-cards', true);
    }
}

// Initialize game
new Blackjack();