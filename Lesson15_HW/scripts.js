const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress__filled');
const time = document.querySelector('#time');
const volume = document.querySelector('[name="volume"]');
const rate = document.querySelector('[name="playbackRate"]');
const rewindBackward = document.querySelector('[data-skip="-10"]');
const rewindForward = document.querySelector('[data-skip="25"]');


function toggleVideo() {
    if (video.paused) {
        video.play();
        toggle.innerHTML='❚ ❚'}
    else {
        video.pause();
        toggle.innerHTML='►'}
}

function convertSecondsToTime (data) {
    let sec_num = parseInt(data);
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    let hourSeparator = ':';
    let minuteSeparator = ':';

    if(hours === 0){
        hours = '';
        hourSeparator = '';}
    if (minutes < 10 && hours !== 0) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return hours+hourSeparator+minutes+minuteSeparator+seconds;
}

function handleProgress() {

    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
    time.value = `${convertSecondsToTime(video.currentTime)} / ${convertSecondsToTime(video.duration)}`;
}

function handleVolume() {
    video.volume = volume.value;
}

function handleRate() {
    video.playbackRate = rate.value;
}

function handleRewForward () {
    video.currentTime += 25;
}

function handleRewBackward () {
    video.currentTime -= 10;
}

video.addEventListener('timeupdate', handleProgress);
video.addEventListener('click', toggleVideo);
toggle.addEventListener('click', toggleVideo);
volume.addEventListener('input', handleVolume);
rate.addEventListener('input', handleRate);
rewindBackward.addEventListener('click', handleRewBackward);
rewindForward.addEventListener('click', handleRewForward);
