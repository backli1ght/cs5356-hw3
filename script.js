document.addEventListener("DOMContentLoaded", function () {
    const dogImage = document.getElementById("dogImage");
    const fetchDogBtn = document.getElementById("fetchDogBtn");

    async function fetchDog() {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            dogImage.src = data.message;
        } catch (error) {
            console.error("Error fetching dog image:", error);
            dogImage.alt = "Failed to load image.";
        }
    }

    // Load an initial image on page load
    fetchDog();

    // Fetch a new image on button click
    fetchDogBtn.addEventListener("click", fetchDog);

    const body = document.body;

    // Function to change background color based on mouse position
    function handleMouseMove(event) {
        const x = event.clientX; // Get mouse X position
        const y = event.clientY; // Get mouse Y position
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Generate RGB colors based on mouse position
        const red = Math.round((x / width) * 255);
        const green = Math.round((y / height) * 255);
        const blue = 150; // Keep blue fixed for a smooth color effect

        // Apply the new background color
        body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    // Attach event listener to the document
    document.addEventListener("mousemove", handleMouseMove);
});
