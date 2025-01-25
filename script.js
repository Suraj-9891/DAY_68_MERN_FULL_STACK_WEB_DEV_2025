document.addEventListener('DOMContentLoaded', function() {
    const dobInput = document.getElementById('dob');
    const currentDateInput = document.getElementById('current-date');
    const output = document.getElementById('output');
    const error = document.getElementById('error');

    // Set current date as default in the input field
    currentDateInput.value = new Date().toISOString().split('T')[0];

    document.getElementById('calculate').addEventListener('click', function() {
        const dob = new Date(dobInput.value);
        const currentDate = new Date(currentDateInput.value);

        if (!dobInput.value || !currentDateInput.value || dob > currentDate) {
            error.textContent = 'Please enter valid dates.';
            output.textContent = '';
            return;
        }

        error.textContent = '';

        const diff = currentDate - dob;
        const diffDate = new Date(diff);

        const years = diffDate.getUTCFullYear() - 1970;
        const months = diffDate.getUTCMonth();
        const days = diffDate.getUTCDate() - 1;
        const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60));
        const seconds = Math.floor(diff / 1000);

        output.innerHTML = `
            <p>Age: ${years} years | ${months} months | ${days} days</p>
            <p>Or: ${months + years * 12} months | ${days} days</p>
            <p>Or: ${weeks} weeks | ${days} days</p>
            <p>Or: ${Math.floor(diff / (1000 * 60 * 60 * 24))} days</p>
            <p>Or: ${hours} hours</p>
            <p>Or: ${minutes} minutes</p>
            <p>Or: ${seconds} seconds</p>
            <p>Made with Suraj Kumar (STM) </p>
        `;
    });

    document.getElementById('reset').addEventListener('click', function() {
        dobInput.value = '';
        currentDateInput.value = new Date().toISOString().split('T')[0];
        output.textContent = '';
        error.textContent = '';
    });
});