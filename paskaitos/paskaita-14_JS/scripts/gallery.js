let mygtukas = document.getElementById('mygtukas');
let galerija = document.getElementById('gallery');
let galleryImages = document.querySelectorAll('div#gallery img');

let paspaudimuSkaicius = 0;

galleryImages.forEach(galleryImageEventListeners);

mygtukas.addEventListener('click', function(event) {

    console.log(event.target);
    event.target.style.color = 'red';
    console.log(`Jūs paspaudėte mygtuką ${++paspaudimuSkaicius} kartus!`);

    let image = document.createElement('img');
    image.setAttribute('src', `https://picsum.photos/id/${randomImageIdGenerator()}/300`);
    image.setAttribute('alt', 'random image');

    galerija.append(image);

    image.addEventListener('click', changeImgSrc);
});

function randomImageIdGenerator() {
    return Math.floor(Math.random() * 1000);
}

function galleryImageEventListeners(galleryImage) {
    galleryImage.addEventListener('click', changeImgSrc);
}

function changeImgSrc(event) {
    event.target.setAttribute('src', `https://picsum.photos/id/${randomImageIdGenerator()}/300`);
}