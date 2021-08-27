import React from "react";
import PropTypes from "prop-types";

InviteTutorItem.propTypes = {

};

InviteTutorItem.defaultProps = {

};

function InviteTutorItem(props) {
  const { post, onInviteClick, onViewClick } = props;

  const checkInvite = localStorage.getItem(`moi day o bai dang ${post.id}`)

  const handleInviteClick = () => {
    if (onInviteClick) onInviteClick(post);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(post);
  };

  return (
    <>
      <div className="post-item">
        <div className="grid__row">
          <div className="grid__column-2 post-item__one ">
            <div className="post-item__name">ID-STUDENT:{post.idStudent}</div>
            <div className="post-item__time">Ngày hết hạn: {post.finishDate}</div>
          </div>
          <div className="grid__column-6 post-item__content" onClick={handleViewClick}>
            <div className="post-item__title">{post.title}</div>
            <div className="post-item__description">{post.description}</div>
            <div className="post-item__content-group">
              {post.subject.map((subject_item) => (
                <span className="post-item__subject">{subject_item}</span>
              ))}
              <span className="post-item__grade">{post.grade}</span>
              <span className="post-item__address">{post.address}</span>
            </div>
          </div>
          <div className="grid__column-2 post-item__price ">
            {post.price}
            <div className>VND/buổi</div>
          </div>
          <div className="grid__column-2 post-item__action">
          {checkInvite !== `${post.id}` ? (
                        <a href className="btn  notify-item__accept-link"  onClick={handleInviteClick}>Mời gia sư</a>
                      ) : (
                        <a
                          className="btn btn--primary btn--disable btn  notify-item__accept-link "
                        >
                          Đã mời 
                        </a>
                      )}
          {/* <a href className="btn  notify-item__accept-link"  onClick={handleInviteClick}>Mời gia sư</a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default InviteTutorItem;
