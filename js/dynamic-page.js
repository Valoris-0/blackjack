// Centralized day configuration
const dayConfig = {
  1: {
    title: "Day 1: Learn the Hi-Lo Card Counting System",
    steps: [
      {
        header: "Understand the Hi-Lo System",
        content: "The Hi-Lo System assigns values to cards: +1 for 2–6, 0 for 7–9, and -1 for 10–Ace.",
      },
      {
        header: "Practice the Running Count",
        content: "As cards are dealt, add or subtract their values to maintain a running count.",
      },
      {
        header: "Memorize the System",
        content: "Write down a deck of cards (or use a real deck) and assign the Hi-Lo values to each one.",
      },
    ],
  },
  2: {
    title: "Day 2: Practice the Running Count",
    steps: [
      {
        header: "Flip Cards One by One",
        content: "Take a shuffled deck. Flip them one by one, saying the running count out loud.",
      },
      {
        header: "Focus on Accuracy",
        content: "Ensure you maintain accuracy while counting the cards.",
      },
    ],
  },
  3: {
    title: "Day 3: Improve Your Speed",
    steps: [
      {
        header: "Repeat the Exercise",
        content: "Repeat the running count exercise, but try to count faster.",
      },
      {
        header: "Goal",
        content: "Time yourself to count through a deck in under 2 minutes.",
      },
    ],
  },
  4: {
    title: "Day 4: Practice with Online Tools",
    steps: [
      {
        header: "Use an Online Trainer",
        content: "Use an online card counting trainer. Focus on maintaining the running count.",
      },
    ],
  },
  5: {
    title: "Day 5: Learn the True Count",
    steps: [
      {
        header: "True Count Formula",
        content: "True Count = Running Count ÷ Number of Decks Remaining.",
      },
      {
        header: "Practice True Count",
        content: "Practice calculating the true count with example scenarios.",
      },
    ],
  },
  6: {
    title: "Day 6: Combine Running and True Counts",
    steps: [
      {
        header: "Combine Counts",
        content: "Shuffle two decks. Maintain the running count and calculate the true count every 10 cards.",
      },
    ],
  },
  7: {
    title: "Day 7: Test Yourself",
    steps: [
      {
        header: "Final Test for Week 1",
        content: "Count through a single deck without stopping. Ensure your final count is 0.",
      },
    ],
  },
  8: {
    title: "Day 8: Introduce Two-Deck Counting",
    steps: [
      {
        header: "Two-Deck Exercise",
        content: "Shuffle two decks. Flip cards one by one, maintaining the running count.",
      },
      {
        header: "Practice",
        content: "Count through both decks without mistakes.",
      },
    ],
  },
  9: {
    title: "Day 9: Practice with True Count Conversion",
    steps: [
      {
        header: "True Count Conversion",
        content: "After every 10 cards, calculate the true count based on decks remaining.",
      },
      {
        header: "Example",
        content: "Running count = +8, 1.5 decks remain. True count = +8 ÷ 1.5 ≈ +5.",
      },
    ],
  },
  10: {
    title: "Day 10: Speed Drills with Two Decks",
    steps: [
      {
        header: "Speed Practice",
        content: "Count through two decks, aiming to complete in under 4 minutes.",
      },
      {
        header: "Check Accuracy",
        content: "Ensure your final count is correct.",
      },
    ],
  },
  11: {
    title: "Day 11: Learn Basic Strategy Adjustments",
    steps: [
      {
        header: "Adjust Betting",
        content: "Increase bets when the true count is high (e.g., +2 or above).",
      },
      {
        header: "Adjust Playing",
        content: "Change your strategy based on the count (e.g., stand on 16 vs. dealer’s 10 if true count is +2).",
      },
    ],
  },
  12: {
    title: "Day 12: Practice Basic Strategy with True Count",
    steps: [
      {
        header: "Simulate Hands",
        content: "Use flashcards or an app to simulate blackjack hands and apply strategy adjustments.",
      },
    ],
  },
  13: {
    title: "Day 13: Multi-Deck Simulation",
    steps: [
      {
        header: "Practice",
        content: "Use four decks. Count cards and calculate the true count every 10–20 cards.",
      },
      {
        header: "Make Decisions",
        content: "Adjust bets and strategies based on the true count.",
      },
    ],
  },
  14: {
    title: "Day 14: Midweek Test",
    steps: [
      {
        header: "Test Your Skills",
        content: "Count through four decks without stopping. Track your accuracy and time.",
      },
    ],
  },
  15: {
    title: "Day 15: Simulate Casino Conditions",
    steps: [
      {
        header: "Practice with Distractions",
        content: "Shuffle four decks and count while introducing distractions like noise or music.",
      },
    ],
  },
  16: {
    title: "Day 16: Simulate Casino Conditions",
    steps: [
      {
        header: "Focus on Accuracy",
        content: "Maintain your running count despite interruptions.",
      },
    ],
  },
  17: {
    title: "Day 17: Simulate Casino Conditions",
    steps: [
      {
        header: "Simulate a Real Game",
        content: "Count cards as if you were at a casino table.",
      },
    ],
  },
  18: {
    title: "Day 18: Practice with Dealer Simulations",
    steps: [
      {
        header: "Dealer Simulation",
        content: "Have a friend deal cards, simulating a real blackjack game. Maintain the running count.",
      },
    ],
  },
  19: {
    title: "Day 19: Practice with Dealer Simulations",
    steps: [
      {
        header: "Combine Skills",
        content: "Make basic strategy decisions while maintaining your count.",
      },
    ],
  },
  20: {
    title: "Day 20: Practice with Dealer Simulations",
    steps: [
      {
        header: "Accuracy Under Pressure",
        content: "Focus on making the right decisions under simulated game conditions.",
      },
    ],
  },
  21: {
    title: "Day 21: Speed and Accuracy Challenge",
    steps: [
      {
        header: "Count Through Six Decks",
        content: "Count through six decks while calculating the true count every 20 cards.",
      },
    ],
  },
  22: {
    title: "Day 22: Refine Betting Strategies",
    steps: [
      {
        header: "Adjust Bets",
        content: "Practice adjusting bets based on the true count.",
      },
    ],
  },
  23: {
    title: "Day 23: Refine Betting Strategies",
    steps: [
      {
        header: "Simulate True Counts",
        content: "Simulate different scenarios and refine your betting strategies.",
      },
    ],
  },
  24: {
    title: "Day 24: Refine Betting Strategies",
    steps: [
      {
        header: "Advanced Adjustments",
        content: "Practice making complex adjustments based on the count.",
      },
    ],
  },
  25: {
    title: "Day 25: Full Game Simulation",
    steps: [
      {
        header: "Simulate Entire Sessions",
        content: "Combine all skills: counting, true count conversion, and strategy adjustments.",
      },
    ],
  },
  26: {
    title: "Day 26: Full Game Simulation",
    steps: [
      {
        header: "Test Yourself",
        content: "Simulate sessions and track your accuracy under realistic conditions.",
      },
    ],
  },
  27: {
    title: "Day 27: Full Game Simulation",
    steps: [
      {
        header: "Refine Your Approach",
        content: "Focus on improving any weak areas in your gameplay.",
      },
    ],
  },
  28: {
    title: "Day 28: Realistic Speed Test",
    steps: [
      {
        header: "Final Speed Challenge",
        content: "Count through six decks with distractions and time pressure.",
      },
    ],
  },
  29: {
    title: "Day 29: Final Assessment",
    steps: [
      {
        header: "Simulated Game",
        content: "Play a simulated game to test your ability to maintain counts and adjust strategy.",
      },
    ],
  },
  30: {
    title: "Day 30: Final Assessment",
    steps: [
      {
        header: "Final Test",
        content: "Combine all skills in a final assessment to ensure you're ready for real games.",
      },
    ],
  },
};


