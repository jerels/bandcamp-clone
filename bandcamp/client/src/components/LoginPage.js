import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { AuthSubmitButton } from './auth/AuthSubmitButton';
import '../css/LoginPage.css';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(username, password));
    };

    if (currentUserId) return <Redirect to='/' />

    return (
        <Container fixed maxWidth='sm'>
            <h2>Log in</h2>
            <div id='divider' />
            <form onSubmit={handleSubmit}>
                <label>
                    Username / email
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <AuthSubmitButton />
            </form>
        </Container>
    )
};

export default LoginPage;