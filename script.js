const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const celebration = document.getElementById('celebration');
const resetBtn = document.getElementById('resetBtn');

// Yes button click handler
yesBtn.addEventListener('click', function() {
    celebration.classList.remove('hidden');
    createConfetti();
});

// No button hover/click handler - makes it run away
noBtn.addEventListener('mouseenter', function() {
    moveNoButton();
});

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveNoButton();
});

function moveNoButton() {
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease-out';
}

// Reset button to go back to the main page
resetBtn.addEventListener('click', function() {
    celebration.classList.add('hidden');
});

// Create confetti effect
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const confettiPieces = 50;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${2 + Math.random() * 1}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3500);
    }
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#ff8e72', '#ffd93d', '#6bcf7f', '#4d96ff', '#a78bfa', '#f472b6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add CSS animation for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
