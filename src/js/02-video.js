import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log( Player );

const iframe = document.querySelector( 'iframe' );
console.log( iframe );


const player = new Player (iframe);
console.log( player );

const onPlay = function(data) {
    localStorage.setItem( "videoplayer-current-time", data.seconds );
};

player.on( 'timeupdate', throttle( onPlay, 900 ));

const momentToStart = localStorage.getItem( "videoplayer-current-time" );

console.log( "moment to start", momentToStart );

if ( momentToStart )
{
    player.setCurrentTime( momentToStart );
};

