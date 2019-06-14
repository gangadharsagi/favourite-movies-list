import { makeStyles } from '@material-ui/core';

export const CardsStyles = makeStyles(theme => ({
  icon: {
    fontSize: 16,
  },
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
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    color: 'grey',
    fontSize: 14,
  },
  logo: {
    width: 40,
    height: 40,
  },
}));
