import React from 'react';

function Checkbox(props) {
  const {name} = props;
  return (
    <label>
      <input className="training-input"
        name="training"
        type="checkbox"
      /> {name}
    </label>
  );
}

export default Checkbox;
