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
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-8E0ZRLJVHK"; // ← zamień na swój ID
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-ABCDEFG123');
    }
});
