import Movies from "../components/Movies"
import SearchForm from "../components/SearchForm"

const Home = () => {
    return (
        <div className="pl-24 pt-20">
            <SearchForm />
            <Movies />
        </div>
    )
}

export default Home