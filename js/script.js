// toggle menu button

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active')
}

// Change the background video when click on the gallery images

function changevideo(name) {
    const bgvideolist = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const model = document.querySelectorAll('.model');

    //  javascript higher order array function forEach
    //  this is easier to do data mapping

    bgvideolist.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });
     
    // mapping model name change

    model.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)) {
            model.classList.add('active');
        }
    });


    // mapping trailer video change
    trailers.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });
}

// change the play and pause button on click event
function toggleplay() {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
}



// video play and pause
function pauseVideo() {
    const bgvideolist = document.querySelectorAll('.bg-video');
    bgvideolist.forEach(video => {
        video.pause();
    });

    // a challenge for you
    // think how to hide the video in the screen on pause

    toggleplay();
}

function playVideo() {
    const bgvideolist = document.querySelectorAll('.bg-video');
    bgvideolist.forEach(video => {
        video.play();
    });

    // think how to show the video in the screen on play
    // see the intro again if you don't know what I mean 

    toggleplay();
}

