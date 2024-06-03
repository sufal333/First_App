document.addEventListener('DOMContentLoaded', () => {
    const background = document.getElementById('background');
    if (background) {
        console.log('Background element found:', background);
    } else {
        console.error('Background element not found');
    }
});
