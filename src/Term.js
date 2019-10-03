import React from 'react';

const Term = function(props) {
  return (
    <div>
      <strong>{props.term.word}</strong> <br />
      <span>{props.term.definition}</span> <br />
      <em>{props.term.example}</em>
    </div>
  )
};

export default Term;
