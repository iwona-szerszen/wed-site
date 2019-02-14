import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, connect } from 'react-redux';

// Import Components
import DedicationList from '../presentational/Dedications/DedicationList/DedicationList';

// Import Actions
import { fetchDedicationsRequest } from '../../actions/DedicationActions';

// Import Selector
import { getDedications } from '../../reducers/DedicationReducer';

import { testGuestId } from '../../../server/config';

class DedicationsPageContainer extends Component {	
  componentDidMount() {
    this.props.dispatch(fetchDedicationsRequest());
  }
  moveToAddDedication() {
    return;
  }
  render() {
  	return (
  		<div>
        <button className='btn btn-outline-info' onClick={this.moveToAddDedication.bind(this)}>Add dedication</button>
  			<DedicationList dedications={this.props.dedications} />
  		</div>
  	);
  }
};

// Actions required to provide data for this component to render in server side
DedicationsPageContainer.need = [() => { return fetchDedicationsRequest(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    dedications: getDedications(state),
  };
}

DedicationsPageContainer.propTypes = {
	dedications: PropTypes.array,
	dispatch: PropTypes.func,
};

DedicationsPageContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(DedicationsPageContainer);

/*
<Link to={`/guests/${testGuestId}`>
  <button onClick={this.moveToAddDedication.bind(this)}>Add dedication</button>
</Link>
*/

//moveToAddDedication(dispatch(changeActiveTab(tab)))

/*
  moveToAddDedication() {
    this.context.router.push({
      pathname: `/guests/${testGuestId}`,
      state: {activeTabKey: 'dedications'},
    });
  }
*/