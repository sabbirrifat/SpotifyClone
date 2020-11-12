/* token: "BQCm2C1nhza6f3k0fv6ckGsFjtyG0VvbP4co7PyPxfvPxHtq8jYclEcxjbRskwbNCYKGBXLqCTls3_sInYVUhkZbdsbkMBVN-Kia-hHzMkqUrFw4v4AwIQ61ZFqk9lOvzTOd1nxa_d742h23nVHXT8H3uScYt-H2gDGDuNYKCbTPalLk" */


const INITIAL_STATE = {
    currentUser : null,
    token: "fdfdfd",
    playlists: null
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser : action.payload
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.payload
            }
    
        default:
            return state
    }
}

export default userReducer