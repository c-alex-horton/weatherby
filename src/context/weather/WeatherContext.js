import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer"

const WeatherContext = createContext()

// import enviroment variables
const WEATHER_URL = process.env.REACT_APP_WEATHER_URL
const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY
const MAP_URL = process.env.REACT_APP_MAP_URL
const MAP_KEY = process.env.REACT_APP_MAP_KEY

export const WeatherProvider = ({ children }) => {
    const initialState = {
        userLocations: ["austin", "orlando"],
        locations: []
    }

    const [state, dispatch] = useReducer(WeatherReducer, initialState)

    const searchLocation = async (text) => {

        const params = new URLSearchParams({
            location: text
        })

        const response = await fetch(
            `${MAP_URL}?key=${MAP_KEY}&${params}`
        )

        const data = await response.json()

        dispatch({
            type: 'GET_LOCATION',
            payload: data.results[0].locations[0],
        })
        return data
    }


    return <WeatherContext.Provider value={
        {
            userLocations: state.userLocations,
            locations: state.locations
        }
    }>
        {children}
    </WeatherContext.Provider>

}


export default WeatherContext