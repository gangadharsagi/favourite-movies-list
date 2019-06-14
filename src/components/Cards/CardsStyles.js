import { makeStyles } from '@material-ui/core';

export const CardsStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 600,
    padding: 10,
    margin: theme.spacing(1),
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    width: '80%',
  },
}));
