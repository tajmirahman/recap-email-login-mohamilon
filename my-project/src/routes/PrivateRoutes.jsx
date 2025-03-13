import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }

    if(user){
        return children;
    }

    return (
        <div>
          <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoutes;