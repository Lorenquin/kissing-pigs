document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 Kissing Pigs Animation - Para Marti, de tu gordito 💕');
    
    const leftPig = document.getElementById('pig-left');
    const rightPig = document.getElementById('pig-right');
    const kissZone = document.querySelector('.kiss-zone');
    
    // Click to restart hearts animation
    document.addEventListener('click', function() {
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => {
            heart.style.animation = 'none';
            setTimeout(() => {
                heart.style.animation = '';
            }, 10);
        });
    });
    
    // Hover effects
    leftPig.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    leftPig.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    rightPig.addEventListener('mouseenter', function() {
        this.style.transform = 'scaleX(-1) scale(1.05)';
    });
    
    rightPig.addEventListener('mouseleave', function() {
        this.style.transform = 'scaleX(-1) scale(1)';
    });
});
