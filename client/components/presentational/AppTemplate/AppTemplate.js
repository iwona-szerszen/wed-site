import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

let DevTools;
if (process.env.NODE_ENV === 'development') {
	// eslint-disable-next-line global-require
	DevTools = require('./DevTools/DevTools').default;
}

const AppTemplate = props => {
	return (
		<div>
			
			<div>
				<Helmet
					title='Wedding Site'
					meta={[
						{ charset: 'utf-8' },
						{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
			            { name: 'viewport', content: 'width=device-width, initial-scale=1' },			            
					]}
				/>
				<Navigation />
				<div>
					{props.children}
				</div>
				<Footer />
			</div>
		</div>
	);
};

AppTemplate.propTypes = {
	children: PropTypes.object,
}

export default AppTemplate;
 
/*
  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>


          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
*/


//{process.env.NODE_ENV === 'development' && !window.devToolsExtension && <DevTools />}