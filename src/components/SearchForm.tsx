import { useGlobalContext } from "../context/context"

const SearchForm = () => {
    const { query,setQuery,isError } = useGlobalContext()
    return (
        <div>
            <h2 className="capitalize font-bold text-4xl tracking-widest text-slate-900">search movies</h2>
            <form className="mt-9" action="" onSubmit={(e) => e.preventDefault()}>
                <input type="text" 
                value={query}
                className="p-3 rounded-md text-slate-500 w-[38rem] focus:outline-none focus:outline-slate-400"
                onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            <div className="error">
                {isError && <div className="capitalize text-3xl mt-32">movie not found!</div>}
            </div>
        </div>
    )
}

export default SearchForm