const ticker = document.getElementById('ticker');
const images = ticker.children; 
const imageHeight = 200; 
const totalImages = images.length; 
let position = 0; 
const speed = 2; 

function animateTicker() {
    position += speed; 
    if (position >= (totalImages / 2) * imageHeight) {
        position = 0; 
    }
    ticker.style.transform = `translateY(-${position}px)`; 
    requestAnimationFrame(animateTicker); 
}

animateTicker();
