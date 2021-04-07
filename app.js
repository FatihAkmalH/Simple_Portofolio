let contentBox = document.querySelectorAll('.content-box');
contentBox.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');
}))