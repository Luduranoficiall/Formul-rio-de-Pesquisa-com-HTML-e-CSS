// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pesquisa-form');
    const inputs = form.querySelectorAll('input, select, textarea');

    function validateForm() {
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }

    form.addEventListener('submit', function(e) {
        if (!validateForm()) {
            e.preventDefault();
        }
    });
});