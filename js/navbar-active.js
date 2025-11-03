document.addEventListener("DOMContentLoaded", () => {
    activateNavbar();
});

function activateNavbar() {
    const currentPage = document.body.dataset.page;
    if (!currentPage) {
        console.warn("⚠️ No data-page attribute found on <body>");
        return;
    }

    const links = document.querySelectorAll(".navbar-menu a[data-page]");
    if (!links.length) {
        console.warn("⚠️ No navbar links found. Retrying...");
        // jeśli navbar jeszcze się nie załadował, spróbuj ponownie po chwili
        setTimeout(activateNavbar, 100);
        return;
    }

    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    console.log("✅ Navbar activated for page:", currentPage);
}
