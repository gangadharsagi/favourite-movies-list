import { connect } from 'react-redux';
import { RandomRatingButton } from '../../components/RandomRatingButton';
import { updateRandomRating } from '../../actions/commonActions/commonActions';

export const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(updateRandomRating());
  }
});

export const RandomRatingButtonContainer = connect(
  null,
  mapDispatchToProps,
)(RandomRatingButton);
