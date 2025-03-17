import React, { useState } from 'react'

const Form = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    /* manage all states error */
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    /* manage all states Color */
    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

    const validation = (e) => {

        e.preventDefault(); /* must enter in this line bcz refresh page data hide */

        /* User name Validation */
        if(username.length > 8) {
            setErrorUsername("");
            setUserColor("Green");
        } else {
            setErrorUsername("UserName must be 8letter long");
            setUserColor("Red");
            
        }
        /* EMail Validation */

        if(email.includes("@gmail")) {
            setErrorEmail("");
            setEmailColor("Green")
        } else {
            setEmailColor("red");
            setErrorEmail("Email Should have @gmail");
            
        }

           /* Password Validation */

           if(password.length > 8 ) {
            setErrorPassword    ("");
            setPasswordColor("Green")
        } else {
            setPasswordColor("red");
            setErrorPassword("Password Should have 8 letters long");
            
        }

             /* Confirm Password Validation */

             if(password !== "" && password === confirmPassword ) {
                setErrorConfirmPassword   ("");
                setConfirmPassword("Green")
            } else {
                setErrorConfirmPassword("Password did't match");
                setConfirmPassword("Red");
                
            }
    }

    return (
        <section className="card">
            <div className="card-image">

            </div>

            <form action="">
                <input type="text"
                    placeholder='Name'
                    style={{ borderColor: userColor }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <p className="error">{errorUsername} </p>

                <input type="email"
                    placeholder='Email'
                    style={{ borderColor: emailColor }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <p className="error">{errorEmail} </p>

                <input type="password"
                    placeholder='Password'
                    style={{ borderColor: passwordColor }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <p className="error">{errorPassword} </p>

                <input type="password"
                    placeholder='Confirm Password'
                    style={{ borderColor: confirmPasswordColor }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />

                <p className="error">{errorConfirmPassword} </p>

                <button className="submit-btn" onClick={validation}>Submit</button>
            </form>

        </section>
    )
}

export default Form