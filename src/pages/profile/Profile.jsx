import "./profile.scss"
import { FacebookTwoTone,LinkedIn,Instagram,Pinterest,Twitter,Place,Language,EmailOutlined,MoreVert } from "@mui/icons-material"
import Posts from '../../components/posts/Posts'
function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="cover" alt="" />
        <img src="https://tnhrce.org/wp-content/uploads/2022/09/nancy_jewel_mcdonie_1_17_09_2022.jpg" className="profilePic" alt="" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.linkedin.com/in/kunal003/">
              <FacebookTwoTone fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com/in/kunal003/">
              <Instagram fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com/in/kunal003/">
              <Twitter fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com/in/kunal003/">
              <LinkedIn fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com/in/kunal003/">
              <Pinterest fontSize="large"/>
            </a>
          </div>
          <div className="center">
            <span>Nancy</span>
            <div className="info">
              <div className="item">
                <Place/>
                <span>Korea</span>
              </div>
              <div className="item">
                <Language/>
                <span>English</span>
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined/>
            <MoreVert/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}

export default Profile
