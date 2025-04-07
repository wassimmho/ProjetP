import './feature.css';
import t3 from'../assets/icons/polar.png'
import folder from'../assets/image 31.png'
import arrow from'../assets/image 30.png'
import rocket from'../assets/image 32.png'

function Features() {
    return<>
    <div className='container' id='features'>
        <div id="t3">
            <img src={t3} alt="" />
            <p>Innovative</p>
        </div>
        <h1>Designed to Make Scheduling Simple & Efficient</h1>
        <div className='cards'>
            <div className='card'>
                <img src={rocket} alt="" />
                <h3>Fast</h3>
                <p>Quickly manage schedules and swap classes in real time with minimal effort. No delays, no hassle—just fast, efficient updates. 🚀</p>
            </div>
            <div className='card'>
                <img src={arrow} alt="" />
                <h3>Intuitive</h3>
                <p>Navigate effortlessly with a user-friendly design that makes managing schedules and swaps simple and hassle-free. Every action is straightforward, ensuring a smooth experience for all users.✨</p>
            </div>
            <div className='card'>
                <img src={folder} alt="" />
                <h3>Organized</h3>
                <p>Keep track of schedules, requests, and approvals in one structured system. No more confusion—everything is neatly arranged and easily accessible. 📂</p>
            </div>
        </div>
    </div>
    </>
}

export default Features;