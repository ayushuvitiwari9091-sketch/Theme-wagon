import React from 'react'
import './CSS/Home.css'
import { LuDot } from "react-icons/lu";

const Home = () => {
    return (
        <>
            <div className="outer-hero">

                <img src="/public/Images/header_bg.svg" alt="" className='header_bg' />

                <img src="/public/Images/shape.svg" alt="" className='shape' />

                <img src="/public/Images/themewagon-logo.png" alt="" className='themewagon' />

                <img src="/public/Images/text.svg" alt="" className='home-text' />

                <h1 className='home-hero-text'>Supercharge your project with intuitive UI & clean code</h1>

                <div className="hero-point-text">

                    <ul>
                        <li><h1>Unlimited Use $1828 <span className='green-color'>$249</span></h1></li>

                        <li><h1>Standard Plus $1148 <span className='green-color'>$139</span></h1></li>
                    </ul>

                </div>

                <button className='Purchase-btn'>Purchase now</button>

            </div>

        </>
    )
}

export default Home