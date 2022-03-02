// Get DOM elements for js code

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progess = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Function for clicking on video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
     } else {
        video.pause();
        }
}

//Function to update play pause button
function updatePlayIcon() {
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//Function to update timestamp/progress
function updateProgress(){
    return true;
}

//Function to stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause() ;
}


//Function to update the video progress by slider
function setVideoProgress() {
    return true;
}


// Event listeners 
// Listeners for video 
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress);

//Event listener for play button
play.addEventListener('click', toggleVideoStatus);

//Event listener for stop button
stop.addEventListener('click', stopVideo);

//Event listener for progress bar
progess.addEventListener('change', setVideoProgress);