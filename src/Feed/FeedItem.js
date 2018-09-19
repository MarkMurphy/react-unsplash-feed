import React from "react";
import Author from "../Author";

const FeedItem = ({ item }) => (
  <div className="feed-item">
    <img
      className="feed-item-img"
      src={item.urls.small}
      alt={item.description}
    />
    <div className="feed-item-desc">{item.description}</div>
    <Author user={item.user} />
  </div>
);

export default FeedItem;
