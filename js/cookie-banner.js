document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const accepted = localStorage.getItem("cookiesAccepted");

    if (!accepted) {
        banner.style.display = "block";
    } else if (accepted === "true") {
        loadAnalytics();
    }

    document.getElementById("cookie-accept").addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        banner.remove();
        loadAnalytics();
    });

    document.getElementById("cookie-close").addEventListener("click", () => {
        banner.remove();
    });

    function loadAnalytics() {
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-8E0ZRLJVHK";
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-ABCDEFG123');
    }
});

// Scroll to top button 
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const scrollTarget2 = document.querySelector("body");

if (scrollToTopBtn && scrollTarget2) {
    // Show or hide the button based on scroll position
    scrollTarget2.addEventListener('scroll', () => {
        if (scrollTarget2.scrollTop > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        scrollTarget2.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}