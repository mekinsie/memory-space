import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import FadeIn from 'react-fade-in';

function MemoryDetail(props){
  const memory = props.selectedMemory;
  return (
    <>
    <FadeIn transitionDuration="1000">
      <div className="mem-detail">
        <div className="center">
          <h2 className="detailKey">Memory Details:</h2><br></br>
          <h3>Date: <span className="detailKey">{memory.date}</span></h3>
          <h3>Name: <span className="detailKey">{memory.name}</span></h3><br></br>
          <h3><span className="detailKey"><em>{memory.description}</em></span></h3>
          <button onClick={() => props.onClickingDelete(memory.id)}>Delete Memory</button>
          <button onClick={props.onClickingEdit}>Edit Memory</button>
        </div>
      </div>
      <div id="footer">
        <br></br>
        <br></br>
        <br></br>
      </div>
      </FadeIn>
    </>
  )
}

MemoryDetail.propTypes={
  selectedMemory: PropTypes.object
}

const mapStateToProps = state =>{
  return {
    selectedMemory: state.selectedMemory
  }
}

MemoryDetail = connect(mapStateToProps)(MemoryDetail);
export default MemoryDetail;