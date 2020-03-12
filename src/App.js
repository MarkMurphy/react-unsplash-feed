import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './state/store';
import Feed from './features/feed';
import Favorites from './features/favorites';
import ThemeProvider from './components/ThemeProvider';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
