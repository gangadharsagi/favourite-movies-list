import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { LabelValueCell } from '../LabelValueCell';
import './cards.css';
import { CardsStyles } from './CardsStyles';
import { ReviewRatingContainer } from '../../containers/ReviewRatingContainer';


/**
 * This Component is used to display the cards with movie name and rating
 * from the api response
 *
 * @param {Array} cards - movie object data coming from the response
 * @returns {*} a React Stateless Functional Component
 */
export const Cards = ({ cards }) => {
    const classes = CardsStyles();
    console.log(cards);
    return <React.Fragment>
        {
            cards ?
              cards.map(item =>
                <Card
                  key={get(item, 'movieName', '')}
                  className={classes.card}>
                    <CardContent>
                        <div className={classes.cardContainer}>
                            <LabelValueCell
                              label='Movie Name'
                              value={get(item, 'movieName', '')}
                            />
                        </div>
                        <ReviewRatingContainer
                            item={item}
                        />
                    </CardContent>
                </Card>
            ) :
              null
        }
    </React.Fragment>
};

Cards.propTypes = {
    cards: PropTypes.array,
};

Cards.defaultProps = {
    cards: [],
};
