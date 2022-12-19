import React from 'react';
import './contact.css';

export default function Contact() {
    return (
        <div className='contactpage'>
        <h1 className='contact1'>Contact</h1>
        <form className='form-container'>
            <h2 className='contact'>Contact Me:</h2>
            <div className="form-group">
                <label for="Name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name"></input>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email"></input>
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );

}