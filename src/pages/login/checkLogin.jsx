import React from "react";
import { validateLogin } from "../../services";

export const isAuthenticated = () => {
    if ({validateLogin} === true ) {
        console.log('true')
        return true;
    } else {
        console.log('false')
        return false;
    }
}