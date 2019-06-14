import { connect } from 'react-redux';
import { ReviewRating } from '../../components/ReviewRating';
import { updateRating } from '../../actions/commonActions/commonActions';

export const mapDispatchToProps = (dispatch) => ({
  onChange: (item) => (value) => {
    dispatch(updateRating({item, value}))
  }
});

export const ReviewRatingContainer = connect(
  null,
  mapDispatchToProps,
)(ReviewRating);
