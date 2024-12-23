import React from 'react'
import './Loading.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Loading() {
    
    return (
        
        <div class="container h-[100vh] w-[100vw] bg-blue-950 flex justify-center items-center">
            <div className="loader"></div>
        </div>
    )
}

export default Loading