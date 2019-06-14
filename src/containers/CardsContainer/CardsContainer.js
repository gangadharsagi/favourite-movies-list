import { connect } from 'react-redux';
import { Cards } from '../../components/Cards';
import { getMovieDetailsSelector } from '../../selectors/getMovieDetailsSelector';
import { getSortedCardsHelper } from '../../helpers/getSortedCardsHelper';

export const mapStateToProps = (state) => ({
  cards: getSortedCardsHelper(getMovieDetailsSelector(state)),
});

export const CardsContainer = connect(
  mapStateToProps,
)(Cards);
