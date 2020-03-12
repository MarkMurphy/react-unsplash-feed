import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavorites } from '../../state/favorites';
import ImageList from '../../components/ImageList';
import AppHeader from '../../components/AppHeader';
import ArrowBackIcon from '../../components/Icon/ArrowBackIcon';

const Favorites = ({ favorites }) => (
  <div className="App">
    <AppHeader>
      <Link to="/">
        <ArrowBackIcon />
      </Link>
    </AppHeader>
    <ImageList items={favorites} />
  </div>
);

const mapState = (state) => ({
  favorites: selectFavorites(state),
});

export default connect(mapState)(Favorites);
