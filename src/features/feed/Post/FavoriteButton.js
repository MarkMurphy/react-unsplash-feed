import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BookmarkIcon, BookmarkBorderIcon } from '../../../components/Icon';
import { toggleFavorite, selecttIsFavorite } from '../../../state/favorites';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const FavoriteButton = ({ item, isFavorite, toggleFavorite, ...props }) => (
  <Root onClick={() => toggleFavorite(item)} {...props}>
    {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
  </Root>
);

const mapStateToProps = (state, { item }) => ({
  isFavorite: selecttIsFavorite(state, item.id),
});

const mapDispatchToProps = {
  toggleFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
