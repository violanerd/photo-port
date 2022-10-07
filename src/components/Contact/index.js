import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


// when autofilling- this does not work; a better way to check validation in handle submit rather than as changed??

function ContactForm(){
    const [errorMessage, setErrorMessage] = useState('');
    // hook useState manages data, setting fields to empty on loading 
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
        clearForm(e)
        //Why does this not work?? 
        //setFormState({...formState, name: '', email: '', message: '' })
        // How would you do it when submitting to backend?
    };
    function clearForm(event){
        console.log(event.target);
        Array.from(event.target).forEach((e) => (e.value = ""));
    }
    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

    return(
    <section>
        <h1 data-testid="h1tag">Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={formState.name} onBlur={handleChange}/>
        </div>
        <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={formState.email} onBlur={handleChange}/>
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5"  defaultValue={formState.message} onBlur={handleChange}/>
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
        <button data-testid="button" type='submit'>Submit</button>
        </form>
    </section>
    )
}

export default ContactForm;