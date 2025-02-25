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
});
