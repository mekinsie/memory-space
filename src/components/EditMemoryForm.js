import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import * as a from './../actions';
import FadeIn from 'react-fade-in';


function EditMemoryForm (props){
  const firestore = useFirestore();
  const {memory} = props;

  function handleEditMemorySubmit(event){
    event.preventDefault();
    props.onEditMemory();
    const propertiesToUpdate = {
      name: event.target.name.value,
      description: event.target.description.value,
      date: event.target.date.value
    }
    return firestore.update(a.targetMemory(memory.id), propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <FadeIn transitionDuration="1000">
        <form id="form" onSubmit={handleEditMemorySubmit}>
          <div>
            <input
              type='date'
              name='date'
              placeholder='Date'
              defaultValue={memory.date}
              required />
          </div>
          <div>
            <input
              type='text'
              name='name'
              placeholder='Memory Name'
              defaultValue={memory.name}
              required />
            </div>
          <div>
            <textarea
              rows="15"
              cols="50"
              name='description'
              placeholder='Describe your memory or dream'
              defaultValue={memory.description}
              required />
          </div>
          <div>
            <button type='submit'>Update Memory</button>
          </div>
        </form>
      </FadeIn>
    </React.Fragment>
  );


}

EditMemoryForm.propTypes ={
  onEditMemory: PropTypes.func
};

export default EditMemoryForm;