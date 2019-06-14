import * as React from 'react';
import PropTypes from 'prop-types';
import { LabelValueCellStyles } from './LabelValueCellStyles';

/**
 * This component is used to display label and value details. if rating is true
 * then value will display as star icons
 *
 * @returns {*} a React Stateless Functional Component
 */
export const LabelValueCell = ({ label, value }) => {
  const classes = LabelValueCellStyles();

  return (
    <div>
      <label className={classes.label}>
        {label}
      </label>
          <div className={classes.value}>
            {value}
          </div>
    </div>
  );
};

LabelValueCell.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

LabelValueCell.defaultProps = {
  label: '',
  value: '',
};
