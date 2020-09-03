import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { AuthSubmitButton } from './auth/AuthSubmitButton';
import '../css/LoginPage.css';
import DemoButton from './auth/DemoButton';




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
        <>
            <div id='header' />
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
                <br />
                <label>
                    Password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <AuthSubmitButton />
            </form>
            <br />
            <DemoButton />
        </>
    )
};

export default LoginPage;