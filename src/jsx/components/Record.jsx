import React from 'react';
import { useNavigate } from 'react-router-dom';

function Record({ RecordName, onClickPath }) {
  const navigate = useNavigate();

  const GoToPage = () => {
    if (onClickPath) navigate(onClickPath);
  };

  return (
    <button onClick={GoToPage}>
      {RecordName}
    </button>
  );
}

export default Record;
