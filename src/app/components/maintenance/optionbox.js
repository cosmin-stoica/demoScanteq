// AnalysisOptionBox.js
import React from 'react';

const AnalysisOptionBox = ({ text, onClick }) => {
  return (
    <div className='analysis-option-box' onClick={onClick}>
    <span className="sx-text-primary"><i id="iconind22" className="flaticon-touch"/></span>
      <h2 className='text'>{text}</h2>
    </div>
  );
};

export default AnalysisOptionBox;
