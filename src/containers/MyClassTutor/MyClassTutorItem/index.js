import PropTypes from "prop-types";
import React from "react";

MyClassTutorItem.propTypes = {};

MyClassTutorItem.defaultProps = {};

function MyClassTutorItem(props) {
  const { myClass, onViewScheduleClick, onFinishClassClick } = props;

  const handleFinishClassClick = () => {
    if (onFinishClassClick) onFinishClassClick(myClass);
  };

  const handleViewScheduleClick = () => {
    if (onViewScheduleClick) onViewScheduleClick(myClass);
  };

  return (
    <>
      <div className="grid__row">
        <div className="grid__column-2 notify-item__one ">
          <div className="notify-item__time">{myClass.idClass}</div>
        </div>
        <div className="grid__column-2 notify-item__content">
          <div className="notify-item__description">{myClass.name}</div>
        </div>
        <div className="grid__column-3 notify-item__one ">
          <div className="notify-item__time">{myClass.address}</div>
        </div>
        <div className="grid__column-2 notify-item__one ">
          <div className="notify-item__time">{myClass.phonenumber}</div>
        </div>

        {myClass.status !== "FINISHED" ? (
          <div className="grid__column-3 notify-item__action">
            <a
              href
              className="btn  notify-item__accept-link"
              onClick={handleFinishClassClick}
            >
              Kết thúc khóa học
            </a>
            <a
              href
              className="btn  notify-item__accept-link"
              onClick={handleViewScheduleClick}
            >
              Xem lịch học
            </a>
          </div>
        ) : (
          
          <div className="grid__column-3 notify-item__action">
          <a href className="btn  notify-item__refuse-link disabled">
          Xong khóa học
          </a>
        </div>
        )}
      </div>
    </>
  );
}

export default MyClassTutorItem;
