import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FinishClassByStudent, getListClassByStudent } from "../../../actions/Class/class.actions";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";
import MyClassStudentItem from "../MyClassStudentItem";




ListMyClassStudent.propTypes = {};

function ListMyClassStudent(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListClassByStudent());
  }, []);


  const listClassByStudent = useSelector((state) => state.classes.listClassByStudent);


  const handleRateClassClick = (myClass) => {
    localStorage.setItem(`danh gia ${myClass.idClass}`, myClass.idClass)

    history.push(`/add-rate/${myClass.idClass}`);

  };


  const handleViewScheduleClick = (myClass) => {
    console.log("viewschedule: ", myClass);
    const viewPostUrl = `/viewschedule-student/${myClass.idClass}`;
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
                  <h2 className="notify__heading">Danh sách Lớp của tôi</h2>
                  <div className="grid__row " style={{ margin: "auto 0" }}>
                    <div className="grid__column-2 notify-header__item ">
                    Mã lớp
                    </div>
                    <div className="grid__column-2 notify-header__item">
                      Tên gia sư
                    </div>
                    <div className="grid__column-3 notify-header__item">
                      Địa chỉ
                    </div>
                    <div className="grid__column-2 notify-header__item">
                      SĐT gia sư
                    </div>
                    <div className="grid__column-3 notify-header__item">
                      Hoạt động
                    </div>
                  </div>

                  {listClassByStudent.map((myClass) => (
                    <div className="notify-item" key={myClass.idClass}>
                      <MyClassStudentItem
                        myClass={myClass}
                        onRateClassClick={handleRateClassClick}
                        onViewScheduleClick={handleViewScheduleClick}
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

export default ListMyClassStudent;
