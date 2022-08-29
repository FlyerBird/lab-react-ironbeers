import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

export default function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        const getRandomBeer = async () => {

            try {
                const randomFromAPi = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
                console.log(randomFromAPi)
                setRandomBeer(randomFromAPi.data)
            } catch (error) {
            }
        }
        getRandomBeer()
    }, [])


  return (
    <div>
        <div className='header'>
            <Header />
        </div>
    {!randomBeer && <p>Loading🍺</p>}
    {randomBeer && (
            <div className='singleBeer'>
                <div className='singleBeerDiv'>
                    <img src={randomBeer.image_url} alt={randomBeer.name} />
                </div>
                <div className='attenuation'>
                    <h2>{randomBeer.name}</h2>
                    <p>{randomBeer.attenuation_level}</p>
                </div>
                <div className='brewed'>
                    <h4>{randomBeer.tagline}</h4>
                    <p>{randomBeer.first_brewed}</p>
                </div>
                <p>{randomBeer.description}</p>
                <p className='contributor'>{randomBeer.contributed_by}</p>
            </div>

        )}

</div>
  )
}
