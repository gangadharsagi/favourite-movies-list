import { connect } from 'react-redux';
import { MovieDetails } from '../../components/MovieDetails';
import { getMovieDetailsSelector } from '../../selectors/getMovieDetailsSelector';
import { fetchMovieDetails } from '../../actions/commonActions/commonActions';

export const mapStateToProps = (state) => ({
  movieDetails: getMovieDetailsSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  getMovieDetails: () => {
    dispatch(fetchMovieDetails());
  }
});

export const MovieDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails);
