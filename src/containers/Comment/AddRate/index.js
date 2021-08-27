import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { addRate } from "../../../actions/Comment/comment.actions";
import ListMyClassStudent from "../../MyClassStudent/ListMyClassStudent";
import ReactStars from "react-rating-stars-component";

AddRate.propTypes = {};

AddRate.defaultProps = {};

function AddRate(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { classId } = useParams();

  // const userID = useSelector((state) => state.user.user.id);
  const { IDTUTOR } = props;

  const [content, setContent] = useState("");
  const [star, setStar] = useState(0);


  const rateStar = {
    size: 25,
    count: 5,
    isHalf: false,
    value: 5,
    color: "blue",
    activeColor: "yellow",
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`);
      setStar(newValue);
    }
  };

  const addrate = async (e) => {
    e.preventDefault();
    const values = {
      idTutor: Number(IDTUTOR),
      content: content,
      rate : star,
      idClass : Number(classId),
    };
    console.log(values);
    await dispatch(addRate(values));
    history.push(`/list-myclass-student`);
  };

  return (
    <>
      <ListMyClassStudent />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Login Form */}
          <form className="auth-form" onSubmit={addrate}>
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">Đánh giá</h3>
              </div>
              <div className="auth-form__form">
                <div className="auth-form__group">
                <ReactStars {...rateStar} />
                </div>
                <textarea
                  placeholder="Thêm bình luận ..."
                  name="content"
                  id
                  cols={30}
                  rows={6}
                  className="form__input"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                >
                  {content}
                </textarea>
              </div>
           
              <div className="auth-form__controls">
                <Link
                  to="/list-myclass-student"
                  className="btn btn--normal auth-form__controls-back  "
                >
                  Trở lại
                </Link>
                <button className="btn btn--primary" type="submit">
                  Đánh giá
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddRate;
