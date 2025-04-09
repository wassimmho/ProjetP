import './faq.css'
import arrow from'../assets/arrow.png'

function FAQ() {

    return<>

        <div className='containerfaq' id='faq'>
            <div className='card'>
                <div id='text'>
                    <h1>You ask - we answer</h1>
                    <p>All you want to know about Scope</p>
                </div>

                <div id='questions'>
                    <div>
                        <p>How do I create an account?</p>
                        <img src={arrow} alt='button'/>
                    </div>
                    <hr />
                    <div>
                        <p>Where can I get help if I encounter an issue?</p>
                        <img src={arrow} alt='button'/>
                    </div>
                    <hr />
                    <div>
                        <p>What is the purpose of this platform?</p>
                        <img src={arrow} alt='button'/>
                    </div>
                    <hr />
                    <div>
                        <p>How do I request a class swap?</p>
                        <img src={arrow} alt='button'/>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default FAQ;