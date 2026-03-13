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

// Get all buttons that show project details
const buttons = document.querySelectorAll(".showDetails");

// Loop through each button
buttons.forEach(function(button) {

    // Add a click event to each button
    button.addEventListener("click", function() {

        // Find the description that belongs to the same project
        const description = button.parentElement.querySelector(".projectDescription");
       
        // Check if the description is currently visible
        if (description.style.display === "block") {
            // Hide the description
            description.style.display = "none";
            // Change the button text back to "Show details"
            button.textContent = "Show details";
        } 
        else {
            // Show the description
            description.style.display = "block";
            // Change the button text to "Hide details"
            button.textContent = "Hide details";
        }

    });

});