function activateNavbar() {
    const currentPage = document.body.dataset.page;
    if (!currentPage) return;

    const links = document.querySelectorAll(".navbar-menu a[data-page]");

    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    console.log("Navbar activated for page:", currentPage);
}

const observer = new MutationObserver(() => {
    const navbar = document.querySelector(".navbar-menu");
    if (navbar) {
        activateNavbar();
        observer.disconnect(); 
    }
});

observer.observe(document.body, { childList: true, subtree: true });
