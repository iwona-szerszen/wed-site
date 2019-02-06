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

/*  Workaround for async react routes to work with react-hot-reloader till
	https://github.com/reactjs/react-router/issues/2182 and
 	https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
*/
if (process.env.NODE_ENV !== 'production') {
	// Require async routes only in development for react-hot-reloader to work.
	require('./components/presentational/Home/Home');
	require('./components/containers/GuestsPageContainer');
	require('./components/containers/PresentListContainer');
	require('./components/containers/DedicationsPageContainer');
	require('./components/containers/UserProfileContainer');
	require('./components/presentational/NotFound/NotFound');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  //<Route path="/" component={App}>
  	<Route path='/' component={Navigation}>
	    <IndexRoute
	    	getComponent={(nextState, cb) => {
	        	require.ensure([], require => {
	        		cb(null, require('./components/presentational/Home/Home').default);
	        	});
	     	}}
	    />
	    <Route
	    	path='guests'
    		getComponent={(nextState, cb) => {
    			require.ensure([], require => {
    				cb(null, require('./components/containers/GuestsPageContainer').default);
    			});
    		}}
	    />
	    <Route
			path='presents'
			getComponent={(nextState, cb) => {
				require.ensure([], require => {
					cb(null, require('./components/containers/PresentListContainer').default);
				});
			}}
		/>
		<Route
    		path='dedications'
    		getComponent={(nextState, cb) => {
        		require.ensure([], require => {
          			cb(null, require('./components/containers/DedicationsPageContainer').default);
        		});
      		}}
    	/>
	    <Route
	    	path='guests/:id'
	    	getComponent={(nextState, cb) => {
        		require.ensure([], require => {
            		cb(null, require('./components/containers/UserProfileContainer').default);
          		});
        	}}
        />
    	<Route
    		path='*'
    		getComponent={(nextState, cb) => {
        		require.ensure([], require => {
          			cb(null, require('./components/presentational/NotFound/NotFound').default);
        		});
      		}}
    	/>
	</Route>
);