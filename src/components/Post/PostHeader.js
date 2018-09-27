import React from "react";
import PropTypes from "prop-types";
import PostAuthor from "./PostAuthor";

const PostHeader = ({ user }) => (
  <header className="post-header">
    <PostAuthor user={user} />
  </header>
);

PostHeader.propTypes = {
  user: PropTypes.object.isRequired
};

export default PostHeader;
