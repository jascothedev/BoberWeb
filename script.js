
function menuToggle(){
    var menuItems = document.getElementById('menuItems');
    if(menuItems.style.maxHeight=="0px"){
        menuItems.style.maxHeight="200px";
    } else{
        menuItems.style.maxHeight="0px";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var coffeeButton = document.querySelector('.btn-coffee');
    var audio = new Audio('bober1.mp3');

    // Add event listener to the coffee button
    coffeeButton.addEventListener('click', function() {
        // Play the audio
        audio.play();
    });
});

ScrollReveal().reveal('.ani1', {delay: 250});
ScrollReveal().reveal('.ani2', {delay: 500});
ScrollReveal().reveal('.ani3', {delay: 750});
ScrollReveal().reveal('.ani4', {delay: 1000});
ScrollReveal().reveal('.ani5', {delay: 1250});
ScrollReveal().reveal('.ani6', {delay: 1500});
ScrollReveal().reveal('.ani7', {delay: 1750});
ScrollReveal().reveal('.ani8', {delay: 2000});
ScrollReveal().reveal('.ani9', {delay: 2250});
ScrollReveal().reveal('.ani10', {delay: 2500});
ScrollReveal().reveal('.ani11', {delay: 2750});
ScrollReveal().reveal('.ani12', {delay: 3000});

window.sr=ScrollReveal();

sr.reveal('.anime-left',{
    origin: 'left',
    duration:1000,
    distance: '25rem',
    delay:300
});

sr.reveal('.anime-right',{
    origin: 'right',
    duration:1000,
    distance: '25rem',
    delay:800
});

sr.reveal('.anime-top',{
    origin: 'top',
    duration:1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.anime-bottom',{
    origin: 'bottom',
    duration:1000,
    distance: '25rem',
    delay:600
});