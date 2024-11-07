import React, { useState } from 'react';


const Form = () => {
    {/*form state variables */}
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
     {/*Handle form sumbission */}
    const handleSubmit = (e: React.FormEvent) => {
    
        e.preventDefault();

        console.log(`Form submitted! Name: ${name}, Email: ${email}, Message: ${message}`);

    }

    return (
        <form onSubmit={handleSubmit}>
          {/*Name Input */}
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
    
          {/* Email Input */}
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
    
          {/*Message Input */}
          <div>
            <label>Message:</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
    
          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default Form;