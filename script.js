const submitBtn = document.getElementById('submitBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const form = document.getElementById('loginForm');
const buttonContainer = document.querySelector('.button-container');

let isMoved = false;


function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function moveButtonRapidly() {
    const containerRect = buttonContainer.getBoundingClientRect();
    const buttonRect = submitBtn.getBoundingClientRect();


    let newX = Math.random() * (containerRect.width - buttonRect.width);
    let newY = Math.random() * (containerRect.height - buttonRect.height);

    submitBtn.style.left = `${newX}px`;
    submitBtn.style.top = `${newY}px`;
}


document.addEventListener('mousemove', (e) => {
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const buttonRect = submitBtn.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distance = getDistance(cursorX, cursorY, buttonCenterX, buttonCenterY);


    if (distance < 50 && (!usernameInput.value || !emailInput.value || !passwordInput.value)) {
        if (!isMoved) {
            submitBtn.textContent = 'Data Daal Pehle!';
            isMoved = true;
        }


        usernameInput.classList.add('error');
        emailInput.classList.add('error');
        passwordInput.classList.add('error');
        submitBtn.classList.add('move-away');

        moveButtonRapidly();
    }
});


usernameInput.addEventListener('input', () => resetButton());
emailInput.addEventListener('input', () => resetButton());
passwordInput.addEventListener('input', () => resetButton());

function resetButton() {

    if (usernameInput.value && emailInput.value && passwordInput.value) {
        submitBtn.style.position = 'static';
        submitBtn.textContent = 'Submit';
        isMoved = false;


        usernameInput.classList.remove('error');
        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');
        submitBtn.classList.remove('move-away');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernameInput.value && emailInput.value && passwordInput.value) {
        alert('Form submitted!');
    }
});
