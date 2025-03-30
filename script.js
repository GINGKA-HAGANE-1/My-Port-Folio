function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "Web Developer",
    "Full Stack Developer",
    "Game Developer",
    "Ethical Hacker",
    "Penetration Tester"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter
// Add these functions to your script.js
function showModal() {
    document.getElementById('hireModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('hireModal').style.display = 'none';
}

// Update the hire me button click handler
document.querySelector('.btn button').addEventListener('click', showModal);

// About section typewriter effect
// About section texts
const aboutTexts = {
    background: [
        "I began my journey in technology at a young age, driven by an insatiable curiosity for how things work in the digital world. Through years of dedicated learning and hands-on experience, I've developed a comprehensive understanding of both front-end and back-end technologies. My educational pursuit in Computer Science has further strengthened my foundation, allowing me to create robust and efficient solutions while staying current with emerging technologies."
    ],
    goals: [
        "Inspired by the remarkable journey of Sundar Pichai, I aspire to reach the pinnacle of technological leadership. My vision extends beyond personal success – I aim to drive innovation that positively impacts global communities. Through continuous learning and practical application of cutting-edge technologies, I'm working towards becoming a transformative leader who can shape the future of technology while maintaining the highest standards of excellence and innovation."
    ]
};

function typeAboutSection() {
    const backgroundEl = document.querySelector('.background-text');
    const goalsEl = document.querySelector('.goals-text');
    let bgIndex = 0;
    let goalIndex = 0;
    let speed = 15;

    function typeSimultaneously() {
        // Type background text
        if (bgIndex < aboutTexts.background[0].length) {
            backgroundEl.innerHTML += aboutTexts.background[0].charAt(bgIndex);
            bgIndex++;
        }

        // Type goals text
        if (goalIndex < aboutTexts.goals[0].length) {
            const currentText = aboutTexts.goals[0];
            if (currentText.substring(goalIndex).startsWith("Sundar Pichai")) {
                goalsEl.innerHTML += '<span class="gold-text">Sundar Pichai</span>';
                goalIndex += "Sundar Pichai".length;
            } else {
                goalsEl.innerHTML += currentText.charAt(goalIndex);
                goalIndex++;
            }
        }

        // Continue if either text isn't complete
        if (bgIndex < aboutTexts.background[0].length || goalIndex < aboutTexts.goals[0].length) {
            setTimeout(typeSimultaneously, speed);
        }
    }

    // Start typing both sections
    typeSimultaneously();
}

// Start typing when section is visible
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        typeAboutSection();
        observer.unobserve(entries[0].target);
    }
}, { threshold: 0.2 });

document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
});
