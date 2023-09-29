import {  useState } from "react";
import { useNavigate } from "react-router-dom";

import '../Style/newPlayerForm.css'

export default function NewPlayerForm() {
  const navigate = useNavigate()
  const [players,setPlayers] = useState([])
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("Bench")



  async function handleSubmit(event) {
    event.preventDefault();

    try{
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players`, 
        {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, breed, status}),
      });

      const result = await response.json()
      console.log(result)
      setPlayers(result.data)

    } catch (error) {
      console.error("Error", error);
      setError(error);
    }
  }

  return (
    <>
      <div className="title">
            <h1>New Player</h1>
            <form onSubmit={handleSubmit}>
              <li>
                <label>
                    Name: 
                  <input type="text" value={name} onChange={e=>{setName(e.target.value)}} />
                </label>
              </li>
              <li>
                <label>
                    Breed: 
                  <input type="text" value={breed} onChange={e=>{setBreed(e.target.value)}} />
                </label>
              </li>
              <li>
                <label>
                    Status: 
                  <input type="text" value={status} onChange={e=>{setStatus(e.target.value)}} />
                </label>
              </li>

                <button type="Submit">Create</button>
                <button onClick={() => {navigate("/")}}>Back</button>
            </form> 
        </div>
    </>
  );
}
