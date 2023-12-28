// ----------------------------- Dark / Light Theme Toggle ----------------------------- 

let val = true
function toggleLightTheme() {
    if(val){
        document.body.classList.toggle('light');
        document.querySelector("#themeToggle").innerHTML = "Dark Theme"
        val = false
    }
    else{
        document.body.classList.remove('light');
        document.querySelector("#themeToggle").innerHTML = "Light Theme"
        val = true
    }
}







// ----------------------------- Smooth Scroll Effect ----------------------------- 

function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    }
}

// Add event listener
document.addEventListener('DOMContentLoaded', function () {
    // Get references to elements
    const themeToggle = document.getElementById('themeToggle');
    const navItems = document.querySelectorAll('.nav-items .item a');

    // Add event listener for theme toggle button
    themeToggle.addEventListener('click', function () {
        toggleLightTheme();
    });

    // Add event listeners for navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
});








// ----------------------------- About Buttons Functionality ----------------------------- 

function showInfo(buttonId) {
    // Get all info content elements
    var allInfoContents = document.querySelectorAll('.info-content');
    
    // Iterate through each info content
    allInfoContents.forEach(function(infoContent) {
        // Check if the current info content matches the clicked button
        if (infoContent.id === "info-" + buttonId) {
            if (infoContent.style.maxHeight) {
                // Toggle visibility by setting max height to null
                infoContent.style.maxHeight = null;
            } else {
                // Expand the info content by setting max height to its scroll height
                infoContent.style.maxHeight = infoContent.scrollHeight + "px";
            }
        } else {
            // Collapse other info contents
            infoContent.style.maxHeight = null;
        }
    });
}









