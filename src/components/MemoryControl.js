import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
// import EditMemoryForm from './EditMemoryForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'

class MemoryControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // selectedMemory: null,
      editing: false,
      formVisible: false
    }
  }

  handleAddingMemory = () => {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
  }

  handleSelectMemory = (memory) => {
    console.log(memory);
    const { dispatch } = this.props;
    const action = a.selectMemory(memory);
    dispatch(action);
    console.log(this.props.selectedMemory)
  }

  handleClick = () => {
    if (this.props.selectedMemory != null){
      const {dispatch} = this.props;
      const action = a.selectMemory(null)
      dispatch(action)
      this.setState({
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  render() {
    let currentlyVisible = null;
    let buttonText = null;
    if (this.props.selectedMemory != null){
      // memory = {this.props.selectedMemory}
      currentlyVisible = <MemoryDetail />
      buttonText = "Return to Memories/Dreams"
    }else if (this.state.formVisible){
      currentlyVisible = <NewMemoryForm onNewMemoryCreation={this.handleAddingMemory}/> // Need to update for the visibility function
      buttonText = "Return to Memories/Dreams"
    } else {
      buttonText = "Create New Memory or Dream"
      currentlyVisible = <MemoryList  onMemorySelection={this.handleSelectMemory}  />
    }
    return(
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisible}
      </React.Fragment>
    )
  }

}

// MemoryControl.propTypes = {
// }

const mapStateToProps = state => {
  return {
    selectedMemory: state.selectedMemory
  }
}

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default MemoryControl;