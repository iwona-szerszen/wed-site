import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import PresentList from '../presentational/Presents/PresentList';

// Import Actions
import { fetchPresentsRequest, editPresentReservationRequest } from '../../actions/PresentActions';

// Import Selector
import { getPresents } from '../../reducers/PresentReducer';

class PresentListContainer extends Component {	
  componentDidMount() {
    this.props.dispatch(fetchPresentsRequest());
  }
  handleReservePresent(id, present) {
    this.props.dispatch(editPresentReservationRequest(id, present));
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