import React, { useState,useEffect,useContext } from "react";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
export const API_ENDPOINT_SINGLE = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY_2}`;

const AppContext = React.createContext([] as any)

const AppProvider = ({ children }:any) => {
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('batman')
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([])
    const fetchMovies = async (url:any) => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            if (data.Response === true) {
                setMovies(data.Search)
                setIsError(false)
            } else {
                setIsError(true)
            }
            setLoading(false)
        } catch(error) {
            console.log(error)
        }
    } 
    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}&s=${query}`)
    }, [])
    return (
        <AppContext.Provider
        value = {{ loading,movies,query,setQuery,isError }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext,AppProvider }