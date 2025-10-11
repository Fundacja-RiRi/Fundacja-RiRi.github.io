async function loadComponent(selector, file) {
    const container = document.querySelector(selector);
    if (!container) return;
    try {
        const res = await fetch(file);
        const html = await res.text();
        container.innerHTML = html;
    } catch (err) {
        console.error("Błąd wczytywania:", file, err);
    }
}

// Wczytanie komponentów po załadowaniu DOM
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("nav", "/components/navbar.html");
    loadComponent("footer", "/components/footer.html");
});