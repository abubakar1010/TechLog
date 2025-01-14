import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectToken } from "../../redux/features/auth/authSlice";

export const ProtectedRoute = ({children}:{children: ReactNode}) => {
	
    const token = useAppSelector(selectToken)
    
    if(!token) return <Navigate to={"/login"} replace />
    
    return children
};
