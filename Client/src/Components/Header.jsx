import React from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Header() {
    const navs = {
        marginTop: "-2rem",
    }

    useGSAP(() => {
        gsap.to('.nav', {
            y: 40,
            delay: 1,
            opacity: 1,
            ease: "power1.out",
            duration: 1,
            stagger: {
                amount: 0.8,
                from: "center",
            }
        })
    }, []);

    return (
        <>
            <div className='nav flex justify-between text-2xl font-bold h-8 w-full ' >
                <div className='ml-4' style={navs}>
                    Abhay Kevat
                </div>
                <div className='flex justify-evenly gap-10 mr-12'>
                    <Link className='link' style={navs} to={"#about"}>About</Link>
                    <Link className='link' style={navs} to={"#"}>Experience</Link>
                    <Link className='link' style={navs} to={"#"}>Projects</Link>
                    <Link className='link' style={navs} to={"#"}>Education</Link>
                    {/* <Link className='link' style={navs} to={"/stagger"}>Footer</Link> */}
                </div>
            </div>
        </>
    )
}

export default Header