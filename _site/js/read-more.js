document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-more");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const post = btn.closest(".post");
            const fullContent = post.querySelector(".full-content");

            if (fullContent.style.display === "none" || fullContent.style.display === "") {
                fullContent.style.display = "block";
                btn.textContent = "Zwiń";
            } else {
                fullContent.style.display = "none";
                btn.textContent = "Czytaj więcej";
            }
        });
    });
    });
