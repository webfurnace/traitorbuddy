import React, { useState } from 'react';

function FormControls() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormControls;