document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more');
    const closeButtons = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.dataset.postIndex; // pobieramy właściwy index
            const modal = document.getElementById(`modal-${index}`);
            if(modal) modal.style.display = 'flex'; // flex, żeby wycentrować
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if(modal) modal.style.display = 'none';
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', e => {
            if(e.target === modal) modal.style.display = 'none';
        });
    });
});
