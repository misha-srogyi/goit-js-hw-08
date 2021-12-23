
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const KEY_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay (evt) {
    const seconds = evt.seconds;
    localStorage.setItem(KEY_CURRENT_TIME, seconds)
};

setCurrentTime();

function setCurrentTime() {
    const savedTime = localStorage.getItem(KEY_CURRENT_TIME);
    if (savedTime) {
        player.setCurrentTime(savedTime);
    }
};