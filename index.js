const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

function dark() {
    let elements = document.getElementsByClassName('box');
    let palette = document.getElementById('palette');
    let name = document.getElementById('name');
    let nav = document.getElementById('nav');
    let links = document.getElementsByClassName('standard-link');
    let paletteNav = document.getElementById('palette-nav');

    if (paletteNav && paletteNav.tagName === 'LI') {

        let linkElement = paletteNav.querySelector('a');

        if (linkElement) {
            linkElement.style.color = 'seashell';
        }
    };

    if (name && name.tagName === 'P') {

        let linkElement = name.querySelector('a');

        if (linkElement) {
            linkElement.style.color = 'seashell';
        };
    };

    if (palette && palette.tagName === 'H3') {

        let linkElement = palette.querySelector('a');

        if (linkElement) {
            linkElement.style.color = 'seashell';
        };
    };

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '#222222';
    };
    
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = 'seashell';
    };
    
    nav.style.backgroundColor = '#3b3b3b';
    document.body.style.backgroundColor = '#3b3b3b';
    document.body.style.color = 'seashell';
    sun.style.color = '#3b3b3b';
    sun.style.backgroundColor = 'seashell';
    sun.style.display = 'block';
    moon.style.display = 'none';
};

function light() {
    let elements = document.getElementsByClassName('box');
    let palette = document.getElementById('palette');
    let name = document.getElementById('name');
    let nav = document.getElementById('nav');
    let links = document.getElementsByClassName('standard-link');
    let paletteNav = document.getElementById('palette-nav');

    if (paletteNav && paletteNav.tagName === 'LI') {

        let linkElement = paletteNav.querySelector('a');

        if (linkElement) {
            linkElement.style.color = '#3b3b3b';
        }
    };

    if (name && name.tagName === 'P') {

        let linkElement = name.querySelector('a');

        if (linkElement) {
            linkElement.style.color = '#3b3b3b';
        };
    };

    if (palette && palette.tagName === 'H3') {

        let linkElement = palette.querySelector('a');

        if (linkElement) {
            linkElement.style.color = '#3b3b3b';
        };
    };

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'white';
    };

    for (let i = 0; i < links.length; i++) {
        links[i].style.color = '#3b3b3b';
    };

    nav.style.backgroundColor = ('seashell');
    document.body.style.background = 'seashell';
    document.body.style.color = '#3b3b3b';
    sun.style.display = 'none';
    moon.style.display = 'block';
};

moon.onclick = dark;
sun.onclick = light;