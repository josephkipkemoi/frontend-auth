import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
import { setIsFetching } from '../Redux/Slice/Slice';

const ProtectedRoute = ({children}) => {
    const user = localStorage.getItem("token")
    if(!user) {
        return <Navigate to="/login"  replace />
    } 
    return children
};

export default ProtectedRoute;