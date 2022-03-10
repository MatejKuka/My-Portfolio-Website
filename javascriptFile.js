var cip = $(".video1").hover( hoverVideo, hideVideo );
var cip = $(".video2").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}



