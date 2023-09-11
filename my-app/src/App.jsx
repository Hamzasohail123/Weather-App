import { Search} from './components/Search';
import { Result } from './components/Result';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState([]);

  // getting input value 
  const changeSearch = (value) => {
    setSearch(value)
  }

  // getting weather data using apis


  const searchWeatherHandler = () => {
    if(search !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)
      .then(
        (response)=>{
         // console.log(response.data);
         setWeather(response.data)
        }
      ) .catch(
        (error) => {
          console.log(error);
        }
      )
    }
    } 


 

  return (
    <>


   <div className='max-w-[1240px] mx-auto mt-2 p-5 '>
    <Search searchData={search} eventHandler={changeSearch} weatherHandler={searchWeatherHandler}/>
    <Result weatherData={weather}  />
    </div>



    </>
  )
}
