import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { finishClassByTutor, FinishClassByTutor, getListClassByTutor } from "../../../actions/Class/class.actions";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";
import MyClassTutorItem from "../MyClassTutorItem";




ListMyClassTutor.propTypes = {};

function ListMyClassTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListClassByTutor());
  }, []);


  const listClassByTutor = useSelector((state) => state.classes.listClassByTutor);


  const handleFinishClassClick = (myClass) => {
   dispatch(finishClassByTutor(myClass));
  };

  const handleViewScheduleClick = (myClass) => {
    console.log("viewschedule: ", myClass);
    const viewPostUrl = `/viewschedule-tutor/${myClass.idClass}`;
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
                      Tên học sinh
                    </div>
                    <div className="grid__column-3 notify-header__item">
                      Địa chỉ
                    </div>
                    <div className="grid__column-2 notify-header__item">
                      SĐT học sinh
                    </div>
                    <div className="grid__column-3 notify-header__item">
                      Hoạt động
                    </div>
                  </div>

                  {listClassByTutor.map((myClass) => (
                    <div className="notify-item" key={myClass.idClass}>
                      <MyClassTutorItem
                        myClass={myClass}
                        onFinishClassClick={handleFinishClassClick}
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

export default ListMyClassTutor;
