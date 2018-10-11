import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const PostFooter = ({ likes, created, actions }) => (
  <footer className="post-footer">
    <div style={{ float: 'right' }}>{actions}</div>
    <div className="post-likes">{likes} likes</div>
    <time className="post-created" dateTime={created}>
      {moment(created).fromNow()}
    </time>
  </footer>
);

PostFooter.propTypes = {
  likes: PropTypes.number,
  created: PropTypes.string.isRequired,
  actions: PropTypes.any,
};

export default PostFooter;
