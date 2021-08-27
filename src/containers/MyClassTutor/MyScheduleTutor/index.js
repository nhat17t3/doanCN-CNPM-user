import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getListClassByTutor } from "../../../actions/Class/class.actions";
import ListMyClassTutor from "../ListMyClassTutor";

MyScheduleTutor.propTypes = {};

function MyScheduleTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { classId } = useParams();


  useEffect(() => {
    dispatch(getListClassByTutor());
  }, []);

 

  const postView = useSelector((state) => {
    const foundPost = state.classes.listClassByTutor.find((x) => x.idClass === +classId);
    return foundPost;
  });

  const v = useSelector((state) => state.classes.listClassByTutor);
  if (v.length == 0) return null;

  return (
    <>
      <ListMyClassTutor />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Login Form */}
          <div className="auth-form" style={{minWidth:"1000px",overflow:"scroll"}}>
            <div className="auth-form__container">
              <h1 style={{textAlign:"center"}}> Lịch học</h1>
              
              
              <div className="calender">
                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 2</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.sang_2
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.chieu_2
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.toi_2
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 3</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.sang_3
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.chieu_3
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.toi_3
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 4</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.sang_4
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.chieu_4
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.toi_4
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 5</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.sang_5
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.chieu_5
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.toi_5
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 6</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.sang_6
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.chieu_6
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.toi_6
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Thứ 7</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.sang_7
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.chieu_7
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.toi_7
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>

                      <div className="calendar__row">
                        <h3 className="calendar__heading">Chủ nhật</h3>
                        <ul className="calendar-list">
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.sang_cn
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Sáng
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.chieu_cn
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Chiều
                            </label>
                          </li>
                          <li className="calendar-item">
                            <label
                              className={
                                postView?.schedules.toi_cn
                                  ? "calendar-label calendar-active"
                                  : "calendar-label"
                              }
                            >
                              Tối
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                 
              
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyScheduleTutor;
