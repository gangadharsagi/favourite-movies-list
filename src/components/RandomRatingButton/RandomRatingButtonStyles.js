import { createStyles, makeStyles } from '@material-ui/core';

export const RandomRatingButtonStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      marginBottom: theme.spacing(2),
    },
    container: {
      marginRight: theme.spacing(3),
      display: 'flex',
      justifyContent: 'flex-end',
    },
    active: {
      backgroundColor: '#2099C3',
    }
  }),
);
