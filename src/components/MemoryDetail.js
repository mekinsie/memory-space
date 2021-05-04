import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

function MemoryDetail(props){
  const memory = props.selectedMemory;
  return (
    <>
      <h3>Memory Details</h3>
      <h3>Name: {memory.name}</h3>
      <h3>Date: {memory.date}</h3>
      <h3>Description: {memory.description}</h3>
      <button onClick={() => props.onClickingDelete(memory.id)}>Delete Memory</button>
      <button onClick={props.onClickingEdit}>Edit Memory</button>
    </>
  )
}

const mapStateToProps = state =>{
  return {
    selectedMemory: state.selectedMemory
  }
}

MemoryDetail = connect(mapStateToProps)(MemoryDetail);
export default MemoryDetail;