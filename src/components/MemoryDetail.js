import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import FadeIn from 'react-fade-in';

function MemoryDetail(props){
  const memory = props.selectedMemory;
  return (
    <>
    <div class="moving_shape">
      </div>
    <FadeIn transitionDuration="1000">
      <div class="center">
        <h2>Memory Details:</h2>
        <h3>Date: {memory.date}</h3>
        <h3>Name: {memory.name}</h3>
        <h3>Description: {memory.description}</h3>
        <button onClick={() => props.onClickingDelete(memory.id)}>Delete Memory</button>
        <button onClick={props.onClickingEdit}>Edit Memory</button>
      </div>
    </FadeIn>
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