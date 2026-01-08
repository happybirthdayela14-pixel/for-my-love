const reasons = [
    "The way you make me smile through a screen.",
    "Your voice is my favorite notification.",
    "How you handle the distance with so much grace.",
    "The way you believe in me more than I do.",
    "You are the best thing that ever happened to me."
];

let hugs = 0;

// --- STEP NAVIGATION LOGIC ---
function showPart(partNumber) {
    // Hide all parts
    document.getElementById('part-1').style.display = 'none';
    document.getElementById('part-2').style.display = 'none';
    document.getElementById('part-3').style.display = 'none';

    // Show the specific part
    const selectedPart = document.getElementById('part-' + partNumber);
    selectedPart.style.display = 'block';
    
    // Smooth scroll back to the top of the container
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- PASSWORD & GIFT LOGIC ---
function validatePassword() {
    const pass = document.getElementById('secret-code').value;
    const passwordScreen = document.getElementById('password-screen');
    const lockScreen = document.getElementById('lock-screen');
    const errorMsg = document.getElementById('error-msg');

    if (pass === '011406') {
        passwordScreen.style.display = 'none';
        lockScreen.style.display = 'flex'; 
    } else {
        errorMsg.style.display = 'block';
    }
}

function openGift() {
    const lockScreen = document.getElementById('lock-screen');
    const mainContent = document.getElementById('main-content');
    
    lockScreen.style.display = 'none';
    mainContent.style.display = 'block';
    
    // Set the initial view to Part 1
    showPart(1);
    
    // Start confetti & music
    createConfetti();
    const music = document.getElementById('bg-music');
    music.play().catch(e => console.log("Music requires user interaction first"));
    isPlaying = true;
}

// --- INTERACTIVE FEATURES ---
function sendHug() {
    hugs++;
    document.getElementById('hug-count').innerText = `Hugs sent today: ${hugs}`;
    const btn = document.querySelector('.btn-hug');
    btn.innerText = "Hug Sent! ❤️";
    setTimeout(() => { btn.innerText = "Send a Virtual Hug 🫂"; }, 1000);
}

function revealScratch() {
    const overlay = document.getElementById('scratch-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.style.display = 'none'; }, 800);
}

function generateReason() {
    const text = document.getElementById('reason-text');
    const random = reasons[Math.floor(Math.random() * reasons.length)];
    text.innerText = random;
}

// --- BACKGROUND & VISUALS ---
function createBackgroundHearts() {
    const container = document.getElementById('bg-hearts');
    for(let i=0; i<15; i++) {
        const heart = document.createElement('div');
        heart.className = 'bg-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 5 + 's';
        container.appendChild(heart);
    }
}
createBackgroundHearts();

function createConfetti() {
    for(let i=0; i<60; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.backgroundColor = ['#ff4d6d','#ffffff','#ff758f'][Math.floor(Math.random()*3)];
        c.style.animationDuration = Math.random() * 2 + 2 + 's';
        document.body.appendChild(c);
    }
}

// --- MUSIC CONTROL ---
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (isPlaying) { 
        music.pause(); 
    } else { 
        music.play().catch(e => console.log("Music blocked")); 
    }
    isPlaying = !isPlaying;
}