import { useGlobalContext } from "../context/context"
import { Link } from "react-router-dom"
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
    const { movies,loading } = useGlobalContext()
    if (loading) return <div className="loading"></div>
    return (
        <section>
            {movies.map((movie:any) => {
                const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

                return(
                    <Link to={`/movies/${id}`} key={id}>
                        <article>
                            <img src={poster === 'N/A' ? url : poster} alt={title} />
                            <div>
                                <h4>{title}</h4>
                                <p>{year}</p>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </section>
    )
}

export default Movies