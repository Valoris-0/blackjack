document.addEventListener("DOMContentLoaded", function () {
  // Loop through all 30 days
  for (let day = 1; day <= 30; day++) {
    const dayButton = document.getElementById(`day${day}`);

    if (!dayButton) continue; // Skip if the button doesn't exist

    // Check the completion status in localStorage
    if (localStorage.getItem(`day${day}Done`) === "true") {
      dayButton.classList.add("completed-day");
      dayButton.textContent = `Day ${day} ✓`;
    } else {
      dayButton.classList.remove("completed-day");
      dayButton.textContent = `Day ${day}`;
    }

    // Add click listener to navigate to the corresponding day page
    dayButton.addEventListener("click", function () {
      window.location.href = `day.html?page=${day}`;
    });
  }
});
