import { useState } from "react"
import axios from "axios"
import SearchResults from "./SearchResults"

export default function SearchGames() {
    const [search, setSearch] = useState({
        search: ''
    })    
    const [results, setResults] = useState()
    
    const endpoint = `https://api.rawg.io/api/games?key=23b559a79a044fe7af5046ac579bd71b&search=${search.search}&exclude_game_series=true&tags=multiplayer`

        
    const handleSubmitSearch = async (e) => {
        e.preventDefault()
        try {
          const res = await axios.get(endpoint)
          setResults(res.data.results)                  
        } catch (error) {    

          console.log(error)
        }
    }
    if(results) {
      console.table(results)    
    }
    return(
        <>
        <div className="dashboard-container-dev">
            <form onSubmit={handleSubmitSearch}>
                <label htmlFor='game-field'>Game search : </label>
                <input id='game-field' type='text' value={search.search} onChange={(e)=> setSearch({...search, search: e.target.value})}/>   
                <button type="submit">Search</button>             
            </form>
        </div>
        <div>
          {
            results
            ?
            <SearchResults gameList={results} />
            :
            null
          }
        </div>
        </>
    )
}