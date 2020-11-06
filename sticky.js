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

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
    
});