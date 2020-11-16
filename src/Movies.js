import React, { Component } from 'react';
import MovieItem from './MovieItem';
import './Movies.css';

export class Movies extends Component {
    render() {
        return (
            <div id='movies'>
                {this.props.movies.map(movie => {
                    return <MovieItem info={movie} key={movie.imdbID}/>
                })}
            </div>
        )
    }
}

export default Movies
