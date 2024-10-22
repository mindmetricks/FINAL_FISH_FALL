document.addEventListener("DOMContentLoaded", function () {
    const storyText = document.getElementById("story-text");
    const imageDisplay = document.getElementById("image-display");
    const enterButton = document.getElementById("enter-button");

    // Array of story texts and corresponding image file names
    const stories = [
        { text: "In the depths of the Indian Ocean, lives a joyous family of fish in harmony.", color: "blue", img: "1.png" },
        { text: "One day, a fierce storm swept poor Bob, the baby fish, away from his family.", color: "red", img: "2.png" },
        { text: "Fortunately, clever Bob remembers the way back to his worried family.", color: "green", img: "3.png" },
        { text: "Bob is threatened by ferocious hungry Piranhas along the way.", color: "orange", img: "4.jpg" },
        { text: "On his journey home, Bob also encounters a multitude of sharks.", color: "purple", img: "5.jpg" },
        { text: "Though Bob is skilled enough to survive multiple such attacks, each one slows him down.", color: "brown", img: "6.png" },
        { text: "Avoid predators and guide Bob through the ocean using the LEFT and RIGHT arrow keys.", color: "darkblue", img: "7.png" }
    ];

    let currentStoryIndex = 0;

    // Function to display the story
    function displayStory(index) {
        if (index < stories.length) {
            const story = stories[index];
            storyText.textContent = story.text;
            storyText.style.color = story.color;
            imageDisplay.src = story.img;

            // Show the "Press Enter" button after 5 seconds
            setTimeout(() => {
                enterButton.style.display = "block";
            }, 5000);
        } else {
            downloadCSV();  // Call to download user demographics after the story ends
        }
    }

    // Function to download demographics as CSV and redirect to index page
    function downloadCSV() {
        setTimeout(() => {
            window.location.href = 'Testinggg.html'; // Redirect to index.html
        }, 2000); // Adjust the delay as necessary
    }

    // Handle "Press Enter" button click
    enterButton.addEventListener("click", function () {
        currentStoryIndex++;
        enterButton.style.display = "none"; // Hide the button again
        displayStory(currentStoryIndex);
    });

    // Initial story display
    displayStory(currentStoryIndex);  // Start by displaying the first story
});
