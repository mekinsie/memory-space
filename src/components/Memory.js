import React from "react";
import PropTypes from "prop-types";

function Memory(props){
  return(
    <>
      <div className="memory" >
        <h3 id="link" onClick = {()=> props.whenMemoryClicked(props.memory)}>{props.date}</h3>
        <h3>{props.name}</h3>
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