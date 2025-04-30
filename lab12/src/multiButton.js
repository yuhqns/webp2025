import React from 'react';
import './App.css';
import Button from '@mui/material/Button';


const styleArgument = { fontSize: '16px', color: 'white' };

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + " 被點了";
};

const MultiButton = (num) => {
  const output = [];
  for (let i = 1; i <= num; ++i) {
    output.push(
      <Button
        key={i}
        variant="contained"
        color="primary"
        onClick={changeText}
        style={styleArgument}
      >
        第{i}個按鍵
      </Button>
    );
  }
  return <div>{output}</div>;
};

export default MultiButton;

