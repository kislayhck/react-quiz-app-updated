import React from "react";
import "./style.css";

function Comment({ details, name, img }) {
  return (
    <div className=" commentCard mb-5">
      <div className="commentImg">
        <img src={img} alt="dummy" className="img-fluid" />
      </div>
      <div className="commentContent">
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Comment;
