import * as React from 'react';
import PropTypes from 'prop-types';
import { CardsContainer } from '../../containers/CardsContainer';
import { RandomRatingButtonContainer } from '../../containers/RandomRatingButtonContainer';
import './movie-details.css';

/**
 * This component is used for Displaying Movie details with corresponding
 * rating.
 *
 * @param {array} reviews - movie details from the response
 * @returns {*} a React Stateless Functional Component
 */
export class MovieDetails extends React.Component {

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    this.props.getMovieDetails();
  };

  render() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='logo'>
        </div>
        <RandomRatingButtonContainer />
        <CardsContainer />
      </div>
  </div>
  )}
}

MovieDetails.propTypes = {
  getMovieDetails: PropTypes.func,
};

MovieDetails.defaultProps = {
  getMovieDetails: () => {},
};
