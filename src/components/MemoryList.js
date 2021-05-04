import React from "react";
import PropTypes from "prop-types";
import Memory from "./Memory";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import FadeIn from 'react-fade-in';

function MemoryList(props){
  useFirestoreConnect([
    {collection: 'memories'}
  ]);
  const memories = useSelector(state => state.firestore.ordered.memories);
  if (isLoaded(memories)){
    return (
      <>
      <FadeIn transitionDuration="1000">
        <div class="memory-list">
          <div class="center">
            {memories.map((memory)=>{
              return <Memory
              whenMemoryClicked = {props.onMemorySelection}
              name = {memory.name}
              description = {memory.description}
              date = {memory.date}
              memory = {memory}
              id = {memory.id}
              key={memory.id} />
            })}
          </div>
        </div>
      </FadeIn>
      </>
    );
  } else {
    return (
      <>
        <h3> Loading... </h3>
      </>
    );
  }
}

MemoryList.propTypes={
  onMemorySelection: PropTypes.func
}

export default MemoryList;