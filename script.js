document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelector('.dots');
    const circles = [];

    for (let i = 1; i <= 3; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        dots.appendChild(circle);
        circles.push(circle);
    }

    let currentIndex = 0;

    function showCircles() {
        circles.forEach((circle, index) => {
            if (index <= currentIndex) {
                circle.style.opacity = '1';
            } else {
                circle.style.opacity = '0';
            }
        });

        currentIndex++;

        if (currentIndex > circles.length) {
            circles.forEach(circle => {
                circle.style.opacity = '0';
            });
            currentIndex = 0;
        }
    }

    setInterval(showCircles, 800);
});

document.addEventListener('mousemove', (event) => {
    const bigCircle = document.getElementById('bigCircle');
    const smallCircle = document.getElementById('smallCircle');

    // Calculate position relative to the center of the big circle
    const rect = bigCircle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Update position of the small circle (light)
    smallCircle.style.left = `${mouseX + rect.width / 2 - smallCircle.offsetWidth / 2}px`;
    smallCircle.style.top = `${mouseY + rect.height / 2 - smallCircle.offsetHeight / 2}px`;
});


document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', function(e) {
        customCursor.style.display = 'block'; // Show custom cursor

        // Adjust position of custom cursor to follow mouse
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Prevent default right-click behavior
        customCursor.style.display = 'none'; // Hide custom cursor on right-click
    });

    document.addEventListener('mouseleave', function() {
        customCursor.style.display = 'none'; // Hide custom cursor when leaving window
    });
});