// Dynamic Page Initialization
function initializePage() {
  // Get the page parameter from URL
  const urlParams = new URLSearchParams(window.location.search);
  const day = urlParams.get("page");

  if (!day) {
    console.error("No day specified");
    return;
  }

  // Populate page content
  const config = dayConfig[day];
  if (!config) {
    console.error(`No configuration for Day ${day}`);
    return;
  }

  // Set page title
  document.querySelector("header h1").textContent = config.title;

  // Populate steps
  const stepsList = document.querySelector("ol");
  stepsList.innerHTML = config.steps
    .map(
      (step, index) => `
        <li class="accordion-item">
            <div class="accordion-header">
                ${step.header}
            </div>
            <div class="accordion-content">
                ${step.content}
            </div>
        </li>
    `
    )
    .join("");

  // Setup timer
  setupTimer();

  // Accordion functionality
  setupAccordion();

  // Mark as done functionality
  setupMarkAsDone(day);

  // Initialize cards, shuffle button, and drag-and-drop
  initializeCards();
  setupShuffleButton();
  setupDragAndDrop();
}

// Timer Functionality
function setupTimer() {
  const timerElement = document.getElementById("timer");
  const startButton = document.getElementById("startButton");
  const pauseButton = document.getElementById("pauseButton");
  const resetButton = document.getElementById("resetButton");

  // Load click sound
  const clickSound = new Audio("sounds/click.mp3");

  let time = 15 * 60; // 15 minutes in seconds
  let timerInterval;
  let isPaused = false;

  function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }

  function startTimer() {
    playClickSound();
    if (!isPaused) {
      timerInterval = setInterval(() => {
        time--;
        updateTimerDisplay();
        if (time <= 0) {
          clearInterval(timerInterval);
        }
      }, 1000);
    } else {
      isPaused = false;
      timerInterval = setInterval(() => {
        time--;
        updateTimerDisplay();
        if (time <= 0) {
          clearInterval(timerInterval);
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    playClickSound();
    clearInterval(timerInterval);
    isPaused = true;
  }

  function resetTimer() {
    playClickSound();
    clearInterval(timerInterval);
    time = 15 * 60;
    updateTimerDisplay();
  }

  // Event listeners for buttons
  startButton.addEventListener("click", startTimer);
  pauseButton.addEventListener("click", pauseTimer);
  resetButton.addEventListener("click", resetTimer);

  // Initial timer display update
  updateTimerDisplay();
}

// Accordion Functionality
function setupAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const accordionItem = header.parentElement;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        accordionItem.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        accordionItem.classList.add("active");
      }
    });
  });
}

