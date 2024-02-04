import { useNavigate } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { useContext } from "react";
import AuthContext from "context/AuthContext";




export default function MenuList() {
  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer__grid">
        <button 
          type="button"
          onClick={() => navigate("/")}>
          <BsFillHouseFill />
          Home
        </button>
        <button 
          type="button"
          onClick={() => navigate("/profile")}>
          <FaUserCircle />
          Profile
        </button>
        {user === null ? (
          <button 
            type="button"
            onClick={() => navigate("/users/login")}>
            <IoIosLogIn />
            Login
          </button>  
        ) : (
          <button 
            type="button"
            onClick={() => navigate("/")}>
            <IoIosLogOut />
            Logout
          </button>  
        )}
      </div>
    </div>
  )
}