document.querySelector('.spinner-border').classList.add('d-block');

// Hide the loader (you can replace this with your actual loading logic)
setTimeout(function () {
    document.querySelector('.spinner-border').classList.remove('d-block');
}, 3000); // Hides the loader after 3 seconds (replace with your actual loading logic)