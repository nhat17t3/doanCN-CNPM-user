import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getListInvitation, getListSuggestion } from "../../../actions";
import { getNotifyByStudent, getNotifyByTutor } from "../../../actions/Notify/notify.actions";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";
import NotifyCustomer from "../NotifyCustomer";
import NotifyTutor from "../NotifyTutor";



ListNotification.propTypes = {};

function ListNotification(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listnotify_customer, setListnotify_customer] = useState([]);
  const [listnotify_tutor, setListnotify_tutor] = useState([]);
  // const { role } = useSelector((state) => state.user.user);
  const role = localStorage.getItem("role");
  const [a, setA] = useState(false);


  useEffect(() => {
    dispatch(getNotifyByTutor());
  }, []);
  useEffect(() => {
    dispatch(getNotifyByStudent());
  }, []);

  const listNotifyByTutor = useSelector((state) => state.notifys.listNotifyByTutor);
  const listNotifyByStudent = useSelector((state) => state.notifys.listNotifyByStudent);

  useEffect(() => {
    setListnotify_tutor(listNotifyByTutor);
  }, [listNotifyByTutor]);

  useEffect(() => {
    setListnotify_customer(listNotifyByStudent);
  }, [listNotifyByStudent]);

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
                  <h2 className="notify__heading">Thông báo</h2>
                  <div className="grid__row " style={{ margin: "auto 0" }}>
                    <div className="grid__column-3 notify-header__item ">
                      Thời gian
                    </div>
                    <div className="grid__column-6 notify-header__item">
                      Nội dung
                    </div>
                    <div className="grid__column-3 notify-header__item ">
                      Loại thông báo
                    </div>
                    {/* <div className="grid__column-2 notify-header__item">
                      Hoạt động
                    </div> */}
                  </div>

                  {role == "ROLE_TUTOR"
                    ? listnotify_tutor.map((notify) => (
                        <div className="notify-item" key={notify.id}>
                          <NotifyTutor notify={notify} />
                        </div>
                      ))
                    : listnotify_customer.map((notify) => (
                        <div className="notify-item" key={notify.id}>
                          <NotifyCustomer notify={notify} />
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

export default ListNotification;
