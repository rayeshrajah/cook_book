import React, { useState } from "react";

const Login = ({value, setValue}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="form-container">
            <form>
                <h3>Login</h3>
                <div className="label-input-container">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" onChange={(event) => setEmail(event.target.value) } />
                </div>
                <div className="label-input-container">
                <label for="email">Password:</label>
                <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button>Enter</button>
            </form>
        </div>
    )
}

export default Login