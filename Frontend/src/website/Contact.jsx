import './contact.css'
import logo from'../assets/Group 1.png'
import gradient from'../assets/Gradient.png'


function Contact() {

    return (
        <div id='contact'>
            <div id='contactcontainer'>
                <img className='gradient' id='gradient1' src={gradient} alt="" />
                <img className='gradient' id='gradient2' src={gradient} alt="" />

                <div id='contact-info'>
                    <div id='leftinfo'>
                        <h3>Contact Information</h3>
                        <p>Email: support@example.com</p>
                        <p>Phone: +123 456 789</p>
                    </div>
                    <div id='rightinfo'>
                        <h3>Acknowledgment</h3>
                        <p>Developed as part of the Projet pour le cycle Ingénieur 2ème année at USTHB.</p>
                    </div>
                </div>

                <p id='linkscontact'><a href="#home">Home</a> / <a href="#about">About</a> / <a href="#features">Features</a> / <a href="#FAQ">FAQ</a></p>
                
                <img id='logocontact' src={logo} alt="" />
            </div>
        </div>
    );

}

export default Contact;