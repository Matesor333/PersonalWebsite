const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';

let width, height;
let particles = [];
const particleCount = 100;
const connectionDistance = 150;
const mouseRepelRadius = 150;
const mouseRepelForce = 0.5;

const mouse = {
    x: -1000,
    y: -1000
};

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

class Particle {
    constructor() {
        this.init();
    }

    init() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = 2;
    }

    update() {
        // Normal movement
        this.x += this.vx;
        this.y += this.vy;

        // Mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRepelRadius) {
            const force = (mouseRepelRadius - distance) / mouseRepelRadius;
            const angle = Math.atan2(dy, dx);
            const repelX = Math.cos(angle) * force * 5;
            const repelY = Math.sin(angle) * force * 5;
            this.x += repelX;
            this.y += repelY;
            
            // Temporary boost in velocity away from mouse
            this.vx += repelX * 0.2;
            this.vy += repelY * 0.2;
        }

        // Friction to slowly return to normal speed
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Maintain a minimum speed so they always move
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const minSpeed = 0.25;
        const maxSpeed = 1;

        if (speed < minSpeed) {
            if (speed === 0) {
                const angle = Math.random() * Math.PI * 2;
                this.vx = Math.cos(angle) * minSpeed;
                this.vy = Math.sin(angle) * minSpeed;
            } else {
                this.vx = (this.vx / speed) * minSpeed;
                this.vy = (this.vy / speed) * minSpeed;
            }
        } else if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
        }

        // Boundary check
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Use a color that works in both light and dark mode, or adapt it
        const isDarkMode = document.body.classList.contains('dark-mode');
        ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(32, 87, 167, 0.5)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    const lineColor = isDarkMode ? '255, 255, 255' : '32, 87, 167';

    for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                const opacity = 1 - (dist / connectionDistance);
                ctx.strokeStyle = `rgba(${lineColor}, ${opacity * 0.2})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}

resize();
initParticles();
animate();
