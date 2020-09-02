import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

const setUser = user => {
    return {
        type: SET_USER,
        user
    };
};

export const login = (username, password) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({ username, password })
        });
        res.data = await res.json();

        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res;
    };
};


export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    };
};