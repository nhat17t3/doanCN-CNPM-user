import React from "react";
import { useHistory } from "react-router-dom";

function TutorApplyItem(props) {
  const history = useHistory();

  const { tutor, onViewClick, onAcceptClick,candidate, statusOpen1 } = props;

  const handleEditAcceptClick = () => {
    if (onAcceptClick) onAcceptClick(tutor);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(tutor);
  };


  return (
    <>
      <div href className="comment-group">
        <img
          src={tutor.avatar}
          alt="Avatar"
          className="comment-img"
        />
        <div className="comment-info" onClick={handleViewClick}>
          <span className="comment-name">
          {tutor.name}
          </span>
          <span className="comment-description">{tutor.description}</span>
        </div>
        {/* {candidate.status == "APPLIED" ? (
          <div className="grid__column-3 notify-item__action">
            <a
              href
              className="btn  notify-item__accept-link"
              onClick={handleEditAcceptClick}
            >
              Chấp nhận
            </a>
          </div>
        ) :  (
          <div className="grid__column-3 notify-item__action">
            <a href className="btn  notify-item__accept-link disabled">
              Đã chấp nhận
            </a>
          </div>
        ) 
        } */}
        {statusOpen1 == "OPEN" ? (
          candidate.status == "APPLIED" ? (
            <div className="grid__column-3 notify-item__action">
              <a
                href
                className="btn  notify-item__accept-link"
                onClick={handleEditAcceptClick}
              >
                Chấp nhận
              </a>
            </div>
          ) :  (
            <div className="grid__column-3 notify-item__action">
              <a href className="btn  notify-item__accept-link disabled">
                Đã chấp nhận
              </a>
            </div>
          ) 
        ) :  (
          <div className="grid__column-3 notify-item__action">
            <a href className="btn  notify-item__accept-link disabled">
              Lớp đã được mở
            </a>
          </div>
        ) 
        }
      </div>
    </>
  );
}

export default TutorApplyItem;
