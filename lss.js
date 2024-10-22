// script.js

document.addEventListener("DOMContentLoaded", function () {
    const storyText = document.getElementById("story-text");
    const imageDisplay = document.getElementById("image-display");
    const enterButton = document.getElementById("enter-button");

    // Define story texts and corresponding images
    const texts = [
        { text: "Bob could not be saved and died in the depths of the ocean.", color: "rgb(139, 0, 0)" },
        { text: "His family mourns the loss of their child and still awaits his arrival.", color: "black" }
    ];

    const images = [
        "8.png",  // Make sure these images are in the same directory
        "9.png"
    ];

    let currentIndex = 0;

    // Function to display the text and image
    function displayContent(index) {
        if (index < texts.length) {
            const currentText = texts[index];
            storyText.textContent = currentText.text;
            storyText.style.color = currentText.color;
            imageDisplay.src = images[index];

            // Show the "Press Enter" button after 4 seconds
            setTimeout(() => {
                enterButton.style.display = "block";
            }, 4000);
        } else {
            downloadCSV();
        }
    }

        // Function to download demographics as CSV and redirect to index page
    function downloadCSV() {
        setTimeout(() => {
            window.location.href = 'Feedback.html'; // Redirect to index.html
        }, 2000); // Adjust the delay as necessary
    }

    // Handle "Press Enter" button click
    enterButton.addEventListener("click", function () {
        currentIndex++;
        enterButton.style.display = "none"; // Hide the button again
        displayContent(currentIndex);
    });

    // Initial display
    displayContent(currentIndex);
});
