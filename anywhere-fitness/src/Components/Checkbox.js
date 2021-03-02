import React from 'react';

function Checkbox(props) {
  const {name, change, checked} = props;
  
  return (
    <label>
      <input className="training-input"
        name="training"
        type="checkbox"
        checked={checked}
        onChange={change}
      /> {name}
    </label>
  );
}

export default Checkbox;
