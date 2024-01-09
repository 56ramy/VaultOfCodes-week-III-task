const password = document.getElementById('password');
const strengthIndicator = document.getElementById('strength-indicator');

password.addEventListener('input', function () {
    const passwordValue = password.value;
    let strength = '';

    if (passwordValue.length < 5) {
        strength = 'Weak';
        strengthIndicator.className = 'weak';
    } else if (passwordValue.length >= 5 && passwordValue.length < 8) {
        strength = 'Medium';
        strengthIndicator.className = 'medium';
    } else {
        strength = 'Strong';
        strengthIndicator.className = 'strong';
    }

    strengthIndicator.textContent = strength;
});
