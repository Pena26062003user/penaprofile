// script.js

// 1. Get the modal elements from the HTML
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// 2. Get all images that should open the modal (monitor-img and styled-img)
var images = document.querySelectorAll('.monitor-img, .styled-img');

images.forEach(img => {
    // Add event listener for DOUBLE CLICK (to match the instruction in the HTML)
    img.addEventListener('dblclick', function(){
        modal.style.display = "block";
        modalImg.src = this.src; // Set modal image to the clicked image source
        captionText.innerHTML = this.alt; // Use the image's ALT text as the caption
    });
});

// 3. Close the modal when the user clicks the X button
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// 4. Close modal if user clicks anywhere outside the image (on the black background)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}