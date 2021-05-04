import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'
import FadeIn from 'react-fade-in';


function NewMemoryForm(props){
  const firestore = useFirestore();

  function addMemoryToFireStore(event){
    event.preventDefault();
    props.onNewMemoryCreation();
    return firestore.collection('memories').add(
      {
        name: event.target.name.value,
        date: event.target.date.value,
        description: event.target.description.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    )
  }

  return(
    <>
      <FadeIn transitionDuration="1000">
        <ReusableForm
        formSubmissionHandler={addMemoryToFireStore}
        buttonText="Save Memory" />
      </FadeIn>
    </>
  );
}
//NewMemoryForm.propTypes = {
  //OnNewMemoryCreation: PropTypes.func
// }


export default NewMemoryForm;