import React, { Component } from 'react';
import MovieItem from './MovieItem';
import './Movies.css';

export class Movies extends Component {
    render() {
        if(this.props.loading) {
            return <h1>Error</h1>
        } else{
            return (
                <div id='movies'>
                    {this.props.movies.map(movie => {
                        return <MovieItem info={movie} key={movie.imdbID}/>
                    })}
                </div>
            )
        }
    }
}

export default Movies
