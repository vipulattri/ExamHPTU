import React, { useState } from 'react';

const Toggle = ({ handleToggle }) => {
  return (
    <button onClick={handleToggle}>
      Switch to Night Mode
    </button>
  );
};

export default Toggle;