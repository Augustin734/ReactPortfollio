import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/main.css";

function Record({ RecordName, onClickPath }) {
  const navigate = useNavigate();

  const GoToPage = () => {
    if (onClickPath) navigate(onClickPath);
  };

  return (
    <button
      className={`record ${RecordName.toLowerCase()}`}
      onClick={GoToPage}
    >
      <span>{RecordName}</span>
    </button>
  );
}

export default Record;
