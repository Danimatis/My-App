import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

const SignOut = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    toast("Later!");
    navigate("/");
  }, [logout, navigate]);
  return null;
};
export default SignOut;
