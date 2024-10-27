import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact Page</h1>
            <div className='contact-buttons'>
                <button onClick={() => navigate("/contact/info")}>Contact Info</button>
                <button onClick={() => navigate("/contact/form")}>Contact Form</button>
            </div>
        </div>
    )
}

export default Contact