import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";


export default function PrivateRoute() {
  const {user} = useSelector((state)=>state.user);
  const currentUser = user?.currentUser;
  

  return (
    currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
  );
}
