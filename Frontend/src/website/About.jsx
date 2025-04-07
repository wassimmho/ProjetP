import './about.css'
import t2 from'../assets/icons/moayen.png'
import wave from'../assets/wave.png'
import logo from'../assets/Group 1.png'

function About() {
    return <>
        <div className="about">
            <div className="container">
            <div id="t2">
                <img src={t2} alt="" />
                <p>Insightful</p>
            </div>
            <h1>The Future of Seamless Management</h1>
            <div id='middle'>
                <p>Developed by 2nd-year engineering students at USTHB as part of their Projet pour le cycle Ingénieur 2ème année, this project aims to simplify schedule management for faculty members. It provides teachers with the ability to easily swap classes while minimizing administrative workload. Additionally, the system contributes to optimizing exam scheduling, ensuring a more efficient and balanced timetable for both teachers and students.</p>
                <div id='logo'>
                    <img src={logo} alt="" />
                </div>
            </div>
            </div>

            <div>
                <img src={wave} alt="" className='wave1' />
                <img src={wave} alt="" id='wave2' />
            </div>
        </div>
        </>
}

export default About;