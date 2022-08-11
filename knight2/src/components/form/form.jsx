import React from 'react';
import './form.css';

const Form = () => {
    return (
        <form className='form--container' action="https://formsubmit.co/knightmultiservice@gmail.com" method="POST">
            <h1>Contact us directly</h1>
            <input type="hidden" name="_subject" value="Nuevo Correo!"></input>
            <input className='input' type='text' placeholder='Name' name='name' required/>
            <input className='input' type='email' placeholder='Email' name='email' required/>
            <input className='input' type='text' placeholder='Subject' name='subject' required/>
            <textarea className='input' type='text' placeholder='Message' name='message' required></textarea>
            <input className='input-button' type='submit' required/>
        </form>
    )
}

export default Form;
