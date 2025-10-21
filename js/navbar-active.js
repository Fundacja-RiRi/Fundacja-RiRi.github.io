document.addEventListener('DOMContentLoaded', () => {
    const current = document.body.dataset.page;
    const links = document.querySelectorAll('.navbar-menu a[data-page]');

    links.forEach(link => {
        if (link.dataset.page === current) {
            link.classList.add('active');
        }
    });
});
