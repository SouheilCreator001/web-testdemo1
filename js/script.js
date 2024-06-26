// Add your JavaScript here
window.addEventListener('load', function() {
    const image = document.getElementById('responsiveImage');
    adjustImageSize();

    window.addEventListener('resize', function() {
        adjustImageSize();
    });

    function adjustImageSize() {
        if (window.innerWidth < 768) { // for mobile
            image.src = '../img/nakba-photo.png';
        } else { // for web
            image.src = '../img/nakba-photo.png';
        }
    }
});