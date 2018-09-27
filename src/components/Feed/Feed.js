import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Post from "../Post";
import "./Feed.css";
import ActivityIndicator from "../ActivityIndicator";

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Feed = ({ items, loading }) => {
  if (loading) {
    return (
      <Loading>
        <ActivityIndicator>Loading...</ActivityIndicator>
      </Loading>
    );
  }

  return (
    <div className="feed">
      {items.map(item => (
        <Post item={item} key={item.id} />
      ))}
    </div>
  );
};

Feed.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool
};

Feed.defaultProps = {
  items: []
};

export default Feed;
