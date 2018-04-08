import React from 'react';
import PropTypes from 'prop-types';

const Round = (props) => { 
    return (
    <tr>
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
