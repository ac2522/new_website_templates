document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');
    if (menu.style.transform === 'translateX(0%)') {
        menu.style.transform = 'translateX(-100%)';
        content.style.marginLeft = '0';
    } else {
        menu.style.transform = 'translateX(0%)';
        content.style.marginLeft = '200px';
    }
});
