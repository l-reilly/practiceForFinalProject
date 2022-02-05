import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'
import { useAuthCtx } from './context/AuthContext'
import { isLoggedIn, logout } from './api'
import { GuestRoute, AppRoute } from './routes'
import { Login } from './components/Login'

async function isLogged() {
  const{data} = await isLoggedIn()
  console.log("isLoggedIn", data)
}
function App() {
  const auth = useAuthCtx()
  console.log("user", auth.user)
  return (
    <div>
      <nav>
        <Link to= "/login">
          Login
        </Link>
        <Link to ="/private">
          Private
        </Link>
        <button onClick={isLogged}>
          isLoggedIn
        </button>
        <button onClick={auth.handleLogout}>
        Log out 
        </button>
      </nav>
      <GuestRoute exact path={"/login"}>
        <Login />
      </GuestRoute>
      <AppRoute exact path={"/private"}>
        <h1>This is private</h1>
      </AppRoute>
    </div>
  );
}

export default App;
