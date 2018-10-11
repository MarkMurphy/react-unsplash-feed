import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFavorites } from '../../state/favorites';
import ImageList from '../ImageList';
import AppHeader from '../AppHeader';
import ArrowBackIcon from '../Icon/ArrowBackIcon';

const Favorites = ({ favorites }) => (
  <div class="App">
    <AppHeader>
      <Link to="/">
        <ArrowBackIcon />
      </Link>
    </AppHeader>
    <ImageList items={favorites} />
  </div>
);

const mapState = (state) => ({
  favorites: getFavorites(state),
});

export default connect(mapState)(Favorites);
