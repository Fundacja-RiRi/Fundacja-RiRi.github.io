// navbar-active.js
(function () {
    function doActivate() {
        try {
            const currentPage = document.body.dataset.page;
            if (!currentPage) return false;

            const links = document.querySelectorAll('.navbar-menu a[data-page]');
            if (!links || links.length === 0) return false;

            links.forEach(link => {
                if (link.dataset.page === currentPage) link.classList.add('active');
                else link.classList.remove('active');
            });

            console.log('[navbar-active] activated', currentPage);
            return true;
        } catch (e) {
        console.error('[navbar-active] error', e);
        return false;
        }
    }

    // Uruchom po DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        doActivate();
        // retry fallback: spróbuj kilka razy w krótkich odstępach
        let attempts = 0;
        const maxAttempts = 6;
        const interval = setInterval(() => {
            attempts++;
            if (doActivate() || attempts >= maxAttempts) clearInterval(interval);
        }, 250);
    });

    // Nasłuchuj eventu, który inny skrypt może wyemitować po zakończeniu pracy
    document.addEventListener('app:ready', () => {
        console.log('[navbar-active] received app:ready event');
        doActivate();
    });

    // expose for manual calls (opcjonalne)
    window.activateNavbar = doActivate;
})();
