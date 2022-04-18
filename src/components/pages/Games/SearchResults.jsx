import { Link } from "react-router-dom"
import { useState } from "react"
import GameDetails from "./GameDetails"
export default function SearchResults({ gameList }) {
    const [gameId, setGameId] = useState('')
    const handleClick = (gameId) => {
        setGameId(gameId)
    }
    const listGames = gameList.map((g,idx)=>{
        return(
            <>
                <div className="game-list" key={`{game-idx${idx}`}>
                    <Link to='' onClick={()=>handleClick(g.id)}>{g.name}</Link>
                </div>                
            </>
        )
    })
    return (
        <>
        <div className="card-container">
            {listGames}
        </div>
        {
            gameId
            ?
            <GameDetails gameId={gameId} />
            :
            null
        }
        
        </>
    )
}