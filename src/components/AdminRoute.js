import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        var userData = JSON.parse(localStorage.getItem('user'));
        return ((localStorage.getItem('user') && userData.roles == "ADMIN")
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}} />
)