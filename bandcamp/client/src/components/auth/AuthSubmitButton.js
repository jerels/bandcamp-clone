import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const colors = {
    text: '#FFFFFF',
    backgroundColor: '#00A1C6'
};

const useStyles = makeStyles({
    root: {
        color: colors.text,
        backgroundColor: colors.backgroundColor,
        '&:hover': {
            backgroundColor: colors.backgroundColor
        },
        fontSize: '16px',
        fontWeight: 'bold',
        width: '300px',
        height: '36px',
        fontFamily: 'Arimo',
        padding: '0 1em',
        borderRadius: '0',
        textTransform: 'none'
    }
});

export const AuthSubmitButton = props => {
    const classes = useStyles();
    return (
        <Button
            classes={classes}
            type='submit'
            disableElevation
            variant='contained'
            {...props}
        >Log in</Button>
    )
}