import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddDedication extends Component {
  onSubmitAddDedication(event) {
    const songRef = this.refs.song;
    const contentRef = this.refs.content;
    if (songRef.value && contentRef.value) {
      this.props.onSubmitAddDedication(event, songRef.value, contentRef.value);
      songRef.value = contentRef.value = '';
    }
  }
  render() {
    return (
      <div>
        <h4>Add new dedication</h4>
        <form onSubmit={event => this.onSubmitAddDedication(event)}>
            <div className='form-group row'>
              <label htmlFor='song' className='col-sm-2 col-form-label'>Song</label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='song'
                  ref='song'
                  placeholder='author and title of the song'
                  required
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='content' className='col-sm-2 col-form-label'>Content</label>
              <div className='col-sm-10'>
                  <textarea 
                    className='form-control'
                    id='content'
                    ref='content'
                    placeholder='content of your dedication'
                    required
                  />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-12'>
                  <button className='btn btn-success'>Submit</button>
              </div>
            </div>
          </form>     
      </div>
    );    
  }
};

AddDedication.propTypes = {
	onSubmitAddDedication: PropTypes.func,
};

export default AddDedication;