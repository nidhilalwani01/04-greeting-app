// Get the input field element from the page
let nameInput = document.getElementById("nameInput");

// Get the button element from the page
let button = document.getElementById("greetButton");

// Get the paragraph element where we'll show the message
let messageElement = document.getElementById("message");

// Add a click event listener to the button
// This function runs when the button is clicked
button.addEventListener("click", function() {
  // Get the name that the user typed into the input field
  let userName = nameInput.value;
  
  // Create a fun personalized message using the user's name
  let welcomeMessage = "Welcome, " + userName + "! 🎉 So glad you're here!";
  
  // Display the message on the page
  messageElement.textContent = welcomeMessage;
  
  // Clear the input field so it's ready for next time
  nameInput.value = "";
});