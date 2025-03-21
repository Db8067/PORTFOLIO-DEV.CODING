

// Get the modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Function to open the modal and display the clicked image
function openModal(imgSrc) {
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add click event listeners to all images in the past work section
const workImages = document.querySelectorAll('.work .card-img img');
workImages.forEach((img) => {
    img.addEventListener('click', () => {
        openModal(img.src);
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', closeModal);

// Close the modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", function () {
        navigation.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
});


