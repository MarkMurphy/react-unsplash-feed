import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from '../../../components/ProgressiveImage';

const PostImage = ({ src, preview, aspectRatio, alt }) => (
  <div
    className="post-media"
    style={{
      paddingBottom: `${Math.min(aspectRatio * 100, 100)}%`,
    }}
  >
    <ProgressiveImage
      className="post-photo"
      image={src}
      preview={preview}
      alt={alt}
    />
  </div>
);

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number.isRequired,
  alt: PropTypes.string,
};

export default PostImage;
