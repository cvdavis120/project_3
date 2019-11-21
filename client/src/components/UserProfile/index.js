import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const Buttons = (props) => {
  return (

    <Button variant="contained" color="primary">
      Hello World
  </Button>
  );
};

export default Buttons;