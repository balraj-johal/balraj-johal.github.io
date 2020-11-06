// ///////////////// fixed menu on scroll for desktop
window.onload = function() {
    
    window.onscroll = function() {stick()};

    // Get the navbar
    var navbar = document.getElementById("sticky-nav");
    var title = document.getElementById("title");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stick() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
            title.classList.add("fill-sticky-gap")
        } else {
            navbar.classList.remove("sticky");
            title.classList.remove("fill-sticky-gap")
        }
    } 
}
