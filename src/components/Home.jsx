


import React from 'react';
import { Link } from 'react-router-dom';

import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

export default function Home() {
  return (
    <div className='home'>
        <Link className='allBeers' to="/beers"><img src={beersImg} alt=""/><p>All Beers</p></Link>
            
        <Link className='randomBeers' to="/random-beer"><img src={randomBeerImg} alt=""/><p>Random Beers </p></Link>

        <Link className='newBeer' to="/new-beer"><img src={newBeerImg} alt=""/><p>New Beer</p> </Link>
            
    </div>
  )
}

