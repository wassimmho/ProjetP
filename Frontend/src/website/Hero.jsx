
import React from 'react'
import './hro.css'
import t1 from'../assets/icons/Vector.png'
import t4 from'../assets/icons/star.png'
import t5 from'../assets/icons/spiner.png'
import t3 from'../assets/icons/polar.png'
import t2 from'../assets/icons/moayen.png'
import Dash from'../assets/Dash.png'



function Hero(){

    return<>
    <div className="containerhero" id='home'>
        <div id='title'>Seamless Scheduling <br/> Effortless Swaps</div>

        <div id='description'>Manage your teaching schedule with ease—swap classes securely, avoid conflicts,
            and stay updated in real time, all in one place.</div>

        <div id='tags'>
            <div id="t1">
                <img src={t1} alt="" />
                <p>Seamless</p>
            </div>
            <div id="t2">
                <img src={t2} alt="" />
                <p>Insightful</p>
            </div>
            <div id="t3">
                <img src={t3} alt="" />
                <p>Innovative</p>
            </div>
            <div id="t4">
                <img src={t4} alt="" />
                <p>Organized</p>
            </div>
            <div id="t5">
                <img src={t5} alt="" />
                <p>Fast</p>
            </div>
        </div>
        <div id='app'>
            <img src={Dash} alt="" id='appimg' />
        </div>
        
    </div>
    
    </>
}
export default Hero;