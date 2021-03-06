import React from 'react';

function Checkbox(props) {
  const {name, change} = props;
  
  return (
    <label>
      <input className="training-input"
        name="training"
        type="checkbox"
        onChange={change}
        value={name}
      /> {name}
    </label>
  );
}

export default Checkbox;
