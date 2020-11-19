import React, { Component } from 'react';
import Spinner from './Spinner';
import './Movie.css';

export class Movie extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.imdbID);
        
    }
    render() {
        const info = this.props.movie
        if(this.props.loading) {
            return <Spinner />
        } else {
            return (
                <div style={{textAlign: "center"}}>
                    <h2>{info.Title}</h2>
                    <img src={info.Poster} alt='#' ></img>
                    <ul className='info-list'>
            <li><i className='fas fa-flag'></i> {info.Country}</li>
            <li><i className='fas fa-language'></i> {info.Language}</li>
            <li><i className='fas fa-clock'></i> {info.Runtime}</li>
            <li><i className='fas fa-folder'></i> {info.Genre}</li>
            <li><i className='fas fa-calendar-alt'></i> {info.Year}</li>
            <li><i className='fab fa-imdb'></i> {info.imdbRating}</li>
                        
                    </ul>
                    {info.Plot}
                </div>
            )
        } 
    }
}

export default Movie
