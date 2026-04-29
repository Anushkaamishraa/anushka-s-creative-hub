const allMediaFiles = [
    "20260411_002921.mp4", "20260411_182054.jpg.jpeg", "20260411_182906.jpg.jpeg",
    "Snapchat-1058941351.mp4", "Snapchat-1120572901.mp4", "Snapchat-1269042553.mp4",
    "Snapchat-1271375764.mp4", "Snapchat-1322636212.mp4", "Snapchat-1516049916.mp4",
    "Snapchat-1563452184.mp4", "Snapchat-180655830.mp4", "Snapchat-1900603598.mp4",
    "Snapchat-2034552327.mp4", "Snapchat-206137448.mp4", "Snapchat-2078324341.mp4",
    "Snapchat-245890796.mp4", "Snapchat-369598403.mp4", "Snapchat-675999060.mp4",
    "Snapchat-7658292.mp4", "Snapchat-766087849.mp4", "Snapchat-858356523.mp4",
    "VID-20260412-WA0076.mp4", "WhatsApp Image 2026-03-18 at 10.27.02 PM.jpeg",
    "WhatsApp Image 2026-03-18 at 10.50.12 PM.jpeg", "WhatsApp Image 2026-03-18 at 10.50.23 PM.jpeg",
    "WhatsApp Image 2026-04-22 at 8.11.48 PM.jpeg", "WhatsApp Image 2026-04-29 at 11.34.29 AM.jpeg",
    "WhatsApp Image 2026-04-29 at 11.34.30 AM (1).jpeg", "WhatsApp Image 2026-04-29 at 11.34.30 AM.jpeg",
    "WhatsApp Image 2026-04-29 at 11.34.31 AM.jpeg", "WhatsApp Image 2026-04-29 at 11.34.32 AM.jpeg",
    "WhatsApp Image 2026-04-29 at 11.34.37 AM.jpeg", "WhatsApp Video 2026-04-29 at 11.34.31 AM.mp4",
    "WhatsApp Video 2026-04-29 at 11.34.33 AM.mp4", "WhatsApp Video 2026-04-29 at 11.34.34 AM.mp4",
    "WhatsApp Video 2026-04-29 at 11.34.35 AM (1).mp4", "WhatsApp Video 2026-04-29 at 11.34.35 AM.mp4",
    "WhatsApp Video 2026-04-29 at 11.34.36 AM (1).mp4", "WhatsApp Video 2026-04-29 at 11.34.36 AM.mp4",
    "WhatsApp Video 2026-04-29 at 11.34.41 AM.mp4", "clippp.mp4", "final.jpeg"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(allMediaFiles);

const slideshowContainer = document.getElementById('slideshow-container');
let currentIndex = 0;
let currentElement = null;

function playNextMedia() {
    if (allMediaFiles.length === 0) return;
    
    const file = allMediaFiles[currentIndex];
    currentIndex = (currentIndex + 1) % allMediaFiles.length;
    
    const isVideo = file.endsWith('.mp4');
    let nextElement;
    
    if (isVideo) {
        nextElement = document.createElement('video');
        nextElement.src = file;
        nextElement.muted = true;
        nextElement.playsInline = true;
        nextElement.className = 'slide next-slide zoom-anim';
        nextElement.addEventListener('ended', playNextMedia);
        nextElement.addEventListener('error', playNextMedia);
    } else {
        nextElement = document.createElement('img');
        nextElement.src = file;
        nextElement.className = 'slide next-slide zoom-anim';
        nextElement.addEventListener('error', playNextMedia);
    }

    slideshowContainer.insertBefore(nextElement, slideshowContainer.firstChild);

    // Wait slightly for browser to render
    setTimeout(() => {
        if (isVideo) {
            let playPromise = nextElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => playNextMedia());
            }
        }
        
        nextElement.classList.add('active');
        nextElement.classList.remove('next-slide');
        
        if (currentElement) {
            currentElement.classList.remove('active');
            const toRemove = currentElement;
            setTimeout(() => {
                if (slideshowContainer.contains(toRemove)) {
                    slideshowContainer.removeChild(toRemove);
                }
            }, 2500); // Wait for fade transition
        }
        
        currentElement = nextElement;
        
        if (!isVideo) {
            setTimeout(playNextMedia, 5000);
        }
    }, 50);
}

// Start cinematic slideshow
playNextMedia();

// Typing Effect
const typedTextElement = document.getElementById('typed-text');
const textToType = "I'm so sorry...";
let typingIndex = 0;

function typeWriter() {
    if (typingIndex < textToType.length) {
        typedTextElement.innerHTML += textToType.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeWriter, 120);
    }
}

setTimeout(typeWriter, 1500); // Start typing after 1.5s

// Fade In Text on Scroll
const faders = document.querySelectorAll('.fade-in-text');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Populate Memories Gallery
const galleryContainer = document.querySelector('.gallery');
const allMedia = [...mediaFiles, ...videoFiles];
shuffleArray(allMedia);

allMedia.forEach(file => {
    if (file.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = file;
        video.className = 'gallery-item';
        video.muted = true;
        video.loop = true;
        video.addEventListener('mouseover', () => video.play());
        video.addEventListener('mouseleave', () => video.pause());
        galleryContainer.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = file;
        img.className = 'gallery-item';
        galleryContainer.appendChild(img);
    }
});

// Popup Logic
const sorryBtn = document.getElementById('sorry-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-popup');

sorryBtn.addEventListener('click', () => {
    popup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});

// Initialize Particles.js
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#4a90e2", "#8e44ad", "#ffffff"]
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 0.8,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 200,
          "size": 6,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 150,
          "duration": 0.4
        }
      }
    },
    "retina_detect": true
});
