import React from "react";
import PropTypes from "prop-types";
import "./ImageList.css";

const ImageProp = PropTypes.shape({
  urls: PropTypes.object,
  description: PropTypes.string
});

const FeedItem = img =>
  img && (
    <li key={img.urls.small} className="feed-item">
      <div className="feed-tile">
        <a className="feed-link" href={img.urls.small}>
          <div className="feed-image">
            <img src={img.urls.small} alt={img.description} />
          </div>
        </a>
      </div>
    </li>
  );

const Feed = ({ images }) => <ul className="feed">{images.map(FeedItem)}</ul>;

Feed.propTypes = {
  images: PropTypes.arrayOf(ImageProp)
};

export default Feed;
