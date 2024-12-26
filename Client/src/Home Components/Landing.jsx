import React, { useEffect, useRef, useState } from 'react'
import About from './About'
import Projects from './Projects'
import BackgroundSVG from '../Components/BackgroundSVG'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './LandingCSS.css'
import Skills from './Skills'
import Contact from './Contact'

function Landing() {

    // const skills = ["Full Stack", "Angular", "Tailwind CSS", "JavaScript", "React", "Node.js", "MySQL", "MongoDB"];
    // const skillRef = useRef(null); // Ref for the text element
    // let skillIndex = 0; // Keeps track of the current skill

    // useEffect(() => {
    //     const skillElement = skillRef.current;

    //     const animateSkills = () => {
    //         if (skillElement) {
    //             gsap.to(skillElement, {
    //                 y: -20, // Slide up
    //                 opacity: 0, // Fade out
    //                 duration: 0.5,
    //                 onComplete: () => {
    //                     // Update the skill after the animation
    //                     skillIndex = (skillIndex + 1) % skills.length;
    //                     skillElement.textContent = skills[skillIndex];

    //                     // Reset position and fade back in
    //                     gsap.fromTo(
    //                         skillElement,
    //                         { y: 20, opacity: 0 }, // Start below and faded out
    //                         { y: 0, opacity: 1, duration: 0.5 } // Slide into position and fade in
    //                     );
    //                 },
    //             });
    //         }
    //     };
    //     const interval = setInterval(animateSkills, 2000);

    //     return () => clearInterval(interval); // Cleanup the interval
    // }, []);

    useGSAP(() => {
        const tl = gsap.timeline({})
        tl.to(".land p", {
            x: 50,
            delay: 1,
            ease: "power.in",
            duration: 3,
            opacity: 1,
            stagger: {
                amount: 1,
                from: "start",
            },
        }).to(".land2 p", {
            y: 50,
            delay: 0.3,
            ease: "power.in",
            duration: 1,
            opacity: 1,
            stagger: {
                amount: 1,
                from: "start",
            },
        }, "-=3")
    });

    const gradiant = {
        color: "rgb(15, 195, 255)",
        filter: "drop-shadow(0 0 20px rgb(15, 195, 255))",
        // overflow:"hidden",
        // position:"relative",
        // height:"1.5rem"
    };

    return (
        <>
            <div className='relative'>
                <BackgroundSVG />
                <div className="landing h-screen w-screen flex flex-col justify-center items-center">
                    {/* Name Section */}
                    <div className="land text-[3.5rem] ml-[-5rem] sm:text-[4rem] md:text-[9rem] lg:text-[10rem] flex justify-center font-bold whitespace-nowrap">
                        <p>A</p>
                        <p>B</p>
                        <p>H</p>
                        <p>A</p>
                        <p>Y</p>
                        <p>&nbsp;</p>
                        <p>K</p>
                        <p>E</p>
                        <p>V</p>
                        <p>A</p>
                        <p>T</p>
                    </div>

                    {/* Subtitle Section */}
                    <div className="land2 text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold text-center mt-[-2rem]">
                        {/* Skills Section */}
                        <div className="whitespace-nowrap">
                            <p
                                className="text-blue-300"
                                style={gradiant} // Your gradient style
                            >
                                Full Stack
                            </p>
                        </div>

                        {/* Web Developer Section */}
                        <div className="whitespace-nowrap flex justify-center mt-[-1rem]">
                            <p className="web text-[2.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">Web</p>
                            <p>&nbsp;</p>
                            <p className="dev text-[2.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">Developer</p>
                        </div>
                    </div>
                </div>


                <About />
                <Projects />
                {/* <hr /> */}
                <Skills />
                <Contact />
            </div>
        </>
    )
}

export default Landing