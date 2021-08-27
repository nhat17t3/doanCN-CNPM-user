import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { acceptInvitation, getListInvitationByTutor, refuseInvitation } from "../../../actions";
import { getListBillByTutor } from "../../../actions/Bill/bill.actions";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";
import BillItem from "../BillItem";




ListBill.propTypes = {};

function ListBill(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListBillByTutor());
  }, []);

  const listBill = useSelector((state) => state.bills.listBill);

  const handlePayClick = (post) => {
    // console.log("Edit-post: ", post);
    // const editPostUrl = `/listpostedit/${post.id}`;
    // history.push(editPostUrl);
  };

  const handleBillViewClick = (bill) => {
    console.log("view-post: ", bill);
    const viewPostUrl = `/postview/${bill.idPost}`;
    history.push(viewPostUrl);
  };

  return (
    <>
      <Layout>
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-2" style={{ marginTop: "62px" }}>
                <Sidebar />
              </div>
              <div className="grid__column-10">
                <div className="notify">
                  <h2 className="notify__heading">Danh sách hóa đơn</h2>
                  <div className="grid__row " style={{ margin: "auto 0" }}>
                    <div className="grid__column-3 notify-header__item ">
                      Thời gian
                    </div>
                    <div className="grid__column-5 notify-header__item">
                      Nội dung
                    </div>
                    <div className="grid__column-2 notify-header__item">
                      Số tiền
                    </div>
                    <div className="grid__column-2 notify-header__item">
                      Hoạt động
                    </div>
                  </div>

                  {listBill.map((bill) => (
                    <div className="notify-item" key={bill.billId}>
                      <BillItem
                        bill={bill}
                        onPayClick={handlePayClick}
                        onViewClick={handleBillViewClick}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListBill;
