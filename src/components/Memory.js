import React from "react";
import PropTypes from "prop-types";

function Memory(props){
  return(
    <>
      <div onClick = {()=> props.whenMemoryClicked(props.memory)}>
      <h3>{props.date} - {props.name}</h3>
        <p><em>{props.description}</em></p>
      </div>
    </>
  )
}

Memory.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string
}

export default Memory;