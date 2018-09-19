import React from "react";
import PropTypes from "prop-types";
import "./Feed.css";

const Feed = ({ items, renderItem }) => {
  const children = items.map(renderItem);
  return <div className="feed">{children}</div>;
};

Feed.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func
};

Feed.defaultProps = {
  items: []
};

export default Feed;
