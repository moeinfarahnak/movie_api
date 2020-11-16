import React, { Component } from 'react'
import './MovieItem.css';

export class MovieItem extends Component {
    render() {
        const {Title, Poster, Type, Year, imdbID} = this.props.info;
    
        return (
            <div className='movie-item'>
                <img className='poster' src={Poster!=='N/A' ? Poster: 'no-image.png'} alt='#'></img>
                <div className='movie-info'>
                    <div>{Title}</div>
                    <div>{Year}</div>
                    <div>{Type}</div>
                    <div>{imdbID}</div>
                </div>
            </div>
        )
    }
}

export default MovieItem
