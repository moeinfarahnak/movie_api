import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './MovieItem.css';

export class MovieItem extends Component {
    render() {
        const {Title, Poster, Type, Year, imdbID} = this.props.info;
    
        return (
            <div className='movie-item'>
                <Link className='link' to={`/movie_api/${imdbID}`}>
                    <div className='poster' style={{backgroundImage:`url(${Poster})`}}></div>
                </Link>
                <div className='movie-info'>
                    <div className='movie-title'>{Title}<span> {Year}</span></div>
                </div>
            </div>
        )
    }
}

export default MovieItem
