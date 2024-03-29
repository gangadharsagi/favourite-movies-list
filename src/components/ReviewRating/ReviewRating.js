import "./rating.css";
import * as React from "react";
import * as PropTypes from "prop-types";
import { Rating } from "../Rating/Rating";

/**
 * This component is used to generate rating based on length of the rating
 *
 * @param {array} rating - number of star required for rating component
 * @returns {*} a React Class Component
 */
export class ReviewRating extends React.Component {

  state = {
    rating: 0
  };

  render() {
    const { item, onChange, starCount } = this.props;
    return (
      <Rating
        onChange={onChange(item)}
        value={item.rating}
        starCount={starCount}
      />
    );
  }
}

ReviewRating.propTypes = {
  rating: PropTypes.array
};

ReviewRating.defaultProps = {
  starCount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};
