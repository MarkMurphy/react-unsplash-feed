import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../state/store';
import Home from '../Home';
import Favorites from '../Favorites';
import ThemeProvider from '../ThemeProvider';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
