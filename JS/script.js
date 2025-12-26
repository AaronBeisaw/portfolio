document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.parentElement;
        parent.classList.toggle('accordion-open');
    });
});