import "./rightbar.scss"
import Logo from "../../assets/kunal_logo.jpg"
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <span>Kunal </span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <span>Kunal </span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <p><span>Kunal </span> changed their cover picture</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <p><span>Kunal </span> changed their cover picture</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <p><span>Kunal </span> changed their cover picture</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <p><span>Kunal </span> changed their cover picture</p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <div className="online"/>
              <span>Kunal </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <div className="online"/>
              <span>Kunal </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <div className="online"/>
              <span>Kunal </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <div className="online"/>
              <span>Kunal </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Logo} alt="" />
              <div className="online"/>
              <span>Kunal </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
