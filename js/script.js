// Selects the HTML element that will display the greeting
const greetingElement = document.getElementById("greeting");

// Gets the current hour (0–23) from the user's system time
const currentHour = new Date().getHours();

// Declaring a variable to store the greeting message
let message;

// Checks the time and assigns the appropriate greeting
if (currentHour < 12) {
  message = "Good Morning!"; // From 00:00 to 11:59
} else if (currentHour < 18) {
  message = "Good Afternoon!"; // From 12:00 to 17:59
} else {
  message = "Good Evening!";   // From 18:00 to 23:59
}

// Displays the greeting message inside the selected HTML element
greetingElement.textContent = message;
