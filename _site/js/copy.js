// js/copy.js
function copyToClipboard(text, el) {
    navigator.clipboard.writeText(text).then(function() {
        const msg = el.querySelector('.copied-msg');
        msg.textContent = "Skopiowano!";
        msg.style.opacity = 1;
        setTimeout(() => { msg.style.opacity = 0; }, 1500);
    });
}