function setupMarkAsDone(day) {
  const markDoneButton = document.getElementById(`markDoneDay${day}`);

  // Initialize the button state based on localStorage
  if (localStorage.getItem(`day${day}Done`) === "true") {
    markDoneButton.textContent = "Mark as Uncompleted";
    markDoneButton.classList.add("completed");
  } else {
    markDoneButton.textContent = "Mark as Done";
    markDoneButton.classList.remove("completed");
  }

  // Add event listener for button clicks
  markDoneButton.addEventListener("click", function () {
    const isCompleted = localStorage.getItem(`day${day}Done`) === "true";

    if (isCompleted) {
      // Mark as not done
      localStorage.removeItem(`day${day}Done`);
      markDoneButton.textContent = "Mark as Done";
      markDoneButton.classList.remove("completed");
    } else {
      // Mark as done
      localStorage.setItem(`day${day}Done`, "true");
      markDoneButton.textContent = "Mark as Uncompleted";
      markDoneButton.classList.add("completed");
    }

    // Update the calendar dynamically
    updateCalendarButton(day, !isCompleted);
  });
}

// Function to update the calendar button
function updateCalendarButton(day, completed) {
  const calendarButton = document.getElementById(`day${day}`);
  if (calendarButton) {
    if (completed) {
      calendarButton.classList.add("completed-day");
      calendarButton.textContent = `Day ${day} ✓`;
    } else {
      calendarButton.classList.remove("completed-day");
      calendarButton.textContent = `Day ${day}`;
    }
  }
}

function initializeCards() {
  const cardContainer = document.getElementById("card-container");
  const cards = [];

  // Generate a deck of cards
  for (let i = 1; i <= 52; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = "Card " + i; // Simplified for demo
    card.draggable = true;

    // Flip Card Logic
    card.addEventListener("click", () => {
      card.textContent = card.textContent === "Flipped" ? "Card " + i : "Flipped";
    });

    // Drag Logic
    card.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", card.id);
    });

    cards.push(card);
  }

  // Append cards to the container
  cards.forEach((card) => cardContainer.appendChild(card));
}

// Handle shuffle functionality
function setupShuffleButton() {
  const shuffleButton = document.getElementById("shuffle-button");
  shuffleButton.addEventListener("click", () => {
    const cardContainer = document.getElementById("card-container");
    const cards = Array.from(cardContainer.children);

    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);

    // Clear and re-add shuffled cards
    cardContainer.innerHTML = "";
    cards.forEach((card) => cardContainer.appendChild(card));
  });
}

function setupDragAndDrop() {
  const pageContainer = document.getElementById("page-container");

  pageContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  pageContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(cardId);

    // Position the card where it was dropped
    const x = e.clientX - card.offsetWidth / 2;
    const y = e.clientY - card.offsetHeight / 2;

    card.style.position = "absolute";
    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
  });
}

// Initialize everything
function initializePage() {
  // Other initialization code...
  initializeCards();
  setupShuffleButton();
  setupDragAndDrop();
}

// Initialize page on load
window.onload = initializePage;
