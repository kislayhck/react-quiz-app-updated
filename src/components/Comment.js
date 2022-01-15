import React from "react";
import "./style.css";

function Comment({ details, name }) {
  return (
    <div className=" commentCard mb-5">
      <div className="commentImg">
        <img
          src="https://www.pngitem.com/pimgs/m/286-2868690_thumb-image-smiling-businessman-png-transparent-png.png"
          alt="dummy"
          className="img-fluid"
        />
      </div>
      <div className="commentContent">
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Comment;
