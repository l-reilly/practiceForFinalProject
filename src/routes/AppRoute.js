import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useAuthCtx } from '../context/AuthContext';


function AppRoute({children, ...restProps}) {
    const {user} = useAuthCtx()
    if(!user) {
        return (
            <Redirect to="/login" /> 
        )
    }
    return(
        <Route {...restProps} >
            {children}
        </Route>
    )
}
export default AppRoute