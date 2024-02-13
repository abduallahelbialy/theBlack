import React from 'react'
import gold from '../Components/Fackers/gold'
import '../Components/who/who.css'
const NumGold = () => {
  return (
    <React.Fragment>
    <div className='numgold'>
    <div className='container'>
    <div className='row'>
    <h1 className='text-center fs-5 mt-2'>عضوية ذهبية</h1>
    {gold.map((g)=>{
        return(
            <div className='d-flex gap-2 align-items-center goda' key={g.id}>
            <div className='img-god'>
            <img src={g.img} alt=''/>
            </div>
            <div className='text-gold'>
            <p>{g.des}</p>
            </div>
            </div>
        )
    })}
    </div>
    </div>
    </div>
      
    </React.Fragment>
  )
}

export default NumGold
