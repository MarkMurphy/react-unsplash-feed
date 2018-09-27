import React from "react";
import PostAuthor from "./PostAuthor";
import moment from "moment";
import "./Post.css";

const PostImage = ({ src, alt }) => (
  <img className="post-photo" src={src} alt={alt} />
);

const PostHeader = ({ user }) => (
  <header className="post-header">
    <PostAuthor user={user} />
  </header>
);

const PostFooter = ({ likes, created }) => (
  <footer className="post-footer">
    <div className="post-likes">{likes} likes</div>
    <time className="post-created" dateTime={created}>
      {moment(created).fromNow()}
    </time>
  </footer>
);

const Post = ({ item }) => {
  return (
    <article className="post">
      <PostHeader user={item.user} />
      <PostImage src={item.urls.regular} alt={item.description} />
      <PostFooter likes={item.likes} created={item.created_at} />
    </article>
  );
};

export default Post;
