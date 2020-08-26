import React from 'react';
import './Navigation.styles.css';
import requests from '../requests';


const Navigation=({setSelectedOption})=> {
    return (
        <div className='navigation'>
            <h2 onClick={()=>setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchMysteryMovies)}>Mystery</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchWesternMovies)}>Western</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchAnimationMovies)}>Animation</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchTv)}>TV</h2>
        </div>
    );
}

export default Navigation;
