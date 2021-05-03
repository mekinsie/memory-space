import React from 'react';
// import NewMemoryForm from './NewMemoryForm';
// import MemoryList from './MemoryList';
// import MemoryDetail from './MemoryDetail';
// import EditMemoryForm from './EditMemoryForm';
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import * as a from './../actions';
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



  render() {
    let currentlyVisible = null;
    let buttonText = null;

    return(
      <React.Fragment>
        {currentlyVisible}
      </React.Fragment>
    )
  }



}

// MemoryControl.propTypes = {
// }

// const mapStateToProps = state => {
//   return {
//   }
// }

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default MemoryControl;