import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router,
         Switch,
         Route,
        } from 'react-router-dom';
import Search from './Search';
import Movies from './Movies';
import Movie from './Movie';
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
        this.setState({ loading: true});
        const res = await axios.get(`https://www.omdbapi.com/?apikey=94c3fadb&s=${text}`);
        this.setState({
            movies: res.data.Search,
            loading: false
        });
    }

    getMovie = async (imdbID) => {
        this.setState({loading: true});
        const res = await axios.get(`https://www.omdbapi.com/?apikey=94c3fadb&plot=full&i=${imdbID}`);
        this.setState({
            movie: res.data,
            loading: false
        })
    }
    render() {
            return (
                <Router>
                    <div className='app'>
                        <Switch>
                            <Route exact path='/movie_api'>
                                <Fragment>
                                    <Search searchMovies={this.searchMovies} />
                                    <Movies movies={this.state.movies} loading={this.state.loading} />
                                </Fragment>
                            </Route>
                            <Route exact path='/movie_api/:imdbID' render={(r) => {
                                return <Movie {...r} getMovie={this.getMovie} movie={this.state.movie} loading={this.state.loading} />
                            }}/>
                        </Switch>
                    </div>
                </Router>
            );
    }
}

export default App;
