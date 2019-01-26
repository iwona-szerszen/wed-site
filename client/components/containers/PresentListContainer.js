import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testGuestId } from '../../../server/config';

// Import Components
import PresentList from '../presentational/Presents/PresentList';

// Import Actions
import { fetchPresentsRequest, reservePresentRequest } from '../../actions/PresentActions';

// Import Selector
import { getPresents } from '../../reducers/PresentReducer';

class PresentListContainer extends Component {	
  componentDidMount() {
    this.props.dispatch(fetchPresentsRequest());
  }
  handleReservePresent(presentId) {
    this.props.dispatch(reservePresentRequest(presentId, testGuestId));
  }
  render() {
  	return (
  		<div>
  			<PresentList
          presents={this.props.presents}
          handleReservePresent={this.handleReservePresent.bind(this)}
        />
  		</div>
  	);
  }
};

// Actions required to provide data for this component to render in server side
PresentListContainer.need = [() => { return fetchPresentsRequest(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    presents: getPresents(state),
  };
}

PresentListContainer.propTypes = {
	presents: PropTypes.array,
	dispatch: PropTypes.func,
};

PresentListContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(PresentListContainer);