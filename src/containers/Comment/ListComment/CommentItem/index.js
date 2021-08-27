import React from "react";
import { useHistory } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function CommentItem(props) {
  const { comment } = props;
  const history = useHistory();
  const link_img = "/assets/img/avatar.jpg"

  const firstExample = {
    size: 20,
    value: comment.rate,
    edit: false
  };

  return (
    <>
      <div href className="comment-group">
        <img
          src={link_img}
          alt=""
          className="comment-img"
        />
         
        <div className="comment-info">
          
          <span className="comment-name">
         {comment.name} 
         {comment.rate!==0 ? <ReactStars {...firstExample} /> : null }
          </span>
          <span className="comment-description">{comment.content}</span>
        </div>
      </div>
    </>
  );
}

export default CommentItem;
