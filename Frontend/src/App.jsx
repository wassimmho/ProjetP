//import { useState } from 'react'
import './App.css'
//import { useEffect } from 'react'
//import Login from './Login/Login.jsx'
import Navbar from './website/Navbar.jsx'
import Hero from './website/Hero.jsx'
import Features from './website/Features.jsx'
import About from './website/About.jsx'
import FAQ from './website/FAQ.jsx'

function App() {

    return<>
    <div id='container'>
    <Navbar id='navigation'/>
    <Hero id='hero'/>
    <About id='about'/>
    <Features id='Features'/>
    <FAQ id='FAQ'/>




    </div>
    </>
}

export default App
