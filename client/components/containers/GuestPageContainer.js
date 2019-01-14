import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import Statistic from '../presentational/Statistic/Statistic';
import GuestList from '../presentational/Guests/GuestList';

// Import Actions
import { fetchGuestsRequest } from '../../actions/GuestActions';

// Import Selector
import { getGuests } from '../../reducers/GuestReducer';

class GuestPageContainer extends Component {	
  componentDidMount() {
    this.props.dispatch(fetchGuestsRequest());
  }
  render() {
  	return (
  		<div>
        <Statistic guests={this.props.guests} />
  			<GuestList guests={this.props.guests} />
  		</div>
  	);
  }
};

// Actions required to provide data for this component to render in server side
GuestPageContainer.need = [() => { return fetchGuestsRequest(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    guests: getGuests(state),
  };
}

GuestPageContainer.propTypes = {
	guests: PropTypes.array,
	dispatch: PropTypes.func,
};

GuestPageContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(GuestPageContainer);