// Éléments du DOM
const passwordEl = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const toast = document.getElementById('toast');

// Caractères possibles
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Fonction pour générer le mot de passe
function generatePassword() {
    let chars = '';
    if (uppercaseCheck.checked) chars += uppercase;
    if (lowercaseCheck.checked) chars += lowercase;
    if (numbersCheck.checked) chars += numbers;
    if (symbolsCheck.checked) chars += symbols;

    if (chars === '') {
        alert('Veuillez sélectionner au moins un type de caractères !');
        return '';
    }

    const length = parseInt(lengthSlider.value);
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

// Afficher le toast de confirmation
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Mettre à jour le mot de passe
function updatePassword() {
    const newPassword = generatePassword();
    if (newPassword) {
        passwordEl.textContent = newPassword;
    }
}

// Événements
generateBtn.addEventListener('click', updatePassword);

copyBtn.addEventListener('click', () => {
    const password = passwordEl.textContent;
    if (password && password !== 'Cliquez sur Générer') {
        navigator.clipboard.writeText(password);
        showToast();
    }
});

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
    // updatePassword();
});

uppercaseCheck.addEventListener('change', () => {});
lowercaseCheck.addEventListener('change', () => {});
numbersCheck.addEventListener('change', () => {});
symbolsCheck.addEventListener('change', () => {});

// Générer au chargement
PasswordEl.texContent='';
