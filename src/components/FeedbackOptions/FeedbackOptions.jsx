import React from 'react';
import PropTypes from 'prop-types';
import { BtnFeedback, BtnDiv } from './FeedbackOptions.styled';
import { FaRegGrinBeam, FaRegFrown, FaRegMeh } from 'react-icons/fa';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnDiv>
      {options.map(option => (
        <BtnFeedback
          key={option}
          type="button"
          name={option}
          onClick={option => {
            onLeaveFeedback(option);
          }}
        >
          {option === 'good' && <FaRegGrinBeam />}
          {option === 'neutral' && <FaRegMeh />}
          {option === 'bad' && <FaRegFrown />}
        </BtnFeedback>
      ))}
    </BtnDiv>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};