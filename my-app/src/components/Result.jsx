import React from 'react'

export const Result = ({weatherData}) => {
  return (


    <div className='shadow-xl mt-3'>

       {
        weatherData.length !== 0
        ?
        <>
        <h2 className='text-4xl text-center'>{weatherData.name}</h2>
        <div className='flex justify-around my-3'>
            <div>max temp: {weatherData.main.temp_max} deg</div>
             <div>min temp: {weatherData.main.temp_min} deg</div>
        </div>
        <div className='flex justify-around my-3'>
        <div>icon</div>
        <div>weather type</div>
        </div>
        </>
        :
        <>
        <h1 className='text-center p-3'>please enter the city name</h1>
        </>
       }
        
    </div>
  )
}
