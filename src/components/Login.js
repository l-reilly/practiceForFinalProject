import React from "react";
//import { login } from "../api"
import { useAuthCtx } from '../context/AuthContext'

function Login() {
    const { handleLogin } = useAuthCtx();
    const [state, setState] = React.useState({ email:"", password:"" });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        handleLogin(state);
}
return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        required
        name="email"
        type="email"
        value={state.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
);
}
export default Login;