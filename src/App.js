import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading,setLoading] = useState(true)
  const [tourdata,setTourdata] = useState([])

  const removeTour = (id) => {
    const newTours = tourdata.filter((tour)=> tour.id !==id)
    setTourdata(newTours)
  }

  const fetchtours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTourdata(tours)
    }
    catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchtours()
  },[])

  if (loading){
    return <Loading/>
  }

  if(tourdata.length === 0)
  return (
    <main>
      <div className='title'>
        <h2>no more tours left</h2>
      <button className='btn' onClick={()=> fetchtours()}>refresh</button>
      </div>
    </main>
    )
return (
  <main>
  <Tours tourdata={tourdata} removetour ={removeTour}/>
  </main>
)
}

export default App
