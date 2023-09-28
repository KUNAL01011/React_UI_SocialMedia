import { useContext } from 'react'
import './comments.scss'
import { AuthContext } from "../../context/authContext"

function Comments() {

    const { currentUser }  = useContext(AuthContext);
    const comments = [
        {
            id:1,
            desc:"lLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium possimus provident, cumque, laborum esse, ratione dicta architecto ullam sint soluta totam saepe ea consequuntur? Nulla itaque ut odit quos eveniet!",
            name:"Kunal",
            userId:1,
            profilePicture:"https://tnhrce.org/wp-content/uploads/2022/09/nancy_jewel_mcdonie_1_17_09_2022.jpg"
        },
        {
            id:2,
            desc:"lLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium possimus provident, cumque, laborum esse, ratione dicta architecto ullam sint soluta totam saepe ea consequuntur? Nulla itaque ut odit quos eveniet!",
            name:"Kunal",
            userId:1,
            profilePicture:"https://tnhrce.org/wp-content/uploads/2022/09/nancy_jewel_mcdonie_1_17_09_2022.jpg"
        },
    ]

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='comment' />
            <button>send</button>
        </div>
      {
        comments.map(comment =>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <div className="date">1 min ago</div>
            </div>
        ))
      }
    </div>
  )
}

export default Comments
