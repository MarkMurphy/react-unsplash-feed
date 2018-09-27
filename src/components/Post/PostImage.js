import React from "react";
import PropTypes from "prop-types";
import ProgressiveImage from "../ProgressiveImage";

const PostImage = ({ src, preview, alt }) => (
  <div className="post-media">
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
  alt: PropTypes.string
};

export default PostImage;
