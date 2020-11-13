export const setUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
})

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token
})

export const setPlaylist = (playlist) => ({
    type: 'SET_PLAYLIST',
    payload: playlist
})

export const setDiscoverWeekly = (discover) => ({
    type: 'SET_DISCOVER_WEEKLY',
    payload: discover
})


