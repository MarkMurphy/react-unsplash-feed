import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActivityIndicator from '../../components/ActivityIndicator';
import Post from './Post';
import styles from './Posts.module.css';

const Error = styled.div`
  color: #900;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const End = styled.div`
  margin-bottom: 32px;
  padding: 16px;
  text-align: center;
`;

const FeedList = ({ loading, error, items, hasMore }) => {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <Post item={item} key={item.id} />
      ))}
      {error && <Error>{error}</Error>}
      {loading && (
        <Loading>
          <ActivityIndicator>Loading...</ActivityIndicator>
        </Loading>
      )}
      {!hasMore && <End>You've reached the end!</End>}
    </div>
  );
};

FeedList.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

FeedList.defaultProps = {
  items: [],
};

export default FeedList;
