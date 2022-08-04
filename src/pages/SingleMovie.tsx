import { useState,useEffect } from "react"
import { useParams,Link } from "react-router-dom"
import { API_ENDPOINT_SINGLE } from "../context/context"

const SingleMovie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({} as any)
    const [loading, setLoading] =  useState(true)
    const fetchMovie = async (url:any) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchMovie(`${API_ENDPOINT_SINGLE}&i=${id}`)
    }, [id])
    if (loading) return <div className="loading"></div>
    const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
    return (
        <section>
            <img src={poster} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>{plot}</p>
                <h4>{year}</h4>
                <Link to="/">
                    back to movies
                </Link>
            </div>
        </section>
    )
}

export default SingleMovie