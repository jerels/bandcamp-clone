import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const colors = {
    text: '#FFFFFF',
    backgroundColor: '#00A1C6'
};

const useStyles = makeStyles({
    root: {
        marginTop: '40px',
        alignSelf: 'center',
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

const DemoButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const demoLogin = () => {
        dispatch(login('Demo-lition', 'password'));
    };

    return (
        <Button
            classes={classes}
            onClick={demoLogin}
            type='click'
            disableElevation
            variant='contained'
        >Demo User</Button>
    )
};

export default DemoButton;