import { useState } from 'react'
import './App.css'

function App() {
  const [population, setPopulation] = useState();
  const [country, setCountry] = useState('India');
  const  getPopulation = async (e) => {
    setCountry(e.target.value)
    const response = await fetch(`https://restcountries.com/v2/name/${e.target.value}`,{
      
      headers: {  
        
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json'
      },
    })
    const json = await response.json();
    setPopulation(json[0].population)

  }

  return (
    <>
      {population && <>
         <label>Population of {country} is {population} </label>
      </>}
      <select name="selectedPoulation" className="form-select" aria-label="Default select example"
          onChange={e => getPopulation(e)}
          defaultValue="India"
        >
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Australia">Australia</option>
        </select>
    </>
  )
}

export default App
