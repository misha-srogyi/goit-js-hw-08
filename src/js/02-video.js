
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));


function onPlay (evt) {
    const seconds = evt.seconds;
    localStorage.setItem('current-time', seconds)
};

setCurrentTime();

function setCurrentTime() {
    const savedTime = localStorage.getItem('current-time');
    if (savedTime) {
        player.setCurrentTime(savedTime);
    }
};