import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useAuthCtx } from '../context/AuthContext';


function GuestRoute({children, ...restProps}) {
    const {user} = useAuthCtx()
    if(user) {
        return (
            <Redirect to="/" /> 
        )
    }
    return(
        <Route {...restProps} >
            {children}
        </Route>
    )
}
export default GuestRoute