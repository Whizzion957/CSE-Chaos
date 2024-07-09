import React, { useEffect } from 'react';
import classes from './homePage.module.css';

export default function HomePage() {
    useEffect(() => {
        const video = document.querySelector('video');
        if(video) {
            video.play()
        }
    },[]);
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.welcome}>
                WELCOME TO CSE'27
            </div>
            <div className={classes.whatarewe}>
            <video class="c-video -fullscreen" src="https://player.vimeo.com/progressive_redirect/playback/910456736/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=5c4b9469c5259e56557617c9f5d4af490dc7d45817a20ce79c6cc523e34f0ab2"  muted loop disableRemotePlayback playsInline></video>
                Who Are We??
            </div>
        </div>
    </div>
  )
}
