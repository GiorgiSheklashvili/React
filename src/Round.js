import React from 'react';
import PropTypes from 'prop-types';

const Round = (props) => {
  var color;
  if(props.result=='you win')
    color='green'
  else
    if(props.result=='you draw')
      color='orange'
    else
      color='red'
  debugger
  return (
    <tr style={{color: color}}>
      <td align="center">{props.you}</td>
      <td align="center">{props.bot==1 ? 'R' : props.bot==2 ? 'P' : 'S'}</td> 
      <td align="center">{props.result}</td>
    </tr>
  );
};

Round.propTypes = {
  you: PropTypes.string,
  bot: PropTypes.number,
  result: PropTypes.string
};

export default Round;
