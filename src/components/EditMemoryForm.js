import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import * as a from './../actions';

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
    <>
      <ReusableForm
      formSubmissionHandler={handleEditMemorySubmit}
      buttonText="Update Memory" />
    </>
  );
}

EditMemoryForm.propTypes ={
  onEditMemory: PropTypes.func
};

export default EditMemoryForm;