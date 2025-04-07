import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Login from './Login/Login.jsx'
import Navbar from './website/navbar.jsx'
import Hero from './website/Hero.jsx'

function App() {

    return<>
    <div id='container'>
    <Navbar id='navigation'/>
    <Hero id='hero'/>


    </div>
    </>
}

export default App
