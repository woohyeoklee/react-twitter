import { useNavigate } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";




export default function MenuList() {
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
        <button 
          type="button"
          onClick={() => navigate("/")}>
          <IoIosLogOut />
          Logout
        </button>
      </div>
    </div>
  )
}