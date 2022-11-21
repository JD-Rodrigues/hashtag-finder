import React from "react";
import { isAuthenticated } from "./checkLogin";
import { Navigate } from "react-router-dom";
import { validateLogin } from "../../services";
 

export function PrivateRoute( {children} ) {
    return isAuthenticated() ? children : <Navigate to={'/login'} />;
}