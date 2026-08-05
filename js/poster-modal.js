document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('posterTrigger');
    const modal = document.getElementById('posterModal');
    const closeBtn = document.getElementById('posterModalClose');

    if (!trigger || !modal) return;

    // Open overlay
    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Block scrolling when modal is open
    };

    // Close overlay
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling when modal is closed
    };

    trigger.addEventListener('click', openModal);


    // Close overlay 
    // X button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    // Click background
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});