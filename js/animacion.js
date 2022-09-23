//Crear una línea de tiempo con parámetros predeterminados

var animation = anime.timeline({
    autoplay: false
});

animation
    .add({
        targets: '#btn',
        top: '1500px',
        duration: 500,
        easing: 'easeInOutSine'
    })

.add({
    targets: '#estrella',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#montañaM',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#luna',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutBack'
})

.add({
    targets: '#montañaF',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#texto',
    duration: 1000,
    marginRight: 0,
    easing: 'easeInOutBack'
})

.add({
    targets: '#btn',
    top: '50%',
    duration: 1000,
    easing: 'easeInOutBack'
})

document.querySelector('#btn').onclick = animation.play;