/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
//import App from './modules/App/App';
import Navigation from './components/presentational/Navigation/Navigation';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./components/presentational/Home/Home');
  require('./components/presentational/Guests/GuestList');
  require('./components/presentational/Presents/PresentList');
  require('./components/containers/DedicationListContainer');
  require('./components/presentational/NotFound/NotFound');
}



/*
export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home} />
    <Route path='countries'>
      <IndexRoute component={CountryFlagContainer} />
      <Route path='country/:id' component={CountryDetailsContainer} />
    </Route>
    <Route path='continents' component={ContinentsContainer} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={NotFound} />
  </Route>
);
*/


// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  //<Route path="/" component={App}>
  <Route path='/' component={Navigation}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          //cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
          cb(null, require('./components/presentational/Home/Home').default);
        });
      }}
    />
    <Route
      path='/guests'
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./components/presentational/Guests/GuestList').default);
        });
      }}
    />
    <Route
      path='/presents'
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./components/presentational/Presents/PresentList').default);
        });
      }}
    />
    <Route
      path='/dedications'
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./components/containers/DedicationListContainer').default);
        });
      }}
    />   
    <Route
      path='/*'
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./components/presentational/NotFound/NotFound').default);
        });
      }}
    />
  </Route>
);