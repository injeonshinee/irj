document.getElementById('illustrationButton').addEventListener('click', function() {
    toggleBox('illustration-box', this);
});

document.getElementById('webButton').addEventListener('click', function() {
    toggleBox('web-box', this);
});

document.getElementById('videoButton').addEventListener('click', function() {
    toggleBox('video-box', this);
});

function toggleBox(className, button) {
    const boxes = document.querySelectorAll('.illustration-box, .web-box, .video-box');
    const buttons = document.querySelectorAll('.menu-button');
    const box = document.querySelector('.' + className);
    
    if (box.classList.contains('show')) {
        box.classList.remove('show');
        button.classList.remove('active');
    } else {
        boxes.forEach(b => b.classList.remove('show'));
        buttons.forEach(b => b.classList.remove('active'));
        box.classList.add('show');
        button.classList.add('active');
    }
}


