import React from 'react';

const Form = function(props) {
  return (
    <div>
      <h2>Add Word</h2>

      <div>
        <label>Word</label>
      </div>

      <div>
        <input name="word" value={props.term.word} onChange={props.handleChange} />
      </div>
      
      <div>
        <label>Definition</label>
      </div>

      <div>
        <textarea name="definition" value={props.term.definition} onChange={props.handleChange} />
      </div>
      
      <div>
        <label>Example</label>
      </div>

      <div>
        <textarea name="example" value={props.term.example} onChange={props.handleChange} />
      </div>

      <button onClick={props.handleSubmit}>
        Add Term
      </button>
    </div>
  )
};

export default Form;