import { Link } from "react-router-dom";
import "./post.scss";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import Comments from "../comments/Comments";
import { useState } from "react";
function Post({ post }) {
  const [commentOpen, setCommentOpen] = useState(false)
    //Temporary
    const Liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
                <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlined />
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
        </div>
        <div className="info">
            <div className="item">
            {Liked ? <FavoriteOutlined/> :<FavoriteBorderOutlined/>}
            12 Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlined/>
            12 Comments
            </div>
            <div className="item">
            <ShareOutlined/>
            Share
            </div>
        </div>
        { commentOpen && <Comments/>}
      </div>
    </div>
  );
}

export default Post;
