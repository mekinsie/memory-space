import React from 'react';
import NewMemoryForm from './NewMemoryForm';
import MemoryList from './MemoryList';
import MemoryDetail from './MemoryDetail';
import EditMemoryForm from './EditMemoryForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'

class MemoryControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      formVisible: false,
      visible: true
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

  handleDeletingMemory = (id) => {
    this.props.firestore.delete(a.targetMemory(id));
    const {dispatch} = this.props;
    const action = a.selectMemory(null);
    dispatch(action);
  }

  handleEditingMemory = () => {
    this.setState({
      editing: false
    })
    const {dispatch} = this.props;
    const action = a.selectMemory(null);
    dispatch(action);
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.props.selectedMemory != null){
      const {dispatch} = this.props;
      const action = a.selectMemory(null);
      dispatch(action);
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
    if (this.state.editing){
      currentlyVisible= <EditMemoryForm memory = {this.props.selectedMemory} onEditMemory = {this.handleEditingMemory} />
      buttonText= "Return to Memories"
    } else if (this.props.selectedMemory != null){
      currentlyVisible = <MemoryDetail onClickingDelete = {this.handleDeletingMemory} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Memories"
    } else if (this.state.formVisible){
      currentlyVisible = <NewMemoryForm onNewMemoryCreation={this.handleAddingMemory}/>
      buttonText = "Return to Memories"
    } else {
      buttonText = "Create New Memory"
      currentlyVisible = <MemoryList  onMemorySelection={this.handleSelectMemory}  />
    }
    return(
      <React.Fragment>
        <div >
          <button id="button-center" onClick={this.handleClick}>{buttonText}</button>
          {currentlyVisible}
        </div>
      </React.Fragment>
    )
  }
}

MemoryControl.propTypes = {
  selectedMemory = PropTypes.object
}

const mapStateToProps = state => {
  return {
    selectedMemory: state.selectedMemory
  }
}

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default withFirestore(MemoryControl);