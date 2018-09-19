import React from "react";

const Author = ({ user }) => (
  <div className="author">
    <img
      className="author-img"
      src={user.profile_image.small}
      alt={user.name}
    />
    <div className="author-name">{user.name}</div>
  </div>
);

export default Author;
