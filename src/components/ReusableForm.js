import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form id="form" onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Memory Name'
          required />
        <input
          type='date'
          name='date'
          placeholder='Date'
          required />
        <textarea
          name='description'
          placeholder='Describe your memory or dream'
          required />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;