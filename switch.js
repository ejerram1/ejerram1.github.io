// Get all sections in an array
var sections = [
    document.getElementById("section1"),
    document.getElementById("section2"),
    document.getElementById("section3")
];

// Function to hide all sections
function hideAllSections() {
    sections.forEach(function(section) {
        section.style.display = "none";
    });
}

// Add event listeners to buttons
document.getElementById("about").addEventListener("click", function() {
    hideAllSections();
    sections[0].style.display = "block"; // Show section1
});

document.getElementById("projects").addEventListener("click", function() {
    hideAllSections();
    sections[1].style.display = "block"; // Show section2
});

document.getElementById("contact").addEventListener("click", function() {
    hideAllSections();
    sections[2].style.display = "block"; // Show section3
});