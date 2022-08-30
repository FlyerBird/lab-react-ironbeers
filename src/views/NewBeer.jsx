import React, {useState} from 'react';
import Header from '../components/Header';
import axios from 'axios';

export default function NewBeer() {
    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewer_tips: "",
        attenuation_level:0,
        contributed_by: "",
    });

    const handleChange = (e) => {
        setNewBeer(prev => {
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const newBeerFromApi = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
          console.log(newBeerFromApi);
        } catch (error) {
          console.error(error);
        }
      };

    
  return (
    <div>
         <div className='header'>
            <Header />
        </div>

        <form className="newBeerForm" onSubmit={handleSubmit}>
        <div className='formSections'>
            <label>Name</label>
            <input type="text" name="name" value={newBeer.name} onChange={handleChange}/>
        </div>
        <div className='formSections'>
            <label>Tagline</label>
            <input type="text" name="tagline" value={newBeer.tagline} onChange={handleChange}/>
        </div>
        <div className='formSections'>
            <label>Description</label>
            <input className="descriptionInput"type="text" name="description" value={newBeer.description} onChange={handleChange}/>
        </div>
        <div className='formSections'>
            <label>First Brewed</label>
            <input type="text" name="first_brewed" value={newBeer.first_brewed} onChange={handleChange}/>
        </div>
        <div className='formSections'>
            <label>Brewer Tips</label>
            <input type="text" name="brewer_tips" value={newBeer.brewer_tips} onChange={handleChange}/>
        </div>
        <div className='formSections'>
            <label>Attenuation Level</label>
            <input type="number" name="attenuation_level" value={newBeer.attenuation_level} onChange={handleChange}/>
        </div>
        <div className='formSections'>
            <label>Contributed By</label>
            <input type="text" name="contributed_by" value={newBeer.contributed_by} onChange={handleChange}/>
        </div>
            <button className="addNewButton" type="submit">ADD NEW</button>
        </form>
    </div>
  )
}
