/* =====================================
   GŁÓWNY SKRYPT PORADNI
   =====================================
   Zawiera proste funkcje:
   1. Obsługa menu mobilnego (hamburger)
   2. Podświetlanie aktywnej zakładki
*/

// 1. OBSŁUGA MENU MOBILNEGO
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger"); // przycisk menu
    const menu = document.querySelector(".menu");           // lista linków w nawigacji

    // Po kliknięciu w hamburger przełącz klasę "open" w menu
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    // 2. PODŚWIETLANIE AKTYWNEJ ZAKŁADKI
    // Pobierz aktualny adres URL strony
    const currentPage = window.location.pathname.split("/").pop();

    // Przejdź po wszystkich linkach w menu
    document.querySelectorAll(".menu a").forEach(link => {
        // Jeśli href linku pasuje do aktualnej strony – ustaw aria-current
        if (link.getAttribute("href") === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });
});
