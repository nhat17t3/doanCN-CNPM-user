import PropTypes from "prop-types";
import React from "react";
import { Paypal } from "../Paypal/paypal";
import Popup from "reactjs-popup";
import Moment from "react-moment";
import "reactjs-popup/dist/index.css";

InvitationItem.propTypes = {};

InvitationItem.defaultProps = {};

function InvitationItem(props) {
  const { bill, onPayClick, onViewClick } = props;

  const handlePayClick = () => {
    if (onPayClick) onPayClick(bill);
  };

  const handleViewBillClick = () => {
    if (onViewClick) onViewClick(bill);
  };

  const cost = bill.cost.split(".");

  return (
    <>
      <div className="grid__row">
        <div className="grid__column-3 notify-item__one ">
          <div className="notify-item__time">
            <Moment format="YYYY/MM/DD HH:mm">{bill.createdDate}</Moment>
          </div>
        </div>
        <div
          className="grid__column-5 notify-item__content"
          onClick={handleViewBillClick}
        >
          <div className="notify-item__description">{bill.description}</div>
        </div>
        <div className="grid__column-2 notify-item__one ">
          <div className="notify-item__time">{cost[0]} VND</div>
        </div>

        {bill.status == "UNPAID" ? (
          <div className="grid__column-2 notify-item__action">
            <Popup trigger={<button className="btn  notify-item__accept-link">Thanh toán</button>} position="bottom left">
              {(close) => (
                <div>
                  <Paypal cost={cost[0]} bill={bill}/>
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                </div>
              )}
            </Popup>
            {/* <a
              href
              className="btn  notify-item__accept-link"
              onClick={handlePayClick}
            >
              Thanh toán
              
            </a> */}
          </div>
        ) : (
          <div className="grid__column-2 notify-item__action">
            <a href className="btn  notify-item__refuse-link disabled">
              Đã Thanh Toán
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default InvitationItem;
