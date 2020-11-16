import React, {Component} from 'react';
import Search from './Search';
import Movies from './Movies';
import './App.css';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            movie: {},
            loading: false,
        }
    }

    searchMovies = async (text) => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=94c3fadb&s=${text}`)
        this.setState({
            movies: res.data.Search
        })
        
    }
    render() {
        return (
            <div className='app'>
                <Search searchMovies={this.searchMovies} />
                <Movies movies={this.state.movies} />
            </div>
        );
    }
}

export default App;
