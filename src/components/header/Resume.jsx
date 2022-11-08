import React from "react";
import MyResume from '../../assets/Resume - Adrian.pdf';

const Resume = () => {
    return (
        <div className='contacts'>
            <a href={MyResume} download className='Resume'>Download My Resume</a>
            {/* <a href="" className="email">Send Me a Message</a> */}
        </div>
    )
}

export default Resume