import { useContext } from "react";
import "./stories.scss";
import {AuthContext} from '../../context/authContext'

function Stories() {
  const stories = [
    {
      id: 1,
      name: "kim",
      img: "https://www.hindustantimes.com/ht-img/img/2023/07/15/550x309/jennie_1689410686831_1689410687014.jpg",
    },
    {
      id: 2,
      name: "nancy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABwysdnMRsfbH919Z_8kFJ4GgRlX69le2qmEHXf62sPfcJ8wavmA9OfW3sX5MCzEI2RM&usqp=CAU",
    },
    {
      id: 3,
      name: "lisa",
      img: "https://i.pinimg.com/originals/8d/c1/fe/8dc1feec78f6334efd9831b78654fad7.jpg",
    },
    {
      id: 4,
      name: "jennie",
      img: "https://i.zoomtventertainment.com/story/Jennie_8.png",
    },
  ];
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
