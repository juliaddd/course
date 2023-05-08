const container = document.querySelector('.image-container');
const heart = document.querySelector('.heart');

container.addEventListener('mouseover', () => {
    heart.classList.add('animate');
});

container.addEventListener('mouseout', () => {
    heart.classList.remove('animate');
});