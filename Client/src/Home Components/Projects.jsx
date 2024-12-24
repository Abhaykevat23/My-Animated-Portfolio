import React from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import DataGraphicss from '../assets/Projects/DataGraphicss.png';
import iNotebook from '../assets/Projects/iNotebook.png';
import JustDeal from '../assets/Projects/JustDeal.png';
import BrightStar from '../assets/Projects/BrightStar.png';
import FaceMark from '../assets/Projects/FaceMark.png';

import './ProjectCSS.css'

gsap.registerPlugin(ScrollTrigger)

function Projects() {

    useGSAP(() => {
        gsap.to('.parent .title', {
            transform: "translateX(-340%)",
            scrollTrigger: {
                trigger: ".parent",
                scroller: "body",
                start: "top 0%",
                end: "top -200%",
                scrub: 1,
                pin: true,
            },
        })
    }, []);

    const bgGradient = {
        backgroundImage: "linear-gradient(#172554,#000033)",
    }

    return (
        <>
            <div style={bgGradient} className='parent h-[100vh] w-[100vw] bg-blue-950 overflow-x-hidden m-0 p-0 flex items-center'>
                <div className="title mb-10 gap-[20rem] ml-[15rem] flex justify-between w-[100vw]" >
                    <div className='project-container'>
                        <Link target='_blank' to="https://github.com/Abhaykevat23/justdeal">
                            <img src={JustDeal} className='project-image' alt="JustDeal Project" />
                        </Link>
                        <div className="image-text">JustDeal</div>
                    </div>

                    <div className='project-container'>
                        <Link target='_blank' to="https://github.com/Abhaykevat23/iNotebook">
                            <img src={iNotebook} className='project-image' alt="iNotebook Project" />
                        </Link>
                        <div className="image-text text-black">iNotebook</div>
                    </div>

                    <div className='project-container'>
                        <Link target='_blank' to="https://github.com/Abhaykevat23/phone-solar">
                            <img src={BrightStar} className='project-image' alt="BrightStar Project" />
                        </Link>
                        <div className="image-text">E-Commerce Website</div>
                    </div>

                    <div className='project-container'>
                        <Link target='_blank' to="https://github.com/Abhaykevat23/Data-Graphicss">
                            <img src={DataGraphicss} className='project-image' alt="Data Graphicss Project" />
                        </Link>
                        <div className="image-text text-black">Data Graphicss</div>
                    </div>

                    <div className='project-container'>
                        <Link target='_blank' to="https://github.com/Abhaykevat23/FaceMark">
                            <img src={FaceMark} className='project-image' alt="FaceMark Project" />
                        </Link>
                        <div className="image-text text-black">FaceMark</div>
                    </div>

                </div>
            </div>


            {/* on click new page is opened and display it in a parallex background images */}
            {/* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; Project Box  */}
            {/* Direct image box and Animation , give links of github....upload readme.md of all project*/}
        </>
    )
}

export default Projects