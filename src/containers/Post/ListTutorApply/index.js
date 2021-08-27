import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { acceptSuggestion } from "../../../actions";
import TutorApplyItem from "./TutorApplyItem";
import CommentItem from "./TutorApplyItem";




ListTutorApply.propTypes = {};

function ListTutorApply(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { IDTUTOR } = props;

  

  const { listTutorApply , postId ,statusOpen} = props;
  
  const onAcceptClick = (tutor) => {
    dispatch(acceptSuggestion(postId,tutor.id))
  };

  const onViewClick = (tutor) => {
    console.log("View-tutor: ", tutor);
    const viewPostUrl = `/tutorview/${tutor.id}`;
    history.push(viewPostUrl);
  };

  return (
    <>
      <ul className="comment-list">
        {listTutorApply?.map((a) => (
          <li className="comment-item " key={a.tutor.id}>
            <TutorApplyItem tutor={a.tutor} candidate={a}  onViewClick={onViewClick} onAcceptClick={onAcceptClick} statusOpen1={statusOpen}/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTutorApply;
