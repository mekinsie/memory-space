import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
// import MemoryDetail from './MemoryDetail';
// import EditMemoryForm from './EditMemoryForm';
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'

class MemoryControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedMemory: null,
      editing: false,
      formVisible: false
    }
  }

  handleSelectMemory = (memory) => {
    const { dispatch } = this.props;
    const action = a.selectMemory(memory);
    dispatch(action);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }))
  }

  render() {
    let currentlyVisible = null;
    let buttonText = null;
    if (this.state.formVisible){
      currentlyVisible = <NewMemoryForm /> // Need to update for the visibility function
      buttonText = "Return to Memories/Dreams"
    } else {
      currentlyVisible = <MemoryList  onMemorySelection={this.handleSelectMemory}  />
    }
    return(
      <React.Fragment>
        {currentlyVisible}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }

}

// MemoryControl.propTypes = {
// }

const mapStateToProps = state => {
  return {
  }
}

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default MemoryControl;