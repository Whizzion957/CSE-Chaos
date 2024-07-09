import React, { useEffect, useState } from 'react';
import classes from './homePage.module.css';

export default function HomePage() {
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const images = [
        '/Picture2.jpg',
        '/Picture3.jpg',
        '/Picture4.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.first}>
                <div className={classes.welcome}>
                    <img src='/welcome.png' alt='welcome' />
                    <div className={classes.welcomemessage}>
                        <strong>
                        Greetings and a warm welcome to all!
                        </strong>
                        <br/><br/>
                        We are delighted to present to you our very own platform dedicated to the IITR Computer Science Engineering batch of 2027. This website has been created with the aim of fostering a strong community among our batch members, providing a hub for resources, updates, and much more.
                        <br/><br/>
                        We encourage you to explore, participate, and contribute to make this platform even more vibrant and resourceful.
                        Thank you for being a part of this amazing journey. Together, let's make the most of our time at IITR!
                        <br/><br/>
                        Best regards,
                        <br/>
                        Aadit and the IITR CSE'27 Team
                    </div>
                </div>
            </div>
            <div className={classes.second}>
                <video src="https://player.vimeo.com/progressive_redirect/playback/910456736/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=5c4b9469c5259e56557617c9f5d4af490dc7d45817a20ce79c6cc523e34f0ab2"  autoPlay muted loop disableRemotePlayback playsInline />
            </div>
            <div className={classes.third}>
                <div className={classes.whatarewe}>
                    <div className={classes.strong}>
                        Who are we?
                    </div>
                    We are a cohort of 120 dedicated Computer Science students at the Indian Institute of Technology, Roorkee, set to graduate in 2027. Our journey here is defined by a shared passion for technology and a relentless pursuit of excellence.
                    <br/><br/>
                    In this nurturing academic environment, we foster innovation and critical thinking, exploring diverse areas such as artificial intelligence, machine learning, cybersecurity, and software development. Beyond academics, we are a close-knit community united by shared interests and friendships, creating a supportive home away from home.
                    <br/><br/>
                    Together, we embrace challenges and celebrate achievements, driven by curiosity and a commitment to making a lasting impact in the tech world. Our time at IIT Roorkee is not just about learning; it’s about growing together, preparing to innovate and lead in the years ahead.
                </div>
                <div className={classes.groupphoto}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Group Photos ${index}`} style={{display: index === currentSlide ? 'block' : 'none' }}
                        />
                        ))}
                </div>
            </div>
        </div>
    </div>
  )
}
