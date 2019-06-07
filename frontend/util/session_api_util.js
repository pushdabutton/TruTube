

export const signup = (user) => (
    $.ajax({
        method: "post",
        url: 'api/users',
        data: {user}
    })
);

export const log_in = user => (
    $.ajax({
        method: 'post',
        url: 'api/session',
        data: { user }
    })
);

export const log_out = () => (
    $.ajax({
        method: 'delete',
        url: 'api/session'
    })
);

export const demo_in = () => (
    $.ajax({
        method: 'post',
        url: 'api/session',
        data: { username: "Demo", email: "Demo@demo.com", password: "password" } 
    })
);