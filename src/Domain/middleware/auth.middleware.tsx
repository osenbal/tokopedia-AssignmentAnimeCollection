import { useGlobalContext } from "../context/global.context";
import { Outlet, Navigate } from "react-router-dom";

const AuthMiddleware = () => {
  const { state } = useGlobalContext();
  return state.isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthMiddleware;
