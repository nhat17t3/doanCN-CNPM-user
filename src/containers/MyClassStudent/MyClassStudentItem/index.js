import PropTypes from "prop-types";
import React from "react";

MyClassStudentItem.propTypes = {};

MyClassStudentItem.defaultProps = {};

function MyClassStudentItem(props) {
  const { myClass, onViewScheduleClick, onRateClassClick } = props;

  const checkRate = localStorage.getItem(`danh gia ${myClass.idClass}`);

  const handleRateClassClick = () => {
    if (onRateClassClick) onRateClassClick(myClass);
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
              onClick={handleViewScheduleClick}
            >
              Xem lịch học
            </a>
          </div>
        ) : checkRate !== `${myClass.idClass}` ? (
          <div className="grid__column-3 notify-item__action">
            <a
              href
              className="btn  notify-item__accept-link"
              onClick={handleRateClassClick}
            >
              Đánh giá
            </a>
          </div>
        ) : (
          <div className="grid__column-3 notify-item__action">
            <a
              href
              className="btn btn--primary btn--disable  notify-item__accept-link"
            >
              Đã đánh giá
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default MyClassStudentItem;
