import React, { useEffect, useRef } from 'react'
import './AboutCSS.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

function About() {

    const textRef = useRef();

    useEffect(() => {
        // Split text into individual letters
        const text = textRef.current.textContent;
        const wrappedText = text
        .split('')
        .map((char, index) =>
          char === ' '
            ? `<span class="char" style="display:inline-block">&nbsp;</span>`
            : `<span class="char" style="display:inline-block">${char}</span>`
        )
        .join('');
  
      textRef.current.innerHTML = wrappedText;

        // Apply animation on each letter
        gsap.to(".char", {
            rotateX: 360,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
            stagger: 0.1,
            color:"lime",
            scrollTrigger:{
                trigger:".char",
                start:"top 60%",
            },
        });
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });

        tl.from('.about-heading', {
            y: 50,
            opacity: 0,
        }).from(
            '.about-subheading',
            {
                x: -50,
                opacity: 0,
            },
            '-=0.5'
        )
            .from(
                '.about-block',
                {
                    y: 100,
                    opacity: 0,
                    stagger: 0.3,
                },
                '-=0.5'
            );
    })

    const bgGradient = {
        backgroundImage: "linear-gradient(#172554, #172554)",
    }

    return (
        <>
            <div style={bgGradient} id='about' className='about z-10 h-[100vh] w-[100vw] relative bg-blue-950'>
                <div className="about-section h-[100vh] w-[100vw] relative ">
                    <h1 ref={textRef} className="about-heading text-6xl font-bold text-center mt-16">
                        Transforming Ideas into Reality
                    </h1>
                    <h2 className="about-subheading text-4xl font-semibold text-center mt-4">
                        Full Stack Developer | Cloud Enthusiast | Tech Innovator
                    </h2>

                    <div className="about-content mx-auto mt-12 max-w-4xl text-center space-y-8">
                        <p className="about-block text-xl font-medium">
                            <span className="text-blue-300 font-bold">Hello! I'm Abhay Kevat.</span> An enthusiastic full-stack web developer passionate about building scalable and dynamic applications with the power of cloud technology.
                        </p>

                        <p className="about-block text-xl font-medium">
                            <span className="text-blue-300 font-bold">A Journey Through Code:</span> <br />📚 Bachelor of Computer Applications - Veer Narmad South Gujarat University <br />🎓 Master of Computer Applications - Pimpri Chinchwad University
                        </p>

                        <p className="about-block text-xl font-medium">
                            <span className="text-blue-300 font-bold">What Drives Me?</span> <br />Crafting seamless web experiences using cutting-edge frameworks like React.js, Node.js, and Django, paired with cloud services such as AWS.
                        </p>

                        <p className="about-block text-xl font-medium">
                            <span className="text-blue-300 font-bold">Beyond the Screen:</span> <br />Certified in AWS Cloud, AI/ML, and Postman API Development. Skilled in research, having published work on cybersecurity vulnerabilities in IoT devices.
                        </p>

                        <p className="about-block text-2xl font-bold mt-8">
                            Let’s Build the Future Together!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About