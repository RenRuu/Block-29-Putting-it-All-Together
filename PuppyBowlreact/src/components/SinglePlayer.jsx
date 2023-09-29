import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../Style/singlePlayer.css'


export default function SinglePlayer() {
  const [playerInfo, setPlayerInfo] = useState({})
  const [error, setError] = useState('')

  const {id} = useParams();
  const navigate = useNavigate()


    useEffect(() => {

        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players/${id}`);
                console.log(response)
                if(!response){
                  return null;
                }
                const result = await response.json();
                console.log(result)
               
                const playerData = result.data.player
                console.log(playerData)
                setPlayerInfo(playerData)
            } catch (error){
                setError(error)
            }
        }
        fetchSinglePlayer()
        
    }, [id])

    useEffect(() =>{
      console.log(playerInfo)
    },[playerInfo])



        async function deleteHandler(){
         
      try{
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players/${id}`,{
          method: "DELETE"
        })
        const data = await response.json()
        console.log(data)
        return data
      } catch(error) {
        console.error(error)
      }

      window.location.reload()
      
    }

    return(
      <div className="playerDetails">
        <h1>player detail</h1>
        {playerInfo ?(
          <div className="player" key={playerInfo.id}>
            <h2 className="p">{playerInfo.name}</h2>
            <img className="x" src={playerInfo.imageUrl} width="150px" height="150px"/>
            <p className="p">Id: {playerInfo.id}</p>
            <p className="p">Name: {playerInfo.name}</p>
            <p className="p">Breed: {playerInfo.breed} </p>
            <p className="p">Status: {playerInfo.status}</p>
            <button onClick={() => {navigate("/")}}>Back</button>
            <button onClick={deleteHandler}>Delete</button>
          </div>
          
        ):null}
      </div>

  )
}