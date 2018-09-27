import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const PostFooter = ({ likes, created }) => (
  <footer className="post-footer">
    <div className="post-likes">{likes} likes</div>
    <time className="post-created" dateTime={created}>
      {moment(created).fromNow()}
    </time>
  </footer>
);

PostFooter.propTypes = {
  likes: PropTypes.number,
  created: PropTypes.string.isRequired
};

export default PostFooter;
