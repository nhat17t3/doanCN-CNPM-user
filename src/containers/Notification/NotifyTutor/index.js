import React from "react";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";
import "reactjs-popup/dist/index.css";

function NotifyTutor(props) {
  const { notify } = props;
  const history = useHistory();

  //   const handleViewClick = async () => {
  //     const ViewUrl = `/postview/${suggestion.idPost}`;
  //     history.push(ViewUrl);
  //   };

  return (
    <>
      <div className="grid__row">
        <div className="grid__column-3 notify-item__one ">
          <div className="notify-item__time"><Moment format="YYYY/MM/DD HH:mm">{notify.time}</Moment></div>
        </div>
        <div className="grid__column-6 notify-item__content">
          <div className="notify-item__description">{notify.content}</div>
        </div>
        <div className="grid__column-3 notify-item__one">
          <div className="notify-item__time notify-item__description">
            <span>{notify.type}</span>
          </div>
        </div>
        {/* <div className="grid__column-2 notify-item__action">
          {suggestion.status == 1 ? (
            <a
              href
              className="btn  notify-item__view-link"
              onClick={handleViewClick}
            >
              Xem lại lớp
            </a>
          ) : null}
        </div> */}
      </div>
    </>
  );
}

export default NotifyTutor;
