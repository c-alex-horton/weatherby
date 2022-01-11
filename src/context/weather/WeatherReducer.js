const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOCATION':
            return {
                ...state,
                locations: [...state.locations, action.payload]
            }
        default:
            return state
    }
}

export default weatherReducer