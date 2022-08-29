import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function BeerDetail() {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        const getBeer = async () => {
            try {
                const singleBeerFromApi = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                console.log(singleBeerFromApi)
                setBeer(singleBeerFromApi.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBeer()
    }, [beerId])


  return (
    <div>
        <div className='header'>
            <Header />
        </div>

        {beer && (
                <div className='singleBeer'>
                    <div className='singleBeerDiv'>
                        <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className='attenuation'>
                        <h2>{beer.name}</h2>
                        <p>{beer.attenuation_level}</p>
                    </div>
                    <div className='brewed'>
                        <h4>{beer.tagline}</h4>
                        <p>{beer.first_brewed}</p>
                    </div>
                    <p>{beer.description}</p>
                    <p className='contributor'>{beer.contributed_by}</p>
                </div>

            )}

    </div>
  )
}
