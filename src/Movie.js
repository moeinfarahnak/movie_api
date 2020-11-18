import React, { Component } from 'react'

export class Movie extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.imdbID);
        
    }
    render() {
        return (
            <div>
                plot:<p>{this.props.movie.Plot}</p>
                <img src={this.props.movie.Poster} alt='#' ></img>
                <div>
                    {this.props.movie.Title}
                    {this.props.movie.Genre}
                    {this.props.movie.Language}
                    {this.props.movie.Runtime}
                </div>
            </div>
        )
    }
}

export default Movie
