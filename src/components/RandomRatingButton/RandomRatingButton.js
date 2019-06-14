import React from 'react';
import { RandomRatingButtonStyles } from './RandomRatingButtonStyles';
import { ColorButton } from '../StyledComponents/ColorButton';

/**
 * This Component is used to generate random rating
 *
 * @param {func} onClick - it is used to trigger click event
 * @returns {*} a React Stateless Functional Component
 */
export const RandomRatingButton = ({ onClick }) => {
  const classes = RandomRatingButtonStyles();

  return (
    <div className={classes.container}>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={onClick}
      >
        Random Rating
      </ColorButton>
    </div>
  );
};
