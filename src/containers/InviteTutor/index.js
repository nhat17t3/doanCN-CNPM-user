import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { addInvitation, addInvitationTutor, getListPostByToken, login } from "../../actions";
import Main from "../Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InforTutor from "../Tutor/InforTutor";
import InviteTutorItem from "./InviteTutorItem";

InviteTutor.propTypes = {};
function InviteTutor(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { tutorId } = useParams();

  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    dispatch(getListPostByToken());
  }, []);

  const myPosts = useSelector((state) => state.posts.listPostByToken);
  useEffect(() => {
    setListPost(myPosts);
  }, [myPosts]);

  const handlePostViewClick = (post) => {
    console.log("View-post: ", post);
    const viewPostUrl = `/mypostview/${post.id}`;
    history.push(viewPostUrl);
  };

  const handleInviteTutorClick = async (post) => {
    localStorage.setItem(`moi day o bai dang ${post.id}`, post.id)
    await dispatch(addInvitationTutor(tutorId,post));
  }; //////////////////////////



  return (
    <>
      <InforTutor />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Login Form */}
          <div className="auth-form" style={{minWidth:"1000px",overflow:"scroll"}}>
            <div className="auth-form__container">
              <h1 style={{textAlign:"center"}}> Bài đăng của tôi</h1>
              <div className="post">
                <div className="grid__row">
                  <div className="grid__column-2 post-header__item ">
                    Người Đăng
                  </div>
                  <div className="grid__column-6 post-header__item">
                    Nội dung lớp tìm gia sư
                  </div>
                  <div className="grid__column-2 post-header__item">
                    Học phí đề nghị
                  </div>
                  <div className="grid__column-2 post-header__item">
                    Nhận lớp ngay
                  </div>
                </div>
                {listPost?.map((post) => (
                  <div key={post.id}>
                    <InviteTutorItem
                      post={post}
                      onViewClick={handlePostViewClick}
                      onInviteClick={handleInviteTutorClick}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
}
export default InviteTutor;
