import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';
import FavoriteButton from '../FavoriteButton';
import './Post.css';

const Post = ({ item, ...props }) => {
  const actions = [<FavoriteButton key="fav" item={item} />];

  return (
    <article className="post">
      <PostHeader user={item.user} />
      <PostImage
        src={item.urls.regular}
        preview={item.urls.thumb}
        alt={item.description}
        aspectRatio={item.height / item.width}
      />
      <PostFooter
        likes={item.likes}
        created={item.created_at}
        actions={actions}
      />
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
      thumb: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Post;
