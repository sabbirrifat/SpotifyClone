export const setUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
})

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token
})