import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ user }) => (
  <div className="author">
    <div className="author-avatar">
      <img src={user.profile_image.small} alt={user.name} />
    </div>
    <div className="author-info">
      <span className="author-username">{user.username}</span>
      <span className="author-name">{user.name}</span>
    </div>
  </div>
);

Author.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Author;
