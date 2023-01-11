import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const ProtectedRoutes = ({ children, onlyBiz = false }) => {
  const { user } = useAuth();
  if (!user || (onlyBiz && !user.biz)) {
    return <Navigate to="/signIn" />;
  }
  return children;
};
export default ProtectedRoutes;
