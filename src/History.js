import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Round from './Round';

const History = (props) => {
    let id = 1;
    const roundElements = props.rounds.map((round) => {
      return (
        <Round you={round.guess} bot={round.botGuess} result={round.result} key={id}>
        </Round>
      );
      id += 1;
    });
      return (
        <tbody>
        {roundElements}
        </tbody>
      );
        // roundElements.map((round) => {
        //     return round;
        // })
    
  };

  export default History;