import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
import "./Post.css";

const Post = ({ item }) => {
  return (
    <article className="post">
      <PostHeader user={item.user} />
      <PostImage
        src={item.urls.regular}
        preview={item.urls.thumb}
        alt={item.description}
      />
      <PostFooter likes={item.likes} created={item.created_at} />
    </article>
  );
};

Post.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string,
    likes: PropTypes.number,
    user: PropTypes.object,
    urls: PropTypes.shape({
      regular: PropTypes.string,
      thumb: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Post;
