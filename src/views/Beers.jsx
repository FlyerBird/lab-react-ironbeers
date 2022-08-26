import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';


export default function Beers() {

    const [beers, setBeers] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const dataFromApi = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
                setBeers(dataFromApi.data);
                console.log(dataFromApi)
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [])

  return (

    <div className='allApiBeers'>
    <div className='header'>
         <Header />
    </div>
        {beers && (beers.map(elem => {
            return (
                <div className='eachApiBeers' key={elem._id} >
                <div className='imgApiBeers'>
                    <img src={elem.image_url} alt={elem.name}/>
                </div>
                <div className='textApiBeers'>
                <h2>{elem.name}</h2>
                <p className='tagline'>{elem.tagline}</p>
                <p> <strong>Created by:</strong> {elem.contributed_by}</p>
                </div>

                </div>
            )
        }))}
        {!beers && <p>Loading...</p>}
    </div>
  )
}
