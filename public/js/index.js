// HAMBURGER ICON - CLICK EVENT
const hamIcon = document.querySelector('#ham i');
const menus = document.querySelector('.menus');
hamIcon.addEventListener('click', toggleHide);
function toggleHide() {

    if (menus.style.display != 'none') {
        menus.style.display = 'none';
        hamIcon.className = "fa fa-bars";
    } else {
        menus.style.display = 'flex';
        hamIcon.className = "fa fa-close";
    }
}
const aTag = document.querySelectorAll('.menus a');
for (let i = 0; i < aTag.length; i++) {
    aTag[i].addEventListener('click', function () {
        if (menus.style.display == 'flex') {
            menus.style.display = 'none';
        }
        hamIcon.className = "fa fa-bars";
    }
    )
}


// LINK ON CAROUSEL IMAGES
const carousel = document.querySelector('.carousel');

carousel.children[0].addEventListener('click', function () {
    location.href = 'https://renubakshi.github.io/climacity/'
})
carousel.children[1].addEventListener('click', function () {
    location.href = 'https://renubakshi.github.io/pattern-prodigy/'
})
carousel.children[2].addEventListener('click', function () {
    location.href = 'https://renubakshi.github.io/simple-calculator/'
})
carousel.children[3].addEventListener('click', function () {
    location.href = 'https://renubakshi.onrender.com/'
})
carousel.children[4].addEventListener('click', function () {
    location.href = '#home'
})
carousel.children[5].addEventListener('click', function () {
    location.href = '#home'
})
