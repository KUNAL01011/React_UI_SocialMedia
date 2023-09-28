import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { DarkModeOutlined,WbSunnyOutlined,GridViewOutlined,NotificationsOutlined,EmailOutlined,PersonOutlined,SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from '../../assets/kunal_logo.jpg'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
function Navbar() {

    const {toggle,darkMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
        <div className="left">
                
            <Link to="/" style={{textDecoration:"none"}}>
                <span >SocialMedia</span>
            </Link>
            <HomeOutlinedIcon/>
            {darkMode ? <WbSunnyOutlined onClick = {toggle}/>:<DarkModeOutlined onClick = {toggle}/> }
            <GridViewOutlined/>
            <div className="search">
                <SearchOutlined/>
                <input type="text" placeholder="search"/>
            </div>
            
        </div>
        <div className="right">
            <PersonOutlined/>
            <EmailOutlined/>
            <NotificationsOutlined/>
            <div className="user">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
